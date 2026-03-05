window.BENCHMARK_DATA = {
  "lastUpdate": 1772720465070,
  "repoUrl": "https://github.com/AJenbo/phpantom_lsp",
  "entries": {
    "PHPantom Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "4de6add052e252d3187a30781244e2b30bc74362",
          "message": "Fix CI job",
          "timestamp": "2026-03-05T11:25:54+01:00",
          "tree_id": "20a52ef787c9695630e7c290eca044779a2545ff",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/4de6add052e252d3187a30781244e2b30bc74362"
        },
        "date": 1772706681002,
        "tool": "cargo",
        "benches": [
          {
            "name": "completion_simple_class",
            "value": 25083,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 117334,
            "range": "± 1055",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 214435,
            "range": "± 2367",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 429860,
            "range": "± 3425",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 476785,
            "range": "± 3247",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 2624643,
            "range": "± 12126",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 5310762,
            "range": "± 33182",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 113892,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 32914,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 24606,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 36609,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 132484,
            "range": "± 791",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 628813,
            "range": "± 6533",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 2566897,
            "range": "± 16155",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 30743,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 16004,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1297130,
            "range": "± 22201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "23f8059894ae93679c2144940735741407228e22",
          "message": "Add diagnostics test from PHPactor",
          "timestamp": "2026-03-05T13:52:40+01:00",
          "tree_id": "39abde505c1a1183b8681d94fe51f08e148463b1",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/23f8059894ae93679c2144940735741407228e22"
        },
        "date": 1772715440275,
        "tool": "cargo",
        "benches": [
          {
            "name": "completion_simple_class",
            "value": 27739,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 125307,
            "range": "± 1377",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 234896,
            "range": "± 4390",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 457968,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 531962,
            "range": "± 11541",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 2561497,
            "range": "± 16560",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 5109967,
            "range": "± 51536",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 127144,
            "range": "± 1804",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 35069,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 26363,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 40197,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 139521,
            "range": "± 1571",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 662600,
            "range": "± 3229",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 2602743,
            "range": "± 34875",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 34256,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 17245,
            "range": "± 1594",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1330276,
            "range": "± 14708",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 52532,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 39290,
            "range": "± 378",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "bb60b6b67cd8f15208465dfae3fc1740e9ef1936",
          "message": "Acknowledge Phpactor's test suite and benchmark fixtures in README",
          "timestamp": "2026-03-05T15:16:21+01:00",
          "tree_id": "6de2f7c6d33a869eb2a1397ba6959cb98bf369a0",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/bb60b6b67cd8f15208465dfae3fc1740e9ef1936"
        },
        "date": 1772720464603,
        "tool": "cargo",
        "benches": [
          {
            "name": "completion_simple_class",
            "value": 27885,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 123030,
            "range": "± 2273",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 235643,
            "range": "± 2322",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 463083,
            "range": "± 8396",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 528210,
            "range": "± 15002",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 2574513,
            "range": "± 26243",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 5158834,
            "range": "± 195643",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 129203,
            "range": "± 8448",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 35221,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 26795,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 40623,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 141217,
            "range": "± 2060",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 671968,
            "range": "± 4700",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 2623501,
            "range": "± 22181",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 35241,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 16840,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1339786,
            "range": "± 54572",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 52741,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 39325,
            "range": "± 1534",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}