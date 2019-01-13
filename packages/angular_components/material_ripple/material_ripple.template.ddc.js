define(['dart_sdk', 'packages/angular_components/material_ripple/material_ripple.scss.css', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/utils/color/material.template'], function(dart_sdk, material_ripple$46scss, view_type, change_detection, modules, material_ripple, angular, events, feature_detector, material) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_ripple__material_ripple$46scss$46css = material_ripple$46scss.material_ripple__material_ripple$46scss$46css;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_ripple__material_ripple = material_ripple.material_ripple__material_ripple;
  const angular$46template = angular.angular$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const utils__color__material$46template = material.utils__color__material$46template;
  const _root = Object.create(null);
  const material_ripple__material_ripple$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialRippleComponent = () => (AppViewOfMaterialRippleComponent = dart.constFn(src__core__linker__app_view.AppView$(material_ripple__material_ripple.MaterialRippleComponent)))();
  let AppViewAndintToAppViewOfMaterialRippleComponent = () => (AppViewAndintToAppViewOfMaterialRippleComponent = dart.constFn(dart.fnType(AppViewOfMaterialRippleComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialRippleComponent = () => (ComponentFactoryOfMaterialRippleComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_ripple__material_ripple.MaterialRippleComponent)))();
  let ComponentRefOfMaterialRippleComponent = () => (ComponentRefOfMaterialRippleComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_ripple__material_ripple.MaterialRippleComponent)))();
  dart.defineLazy(material_ripple__material_ripple$46template, {
    /*material_ripple__material_ripple$46template.styles$MaterialRippleComponent*/get styles$MaterialRippleComponent() {
      return [material_ripple__material_ripple$46scss$46css.styles];
    }
  });
  let const$;
  material_ripple__material_ripple$46template.ViewMaterialRippleComponent0 = class ViewMaterialRippleComponent0 extends src__core__linker__app_view.AppView$(material_ripple__material_ripple.MaterialRippleComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
  };
  (material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new = function(parentView, parentIndex) {
    material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-ripple"));
    let t = material_ripple__material_ripple$46template.ViewMaterialRippleComponent0._renderType;
    t == null ? material_ripple__material_ripple$46template.ViewMaterialRippleComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_ripple/material_ripple.dart" : null, src__core__metadata__view.ViewEncapsulation.None, material_ripple__material_ripple$46template.styles$MaterialRippleComponent) : t;
    this.setupComponentType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0._renderType);
  }).prototype = material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.prototype;
  dart.addTypeTests(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0);
  dart.setMethodSignature(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0, () => ({
    __proto__: dart.getMethods(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_ripple__material_ripple.MaterialRippleComponent), [])
  }));
  dart.defineLazy(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0, {
    /*material_ripple__material_ripple$46template.ViewMaterialRippleComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_ripple__material_ripple$46template.viewFactory_MaterialRippleComponent0 = function(parentView, parentIndex) {
    return new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_ripple__material_ripple$46template, {
    /*material_ripple__material_ripple$46template._MaterialRippleComponentNgFactory*/get _MaterialRippleComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialRippleComponent()).new("material-ripple", dart.fn(material_ripple__material_ripple$46template.viewFactory_MaterialRippleComponentHost0, AppViewAndintToAppViewOfMaterialRippleComponent())));
    }
  });
  dart.copyProperties(material_ripple__material_ripple$46template, {
    get MaterialRippleComponentNgFactory() {
      return material_ripple__material_ripple$46template._MaterialRippleComponentNgFactory;
    }
  });
  dart.defineLazy(material_ripple__material_ripple$46template, {
    /*material_ripple__material_ripple$46template.styles$MaterialRippleComponentHost*/get styles$MaterialRippleComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialRippleComponent_0_5 = Symbol('_MaterialRippleComponent_0_5');
  material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0 = class _ViewMaterialRippleComponentHost0 extends src__core__linker__app_view.AppView$(material_ripple__material_ripple.MaterialRippleComponent) {
    build() {
      this[_compView_0] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialRippleComponent_0_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(this.rootEl);
      this[_compView_0].create(this[_MaterialRippleComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialRippleComponent()).new(0, this, this.rootEl, this[_MaterialRippleComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0.prototype;
  dart.addTypeTests(material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0);
  dart.setMethodSignature(material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0, () => ({
    __proto__: dart.getMethods(material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_ripple__material_ripple.MaterialRippleComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0, () => ({
    __proto__: dart.getFields(material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_0_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent)
  }));
  material_ripple__material_ripple$46template.viewFactory_MaterialRippleComponentHost0 = function(parentView, parentIndex) {
    return new material_ripple__material_ripple$46template._ViewMaterialRippleComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_ripple__material_ripple$46template, {
    /*material_ripple__material_ripple$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_ripple__material_ripple$46template.initReflector = function() {
    if (dart.test(material_ripple__material_ripple$46template._visited)) {
      return;
    }
    material_ripple__material_ripple$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_ripple__material_ripple.MaterialRippleComponent), material_ripple__material_ripple$46template.MaterialRippleComponentNgFactory);
    angular$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
    utils__color__material$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_ripple/material_ripple.template.ddc", {
    "package:angular_components/material_ripple/material_ripple.template.dart": material_ripple__material_ripple$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_ripple.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAsBoB,0EAA8B;YAAG,EAAS,oDAAM;;;;;;AAWhE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,eAAI,CAAC,uDAAU;IACjB;;2FAV6B,UAA2B,EAAE,WAAe;AAAI,sGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AAC3K,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,gGAAW;gBAAX,oFAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,sEAAsE,MAAO,2CAAiB,KAAK,EAAE,0EAA8B;AAC9M,2BAAkB,CAAC,oFAAW;EAChC;;;;;;;MAL2B,oFAAW;;;;;8FAcsC,UAA2B,EAAE,WAAe;AACxH,eAAO,4EAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEwD,6EAAiC;YAAG,gBAAM,iDAAgB,CAAC,mBAAmB,gJAAwC;;;;;AAE5K,YAAO,8EAAiC;IAC1C;;;MAEoB,8EAAkC;YAAG;;;;;;;AAQrD,uBAAW,OAAG,4EAA4B,CAAC,MAAM;AACjD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,wCAA4B,OAAG,4DAA+B,CAAC,WAAM;AACrE,uBAAW,OAAO,CAAC,kCAA4B,EAAE,qBAAgB;AACjE,gBAAK,CAAC,WAAM;AACZ,iBAAO,6CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,kCAA4B;IACnE;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,QAAQ;AACnB,wCAA4B,YAAY;IAC1C;;gGAxBkC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,kCAA4B;AACsB,2GAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;kGA2BhG,UAA2B,EAAE,WAAe;AAC5H,eAAO,iFAAiC,CAAC,UAAU,EAAE,WAAW;EAClE;;MAEI,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAO,oCAAiB,CAAC,uEAAuB,EAAE,4EAAgC;AAClF,IAAM,gCAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,2EAAa;AACnB,IAAM,+CAAa;EACrB","file":"material_ripple.template.ddc.js"}');
  // Exports:
  return {
    material_ripple__material_ripple$46template: material_ripple__material_ripple$46template
  };
});

//# sourceMappingURL=material_ripple.template.ddc.js.map
