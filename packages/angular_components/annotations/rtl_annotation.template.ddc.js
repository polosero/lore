define(['dart_sdk', 'packages/angular_components/annotations/rtl_annotation', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template'], function(dart_sdk, rtl_annotation, change_detection, angular) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const annotations__rtl_annotation = rtl_annotation.annotations__rtl_annotation;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const annotations__rtl_annotation$46template = Object.create(_root);
  let DocumentTobool = () => (DocumentTobool = dart.constFn(dart.fnType(core.bool, [html.Document])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(annotations__rtl_annotation$46template, {
    /*annotations__rtl_annotation$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  annotations__rtl_annotation$46template.initReflector = function() {
    if (dart.test(annotations__rtl_annotation$46template._visited)) {
      return;
    }
    annotations__rtl_annotation$46template._visited = true;
    src__di__reflector.registerDependencies(dart.fn(annotations__rtl_annotation.determineRtl, DocumentTobool()), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(html.Document)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/annotations/rtl_annotation.template.ddc", {
    "package:angular_components/annotations/rtl_annotation.template.dart": annotations__rtl_annotation$46template
  }, '{"version":3,"sourceRoot":"","sources":["rtl_annotation.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAUI,+CAAQ;YAAG;;;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAO,uCAAoB,CAAC,mEAAY,EAAE,sCACxC,oCAAW,4BAAQ;AAErB,IAAM,gCAAa;EACrB","file":"rtl_annotation.template.ddc.js"}');
  // Exports:
  return {
    annotations__rtl_annotation$46template: annotations__rtl_annotation$46template
  };
});

//# sourceMappingURL=rtl_annotation.template.ddc.js.map
