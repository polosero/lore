define(['dart_sdk', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template'], function(dart_sdk, zindexer, change_detection, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const laminate__overlay__zindexer$46template = Object.create(_root);
  let VoidToZIndexer = () => (VoidToZIndexer = dart.constFn(dart.fnType(laminate__overlay__zindexer.ZIndexer, [])))();
  dart.defineLazy(laminate__overlay__zindexer$46template, {
    /*laminate__overlay__zindexer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  laminate__overlay__zindexer$46template.initReflector = function() {
    if (dart.test(laminate__overlay__zindexer$46template._visited)) {
      return;
    }
    laminate__overlay__zindexer$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(laminate__overlay__zindexer.ZIndexer), dart.fn(() => laminate__overlay__zindexer.ZIndexer.new(), VoidToZIndexer()));
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/laminate/overlay/zindexer.template.ddc", {
    "package:angular_components/laminate/overlay/zindexer.template.dart": laminate__overlay__zindexer$46template
  }, '{"version":3,"sourceRoot":"","sources":["zindexer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MASI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAO,kCAAe,CAAC,mDAAQ,EAAE,cAAM,AAAI,wCAAQ;AACnD,IAAM,gCAAa;EACrB","file":"zindexer.template.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__zindexer$46template: laminate__overlay__zindexer$46template
  };
});

//# sourceMappingURL=zindexer.template.ddc.js.map
