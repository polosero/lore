define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection.template'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__pipe_transform$46template = change_detection.src__core__change_detection__pipe_transform$46template;
  const src__core__di$46template = change_detection.src__core__di$46template;
  const src__core__metadata$46template = change_detection.src__core__metadata$46template;
  const src__core__zone__ng_zone$46template = change_detection.src__core__zone__ng_zone$46template;
  const src__facade__exception_handler$46template = change_detection.src__facade__exception_handler$46template;
  const _root = Object.create(null);
  const di$46template = Object.create(_root);
  dart.defineLazy(di$46template, {
    /*di$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  di$46template.initReflector = function() {
    if (dart.test(di$46template._visited)) {
      return;
    }
    di$46template._visited = true;
    src__core__change_detection__pipe_transform$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__metadata$46template.initReflector();
    src__core__metadata$46template.initReflector();
    src__core__zone__ng_zone$46template.initReflector();
    src__facade__exception_handler$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/di.template.ddc", {
    "package:angular/di.template.dart": di$46template
  }, '{"version":3,"sourceRoot":"","sources":["di.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAaI,sBAAQ;YAAG;;;;;AAEb,kBAAI,sBAAQ,GAAE;AACZ;;AAEF,6BAAW;AAEX,IAAM,oEAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,uDAAa;EACrB","file":"di.template.ddc.js"}');
  // Exports:
  return {
    di$46template: di$46template
  };
});

//# sourceMappingURL=di.template.ddc.js.map
