define(['dart_sdk', 'packages/angular_components/material_button/material_button.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_button/material_button', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/theme/dark_theme.template'], function(dart_sdk, material_button$46scss$46css, view_type, change_detection, material_button, modules, material_ripple, material_ripple$, dark_theme, button_decorator, has_disabled, material_button_base, angular, meta, button_decorator$, has_disabled$, dark_theme$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_button$46scss$46css$46shim = material_button$46scss$46css.material_button__material_button$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const material_button__material_button = material_button.material_button__material_button;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_ripple__material_ripple$46template = material_ripple.material_ripple__material_ripple$46template;
  const material_ripple__material_ripple = material_ripple$.material_ripple__material_ripple;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_button__material_button_base$46template = material_button_base.material_button__material_button_base$46template;
  const angular$46template = angular.angular$46template;
  const meta$46template = meta.meta$46template;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const theme__dark_theme$46template = dark_theme$.theme__dark_theme$46template;
  const _root = Object.create(null);
  const material_button__material_button$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialButtonComponent = () => (AppViewOfMaterialButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(material_button__material_button.MaterialButtonComponent)))();
  let AppViewAndintToAppViewOfMaterialButtonComponent = () => (AppViewAndintToAppViewOfMaterialButtonComponent = dart.constFn(dart.fnType(AppViewOfMaterialButtonComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialButtonComponent = () => (ComponentFactoryOfMaterialButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_button__material_button.MaterialButtonComponent)))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let ComponentRefOfMaterialButtonComponent = () => (ComponentRefOfMaterialButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_button__material_button.MaterialButtonComponent)))();
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template.styles$MaterialButtonComponent*/get styles$MaterialButtonComponent() {
      return [material_button__material_button$46scss$46css$46shim.styles];
    }
  });
  const _compView_2 = Symbol('_compView_2');
  const _MaterialRippleComponent_2_5 = Symbol('_MaterialRippleComponent_2_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  let const$;
  material_button__material_button$46template.ViewMaterialButtonComponent0 = class ViewMaterialButtonComponent0 extends src__core__linker__app_view.AppView$(material_button__material_button.MaterialButtonComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      let doc = html.document;
      let _el_1 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_1.className = "content";
      this.addShimC(_el_1);
      this.project(_el_1, 0);
      this[_compView_2] = new material_ripple__material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      parentRenderNode[$append](_el_2);
      this.addShimC(_el_2);
      this[_MaterialRippleComponent_2_5] = new material_ripple__material_ripple.MaterialRippleComponent.new(_el_2);
      this[_compView_2].create(this[_MaterialRippleComponent_2_5], []);
      _el_2[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(this.ctx, 'onMouseDown')));
      _el_2[$addEventListener]("mouseup", this.eventHandler1(html.Event, html.Event, dart.bind(this.ctx, 'onMouseUp')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseDown')));
      _rootEl[$addEventListener]("mouseup", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler1(html.Event, html.UIEvent, dart.bind(_ctx, 'onBlur')));
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroy();
      this[_MaterialRippleComponent_2_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = this.ctx.tabIndex;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setProp(this.rootEl, "tabIndex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.ctx.ariaRole;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this.rootEl, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.ctx.disabledStr;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setAttr(this.rootEl, "aria-disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateElemClass(this.rootEl, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = this.ctx.hostDisabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.setAttr(this.rootEl, "disabled", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = this.ctx.hostRaised;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this.setAttr(this.rootEl, "raised", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = this.ctx.hostClassIsFocused;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this.updateElemClass(this.rootEl, "is-focused", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = this.ctx.hostElevation;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this.setAttr(this.rootEl, "elevation", currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
  };
  (material_button__material_button$46template.ViewMaterialButtonComponent0.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-button"));
    this.createAttr(this.rootEl, "animated", material_button__material_button.MaterialButtonComponent.hostAnimated);
    let t = material_button__material_button$46template.ViewMaterialButtonComponent0._renderType;
    t == null ? material_button__material_button$46template.ViewMaterialButtonComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_button/material_button.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_button__material_button$46template.styles$MaterialButtonComponent) : t;
    this.setupComponentType(material_button__material_button$46template.ViewMaterialButtonComponent0._renderType);
  }).prototype = material_button__material_button$46template.ViewMaterialButtonComponent0.prototype;
  dart.addTypeTests(material_button__material_button$46template.ViewMaterialButtonComponent0);
  dart.setMethodSignature(material_button__material_button$46template.ViewMaterialButtonComponent0, () => ({
    __proto__: dart.getMethods(material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_button.MaterialButtonComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_button__material_button$46template.ViewMaterialButtonComponent0, () => ({
    __proto__: dart.getFields(material_button__material_button$46template.ViewMaterialButtonComponent0.__proto__),
    [_compView_2]: dart.fieldType(material_ripple__material_ripple$46template.ViewMaterialRippleComponent0),
    [_MaterialRippleComponent_2_5]: dart.fieldType(material_ripple__material_ripple.MaterialRippleComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_button__material_button$46template.ViewMaterialButtonComponent0, {
    /*material_button__material_button$46template.ViewMaterialButtonComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_button__material_button$46template.viewFactory_MaterialButtonComponent0 = function(parentView, parentIndex) {
    return new material_button__material_button$46template.ViewMaterialButtonComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template._MaterialButtonComponentNgFactory*/get _MaterialButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialButtonComponent()).new("material-button", dart.fn(material_button__material_button$46template.viewFactory_MaterialButtonComponentHost0, AppViewAndintToAppViewOfMaterialButtonComponent())));
    }
  });
  dart.copyProperties(material_button__material_button$46template, {
    get MaterialButtonComponentNgFactory() {
      return material_button__material_button$46template._MaterialButtonComponentNgFactory;
    }
  });
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template.styles$MaterialButtonComponentHost*/get styles$MaterialButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  let const$0;
  let const$1;
  material_button__material_button$46template._ViewMaterialButtonComponentHost0 = class _ViewMaterialButtonComponentHost0 extends src__core__linker__app_view.AppView$(material_button__material_button.MaterialButtonComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(this.rootEl, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0].ref, null);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialButtonComponent()).new(0, this, this.rootEl, this[_MaterialButtonComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 === nodeIndex) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 === nodeIndex) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
    }
  };
  (material_button__material_button$46template._ViewMaterialButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_button__material_button$46template._ViewMaterialButtonComponentHost0.prototype;
  dart.addTypeTests(material_button__material_button$46template._ViewMaterialButtonComponentHost0);
  dart.setMethodSignature(material_button__material_button$46template._ViewMaterialButtonComponentHost0, () => ({
    __proto__: dart.getMethods(material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_button__material_button.MaterialButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_button__material_button$46template._ViewMaterialButtonComponentHost0, () => ({
    __proto__: dart.getFields(material_button__material_button$46template._ViewMaterialButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent)
  }));
  material_button__material_button$46template.viewFactory_MaterialButtonComponentHost0 = function(parentView, parentIndex) {
    return new material_button__material_button$46template._ViewMaterialButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_button__material_button$46template, {
    /*material_button__material_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_button__material_button$46template.initReflector = function() {
    if (dart.test(material_button__material_button$46template._visited)) {
      return;
    }
    material_button__material_button$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_button__material_button.MaterialButtonComponent), material_button__material_button$46template.MaterialButtonComponentNgFactory);
    material_button__material_button_base$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_ripple__material_ripple$46template.initReflector();
    theme__dark_theme$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_button/material_button.template.ddc", {
    "package:angular_components/material_button/material_button.template.dart": material_button__material_button$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_button.template.dart"],"names":[],"mappings":"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","file":"material_button.template.ddc.js"}');
  // Exports:
  return {
    material_button__material_button$46template: material_button__material_button$46template
  };
});

//# sourceMappingURL=material_button.template.ddc.js.map
