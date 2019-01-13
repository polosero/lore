define(['dart_sdk', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, imperative_view, modules, dom_service, change_detection, angular, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const utils__angular__imperative_view__imperative_view$46template = Object.create(_root);
  let ComponentLoaderAndDomServiceToAcxImperativeViewUtils = () => (ComponentLoaderAndDomServiceToAcxImperativeViewUtils = dart.constFn(dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, [src__core__linker__component_loader.ComponentLoader, utils__browser__dom_service__dom_service.DomService])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(utils__angular__imperative_view__imperative_view$46template, {
    /*utils__angular__imperative_view__imperative_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  utils__angular__imperative_view__imperative_view$46template.initReflector = function() {
    if (dart.test(utils__angular__imperative_view__imperative_view$46template._visited)) {
      return;
    }
    utils__angular__imperative_view__imperative_view$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn((p0, p1) => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(p0, p1), ComponentLoaderAndDomServiceToAcxImperativeViewUtils()));
    src__di__reflector.registerDependencies(dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), const$1 || (const$1 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__core__linker__component_loader.ComponentLoader)], core.Object)), const$0 || (const$0 = dart.constList([dart.wrapType(utils__browser__dom_service__dom_service.DomService)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/utils/angular/imperative_view/imperative_view.template.ddc", {
    "package:angular_components/utils/angular/imperative_view/imperative_view.template.dart": utils__angular__imperative_view__imperative_view$46template
  }, '{"version":3,"sourceRoot":"","sources":["imperative_view.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAaI,oEAAQ;YAAG;;;;;;;;AAEb,kBAAI,oEAAQ,GAAE;AACZ;;AAEF,2EAAW;AAEX,IAAO,kCAAe,CAAC,sFAAsB,EAAE,SAAC,EAAsB,EAAE,EAAiB,KAAK,IAAI,2EAAsB,CAAC,EAAE,EAAE,EAAE;AAC/H,IAAO,uCAAoB,CAAC,sFAAsB,EAAE,sCAClD,oCAAW,kEAAe,kBAC1B,sCAAW,kEAAU;AAEvB,IAAM,gCAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,kDAAa;EACrB","file":"imperative_view.template.ddc.js"}');
  // Exports:
  return {
    utils__angular__imperative_view__imperative_view$46template: utils__angular__imperative_view__imperative_view$46template
  };
});

//# sourceMappingURL=imperative_view.template.ddc.js.map
