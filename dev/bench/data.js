window.BENCHMARK_DATA = {
  "lastUpdate": 1774666994814,
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
          "id": "731c3453148bd6206157942bbbc21d7cda02d3c4",
          "message": "Fix loosing type from (clone $var)->",
          "timestamp": "2026-03-22T11:09:38+01:00",
          "tree_id": "5a6ad048941ec53e74dac330d74401d6b57faa2f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/731c3453148bd6206157942bbbc21d7cda02d3c4"
        },
        "date": 1774174571436,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 555377,
            "range": "± 7088",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10641,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49994,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104877,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197179,
            "range": "± 9370",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 155144,
            "range": "± 854",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 757335,
            "range": "± 8374",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1529467,
            "range": "± 11568",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38086,
            "range": "± 1535",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11317,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8014,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11079,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2459763,
            "range": "± 9645",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 236349,
            "range": "± 5450",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 153880,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11682,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12393,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88930,
            "range": "± 1343",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9587,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7314,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 156082,
            "range": "± 1362",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 829838,
            "range": "± 5695",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3983383,
            "range": "± 162358",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 833065,
            "range": "± 5694",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14543,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 13406,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 33248115,
            "range": "± 196545",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 485609,
            "range": "± 3598",
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
          "id": "93b354d958ffc19888dc5f37d67de2e3008ef448",
          "message": "Fix order of reported issues in analasis",
          "timestamp": "2026-03-22T11:16:41+01:00",
          "tree_id": "e006d61525adcf30ee540e36004f964dff7345ba",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/93b354d958ffc19888dc5f37d67de2e3008ef448"
        },
        "date": 1774174990013,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 556176,
            "range": "± 9997",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10898,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49355,
            "range": "± 1504",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 107242,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 202479,
            "range": "± 7024",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 162494,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 790002,
            "range": "± 3997",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1568923,
            "range": "± 10595",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37847,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11940,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8286,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11184,
            "range": "± 1053",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2464131,
            "range": "± 35352",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 249177,
            "range": "± 9056",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 153958,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11984,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12079,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87059,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9876,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 6857,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 156876,
            "range": "± 1241",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 837421,
            "range": "± 11023",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4001923,
            "range": "± 21155",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 845457,
            "range": "± 4244",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14081,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12954,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32956437,
            "range": "± 161089",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 490224,
            "range": "± 16934",
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
          "id": "03b06e9def65f46d7ad280ef478bc2645b5fdbe4",
          "message": "update roadmap",
          "timestamp": "2026-03-22T12:34:42+01:00",
          "tree_id": "847882eb0073bf62f68d4a55351199fcbd39e9fb",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/03b06e9def65f46d7ad280ef478bc2645b5fdbe4"
        },
        "date": 1774179686688,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 561726,
            "range": "± 5310",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11260,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 50247,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 107497,
            "range": "± 2086",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 201012,
            "range": "± 5460",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 164542,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 802724,
            "range": "± 2650",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1587235,
            "range": "± 23353",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38208,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 12035,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8283,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11320,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2468310,
            "range": "± 10901",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 235913,
            "range": "± 4479",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 154256,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12278,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12476,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86739,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 10077,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 8052,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153997,
            "range": "± 7060",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 827494,
            "range": "± 5158",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4012613,
            "range": "± 28708",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 839375,
            "range": "± 15378",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14056,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12976,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32987527,
            "range": "± 146462",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 492397,
            "range": "± 2022",
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
          "id": "67ed1d453de79bc68b8b40181e5e895519004639",
          "message": "cache resolve in unknown member diagnostics",
          "timestamp": "2026-03-22T13:17:20+01:00",
          "tree_id": "7339b9353dbd4e0a2b9c4b9ecb0702832ba5c4e6",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/67ed1d453de79bc68b8b40181e5e895519004639"
        },
        "date": 1774182223206,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 560888,
            "range": "± 5700",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11051,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47703,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 106703,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 198748,
            "range": "± 4599",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160682,
            "range": "± 744",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 779267,
            "range": "± 2461",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1547634,
            "range": "± 11658",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37673,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11592,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7911,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10990,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2407285,
            "range": "± 11368",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 235347,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 148353,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12282,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12172,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87244,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9952,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7590,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153610,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 825915,
            "range": "± 7898",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3992931,
            "range": "± 39435",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 834032,
            "range": "± 6487",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 13761,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12523,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32856555,
            "range": "± 152384",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 510614,
            "range": "± 3594",
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
          "id": "c5b7aeae7891b0dd489582409f14bae48361bfb4",
          "message": "Fix resolving function return type FQN",
          "timestamp": "2026-03-22T13:41:25+01:00",
          "tree_id": "182e736949fec048e0074ff4f33fbcc2ac6a5b0f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/c5b7aeae7891b0dd489582409f14bae48361bfb4"
        },
        "date": 1774183676562,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 562640,
            "range": "± 8118",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10807,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48012,
            "range": "± 3613",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104061,
            "range": "± 1578",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197244,
            "range": "± 4902",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 159343,
            "range": "± 699",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 779442,
            "range": "± 5156",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1548164,
            "range": "± 119496",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38168,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11345,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7848,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11036,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2381859,
            "range": "± 10111",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 233754,
            "range": "± 5823",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152042,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11730,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12028,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87900,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9678,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 6921,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153601,
            "range": "± 1984",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 818354,
            "range": "± 5240",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3976250,
            "range": "± 26493",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 833524,
            "range": "± 3137",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14030,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12735,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32851259,
            "range": "± 130989",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 497674,
            "range": "± 2244",
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
          "id": "73b0b4f7275433cd2aa519e2146004a3e22136f5",
          "message": "Switch to fixed fork of stubs",
          "timestamp": "2026-03-22T13:48:34+01:00",
          "tree_id": "335cdaf9158f9eecf928e782db34cf478cb92e38",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/73b0b4f7275433cd2aa519e2146004a3e22136f5"
        },
        "date": 1774184118181,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 561328,
            "range": "± 5165",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10947,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 46841,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104737,
            "range": "± 1132",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 194206,
            "range": "± 5312",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156193,
            "range": "± 1431",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 764309,
            "range": "± 5072",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1517875,
            "range": "± 24999",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38013,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11151,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7687,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11276,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2379135,
            "range": "± 8406",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 232073,
            "range": "± 7048",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 151803,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11916,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12045,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86988,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 10152,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 6998,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154463,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 819206,
            "range": "± 3231",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4003845,
            "range": "± 68119",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 828539,
            "range": "± 8935",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14041,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12786,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 33107770,
            "range": "± 275450",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 498406,
            "range": "± 3405",
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
          "id": "0ec2c13362fa406ef2d7313950fe15517dfcdd46",
          "message": "Add bugs found using analyze",
          "timestamp": "2026-03-22T14:50:31+01:00",
          "tree_id": "fe83d956481fa696b108aa838e0bf80150a0cdba",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/0ec2c13362fa406ef2d7313950fe15517dfcdd46"
        },
        "date": 1774187827337,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 568568,
            "range": "± 10282",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10991,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47897,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105043,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197581,
            "range": "± 5300",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158077,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 763318,
            "range": "± 6413",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1526175,
            "range": "± 24276",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38260,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11316,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7685,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10994,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2376900,
            "range": "± 9645",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 233368,
            "range": "± 2676",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152109,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11796,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12278,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87865,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9878,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7733,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 157420,
            "range": "± 3754",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 818461,
            "range": "± 3757",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3959759,
            "range": "± 31324",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 825325,
            "range": "± 7489",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14061,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12723,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 32697354,
            "range": "± 244394",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 498087,
            "range": "± 5584",
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
          "id": "bde49312a64b9a97da07f670ef9765e5e726222f",
          "message": "Fix var scope",
          "timestamp": "2026-03-22T15:49:09+01:00",
          "tree_id": "e5ec7670c1e42beae0e38901493e1c20a0e12ea1",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/bde49312a64b9a97da07f670ef9765e5e726222f"
        },
        "date": 1774191336469,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 554777,
            "range": "± 3337",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10644,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49791,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105069,
            "range": "± 1031",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 198564,
            "range": "± 4709",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 159338,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 774842,
            "range": "± 2657",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1629041,
            "range": "± 24760",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37584,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11273,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7880,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11199,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2526402,
            "range": "± 58732",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 238294,
            "range": "± 9261",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 154994,
            "range": "± 697",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11603,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11840,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87291,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9521,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7101,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152370,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 810399,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3934194,
            "range": "± 27809",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 826264,
            "range": "± 2386",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14169,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12922,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 60768525,
            "range": "± 320751",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 495705,
            "range": "± 3516",
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
          "id": "22f5e79b2af31d96bfb9af157c5e3d1e658bd3f4",
          "message": "Handle inline narrowing",
          "timestamp": "2026-03-22T16:09:25+01:00",
          "tree_id": "1f06701d6631fb3d73a9e08e616d642d22f8de9d",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/22f5e79b2af31d96bfb9af157c5e3d1e658bd3f4"
        },
        "date": 1774192554039,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 569134,
            "range": "± 15852",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10592,
            "range": "± 711",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48357,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105198,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 196341,
            "range": "± 4785",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157605,
            "range": "± 878",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 766406,
            "range": "± 2732",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1557418,
            "range": "± 37551",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38155,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11588,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7849,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11048,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2437708,
            "range": "± 15528",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 237009,
            "range": "± 4978",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152748,
            "range": "± 925",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11859,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12016,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87606,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9877,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7424,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153226,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 828071,
            "range": "± 25673",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4441787,
            "range": "± 26775",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 841350,
            "range": "± 15923",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14357,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 13083,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 61265568,
            "range": "± 280913",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 500975,
            "range": "± 3121",
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
          "id": "55682192f0b95b44de2b0c667d2b51dcc52f5886",
          "message": "Update roadmap",
          "timestamp": "2026-03-22T17:16:27+01:00",
          "tree_id": "61700304121284f4615005583179b81d0d44a16c",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/55682192f0b95b44de2b0c667d2b51dcc52f5886"
        },
        "date": 1774196574444,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 554935,
            "range": "± 2222",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10764,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49112,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105951,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 196709,
            "range": "± 5432",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156952,
            "range": "± 2427",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 760625,
            "range": "± 8392",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1506477,
            "range": "± 20745",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37834,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11517,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8047,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11029,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2440013,
            "range": "± 54604",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 240739,
            "range": "± 8772",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 153532,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11938,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12059,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88261,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9595,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7163,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154402,
            "range": "± 972",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 824105,
            "range": "± 3554",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3969507,
            "range": "± 49541",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 831804,
            "range": "± 4908",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 15176,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 13777,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 61150598,
            "range": "± 1178694",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 505215,
            "range": "± 3568",
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
          "id": "6a740dc5afd18251108007989a34869b747318b1",
          "message": "Support type narrowing via ?->",
          "timestamp": "2026-03-22T17:34:03+01:00",
          "tree_id": "3254e9e00f6d9a250ccdd6527cefa150e747b73f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/6a740dc5afd18251108007989a34869b747318b1"
        },
        "date": 1774197639614,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 554243,
            "range": "± 7544",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10832,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47673,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104696,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 192445,
            "range": "± 5460",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 154542,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 746229,
            "range": "± 4478",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1494873,
            "range": "± 29576",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37986,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11469,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7856,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11007,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2427718,
            "range": "± 156079",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 234802,
            "range": "± 5784",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 153309,
            "range": "± 774",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12002,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12023,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87626,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9610,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7493,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154639,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 819378,
            "range": "± 4557",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4007372,
            "range": "± 70115",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 845218,
            "range": "± 4816",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14285,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 13009,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 60799387,
            "range": "± 341317",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 495373,
            "range": "± 2357",
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
          "id": "dfa104c46945cdb3e6b254db5a717b69035fd6ef",
          "message": "Cross-file null-safe method call chain",
          "timestamp": "2026-03-22T18:27:13+01:00",
          "tree_id": "49f49552effe485fe34e9555abbbe06797f91cc5",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/dfa104c46945cdb3e6b254db5a717b69035fd6ef"
        },
        "date": 1774200831893,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 554717,
            "range": "± 8315",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10814,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47969,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105304,
            "range": "± 1124",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 196491,
            "range": "± 5235",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156653,
            "range": "± 5706",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 760341,
            "range": "± 8288",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1515446,
            "range": "± 37567",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38223,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11447,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7964,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11113,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2431005,
            "range": "± 30117",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 231531,
            "range": "± 9136",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152896,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12062,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12023,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87151,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9783,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7008,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152866,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 810513,
            "range": "± 7561",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3928789,
            "range": "± 113496",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 808004,
            "range": "± 11632",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14359,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 13063,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 60534656,
            "range": "± 471554",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 493967,
            "range": "± 3570",
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
          "id": "42d4a6dfc0b9b186293286829e658c573c6cffae",
          "message": "Nullable type not resolved to its base class, incorrect namespace\napplied to @see",
          "timestamp": "2026-03-22T18:51:22+01:00",
          "tree_id": "99a3020f141e5e808b190b8cf11c3724b0c3a6dc",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/42d4a6dfc0b9b186293286829e658c573c6cffae"
        },
        "date": 1774202270500,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 559100,
            "range": "± 2329",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10605,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48499,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105837,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197399,
            "range": "± 4562",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158224,
            "range": "± 2728",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 766915,
            "range": "± 2698",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1523210,
            "range": "± 21709",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38562,
            "range": "± 1790",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11622,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8275,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10980,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2414414,
            "range": "± 9089",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 239688,
            "range": "± 7914",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 157701,
            "range": "± 8317",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11801,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11905,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88780,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9647,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7335,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153592,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 820907,
            "range": "± 33653",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3942356,
            "range": "± 34110",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 829199,
            "range": "± 8327",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14397,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 13138,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 62857309,
            "range": "± 3175853",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 503460,
            "range": "± 2487",
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
          "id": "c4cff65a53ef87d048a9105378a3f6e6060b7035",
          "message": "False-positive diagnostics for `$this` inside traits",
          "timestamp": "2026-03-22T19:52:28+01:00",
          "tree_id": "6cc6751fc767acc20cc22e078d146efe38e1b639",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/c4cff65a53ef87d048a9105378a3f6e6060b7035"
        },
        "date": 1774205937710,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 555710,
            "range": "± 5912",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10828,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47829,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104175,
            "range": "± 4517",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 194816,
            "range": "± 5136",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156032,
            "range": "± 4505",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 751562,
            "range": "± 2248",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1499024,
            "range": "± 25952",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 36201,
            "range": "± 1545",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10830,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7589,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10914,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2519493,
            "range": "± 118407",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 233703,
            "range": "± 2390",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 138907,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11660,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11854,
            "range": "± 1371",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84593,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9737,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7472,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152862,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 816907,
            "range": "± 4820",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3967765,
            "range": "± 40276",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 833973,
            "range": "± 5110",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 15026,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 13730,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 63226769,
            "range": "± 984114",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 498565,
            "range": "± 3321",
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
          "id": "e683151a178a98c6f5c700b475c1654a452a1183",
          "message": "Address false-positive argument count errors on overloaded built-in\nfunctions",
          "timestamp": "2026-03-22T20:14:29+01:00",
          "tree_id": "ff049ed47af1741c8e059507f192fdc6e7c3e02d",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/e683151a178a98c6f5c700b475c1654a452a1183"
        },
        "date": 1774207265517,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 556951,
            "range": "± 8192",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10743,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49910,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105742,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 194853,
            "range": "± 3685",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157698,
            "range": "± 3497",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 763430,
            "range": "± 5538",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1514547,
            "range": "± 23506",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38097,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11583,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8042,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10934,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2410672,
            "range": "± 10178",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 234535,
            "range": "± 4886",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 154754,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11713,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11968,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87057,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9649,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7083,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155832,
            "range": "± 849",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 827784,
            "range": "± 4602",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3985128,
            "range": "± 23218",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 831725,
            "range": "± 4230",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14570,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 13418,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 60948310,
            "range": "± 596254",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 489237,
            "range": "± 1397",
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
          "id": "a6c7e750fa71b644639a2fe1bad586638c524abc",
          "message": "Add support for PhpStormStubsElementAvailable",
          "timestamp": "2026-03-22T20:46:54+01:00",
          "tree_id": "c4f0305e212485181c04f1fb7fc24a990d9a2c83",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/a6c7e750fa71b644639a2fe1bad586638c524abc"
        },
        "date": 1774209206204,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 560228,
            "range": "± 3965",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11068,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47905,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 106450,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 201096,
            "range": "± 9912",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160575,
            "range": "± 1587",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 780781,
            "range": "± 5470",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1551954,
            "range": "± 20124",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37657,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11677,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8030,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11155,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2379517,
            "range": "± 24114",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 236714,
            "range": "± 5913",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 148416,
            "range": "± 6405",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11863,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12131,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86330,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9610,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7420,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152072,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 817814,
            "range": "± 13346",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3959995,
            "range": "± 146497",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 823583,
            "range": "± 4280",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 14230,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 12968,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 59913861,
            "range": "± 307404",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 494297,
            "range": "± 2655",
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
          "id": "613e6cfad19d8ce5de60bf0c022df254a9abe977",
          "message": "Fix variable reassignment loses type when parameter name is reused",
          "timestamp": "2026-03-22T20:58:40+01:00",
          "tree_id": "92101ab09167ed7a5d1e88cb13f6246d4c46c960",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/613e6cfad19d8ce5de60bf0c022df254a9abe977"
        },
        "date": 1774209918949,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 552745,
            "range": "± 17723",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11035,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47261,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105635,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 196858,
            "range": "± 6100",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160853,
            "range": "± 1091",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 774196,
            "range": "± 3351",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1538548,
            "range": "± 23195",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37484,
            "range": "± 1976",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11833,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8078,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11198,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2423230,
            "range": "± 7245",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 235998,
            "range": "± 8767",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 150308,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11881,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12051,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 85966,
            "range": "± 1716",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9745,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7244,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 151606,
            "range": "± 3057",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 811272,
            "range": "± 9753",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3903705,
            "range": "± 18143",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 823511,
            "range": "± 4384",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17259,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15995,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 62037942,
            "range": "± 519061",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 494339,
            "range": "± 4747",
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
          "id": "dc7063fdc3adb707528e0a7ec88062020cee14e4",
          "message": "Remove won't fix from Laravel todo",
          "timestamp": "2026-03-22T21:33:28+01:00",
          "tree_id": "a291f3661036064da3de363ca53923ec54544a30",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/dc7063fdc3adb707528e0a7ec88062020cee14e4"
        },
        "date": 1774212011024,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 562727,
            "range": "± 8663",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10481,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 45675,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 103439,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 195560,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 151336,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 761116,
            "range": "± 4730",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1535856,
            "range": "± 32711",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 34436,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11565,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8150,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11139,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2459296,
            "range": "± 17072",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 231138,
            "range": "± 4368",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 149029,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11374,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11808,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 82167,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9521,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7389,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 140979,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 787645,
            "range": "± 7089",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3988228,
            "range": "± 208739",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 797935,
            "range": "± 5169",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17686,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16367,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 60568816,
            "range": "± 573606",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 486664,
            "range": "± 6571",
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
          "id": "0c865d2d710bae04cccd16486af6c0af802ff4a2",
          "message": "Fix build",
          "timestamp": "2026-03-23T08:16:45+01:00",
          "tree_id": "ca791c03dda07fb4b3f2e8eb9260912ad52aca44",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/0c865d2d710bae04cccd16486af6c0af802ff4a2"
        },
        "date": 1774250603286,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 561721,
            "range": "± 10155",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10945,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48350,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105805,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 198017,
            "range": "± 4632",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158556,
            "range": "± 1252",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 768004,
            "range": "± 3557",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1529219,
            "range": "± 37784",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38581,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11864,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8148,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11347,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2483019,
            "range": "± 25601",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 232589,
            "range": "± 6733",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 158764,
            "range": "± 3393",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12080,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11986,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88196,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9884,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7702,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154196,
            "range": "± 2826",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 824172,
            "range": "± 8747",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3947594,
            "range": "± 20251",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 821466,
            "range": "± 4121",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17376,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16136,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 62343662,
            "range": "± 370153",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 492264,
            "range": "± 1955",
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
          "id": "1c81cebcddbe5ba98f8b4aa03614748ca438ef6c",
          "message": "Handle `instanceof self/static/parent` narrowing",
          "timestamp": "2026-03-23T09:33:08+01:00",
          "tree_id": "d2db6bbc8737ac93b9423f056c84d263a67504f8",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/1c81cebcddbe5ba98f8b4aa03614748ca438ef6c"
        },
        "date": 1774255191465,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 555266,
            "range": "± 8583",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11009,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 47198,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105983,
            "range": "± 1930",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 196410,
            "range": "± 5041",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158680,
            "range": "± 694",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 768176,
            "range": "± 7532",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1525892,
            "range": "± 25166",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37456,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11159,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7800,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11249,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2630723,
            "range": "± 26715",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 235887,
            "range": "± 7141",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 145871,
            "range": "± 2885",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12023,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11940,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84971,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9628,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 6914,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152897,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 820898,
            "range": "± 4247",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3973609,
            "range": "± 46739",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 828892,
            "range": "± 10216",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17178,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15869,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 63632991,
            "range": "± 225770",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 496348,
            "range": "± 3798",
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
          "id": "1abdb06cb765b80dd3a6e8094e2d334c7648d253",
          "message": "Fix a couple of var assignment issues.",
          "timestamp": "2026-03-23T10:53:30+01:00",
          "tree_id": "6803bf71b91ae87b19f025915162a8333d4fa311",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/1abdb06cb765b80dd3a6e8094e2d334c7648d253"
        },
        "date": 1774260000569,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 565938,
            "range": "± 5465",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11110,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 50428,
            "range": "± 1751",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 107225,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 202382,
            "range": "± 7694",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160442,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 777015,
            "range": "± 1905",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1548525,
            "range": "± 33906",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37431,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11605,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7955,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11351,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2379157,
            "range": "± 35348",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 234165,
            "range": "± 6662",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 148624,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12139,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12061,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86304,
            "range": "± 3518",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9593,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7373,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152990,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 815338,
            "range": "± 17241",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3926606,
            "range": "± 17359",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 826738,
            "range": "± 19053",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16965,
            "range": "± 778",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15641,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 63534334,
            "range": "± 232724",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 500217,
            "range": "± 2662",
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
          "id": "32fb4b9a2cb2fb0a08f2e17622cd37ca0939f647",
          "message": "Guard clause narrowing across instanceof branches",
          "timestamp": "2026-03-23T11:29:11+01:00",
          "tree_id": "a7f3aa452f7e2f0e40272b2df7a3f8a172fd0236",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/32fb4b9a2cb2fb0a08f2e17622cd37ca0939f647"
        },
        "date": 1774262172754,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 559224,
            "range": "± 2350",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10771,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48608,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104678,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 196689,
            "range": "± 4616",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 155441,
            "range": "± 1181",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 753122,
            "range": "± 5123",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1487759,
            "range": "± 14190",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37922,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11484,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8170,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11207,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2376513,
            "range": "± 10252",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 236334,
            "range": "± 7551",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 153730,
            "range": "± 1740",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11686,
            "range": "± 834",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12224,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87527,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9683,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7639,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152053,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 809759,
            "range": "± 5723",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3919653,
            "range": "± 23996",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 816571,
            "range": "± 4345",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16987,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15858,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 81889436,
            "range": "± 438795",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 502932,
            "range": "± 3001",
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
          "id": "843d8c7b1acf834af9fce84d83f31d35c475b5d8",
          "message": "Update roadmap",
          "timestamp": "2026-03-23T11:44:10+01:00",
          "tree_id": "5b4304fe4929ab4c5635ea1bf97d512ff96c6faa",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/843d8c7b1acf834af9fce84d83f31d35c475b5d8"
        },
        "date": 1774263048789,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 559069,
            "range": "± 1682",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10713,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48464,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104651,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 194726,
            "range": "± 6428",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157567,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 762998,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1515624,
            "range": "± 19855",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37138,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11676,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8077,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10997,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2375402,
            "range": "± 7309",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 236414,
            "range": "± 6549",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152466,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11602,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12078,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87165,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9685,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7502,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153319,
            "range": "± 3452",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 816520,
            "range": "± 3566",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3937250,
            "range": "± 22508",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 823162,
            "range": "± 2633",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16866,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15647,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 81876041,
            "range": "± 473708",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 508225,
            "range": "± 2612",
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
          "id": "d05340e5b7f5168f972a04ddb91ad3bfcb17ff2e",
          "message": "Handle null-coalesce (`??`) type refinement",
          "timestamp": "2026-03-23T11:47:09+01:00",
          "tree_id": "a4c687ea462ccbcf84f37b8a85a2f8989dbf9ace",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/d05340e5b7f5168f972a04ddb91ad3bfcb17ff2e"
        },
        "date": 1774263218381,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 563492,
            "range": "± 3743",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10947,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49381,
            "range": "± 794",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105921,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 201343,
            "range": "± 6003",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157343,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 767954,
            "range": "± 7381",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1513551,
            "range": "± 41379",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37595,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10931,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7593,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11170,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2327128,
            "range": "± 42025",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 234006,
            "range": "± 6209",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 147752,
            "range": "± 2370",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11947,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12006,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 85980,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9736,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7578,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153531,
            "range": "± 7696",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 810055,
            "range": "± 5811",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3900238,
            "range": "± 16656",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 823165,
            "range": "± 3254",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17025,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15715,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 82334674,
            "range": "± 480957",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 495708,
            "range": "± 3860",
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
          "id": "305003a7be8e7981498acce75bc45b11379793d0",
          "message": "Fix hover one dead code",
          "timestamp": "2026-03-23T12:03:01+01:00",
          "tree_id": "d6720b6bbb033a9029b24dbfb8ceed40da5ee911",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/305003a7be8e7981498acce75bc45b11379793d0"
        },
        "date": 1774264173362,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 567410,
            "range": "± 3317",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11047,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48645,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 106109,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197596,
            "range": "± 4777",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158414,
            "range": "± 3069",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 765096,
            "range": "± 6658",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1520768,
            "range": "± 28020",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37321,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11170,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7653,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11120,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2550587,
            "range": "± 19567",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 235787,
            "range": "± 8984",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 144226,
            "range": "± 7967",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11829,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12108,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84776,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9666,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7592,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154143,
            "range": "± 945",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 821467,
            "range": "± 3817",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3972707,
            "range": "± 26041",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 840408,
            "range": "± 9701",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17384,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15936,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 80756865,
            "range": "± 598493",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 496441,
            "range": "± 7437",
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
          "id": "5bf299b712457087064b612bcbd6f389fe62947a",
          "message": "Add new bugs to list",
          "timestamp": "2026-03-23T12:48:35+01:00",
          "tree_id": "8e7a62f372dbdaf21d194da3acef23b3275a8e77",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/5bf299b712457087064b612bcbd6f389fe62947a"
        },
        "date": 1774266921118,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 573515,
            "range": "± 4781",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10537,
            "range": "± 937",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 46766,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 103871,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 193220,
            "range": "± 6701",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161552,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 796765,
            "range": "± 2606",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1582568,
            "range": "± 45621",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 34561,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11094,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7797,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10885,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2750283,
            "range": "± 15975",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 222561,
            "range": "± 6832",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 127338,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11376,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11774,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 82458,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9619,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7444,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 150569,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 830762,
            "range": "± 3382",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4074339,
            "range": "± 16992",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 836974,
            "range": "± 4875",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17803,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16468,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 80522762,
            "range": "± 374030",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 534279,
            "range": "± 13436",
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
          "id": "e5d9ffd56ce3c4e4a2a59acd27c558cce2d12d22",
          "message": "Fix some consistency issues between tools",
          "timestamp": "2026-03-23T13:18:47+01:00",
          "tree_id": "5bf0f84d1053df08d03e993b57f4f317c08556ac",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/e5d9ffd56ce3c4e4a2a59acd27c558cce2d12d22"
        },
        "date": 1774268758918,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 563725,
            "range": "± 4282",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10746,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48096,
            "range": "± 1720",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105363,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 195003,
            "range": "± 5888",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 155664,
            "range": "± 1569",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 755821,
            "range": "± 3916",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1508833,
            "range": "± 23304",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37819,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11338,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7826,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11242,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2388920,
            "range": "± 20340",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 238135,
            "range": "± 8617",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152655,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11740,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12172,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87088,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9712,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7316,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154586,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 826236,
            "range": "± 5692",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4069901,
            "range": "± 90056",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 841656,
            "range": "± 8447",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17527,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16162,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 82005940,
            "range": "± 461041",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 499002,
            "range": "± 4069",
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
          "id": "e50bb4e575b803015dcad31cf0cc216e30ccebfd",
          "message": "Fix interface-extends-interface constants",
          "timestamp": "2026-03-23T13:45:31+01:00",
          "tree_id": "63ade494b6363db19d53776ab7ef751d9cb4a51c",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/e50bb4e575b803015dcad31cf0cc216e30ccebfd"
        },
        "date": 1774270343303,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 563266,
            "range": "± 13213",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10948,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49398,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 106471,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 199656,
            "range": "± 6767",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 159187,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 776990,
            "range": "± 8737",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1535292,
            "range": "± 19152",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37157,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11514,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8130,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11119,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2652440,
            "range": "± 58953",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 233007,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 146347,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11879,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12002,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86361,
            "range": "± 1400",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9510,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7387,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152474,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 813248,
            "range": "± 4633",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3926198,
            "range": "± 33595",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 822944,
            "range": "± 4715",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17912,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16456,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 83292785,
            "range": "± 662561",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 495672,
            "range": "± 2557",
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
          "id": "8c65540b1646852bf63084144836be7a9e1fd2a9",
          "message": "Variable type resolved from reassignment target inside RHS expression",
          "timestamp": "2026-03-23T18:39:08+01:00",
          "tree_id": "ee7e505fad5d02958ab13299f68145822fde888e",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/8c65540b1646852bf63084144836be7a9e1fd2a9"
        },
        "date": 1774287955627,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 556774,
            "range": "± 2253",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11070,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 46920,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 105562,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197631,
            "range": "± 5601",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157699,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 770523,
            "range": "± 7478",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1526488,
            "range": "± 22088",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37375,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11678,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8198,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 10920,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2630796,
            "range": "± 9259",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 239179,
            "range": "± 7547",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 146051,
            "range": "± 3129",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12058,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12026,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84726,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9594,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7654,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152470,
            "range": "± 801",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 807306,
            "range": "± 3074",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3891466,
            "range": "± 15302",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 823560,
            "range": "± 7453",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17303,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15938,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 80365301,
            "range": "± 1844253",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 501152,
            "range": "± 13381",
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
          "id": "b3a1c6af40d8f2ebb8387e2cc2331885b40ec60d",
          "message": "Handle `@mixin` generic substitution",
          "timestamp": "2026-03-23T19:35:48+01:00",
          "tree_id": "d33151d7a1cb87266f05469ae6b81edf0a97724f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/b3a1c6af40d8f2ebb8387e2cc2331885b40ec60d"
        },
        "date": 1774291387690,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 553581,
            "range": "± 2365",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 10942,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48841,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 106168,
            "range": "± 3218",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197994,
            "range": "± 4844",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 159286,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 779137,
            "range": "± 6919",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1544848,
            "range": "± 26320",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37435,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11280,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7887,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11254,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2643696,
            "range": "± 43323",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 240396,
            "range": "± 7123",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 147146,
            "range": "± 4744",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12005,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12052,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84238,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9763,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7622,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153771,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 819056,
            "range": "± 6541",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3929927,
            "range": "± 140195",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 838937,
            "range": "± 4092",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17053,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15792,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 83611983,
            "range": "± 531064",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 502923,
            "range": "± 3240",
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
          "id": "6f2ed86d7ef832820d7ff2f842deff9de5600320",
          "message": "Generic substitution through transitive interface chains",
          "timestamp": "2026-03-23T19:55:55+01:00",
          "tree_id": "698c6a28624ae09d0352e95d994d726c13be86a4",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/6f2ed86d7ef832820d7ff2f842deff9de5600320"
        },
        "date": 1774292549648,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 555735,
            "range": "± 5138",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11241,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49951,
            "range": "± 2333",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 106122,
            "range": "± 4871",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197987,
            "range": "± 4323",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158553,
            "range": "± 1812",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 771872,
            "range": "± 4200",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1523553,
            "range": "± 19557",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 37828,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11369,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7878,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11225,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2575460,
            "range": "± 8271",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 231580,
            "range": "± 3463",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 150590,
            "range": "± 3097",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 12324,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11827,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84869,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9709,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7567,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154748,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 820568,
            "range": "± 4348",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3903579,
            "range": "± 23112",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 827004,
            "range": "± 113311",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17267,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15857,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 81620449,
            "range": "± 423104",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 498702,
            "range": "± 3031",
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
          "id": "d745e105244958ad6b11fcaa29709143d143a96b",
          "message": "Fix discrepency between compleation and hover",
          "timestamp": "2026-03-23T22:11:47+01:00",
          "tree_id": "14ac0b6eefca6c5f7e2ba3e2f49da21be46d5e87",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/d745e105244958ad6b11fcaa29709143d143a96b"
        },
        "date": 1774300708526,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 567108,
            "range": "± 9732",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 11022,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48772,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 104856,
            "range": "± 1002",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 195582,
            "range": "± 4715",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156697,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 756052,
            "range": "± 5010",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1506241,
            "range": "± 35544",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 38135,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11502,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8113,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 11360,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2684819,
            "range": "± 20798",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 232886,
            "range": "± 10993",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 156723,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 11896,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12171,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88418,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 9823,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 7705,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 156534,
            "range": "± 3350",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 834591,
            "range": "± 3779",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3970658,
            "range": "± 31615",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 903318,
            "range": "± 3494",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17054,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15972,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 79633500,
            "range": "± 607193",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 496939,
            "range": "± 3643",
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
          "id": "44f99ad51f77e690ba11469678c5e36c98916629",
          "message": "Unify type resolver",
          "timestamp": "2026-03-24T13:58:35+01:00",
          "tree_id": "533be499aebffd401d8ef33c4aea7906b36daa62",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/44f99ad51f77e690ba11469678c5e36c98916629"
        },
        "date": 1774357628684,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 575836,
            "range": "± 8632",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14654,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48465,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 109224,
            "range": "± 513",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 201269,
            "range": "± 4329",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 155618,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 763757,
            "range": "± 3027",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1525367,
            "range": "± 58286",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 39577,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 12186,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8662,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 14922,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2653661,
            "range": "± 21279",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 237042,
            "range": "± 4821",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 149896,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 14908,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12679,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84884,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15507,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 13503,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 143681,
            "range": "± 3696",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 796534,
            "range": "± 2765",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3852676,
            "range": "± 62953",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 810579,
            "range": "± 3420",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17399,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16116,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 96089039,
            "range": "± 612959",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 535650,
            "range": "± 4672",
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
          "id": "644a89690a98d4a31b65ee993382ff92855963ca",
          "message": "Fix performance degradation from recent type resolution improvements, and clean up changelog",
          "timestamp": "2026-03-24T15:25:17+01:00",
          "tree_id": "630da2357d832ef3f5398a60be540ab213ca380c",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/644a89690a98d4a31b65ee993382ff92855963ca"
        },
        "date": 1774362721740,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 570160,
            "range": "± 13875",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14065,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 50013,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 110976,
            "range": "± 2372",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 205781,
            "range": "± 5938",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160003,
            "range": "± 3153",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 765196,
            "range": "± 4160",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1518491,
            "range": "± 135884",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 41315,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11340,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7892,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 13781,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2628986,
            "range": "± 66304",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 240309,
            "range": "± 5922",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 145996,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 14957,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12728,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86152,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15014,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12793,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155246,
            "range": "± 3144",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 819453,
            "range": "± 2986",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3915376,
            "range": "± 16157",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 833066,
            "range": "± 3701",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17439,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16033,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76305884,
            "range": "± 511157",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 568227,
            "range": "± 11760",
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
          "id": "c16623d5dc7ec64d662dcd64c29951d041e50e14",
          "message": "Detect pollyfill and use active implementation",
          "timestamp": "2026-03-24T16:08:04+01:00",
          "tree_id": "ac11899485fd9abeee4516c2a67c7afc2c44bd06",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/c16623d5dc7ec64d662dcd64c29951d041e50e14"
        },
        "date": 1774365287392,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 560882,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14153,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 52194,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 112440,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 205229,
            "range": "± 5878",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 165423,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 793811,
            "range": "± 4063",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1572847,
            "range": "± 11236",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 42406,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11680,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8111,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 14375,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2432030,
            "range": "± 16252",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 241044,
            "range": "± 19089",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152628,
            "range": "± 1860",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 14825,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12226,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86921,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 14976,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12533,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154355,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 818144,
            "range": "± 3715",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3910569,
            "range": "± 13340",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 827531,
            "range": "± 5291",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17506,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16070,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76718375,
            "range": "± 563483",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 546833,
            "range": "± 3495",
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
          "id": "dfc1be4f75201a12de27a4691057d38b0a68a262",
          "message": "Handle instanceof intersections",
          "timestamp": "2026-03-24T17:02:54+01:00",
          "tree_id": "2436ed3fb62f56e62096bfd5e641a3dbf1d48aa1",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/dfc1be4f75201a12de27a4691057d38b0a68a262"
        },
        "date": 1774368563416,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 562449,
            "range": "± 17456",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 13884,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48847,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 109821,
            "range": "± 946",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 201673,
            "range": "± 6865",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 159173,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 758895,
            "range": "± 2958",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1508204,
            "range": "± 25116",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 41064,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10895,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7561,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 14088,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2517086,
            "range": "± 18333",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 240997,
            "range": "± 5836",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 140432,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 14399,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12001,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 83874,
            "range": "± 962",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 14759,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12179,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155791,
            "range": "± 12303",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 827490,
            "range": "± 6572",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3905842,
            "range": "± 31971",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 838680,
            "range": "± 14179",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17233,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15866,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76172845,
            "range": "± 783754",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 547438,
            "range": "± 4071",
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
          "id": "bba69dcdc96e44bdc623ed097f5d35fd9529ea99",
          "message": "Fix stale stubs",
          "timestamp": "2026-03-24T17:08:59+01:00",
          "tree_id": "2d482cc7d1b9dbe75bff11b5917b5b7da78b217a",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/bba69dcdc96e44bdc623ed097f5d35fd9529ea99"
        },
        "date": 1774368925062,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 562336,
            "range": "± 7956",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 13798,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 49021,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 110168,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 200896,
            "range": "± 5863",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156320,
            "range": "± 2800",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 745716,
            "range": "± 3174",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1478609,
            "range": "± 22662",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 41192,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10745,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7669,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 14235,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2507689,
            "range": "± 39701",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 240819,
            "range": "± 6753",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 140572,
            "range": "± 1754",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 14439,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11987,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84420,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15072,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11899,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152959,
            "range": "± 8660",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 813284,
            "range": "± 3423",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3878649,
            "range": "± 31308",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 822173,
            "range": "± 3710",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17415,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15886,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75969344,
            "range": "± 457040",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 546477,
            "range": "± 3438",
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
          "id": "ec07e5d07f98b3671ffbdaa07c230bbf0b84f3aa",
          "message": "Fix `self::/static::/parent::` in member access chains",
          "timestamp": "2026-03-24T17:15:50+01:00",
          "tree_id": "4a19f3b01b6596bdadd9873b14f3a8e7d7bd48a9",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/ec07e5d07f98b3671ffbdaa07c230bbf0b84f3aa"
        },
        "date": 1774369343900,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 586879,
            "range": "± 4222",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 13564,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 48148,
            "range": "± 1146",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 109148,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 197202,
            "range": "± 6654",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 167456,
            "range": "± 2053",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 814531,
            "range": "± 15345",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1630866,
            "range": "± 22995",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 39348,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11530,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7968,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 13528,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2741623,
            "range": "± 23590",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 236334,
            "range": "± 9497",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 138308,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 14333,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 11962,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84392,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 14415,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12112,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 151904,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 837332,
            "range": "± 2748",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4050139,
            "range": "± 19277",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 838517,
            "range": "± 3424",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17695,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16257,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75351208,
            "range": "± 450816",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 572356,
            "range": "± 3324",
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
          "id": "846e3080525a53f2ac043847d2b88e60b8f8c369",
          "message": "Handle closures inside of anonomous classes",
          "timestamp": "2026-03-24T17:52:41+01:00",
          "tree_id": "82eca2d01a4fe2440ffa20b7b6106c92c141ab2f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/846e3080525a53f2ac043847d2b88e60b8f8c369"
        },
        "date": 1774371556195,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 569047,
            "range": "± 3474",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14147,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 51027,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 110159,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 203012,
            "range": "± 7318",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160909,
            "range": "± 2207",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 764326,
            "range": "± 15553",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1528689,
            "range": "± 25478",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 42173,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11166,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7802,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 13978,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2468640,
            "range": "± 74496",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 241260,
            "range": "± 6570",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 154948,
            "range": "± 2839",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 15132,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12193,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87265,
            "range": "± 997",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 14624,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12886,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153786,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 819926,
            "range": "± 12235",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3914924,
            "range": "± 26098",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 830152,
            "range": "± 8623",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16904,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15573,
            "range": "± 1613",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75331002,
            "range": "± 1287474",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 582470,
            "range": "± 7728",
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
          "id": "f55cd796ed40c48c257f3989eb806f94cde94b16",
          "message": "Better syntax error messages",
          "timestamp": "2026-03-24T18:40:24+01:00",
          "tree_id": "d7d74d1643c399323ec61389492d7e7a50a7069c",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/f55cd796ed40c48c257f3989eb806f94cde94b16"
        },
        "date": 1774374422630,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 567808,
            "range": "± 6823",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 13196,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 51124,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 110600,
            "range": "± 2932",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 205034,
            "range": "± 7795",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 159864,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 763498,
            "range": "± 4477",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1510453,
            "range": "± 142656",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 41419,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11179,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7856,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 14120,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2537339,
            "range": "± 19270",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 243809,
            "range": "± 5991",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 141632,
            "range": "± 2525",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 14791,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12237,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84736,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15125,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12907,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155359,
            "range": "± 1495",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 823464,
            "range": "± 5808",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3922546,
            "range": "± 19476",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 831752,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16801,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15560,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76084756,
            "range": "± 825248",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 571024,
            "range": "± 2884",
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
          "id": "74367adbf959d4dc81c9cf31be5b14585defb037",
          "message": "Fix double parentheses when renaming calls",
          "timestamp": "2026-03-24T18:55:52+01:00",
          "tree_id": "dcb5efa0ed41528faf03f017f558ee60613e36fb",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/74367adbf959d4dc81c9cf31be5b14585defb037"
        },
        "date": 1774375867156,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 555356,
            "range": "± 3696",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14098,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 50071,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 112282,
            "range": "± 1754",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 204723,
            "range": "± 6002",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 164108,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 782604,
            "range": "± 3928",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1553109,
            "range": "± 16725",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 42556,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11377,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7918,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 14100,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2528342,
            "range": "± 18404",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 244322,
            "range": "± 7610",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 155130,
            "range": "± 953",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 14734,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12344,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87305,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15148,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11365,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 153817,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 817928,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3899677,
            "range": "± 27640",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 828539,
            "range": "± 37582",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16929,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15545,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 74477216,
            "range": "± 365846",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 571188,
            "range": "± 3400",
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
          "id": "12699aadde1424455404e595eda584422546f337",
          "message": "Improve function / method compleation visually",
          "timestamp": "2026-03-25T00:27:42+01:00",
          "tree_id": "b0a4e04e4f38c814f80fc3f712edece930c14b78",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/12699aadde1424455404e595eda584422546f337"
        },
        "date": 1774395276458,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 579750,
            "range": "± 4176",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14645,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 64707,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 126677,
            "range": "± 3948",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 262744,
            "range": "± 7539",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 162271,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 767354,
            "range": "± 6798",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1529438,
            "range": "± 42565",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44692,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11359,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7856,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17543,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2583978,
            "range": "± 12227",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 354662,
            "range": "± 5333",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 146608,
            "range": "± 3808",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17270,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12762,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88260,
            "range": "± 848",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15476,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11810,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154433,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 832860,
            "range": "± 4902",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4116265,
            "range": "± 76690",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 852703,
            "range": "± 4680",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17090,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15713,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76799640,
            "range": "± 333192",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 593803,
            "range": "± 9365",
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
          "id": "acb26985849a7250e865de264c33b6ad6b0a6417",
          "message": "Update roadmap",
          "timestamp": "2026-03-25T02:35:33+01:00",
          "tree_id": "623069ff183359d800b1acac8eb4ed96fb7c2776",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/acb26985849a7250e865de264c33b6ad6b0a6417"
        },
        "date": 1774402939634,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 572689,
            "range": "± 7803",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14751,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63408,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 125674,
            "range": "± 2807",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 263231,
            "range": "± 4015",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161228,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 766893,
            "range": "± 4711",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1527134,
            "range": "± 20526",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44043,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11504,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8009,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17117,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2583613,
            "range": "± 14506",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 348312,
            "range": "± 6337",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 145626,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17450,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12603,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87584,
            "range": "± 1884",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15723,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11489,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154553,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 826982,
            "range": "± 3727",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4069075,
            "range": "± 66542",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 836176,
            "range": "± 3798",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17098,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15715,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76263810,
            "range": "± 478816",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 590136,
            "range": "± 3851",
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
          "id": "ad14df92ea6a9f3dc88a75466c633d49ae1217f2",
          "message": "Infer type from consts",
          "timestamp": "2026-03-25T03:16:13+01:00",
          "tree_id": "6bb031f550ef308530c8345120742ef2f4c236ba",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/ad14df92ea6a9f3dc88a75466c633d49ae1217f2"
        },
        "date": 1774405383656,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 580062,
            "range": "± 5023",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14493,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63480,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 126946,
            "range": "± 2982",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 262576,
            "range": "± 3774",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161479,
            "range": "± 4039",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 767671,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1528232,
            "range": "± 77673",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44884,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11054,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7926,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17020,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2483900,
            "range": "± 27944",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 354019,
            "range": "± 4439",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 153908,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17092,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 13053,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 90002,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15403,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11323,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155671,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 826058,
            "range": "± 15097",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4037870,
            "range": "± 26149",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 843399,
            "range": "± 4708",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17142,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15952,
            "range": "± 936",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 79947725,
            "range": "± 1371917",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 584354,
            "range": "± 4148",
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
          "id": "6a8c131079ce6a52d756bbb86649651a4a66fce8",
          "message": "A little bit of cleanup",
          "timestamp": "2026-03-25T10:24:23+01:00",
          "tree_id": "6ec3fdeb0d35aaca8b4af939b29816773623ae5f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/6a8c131079ce6a52d756bbb86649651a4a66fce8"
        },
        "date": 1774431061318,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 563117,
            "range": "± 18303",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14098,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63081,
            "range": "± 1522",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 124151,
            "range": "± 3137",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 263647,
            "range": "± 4356",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157868,
            "range": "± 14621",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 757137,
            "range": "± 4982",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1497150,
            "range": "± 41983",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 43527,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11485,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7948,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17287,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2378060,
            "range": "± 14873",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 343936,
            "range": "± 4613",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 143605,
            "range": "± 976",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16852,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12727,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87573,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15226,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12441,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155259,
            "range": "± 1729",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 821424,
            "range": "± 4067",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4002423,
            "range": "± 26987",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 831694,
            "range": "± 4110",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17231,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15877,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 78499280,
            "range": "± 249602",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 593406,
            "range": "± 25505",
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
          "id": "35a3495ec975a84cfa2e99bb43e900bbf0964e17",
          "message": "A little bit of cleanup",
          "timestamp": "2026-03-25T10:25:39+01:00",
          "tree_id": "577cfa5fc722950057f4c4cd5c998f7856c336cf",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/35a3495ec975a84cfa2e99bb43e900bbf0964e17"
        },
        "date": 1774431140589,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 568852,
            "range": "± 3483",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14445,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62631,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 125382,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 261913,
            "range": "± 4260",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 159090,
            "range": "± 2847",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 755826,
            "range": "± 3853",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1497944,
            "range": "± 11754",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 43823,
            "range": "± 655",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11463,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7978,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17475,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2385002,
            "range": "± 8128",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 340525,
            "range": "± 3569",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 143603,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17142,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12879,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88177,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15564,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12287,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155315,
            "range": "± 898",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 826319,
            "range": "± 4403",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4025747,
            "range": "± 139733",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 841338,
            "range": "± 4797",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17111,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15897,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 79560756,
            "range": "± 523743",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 596204,
            "range": "± 3697",
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
          "id": "d78268659d71af0d3e8667fac32d05463efa0394",
          "message": "A little bit of cleanup",
          "timestamp": "2026-03-25T10:31:19+01:00",
          "tree_id": "bda7335074a3bd9a3d25df5397ee76cecc656a93",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/d78268659d71af0d3e8667fac32d05463efa0394"
        },
        "date": 1774431477324,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 568031,
            "range": "± 1623",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14002,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 59111,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 119969,
            "range": "± 2543",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 243198,
            "range": "± 3757",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 153281,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 754726,
            "range": "± 3534",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1514590,
            "range": "± 17844",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 41724,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11690,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8329,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16982,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2532283,
            "range": "± 41819",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 315794,
            "range": "± 3693",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 149730,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16556,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12556,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84885,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16016,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10532,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 143415,
            "range": "± 832",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 803778,
            "range": "± 4979",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4096303,
            "range": "± 86990",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 812543,
            "range": "± 11155",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17231,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16031,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75450011,
            "range": "± 406740",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 572684,
            "range": "± 6608",
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
          "distinct": false,
          "id": "5f61229f3d9f5f8f086fcfccd32c60ea095342cb",
          "message": "Fix enum case rename",
          "timestamp": "2026-03-25T23:50:29+01:00",
          "tree_id": "38f9d15c54039e29bcb2a235b3c31701fb150ee6",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/5f61229f3d9f5f8f086fcfccd32c60ea095342cb"
        },
        "date": 1774480793729,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 567866,
            "range": "± 7746",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14457,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61774,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 127493,
            "range": "± 4069",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 264916,
            "range": "± 5131",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160553,
            "range": "± 5206",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 762976,
            "range": "± 4485",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1523805,
            "range": "± 23446",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44335,
            "range": "± 2208",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11441,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7949,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17043,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2411582,
            "range": "± 12205",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 337283,
            "range": "± 20191",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 145915,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17000,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12737,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87878,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15663,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11095,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154178,
            "range": "± 891",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 826942,
            "range": "± 15919",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4030277,
            "range": "± 32796",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 838533,
            "range": "± 15159",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17198,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15784,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77538534,
            "range": "± 372669",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 600516,
            "range": "± 14864",
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
          "id": "2f60eadd6dd0b6f701ba83fe2d4cc40b3bca59ea",
          "message": "Fix self with templates",
          "timestamp": "2026-03-26T00:42:28+01:00",
          "tree_id": "4b3b754e06893eefc3677c500323c44b5b5570df",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/2f60eadd6dd0b6f701ba83fe2d4cc40b3bca59ea"
        },
        "date": 1774482593461,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 570123,
            "range": "± 5557",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14142,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62273,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 126678,
            "range": "± 2165",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 258393,
            "range": "± 4646",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161088,
            "range": "± 1817",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 763040,
            "range": "± 2703",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1523282,
            "range": "± 42777",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 43536,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11440,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7898,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17010,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2511101,
            "range": "± 106147",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 343163,
            "range": "± 4036",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 143406,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16940,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12765,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87102,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15434,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11418,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155736,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 836018,
            "range": "± 6511",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4045979,
            "range": "± 47128",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 843871,
            "range": "± 4017",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17367,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15823,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 81237861,
            "range": "± 549293",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 576658,
            "range": "± 6055",
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
          "id": "7ec44c824d8c31c773921bf511ab6b81f811c639",
          "message": "Fix self with templates",
          "timestamp": "2026-03-26T00:44:00+01:00",
          "tree_id": "c628a18eb4491c3d6c3c6e955d25cdaa15a26be2",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/7ec44c824d8c31c773921bf511ab6b81f811c639"
        },
        "date": 1774482643735,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 578879,
            "range": "± 7736",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 13983,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61446,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 121325,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 256223,
            "range": "± 3361",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 166440,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 808820,
            "range": "± 4488",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1595800,
            "range": "± 28910",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 40849,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11172,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7821,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16640,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2725972,
            "range": "± 233975",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 319701,
            "range": "± 4355",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 134004,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16378,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12721,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 86554,
            "range": "± 889",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15157,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10642,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 151817,
            "range": "± 6091",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 855485,
            "range": "± 30539",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4105099,
            "range": "± 26813",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 843262,
            "range": "± 6743",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17538,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16085,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77305635,
            "range": "± 248379",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 603669,
            "range": "± 1993",
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
          "id": "05c6a41e29b14d6cae3f4c76151c7b308f4725b1",
          "message": "Fix self scanning mode",
          "timestamp": "2026-03-26T01:13:21+01:00",
          "tree_id": "03bad026035231dcdbd33ba2daf2e2deaa375028",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/05c6a41e29b14d6cae3f4c76151c7b308f4725b1"
        },
        "date": 1774484402117,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 578265,
            "range": "± 8429",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14733,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61179,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 128414,
            "range": "± 2266",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 263951,
            "range": "± 3839",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161253,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 760978,
            "range": "± 3648",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1518170,
            "range": "± 27644",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 43792,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11250,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7819,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17301,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2513397,
            "range": "± 8670",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 339384,
            "range": "± 4997",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 143854,
            "range": "± 1125",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17154,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12941,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87811,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15461,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10936,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 158376,
            "range": "± 2949",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 847112,
            "range": "± 3906",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4172025,
            "range": "± 114604",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 836629,
            "range": "± 4277",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17034,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15597,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 81423780,
            "range": "± 415428",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 579195,
            "range": "± 4182",
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
          "id": "3f99b6ee35a6ab32a9ad9b3991f61de38dea22e1",
          "message": "Avoid double scanning commited vendor folders in self scanning mode.",
          "timestamp": "2026-03-26T01:57:11+01:00",
          "tree_id": "072cc281253e62d54a55f1036deeba6c258ead67",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/3f99b6ee35a6ab32a9ad9b3991f61de38dea22e1"
        },
        "date": 1774487034511,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 577388,
            "range": "± 3759",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14078,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 58984,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 121523,
            "range": "± 2890",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 256735,
            "range": "± 3537",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 164182,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 798203,
            "range": "± 5674",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1577568,
            "range": "± 20723",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 40694,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11105,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7837,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16473,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2546525,
            "range": "± 14808",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 320503,
            "range": "± 6266",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 137084,
            "range": "± 2149",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16423,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12691,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87217,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15263,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12434,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 152536,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 839180,
            "range": "± 2926",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4126049,
            "range": "± 27804",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 849320,
            "range": "± 12710",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17552,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16097,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77543769,
            "range": "± 354388",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 609088,
            "range": "± 4365",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdwhite3@pm.me",
            "name": "Caleb White",
            "username": "calebdw"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "a472187ca460992d7b8690757f2ac0dfbbc22a9d",
          "message": "feat: add support for global config",
          "timestamp": "2026-03-26T12:13:29+01:00",
          "tree_id": "1496e0501b8be1975fdac0aac2da9be5eab3a5b8",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/a472187ca460992d7b8690757f2ac0dfbbc22a9d"
        },
        "date": 1774524000960,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 574566,
            "range": "± 8515",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14141,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 60840,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 120525,
            "range": "± 4812",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 250188,
            "range": "± 3135",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157771,
            "range": "± 1053",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 774114,
            "range": "± 3125",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1553870,
            "range": "± 31995",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 41902,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11650,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8337,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17048,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2531836,
            "range": "± 15623",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 316314,
            "range": "± 4315",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 150305,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16828,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12556,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84814,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16254,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11949,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 139625,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 787400,
            "range": "± 3672",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3903101,
            "range": "± 17778",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 803265,
            "range": "± 3497",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17122,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15936,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75026161,
            "range": "± 298783",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 578154,
            "range": "± 11087",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdwhite3@pm.me",
            "name": "Caleb White",
            "username": "calebdw"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "ff60bccb8e8050aaa6c19e02b5eea234b3ad9da7",
          "message": "feat: create config schema",
          "timestamp": "2026-03-26T12:14:40+01:00",
          "tree_id": "a55f3dbefed22468993037f9594a1ca8103f6b66",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/ff60bccb8e8050aaa6c19e02b5eea234b3ad9da7"
        },
        "date": 1774524080172,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 578686,
            "range": "± 12992",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14408,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62557,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 127249,
            "range": "± 3644",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 266213,
            "range": "± 3730",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 165586,
            "range": "± 703",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 793199,
            "range": "± 5219",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1571591,
            "range": "± 16261",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45157,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11370,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7920,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17344,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2429148,
            "range": "± 44064",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 348413,
            "range": "± 3416",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 156666,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17138,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 13042,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 90967,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15672,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12089,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155608,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 835496,
            "range": "± 7903",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4083734,
            "range": "± 20532",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 841838,
            "range": "± 8592",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17144,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15832,
            "range": "± 1193",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 79046940,
            "range": "± 406788",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 589990,
            "range": "± 4694",
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
          "id": "a14de7fcac3c5e2f502985c6fe76fbbad331ef9b",
          "message": "Correct various edge cases in stub parsing",
          "timestamp": "2026-03-26T15:27:59+01:00",
          "tree_id": "33d824170456d441eb7eb37242926eab189adfd9",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/a14de7fcac3c5e2f502985c6fe76fbbad331ef9b"
        },
        "date": 1774535840431,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 139974603,
            "range": "± 325918",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14731,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62363,
            "range": "± 6685",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 131604,
            "range": "± 1906",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 269764,
            "range": "± 4200",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 163386,
            "range": "± 2212",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 780759,
            "range": "± 3694",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1544320,
            "range": "± 22657",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45673,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11857,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8079,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17213,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2539061,
            "range": "± 20743",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 352393,
            "range": "± 4975",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 156293,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17305,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12914,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 91721,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15637,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11511,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 156756,
            "range": "± 1447",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 842534,
            "range": "± 8787",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4105938,
            "range": "± 40130",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 854576,
            "range": "± 7575",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17487,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16161,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 79086688,
            "range": "± 543759",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 583902,
            "range": "± 15040",
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
          "id": "3f3d7d0677f00207df8b6b79f1ef5d21c0e95f7a",
          "message": "Fix renaming args",
          "timestamp": "2026-03-26T16:42:06+01:00",
          "tree_id": "fbf68f49c84df5b44b15bdf961a0a84e61f553ed",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/3f3d7d0677f00207df8b6b79f1ef5d21c0e95f7a"
        },
        "date": 1774540206819,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 142204253,
            "range": "± 2412811",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14574,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61902,
            "range": "± 1114",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 128798,
            "range": "± 3679",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 264539,
            "range": "± 4096",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 163714,
            "range": "± 888",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 780626,
            "range": "± 19132",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1551232,
            "range": "± 20670",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44686,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11707,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8112,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17066,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2427667,
            "range": "± 12455",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 348225,
            "range": "± 6101",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 151243,
            "range": "± 3198",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17636,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 13218,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 89218,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15681,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11329,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155445,
            "range": "± 2190",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 836196,
            "range": "± 5191",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4070322,
            "range": "± 108653",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 847950,
            "range": "± 22080",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17198,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15812,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 74701762,
            "range": "± 1622588",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 581447,
            "range": "± 14850",
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
          "id": "13727d501e94ca1c1bed33849802bdf6758dd6a9",
          "message": "Bump version to 0.6.0",
          "timestamp": "2026-03-26T17:34:46+01:00",
          "tree_id": "eecc1704b60e4c17d092803b467d0219972f2678",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/13727d501e94ca1c1bed33849802bdf6758dd6a9"
        },
        "date": 1774543374808,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 140511113,
            "range": "± 621468",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14578,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61929,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 126929,
            "range": "± 2568",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 263728,
            "range": "± 4021",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 162281,
            "range": "± 2262",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 776631,
            "range": "± 5123",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1546125,
            "range": "± 14151",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44415,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11736,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8215,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16997,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2380727,
            "range": "± 7216",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 340256,
            "range": "± 25215",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 149074,
            "range": "± 3723",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17210,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12875,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88375,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15583,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12250,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 155736,
            "range": "± 1981",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 839685,
            "range": "± 5044",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4075328,
            "range": "± 31659",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 853305,
            "range": "± 3927",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17287,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15780,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75486843,
            "range": "± 595085",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 577352,
            "range": "± 9223",
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
          "id": "cc92038c00ad5046e20ec576b3b1a6d94b21745f",
          "message": "Clean up changelog",
          "timestamp": "2026-03-26T17:52:56+01:00",
          "tree_id": "0203bb12236f3124bed17a0bf785bfc00177ae9b",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/cc92038c00ad5046e20ec576b3b1a6d94b21745f"
        },
        "date": 1774544463968,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 139765738,
            "range": "± 908426",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14833,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62940,
            "range": "± 1535",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 131078,
            "range": "± 2764",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 269850,
            "range": "± 17852",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 166615,
            "range": "± 1720",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 790533,
            "range": "± 19435",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1576531,
            "range": "± 19927",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44839,
            "range": "± 1796",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11823,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8259,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17151,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2376324,
            "range": "± 17699",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 344355,
            "range": "± 8446",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 149572,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17570,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12779,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88480,
            "range": "± 1635",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15549,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11498,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 156709,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 839796,
            "range": "± 75963",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4071143,
            "range": "± 26102",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 850261,
            "range": "± 24247",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17253,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15784,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76051546,
            "range": "± 963368",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 579616,
            "range": "± 8189",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0fc29196fdf114d13e644fb5c2424869fb34914",
          "message": "Update memory usage",
          "timestamp": "2026-03-26T18:29:02+01:00",
          "tree_id": "14f96107bc8e1f114f91d9c704dfccc88a78b6b4",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/c0fc29196fdf114d13e644fb5c2424869fb34914"
        },
        "date": 1774546621308,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 140289313,
            "range": "± 645694",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 15229,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 66391,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 136032,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 277698,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 164555,
            "range": "± 1526",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 781436,
            "range": "± 3045",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1552686,
            "range": "± 9396",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 46000,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11875,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8392,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17698,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2389697,
            "range": "± 79625",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 361028,
            "range": "± 3956",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 149263,
            "range": "± 1535",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17909,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 13762,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 90634,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16157,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12605,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 162296,
            "range": "± 1672",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 879448,
            "range": "± 3208",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4403125,
            "range": "± 40234",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 888088,
            "range": "± 5557",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 18113,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16659,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77086458,
            "range": "± 301919",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 592807,
            "range": "± 7468",
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
          "id": "9e74904ae5855694e111138d49f7ae552b5440ba",
          "message": "Migrate to mago-composer",
          "timestamp": "2026-03-26T19:31:11+01:00",
          "tree_id": "d96f16a476c69eaf0d81a46bac9dfa91a93bcaf4",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/9e74904ae5855694e111138d49f7ae552b5440ba"
        },
        "date": 1774550433231,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 141267751,
            "range": "± 371982",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14648,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61644,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 128944,
            "range": "± 2551",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 265390,
            "range": "± 3499",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161996,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 773298,
            "range": "± 3875",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1541078,
            "range": "± 24680",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44898,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11529,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7910,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17385,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2328480,
            "range": "± 10103",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 358544,
            "range": "± 8001",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 150703,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17151,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12772,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 89332,
            "range": "± 1335",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15532,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12014,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 159532,
            "range": "± 1522",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 848617,
            "range": "± 6662",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4103205,
            "range": "± 141482",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 863616,
            "range": "± 12050",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17613,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16176,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 78148452,
            "range": "± 467851",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 592451,
            "range": "± 8694",
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
          "id": "b670dcc9d5ac67ec3943c155ccae263d167aa57c",
          "message": "Add code action for upgrading properties to promoted arguments",
          "timestamp": "2026-03-26T19:47:44+01:00",
          "tree_id": "616cc59ccb8b66d5739f9dcf92724fa933015dfb",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/b670dcc9d5ac67ec3943c155ccae263d167aa57c"
        },
        "date": 1774551406331,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 140110813,
            "range": "± 460081",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14317,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62786,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 129389,
            "range": "± 2456",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 261233,
            "range": "± 5668",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161299,
            "range": "± 1000",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 768909,
            "range": "± 4487",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1527063,
            "range": "± 22827",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45258,
            "range": "± 909",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11291,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7964,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17079,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2408578,
            "range": "± 93238",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 350286,
            "range": "± 7902",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 154647,
            "range": "± 743",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16925,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12796,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 90003,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15435,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11629,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 159123,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 851965,
            "range": "± 6275",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4153501,
            "range": "± 59769",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 857818,
            "range": "± 16126",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17744,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16352,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76614337,
            "range": "± 409233",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 586469,
            "range": "± 7393",
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
          "id": "b4d01e9738cd40a27a0841a65b81ec186b8bb21c",
          "message": "Implement scope collector for use in refactoring",
          "timestamp": "2026-03-26T20:18:43+01:00",
          "tree_id": "a80e46620f8f66ef8fecc9b6b0bca29e04969b57",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/b4d01e9738cd40a27a0841a65b81ec186b8bb21c"
        },
        "date": 1774553206900,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 140907952,
            "range": "± 2997388",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14817,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 67151,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 135767,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 274027,
            "range": "± 3014",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 164193,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 772735,
            "range": "± 6830",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1534338,
            "range": "± 70853",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45462,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11311,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7904,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17276,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2385708,
            "range": "± 45929",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 372363,
            "range": "± 5273",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 156315,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17690,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 13737,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 93576,
            "range": "± 5432",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15795,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11721,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 163300,
            "range": "± 1900",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 889108,
            "range": "± 7377",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4585188,
            "range": "± 107055",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 906228,
            "range": "± 38676",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 18152,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16673,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77757179,
            "range": "± 881655",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 602203,
            "range": "± 7483",
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
          "id": "479ee6f756f87e4ba86c02ac6d8c4b12c91e4554",
          "message": "Generate constructor code action",
          "timestamp": "2026-03-26T20:25:44+01:00",
          "tree_id": "db2f6bba298c0c8326f639a1b20bb4c2430b2b49",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/479ee6f756f87e4ba86c02ac6d8c4b12c91e4554"
        },
        "date": 1774553626162,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 141371764,
            "range": "± 2288288",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14685,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62959,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 134974,
            "range": "± 1564",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 272625,
            "range": "± 7797",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 165652,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 786428,
            "range": "± 4951",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1571488,
            "range": "± 15517",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45880,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11770,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8055,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17505,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2382874,
            "range": "± 22461",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 348596,
            "range": "± 5954",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 149056,
            "range": "± 889",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17475,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12892,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 89298,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15814,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11207,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 158302,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 844865,
            "range": "± 4660",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4129646,
            "range": "± 83775",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 854130,
            "range": "± 4929",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17447,
            "range": "± 663",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15888,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 78826863,
            "range": "± 418412",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 590438,
            "range": "± 8092",
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
          "id": "7c6e040c38130446f05b84b04e6f2be2901b6b1f",
          "message": "Add Generate Promoted Constroctor action",
          "timestamp": "2026-03-26T21:10:08+01:00",
          "tree_id": "f94c7bf456a37ac002175766c1a0821a75cf69b4",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/7c6e040c38130446f05b84b04e6f2be2901b6b1f"
        },
        "date": 1774556292449,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 140435036,
            "range": "± 699494",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14433,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61413,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 129038,
            "range": "± 2185",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 263802,
            "range": "± 2519",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 158436,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 753026,
            "range": "± 8499",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1502886,
            "range": "± 13000",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44327,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11340,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7740,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17865,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2588424,
            "range": "± 17698",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 344266,
            "range": "± 6195",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 143437,
            "range": "± 3652",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17184,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12834,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88171,
            "range": "± 1928",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15910,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10919,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 158364,
            "range": "± 1665",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 847169,
            "range": "± 6653",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4136927,
            "range": "± 91252",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 860613,
            "range": "± 6825",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17559,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16206,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 78964011,
            "range": "± 511413",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 585931,
            "range": "± 6573",
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
          "id": "add9975054320f01a0df3a3fcafc70742d73e402",
          "message": "Implement Inline/Extract variable",
          "timestamp": "2026-03-26T22:08:03+01:00",
          "tree_id": "82fec83c8db245b36efa0f3903f56b4b9a3c7e0e",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/add9975054320f01a0df3a3fcafc70742d73e402"
        },
        "date": 1774559780339,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 160157760,
            "range": "± 1156343",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14239,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 59737,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 124113,
            "range": "± 1726",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 244511,
            "range": "± 3939",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 157517,
            "range": "± 821",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 772683,
            "range": "± 2337",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1545656,
            "range": "± 16393",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 42321,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11685,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8319,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16957,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2544666,
            "range": "± 23717",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 313892,
            "range": "± 5442",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152597,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16889,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12709,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84531,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16072,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10822,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 142478,
            "range": "± 1293",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 805150,
            "range": "± 3150",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3963465,
            "range": "± 21865",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 813318,
            "range": "± 5757",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17831,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16080,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 74602388,
            "range": "± 842102",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 571056,
            "range": "± 9163",
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
          "id": "aac3ca25fbc54992df726c642464b94d4020bb5e",
          "message": "Migrate to mago-docblock",
          "timestamp": "2026-03-26T22:53:01+01:00",
          "tree_id": "5b678ccf77cec25c6b94b50e6383facca80e4d0d",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/aac3ca25fbc54992df726c642464b94d4020bb5e"
        },
        "date": 1774562545131,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 139979952,
            "range": "± 431981",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14634,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62893,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 130546,
            "range": "± 2136",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 266233,
            "range": "± 4188",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161732,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 778304,
            "range": "± 3948",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1538782,
            "range": "± 11492",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44088,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11191,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7837,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17337,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2359599,
            "range": "± 15693",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 348613,
            "range": "± 14743",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 148698,
            "range": "± 758",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17255,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12544,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88230,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15828,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 12055,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 184073,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 965892,
            "range": "± 5346",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4594998,
            "range": "± 45709",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 975731,
            "range": "± 17711",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17180,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15877,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 79803213,
            "range": "± 465524",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 592406,
            "range": "± 8031",
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
          "id": "e3fedddce7f1149c77477bf62763365cb6a6c407",
          "message": "Clean up roadmap",
          "timestamp": "2026-03-26T23:54:11+01:00",
          "tree_id": "c7ed7f6f0df66803d807c8592b4f61cf673c1407",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/e3fedddce7f1149c77477bf62763365cb6a6c407"
        },
        "date": 1774566150021,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 159502668,
            "range": "± 1796044",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 13940,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 58803,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 121130,
            "range": "± 1900",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 241888,
            "range": "± 4303",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 152252,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 746206,
            "range": "± 2543",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1498149,
            "range": "± 24571",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 41322,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11308,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8021,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16956,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2551922,
            "range": "± 18982",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 321060,
            "range": "± 4588",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 145896,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16582,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12649,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 83843,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16056,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11019,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 164263,
            "range": "± 4267",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 902364,
            "range": "± 9224",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4364722,
            "range": "± 48502",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 918689,
            "range": "± 10567",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17232,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15904,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75890945,
            "range": "± 1274313",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 579400,
            "range": "± 8851",
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
          "id": "d14998df42111c6824d257ff8b949f0559a3e553",
          "message": "Further intergrate mago-docblock",
          "timestamp": "2026-03-27T00:03:48+01:00",
          "tree_id": "d49bc52db50af9895b4904b828a689b64982543d",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/d14998df42111c6824d257ff8b949f0559a3e553"
        },
        "date": 1774566813264,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 160347880,
            "range": "± 1698077",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14077,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 59170,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 125197,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 251796,
            "range": "± 4374",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 156337,
            "range": "± 2665",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 769937,
            "range": "± 8036",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1549719,
            "range": "± 44040",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 42064,
            "range": "± 2323",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11817,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8387,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17167,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2633261,
            "range": "± 21449",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 313172,
            "range": "± 4541",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 148408,
            "range": "± 943",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16700,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12497,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 84193,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15903,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11961,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 140966,
            "range": "± 1003",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 791839,
            "range": "± 4398",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3958172,
            "range": "± 56125",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 805382,
            "range": "± 15318",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17188,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15834,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75379915,
            "range": "± 205222",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 577846,
            "range": "± 7198",
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
          "id": "78e6199a6272ccb23326efb3b316b24ca0914ad3",
          "message": "Handle extraction of guarding clauses",
          "timestamp": "2026-03-27T00:53:46+01:00",
          "tree_id": "414d2d85a13f269b42449b8263bd0df7ecaf2f55",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/78e6199a6272ccb23326efb3b316b24ca0914ad3"
        },
        "date": 1774570194653,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 141387476,
            "range": "± 540282",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14506,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63204,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 130436,
            "range": "± 1260",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 262050,
            "range": "± 6338",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160213,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 764938,
            "range": "± 3207",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1517118,
            "range": "± 14512",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45021,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 10974,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7777,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17210,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2431172,
            "range": "± 9940",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 340161,
            "range": "± 4910",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152200,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17060,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12611,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 90386,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15677,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11460,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154386,
            "range": "± 12378",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 826274,
            "range": "± 3387",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4096979,
            "range": "± 36763",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 840514,
            "range": "± 3849",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16967,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15579,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77803347,
            "range": "± 269453",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 578676,
            "range": "± 6174",
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
          "id": "9b244418a09445159d1008c058535ae2c6ea57f3",
          "message": "Handle guards in void functions and extract guarded getters.",
          "timestamp": "2026-03-27T01:47:58+01:00",
          "tree_id": "493161fe13c48f8a096c048af2040f0d65cc89b6",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/9b244418a09445159d1008c058535ae2c6ea57f3"
        },
        "date": 1774573004105,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 141069964,
            "range": "± 6538513",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14639,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62358,
            "range": "± 1475",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 128592,
            "range": "± 2799",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 261833,
            "range": "± 4780",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161120,
            "range": "± 6375",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 766353,
            "range": "± 6410",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1525146,
            "range": "± 25370",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44554,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11289,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7851,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17544,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2528415,
            "range": "± 12686",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 342587,
            "range": "± 5136",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 146887,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17369,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12912,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 87740,
            "range": "± 2226",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15985,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11167,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154089,
            "range": "± 2952",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 811652,
            "range": "± 9334",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3954149,
            "range": "± 67308",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 827609,
            "range": "± 10400",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16404,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 14875,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77838538,
            "range": "± 479004",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 573108,
            "range": "± 57012",
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
          "id": "9ec0a5df0ca73b70742ca2d96a25081424f0ddc5",
          "message": "Further mago-docblock intergration",
          "timestamp": "2026-03-27T02:04:29+01:00",
          "tree_id": "0322acb668d7f080294ef8013e0062965e53ca5f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/9ec0a5df0ca73b70742ca2d96a25081424f0ddc5"
        },
        "date": 1774573986694,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 139792637,
            "range": "± 872242",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 13988,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61517,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 128066,
            "range": "± 2657",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 259561,
            "range": "± 5212",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 169301,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 822380,
            "range": "± 19487",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1638760,
            "range": "± 23864",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 41613,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11481,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8159,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16474,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2871983,
            "range": "± 67665",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 337532,
            "range": "± 11590",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 132377,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16681,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12480,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 85550,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15230,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11524,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 151011,
            "range": "± 2750",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 833355,
            "range": "± 15873",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4118939,
            "range": "± 49688",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 844066,
            "range": "± 3656",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17078,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15498,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 79141735,
            "range": "± 845628",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 617810,
            "range": "± 28257",
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
          "id": "faeffb2b0decd4a663a839a024e40f244d228dc8",
          "message": "Generate better names for extracted methods",
          "timestamp": "2026-03-27T16:14:44+01:00",
          "tree_id": "0e6ab952bf444b0e74e96d714ec5e5d6abc6fe31",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/faeffb2b0decd4a663a839a024e40f244d228dc8"
        },
        "date": 1774624966477,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 141684781,
            "range": "± 570952",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14931,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 64137,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 135288,
            "range": "± 2208",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 274636,
            "range": "± 3223",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 165999,
            "range": "± 1976",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 789005,
            "range": "± 3348",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1573672,
            "range": "± 12476",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45307,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11574,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8043,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17625,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2386560,
            "range": "± 9090",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 366251,
            "range": "± 8504",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 149778,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17810,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 13002,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 89525,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15541,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11954,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 161491,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 846120,
            "range": "± 4398",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4088805,
            "range": "± 59667",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 847479,
            "range": "± 4709",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17089,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15713,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76486704,
            "range": "± 470622",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 589894,
            "range": "± 6302",
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
          "id": "e309c898c2afef91ddc653f14ff2910528617dc9",
          "message": "Further mago-docblock intergration",
          "timestamp": "2026-03-27T17:30:12+01:00",
          "tree_id": "77522acfc344f82cdc088a89e02b16fcf884d43f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/e309c898c2afef91ddc653f14ff2910528617dc9"
        },
        "date": 1774629507335,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 157766787,
            "range": "± 1140106",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14261,
            "range": "± 996",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62813,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 126078,
            "range": "± 2767",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 268899,
            "range": "± 4768",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161499,
            "range": "± 1943",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 769062,
            "range": "± 50425",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1534271,
            "range": "± 29262",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45019,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11491,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7955,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17120,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2389418,
            "range": "± 25859",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 348929,
            "range": "± 6381",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 153001,
            "range": "± 1297",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16887,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12657,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 89727,
            "range": "± 1297",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15228,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10930,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 158727,
            "range": "± 849",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 829352,
            "range": "± 28282",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4148713,
            "range": "± 112164",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 841294,
            "range": "± 4843",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17127,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15738,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 78457648,
            "range": "± 329527",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 582384,
            "range": "± 6416",
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
          "id": "7a50d40352bd909320bea61c43a99e04c4721773",
          "message": "update roadmap",
          "timestamp": "2026-03-27T17:30:34+01:00",
          "tree_id": "9b57654209e2254cdb4bac24bb705ce0480fd4fd",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/7a50d40352bd909320bea61c43a99e04c4721773"
        },
        "date": 1774629529805,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 157570738,
            "range": "± 650613",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14494,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62937,
            "range": "± 1590",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 128692,
            "range": "± 3634",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 268183,
            "range": "± 3525",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161722,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 770037,
            "range": "± 4066",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1528593,
            "range": "± 50351",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45233,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11259,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7782,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16874,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2389372,
            "range": "± 70778",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 359950,
            "range": "± 5589",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152914,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17196,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12924,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 91237,
            "range": "± 5740",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15706,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11277,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 156085,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 823071,
            "range": "± 16686",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4046973,
            "range": "± 109574",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 837452,
            "range": "± 21192",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17324,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15859,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77853957,
            "range": "± 305019",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 584273,
            "range": "± 11049",
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
          "id": "202bb4a069593cba1755adc6d8e082c53b3b1ec6",
          "message": "Implement getters and setters",
          "timestamp": "2026-03-27T19:34:23+01:00",
          "tree_id": "a269dc0df94b06dc0a98b04db1a91c2ae2e700fe",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/202bb4a069593cba1755adc6d8e082c53b3b1ec6"
        },
        "date": 1774636952287,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 151558615,
            "range": "± 509254",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14750,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62679,
            "range": "± 5135",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 124423,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 269670,
            "range": "± 6581",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160535,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 766474,
            "range": "± 5767",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1553340,
            "range": "± 24743",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44747,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11381,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7810,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17143,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2580225,
            "range": "± 20585",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 348744,
            "range": "± 3912",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 144880,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17154,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12900,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88879,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15483,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10668,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154270,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 817527,
            "range": "± 4558",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3976445,
            "range": "± 28180",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 832166,
            "range": "± 3505",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17416,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15983,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75499767,
            "range": "± 245200",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 578755,
            "range": "± 5722",
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
          "id": "91dfa80dae1a14ee46c0277a4a688a64c81763e5",
          "message": "Update roadmap",
          "timestamp": "2026-03-27T19:44:41+01:00",
          "tree_id": "ecf4ffa0f7f54efd746a0437049017786f70111b",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/91dfa80dae1a14ee46c0277a4a688a64c81763e5"
        },
        "date": 1774638487357,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 152494691,
            "range": "± 1231446",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14853,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62876,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 124857,
            "range": "± 3274",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 267457,
            "range": "± 5659",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 162437,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 773833,
            "range": "± 6014",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1528144,
            "range": "± 18040",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45121,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11341,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7888,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17621,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2611018,
            "range": "± 23250",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 351861,
            "range": "± 4090",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 146255,
            "range": "± 4890",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17864,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12814,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88519,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16050,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11554,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 156134,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 826997,
            "range": "± 36277",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4072795,
            "range": "± 61882",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 839754,
            "range": "± 5168",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17264,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15976,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75281171,
            "range": "± 328458",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 594165,
            "range": "± 20744",
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
          "id": "38ba74769577e44c595021fe967e1aab851e32e5",
          "message": "Fix cargo publish",
          "timestamp": "2026-03-27T21:44:00+01:00",
          "tree_id": "7dd350b523036f199c2478d0843525392cef39c4",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/38ba74769577e44c595021fe967e1aab851e32e5"
        },
        "date": 1774644729408,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 152803850,
            "range": "± 1087595",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14642,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62419,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 126248,
            "range": "± 2524",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 265205,
            "range": "± 3731",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160137,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 760081,
            "range": "± 3562",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1518433,
            "range": "± 30727",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45020,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11292,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7862,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17154,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2580805,
            "range": "± 61384",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 356472,
            "range": "± 5671",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 144527,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17239,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12741,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88449,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15812,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11515,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 157644,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 822224,
            "range": "± 4964",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3976754,
            "range": "± 22283",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 831318,
            "range": "± 4523",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17776,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16615,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75295461,
            "range": "± 249855",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 581114,
            "range": "± 6114",
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
          "id": "a8b0d53fa52a69d2ee4b0f44dceaf7580ff9ac44",
          "message": "Add override phpstan quick fix",
          "timestamp": "2026-03-27T22:44:44+01:00",
          "tree_id": "854de9446eaeeca95c964130cd1c37c18359ef99",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/a8b0d53fa52a69d2ee4b0f44dceaf7580ff9ac44"
        },
        "date": 1774648379079,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 153419078,
            "range": "± 826024",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14337,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63391,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 126060,
            "range": "± 3343",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 267384,
            "range": "± 6456",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 160433,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 760272,
            "range": "± 3279",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1510374,
            "range": "± 35514",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44921,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11729,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8087,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16923,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2382144,
            "range": "± 21947",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 362423,
            "range": "± 9684",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152735,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16980,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12922,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 91450,
            "range": "± 3102",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15441,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10848,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 154405,
            "range": "± 2487",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 822065,
            "range": "± 4020",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3972646,
            "range": "± 220349",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 829523,
            "range": "± 5281",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17373,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15945,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76705646,
            "range": "± 188819",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 594594,
            "range": "± 26703",
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
          "id": "b406b03824a2f12fbfde11de8c58a6d792ce59e8",
          "message": "Fix code style",
          "timestamp": "2026-03-27T23:17:06+01:00",
          "tree_id": "a3bb5bec55caa27512d75d773c39cbcef539ec53",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/b406b03824a2f12fbfde11de8c58a6d792ce59e8"
        },
        "date": 1774650311713,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 154673195,
            "range": "± 1614232",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14341,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 62275,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 127468,
            "range": "± 2885",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 269357,
            "range": "± 4184",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 161166,
            "range": "± 7106",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 763294,
            "range": "± 4001",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1518632,
            "range": "± 42661",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44984,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11600,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8135,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16946,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2382018,
            "range": "± 10405",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 350052,
            "range": "± 6437",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 152173,
            "range": "± 570",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 16960,
            "range": "± 1163",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12704,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 90664,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16235,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11738,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 157599,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 829669,
            "range": "± 8422",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4120042,
            "range": "± 76615",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 839831,
            "range": "± 16560",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17401,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 16040,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 78551428,
            "range": "± 301034",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 595890,
            "range": "± 7891",
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
          "id": "88827f46d94235c4e39a54daf842594e5d759a4f",
          "message": "Generate property hooks",
          "timestamp": "2026-03-27T23:37:27+01:00",
          "tree_id": "b8f38a15b24c21cc1f968023f808a8a11524469f",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/88827f46d94235c4e39a54daf842594e5d759a4f"
        },
        "date": 1774651558354,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 172590421,
            "range": "± 2354279",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14514,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 61651,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 120833,
            "range": "± 2834",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 247729,
            "range": "± 4064",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 159279,
            "range": "± 604",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 785732,
            "range": "± 3754",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1575665,
            "range": "± 15422",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 42862,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11863,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8373,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17017,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2518156,
            "range": "± 21020",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 317983,
            "range": "± 6195",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 151961,
            "range": "± 1657",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17261,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12683,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 85551,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16613,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 10962,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 145031,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 808897,
            "range": "± 10949",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4066274,
            "range": "± 62920",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 824910,
            "range": "± 6611",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 17284,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15987,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 74240568,
            "range": "± 235592",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 577010,
            "range": "± 12930",
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
          "id": "f31d1f83cbb3c33d2c1e5d40021c69d932ac1ff9",
          "message": "Defer expensive code action edits and improve diagnostice evication",
          "timestamp": "2026-03-28T02:28:25+01:00",
          "tree_id": "c52f243cb5ddd71f0b9cd2244eb9f2ec5169bcaf",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/f31d1f83cbb3c33d2c1e5d40021c69d932ac1ff9"
        },
        "date": 1774661789767,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 152001601,
            "range": "± 1925398",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14388,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63429,
            "range": "± 1650",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 127384,
            "range": "± 2967",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 270962,
            "range": "± 3144",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 164609,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 781295,
            "range": "± 22036",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1551982,
            "range": "± 23981",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 44918,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11770,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8271,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 16814,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2381311,
            "range": "± 24796",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 342924,
            "range": "± 5201",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 148571,
            "range": "± 792",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17149,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12726,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 89963,
            "range": "± 1743",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15856,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11091,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 157144,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 818221,
            "range": "± 4852",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3981109,
            "range": "± 21126",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 827800,
            "range": "± 6938",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 16745,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 15426,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 74797720,
            "range": "± 357341",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 583368,
            "range": "± 6127",
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
          "id": "6a0737a839d9318ef0a9b36cefee9a7dca20a6af",
          "message": "Migrate to use mago-names",
          "timestamp": "2026-03-28T02:59:39+01:00",
          "tree_id": "683dd9a99a0e5d1f4f3ec6926a4847cd121ddbc0",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/6a0737a839d9318ef0a9b36cefee9a7dca20a6af"
        },
        "date": 1774663673664,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 153110849,
            "range": "± 1135455",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 15046,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63645,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 128059,
            "range": "± 4266",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 266340,
            "range": "± 4675",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 167280,
            "range": "± 770",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 799207,
            "range": "± 4347",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1584244,
            "range": "± 23834",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45549,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11684,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8122,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17365,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2422540,
            "range": "± 15698",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 359095,
            "range": "± 5621",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 151511,
            "range": "± 9492",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17577,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12912,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 89238,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16244,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11196,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 163381,
            "range": "± 1121",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 856252,
            "range": "± 5507",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4191836,
            "range": "± 95023",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 869275,
            "range": "± 5545",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 18618,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 17325,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 78777890,
            "range": "± 228089",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 583544,
            "range": "± 10590",
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
          "id": "1cd5b871bf7927f2971505d8ee6e9bb14be148fe",
          "message": "Add code action to simplify ternary null checks to ?? or ?->",
          "timestamp": "2026-03-28T03:16:19+01:00",
          "tree_id": "d1c35ec0323e7348b5ff4ea427512147a837299b",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/1cd5b871bf7927f2971505d8ee6e9bb14be148fe"
        },
        "date": 1774664666097,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 153834610,
            "range": "± 1378445",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14793,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63202,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 125755,
            "range": "± 2806",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 265084,
            "range": "± 3739",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 163075,
            "range": "± 906",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 766079,
            "range": "± 3442",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1532937,
            "range": "± 22997",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45268,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11851,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 8169,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17298,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2583330,
            "range": "± 47962",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 347586,
            "range": "± 5169",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 144550,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17675,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12819,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 88434,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15843,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11492,
            "range": "± 851",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 160212,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 847761,
            "range": "± 4396",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4131010,
            "range": "± 35863",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 856180,
            "range": "± 6129",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 18749,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 17358,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75805276,
            "range": "± 816015",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 586948,
            "range": "± 8298",
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
          "id": "d5a6b141e9749cb55ecff1826bc35e8a1e9f9a65",
          "message": "Improve start up time",
          "timestamp": "2026-03-28T03:31:24+01:00",
          "tree_id": "0395466ff6251fd7910770b8d14c67fc5706e520",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/d5a6b141e9749cb55ecff1826bc35e8a1e9f9a65"
        },
        "date": 1774665520125,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 60912736,
            "range": "± 399518",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14482,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 64384,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 131989,
            "range": "± 1475",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 266643,
            "range": "± 5017",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 164615,
            "range": "± 1128",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 773217,
            "range": "± 3200",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1542388,
            "range": "± 35436",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45461,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 11579,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 7969,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17203,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 2389841,
            "range": "± 21502",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 363634,
            "range": "± 6941",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 153260,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17543,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12731,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 89938,
            "range": "± 889",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 15776,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11630,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 160383,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 855547,
            "range": "± 4109",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4248757,
            "range": "± 67657",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 867479,
            "range": "± 9570",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 18771,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 17368,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75993150,
            "range": "± 388041",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 594237,
            "range": "± 8796",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryangjchandler@gmail.com",
            "name": "Ryan Chandler",
            "username": "ryangjchandler"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cadc9ab44db3d232ee04504bf6335639f51a6697",
          "message": "Add support for keyword completions (#43)\n\nCo-authored-by: Anders Jenbo <anders@jenbo.dk>",
          "timestamp": "2026-03-28T03:56:07+01:00",
          "tree_id": "b0f1f0c83ecd0dfe2b7550f91aabcacc3bca07f6",
          "url": "https://github.com/AJenbo/phpantom_lsp/commit/cadc9ab44db3d232ee04504bf6335639f51a6697"
        },
        "date": 1774666994227,
        "tool": "cargo",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 58918925,
            "range": "± 300673",
            "unit": "ns/iter"
          },
          {
            "name": "completion_simple_class",
            "value": 14559,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 63204,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 131161,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 268080,
            "range": "± 2592",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 163417,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 771464,
            "range": "± 4832",
            "unit": "ns/iter"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1536384,
            "range": "± 19198",
            "unit": "ns/iter"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 45276,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "completion_with_narrowing",
            "value": 15267,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "completion_5_method_chain",
            "value": 10307,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 17496,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "completion_carbon_class",
            "value": 3409976,
            "range": "± 41518",
            "unit": "ns/iter"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 349435,
            "range": "± 5879",
            "unit": "ns/iter"
          },
          {
            "name": "completion_large_file",
            "value": 205909,
            "range": "± 5382",
            "unit": "ns/iter"
          },
          {
            "name": "completion_short_file",
            "value": 17948,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/short",
            "value": 12864,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "variable_completion/long",
            "value": 90511,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "hover_method_call",
            "value": 16080,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "goto_definition_method",
            "value": 11713,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 161499,
            "range": "± 6889",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 845237,
            "range": "± 5571",
            "unit": "ns/iter"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4095597,
            "range": "± 25490",
            "unit": "ns/iter"
          },
          {
            "name": "reparse_500_line_file",
            "value": 855817,
            "range": "± 4260",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 18387,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 17026,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 77557629,
            "range": "± 637719",
            "unit": "ns/iter"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 587719,
            "range": "± 6302",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}