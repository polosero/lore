define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const meta = Object.create(_root);
  meta.castCallback1ForDirective = function(T, A, callback) {
    return dart.fn(element => callback(A.as(element)), dart.fnType(T, [dart.dynamic]));
  };
  meta.castCallback2ForDirective = function(T, A, B, callback) {
    return dart.fn((a, b) => callback(A.as(a), B.as(b)), dart.fnType(T, [dart.dynamic, dart.dynamic]));
  };
  dart.trackLibraries("packages/angular/meta.ddc", {
    "package:angular/meta.dart": meta
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;kDA8CE,QAAsB;AAEtB,UAAO,SAAC,OAAO,IAAK,QAAQ,MAAC,OAAO;EACtC;qDAUE,QAAyB;AAEzB,UAAO,UAAC,CAAC,EAAE,CAAC,KAAK,QAAQ,MAAC,CAAC,QAAO,CAAC;EACrC","file":"meta.ddc.js"}');
  // Exports:
  return {
    meta: meta
  };
});

//# sourceMappingURL=meta.ddc.js.map
