define(['dart_sdk', 'packages/angular_components/focus/focus_trap.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/focus/focus_trap', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/browser/dom_iterator/dom_iterator.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, focus_trap$46scss$46css, view_type, change_detection, modules, focus_trap, angular, focus, dom_iterator, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const focus__focus_trap$46scss$46css$46shim = focus_trap$46scss$46css.focus__focus_trap$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const focus__focus_trap = focus_trap.focus__focus_trap;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const utils__browser__dom_iterator__dom_iterator$46template = dom_iterator.utils__browser__dom_iterator__dom_iterator$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const focus__focus_trap$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfFocusTrapComponent = () => (AppViewOfFocusTrapComponent = dart.constFn(src__core__linker__app_view.AppView$(focus__focus_trap.FocusTrapComponent)))();
  let AppViewAndintToAppViewOfFocusTrapComponent = () => (AppViewAndintToAppViewOfFocusTrapComponent = dart.constFn(dart.fnType(AppViewOfFocusTrapComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfFocusTrapComponent = () => (ComponentFactoryOfFocusTrapComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(focus__focus_trap.FocusTrapComponent)))();
  let ComponentRefOfFocusTrapComponent = () => (ComponentRefOfFocusTrapComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(focus__focus_trap.FocusTrapComponent)))();
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template.styles$FocusTrapComponent*/get styles$FocusTrapComponent() {
      return [focus__focus_trap$46scss$46css$46shim.styles];
    }
  });
  const _FocusContentWrapper_1_5 = Symbol('_FocusContentWrapper_1_5');
  let const$;
  focus__focus_trap$46template.ViewFocusTrapComponent0 = class ViewFocusTrapComponent0 extends src__core__linker__app_view.AppView$(focus__focus_trap.FocusTrapComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_0.tabIndex = 0;
      this.addShimC(_el_0);
      let _el_1 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(_el_1, "focusContentWrapper", "");
      this.createAttr(_el_1, "style", "outline: none");
      _el_1.tabIndex = -1;
      this.addShimC(_el_1);
      this[_FocusContentWrapper_1_5] = new focus__focus_trap.FocusContentWrapper.new(_el_1);
      this.project(_el_1, 0);
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_2.tabIndex = 0;
      this.addShimC(_el_2);
      _el_0[$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(this.ctx, 'focusLast')));
      _el_2[$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(this.ctx, 'focusFirst')));
      this.ctx.content = this[_FocusContentWrapper_1_5];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
  };
  (focus__focus_trap$46template.ViewFocusTrapComponent0.new = function(parentView, parentIndex) {
    this[_FocusContentWrapper_1_5] = null;
    focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("focus-trap"));
    let t = focus__focus_trap$46template.ViewFocusTrapComponent0._renderType;
    t == null ? focus__focus_trap$46template.ViewFocusTrapComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/focus/focus_trap.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, focus__focus_trap$46template.styles$FocusTrapComponent) : t;
    this.setupComponentType(focus__focus_trap$46template.ViewFocusTrapComponent0._renderType);
  }).prototype = focus__focus_trap$46template.ViewFocusTrapComponent0.prototype;
  dart.addTypeTests(focus__focus_trap$46template.ViewFocusTrapComponent0);
  dart.setMethodSignature(focus__focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getMethods(focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(focus__focus_trap.FocusTrapComponent), [])
  }));
  dart.setFieldSignature(focus__focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getFields(focus__focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    [_FocusContentWrapper_1_5]: dart.fieldType(focus__focus_trap.FocusContentWrapper)
  }));
  dart.defineLazy(focus__focus_trap$46template.ViewFocusTrapComponent0, {
    /*focus__focus_trap$46template.ViewFocusTrapComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  focus__focus_trap$46template.viewFactory_FocusTrapComponent0 = function(parentView, parentIndex) {
    return new focus__focus_trap$46template.ViewFocusTrapComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template._FocusTrapComponentNgFactory*/get _FocusTrapComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfFocusTrapComponent()).new("focus-trap", dart.fn(focus__focus_trap$46template.viewFactory_FocusTrapComponentHost0, AppViewAndintToAppViewOfFocusTrapComponent())));
    }
  });
  dart.copyProperties(focus__focus_trap$46template, {
    get FocusTrapComponentNgFactory() {
      return focus__focus_trap$46template._FocusTrapComponentNgFactory;
    }
  });
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template.styles$FocusTrapComponentHost*/get styles$FocusTrapComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _FocusTrapComponent_0_5 = Symbol('_FocusTrapComponent_0_5');
  focus__focus_trap$46template._ViewFocusTrapComponentHost0 = class _ViewFocusTrapComponentHost0 extends src__core__linker__app_view.AppView$(focus__focus_trap.FocusTrapComponent) {
    build() {
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      this[_compView_0].create(this[_FocusTrapComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfFocusTrapComponent()).new(0, this, this.rootEl, this[_FocusTrapComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
  };
  (focus__focus_trap$46template._ViewFocusTrapComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = focus__focus_trap$46template._ViewFocusTrapComponentHost0.prototype;
  dart.addTypeTests(focus__focus_trap$46template._ViewFocusTrapComponentHost0);
  dart.setMethodSignature(focus__focus_trap$46template._ViewFocusTrapComponentHost0, () => ({
    __proto__: dart.getMethods(focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(focus__focus_trap.FocusTrapComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(focus__focus_trap$46template._ViewFocusTrapComponentHost0, () => ({
    __proto__: dart.getFields(focus__focus_trap$46template._ViewFocusTrapComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent)
  }));
  focus__focus_trap$46template.viewFactory_FocusTrapComponentHost0 = function(parentView, parentIndex) {
    return new focus__focus_trap$46template._ViewFocusTrapComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(focus__focus_trap$46template, {
    /*focus__focus_trap$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  focus__focus_trap$46template.initReflector = function() {
    if (dart.test(focus__focus_trap$46template._visited)) {
      return;
    }
    focus__focus_trap$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(focus__focus_trap.FocusTrapComponent), focus__focus_trap$46template.FocusTrapComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    utils__browser__dom_iterator__dom_iterator$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/focus/focus_trap.template.ddc", {
    "package:angular_components/focus/focus_trap.template.dart": focus__focus_trap$46template
  }, '{"version":3,"sourceRoot":"","sources":["focus_trap.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAsBoB,sDAAyB;YAAG,EAAS,4CAAM;;;;;;;AAY3D,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,aAAQ;AAC1B,UAAM,QAAQ,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AACtD,WAAK,SAAS,GAAG;AACjB,mBAAQ,CAAC,KAAK;AACd,UAAM,QAAQ,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AACtD,qBAAU,CAAC,KAAK,EAAE,uBAAuB;AACzC,qBAAU,CAAC,KAAK,EAAE,SAAS;AAC3B,WAAK,SAAS,GAAG,CAAC;AAClB,mBAAQ,CAAC,KAAK;AACd,oCAAwB,OAAG,yCAA2B,CAAC,KAAK;AAC5D,kBAAO,CAAC,KAAK,EAAE;AACf,UAAM,QAAQ,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AACtD,WAAK,SAAS,GAAG;AACjB,mBAAQ,CAAC,KAAK;AACd,WAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,QAAG;AACjD,WAAK,mBAAiB,CAAC,SAAS,kBAAa,uBAAC,QAAG;AACjD,cAAG,QAAQ,GAAG,8BAAwB;AACtC,eAAI,CAAC,uDAAU;IACjB;;uEA3BwB,UAA2B,EAAE,WAAe;IAFxC,8BAAwB;AAEoB,kFAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACtK,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,4EAAW;gBAAX,gEAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,uDAAuD,MAAO,2CAAiB,SAAS,EAAE,sDAAyB;AAC9L,2BAAkB,CAAC,gEAAW;EAChC;;;;;;;;;;;MAL2B,gEAAW;;;;;0EA+B4B,UAA2B,EAAE,WAAe;AAC9G,eAAO,wDAAuB,CAAC,UAAU,EAAE,WAAW;EACxD;;MAEmD,yDAA4B;YAAG,gBAAM,4CAAgB,CAAC,cAAc,uHAAmC;;;;;AAExJ,YAAO,0DAA4B;IACrC;;;MAEoB,0DAA6B;YAAG;;;;;;;AAQhD,uBAAW,OAAG,wDAAuB,CAAC,MAAM;AAC5C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,mCAAuB,OAAG,wCAA0B;AACpD,uBAAW,OAAO,CAAC,6BAAuB,EAAE,qBAAgB;AAC5D,gBAAK,CAAC,WAAM;AACZ,iBAAO,wCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,6BAAuB;IAC9D;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,uBAAW,QAAQ;AACnB,mCAAuB,YAAY;IACrC;;4EApB6B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,6BAAuB;AAC2B,uFAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;8EAuBrG,UAA2B,EAAE,WAAe;AAClH,eAAO,6DAA4B,CAAC,UAAU,EAAE,WAAW;EAC7D;;MAEI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,oCAAiB,CAAC,mDAAkB,EAAE,wDAA2B;AACxE,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,kDAAa;EACrB","file":"focus_trap.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_trap$46template: focus__focus_trap$46template
  };
});

//# sourceMappingURL=focus_trap.template.ddc.js.map
