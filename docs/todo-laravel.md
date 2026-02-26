# PHPantom — Laravel Support: Remaining Work

> Last updated: 2025-07-20

This document tracks bugs, known gaps, and missing features in
PHPantom's Laravel Eloquent support. For the general architecture and
virtual member provider design, see `ARCHITECTURE.md`.

---

## Known gaps (documented in tests)

### 1. Variable assignment from builder-forwarded static method in GTD

`$q = User::where(...)` then `$q->orderBy()` does not fully resolve for
go-to-definition because the variable resolution path
(`resolve_rhs_static_call`) finds `where()` on the raw `Task` class via
`resolve_method_return_types_with_args`, which calls
`resolve_class_fully` internally. The issue is that the returned Builder
type's methods are resolved, but go-to-definition then cannot trace back
to the declaring class in a Builder loaded through the chain. This
works for completion (which only needs the type) but not for GTD (which
needs the source location).

---

## Missing features

### 2. Factory support

`User::factory()->create()` is ubiquitous in Laravel test code. The
`factory()` static method returns a `HasFactory` trait method that
produces a factory instance. Resolving the chain requires:

1. Detecting the `HasFactory` trait on the model.
2. Resolving `factory()` to the model's corresponding Factory class
   (convention: `App\Models\User` → `Database\Factories\UserFactory`).
3. Resolving `create()` / `make()` on the factory to return the model.

This is medium complexity because it involves a naming convention
(model name → factory name) and cross-file resolution.

### 3. Closure parameter inference in collection pipelines

`$users->map(fn($u) => $u->...)` does not infer `$u` as the
collection's element type. This is a general generics/callable
inference problem, not Laravel-specific, but Laravel collection
pipelines are the most common place users encounter it.

### 4. Query scope chaining on Builder instances

Inside a scope method body, `$query->verified()` (calling another
scope) does not offer scope method completions. Scope methods are
synthesized on the Model class, not on the Builder class. The Builder
instance inside a scope body resolves to `Illuminate\Database\Eloquent\Builder`
which has no knowledge of the model's scopes.

**Possible fix:** When the Builder's `TModel` template parameter is
known (e.g., `Builder<User>`), load the concrete model and merge its
scope methods as instance methods on the resolved Builder. This
requires extending the virtual member system to also apply to
Builder instances, not just Model classes.

---

## Out of scope (and why)

| Item | Reason |
|------|--------|
| Container string aliases | Requires booting the application. Use `::class` references instead. |
| Facade `getFacadeAccessor()` with string aliases | Same problem. `@method` tags provide a workable fallback. |
| Blade templates | Large scope, separate project. |
| Model column types from DB/migrations | Unreasonable complexity. Require `@property` annotations (via ide-helper or hand-written). |
| Legacy Laravel versions | We target current Larastan-style annotations. Older code may degrade gracefully. |
| Application provider scanning | Low-value, high-complexity. |

---

## Philosophy (unchanged)

- **No application booting.** We never boot a Laravel application to
  resolve types.
- **No SQL/migration parsing.** Model column types are not inferred from
  database schemas or migration files.
- **Larastan-style hints preferred.** We expect relationship methods to be
  annotated in the style that Larastan expects. Fallback heuristics
  are best-effort.
- **Facades fall back to `@method`.** Facades whose `getFacadeAccessor()`
  returns a string alias cannot be resolved. `@method` tags on facade
  classes provide completion without template intelligence.