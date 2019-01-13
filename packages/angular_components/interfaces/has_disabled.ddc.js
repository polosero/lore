define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const interfaces__has_disabled = Object.create(_root);
  interfaces__has_disabled.HasDisabled = class HasDisabled extends core.Object {
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
  };
  (interfaces__has_disabled.HasDisabled.new = function() {
    this[disabled] = null;
  }).prototype = interfaces__has_disabled.HasDisabled.prototype;
  dart.addTypeTests(interfaces__has_disabled.HasDisabled);
  const disabled = Symbol("HasDisabled.disabled");
  dart.setFieldSignature(interfaces__has_disabled.HasDisabled, () => ({
    __proto__: dart.getFields(interfaces__has_disabled.HasDisabled.__proto__),
    disabled: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/interfaces/has_disabled.ddc", {
    "package:angular_components/interfaces/has_disabled.dart": interfaces__has_disabled
  }, '{"version":3,"sourceRoot":"","sources":["has_disabled.dart"],"names":[],"mappings":";;;;;;;;IAMO;;;;;;;;kBAAQ;EACf","file":"has_disabled.ddc.js"}');
  // Exports:
  return {
    interfaces__has_disabled: interfaces__has_disabled
  };
});

//# sourceMappingURL=has_disabled.ddc.js.map
