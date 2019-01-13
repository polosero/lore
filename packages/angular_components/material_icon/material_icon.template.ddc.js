define(['dart_sdk', 'packages/angular_components/material_icon/material_icon.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_icon/material_icon', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template'], function(dart_sdk, material_icon$46scss$46css, view_type, change_detection, modules, material_icon, angular, icon) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_icon__material_icon$46scss$46css$46shim = material_icon$46scss$46css.material_icon__material_icon$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_icon__material_icon = material_icon.material_icon__material_icon;
  const angular$46template = angular.angular$46template;
  const model__ui__icon$46template = icon.model__ui__icon$46template;
  const _root = Object.create(null);
  const material_icon__material_icon$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialIconComponent = () => (AppViewOfMaterialIconComponent = dart.constFn(src__core__linker__app_view.AppView$(material_icon__material_icon.MaterialIconComponent)))();
  let AppViewAndintToAppViewOfMaterialIconComponent = () => (AppViewAndintToAppViewOfMaterialIconComponent = dart.constFn(dart.fnType(AppViewOfMaterialIconComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialIconComponent = () => (ComponentFactoryOfMaterialIconComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_icon__material_icon.MaterialIconComponent)))();
  let ComponentRefOfMaterialIconComponent = () => (ComponentRefOfMaterialIconComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_icon__material_icon.MaterialIconComponent)))();
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template.styles$MaterialIconComponent*/get styles$MaterialIconComponent() {
      return [material_icon__material_icon$46scss$46css$46shim.styles];
    }
  });
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  let const$;
  material_icon__material_icon$46template.ViewMaterialIconComponent0 = class ViewMaterialIconComponent0 extends src__core__linker__app_view.AppView$(material_icon__material_icon.MaterialIconComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "i", parentRenderNode);
      this.createAttr(this[_el_1], "aria-hidden", "true");
      this[_el_1].className = "material-icon-i material-icons";
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.ariaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_1], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let l = _ctx.iconName;
      let currVal_1 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_2][$text] = currVal_1;
        this[_expr_1] = currVal_1;
      }
    }
  };
  (material_icon__material_icon$46template.ViewMaterialIconComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-icon"));
    let t = material_icon__material_icon$46template.ViewMaterialIconComponent0._renderType;
    t == null ? material_icon__material_icon$46template.ViewMaterialIconComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_icon/material_icon.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_icon__material_icon$46template.styles$MaterialIconComponent) : t;
    this.setupComponentType(material_icon__material_icon$46template.ViewMaterialIconComponent0._renderType);
  }).prototype = material_icon__material_icon$46template.ViewMaterialIconComponent0.prototype;
  dart.addTypeTests(material_icon__material_icon$46template.ViewMaterialIconComponent0);
  dart.setMethodSignature(material_icon__material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getMethods(material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_icon__material_icon.MaterialIconComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_icon__material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getFields(material_icon__material_icon$46template.ViewMaterialIconComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text)
  }));
  dart.defineLazy(material_icon__material_icon$46template.ViewMaterialIconComponent0, {
    /*material_icon__material_icon$46template.ViewMaterialIconComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_icon__material_icon$46template.viewFactory_MaterialIconComponent0 = function(parentView, parentIndex) {
    return new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template._MaterialIconComponentNgFactory*/get _MaterialIconComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialIconComponent()).new("material-icon", dart.fn(material_icon__material_icon$46template.viewFactory_MaterialIconComponentHost0, AppViewAndintToAppViewOfMaterialIconComponent())));
    }
  });
  dart.copyProperties(material_icon__material_icon$46template, {
    get MaterialIconComponentNgFactory() {
      return material_icon__material_icon$46template._MaterialIconComponentNgFactory;
    }
  });
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template.styles$MaterialIconComponentHost*/get styles$MaterialIconComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  material_icon__material_icon$46template._ViewMaterialIconComponentHost0 = class _ViewMaterialIconComponentHost0 extends src__core__linker__app_view.AppView$(material_icon__material_icon.MaterialIconComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(this.rootEl);
      this[_compView_0].create(this[_MaterialIconComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialIconComponent()).new(0, this, this.rootEl, this[_MaterialIconComponent_0_5]);
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
    }
  };
  (material_icon__material_icon$46template._ViewMaterialIconComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_icon__material_icon$46template._ViewMaterialIconComponentHost0.prototype;
  dart.addTypeTests(material_icon__material_icon$46template._ViewMaterialIconComponentHost0);
  dart.setMethodSignature(material_icon__material_icon$46template._ViewMaterialIconComponentHost0, () => ({
    __proto__: dart.getMethods(material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_icon__material_icon.MaterialIconComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_icon__material_icon$46template._ViewMaterialIconComponentHost0, () => ({
    __proto__: dart.getFields(material_icon__material_icon$46template._ViewMaterialIconComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  material_icon__material_icon$46template.viewFactory_MaterialIconComponentHost0 = function(parentView, parentIndex) {
    return new material_icon__material_icon$46template._ViewMaterialIconComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_icon__material_icon$46template, {
    /*material_icon__material_icon$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_icon__material_icon$46template.initReflector = function() {
    if (dart.test(material_icon__material_icon$46template._visited)) {
      return;
    }
    material_icon__material_icon$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_icon__material_icon.MaterialIconComponent), material_icon__material_icon$46template.MaterialIconComponentNgFactory);
    angular$46template.initReflector();
    model__ui__icon$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_icon/material_icon.template.ddc", {
    "package:angular_components/material_icon/material_icon.template.dart": material_icon__material_icon$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_icon.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAoBoB,oEAA4B;YAAG,EAAS,uDAAM;;;;;;;;;;AAe9D,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAM,UAAU,aAAY,CAAC;AAC7B,sBAAgB,SAAO,CAAC,OAAO;AAC/B,UAAI,MAAc,aAAQ;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,qBAAU,CAAC,WAAK,EAAE,eAAe;AACjC,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,mBAAO,GAAG,aAAY,CAAC;AACvB,iBAAK,SAAO,CAAC,aAAO;AACpB,eAAI,CAAC,uDAAU;IACjB;;AAIE,UAAM,OAAO,QAAG;AAChB,UAAM,YAAY,IAAI,UAAU;AAChC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,oBAAO,CAAC,WAAK,EAAE,cAAc,SAAS;AACtC,qBAAO,GAAG,SAAS;;AAErB,cAAmB,IAAI,SAAS;UAA1B,4BAA8B;AACpC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,qBAAO,OAAK,GAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;qFAlC2B,UAA2B,EAAE,WAAe;IALnE,aAAO;IACP,aAAO;IACK,WAAK;IACR,aAAO;AAEuD,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACzK,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,kEAAkE,MAAO,2CAAiB,SAAS,EAAE,oEAA4B;AAC5M,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;;;;;;;;MAL2B,8EAAW;;;;;wFAsCkC,UAA2B,EAAE,WAAe;AACpH,eAAO,sEAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;MAEsD,uEAA+B;YAAG,gBAAM,+CAAgB,CAAC,iBAAiB,wIAAsC;;;;;AAEpK,YAAO,wEAA+B;IACxC;;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,OAAG,sEAA0B,CAAC,MAAM;AAC/C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,OAAG,sDAA6B,CAAC,WAAM;AACjE,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,iBAAO,2CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACjE;;AAIE,UAAK,UAAU;AACf,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,QAAQ;IACrB;;0FAvBgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;4FA0BlG,UAA2B,EAAE,WAAe;AACxH,eAAO,2EAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,gCAAa;AACnB,IAAM,wCAAa;EACrB","file":"material_icon.template.ddc.js"}');
  // Exports:
  return {
    material_icon__material_icon$46template: material_icon__material_icon$46template
  };
});

//# sourceMappingURL=material_icon.template.ddc.js.map
