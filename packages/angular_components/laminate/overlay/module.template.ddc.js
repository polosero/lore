define(['dart_sdk', 'packages/angular_components/laminate/overlay/module', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_components/laminate/overlay/constants.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/ruler/dom_ruler.template', 'packages/angular_components/src/laminate/overlay/overlay_ref.template', 'packages/angular_components/utils/angular/imperative_view/imperative_view.template', 'packages/angular_components/utils/angular/managed_zone/angular_2.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/browser/window/module.template'], function(dart_sdk, module, change_detection, angular, constants, zindexer, dom_ruler, overlay_ref, imperative_view, angular_2, angular_2$, module$) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__overlay__module = module.laminate__overlay__module;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const laminate__overlay__constants$46template = constants.laminate__overlay__constants$46template;
  const laminate__overlay__zindexer$46template = zindexer.laminate__overlay__zindexer$46template;
  const laminate__ruler__dom_ruler$46template = dom_ruler.laminate__ruler__dom_ruler$46template;
  const src__laminate__overlay__overlay_service$46template = overlay_ref.src__laminate__overlay__overlay_service$46template;
  const src__laminate__overlay__render__overlay_dom_render_service$46template = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service$46template;
  const src__laminate__overlay__render__overlay_style_config$46template = overlay_ref.src__laminate__overlay__render__overlay_style_config$46template;
  const utils__angular__imperative_view__imperative_view$46template = imperative_view.utils__angular__imperative_view__imperative_view$46template;
  const utils__angular__managed_zone__angular_2$46template = angular_2.utils__angular__managed_zone__angular_2$46template;
  const utils__browser__dom_service__angular_2$46template = angular_2$.utils__browser__dom_service__angular_2$46template;
  const utils__browser__window__module$46template = module$.utils__browser__window__module$46template;
  const _root = Object.create(null);
  const laminate__overlay__module$46template = Object.create(_root);
  let StringAndHtmlElementAnddynamicToHtmlElement = () => (StringAndHtmlElementAnddynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [core.String, html.HtmlElement, dart.dynamic])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let StringAndHtmlElementToHtmlElement = () => (StringAndHtmlElementToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [core.String, html.HtmlElement])))();
  let DocumentAnddynamicToHtmlElement = () => (DocumentAnddynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [html.Document, dart.dynamic])))();
  dart.defineLazy(laminate__overlay__module$46template, {
    /*laminate__overlay__module$46template._visited*/get _visited() {
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
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  laminate__overlay__module$46template.initReflector = function() {
    if (dart.test(laminate__overlay__module$46template._visited)) {
      return;
    }
    laminate__overlay__module$46template._visited = true;
    src__di__reflector.registerDependencies(dart.fn(laminate__overlay__module.getDefaultContainer, StringAndHtmlElementAnddynamicToHtmlElement()), const$10 || (const$10 = dart.constList([const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__core__di__decorators.Inject.new(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))))))], core.Object)), const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__core__di__decorators.Inject.new(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))))))], core.Object)), const$9 || (const$9 = dart.constList([const$6 || (const$6 = dart.const(new src__core__di__decorators.Inject.new(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))))), const$7 || (const$7 = dart.const(new src__core__di__decorators.SkipSelf.new())), const$8 || (const$8 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(dart.fn(laminate__overlay__module.getDefaultContainerName, dynamicToString()), const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.constList([const$12 || (const$12 = dart.const(new src__core__di__decorators.Inject.new(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))))), const$13 || (const$13 = dart.const(new src__core__di__decorators.SkipSelf.new())), const$14 || (const$14 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(dart.fn(laminate__overlay__module.getDebugContainer, StringAndHtmlElementToHtmlElement()), const$23 || (const$23 = dart.constList([const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__core__di__decorators.Inject.new(const$17 || (const$17 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))))))], core.Object)), const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__core__di__decorators.Inject.new(const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))))))], core.Object))], ListOfObject())));
    src__di__reflector.registerDependencies(dart.fn(laminate__overlay__module.getOverlayContainerParent, DocumentAnddynamicToHtmlElement()), const$30 || (const$30 = dart.constList([const$24 || (const$24 = dart.constList([dart.wrapType(html.Document)], core.Object)), const$29 || (const$29 = dart.constList([const$26 || (const$26 = dart.const(new src__core__di__decorators.Inject.new(const$25 || (const$25 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))))), const$27 || (const$27 = dart.const(new src__core__di__decorators.SkipSelf.new())), const$28 || (const$28 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    laminate__overlay__constants$46template.initReflector();
    laminate__overlay__zindexer$46template.initReflector();
    laminate__ruler__dom_ruler$46template.initReflector();
    src__laminate__overlay__overlay_service$46template.initReflector();
    src__laminate__overlay__render__overlay_dom_render_service$46template.initReflector();
    src__laminate__overlay__render__overlay_dom_render_service$46template.initReflector();
    src__laminate__overlay__render__overlay_style_config$46template.initReflector();
    utils__angular__imperative_view__imperative_view$46template.initReflector();
    utils__angular__managed_zone__angular_2$46template.initReflector();
    utils__browser__dom_service__angular_2$46template.initReflector();
    utils__browser__window__module$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/laminate/overlay/module.template.ddc", {
    "package:angular_components/laminate/overlay/module.template.dart": laminate__overlay__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAsBI,6CAAQ;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAO,uCAAoB,CAAC,qGAAmB,EAAE,wCAC/C,sCAAO,qCAAM,oCAAa,CAAC,mCAAM,2CAAwB,CAAC,8CAC1D,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,gDAC1D,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2CAAwB,CAAC,0BAAsB,qCAAM,sCAAe,MAAI,qCAAM,sCAAe;AAEhI,IAAO,uCAAoB,CAAC,6EAAuB,EAAE,wCACnD,wCAAO,uCAAM,oCAAa,CAAC,uCAAM,2CAAwB,CAAC,8BAA0B,uCAAM,sCAAe,MAAI,uCAAM,sCAAe;AAEpI,IAAO,uCAAoB,CAAC,yFAAiB,EAAE,wCAC7C,wCAAO,uCAAM,oCAAa,CAAC,uCAAM,2CAAwB,CAAC,8CAC1D,wCAAO,uCAAM,oCAAa,CAAC,uCAAM,2CAAwB,CAAC;AAE5D,IAAO,uCAAoB,CAAC,+FAAyB,EAAE,wCACrD,wCAAW,4BAAQ,kBACnB,wCAAO,uCAAM,oCAAa,CAAC,uCAAM,2CAAwB,CAAC,gCAA4B,uCAAM,sCAAe,MAAI,uCAAM,sCAAe;AAEtI,IAAM,gCAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,mFAAa;AACnB,IAAM,mFAAa;AACnB,IAAM,6EAAa;AACnB,IAAM,yEAAa;AACnB,IAAM,gEAAa;AACnB,IAAO,+DAAa;AACpB,IAAO,uDAAa;EACtB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__module$46template: laminate__overlay__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
