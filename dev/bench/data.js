window.BENCHMARK_DATA = {
  "lastUpdate": 1774200832985,
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
      }
    ]
  }
}