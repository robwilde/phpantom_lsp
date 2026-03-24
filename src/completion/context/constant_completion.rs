/// Global constant name completions.
///
/// This module builds completion items for standalone constants
/// (`define()` constants and built-in PHP constants from stubs).
use std::collections::HashSet;

use tower_lsp::lsp_types::*;

use crate::Backend;
use crate::completion::builder::deprecation_tag;
use crate::completion::resolve::CompletionItemData;
use crate::hover::extract_constant_value_from_source;

/// Build a single constant `CompletionItem` with the standard layout.
///
/// This is the single code path for all constant completion items so
/// that the detail / label_details style stays consistent:
///
/// - `label`: constant name
/// - `detail`: value (when known)
fn build_constant_item(
    name: String,
    value: Option<String>,
    sort_text: String,
    is_deprecated: bool,
    uri: &str,
) -> CompletionItem {
    let data = serde_json::to_value(CompletionItemData {
        class_name: String::new(),
        member_name: name.clone(),
        kind: "global_constant".to_string(),
        uri: uri.to_string(),
        extra_class_names: vec![],
    })
    .ok();
    CompletionItem {
        label: name.clone(),
        kind: Some(CompletionItemKind::CONSTANT),
        detail: value,
        insert_text: Some(name.clone()),
        filter_text: Some(name),
        sort_text: Some(sort_text),
        tags: deprecation_tag(is_deprecated),
        data,
        ..CompletionItem::default()
    }
}

impl Backend {
    // ─── Constant name completion ───────────────────────────────────

    /// Build completion items for standalone constants (`define()` constants)
    /// from all known sources.
    ///
    /// Sources (in priority order):
    ///   1. Constants discovered from parsed files (`global_defines`)
    ///   2. Constants from the autoload index (`autoload_constant_index`,
    ///      non-Composer projects only — not yet parsed, name only)
    ///   3. Built-in PHP constants from embedded stubs (`stub_constant_index`)
    ///
    /// Each item uses the constant name as `label` and the value (when
    /// known) as `detail`.  Items are deduplicated by name.
    ///
    /// Returns `(items, is_incomplete)`.  When the total number of
    /// matching constants exceeds [`MAX_CONSTANT_COMPLETIONS`], the result
    /// is truncated and `is_incomplete` is `true`.
    const MAX_CONSTANT_COMPLETIONS: usize = 100;

    /// Build completion items for global constants matching `prefix`.
    pub(crate) fn build_constant_completions(
        &self,
        prefix: &str,
        uri: &str,
    ) -> (Vec<CompletionItem>, bool) {
        let prefix_lower = prefix.strip_prefix('\\').unwrap_or(prefix).to_lowercase();
        let mut seen: HashSet<String> = HashSet::new();
        let mut items: Vec<CompletionItem> = Vec::new();

        // ── 1. User-defined constants (from parsed files) ───────────
        {
            let dmap = self.global_defines.read();
            for (name, info) in dmap.iter() {
                if !name.to_lowercase().contains(&prefix_lower) {
                    continue;
                }
                if !seen.insert(name.clone()) {
                    continue;
                }
                items.push(build_constant_item(
                    name.clone(),
                    info.value.clone(),
                    format!("5_{}", name.to_lowercase()),
                    false,
                    uri,
                ));
            }
        }

        // ── 2. Autoload constant index (full-scan discovered constants) ──
        // The lightweight `find_symbols` byte-level scan discovers
        // constant names at startup without a full AST parse, for both
        // non-Composer projects (workspace scan) and Composer projects
        // (autoload_files.php scan).  Show them in completion so the
        // user sees cross-file constants even before they're lazily
        // parsed via `update_ast`.
        {
            let idx = self.autoload_constant_index.read();
            let dmap = self.global_defines.read();
            for (name, _path) in idx.iter() {
                if !name.to_lowercase().contains(&prefix_lower) {
                    continue;
                }
                if !seen.insert(name.clone()) {
                    continue;
                }
                // If the constant has already been lazily parsed, use
                // its value.  Otherwise leave it as None — the resolve
                // handler will fill it in when the user selects the item.
                let value = dmap.get(name.as_str()).and_then(|info| info.value.clone());
                items.push(build_constant_item(
                    name.clone(),
                    value,
                    format!("5_{}", name.to_lowercase()),
                    false,
                    uri,
                ));
            }
        }

        // ── 3. Built-in PHP constants from stubs ────────────────────
        for (&name, &stub_source) in &self.stub_constant_index {
            if !name.to_lowercase().contains(&prefix_lower) {
                continue;
            }
            if !seen.insert(name.to_string()) {
                continue;
            }
            // Extract the value directly from the stub PHP source.
            // This is a cheap string scan, not a full parse.
            let value = extract_constant_value_from_source(name, stub_source);
            items.push(build_constant_item(
                name.to_string(),
                value,
                format!("6_{}", name.to_lowercase()),
                false,
                uri,
            ));
        }

        let is_incomplete = items.len() > Self::MAX_CONSTANT_COMPLETIONS;
        if is_incomplete {
            items.sort_by(|a, b| a.sort_text.cmp(&b.sort_text));
            items.truncate(Self::MAX_CONSTANT_COMPLETIONS);
        }

        (items, is_incomplete)
    }
}
