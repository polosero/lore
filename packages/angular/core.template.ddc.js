define(['dart_sdk', 'packages/angular/src/core/application_tokens.template', 'packages/angular/src/core/change_detection/change_detection.template'], function(dart_sdk, application_tokens, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_tokens$46template = application_tokens.src__core__application_tokens$46template;
  const src__core__change_detection$46template = application_tokens.src__core__change_detection$46template;
  const src__core__render$46template = application_tokens.src__core__render$46template;
  const src__core__zone$46template = application_tokens.src__core__zone$46template;
  const src__core__di$46template = change_detection.src__core__di$46template;
  const src__core__metadata$46template = change_detection.src__core__metadata$46template;
  const src__facade__exception_handler$46template = change_detection.src__facade__exception_handler$46template;
  const _root = Object.create(null);
  const core$46template = Object.create(_root);
  dart.defineLazy(core$46template, {
    /*core$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  core$46template.initReflector = function() {
    if (dart.test(core$46template._visited)) {
      return;
    }
    core$46template._visited = true;
    src__core__application_tokens$46template.initReflector();
    src__core__change_detection$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__metadata$46template.initReflector();
    src__core__render$46template.initReflector();
    src__core__zone$46template.initReflector();
    src__facade__exception_handler$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/core.template.ddc", {
    "package:angular/core.template.dart": core$46template
  }, '{"version":3,"sourceRoot":"","sources":["core.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAcI,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,sDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,uDAAa;EACrB","file":"core.template.ddc.js"}');
  // Exports:
  return {
    core$46template: core$46template
  };
});

//# sourceMappingURL=core.template.ddc.js.map
