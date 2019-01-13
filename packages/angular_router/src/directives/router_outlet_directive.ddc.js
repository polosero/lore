define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/collection/src/comparators'], function(dart_sdk, change_detection, modules, comparators) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = modules.src__core__linker__view_container_ref;
  const src__equality = comparators.src__equality;
  const _root = Object.create(null);
  const src__location__base_href = Object.create(_root);
  const src__location__platform_location = Object.create(_root);
  const src__location__browser_platform_location = Object.create(_root);
  const src__location__location_strategy = Object.create(_root);
  const src__location__location = Object.create(_root);
  const src__location__hash_location_strategy = Object.create(_root);
  const src__location__path_location_strategy = Object.create(_root);
  const src__location = Object.create(_root);
  const src__url = Object.create(_root);
  const src__route_path = Object.create(_root);
  const src__route_definition = Object.create(_root);
  const src__router__router_state = Object.create(_root);
  const src__lifecycle = Object.create(_root);
  const src__router__navigation_params = Object.create(_root);
  const src__router_hook = Object.create(_root);
  const src__router__router_outlet_token = Object.create(_root);
  const src__directives__router_outlet_directive = Object.create(_root);
  const src__router__router = Object.create(_root);
  const src__router__router_impl = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $_get = dartx._get;
  const $location = dartx.location;
  const $addEventListener = dartx.addEventListener;
  const $pushState = dartx.pushState;
  const $replaceState = dartx.replaceState;
  const $startsWith = dartx.startsWith;
  const $endsWith = dartx.endsWith;
  const $substring = dartx.substring;
  const $isNotEmpty = dartx.isNotEmpty;
  const $map = dartx.map;
  const $keys = dartx.keys;
  const $last = dartx.last;
  const $length = dartx.length;
  const $take = dartx.take;
  const $replaceFirst = dartx.replaceFirst;
  const $replaceAll = dartx.replaceAll;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $values = dartx.values;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $fold = dartx.fold;
  const $insert = dartx.insert;
  const $_set = dartx._set;
  const $add = dartx.add;
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let FutureOfComponentFactory = () => (FutureOfComponentFactory = dart.constFn(async.Future$(src__core__linker__component_factory.ComponentFactory)))();
  let VoidToFutureOfComponentFactory = () => (VoidToFutureOfComponentFactory = dart.constFn(dart.fnType(FutureOfComponentFactory(), [])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(src__route_definition.RouteDefinition)))();
  let JSArrayOfComponentRef = () => (JSArrayOfComponentRef = dart.constFn(_interceptors.JSArray$(src__core__linker__component_factory.ComponentRef)))();
  let LinkedMapOfComponentRef$ComponentFactory = () => (LinkedMapOfComponentRef$ComponentFactory = dart.constFn(_js_helper.LinkedMap$(src__core__linker__component_factory.ComponentRef, src__core__linker__component_factory.ComponentFactory)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let ListOfComponentRef = () => (ListOfComponentRef = dart.constFn(core.List$(src__core__linker__component_factory.ComponentRef)))();
  let MapOfComponentRef$ComponentFactory = () => (MapOfComponentRef$ComponentFactory = dart.constFn(core.Map$(src__core__linker__component_factory.ComponentRef, src__core__linker__component_factory.ComponentFactory)))();
  let LinkedMapOfComponentFactory$ComponentRef = () => (LinkedMapOfComponentFactory$ComponentRef = dart.constFn(_js_helper.LinkedMap$(src__core__linker__component_factory.ComponentFactory, src__core__linker__component_factory.ComponentRef)))();
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let VoidToComponentRef = () => (VoidToComponentRef = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentRef, [])))();
  let MapOfComponentFactory$ComponentRef = () => (MapOfComponentFactory$ComponentRef = dart.constFn(core.Map$(src__core__linker__component_factory.ComponentFactory, src__core__linker__component_factory.ComponentRef)))();
  let StreamControllerOfRouterState = () => (StreamControllerOfRouterState = dart.constFn(async.StreamController$(src__router__router_state.RouterState)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let NavigationResultToNull = () => (NavigationResultToNull = dart.constFn(dart.fnType(core.Null, [src__router__router.NavigationResult])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let CompleterOfNavigationResult = () => (CompleterOfNavigationResult = dart.constFn(async.Completer$(src__router__router.NavigationResult)))();
  let voidToFutureOfvoid = () => (voidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [dart.void])))();
  let StringAndRouteDefinitionToString = () => (StringAndRouteDefinitionToString = dart.constFn(dart.fnType(core.String, [core.String, src__route_definition.RouteDefinition])))();
  let FutureOfMutableRouterState = () => (FutureOfMutableRouterState = dart.constFn(async.Future$(src__router__router_state.MutableRouterState)))();
  let MutableRouterStateToFutureOfMutableRouterState = () => (MutableRouterStateToFutureOfMutableRouterState = dart.constFn(dart.fnType(FutureOfMutableRouterState(), [src__router__router_state.MutableRouterState])))();
  let IterableOfComponentRef = () => (IterableOfComponentRef = dart.constFn(core.Iterable$(src__core__linker__component_factory.ComponentRef)))();
  dart.defineLazy(src__location__base_href, {
    /*src__location__base_href._urlParsingNode*/get _urlParsingNode() {
      return null;
    },
    set _urlParsingNode(_) {},
    /*src__location__base_href._baseElement*/get _baseElement() {
      return null;
    },
    set _baseElement(_) {}
  });
  src__location__base_href.baseHrefFromDOM = function() {
    let href = src__location__base_href._getBaseElementHref();
    if (href == null) {
      return null;
    }
    return src__location__base_href._relativePath(href);
  };
  src__location__base_href._getBaseElementHref = function() {
    if (src__location__base_href._baseElement == null) {
      src__location__base_href._baseElement = html.document.querySelector("base");
      if (src__location__base_href._baseElement == null) {
        return null;
      }
    }
    return src__location__base_href._baseElement.getAttribute("href");
  };
  src__location__base_href._relativePath = function(url) {
    let t = src__location__base_href._urlParsingNode;
    t == null ? src__location__base_href._urlParsingNode = html.AnchorElement.new() : t;
    src__location__base_href._urlParsingNode.href = url;
    let pathname = src__location__base_href._urlParsingNode.pathname;
    return pathname[$isEmpty] || pathname[$_get](0) === "/" ? pathname : "/" + dart.str(pathname);
  };
  src__location__platform_location.PlatformLocation = class PlatformLocation extends core.Object {};
  (src__location__platform_location.PlatformLocation.new = function() {
  }).prototype = src__location__platform_location.PlatformLocation.prototype;
  dart.addTypeTests(src__location__platform_location.PlatformLocation);
  dart.defineLazy(src__location__platform_location, {
    /*src__location__platform_location.baseHRefFromDOM*/get baseHRefFromDOM() {
      return null;
    },
    set baseHRefFromDOM(_) {}
  });
  const _location = Symbol('_location');
  const _history = Symbol('_history');
  const _init = Symbol('_init');
  src__location__browser_platform_location.BrowserPlatformLocation = class BrowserPlatformLocation extends src__location__platform_location.PlatformLocation {
    [_init]() {
      this[_location] = html.window[$location];
      this[_history] = html.window.history;
    }
    get location() {
      return this[_location];
    }
    getBaseHrefFromDOM() {
      return src__location__platform_location.baseHRefFromDOM();
    }
    onPopState(fn) {
      html.window[$addEventListener]("popstate", fn, false);
    }
    onHashChange(fn) {
      html.window[$addEventListener]("hashchange", fn, false);
    }
    get pathname() {
      return this[_location].pathname;
    }
    get search() {
      return this[_location].search;
    }
    get hash() {
      return this[_location].hash;
    }
    set pathname(newPath) {
      this[_location].pathname = newPath;
    }
    pushState(state, title, url) {
      this[_history][$pushState](state, title, url);
    }
    replaceState(state, title, url) {
      this[_history][$replaceState](state, title, url);
    }
    forward() {
      this[_history].forward();
    }
    back() {
      this[_history].back();
    }
  };
  (src__location__browser_platform_location.BrowserPlatformLocation.new = function() {
    this[_location] = null;
    this[_history] = null;
    src__location__platform_location.baseHRefFromDOM = dart.fn(src__location__base_href.baseHrefFromDOM, VoidToString());
    this[_init]();
  }).prototype = src__location__browser_platform_location.BrowserPlatformLocation.prototype;
  dart.addTypeTests(src__location__browser_platform_location.BrowserPlatformLocation);
  dart.setMethodSignature(src__location__browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getMethods(src__location__browser_platform_location.BrowserPlatformLocation.__proto__),
    [_init]: dart.fnType(dart.void, []),
    getBaseHrefFromDOM: dart.fnType(core.String, []),
    onPopState: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    onHashChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__location__browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getGetters(src__location__browser_platform_location.BrowserPlatformLocation.__proto__),
    location: html.Location,
    pathname: core.String,
    search: core.String,
    hash: core.String
  }));
  dart.setSetterSignature(src__location__browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getSetters(src__location__browser_platform_location.BrowserPlatformLocation.__proto__),
    pathname: core.String
  }));
  dart.setFieldSignature(src__location__browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getFields(src__location__browser_platform_location.BrowserPlatformLocation.__proto__),
    [_location]: dart.fieldType(html.Location),
    [_history]: dart.fieldType(html.History)
  }));
  src__location__location_strategy.LocationStrategy = class LocationStrategy extends core.Object {};
  (src__location__location_strategy.LocationStrategy.new = function() {
  }).prototype = src__location__location_strategy.LocationStrategy.prototype;
  dart.addTypeTests(src__location__location_strategy.LocationStrategy);
  dart.defineLazy(src__location__location_strategy, {
    /*src__location__location_strategy.appBaseHref*/get appBaseHref() {
      return dart.const(new (OpaqueTokenOfString()).new("appBaseHref"));
    }
  });
  const _baseHref = Symbol('_baseHref');
  const _subject = Symbol('_subject');
  src__location__location.Location = class Location extends core.Object {
    get locationStrategy() {
      return this[locationStrategy$];
    }
    set locationStrategy(value) {
      super.locationStrategy = value;
    }
    static _sanitizeBaseHref(platformStrategy) {
      let browserBaseHref = platformStrategy.getBaseHref();
      return src__location__location.Location.stripTrailingSlash(src__location__location._stripIndexHtml(browserBaseHref));
    }
    path() {
      return this.normalize(this.locationStrategy.path());
    }
    hash() {
      return this.normalize(this.locationStrategy.hash());
    }
    normalize(url) {
      return src__location__location.Location.stripTrailingSlash(src__location__location._stripBaseHref(this[_baseHref], src__location__location._stripIndexHtml(url)));
    }
    normalizePath(path) {
      if (path == null) return null;
      if (!path[$startsWith]("/")) {
        path = "/" + dart.str(path);
      }
      if (path[$endsWith]("/")) {
        path = path[$substring](0, path.length - 1);
      }
      return path;
    }
    prepareExternalUrl(url) {
      if (url[$isNotEmpty] && !url[$startsWith]("/")) {
        url = "/" + dart.str(url);
      }
      return this.locationStrategy.prepareExternalUrl(url);
    }
    go(path, query) {
      if (query === void 0) query = "";
      this.locationStrategy.pushState(null, "", path, query);
    }
    replaceState(path, query) {
      if (query === void 0) query = "";
      this.locationStrategy.replaceState(null, "", path, query);
    }
    forward() {
      this.locationStrategy.forward();
    }
    back() {
      this.locationStrategy.back();
    }
    subscribe(onNext, onThrow, onReturn) {
      if (onThrow === void 0) onThrow = null;
      if (onReturn === void 0) onReturn = null;
      return this[_subject].stream.listen(onNext, {onError: onThrow, onDone: onReturn});
    }
    static normalizeQueryParams(params) {
      return params[$isEmpty] || params[$startsWith]("?") ? params : "?" + dart.str(params);
    }
    static joinWithSlash(start, end) {
      if (start[$isEmpty]) {
        return end;
      }
      if (end[$isEmpty]) {
        return start;
      }
      let slashes = 0;
      if (start[$endsWith]("/")) {
        slashes++;
      }
      if (end[$startsWith]("/")) {
        slashes++;
      }
      if (slashes === 2) {
        return dart.notNull(start) + end[$substring](1);
      }
      if (slashes === 1) {
        return dart.notNull(start) + dart.notNull(end);
      }
      return dart.str(start) + "/" + dart.str(end);
    }
    static stripTrailingSlash(url) {
      if (url[$endsWith]("/")) {
        url = url[$substring](0, url.length - 1);
      }
      return url;
    }
  };
  (src__location__location.Location.new = function(locationStrategy) {
    this[_subject] = async.StreamController.new();
    this[locationStrategy$] = locationStrategy;
    this[_baseHref] = src__location__location.Location._sanitizeBaseHref(locationStrategy);
    this.locationStrategy.onPopState(dart.fn(ev => {
      this[_subject].add(new (IdentityMapOfString$Object()).from(["url", this.path(), "pop", true, "type", ev.type]));
    }, EventToNull()));
  }).prototype = src__location__location.Location.prototype;
  dart.addTypeTests(src__location__location.Location);
  const locationStrategy$ = Symbol("Location.locationStrategy");
  dart.setMethodSignature(src__location__location.Location, () => ({
    __proto__: dart.getMethods(src__location__location.Location.__proto__),
    path: dart.fnType(core.String, []),
    hash: dart.fnType(core.String, []),
    normalize: dart.fnType(core.String, [core.String]),
    normalizePath: dart.fnType(core.String, [core.String]),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    go: dart.fnType(dart.void, [core.String], [core.String]),
    replaceState: dart.fnType(dart.void, [core.String], [core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, []),
    subscribe: dart.fnType(core.Object, [dart.fnType(dart.void, [dart.dynamic])], [dart.fnType(dart.void, [dart.dynamic]), dart.fnType(dart.void, [])])
  }));
  dart.setFieldSignature(src__location__location.Location, () => ({
    __proto__: dart.getFields(src__location__location.Location.__proto__),
    locationStrategy: dart.finalFieldType(src__location__location_strategy.LocationStrategy),
    [_subject]: dart.finalFieldType(async.StreamController),
    [_baseHref]: dart.finalFieldType(core.String)
  }));
  src__location__location._stripBaseHref = function(baseHref, url) {
    if (baseHref[$isNotEmpty] && url[$startsWith](baseHref)) {
      return url[$substring](baseHref.length);
    }
    return url;
  };
  src__location__location._stripIndexHtml = function(url) {
    if (url[$endsWith]("/index.html")) {
      return url[$substring](0, url.length - 11);
    }
    return url;
  };
  const _platformLocation = Symbol('_platformLocation');
  const _baseHref$ = Symbol('_baseHref');
  src__location__hash_location_strategy.HashLocationStrategy = class HashLocationStrategy extends src__location__location_strategy.LocationStrategy {
    onPopState(fn) {
      this[_platformLocation].onPopState(fn);
    }
    getBaseHref() {
      return this[_baseHref$];
    }
    hash() {
      return this[_platformLocation].hash;
    }
    path() {
      let l = this[_platformLocation].hash;
      let path = l != null ? l : "";
      return path[$isEmpty] ? path : path[$substring](1);
    }
    prepareExternalUrl(internal) {
      let url = src__location__location.Location.joinWithSlash(this[_baseHref$], internal);
      return url[$isEmpty] ? dart.str(this[_platformLocation].pathname) + dart.str(this[_platformLocation].search) : "#" + dart.str(url);
    }
    pushState(state, title, path, queryParams) {
      let url = this.prepareExternalUrl(dart.notNull(path) + dart.notNull(src__location__location.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation].pushState(state, title, url);
    }
    replaceState(state, title, path, queryParams) {
      let url = this.prepareExternalUrl(dart.notNull(path) + dart.notNull(src__location__location.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation].replaceState(state, title, url);
    }
    forward() {
      this[_platformLocation].forward();
    }
    back() {
      this[_platformLocation].back();
    }
  };
  (src__location__hash_location_strategy.HashLocationStrategy.new = function(platformLocation, baseHref) {
    if (baseHref === void 0) baseHref = null;
    this[_platformLocation] = platformLocation;
    this[_baseHref$] = baseHref != null ? baseHref : "";
  }).prototype = src__location__hash_location_strategy.HashLocationStrategy.prototype;
  dart.addTypeTests(src__location__hash_location_strategy.HashLocationStrategy);
  dart.setMethodSignature(src__location__hash_location_strategy.HashLocationStrategy, () => ({
    __proto__: dart.getMethods(src__location__hash_location_strategy.HashLocationStrategy.__proto__),
    onPopState: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    getBaseHref: dart.fnType(core.String, []),
    hash: dart.fnType(core.String, []),
    path: dart.fnType(core.String, []),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__location__hash_location_strategy.HashLocationStrategy, () => ({
    __proto__: dart.getFields(src__location__hash_location_strategy.HashLocationStrategy.__proto__),
    [_platformLocation]: dart.finalFieldType(src__location__platform_location.PlatformLocation),
    [_baseHref$]: dart.finalFieldType(core.String)
  }));
  const _platformLocation$ = Symbol('_platformLocation');
  const _baseHref$0 = Symbol('_baseHref');
  src__location__path_location_strategy.PathLocationStrategy = class PathLocationStrategy extends src__location__location_strategy.LocationStrategy {
    onPopState(fn) {
      this[_platformLocation$].onPopState(fn);
    }
    getBaseHref() {
      return this[_baseHref$0];
    }
    prepareExternalUrl(internal) {
      return src__location__location.Location.joinWithSlash(this[_baseHref$0], internal);
    }
    hash() {
      return this[_platformLocation$].hash;
    }
    path() {
      return dart.notNull(this[_platformLocation$].pathname) + dart.notNull(src__location__location.Location.normalizeQueryParams(this[_platformLocation$].search));
    }
    pushState(state, title, url, queryParams) {
      let externalUrl = this.prepareExternalUrl(dart.notNull(url) + dart.notNull(src__location__location.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation$].pushState(state, title, externalUrl);
    }
    replaceState(state, title, url, queryParams) {
      let externalUrl = this.prepareExternalUrl(dart.notNull(url) + dart.notNull(src__location__location.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation$].replaceState(state, title, externalUrl);
    }
    forward() {
      this[_platformLocation$].forward();
    }
    back() {
      this[_platformLocation$].back();
    }
  };
  (src__location__path_location_strategy.PathLocationStrategy.new = function(platformLocation, href) {
    if (href === void 0) href = null;
    this[_baseHref$0] = null;
    this[_platformLocation$] = platformLocation;
    let t = href;
    t == null ? href = this[_platformLocation$].getBaseHrefFromDOM() : t;
    if (href == null) {
      dart.throw(new core.ArgumentError.new("No base href set. Please provide a value for the appBaseHref token or add a base element to the document."));
    }
    this[_baseHref$0] = href;
  }).prototype = src__location__path_location_strategy.PathLocationStrategy.prototype;
  dart.addTypeTests(src__location__path_location_strategy.PathLocationStrategy);
  dart.setMethodSignature(src__location__path_location_strategy.PathLocationStrategy, () => ({
    __proto__: dart.getMethods(src__location__path_location_strategy.PathLocationStrategy.__proto__),
    onPopState: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    getBaseHref: dart.fnType(core.String, []),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    hash: dart.fnType(core.String, []),
    path: dart.fnType(core.String, []),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__location__path_location_strategy.PathLocationStrategy, () => ({
    __proto__: dart.getFields(src__location__path_location_strategy.PathLocationStrategy.__proto__),
    [_platformLocation$]: dart.fieldType(src__location__platform_location.PlatformLocation),
    [_baseHref$0]: dart.fieldType(core.String)
  }));
  src__url.Url = class Url extends core.Object {
    static parse(url) {
      let uri = core.Uri.parse(url);
      return new src__url.Url.new(uri.path, {fragment: uri.fragment, queryParameters: uri.queryParameters});
    }
    static normalizeHash(hash) {
      if (hash[$startsWith]("#")) {
        return hash[$substring](1);
      }
      return hash;
    }
    static trimSlashes(path) {
      if (path == null) return null;
      if (path[$startsWith]("/")) path = path[$substring](1);
      if (path[$endsWith]("/")) path = path[$substring](0, path.length - 1);
      return path;
    }
    get fragment() {
      return this[fragment$];
    }
    set fragment(value) {
      super.fragment = value;
    }
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    get queryParameters() {
      return this[queryParameters$];
    }
    set queryParameters(value) {
      super.queryParameters = value;
    }
    toUrl() {
      let buffer = new core.StringBuffer.new();
      buffer.write(this.path);
      if ((this.queryParameters == null ? null : this.queryParameters[$isNotEmpty]) === true) {
        buffer.write("?");
        buffer.writeAll(this.queryParameters[$keys][$map](dart.dynamic, dart.fn(k => {
          let v = this.queryParameters[$_get](k);
          k = core.Uri.encodeComponent(k);
          return v != null ? dart.str(k) + "=" + dart.str(core.Uri.encodeComponent(v)) : k;
        }, StringToString())), "&");
      }
      if ((this.fragment == null ? null : this.fragment[$isNotEmpty]) === true) {
        buffer.write("#");
        buffer.write(this.fragment);
      }
      return buffer.toString();
    }
    toString() {
      return this.toUrl();
    }
  };
  (src__url.Url.new = function(path, opts) {
    let fragment = opts && 'fragment' in opts ? opts.fragment : "";
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    this[path$] = path != null ? path : "";
    this[fragment$] = fragment != null ? fragment : "";
    this[queryParameters$] = MapOfString$String().unmodifiable(queryParameters != null ? queryParameters : new _js_helper.LinkedMap.new());
  }).prototype = src__url.Url.prototype;
  dart.addTypeTests(src__url.Url);
  const fragment$ = Symbol("Url.fragment");
  const path$ = Symbol("Url.path");
  const queryParameters$ = Symbol("Url.queryParameters");
  dart.setMethodSignature(src__url.Url, () => ({
    __proto__: dart.getMethods(src__url.Url.__proto__),
    toUrl: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__url.Url, () => ({
    __proto__: dart.getFields(src__url.Url.__proto__),
    fragment: dart.finalFieldType(core.String),
    path: dart.finalFieldType(core.String),
    queryParameters: dart.finalFieldType(MapOfString$String())
  }));
  dart.defineExtensionMethods(src__url.Url, ['toString']);
  dart.defineLazy(src__url.Url, {
    /*src__url.Url.isHashStrategy*/get isHashStrategy() {
      return false;
    },
    set isHashStrategy(_) {}
  });
  src__route_path.RoutePath = class RoutePath extends core.Object {
    get path() {
      return this[path$0];
    }
    set path(value) {
      super.path = value;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get useAsDefault() {
      return this[useAsDefault$];
    }
    set useAsDefault(value) {
      super.useAsDefault = value;
    }
    get additionalData() {
      return this[additionalData$];
    }
    set additionalData(value) {
      super.additionalData = value;
    }
    toUrl(opts) {
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let fragment = opts && 'fragment' in opts ? opts.fragment : null;
      let parentUrl = this.parent != null ? this.parent.toUrl() : "/";
      let url = src__location__location.Location.joinWithSlash(parentUrl, this.path);
      if (parameters != null) {
        for (let key of parameters[$keys]) {
          url = url[$replaceFirst](":" + dart.str(key), core.Uri.encodeComponent(parameters[$_get](key)));
        }
      }
      return new src__url.Url.new(url, {queryParameters: queryParameters, fragment: fragment}).toString();
    }
  };
  (src__route_path.RoutePath.new = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : false;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    this[parent$] = parent;
    this[useAsDefault$] = useAsDefault;
    this[additionalData$] = additionalData;
    this[path$0] = src__url.Url.trimSlashes(path);
  }).prototype = src__route_path.RoutePath.prototype;
  (src__route_path.RoutePath.fromRoutes = function(routes) {
    this[path$0] = dart.test(routes[$isNotEmpty]) ? src__url.Url.trimSlashes(routes[$last].path) : "";
    this[useAsDefault$] = dart.test(routes[$isNotEmpty]) ? routes[$last].useAsDefault : false;
    this[additionalData$] = dart.test(routes[$isNotEmpty]) ? routes[$last].additionalData : null;
    this[parent$] = dart.notNull(routes[$length]) > 1 ? new src__route_path.RoutePath.fromRoutes(routes[$take](dart.notNull(routes[$length]) - 1)) : null;
  }).prototype = src__route_path.RoutePath.prototype;
  dart.addTypeTests(src__route_path.RoutePath);
  const path$0 = Symbol("RoutePath.path");
  const parent$ = Symbol("RoutePath.parent");
  const useAsDefault$ = Symbol("RoutePath.useAsDefault");
  const additionalData$ = Symbol("RoutePath.additionalData");
  dart.setMethodSignature(src__route_path.RoutePath, () => ({
    __proto__: dart.getMethods(src__route_path.RoutePath.__proto__),
    toUrl: dart.fnType(core.String, [], {parameters: core.Map$(core.String, core.String), queryParameters: core.Map$(core.String, core.String), fragment: core.String})
  }));
  dart.setFieldSignature(src__route_path.RoutePath, () => ({
    __proto__: dart.getFields(src__route_path.RoutePath.__proto__),
    path: dart.finalFieldType(core.String),
    parent: dart.finalFieldType(src__route_path.RoutePath),
    useAsDefault: dart.finalFieldType(core.bool),
    additionalData: dart.finalFieldType(dart.dynamic)
  }));
  let const$;
  src__route_definition.RouteDefinition = class RouteDefinition extends core.Object {
    get path() {
      return this[path$1];
    }
    set path(value) {
      super.path = value;
    }
    get useAsDefault() {
      return this[useAsDefault$0];
    }
    set useAsDefault(value) {
      super.useAsDefault = value;
    }
    get additionalData() {
      return this[additionalData$0];
    }
    set additionalData(value) {
      super.additionalData = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.path == null) {
        dart.throw(new core.StateError.new("Must have a non-null `path` string"));
      }
    }
    static new(opts) {
      return new src__route_definition.ComponentRouteDefinition.__(opts);
    }
    static defer(opts) {
      return new src__route_definition.DeferredRouteDefinition.__(opts);
    }
    static redirect(opts) {
      return new src__route_definition.RedirectRouteDefinition.__(opts);
    }
    get parameters() {
      return src__route_definition.RouteDefinition._findParameters.allMatches(this.path)[$map](core.String, dart.fn(m => m._get(1), MatchToString()));
    }
    toRegExp() {
      return core.RegExp.new("/?" + this.path[$replaceAll](src__route_definition.RouteDefinition._findParameters, "((?:[\\w'\\.\\-~!\\$&\\(\\)\\*\\+,;=:@]|%[0-9a-fA-F]{2})+)"));
    }
    toUrl(paramValues) {
      if (paramValues === void 0) paramValues = const$ || (const$ = dart.constMap(core.String, core.String, []));
      if (dart.test(src__runtime__optimizations.isDevMode) && paramValues == null) {
        dart.throw(new core.ArgumentError.notNull("paramValues"));
      }
      let url = "/" + dart.notNull(this.path);
      for (let parameter of this.parameters) {
        url = url[$replaceFirst](":" + dart.str(parameter), core.Uri.encodeComponent(paramValues[$_get](parameter)));
      }
      return url;
    }
  };
  (src__route_definition.RouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[path$1] = src__url.Url.trimSlashes(path != null ? path : routePath == null ? null : routePath.path);
    let l = useAsDefault != null ? useAsDefault : routePath == null ? null : routePath.useAsDefault;
    this[useAsDefault$0] = l != null ? l : false;
    this[additionalData$0] = additionalData != null ? additionalData : routePath == null ? null : routePath.additionalData;
  }).prototype = src__route_definition.RouteDefinition.prototype;
  dart.addTypeTests(src__route_definition.RouteDefinition);
  const path$1 = Symbol("RouteDefinition.path");
  const useAsDefault$0 = Symbol("RouteDefinition.useAsDefault");
  const additionalData$0 = Symbol("RouteDefinition.additionalData");
  dart.setMethodSignature(src__route_definition.RouteDefinition, () => ({
    __proto__: dart.getMethods(src__route_definition.RouteDefinition.__proto__),
    assertValid: dart.fnType(dart.void, []),
    toRegExp: dart.fnType(core.RegExp, []),
    toUrl: dart.fnType(core.String, [], [core.Map$(core.String, core.String)])
  }));
  dart.setGetterSignature(src__route_definition.RouteDefinition, () => ({
    __proto__: dart.getGetters(src__route_definition.RouteDefinition.__proto__),
    parameters: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__route_definition.RouteDefinition, () => ({
    __proto__: dart.getFields(src__route_definition.RouteDefinition.__proto__),
    path: dart.finalFieldType(core.String),
    useAsDefault: dart.finalFieldType(core.bool),
    additionalData: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineLazy(src__route_definition.RouteDefinition, {
    /*src__route_definition.RouteDefinition._findParameters*/get _findParameters() {
      return core.RegExp.new(":([\\w-]+)");
    }
  });
  src__route_definition.ComponentRouteDefinition = class ComponentRouteDefinition extends src__route_definition.RouteDefinition {
    get component() {
      return this[component$];
    }
    set component(value) {
      super.component = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.component == null) {
        dart.throw(new core.StateError.new("Must have a non-null `component` factory"));
      }
      super.assertValid();
    }
  };
  (src__route_definition.ComponentRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let component = opts && 'component' in opts ? opts.component : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[component$] = component;
    src__route_definition.ComponentRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
  }).prototype = src__route_definition.ComponentRouteDefinition.prototype;
  dart.addTypeTests(src__route_definition.ComponentRouteDefinition);
  const component$ = Symbol("ComponentRouteDefinition.component");
  dart.setFieldSignature(src__route_definition.ComponentRouteDefinition, () => ({
    __proto__: dart.getFields(src__route_definition.ComponentRouteDefinition.__proto__),
    component: dart.finalFieldType(src__core__linker__component_factory.ComponentFactory)
  }));
  src__route_definition.DeferredRouteDefinition = class DeferredRouteDefinition extends src__route_definition.RouteDefinition {
    get loader() {
      return this[loader$];
    }
    set loader(value) {
      super.loader = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.loader == null) {
        dart.throw(new core.StateError.new("Must have a non-null `loader` function"));
      }
      super.assertValid();
    }
  };
  (src__route_definition.DeferredRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let loader = opts && 'loader' in opts ? opts.loader : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[loader$] = loader;
    src__route_definition.DeferredRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
  }).prototype = src__route_definition.DeferredRouteDefinition.prototype;
  dart.addTypeTests(src__route_definition.DeferredRouteDefinition);
  const loader$ = Symbol("DeferredRouteDefinition.loader");
  dart.setFieldSignature(src__route_definition.DeferredRouteDefinition, () => ({
    __proto__: dart.getFields(src__route_definition.DeferredRouteDefinition.__proto__),
    loader: dart.finalFieldType(VoidToFutureOfComponentFactory())
  }));
  const _redirectToParameters = Symbol('_redirectToParameters');
  let const$0;
  src__route_definition.RedirectRouteDefinition = class RedirectRouteDefinition extends src__route_definition.RouteDefinition {
    get redirectTo() {
      return this[redirectTo$];
    }
    set redirectTo(value) {
      super.redirectTo = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.redirectTo == null) {
        dart.throw(new core.StateError.new("Must have a non-null `redirectTo` string"));
      }
      if (this.redirectTo == this.path) {
        dart.throw(new core.StateError.new("Cannot redirect from `redirectTo` to `path"));
      }
      let pathParameters = this.parameters;
      let unknownRedirectToParameters = this[_redirectToParameters][$where](dart.fn(redirectToParameter => !dart.test(pathParameters[$contains](redirectToParameter)), StringTobool()));
      if (dart.test(unknownRedirectToParameters[$isNotEmpty])) {
        dart.throw(new core.StateError.new("Parameters in `redirectTo` are not in `path`: " + dart.str(unknownRedirectToParameters)));
      }
      super.assertValid();
    }
    redirectToUrl(paramValues) {
      if (paramValues === void 0) paramValues = const$0 || (const$0 = dart.constMap(core.String, core.String, []));
      if (dart.test(src__runtime__optimizations.isDevMode) && paramValues == null) {
        dart.throw(new core.ArgumentError.notNull("paramValues"));
      }
      let url = this.redirectTo;
      for (let parameter of this[_redirectToParameters]) {
        url = url[$replaceFirst](":" + dart.str(parameter), core.Uri.encodeComponent(paramValues[$_get](parameter)));
      }
      return url;
    }
    get [_redirectToParameters]() {
      return src__route_definition.RouteDefinition._findParameters.allMatches(this.redirectTo)[$map](core.String, dart.fn(m => m._get(1), MatchToString()));
    }
  };
  (src__route_definition.RedirectRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let redirectTo = opts && 'redirectTo' in opts ? opts.redirectTo : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[redirectTo$] = redirectTo;
    src__route_definition.RedirectRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
  }).prototype = src__route_definition.RedirectRouteDefinition.prototype;
  dart.addTypeTests(src__route_definition.RedirectRouteDefinition);
  const redirectTo$ = Symbol("RedirectRouteDefinition.redirectTo");
  dart.setMethodSignature(src__route_definition.RedirectRouteDefinition, () => ({
    __proto__: dart.getMethods(src__route_definition.RedirectRouteDefinition.__proto__),
    redirectToUrl: dart.fnType(core.String, [], [core.Map$(core.String, core.String)])
  }));
  dart.setGetterSignature(src__route_definition.RedirectRouteDefinition, () => ({
    __proto__: dart.getGetters(src__route_definition.RedirectRouteDefinition.__proto__),
    [_redirectToParameters]: core.Iterable$(core.String)
  }));
  dart.setFieldSignature(src__route_definition.RedirectRouteDefinition, () => ({
    __proto__: dart.getFields(src__route_definition.RedirectRouteDefinition.__proto__),
    redirectTo: dart.finalFieldType(core.String)
  }));
  const _routePath = Symbol('_routePath');
  src__router__router_state.RouterState = class RouterState extends src__url.Url {
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get routePath() {
      let t = this[_routePath];
      return t == null ? this[_routePath] = new src__route_path.RoutePath.fromRoutes(this.routes) : t;
    }
    toString() {
      return "#" + dart.str(dart.wrapType(src__router__router_state.RouterState)) + " {" + dart.str(super.toString()) + "}";
    }
  };
  (src__router__router_state.RouterState.new = function(path, routes, opts) {
    let parameters = opts && 'parameters' in opts ? opts.parameters : null;
    let fragment = opts && 'fragment' in opts ? opts.fragment : "";
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    this[_routePath] = null;
    this[parameters$] = MapOfString$String().unmodifiable(parameters != null ? parameters : new _js_helper.LinkedMap.new());
    this[routes$] = ListOfRouteDefinition().unmodifiable(routes != null ? routes : []);
    src__router__router_state.RouterState.__proto__.new.call(this, path, {queryParameters: queryParameters, fragment: fragment});
  }).prototype = src__router__router_state.RouterState.prototype;
  dart.addTypeTests(src__router__router_state.RouterState);
  const routes$ = Symbol("RouterState.routes");
  const parameters$ = Symbol("RouterState.parameters");
  dart.setGetterSignature(src__router__router_state.RouterState, () => ({
    __proto__: dart.getGetters(src__router__router_state.RouterState.__proto__),
    routePath: src__route_path.RoutePath
  }));
  dart.setFieldSignature(src__router__router_state.RouterState, () => ({
    __proto__: dart.getFields(src__router__router_state.RouterState.__proto__),
    routes: dart.finalFieldType(ListOfRouteDefinition()),
    parameters: dart.finalFieldType(MapOfString$String()),
    [_routePath]: dart.fieldType(src__route_path.RoutePath)
  }));
  dart.defineExtensionMethods(src__router__router_state.RouterState, ['toString']);
  src__router__router_state.MutableRouterState = class MutableRouterState extends core.Object {
    get components() {
      return this[components];
    }
    set components(value) {
      super.components = value;
    }
    get factories() {
      return this[factories];
    }
    set factories(value) {
      super.factories = value;
    }
    get parameters() {
      return this[parameters];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get routes() {
      return this[routes];
    }
    set routes(value) {
      super.routes = value;
    }
    get fragment() {
      return this[fragment];
    }
    set fragment(value) {
      this[fragment] = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      this[path] = value;
    }
    get queryParameters() {
      return this[queryParameters];
    }
    set queryParameters(value) {
      this[queryParameters] = value;
    }
    build() {
      return new src__router__router_state.RouterState.new(this.path, this.routes[$toList](), {fragment: this.fragment, queryParameters: this.queryParameters, parameters: this.parameters});
    }
  };
  (src__router__router_state.MutableRouterState.new = function() {
    this[components] = JSArrayOfComponentRef().of([]);
    this[factories] = new (LinkedMapOfComponentRef$ComponentFactory()).new();
    this[parameters] = new (IdentityMapOfString$String()).new();
    this[routes] = JSArrayOfRouteDefinition().of([]);
    this[fragment] = "";
    this[path] = "";
    this[queryParameters] = new (IdentityMapOfString$String()).new();
  }).prototype = src__router__router_state.MutableRouterState.prototype;
  dart.addTypeTests(src__router__router_state.MutableRouterState);
  const components = Symbol("MutableRouterState.components");
  const factories = Symbol("MutableRouterState.factories");
  const parameters = Symbol("MutableRouterState.parameters");
  const routes = Symbol("MutableRouterState.routes");
  const fragment = Symbol("MutableRouterState.fragment");
  const path = Symbol("MutableRouterState.path");
  const queryParameters = Symbol("MutableRouterState.queryParameters");
  dart.setMethodSignature(src__router__router_state.MutableRouterState, () => ({
    __proto__: dart.getMethods(src__router__router_state.MutableRouterState.__proto__),
    build: dart.fnType(src__router__router_state.RouterState, [])
  }));
  dart.setFieldSignature(src__router__router_state.MutableRouterState, () => ({
    __proto__: dart.getFields(src__router__router_state.MutableRouterState.__proto__),
    components: dart.finalFieldType(ListOfComponentRef()),
    factories: dart.finalFieldType(MapOfComponentRef$ComponentFactory()),
    parameters: dart.finalFieldType(MapOfString$String()),
    routes: dart.finalFieldType(ListOfRouteDefinition()),
    fragment: dart.fieldType(core.String),
    path: dart.fieldType(core.String),
    queryParameters: dart.fieldType(MapOfString$String())
  }));
  src__lifecycle.CanActivate = class CanActivate extends core.Object {
    canActivate(current, next) {
      return async.async(core.bool, function* canActivate() {
        return true;
      });
    }
  };
  (src__lifecycle.CanActivate.new = function() {
  }).prototype = src__lifecycle.CanActivate.prototype;
  dart.addTypeTests(src__lifecycle.CanActivate);
  dart.setMethodSignature(src__lifecycle.CanActivate, () => ({
    __proto__: dart.getMethods(src__lifecycle.CanActivate.__proto__),
    canActivate: dart.fnType(async.Future$(core.bool), [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  src__lifecycle.CanDeactivate = class CanDeactivate extends core.Object {
    canDeactivate(current, next) {
      return async.async(core.bool, function* canDeactivate() {
        return true;
      });
    }
  };
  (src__lifecycle.CanDeactivate.new = function() {
  }).prototype = src__lifecycle.CanDeactivate.prototype;
  dart.addTypeTests(src__lifecycle.CanDeactivate);
  dart.setMethodSignature(src__lifecycle.CanDeactivate, () => ({
    __proto__: dart.getMethods(src__lifecycle.CanDeactivate.__proto__),
    canDeactivate: dart.fnType(async.Future$(core.bool), [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  src__lifecycle.CanNavigate = class CanNavigate extends core.Object {};
  (src__lifecycle.CanNavigate.new = function() {
  }).prototype = src__lifecycle.CanNavigate.prototype;
  dart.addTypeTests(src__lifecycle.CanNavigate);
  src__lifecycle.CanReuse = class CanReuse extends core.Object {
    canReuse(current, next) {
      return async.async(core.bool, function* canReuse() {
        return true;
      });
    }
  };
  (src__lifecycle.CanReuse.new = function() {
  }).prototype = src__lifecycle.CanReuse.prototype;
  dart.addTypeTests(src__lifecycle.CanReuse);
  dart.setMethodSignature(src__lifecycle.CanReuse, () => ({
    __proto__: dart.getMethods(src__lifecycle.CanReuse.__proto__),
    canReuse: dart.fnType(async.Future$(core.bool), [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  src__lifecycle.OnActivate = class OnActivate extends core.Object {};
  (src__lifecycle.OnActivate.new = function() {
  }).prototype = src__lifecycle.OnActivate.prototype;
  dart.addTypeTests(src__lifecycle.OnActivate);
  src__lifecycle.OnDeactivate = class OnDeactivate extends core.Object {};
  (src__lifecycle.OnDeactivate.new = function() {
  }).prototype = src__lifecycle.OnDeactivate.prototype;
  dart.addTypeTests(src__lifecycle.OnDeactivate);
  let const$1;
  src__router__navigation_params.NavigationParams = class NavigationParams extends core.Object {
    get queryParameters() {
      return this[queryParameters$0];
    }
    set queryParameters(value) {
      super.queryParameters = value;
    }
    get fragment() {
      return this[fragment$0];
    }
    set fragment(value) {
      super.fragment = value;
    }
    get reload() {
      return this[reload$];
    }
    set reload(value) {
      super.reload = value;
    }
    get replace() {
      return this[replace$];
    }
    set replace(value) {
      super.replace = value;
    }
    get updateUrl() {
      return this[updateUrl$];
    }
    set updateUrl(value) {
      super.updateUrl = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.fragment == null) {
        dart.throw(new core.StateError.new("Must have a non-null `fragment` type"));
      }
      if (this.queryParameters == null) {
        dart.throw(new core.StateError.new("Must have a non-null `query` type"));
      }
    }
  };
  (src__router__navigation_params.NavigationParams.new = function(opts) {
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : const$1 || (const$1 = dart.constMap(core.String, core.String, []));
    let fragment = opts && 'fragment' in opts ? opts.fragment : "";
    let reload = opts && 'reload' in opts ? opts.reload : false;
    let replace = opts && 'replace' in opts ? opts.replace : false;
    let updateUrl = opts && 'updateUrl' in opts ? opts.updateUrl : true;
    this[queryParameters$0] = queryParameters;
    this[fragment$0] = fragment;
    this[reload$] = reload;
    this[replace$] = replace;
    this[updateUrl$] = updateUrl;
  }).prototype = src__router__navigation_params.NavigationParams.prototype;
  dart.addTypeTests(src__router__navigation_params.NavigationParams);
  const queryParameters$0 = Symbol("NavigationParams.queryParameters");
  const fragment$0 = Symbol("NavigationParams.fragment");
  const reload$ = Symbol("NavigationParams.reload");
  const replace$ = Symbol("NavigationParams.replace");
  const updateUrl$ = Symbol("NavigationParams.updateUrl");
  dart.setMethodSignature(src__router__navigation_params.NavigationParams, () => ({
    __proto__: dart.getMethods(src__router__navigation_params.NavigationParams.__proto__),
    assertValid: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__router__navigation_params.NavigationParams, () => ({
    __proto__: dart.getFields(src__router__navigation_params.NavigationParams.__proto__),
    queryParameters: dart.finalFieldType(MapOfString$String()),
    fragment: dart.finalFieldType(core.String),
    reload: dart.finalFieldType(core.bool),
    replace: dart.finalFieldType(core.bool),
    updateUrl: dart.finalFieldType(core.bool)
  }));
  src__router_hook.RouterHook = class RouterHook extends core.Object {
    navigationPath(path, params) {
      return async.async(core.String, function* navigationPath() {
        return path;
      });
    }
    navigationParams(path, params) {
      return async.async(src__router__navigation_params.NavigationParams, function* navigationParams() {
        return params;
      });
    }
    canActivate(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canActivate() {
        return true;
      });
    }
    canDeactivate(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canDeactivate() {
        return true;
      });
    }
    canNavigate() {
      return async.async(core.bool, function* canNavigate() {
        return true;
      });
    }
    canReuse(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canReuse() {
        return false;
      });
    }
  };
  (src__router_hook.RouterHook.new = function() {
  }).prototype = src__router_hook.RouterHook.prototype;
  dart.addTypeTests(src__router_hook.RouterHook);
  dart.setMethodSignature(src__router_hook.RouterHook, () => ({
    __proto__: dart.getMethods(src__router_hook.RouterHook.__proto__),
    navigationPath: dart.fnType(async.Future$(core.String), [core.String, src__router__navigation_params.NavigationParams]),
    navigationParams: dart.fnType(async.Future$(src__router__navigation_params.NavigationParams), [core.String, src__router__navigation_params.NavigationParams]),
    canActivate: dart.fnType(async.Future$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState]),
    canDeactivate: dart.fnType(async.Future$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState]),
    canNavigate: dart.fnType(async.Future$(core.bool), []),
    canReuse: dart.fnType(async.Future$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  src__router__router_outlet_token.RouterOutletToken = class RouterOutletToken extends core.Object {
    get routerOutlet() {
      return this[routerOutlet];
    }
    set routerOutlet(value) {
      this[routerOutlet] = value;
    }
  };
  (src__router__router_outlet_token.RouterOutletToken.new = function() {
    this[routerOutlet] = null;
  }).prototype = src__router__router_outlet_token.RouterOutletToken.prototype;
  dart.addTypeTests(src__router__router_outlet_token.RouterOutletToken);
  const routerOutlet = Symbol("RouterOutletToken.routerOutlet");
  dart.setFieldSignature(src__router__router_outlet_token.RouterOutletToken, () => ({
    __proto__: dart.getFields(src__router__router_outlet_token.RouterOutletToken.__proto__),
    routerOutlet: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet)
  }));
  const _viewContainerRef = Symbol('_viewContainerRef');
  const _router = Symbol('_router');
  const _routerHook = Symbol('_routerHook');
  const _loadedComponents = Symbol('_loadedComponents');
  const _activeComponentFactory = Symbol('_activeComponentFactory');
  const _routes = Symbol('_routes');
  let const$2;
  const _activeComponent = Symbol('_activeComponent');
  const _shouldReuse = Symbol('_shouldReuse');
  src__directives__router_outlet_directive.RouterOutlet = class RouterOutlet extends core.Object {
    get [_activeComponent]() {
      return this[_loadedComponents][$_get](this[_activeComponentFactory]);
    }
    set routes(routes) {
      if (dart.test(src__runtime__optimizations.isDevMode)) {
        for (let route of routes) {
          route.assertValid();
        }
        let hasDefault = false;
        for (let route of routes) {
          if (dart.test(route.useAsDefault)) {
            if (hasDefault) {
              dart.throw(new core.StateError.new("Only one route can be used as default"));
            }
            hasDefault = true;
          }
        }
      }
      this[_routes] = routes;
    }
    get routes() {
      let l = this[_routes];
      return l != null ? l : JSArrayOfRouteDefinition().of([]);
    }
    ngOnInit() {
      this[_router].registerRootOutlet(this);
    }
    ngOnDestroy() {
      for (let loadedComponent of this[_loadedComponents][$values]) {
        loadedComponent.destroy();
      }
      this[_viewContainerRef].clear();
      this[_router].unregisterRootOutlet(this);
    }
    prepare(componentFactory) {
      return this[_loadedComponents][$putIfAbsent](componentFactory, dart.fn(() => {
        let componentRef = componentFactory.create(src__di__injector__injector.Injector.map(new (LinkedMapOfObject$Object()).from([dart.wrapType(src__router__router_outlet_token.RouterOutletToken), new src__router__router_outlet_token.RouterOutletToken.new()]), src__di__injector__hierarchical.HierarchicalInjector._check(this[_viewContainerRef].injector)));
        componentRef.changeDetectorRef.detectChanges();
        return componentRef;
      }, VoidToComponentRef()));
    }
    activate(componentFactory, oldState, newState) {
      return async.async(core.Null, (function* activate() {
        let activeComponent = this[_activeComponent];
        if (activeComponent != null) {
          let shouldReuse = (yield this[_shouldReuse](activeComponent.instance, oldState, newState));
          if (dart.test(shouldReuse)) {
            if (this[_activeComponentFactory] == componentFactory) return;
            for (let i = dart.notNull(this[_viewContainerRef].length) - 1; i >= 0; --i) {
              this[_viewContainerRef].detach(i);
            }
          } else {
            this[_loadedComponents][$remove](this[_activeComponentFactory]);
            activeComponent.destroy();
            this[_viewContainerRef].clear();
          }
        }
        this[_activeComponentFactory] = componentFactory;
        let component = this.prepare(componentFactory);
        this[_viewContainerRef].insert(component.hostView);
        component.changeDetectorRef.detectChanges();
      }).bind(this));
    }
    [_shouldReuse](instance, oldState, newState) {
      if (src__lifecycle.CanReuse.is(instance)) {
        return instance.canReuse(oldState, newState);
      }
      if (this[_routerHook] != null) {
        return this[_routerHook].canReuse(instance, oldState, newState);
      }
      return false;
    }
  };
  (src__directives__router_outlet_directive.RouterOutlet.new = function(token, viewContainerRef, router, routerHook) {
    this[_loadedComponents] = new (LinkedMapOfComponentFactory$ComponentRef()).new();
    this[_activeComponentFactory] = null;
    this[_routes] = const$2 || (const$2 = dart.constList([], src__route_definition.RouteDefinition));
    this[_viewContainerRef] = viewContainerRef;
    this[_router] = router;
    this[_routerHook] = routerHook;
    token == null ? null : token.routerOutlet = this;
  }).prototype = src__directives__router_outlet_directive.RouterOutlet.prototype;
  dart.addTypeTests(src__directives__router_outlet_directive.RouterOutlet);
  src__directives__router_outlet_directive.RouterOutlet[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getMethods(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    prepare: dart.fnType(src__core__linker__component_factory.ComponentRef, [src__core__linker__component_factory.ComponentFactory]),
    activate: dart.fnType(async.Future$(core.Null), [src__core__linker__component_factory.ComponentFactory, src__router__router_state.RouterState, src__router__router_state.RouterState]),
    [_shouldReuse]: dart.fnType(async.FutureOr$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  dart.setGetterSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getGetters(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    [_activeComponent]: src__core__linker__component_factory.ComponentRef,
    routes: core.List$(src__route_definition.RouteDefinition)
  }));
  dart.setSetterSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getSetters(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    routes: core.List$(src__route_definition.RouteDefinition)
  }));
  dart.setFieldSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getFields(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    [_viewContainerRef]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_router]: dart.finalFieldType(src__router__router.Router),
    [_routerHook]: dart.finalFieldType(src__router_hook.RouterHook),
    [_loadedComponents]: dart.finalFieldType(MapOfComponentFactory$ComponentRef()),
    [_activeComponentFactory]: dart.fieldType(src__core__linker__component_factory.ComponentFactory),
    [_routes]: dart.fieldType(ListOfRouteDefinition())
  }));
  src__router__router.NavigationResult = class NavigationResult extends core.Object {
    toString() {
      return {
        0: "NavigationResult.SUCCESS",
        1: "NavigationResult.BLOCKED_BY_GUARD",
        2: "NavigationResult.INVALID_ROUTE"
      }[this.index];
    }
  };
  (src__router__router.NavigationResult.new = function(x) {
    this.index = x;
  }).prototype = src__router__router.NavigationResult.prototype;
  dart.addTypeTests(src__router__router.NavigationResult);
  dart.setFieldSignature(src__router__router.NavigationResult, () => ({
    __proto__: dart.getFields(src__router__router.NavigationResult.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__router__router.NavigationResult, ['toString']);
  src__router__router.NavigationResult.SUCCESS = dart.const(new src__router__router.NavigationResult.new(0));
  src__router__router.NavigationResult.BLOCKED_BY_GUARD = dart.const(new src__router__router.NavigationResult.new(1));
  src__router__router.NavigationResult.INVALID_ROUTE = dart.const(new src__router__router.NavigationResult.new(2));
  src__router__router.NavigationResult.values = dart.constList([src__router__router.NavigationResult.SUCCESS, src__router__router.NavigationResult.BLOCKED_BY_GUARD, src__router__router.NavigationResult.INVALID_ROUTE], src__router__router.NavigationResult);
  src__router__router.Router = class Router extends core.Object {
    get onRouteActivated() {
      return this.stream;
    }
  };
  (src__router__router.Router.new = function() {
  }).prototype = src__router__router.Router.prototype;
  dart.addTypeTests(src__router__router.Router);
  dart.setGetterSignature(src__router__router.Router, () => ({
    __proto__: dart.getGetters(src__router__router.Router.__proto__),
    onRouteActivated: async.Stream$(src__router__router_state.RouterState)
  }));
  const _location$ = Symbol('_location');
  const _routerHook$ = Symbol('_routerHook');
  const _onRouteActivated = Symbol('_onRouteActivated');
  const _activeState = Symbol('_activeState');
  const _activeComponentRefs = Symbol('_activeComponentRefs');
  const _onNavigationStart = Symbol('_onNavigationStart');
  const _rootOutlet = Symbol('_rootOutlet');
  const _lastNavigation = Symbol('_lastNavigation');
  const _enqueueNavigation = Symbol('_enqueueNavigation');
  const _getAbsolutePath = Symbol('_getAbsolutePath');
  const _navigate = Symbol('_navigate');
  const _canNavigate = Symbol('_canNavigate');
  let const$3;
  const _resolveState = Symbol('_resolveState');
  const _canDeactivate = Symbol('_canDeactivate');
  const _canActivate = Symbol('_canActivate');
  const _activateRouterState = Symbol('_activateRouterState');
  const _attachDefaultChildren = Symbol('_attachDefaultChildren');
  const _resolveStateForOutlet = Symbol('_resolveStateForOutlet');
  const _getTypeFromRoute = Symbol('_getTypeFromRoute');
  src__router__router_impl.RouterImpl = class RouterImpl extends src__router__router.Router {
    get current() {
      return this[_activeState];
    }
    get onNavigationStart() {
      let t = this[_onNavigationStart];
      t == null ? this[_onNavigationStart] = StreamControllerOfString().broadcast({sync: true}) : t;
      return this[_onNavigationStart].stream;
    }
    get stream() {
      return this[_onRouteActivated].stream;
    }
    registerRootOutlet(routerOutlet) {
      if (this[_rootOutlet] == null) {
        this[_rootOutlet] = routerOutlet;
        let url = src__url.Url.parse(this[_location$].path());
        this[_enqueueNavigation](url.path, new src__router__navigation_params.NavigationParams.new({queryParameters: url.queryParameters, fragment: dart.test(src__url.Url.isHashStrategy) ? url.fragment : src__url.Url.normalizeHash(this[_location$].hash()), replace: true}));
      }
    }
    unregisterRootOutlet(routerOutlet) {
      if (dart.equals(this[_rootOutlet], routerOutlet)) {
        this[_rootOutlet] = null;
        this[_activeState] = null;
      }
    }
    navigate(path, navigationParams) {
      if (navigationParams === void 0) navigationParams = null;
      let absolutePath = this[_getAbsolutePath](path, this[_activeState]);
      return this[_enqueueNavigation](absolutePath, navigationParams);
    }
    navigateByUrl(url, opts) {
      let reload = opts && 'reload' in opts ? opts.reload : false;
      let replace = opts && 'replace' in opts ? opts.replace : false;
      let parsed = src__url.Url.parse(url);
      return this.navigate(parsed.path, new src__router__navigation_params.NavigationParams.new({fragment: parsed.fragment, queryParameters: parsed.queryParameters, reload: reload, replace: replace}));
    }
    [_enqueueNavigation](path, navigationParams) {
      let navigationCompleter = CompleterOfNavigationResult().sync();
      this[_lastNavigation] = this[_lastNavigation].then(dart.void, dart.fn(_ => this[_navigate](path, navigationParams).then(dart.void, dart.bind(navigationCompleter, 'complete')).catchError(dart.bind(navigationCompleter, 'completeError')), voidToFutureOfvoid()));
      return navigationCompleter.future;
    }
    [_navigate](path, navigationParams, opts) {
      return async.async(src__router__router.NavigationResult, (function* _navigate$() {
        let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
        if (!dart.test(isRedirect)) {
          if (!dart.test(yield this[_canNavigate]())) {
            return src__router__router.NavigationResult.BLOCKED_BY_GUARD;
          } else {
            let t = this[_onNavigationStart];
            t == null ? null : t.add(path);
          }
        }
        navigationParams == null ? null : navigationParams.assertValid();
        let l = (yield this[_routerHook$] == null ? null : this[_routerHook$].navigationPath(path, navigationParams));
        path = l != null ? l : path;
        path = this[_location$].normalizePath(path);
        let l$ = (yield this[_routerHook$] == null ? null : this[_routerHook$].navigationParams(path, navigationParams));
        navigationParams = l$ != null ? l$ : navigationParams;
        navigationParams == null ? null : navigationParams.assertValid();
        let l$0 = navigationParams == null ? null : navigationParams.queryParameters;
        let queryParameters = l$0 != null ? l$0 : new (IdentityMapOfString$String()).new();
        let reload = navigationParams != null ? navigationParams.reload : false;
        if (!dart.test(reload) && this.current != null && path == this.current.path && (() => {
          let l = navigationParams == null ? null : navigationParams.fragment;
          return l != null ? l : "";
        })() === this.current.fragment && dart.test((const$3 || (const$3 = dart.const(new src__equality.MapEquality.new()))).equals(queryParameters, this.current.queryParameters))) {
          return src__router__router.NavigationResult.SUCCESS;
        }
        let nextState = (yield this[_resolveState](path, navigationParams));
        if (nextState == null || dart.test(nextState.routes[$isEmpty])) {
          return src__router__router.NavigationResult.INVALID_ROUTE;
        }
        if (dart.test(nextState.routes[$isNotEmpty])) {
          let leaf = nextState.routes[$last];
          if (src__route_definition.RedirectRouteDefinition.is(leaf)) {
            let newPath = this[_getAbsolutePath](leaf.redirectToUrl(nextState.parameters), nextState.build());
            return this[_navigate](newPath, navigationParams, {isRedirect: true});
          }
        }
        if (!dart.test(yield this[_canDeactivate](nextState))) {
          return src__router__router.NavigationResult.BLOCKED_BY_GUARD;
        }
        if (!dart.test(yield this[_canActivate](nextState))) {
          return src__router__router.NavigationResult.BLOCKED_BY_GUARD;
        }
        yield this[_activateRouterState](nextState);
        if (navigationParams == null || dart.test(navigationParams.updateUrl)) {
          let url = nextState.build().toUrl();
          if (navigationParams != null && dart.test(navigationParams.replace)) {
            this[_location$].replaceState(url);
          } else {
            this[_location$].go(url);
          }
        }
        return src__router__router.NavigationResult.SUCCESS;
      }).bind(this));
    }
    [_getAbsolutePath](path, state) {
      if (path[$startsWith]("./")) {
        let currentRoutes = state.routes[$take](dart.notNull(state.routes[$length]) - 1);
        let currentPath = currentRoutes[$fold](core.String, "", dart.fn((soFar, route) => dart.notNull(soFar) + dart.notNull(route.toUrl(state.parameters)), StringAndRouteDefinitionToString()));
        return src__location__location.Location.joinWithSlash(currentPath, path[$substring](2));
      }
      return path;
    }
    [_resolveState](path, navigationParams) {
      return this[_resolveStateForOutlet](this[_rootOutlet], path).then(src__router__router_state.MutableRouterState, dart.fn(routerState => {
        if (routerState != null) {
          routerState.path = path;
          if (navigationParams != null) {
            routerState.fragment = navigationParams.fragment;
            routerState.queryParameters = navigationParams.queryParameters;
          }
          return this[_attachDefaultChildren](routerState);
        }
      }, MutableRouterStateToFutureOfMutableRouterState()));
    }
    [_resolveStateForOutlet](outlet, path) {
      return async.async(src__router__router_state.MutableRouterState, (function* _resolveStateForOutlet$() {
        if (outlet == null) {
          if (path === "") {
            return new src__router__router_state.MutableRouterState.new();
          }
          return null;
        }
        for (let route of outlet.routes) {
          let match = route.toRegExp().matchAsPrefix(path);
          if (match != null) {
            let routerState = null;
            let component = (yield this[_getTypeFromRoute](route));
            let componentRef = component != null ? outlet.prepare(component) : null;
            if (match.end !== path.length) {
              if (componentRef == null) {
                continue;
              }
              let nextOutlet = src__directives__router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(src__router__router_outlet_token.RouterOutletToken)), 'routerOutlet'));
              if (nextOutlet == null) {
                continue;
              }
            }
            if (componentRef != null) {
              let nextOutlet = src__directives__router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(src__router__router_outlet_token.RouterOutletToken)), 'routerOutlet'));
              routerState = (yield this[_resolveStateForOutlet](nextOutlet, path[$substring](match.end)));
            }
            if (routerState == null) {
              if (match.end !== path.length) {
                continue;
              }
              routerState = new src__router__router_state.MutableRouterState.new();
            }
            routerState.routes[$insert](0, route);
            if (component != null) {
              routerState.factories[$_set](componentRef, component);
              routerState.components[$insert](0, componentRef);
            }
            let parameters = route.parameters;
            let index = 1;
            for (let parameter of parameters) {
              routerState.parameters[$_set](parameter, core.Uri.decodeComponent(match._get(index++)));
            }
            return routerState;
          }
        }
        if (path === "") {
          return new src__router__router_state.MutableRouterState.new();
        }
        return null;
      }).bind(this));
    }
    [_getTypeFromRoute](route) {
      if (src__route_definition.ComponentRouteDefinition.is(route)) {
        return route.component;
      }
      if (src__route_definition.DeferredRouteDefinition.is(route)) {
        return route.loader();
      }
      return null;
    }
    [_attachDefaultChildren](stateSoFar) {
      return async.async(src__router__router_state.MutableRouterState, (function* _attachDefaultChildren$() {
        let nextOutlet = null;
        if (dart.test(stateSoFar.routes[$isEmpty])) {
          nextOutlet = this[_rootOutlet];
        } else {
          let component = (yield this[_getTypeFromRoute](stateSoFar.routes[$last]));
          if (component == null) {
            return stateSoFar;
          }
          nextOutlet = src__directives__router_outlet_directive.RouterOutlet._check(dart.dload(stateSoFar.components[$last].injector.get(dart.wrapType(src__router__router_outlet_token.RouterOutletToken)), 'routerOutlet'));
        }
        if (nextOutlet == null) {
          return stateSoFar;
        }
        for (let route of nextOutlet.routes) {
          if (dart.test(route.useAsDefault)) {
            stateSoFar.routes[$add](route);
            let component = (yield this[_getTypeFromRoute](stateSoFar.routes[$last]));
            if (component != null) {
              let instance = nextOutlet.prepare(component);
              stateSoFar.factories[$_set](instance, component);
              stateSoFar.components[$add](instance);
              return this[_attachDefaultChildren](stateSoFar);
            }
            return stateSoFar;
          }
        }
        return stateSoFar;
      }).bind(this));
    }
    [_canNavigate]() {
      return async.async(core.bool, (function* _canNavigate() {
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (src__lifecycle.CanNavigate.is(component) && !dart.test(yield component.canNavigate())) {
            return false;
          }
        }
        if (this[_routerHook$] != null && !dart.test(yield this[_routerHook$].canNavigate())) {
          return false;
        }
        return true;
      }).bind(this));
    }
    [_canDeactivate](mutableNextState) {
      return async.async(core.bool, (function* _canDeactivate() {
        let nextState = mutableNextState.build();
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (src__lifecycle.CanDeactivate.is(component) && !dart.test(yield component.canDeactivate(this[_activeState], nextState))) {
            return false;
          }
          if (this[_routerHook$] != null && !dart.test(yield this[_routerHook$].canDeactivate(component, this[_activeState], nextState))) {
            return false;
          }
        }
        return true;
      }).bind(this));
    }
    [_canActivate](mutableNextState) {
      return async.async(core.bool, (function* _canActivate() {
        let nextState = mutableNextState.build();
        for (let componentRef of mutableNextState.components) {
          let component = componentRef.instance;
          if (src__lifecycle.CanActivate.is(component) && !dart.test(yield component.canActivate(this[_activeState], nextState))) {
            return false;
          }
          if (this[_routerHook$] != null && !dart.test(yield this[_routerHook$].canActivate(component, this[_activeState], nextState))) {
            return false;
          }
        }
        return true;
      }).bind(this));
    }
    [_activateRouterState](mutableNextState) {
      return async.async(dart.dynamic, (function* _activateRouterState() {
        let nextState = mutableNextState.build();
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (src__lifecycle.OnDeactivate.is(component)) {
            component.onDeactivate(this[_activeState], nextState);
          }
        }
        let currentOutlet = this[_rootOutlet];
        for (let i = 0, len = mutableNextState.components[$length]; i < dart.notNull(len); ++i) {
          let resolvedComponentRef = mutableNextState.components[$_get](i);
          let componentFactory = mutableNextState.factories[$_get](resolvedComponentRef);
          yield currentOutlet.activate(componentFactory, this[_activeState], nextState);
          let componentRef = currentOutlet.prepare(componentFactory);
          if (!(componentRef == resolvedComponentRef)) {
            mutableNextState.components[$_set](i, componentRef);
          }
          currentOutlet = src__directives__router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(src__router__router_outlet_token.RouterOutletToken)), 'routerOutlet'));
          let component = componentRef.instance;
          if (src__lifecycle.OnActivate.is(component)) {
            component.onActivate(this[_activeState], nextState);
          }
        }
        this[_onRouteActivated].add(nextState);
        this[_activeState] = nextState;
        this[_activeComponentRefs] = mutableNextState.components;
      }).bind(this));
    }
  };
  (src__router__router_impl.RouterImpl.new = function(location, routerHook) {
    this[_onRouteActivated] = StreamControllerOfRouterState().broadcast({sync: true});
    this[_activeState] = null;
    this[_activeComponentRefs] = JSArrayOfComponentRef().of([]);
    this[_onNavigationStart] = null;
    this[_rootOutlet] = null;
    this[_lastNavigation] = FutureOfvoid().value();
    this[_location$] = location;
    this[_routerHook$] = routerHook;
    src__url.Url.isHashStrategy = src__location__hash_location_strategy.HashLocationStrategy.is(this[_location$].locationStrategy);
    this[_location$].subscribe(dart.fn(_ => {
      let url = src__url.Url.parse(this[_location$].path());
      let fragment = dart.test(src__url.Url.isHashStrategy) ? url.fragment : src__url.Url.normalizeHash(this[_location$].hash());
      let navigationParams = new src__router__navigation_params.NavigationParams.new({queryParameters: url.queryParameters, fragment: fragment, updateUrl: false});
      this[_enqueueNavigation](url.path, navigationParams).then(core.Null, dart.fn(navigationResult => {
        if (navigationResult === src__router__router.NavigationResult.BLOCKED_BY_GUARD) {
          this[_location$].replaceState(this[_activeState].toUrl());
        }
      }, NavigationResultToNull()));
    }, dynamicToNull()));
  }).prototype = src__router__router_impl.RouterImpl.prototype;
  dart.addTypeTests(src__router__router_impl.RouterImpl);
  dart.setMethodSignature(src__router__router_impl.RouterImpl, () => ({
    __proto__: dart.getMethods(src__router__router_impl.RouterImpl.__proto__),
    registerRootOutlet: dart.fnType(dart.void, [src__directives__router_outlet_directive.RouterOutlet]),
    unregisterRootOutlet: dart.fnType(dart.void, [src__directives__router_outlet_directive.RouterOutlet]),
    navigate: dart.fnType(async.Future$(src__router__router.NavigationResult), [core.String], [src__router__navigation_params.NavigationParams]),
    navigateByUrl: dart.fnType(async.Future$(src__router__router.NavigationResult), [core.String], {reload: core.bool, replace: core.bool}),
    [_enqueueNavigation]: dart.fnType(async.Future$(src__router__router.NavigationResult), [core.String, src__router__navigation_params.NavigationParams]),
    [_navigate]: dart.fnType(async.Future$(src__router__router.NavigationResult), [core.String, src__router__navigation_params.NavigationParams], {isRedirect: core.bool}),
    [_getAbsolutePath]: dart.fnType(core.String, [core.String, src__router__router_state.RouterState]),
    [_resolveState]: dart.fnType(async.Future$(src__router__router_state.MutableRouterState), [core.String, src__router__navigation_params.NavigationParams]),
    [_resolveStateForOutlet]: dart.fnType(async.Future$(src__router__router_state.MutableRouterState), [src__directives__router_outlet_directive.RouterOutlet, core.String]),
    [_getTypeFromRoute]: dart.fnType(async.FutureOr$(src__core__linker__component_factory.ComponentFactory), [src__route_definition.RouteDefinition]),
    [_attachDefaultChildren]: dart.fnType(async.Future$(src__router__router_state.MutableRouterState), [src__router__router_state.MutableRouterState]),
    [_canNavigate]: dart.fnType(async.Future$(core.bool), []),
    [_canDeactivate]: dart.fnType(async.Future$(core.bool), [src__router__router_state.MutableRouterState]),
    [_canActivate]: dart.fnType(async.Future$(core.bool), [src__router__router_state.MutableRouterState]),
    [_activateRouterState]: dart.fnType(async.Future, [src__router__router_state.MutableRouterState])
  }));
  dart.setGetterSignature(src__router__router_impl.RouterImpl, () => ({
    __proto__: dart.getGetters(src__router__router_impl.RouterImpl.__proto__),
    current: src__router__router_state.RouterState,
    onNavigationStart: async.Stream$(core.String),
    stream: async.Stream$(src__router__router_state.RouterState)
  }));
  dart.setFieldSignature(src__router__router_impl.RouterImpl, () => ({
    __proto__: dart.getFields(src__router__router_impl.RouterImpl.__proto__),
    [_onRouteActivated]: dart.finalFieldType(StreamControllerOfRouterState()),
    [_location$]: dart.finalFieldType(src__location__location.Location),
    [_routerHook$]: dart.finalFieldType(src__router_hook.RouterHook),
    [_activeState]: dart.fieldType(src__router__router_state.RouterState),
    [_activeComponentRefs]: dart.fieldType(IterableOfComponentRef()),
    [_onNavigationStart]: dart.fieldType(StreamControllerOfString()),
    [_rootOutlet]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_lastNavigation]: dart.fieldType(FutureOfvoid())
  }));
  dart.trackLibraries("packages/angular_router/src/directives/router_outlet_directive.ddc", {
    "package:angular_router/src/location/base_href.dart": src__location__base_href,
    "package:angular_router/src/location/platform_location.dart": src__location__platform_location,
    "package:angular_router/src/location/browser_platform_location.dart": src__location__browser_platform_location,
    "package:angular_router/src/location/location_strategy.dart": src__location__location_strategy,
    "package:angular_router/src/location/location.dart": src__location__location,
    "package:angular_router/src/location/hash_location_strategy.dart": src__location__hash_location_strategy,
    "package:angular_router/src/location/path_location_strategy.dart": src__location__path_location_strategy,
    "package:angular_router/src/location.dart": src__location,
    "package:angular_router/src/url.dart": src__url,
    "package:angular_router/src/route_path.dart": src__route_path,
    "package:angular_router/src/route_definition.dart": src__route_definition,
    "package:angular_router/src/router/router_state.dart": src__router__router_state,
    "package:angular_router/src/lifecycle.dart": src__lifecycle,
    "package:angular_router/src/router/navigation_params.dart": src__router__navigation_params,
    "package:angular_router/src/router_hook.dart": src__router_hook,
    "package:angular_router/src/router/router_outlet_token.dart": src__router__router_outlet_token,
    "package:angular_router/src/directives/router_outlet_directive.dart": src__directives__router_outlet_directive,
    "package:angular_router/src/router/router.dart": src__router__router,
    "package:angular_router/src/router/router_impl.dart": src__router__router_impl
  }, '{"version":3,"sourceRoot":"","sources":["../location/base_href.dart","../location/platform_location.dart","../location/browser_platform_location.dart","../location/location_strategy.dart","../location/location.dart","../location/hash_location_strategy.dart","../location/path_location_strategy.dart","../url.dart","../route_path.dart","../route_definition.dart","../router/router_state.dart","../lifecycle.dart","../router/navigation_params.dart","../router_hook.dart","../router/router_outlet_token.dart","router_outlet_directive.dart","../router/router.dart","../router/router_impl.dart"],"names":[],"mappings":"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","file":"router_outlet_directive.ddc.js"}');
  // Exports:
  return {
    src__location__base_href: src__location__base_href,
    src__location__platform_location: src__location__platform_location,
    src__location__browser_platform_location: src__location__browser_platform_location,
    src__location__location_strategy: src__location__location_strategy,
    src__location__location: src__location__location,
    src__location__hash_location_strategy: src__location__hash_location_strategy,
    src__location__path_location_strategy: src__location__path_location_strategy,
    src__location: src__location,
    src__url: src__url,
    src__route_path: src__route_path,
    src__route_definition: src__route_definition,
    src__router__router_state: src__router__router_state,
    src__lifecycle: src__lifecycle,
    src__router__navigation_params: src__router__navigation_params,
    src__router_hook: src__router_hook,
    src__router__router_outlet_token: src__router__router_outlet_token,
    src__directives__router_outlet_directive: src__directives__router_outlet_directive,
    src__router__router: src__router__router,
    src__router__router_impl: src__router__router_impl
  };
});

//# sourceMappingURL=router_outlet_directive.ddc.js.map
