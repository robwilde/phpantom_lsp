# PHPantom — Bug Fixes

Known bugs and incorrect behaviour. These are distinct from feature
requests — they represent cases where existing functionality produces
wrong results. Bugs should generally be fixed before new features at
the same impact tier.

Items are ordered by **impact** (descending), then **effort** (ascending)
within the same impact tier.

| Label      | Scale                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Impact** | **Critical**, **High**, **Medium-High**, **Medium**, **Low-Medium**, **Low**                                           |
| **Effort** | **Low** (≤ 1 day), **Medium** (2-5 days), **Medium-High** (1-2 weeks), **High** (2-4 weeks), **Very High** (> 1 month) |

---

#### B1. Diagnostic subject cache scoped to class, not method

| | |
|---|---|
| **Impact** | Critical |
| **Effort** | Medium |

The `SubjectCacheKey` in `unknown_members.rs` uses `(subject_text,
access_kind, enclosing_class)` as the cache key. Two methods in the
same class that both use `$order->` share the same cache entry, even
when `$order` has a completely different type in each method. The first
resolution wins and all subsequent accesses in other methods get the
wrong type.

This accounts for roughly 68% of false-positive `unknown_member`
diagnostics in heavily-typed codebases (confirmed across a ~2 500 file
Laravel project). The same bug affects `argument_count` diagnostics
via the shared `DIAG_SUBJECT_CACHE`.

The underlying `resolve_target_classes` already receives a
`cursor_offset` that provides method-level scoping, but the cache sits
in front of it and short-circuits with the stale result.

**Reproduction:** any class with two methods that have a same-named
parameter of different types.

```php
class Service {
    public function handleA(OrderA $order): void {
        $order->propOnA(); // ← reported as missing on OrderB
    }
    public function handleB(OrderB $order): void {
        $order->propOnB(); // resolves fine (cached first)
    }
}
```

**Fix direction:** include the enclosing method (or at minimum the
`cursor_offset` range of the enclosing function body) in the cache key
so that each method scope gets its own resolution.

---

#### B2. Trait `$this` member access produces false positives

| | |
|---|---|
| **Impact** | High |
| **Effort** | Medium |

When a trait method accesses `$this->prop` or `$this->method()`, the
diagnostic resolver only sees the trait's own members. It does not
consider the classes that `use` the trait, so it emits "not found"
warnings for members that exist on every host class.

This accounts for roughly 14% of false-positive `unknown_member`
diagnostics in the same triage run.

```php
trait LogsErrors {
    public function logError(): void {
        $this->model;       // ← "Property 'model' not found on trait"
        $this->eventType;   // ← same
    }
}

class ImportJob {
    use LogsErrors;
    public string $model = 'Product';
    public string $eventType = 'import';
}
```

**Fix direction:** suppress `unknown_member` diagnostics for `$this->`
inside trait methods, or resolve `$this` to the union of all classes
that `use` the trait (at least within the same file or project).

---

#### B3. Type narrowing missing in `&&` expressions

| | |
|---|---|
| **Impact** | Medium |
| **Effort** | Low |

`instanceof` checks inside `&&` chains do not narrow the variable type
for subsequent operands in the same expression. Narrowing already works
inside `if` bodies, but the `&&` short-circuit path is not handled.

```php
// Works: narrowing inside if body
if ($e instanceof QueryException) {
    $e->errorInfo; // ✓ resolved
}

// Broken: narrowing inside && operand
$e instanceof QueryException && $e->errorInfo; // ← "not found on Throwable"
```

**Fix direction:** when walking `&&` (logical AND) expressions,
propagate `instanceof` narrowing from the left operand to the right
operand, the same way it is already propagated into `if` bodies.