define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, modules, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__dynamic_component_loader = modules.src__core__linker__dynamic_component_loader;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const _root = Object.create(null);
  const experimental = Object.create(_root);
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let const$;
  let const$0;
  experimental.rootLegacyInjector = function(userInjector) {
    return src__bootstrap__run.appInjector(dart.fn(parent => {
      if (parent === void 0) parent = null;
      return src__di__injector__injector.Injector.map(new (LinkedMapOfObject$Object()).from([dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), const$0 || (const$0 = dart.const(new src__core__linker__dynamic_component_loader.SlowComponentLoader.new(const$ || (const$ = dart.const(new src__core__linker__component_loader.ComponentLoader.new())))))]), src__runtime__optimizations.unsafeCast(src__di__injector__hierarchical.HierarchicalInjector, userInjector(parent)));
    }, __ToInjector()));
  };
  experimental.isDomRenderDirty = function() {
    return src__core__linker__app_view.domRootRendererIsDirty;
  };
  experimental.resetDomRenderDirty = function() {
    src__core__linker__app_view.domRootRendererIsDirty = false;
  };
  dart.trackLibraries("packages/angular/experimental.ddc", {
    "package:angular/experimental.dart": experimental
  }, '{"version":3,"sourceRoot":"","sources":["experimental.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;6CAqC4B,YAA4B;AAItD,UAAO,gCAAW,CAAC,QAAE,MAAM;6BAAN;AACnB,YAAO,yCAAY,CAAC,uCAClB,8EAAmB,EAAE,qCAAM,mEAAmB,oCAC5C,uDAAe,WAEhB,sCAAU,uDAAC,YAAY,CAAC,MAAM;;EAErC;;UAUoC,mDAAsB;;;AAOxD,yDAAkC;EACpC","file":"experimental.ddc.js"}');
  // Exports:
  return {
    experimental: experimental
  };
});

//# sourceMappingURL=experimental.ddc.js.map
