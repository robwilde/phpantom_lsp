window.BENCHMARK_DATA = {
  "lastUpdate": 1774122979568,
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
          "id": "abf2bef5cc9c4935b9d2b4e57538e07f31383091",
          "message": "Align benchmarks with Phpactor and CLI style with PHPStan",
          "timestamp": "2026-03-21T07:18:05+01:00",
          "tree_id": "2f56675b433946025d1a4956af0b764ad9bd304b",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/abf2bef5cc9c4935b9d2b4e57538e07f31383091"
        },
        "date": 1774074276897,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 567923,
            "range": "\u00b1 2983",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11322,
            "range": "\u00b1 415",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 52878,
            "range": "\u00b1 1269",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 109697,
            "range": "\u00b1 1030",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 190267,
            "range": "\u00b1 3057",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160620,
            "range": "\u00b1 6091",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 781209,
            "range": "\u00b1 4255",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1554185,
            "range": "\u00b1 31289",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38840,
            "range": "\u00b1 346",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10460,
            "range": "\u00b1 470",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7391,
            "range": "\u00b1 41",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 12196,
            "range": "\u00b1 36",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2358564,
            "range": "\u00b1 14334",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 258566,
            "range": "\u00b1 13351",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 132693,
            "range": "\u00b1 1039",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12522,
            "range": "\u00b1 109",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11913,
            "range": "\u00b1 43",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 85598,
            "range": "\u00b1 1895",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 10024,
            "range": "\u00b1 44",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 8524,
            "range": "\u00b1 23",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 193893,
            "range": "\u00b1 5505",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1039681,
            "range": "\u00b1 11293",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4860380,
            "range": "\u00b1 167588",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1050880,
            "range": "\u00b1 12818",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 13946,
            "range": "\u00b1 118",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12895,
            "range": "\u00b1 88",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 40445662,
            "range": "\u00b1 1397351",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 495710,
            "range": "\u00b1 3042",
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
          "id": "717bfcb5f330ee70ef0e4d79eff9a0ccc7afd311",
          "message": "Improve analasis performance",
          "timestamp": "2026-03-21T07:54:11+01:00",
          "tree_id": "47215837fe60a4eb536f2bdd590c1ddb47bced49",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/717bfcb5f330ee70ef0e4d79eff9a0ccc7afd311"
        },
        "date": 1774076440134,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 564324,
            "range": "\u00b1 2622",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11721,
            "range": "\u00b1 80",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 52717,
            "range": "\u00b1 1010",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 107156,
            "range": "\u00b1 874",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 187895,
            "range": "\u00b1 914",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158177,
            "range": "\u00b1 936",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 764491,
            "range": "\u00b1 10907",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1522373,
            "range": "\u00b1 27420",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 39089,
            "range": "\u00b1 1226",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10334,
            "range": "\u00b1 71",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7241,
            "range": "\u00b1 52",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 12392,
            "range": "\u00b1 51",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2240374,
            "range": "\u00b1 77408",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 260507,
            "range": "\u00b1 14108",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 146439,
            "range": "\u00b1 2046",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12620,
            "range": "\u00b1 51",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12040,
            "range": "\u00b1 35",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87874,
            "range": "\u00b1 463",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 10332,
            "range": "\u00b1 65",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 8496,
            "range": "\u00b1 136",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 191587,
            "range": "\u00b1 18202",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1031874,
            "range": "\u00b1 32239",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4834107,
            "range": "\u00b1 17655",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1037909,
            "range": "\u00b1 29605",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 13742,
            "range": "\u00b1 119",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12622,
            "range": "\u00b1 60",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 40318930,
            "range": "\u00b1 1026477",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 507604,
            "range": "\u00b1 46970",
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
          "id": "146f618d9a2e7e99212acef845a39f3572a49f96",
          "message": "Optimize diagnostics code",
          "timestamp": "2026-03-21T20:49:42+01:00",
          "tree_id": "d58ca5b9143c829e0cfac66b7532b42a734b9f81",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/146f618d9a2e7e99212acef845a39f3572a49f96"
        },
        "date": 1774122979046,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 553768,
            "range": "\u00b1 3348",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10778,
            "range": "\u00b1 162",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 51751,
            "range": "\u00b1 299",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104130,
            "range": "\u00b1 555",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 209314,
            "range": "\u00b1 5302",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156734,
            "range": "\u00b1 5081",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 756203,
            "range": "\u00b1 2260",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1507128,
            "range": "\u00b1 80526",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37281,
            "range": "\u00b1 296",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10276,
            "range": "\u00b1 147",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7407,
            "range": "\u00b1 59",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10930,
            "range": "\u00b1 35",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2217622,
            "range": "\u00b1 18273",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 257722,
            "range": "\u00b1 9932",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 141716,
            "range": "\u00b1 825",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11873,
            "range": "\u00b1 144",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11996,
            "range": "\u00b1 119",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86850,
            "range": "\u00b1 330",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9492,
            "range": "\u00b1 47",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7020,
            "range": "\u00b1 34",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155307,
            "range": "\u00b1 942",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 825678,
            "range": "\u00b1 17358",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3971876,
            "range": "\u00b1 13466",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 846619,
            "range": "\u00b1 2536",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 13858,
            "range": "\u00b1 110",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12403,
            "range": "\u00b1 57",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32056010,
            "range": "\u00b1 892169",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 482243,
            "range": "\u00b1 2317",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
