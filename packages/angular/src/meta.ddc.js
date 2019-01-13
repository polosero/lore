define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__meta = Object.create(_root);
  dart.defineLazy(src__meta, {
    /*src__meta.visibleForTemplate*/get visibleForTemplate() {
      return dart.const(new src__meta._VisibleForTemplate.new());
    }
  });
  src__meta._VisibleForTemplate = class _VisibleForTemplate extends core.Object {};
  (src__meta._VisibleForTemplate.new = function() {
  }).prototype = src__meta._VisibleForTemplate.prototype;
  dart.addTypeTests(src__meta._VisibleForTemplate);
  dart.trackLibraries("packages/angular/src/meta.ddc", {
    "package:angular/src/meta.dart": src__meta
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;;MAgDM,4BAAkB;4BAAG,iCAAmB;;;;;EAGjB","file":"meta.ddc.js"}');
  // Exports:
  return {
    src__meta: src__meta
  };
});

//# sourceMappingURL=meta.ddc.js.map
