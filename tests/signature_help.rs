mod common;

use common::{create_test_backend, create_test_backend_with_function_stubs};
use tower_lsp::LanguageServer;
use tower_lsp::lsp_types::*;

/// Helper: open a file and request signature help at the given line/character.
async fn sig_help_at(
    backend: &phpantom_lsp::Backend,
    uri: &Url,
    text: &str,
    line: u32,
    character: u32,
) -> Option<SignatureHelp> {
    let open_params = DidOpenTextDocumentParams {
        text_document: TextDocumentItem {
            uri: uri.clone(),
            language_id: "php".to_string(),
            version: 1,
            text: text.to_string(),
        },
    };
    backend.did_open(open_params).await;

    let params = SignatureHelpParams {
        text_document_position_params: TextDocumentPositionParams {
            text_document: TextDocumentIdentifier { uri: uri.clone() },
            position: Position { line, character },
        },
        work_done_progress_params: WorkDoneProgressParams::default(),
        context: None,
    };

    backend.signature_help(params).await.unwrap()
}

/// Extract the active parameter index from a SignatureHelp response.
fn active_param(sh: &SignatureHelp) -> u32 {
    sh.active_parameter.unwrap_or(0)
}

/// Extract the signature label from the first (and usually only) signature.
fn sig_label(sh: &SignatureHelp) -> &str {
    &sh.signatures[0].label
}

/// Extract parameter labels as strings from the first signature.
fn param_labels(sh: &SignatureHelp) -> Vec<String> {
    let sig = &sh.signatures[0];
    let params = sig.parameters.as_ref().unwrap();
    params
        .iter()
        .map(|pi| match &pi.label {
            ParameterLabel::Simple(s) => s.clone(),
            ParameterLabel::LabelOffsets([start, end]) => {
                sig.label[*start as usize..*end as usize].to_string()
            }
        })
        .collect()
}

// ═══════════════════════════════════════════════════════════════════════════
//  Same-file function
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn standalone_function_first_param() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_func.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function greet(string $name, int $age): void {}\n",
        "greet(\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 6).await.unwrap();
    assert_eq!(sig_label(&sh), "greet(string $name, int $age): void");
    assert_eq!(active_param(&sh), 0);
    let pl = param_labels(&sh);
    assert_eq!(pl, vec!["string $name", "int $age"]);
}

#[tokio::test]
async fn standalone_function_second_param() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_func2.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function greet(string $name, int $age): void {}\n",
        "greet('Alice', \n",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 15).await.unwrap();
    assert_eq!(active_param(&sh), 1);
}

#[tokio::test]
async fn standalone_function_no_params() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_noparam.php").unwrap();
    let text = concat!("<?php\n", "function doWork(): void {}\n", "doWork(\n",);

    let sh = sig_help_at(&backend, &uri, text, 2, 7).await.unwrap();
    assert_eq!(sig_label(&sh), "doWork(): void");
    assert!(sh.signatures[0].parameters.as_ref().unwrap().is_empty());
}

// ═══════════════════════════════════════════════════════════════════════════
//  Instance method on $this
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn this_method_call() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_this.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class Greeter {\n",
        "    public function greet(string $name, int $age): string {\n",
        "        return '';\n",
        "    }\n",
        "    public function test() {\n",
        "        $this->greet(\n",
        "    }\n",
        "}\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 6, 22).await.unwrap();
    assert!(sig_label(&sh).contains("greet"));
    assert!(sig_label(&sh).contains("string $name"));
    assert_eq!(active_param(&sh), 0);
}

#[tokio::test]
async fn this_method_second_param() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_this2.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class Greeter {\n",
        "    public function greet(string $name, int $age): string {\n",
        "        return '';\n",
        "    }\n",
        "    public function test() {\n",
        "        $this->greet('Alice', \n",
        "    }\n",
        "}\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 6, 30).await.unwrap();
    assert_eq!(active_param(&sh), 1);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Instance method on a variable
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn variable_method_call() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_var.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class Calculator {\n",
        "    public function add(int $a, int $b): int { return $a + $b; }\n",
        "}\n",
        "class Demo {\n",
        "    public function test() {\n",
        "        $calc = new Calculator();\n",
        "        $calc->add(\n",
        "    }\n",
        "}\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 7, 19).await.unwrap();
    assert!(sig_label(&sh).contains("add"));
    assert!(sig_label(&sh).contains("int $a"));
    assert!(sig_label(&sh).contains("int $b"));
    assert_eq!(active_param(&sh), 0);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Static method call
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn static_method_call() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_static.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class MathUtil {\n",
        "    public static function clamp(int $value, int $min, int $max): int {\n",
        "        return max($min, min($max, $value));\n",
        "    }\n",
        "}\n",
        "MathUtil::clamp(\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 6, 16).await.unwrap();
    assert!(sig_label(&sh).contains("clamp"));
    assert_eq!(active_param(&sh), 0);
    let pl = param_labels(&sh);
    assert_eq!(pl.len(), 3);
}

#[tokio::test]
async fn static_method_third_param() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_static3.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class MathUtil {\n",
        "    public static function clamp(int $value, int $min, int $max): int {\n",
        "        return max($min, min($max, $value));\n",
        "    }\n",
        "}\n",
        "MathUtil::clamp(1, 0, \n",
    );

    let sh = sig_help_at(&backend, &uri, text, 6, 22).await.unwrap();
    assert_eq!(active_param(&sh), 2);
}

// ═══════════════════════════════════════════════════════════════════════════
//  self:: and static:: calls
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn self_static_method_call() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_self.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class Foo {\n",
        "    public static function create(string $name): static {\n",
        "        return new static();\n",
        "    }\n",
        "    public function test() {\n",
        "        self::create(\n",
        "    }\n",
        "}\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 6, 21).await.unwrap();
    assert!(sig_label(&sh).contains("create"));
    assert!(sig_label(&sh).contains("string $name"));
}

// ═══════════════════════════════════════════════════════════════════════════
//  Constructor call: new ClassName(
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn constructor_call() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_ctor.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class User {\n",
        "    public function __construct(string $name, string $email) {}\n",
        "}\n",
        "new User(\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 4, 9).await.unwrap();
    assert!(sig_label(&sh).contains("User"));
    assert!(sig_label(&sh).contains("string $name"));
    assert!(sig_label(&sh).contains("string $email"));
    assert_eq!(active_param(&sh), 0);
}

#[tokio::test]
async fn constructor_second_param() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_ctor2.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class User {\n",
        "    public function __construct(string $name, string $email) {}\n",
        "}\n",
        "new User('Alice', \n",
    );

    let sh = sig_help_at(&backend, &uri, text, 4, 18).await.unwrap();
    assert_eq!(active_param(&sh), 1);
}

// ═══════════════════════════════════════════════════════════════════════════
//  No signature help outside parentheses
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn no_help_outside_parens() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_none.php").unwrap();
    let text = concat!("<?php\n", "foo();\n",);

    let sh = sig_help_at(&backend, &uri, text, 1, 6).await;
    assert!(sh.is_none());
}

#[tokio::test]
async fn no_help_on_unknown_function() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_unknown.php").unwrap();
    let text = concat!("<?php\n", "unknownFunc(\n",);

    let sh = sig_help_at(&backend, &uri, text, 1, 12).await;
    assert!(sh.is_none());
}

// ═══════════════════════════════════════════════════════════════════════════
//  Nested calls — signature help for inner call
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn nested_call_inner_function() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_nested.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function outer(string $x): void {}\n",
        "function inner(int $y, int $z): int { return $y; }\n",
        "outer(inner(\n",
    );

    // Cursor is inside inner(
    let sh = sig_help_at(&backend, &uri, text, 3, 12).await.unwrap();
    assert!(sig_label(&sh).contains("inner"));
    assert_eq!(active_param(&sh), 0);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Variadic parameter — active index stays on last param
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn variadic_parameter_clamped() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_variadic.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function logMessage(string $level, string ...$parts): void {}\n",
        "logMessage('info', 'a', 'b', \n",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 29).await.unwrap();
    // 3 commas → active_parameter = 3, but last param (index 1) is variadic
    // so it should be clamped to 1.
    assert_eq!(active_param(&sh), 1);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Inherited method
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn inherited_method() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_inherit.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class Base {\n",
        "    public function doWork(int $count): void {}\n",
        "}\n",
        "class Child extends Base {}\n",
        "class Demo {\n",
        "    public function test() {\n",
        "        $child = new Child();\n",
        "        $child->doWork(\n",
        "    }\n",
        "}\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 8, 23).await.unwrap();
    assert!(sig_label(&sh).contains("doWork"));
    assert!(sig_label(&sh).contains("int $count"));
}

// ═══════════════════════════════════════════════════════════════════════════
//  Trait method
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn trait_method() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_trait.php").unwrap();
    let text = concat!(
        "<?php\n",
        "trait Greetable {\n",
        "    public function greet(string $whom): string { return 'hi'; }\n",
        "}\n",
        "class Person {\n",
        "    use Greetable;\n",
        "}\n",
        "class Demo {\n",
        "    public function test() {\n",
        "        $p = new Person();\n",
        "        $p->greet(\n",
        "    }\n",
        "}\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 10, 18).await.unwrap();
    assert!(sig_label(&sh).contains("greet"));
    assert!(sig_label(&sh).contains("string $whom"));
}

// ═══════════════════════════════════════════════════════════════════════════
//  Built-in (stub) function
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn stub_function() {
    let backend = create_test_backend_with_function_stubs();
    let uri = Url::parse("file:///sig_stub.php").unwrap();
    let text = concat!("<?php\n", "str_contains(\n",);

    let sh = sig_help_at(&backend, &uri, text, 1, 13).await.unwrap();
    assert!(sig_label(&sh).contains("str_contains"));
    assert!(sig_label(&sh).contains("$haystack"));
    assert!(sig_label(&sh).contains("$needle"));
    assert_eq!(active_param(&sh), 0);
}

#[tokio::test]
async fn stub_function_second_param() {
    let backend = create_test_backend_with_function_stubs();
    let uri = Url::parse("file:///sig_stub2.php").unwrap();
    let text = concat!("<?php\n", "str_contains('hello', \n",);

    let sh = sig_help_at(&backend, &uri, text, 1, 22).await.unwrap();
    assert_eq!(active_param(&sh), 1);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Parameter label offsets are correct substrings
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn parameter_label_offsets_match_label() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_offsets.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function mix(string $a, int $b, bool $c): void {}\n",
        "mix(\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 4).await.unwrap();
    let sig = &sh.signatures[0];
    let params = sig.parameters.as_ref().unwrap();

    for pi in params {
        match &pi.label {
            ParameterLabel::LabelOffsets([start, end]) => {
                let substr = &sig.label[*start as usize..*end as usize];
                // Each extracted label should be a valid parameter representation.
                assert!(
                    substr.contains('$'),
                    "Parameter label offset '{}' should contain a $ sign",
                    substr
                );
            }
            ParameterLabel::Simple(s) => {
                assert!(
                    sig.label.contains(s.as_str()),
                    "Simple label '{}' should be substring of '{}'",
                    s,
                    sig.label
                );
            }
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════════
//  String arguments with commas don't confuse parameter counting
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn string_with_commas_ignored() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_strcomma.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function pair(string $a, string $b): void {}\n",
        "pair('a,b,c', \n",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 14).await.unwrap();
    // The comma inside the string should not be counted.
    assert_eq!(active_param(&sh), 1);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Nested call arguments don't confuse parameter counting
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn nested_call_args_not_counted() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_nestedcount.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function outer(int $x, int $y): void {}\n",
        "function inner(int $a, int $b): int { return 0; }\n",
        "outer(inner(1, 2), \n",
    );

    let sh = sig_help_at(&backend, &uri, text, 3, 19).await.unwrap();
    assert!(sig_label(&sh).contains("outer"));
    // inner(1, 2) is one argument to outer, then the comma after it
    // puts us on the second parameter.
    assert_eq!(active_param(&sh), 1);
}

// ═══════════════════════════════════════════════════════════════════════════
//  parent:: calls
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn parent_method_call() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_parent.php").unwrap();
    let text = concat!(
        "<?php\n",
        "class Base {\n",
        "    public function __construct(string $name) {}\n",
        "}\n",
        "class Child extends Base {\n",
        "    public function __construct(string $name, int $age) {\n",
        "        parent::__construct(\n",
        "    }\n",
        "}\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 6, 28).await.unwrap();
    assert!(sig_label(&sh).contains("__construct"));
    assert!(sig_label(&sh).contains("string $name"));
    // The parent __construct only has 1 param ($name).
    let pl = param_labels(&sh);
    assert_eq!(pl.len(), 1);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Cursor right after open paren (no typing yet)
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn cursor_right_after_open_paren() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_openparen.php").unwrap();
    let text = concat!("<?php\n", "function test(int $x): void {}\n", "test(",);

    let sh = sig_help_at(&backend, &uri, text, 2, 5).await.unwrap();
    assert!(sig_label(&sh).contains("test"));
    assert_eq!(active_param(&sh), 0);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Cursor after comma with spaces
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn cursor_after_comma_with_spaces() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_spaces.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function pair(string $a, string $b): void {}\n",
        "pair('x',   ",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 12).await.unwrap();
    assert_eq!(active_param(&sh), 1);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Cross-file via PSR-4
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn cross_file_psr4_method() {
    let composer_json = r#"{
        "autoload": {
            "psr-4": { "App\\": "src/" }
        }
    }"#;
    let service_php = concat!(
        "<?php\n",
        "namespace App;\n",
        "class Service {\n",
        "    public function process(string $input, int $retries): bool {\n",
        "        return true;\n",
        "    }\n",
        "}\n",
    );
    let client_php = concat!(
        "<?php\n",
        "namespace App;\n",
        "class Client {\n",
        "    public function run() {\n",
        "        $svc = new Service();\n",
        "        $svc->process(\n",
        "    }\n",
        "}\n",
    );

    let (backend, _dir) = common::create_psr4_workspace(
        composer_json,
        &[
            ("src/Service.php", service_php),
            ("src/Client.php", client_php),
        ],
    );

    let service_uri = Url::from_file_path(_dir.path().join("src/Service.php")).unwrap();
    let client_uri = Url::from_file_path(_dir.path().join("src/Client.php")).unwrap();

    // Open both files
    backend
        .did_open(DidOpenTextDocumentParams {
            text_document: TextDocumentItem {
                uri: service_uri,
                language_id: "php".to_string(),
                version: 1,
                text: service_php.to_string(),
            },
        })
        .await;

    backend
        .did_open(DidOpenTextDocumentParams {
            text_document: TextDocumentItem {
                uri: client_uri.clone(),
                language_id: "php".to_string(),
                version: 1,
                text: client_php.to_string(),
            },
        })
        .await;

    let params = SignatureHelpParams {
        text_document_position_params: TextDocumentPositionParams {
            text_document: TextDocumentIdentifier {
                uri: client_uri.clone(),
            },
            position: Position {
                line: 5,
                character: 22,
            },
        },
        work_done_progress_params: WorkDoneProgressParams::default(),
        context: None,
    };

    let sh = backend.signature_help(params).await.unwrap().unwrap();
    assert!(sig_label(&sh).contains("process"));
    assert!(sig_label(&sh).contains("string $input"));
    assert!(sig_label(&sh).contains("int $retries"));
}

// ═══════════════════════════════════════════════════════════════════════════
//  Return type appears in signature label
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn return_type_in_label() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_ret.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function compute(int $x): float {}\n",
        "compute(\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 8).await.unwrap();
    assert!(
        sig_label(&sh).ends_with(": float"),
        "Label should end with return type, got: {}",
        sig_label(&sh)
    );
}

#[tokio::test]
async fn no_return_type_omitted() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_noret.php").unwrap();
    let text = concat!("<?php\n", "function doStuff($x) {}\n", "doStuff(\n",);

    let sh = sig_help_at(&backend, &uri, text, 2, 8).await.unwrap();
    assert!(
        !sig_label(&sh).contains(':'),
        "Label should not contain ':' when there's no return type, got: {}",
        sig_label(&sh)
    );
}

// ═══════════════════════════════════════════════════════════════════════════
//  Reference parameter
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn reference_parameter() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_ref.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function swap(int &$a, int &$b): void {}\n",
        "swap(\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 5).await.unwrap();
    let pl = param_labels(&sh);
    assert_eq!(pl[0], "int &$a");
    assert_eq!(pl[1], "int &$b");
}

// ═══════════════════════════════════════════════════════════════════════════
//  Variadic parameter display
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn variadic_parameter_in_label() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_variadic_label.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function collect(string ...$items): array {}\n",
        "collect(\n",
    );

    let sh = sig_help_at(&backend, &uri, text, 2, 8).await.unwrap();
    assert!(
        sig_label(&sh).contains("...$items"),
        "Label should show variadic, got: {}",
        sig_label(&sh)
    );
}

// ═══════════════════════════════════════════════════════════════════════════
//  Cursor in the middle of typing an argument
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn cursor_mid_argument() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_mid.php").unwrap();
    let text = concat!(
        "<?php\n",
        "function pair(string $a, string $b): void {}\n",
        "pair($x",
    );

    // Cursor is at end of `$x` (still first argument)
    let sh = sig_help_at(&backend, &uri, text, 2, 7).await.unwrap();
    assert_eq!(active_param(&sh), 0);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Multiple signatures not applicable (PHP doesn't have overloading)
// ═══════════════════════════════════════════════════════════════════════════

#[tokio::test]
async fn single_signature_returned() {
    let backend = create_test_backend();
    let uri = Url::parse("file:///sig_single.php").unwrap();
    let text = concat!("<?php\n", "function doIt(int $n): void {}\n", "doIt(\n",);

    let sh = sig_help_at(&backend, &uri, text, 2, 5).await.unwrap();
    assert_eq!(sh.signatures.len(), 1);
    assert_eq!(sh.active_signature, Some(0));
}
