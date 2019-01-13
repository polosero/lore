define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const dart2js = Object.create(_root);
  dart.defineLazy(dart2js, {
    /*dart2js.noInline*/get noInline() {
      return dart.const(new dart2js._NoInline.new());
    },
    /*dart2js.tryInline*/get tryInline() {
      return dart.const(new dart2js._TryInline.new());
    }
  });
  dart2js._NoInline = class _NoInline extends core.Object {};
  (dart2js._NoInline.new = function() {
  }).prototype = dart2js._NoInline.prototype;
  dart.addTypeTests(dart2js._NoInline);
  dart2js._TryInline = class _TryInline extends core.Object {};
  (dart2js._TryInline.new = function() {
  }).prototype = dart2js._TryInline.prototype;
  dart.addTypeTests(dart2js._TryInline);
  dart.trackLibraries("packages/meta/dart2js.ddc", {
    "package:meta/dart2js.dart": dart2js
  }, '{"version":3,"sourceRoot":"","sources":["dart2js.dart"],"names":[],"mappings":";;;;;;;;MAmBgB,gBAAQ;YAAG,gBAAM,qBAAS;;MAiBzB,iBAAS;YAAG,gBAAM,sBAAU;;;;;EAG1B;;;;EAIC","file":"dart2js.ddc.js"}');
  // Exports:
  return {
    dart2js: dart2js
  };
});

//# sourceMappingURL=dart2js.ddc.js.map
