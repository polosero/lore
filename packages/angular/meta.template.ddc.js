define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const meta$46template = Object.create(_root);
  const src__meta$46template = Object.create(_root);
  dart.defineLazy(meta$46template, {
    /*meta$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  meta$46template.initReflector = function() {
    if (dart.test(meta$46template._visited)) {
      return;
    }
    meta$46template._visited = true;
    src__meta$46template.initReflector();
  };
  src__meta$46template.initReflector = function() {
  };
  dart.trackLibraries("packages/angular/meta.template.ddc", {
    "package:angular/meta.template.dart": meta$46template,
    "package:angular/src/meta.template.dart": src__meta$46template
  }, '{"version":3,"sourceRoot":"","sources":["meta.template.dart","src/meta.template.dart"],"names":[],"mappings":";;;;;;;;;MAQI,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,kCAAa;EACrB;;ECRsB","file":"meta.template.ddc.js"}');
  // Exports:
  return {
    meta$46template: meta$46template,
    src__meta$46template: src__meta$46template
  };
});

//# sourceMappingURL=meta.template.ddc.js.map
