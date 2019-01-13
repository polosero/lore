define(['dart_sdk', 'packages/angular_components/utils/browser/window/module', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template'], function(dart_sdk, module, change_detection, angular) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__window__module = module.utils__browser__window__module;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const utils__browser__window__module$46template = Object.create(_root);
  let WindowToLocation = () => (WindowToLocation = dart.constFn(dart.fnType(html.Location, [html.Window])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(utils__browser__window__module$46template, {
    /*utils__browser__window__module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  utils__browser__window__module$46template.initReflector = function() {
    if (dart.test(utils__browser__window__module$46template._visited)) {
      return;
    }
    utils__browser__window__module$46template._visited = true;
    src__di__reflector.registerDependencies(dart.fn(utils__browser__window__module.getLocation, WindowToLocation()), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(html.Window)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/utils/browser/window/module.template.ddc", {
    "package:angular_components/utils/browser/window/module.template.dart": utils__browser__window__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAUI,kDAAQ;YAAG;;;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAO,uCAAoB,CAAC,uEAAW,EAAE,sCACvC,oCAAW,0BAAM;AAEnB,IAAM,gCAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    utils__browser__window__module$46template: utils__browser__window__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
