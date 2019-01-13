define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__providers = change_detection.src__di__providers;
  const src__di__module = change_detection.src__di__module;
  const _root = Object.create(null);
  const utils__browser__window__module = Object.create(_root);
  const $location = dartx.location;
  let VoidToDocument = () => (VoidToDocument = dart.constFn(dart.fnType(html.Document, [])))();
  let VoidToWindow = () => (VoidToWindow = dart.constFn(dart.fnType(html.Window, [])))();
  let FactoryProviderOfObject = () => (FactoryProviderOfObject = dart.constFn(src__di__providers.FactoryProvider$(core.Object)))();
  let ProviderOfObject = () => (ProviderOfObject = dart.constFn(src__di__providers.Provider$(core.Object)))();
  let WindowToLocation = () => (WindowToLocation = dart.constFn(dart.fnType(html.Location, [html.Window])))();
  utils__browser__window__module.getDocument = function() {
    return html.document;
  };
  utils__browser__window__module.getWindow = function() {
    return html.window;
  };
  dart.defineLazy(utils__browser__window__module, {
    /*utils__browser__window__module.windowBindings*/get windowBindings() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(html.Document), {useFactory: dart.fn(utils__browser__window__module.getDocument, VoidToDocument())})), dart.const(src__di__providers.Provider.new(dart.wrapType(html.Window), {useFactory: dart.fn(utils__browser__window__module.getWindow, VoidToWindow())}))], src__di__providers.Provider);
    },
    /*utils__browser__window__module.windowModule*/get windowModule() {
      return dart.const(src__di__module.Module.new({provide: dart.constList([dart.const(FactoryProviderOfObject().new(dart.wrapType(html.Document), dart.fn(utils__browser__window__module.getDocument, VoidToDocument()))), dart.const(FactoryProviderOfObject().new(dart.wrapType(html.Window), dart.fn(utils__browser__window__module.getWindow, VoidToWindow())))], ProviderOfObject())}));
    }
  });
  utils__browser__window__module.getLocation = function(window) {
    return window[$location];
  };
  dart.defineLazy(utils__browser__window__module, {
    /*utils__browser__window__module.locationBindings*/get locationBindings() {
      return dart.constList([dart.const(src__di__providers.FactoryProvider.new(dart.wrapType(html.Location), dart.fn(utils__browser__window__module.getLocation, WindowToLocation())))], src__di__providers.FactoryProvider);
    }
  });
  dart.trackLibraries("packages/angular_components/utils/browser/window/module.ddc", {
    "package:angular_components/utils/browser/window/module.dart": utils__browser__window__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;UAc0B,cAAQ;;;UAMZ,YAAM;;;MAOtB,6CAAc;YAAG,4BAGrB,+BAAQ,CAAC,4BAAQ,eAAc,qEAAW,gBAC1C,+BAAQ,CAAC,0BAAM,eAAc,iEAAS;;MAGlC,2CAAY;wBAAG,0BAAM,WAAU,2BACnC,6BAAe,CAAC,4BAAQ,EAAE,qEAAW,eACrC,6BAAe,CAAC,0BAAM,EAAE,iEAAS;;;wDAWd,MAAa;UAAK,OAAM,WAAS;;;MAGhD,+CAAgB;YAAG,4BACvB,sCAAe,CAAC,4BAAQ,EAAE,uEAAW","file":"module.ddc.js"}');
  // Exports:
  return {
    utils__browser__window__module: utils__browser__window__module
  };
});

//# sourceMappingURL=module.ddc.js.map
