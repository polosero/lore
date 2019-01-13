define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const _root = Object.create(null);
  const utils__angular__reference__reference = Object.create(_root);
  utils__angular__reference__reference.ReferenceDirective = class ReferenceDirective extends core.Object {
    get elementRef() {
      return this[elementRef$];
    }
    set elementRef(value) {
      super.elementRef = value;
    }
  };
  (utils__angular__reference__reference.ReferenceDirective.new = function(elementRef) {
    this[elementRef$] = elementRef;
  }).prototype = utils__angular__reference__reference.ReferenceDirective.prototype;
  dart.addTypeTests(utils__angular__reference__reference.ReferenceDirective);
  const elementRef$ = Symbol("ReferenceDirective.elementRef");
  dart.setFieldSignature(utils__angular__reference__reference.ReferenceDirective, () => ({
    __proto__: dart.getFields(utils__angular__reference__reference.ReferenceDirective.__proto__),
    elementRef: dart.finalFieldType(src__core__linker__element_ref.ElementRef)
  }));
  dart.trackLibraries("packages/angular_components/utils/angular/reference/reference.ddc", {
    "package:angular_components/utils/angular/reference/reference.dart": utils__angular__reference__reference
  }, '{"version":3,"sourceRoot":"","sources":["reference.dart"],"names":[],"mappings":";;;;;;;;;IAqBmB;;;;;;;0EAEE,UAAe;IAAV,iBAAU,GAAV,UAAU;EAAC","file":"reference.ddc.js"}');
  // Exports:
  return {
    utils__angular__reference__reference: utils__angular__reference__reference
  };
});

//# sourceMappingURL=reference.ddc.js.map
