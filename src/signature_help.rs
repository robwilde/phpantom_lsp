//! Signature help (`textDocument/signatureHelp`).
//!
//! When the cursor is inside the parentheses of a function or method call,
//! this module resolves the callable and returns its signature (parameter
//! names, types, and return type) along with the index of the parameter
//! currently being typed.
//!
//! The implementation reuses the call-expression detection helpers from
//! `named_args` and the same type-resolution pipeline that powers
//! completion and hover.

use tower_lsp::lsp_types::*;

use crate::Backend;
use crate::completion::named_args::{
    extract_call_expression, find_enclosing_open_paren, position_to_char_offset,
    split_args_top_level,
};
use crate::completion::resolver::ResolutionCtx;
use crate::types::*;

/// Information about a signature help call site, extracted from the source
/// text around the cursor.
struct CallSiteContext {
    /// The call expression in a format suitable for resolution (same
    /// format as [`NamedArgContext::call_expression`]).
    call_expression: String,
    /// Zero-based index of the parameter the cursor is currently on,
    /// determined by counting top-level commas before the cursor.
    active_parameter: u32,
}

// ─── Detection ──────────────────────────────────────────────────────────────

/// Detect whether the cursor is inside a function/method call and extract
/// the call expression and active parameter index.
///
/// Returns `None` if the cursor is not inside call parentheses.
fn detect_call_site(content: &str, position: Position) -> Option<CallSiteContext> {
    let chars: Vec<char> = content.chars().collect();
    let cursor = position_to_char_offset(&chars, position)?;

    // Find the enclosing open paren.  We search backward from the cursor
    // position itself (not from a word-start like named-arg detection does)
    // because signature help should fire even when the cursor is right
    // after a comma or the open paren with no identifier typed yet.
    let open_paren = find_enclosing_open_paren(&chars, cursor)?;

    // Extract the call expression before `(`.
    let call_expr = extract_call_expression(&chars, open_paren)?;
    if call_expr.is_empty() {
        return None;
    }

    // Count the active parameter by splitting the text between `(` and the
    // cursor into top-level comma-separated segments.
    let args_text: String = chars[open_paren + 1..cursor].iter().collect();
    let segments = split_args_top_level(&args_text);
    // `split_args_top_level` returns one segment per completed comma-separated
    // argument (it omits a trailing empty segment).  The number of commas
    // equals the number of segments (each segment ended with a comma, except
    // possibly the last one which is the argument currently being typed).
    //
    // If the text ends with a comma (i.e. the cursor is right after `,`),
    // the split will have consumed it and the cursor is on the *next*
    // parameter.  Otherwise, the cursor is still on the segment after the
    // last comma.
    let trimmed = args_text.trim_end();
    let active = if trimmed.is_empty() {
        0
    } else if trimmed.ends_with(',') {
        segments.len() as u32
    } else {
        // The user is in the middle of typing an argument.  The number of
        // completed args equals segments.len() - 1 (last segment is the
        // current one) + 1 for the current, but we want a 0-based index
        // so it's segments.len() - 1.  However split_args_top_level may
        // or may not include the trailing segment.  Counting commas
        // directly is more reliable.
        count_top_level_commas(&chars, open_paren + 1, cursor)
    };

    Some(CallSiteContext {
        call_expression: call_expr,
        active_parameter: active,
    })
}

/// Count commas at nesting depth 0 between `start` (inclusive) and `end`
/// (exclusive) in a char slice, skipping nested parens/brackets and
/// string literals.
fn count_top_level_commas(chars: &[char], start: usize, end: usize) -> u32 {
    let mut count = 0u32;
    let mut depth = 0i32;
    let mut i = start;

    while i < end {
        match chars[i] {
            '(' | '[' => depth += 1,
            ')' | ']' => depth -= 1,
            ',' if depth == 0 => count += 1,
            '\'' | '"' => {
                let q = chars[i];
                i += 1;
                while i < end {
                    if chars[i] == q {
                        let mut backslashes = 0u32;
                        let mut k = i;
                        while k > start && chars[k - 1] == '\\' {
                            backslashes += 1;
                            k -= 1;
                        }
                        if backslashes.is_multiple_of(2) {
                            break;
                        }
                    }
                    i += 1;
                }
            }
            _ => {}
        }
        i += 1;
    }

    count
}

// ─── Signature building ─────────────────────────────────────────────────────

/// Format a single parameter for the signature label.
fn format_param_label(param: &ParameterInfo) -> String {
    let mut parts = Vec::new();
    if let Some(ref th) = param.type_hint {
        parts.push(th.clone());
    }
    if param.is_variadic {
        parts.push(format!("...{}", param.name));
    } else if param.is_reference {
        parts.push(format!("&{}", param.name));
    } else {
        parts.push(param.name.clone());
    }
    parts.join(" ")
}

/// Build a `SignatureInformation` from a callable's metadata.
fn build_signature(
    label_prefix: &str,
    params: &[ParameterInfo],
    return_type: Option<&str>,
) -> SignatureInformation {
    // Build the full label: `prefix(param1, param2, ...): returnType`
    let param_labels: Vec<String> = params.iter().map(format_param_label).collect();
    let params_str = param_labels.join(", ");
    let ret = return_type.map(|r| format!(": {}", r)).unwrap_or_default();
    let label = format!("{}({}){}", label_prefix, params_str, ret);

    // Build ParameterInformation using label offsets.  The offsets are
    // byte offsets into the label string (UTF-16 code unit offsets are
    // also accepted, but since PHP identifiers are ASCII the byte
    // offsets match).
    let mut param_infos = Vec::with_capacity(params.len());
    // The parameters start right after the `(`.
    let params_start = label_prefix.len() + 1; // +1 for `(`
    let mut offset = params_start;

    for (idx, pl) in param_labels.iter().enumerate() {
        let start = offset as u32;
        let end = (offset + pl.len()) as u32;
        param_infos.push(ParameterInformation {
            label: ParameterLabel::LabelOffsets([start, end]),
            documentation: None,
        });
        // Move past this parameter label and the separator `, `.
        offset += pl.len();
        if idx < param_labels.len() - 1 {
            offset += 2; // ", "
        }
    }

    SignatureInformation {
        label,
        documentation: None,
        parameters: Some(param_infos),
        active_parameter: None,
    }
}

// ─── Resolution ─────────────────────────────────────────────────────────────

/// Resolved callable information ready to be turned into a
/// `SignatureHelp` response.
struct ResolvedCallable {
    /// Human-readable label prefix (e.g. `"App\\Service::process"`).
    label_prefix: String,
    /// The parameters of the callable.
    parameters: Vec<ParameterInfo>,
    /// Optional return type string.
    return_type: Option<String>,
}

impl Backend {
    /// Handle a `textDocument/signatureHelp` request.
    ///
    /// Returns `Some(SignatureHelp)` when the cursor is inside a
    /// function or method call and the callable can be resolved, or
    /// `None` otherwise.
    pub(crate) fn handle_signature_help(
        &self,
        uri: &str,
        content: &str,
        position: Position,
    ) -> Option<SignatureHelp> {
        let site = detect_call_site(content, position)?;
        let ctx = self.file_context(uri);

        // Try resolving with the current (possibly broken) AST first.
        if let Some(result) = self.resolve_signature(&site, content, position, &ctx) {
            return Some(result);
        }

        // If resolution failed, the parser may have choked on
        // incomplete code (e.g. an unclosed `(`).  Patch the content
        // by inserting `);` at the cursor position so the class body
        // becomes syntactically valid, then re-parse and retry.
        let patched = Self::patch_content_for_signature(content, position);
        if patched != content {
            let patched_classes = self.parse_php(&patched);
            if !patched_classes.is_empty() {
                let patched_ctx = FileContext {
                    classes: patched_classes,
                    use_map: ctx.use_map.clone(),
                    namespace: ctx.namespace.clone(),
                };
                if let Some(result) =
                    self.resolve_signature(&site, &patched, position, &patched_ctx)
                {
                    return Some(result);
                }
            }
        }

        None
    }

    /// Resolve the call expression to a `SignatureHelp` using the given
    /// file context and content.
    fn resolve_signature(
        &self,
        site: &CallSiteContext,
        content: &str,
        position: Position,
        ctx: &FileContext,
    ) -> Option<SignatureHelp> {
        let resolved = self.resolve_callable(&site.call_expression, content, position, ctx)?;
        let sig = build_signature(
            &resolved.label_prefix,
            &resolved.parameters,
            resolved.return_type.as_deref(),
        );
        Some(SignatureHelp {
            signatures: vec![sig],
            active_signature: Some(0),
            active_parameter: Some(clamp_active_param(
                site.active_parameter,
                &resolved.parameters,
            )),
        })
    }

    /// Resolve a call expression string to the callable's metadata.
    fn resolve_callable(
        &self,
        expr: &str,
        content: &str,
        position: Position,
        ctx: &FileContext,
    ) -> Option<ResolvedCallable> {
        let class_loader = self.class_loader(ctx);
        let function_loader_cl = self.function_loader(ctx);
        let cursor_offset = Self::position_to_offset(content, position);
        let current_class = Self::find_class_at_offset(&ctx.classes, cursor_offset);

        // ── Constructor: `new ClassName` ─────────────────────────────
        if let Some(class_name) = expr.strip_prefix("new ") {
            let class_name = class_name.trim();
            let ci = class_loader(class_name)?;
            let merged = Self::resolve_class_fully(&ci, &class_loader);
            let ctor = merged.methods.iter().find(|m| m.name == "__construct")?;
            let fqn = format_fqn(&merged.name, &merged.file_namespace);
            return Some(ResolvedCallable {
                label_prefix: fqn,
                parameters: ctor.parameters.clone(),
                return_type: ctor.return_type.clone(),
            });
        }

        // ── Instance method: `$subject->method` ─────────────────────
        if let Some(pos) = expr.rfind("->") {
            let subject = &expr[..pos];
            let method_name = &expr[pos + 2..];

            let owner_classes: Vec<ClassInfo> =
                if subject == "$this" || subject == "self" || subject == "static" {
                    current_class.cloned().into_iter().collect()
                } else if subject.starts_with('$') {
                    let rctx = ResolutionCtx {
                        current_class,
                        all_classes: &ctx.classes,
                        content,
                        cursor_offset,
                        class_loader: &class_loader,
                        function_loader: Some(&function_loader_cl),
                    };
                    Self::resolve_target_classes(subject, crate::AccessKind::Arrow, &rctx)
                } else {
                    vec![]
                };

            for owner in &owner_classes {
                let merged = Self::resolve_class_fully(owner, &class_loader);
                if let Some(method) = merged
                    .methods
                    .iter()
                    .find(|m| m.name.eq_ignore_ascii_case(method_name))
                {
                    let owner_fqn = format_fqn(&merged.name, &merged.file_namespace);
                    return Some(ResolvedCallable {
                        label_prefix: format!("{}::{}", owner_fqn, method.name),
                        parameters: method.parameters.clone(),
                        return_type: method.return_type.clone(),
                    });
                }
            }
            return None;
        }

        // ── Static method: `ClassName::method` ──────────────────────
        if let Some(pos) = expr.rfind("::") {
            let class_part = &expr[..pos];
            let method_name = &expr[pos + 2..];

            let owner_class = if class_part == "self" || class_part == "static" {
                current_class.cloned()
            } else if class_part == "parent" {
                current_class
                    .and_then(|cc| cc.parent_class.as_ref())
                    .and_then(|p| class_loader(p))
            } else {
                class_loader(class_part)
            };

            let owner = owner_class?;
            let merged = Self::resolve_class_fully(&owner, &class_loader);
            let method = merged
                .methods
                .iter()
                .find(|m| m.name.eq_ignore_ascii_case(method_name))?;
            let owner_fqn = format_fqn(&merged.name, &merged.file_namespace);
            return Some(ResolvedCallable {
                label_prefix: format!("{}::{}", owner_fqn, method.name),
                parameters: method.parameters.clone(),
                return_type: method.return_type.clone(),
            });
        }

        // ── Standalone function: `functionName` ─────────────────────
        let func = self.resolve_function_name(expr, &ctx.use_map, &ctx.namespace)?;
        let fqn = if let Some(ref ns) = func.namespace {
            format!("{}\\{}", ns, func.name)
        } else {
            func.name.clone()
        };
        Some(ResolvedCallable {
            label_prefix: fqn,
            parameters: func.parameters.clone(),
            return_type: func.return_type.clone(),
        })
    }

    /// Insert `);` at the cursor position so that an unclosed call
    /// expression becomes syntactically valid.
    ///
    /// This is the same patching strategy used by named-argument
    /// completion (see `handler::patch_content_at_cursor`).
    fn patch_content_for_signature(content: &str, position: Position) -> String {
        let line_idx = position.line as usize;
        let col = position.character as usize;
        let mut result = String::with_capacity(content.len() + 2);

        for (i, line) in content.lines().enumerate() {
            if i == line_idx {
                let byte_col = line
                    .char_indices()
                    .nth(col)
                    .map(|(idx, _)| idx)
                    .unwrap_or(line.len());
                result.push_str(&line[..byte_col]);
                result.push_str(");");
                result.push_str(&line[byte_col..]);
            } else {
                result.push_str(line);
            }
            result.push('\n');
        }

        // Remove the trailing newline we may have added if the original
        // content did not end with one.
        if !content.ends_with('\n') && result.ends_with('\n') {
            result.pop();
        }

        result
    }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/// Build a fully-qualified name from a short name and optional namespace.
fn format_fqn(name: &str, namespace: &Option<String>) -> String {
    if let Some(ns) = namespace {
        format!("{}\\{}", ns, name)
    } else {
        name.to_string()
    }
}

/// Clamp the active parameter index so it doesn't exceed the parameter
/// count.  For variadic parameters, the index stays on the last parameter
/// even when the user types additional arguments.
fn clamp_active_param(active: u32, params: &[ParameterInfo]) -> u32 {
    if params.is_empty() {
        return 0;
    }
    let last = (params.len() - 1) as u32;
    active.min(last)
}

// ─── Tests ──────────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;

    // ── detect_call_site ────────────────────────────────────────────

    #[test]
    fn detect_simple_function_call() {
        let content = "<?php\nfoo(";
        let pos = Position {
            line: 1,
            character: 4,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "foo");
        assert_eq!(site.active_parameter, 0);
    }

    #[test]
    fn detect_second_parameter() {
        let content = "<?php\nfoo($a, ";
        let pos = Position {
            line: 1,
            character: 8,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "foo");
        assert_eq!(site.active_parameter, 1);
    }

    #[test]
    fn detect_third_parameter() {
        let content = "<?php\nfoo($a, $b, ";
        let pos = Position {
            line: 1,
            character: 13,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "foo");
        assert_eq!(site.active_parameter, 2);
    }

    #[test]
    fn detect_method_call() {
        let content = "<?php\n$obj->bar(";
        let pos = Position {
            line: 1,
            character: 10,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "$obj->bar");
        assert_eq!(site.active_parameter, 0);
    }

    #[test]
    fn detect_static_method_call() {
        let content = "<?php\nFoo::bar(";
        let pos = Position {
            line: 1,
            character: 9,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "Foo::bar");
        assert_eq!(site.active_parameter, 0);
    }

    #[test]
    fn detect_constructor_call() {
        let content = "<?php\nnew Foo(";
        let pos = Position {
            line: 1,
            character: 8,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "new Foo");
        assert_eq!(site.active_parameter, 0);
    }

    #[test]
    fn detect_none_outside_parens() {
        let content = "<?php\nfoo();";
        let pos = Position {
            line: 1,
            character: 6,
        };
        assert!(detect_call_site(content, pos).is_none());
    }

    #[test]
    fn detect_nested_call_inner() {
        // Cursor inside inner call
        let content = "<?php\nfoo(bar(";
        let pos = Position {
            line: 1,
            character: 8,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "bar");
        assert_eq!(site.active_parameter, 0);
    }

    #[test]
    fn detect_with_string_containing_comma() {
        let content = "<?php\nfoo('a,b', ";
        let pos = Position {
            line: 1,
            character: 12,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "foo");
        assert_eq!(site.active_parameter, 1);
    }

    #[test]
    fn detect_with_nested_parens_containing_comma() {
        let content = "<?php\nfoo(bar(1, 2), ";
        let pos = Position {
            line: 1,
            character: 16,
        };
        let site = detect_call_site(content, pos).unwrap();
        assert_eq!(site.call_expression, "foo");
        assert_eq!(site.active_parameter, 1);
    }

    // ── count_top_level_commas ──────────────────────────────────────

    #[test]
    fn count_commas_empty() {
        let chars: Vec<char> = "()".chars().collect();
        assert_eq!(count_top_level_commas(&chars, 1, 1), 0);
    }

    #[test]
    fn count_commas_two() {
        let chars: Vec<char> = "($a, $b, $c)".chars().collect();
        assert_eq!(count_top_level_commas(&chars, 1, 11), 2);
    }

    #[test]
    fn count_commas_nested() {
        let chars: Vec<char> = "(foo(1, 2), $b)".chars().collect();
        assert_eq!(count_top_level_commas(&chars, 1, 14), 1);
    }

    #[test]
    fn count_commas_in_string() {
        let chars: Vec<char> = "('a,b', $c)".chars().collect();
        assert_eq!(count_top_level_commas(&chars, 1, 10), 1);
    }

    // ── format_param_label ──────────────────────────────────────────

    #[test]
    fn format_param_simple() {
        let p = ParameterInfo {
            name: "$x".to_string(),
            type_hint: Some("int".to_string()),
            is_required: true,
            is_variadic: false,
            is_reference: false,
        };
        assert_eq!(format_param_label(&p), "int $x");
    }

    #[test]
    fn format_param_variadic() {
        let p = ParameterInfo {
            name: "$items".to_string(),
            type_hint: Some("string".to_string()),
            is_required: false,
            is_variadic: true,
            is_reference: false,
        };
        assert_eq!(format_param_label(&p), "string ...$items");
    }

    #[test]
    fn format_param_reference() {
        let p = ParameterInfo {
            name: "$arr".to_string(),
            type_hint: Some("array".to_string()),
            is_required: true,
            is_variadic: false,
            is_reference: true,
        };
        assert_eq!(format_param_label(&p), "array &$arr");
    }

    #[test]
    fn format_param_no_type() {
        let p = ParameterInfo {
            name: "$x".to_string(),
            type_hint: None,
            is_required: true,
            is_variadic: false,
            is_reference: false,
        };
        assert_eq!(format_param_label(&p), "$x");
    }

    // ── build_signature ─────────────────────────────────────────────

    #[test]
    fn build_signature_label() {
        let params = vec![
            ParameterInfo {
                name: "$name".to_string(),
                type_hint: Some("string".to_string()),
                is_required: true,
                is_variadic: false,
                is_reference: false,
            },
            ParameterInfo {
                name: "$age".to_string(),
                type_hint: Some("int".to_string()),
                is_required: true,
                is_variadic: false,
                is_reference: false,
            },
        ];
        let sig = build_signature("greet", &params, Some("void"));
        assert_eq!(sig.label, "greet(string $name, int $age): void");
    }

    #[test]
    fn build_signature_parameter_offsets() {
        let params = vec![
            ParameterInfo {
                name: "$a".to_string(),
                type_hint: None,
                is_required: true,
                is_variadic: false,
                is_reference: false,
            },
            ParameterInfo {
                name: "$b".to_string(),
                type_hint: None,
                is_required: true,
                is_variadic: false,
                is_reference: false,
            },
        ];
        let sig = build_signature("f", &params, None);
        // label: "f($a, $b)"
        //         0123456789
        let pi = sig.parameters.unwrap();
        assert_eq!(pi[0].label, ParameterLabel::LabelOffsets([2, 4])); // "$a"
        assert_eq!(pi[1].label, ParameterLabel::LabelOffsets([6, 8])); // "$b"
    }

    #[test]
    fn build_signature_no_params() {
        let sig = build_signature("foo", &[], Some("void"));
        assert_eq!(sig.label, "foo(): void");
        assert!(sig.parameters.unwrap().is_empty());
    }

    // ── clamp_active_param ──────────────────────────────────────────

    #[test]
    fn clamp_within_range() {
        let params = vec![
            ParameterInfo {
                name: "$a".to_string(),
                type_hint: None,
                is_required: true,
                is_variadic: false,
                is_reference: false,
            },
            ParameterInfo {
                name: "$b".to_string(),
                type_hint: None,
                is_required: true,
                is_variadic: false,
                is_reference: false,
            },
        ];
        assert_eq!(clamp_active_param(0, &params), 0);
        assert_eq!(clamp_active_param(1, &params), 1);
    }

    #[test]
    fn clamp_exceeds_range() {
        let params = vec![ParameterInfo {
            name: "$a".to_string(),
            type_hint: None,
            is_required: true,
            is_variadic: false,
            is_reference: false,
        }];
        assert_eq!(clamp_active_param(5, &params), 0);
    }

    #[test]
    fn clamp_empty_params() {
        assert_eq!(clamp_active_param(0, &[]), 0);
    }
}
