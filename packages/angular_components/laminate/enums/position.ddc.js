define(['dart_sdk', 'packages/angular_components/src/laminate/enums/base'], function(dart_sdk, base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__enums__base = base.src__laminate__enums__base;
  const _root = Object.create(null);
  const laminate__enums__position = Object.create(_root);
  const _cssPropertyValue = Symbol('_cssPropertyValue');
  laminate__enums__position.Position = class Position extends core.Object {
    apply(setProperty) {
      setProperty("position", this[_cssPropertyValue]);
    }
  };
  (laminate__enums__position.Position.__ = function(cssPropertyValue) {
    this[_cssPropertyValue] = cssPropertyValue;
  }).prototype = laminate__enums__position.Position.prototype;
  dart.addTypeTests(laminate__enums__position.Position);
  laminate__enums__position.Position[dart.implements] = () => [src__laminate__enums__base.ElementStyleEnum];
  dart.setMethodSignature(laminate__enums__position.Position, () => ({
    __proto__: dart.getMethods(laminate__enums__position.Position.__proto__),
    apply: dart.fnType(dart.void, [dart.fnType(dart.void, [core.String, dart.dynamic])])
  }));
  dart.setFieldSignature(laminate__enums__position.Position, () => ({
    __proto__: dart.getFields(laminate__enums__position.Position.__proto__),
    [_cssPropertyValue]: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(laminate__enums__position.Position, {
    /*laminate__enums__position.Position.Static*/get Static() {
      return dart.const(new laminate__enums__position.Position.__("static"));
    },
    /*laminate__enums__position.Position.Relative*/get Relative() {
      return dart.const(new laminate__enums__position.Position.__("relative"));
    },
    /*laminate__enums__position.Position.Fixed*/get Fixed() {
      return dart.const(new laminate__enums__position.Position.__("fixed"));
    },
    /*laminate__enums__position.Position.Absolute*/get Absolute() {
      return dart.const(new laminate__enums__position.Position.__("absolute"));
    }
  });
  dart.trackLibraries("packages/angular_components/laminate/enums/position.ddc", {
    "package:angular_components/laminate/enums/position.dart": laminate__enums__position
  }, '{"version":3,"sourceRoot":"","sources":["position.dart"],"names":[],"mappings":";;;;;;;;;;UAmBa,WAAyB;AAClC,iBAAW,CAAC,YAAY,uBAAiB;IAC3C;;;IALsB,uBAAiB;EAAC;;;;;;;;;;;;MAP3B,yCAAM;4BAAG,qCAAU,CAAC;;MACpB,2CAAQ;4BAAG,qCAAU,CAAC;;MACtB,wCAAK;4BAAG,qCAAU,CAAC;;MACnB,2CAAQ;4BAAG,qCAAU,CAAC","file":"position.ddc.js"}');
  // Exports:
  return {
    laminate__enums__position: laminate__enums__position
  };
});

//# sourceMappingURL=position.ddc.js.map
