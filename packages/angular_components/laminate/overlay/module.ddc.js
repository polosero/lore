define(['dart_sdk', 'packages/angular_components/utils/browser/window/module', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer'], function(dart_sdk, module, change_detection, imperative_view, dom_ruler, angular_2, managed_zone, angular_2$, overlay_ref, zindexer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__window__module = module.utils__browser__window__module;
  const src__di__module = change_detection.src__di__module;
  const src__di__providers = change_detection.src__di__providers;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const _root = Object.create(null);
  const laminate__overlay__module = Object.create(_root);
  const $classes = dartx.classes;
  const $append = dartx.append;
  const $_set = dartx._set;
  const $attributes = dartx.attributes;
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let StringAndHtmlElementAnddynamicToHtmlElement = () => (StringAndHtmlElementAnddynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [core.String, html.HtmlElement, dart.dynamic])))();
  let DocumentAnddynamicToHtmlElement = () => (DocumentAnddynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [html.Document, dart.dynamic])))();
  let ListOfProvider = () => (ListOfProvider = dart.constFn(core.List$(src__di__providers.Provider)))();
  let StringAndHtmlElementToHtmlElement = () => (StringAndHtmlElementToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [core.String, html.HtmlElement])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  laminate__overlay__module.createAcxOverlayContainer = function(parent, opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let className = opts && 'className' in opts ? opts.className : null;
    let container = parent.querySelector("#" + dart.str(id));
    if (container == null) {
      parent[$append]((() => {
        let _ = html.DivElement.new();
        _.tabIndex = 0;
        _[$classes].add("acx-overlay-focusable-placeholder");
        return _;
      })());
      container = html.DivElement.new();
      container.id = id;
      container[$classes].add("acx-overlay-container");
      if (className != null) container[$classes].add(className);
      parent[$append](container);
      parent[$append]((() => {
        let _ = html.DivElement.new();
        _.tabIndex = 0;
        _[$classes].add("acx-overlay-focusable-placeholder");
        return _;
      })());
    }
    container[$attributes][$_set]("container-name", name);
    return html.HtmlElement._check(container);
  };
  laminate__overlay__module.getDefaultContainer = function(name, parent, container) {
    if (container != null) return html.HtmlElement._check(container);
    return laminate__overlay__module.createAcxOverlayContainer(parent, {id: "default-acx-overlay-container", name: name});
  };
  laminate__overlay__module.getDefaultContainerName = function(containerName) {
    return core.String._check(containerName != null ? containerName : "default");
  };
  laminate__overlay__module.getDebugContainer = function(name, parent) {
    let element = laminate__overlay__module.getDefaultContainer(name, parent, null);
    element[$classes].add("debug");
    return element;
  };
  laminate__overlay__module.getOverlayContainerParent = function(document, containerParent) {
    return html.HtmlElement._check(containerParent != null ? containerParent : document.querySelector("body"));
  };
  dart.defineLazy(laminate__overlay__module, {
    /*laminate__overlay__module.overlayModule*/get overlayModule() {
      return dart.const(src__di__module.Module.new({include: dart.constList([utils__browser__window__module.windowModule], src__di__module.Module), provide: laminate__overlay__module._overlayProviders}));
    },
    /*laminate__overlay__module._overlayProviders*/get _overlayProviders() {
      return dart.constList([dart.const(src__di__providers.ClassProvider.new(dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils))), dart.const(src__di__providers.ClassProvider.new(dart.wrapType(laminate__ruler__dom_ruler.DomRuler))), utils__browser__dom_service__angular_2.domServiceBinding, dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), {useClass: dart.wrapType(utils__angular__managed_zone__angular_2.Angular2ManagedZone)})), dart.const(src__di__providers.FactoryProvider.forToken(src__laminate__overlay__render__overlay_dom_render_service.overlayContainerName, dart.fn(laminate__overlay__module.getDefaultContainerName, dynamicToString()))), dart.const(src__di__providers.FactoryProvider.forToken(src__laminate__overlay__render__overlay_dom_render_service.overlayContainerToken, dart.fn(laminate__overlay__module.getDefaultContainer, StringAndHtmlElementAnddynamicToHtmlElement()))), dart.const(src__di__providers.FactoryProvider.forToken(src__laminate__overlay__render__overlay_dom_render_service.overlayContainerParent, dart.fn(laminate__overlay__module.getOverlayContainerParent, DocumentAnddynamicToHtmlElement()))), dart.const(src__di__providers.ValueProvider.forToken(src__laminate__overlay__render__overlay_dom_render_service.overlaySyncDom, true)), dart.const(src__di__providers.ValueProvider.forToken(src__laminate__overlay__render__overlay_dom_render_service.overlayRepositionLoop, true)), dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService))), dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig))), dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService))), dart.const(src__di__providers.ClassProvider.new(dart.wrapType(laminate__overlay__zindexer.ZIndexer)))], src__di__providers.Provider);
    },
    /*laminate__overlay__module.overlayBindings*/get overlayBindings() {
      return dart.constList([utils__browser__window__module.windowBindings, laminate__overlay__module._overlayProviders], ListOfProvider());
    },
    /*laminate__overlay__module.overlayDebugModule*/get overlayDebugModule() {
      return dart.const(src__di__module.Module.new({include: dart.constList([laminate__overlay__module.overlayModule], src__di__module.Module), provide: laminate__overlay__module._overlayDebugProviders}));
    },
    /*laminate__overlay__module._overlayDebugProviders*/get _overlayDebugProviders() {
      return dart.constList([dart.const(src__di__providers.FactoryProvider.forToken(src__laminate__overlay__render__overlay_dom_render_service.overlayContainerToken, dart.fn(laminate__overlay__module.getDebugContainer, StringAndHtmlElementToHtmlElement())))], src__di__providers.Provider);
    },
    /*laminate__overlay__module.overlayDebugBindings*/get overlayDebugBindings() {
      return dart.constList([laminate__overlay__module.overlayBindings, laminate__overlay__module._overlayDebugProviders], ListOfObject());
    }
  });
  dart.trackLibraries("packages/angular_components/laminate/overlay/module.ddc", {
    "package:angular_components/laminate/overlay/module.dart": laminate__overlay__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iEA+BsC,MAAkB;QAClC;QAAqB;QAAa;AACtD,QAAI,YAAY,MAAM,cAAc,CAAC,eAAG,EAAE;AAC1C,QAAI,SAAS,IAAI,MAAM;AAIrB,YAAM,SAAO;gBAAC,mBAAU;qBACT;wBACC,mCAAoC;;;AAEpD,eAAS,GAAG,mBAAU;MAAtB,SAAS,MACA,EAAE;MADX,SAAS,eAEO,uBAAyB;AACzC,UAAI,SAAS,IAAI,MAAM,SAAS,UAAQ,IAAI,CAAC,SAAS;AACtD,YAAM,SAAO,CAAC,SAAS;AAIvB,YAAM,SAAO;gBAAC,mBAAU;qBACT;wBACC,mCAAoC;;;;AAEtD,aAAS,aAAW,QAAC,gBAA6B,EAAI,IAAI;AAC1D,mCAAO,SAAS;EAClB;2DAKI,IAAyC,EACzC,MAAkD,EAClD,SAAgE;AAClE,QAAI,SAAS,IAAI,MAAM,+BAAO,SAAS;AACvC,UAAO,oDAAyB,CAAC,MAAM,OAC/B,+BAAyB,QAAQ,IAAI;EAC/C;+DAII,aAAmE;AACrE,8BAAO,aAAa,WAAb,aAAa,GAAI;EAC1B;yDAI8B,IAAyC,EACnE,MAAkD;AACpD,QAAI,UAAU,6CAAmB,CAAC,IAAI,EAAE,MAAM,EAAE;AAChD,WAAO,UAAQ,IAAI,CAAC;AACpB,UAAO,QAAO;EAChB;iEAGsC,QAAiB,EACnD,eAAuE;AACzE,mCAAO,eAAe,WAAf,eAAe,GAAI,QAAQ,cAAc,CAAC;EACnD;;MAGM,uCAAa;wBAAG,0BAAM,WACjB,gBACP,2CAAY,qCAEL,2CAAiB;;MAGtB,2CAAiB;YAAG,4BACxB,oCAAa,CAAC,sFAAsB,eACpC,oCAAa,CAAC,kDAAQ,IACtB,wDAAiB,aACjB,oCAAa,CAAC,0EAAW,aAAY,0EAAmB,gBACxD,2CAAwB,CAAC,+EAAoB,EAAE,6EAAuB,eACtE,2CAAwB,CAAC,gFAAqB,EAAE,qGAAmB,eACnE,2CAAwB,CAAC,iFAAsB,EAAE,+FAAyB,eAE1E,yCAAsB,CAAC,yEAAc,EAAE,mBACvC,yCAAsB,CAAC,gFAAqB,EAAE,mBAC9C,oCAAa,CAAC,iGAAuB,eACrC,oCAAa,CAAC,sFAAkB,eAChC,oCAAa,CAAC,qEAAc,eAC5B,oCAAa,CAAC,mDAAQ;;MAIlB,yCAAe;YAAG,iBACtB,6CAAc,EACd,2CAAiB;;MAIb,4CAAkB;wBAAG,0BAAM,WACtB,gBACP,uCAAa,qCAEN,gDAAsB;;MAG3B,gDAAsB;YAAG,4BAC7B,2CAAwB,CAAC,gFAAqB,EAAE,yFAAiB;;MAI7D,8CAAoB;YAAG,iBAC3B,yCAAe,EACf,gDAAsB","file":"module.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__module: laminate__overlay__module
  };
});

//# sourceMappingURL=module.ddc.js.map
