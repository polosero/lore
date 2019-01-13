define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/Internal_lore/src/model/document', 'packages/Internal_lore/app_component', 'packages/http/browser_client', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template'], function(dart_sdk, view_type, change_detection, modules, router_outlet_directive, document, app_component, browser_client, angular, angular_router) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__routes = document.src__routes;
  const src__network__gateway_service = document.src__network__gateway_service;
  const src__network__network_service = document.src__network__network_service;
  const src__model__model = document.src__model__model;
  const src__model__model$46template = document.src__model__model$46template;
  const src__network__gateway_service$46template = document.src__network__gateway_service$46template;
  const src__network__network_service$46template = document.src__network__network_service$46template;
  const src__routes$46template = document.src__routes$46template;
  const app_component$ = app_component.app_component;
  const browser_client$ = browser_client.browser_client;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidToRouterOutlet = () => (VoidToRouterOutlet = dart.constFn(dart.fnType(src__directives__router_outlet_directive.RouterOutlet, [])))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let VoidToGateway = () => (VoidToGateway = dart.constFn(dart.fnType(src__network__gateway_service.Gateway, [])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _RouterOutlet_0_8 = Symbol('_RouterOutlet_0_8');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createAndAppend(doc, "router-outlet", parentRenderNode);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _el_0);
      this[_RouterOutlet_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__directives__router_outlet_directive.RouterOutlet, dart.wrapType(src__directives__router_outlet_directive.RouterOutlet), dart.fn(() => new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_0], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null))), VoidToRouterOutlet())) : new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_0], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(src__routes.Routes.all == null)) {
          this[_RouterOutlet_0_8].routes = src__routes.Routes.all;
        }
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_RouterOutlet_0_8].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_RouterOutlet_0_8].ngOnDestroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_RouterOutlet_0_8] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:Internal_lore/lib/app_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_0_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  const __Gateway_0_6 = Symbol('__Gateway_0_6');
  const __NetworkService_0_7 = Symbol('__NetworkService_0_7');
  const __Model_0_8 = Symbol('__Model_0_8');
  let const$0;
  let const$1;
  const _Gateway_0_6 = Symbol('_Gateway_0_6');
  const _NetworkService_0_7 = Symbol('_NetworkService_0_7');
  const _Model_0_8 = Symbol('_Model_0_8');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_Gateway_0_6]() {
      if (this[__Gateway_0_6] == null) {
        this[__Gateway_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__network__gateway_service.Gateway, dart.wrapType(src__network__gateway_service.Gateway), dart.fn(() => new src__network__gateway_service.Gateway.new(browser_client$.BrowserClient._check(this.injectorGet(dart.wrapType(browser_client$.BrowserClient), this.viewData.parentIndex)), core.String._check(this.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfString()).new("Authorization"))), this.viewData.parentIndex))), VoidToGateway())) : new src__network__gateway_service.Gateway.new(browser_client$.BrowserClient._check(this.injectorGet(dart.wrapType(browser_client$.BrowserClient), this.viewData.parentIndex)), core.String._check(this.injectorGet(const$1 || (const$1 = dart.const(new (OpaqueTokenOfString()).new("Authorization"))), this.viewData.parentIndex)));
      }
      return this[__Gateway_0_6];
    }
    get [_NetworkService_0_7]() {
      if (this[__NetworkService_0_7] == null) {
        this[__NetworkService_0_7] = new src__network__network_service.NetworkService.new(src__network__gateway_service.Gateway._check(this[_Gateway_0_6]));
      }
      return this[__NetworkService_0_7];
    }
    get [_Model_0_8]() {
      if (this[__Model_0_8] == null) {
        this[__Model_0_8] = new src__model__model.Model.new(this[_NetworkService_0_7]);
      }
      return this[__Model_0_8];
    }
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__network__gateway_service.Gateway) && 0 === nodeIndex) {
        return this[_Gateway_0_6];
      }
      if (token === dart.wrapType(src__network__network_service.NetworkService) && 0 === nodeIndex) {
        return this[_NetworkService_0_7];
      }
      if (token === dart.wrapType(src__model__model.Model) && 0 === nodeIndex) {
        return this[_Model_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    this[__Gateway_0_6] = null;
    this[__NetworkService_0_7] = null;
    this[__Model_0_8] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponentHost0.__proto__),
    [_Gateway_0_6]: dart.dynamic,
    [_NetworkService_0_7]: src__network__network_service.NetworkService,
    [_Model_0_8]: src__model__model.Model
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent),
    [__Gateway_0_6]: dart.fieldType(dart.dynamic),
    [__NetworkService_0_7]: dart.fieldType(src__network__network_service.NetworkService),
    [__Model_0_8]: dart.fieldType(src__model__model.Model)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__model__model$46template.initReflector();
    src__network__gateway_service$46template.initReflector();
    src__network__network_service$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.trackLibraries("packages/Internal_lore/app_component.template.ddc", {
    "package:Internal_lore/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
