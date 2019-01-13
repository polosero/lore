define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability', 'packages/angular/experimental'], function(dart_sdk, dom_service, disposer, ng_zone, change_detection, dom_service_webdriver_testability, experimental) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const src__di__providers = change_detection.src__di__providers;
  const utils__browser__dom_service__dom_service_webdriver_testability = dom_service_webdriver_testability.utils__browser__dom_service__dom_service_webdriver_testability;
  const experimental$ = experimental.experimental;
  const _root = Object.create(null);
  const utils__browser__dom_service__angular_2 = Object.create(_root);
  let DomServiceAndDisposerAndNgZone__ToDomService = () => (DomServiceAndDisposerAndNgZone__ToDomService = dart.constFn(dart.fnType(utils__browser__dom_service__dom_service.DomService, [utils__browser__dom_service__dom_service.DomService, utils__disposer__disposer.Disposer, src__core__zone__ng_zone.NgZone, html.Window])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(utils__browser__dom_service__angular_2, {
    /*utils__browser__dom_service__angular_2.domServiceBinding*/get domServiceBinding() {
      return dart.const(src__di__providers.FactoryProvider.new(dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(utils__browser__dom_service__angular_2.createDomService, DomServiceAndDisposerAndNgZone__ToDomService()), {deps: dart.constList([dart.constList([dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.const(new src__core__di__decorators.Optional.new()), dart.const(new src__core__di__decorators.SkipSelf.new())], core.Object), dart.constList([dart.wrapType(utils__disposer__disposer.Disposer), dart.const(new src__core__di__decorators.Optional.new())], core.Object), dart.wrapType(src__core__zone__ng_zone.NgZone), dart.wrapType(html.Window)], core.Object)}));
    },
    /*utils__browser__dom_service__angular_2._singletonService*/get _singletonService() {
      return null;
    },
    set _singletonService(_) {}
  });
  utils__browser__dom_service__angular_2.createDomService = function(service, disposer, zone, window) {
    if (service != null) return service;
    if (utils__browser__dom_service__angular_2._singletonService != null) return utils__browser__dom_service__angular_2._singletonService;
    utils__browser__dom_service__angular_2._singletonService = new utils__browser__dom_service__dom_service.DomService.new(zone, window);
    utils__browser__dom_service__dom_service_webdriver_testability.createDomServiceWebdriverTestability(utils__browser__dom_service__angular_2._singletonService).register();
    disposer == null ? null : disposer.addFunction(dart.fn(() => {
      utils__browser__dom_service__angular_2._singletonService = null;
    }, VoidToNull()));
    return utils__browser__dom_service__angular_2._singletonService;
  };
  utils__browser__dom_service__angular_2.setupAcxRootDomRenderer = function(appInjector) {
    let _ = appInjector.get(dart.wrapType(utils__browser__dom_service__dom_service.DomService));
    dart.dput(_, 'isDomMutatedPredicate', dart.fn(experimental$.isDomRenderDirty, VoidTobool()));
    dart.dput(_, 'resetIsDomMutated', dart.fn(experimental$.resetDomRenderDirty, VoidTovoid()));
    dart.dsend(_, 'init', []);
  };
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/angular_2.ddc", {
    "package:angular_components/utils/browser/dom_service/angular_2.dart": utils__browser__dom_service__angular_2
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAuBM,wDAAiB;wBAAG,sCAAe,CACvC,kEAAU,EACV,gHAAgB,SACV,gBACJ,gBAAC,kEAAU,iBAAE,sCAAQ,oBAAI,sCAAQ,oBACjC,gBAAC,iDAAQ,iBAAE,sCAAQ,oBACnB,8CAAM,EACN,0BAAM;;MAKC,wDAAiB;;;;;qEAGA,OAA0C,EAClE,QAA6B,EAAE,IAAW,EAAE,MAAa;AAG3D,QAAI,OAAO,IAAI,MAAM,MAAO,QAAO;AAEnC,QAAI,wDAAiB,IAAI,MAAM,MAAO,yDAAiB;AAEvD,mEAAoB,uDAAU,CAAC,IAAI,EAAE,MAAM;AAE3C,uGAAoC,CAAC,wDAAiB,UAAU;AAEhE,YAAQ,kBAAR,QAAQ,YAAa,CAAC;AACpB,iEAAoB;;AAEtB,UAAO,yDAAiB;EAC1B;4EAI6B,WAAoB;AAC/C,uBAAW,IAAI,CAAC,kEAAU;0CACE,qDAAgB;sCACpB,wDAAmB;;EAE7C","file":"angular_2.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__angular_2: utils__browser__dom_service__angular_2
  };
});

//# sourceMappingURL=angular_2.ddc.js.map
