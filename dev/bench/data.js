window.BENCHMARK_DATA = {
  "lastUpdate": 1774172643163,
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
            "range": "± 2983",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11322,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 52878,
            "range": "± 1269",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 109697,
            "range": "± 1030",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 190267,
            "range": "± 3057",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160620,
            "range": "± 6091",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 781209,
            "range": "± 4255",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1554185,
            "range": "± 31289",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38840,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10460,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7391,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 12196,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2358564,
            "range": "± 14334",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 258566,
            "range": "± 13351",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 132693,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12522,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11913,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 85598,
            "range": "± 1895",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 10024,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 8524,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 193893,
            "range": "± 5505",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1039681,
            "range": "± 11293",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4860380,
            "range": "± 167588",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1050880,
            "range": "± 12818",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 13946,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12895,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 40445662,
            "range": "± 1397351",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 495710,
            "range": "± 3042",
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
            "range": "± 2622",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11721,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 52717,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 107156,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 187895,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158177,
            "range": "± 936",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 764491,
            "range": "± 10907",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1522373,
            "range": "± 27420",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 39089,
            "range": "± 1226",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10334,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7241,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 12392,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2240374,
            "range": "± 77408",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 260507,
            "range": "± 14108",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 146439,
            "range": "± 2046",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12620,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12040,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87874,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 10332,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 8496,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 191587,
            "range": "± 18202",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1031874,
            "range": "± 32239",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4834107,
            "range": "± 17655",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1037909,
            "range": "± 29605",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 13742,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12622,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 40318930,
            "range": "± 1026477",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 507604,
            "range": "± 46970",
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
            "range": "± 3348",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10778,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 51751,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104130,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 209314,
            "range": "± 5302",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156734,
            "range": "± 5081",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 756203,
            "range": "± 2260",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1507128,
            "range": "± 80526",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37281,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10276,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7407,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10930,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2217622,
            "range": "± 18273",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 257722,
            "range": "± 9932",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 141716,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11873,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11996,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86850,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9492,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7020,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155307,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 825678,
            "range": "± 17358",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3971876,
            "range": "± 13466",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 846619,
            "range": "± 2536",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 13858,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12403,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32056010,
            "range": "± 892169",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 482243,
            "range": "± 2317",
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
          "id": "a94d50d26b2a6bff8e17f52c6c2782e2188b0df6",
          "message": "Update roadmap",
          "timestamp": "2026-03-21T23:07:05+01:00",
          "tree_id": "7407eb91da544ff5b6d59884c1932a10cd035731",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/a94d50d26b2a6bff8e17f52c6c2782e2188b0df6"
        },
        "date": 1774131227439,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 558427,
            "range": "± 3205",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11069,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49673,
            "range": "± 657",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104675,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 209040,
            "range": "± 4975",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156447,
            "range": "± 1067",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 757840,
            "range": "± 3219",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1507922,
            "range": "± 26470",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37339,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10549,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7263,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11030,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2213034,
            "range": "± 46513",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 260751,
            "range": "± 12097",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 142693,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11947,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12214,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86619,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9507,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7107,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152967,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 816797,
            "range": "± 3378",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3950409,
            "range": "± 17358",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 825590,
            "range": "± 3313",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 13887,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12570,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32225328,
            "range": "± 172346",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 482154,
            "range": "± 2642",
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
          "id": "53aa74299ed995aa12c1b73241bddf0c9c75c9ed",
          "message": "New class name compleation",
          "timestamp": "2026-03-21T23:43:52+01:00",
          "tree_id": "0f9df5b3ac361e99c7f02bb68bea14b72199da8f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/53aa74299ed995aa12c1b73241bddf0c9c75c9ed"
        },
        "date": 1774133441851,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 557979,
            "range": "± 2303",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10586,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 50941,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 102920,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 199592,
            "range": "± 3902",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 151269,
            "range": "± 1229",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 754235,
            "range": "± 4934",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1513509,
            "range": "± 10044",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 34244,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11371,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8053,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11087,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2589617,
            "range": "± 21951",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 247596,
            "range": "± 8777",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 146310,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11430,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11802,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 81815,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9332,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 6887,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 141375,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 792881,
            "range": "± 2332",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3867539,
            "range": "± 22010",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 801193,
            "range": "± 2498",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14041,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12829,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32622041,
            "range": "± 201560",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 479767,
            "range": "± 5854",
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
          "id": "e21134f4a24b2d31596adfa40715b1d81b63e2d4",
          "message": "Fix analyzer performance",
          "timestamp": "2026-03-22T07:32:27+01:00",
          "tree_id": "ab7466a7ebedd3c18a2832aed9bc8d4afc2f366c",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/e21134f4a24b2d31596adfa40715b1d81b63e2d4"
        },
        "date": 1774161895368,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 553612,
            "range": "± 6114",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10532,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47912,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104042,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 195858,
            "range": "± 5399",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 155025,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 750299,
            "range": "± 2110",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1494604,
            "range": "± 25838",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37622,
            "range": "± 3199",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11499,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8004,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10872,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2461603,
            "range": "± 33145",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 235822,
            "range": "± 7829",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 154964,
            "range": "± 1176",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11615,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11962,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86935,
            "range": "± 2523",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9593,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7105,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153500,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 818567,
            "range": "± 3750",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3935279,
            "range": "± 19347",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 825692,
            "range": "± 2974",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14284,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12970,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 33765067,
            "range": "± 140345",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 484669,
            "range": "± 5095",
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
          "id": "cd87c6620daf38e47965dd97518f2a53293c7c57",
          "message": "Fix formatting",
          "timestamp": "2026-03-22T07:40:51+01:00",
          "tree_id": "63004350089b4e0e49d1598d943fdaf81379e844",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/cd87c6620daf38e47965dd97518f2a53293c7c57"
        },
        "date": 1774162138593,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 560475,
            "range": "± 3792",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10687,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 46510,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105182,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 193234,
            "range": "± 8009",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157598,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 763035,
            "range": "± 2803",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1517957,
            "range": "± 20002",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37451,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11256,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7828,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11018,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2464712,
            "range": "± 8987",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 232273,
            "range": "± 4819",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 154127,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11617,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12047,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86493,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9608,
            "range": "± 755",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 6989,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154160,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 816534,
            "range": "± 7382",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3972690,
            "range": "± 30867",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 825971,
            "range": "± 5595",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14259,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12943,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 33295048,
            "range": "± 757182",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 483346,
            "range": "± 4499",
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
          "id": "2503dce51b3d66b401a698a6061c1749f7086efa",
          "message": "Fix test, clean up, improve progressbar",
          "timestamp": "2026-03-22T10:37:26+01:00",
          "tree_id": "5c0998b39dfbc86e36346742ea8e1eddb55cbc59",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/2503dce51b3d66b401a698a6061c1749f7086efa"
        },
        "date": 1774172642628,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 556401,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11214,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48617,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104620,
            "range": "± 1629",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197220,
            "range": "± 4738",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 155971,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 754158,
            "range": "± 4878",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1500222,
            "range": "± 30764",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37908,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11082,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7692,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11105,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2472275,
            "range": "± 12673",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 233637,
            "range": "± 3952",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152611,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11975,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12059,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86169,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9789,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7750,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155717,
            "range": "± 3117",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 824627,
            "range": "± 6819",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3954928,
            "range": "± 29903",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 835215,
            "range": "± 3899",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14299,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12855,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32688981,
            "range": "± 831449",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 489033,
            "range": "± 4924",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}