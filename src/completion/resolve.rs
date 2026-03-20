//! Completion item resolution (`completionItem/resolve`).
//!
//! When the user highlights a completion item in the popup, the editor
//! sends a `completionItem/resolve` request to lazily fill in the
//! `documentation` field.  This avoids computing rich markdown for every
//! item up front.
//!
//! The identity of each item is encoded in [`CompletionItemData`] and
//! serialized into the `data` field of the `CompletionItem` during
//! initial completion (see [`builder`]).  The resolve handler
//! deserializes it, loads the owning class, finds the member, and
//! delegates to the existing hover methods to build the documentation.

use std::sync::Arc;

use serde::{Deserialize, Serialize};
use tower_lsp::lsp_types::*;

use crate::Backend;
use crate::hover::{MemberKindForOrigin, find_declaring_class};
use crate::types::*;

/// Identity data stored in `CompletionItem::data` for later resolution.
///
/// Serialized as JSON when the item is created and deserialized in the
/// resolve handler.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub(crate) struct CompletionItemData {
    /// The owning class name (short name as stored in `ClassInfo::name`).
    #[serde(rename = "c")]
    pub class_name: String,
    /// The member name (method name, property name, or constant name).
    #[serde(rename = "m")]
    pub member_name: String,
    /// The member kind: `"method"`, `"property"`, or `"constant"`.
    #[serde(rename = "k")]
    pub kind: String,
    /// The file URI where the completion was triggered.
    ///
    /// Used to build a `FileContext` for the class loader so that
    /// same-file classes are found during resolution.
    #[serde(rename = "u")]
    pub uri: String,
}

/// Extract the markdown string from a `Hover` value.
///
/// The hover methods always produce `HoverContents::Markup`, so this
/// just unwraps the inner `MarkupContent::value`.
fn extract_hover_markdown(hover: Hover) -> Option<String> {
    match hover.contents {
        HoverContents::Markup(mc) => Some(mc.value),
        _ => None,
    }
}

impl Backend {
    /// Handle `completionItem/resolve` by populating the `documentation`
    /// field with rich markdown.
    ///
    /// Reuses the existing hover methods ([`hover_for_method`],
    /// [`hover_for_property`], [`hover_for_constant`]) so that the
    /// documentation shown on selection is identical to what the user
    /// sees when hovering over a symbol.
    pub(crate) fn handle_completion_resolve(&self, mut item: CompletionItem) -> CompletionItem {
        let Some(ref data_value) = item.data else {
            return item;
        };

        let Ok(data) = serde_json::from_value::<CompletionItemData>(data_value.clone()) else {
            return item;
        };

        let ctx = self.file_context(&data.uri);
        let class_loader = self.class_loader(&ctx);

        // Try to find the class via the class loader.  Fall back to
        // searching the file's own classes (same-file definitions that
        // may not be in the class index yet).
        let class_info: Option<Arc<ClassInfo>> = class_loader(&data.class_name).or_else(|| {
            ctx.classes
                .iter()
                .find(|c| c.name == data.class_name)
                .cloned()
        });

        let Some(class_info) = class_info else {
            return item;
        };

        // Resolve through full inheritance so that inherited members
        // are available.
        let merged = crate::virtual_members::resolve_class_fully_cached(
            &class_info,
            &class_loader,
            &self.resolved_class_cache,
        );

        // Delegate to the existing hover methods which already produce
        // well-formatted markdown with PHP code blocks, template info,
        // origin indicators, descriptions, deprecation notices, @see
        // refs, and param/return sections.
        //
        // `hover_for_method` needs a URI and file content for @see
        // resolution. We pass the URI from the completion context and
        // load the file content from the backend's document store.
        let content = self.get_file_content(&data.uri).unwrap_or_default();

        let markdown = match data.kind.as_str() {
            "method" => {
                let method = merged.methods.iter().find(|m| m.name == data.member_name);
                method.map(|m| {
                    let declaring = find_declaring_class(
                        &merged,
                        &data.member_name,
                        &MemberKindForOrigin::Method,
                        &class_loader,
                    );
                    self.hover_for_method(m, &declaring, &class_loader, &data.uri, &content)
                })
            }
            "property" => {
                let property = merged
                    .properties
                    .iter()
                    .find(|p| p.name == data.member_name);
                property.map(|p| {
                    let declaring = find_declaring_class(
                        &merged,
                        &data.member_name,
                        &MemberKindForOrigin::Property,
                        &class_loader,
                    );
                    self.hover_for_property(p, &declaring, &class_loader)
                })
            }
            "constant" => {
                let constant = merged.constants.iter().find(|c| c.name == data.member_name);
                constant.map(|c| {
                    let declaring = find_declaring_class(
                        &merged,
                        &data.member_name,
                        &MemberKindForOrigin::Constant,
                        &class_loader,
                    );
                    self.hover_for_constant(c, &declaring, &class_loader)
                })
            }
            _ => None,
        };

        if let Some(hover) = markdown
            && let Some(md) = extract_hover_markdown(hover)
        {
            item.documentation = Some(Documentation::MarkupContent(MarkupContent {
                kind: MarkupKind::Markdown,
                value: md,
            }));
        }

        item
    }
}
