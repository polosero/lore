define(['dart_sdk', 'packages/angular_components/laminate/enums/position.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/ruler/dom_ruler.template', 'packages/angular_components/utils/angular/imperative_view/imperative_view.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, position, visibility, async, portal, overlay_ref, change_detection, angular, dom_ruler, dom_service, imperative_view, zindexer, zindexer$, dom_ruler$, imperative_view$, dom_service$, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__position$46template = position.laminate__enums__position$46template;
  const laminate__enums__visibility$46template = visibility.laminate__enums__visibility$46template;
  const utils__async__async$46template = async.utils__async__async$46template;
  const laminate__portal__portal$46template = portal.laminate__portal__portal$46template;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const angular$46template = angular.angular$46template;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__overlay__zindexer$46template = zindexer$.laminate__overlay__zindexer$46template;
  const laminate__ruler__dom_ruler$46template = dom_ruler$.laminate__ruler__dom_ruler$46template;
  const utils__angular__imperative_view__imperative_view$46template = imperative_view$.utils__angular__imperative_view__imperative_view$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const src__laminate__overlay__overlay_state$46template = Object.create(_root);
  const src__laminate__overlay__overlay_ref$46template = Object.create(_root);
  const src__laminate__overlay__render__overlay_style_config$46template = Object.create(_root);
  const src__laminate__overlay__render__overlay_dom_render_service$46template = Object.create(_root);
  const src__laminate__overlay__overlay_service$46template = Object.create(_root);
  let DocumentToOverlayStyleConfig = () => (DocumentToOverlayStyleConfig = dart.constFn(dart.fnType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, [html.Document])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let OverlayStyleConfigAndHtmlElementAndString__ToOverlayDomRenderService = () => (OverlayStyleConfigAndHtmlElementAndString__ToOverlayDomRenderService = dart.constFn(dart.fnType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, [src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, html.HtmlElement, core.String, laminate__ruler__dom_ruler.DomRuler, utils__browser__dom_service__dom_service.DomService, utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, core.bool, core.bool, laminate__overlay__zindexer.ZIndexer])))();
  let NgZoneAndboolAndOverlayDomRenderService__ToOverlayService = () => (NgZoneAndboolAndOverlayDomRenderService__ToOverlayService = dart.constFn(dart.fnType(src__laminate__overlay__overlay_service.OverlayService, [src__core__zone__ng_zone.NgZone, core.bool, src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, src__laminate__overlay__overlay_service.OverlayService])))();
  dart.defineLazy(src__laminate__overlay__overlay_state$46template, {
    /*src__laminate__overlay__overlay_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__overlay__overlay_state$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__overlay_state$46template._visited)) {
      return;
    }
    src__laminate__overlay__overlay_state$46template._visited = true;
    laminate__enums__position$46template.initReflector();
    laminate__enums__visibility$46template.initReflector();
    utils__async__async$46template.initReflector();
  };
  dart.defineLazy(src__laminate__overlay__overlay_ref$46template, {
    /*src__laminate__overlay__overlay_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__overlay__overlay_ref$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__overlay_ref$46template._visited)) {
      return;
    }
    src__laminate__overlay__overlay_ref$46template._visited = true;
    laminate__enums__visibility$46template.initReflector();
    laminate__portal__portal$46template.initReflector();
    src__laminate__overlay__overlay_state$46template.initReflector();
  };
  dart.defineLazy(src__laminate__overlay__render__overlay_style_config$46template, {
    /*src__laminate__overlay__render__overlay_style_config$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__laminate__overlay__render__overlay_style_config$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__render__overlay_style_config$46template._visited)) {
      return;
    }
    src__laminate__overlay__render__overlay_style_config$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig), dart.fn(p0 => new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(p0), DocumentToOverlayStyleConfig()));
    src__di__reflector.registerDependencies(dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(html.Document)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
  };
  dart.defineLazy(src__laminate__overlay__render__overlay_dom_render_service$46template, {
    /*src__laminate__overlay__render__overlay_dom_render_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  src__laminate__overlay__render__overlay_dom_render_service$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__render__overlay_dom_render_service$46template._visited)) {
      return;
    }
    src__laminate__overlay__render__overlay_dom_render_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService), dart.fn((p0, p1, p2, p3, p4, p5, p6, p7, p8) => new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(p0, p1, p2, p3, p4, p5, p6, p7, p8), OverlayStyleConfigAndHtmlElementAndString__ToOverlayDomRenderService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService), const$18 || (const$18 = dart.constList([const$1 || (const$1 = dart.constList([dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig)], core.Object)), const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__core__di__decorators.Inject.new(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))))))], core.Object)), const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__core__di__decorators.Inject.new(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))))))], core.Object)), const$8 || (const$8 = dart.constList([dart.wrapType(laminate__ruler__dom_ruler.DomRuler)], core.Object)), const$9 || (const$9 = dart.constList([dart.wrapType(utils__browser__dom_service__dom_service.DomService)], core.Object)), const$10 || (const$10 = dart.constList([dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils)], core.Object)), const$13 || (const$13 = dart.constList([const$12 || (const$12 = dart.const(new src__core__di__decorators.Inject.new(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom"))))))], core.Object)), const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__core__di__decorators.Inject.new(const$14 || (const$14 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))))))], core.Object)), const$17 || (const$17 = dart.constList([dart.wrapType(laminate__overlay__zindexer.ZIndexer)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    laminate__enums__visibility$46template.initReflector();
    laminate__overlay__zindexer$46template.initReflector();
    laminate__portal__portal$46template.initReflector();
    laminate__ruler__dom_ruler$46template.initReflector();
    src__laminate__overlay__overlay_state$46template.initReflector();
    src__laminate__overlay__render__overlay_style_config$46template.initReflector();
    utils__angular__imperative_view__imperative_view$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
  };
  dart.defineLazy(src__laminate__overlay__overlay_service$46template, {
    /*src__laminate__overlay__overlay_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  src__laminate__overlay__overlay_service$46template.initReflector = function() {
    if (dart.test(src__laminate__overlay__overlay_service$46template._visited)) {
      return;
    }
    src__laminate__overlay__overlay_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn((p0, p1, p2, p3) => new src__laminate__overlay__overlay_service.OverlayService.new(p0, p1, p2, p3), NgZoneAndboolAndOverlayDomRenderService__ToOverlayService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), const$27 || (const$27 = dart.constList([const$19 || (const$19 = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object)), const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__core__di__decorators.Inject.new(const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom"))))))], core.Object)), const$23 || (const$23 = dart.constList([dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService)], core.Object)), const$26 || (const$26 = dart.constList([dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), const$24 || (const$24 = dart.const(new src__core__di__decorators.SkipSelf.new())), const$25 || (const$25 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    src__laminate__overlay__overlay_ref$46template.initReflector();
    src__laminate__overlay__overlay_state$46template.initReflector();
    src__laminate__overlay__render__overlay_dom_render_service$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_ref.template.ddc", {
    "package:angular_components/src/laminate/overlay/overlay_state.template.dart": src__laminate__overlay__overlay_state$46template,
    "package:angular_components/src/laminate/overlay/overlay_ref.template.dart": src__laminate__overlay__overlay_ref$46template,
    "package:angular_components/src/laminate/overlay/render/overlay_style_config.template.dart": src__laminate__overlay__render__overlay_style_config$46template,
    "package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.template.dart": src__laminate__overlay__render__overlay_dom_render_service$46template,
    "package:angular_components/src/laminate/overlay/overlay_service.template.dart": src__laminate__overlay__overlay_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["overlay_state.template.dart","overlay_ref.template.dart","render/overlay_style_config.template.dart","render/overlay_dom_render_service.template.dart","overlay_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAUI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,kDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,4CAAa;EACrB;;MCVI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,8DAAa;EACrB;;MCVI,wEAAQ;YAAG;;;;;;;AAEb,kBAAI,wEAAQ,GAAE;AACZ;;AAEF,+EAAW;AAEX,IAAO,kCAAe,CAAC,sFAAkB,EAAE,QAAC,EAAe,IAAK,IAAI,2EAAkB,CAAC,EAAE;AACzF,IAAO,uCAAoB,CAAC,sFAAkB,EAAE,sCAC9C,oCAAW,4BAAQ;AAErB,IAAM,gCAAa;EACrB;;MCEI,8EAAQ;YAAG;;;;;;;;;;;;;;;;;;;;;;;AAEb,kBAAI,8EAAQ,GAAE;AACZ;;AAEF,qFAAW;AAEX,IAAO,kCAAe,CAAC,iGAAuB,EAAE,SAAC,EAAyB,EAAE,EAAkB,EAAE,EAAS,EAAE,EAAe,EAAE,EAAiB,EAAE,EAA6B,EAAE,EAAO,EAAE,EAAO,EAAE,EAAe,KAAK,IAAI,sFAAuB,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AAClR,IAAO,uCAAoB,CAAC,iGAAuB,EAAE,wCACnD,sCAAW,sFAAkB,kBAC7B,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,0CAC1D,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,8CAC1D,sCAAW,kDAAQ,kBACnB,sCAAW,kEAAU,kBACrB,wCAAW,sFAAsB,kBACjC,wCAAO,uCAAM,oCAAa,CAAC,uCAAM,2CAAwB,CAAC,wCAC1D,wCAAO,uCAAM,oCAAa,CAAC,uCAAM,2CAAwB,CAAC,+CAC1D,wCAAW,mDAAQ;AAErB,IAAM,gCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,6EAAa;AACnB,IAAM,yEAAa;AACnB,IAAM,iEAAa;EACrB;;MCpCI,2DAAQ;YAAG;;;;;;;;;;;;;;AAEb,kBAAI,2DAAQ,GAAE;AACZ;;AAEF,kEAAW;AAEX,IAAO,kCAAe,CAAC,qEAAc,EAAE,SAAC,EAAa,EAAE,EAAO,EAAE,EAA8B,EAAE,EAAqB,KAAK,IAAI,0DAAc,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AAC3J,IAAO,uCAAoB,CAAC,qEAAc,EAAE,wCAC1C,wCAAW,8CAAM,kBACjB,wCAAO,uCAAM,oCAAa,CAAC,uCAAM,2CAAwB,CAAC,wCAC1D,wCAAW,iGAAuB,kBAClC,wCAAW,qEAAc,EAAE,uCAAM,sCAAe,MAAI,uCAAM,sCAAe;AAE3E,IAAM,gCAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,mFAAa;EACrB","file":"overlay_ref.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_state$46template: src__laminate__overlay__overlay_state$46template,
    src__laminate__overlay__overlay_ref$46template: src__laminate__overlay__overlay_ref$46template,
    src__laminate__overlay__render__overlay_style_config$46template: src__laminate__overlay__render__overlay_style_config$46template,
    src__laminate__overlay__render__overlay_dom_render_service$46template: src__laminate__overlay__render__overlay_dom_render_service$46template,
    src__laminate__overlay__overlay_service$46template: src__laminate__overlay__overlay_service$46template
  };
});

//# sourceMappingURL=overlay_ref.template.ddc.js.map
