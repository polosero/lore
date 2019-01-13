define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const focus__focus_interface = Object.create(_root);
  focus__focus_interface.Focusable = class Focusable extends core.Object {};
  (focus__focus_interface.Focusable.new = function() {
  }).prototype = focus__focus_interface.Focusable.prototype;
  dart.addTypeTests(focus__focus_interface.Focusable);
  dart.trackLibraries("packages/angular_components/focus/focus_interface.ddc", {
    "package:angular_components/focus/focus_interface.dart": focus__focus_interface
  }, '{"version":3,"sourceRoot":"","sources":["focus_interface.dart"],"names":[],"mappings":";;;;;;;;;EAWA","file":"focus_interface.ddc.js"}');
  // Exports:
  return {
    focus__focus_interface: focus__focus_interface
  };
});

//# sourceMappingURL=focus_interface.ddc.js.map
