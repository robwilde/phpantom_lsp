//! **Extract Function / Method** code action (`refactor.extract`).
//!
//! When the user selects one or more complete statements inside a
//! function or method body, this action extracts them into a new
//! function (or method, if `$this`/`self::`/`static::` is used).
//!
//! The implementation uses the `ScopeCollector` infrastructure (A11) to
//! classify variables as parameters, return values, or locals relative
//! to the selected range.  Type annotations are inferred via the hover
//! variable-type resolution pipeline.

use bumpalo::Bump;
use mago_span::HasSpan;
use mago_syntax::ast::*;
use std::collections::HashMap;
use tower_lsp::lsp_types::*;

use crate::Backend;
use crate::code_actions::cursor_context::{CursorContext, MemberContext, find_cursor_context};
use crate::completion::resolver::Loaders;
use crate::scope_collector::{
    FrameKind, ScopeMap, collect_function_scope, collect_function_scope_with_kind, collect_scope,
};
use crate::util::{find_class_at_offset, offset_to_position, position_to_byte_offset};

// ─── Statement boundary validation ─────────────────────────────────────────

/// Check whether the selected byte range `[start, end)` covers one or
/// more complete statements.
///
/// We parse the file and walk the AST to verify that every statement
/// whose span overlaps the selection is *fully* contained within it.
/// If any statement is only partially selected, the selection is
/// invalid for extraction.
fn selection_covers_complete_statements(content: &str, start: usize, end: usize) -> bool {
    let arena = Bump::new();
    let file_id = mago_database::file::FileId::new("extract_fn_validate");
    let program = mago_syntax::parser::parse_file_content(&arena, file_id, content);

    // Find the enclosing function/method body statements.
    let body_stmts = find_enclosing_body_statements(&program.statements, start as u32);
    if body_stmts.is_empty() {
        return false;
    }

    let mut found_any = false;
    for stmt in &body_stmts {
        let span = stmt.span();
        let stmt_start = span.start.offset as usize;
        let stmt_end = span.end.offset as usize;

        // Statement fully outside the selection — fine, skip it.
        if stmt_end <= start || stmt_start >= end {
            continue;
        }

        // Statement overlaps the selection — it must be fully contained.
        if stmt_start < start || stmt_end > end {
            return false;
        }

        found_any = true;
    }

    found_any
}

/// Collect references to top-level statements in the enclosing
/// function/method body that contains `offset`.
///
/// Returns byte ranges `(start, end)` for each direct child statement.
fn find_enclosing_body_statements<'a>(
    statements: &'a Sequence<'a, Statement<'a>>,
    offset: u32,
) -> Vec<&'a Statement<'a>> {
    for stmt in statements.iter() {
        match stmt {
            Statement::Function(func) => {
                let body_start = func.body.left_brace.start.offset;
                let body_end = func.body.right_brace.end.offset;
                if offset >= body_start && offset <= body_end {
                    return func.body.statements.iter().collect();
                }
            }
            Statement::Class(class) => {
                for member in class.members.iter() {
                    if let ClassLikeMember::Method(method) = member
                        && let MethodBody::Concrete(block) = &method.body
                    {
                        let body_start = block.left_brace.start.offset;
                        let body_end = block.right_brace.end.offset;
                        if offset >= body_start && offset <= body_end {
                            return block.statements.iter().collect();
                        }
                    }
                }
            }
            Statement::Trait(tr) => {
                for member in tr.members.iter() {
                    if let ClassLikeMember::Method(method) = member
                        && let MethodBody::Concrete(block) = &method.body
                    {
                        let body_start = block.left_brace.start.offset;
                        let body_end = block.right_brace.end.offset;
                        if offset >= body_start && offset <= body_end {
                            return block.statements.iter().collect();
                        }
                    }
                }
            }
            Statement::Enum(en) => {
                for member in en.members.iter() {
                    if let ClassLikeMember::Method(method) = member
                        && let MethodBody::Concrete(block) = &method.body
                    {
                        let body_start = block.left_brace.start.offset;
                        let body_end = block.right_brace.end.offset;
                        if offset >= body_start && offset <= body_end {
                            return block.statements.iter().collect();
                        }
                    }
                }
            }
            Statement::Namespace(ns) => {
                let result = find_enclosing_body_statements(ns.statements(), offset);
                if !result.is_empty() {
                    return result;
                }
            }
            _ => {}
        }
    }
    Vec::new()
}

// ─── Context detection ──────────────────────────────────────────────────────

/// Whether the extracted code should become a method or a standalone function.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum ExtractionTarget {
    /// Extract as a private method on the enclosing class.
    Method,
    /// Extract as a standalone function after the enclosing function.
    Function,
}

/// Information about the enclosing function/method for insertion purposes.
#[derive(Debug, Clone)]
struct EnclosingContext {
    /// Whether to extract as a method or function.
    target: ExtractionTarget,
    /// Byte offset of the closing `}` of the enclosing class (for method
    /// insertion) or the enclosing function (for function insertion).
    insert_offset: usize,
    /// The body's opening `{` offset — used to determine indentation.
    body_start: usize,
    /// Whether the enclosing method is static.
    is_static: bool,
}

/// Determine the extraction target and insertion point by walking the AST.
fn find_enclosing_context(content: &str, offset: u32, uses_this: bool) -> Option<EnclosingContext> {
    let arena = Bump::new();
    let file_id = mago_database::file::FileId::new("extract_fn_ctx");
    let program = mago_syntax::parser::parse_file_content(&arena, file_id, content);

    let ctx = find_cursor_context(&program.statements, offset);

    match ctx {
        CursorContext::InClassLike { member, .. } => {
            if let MemberContext::Method(method, true) = member {
                let is_static = method.modifiers.iter().any(|m| m.is_static());

                // For method extraction, insert before the closing `}` of the class.
                // Find the class closing brace by walking up from the method.
                let class_end = find_class_end_offset(&program.statements, offset);

                if let MethodBody::Concrete(block) = &method.body {
                    let body_start = block.left_brace.start.offset as usize;

                    if uses_this && is_static {
                        // $this in a static method — can't extract as method.
                        // Fall back to extracting as a function.
                        let func_end = block.right_brace.end.offset as usize;
                        return Some(EnclosingContext {
                            target: ExtractionTarget::Function,
                            insert_offset: find_after_class_end(&program.statements, offset)
                                .unwrap_or(func_end),
                            body_start,
                            is_static,
                        });
                    }

                    return Some(EnclosingContext {
                        target: ExtractionTarget::Method,
                        insert_offset: class_end.unwrap_or(block.right_brace.end.offset as usize),
                        body_start,
                        is_static,
                    });
                }
            }
            None
        }
        CursorContext::InFunction(func, true) => {
            let body_start = func.body.left_brace.start.offset as usize;
            let func_end = func.body.right_brace.end.offset as usize;

            // For function extraction, insert after the enclosing function.
            // Find the end of the line containing the closing `}`.
            let insert_offset = find_line_end(content, func_end);

            Some(EnclosingContext {
                target: ExtractionTarget::Function,
                insert_offset,
                body_start,
                is_static: false,
            })
        }
        _ => None,
    }
}

/// Find the byte offset of the closing `}` of the class containing `offset`.
fn find_class_end_offset(statements: &Sequence<'_, Statement<'_>>, offset: u32) -> Option<usize> {
    for stmt in statements.iter() {
        match stmt {
            Statement::Class(class) => {
                let span = class.span();
                if offset >= span.start.offset && offset <= span.end.offset {
                    return Some(class.right_brace.start.offset as usize);
                }
            }
            Statement::Trait(tr) => {
                let span = tr.span();
                if offset >= span.start.offset && offset <= span.end.offset {
                    return Some(tr.right_brace.start.offset as usize);
                }
            }
            Statement::Enum(en) => {
                let span = en.span();
                if offset >= span.start.offset && offset <= span.end.offset {
                    return Some(en.right_brace.start.offset as usize);
                }
            }
            Statement::Namespace(ns) => {
                if let Some(offset) = find_class_end_offset(ns.statements(), offset) {
                    return Some(offset);
                }
            }
            _ => {}
        }
    }
    None
}

/// Find the byte offset after the closing `}` of the class containing `offset`.
fn find_after_class_end(statements: &Sequence<'_, Statement<'_>>, offset: u32) -> Option<usize> {
    for stmt in statements.iter() {
        match stmt {
            Statement::Class(class) => {
                let span = class.span();
                if offset >= span.start.offset && offset <= span.end.offset {
                    return Some(span.end.offset as usize);
                }
            }
            Statement::Trait(tr) => {
                let span = tr.span();
                if offset >= span.start.offset && offset <= span.end.offset {
                    return Some(span.end.offset as usize);
                }
            }
            Statement::Enum(en) => {
                let span = en.span();
                if offset >= span.start.offset && offset <= span.end.offset {
                    return Some(span.end.offset as usize);
                }
            }
            Statement::Namespace(ns) => {
                if let Some(end) = find_after_class_end(ns.statements(), offset) {
                    return Some(end);
                }
            }
            _ => {}
        }
    }
    None
}

// ─── Scope map building ─────────────────────────────────────────────────────

/// Build a `ScopeMap` for the enclosing function/method at `offset`.
fn build_scope_map(content: &str, offset: u32) -> ScopeMap {
    let arena = Bump::new();
    let file_id = mago_database::file::FileId::new("extract_fn_scope");
    let program = mago_syntax::parser::parse_file_content(&arena, file_id, content);

    for stmt in program.statements.iter() {
        if let Some(map) = try_build_scope_from_statement(stmt, offset) {
            return map;
        }
    }

    // Fallback: top-level scope.
    let body_end = content.len() as u32;
    collect_scope(program.statements.as_slice(), 0, body_end)
}

/// Recursively try to build a scope map from a statement.
fn try_build_scope_from_statement(stmt: &Statement<'_>, offset: u32) -> Option<ScopeMap> {
    match stmt {
        Statement::Function(func) => {
            let body_start = func.body.left_brace.start.offset;
            let body_end = func.body.right_brace.end.offset;
            if offset >= body_start && offset <= body_end {
                return Some(collect_function_scope(
                    &func.parameter_list,
                    func.body.statements.as_slice(),
                    body_start,
                    body_end,
                ));
            }
        }
        Statement::Class(class) => {
            for member in class.members.iter() {
                if let ClassLikeMember::Method(method) = member
                    && let MethodBody::Concrete(block) = &method.body
                {
                    let body_start = block.left_brace.start.offset;
                    let body_end = block.right_brace.end.offset;
                    if offset >= body_start && offset <= body_end {
                        return Some(collect_function_scope_with_kind(
                            &method.parameter_list,
                            block.statements.as_slice(),
                            body_start,
                            body_end,
                            FrameKind::Method,
                        ));
                    }
                }
            }
        }
        Statement::Trait(tr) => {
            for member in tr.members.iter() {
                if let ClassLikeMember::Method(method) = member
                    && let MethodBody::Concrete(block) = &method.body
                {
                    let body_start = block.left_brace.start.offset;
                    let body_end = block.right_brace.end.offset;
                    if offset >= body_start && offset <= body_end {
                        return Some(collect_function_scope_with_kind(
                            &method.parameter_list,
                            block.statements.as_slice(),
                            body_start,
                            body_end,
                            FrameKind::Method,
                        ));
                    }
                }
            }
        }
        Statement::Enum(en) => {
            for member in en.members.iter() {
                if let ClassLikeMember::Method(method) = member
                    && let MethodBody::Concrete(block) = &method.body
                {
                    let body_start = block.left_brace.start.offset;
                    let body_end = block.right_brace.end.offset;
                    if offset >= body_start && offset <= body_end {
                        return Some(collect_function_scope_with_kind(
                            &method.parameter_list,
                            block.statements.as_slice(),
                            body_start,
                            body_end,
                            FrameKind::Method,
                        ));
                    }
                }
            }
        }
        Statement::Namespace(ns) => {
            for inner in ns.statements().iter() {
                if let Some(map) = try_build_scope_from_statement(inner, offset) {
                    return Some(map);
                }
            }
        }
        _ => {}
    }
    None
}

// ─── Type resolution ────────────────────────────────────────────────────────

/// Resolve the type of a variable at a given offset using the hover
/// pipeline.
fn resolve_var_type(
    backend: &Backend,
    var_name: &str,
    content: &str,
    cursor_offset: u32,
    uri: &str,
) -> Option<String> {
    let ctx = backend.file_context(uri);
    let class_loader = backend.class_loader(&ctx);
    let function_loader = backend.function_loader(&ctx);
    let constant_loader = backend.constant_loader();
    let loaders = Loaders {
        function_loader: Some(
            &function_loader as &dyn Fn(&str) -> Option<crate::types::FunctionInfo>,
        ),
        constant_loader: Some(&constant_loader),
    };

    let current_class = find_class_at_offset(&ctx.classes, cursor_offset);

    crate::hover::variable_type::resolve_variable_type_string(
        var_name,
        content,
        cursor_offset,
        current_class,
        &ctx.classes,
        &class_loader,
        loaders,
    )
}

// ─── Name generation ────────────────────────────────────────────────────────

/// Generate a unique function/method name that doesn't conflict with
/// existing members or functions.
fn generate_function_name(content: &str, _enclosing_ctx: &EnclosingContext) -> String {
    let base = "extracted";

    // Check if the name already exists in the content and deduplicate.
    let mut name = base.to_string();
    let mut counter = 1u32;
    loop {
        let pattern_fn = format!("function {}", name);
        if !content.contains(&pattern_fn) {
            break;
        }
        counter += 1;
        name = format!("{}{}", base, counter);
    }

    name
}

// ─── Selection trimming ────────────────────────────────────────────────────

/// Trim the selection to exclude leading/trailing whitespace and ensure
/// it starts/ends on statement boundaries.
///
/// Returns `(trimmed_start, trimmed_end)` or `None` if the trimmed
/// selection is empty.
fn trim_selection(content: &str, start: usize, end: usize) -> Option<(usize, usize)> {
    if start >= end || end > content.len() {
        return None;
    }

    let selected = &content[start..end];
    let trimmed = selected.trim();
    if trimmed.is_empty() {
        return None;
    }

    let trim_start = start + (selected.len() - selected.trim_start().len());
    let trim_end = end - (selected.len() - selected.trim_end().len());

    if trim_start >= trim_end {
        return None;
    }

    Some((trim_start, trim_end))
}

// ─── Indentation helpers ────────────────────────────────────────────────────

/// Detect the indentation of the line containing the given offset.
///
/// Returns only the leading whitespace of that line, without adding
/// an extra indent level.
fn detect_line_indent(content: &str, offset: usize) -> String {
    let before = &content[..offset];
    let line_start = before.rfind('\n').map_or(0, |p| p + 1);
    let line = &content[line_start..offset];
    line.chars().take_while(|c| c.is_whitespace()).collect()
}

/// Detect whether the file uses tabs or spaces (and how many spaces).
fn detect_indent_unit(content: &str) -> &str {
    for line in content.lines() {
        if line.starts_with('\t') {
            return "\t";
        }
        let spaces: usize = line.chars().take_while(|c| *c == ' ').count();
        if spaces >= 2 {
            if spaces.is_multiple_of(4) {
                return "    ";
            }
            return "  ";
        }
    }
    "    "
}

/// Find the end of the line containing `offset` (after the `\n`).
fn find_line_end(content: &str, offset: usize) -> usize {
    match content[offset..].find('\n') {
        Some(pos) => offset + pos + 1,
        None => content.len(),
    }
}

/// Find the start of the line containing `offset`.
fn find_line_start(content: &str, offset: usize) -> usize {
    content[..offset].rfind('\n').map_or(0, |p| p + 1)
}

/// Extract the indentation (leading whitespace) of the line at `offset`.
fn indent_at(content: &str, offset: usize) -> String {
    let line_start = find_line_start(content, offset);
    let rest = &content[line_start..];
    rest.chars().take_while(|c| c.is_whitespace()).collect()
}

// ─── Code generation ────────────────────────────────────────────────────────

/// Information gathered for code generation.
struct ExtractionInfo {
    /// The name of the new function/method.
    name: String,
    /// Parameters: `(var_name_with_dollar, type_hint_or_empty)`.
    params: Vec<(String, String)>,
    /// Return values: `(var_name_with_dollar, type_hint_or_empty)`.
    returns: Vec<(String, String)>,
    /// The selected statements as source text.
    body: String,
    /// Whether to extract as method or function.
    target: ExtractionTarget,
    /// Whether the enclosing method is static.
    is_static: bool,
    /// Indentation of the member level (for methods) or top level (for functions).
    member_indent: String,
    /// Indentation of the body inside the new function/method.
    body_indent: String,
    /// When `true`, the last statement in the selection is a `return`.
    /// The body already contains the `return`, so no extra return is
    /// appended, and the call site wraps the call in `return`.
    has_trailing_return: bool,
    /// Return type hint for the trailing return (resolved from the
    /// enclosing function's return type or the return expression).
    trailing_return_type: String,
}

/// Build the definition text of the extracted function or method.
fn build_extracted_definition(info: &ExtractionInfo) -> String {
    let mut out = String::new();

    // Blank line before the new definition.
    out.push('\n');

    let param_list = build_param_list(&info.params);
    let return_type = build_return_type(info);

    match info.target {
        ExtractionTarget::Method => {
            out.push_str(&info.member_indent);
            out.push_str("private ");
            if info.is_static {
                out.push_str("static ");
            }
            out.push_str("function ");
            out.push_str(&info.name);
            out.push('(');
            out.push_str(&param_list);
            out.push(')');
            if !return_type.is_empty() {
                out.push_str(": ");
                out.push_str(&return_type);
            }
            out.push('\n');
            out.push_str(&info.member_indent);
            out.push_str("{\n");
        }
        ExtractionTarget::Function => {
            out.push_str(&info.member_indent);
            out.push_str("function ");
            out.push_str(&info.name);
            out.push('(');
            out.push_str(&param_list);
            out.push(')');
            if !return_type.is_empty() {
                out.push_str(": ");
                out.push_str(&return_type);
            }
            out.push('\n');
            out.push_str(&info.member_indent);
            out.push_str("{\n");
        }
    }

    // Re-indent the body to match the new function's body indentation.
    let body_lines = info.body.lines().collect::<Vec<_>>();
    let min_indent = body_lines
        .iter()
        .filter(|l| !l.trim().is_empty())
        .map(|l| l.len() - l.trim_start().len())
        .min()
        .unwrap_or(0);

    for line in &body_lines {
        if line.trim().is_empty() {
            out.push('\n');
        } else {
            out.push_str(&info.body_indent);
            if line.len() > min_indent {
                out.push_str(&line[min_indent..]);
            }
            out.push('\n');
        }
    }

    // Add return statement for return values.
    // When the body already ends with `return`, we don't append another.
    if !info.has_trailing_return {
        if info.returns.len() == 1 {
            out.push_str(&info.body_indent);
            out.push_str("return ");
            out.push_str(&info.returns[0].0);
            out.push_str(";\n");
        } else if info.returns.len() > 1 {
            out.push_str(&info.body_indent);
            out.push_str("return [");
            let names: Vec<&str> = info.returns.iter().map(|(n, _)| n.as_str()).collect();
            out.push_str(&names.join(", "));
            out.push_str("];\n");
        }
    }

    out.push_str(&info.member_indent);
    out.push_str("}\n");

    out
}

/// Build the parameter list string for the function signature.
fn build_param_list(params: &[(String, String)]) -> String {
    params
        .iter()
        .map(|(name, type_hint)| {
            if type_hint.is_empty() {
                name.clone()
            } else {
                format!("{} {}", type_hint, name)
            }
        })
        .collect::<Vec<_>>()
        .join(", ")
}

/// Build the return type annotation string.
fn build_return_type(info: &ExtractionInfo) -> String {
    // When the body ends with `return expr;`, the extracted function's
    // return type is the trailing return type (resolved from the
    // enclosing function's signature), not derived from variable types.
    if info.has_trailing_return {
        let t = clean_type_for_signature(&info.trailing_return_type);
        if !t.is_empty() {
            return t;
        }
        return String::new();
    }

    if info.returns.is_empty() {
        return "void".to_string();
    }
    if info.returns.len() == 1 {
        let type_hint = &info.returns[0].1;
        if type_hint.is_empty() {
            return String::new();
        }
        return type_hint.clone();
    }
    // Multiple return values → return as array.
    "array".to_string()
}

/// Build the call-site text that replaces the selected statements.
fn build_call_site(info: &ExtractionInfo, call_indent: &str) -> String {
    let mut out = String::new();

    let args: Vec<&str> = info.params.iter().map(|(n, _)| n.as_str()).collect();
    let arg_list = args.join(", ");

    // Build the function/method call expression.
    let call_expr = match info.target {
        ExtractionTarget::Method => {
            if info.is_static {
                format!("self::{}({})", info.name, arg_list)
            } else {
                format!("$this->{}({})", info.name, arg_list)
            }
        }
        ExtractionTarget::Function => {
            format!("{}({})", info.name, arg_list)
        }
    };

    if info.has_trailing_return {
        // The body ends with `return expr;` — the call site passes
        // the return value through.
        out.push_str(call_indent);
        out.push_str("return ");
        out.push_str(&call_expr);
        out.push_str(";\n");
    } else if info.returns.is_empty() {
        // No return values — just call the function.
        out.push_str(call_indent);
        out.push_str(&call_expr);
        out.push_str(";\n");
    } else if info.returns.len() == 1 {
        // Single return value — assign it.
        out.push_str(call_indent);
        out.push_str(&info.returns[0].0);
        out.push_str(" = ");
        out.push_str(&call_expr);
        out.push_str(";\n");
    } else {
        // Multiple return values — destructure from array.
        let vars: Vec<&str> = info.returns.iter().map(|(n, _)| n.as_str()).collect();
        out.push_str(call_indent);
        out.push('[');
        out.push_str(&vars.join(", "));
        out.push_str("] = ");
        out.push_str(&call_expr);
        out.push_str(";\n");
    }

    out
}

// ─── Return statement analysis ──────────────────────────────────────────────

/// Analyse `return` statements within the selected range.
///
/// Returns `(has_unsafe_return, has_trailing_return)`:
/// - `has_unsafe_return` — the selection contains a `return` but does
///   NOT end with one.  Extracting would change control flow because
///   the call site wouldn't be `return extracted(…)`, so an early
///   return inside the extracted function would exit only that function
///   instead of the caller.
/// - `has_trailing_return` — the last selected statement is a `return`.
///   When this is true, the call site becomes `return extracted(…)`,
///   which means *every* return path inside the extracted function
///   (including guard-clause returns, nested returns in `if`/`switch`,
///   etc.) correctly propagates back to the caller.
fn analyse_returns(content: &str, start: usize, end: usize) -> (bool, bool) {
    let arena = Bump::new();
    let file_id = mago_database::file::FileId::new("extract_fn_ret");
    let program = mago_syntax::parser::parse_file_content(&arena, file_id, content);

    let body_stmts = find_enclosing_body_statements(&program.statements, start as u32);

    // Collect the statements that fall inside the selection.
    let selected: Vec<&Statement<'_>> = body_stmts
        .iter()
        .filter(|stmt| {
            let span = stmt.span();
            let s = span.start.offset as usize;
            let e = span.end.offset as usize;
            s >= start && e <= end
        })
        .copied()
        .collect();

    if selected.is_empty() {
        return (false, false);
    }

    // Check whether the last selected statement is a `return`.
    let has_trailing_return = matches!(selected.last(), Some(Statement::Return(_)));

    // Check whether any statement in the selection contains a return
    // (at any nesting level).
    let any_return = selected.iter().any(|s| selection_stmt_contains_return(s));

    // Returns are only unsafe when the selection contains returns but
    // does NOT end with one.  When the selection ends with `return`,
    // the call site is `return extracted(…)`, so every return path
    // inside the extracted function propagates correctly.
    let has_unsafe_return = any_return && !has_trailing_return;

    (has_unsafe_return, has_trailing_return)
}

/// Check whether a statement is or contains a `return` at any depth.
fn selection_stmt_contains_return(stmt: &Statement<'_>) -> bool {
    match stmt {
        Statement::Return(_) => true,
        Statement::If(if_stmt) => match &if_stmt.body {
            IfBody::Statement(body) => {
                selection_stmt_contains_return(body.statement)
                    || body
                        .else_if_clauses
                        .iter()
                        .any(|c| selection_stmt_contains_return(c.statement))
                    || body
                        .else_clause
                        .as_ref()
                        .is_some_and(|c| selection_stmt_contains_return(c.statement))
            }
            IfBody::ColonDelimited(body) => {
                body.statements
                    .iter()
                    .any(|s| selection_stmt_contains_return(s))
                    || body.else_if_clauses.iter().any(|c| {
                        c.statements
                            .iter()
                            .any(|s| selection_stmt_contains_return(s))
                    })
                    || body.else_clause.as_ref().is_some_and(|c| {
                        c.statements
                            .iter()
                            .any(|s| selection_stmt_contains_return(s))
                    })
            }
        },
        Statement::Foreach(f) => match &f.body {
            ForeachBody::Statement(s) => selection_stmt_contains_return(s),
            ForeachBody::ColonDelimited(b) => b
                .statements
                .iter()
                .any(|s| selection_stmt_contains_return(s)),
        },
        Statement::While(w) => match &w.body {
            WhileBody::Statement(s) => selection_stmt_contains_return(s),
            WhileBody::ColonDelimited(b) => b
                .statements
                .iter()
                .any(|s| selection_stmt_contains_return(s)),
        },
        Statement::DoWhile(dw) => selection_stmt_contains_return(dw.statement),
        Statement::For(f) => match &f.body {
            ForBody::Statement(s) => selection_stmt_contains_return(s),
            ForBody::ColonDelimited(b) => b
                .statements
                .iter()
                .any(|s| selection_stmt_contains_return(s)),
        },
        Statement::Switch(sw) => sw.body.cases().iter().any(|c| match c {
            SwitchCase::Expression(e) => e
                .statements
                .iter()
                .any(|s| selection_stmt_contains_return(s)),
            SwitchCase::Default(d) => d
                .statements
                .iter()
                .any(|s| selection_stmt_contains_return(s)),
        }),
        Statement::Try(t) => {
            t.block
                .statements
                .iter()
                .any(|s| selection_stmt_contains_return(s))
                || t.catch_clauses.iter().any(|c| {
                    c.block
                        .statements
                        .iter()
                        .any(|s| selection_stmt_contains_return(s))
                })
                || t.finally_clause.as_ref().is_some_and(|f| {
                    f.block
                        .statements
                        .iter()
                        .any(|s| selection_stmt_contains_return(s))
                })
        }
        Statement::Block(b) => b
            .statements
            .iter()
            .any(|s| selection_stmt_contains_return(s)),
        _ => false,
    }
}

/// Resolve the return type of the enclosing function/method at `offset`.
///
/// Extracts the native return type hint from the function signature.
fn resolve_enclosing_return_type(content: &str, offset: u32) -> String {
    let arena = Bump::new();
    let file_id = mago_database::file::FileId::new("extract_fn_rtype");
    let program = mago_syntax::parser::parse_file_content(&arena, file_id, content);

    let ctx = find_cursor_context(&program.statements, offset);

    match ctx {
        CursorContext::InClassLike { member, .. } => {
            if let MemberContext::Method(method, true) = member {
                return method
                    .return_type_hint
                    .as_ref()
                    .map(|h| {
                        let s = h.span().start.offset as usize;
                        let e = h.span().end.offset as usize;
                        content[s..e].trim().to_string()
                    })
                    .unwrap_or_default();
            }
            String::new()
        }
        CursorContext::InFunction(func, true) => func
            .return_type_hint
            .as_ref()
            .map(|h| {
                let s = h.span().start.offset as usize;
                let e = h.span().end.offset as usize;
                content[s..e].trim().to_string()
            })
            .unwrap_or_default(),
        _ => String::new(),
    }
}

// ─── Main code action collector ─────────────────────────────────────────────

impl Backend {
    /// Collect "Extract Function" / "Extract Method" code actions.
    ///
    /// This action is offered when the user has a non-empty selection
    /// that covers one or more complete statements inside a function or
    /// method body.
    pub(crate) fn collect_extract_function_actions(
        &self,
        uri: &str,
        content: &str,
        params: &CodeActionParams,
        out: &mut Vec<CodeActionOrCommand>,
    ) {
        // Only activate when the selection is non-empty.
        if params.range.start == params.range.end {
            return;
        }

        let start_offset = position_to_byte_offset(content, params.range.start);
        let end_offset = position_to_byte_offset(content, params.range.end);

        // Trim the selection to exclude leading/trailing whitespace.
        let (start, end) = match trim_selection(content, start_offset, end_offset) {
            Some(range) => range,
            None => return,
        };

        // Validate that the selection covers complete statements.
        if !selection_covers_complete_statements(content, start, end) {
            return;
        }

        // Analyse return statements in the selection.
        let (has_unsafe_return, has_trailing_return) = analyse_returns(content, start, end);

        // Reject when the selection contains returns but does NOT end
        // with one — the call site wouldn't be `return extracted(…)`,
        // so early returns would exit only the extracted function
        // instead of the caller.
        if has_unsafe_return {
            return;
        }

        // Build scope map and classify the selected range.
        let scope_map = build_scope_map(content, start as u32);
        let classification = scope_map.classify_range(start as u32, end as u32);

        // Use the scope-level flag as a quick pre-check before the more
        // granular range classification.  If the *entire* scope has no
        // $this/self/static/parent usage, the range certainly doesn't
        // either — skip the detailed per-access scan in that case.
        let uses_this = if scope_map.has_this_or_self {
            classification.uses_this
        } else {
            false
        };

        // When the scope uses by-reference parameters, extraction could
        // change semantics (writes through `&$var` would no longer
        // propagate to the caller).  Reject for safety.
        if scope_map.uses_reference_params() && !classification.reference_writes.is_empty() {
            return;
        }

        // Reject if there are too many return values (more than can be
        // cleanly handled with list() / array destructuring).
        if classification.return_values.len() > 4 {
            return;
        }

        // Determine enclosing context (method vs function) and insertion point.
        let enclosing = match find_enclosing_context(content, start as u32, uses_this) {
            Some(ctx) => ctx,
            None => return,
        };

        // Generate the function/method name.
        let fn_name = generate_function_name(content, &enclosing);

        // Resolve types for parameters and return values.
        let typed_params =
            self.resolve_param_types(uri, content, start as u32, &classification.parameters);
        let typed_returns =
            self.resolve_param_types(uri, content, start as u32, &classification.return_values);

        // Determine indentation.
        let call_indent = indent_at(content, start);
        let (member_indent, body_indent) = match enclosing.target {
            ExtractionTarget::Method => {
                // The member indent is the same level as the enclosing
                // method's signature line (sibling methods share this
                // indentation).  `body_start` points at the `{` which
                // sits on the same line as the method signature.
                let member = detect_line_indent(content, enclosing.body_start);
                let unit = detect_indent_unit(content);
                let body = format!("{}{}", member, unit);
                (member, body)
            }
            ExtractionTarget::Function => {
                let member = String::new();
                let unit = detect_indent_unit(content);
                (member, unit.to_string())
            }
        };

        // Extract the selected text (the body of the new function).
        // Start from the beginning of the first line so that the
        // leading whitespace is included — this ensures all lines
        // have consistent indentation for the re-indent pass.
        let body_line_start = find_line_start(content, start);
        let body_text = content[body_line_start..end].to_string();

        // When the selection ends with `return`, resolve the enclosing
        // function's return type so the extracted function can carry it.
        let trailing_return_type = if has_trailing_return {
            resolve_enclosing_return_type(content, start as u32)
        } else {
            String::new()
        };

        let info = ExtractionInfo {
            name: fn_name.clone(),
            params: typed_params,
            returns: typed_returns,
            body: body_text,
            target: enclosing.target,
            is_static: enclosing.is_static,
            member_indent,
            body_indent,
            has_trailing_return,
            trailing_return_type,
        };

        // Build the definition text.
        let definition = build_extracted_definition(&info);

        // Build the call-site text.
        let call_site = build_call_site(&info, &call_indent);

        // Build workspace edits.
        let doc_uri: Url = match uri.parse() {
            Ok(u) => u,
            Err(_) => return,
        };

        // Expand the replacement range to cover the full lines of the selection.
        let replace_start = find_line_start(content, start);
        let replace_end = find_line_end(content, end.saturating_sub(1).max(start));

        let replace_start_pos = offset_to_position(content, replace_start);
        let replace_end_pos = offset_to_position(content, replace_end);

        // Insertion point for the new definition.
        let insert_pos = offset_to_position(content, enclosing.insert_offset);

        let edits = vec![
            // Edit 1: Replace the selected statements with the call site.
            TextEdit {
                range: Range {
                    start: replace_start_pos,
                    end: replace_end_pos,
                },
                new_text: call_site,
            },
            // Edit 2: Insert the new function/method definition.
            TextEdit {
                range: Range {
                    start: insert_pos,
                    end: insert_pos,
                },
                new_text: definition,
            },
        ];

        let mut changes = HashMap::new();
        changes.insert(doc_uri, edits);

        let title = match enclosing.target {
            ExtractionTarget::Method => format!("Extract method '{}'", fn_name),
            ExtractionTarget::Function => format!("Extract function '{}'", fn_name),
        };

        out.push(CodeActionOrCommand::CodeAction(CodeAction {
            title,
            kind: Some(CodeActionKind::REFACTOR_EXTRACT),
            diagnostics: None,
            edit: Some(WorkspaceEdit {
                changes: Some(changes),
                document_changes: None,
                change_annotations: None,
            }),
            command: None,
            is_preferred: Some(false),
            disabled: None,
            data: None,
        }));
    }

    /// Resolve types for a list of variable names at a given offset.
    fn resolve_param_types(
        &self,
        uri: &str,
        content: &str,
        offset: u32,
        var_names: &[String],
    ) -> Vec<(String, String)> {
        var_names
            .iter()
            .map(|name| {
                let dollar_name = if name.starts_with('$') {
                    name.clone()
                } else {
                    format!("${}", name)
                };
                let type_hint =
                    resolve_var_type(self, &dollar_name, content, offset, uri).unwrap_or_default();
                // Clean up the type hint for use in a signature.
                let cleaned = clean_type_for_signature(&type_hint);
                (dollar_name, cleaned)
            })
            .collect()
    }
}

/// Clean a resolved type string for use in a function signature.
///
/// Removes generic parameters (PHP doesn't support them in signatures),
/// and simplifies union types that are too complex for type hints.
fn clean_type_for_signature(type_str: &str) -> String {
    if type_str.is_empty() {
        return String::new();
    }

    // If it contains generic params like `array<string, int>`, strip them
    // for the native type hint.
    let cleaned = strip_generics_for_hint(type_str);

    // If it's a simple scalar or class name, use it directly.
    if is_valid_php_type_hint(&cleaned) {
        return cleaned;
    }

    // For complex types (unions with more than PHP supports), return empty.
    String::new()
}

/// Strip generic parameters from a type string.
///
/// `Collection<int, string>` → `Collection`
/// `array<string>` → `array`
fn strip_generics_for_hint(type_str: &str) -> String {
    if let Some(pos) = type_str.find('<') {
        type_str[..pos].to_string()
    } else {
        type_str.to_string()
    }
}

/// Check whether a type string is valid as a PHP native type hint.
fn is_valid_php_type_hint(type_str: &str) -> bool {
    if type_str.is_empty() {
        return false;
    }

    // Handle nullable types.
    let inner = type_str.strip_prefix('?').unwrap_or(type_str);

    // Simple scalar types.
    let scalars = [
        "int", "float", "string", "bool", "array", "callable", "void", "null", "false", "true",
        "never", "object", "mixed", "iterable", "self", "static", "parent",
    ];
    if scalars.contains(&inner) {
        return true;
    }

    // Union types: `Type1|Type2`
    if inner.contains('|') {
        return inner.split('|').all(|part| {
            let p = part.trim();
            !p.is_empty() && is_valid_php_type_hint(p)
        });
    }

    // Intersection types: `Type1&Type2`
    if inner.contains('&') {
        return inner.split('&').all(|part| {
            let p = part.trim();
            !p.is_empty() && is_valid_php_type_hint(p)
        });
    }

    // Class names: starts with uppercase letter or backslash.
    if inner.starts_with('\\') || inner.chars().next().is_some_and(|c| c.is_ascii_uppercase()) {
        // Must be a valid identifier sequence.
        return inner.split('\\').filter(|s| !s.is_empty()).all(|s| {
            s.chars()
                .next()
                .is_some_and(|c| c.is_ascii_alphabetic() || c == '_')
                && s.chars().all(|c| c.is_ascii_alphanumeric() || c == '_')
        });
    }

    false
}

// ─── Tests ──────────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;

    // ── Statement boundary validation ───────────────────────────────

    #[test]
    fn complete_statements_single() {
        let php = "<?php\nfunction foo() {\n    $x = 1;\n    $y = 2;\n}\n";
        // Select `$x = 1;`
        let start = php.find("$x = 1;").unwrap();
        let end = start + "$x = 1;".len();
        assert!(selection_covers_complete_statements(php, start, end));
    }

    #[test]
    fn complete_statements_multiple() {
        let php = "<?php\nfunction foo() {\n    $x = 1;\n    $y = 2;\n    $z = 3;\n}\n";
        let start = php.find("$x = 1;").unwrap();
        let end = php.find("$y = 2;").unwrap() + "$y = 2;".len();
        assert!(selection_covers_complete_statements(php, start, end));
    }

    #[test]
    fn incomplete_statement_rejected() {
        let php = "<?php\nfunction foo() {\n    $x = 1;\n}\n";
        // Select just `$x = ` (incomplete).
        let start = php.find("$x = 1;").unwrap();
        let end = start + "$x =".len();
        assert!(!selection_covers_complete_statements(php, start, end));
    }

    #[test]
    fn partial_if_rejected() {
        let php = "<?php\nfunction foo() {\n    if ($x) {\n        $y = 1;\n    }\n}\n";
        // Select just the body of the if without the if itself.
        let start = php.find("$y = 1;").unwrap();
        let end = start + "$y = 1;".len();
        // This is inside the if body — those ARE complete statements
        // within the if block, but they're not top-level statements in
        // the function body.  The validator checks against the function
        // body's direct children, so this should fail.
        assert!(!selection_covers_complete_statements(php, start, end));
    }

    #[test]
    fn complete_if_accepted() {
        let php =
            "<?php\nfunction foo() {\n    if ($x) {\n        $y = 1;\n    }\n    $z = 2;\n}\n";
        // Select the entire if statement.
        let start = php.find("if ($x)").unwrap();
        let end = php.find("    }\n    $z").unwrap() + "    }".len();
        assert!(selection_covers_complete_statements(php, start, end));
    }

    // ── Selection trimming ──────────────────────────────────────────

    #[test]
    fn trim_whitespace() {
        let content = "  hello world  ";
        let result = trim_selection(content, 0, content.len());
        assert_eq!(result, Some((2, 13)));
    }

    #[test]
    fn trim_empty_rejected() {
        let content = "   ";
        assert_eq!(trim_selection(content, 0, content.len()), None);
    }

    // ── Return detection ────────────────────────────────────────────

    #[test]
    fn detects_trailing_return() {
        let php = "<?php\nfunction foo() {\n    $x = 1;\n    return $x;\n}\n";
        let start = php.find("$x = 1;").unwrap();
        let end = php.find("return $x;").unwrap() + "return $x;".len();
        let (unsafe_ret, trailing) = analyse_returns(php, start, end);
        assert!(!unsafe_ret, "should not be unsafe when trailing return");
        assert!(trailing, "should detect trailing return");
    }

    #[test]
    fn detects_unsafe_return_without_trailing() {
        let php = "<?php\nfunction foo() {\n    return 1;\n    $x = 2;\n}\n";
        let start = php.find("return 1;").unwrap();
        let end = php.find("$x = 2;").unwrap() + "$x = 2;".len();
        let (unsafe_ret, _trailing) = analyse_returns(php, start, end);
        assert!(unsafe_ret, "return without trailing return is unsafe");
    }

    #[test]
    fn no_false_positive_on_return_in_identifier() {
        let php = "<?php\nfunction foo() {\n    $returnValue = 1;\n}\n";
        let start = php.find("$returnValue").unwrap();
        let end = start + "$returnValue = 1;".len();
        let (unsafe_ret, trailing) = analyse_returns(php, start, end);
        assert!(!unsafe_ret);
        assert!(!trailing);
    }

    #[test]
    fn nested_return_safe_when_trailing_return_present() {
        // Guard clause pattern: `if (!$x) return 0;` followed by
        // a trailing `return $result;`.  Since the selection ends
        // with return, ALL returns are safe (call site will be
        // `return extracted(…)`).
        let php = "<?php\nfunction foo($x) {\n    if (!$x) return 0;\n    $r = $x * 2;\n    return $r;\n}\n";
        let start = php.find("if (!$x)").unwrap();
        let end = php.find("return $r;").unwrap() + "return $r;".len();
        let (unsafe_ret, trailing) = analyse_returns(php, start, end);
        assert!(trailing, "should detect trailing return");
        assert!(
            !unsafe_ret,
            "nested return is safe when trailing return present"
        );
    }

    #[test]
    fn nested_return_unsafe_without_trailing_return() {
        // Return inside an if, but the selection does NOT end with return.
        let php = "<?php\nfunction foo($x) {\n    if ($x) {\n        return 1;\n    }\n    echo 'done';\n}\n";
        let start = php.find("if ($x)").unwrap();
        let end = php.find("echo 'done';").unwrap() + "echo 'done';".len();
        let (unsafe_ret, trailing) = analyse_returns(php, start, end);
        assert!(unsafe_ret, "return without trailing return is unsafe");
        assert!(!trailing);
    }

    // ── Type hint validation ────────────────────────────────────────

    #[test]
    fn valid_scalar_hints() {
        assert!(is_valid_php_type_hint("int"));
        assert!(is_valid_php_type_hint("string"));
        assert!(is_valid_php_type_hint("bool"));
        assert!(is_valid_php_type_hint("float"));
        assert!(is_valid_php_type_hint("array"));
        assert!(is_valid_php_type_hint("void"));
        assert!(is_valid_php_type_hint("mixed"));
    }

    #[test]
    fn valid_nullable_hints() {
        assert!(is_valid_php_type_hint("?int"));
        assert!(is_valid_php_type_hint("?string"));
    }

    #[test]
    fn valid_class_hints() {
        assert!(is_valid_php_type_hint("Foo"));
        assert!(is_valid_php_type_hint("\\App\\Models\\User"));
    }

    #[test]
    fn valid_union_hints() {
        assert!(is_valid_php_type_hint("int|string"));
        assert!(is_valid_php_type_hint("Foo|null"));
    }

    #[test]
    fn invalid_hints() {
        assert!(!is_valid_php_type_hint(""));
        assert!(!is_valid_php_type_hint("array<int>"));
        assert!(!is_valid_php_type_hint("123"));
    }

    #[test]
    fn strip_generics() {
        assert_eq!(strip_generics_for_hint("array<string>"), "array");
        assert_eq!(
            strip_generics_for_hint("Collection<int, string>"),
            "Collection"
        );
        assert_eq!(strip_generics_for_hint("int"), "int");
    }

    // ── Build param list ────────────────────────────────────────────

    #[test]
    fn param_list_empty() {
        assert_eq!(build_param_list(&[]), "");
    }

    #[test]
    fn param_list_untyped() {
        let params = vec![("$x".to_string(), String::new())];
        assert_eq!(build_param_list(&params), "$x");
    }

    #[test]
    fn param_list_typed() {
        let params = vec![
            ("$x".to_string(), "int".to_string()),
            ("$y".to_string(), "string".to_string()),
        ];
        assert_eq!(build_param_list(&params), "int $x, string $y");
    }

    // ── Return type ─────────────────────────────────────────────────

    #[test]
    fn return_type_void() {
        let info = ExtractionInfo {
            name: String::new(),
            params: vec![],
            returns: vec![],
            body: String::new(),
            target: ExtractionTarget::Function,
            is_static: false,
            member_indent: String::new(),
            body_indent: String::new(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        assert_eq!(build_return_type(&info), "void");
    }

    #[test]
    fn return_type_single() {
        let info = ExtractionInfo {
            name: String::new(),
            params: vec![],
            returns: vec![("$x".to_string(), "int".to_string())],
            body: String::new(),
            target: ExtractionTarget::Function,
            is_static: false,
            member_indent: String::new(),
            body_indent: String::new(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        assert_eq!(build_return_type(&info), "int");
    }

    #[test]
    fn return_type_multiple() {
        let info = ExtractionInfo {
            name: String::new(),
            params: vec![],
            returns: vec![
                ("$x".to_string(), "int".to_string()),
                ("$y".to_string(), "string".to_string()),
            ],
            body: String::new(),
            target: ExtractionTarget::Function,
            is_static: false,
            member_indent: String::new(),
            body_indent: String::new(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        assert_eq!(build_return_type(&info), "array");
    }

    #[test]
    fn return_type_trailing_return() {
        let info = ExtractionInfo {
            name: String::new(),
            params: vec![],
            returns: vec![],
            body: String::new(),
            target: ExtractionTarget::Function,
            is_static: false,
            member_indent: String::new(),
            body_indent: String::new(),
            has_trailing_return: true,
            trailing_return_type: "string".to_string(),
        };
        assert_eq!(build_return_type(&info), "string");
    }

    // ── Name generation ─────────────────────────────────────────────

    #[test]
    fn generates_unique_name() {
        let content = "<?php\nfunction extracted() {}\n";
        let ctx = EnclosingContext {
            target: ExtractionTarget::Function,
            insert_offset: content.len(),
            body_start: 20,
            is_static: false,
        };
        let name = generate_function_name(content, &ctx);
        assert_eq!(name, "extracted2");
    }

    #[test]
    fn generates_base_name_when_no_conflict() {
        let content = "<?php\nfunction foo() {}\n";
        let ctx = EnclosingContext {
            target: ExtractionTarget::Function,
            insert_offset: content.len(),
            body_start: 20,
            is_static: false,
        };
        let name = generate_function_name(content, &ctx);
        assert_eq!(name, "extracted");
    }

    // ── Call site generation ────────────────────────────────────────

    #[test]
    fn call_site_no_returns() {
        let info = ExtractionInfo {
            name: "extracted".to_string(),
            params: vec![("$x".to_string(), "int".to_string())],
            returns: vec![],
            body: String::new(),
            target: ExtractionTarget::Function,
            is_static: false,
            member_indent: String::new(),
            body_indent: "    ".to_string(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        let result = build_call_site(&info, "    ");
        assert_eq!(result, "    extracted($x);\n");
    }

    #[test]
    fn call_site_single_return() {
        let info = ExtractionInfo {
            name: "extracted".to_string(),
            params: vec![("$x".to_string(), "int".to_string())],
            returns: vec![("$result".to_string(), "int".to_string())],
            body: String::new(),
            target: ExtractionTarget::Function,
            is_static: false,
            member_indent: String::new(),
            body_indent: "    ".to_string(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        let result = build_call_site(&info, "    ");
        assert_eq!(result, "    $result = extracted($x);\n");
    }

    #[test]
    fn call_site_multiple_returns() {
        let info = ExtractionInfo {
            name: "extracted".to_string(),
            params: vec![],
            returns: vec![
                ("$a".to_string(), "int".to_string()),
                ("$b".to_string(), "string".to_string()),
            ],
            body: String::new(),
            target: ExtractionTarget::Function,
            is_static: false,
            member_indent: String::new(),
            body_indent: "    ".to_string(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        let result = build_call_site(&info, "    ");
        assert_eq!(result, "    [$a, $b] = extracted();\n");
    }

    #[test]
    fn call_site_method() {
        let info = ExtractionInfo {
            name: "extracted".to_string(),
            params: vec![("$x".to_string(), "int".to_string())],
            returns: vec![],
            body: String::new(),
            target: ExtractionTarget::Method,
            is_static: false,
            member_indent: "    ".to_string(),
            body_indent: "        ".to_string(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        let result = build_call_site(&info, "        ");
        assert_eq!(result, "        $this->extracted($x);\n");
    }

    #[test]
    fn call_site_static_method() {
        let info = ExtractionInfo {
            name: "extracted".to_string(),
            params: vec![],
            returns: vec![],
            body: String::new(),
            target: ExtractionTarget::Method,
            is_static: true,
            member_indent: "    ".to_string(),
            body_indent: "        ".to_string(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        let result = build_call_site(&info, "        ");
        assert_eq!(result, "        self::extracted();\n");
    }

    #[test]
    fn call_site_trailing_return() {
        let info = ExtractionInfo {
            name: "extracted".to_string(),
            params: vec![("$x".to_string(), "int".to_string())],
            returns: vec![],
            body: "return $x * 2;".to_string(),
            target: ExtractionTarget::Method,
            is_static: false,
            member_indent: "    ".to_string(),
            body_indent: "        ".to_string(),
            has_trailing_return: true,
            trailing_return_type: "int".to_string(),
        };
        let result = build_call_site(&info, "        ");
        assert_eq!(result, "        return $this->extracted($x);\n");
    }

    // ── Definition generation ───────────────────────────────────────

    #[test]
    fn definition_method_no_params_void() {
        let info = ExtractionInfo {
            name: "doWork".to_string(),
            params: vec![],
            returns: vec![],
            body: "$x = 1;".to_string(),
            target: ExtractionTarget::Method,
            is_static: false,
            member_indent: "    ".to_string(),
            body_indent: "        ".to_string(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        let result = build_extracted_definition(&info);
        assert!(
            result.contains("private function doWork(): void"),
            "got: {result}"
        );
        assert!(result.contains("        $x = 1;"), "got: {result}");
    }

    #[test]
    fn definition_function_with_params_and_return() {
        let info = ExtractionInfo {
            name: "extracted".to_string(),
            params: vec![("$x".to_string(), "int".to_string())],
            returns: vec![("$result".to_string(), "string".to_string())],
            body: "$result = strval($x);".to_string(),
            target: ExtractionTarget::Function,
            is_static: false,
            member_indent: String::new(),
            body_indent: "    ".to_string(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        let result = build_extracted_definition(&info);
        assert!(
            result.contains("function extracted(int $x): string"),
            "got: {result}"
        );
        assert!(result.contains("return $result;"), "got: {result}");
    }

    #[test]
    fn definition_static_method() {
        let info = ExtractionInfo {
            name: "compute".to_string(),
            params: vec![("$n".to_string(), "int".to_string())],
            returns: vec![],
            body: "echo $n;".to_string(),
            target: ExtractionTarget::Method,
            is_static: true,
            member_indent: "    ".to_string(),
            body_indent: "        ".to_string(),
            has_trailing_return: false,
            trailing_return_type: String::new(),
        };
        let result = build_extracted_definition(&info);
        assert!(
            result.contains("private static function compute(int $n): void"),
            "got: {result}"
        );
    }

    #[test]
    fn definition_with_trailing_return() {
        let info = ExtractionInfo {
            name: "extracted".to_string(),
            params: vec![("$x".to_string(), "int".to_string())],
            returns: vec![],
            body: "return $x * 2;".to_string(),
            target: ExtractionTarget::Method,
            is_static: false,
            member_indent: "    ".to_string(),
            body_indent: "        ".to_string(),
            has_trailing_return: true,
            trailing_return_type: "int".to_string(),
        };
        let result = build_extracted_definition(&info);
        assert!(
            result.contains("private function extracted(int $x): int"),
            "should carry enclosing return type: {result}"
        );
        // Body already contains the return — no extra return appended.
        assert!(
            result.contains("return $x * 2;"),
            "body should keep the return statement: {result}"
        );
        // Should not have a duplicate return.
        assert_eq!(
            result.matches("return").count(),
            1,
            "should have exactly one return: {result}"
        );
    }

    // ── Integration: code action on Backend ─────────────────────────

    #[test]
    fn extract_function_action_offered_for_complete_statements() {
        let backend = crate::Backend::new_test();
        let uri = "file:///test.php";
        let content = "\
<?php
function foo() {
    $x = 1;
    $y = $x + 2;
    echo $y;
}
";
        // Select `$x = 1;\n    $y = $x + 2;`
        let start_line = 2; // `    $x = 1;`
        let end_line = 3; // `    $y = $x + 2;`

        let params = CodeActionParams {
            text_document: TextDocumentIdentifier {
                uri: uri.parse().unwrap(),
            },
            range: Range {
                start: Position::new(start_line, 4),
                end: Position::new(end_line, 16),
            },
            context: CodeActionContext {
                diagnostics: vec![],
                only: None,
                trigger_kind: None,
            },
            work_done_progress_params: WorkDoneProgressParams {
                work_done_token: None,
            },
            partial_result_params: PartialResultParams {
                partial_result_token: None,
            },
        };

        let actions = backend.handle_code_action(uri, content, &params);
        let extract_action = actions
            .iter()
            .find(|a| matches!(a, CodeActionOrCommand::CodeAction(ca) if ca.title.starts_with("Extract function")));
        assert!(
            extract_action.is_some(),
            "should offer extract function action, got: {:?}",
            actions
                .iter()
                .map(|a| match a {
                    CodeActionOrCommand::CodeAction(ca) => ca.title.clone(),
                    CodeActionOrCommand::Command(cmd) => cmd.title.clone(),
                })
                .collect::<Vec<_>>()
        );
    }

    #[test]
    fn extract_function_not_offered_for_empty_selection() {
        let backend = crate::Backend::new_test();
        let uri = "file:///test.php";
        let content = "\
<?php
function foo() {
    $x = 1;
}
";
        let params = CodeActionParams {
            text_document: TextDocumentIdentifier {
                uri: uri.parse().unwrap(),
            },
            range: Range {
                start: Position::new(2, 4),
                end: Position::new(2, 4), // empty selection
            },
            context: CodeActionContext {
                diagnostics: vec![],
                only: None,
                trigger_kind: None,
            },
            work_done_progress_params: WorkDoneProgressParams {
                work_done_token: None,
            },
            partial_result_params: PartialResultParams {
                partial_result_token: None,
            },
        };

        let actions = backend.handle_code_action(uri, content, &params);
        let extract_actions: Vec<_> = actions
            .iter()
            .filter(|a| matches!(a, CodeActionOrCommand::CodeAction(ca) if ca.title.starts_with("Extract function") || ca.title.starts_with("Extract method")))
            .collect();
        assert!(
            extract_actions.is_empty(),
            "should not offer extract for empty selection"
        );
    }

    #[test]
    fn extract_function_not_offered_for_partial_statement() {
        let backend = crate::Backend::new_test();
        let uri = "file:///test.php";
        let content = "\
<?php
function foo() {
    $x = 1 + 2;
}
";
        // Select just `1 + 2` — not a complete statement.
        let params = CodeActionParams {
            text_document: TextDocumentIdentifier {
                uri: uri.parse().unwrap(),
            },
            range: Range {
                start: Position::new(2, 9),
                end: Position::new(2, 14),
            },
            context: CodeActionContext {
                diagnostics: vec![],
                only: None,
                trigger_kind: None,
            },
            work_done_progress_params: WorkDoneProgressParams {
                work_done_token: None,
            },
            partial_result_params: PartialResultParams {
                partial_result_token: None,
            },
        };

        let actions = backend.handle_code_action(uri, content, &params);
        let extract_actions: Vec<_> = actions
            .iter()
            .filter(|a| matches!(a, CodeActionOrCommand::CodeAction(ca) if ca.title.starts_with("Extract function") || ca.title.starts_with("Extract method")))
            .collect();
        assert!(
            extract_actions.is_empty(),
            "should not offer extract for partial statement"
        );
    }

    #[test]
    fn extract_method_offered_when_using_this() {
        let backend = crate::Backend::new_test();
        let uri = "file:///test.php";
        let content = "\
<?php
class Foo {
    private int $value = 0;

    public function bar() {
        $x = $this->value;
        echo $x;
    }
}
";
        // Select `$x = $this->value;\n        echo $x;`
        let params = CodeActionParams {
            text_document: TextDocumentIdentifier {
                uri: uri.parse().unwrap(),
            },
            range: Range {
                start: Position::new(5, 8),
                end: Position::new(6, 16),
            },
            context: CodeActionContext {
                diagnostics: vec![],
                only: None,
                trigger_kind: None,
            },
            work_done_progress_params: WorkDoneProgressParams {
                work_done_token: None,
            },
            partial_result_params: PartialResultParams {
                partial_result_token: None,
            },
        };

        let actions = backend.handle_code_action(uri, content, &params);
        let extract_method = actions
            .iter()
            .find(|a| matches!(a, CodeActionOrCommand::CodeAction(ca) if ca.title.starts_with("Extract method")));
        assert!(
            extract_method.is_some(),
            "should offer extract method when $this is used, got: {:?}",
            actions
                .iter()
                .map(|a| match a {
                    CodeActionOrCommand::CodeAction(ca) => ca.title.clone(),
                    CodeActionOrCommand::Command(cmd) => cmd.title.clone(),
                })
                .collect::<Vec<_>>()
        );
    }

    #[test]
    fn extract_function_offered_for_trailing_return() {
        let backend = crate::Backend::new_test();
        let uri = "file:///test.php";
        let content = "\
<?php
function foo() {
    $x = 1;
    return $x;
}
";
        let params = CodeActionParams {
            text_document: TextDocumentIdentifier {
                uri: uri.parse().unwrap(),
            },
            range: Range {
                start: Position::new(2, 4),
                end: Position::new(3, 14),
            },
            context: CodeActionContext {
                diagnostics: vec![],
                only: None,
                trigger_kind: None,
            },
            work_done_progress_params: WorkDoneProgressParams {
                work_done_token: None,
            },
            partial_result_params: PartialResultParams {
                partial_result_token: None,
            },
        };

        let actions = backend.handle_code_action(uri, content, &params);
        let extract_action = actions.iter().find(|a| {
            matches!(a, CodeActionOrCommand::CodeAction(ca) if ca.title.starts_with("Extract function") || ca.title.starts_with("Extract method"))
        });
        assert!(
            extract_action.is_some(),
            "should offer extract when return is the last selected statement"
        );
    }

    #[test]
    fn extract_function_not_offered_for_non_trailing_return() {
        let backend = crate::Backend::new_test();
        let uri = "file:///test.php";
        let content = "\
<?php
function foo($x) {
    if ($x) {
        return 1;
    }
    echo 'done';
}
";
        let params = CodeActionParams {
            text_document: TextDocumentIdentifier {
                uri: uri.parse().unwrap(),
            },
            range: Range {
                start: Position::new(2, 4),
                end: Position::new(5, 17),
            },
            context: CodeActionContext {
                diagnostics: vec![],
                only: None,
                trigger_kind: None,
            },
            work_done_progress_params: WorkDoneProgressParams {
                work_done_token: None,
            },
            partial_result_params: PartialResultParams {
                partial_result_token: None,
            },
        };

        let actions = backend.handle_code_action(uri, content, &params);
        let extract_actions: Vec<_> = actions
            .iter()
            .filter(|a| matches!(a, CodeActionOrCommand::CodeAction(ca) if ca.title.starts_with("Extract function") || ca.title.starts_with("Extract method")))
            .collect();
        assert!(
            extract_actions.is_empty(),
            "should not offer extract for non-trailing return (inside if)"
        );
    }

    // ── Indent detection ────────────────────────────────────────────

    #[test]
    fn detect_indent_unit_spaces() {
        let content = "<?php\n    function foo() {\n        $x = 1;\n    }\n";
        assert_eq!(detect_indent_unit(content), "    ");
    }

    #[test]
    fn detect_indent_unit_tabs() {
        let content = "<?php\n\tfunction foo() {\n\t\t$x = 1;\n\t}\n";
        assert_eq!(detect_indent_unit(content), "\t");
    }

    #[test]
    fn indent_at_line() {
        let content = "<?php\n    $x = 1;\n";
        let offset = content.find("$x").unwrap();
        assert_eq!(indent_at(content, offset), "    ");
    }

    #[test]
    fn detect_line_indent_method() {
        let content =
            "<?php\nclass Foo {\n    public function bar() {\n        $x = 1;\n    }\n}\n";
        // body_start is the `{` after `bar()`
        let offset = content.find("{\n        $x").unwrap();
        assert_eq!(detect_line_indent(content, offset), "    ");
    }

    // ── Extraction context ──────────────────────────────────────────

    #[test]
    fn detects_function_context() {
        let content = "<?php\nfunction foo() {\n    $x = 1;\n}\n";
        let offset = content.find("$x").unwrap() as u32;
        let ctx = find_enclosing_context(content, offset, false);
        assert!(ctx.is_some());
        let ctx = ctx.unwrap();
        assert_eq!(ctx.target, ExtractionTarget::Function);
    }

    #[test]
    fn detects_method_context() {
        let content =
            "<?php\nclass Foo {\n    public function bar() {\n        $x = 1;\n    }\n}\n";
        let offset = content.find("$x").unwrap() as u32;
        let ctx = find_enclosing_context(content, offset, false);
        assert!(ctx.is_some());
        let ctx = ctx.unwrap();
        assert_eq!(ctx.target, ExtractionTarget::Method);
    }

    #[test]
    fn detects_method_context_with_this() {
        let content =
            "<?php\nclass Foo {\n    public function bar() {\n        $this->baz();\n    }\n}\n";
        let offset = content.find("$this").unwrap() as u32;
        let ctx = find_enclosing_context(content, offset, true);
        assert!(ctx.is_some());
        let ctx = ctx.unwrap();
        assert_eq!(ctx.target, ExtractionTarget::Method);
    }
}
