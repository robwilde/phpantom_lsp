# PHPantom — Refactoring

Technical debt and internal cleanup tasks. This document is the first
item in every sprint. The sprint cannot begin feature work until this
gate is clear.

> **Housekeeping:** When a task is completed, remove it from this
> document entirely. Do not strike through or mark as done.

## Sprint-opening gate process

Every sprint lists "Clear refactoring gate" as its first item,
linking here. When an agent starts a sprint, follow these steps:

1. **Resolve outstanding items.** If this document contains any tasks,
   work through them. Remove each one as it is completed.
2. **Request a fresh session.** After completing refactoring work,
   stop and ask the user to start a new session. Analysis must happen
   in a session where no refactoring work was performed (since loading
   `AGENTS.md`). This ensures the analyst is not biased by the work
   just done.
3. **Analyze (fresh session only).** In a fresh session with no
   outstanding items, review the codebase for technical debt that
   would hinder the current sprint's tasks. Read the sprint items,
   scan the relevant modules, and decide whether any structural
   cleanup should happen first. If issues are found, add them to this
   document, work through them, and go back to step 2.
4. **Declare the gate clear.** When a fresh-session analysis finds no
   issues worth adding, remove the "Clear refactoring gate" row from
   the current sprint table. The sprint is now open for feature work.

A "fresh session" means one where no refactoring edits have been made
since the session started. The point is to get an unbiased second look
at the codebase after cleanup, not to rubber-stamp work just completed
in the same context.

### What belongs here

Only add items that would actively hinder the upcoming sprint's work
or that have accumulated enough friction to justify a focused cleanup
pass. Small fixes that can be done inline during feature work should
just be done inline. Items do not need to be scoped to the sprint's
feature area, but they should be completable in reasonable time (not
multi-week rewrites that would stall the sprint indefinitely).

---

## Consolidate position encoding to UTF-16

**Effort: Medium**

There are 10 different `offset_to_position` / `position_to_offset`
functions across the codebase using 3 different column-counting
strategies. Only 2 of them (`diagnostics/mod.rs::byte_offset_to_position`
and `code_actions/replace_deprecated.rs::offset_from_position`)
correctly count UTF-16 code units, which is what the LSP spec requires.
The rest count Unicode scalar values (Rust `char`s), which diverges
from UTF-16 for characters outside the Basic Multilingual Plane (emoji,
mathematical symbols).

The most widely used function, `util::offset_to_position`, increments
the column by 1 per `char` instead of by `ch.len_utf16()`. Its inverse
`util::position_to_byte_offset` has a comment claiming UTF-16 awareness
but uses `.char_indices().nth()` which is char-based.

In practice this is invisible for ASCII-only PHP, but any file with
emoji or supplementary Unicode characters in comments or strings will
produce wrong positions for all features except diagnostics.

**Functions to fix or replace:**

| Function | File | Strategy |
|---|---|---|
| `offset_to_position` | `util.rs` L214 | char (wrong) |
| `position_to_byte_offset` | `util.rs` L244 | char (wrong) |
| `position_to_offset` | `util.rs` L466 | delegates to above |
| `position_to_offset_ca` | `code_actions/change_visibility.rs` L241 | char (wrong) |
| `position_to_offset_ud` | `code_actions/update_docblock.rs` L1351 | char (wrong) |
| `position_to_offset` | `code_actions/import_class.rs` L413 | char (wrong) |
| `position_to_char_offset` | `completion/named_args.rs` L101 | char (wrong) |
| `lsp_position_to_byte_offset` | `code_actions/remove_unused_import.rs` L822 | byte (wrong, test-only) |
| `byte_offset_to_position` | `diagnostics/mod.rs` L762 | UTF-16 (correct) |
| `offset_from_position` | `code_actions/replace_deprecated.rs` L490 | UTF-16 (correct) |

**Fix:** Create two canonical functions in `util.rs` using UTF-16
counting (`ch.len_utf16()`). Delete all duplicates and have every
module import from `util`. The two correct implementations in
`diagnostics/mod.rs` and `replace_deprecated.rs` can serve as
reference.

---

## Move `@deprecated` diagnostic from fast phase to slow phase

**Effort: Low**

`collect_deprecated_diagnostics` is called in `collect_fast_diagnostics`
(`src/diagnostics/mod.rs` L135), but it calls `find_or_load_class()`,
`resolve_variable_subject()`, and `resolve_class_fully_cached()`.
These can trigger disk I/O and full inheritance merging, which is
exactly the kind of work the Phase 2 (slow) category was designed for.
This blocks the "instant" Phase 1 push that should only contain cheap
checks (syntax errors, unused imports).

**Fix:** Move the `collect_deprecated_diagnostics` call from
`collect_fast_diagnostics` to `collect_slow_diagnostics`.

**File:** `src/diagnostics/mod.rs` L133-137.

---

## Wrap external tool execution in `spawn_blocking`

**Effort: Low**

The `formatting()` handler in `server.rs` is `async`, but it calls
`formatting::execute_strategy` synchronously, which spawns an external
process and busy-waits up to 10 seconds in `run_command_with_timeout`.
This blocks a Tokio runtime worker thread, starving other LSP requests
(hover, completion) while the formatter runs.

The same pattern exists in the PHPStan integration, but there it is
already correctly wrapped in `spawn_blocking`. The formatting handler
should follow the same pattern.

**Fix:** Wrap the `execute_strategy` call in
`tokio::task::spawn_blocking(...)`.

**File:** `src/server.rs` (formatting handler, around L740).

---

## Add code comment explaining Phase 1 push in pull-diagnostics mode

**Effort: Low**

When the client supports pull diagnostics, the server still pushes
Phase 1 (fast) diagnostics via `publish_diagnostics`. This is
intentional for performance: Phase 1 gives the user instant feedback
(syntax errors, unused imports) without waiting for the pull round-trip,
while the slower Phase 2 results are delivered via pull after
`workspace/diagnostic/refresh`.

This design decision is not documented in the code. Add a comment in
`run_diagnostic_cycle` (around L253 in `src/diagnostics/mod.rs`)
explaining why Phase 1 is pushed even in pull mode, so future
maintainers do not "fix" it by removing the push.