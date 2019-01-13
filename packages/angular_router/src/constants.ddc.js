define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/src/core/change_detection/change_detection', 'packages/collection/src/comparators'], function(dart_sdk, router_outlet_directive, change_detection, comparators) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__url = router_outlet_directive.src__url;
  const src__router__navigation_params = router_outlet_directive.src__router__navigation_params;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__router__router_state = router_outlet_directive.src__router__router_state;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__location__location_strategy = router_outlet_directive.src__location__location_strategy;
  const src__location__path_location_strategy = router_outlet_directive.src__location__path_location_strategy;
  const src__location__platform_location = router_outlet_directive.src__location__platform_location;
  const src__location__browser_platform_location = router_outlet_directive.src__location__browser_platform_location;
  const src__router__router_impl = router_outlet_directive.src__router__router_impl;
  const src__location__hash_location_strategy = router_outlet_directive.src__location__hash_location_strategy;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__providers = change_detection.src__di__providers;
  const src__equality = comparators.src__equality;
  const _root = Object.create(null);
  const src__directives__router_link_directive = Object.create(_root);
  const src__directives__router_link_active_directive = Object.create(_root);
  const src__constants = Object.create(_root);
  const $onKeyPress = dartx.onKeyPress;
  const $isNotEmpty = dartx.isNotEmpty;
  const $classes = dartx.classes;
  let StreamSubscriptionOfKeyboardEvent = () => (StreamSubscriptionOfKeyboardEvent = dart.constFn(async.StreamSubscription$(html.KeyboardEvent)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfRouterLink = () => (ListOfRouterLink = dart.constFn(core.List$(src__directives__router_link_directive.RouterLink)))();
  const _router = Symbol('_router');
  const _location = Symbol('_location');
  const _target = Symbol('_target');
  const _keyPressSubscription = Symbol('_keyPressSubscription');
  const _routerLink = Symbol('_routerLink');
  const _cachedVisibleHref = Symbol('_cachedVisibleHref');
  const _cachedUrl = Symbol('_cachedUrl');
  const _onKeyPress = Symbol('_onKeyPress');
  const _trigger = Symbol('_trigger');
  src__directives__router_link_directive.RouterLink = class RouterLink extends core.Object {
    set routerLink(routerLink) {
      this[_routerLink] = routerLink;
      this[_cachedVisibleHref] = null;
      this[_cachedUrl] = null;
    }
    get url() {
      if (this[_cachedUrl] == null) {
        let parsedUrl = src__url.Url.parse(this[_routerLink]);
        this[_cachedUrl] = new src__url.Url.new(this[_location].normalizePath(parsedUrl.path), {fragment: parsedUrl.fragment, queryParameters: parsedUrl.queryParameters});
      }
      return this[_cachedUrl];
    }
    get visibleHref() {
      let t = this[_cachedVisibleHref];
      return t == null ? this[_cachedVisibleHref] = this[_location].prepareExternalUrl(this[_routerLink]) : t;
    }
    ngOnDestroy() {
      let t = this[_keyPressSubscription];
      t == null ? null : t.cancel();
    }
    onClick(event) {
      if (dart.test(event.ctrlKey) || dart.test(event.metaKey)) return;
      this[_trigger](event);
    }
    [_onKeyPress](event) {
      if (event.keyCode !== html.KeyCode.ENTER || dart.test(event.ctrlKey) || dart.test(event.metaKey)) {
        return;
      }
      this[_trigger](event);
    }
    [_trigger](event) {
      if (this[_target] == null || this[_target] === "_self") {
        event.preventDefault();
        this[_router].navigate(this.url.path, new src__router__navigation_params.NavigationParams.new({queryParameters: this.url.queryParameters, fragment: this.url.fragment}));
      }
    }
  };
  (src__directives__router_link_directive.RouterLink.new = function(router, location, target, element) {
    this[_keyPressSubscription] = null;
    this[_routerLink] = null;
    this[_cachedVisibleHref] = null;
    this[_cachedUrl] = null;
    this[_router] = router;
    this[_location] = location;
    this[_target] = target;
    if (!html.AnchorElement.is(element)) {
      this[_keyPressSubscription] = element[$onKeyPress].listen(dart.bind(this, _onKeyPress));
    }
  }).prototype = src__directives__router_link_directive.RouterLink.prototype;
  dart.addTypeTests(src__directives__router_link_directive.RouterLink);
  src__directives__router_link_directive.RouterLink[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__router_link_directive.RouterLink, () => ({
    __proto__: dart.getMethods(src__directives__router_link_directive.RouterLink.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    onClick: dart.fnType(dart.void, [html.MouseEvent]),
    [_onKeyPress]: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_trigger]: dart.fnType(dart.void, [html.Event])
  }));
  dart.setGetterSignature(src__directives__router_link_directive.RouterLink, () => ({
    __proto__: dart.getGetters(src__directives__router_link_directive.RouterLink.__proto__),
    url: src__url.Url,
    visibleHref: core.String
  }));
  dart.setSetterSignature(src__directives__router_link_directive.RouterLink, () => ({
    __proto__: dart.getSetters(src__directives__router_link_directive.RouterLink.__proto__),
    routerLink: core.String
  }));
  dart.setFieldSignature(src__directives__router_link_directive.RouterLink, () => ({
    __proto__: dart.getFields(src__directives__router_link_directive.RouterLink.__proto__),
    [_router]: dart.finalFieldType(src__router__router.Router),
    [_location]: dart.finalFieldType(src__location__location.Location),
    [_target]: dart.finalFieldType(core.String),
    [_keyPressSubscription]: dart.fieldType(StreamSubscriptionOfKeyboardEvent()),
    [_routerLink]: dart.fieldType(core.String),
    [_cachedVisibleHref]: dart.fieldType(core.String),
    [_cachedUrl]: dart.fieldType(src__url.Url)
  }));
  const _element = Symbol('_element');
  const _router$ = Symbol('_router');
  const _routeChanged = Symbol('_routeChanged');
  const _classes = Symbol('_classes');
  const _update = Symbol('_update');
  let const$;
  src__directives__router_link_active_directive.RouterLinkActive = class RouterLinkActive extends core.Object {
    get links() {
      return this[links];
    }
    set links(value) {
      this[links] = value;
    }
    ngOnDestroy() {
      let t = this[_routeChanged];
      return t == null ? null : t.cancel();
    }
    ngAfterViewInit() {
      this[_routeChanged] = this[_router$].stream.listen(dart.bind(this, _update));
      this[_update](this[_router$].current);
    }
    set routerLinkActive(classes) {
      if (typeof classes == 'string') {
        this[_classes] = JSArrayOfString().of([classes]);
      } else if (ListOfString().is(classes)) {
        this[_classes] = classes;
      } else if (dart.test(src__runtime__optimizations.isDevMode)) {
        dart.throw(new core.ArgumentError.new("Expected a string or list of strings. Got " + dart.str(classes) + "."));
      }
    }
    [_update](routerState) {
      let isActive = false;
      if (routerState != null) {
        for (let link of this.links) {
          let url = link.url;
          if (url.path != routerState.path) continue;
          if (dart.test(url.queryParameters[$isNotEmpty]) && !dart.test((const$ || (const$ = dart.const(new src__equality.MapEquality.new()))).equals(url.queryParameters, routerState.queryParameters))) {
            continue;
          }
          if (url.fragment[$isNotEmpty] && url.fragment != routerState.fragment) {
            continue;
          }
          isActive = true;
          break;
        }
      }
      this[_element][$classes].toggleAll(this[_classes], isActive);
    }
  };
  (src__directives__router_link_active_directive.RouterLinkActive.new = function(element, router) {
    this[_routeChanged] = null;
    this[_classes] = null;
    this[links] = null;
    this[_element] = element;
    this[_router$] = router;
  }).prototype = src__directives__router_link_active_directive.RouterLinkActive.prototype;
  dart.addTypeTests(src__directives__router_link_active_directive.RouterLinkActive);
  const links = Symbol("RouterLinkActive.links");
  src__directives__router_link_active_directive.RouterLinkActive[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getMethods(src__directives__router_link_active_directive.RouterLinkActive.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_update]: dart.fnType(dart.void, [src__router__router_state.RouterState])
  }));
  dart.setSetterSignature(src__directives__router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getSetters(src__directives__router_link_active_directive.RouterLinkActive.__proto__),
    routerLinkActive: core.Object
  }));
  dart.setFieldSignature(src__directives__router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getFields(src__directives__router_link_active_directive.RouterLinkActive.__proto__),
    [_element]: dart.finalFieldType(html.Element),
    [_router$]: dart.finalFieldType(src__router__router.Router),
    [_routeChanged]: dart.fieldType(async.StreamSubscription),
    [_classes]: dart.fieldType(ListOfString()),
    links: dart.fieldType(ListOfRouterLink())
  }));
  dart.defineLazy(src__constants, {
    /*src__constants.routerDirectives*/get routerDirectives() {
      return dart.constList([dart.wrapType(src__directives__router_outlet_directive.RouterOutlet), dart.wrapType(src__directives__router_link_directive.RouterLink), dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive)], core.Type);
    },
    /*src__constants.routerProviders*/get routerProviders() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__location_strategy.LocationStrategy), {useClass: dart.wrapType(src__location__path_location_strategy.PathLocationStrategy)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__platform_location.PlatformLocation), {useClass: dart.wrapType(src__location__browser_platform_location.BrowserPlatformLocation)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__location.Location))), dart.const(src__di__providers.Provider.new(dart.wrapType(src__router__router.Router), {useClass: dart.wrapType(src__router__router_impl.RouterImpl)}))], src__di__providers.Provider);
    },
    /*src__constants.routerProvidersHash*/get routerProvidersHash() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__location_strategy.LocationStrategy), {useClass: dart.wrapType(src__location__hash_location_strategy.HashLocationStrategy)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__platform_location.PlatformLocation), {useClass: dart.wrapType(src__location__browser_platform_location.BrowserPlatformLocation)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__location.Location))), dart.const(src__di__providers.Provider.new(dart.wrapType(src__router__router.Router), {useClass: dart.wrapType(src__router__router_impl.RouterImpl)}))], src__di__providers.Provider);
    }
  });
  dart.trackLibraries("packages/angular_router/src/constants.ddc", {
    "package:angular_router/src/directives/router_link_directive.dart": src__directives__router_link_directive,
    "package:angular_router/src/directives/router_link_active_directive.dart": src__directives__router_link_active_directive,
    "package:angular_router/src/constants.dart": src__constants
  }, '{"version":3,"sourceRoot":"","sources":["directives/router_link_directive.dart","directives/router_link_active_directive.dart","constants.dart"],"names":[],"mappings":"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","file":"constants.ddc.js"}');
  // Exports:
  return {
    src__directives__router_link_directive: src__directives__router_link_directive,
    src__directives__router_link_active_directive: src__directives__router_link_active_directive,
    src__constants: src__constants
  };
});

//# sourceMappingURL=constants.ddc.js.map
