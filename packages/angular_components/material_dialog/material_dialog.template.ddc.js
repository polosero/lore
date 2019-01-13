define(['dart_sdk', 'packages/angular_components/material_dialog/material_dialog.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, material_dialog$46scss$46css, view_type, change_detection, modules, focus_trap, focus_trap$, material_dialog, dom_service, modal, angular, modal$, keyboard_handler_mixin, dom_service$, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_dialog__material_dialog$46scss$46css$46shim = material_dialog$46scss$46css.material_dialog__material_dialog$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const material_dialog__material_dialog = material_dialog.material_dialog__material_dialog;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const angular$46template = angular.angular$46template;
  const laminate__components__modal__modal$46template = modal$.laminate__components__modal__modal$46template;
  const model__a11y__keyboard_handler_mixin$46template = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin$46template;
  const utils__browser__dom_service__dom_service$46template = dom_service$.utils__browser__dom_service__dom_service$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const material_dialog__material_dialog$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialDialogComponent = () => (AppViewOfMaterialDialogComponent = dart.constFn(src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent)))();
  let AppViewAndintToAppViewOfMaterialDialogComponent = () => (AppViewAndintToAppViewOfMaterialDialogComponent = dart.constFn(dart.fnType(AppViewOfMaterialDialogComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let ComponentFactoryOfMaterialDialogComponent = () => (ComponentFactoryOfMaterialDialogComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_dialog__material_dialog.MaterialDialogComponent)))();
  let VoidToMaterialDialogComponent = () => (VoidToMaterialDialogComponent = dart.constFn(dart.fnType(material_dialog__material_dialog.MaterialDialogComponent, [])))();
  let ComponentRefOfMaterialDialogComponent = () => (ComponentRefOfMaterialDialogComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent)))();
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template.styles$MaterialDialogComponent*/get styles$MaterialDialogComponent() {
      return [material_dialog__material_dialog$46scss$46css$46shim.styles];
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _FocusTrapComponent_0_5 = Symbol('_FocusTrapComponent_0_5');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  let const$;
  material_dialog__material_dialog$46template.ViewMaterialDialogComponent0 = class ViewMaterialDialogComponent0 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FocusTrapComponent_0_5] = new focus__focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      _el_1.className = "wrapper";
      this.addShimC(html.HtmlElement._check(_el_1));
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent1, AppViewAndintToAppViewOfMaterialDialogComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, _el_1);
      this[_el_3].className = "error";
      this.addShimC(this[_el_3]);
      this[_text_4] = html.Text.new("");
      this[_el_3][$append](this[_text_4]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, "main", _el_1);
      this.addShimE(this[_el_5]);
      this.project(this[_el_5], 1);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 1, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent2, AppViewAndintToAppViewOfMaterialDialogComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].create(this[_FocusTrapComponent_0_5], [JSArrayOfElement().of([_el_1])]);
      _el_0[$addEventListener]("keyup", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this.ctx, 'onKeyUp')));
      this.ctx.main = html.HtmlElement._check(this[_el_5]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = _ctx.shouldShowHeader;
      this[_NgIf_6_9].ngIf = _ctx.shouldShowFooter;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_1 = _ctx.error != null;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateClass(this[_el_3], "expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.error;
      let currVal_2 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_4][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.shouldShowTopScrollStroke;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateClass(html.HtmlElement._check(this[_el_5]), "top-scroll-stroke", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.shouldShowBottomScrollStroke;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.updateClass(html.HtmlElement._check(this[_el_5]), "bottom-scroll-stroke", currVal_4);
        this[_expr_4] = currVal_4;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_0].destroy();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
  };
  (material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-dialog"));
    let t = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType;
    t == null ? material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_dialog/material_dialog.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_dialog__material_dialog$46template.styles$MaterialDialogComponent) : t;
    this.setupComponentType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType);
  }).prototype = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0);
  dart.setMethodSignature(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    [_compView_0]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_0_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_el_3]: dart.fieldType(html.DivElement),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0, {
    /*material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent0 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template._MaterialDialogComponentNgFactory*/get _MaterialDialogComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialDialogComponent()).new("material-dialog", dart.fn(material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponentHost0, AppViewAndintToAppViewOfMaterialDialogComponent())));
    }
  });
  dart.copyProperties(material_dialog__material_dialog$46template, {
    get MaterialDialogComponentNgFactory() {
      return material_dialog__material_dialog$46template._MaterialDialogComponentNgFactory;
    }
  });
  material_dialog__material_dialog$46template._ViewMaterialDialogComponent1 = class _ViewMaterialDialogComponent1 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("header");
      this.addShimE(_el_0);
      this.project(_el_0, 0);
      this.init0(_el_0);
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.new = function(parentView, parentIndex) {
    material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType;
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), [])
  }));
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent1 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponent1.new(parentView, parentIndex);
  };
  material_dialog__material_dialog$46template._ViewMaterialDialogComponent2 = class _ViewMaterialDialogComponent2 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("footer");
      this.addShimE(_el_0);
      this.project(_el_0, 2);
      this.init0(_el_0);
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.new = function(parentView, parentIndex) {
    material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_dialog__material_dialog$46template.ViewMaterialDialogComponent0._renderType;
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), [])
  }));
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponent2 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template.styles$MaterialDialogComponentHost*/get styles$MaterialDialogComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialDialogComponent_0_5 = Symbol('_MaterialDialogComponent_0_5');
  material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0 = class _ViewMaterialDialogComponentHost0 extends src__core__linker__app_view.AppView$(material_dialog__material_dialog.MaterialDialogComponent) {
    build() {
      this[_compView_0] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDialogComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0].ref, laminate__components__modal__modal.ModalComponent._check(this.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex, null))), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(this.rootEl, utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_0].ref, laminate__components__modal__modal.ModalComponent._check(this.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex, null)));
      this[_compView_0].create(this[_MaterialDialogComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialDialogComponent()).new(0, this, this.rootEl, this[_MaterialDialogComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_MaterialDialogComponent_0_5].ngAfterContentChecked();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_MaterialDialogComponent_0_5].ngOnDestroy();
    }
  };
  (material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDialogComponent_0_5] = null;
    material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.prototype;
  dart.addTypeTests(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0);
  dart.setMethodSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_dialog__material_dialog.MaterialDialogComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_MaterialDialogComponent_0_5]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent)
  }));
  material_dialog__material_dialog$46template.viewFactory_MaterialDialogComponentHost0 = function(parentView, parentIndex) {
    return new material_dialog__material_dialog$46template._ViewMaterialDialogComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_dialog__material_dialog$46template, {
    /*material_dialog__material_dialog$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_dialog__material_dialog$46template.initReflector = function() {
    if (dart.test(material_dialog__material_dialog$46template._visited)) {
      return;
    }
    material_dialog__material_dialog$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), material_dialog__material_dialog$46template.MaterialDialogComponentNgFactory);
    angular$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    model__a11y__keyboard_handler_mixin$46template.initReflector();
    utils__browser__dom_service__dom_service$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_dialog/material_dialog.template.ddc", {
    "package:angular_components/material_dialog/material_dialog.template.dart": material_dialog__material_dialog$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_dialog.template.dart"],"names":[],"mappings":"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","file":"material_dialog.template.ddc.js"}');
  // Exports:
  return {
    material_dialog__material_dialog$46template: material_dialog__material_dialog$46template
  };
});

//# sourceMappingURL=material_dialog.template.ddc.js.map
