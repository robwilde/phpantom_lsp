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

#### B4. Variable reassignment loses type when parameter name is reused

| | |
|---|---|
| **Impact** | Medium |
| **Effort** | Medium |

When a method parameter is reassigned mid-body, PHPantom sometimes
continues to use the parameter's original type instead of the new
assignment's type.

**Observed:** In `FileUploadService::uploadFile()`, the `$file`
parameter is typed `UploadedFile`. Later, `$file = $result->getFile()`
reassigns it to a different type. PHPantom still resolves `$file->id`
and `$file->name` against `UploadedFile` instead of the model returned
by `getFile()`. This produces 2 false-positive "not found" diagnostics.

**Fix:** The variable resolution pipeline should prefer the most recent
assignment when multiple definitions exist for the same variable name
within the same scope at the cursor offset.

---

#### B8. Stub parser does not handle `#[PhpStormStubsElementAvailable]` attributes

| | |
|---|---|
| **Impact** | Low |
| **Effort** | Low |

The regex-based stub parser in `classmap_scanner.rs` does not strip
`#[PhpStormStubsElementAvailable]` attributes from function signatures.
When a stub uses this attribute to declare a parameter that only exists
in certain PHP versions, the parser counts it as a separate required
parameter alongside the variadic replacement, inflating the required
argument count.

For example, `array_push` is declared as:

```
function array_push(
    array &$array,
    #[PhpStormStubsElementAvailable(from: '5.3', to: '7.2')] $values,
    mixed ...$values
): int {}
```

The parser sees three parameters (`$array`, `$values`,
`...$values`) and counts two as required, when the correct required
count is one (`$array` only, since `...$values` is variadic).

This affects roughly 230 stub functions. The argument count checker
currently works around the issue with an overload map derived from
PHPStan's `functionMap.php` (see `overload_min_args()` in
`argument_count.rs`). The proper fix is to make the stub parser
ignore parameters annotated with `#[PhpStormStubsElementAvailable]`
when a variadic parameter of the same name follows.