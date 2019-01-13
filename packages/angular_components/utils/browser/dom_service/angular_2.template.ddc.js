define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular/experimental.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, angular_2, dom_service, disposer, ng_zone, change_detection, angular, experimental, dom_service$, dom_service_webdriver_testability, disposer$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const experimental$46template = experimental.experimental$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__browser__dom_service__dom_service_webdriver_testability$46template = dom_service_webdriver_testability.utils__browser__dom_service__dom_service_webdriver_testability$46template;
  const utils__disposer__disposer$46template = disposer$.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const utils__browser__dom_service__angular_2$46template = Object.create(_root);
  let DomServiceAndDisposerAndNgZone__ToDomService = () => (DomServiceAndDisposerAndNgZone__ToDomService = dart.constFn(dart.fnType(utils__browser__dom_service__dom_service.DomService, [utils__browser__dom_service__dom_service.DomService, utils__disposer__disposer.Disposer, src__core__zone__ng_zone.NgZone, html.Window])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(utils__browser__dom_service__angular_2$46template, {
    /*utils__browser__dom_service__angular_2$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  utils__browser__dom_service__angular_2$46template.initReflector = function() {
    if (dart.test(utils__browser__dom_service__angular_2$46template._visited)) {
      return;
    }
    utils__browser__dom_service__angular_2$46template._visited = true;
    src__di__reflector.registerDependencies(dart.fn(utils__browser__dom_service__angular_2.createDomService, DomServiceAndDisposerAndNgZone__ToDomService()), const$6 || (const$6 = dart.constList([const$1 || (const$1 = dart.constList([dart.wrapType(utils__browser__dom_service__dom_service.DomService), const$ || (const$ = dart.const(new src__core__di__decorators.SkipSelf.new())), const$0 || (const$0 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object)), const$3 || (const$3 = dart.constList([dart.wrapType(utils__disposer__disposer.Disposer), const$2 || (const$2 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object)), const$4 || (const$4 = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object)), const$5 || (const$5 = dart.constList([dart.wrapType(html.Window)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    experimental$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__browser__dom_service__dom_service_webdriver_testability$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/angular_2.template.ddc", {
    "package:angular_components/utils/browser/dom_service/angular_2.template.dart": utils__browser__dom_service__angular_2$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;MAkBI,0DAAQ;YAAG;;;;;;;;;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAO,uCAAoB,CAAC,gHAAgB,EAAE,sCAC5C,sCAAW,kEAAU,EAAE,mCAAM,sCAAe,MAAI,qCAAM,sCAAe,sBACrE,sCAAW,iDAAQ,EAAE,qCAAM,sCAAe,sBAC1C,sCAAW,8CAAM,kBACjB,sCAAW,0BAAM;AAEnB,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,uFAAa;AACnB,IAAM,kDAAa;EACrB","file":"angular_2.template.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__angular_2$46template: utils__browser__dom_service__angular_2$46template
  };
});

//# sourceMappingURL=angular_2.template.ddc.js.map
