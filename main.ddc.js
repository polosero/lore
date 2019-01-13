define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/http/browser_client', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/Internal_lore/app_component.template', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/Internal_lore/app_component', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, change_detection, browser_client, router_outlet_directive, app_component, angular, angular_router, app_component$, modules) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const browser_client$ = browser_client.browser_client;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__router__router_impl = router_outlet_directive.src__router__router_impl;
  const src__location__location_strategy = router_outlet_directive.src__location__location_strategy;
  const src__location__browser_platform_location = router_outlet_directive.src__location__browser_platform_location;
  const src__location__platform_location = router_outlet_directive.src__location__platform_location;
  const src__location__hash_location_strategy = router_outlet_directive.src__location__hash_location_strategy;
  const src__router__router = router_outlet_directive.src__router__router;
  const app_component$46template = app_component.app_component$46template;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const app_component$0 = app_component$.app_component;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const _root = Object.create(null);
  const main$46template = Object.create(_root);
  const main = Object.create(_root);
  const $split = dartx.split;
  const $_get = dartx._get;
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  main$46template.injector$Injector = function(parent) {
    if (parent === void 0) parent = null;
    return new main$46template._Injector$injector.__(parent);
  };
  const _field0 = Symbol('_field0');
  const _field1 = Symbol('_field1');
  const _field2 = Symbol('_field2');
  const _field3 = Symbol('_field3');
  const _field4 = Symbol('_field4');
  const _field5 = Symbol('_field5');
  const _getString$0 = Symbol('_getString$0');
  const _getBrowserClient$1 = Symbol('_getBrowserClient$1');
  const _getRouterImpl$2 = Symbol('_getRouterImpl$2');
  const _getLocation$3 = Symbol('_getLocation$3');
  const _getBrowserPlatformLocation$4 = Symbol('_getBrowserPlatformLocation$4');
  let const$;
  const _getHashLocationStrategy$5 = Symbol('_getHashLocationStrategy$5');
  const _getInjector$6 = Symbol('_getInjector$6');
  let const$0;
  main$46template._Injector$injector = class _Injector$injector extends src__di__injector__hierarchical.HierarchicalInjector {
    [_getString$0]() {
      let t = this[_field0];
      return t == null ? this[_field0] = main.getToken() : t;
    }
    [_getBrowserClient$1]() {
      let t = this[_field1];
      return t == null ? this[_field1] = new browser_client$.BrowserClient.new() : t;
    }
    [_getRouterImpl$2]() {
      let t = this[_field2];
      return t == null ? this[_field2] = new src__router__router_impl.RouterImpl.new(src__location__location.Location._check(this.get(dart.wrapType(src__location__location.Location))), src__router_hook.RouterHook._check(this.provideUntyped(dart.wrapType(src__router_hook.RouterHook), null))) : t;
    }
    [_getLocation$3]() {
      let t = this[_field3];
      return t == null ? this[_field3] = new src__location__location.Location.new(src__location__location_strategy.LocationStrategy._check(this.get(dart.wrapType(src__location__location_strategy.LocationStrategy)))) : t;
    }
    [_getBrowserPlatformLocation$4]() {
      let t = this[_field4];
      return t == null ? this[_field4] = new src__location__browser_platform_location.BrowserPlatformLocation.new() : t;
    }
    [_getHashLocationStrategy$5]() {
      let t = this[_field5];
      return t == null ? this[_field5] = new src__location__hash_location_strategy.HashLocationStrategy.new(src__location__platform_location.PlatformLocation._check(this.get(dart.wrapType(src__location__platform_location.PlatformLocation))), core.String._check(this.provideUntyped(const$ || (const$ = dart.const(new (OpaqueTokenOfString()).new("appBaseHref"))), null))) : t;
    }
    [_getInjector$6]() {
      return this;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (token === (const$0 || (const$0 = dart.const(new (OpaqueTokenOfString()).new("Authorization"))))) {
        return this[_getString$0]();
      }
      if (token === dart.wrapType(browser_client$.BrowserClient)) {
        return this[_getBrowserClient$1]();
      }
      if (token === dart.wrapType(src__router__router.Router)) {
        return this[_getRouterImpl$2]();
      }
      if (token === dart.wrapType(src__location__location.Location)) {
        return this[_getLocation$3]();
      }
      if (token === dart.wrapType(src__location__platform_location.PlatformLocation)) {
        return this[_getBrowserPlatformLocation$4]();
      }
      if (token === dart.wrapType(src__location__location_strategy.LocationStrategy)) {
        return this[_getHashLocationStrategy$5]();
      }
      if (token === dart.wrapType(src__di__injector__injector.Injector)) {
        return this[_getInjector$6]();
      }
      return orElse;
    }
  };
  (main$46template._Injector$injector.__ = function(parent) {
    if (parent === void 0) parent = null;
    this[_field0] = null;
    this[_field1] = null;
    this[_field2] = null;
    this[_field3] = null;
    this[_field4] = null;
    this[_field5] = null;
    main$46template._Injector$injector.__proto__.new.call(this, src__di__injector__hierarchical.HierarchicalInjector._check(parent));
  }).prototype = main$46template._Injector$injector.prototype;
  dart.addTypeTests(main$46template._Injector$injector);
  dart.setMethodSignature(main$46template._Injector$injector, () => ({
    __proto__: dart.getMethods(main$46template._Injector$injector.__proto__),
    [_getString$0]: dart.fnType(core.String, []),
    [_getBrowserClient$1]: dart.fnType(browser_client$.BrowserClient, []),
    [_getRouterImpl$2]: dart.fnType(src__router__router_impl.RouterImpl, []),
    [_getLocation$3]: dart.fnType(src__location__location.Location, []),
    [_getBrowserPlatformLocation$4]: dart.fnType(src__location__browser_platform_location.BrowserPlatformLocation, []),
    [_getHashLocationStrategy$5]: dart.fnType(src__location__hash_location_strategy.HashLocationStrategy, []),
    [_getInjector$6]: dart.fnType(src__di__injector__injector.Injector, []),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(main$46template._Injector$injector, () => ({
    __proto__: dart.getFields(main$46template._Injector$injector.__proto__),
    [_field0]: dart.fieldType(core.String),
    [_field1]: dart.fieldType(browser_client$.BrowserClient),
    [_field2]: dart.fieldType(src__router__router_impl.RouterImpl),
    [_field3]: dart.fieldType(src__location__location.Location),
    [_field4]: dart.fieldType(src__location__browser_platform_location.BrowserPlatformLocation),
    [_field5]: dart.fieldType(src__location__hash_location_strategy.HashLocationStrategy)
  }));
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    app_component$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.defineLazy(main, {
    /*main.AuthToken*/get AuthToken() {
      return dart.const(new (OpaqueTokenOfString()).new("Authorization"));
    },
    /*main.token*/get token() {
      return main.getToken();
    },
    /*main.injector*/get injector() {
      return dart.fn(main$46template.injector$Injector, __ToInjector());
    }
  });
  main.main = function() {
    src__bootstrap__run.runApp(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory, {createInjector: main.injector});
  };
  main.getToken = function() {
    core.print(html.document.cookie);
    for (let cookie of html.document.cookie[$split](";")) {
      let KVPair = cookie[$split]("=");
      if (KVPair[$_get](0) === "auth-token") {
        return KVPair[$_get](1);
      }
    }
    return null;
  };
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.template.dart","main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+CAwBgC,MAAmB;2BAAN;UAAY,KAAI,qCAAoB,CAAC,MAAM;EAAC;;;;;;;;;;;;;;;;;;cAiB9D,aAAO;yCAAK,AAAI,aAAQ;IAAE;;cACR,aAAO;yCAAK,IAAI,iCAAiB;IAAE;;cACzC,aAAO;yCAAK,IAAI,uCAAc,yCAAC,QAAQ,CAAK,+CAAQ,uCAAG,mBAAc,CAAK,0CAAU,EAAE;IAAM;;cAChG,aAAO;yCAAK,IAAI,oCAAY,0DAAC,QAAQ,CAAM,gEAAgB;IAAE;;cAC/B,aAAO;yCAAK,IAAI,oEAA2B;IAAE;;cACnD,aAAO;yCAAK,IAAI,8DAAwB,0DAAC,QAAQ,CAAM,gEAAgB,uBAAG,mBAAc,CAAC,mCAAM,2BAAwB,CAAC,kBAAgB;IAAM;;YACtK;IAAI;2BAEP,KAAY,EAAG,MAAmC;6BAA5B,SAAa,2CAAe;AAC9E,UAAI,AAAU,KAAK,MAAE,qCAAM,2BAAwB,CAAC,qBAAmB;AACrE,cAAO,mBAAY;;AAErB,UAAI,AAAU,KAAK,KAAM,4CAAa,EAAG;AACvC,cAAO,0BAAmB;;AAE5B,UAAI,AAAU,KAAK,KAAO,yCAAM,EAAG;AACjC,cAAO,uBAAgB;;AAEzB,UAAI,AAAU,KAAK,KAAM,+CAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,UAAI,AAAU,KAAK,KAAO,gEAAgB,EAAG;AAC3C,cAAO,oCAA6B;;AAEtC,UAAI,AAAU,KAAK,KAAO,gEAAgB,EAAG;AAC3C,cAAO,iCAA0B;;AAEnC,UAAI,AAAU,KAAK,KAAM,mDAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,YAAO,OAAM;IACf;;oDA7CsB,MAAmB;2BAAN;IAE5B,aAAO;IAEI,aAAO;IAEV,aAAO;IAET,aAAO;IAEQ,aAAO;IAEV,aAAO;AAZc,4HAAM,MAAM;EAAC;;;;;;;;;;;;;;;;;;;;;;;MAgDzD,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;EACrB;;MC9E0B,cAAS;4BAAG,2BAAmB,CAAC;;MAE7C,UAAK;YAAG,cAAQ;;MAOP,aAAQ;YAAQ,2DAAiB;;;;AAErD,8BAAM,+BAAI,8CAAqB,mBAAkB,aAAQ;EAC3D;;AAIE,cAAK,CAAC,aAAQ,OAAO;AACrB,aAAW,SAAU,cAAQ,OAAO,QAAM,CAAC,MAAK;AAC9C,UAAa,SAAQ,MAAM,QAAM,CAAC;AAClC,UAAG,MAAM,QAAC,OAAI,cAAa;AACzB,cAAO,OAAM,QAAC;;;AAGlB,UAAO;EACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
