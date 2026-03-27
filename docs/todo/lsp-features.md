# PHPantom — LSP Features

Items are ordered by **impact** (descending), then **effort** (ascending)
within the same impact tier.

| Label      | Scale                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Impact** | **Critical**, **High**, **Medium-High**, **Medium**, **Low-Medium**, **Low**                                           |
| **Effort** | **Low** (≤ 1 day), **Medium** (2-5 days), **Medium-High** (1-2 weeks), **High** (2-4 weeks), **Very High** (> 1 month) |

---

## F2. Partial result streaming via `$/progress`

**Impact: Medium · Effort: Medium-High**

The LSP spec (3.17) allows requests that return arrays — such as
`textDocument/implementation`, `textDocument/references`,
`workspace/symbol`, and even `textDocument/completion` — to stream
incremental batches of results via `$/progress` notifications when both
sides negotiate a `partialResultToken`. The final RPC response then
carries `null` (all items were already sent through progress).

This would let PHPantom deliver the _first_ useful results almost
instantly instead of blocking until every source has been scanned.

### Streaming between existing phases

`find_implementors` already runs five sequential phases (see
`docs/ARCHITECTURE.md` § Go-to-Implementation):

1. **Phase 1 — ast_map** (already-parsed classes in memory) — essentially
   free. Flush results immediately.
2. **Phase 2 — class_index** (FQN → URI entries not yet in ast_map) —
   loads individual files. Flush after each batch.
3. **Phase 3 — classmap files** (Composer classmap, user + vendor mixed)
   — iterates unique file paths, applies string pre-filter, parses
   matches. This is the widest phase and the best candidate for
   within-phase streaming (see below).
4. **Phase 4 — embedded stubs** (string pre-filter → lazy parse) — flush
   after stubs are checked.
5. **Phase 5 — PSR-4 directory walk** (user code only, catches files not
   in the classmap) — disk I/O + parse per file, good candidate for
   per-file streaming.

Each phase boundary is a natural point to flush a `$/progress` batch,
so the editor starts populating the results list while heavier phases
are still running.

### Prioritising user code within Phase 3

Phase 3 iterates the Composer classmap, which contains both user and
vendor entries. Currently they are processed in arbitrary order. A
simple optimisation: partition classmap file paths into user paths
(under PSR-4 roots from `composer.json` `autoload` / `autoload-dev`)
and vendor paths (everything else, typically under `vendor/`), then
process user paths first. This way the results most relevant to the
developer arrive before vendor matches, even within a single phase.

### Granularity options

- **Per-phase batches** (simplest) — one `$/progress` notification at
  each of the five phase boundaries listed above.
- **Per-file streaming** — within Phases 3 and 5, emit results as each
  file is parsed from disk instead of waiting for the entire phase to
  finish. Phase 3 can iterate hundreds of classmap files and Phase 5
  recursively walks PSR-4 directories, so per-file flushing would
  significantly improve perceived latency for large projects.
- **Adaptive batching** — collect results for a short window (e.g. 50 ms)
  then flush, balancing notification overhead against latency.

### Applicable requests

| Request                       | Benefit                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------- |
| `textDocument/implementation` | Already scans five phases; each phase's matches can be streamed                 |
| `textDocument/references`     | Will need full-project scanning; streaming is essential                         |
| `workspace/symbol`            | Searches every known class/function; early batches feel instant                 |
| `textDocument/completion`     | Less critical (usually fast), but long chains through vendor code could benefit |

### Implementation sketch

1. Check whether the client sent a `partialResultToken` in the request
   params.
2. If yes, create a `$/progress` sender. After each scan phase (or
   per-file, depending on granularity), send a
   `ProgressParams { token, value: [items...] }` notification.
3. Return `null` as the final response.
4. If no token was provided, fall back to the current behaviour: collect
   everything, return once.

---

## F3. Incremental text sync

**Impact: Low-Medium · Effort: Medium**

PHPantom uses `TextDocumentSyncKind::FULL`, meaning every
`textDocument/didChange` notification sends the entire file content.
Switching to `TextDocumentSyncKind::INCREMENTAL` means the client sends
only the changed range (line/column start, line/column end, replacement
text), reducing IPC bandwidth for large files.

The practical benefit is bounded: Mago requires a full re-parse of the
file regardless of how the change was received, so the saving is purely
in the data transferred over the IPC channel. For files under ~1000
lines this is negligible. For very large files (5000+ lines, common in
legacy PHP), sending 200KB on every keystroke can become noticeable.

**Implementation:**

1. **Change the capability** — set `text_document_sync` to
   `TextDocumentSyncKind::INCREMENTAL` in `ServerCapabilities`.

2. **Apply diffs** — in the `did_change` handler, apply each
   `TextDocumentContentChangeEvent` to the stored file content string.
   The events contain a `range` (start/end position) and `text`
   (replacement). Convert positions to byte offsets and splice.

3. **Re-parse** — after applying all change events, re-parse the full
   file with Mago as today. No incremental parsing needed initially.

**Relationship with partial result streaming (F2):** These two features
address different performance axes. Incremental text sync reduces the
cost of _inbound_ data (client to server per keystroke). Partial result
streaming (F2) reduces the _perceived latency_ of _outbound_ results
(server to client for large result sets). They are independent and can
be implemented in either order, but if both are planned, incremental
text sync is lower priority because full-file sync is rarely the
bottleneck in practice. Partial result streaming has a more immediate
user-visible impact for go-to-implementation, find references, and
workspace symbols on large codebases.

---

## F4. `codeAction/resolve` — deferred edit computation and diagnostic clearing

**Impact: High · Effort: Medium**

All code actions currently pre-compute their full `WorkspaceEdit` in the
`textDocument/codeAction` handler. The editor sends this request every
time the cursor moves onto a line with a diagnostic or when the user
opens the lightbulb menu. Every action computes its text edits upfront,
even though the user may never pick any of them. For complex actions
like "Extract function" this involves full AST analysis, variable flow
tracking, and type inference — all thrown away if the user just moves
the cursor to the next line.

The LSP spec supports a two-phase model via `codeAction/resolve`:

1. **Phase 1** (`textDocument/codeAction`): Return lightweight
   `CodeAction` objects with `title`, `kind`, `diagnostics`, and an
   opaque `data` field — but **no `edit`**. This is cheap.
2. **Phase 2** (`codeAction/resolve`): When the user actually picks an
   action, the editor sends it back. The server fills in the `edit`
   field. This is where the expensive work happens.

This also solves a second problem: PHPStan quickfixes (add `@throws`,
add `#[Override]`, ignore) currently rely on fragile content-scanning
heuristics in `is_stale_phpstan_diagnostic` to clear the diagnostic
after the fix is applied. The stale detection runs on every `didChange`
and guesses whether the user's edit resolved the issue by inspecting the
new file content. This is both wasteful (runs on every keystroke, not
just after a code action) and fragile (a manual edit that happens to
match the pattern also clears the diagnostic). With `codeAction/resolve`
the server knows exactly when the user picks a fix and can eagerly
remove the specific diagnostic from the cache, then push updated
diagnostics immediately — no guessing required.

### What changes

**1. Enable resolve in capabilities:**

```rust
code_action_provider: Some(CodeActionProviderCapability::Options(
    CodeActionOptions {
        resolve_provider: Some(true),  // was None
        ..
    },
)),
```

**2. Split each code action into two phases:**

Phase 1 (`collect_*_actions`): Build a `CodeAction` with `title`,
`kind`, `diagnostics`, `is_preferred`, and a `data` field containing
enough context to reconstruct the edit later (e.g. the diagnostic
identifier, the file URI, the cursor position, the method name).

Phase 2 (`resolve`): Deserialize `data`, compute the `WorkspaceEdit`,
and return the completed `CodeAction`. For PHPStan quickfixes, also
remove the matched diagnostic from `phpstan_last_diags` and push
updated diagnostics to the client.

**3. Remove stale detection heuristics:**

Delete the per-identifier content-scanning branches from
`is_stale_phpstan_diagnostic` (`throws.unusedType`,
`missingType.checkedException`, `method.missingOverride`). The resolve
handler clears the diagnostic directly, so the heuristic is no longer
needed. Keep the `@phpstan-ignore` check since that covers manual edits
unrelated to code actions.

### Migration order

1. Add a `codeAction/resolve` handler in `server.rs`.
2. Migrate PHPStan quickfixes first (add `@throws`, remove `@throws`,
   add `#[Override]`, ignore). These benefit the most because they
   currently rely on stale detection. Move edit computation into resolve
   and add direct diagnostic cache clearing.
3. Migrate expensive refactoring actions (extract function/method,
   extract variable, inline variable). These benefit from deferred
   computation.
4. Evaluate remaining actions (change visibility, promote constructor
   param, generate constructor, implement methods, import class, remove
   unused import, update docblock, replace deprecated). These are
   generally fast enough that pre-computing the edit is not wasteful.
   If profiling shows they are cheap (sub-millisecond), they can stay
   as-is — the spec allows mixing resolved and pre-computed actions in
   the same response.
5. Remove the stale detection branches from
   `is_stale_phpstan_diagnostic` once all PHPStan actions use resolve.

### Data field design

Each action's `data` field should be a JSON object with at least:

- `action_kind`: a string identifying which action this is (e.g.
  `"phpstan.addOverride"`, `"refactor.extractFunction"`)
- `uri`: the file URI
- `version`: the document version at the time the action was offered
  (so the resolve handler can detect if the file changed and bail out
  gracefully)

Action-specific fields carry whatever context is needed to recompute the
edit without re-scanning the entire file. For example, the
`phpstan.addOverride` action would include the diagnostic line number
and identifier.
