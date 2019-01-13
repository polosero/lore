define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/http/src/base_client', 'packages/http/browser_client', 'packages/markdown/markdown', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/bootstrap/modules', 'packages/angular_forms/src/directives', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_dialog/material_dialog.template', 'packages/angular_components/auto_dismiss/auto_dismiss', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/auto_dismiss/auto_dismiss.template', 'packages/angular_components/laminate/overlay/module.template'], function(dart_sdk, change_detection, base_client, browser_client, markdown, router_outlet_directive, angular, angular_router, view_type, modules, directives, material_button, dark_theme, material_button$, material_icon, material_icon$, button_decorator, has_disabled, angular_forms, modal, modal$, overlay_ref, dom_service, material_dialog, auto_dismiss, ng_zone, material_dialog$, deferred_content_aware, module, disposer, angular_2, imperative_view, dom_ruler, managed_zone, angular_2$, module$, zindexer, auto_dismiss$, module$0) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__pipe_transform = change_detection.src__core__change_detection__pipe_transform;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__response = base_client.src__response;
  const browser_client$ = browser_client.browser_client;
  const src__html_renderer = markdown.src__html_renderer;
  const src__route_path = router_outlet_directive.src__route_path;
  const src__lifecycle = router_outlet_directive.src__lifecycle;
  const src__router__router_state = router_outlet_directive.src__router__router_state;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__route_definition = router_outlet_directive.src__route_definition;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__directives__default_value_accessor = directives.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const src__directives__ng_form = directives.src__directives__ng_form;
  const src__model = directives.src__model;
  const src__directives__control_container = directives.src__directives__control_container;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const laminate__components__modal__modal$46template = modal.laminate__components__modal__modal$46template;
  const laminate__components__modal__modal = modal$.laminate__components__modal__modal;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const material_dialog__material_dialog$46template = material_dialog.material_dialog__material_dialog$46template;
  const auto_dismiss__auto_dismiss = auto_dismiss.auto_dismiss__auto_dismiss;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const material_dialog__material_dialog = material_dialog$.material_dialog__material_dialog;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const auto_dismiss__auto_dismiss$46template = auto_dismiss$.auto_dismiss__auto_dismiss$46template;
  const laminate__overlay__module$46template = module$0.laminate__overlay__module$46template;
  const _root = Object.create(null);
  const src__network__gateway_service = Object.create(_root);
  const src__network__network_service = Object.create(_root);
  const src__model__model = Object.create(_root);
  const src__routes_path = Object.create(_root);
  const src__view__view_document__view_snippet__elastic_directive = Object.create(_root);
  const src__view__view_document__view_snippet__view_snippet_component = Object.create(_root);
  const src__view__view_document__time_pipe = Object.create(_root);
  const src__network__gateway_service$46template = Object.create(_root);
  const src__network__network_service$46template = Object.create(_root);
  const src__model__model$46template = Object.create(_root);
  const src__routes_path$46template = Object.create(_root);
  const src__view__view_document__time_pipe$46template = Object.create(_root);
  const src__view__view_document__view_snippet__elastic_directive$46template = Object.create(_root);
  const src__view__view_document__view_snippet__view_snippet_component$46template = Object.create(_root);
  const src__view__view_document_list__view_document_list_component = Object.create(_root);
  const src__view__view_document_list__view_document_list_component$46template = Object.create(_root);
  const src__routes$46template = Object.create(_root);
  const src__view__view_document__view_document_component = Object.create(_root);
  const src__view__view_document__view_document_component$46template = Object.create(_root);
  const src__routes = Object.create(_root);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $isEmpty = dartx.isEmpty;
  const $indexWhere = dartx.indexWhere;
  const $removeAt = dartx.removeAt;
  const $remove = dartx.remove;
  const $first = dartx.first;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $removeWhere = dartx.removeWhere;
  const $sort = dartx.sort;
  const $toString = dartx.toString;
  const $height = dartx.height;
  const $scrollHeight = dartx.scrollHeight;
  const $offsetHeight = dartx.offsetHeight;
  const $modulo = dartx['%'];
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $length = dartx.length;
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let FutureOrOfList = () => (FutureOrOfList = dart.constFn(async.FutureOr$(core.List)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfDocument = () => (JSArrayOfDocument = dart.constFn(_interceptors.JSArray$(src__model__model.Document)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let ListToNull = () => (ListToNull = dart.constFn(dart.fnType(core.Null, [core.List])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let DocumentTobool = () => (DocumentTobool = dart.constFn(dart.fnType(core.bool, [src__model__model.Document])))();
  let SnippetTobool = () => (SnippetTobool = dart.constFn(dart.fnType(core.bool, [src__model__model.Snippet])))();
  let ListOfDocument = () => (ListOfDocument = dart.constFn(core.List$(src__model__model.Document)))();
  let JSArrayOfSnippet = () => (JSArrayOfSnippet = dart.constFn(_interceptors.JSArray$(src__model__model.Snippet)))();
  let SnippetToNull = () => (SnippetToNull = dart.constFn(dart.fnType(core.Null, [src__model__model.Snippet])))();
  let SnippetToint = () => (SnippetToint = dart.constFn(dart.fnType(core.int, [src__model__model.Snippet])))();
  let SnippetAndSnippetToint = () => (SnippetAndSnippetToint = dart.constFn(dart.fnType(core.int, [src__model__model.Snippet, src__model__model.Snippet])))();
  let JSArrayOfMapOfString$dynamic = () => (JSArrayOfMapOfString$dynamic = dart.constFn(_interceptors.JSArray$(MapOfString$dynamic())))();
  let ListOfSnippet = () => (ListOfSnippet = dart.constFn(core.List$(src__model__model.Snippet)))();
  let StreamControllerOfSnippet = () => (StreamControllerOfSnippet = dart.constFn(async.StreamController$(src__model__model.Snippet)))();
  let StreamControllerOfint = () => (StreamControllerOfint = dart.constFn(async.StreamController$(core.int)))();
  let AppViewOfViewSnippetComponent = () => (AppViewOfViewSnippetComponent = dart.constFn(src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent)))();
  let AppViewAndintToAppViewOfViewSnippetComponent = () => (AppViewAndintToAppViewOfViewSnippetComponent = dart.constFn(dart.fnType(AppViewOfViewSnippetComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfViewSnippetComponent = () => (ComponentFactoryOfViewSnippetComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ComponentRefOfViewSnippetComponent = () => (ComponentRefOfViewSnippetComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent)))();
  let AppViewOfViewDocumentListComponent = () => (AppViewOfViewDocumentListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent)))();
  let AppViewAndintToAppViewOfViewDocumentListComponent = () => (AppViewAndintToAppViewOfViewDocumentListComponent = dart.constFn(dart.fnType(AppViewOfViewDocumentListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let VoidToModalComponent = () => (VoidToModalComponent = dart.constFn(dart.fnType(laminate__components__modal__modal.ModalComponent, [])))();
  let VoidToAutoDismissDirective = () => (VoidToAutoDismissDirective = dart.constFn(dart.fnType(auto_dismiss__auto_dismiss.AutoDismissDirective, [])))();
  let VoidToMaterialDialogComponent = () => (VoidToMaterialDialogComponent = dart.constFn(dart.fnType(material_dialog__material_dialog.MaterialDialogComponent, [])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let ComponentFactoryOfViewDocumentListComponent = () => (ComponentFactoryOfViewDocumentListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent)))();
  let VoidToDomService = () => (VoidToDomService = dart.constFn(dart.fnType(utils__browser__dom_service__dom_service.DomService, [])))();
  let VoidToAcxImperativeViewUtils = () => (VoidToAcxImperativeViewUtils = dart.constFn(dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, [])))();
  let VoidToAngular2ManagedZone = () => (VoidToAngular2ManagedZone = dart.constFn(dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let VoidToHtmlElement = () => (VoidToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [])))();
  let VoidToOverlayService = () => (VoidToOverlayService = dart.constFn(dart.fnType(src__laminate__overlay__overlay_service.OverlayService, [])))();
  let VoidToViewDocumentListComponent = () => (VoidToViewDocumentListComponent = dart.constFn(dart.fnType(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent, [])))();
  let ComponentRefOfViewDocumentListComponent = () => (ComponentRefOfViewDocumentListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent)))();
  let TimerToNull = () => (TimerToNull = dart.constFn(dart.fnType(core.Null, [async.Timer])))();
  let AppViewOfViewDocumentComponent = () => (AppViewOfViewDocumentComponent = dart.constFn(src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent)))();
  let AppViewAndintToAppViewOfViewDocumentComponent = () => (AppViewAndintToAppViewOfViewDocumentComponent = dart.constFn(dart.fnType(AppViewOfViewDocumentComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfViewDocumentComponent = () => (ComponentFactoryOfViewDocumentComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__view__view_document__view_document_component.ViewDocumentComponent)))();
  let DurationToString = () => (DurationToString = dart.constFn(dart.fnType(core.String, [core.Duration])))();
  let VoidToViewDocumentComponent = () => (VoidToViewDocumentComponent = dart.constFn(dart.fnType(src__view__view_document__view_document_component.ViewDocumentComponent, [])))();
  let ComponentRefOfViewDocumentComponent = () => (ComponentRefOfViewDocumentComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent)))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  dart.defineLazy(src__network__gateway_service, {
    /*src__network__gateway_service.AuthToken*/get AuthToken() {
      return dart.const(new (OpaqueTokenOfString()).new("Authorization"));
    }
  });
  const _client = Symbol('_client');
  const _request = Symbol('_request');
  src__network__gateway_service.Gateway = class Gateway extends core.Object {
    get url() {
      return this[url];
    }
    set url(value) {
      super.url = value;
    }
    get authToken() {
      return this[authToken$];
    }
    set authToken(value) {
      super.authToken = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      this[headers] = value;
    }
    [_request](method, data) {
      return async.async(src__response.Response, (function* _request() {
        let res = null;
        try {
          switch (method) {
            case "GET":
            {
              res = this[_client].get(dart.notNull(this.url) + dart.notNull(core.String._check(data[$_get]("endPoint"))), {headers: this.headers});
              break;
            }
            case "POST":
            {
              res = this[_client].post(dart.notNull(this.url) + dart.notNull(core.String._check(data[$_get]("endPoint"))), {body: data[$_get]("body"), headers: this.headers});
              break;
            }
            case "PUT":
            {
              res = this[_client].put(dart.notNull(this.url) + dart.notNull(core.String._check(data[$_get]("endPoint"))), {headers: this.headers, body: data[$_get]("body")});
              break;
            }
            case "DELETE":
            {
              res = this[_client].delete(dart.notNull(this.url) + dart.notNull(core.String._check(data[$_get]("endPoint"))), {headers: this.headers});
              break;
            }
            default:
            {
              dart.throw(new core.UnimplementedError.new("Invalid method"));
            }
          }
        } catch (e) {
          core.print(e);
          dart.throw(e);
        }
        return res;
      }).bind(this));
    }
    get(data) {
      return async.async(src__response.Response, (function* get() {
        return this[_request]("GET", data);
      }).bind(this));
    }
    post(data) {
      return async.async(src__response.Response, (function* post() {
        return this[_request]("POST", data);
      }).bind(this));
    }
    put(data) {
      return async.async(src__response.Response, (function* put() {
        return this[_request]("PUT", data);
      }).bind(this));
    }
    delete(data) {
      return async.async(src__response.Response, (function* delete$() {
        return this[_request]("DELETE", data);
      }).bind(this));
    }
  };
  (src__network__gateway_service.Gateway.new = function(client, authToken) {
    this[url] = "https://polosero.pythonanywhere.com";
    this[headers] = null;
    this[_client] = client;
    this[authToken$] = authToken;
    this.headers = new (IdentityMapOfString$String()).from(["Authorization", this.authToken]);
  }).prototype = src__network__gateway_service.Gateway.prototype;
  dart.addTypeTests(src__network__gateway_service.Gateway);
  const url = Symbol("Gateway.url");
  const authToken$ = Symbol("Gateway.authToken");
  const headers = Symbol("Gateway.headers");
  dart.setMethodSignature(src__network__gateway_service.Gateway, () => ({
    __proto__: dart.getMethods(src__network__gateway_service.Gateway.__proto__),
    [_request]: dart.fnType(async.Future$(src__response.Response), [core.String, core.Map$(core.String, dart.dynamic)]),
    get: dart.fnType(async.Future$(src__response.Response), [core.Map$(core.String, core.String)]),
    post: dart.fnType(async.Future$(src__response.Response), [core.Map$(core.String, dart.dynamic)]),
    put: dart.fnType(async.Future$(src__response.Response), [core.Map$(core.String, dart.dynamic)]),
    delete: dart.fnType(async.Future$(src__response.Response), [core.Map$(core.String, core.String)])
  }));
  dart.setFieldSignature(src__network__gateway_service.Gateway, () => ({
    __proto__: dart.getFields(src__network__gateway_service.Gateway.__proto__),
    [_client]: dart.fieldType(browser_client$.BrowserClient),
    url: dart.finalFieldType(core.String),
    authToken: dart.finalFieldType(core.String),
    headers: dart.fieldType(MapOfString$String())
  }));
  const _gateway = Symbol('_gateway');
  src__network__network_service.NetworkService = class NetworkService extends core.Object {
    GetAllDocumentsData() {
      return async.async(core.List, (function* GetAllDocumentsData() {
        let res = (yield this[_gateway].get(new (IdentityMapOfString$String()).from(["endPoint", "/documents/"])));
        return FutureOrOfList()._check(convert.jsonDecode(res.body));
      }).bind(this));
    }
    PostDocument(name) {
      return async.async(core.bool, (function* PostDocument() {
        let res = null;
        try {
          res = (yield this[_gateway].post(new (IdentityMapOfString$dynamic()).from(["endPoint", "/documents/", "body", new (IdentityMapOfString$String()).from(["name", name])])));
        } catch (e) {
          core.print(e);
        }
        return res.statusCode === 200;
      }).bind(this));
    }
    GetDocumentSnippetsData(id) {
      return async.async(core.List, (function* GetDocumentSnippetsData() {
        let res = (yield this[_gateway].get(new (IdentityMapOfString$String()).from(["endPoint", "/documents/" + dart.str(id)])));
        return FutureOrOfList()._check(convert.jsonDecode(res.body));
      }).bind(this));
    }
    LockDocument(id) {
      return async.async(MapOfString$dynamic(), (function* LockDocument() {
        let response = null;
        let res = new (IdentityMapOfString$dynamic()).new();
        try {
          response = (yield this[_gateway].put(new (IdentityMapOfString$dynamic()).from(["endPoint", "/documents/" + dart.str(id) + "/lock"])));
          core.print(response.body);
          res[$_set]("success", response.statusCode === 200);
          if (dart.dtest(res[$_get]("success"))) {
            let data = MapOfString$dynamic()._check(convert.jsonDecode(response.body));
            res[$_set]("fresh", dart.equals(data[$_get]("fresh"), 1));
            let reg = core.RegExp.new("(\\d+)");
            let matches = reg.allMatches(core.String._check(data[$_get]("length")));
            let longestNumber = "";
            for (let m of matches) {
              let match = m.group(0);
              if (match.length > longestNumber.length) longestNumber = match;
            }
            res[$_set]("time", core.int.parse(longestNumber));
          }
        } catch (e) {
        }
        return res;
      }).bind(this));
    }
    UnlockDocument(id) {
      return async.async(dart.void, (function* UnlockDocument() {
        let res = null;
        try {
          res = (yield this[_gateway].delete(new (IdentityMapOfString$String()).from(["endPoint", "/documents/" + dart.str(id) + "/lock"])));
        } catch (e) {
          core.print(e);
        }
      }).bind(this));
    }
    RenameDocument(name, id) {
      return async.async(core.bool, (function* RenameDocument() {
        let res = null;
        try {
          res = (yield this[_gateway].put(new (IdentityMapOfString$dynamic()).from(["endPoint", "/documents/" + dart.str(id), "body", new (IdentityMapOfString$String()).from(["name", name])])));
        } catch (e) {
          core.print(e);
        }
        return res.statusCode === 200;
      }).bind(this));
    }
    DeleteDocument(documentId, snippetId) {
      return async.async(dart.void, (function* DeleteDocument() {
        let res = null;
        try {
          res = (yield this[_gateway].delete(new (IdentityMapOfString$String()).from(["endPoint", "/documents/" + dart.str(documentId) + "/" + dart.str(snippetId)])));
        } catch (e) {
          core.print(e);
        }
      }).bind(this));
    }
    MakeSnippet(id, map) {
      return async.async(dart.void, (function* MakeSnippet() {
        let res = null;
        try {
          res = (yield this[_gateway].post(new (IdentityMapOfString$dynamic()).from(["endPoint", "/documents/" + dart.str(id), "body", map])));
        } catch (e) {
          core.print(e);
        }
      }).bind(this));
    }
    UpdateSnippet(documentId, snippetId, data) {
      return async.async(dart.void, (function* UpdateSnippet() {
        let res = null;
        try {
          res = (yield this[_gateway].put(new (IdentityMapOfString$dynamic()).from(["endPoint", "/documents/" + dart.str(documentId) + "/" + dart.str(snippetId), "body", data])));
        } catch (e) {
          core.print(e);
        }
      }).bind(this));
    }
    RemoveDocument(id) {
      return async.async(dart.void, (function* RemoveDocument() {
        let res = null;
        try {
          res = (yield this[_gateway].delete(new (IdentityMapOfString$String()).from(["endPoint", "/documents/" + dart.str(id)])));
        } catch (e) {
          core.print(e);
        }
      }).bind(this));
    }
  };
  (src__network__network_service.NetworkService.new = function(gateway) {
    this[_gateway] = gateway;
  }).prototype = src__network__network_service.NetworkService.prototype;
  dart.addTypeTests(src__network__network_service.NetworkService);
  dart.setMethodSignature(src__network__network_service.NetworkService, () => ({
    __proto__: dart.getMethods(src__network__network_service.NetworkService.__proto__),
    GetAllDocumentsData: dart.fnType(async.Future$(core.List), []),
    PostDocument: dart.fnType(async.Future$(core.bool), [core.String]),
    GetDocumentSnippetsData: dart.fnType(async.Future$(core.List), [core.int]),
    LockDocument: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.int]),
    UnlockDocument: dart.fnType(async.Future$(dart.void), [core.int]),
    RenameDocument: dart.fnType(async.Future$(core.bool), [core.String, core.int]),
    DeleteDocument: dart.fnType(async.Future$(dart.void), [core.int, core.int]),
    MakeSnippet: dart.fnType(async.Future$(dart.void), [core.int, core.Map$(core.String, dart.dynamic)]),
    UpdateSnippet: dart.fnType(async.Future$(dart.void), [core.int, core.int, core.Map$(core.String, dart.dynamic)]),
    RemoveDocument: dart.fnType(async.Future$(dart.void), [core.int])
  }));
  dart.setFieldSignature(src__network__network_service.NetworkService, () => ({
    __proto__: dart.getFields(src__network__network_service.NetworkService.__proto__),
    [_gateway]: dart.finalFieldType(src__network__gateway_service.Gateway)
  }));
  const _networkService = Symbol('_networkService');
  const _GetDocuments = Symbol('_GetDocuments');
  src__model__model.Model = class Model extends core.Object {
    get documentList() {
      return this[documentList];
    }
    set documentList(value) {
      this[documentList] = value;
    }
    [_GetDocuments]() {
      return async.async(dart.void, (function* _GetDocuments() {
        yield this[_networkService].GetAllDocumentsData().then(core.Null, dart.fn(list => {
          list[$forEach](dart.fn(data => {
            this.documentList[$add](new src__model__model.Document.WithoutSnippets(MapOfString$dynamic()._check(data), this));
          }, dynamicToNull()));
        }, ListToNull()));
        return;
      }).bind(this));
    }
    UpdateDocuments() {
      return async.async(dart.void, (function* UpdateDocuments() {
        if (dart.test(this.documentList[$isEmpty])) {
          yield this[_GetDocuments]();
        } else {
          yield this[_networkService].GetAllDocumentsData().then(core.Null, dart.fn(list => {
            for (let doc of this.documentList) {
              let index = list[$indexWhere](dart.fn(data => dart.equals(dart.dindex(data, "id"), doc.id), dynamicTobool()));
              if (index !== -1) {
                doc.UpdateDocument(MapOfString$dynamic()._check(list[$removeAt](index)));
              } else {
                this.documentList[$remove](doc);
              }
            }
            list[$forEach](dart.fn(data => {
              this.documentList[$add](new src__model__model.Document.WithoutSnippets(MapOfString$dynamic()._check(data), this));
            }, dynamicToNull()));
          }, ListToNull()));
        }
        return;
      }).bind(this));
    }
    NewDocument(name) {
      return async.async(core.bool, (function* NewDocument() {
        if (dart.test(yield this[_networkService].PostDocument(name))) {
          this.UpdateDocuments();
          return true;
        } else {
          return false;
        }
      }).bind(this));
    }
    getDocument(id) {
      return async.async(src__model__model.Document, (function* getDocument() {
        let res = null;
        if (dart.test(this.documentList[$isEmpty])) {
          yield this.UpdateDocuments();
        }
        res = this.documentList[$where](dart.fn(d => d.id == id, DocumentTobool()))[$toList]()[$first];
        if (res == null) {
          yield this.UpdateDocuments();
          res = this.documentList[$where](dart.fn(d => d.id == id, DocumentTobool()))[$toList]()[$first];
        }
        if (res != null) {
          res.UpdateSnippets();
        }
        return res;
      }).bind(this));
    }
    LockDocument(id) {
      return async.async(MapOfString$dynamic(), (function* LockDocument() {
        let data = (yield this[_networkService].LockDocument(id));
        if (dart.dtest(data[$_get]("success"))) {
          yield this.UpdateDocuments();
        }
        return data;
      }).bind(this));
    }
    UnlockDocument(id) {
      return async.async(dart.void, (function* UnlockDocument() {
        yield this[_networkService].UnlockDocument(id);
      }).bind(this));
    }
    SaveDocument(oId, document) {
      return async.async(core.bool, (function* SaveDocument() {
        let originalDocument = (yield this.getDocument(oId)), newDocument = new src__model__model.Document.new(document, this);
        let renamed = true;
        if (originalDocument.name != newDocument.name) renamed = (yield this[_networkService].RenameDocument(newDocument.name, oId));
        for (let snip1 of originalDocument.snippets) {
          let index = newDocument.snippets[$indexWhere](dart.fn(snip2 => snip1.snippetId == snip2.snippetId, SnippetTobool()));
          if (index !== -1) {
            let data = src__model__model.Snippet.Difference(snip1, newDocument.snippets[$_get](index));
            if (data != null) {
              yield this[_networkService].UpdateSnippet(oId, snip1.snippetId, data);
            }
            newDocument.snippets[$removeAt](index);
          } else {
            yield this[_networkService].DeleteDocument(oId, snip1.snippetId);
          }
        }
        for (let snip of newDocument.snippets) {
          yield this[_networkService].MakeSnippet(oId, snip.toMap());
        }
        return renamed;
      }).bind(this));
    }
    RemoveDocument(id) {
      return async.async(dart.dynamic, (function* RemoveDocument() {
        yield this[_networkService].RemoveDocument(id);
        this.UpdateDocuments();
      }).bind(this));
    }
  };
  (src__model__model.Model.new = function(networkService) {
    this[documentList] = null;
    this[_networkService] = networkService;
    this.documentList = JSArrayOfDocument().of([]);
  }).prototype = src__model__model.Model.prototype;
  dart.addTypeTests(src__model__model.Model);
  const documentList = Symbol("Model.documentList");
  dart.setMethodSignature(src__model__model.Model, () => ({
    __proto__: dart.getMethods(src__model__model.Model.__proto__),
    [_GetDocuments]: dart.fnType(async.Future$(dart.void), []),
    UpdateDocuments: dart.fnType(async.Future$(dart.void), []),
    NewDocument: dart.fnType(async.Future$(core.bool), [core.String]),
    getDocument: dart.fnType(async.Future$(src__model__model.Document), [core.int]),
    LockDocument: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.int]),
    UnlockDocument: dart.fnType(async.Future$(dart.void), [core.int]),
    SaveDocument: dart.fnType(async.Future$(core.bool), [core.int, src__model__model.Document]),
    RemoveDocument: dart.fnType(dart.void, [core.int])
  }));
  dart.setFieldSignature(src__model__model.Model, () => ({
    __proto__: dart.getFields(src__model__model.Model.__proto__),
    documentList: dart.fieldType(ListOfDocument()),
    [_networkService]: dart.fieldType(src__network__network_service.NetworkService)
  }));
  const _GetSnippets = Symbol('_GetSnippets');
  src__model__model.Document = class Document extends core.Object {
    get model() {
      return this[model$];
    }
    set model(value) {
      this[model$] = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get hasSnippets() {
      return this[hasSnippets];
    }
    set hasSnippets(value) {
      this[hasSnippets] = value;
    }
    get snippets() {
      return this[snippets];
    }
    set snippets(value) {
      this[snippets] = value;
    }
    [_GetSnippets]() {
      return async.async(dart.void, (function* _GetSnippets() {
        this.hasSnippets = true;
        this.model[_networkService].GetDocumentSnippetsData(this.id).then(core.Null, dart.fn(list => {
          list[$forEach](dart.fn(data => {
            this.snippets[$add](new src__model__model.Snippet.FromMap(MapOfString$dynamic()._check(data), this));
          }, dynamicToNull()));
        }, ListToNull()));
      }).bind(this));
    }
    NormalizeOrder() {
      let i = 1;
      this.snippets[$forEach](dart.fn(snip => snip.order = i++, SnippetToint()));
    }
    DeleteSnippetById(id) {
      this.snippets[$removeWhere](dart.fn(snip => snip.snippetId == id, SnippetTobool()));
      this.NormalizeOrder();
    }
    Swap(a, b) {
      let temporary = this.snippets[$_get](a);
      this.snippets[$_set](a, this.snippets[$_get](b));
      this.snippets[$_set](b, temporary);
      this.NormalizeOrder();
    }
    UpdateDocument(map) {
      this.name = core.String._check(map[$_get]("name"));
      if (dart.test(this.hasSnippets)) this.UpdateSnippets();
    }
    UpdateSnippets() {
      return async.async(dart.void, (function* UpdateSnippets() {
        if (dart.test(this.hasSnippets)) {
          yield this.model[_networkService].GetDocumentSnippetsData(this.id).then(core.Null, dart.fn(list => {
            for (let snip of this.snippets) {
              let index = list[$indexWhere](dart.fn(data => dart.equals(dart.dindex(data, "id"), snip.snippetId), dynamicTobool()));
              if (index !== -1) {
                snip.UpdateSnippet(MapOfString$dynamic()._check(list[$removeAt](index)));
              } else {
                this.snippets[$remove](snip);
              }
            }
            list[$forEach](dart.fn(data => {
              this.snippets[$add](new src__model__model.Snippet.FromMap(MapOfString$dynamic()._check(data), this));
            }, dynamicToNull()));
            this.SortSnippets();
            this.NormalizeOrder();
          }, ListToNull()));
        } else {
          yield this[_GetSnippets]();
        }
      }).bind(this));
    }
    SortSnippets() {
      this.snippets[$sort](dart.fn((a, b) => dart.notNull(a.order) - dart.notNull(b.order), SnippetAndSnippetToint()));
    }
    MaxSnippetId() {
      let res = 0;
      for (let snip of this.snippets) {
        if (dart.notNull(res) < dart.notNull(snip.snippetId)) res = snip.snippetId;
      }
      return res;
    }
    toMap() {
      let res = null;
      res[$_set]("name", this.name);
      let snips = JSArrayOfMapOfString$dynamic().of([]);
      for (let snip of this.snippets) {
        snips[$add](snip.toMap());
      }
      res[$_set]("snippets", snips);
      return res;
    }
  };
  (src__model__model.Document.WithoutSnippets = function(map, model) {
    this[id] = null;
    this[name] = null;
    this[hasSnippets] = null;
    this[snippets] = null;
    this[model$] = model;
    this.id = core.int._check(map[$_get]("id"));
    this.name = core.String._check(map[$_get]("name"));
    this.snippets = JSArrayOfSnippet().of([]);
    this.hasSnippets = false;
  }).prototype = src__model__model.Document.prototype;
  (src__model__model.Document.new = function(doc, model) {
    this[id] = null;
    this[name] = null;
    this[hasSnippets] = null;
    this[snippets] = null;
    this[model$] = model;
    this.id = doc.id;
    this.name = doc.name;
    this.hasSnippets = doc.hasSnippets;
    this.snippets = JSArrayOfSnippet().of([]);
    doc.snippets[$forEach](dart.fn(snippet => {
      this.snippets[$add](new src__model__model.Snippet.new(snippet, this));
    }, SnippetToNull()));
  }).prototype = src__model__model.Document.prototype;
  dart.addTypeTests(src__model__model.Document);
  const model$ = Symbol("Document.model");
  const id = Symbol("Document.id");
  const name = Symbol("Document.name");
  const hasSnippets = Symbol("Document.hasSnippets");
  const snippets = Symbol("Document.snippets");
  dart.setMethodSignature(src__model__model.Document, () => ({
    __proto__: dart.getMethods(src__model__model.Document.__proto__),
    [_GetSnippets]: dart.fnType(async.Future$(dart.void), []),
    NormalizeOrder: dart.fnType(dart.void, []),
    DeleteSnippetById: dart.fnType(dart.void, [core.int]),
    Swap: dart.fnType(dart.void, [core.int, core.int]),
    UpdateDocument: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    UpdateSnippets: dart.fnType(async.Future$(dart.void), []),
    SortSnippets: dart.fnType(dart.void, []),
    MaxSnippetId: dart.fnType(core.int, []),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__model__model.Document, () => ({
    __proto__: dart.getFields(src__model__model.Document.__proto__),
    model: dart.fieldType(src__model__model.Model),
    id: dart.fieldType(core.int),
    name: dart.fieldType(core.String),
    hasSnippets: dart.fieldType(core.bool),
    snippets: dart.fieldType(ListOfSnippet())
  }));
  const _content = Symbol('_content');
  src__model__model.Snippet = class Snippet extends core.Object {
    get snippetId() {
      return this[snippetId];
    }
    set snippetId(value) {
      this[snippetId] = value;
    }
    get documentId() {
      return this[documentId];
    }
    set documentId(value) {
      this[documentId] = value;
    }
    get order() {
      return this[order];
    }
    set order(value) {
      this[order] = value;
    }
    get document() {
      return this[document$];
    }
    set document(value) {
      this[document$] = value;
    }
    get html() {
      return this[html$];
    }
    set html(value) {
      this[html$] = value;
    }
    get content() {
      return this[_content];
    }
    set content(val) {
      this[_content] = val;
      this.html = src__html_renderer.markdownToHtml(this[_content]);
    }
    UpdateSnippet(map) {
      this.content = core.String._check(map[$_get]("content"));
      this.order = core.int._check(map[$_get]("document_order"));
    }
    toMap() {
      let res = new (IdentityMapOfString$dynamic()).new();
      res[$_set]("order", dart.toString(this.order));
      res[$_set]("content", this[_content]);
      return res;
    }
    static Difference(oldS, newS) {
      let dataO = oldS.toMap(), dataN = newS.toMap(), res = new (IdentityMapOfString$dynamic()).new();
      if (!dart.equals(dataO[$_get]("order"), dataN[$_get]("order"))) {
        res[$_set]("order", dataN[$_get]("order"));
      }
      if (!dart.equals(dataO[$_get]("content"), dataN[$_get]("content"))) {
        res[$_set]("content", dataN[$_get]("content"));
      }
      return dart.test(res[$isEmpty]) ? null : res;
    }
  };
  (src__model__model.Snippet.FromMap = function(map, document) {
    this[snippetId] = null;
    this[documentId] = null;
    this[order] = null;
    this[_content] = null;
    this[html$] = null;
    this[document$] = document;
    this.snippetId = core.int._check(map[$_get]("id"));
    this.documentId = core.int._check(map[$_get]("document_id"));
    this.content = core.String._check(map[$_get]("content"));
    this.order = core.int._check(map[$_get]("document_order"));
  }).prototype = src__model__model.Snippet.prototype;
  (src__model__model.Snippet.new = function(snip, document) {
    this[snippetId] = null;
    this[documentId] = null;
    this[order] = null;
    this[_content] = null;
    this[html$] = null;
    this[document$] = document;
    this.snippetId = snip.snippetId;
    this.documentId = snip.snippetId;
    this.content = snip.content;
    this.order = snip.order;
  }).prototype = src__model__model.Snippet.prototype;
  dart.addTypeTests(src__model__model.Snippet);
  const snippetId = Symbol("Snippet.snippetId");
  const documentId = Symbol("Snippet.documentId");
  const order = Symbol("Snippet.order");
  const document$ = Symbol("Snippet.document");
  const html$ = Symbol("Snippet.html");
  dart.setMethodSignature(src__model__model.Snippet, () => ({
    __proto__: dart.getMethods(src__model__model.Snippet.__proto__),
    UpdateSnippet: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(src__model__model.Snippet, () => ({
    __proto__: dart.getGetters(src__model__model.Snippet.__proto__),
    content: core.String
  }));
  dart.setSetterSignature(src__model__model.Snippet, () => ({
    __proto__: dart.getSetters(src__model__model.Snippet.__proto__),
    content: core.String
  }));
  dart.setFieldSignature(src__model__model.Snippet, () => ({
    __proto__: dart.getFields(src__model__model.Snippet.__proto__),
    snippetId: dart.fieldType(core.int),
    documentId: dart.fieldType(core.int),
    order: dart.fieldType(core.int),
    document: dart.fieldType(src__model__model.Document),
    [_content]: dart.fieldType(core.String),
    html: dart.fieldType(core.String)
  }));
  src__routes_path.RoutePaths = class RoutePaths extends core.Object {};
  (src__routes_path.RoutePaths.new = function() {
  }).prototype = src__routes_path.RoutePaths.prototype;
  dart.addTypeTests(src__routes_path.RoutePaths);
  dart.defineLazy(src__routes_path.RoutePaths, {
    /*src__routes_path.RoutePaths.DOCUMENT_LIST*/get DOCUMENT_LIST() {
      return new src__route_path.RoutePath.new({path: "document_list"});
    },
    /*src__routes_path.RoutePaths.DOCUMENT_VIEW*/get DOCUMENT_VIEW() {
      return new src__route_path.RoutePath.new({path: "document_view/:id"});
    }
  });
  const _el = Symbol('_el');
  const _resize = Symbol('_resize');
  src__view__view_document__view_snippet__elastic_directive.ElasticDirective = class ElasticDirective extends core.Object {
    onInput() {
      this[_resize]();
    }
    onFocus() {
      ;
      this[_resize]();
    }
    [_resize]() {
      this[_el].style[$height] = "auto";
      this[_el].style[$height] = dart.str(dart.notNull(this[_el][$scrollHeight]) - dart.notNull(this[_el][$offsetHeight]) + dart.notNull(this[_el].clientHeight)) + "px";
    }
  };
  (src__view__view_document__view_snippet__elastic_directive.ElasticDirective.new = function(el) {
    this[_el] = el;
  }).prototype = src__view__view_document__view_snippet__elastic_directive.ElasticDirective.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__elastic_directive.ElasticDirective);
  dart.setMethodSignature(src__view__view_document__view_snippet__elastic_directive.ElasticDirective, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__elastic_directive.ElasticDirective.__proto__),
    onInput: dart.fnType(dart.void, []),
    onFocus: dart.fnType(dart.void, []),
    [_resize]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__elastic_directive.ElasticDirective, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__elastic_directive.ElasticDirective.__proto__),
    [_el]: dart.finalFieldType(html.Element)
  }));
  const _selectMe = Symbol('_selectMe');
  const _removeMe = Symbol('_removeMe');
  src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent = class ViewSnippetComponent extends core.Object {
    get snippet() {
      return this[snippet];
    }
    set snippet(value) {
      this[snippet] = value;
    }
    get showMetadata() {
      return this[showMetadata];
    }
    set showMetadata(value) {
      this[showMetadata] = value;
    }
    get allowEdit() {
      return this[allowEdit];
    }
    set allowEdit(value) {
      this[allowEdit] = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    get first() {
      return this[first];
    }
    set first(value) {
      this[first] = value;
    }
    get last() {
      return this[last];
    }
    set last(value) {
      this[last] = value;
    }
    get selectMe() {
      return this[_selectMe].stream;
    }
    get removeMe() {
      return this[_removeMe].stream;
    }
    get viewHTML() {
      return !dart.test(this.allowEdit) || dart.test(this.allowEdit) && !dart.test(this.selected);
    }
    swap(up) {
      this.snippet.document.Swap(dart.notNull(this.snippet.order) - 1, dart.test(up) ? dart.notNull(this.snippet.order) - 2 : this.snippet.order);
    }
    select() {
      if (dart.test(this.allowEdit) && !dart.test(this.selected)) {
        this[_selectMe].add(this.snippet);
      }
    }
    deselect() {
      this[_selectMe].add(null);
    }
    destroyMe() {
      this[_removeMe].add(this.snippet.snippetId);
    }
    ngOnDestroy() {
      this[_removeMe].close();
      this[_selectMe].close();
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent.new = function() {
    this[snippet] = null;
    this[showMetadata] = null;
    this[allowEdit] = null;
    this[selected] = null;
    this[first] = null;
    this[last] = null;
    this[_selectMe] = StreamControllerOfSnippet().new();
    this[_removeMe] = StreamControllerOfint().new();
  }).prototype = src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent);
  const snippet = Symbol("ViewSnippetComponent.snippet");
  const showMetadata = Symbol("ViewSnippetComponent.showMetadata");
  const allowEdit = Symbol("ViewSnippetComponent.allowEdit");
  const selected = Symbol("ViewSnippetComponent.selected");
  const first = Symbol("ViewSnippetComponent.first");
  const last = Symbol("ViewSnippetComponent.last");
  src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent.__proto__),
    swap: dart.fnType(dart.void, [core.bool]),
    select: dart.fnType(dart.void, []),
    deselect: dart.fnType(dart.void, []),
    destroyMe: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent, () => ({
    __proto__: dart.getGetters(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent.__proto__),
    selectMe: async.Stream$(src__model__model.Snippet),
    removeMe: async.Stream$(core.int),
    viewHTML: core.bool
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent.__proto__),
    snippet: dart.fieldType(src__model__model.Snippet),
    showMetadata: dart.fieldType(core.bool),
    allowEdit: dart.fieldType(core.bool),
    selected: dart.fieldType(core.bool),
    first: dart.fieldType(core.bool),
    last: dart.fieldType(core.bool),
    [_selectMe]: dart.finalFieldType(StreamControllerOfSnippet()),
    [_removeMe]: dart.finalFieldType(StreamControllerOfint())
  }));
  src__view__view_document__time_pipe.TimePipe = class TimePipe extends src__core__change_detection__pipe_transform.PipeTransform {
    transform(d) {
      return dart.toString(d.inMinutes) + ":" + (d.inSeconds[$modulo](60) > 9 ? d.inSeconds[$modulo](60)[$toString]() : "0" + d.inSeconds[$modulo](60)[$toString]());
    }
  };
  (src__view__view_document__time_pipe.TimePipe.new = function() {
  }).prototype = src__view__view_document__time_pipe.TimePipe.prototype;
  dart.addTypeTests(src__view__view_document__time_pipe.TimePipe);
  dart.setMethodSignature(src__view__view_document__time_pipe.TimePipe, () => ({
    __proto__: dart.getMethods(src__view__view_document__time_pipe.TimePipe.__proto__),
    transform: dart.fnType(core.String, [core.Duration])
  }));
  dart.defineLazy(src__network__gateway_service$46template, {
    /*src__network__gateway_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__network__gateway_service$46template.initReflector = function() {
    if (dart.test(src__network__gateway_service$46template._visited)) {
      return;
    }
    src__network__gateway_service$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(src__network__network_service$46template, {
    /*src__network__network_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__network__network_service$46template.initReflector = function() {
    if (dart.test(src__network__network_service$46template._visited)) {
      return;
    }
    src__network__network_service$46template._visited = true;
    src__network__gateway_service$46template.initReflector();
  };
  dart.defineLazy(src__model__model$46template, {
    /*src__model__model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__model__model$46template.initReflector = function() {
    if (dart.test(src__model__model$46template._visited)) {
      return;
    }
    src__model__model$46template._visited = true;
    src__network__network_service$46template.initReflector();
  };
  dart.defineLazy(src__routes_path$46template, {
    /*src__routes_path$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__routes_path$46template.initReflector = function() {
    if (dart.test(src__routes_path$46template._visited)) {
      return;
    }
    src__routes_path$46template._visited = true;
    angular_router$46template.initReflector();
  };
  dart.defineLazy(src__view__view_document__time_pipe$46template, {
    /*src__view__view_document__time_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__view__view_document__time_pipe$46template.initReflector = function() {
    if (dart.test(src__view__view_document__time_pipe$46template._visited)) {
      return;
    }
    src__view__view_document__time_pipe$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(src__view__view_document__view_snippet__elastic_directive$46template, {
    /*src__view__view_document__view_snippet__elastic_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__view__view_document__view_snippet__elastic_directive$46template.initReflector = function() {
    if (dart.test(src__view__view_document__view_snippet__elastic_directive$46template._visited)) {
      return;
    }
    src__view__view_document__view_snippet__elastic_directive$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(src__view__view_document__view_snippet__view_snippet_component$46template, {
    /*src__view__view_document__view_snippet__view_snippet_component$46template.styles$ViewSnippetComponent*/get styles$ViewSnippetComponent() {
      return [".snippet._ngcontent-%ID%{width:98vw;height:auto;overflow:auto}.snippet-content._ngcontent-%ID%{margin-left:25%;width:50%;float:left}.snippet-content._ngcontent-%ID% textarea._ngcontent-%ID%{resize:none;width:100%}.snippet-buttons._ngcontent-%ID%{position:relative;margin-left:75%;width:40px}"];
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  let const$;
  src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0 = class ViewViewSnippetComponent0 extends src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent1, AppViewAndintToAppViewOfViewSnippetComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.snippet != null;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("snippet-comp"));
    let t = src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType;
    t == null ? src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:Internal_lore/lib/src/view/view_document/view_snippet/view_snippet_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__view__view_document__view_snippet__view_snippet_component$46template.styles$ViewSnippetComponent) : t;
    this.setupComponentType(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType);
  }).prototype = src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0);
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0, {
    /*src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent0 = function(parentView, parentIndex) {
    return new src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document__view_snippet__view_snippet_component$46template, {
    /*src__view__view_document__view_snippet__view_snippet_component$46template._ViewSnippetComponentNgFactory*/get _ViewSnippetComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfViewSnippetComponent()).new("snippet-comp", dart.fn(src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponentHost0, AppViewAndintToAppViewOfViewSnippetComponent())));
    }
  });
  dart.copyProperties(src__view__view_document__view_snippet__view_snippet_component$46template, {
    get ViewSnippetComponentNgFactory() {
      return src__view__view_document__view_snippet__view_snippet_component$46template._ViewSnippetComponentNgFactory;
    }
  });
  const _appEl_3 = Symbol('_appEl_3');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _expr_0 = Symbol('_expr_0');
  const _anchor_1 = Symbol('_anchor_1');
  const _el_1_0 = Symbol('_el_1_0');
  src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1 = class _ViewViewSnippetComponent1 extends src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      _el_0.className = "snippet";
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_anchor_1] = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](this[_anchor_1]);
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_2.className = "snippet-content";
      this.addShimC(_el_2);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      _el_2[$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent3, AppViewAndintToAppViewOfViewSnippetComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      _el_2[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent4, AppViewAndintToAppViewOfViewSnippetComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent5, AppViewAndintToAppViewOfViewSnippetComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.showMetadata === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        if (currVal_0) {
          let doc = html.document;
          this[_el_1_0] = html.DivElement._check(doc[$createElement]("div"));
          this[_el_1_0].className = "metadata";
          this.addShimC(this[_el_1_0]);
          this.addInlinedNodes(this[_anchor_1], JSArrayOfNode().of([this[_el_1_0]]));
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_1_0]]));
        }
        this[_expr_0] = currVal_0;
      }
      this[_NgIf_3_9].ngIf = _ctx.viewHTML;
      this[_NgIf_4_9].ngIf = !dart.test(_ctx.viewHTML);
      this[_NgIf_5_9].ngIf = _ctx.allowEdit;
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1.new = function(parentView, parentIndex) {
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0] = false;
    this[_anchor_1] = null;
    this[_el_1_0] = null;
    src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType;
  }).prototype = src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1);
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1.__proto__),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_anchor_1]: dart.fieldType(html.Comment),
    [_el_1_0]: dart.fieldType(html.DivElement)
  }));
  src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent1 = function(parentView, parentIndex) {
    return new src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent1.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3 = class _ViewViewSnippetComponent3 extends src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_0], "align", "left");
      this.addShimC(this[_el_0]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'select')));
      this.init0(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.snippet.html;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setProp(this[_el_0], "innerHTML", src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeHtml(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_el_0] = null;
    src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType;
  }).prototype = src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3);
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(html.DivElement)
  }));
  src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent3 = function(parentView, parentIndex) {
    return new src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent3.new(parentView, parentIndex);
  };
  const _DefaultValueAccessor_1_5 = Symbol('_DefaultValueAccessor_1_5');
  const _NgValueAccessor_1_6 = Symbol('_NgValueAccessor_1_6');
  const _NgModel_1_7 = Symbol('_NgModel_1_7');
  const _ElasticDirective_1_8 = Symbol('_ElasticDirective_1_8');
  const _compView_2 = Symbol('_compView_2');
  const _AcxDarkTheme_2_5 = Symbol('_AcxDarkTheme_2_5');
  const _MaterialButtonComponent_2_6 = Symbol('_MaterialButtonComponent_2_6');
  const _compView_3 = Symbol('_compView_3');
  const _MaterialIconComponent_3_5 = Symbol('_MaterialIconComponent_3_5');
  let const$0;
  let const$1;
  const _handle_input_1_2 = Symbol('_handle_input_1_2');
  const _handle_ngModelChange_1_0 = Symbol('_handle_ngModelChange_1_0');
  let const$2;
  src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4 = class _ViewViewSnippetComponent4 extends src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__core__linker__app_view.createAndAppend(doc, "textarea", _el_0);
      this.createAttr(_el_1, "autofocus", "");
      this.createAttr(_el_1, "elastic", "");
      this.addShimC(html.HtmlElement._check(_el_1));
      this[_DefaultValueAccessor_1_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(html.HtmlElement._check(_el_1));
      this[_NgValueAccessor_1_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_1_5]]);
      this[_NgModel_1_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_1_6]);
      this[_ElasticDirective_1_8] = new src__view__view_document__view_snippet__elastic_directive.ElasticDirective.new(_el_1);
      this[_compView_2] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      this.createAttr(_el_2, "icon", "");
      this.addShimC(_el_2);
      this[_AcxDarkTheme_2_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_2_6] = new material_button__material_button.MaterialButtonComponent.new(_el_2, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_2_5]), this[_compView_2].ref, null);
      this[_compView_3] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      this.createAttr(_el_3, "icon", "done");
      this.createAttr(_el_3, "size", "small");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create(this[_MaterialIconComponent_3_5], []);
      this[_compView_2].create(this[_MaterialButtonComponent_2_6], [JSArrayOfHtmlElement().of([_el_3])]);
      _el_1[$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_1_5], 'touchHandler')));
      _el_1[$addEventListener]("input", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_1_2)));
      _el_1[$addEventListener]("focus", this.eventHandler0(html.Event, dart.bind(this[_ElasticDirective_1_8], 'onFocus')));
      let subscription_0 = this[_NgModel_1_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_1_0)));
      let subscription_1 = this[_MaterialButtonComponent_2_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'deselect')));
      this.init([_el_0], [subscription_0, subscription_1]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$2 || (const$2 = dart.const(new (MultiTokenOfControlValueAccessor()).new("NgValueAccessor")))) && 1 === nodeIndex) {
        return this[_NgValueAccessor_1_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 1 === nodeIndex) {
        return this[_NgModel_1_7];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_AcxDarkTheme_2_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialButtonComponent_2_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_1_7].model = _ctx.snippet.content;
      this[_NgModel_1_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_1_7].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_2_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5].icon = "done";
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroy();
      this[_compView_3].destroy();
    }
    [_handle_ngModelChange_1_0]($event) {
      this.ctx.snippet.content = core.String._check($event);
    }
    [_handle_input_1_2]($event) {
      this[_DefaultValueAccessor_1_5].handleChange(core.String._check(dart.dload(dart.dload($event, 'target'), 'value')));
      this[_ElasticDirective_1_8].onInput();
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4.new = function(parentView, parentIndex) {
    this[_DefaultValueAccessor_1_5] = null;
    this[_NgValueAccessor_1_6] = null;
    this[_NgModel_1_7] = null;
    this[_ElasticDirective_1_8] = null;
    this[_compView_2] = null;
    this[_AcxDarkTheme_2_5] = null;
    this[_MaterialButtonComponent_2_6] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType;
  }).prototype = src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4);
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_1_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4.__proto__),
    [_DefaultValueAccessor_1_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_1_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_1_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_ElasticDirective_1_8]: dart.fieldType(src__view__view_document__view_snippet__elastic_directive.ElasticDirective),
    [_compView_2]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_2_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_2_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_3]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent4 = function(parentView, parentIndex) {
    return new src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent4.new(parentView, parentIndex);
  };
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _AcxDarkTheme_3_5 = Symbol('_AcxDarkTheme_3_5');
  const _MaterialButtonComponent_3_6 = Symbol('_MaterialButtonComponent_3_6');
  const _compView_4 = Symbol('_compView_4');
  const _MaterialIconComponent_4_5 = Symbol('_MaterialIconComponent_4_5');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  let const$3;
  let const$4;
  src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5 = class _ViewViewSnippetComponent5 extends src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      _el_0.className = "snippet-buttons";
      this.addShimC(html.HtmlElement._check(_el_0));
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent6, AppViewAndintToAppViewOfViewSnippetComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = src__core__linker__app_view.createAndAppend(doc, "br", _el_0);
      this.addShimE(_el_2);
      this[_compView_3] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      _el_0[$append](_el_3);
      this.createAttr(_el_3, "icon", "");
      this.createAttr(_el_3, "raised", "");
      this.addShimC(_el_3);
      this[_AcxDarkTheme_3_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_3_6] = new material_button__material_button.MaterialButtonComponent.new(_el_3, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_3_5]), this[_compView_3].ref, null);
      this[_compView_4] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      this.createAttr(_el_4, "icon", "cancel");
      this.createAttr(_el_4, "size", "small");
      this.addShimC(_el_4);
      this[_MaterialIconComponent_4_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_4);
      this[_compView_4].create(this[_MaterialIconComponent_4_5], []);
      this[_compView_3].create(this[_MaterialButtonComponent_3_6], [JSArrayOfHtmlElement().of([_el_4])]);
      let _el_5 = src__core__linker__app_view.createAndAppend(doc, "br", _el_0);
      this.addShimE(_el_5);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent7, AppViewAndintToAppViewOfViewSnippetComponent()));
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let subscription_0 = this[_MaterialButtonComponent_3_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'destroyMe')));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_AcxDarkTheme_3_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_MaterialButtonComponent_3_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.first);
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_3_6].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_3_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_4_5].icon = "cancel";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      this[_NgIf_6_9].ngIf = !dart.test(_ctx.last);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_compView_3].detectHostChanges(firstCheck);
      this[_compView_3].detectChanges();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_3].destroy();
      this[_compView_4].destroy();
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_compView_3] = null;
    this[_AcxDarkTheme_3_5] = null;
    this[_MaterialButtonComponent_3_6] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType;
  }).prototype = src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5);
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5.__proto__),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_3]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_3_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_3_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_4]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_4_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent5 = function(parentView, parentIndex) {
    return new src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent5.new(parentView, parentIndex);
  };
  const _compView_0 = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialIconComponent_1_5 = Symbol('_MaterialIconComponent_1_5');
  let const$5;
  let const$6;
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6 = class _ViewViewSnippetComponent6 extends src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.createAttr(_el_0, "icon", "");
      this.createAttr(_el_0, "raised", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(_el_0, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0].ref, null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      this.createAttr(_el_1, "icon", "keyboard_arrow_up");
      this.createAttr(_el_1, "size", "small");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfHtmlElement().of([_el_1])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_0_6].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "keyboard_arrow_up";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_compView_1].destroy();
    }
    [_handle_trigger_0_0]($event) {
      this.ctx.swap(true);
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType;
  }).prototype = src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6);
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent6 = function(parentView, parentIndex) {
    return new src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent6.new(parentView, parentIndex);
  };
  let const$7;
  let const$8;
  src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7 = class _ViewViewSnippetComponent7 extends src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent) {
    build() {
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.createAttr(_el_0, "icon", "");
      this.createAttr(_el_0, "raised", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.parentView.injectorGet(const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(_el_0, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this[_compView_0].ref, null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      this.createAttr(_el_1, "icon", "keyboard_arrow_down");
      this.createAttr(_el_1, "size", "small");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], [JSArrayOfHtmlElement().of([_el_1])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_0_6].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "keyboard_arrow_down";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_compView_1].destroy();
    }
    [_handle_trigger_0_0]($event) {
      this.ctx.swap(false);
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0._renderType;
  }).prototype = src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7);
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponent7 = function(parentView, parentIndex) {
    return new src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponent7.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document__view_snippet__view_snippet_component$46template, {
    /*src__view__view_document__view_snippet__view_snippet_component$46template.styles$ViewSnippetComponentHost*/get styles$ViewSnippetComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ViewSnippetComponent_0_5 = Symbol('_ViewSnippetComponent_0_5');
  src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0 = class _ViewViewSnippetComponentHost0 extends src__core__linker__app_view.AppView$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent) {
    build() {
      this[_compView_0] = new src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ViewSnippetComponent_0_5] = new src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent.new();
      this[_compView_0].create(this[_ViewSnippetComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfViewSnippetComponent()).new(0, this, this.rootEl, this[_ViewSnippetComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_ViewSnippetComponent_0_5].ngOnDestroy();
    }
  };
  (src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ViewSnippetComponent_0_5] = null;
    src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0.prototype;
  dart.addTypeTests(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0);
  dart.setMethodSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0, () => ({
    __proto__: dart.getFields(src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0),
    [_ViewSnippetComponent_0_5]: dart.fieldType(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent)
  }));
  src__view__view_document__view_snippet__view_snippet_component$46template.viewFactory_ViewSnippetComponentHost0 = function(parentView, parentIndex) {
    return new src__view__view_document__view_snippet__view_snippet_component$46template._ViewViewSnippetComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document__view_snippet__view_snippet_component$46template, {
    /*src__view__view_document__view_snippet__view_snippet_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__view__view_document__view_snippet__view_snippet_component$46template.initReflector = function() {
    if (dart.test(src__view__view_document__view_snippet__view_snippet_component$46template._visited)) {
      return;
    }
    src__view__view_document__view_snippet__view_snippet_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent), src__view__view_document__view_snippet__view_snippet_component$46template.ViewSnippetComponentNgFactory);
    src__view__view_document__view_snippet__elastic_directive$46template.initReflector();
    src__model__model$46template.initReflector();
    angular$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  const _router = Symbol('_router');
  src__view__view_document_list__view_document_list_component.ViewDocumentListComponent = class ViewDocumentListComponent extends core.Object {
    get newDocumentName() {
      return this[newDocumentName];
    }
    set newDocumentName(value) {
      this[newDocumentName] = value;
    }
    get showDialog() {
      return this[showDialog];
    }
    set showDialog(value) {
      this[showDialog] = value;
    }
    get showError() {
      return this[showError];
    }
    set showError(value) {
      this[showError] = value;
    }
    get model() {
      return this[model$0];
    }
    set model(value) {
      this[model$0] = value;
    }
    viewDocument(documentId) {
      return this[_router].navigate(src__routes_path.RoutePaths.DOCUMENT_VIEW.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.str(documentId)])}));
    }
    close() {
      this.newDocumentName.value = "";
      this.showDialog = false;
      this.showError = false;
    }
    onSubmit(data) {
      return async.async(dart.dynamic, (function* onSubmit() {
        if (dart.test(yield this.model.NewDocument(data))) {
          this.close();
        } else {
          this.showError = true;
        }
      }).bind(this));
    }
    reload() {
      this.model.UpdateDocuments();
    }
    onActivate(RouterState, current) {
      this.model.UpdateDocuments();
    }
  };
  (src__view__view_document_list__view_document_list_component.ViewDocumentListComponent.new = function(model, router) {
    this[newDocumentName] = null;
    this[showDialog] = false;
    this[showError] = false;
    this[model$0] = model;
    this[_router] = router;
  }).prototype = src__view__view_document_list__view_document_list_component.ViewDocumentListComponent.prototype;
  dart.addTypeTests(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent);
  const newDocumentName = Symbol("ViewDocumentListComponent.newDocumentName");
  const showDialog = Symbol("ViewDocumentListComponent.showDialog");
  const showError = Symbol("ViewDocumentListComponent.showError");
  const model$0 = Symbol("ViewDocumentListComponent.model");
  src__view__view_document_list__view_document_list_component.ViewDocumentListComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent, () => ({
    __proto__: dart.getMethods(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent.__proto__),
    viewDocument: dart.fnType(dart.void, [core.int]),
    close: dart.fnType(dart.void, []),
    onSubmit: dart.fnType(dart.void, [core.String]),
    reload: dart.fnType(dart.void, []),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  dart.setFieldSignature(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent, () => ({
    __proto__: dart.getFields(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent.__proto__),
    newDocumentName: dart.fieldType(html.InputElement),
    showDialog: dart.fieldType(core.bool),
    showError: dart.fieldType(core.bool),
    model: dart.fieldType(src__model__model.Model),
    [_router]: dart.fieldType(src__router__router.Router)
  }));
  dart.defineLazy(src__view__view_document_list__view_document_list_component$46template, {
    /*src__view__view_document_list__view_document_list_component$46template.styles$ViewDocumentListComponent*/get styles$ViewDocumentListComponent() {
      return [".scrollable._ngcontent-%ID%{height:90vh;overflow:auto}.toolbar._ngcontent-%ID%{bottom:0;margin-left:25%;margin-right:auto;position:fixed}.list._ngcontent-%ID%{margin-left:10%;font-size:20px;font-weight:bold;list-style-type:none;margin:20;padding:10}"];
    }
  });
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _compView_4$ = Symbol('_compView_4');
  const _AcxDarkTheme_4_5 = Symbol('_AcxDarkTheme_4_5');
  const _MaterialButtonComponent_4_6 = Symbol('_MaterialButtonComponent_4_6');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialIconComponent_6_5 = Symbol('_MaterialIconComponent_6_5');
  const _compView_7 = Symbol('_compView_7');
  const _AcxDarkTheme_7_5 = Symbol('_AcxDarkTheme_7_5');
  const _MaterialButtonComponent_7_6 = Symbol('_MaterialButtonComponent_7_6');
  const _compView_9 = Symbol('_compView_9');
  const _MaterialIconComponent_9_5 = Symbol('_MaterialIconComponent_9_5');
  const _compView_10 = Symbol('_compView_10');
  const _ModalComponent_10_5 = Symbol('_ModalComponent_10_5');
  const _compView_11 = Symbol('_compView_11');
  const _AutoDismissDirective_11_5 = Symbol('_AutoDismissDirective_11_5');
  const _MaterialDialogComponent_11_6 = Symbol('_MaterialDialogComponent_11_6');
  const _NgForm_12_5 = Symbol('_NgForm_12_5');
  const _appEl_24 = Symbol('_appEl_24');
  const _NgIf_24_9 = Symbol('_NgIf_24_9');
  const _compView_26 = Symbol('_compView_26');
  const _AcxDarkTheme_26_5 = Symbol('_AcxDarkTheme_26_5');
  const _MaterialButtonComponent_26_6 = Symbol('_MaterialButtonComponent_26_6');
  const _compView_28 = Symbol('_compView_28');
  const _AcxDarkTheme_28_5 = Symbol('_AcxDarkTheme_28_5');
  const _MaterialButtonComponent_28_6 = Symbol('_MaterialButtonComponent_28_6');
  const _expr_0$ = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_9 = Symbol('_expr_9');
  const _el_20 = Symbol('_el_20');
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  const _handle_trigger_4_0 = Symbol('_handle_trigger_4_0');
  const _handle_ngSubmit_12_0 = Symbol('_handle_ngSubmit_12_0');
  const _handle_keyup_20_0 = Symbol('_handle_keyup_20_0');
  const _handle_trigger_28_0 = Symbol('_handle_trigger_28_0');
  let const$19;
  src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0 = class ViewViewDocumentListComponent0 extends src__core__linker__app_view.AppView$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_0.className = "scrollable";
      this.addShimC(_el_0);
      let _el_1 = src__core__linker__app_view.createAndAppend(doc, "ul", _el_0);
      this.addShimC(html.HtmlElement._check(_el_1));
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__view__view_document_list__view_document_list_component$46template.viewFactory_ViewDocumentListComponent1, AppViewAndintToAppViewOfViewDocumentListComponent()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_3.className = "toolbar";
      this.addShimC(_el_3);
      this[_compView_4$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4$].rootEl;
      _el_3[$append](_el_4);
      this.createAttr(_el_4, "raised", "");
      this.addShimC(_el_4);
      this[_AcxDarkTheme_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$9 || (const$9 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_4_6] = new material_button__material_button.MaterialButtonComponent.new(_el_4, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_4_5]), this[_compView_4$].ref, null);
      let _text_5 = html.Text.new("New Document");
      this[_compView_6] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this.createAttr(_el_6, "icon", "note_add");
      this.createAttr(_el_6, "size", "large");
      this.addShimC(_el_6);
      this[_MaterialIconComponent_6_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_6);
      this[_compView_6].create(this[_MaterialIconComponent_6_5], []);
      this[_compView_4$].create(this[_MaterialButtonComponent_4_6], [JSArrayOfNode().of([_text_5, _el_6])]);
      this[_compView_7] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 7);
      let _el_7 = this[_compView_7].rootEl;
      _el_3[$append](_el_7);
      this.createAttr(_el_7, "raised", "");
      this.addShimC(_el_7);
      this[_AcxDarkTheme_7_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_7_6] = new material_button__material_button.MaterialButtonComponent.new(_el_7, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_7_5]), this[_compView_7].ref, null);
      let _text_8 = html.Text.new("Reload");
      this[_compView_9] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 9);
      let _el_9 = this[_compView_9].rootEl;
      this.createAttr(_el_9, "icon", "autorenew");
      this.createAttr(_el_9, "size", "large");
      this.addShimC(_el_9);
      this[_MaterialIconComponent_9_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_9);
      this[_compView_9].create(this[_MaterialIconComponent_9_5], []);
      this[_compView_7].create(this[_MaterialButtonComponent_7_6], [JSArrayOfNode().of([_text_8, _el_9])]);
      this[_compView_10] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 10);
      let _el_10 = this[_compView_10].rootEl;
      parentRenderNode[$append](_el_10);
      this.addShimC(_el_10);
      this[_ModalComponent_10_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_10, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_10, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_11] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 11);
      let _el_11 = this[_compView_11].rootEl;
      _el_11.className = "basic-dialog";
      this.addShimC(_el_11);
      this[_AutoDismissDirective_11_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(auto_dismiss__auto_dismiss.AutoDismissDirective, dart.wrapType(auto_dismiss__auto_dismiss.AutoDismissDirective), dart.fn(() => new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_11, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAutoDismissDirective())) : new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_11, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_MaterialDialogComponent_11_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_11, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_11].ref, this[_ModalComponent_10_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_11, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_11].ref, this[_ModalComponent_10_5]);
      let _el_12 = doc[$createElement]("form");
      this.addShimC(html.HtmlElement._check(_el_12));
      this[_NgForm_12_5] = new src__directives__ng_form.NgForm.new(null);
      let _el_13 = src__core__linker__app_view.createAndAppend(doc, "h1", _el_12);
      this.createAttr(_el_13, "header", "");
      this.addShimE(_el_13);
      let _text_14 = html.Text.new("Create new document");
      _el_13[$append](_text_14);
      let _el_15 = src__core__linker__app_view.createAndAppend(doc, "label", _el_12);
      this.addShimE(_el_15);
      let _text_16 = html.Text.new("Name of the new document:");
      _el_15[$append](_text_16);
      let _text_17 = html.Text.new(" ");
      _el_12[$append](_text_17);
      let _el_18 = src__core__linker__app_view.createAndAppend(doc, "br", _el_12);
      this.addShimE(_el_18);
      let _text_19 = html.Text.new(" ");
      _el_12[$append](_text_19);
      this[_el_20] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, "input", _el_12));
      this.createAttr(this[_el_20], "autofocus", "");
      this.createAttr(this[_el_20], "type", "text");
      this.addShimC(this[_el_20]);
      let _text_21 = html.Text.new(" ");
      _el_12[$append](_text_21);
      let _el_22 = src__core__linker__app_view.createAndAppend(doc, "br", _el_12);
      this.addShimE(_el_22);
      let _text_23 = html.Text.new(" ");
      _el_12[$append](_text_23);
      let _anchor_24 = src__core__linker__app_view.createViewContainerAnchor();
      _el_12[$append](_anchor_24);
      this[_appEl_24] = new src__core__linker__view_container.ViewContainer.new(24, 12, this, _anchor_24);
      let _TemplateRef_24_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_24], dart.fn(src__view__view_document_list__view_document_list_component$46template.viewFactory_ViewDocumentListComponent2, AppViewAndintToAppViewOfViewDocumentListComponent()));
      this[_NgIf_24_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_24], _TemplateRef_24_8);
      let _el_25 = src__core__linker__app_view.createDivAndAppend(doc, _el_12);
      this.createAttr(_el_25, "footer", "");
      this.addShimC(_el_25);
      this[_compView_26] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 26);
      let _el_26 = this[_compView_26].rootEl;
      _el_25[$append](_el_26);
      this.createAttr(_el_26, "clear-size", "");
      this.addShimC(_el_26);
      this[_AcxDarkTheme_26_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$13 || (const$13 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$14 || (const$14 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_26_6] = new material_button__material_button.MaterialButtonComponent.new(_el_26, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_26_5]), this[_compView_26].ref, null);
      let _text_27 = html.Text.new("Close");
      this[_compView_26].create(this[_MaterialButtonComponent_26_6], [JSArrayOfText().of([_text_27])]);
      this[_compView_28] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 28);
      let _el_28 = this[_compView_28].rootEl;
      _el_25[$append](_el_28);
      this.createAttr(_el_28, "clear-size", "");
      this.createAttr(_el_28, "type", "submit");
      this.addShimC(_el_28);
      this[_AcxDarkTheme_28_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$15 || (const$15 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$16 || (const$16 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_28_6] = new material_button__material_button.MaterialButtonComponent.new(_el_28, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_28_5]), this[_compView_28].ref, null);
      let _text_29 = html.Text.new("Submit");
      this[_compView_28].create(this[_MaterialButtonComponent_28_6], [JSArrayOfText().of([_text_29])]);
      this[_compView_11].create(this[_MaterialDialogComponent_11_6], [const$17 || (const$17 = dart.constList([], dart.dynamic)), JSArrayOfElement().of([_el_12]), const$18 || (const$18 = dart.constList([], dart.dynamic))]);
      this[_compView_10].create(this[_ModalComponent_10_5], [JSArrayOfHtmlElement().of([_el_11])]);
      let subscription_0 = this[_MaterialButtonComponent_4_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_4_0)));
      let subscription_1 = this[_MaterialButtonComponent_7_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'reload')));
      let subscription_2 = this[_AutoDismissDirective_11_5].dismiss.listen(this.eventHandler0(dart.dynamic, dart.bind(this.ctx, 'close')));
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(_el_12, "submit", this.eventHandler1(dart.dynamic, html.Event, dart.bind(this[_NgForm_12_5], 'onSubmit')));
      _el_12[$addEventListener]("reset", this.eventHandler1(html.Event, html.Event, dart.bind(this[_NgForm_12_5], 'onReset')));
      let subscription_3 = this[_NgForm_12_5].ngSubmit.listen(this.eventHandler1(src__model.ControlGroup, src__model.ControlGroup, dart.bind(this, _handle_ngSubmit_12_0)));
      this[_el_20][$addEventListener]("keyup", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_keyup_20_0)));
      let subscription_4 = this[_MaterialButtonComponent_26_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'close')));
      let subscription_5 = this[_MaterialButtonComponent_28_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_28_0)));
      this.ctx.newDocumentName = this[_el_20];
      this.init(const$19 || (const$19 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_AcxDarkTheme_4_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialButtonComponent_4_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_AcxDarkTheme_7_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_MaterialButtonComponent_7_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 26 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 27) {
        return this[_AcxDarkTheme_26_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 26 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 27) {
        return this[_MaterialButtonComponent_26_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 28 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 29) {
        return this[_AcxDarkTheme_28_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 28 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 29) {
        return this[_MaterialButtonComponent_28_6];
      }
      if ((token === dart.wrapType(src__directives__ng_form.NgForm) || token === dart.wrapType(src__directives__control_container.ControlContainer)) && 12 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 29) {
        return this[_NgForm_12_5];
      }
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 29) {
        return this[_ModalComponent_10_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_name = this[_el_20];
      let currVal_0 = _ctx.model.documentList;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_2_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_4_6].raised = true;
        changed = true;
      }
      let currVal_1 = _ctx.showDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialButtonComponent_4_6].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_4$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_4_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5].icon = "note_add";
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_7_6].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_7].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_7_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_9_5].icon = "autorenew";
        changed = true;
      }
      if (changed) {
        this[_compView_9].markAsCheckOnce();
      }
      let currVal_6 = _ctx.showDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_ModalComponent_10_5].visible = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.showDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_AutoDismissDirective_11_5].autoDismissable = currVal_7;
        this[_expr_7] = currVal_7;
      }
      changed = false;
      if (changed) {
        this[_compView_11].markAsCheckOnce();
      }
      this[_NgIf_24_9].ngIf = _ctx.showError;
      changed = false;
      if (changed) {
        this[_compView_26].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_26_6].ngOnInit();
      }
      changed = false;
      let currVal_9 = local_name.value === "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MaterialButtonComponent_28_6].disabled = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_28].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_28_6].ngOnInit();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_24].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_MaterialDialogComponent_11_6].ngAfterContentChecked();
      }
      this[_compView_4$].detectHostChanges(firstCheck);
      this[_compView_7].detectHostChanges(firstCheck);
      this[_compView_10].detectHostChanges(firstCheck);
      this[_compView_26].detectHostChanges(firstCheck);
      this[_compView_28].detectHostChanges(firstCheck);
      this[_compView_4$].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_7].detectChanges();
      this[_compView_9].detectChanges();
      this[_compView_10].detectChanges();
      this[_compView_11].detectChanges();
      this[_compView_26].detectChanges();
      this[_compView_28].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ModalComponent_10_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_24].destroyNestedViews();
      this[_compView_4$].destroy();
      this[_compView_6].destroy();
      this[_compView_7].destroy();
      this[_compView_9].destroy();
      this[_compView_10].destroy();
      this[_compView_11].destroy();
      this[_compView_26].destroy();
      this[_compView_28].destroy();
      this[_MaterialDialogComponent_11_6].ngOnDestroy();
      this[_ModalComponent_10_5].ngOnDestroy();
    }
    [_handle_trigger_4_0]($event) {
      this.ctx.showDialog = true;
    }
    [_handle_ngSubmit_12_0]($event) {
      let local_name = this[_el_20];
      this.ctx.onSubmit(local_name.value);
    }
    [_handle_keyup_20_0]($event) {
      0;
    }
    [_handle_trigger_28_0]($event) {
      let local_name = this[_el_20];
      this.ctx.onSubmit(local_name.value);
    }
  };
  (src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_compView_4$] = null;
    this[_AcxDarkTheme_4_5] = null;
    this[_MaterialButtonComponent_4_6] = null;
    this[_compView_6] = null;
    this[_MaterialIconComponent_6_5] = null;
    this[_compView_7] = null;
    this[_AcxDarkTheme_7_5] = null;
    this[_MaterialButtonComponent_7_6] = null;
    this[_compView_9] = null;
    this[_MaterialIconComponent_9_5] = null;
    this[_compView_10] = null;
    this[_ModalComponent_10_5] = null;
    this[_compView_11] = null;
    this[_AutoDismissDirective_11_5] = null;
    this[_MaterialDialogComponent_11_6] = null;
    this[_NgForm_12_5] = null;
    this[_appEl_24] = null;
    this[_NgIf_24_9] = null;
    this[_compView_26] = null;
    this[_AcxDarkTheme_26_5] = null;
    this[_MaterialButtonComponent_26_6] = null;
    this[_compView_28] = null;
    this[_AcxDarkTheme_28_5] = null;
    this[_MaterialButtonComponent_28_6] = null;
    this[_expr_0$] = null;
    this[_expr_1] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_9] = null;
    this[_el_20] = null;
    src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("view-document-list"));
    let t = src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0._renderType;
    t == null ? src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:Internal_lore/lib/src/view/view_document_list/view_document_list_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__view__view_document_list__view_document_list_component$46template.styles$ViewDocumentListComponent) : t;
    this.setupComponentType(src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0._renderType);
  }).prototype = src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0.prototype;
  dart.addTypeTests(src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0);
  dart.setMethodSignature(src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0, () => ({
    __proto__: dart.getMethods(src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngSubmit_12_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_keyup_20_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_28_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0, () => ({
    __proto__: dart.getFields(src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_compView_4$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_4_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_4_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_6]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_6_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_7]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_7_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_7_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_9]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_9_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_10]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_10_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_11]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_AutoDismissDirective_11_5]: dart.fieldType(auto_dismiss__auto_dismiss.AutoDismissDirective),
    [_MaterialDialogComponent_11_6]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_NgForm_12_5]: dart.fieldType(src__directives__ng_form.NgForm),
    [_appEl_24]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_24_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_26]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_26_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_26_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_28]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_28_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_28_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_el_20]: dart.fieldType(html.InputElement)
  }));
  dart.defineLazy(src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0, {
    /*src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__view__view_document_list__view_document_list_component$46template.viewFactory_ViewDocumentListComponent0 = function(parentView, parentIndex) {
    return new src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document_list__view_document_list_component$46template, {
    /*src__view__view_document_list__view_document_list_component$46template._ViewDocumentListComponentNgFactory*/get _ViewDocumentListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfViewDocumentListComponent()).new("view-document-list", dart.fn(src__view__view_document_list__view_document_list_component$46template.viewFactory_ViewDocumentListComponentHost0, AppViewAndintToAppViewOfViewDocumentListComponent())));
    }
  });
  dart.copyProperties(src__view__view_document_list__view_document_list_component$46template, {
    get ViewDocumentListComponentNgFactory() {
      return src__view__view_document_list__view_document_list_component$46template._ViewDocumentListComponentNgFactory;
    }
  });
  const _compView_1$ = Symbol('_compView_1');
  const _MaterialIconComponent_1_5$ = Symbol('_MaterialIconComponent_1_5');
  const _text_2 = Symbol('_text_2');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1 = class _ViewViewDocumentListComponent1 extends src__core__linker__app_view.AppView$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("li");
      _el_0.className = "list";
      this.addShimE(_el_0);
      this[_compView_1$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootEl;
      _el_0[$append](_el_1);
      this.createAttr(_el_1, "icon", "label_important");
      this.createAttr(_el_1, "size", "large");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1$].create(this[_MaterialIconComponent_1_5$], []);
      this[_text_2] = html.Text.new("");
      _el_0[$append](this[_text_2]);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_document = src__runtime__optimizations.unsafeCast(src__model__model.Document, this.locals[$_get]("$implicit"));
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5$].icon = "label_important";
        changed = true;
      }
      if (changed) {
        this[_compView_1$].markAsCheckOnce();
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_document.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroy();
    }
    [_handle_click_0_0]($event) {
      let local_document = src__runtime__optimizations.unsafeCast(src__model__model.Document, this.locals[$_get]("$implicit"));
      this.ctx.viewDocument(local_document.id);
    }
  };
  (src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_MaterialIconComponent_1_5$] = null;
    this[_expr_1] = null;
    this[_text_2] = null;
    src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0._renderType;
  }).prototype = src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1.prototype;
  dart.addTypeTests(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1);
  dart.setMethodSignature(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1, () => ({
    __proto__: dart.getMethods(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1, () => ({
    __proto__: dart.getFields(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1.__proto__),
    [_compView_1$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_text_2]: dart.fieldType(html.Text)
  }));
  src__view__view_document_list__view_document_list_component$46template.viewFactory_ViewDocumentListComponent1 = function(parentView, parentIndex) {
    return new src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent1.new(parentView, parentIndex);
  };
  src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent2 = class _ViewViewDocumentListComponent2 extends src__core__linker__app_view.AppView$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("small");
      this.createAttr(_el_0, "style", "color: red");
      this.addShimE(_el_0);
      let _text_1 = html.Text.new("Name is already taken");
      _el_0[$append](_text_1);
      this.init0(_el_0);
    }
  };
  (src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent2.new = function(parentView, parentIndex) {
    src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0._renderType;
  }).prototype = src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent2.prototype;
  dart.addTypeTests(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent2);
  dart.setMethodSignature(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent2, () => ({
    __proto__: dart.getMethods(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent), [])
  }));
  src__view__view_document_list__view_document_list_component$46template.viewFactory_ViewDocumentListComponent2 = function(parentView, parentIndex) {
    return new src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document_list__view_document_list_component$46template, {
    /*src__view__view_document_list__view_document_list_component$46template.styles$ViewDocumentListComponentHost*/get styles$ViewDocumentListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _ViewDocumentListComponent_0_5 = Symbol('_ViewDocumentListComponent_0_5');
  const __Document_0_6 = Symbol('__Document_0_6');
  const __Window_0_7 = Symbol('__Window_0_7');
  const __DomService_0_8 = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9 = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10 = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11 = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12 = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13 = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14 = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15 = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16 = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17 = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18 = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19 = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20 = Symbol('__OverlayService_0_20');
  const _Document_0_6 = Symbol('_Document_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10 = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11 = Symbol('_ManagedZone_0_11');
  let const$20;
  let const$21;
  let const$22;
  const _overlayContainerName_0_12 = Symbol('_overlayContainerName_0_12');
  let const$23;
  let const$24;
  let const$25;
  const _overlayContainerParent_0_13 = Symbol('_overlayContainerParent_0_13');
  let const$26;
  let const$27;
  let const$28;
  const _overlayContainer_0_14 = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15 = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16 = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17 = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18 = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19 = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20 = Symbol('_OverlayService_0_20');
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0 = class _ViewViewDocumentListComponentHost0 extends src__core__linker__app_view.AppView$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent) {
    get [_Document_0_6]() {
      if (this[__Document_0_6] == null) {
        this[__Document_0_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6];
    }
    get [_Window_0_7]() {
      if (this[__Window_0_7] == null) {
        this[__Window_0_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7];
    }
    get [_DomService_0_8]() {
      if (this[__DomService_0_8] == null) {
        this[__DomService_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7]));
      }
      return this[__DomService_0_8];
    }
    get [_AcxImperativeViewUtils_0_9]() {
      if (this[__AcxImperativeViewUtils_0_9] == null) {
        this[__AcxImperativeViewUtils_0_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__AcxImperativeViewUtils_0_9];
    }
    get [_DomRuler_0_10]() {
      if (this[__DomRuler_0_10] == null) {
        this[__DomRuler_0_10] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__DomRuler_0_10];
    }
    get [_ManagedZone_0_11]() {
      if (this[__ManagedZone_0_11] == null) {
        this[__ManagedZone_0_11] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11];
    }
    get [_overlayContainerName_0_12]() {
      if (this[__overlayContainerName_0_12] == null) {
        this[__overlayContainerName_0_12] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core.String, const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12];
    }
    get [_overlayContainerParent_0_13]() {
      if (this[__overlayContainerParent_0_13] == null) {
        this[__overlayContainerParent_0_13] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$23 || (const$23 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGet(const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGet(const$25 || (const$25 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13];
    }
    get [_overlayContainer_0_14]() {
      if (this[__overlayContainer_0_14] == null) {
        this[__overlayContainer_0_14] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$26 || (const$26 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.injectorGet(const$27 || (const$27 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.injectorGet(const$28 || (const$28 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14];
    }
    get [_overlaySyncDom_0_15]() {
      if (this[__overlaySyncDom_0_15] == null) {
        this[__overlaySyncDom_0_15] = true;
      }
      return this[__overlaySyncDom_0_15];
    }
    get [_overlayRepositionLoop_0_16]() {
      if (this[__overlayRepositionLoop_0_16] == null) {
        this[__overlayRepositionLoop_0_16] = true;
      }
      return this[__overlayRepositionLoop_0_16];
    }
    get [_OverlayStyleConfig_0_17]() {
      if (this[__OverlayStyleConfig_0_17] == null) {
        this[__OverlayStyleConfig_0_17] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6]));
      }
      return this[__OverlayStyleConfig_0_17];
    }
    get [_ZIndexer_0_18]() {
      if (this[__ZIndexer_0_18] == null) {
        this[__ZIndexer_0_18] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18];
    }
    get [_OverlayDomRenderService_0_19]() {
      if (this[__OverlayDomRenderService_0_19] == null) {
        this[__OverlayDomRenderService_0_19] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17], html.HtmlElement._check(this[_overlayContainer_0_14]), core.String._check(this[_overlayContainerName_0_12]), this[_DomRuler_0_10], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_9]), this[_overlaySyncDom_0_15], this[_overlayRepositionLoop_0_16], this[_ZIndexer_0_18]);
      }
      return this[__OverlayDomRenderService_0_19];
    }
    get [_OverlayService_0_20]() {
      if (this[__OverlayService_0_20] == null) {
        this[__OverlayService_0_20] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20];
    }
    build() {
      this[_compView_0$] = new src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_ViewDocumentListComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent, dart.wrapType(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent), dart.fn(() => new src__view__view_document_list__view_document_list_component.ViewDocumentListComponent.new(src__model__model.Model._check(this.injectorGet(dart.wrapType(src__model__model.Model), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToViewDocumentListComponent())) : new src__view__view_document_list__view_document_list_component.ViewDocumentListComponent.new(src__model__model.Model._check(this.injectorGet(dart.wrapType(src__model__model.Model), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0$].create(this[_ViewDocumentListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfViewDocumentListComponent()).new(0, this, this.rootEl, this[_ViewDocumentListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11];
      }
      if (token === (const$29 || (const$29 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12];
      }
      if (token === (const$30 || (const$30 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13];
      }
      if (token === (const$31 || (const$31 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14];
      }
      if (token === (const$32 || (const$32 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15];
      }
      if (token === (const$33 || (const$33 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
    }
  };
  (src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_ViewDocumentListComponent_0_5] = null;
    this[__Document_0_6] = null;
    this[__Window_0_7] = null;
    this[__DomService_0_8] = null;
    this[__AcxImperativeViewUtils_0_9] = null;
    this[__DomRuler_0_10] = null;
    this[__ManagedZone_0_11] = null;
    this[__overlayContainerName_0_12] = null;
    this[__overlayContainerParent_0_13] = null;
    this[__overlayContainer_0_14] = null;
    this[__overlaySyncDom_0_15] = null;
    this[__overlayRepositionLoop_0_16] = null;
    this[__OverlayStyleConfig_0_17] = null;
    this[__ZIndexer_0_18] = null;
    this[__OverlayDomRenderService_0_19] = null;
    this[__OverlayService_0_20] = null;
    src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0.prototype;
  dart.addTypeTests(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0);
  dart.setMethodSignature(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0, () => ({
    __proto__: dart.getMethods(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0, () => ({
    __proto__: dart.getGetters(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0.__proto__),
    [_Document_0_6]: dart.dynamic,
    [_Window_0_7]: dart.dynamic,
    [_DomService_0_8]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9]: dart.dynamic,
    [_DomRuler_0_10]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11]: dart.dynamic,
    [_overlayContainerName_0_12]: dart.dynamic,
    [_overlayContainerParent_0_13]: dart.dynamic,
    [_overlayContainer_0_14]: dart.dynamic,
    [_overlaySyncDom_0_15]: core.bool,
    [_overlayRepositionLoop_0_16]: core.bool,
    [_OverlayStyleConfig_0_17]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20]: dart.dynamic
  }));
  dart.setFieldSignature(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0, () => ({
    __proto__: dart.getFields(src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__view__view_document_list__view_document_list_component$46template.ViewViewDocumentListComponent0),
    [_ViewDocumentListComponent_0_5]: dart.fieldType(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent),
    [__Document_0_6]: dart.fieldType(dart.dynamic),
    [__Window_0_7]: dart.fieldType(dart.dynamic),
    [__DomService_0_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_10]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_16]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_17]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20]: dart.fieldType(dart.dynamic)
  }));
  src__view__view_document_list__view_document_list_component$46template.viewFactory_ViewDocumentListComponentHost0 = function(parentView, parentIndex) {
    return new src__view__view_document_list__view_document_list_component$46template._ViewViewDocumentListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document_list__view_document_list_component$46template, {
    /*src__view__view_document_list__view_document_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__view__view_document_list__view_document_list_component$46template.initReflector = function() {
    if (dart.test(src__view__view_document_list__view_document_list_component$46template._visited)) {
      return;
    }
    src__view__view_document_list__view_document_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__view__view_document_list__view_document_list_component.ViewDocumentListComponent), src__view__view_document_list__view_document_list_component$46template.ViewDocumentListComponentNgFactory);
    src__model__model$46template.initReflector();
    src__routes$46template.initReflector();
    angular$46template.initReflector();
    auto_dismiss__auto_dismiss$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    laminate__overlay__module$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_dialog__material_dialog$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    angular_forms$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.defineLazy(src__routes$46template, {
    /*src__routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__routes$46template.initReflector = function() {
    if (dart.test(src__routes$46template._visited)) {
      return;
    }
    src__routes$46template._visited = true;
    angular_router$46template.initReflector();
    src__routes_path$46template.initReflector();
    src__routes_path$46template.initReflector();
    src__view__view_document__view_document_component$46template.initReflector();
    src__view__view_document_list__view_document_list_component$46template.initReflector();
  };
  const _router$ = Symbol('_router');
  src__view__view_document__view_document_component.ViewDocumentComponent = class ViewDocumentComponent extends core.Object {
    get model() {
      return this[model$1];
    }
    set model(value) {
      this[model$1] = value;
    }
    get document() {
      return this[document];
    }
    set document(value) {
      this[document] = value;
    }
    get selected() {
      return this[selected$];
    }
    set selected(value) {
      this[selected$] = value;
    }
    get maxId() {
      return this[maxId];
    }
    set maxId(value) {
      this[maxId] = value;
    }
    get idToRemove() {
      return this[idToRemove];
    }
    set idToRemove(value) {
      this[idToRemove] = value;
    }
    get timer() {
      return this[timer];
    }
    set timer(value) {
      this[timer] = value;
    }
    get lockDuration() {
      return this[lockDuration];
    }
    set lockDuration(value) {
      this[lockDuration] = value;
    }
    get editMode() {
      return this[editMode];
    }
    set editMode(value) {
      this[editMode] = value;
    }
    get showMetadata() {
      return this[showMetadata$];
    }
    set showMetadata(value) {
      this[showMetadata$] = value;
    }
    get showSaveChangesDialog() {
      return this[showSaveChangesDialog];
    }
    set showSaveChangesDialog(value) {
      this[showSaveChangesDialog] = value;
    }
    get showRemoveSnippetDialog() {
      return this[showRemoveSnippetDialog];
    }
    set showRemoveSnippetDialog(value) {
      this[showRemoveSnippetDialog] = value;
    }
    get showCannotEditDialog1() {
      return this[showCannotEditDialog1];
    }
    set showCannotEditDialog1(value) {
      this[showCannotEditDialog1] = value;
    }
    get showCannotEditDialog2() {
      return this[showCannotEditDialog2];
    }
    set showCannotEditDialog2(value) {
      this[showCannotEditDialog2] = value;
    }
    get showDeleteDocumentDialog() {
      return this[showDeleteDocumentDialog];
    }
    set showDeleteDocumentDialog(value) {
      this[showDeleteDocumentDialog] = value;
    }
    get showRenameUnsuccessfulDialog() {
      return this[showRenameUnsuccessfulDialog];
    }
    set showRenameUnsuccessfulDialog(value) {
      this[showRenameUnsuccessfulDialog] = value;
    }
    get editingName() {
      return this[editingName];
    }
    set editingName(value) {
      this[editingName] = value;
    }
    get showName() {
      return !dart.test(this.editMode) || !dart.test(this.editingName) && dart.test(this.editMode);
    }
    editName() {
      if (dart.test(this.editMode)) {
        this.editingName = true;
        this.selected = null;
      }
    }
    deselect() {
      this.editingName = false;
    }
    selectSnippet(snip) {
      this.selected = snip;
      this.editingName = false;
    }
    onActivate(_, current) {
      return async.async(dart.dynamic, (function* onActivate() {
        let id = core.int.parse(current.parameters[$_get]("id"));
        this.document = (yield this.model.getDocument(id));
      }).bind(this));
    }
    lock(data) {
      this.document = new src__model__model.Document.new(this.document, this.model);
      this.maxId = dart.notNull(this.document.MaxSnippetId()) + 1;
      this.editMode = true;
      this.lockDuration = new core.Duration.new({minutes: core.int._check(data[$_get]("time"))});
      this.timer = async.Timer.periodic(new core.Duration.new({seconds: 1}), dart.fn(t => {
        this.lockDuration = this.lockDuration['-'](new core.Duration.new({seconds: 1}));
        if (dart.test(this.lockDuration.isNegative)) t.cancel();
      }, TimerToNull()));
    }
    startEdit() {
      return async.async(dart.dynamic, (function* startEdit() {
        let data = (yield this.model.LockDocument(this.document.id));
        if (dart.dtest(data[$_get]("success"))) {
          this.lock(data);
        } else {
          this.showCannotEditDialog1 = true;
        }
      }).bind(this));
    }
    addNewSnippet() {
      this.document.snippets[$add](new src__model__model.Snippet.FromMap(new (IdentityMapOfString$dynamic()).from(["id", (() => {
          let x = this.maxId;
          this.maxId = dart.notNull(x) + 1;
          return x;
        })(), "document_id", this.document.id, "content", "This is new snippet. Click to edit.", "document_order", dart.notNull(this.document.snippets[$length]) + 1]), this.document));
    }
    removeSnippetDialog(id) {
      this.idToRemove = id;
      this.showRemoveSnippetDialog = true;
    }
    removeSnippet() {
      this.document.DeleteSnippetById(this.idToRemove);
      this.showRemoveSnippetDialog = false;
    }
    stopEdit() {
      return async.async(dart.dynamic, (function* stopEdit() {
        this.showSaveChangesDialog = true;
      }).bind(this));
    }
    saveChanges() {
      return async.async(dart.dynamic, (function* saveChanges() {
        this.showRenameUnsuccessfulDialog = !dart.test(yield this.model.SaveDocument(this.document.id, this.document));
      }).bind(this));
    }
    saveChangesAndStopEdit() {
      return async.async(dart.dynamic, (function* saveChangesAndStopEdit() {
        this.showSaveChangesDialog = false;
        this.showRenameUnsuccessfulDialog = !dart.test(yield this.model.SaveDocument(this.document.id, this.document));
        if (dart.test(this.showRenameUnsuccessfulDialog)) {
          this.model.UnlockDocument(this.document.id);
          this.document = (yield this.model.getDocument(this.document.id));
          this.editMode = false;
        }
      }).bind(this));
    }
    trashChangesAndStopEdit() {
      return async.async(dart.dynamic, (function* trashChangesAndStopEdit() {
        this.model.UnlockDocument(this.document.id);
        this.document = (yield this.model.getDocument(this.document.id));
        this.editMode = false;
        this.showSaveChangesDialog = false;
      }).bind(this));
    }
    removeDocument() {
      this.model.RemoveDocument(this.document.id);
      this[_router$].navigate(src__routes_path.RoutePaths.DOCUMENT_LIST.toUrl());
    }
    extendLock() {
      return async.async(dart.dynamic, (function* extendLock() {
        let data = (yield this.model.LockDocument(this.document.id));
        if (dart.dtest(data[$_get]("success"))) {
          if (dart.dtest(data[$_get]("fresh"))) {
            this.showCannotEditDialog2 = true;
          } else {
            this.timer.cancel();
            this.lock(data);
          }
        } else {
          this.showCannotEditDialog1 = true;
        }
      }).bind(this));
    }
    back() {
      if (dart.test(this.editMode)) {
        this.stopEdit();
      } else {
        this[_router$].navigate(src__routes_path.RoutePaths.DOCUMENT_LIST.toUrl());
      }
    }
  };
  (src__view__view_document__view_document_component.ViewDocumentComponent.new = function(model, router) {
    this[document] = null;
    this[selected$] = null;
    this[maxId] = null;
    this[idToRemove] = null;
    this[timer] = null;
    this[lockDuration] = null;
    this[editMode] = false;
    this[showMetadata$] = true;
    this[showSaveChangesDialog] = false;
    this[showRemoveSnippetDialog] = false;
    this[showCannotEditDialog1] = false;
    this[showCannotEditDialog2] = false;
    this[showDeleteDocumentDialog] = false;
    this[showRenameUnsuccessfulDialog] = false;
    this[editingName] = false;
    this[model$1] = model;
    this[_router$] = router;
  }).prototype = src__view__view_document__view_document_component.ViewDocumentComponent.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component.ViewDocumentComponent);
  const model$1 = Symbol("ViewDocumentComponent.model");
  const document = Symbol("ViewDocumentComponent.document");
  const selected$ = Symbol("ViewDocumentComponent.selected");
  const maxId = Symbol("ViewDocumentComponent.maxId");
  const idToRemove = Symbol("ViewDocumentComponent.idToRemove");
  const timer = Symbol("ViewDocumentComponent.timer");
  const lockDuration = Symbol("ViewDocumentComponent.lockDuration");
  const editMode = Symbol("ViewDocumentComponent.editMode");
  const showMetadata$ = Symbol("ViewDocumentComponent.showMetadata");
  const showSaveChangesDialog = Symbol("ViewDocumentComponent.showSaveChangesDialog");
  const showRemoveSnippetDialog = Symbol("ViewDocumentComponent.showRemoveSnippetDialog");
  const showCannotEditDialog1 = Symbol("ViewDocumentComponent.showCannotEditDialog1");
  const showCannotEditDialog2 = Symbol("ViewDocumentComponent.showCannotEditDialog2");
  const showDeleteDocumentDialog = Symbol("ViewDocumentComponent.showDeleteDocumentDialog");
  const showRenameUnsuccessfulDialog = Symbol("ViewDocumentComponent.showRenameUnsuccessfulDialog");
  const editingName = Symbol("ViewDocumentComponent.editingName");
  src__view__view_document__view_document_component.ViewDocumentComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__view__view_document__view_document_component.ViewDocumentComponent, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component.ViewDocumentComponent.__proto__),
    editName: dart.fnType(dart.void, []),
    deselect: dart.fnType(dart.void, []),
    selectSnippet: dart.fnType(dart.void, [src__model__model.Snippet]),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    lock: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    startEdit: dart.fnType(dart.void, []),
    addNewSnippet: dart.fnType(dart.void, []),
    removeSnippetDialog: dart.fnType(dart.void, [core.int]),
    removeSnippet: dart.fnType(dart.void, []),
    stopEdit: dart.fnType(dart.void, []),
    saveChanges: dart.fnType(dart.void, []),
    saveChangesAndStopEdit: dart.fnType(dart.void, []),
    trashChangesAndStopEdit: dart.fnType(dart.void, []),
    removeDocument: dart.fnType(dart.void, []),
    extendLock: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__view__view_document__view_document_component.ViewDocumentComponent, () => ({
    __proto__: dart.getGetters(src__view__view_document__view_document_component.ViewDocumentComponent.__proto__),
    showName: core.bool
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component.ViewDocumentComponent, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component.ViewDocumentComponent.__proto__),
    model: dart.fieldType(src__model__model.Model),
    [_router$]: dart.fieldType(src__router__router.Router),
    document: dart.fieldType(src__model__model.Document),
    selected: dart.fieldType(src__model__model.Snippet),
    maxId: dart.fieldType(core.int),
    idToRemove: dart.fieldType(core.int),
    timer: dart.fieldType(async.Timer),
    lockDuration: dart.fieldType(core.Duration),
    editMode: dart.fieldType(core.bool),
    showMetadata: dart.fieldType(core.bool),
    showSaveChangesDialog: dart.fieldType(core.bool),
    showRemoveSnippetDialog: dart.fieldType(core.bool),
    showCannotEditDialog1: dart.fieldType(core.bool),
    showCannotEditDialog2: dart.fieldType(core.bool),
    showDeleteDocumentDialog: dart.fieldType(core.bool),
    showRenameUnsuccessfulDialog: dart.fieldType(core.bool),
    editingName: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__view__view_document__view_document_component$46template, {
    /*src__view__view_document__view_document_component$46template.styles$ViewDocumentComponent*/get styles$ViewDocumentComponent() {
      return [".scrollable._ngcontent-%ID%{top:8vh;position:fixed;height:82vh;overflow:auto}.header-bar._ngcontent-%ID%{height:7.5vh;width:98vw;position:fixed}.title._ngcontent-%ID%{float:left;overflow:auto}.lock-duration._ngcontent-%ID%{float:right}.toolbar._ngcontent-%ID%{bottom:0;margin-left:20%;margin-right:20%;position:fixed}.toolbar._ngcontent-%ID% div._ngcontent-%ID%{display:contents}"];
    }
  });
  const _appEl_0$ = Symbol('_appEl_0');
  const _NgIf_0_9$ = Symbol('_NgIf_0_9');
  const _appEl_2$ = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_3$ = Symbol('_appEl_3');
  const _NgIf_3_9$ = Symbol('_NgIf_3_9');
  const _appEl_5$ = Symbol('_appEl_5');
  const _NgIf_5_9$ = Symbol('_NgIf_5_9');
  const _appEl_6$ = Symbol('_appEl_6');
  const _NgIf_6_9$ = Symbol('_NgIf_6_9');
  const _compView_7$ = Symbol('_compView_7');
  const _ModalComponent_7_5 = Symbol('_ModalComponent_7_5');
  const _compView_8 = Symbol('_compView_8');
  const _AutoDismissDirective_8_5 = Symbol('_AutoDismissDirective_8_5');
  const _MaterialDialogComponent_8_6 = Symbol('_MaterialDialogComponent_8_6');
  const _compView_13 = Symbol('_compView_13');
  const _AcxDarkTheme_13_5 = Symbol('_AcxDarkTheme_13_5');
  const _MaterialButtonComponent_13_6 = Symbol('_MaterialButtonComponent_13_6');
  const _compView_15 = Symbol('_compView_15');
  const _MaterialIconComponent_15_5 = Symbol('_MaterialIconComponent_15_5');
  const _compView_16 = Symbol('_compView_16');
  const _AcxDarkTheme_16_5 = Symbol('_AcxDarkTheme_16_5');
  const _MaterialButtonComponent_16_6 = Symbol('_MaterialButtonComponent_16_6');
  const _compView_18 = Symbol('_compView_18');
  const _MaterialIconComponent_18_5 = Symbol('_MaterialIconComponent_18_5');
  const _compView_19 = Symbol('_compView_19');
  const _AcxDarkTheme_19_5 = Symbol('_AcxDarkTheme_19_5');
  const _MaterialButtonComponent_19_6 = Symbol('_MaterialButtonComponent_19_6');
  const _compView_21 = Symbol('_compView_21');
  const _MaterialIconComponent_21_5 = Symbol('_MaterialIconComponent_21_5');
  const _compView_22 = Symbol('_compView_22');
  const _ModalComponent_22_5 = Symbol('_ModalComponent_22_5');
  const _compView_23 = Symbol('_compView_23');
  const _AutoDismissDirective_23_5 = Symbol('_AutoDismissDirective_23_5');
  const _MaterialDialogComponent_23_6 = Symbol('_MaterialDialogComponent_23_6');
  const _compView_28$ = Symbol('_compView_28');
  const _AcxDarkTheme_28_5$ = Symbol('_AcxDarkTheme_28_5');
  const _MaterialButtonComponent_28_6$ = Symbol('_MaterialButtonComponent_28_6');
  const _compView_30 = Symbol('_compView_30');
  const _MaterialIconComponent_30_5 = Symbol('_MaterialIconComponent_30_5');
  const _compView_31 = Symbol('_compView_31');
  const _AcxDarkTheme_31_5 = Symbol('_AcxDarkTheme_31_5');
  const _MaterialButtonComponent_31_6 = Symbol('_MaterialButtonComponent_31_6');
  const _compView_33 = Symbol('_compView_33');
  const _MaterialIconComponent_33_5 = Symbol('_MaterialIconComponent_33_5');
  const _compView_34 = Symbol('_compView_34');
  const _ModalComponent_34_5 = Symbol('_ModalComponent_34_5');
  const _compView_35 = Symbol('_compView_35');
  const _AutoDismissDirective_35_5 = Symbol('_AutoDismissDirective_35_5');
  const _MaterialDialogComponent_35_6 = Symbol('_MaterialDialogComponent_35_6');
  const _compView_40 = Symbol('_compView_40');
  const _AcxDarkTheme_40_5 = Symbol('_AcxDarkTheme_40_5');
  const _MaterialButtonComponent_40_6 = Symbol('_MaterialButtonComponent_40_6');
  const _compView_42 = Symbol('_compView_42');
  const _MaterialIconComponent_42_5 = Symbol('_MaterialIconComponent_42_5');
  const _compView_43 = Symbol('_compView_43');
  const _AcxDarkTheme_43_5 = Symbol('_AcxDarkTheme_43_5');
  const _MaterialButtonComponent_43_6 = Symbol('_MaterialButtonComponent_43_6');
  const _compView_45 = Symbol('_compView_45');
  const _MaterialIconComponent_45_5 = Symbol('_MaterialIconComponent_45_5');
  const _compView_46 = Symbol('_compView_46');
  const _ModalComponent_46_5 = Symbol('_ModalComponent_46_5');
  const _compView_47 = Symbol('_compView_47');
  const _AutoDismissDirective_47_5 = Symbol('_AutoDismissDirective_47_5');
  const _MaterialDialogComponent_47_6 = Symbol('_MaterialDialogComponent_47_6');
  const _compView_54 = Symbol('_compView_54');
  const _AcxDarkTheme_54_5 = Symbol('_AcxDarkTheme_54_5');
  const _MaterialButtonComponent_54_6 = Symbol('_MaterialButtonComponent_54_6');
  const _compView_55 = Symbol('_compView_55');
  const _MaterialIconComponent_55_5 = Symbol('_MaterialIconComponent_55_5');
  const _compView_56 = Symbol('_compView_56');
  const _ModalComponent_56_5 = Symbol('_ModalComponent_56_5');
  const _compView_57 = Symbol('_compView_57');
  const _AutoDismissDirective_57_5 = Symbol('_AutoDismissDirective_57_5');
  const _MaterialDialogComponent_57_6 = Symbol('_MaterialDialogComponent_57_6');
  const _compView_67 = Symbol('_compView_67');
  const _AcxDarkTheme_67_5 = Symbol('_AcxDarkTheme_67_5');
  const _MaterialButtonComponent_67_6 = Symbol('_MaterialButtonComponent_67_6');
  const _compView_68 = Symbol('_compView_68');
  const _MaterialIconComponent_68_5 = Symbol('_MaterialIconComponent_68_5');
  const _compView_69 = Symbol('_compView_69');
  const _ModalComponent_69_5 = Symbol('_ModalComponent_69_5');
  const _compView_70 = Symbol('_compView_70');
  const _AutoDismissDirective_70_5 = Symbol('_AutoDismissDirective_70_5');
  const _MaterialDialogComponent_70_6 = Symbol('_MaterialDialogComponent_70_6');
  const _compView_77 = Symbol('_compView_77');
  const _AcxDarkTheme_77_5 = Symbol('_AcxDarkTheme_77_5');
  const _MaterialButtonComponent_77_6 = Symbol('_MaterialButtonComponent_77_6');
  const _compView_78 = Symbol('_compView_78');
  const _MaterialIconComponent_78_5 = Symbol('_MaterialIconComponent_78_5');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6$ = Symbol('_expr_6');
  const _expr_7$ = Symbol('_expr_7');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_15 = Symbol('_expr_15');
  const _expr_16 = Symbol('_expr_16');
  const _expr_17 = Symbol('_expr_17');
  const _expr_20 = Symbol('_expr_20');
  const _expr_21 = Symbol('_expr_21');
  const _expr_23 = Symbol('_expr_23');
  const _expr_24 = Symbol('_expr_24');
  const _expr_26 = Symbol('_expr_26');
  const _expr_27 = Symbol('_expr_27');
  const _pipe_time_0 = Symbol('_pipe_time_0');
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  const _handle_dismiss_8_0 = Symbol('_handle_dismiss_8_0');
  const _handle_trigger_19_0 = Symbol('_handle_trigger_19_0');
  const _handle_dismiss_23_0 = Symbol('_handle_dismiss_23_0');
  const _handle_trigger_31_0 = Symbol('_handle_trigger_31_0');
  const _handle_dismiss_35_0 = Symbol('_handle_dismiss_35_0');
  const _handle_trigger_43_0 = Symbol('_handle_trigger_43_0');
  const _handle_dismiss_47_0 = Symbol('_handle_dismiss_47_0');
  const _handle_trigger_54_0 = Symbol('_handle_trigger_54_0');
  const _handle_dismiss_57_0 = Symbol('_handle_dismiss_57_0');
  const _handle_trigger_67_0 = Symbol('_handle_trigger_67_0');
  const _handle_dismiss_70_0 = Symbol('_handle_dismiss_70_0');
  const _handle_trigger_77_0 = Symbol('_handle_trigger_77_0');
  let const$57;
  src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0 = class ViewViewDocumentComponent0 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent1, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_0_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0$], _TemplateRef_0_8);
      let doc = html.document;
      let _el_1 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_1.className = "toolbar";
      this.addShimC(_el_1);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_2);
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent8, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_3);
      this[_appEl_3$] = new src__core__linker__view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent9, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_3_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
      let _el_4 = src__core__linker__app_view.createDivAndAppend(doc, _el_1);
      this.addShimC(_el_4);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      _el_4[$append](_anchor_5);
      this[_appEl_5$] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent10, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_5_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5$], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      _el_4[$append](_anchor_6);
      this[_appEl_6$] = new src__core__linker__view_container.ViewContainer.new(6, 4, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent11, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_6_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6$], _TemplateRef_6_8);
      this[_compView_7$] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 7);
      let _el_7 = this[_compView_7$].rootEl;
      parentRenderNode[$append](_el_7);
      this.createAttr(_el_7, "headered", "");
      this.addShimC(_el_7);
      this[_ModalComponent_7_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_7, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_7, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_8] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootEl;
      _el_8.className = "basic-dialog";
      this.addShimC(_el_8);
      this[_AutoDismissDirective_8_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(auto_dismiss__auto_dismiss.AutoDismissDirective, dart.wrapType(auto_dismiss__auto_dismiss.AutoDismissDirective), dart.fn(() => new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_8, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAutoDismissDirective())) : new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_8, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_MaterialDialogComponent_8_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_8, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_8].ref, this[_ModalComponent_7_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_8, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_8].ref, this[_ModalComponent_7_5]);
      let _el_9 = doc[$createElement]("div");
      this.createAttr(_el_9, "header", "");
      this.addShimC(html.HtmlElement._check(_el_9));
      let _el_10 = src__core__linker__app_view.createAndAppend(doc, "h1", _el_9);
      this.addShimE(_el_10);
      let _text_11 = html.Text.new("Do you wish to save changes");
      _el_10[$append](_text_11);
      let _el_12 = doc[$createElement]("div");
      this.createAttr(_el_12, "footer", "");
      this.addShimC(html.HtmlElement._check(_el_12));
      this[_compView_13] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 13);
      let _el_13 = this[_compView_13].rootEl;
      _el_12[$append](_el_13);
      this.createAttr(_el_13, "clear-size", "");
      this.addShimC(_el_13);
      this[_AcxDarkTheme_13_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$34 || (const$34 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$35 || (const$35 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_13_6] = new material_button__material_button.MaterialButtonComponent.new(_el_13, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_13_5]), this[_compView_13].ref, null);
      let _text_14 = html.Text.new("Save Changes And Stop Editing");
      this[_compView_15] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 15);
      let _el_15 = this[_compView_15].rootEl;
      this.createAttr(_el_15, "icon", "save");
      this.createAttr(_el_15, "size", "large");
      this.addShimC(_el_15);
      this[_MaterialIconComponent_15_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_15);
      this[_compView_15].create(this[_MaterialIconComponent_15_5], []);
      this[_compView_13].create(this[_MaterialButtonComponent_13_6], [JSArrayOfNode().of([_text_14, _el_15])]);
      this[_compView_16] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 16);
      let _el_16 = this[_compView_16].rootEl;
      _el_12[$append](_el_16);
      this.createAttr(_el_16, "clear-size", "");
      this.addShimC(_el_16);
      this[_AcxDarkTheme_16_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$36 || (const$36 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$37 || (const$37 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_16_6] = new material_button__material_button.MaterialButtonComponent.new(_el_16, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_16_5]), this[_compView_16].ref, null);
      let _text_17 = html.Text.new("Trash Changes And Stop Editing");
      this[_compView_18] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 18);
      let _el_18 = this[_compView_18].rootEl;
      this.createAttr(_el_18, "icon", "delete_forever");
      this.createAttr(_el_18, "size", "large");
      this.addShimC(_el_18);
      this[_MaterialIconComponent_18_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_18);
      this[_compView_18].create(this[_MaterialIconComponent_18_5], []);
      this[_compView_16].create(this[_MaterialButtonComponent_16_6], [JSArrayOfNode().of([_text_17, _el_18])]);
      this[_compView_19] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 19);
      let _el_19 = this[_compView_19].rootEl;
      _el_12[$append](_el_19);
      this.createAttr(_el_19, "clear-size", "");
      this.addShimC(_el_19);
      this[_AcxDarkTheme_19_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$38 || (const$38 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$39 || (const$39 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_19_6] = new material_button__material_button.MaterialButtonComponent.new(_el_19, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_19_5]), this[_compView_19].ref, null);
      let _text_20 = html.Text.new("Cancel");
      this[_compView_21] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 21);
      let _el_21 = this[_compView_21].rootEl;
      this.createAttr(_el_21, "icon", "clear");
      this.createAttr(_el_21, "size", "large");
      this.addShimC(_el_21);
      this[_MaterialIconComponent_21_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_21);
      this[_compView_21].create(this[_MaterialIconComponent_21_5], []);
      this[_compView_19].create(this[_MaterialButtonComponent_19_6], [JSArrayOfNode().of([_text_20, _el_21])]);
      this[_compView_8].create(this[_MaterialDialogComponent_8_6], [JSArrayOfElement().of([_el_9]), const$40 || (const$40 = dart.constList([], dart.dynamic)), JSArrayOfElement().of([_el_12])]);
      this[_compView_7$].create(this[_ModalComponent_7_5], [JSArrayOfHtmlElement().of([_el_8])]);
      this[_compView_22] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 22);
      let _el_22 = this[_compView_22].rootEl;
      parentRenderNode[$append](_el_22);
      this.createAttr(_el_22, "headered", "");
      this.addShimC(_el_22);
      this[_ModalComponent_22_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_22, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_22, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_23] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 23);
      let _el_23 = this[_compView_23].rootEl;
      _el_23.className = "basic-dialog";
      this.addShimC(_el_23);
      this[_AutoDismissDirective_23_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(auto_dismiss__auto_dismiss.AutoDismissDirective, dart.wrapType(auto_dismiss__auto_dismiss.AutoDismissDirective), dart.fn(() => new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_23, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAutoDismissDirective())) : new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_23, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_MaterialDialogComponent_23_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_23, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_23].ref, this[_ModalComponent_22_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_23, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_23].ref, this[_ModalComponent_22_5]);
      let _el_24 = doc[$createElement]("div");
      this.createAttr(_el_24, "header", "");
      this.addShimC(html.HtmlElement._check(_el_24));
      let _el_25 = src__core__linker__app_view.createAndAppend(doc, "h1", _el_24);
      this.addShimE(_el_25);
      let _text_26 = html.Text.new("Do you really wish to remove snippet?");
      _el_25[$append](_text_26);
      let _el_27 = doc[$createElement]("div");
      this.createAttr(_el_27, "footer", "");
      this.addShimC(html.HtmlElement._check(_el_27));
      this[_compView_28$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 28);
      let _el_28 = this[_compView_28$].rootEl;
      _el_27[$append](_el_28);
      this.createAttr(_el_28, "clear-size", "");
      this.addShimC(_el_28);
      this[_AcxDarkTheme_28_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$41 || (const$41 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$42 || (const$42 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_28_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_28, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_28_5$]), this[_compView_28$].ref, null);
      let _text_29 = html.Text.new("Remove Snippet");
      this[_compView_30] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 30);
      let _el_30 = this[_compView_30].rootEl;
      this.createAttr(_el_30, "icon", "delete_forever");
      this.createAttr(_el_30, "size", "large");
      this.addShimC(_el_30);
      this[_MaterialIconComponent_30_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_30);
      this[_compView_30].create(this[_MaterialIconComponent_30_5], []);
      this[_compView_28$].create(this[_MaterialButtonComponent_28_6$], [JSArrayOfNode().of([_text_29, _el_30])]);
      this[_compView_31] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 31);
      let _el_31 = this[_compView_31].rootEl;
      _el_27[$append](_el_31);
      this.createAttr(_el_31, "clear-size", "");
      this.addShimC(_el_31);
      this[_AcxDarkTheme_31_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$43 || (const$43 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$44 || (const$44 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_31_6] = new material_button__material_button.MaterialButtonComponent.new(_el_31, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_31_5]), this[_compView_31].ref, null);
      let _text_32 = html.Text.new("Cancel");
      this[_compView_33] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 33);
      let _el_33 = this[_compView_33].rootEl;
      this.createAttr(_el_33, "icon", "clear");
      this.createAttr(_el_33, "size", "large");
      this.addShimC(_el_33);
      this[_MaterialIconComponent_33_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_33);
      this[_compView_33].create(this[_MaterialIconComponent_33_5], []);
      this[_compView_31].create(this[_MaterialButtonComponent_31_6], [JSArrayOfNode().of([_text_32, _el_33])]);
      this[_compView_23].create(this[_MaterialDialogComponent_23_6], [JSArrayOfElement().of([_el_24]), const$45 || (const$45 = dart.constList([], dart.dynamic)), JSArrayOfElement().of([_el_27])]);
      this[_compView_22].create(this[_ModalComponent_22_5], [JSArrayOfHtmlElement().of([_el_23])]);
      this[_compView_34] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 34);
      let _el_34 = this[_compView_34].rootEl;
      parentRenderNode[$append](_el_34);
      this.createAttr(_el_34, "headered", "");
      this.addShimC(_el_34);
      this[_ModalComponent_34_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_34, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_34, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_35] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 35);
      let _el_35 = this[_compView_35].rootEl;
      _el_35.className = "basic-dialog";
      this.addShimC(_el_35);
      this[_AutoDismissDirective_35_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(auto_dismiss__auto_dismiss.AutoDismissDirective, dart.wrapType(auto_dismiss__auto_dismiss.AutoDismissDirective), dart.fn(() => new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_35, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAutoDismissDirective())) : new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_35, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_MaterialDialogComponent_35_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_35, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_35].ref, this[_ModalComponent_34_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_35, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_35].ref, this[_ModalComponent_34_5]);
      let _el_36 = doc[$createElement]("div");
      this.createAttr(_el_36, "header", "");
      this.addShimC(html.HtmlElement._check(_el_36));
      let _el_37 = src__core__linker__app_view.createAndAppend(doc, "h1", _el_36);
      this.addShimE(_el_37);
      let _text_38 = html.Text.new("Do you really wish to delete this snippet?");
      _el_37[$append](_text_38);
      let _el_39 = doc[$createElement]("div");
      this.createAttr(_el_39, "footer", "");
      this.addShimC(html.HtmlElement._check(_el_39));
      this[_compView_40] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 40);
      let _el_40 = this[_compView_40].rootEl;
      _el_39[$append](_el_40);
      this.createAttr(_el_40, "clear-size", "");
      this.addShimC(_el_40);
      this[_AcxDarkTheme_40_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$46 || (const$46 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$47 || (const$47 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_40_6] = new material_button__material_button.MaterialButtonComponent.new(_el_40, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_40_5]), this[_compView_40].ref, null);
      let _text_41 = html.Text.new("Delete Document");
      this[_compView_42] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 42);
      let _el_42 = this[_compView_42].rootEl;
      this.createAttr(_el_42, "icon", "delete_forever");
      this.createAttr(_el_42, "size", "large");
      this.addShimC(_el_42);
      this[_MaterialIconComponent_42_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_42);
      this[_compView_42].create(this[_MaterialIconComponent_42_5], []);
      this[_compView_40].create(this[_MaterialButtonComponent_40_6], [JSArrayOfNode().of([_text_41, _el_42])]);
      this[_compView_43] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 43);
      let _el_43 = this[_compView_43].rootEl;
      _el_39[$append](_el_43);
      this.createAttr(_el_43, "clear-size", "");
      this.addShimC(_el_43);
      this[_AcxDarkTheme_43_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$48 || (const$48 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$49 || (const$49 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_43_6] = new material_button__material_button.MaterialButtonComponent.new(_el_43, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_43_5]), this[_compView_43].ref, null);
      let _text_44 = html.Text.new("Cancel");
      this[_compView_45] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 45);
      let _el_45 = this[_compView_45].rootEl;
      this.createAttr(_el_45, "icon", "clear");
      this.createAttr(_el_45, "size", "large");
      this.addShimC(_el_45);
      this[_MaterialIconComponent_45_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_45);
      this[_compView_45].create(this[_MaterialIconComponent_45_5], []);
      this[_compView_43].create(this[_MaterialButtonComponent_43_6], [JSArrayOfNode().of([_text_44, _el_45])]);
      this[_compView_35].create(this[_MaterialDialogComponent_35_6], [JSArrayOfElement().of([_el_36]), const$50 || (const$50 = dart.constList([], dart.dynamic)), JSArrayOfElement().of([_el_39])]);
      this[_compView_34].create(this[_ModalComponent_34_5], [JSArrayOfHtmlElement().of([_el_35])]);
      this[_compView_46] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 46);
      let _el_46 = this[_compView_46].rootEl;
      parentRenderNode[$append](_el_46);
      this.addShimC(_el_46);
      this[_ModalComponent_46_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_46, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_46, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_47] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 47);
      let _el_47 = this[_compView_47].rootEl;
      _el_47.className = "basic-dialog";
      this.createAttr(_el_47, "headered", "");
      this.addShimC(_el_47);
      this[_AutoDismissDirective_47_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(auto_dismiss__auto_dismiss.AutoDismissDirective, dart.wrapType(auto_dismiss__auto_dismiss.AutoDismissDirective), dart.fn(() => new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_47, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAutoDismissDirective())) : new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_47, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_MaterialDialogComponent_47_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_47, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_47].ref, this[_ModalComponent_46_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_47, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_47].ref, this[_ModalComponent_46_5]);
      let _el_48 = doc[$createElement]("div");
      this.createAttr(_el_48, "header", "");
      this.addShimC(html.HtmlElement._check(_el_48));
      let _el_49 = src__core__linker__app_view.createAndAppend(doc, "h1", _el_48);
      this.addShimE(_el_49);
      let _text_50 = html.Text.new("Edit Error");
      _el_49[$append](_text_50);
      let _el_51 = doc[$createElement]("p");
      this.createAttr(_el_51, "style", "color: red");
      this.addShimE(_el_51);
      let _text_52 = html.Text.new("We are sorry. But you cannot edit this document because someone else is already editing it. Try it again later.");
      _el_51[$append](_text_52);
      let _el_53 = doc[$createElement]("div");
      this.createAttr(_el_53, "footer", "");
      this.addShimC(html.HtmlElement._check(_el_53));
      this[_compView_54] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 54);
      let _el_54 = this[_compView_54].rootEl;
      _el_53[$append](_el_54);
      this.createAttr(_el_54, "clear-size", "");
      this.addShimC(_el_54);
      this[_AcxDarkTheme_54_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$51 || (const$51 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$52 || (const$52 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_54_6] = new material_button__material_button.MaterialButtonComponent.new(_el_54, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_54_5]), this[_compView_54].ref, null);
      this[_compView_55] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 55);
      let _el_55 = this[_compView_55].rootEl;
      this.createAttr(_el_55, "icon", "clear");
      this.createAttr(_el_55, "size", "large");
      this.addShimC(_el_55);
      this[_MaterialIconComponent_55_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_55);
      this[_compView_55].create(this[_MaterialIconComponent_55_5], []);
      this[_compView_54].create(this[_MaterialButtonComponent_54_6], [JSArrayOfHtmlElement().of([_el_55])]);
      this[_compView_47].create(this[_MaterialDialogComponent_47_6], [JSArrayOfElement().of([_el_48]), JSArrayOfElement().of([_el_51]), JSArrayOfElement().of([_el_53])]);
      this[_compView_46].create(this[_ModalComponent_46_5], [JSArrayOfHtmlElement().of([_el_47])]);
      this[_compView_56] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 56);
      let _el_56 = this[_compView_56].rootEl;
      parentRenderNode[$append](_el_56);
      this.addShimC(_el_56);
      this[_ModalComponent_56_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_56, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_56, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_57] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 57);
      let _el_57 = this[_compView_57].rootEl;
      _el_57.className = "basic-dialog";
      this.createAttr(_el_57, "headered", "");
      this.addShimC(_el_57);
      this[_AutoDismissDirective_57_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(auto_dismiss__auto_dismiss.AutoDismissDirective, dart.wrapType(auto_dismiss__auto_dismiss.AutoDismissDirective), dart.fn(() => new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_57, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAutoDismissDirective())) : new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_57, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_MaterialDialogComponent_57_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_57, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_57].ref, this[_ModalComponent_56_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_57, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_57].ref, this[_ModalComponent_56_5]);
      let _el_58 = doc[$createElement]("div");
      this.createAttr(_el_58, "header", "");
      this.addShimC(html.HtmlElement._check(_el_58));
      let _el_59 = src__core__linker__app_view.createAndAppend(doc, "h1", _el_58);
      this.addShimE(_el_59);
      let _text_60 = html.Text.new("Edit Error");
      _el_59[$append](_text_60);
      let _el_61 = doc[$createElement]("p");
      this.createAttr(_el_61, "style", "color: red");
      this.addShimE(_el_61);
      let _text_62 = html.Text.new("We are sorry, but during the time you haven't held this document's lock somebody else edited it. For that reason we cannot allow you to save your current changes. Save your changes to text document and then click ");
      _el_61[$append](_text_62);
      let _el_63 = src__core__linker__app_view.createAndAppend(doc, "i", _el_61);
      this.addShimE(_el_63);
      let _text_64 = html.Text.new("Stop Editing -> Trash Changes And Stop Editing");
      _el_63[$append](_text_64);
      let _text_65 = html.Text.new(". After that you will be able to edit this document again.");
      _el_61[$append](_text_65);
      let _el_66 = doc[$createElement]("div");
      this.createAttr(_el_66, "footer", "");
      this.addShimC(html.HtmlElement._check(_el_66));
      this[_compView_67] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 67);
      let _el_67 = this[_compView_67].rootEl;
      _el_66[$append](_el_67);
      this.createAttr(_el_67, "clear-size", "");
      this.addShimC(_el_67);
      this[_AcxDarkTheme_67_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$53 || (const$53 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$54 || (const$54 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_67_6] = new material_button__material_button.MaterialButtonComponent.new(_el_67, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_67_5]), this[_compView_67].ref, null);
      this[_compView_68] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 68);
      let _el_68 = this[_compView_68].rootEl;
      this.createAttr(_el_68, "icon", "clear");
      this.createAttr(_el_68, "size", "large");
      this.addShimC(_el_68);
      this[_MaterialIconComponent_68_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_68);
      this[_compView_68].create(this[_MaterialIconComponent_68_5], []);
      this[_compView_67].create(this[_MaterialButtonComponent_67_6], [JSArrayOfHtmlElement().of([_el_68])]);
      this[_compView_57].create(this[_MaterialDialogComponent_57_6], [JSArrayOfElement().of([_el_58]), JSArrayOfElement().of([_el_61]), JSArrayOfElement().of([_el_66])]);
      this[_compView_56].create(this[_ModalComponent_56_5], [JSArrayOfHtmlElement().of([_el_57])]);
      this[_compView_69] = new laminate__components__modal__modal$46template.ViewModalComponent0.new(this, 69);
      let _el_69 = this[_compView_69].rootEl;
      parentRenderNode[$append](_el_69);
      this.addShimC(_el_69);
      this[_ModalComponent_69_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(laminate__components__modal__modal.ModalComponent, dart.wrapType(laminate__components__modal__modal.ModalComponent), dart.fn(() => new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_69, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null))), VoidToModalComponent())) : new laminate__components__modal__modal.ModalComponent.new(src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), _el_69, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.viewData.parentIndex, null)), laminate__components__modal__modal.GlobalModalStack._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.GlobalModalStack), this.viewData.parentIndex, null)));
      this[_compView_70] = new material_dialog__material_dialog$46template.ViewMaterialDialogComponent0.new(this, 70);
      let _el_70 = this[_compView_70].rootEl;
      _el_70.className = "basic-dialog";
      this.createAttr(_el_70, "headered", "");
      this.addShimC(_el_70);
      this[_AutoDismissDirective_70_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(auto_dismiss__auto_dismiss.AutoDismissDirective, dart.wrapType(auto_dismiss__auto_dismiss.AutoDismissDirective), dart.fn(() => new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_70, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAutoDismissDirective())) : new auto_dismiss__auto_dismiss.AutoDismissDirective.new(_el_70, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      this[_MaterialDialogComponent_70_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_dialog__material_dialog.MaterialDialogComponent, dart.wrapType(material_dialog__material_dialog.MaterialDialogComponent), dart.fn(() => new material_dialog__material_dialog.MaterialDialogComponent.new(_el_70, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_70].ref, this[_ModalComponent_69_5]), VoidToMaterialDialogComponent())) : new material_dialog__material_dialog.MaterialDialogComponent.new(_el_70, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), this[_compView_70].ref, this[_ModalComponent_69_5]);
      let _el_71 = doc[$createElement]("div");
      this.createAttr(_el_71, "header", "");
      this.addShimC(html.HtmlElement._check(_el_71));
      let _el_72 = src__core__linker__app_view.createAndAppend(doc, "h1", _el_71);
      this.addShimE(_el_72);
      let _text_73 = html.Text.new("Rename Error");
      _el_72[$append](_text_73);
      let _el_74 = doc[$createElement]("p");
      this.createAttr(_el_74, "style", "color: red");
      this.addShimE(_el_74);
      let _text_75 = html.Text.new("We are sorry. But we were unable to rename the document, because the new name is not unique.");
      _el_74[$append](_text_75);
      let _el_76 = doc[$createElement]("div");
      this.createAttr(_el_76, "footer", "");
      this.addShimC(html.HtmlElement._check(_el_76));
      this[_compView_77] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 77);
      let _el_77 = this[_compView_77].rootEl;
      _el_76[$append](_el_77);
      this.createAttr(_el_77, "clear-size", "");
      this.addShimC(_el_77);
      this[_AcxDarkTheme_77_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$55 || (const$55 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$56 || (const$56 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_77_6] = new material_button__material_button.MaterialButtonComponent.new(_el_77, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_77_5]), this[_compView_77].ref, null);
      this[_compView_78] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 78);
      let _el_78 = this[_compView_78].rootEl;
      this.createAttr(_el_78, "icon", "clear");
      this.createAttr(_el_78, "size", "large");
      this.addShimC(_el_78);
      this[_MaterialIconComponent_78_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_78);
      this[_compView_78].create(this[_MaterialIconComponent_78_5], []);
      this[_compView_77].create(this[_MaterialButtonComponent_77_6], [JSArrayOfHtmlElement().of([_el_78])]);
      this[_compView_70].create(this[_MaterialDialogComponent_70_6], [JSArrayOfElement().of([_el_71]), JSArrayOfElement().of([_el_74]), JSArrayOfElement().of([_el_76])]);
      this[_compView_69].create(this[_ModalComponent_69_5], [JSArrayOfHtmlElement().of([_el_70])]);
      let subscription_0 = this[_AutoDismissDirective_8_5].dismiss.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_dismiss_8_0)));
      let subscription_1 = this[_MaterialButtonComponent_13_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'saveChangesAndStopEdit')));
      let subscription_2 = this[_MaterialButtonComponent_16_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'trashChangesAndStopEdit')));
      let subscription_3 = this[_MaterialButtonComponent_19_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_19_0)));
      let subscription_4 = this[_AutoDismissDirective_23_5].dismiss.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_dismiss_23_0)));
      let subscription_5 = this[_MaterialButtonComponent_28_6$].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'removeSnippet')));
      let subscription_6 = this[_MaterialButtonComponent_31_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_31_0)));
      let subscription_7 = this[_AutoDismissDirective_35_5].dismiss.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_dismiss_35_0)));
      let subscription_8 = this[_MaterialButtonComponent_40_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'removeDocument')));
      let subscription_9 = this[_MaterialButtonComponent_43_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_43_0)));
      let subscription_10 = this[_AutoDismissDirective_47_5].dismiss.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_dismiss_47_0)));
      let subscription_11 = this[_MaterialButtonComponent_54_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_54_0)));
      let subscription_12 = this[_AutoDismissDirective_57_5].dismiss.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_dismiss_57_0)));
      let subscription_13 = this[_MaterialButtonComponent_67_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_67_0)));
      let subscription_14 = this[_AutoDismissDirective_70_5].dismiss.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_dismiss_70_0)));
      let subscription_15 = this[_MaterialButtonComponent_77_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_77_0)));
      this[_pipe_time_0] = new src__view__view_document__time_pipe.TimePipe.new();
      this.init(const$57 || (const$57 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7, subscription_8, subscription_9, subscription_10, subscription_11, subscription_12, subscription_13, subscription_14, subscription_15]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 13 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 15) {
        return this[_AcxDarkTheme_13_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 13 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 15) {
        return this[_MaterialButtonComponent_13_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 16 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 18) {
        return this[_AcxDarkTheme_16_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 16 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 18) {
        return this[_MaterialButtonComponent_16_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 19 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 21) {
        return this[_AcxDarkTheme_19_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 19 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 21) {
        return this[_MaterialButtonComponent_19_6];
      }
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 21) {
        return this[_ModalComponent_7_5];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 28 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 30) {
        return this[_AcxDarkTheme_28_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 28 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 30) {
        return this[_MaterialButtonComponent_28_6$];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 31 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 33) {
        return this[_AcxDarkTheme_31_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 31 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 33) {
        return this[_MaterialButtonComponent_31_6];
      }
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 22 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 33) {
        return this[_ModalComponent_22_5];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 40 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 42) {
        return this[_AcxDarkTheme_40_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 40 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 42) {
        return this[_MaterialButtonComponent_40_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 43 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 45) {
        return this[_AcxDarkTheme_43_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 43 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 45) {
        return this[_MaterialButtonComponent_43_6];
      }
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 34 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 45) {
        return this[_ModalComponent_34_5];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 54 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 55) {
        return this[_AcxDarkTheme_54_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 54 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 55) {
        return this[_MaterialButtonComponent_54_6];
      }
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 46 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 55) {
        return this[_ModalComponent_46_5];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 67 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 68) {
        return this[_AcxDarkTheme_67_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 67 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 68) {
        return this[_MaterialButtonComponent_67_6];
      }
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 56 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 68) {
        return this[_ModalComponent_56_5];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 77 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 78) {
        return this[_AcxDarkTheme_77_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 77 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 78) {
        return this[_MaterialButtonComponent_77_6];
      }
      if ((token === dart.wrapType(laminate__components__modal__modal.ModalComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(laminate__components__modal__modal.Modal)) && 69 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 78) {
        return this[_ModalComponent_69_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_0_9$].ngIf = _ctx.document != null;
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.editMode);
      this[_NgIf_3_9$].ngIf = _ctx.editMode;
      this[_NgIf_5_9$].ngIf = !dart.test(_ctx.showMetadata);
      this[_NgIf_6_9$].ngIf = _ctx.showMetadata;
      let currVal_5 = _ctx.showSaveChangesDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_ModalComponent_7_5].visible = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.showSaveChangesDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6$], currVal_6))) {
        this[_AutoDismissDirective_8_5].autoDismissable = currVal_6;
        this[_expr_6$] = currVal_6;
      }
      changed = false;
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      changed = false;
      let currVal_7 = _ctx.lockDuration == null || dart.test(_ctx.lockDuration.isNegative);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7$], currVal_7))) {
        this[_MaterialButtonComponent_13_6].disabled = currVal_7;
        changed = true;
        this[_expr_7$] = currVal_7;
      }
      if (changed) {
        this[_compView_13].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_13_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_15_5].icon = "save";
        changed = true;
      }
      if (changed) {
        this[_compView_15].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_16].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_16_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_18_5].icon = "delete_forever";
        changed = true;
      }
      if (changed) {
        this[_compView_18].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_19].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_19_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_21_5].icon = "clear";
        changed = true;
      }
      if (changed) {
        this[_compView_21].markAsCheckOnce();
      }
      let currVal_11 = _ctx.showRemoveSnippetDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_ModalComponent_22_5].visible = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.showRemoveSnippetDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_AutoDismissDirective_23_5].autoDismissable = currVal_12;
        this[_expr_12] = currVal_12;
      }
      changed = false;
      if (changed) {
        this[_compView_23].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_28$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_28_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_30_5].icon = "delete_forever";
        changed = true;
      }
      if (changed) {
        this[_compView_30].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_31].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_31_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_33_5].icon = "clear";
        changed = true;
      }
      if (changed) {
        this[_compView_33].markAsCheckOnce();
      }
      let currVal_15 = _ctx.showDeleteDocumentDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_ModalComponent_34_5].visible = currVal_15;
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = _ctx.showDeleteDocumentDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        this[_AutoDismissDirective_35_5].autoDismissable = currVal_16;
        this[_expr_16] = currVal_16;
      }
      changed = false;
      if (changed) {
        this[_compView_35].markAsCheckOnce();
      }
      changed = false;
      let currVal_17 = _ctx.lockDuration == null || dart.test(_ctx.lockDuration.isNegative);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
        this[_MaterialButtonComponent_40_6].disabled = currVal_17;
        changed = true;
        this[_expr_17] = currVal_17;
      }
      if (changed) {
        this[_compView_40].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_40_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_42_5].icon = "delete_forever";
        changed = true;
      }
      if (changed) {
        this[_compView_42].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_43].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_43_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_45_5].icon = "clear";
        changed = true;
      }
      if (changed) {
        this[_compView_45].markAsCheckOnce();
      }
      let currVal_20 = _ctx.showCannotEditDialog1;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
        this[_ModalComponent_46_5].visible = currVal_20;
        this[_expr_20] = currVal_20;
      }
      let currVal_21 = _ctx.showCannotEditDialog1;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_21], currVal_21))) {
        this[_AutoDismissDirective_47_5].autoDismissable = currVal_21;
        this[_expr_21] = currVal_21;
      }
      changed = false;
      if (changed) {
        this[_compView_47].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_54].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_54_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_55_5].icon = "clear";
        changed = true;
      }
      if (changed) {
        this[_compView_55].markAsCheckOnce();
      }
      let currVal_23 = _ctx.showCannotEditDialog2;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_23], currVal_23))) {
        this[_ModalComponent_56_5].visible = currVal_23;
        this[_expr_23] = currVal_23;
      }
      let currVal_24 = _ctx.showCannotEditDialog2;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_24], currVal_24))) {
        this[_AutoDismissDirective_57_5].autoDismissable = currVal_24;
        this[_expr_24] = currVal_24;
      }
      changed = false;
      if (changed) {
        this[_compView_57].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_67].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_67_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_68_5].icon = "clear";
        changed = true;
      }
      if (changed) {
        this[_compView_68].markAsCheckOnce();
      }
      let currVal_26 = _ctx.showRenameUnsuccessfulDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_26], currVal_26))) {
        this[_ModalComponent_69_5].visible = currVal_26;
        this[_expr_26] = currVal_26;
      }
      let currVal_27 = _ctx.showRenameUnsuccessfulDialog;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_27], currVal_27))) {
        this[_AutoDismissDirective_70_5].autoDismissable = currVal_27;
        this[_expr_27] = currVal_27;
      }
      changed = false;
      if (changed) {
        this[_compView_70].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_77].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_77_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_78_5].icon = "clear";
        changed = true;
      }
      if (changed) {
        this[_compView_78].markAsCheckOnce();
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_3$].detectChangesInNestedViews();
      this[_appEl_5$].detectChangesInNestedViews();
      this[_appEl_6$].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_MaterialDialogComponent_8_6].ngAfterContentChecked();
        this[_MaterialDialogComponent_23_6].ngAfterContentChecked();
        this[_MaterialDialogComponent_35_6].ngAfterContentChecked();
        this[_MaterialDialogComponent_47_6].ngAfterContentChecked();
        this[_MaterialDialogComponent_57_6].ngAfterContentChecked();
        this[_MaterialDialogComponent_70_6].ngAfterContentChecked();
      }
      this[_compView_7$].detectHostChanges(firstCheck);
      this[_compView_13].detectHostChanges(firstCheck);
      this[_compView_16].detectHostChanges(firstCheck);
      this[_compView_19].detectHostChanges(firstCheck);
      this[_compView_22].detectHostChanges(firstCheck);
      this[_compView_28$].detectHostChanges(firstCheck);
      this[_compView_31].detectHostChanges(firstCheck);
      this[_compView_34].detectHostChanges(firstCheck);
      this[_compView_40].detectHostChanges(firstCheck);
      this[_compView_43].detectHostChanges(firstCheck);
      this[_compView_46].detectHostChanges(firstCheck);
      this[_compView_54].detectHostChanges(firstCheck);
      this[_compView_56].detectHostChanges(firstCheck);
      this[_compView_67].detectHostChanges(firstCheck);
      this[_compView_69].detectHostChanges(firstCheck);
      this[_compView_77].detectHostChanges(firstCheck);
      this[_compView_7$].detectChanges();
      this[_compView_8].detectChanges();
      this[_compView_13].detectChanges();
      this[_compView_15].detectChanges();
      this[_compView_16].detectChanges();
      this[_compView_18].detectChanges();
      this[_compView_19].detectChanges();
      this[_compView_21].detectChanges();
      this[_compView_22].detectChanges();
      this[_compView_23].detectChanges();
      this[_compView_28$].detectChanges();
      this[_compView_30].detectChanges();
      this[_compView_31].detectChanges();
      this[_compView_33].detectChanges();
      this[_compView_34].detectChanges();
      this[_compView_35].detectChanges();
      this[_compView_40].detectChanges();
      this[_compView_42].detectChanges();
      this[_compView_43].detectChanges();
      this[_compView_45].detectChanges();
      this[_compView_46].detectChanges();
      this[_compView_47].detectChanges();
      this[_compView_54].detectChanges();
      this[_compView_55].detectChanges();
      this[_compView_56].detectChanges();
      this[_compView_57].detectChanges();
      this[_compView_67].detectChanges();
      this[_compView_68].detectChanges();
      this[_compView_69].detectChanges();
      this[_compView_70].detectChanges();
      this[_compView_77].detectChanges();
      this[_compView_78].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ModalComponent_7_5].ngAfterViewInit();
          this[_ModalComponent_22_5].ngAfterViewInit();
          this[_ModalComponent_34_5].ngAfterViewInit();
          this[_ModalComponent_46_5].ngAfterViewInit();
          this[_ModalComponent_56_5].ngAfterViewInit();
          this[_ModalComponent_69_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$].destroyNestedViews();
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_3$].destroyNestedViews();
      this[_appEl_5$].destroyNestedViews();
      this[_appEl_6$].destroyNestedViews();
      this[_compView_7$].destroy();
      this[_compView_8].destroy();
      this[_compView_13].destroy();
      this[_compView_15].destroy();
      this[_compView_16].destroy();
      this[_compView_18].destroy();
      this[_compView_19].destroy();
      this[_compView_21].destroy();
      this[_compView_22].destroy();
      this[_compView_23].destroy();
      this[_compView_28$].destroy();
      this[_compView_30].destroy();
      this[_compView_31].destroy();
      this[_compView_33].destroy();
      this[_compView_34].destroy();
      this[_compView_35].destroy();
      this[_compView_40].destroy();
      this[_compView_42].destroy();
      this[_compView_43].destroy();
      this[_compView_45].destroy();
      this[_compView_46].destroy();
      this[_compView_47].destroy();
      this[_compView_54].destroy();
      this[_compView_55].destroy();
      this[_compView_56].destroy();
      this[_compView_57].destroy();
      this[_compView_67].destroy();
      this[_compView_68].destroy();
      this[_compView_69].destroy();
      this[_compView_70].destroy();
      this[_compView_77].destroy();
      this[_compView_78].destroy();
      this[_MaterialDialogComponent_8_6].ngOnDestroy();
      this[_ModalComponent_7_5].ngOnDestroy();
      this[_MaterialDialogComponent_23_6].ngOnDestroy();
      this[_ModalComponent_22_5].ngOnDestroy();
      this[_MaterialDialogComponent_35_6].ngOnDestroy();
      this[_ModalComponent_34_5].ngOnDestroy();
      this[_MaterialDialogComponent_47_6].ngOnDestroy();
      this[_ModalComponent_46_5].ngOnDestroy();
      this[_MaterialDialogComponent_57_6].ngOnDestroy();
      this[_ModalComponent_56_5].ngOnDestroy();
      this[_MaterialDialogComponent_70_6].ngOnDestroy();
      this[_ModalComponent_69_5].ngOnDestroy();
    }
    [_handle_dismiss_8_0]($event) {
      this.ctx.showSaveChangesDialog = false;
    }
    [_handle_trigger_19_0]($event) {
      this.ctx.showSaveChangesDialog = false;
    }
    [_handle_dismiss_23_0]($event) {
      this.ctx.showRemoveSnippetDialog = false;
    }
    [_handle_trigger_31_0]($event) {
      this.ctx.showRemoveSnippetDialog = false;
    }
    [_handle_dismiss_35_0]($event) {
      this.ctx.showDeleteDocumentDialog = false;
    }
    [_handle_trigger_43_0]($event) {
      this.ctx.showDeleteDocumentDialog = false;
    }
    [_handle_dismiss_47_0]($event) {
      this.ctx.showCannotEditDialog1 = false;
    }
    [_handle_trigger_54_0]($event) {
      this.ctx.showCannotEditDialog1 = false;
    }
    [_handle_dismiss_57_0]($event) {
      this.ctx.showCannotEditDialog2 = false;
    }
    [_handle_trigger_67_0]($event) {
      this.ctx.showCannotEditDialog2 = false;
    }
    [_handle_dismiss_70_0]($event) {
      this.ctx.showRenameUnsuccessfulDialog = false;
    }
    [_handle_trigger_77_0]($event) {
      this.ctx.showRenameUnsuccessfulDialog = false;
    }
  };
  (src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$] = null;
    this[_NgIf_0_9$] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_3$] = null;
    this[_NgIf_3_9$] = null;
    this[_appEl_5$] = null;
    this[_NgIf_5_9$] = null;
    this[_appEl_6$] = null;
    this[_NgIf_6_9$] = null;
    this[_compView_7$] = null;
    this[_ModalComponent_7_5] = null;
    this[_compView_8] = null;
    this[_AutoDismissDirective_8_5] = null;
    this[_MaterialDialogComponent_8_6] = null;
    this[_compView_13] = null;
    this[_AcxDarkTheme_13_5] = null;
    this[_MaterialButtonComponent_13_6] = null;
    this[_compView_15] = null;
    this[_MaterialIconComponent_15_5] = null;
    this[_compView_16] = null;
    this[_AcxDarkTheme_16_5] = null;
    this[_MaterialButtonComponent_16_6] = null;
    this[_compView_18] = null;
    this[_MaterialIconComponent_18_5] = null;
    this[_compView_19] = null;
    this[_AcxDarkTheme_19_5] = null;
    this[_MaterialButtonComponent_19_6] = null;
    this[_compView_21] = null;
    this[_MaterialIconComponent_21_5] = null;
    this[_compView_22] = null;
    this[_ModalComponent_22_5] = null;
    this[_compView_23] = null;
    this[_AutoDismissDirective_23_5] = null;
    this[_MaterialDialogComponent_23_6] = null;
    this[_compView_28$] = null;
    this[_AcxDarkTheme_28_5$] = null;
    this[_MaterialButtonComponent_28_6$] = null;
    this[_compView_30] = null;
    this[_MaterialIconComponent_30_5] = null;
    this[_compView_31] = null;
    this[_AcxDarkTheme_31_5] = null;
    this[_MaterialButtonComponent_31_6] = null;
    this[_compView_33] = null;
    this[_MaterialIconComponent_33_5] = null;
    this[_compView_34] = null;
    this[_ModalComponent_34_5] = null;
    this[_compView_35] = null;
    this[_AutoDismissDirective_35_5] = null;
    this[_MaterialDialogComponent_35_6] = null;
    this[_compView_40] = null;
    this[_AcxDarkTheme_40_5] = null;
    this[_MaterialButtonComponent_40_6] = null;
    this[_compView_42] = null;
    this[_MaterialIconComponent_42_5] = null;
    this[_compView_43] = null;
    this[_AcxDarkTheme_43_5] = null;
    this[_MaterialButtonComponent_43_6] = null;
    this[_compView_45] = null;
    this[_MaterialIconComponent_45_5] = null;
    this[_compView_46] = null;
    this[_ModalComponent_46_5] = null;
    this[_compView_47] = null;
    this[_AutoDismissDirective_47_5] = null;
    this[_MaterialDialogComponent_47_6] = null;
    this[_compView_54] = null;
    this[_AcxDarkTheme_54_5] = null;
    this[_MaterialButtonComponent_54_6] = null;
    this[_compView_55] = null;
    this[_MaterialIconComponent_55_5] = null;
    this[_compView_56] = null;
    this[_ModalComponent_56_5] = null;
    this[_compView_57] = null;
    this[_AutoDismissDirective_57_5] = null;
    this[_MaterialDialogComponent_57_6] = null;
    this[_compView_67] = null;
    this[_AcxDarkTheme_67_5] = null;
    this[_MaterialButtonComponent_67_6] = null;
    this[_compView_68] = null;
    this[_MaterialIconComponent_68_5] = null;
    this[_compView_69] = null;
    this[_ModalComponent_69_5] = null;
    this[_compView_70] = null;
    this[_AutoDismissDirective_70_5] = null;
    this[_MaterialDialogComponent_70_6] = null;
    this[_compView_77] = null;
    this[_AcxDarkTheme_77_5] = null;
    this[_MaterialButtonComponent_77_6] = null;
    this[_compView_78] = null;
    this[_MaterialIconComponent_78_5] = null;
    this[_expr_5] = null;
    this[_expr_6$] = null;
    this[_expr_7$] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_expr_20] = null;
    this[_expr_21] = null;
    this[_expr_23] = null;
    this[_expr_24] = null;
    this[_expr_26] = null;
    this[_expr_27] = null;
    this[_pipe_time_0] = null;
    src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("view-document"));
    let t = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
    t == null ? src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:Internal_lore/lib/src/view/view_document/view_document_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__view__view_document__view_document_component$46template.styles$ViewDocumentComponent) : t;
    this.setupComponentType(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType);
  }).prototype = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_dismiss_8_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_19_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_dismiss_23_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_31_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_dismiss_35_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_43_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_dismiss_47_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_54_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_dismiss_57_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_67_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_dismiss_70_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_77_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0.__proto__),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_3$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_6$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_compView_7$]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_7_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_8]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_AutoDismissDirective_8_5]: dart.fieldType(auto_dismiss__auto_dismiss.AutoDismissDirective),
    [_MaterialDialogComponent_8_6]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_compView_13]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_13_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_13_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_15]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_15_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_16]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_16_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_16_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_18]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_18_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_19]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_19_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_19_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_21]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_21_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_22]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_22_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_23]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_AutoDismissDirective_23_5]: dart.fieldType(auto_dismiss__auto_dismiss.AutoDismissDirective),
    [_MaterialDialogComponent_23_6]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_compView_28$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_28_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_28_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_30]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_30_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_31]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_31_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_31_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_33]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_33_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_34]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_34_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_35]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_AutoDismissDirective_35_5]: dart.fieldType(auto_dismiss__auto_dismiss.AutoDismissDirective),
    [_MaterialDialogComponent_35_6]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_compView_40]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_40_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_40_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_42]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_42_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_43]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_43_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_43_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_45]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_45_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_46]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_46_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_47]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_AutoDismissDirective_47_5]: dart.fieldType(auto_dismiss__auto_dismiss.AutoDismissDirective),
    [_MaterialDialogComponent_47_6]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_compView_54]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_54_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_54_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_55]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_55_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_56]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_56_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_57]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_AutoDismissDirective_57_5]: dart.fieldType(auto_dismiss__auto_dismiss.AutoDismissDirective),
    [_MaterialDialogComponent_57_6]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_compView_67]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_67_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_67_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_68]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_68_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_69]: dart.fieldType(laminate__components__modal__modal$46template.ViewModalComponent0),
    [_ModalComponent_69_5]: dart.fieldType(laminate__components__modal__modal.ModalComponent),
    [_compView_70]: dart.fieldType(material_dialog__material_dialog$46template.ViewMaterialDialogComponent0),
    [_AutoDismissDirective_70_5]: dart.fieldType(auto_dismiss__auto_dismiss.AutoDismissDirective),
    [_MaterialDialogComponent_70_6]: dart.fieldType(material_dialog__material_dialog.MaterialDialogComponent),
    [_compView_77]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_77_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_77_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_78]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_78_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_5]: dart.fieldType(core.bool),
    [_expr_6$]: dart.fieldType(core.bool),
    [_expr_7$]: dart.fieldType(core.bool),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool),
    [_expr_15]: dart.fieldType(core.bool),
    [_expr_16]: dart.fieldType(core.bool),
    [_expr_17]: dart.fieldType(core.bool),
    [_expr_20]: dart.fieldType(core.bool),
    [_expr_21]: dart.fieldType(core.bool),
    [_expr_23]: dart.fieldType(core.bool),
    [_expr_24]: dart.fieldType(core.bool),
    [_expr_26]: dart.fieldType(core.bool),
    [_expr_27]: dart.fieldType(core.bool),
    [_pipe_time_0]: dart.fieldType(src__view__view_document__time_pipe.TimePipe)
  }));
  dart.defineLazy(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0, {
    /*src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent0 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document__view_document_component$46template, {
    /*src__view__view_document__view_document_component$46template._ViewDocumentComponentNgFactory*/get _ViewDocumentComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfViewDocumentComponent()).new("view-document", dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponentHost0, AppViewAndintToAppViewOfViewDocumentComponent())));
    }
  });
  dart.copyProperties(src__view__view_document__view_document_component$46template, {
    get ViewDocumentComponentNgFactory() {
      return src__view__view_document__view_document_component$46template._ViewDocumentComponentNgFactory;
    }
  });
  const _appEl_4$ = Symbol('_appEl_4');
  const _NgIf_4_9$ = Symbol('_NgIf_4_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgFor_7_9 = Symbol('_NgFor_7_9');
  const _expr_3 = Symbol('_expr_3');
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1 = class _ViewViewDocumentComponent1 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_1.className = "header-bar";
      this.addShimC(_el_1);
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, _el_1);
      _el_2.className = "title";
      this.addShimC(_el_2);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      _el_2[$append](_anchor_3);
      this[_appEl_3$] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent2, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_3_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      _el_2[$append](_anchor_4);
      this[_appEl_4$] = new src__core__linker__view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent3, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_4_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4$], _TemplateRef_4_8);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_5);
      this[_appEl_5$] = new src__core__linker__view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent4, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_5_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5$], _TemplateRef_5_8);
      let _el_6 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_6.className = "scrollable";
      this.addShimC(_el_6);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      _el_6[$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 6, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent7, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgFor_7_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_7], _TemplateRef_7_8);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_3_9$].ngIf = _ctx.showName;
      this[_NgIf_4_9$].ngIf = !dart.test(_ctx.showName);
      this[_NgIf_5_9$].ngIf = dart.test(_ctx.editMode) && _ctx.lockDuration != null;
      let currVal_3 = _ctx.document.snippets;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_NgFor_7_9].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_7_9].ngDoCheck();
      }
      this[_appEl_3$].detectChangesInNestedViews();
      this[_appEl_4$].detectChangesInNestedViews();
      this[_appEl_5$].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_3$].destroyNestedViews();
      this[_appEl_4$].destroyNestedViews();
      this[_appEl_5$].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1.new = function(parentView, parentIndex) {
    this[_appEl_3$] = null;
    this[_NgIf_3_9$] = null;
    this[_appEl_4$] = null;
    this[_NgIf_4_9$] = null;
    this[_appEl_5$] = null;
    this[_NgIf_5_9$] = null;
    this[_appEl_7] = null;
    this[_NgFor_7_9] = null;
    this[_expr_3] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1.__proto__),
    [_appEl_3$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_5$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_7_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent1 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent1.new(parentView, parentIndex);
  };
  const _expr_0$0 = Symbol('_expr_0');
  const _text_1 = Symbol('_text_1');
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2 = class _ViewViewDocumentComponent2 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h1");
      this.addShimE(_el_0);
      this[_text_1] = html.Text.new("");
      _el_0[$append](this[_text_1]);
      _el_0[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'editName')));
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.document.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0$0] = currVal_0;
      }
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2.new = function(parentView, parentIndex) {
    this[_expr_0$0] = null;
    this[_text_1] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2.__proto__),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_text_1]: dart.fieldType(html.Text)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent2 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent2.new(parentView, parentIndex);
  };
  const _DefaultValueAccessor_1_5$ = Symbol('_DefaultValueAccessor_1_5');
  const _NgValueAccessor_1_6$ = Symbol('_NgValueAccessor_1_6');
  const _NgModel_1_7$ = Symbol('_NgModel_1_7');
  const _compView_2$ = Symbol('_compView_2');
  const _AcxDarkTheme_2_5$ = Symbol('_AcxDarkTheme_2_5');
  const _MaterialButtonComponent_2_6$ = Symbol('_MaterialButtonComponent_2_6');
  const _compView_3$ = Symbol('_compView_3');
  const _MaterialIconComponent_3_5$ = Symbol('_MaterialIconComponent_3_5');
  let const$58;
  let const$59;
  const _handle_input_1_2$ = Symbol('_handle_input_1_2');
  const _handle_ngModelChange_1_0$ = Symbol('_handle_ngModelChange_1_0');
  let const$60;
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3 = class _ViewViewDocumentComponent3 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__core__linker__app_view.createAndAppend(doc, "input", _el_0);
      this.addShimC(html.HtmlElement._check(_el_1));
      this[_DefaultValueAccessor_1_5$] = new src__directives__default_value_accessor.DefaultValueAccessor.new(html.HtmlElement._check(_el_1));
      this[_NgValueAccessor_1_6$] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_1_5$]]);
      this[_NgModel_1_7$] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_1_6$]);
      this[_compView_2$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 2);
      let _el_2 = this[_compView_2$].rootEl;
      _el_0[$append](_el_2);
      this.createAttr(_el_2, "icon", "");
      this.addShimC(_el_2);
      this[_AcxDarkTheme_2_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$58 || (const$58 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$59 || (const$59 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_2_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_2, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_2_5$]), this[_compView_2$].ref, null);
      this[_compView_3$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3$].rootEl;
      this.createAttr(_el_3, "icon", "done");
      this.createAttr(_el_3, "size", "small");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3$].create(this[_MaterialIconComponent_3_5$], []);
      this[_compView_2$].create(this[_MaterialButtonComponent_2_6$], [JSArrayOfHtmlElement().of([_el_3])]);
      _el_1[$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_1_5$], 'touchHandler')));
      _el_1[$addEventListener]("input", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_1_2$)));
      let subscription_0 = this[_NgModel_1_7$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_1_0$)));
      let subscription_1 = this[_MaterialButtonComponent_2_6$].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'deselect')));
      this.init([_el_0], [subscription_0, subscription_1]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$60 || (const$60 = dart.const(new (MultiTokenOfControlValueAccessor()).new("NgValueAccessor")))) && 1 === nodeIndex) {
        return this[_NgValueAccessor_1_6$];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 1 === nodeIndex) {
        return this[_NgModel_1_7$];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_AcxDarkTheme_2_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialButtonComponent_2_6$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_1_7$].model = _ctx.document.name;
      this[_NgModel_1_7$].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_1_7$].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_2$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_2_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5$].icon = "done";
        changed = true;
      }
      if (changed) {
        this[_compView_3$].markAsCheckOnce();
      }
      this[_compView_2$].detectHostChanges(firstCheck);
      this[_compView_2$].detectChanges();
      this[_compView_3$].detectChanges();
    }
    destroyInternal() {
      this[_compView_2$].destroy();
      this[_compView_3$].destroy();
    }
    [_handle_ngModelChange_1_0$]($event) {
      this.ctx.document.name = core.String._check($event);
    }
    [_handle_input_1_2$]($event) {
      this[_DefaultValueAccessor_1_5$].handleChange(core.String._check(dart.dload(dart.dload($event, 'target'), 'value')));
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3.new = function(parentView, parentIndex) {
    this[_DefaultValueAccessor_1_5$] = null;
    this[_NgValueAccessor_1_6$] = null;
    this[_NgModel_1_7$] = null;
    this[_compView_2$] = null;
    this[_AcxDarkTheme_2_5$] = null;
    this[_MaterialButtonComponent_2_6$] = null;
    this[_compView_3$] = null;
    this[_MaterialIconComponent_3_5$] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_1_0$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_1_2$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3.__proto__),
    [_DefaultValueAccessor_1_5$]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_1_6$]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_1_7$]: dart.fieldType(src__directives__ng_model.NgModel),
    [_compView_2$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_2_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_2_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_3$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent3 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent3.new(parentView, parentIndex);
  };
  const _anchor_1$ = Symbol('_anchor_1');
  const _el_1_0$ = Symbol('_el_1_0');
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4 = class _ViewViewDocumentComponent4 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      _el_0.className = "lock-duration";
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_anchor_1$] = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](this[_anchor_1$]);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_2);
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent6, AppViewAndintToAppViewOfViewDocumentComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.lockDuration.isNegative === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        if (currVal_0) {
          let doc = html.document;
          this[_el_1_0$] = html.DivElement._check(doc[$createElement]("div"));
          this.addShimC(this[_el_1_0$]);
          let _el_1_1 = src__core__linker__app_view.createAndAppend(doc, "h2", this[_el_1_0$]);
          this.addShimE(_el_1_1);
          let _text_1_2 = html.Text.new("Your lock has run out. Please try to extend your lock.");
          _el_1_1[$append](_text_1_2);
          this.addInlinedNodes(this[_anchor_1$], JSArrayOfNode().of([this[_el_1_0$]]));
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_1_0$]]));
        }
        this[_expr_0$0] = currVal_0;
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.lockDuration.isNegative);
      this[_appEl_2$].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_2$].destroyNestedViews();
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4.new = function(parentView, parentIndex) {
    this[_appEl_2$] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0$0] = false;
    this[_anchor_1$] = null;
    this[_el_1_0$] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4.__proto__),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$0]: dart.fieldType(core.bool),
    [_anchor_1$]: dart.fieldType(html.Comment),
    [_el_1_0$]: dart.fieldType(html.DivElement)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent4 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent4.new(parentView, parentIndex);
  };
  const _pipe_time_0_0 = Symbol('_pipe_time_0_0');
  const _text_3 = Symbol('_text_3');
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6 = class _ViewViewDocumentComponent6 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__core__linker__app_view.createAndAppend(doc, "h2", _el_0);
      this.addShimE(_el_1);
      let _text_2 = html.Text.new("Your lock will expire in: ");
      _el_1[$append](_text_2);
      this[_text_3] = html.Text.new("");
      _el_1[$append](this[_text_3]);
      this[_pipe_time_0_0] = src__core__linker__app_view_utils.pureProxy1(core.String, core.Duration, dart.bind(src__runtime__optimizations.unsafeCast(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0, this.parentView.parentView.parentView)[_pipe_time_0], 'transform'));
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(this[_pipe_time_0_0](_ctx.lockDuration));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_text_3][$text] = core.String._check(currVal_0);
        this[_expr_0$0] = currVal_0;
      }
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6.new = function(parentView, parentIndex) {
    this[_expr_0$0] = null;
    this[_pipe_time_0_0] = null;
    this[_text_3] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6.__proto__),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_pipe_time_0_0]: dart.fieldType(DurationToString()),
    [_text_3]: dart.fieldType(html.Text)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent6 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent6.new(parentView, parentIndex);
  };
  const _compView_0$0 = Symbol('_compView_0');
  const _ViewSnippetComponent_0_5$ = Symbol('_ViewSnippetComponent_0_5');
  const _expr_1$ = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_4 = Symbol('_expr_4');
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7 = class _ViewViewDocumentComponent7 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      this[_compView_0$0] = new src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      this.addShimC(_el_0);
      this[_ViewSnippetComponent_0_5$] = new src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent.new();
      this[_compView_0$0].create(this[_ViewSnippetComponent_0_5$], []);
      let subscription_0 = this[_ViewSnippetComponent_0_5$].selectMe.listen(this.eventHandler1(src__model__model.Snippet, src__model__model.Snippet, dart.bind(this.ctx, 'selectSnippet')));
      let subscription_1 = this[_ViewSnippetComponent_0_5$].removeMe.listen(this.eventHandler1(core.int, core.int, dart.bind(this.ctx, 'removeSnippetDialog')));
      this.init([_el_0], [subscription_0, subscription_1]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_snippet = src__runtime__optimizations.unsafeCast(src__model__model.Snippet, this.locals[$_get]("$implicit"));
      let local_f = src__runtime__optimizations.unsafeCast(core.bool, this.locals[$_get]("first"));
      let local_l = src__runtime__optimizations.unsafeCast(core.bool, this.locals[$_get]("last"));
      let currVal_0 = local_snippet;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_ViewSnippetComponent_0_5$].snippet = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.showMetadata;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_ViewSnippetComponent_0_5$].showMetadata = currVal_1;
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = _ctx.editMode;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_ViewSnippetComponent_0_5$].allowEdit = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.selected == local_snippet;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_ViewSnippetComponent_0_5$].selected = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = local_f;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_ViewSnippetComponent_0_5$].first = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = local_l;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_ViewSnippetComponent_0_5$].last = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
      this[_ViewSnippetComponent_0_5$].ngOnDestroy();
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_ViewSnippetComponent_0_5$] = null;
    this[_expr_0$0] = null;
    this[_expr_1$] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "first", null, "last", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7.__proto__),
    [_compView_0$0]: dart.fieldType(src__view__view_document__view_snippet__view_snippet_component$46template.ViewViewSnippetComponent0),
    [_ViewSnippetComponent_0_5$]: dart.fieldType(src__view__view_document__view_snippet__view_snippet_component.ViewSnippetComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent7 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent7.new(parentView, parentIndex);
  };
  const _compView_1$0 = Symbol('_compView_1');
  const _AcxDarkTheme_1_5 = Symbol('_AcxDarkTheme_1_5');
  const _MaterialButtonComponent_1_6 = Symbol('_MaterialButtonComponent_1_6');
  const _compView_4$0 = Symbol('_compView_4');
  const _AcxDarkTheme_4_5$ = Symbol('_AcxDarkTheme_4_5');
  const _MaterialButtonComponent_4_6$ = Symbol('_MaterialButtonComponent_4_6');
  const _compView_6$ = Symbol('_compView_6');
  const _MaterialIconComponent_6_5$ = Symbol('_MaterialIconComponent_6_5');
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8 = class _ViewViewDocumentComponent8 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1$0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 1);
      let _el_1 = this[_compView_1$0].rootEl;
      _el_0[$append](_el_1);
      this.createAttr(_el_1, "raised", "");
      this.addShimC(_el_1);
      this[_AcxDarkTheme_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$61 || (const$61 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$62 || (const$62 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_1_6] = new material_button__material_button.MaterialButtonComponent.new(_el_1, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_1_5]), this[_compView_1$0].ref, null);
      let _text_2 = html.Text.new("Back");
      this[_compView_3$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3$].rootEl;
      this.createAttr(_el_3, "icon", "reply_all");
      this.createAttr(_el_3, "size", "large");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3$].create(this[_MaterialIconComponent_3_5$], []);
      this[_compView_1$0].create(this[_MaterialButtonComponent_1_6], [JSArrayOfNode().of([_text_2, _el_3])]);
      this[_compView_4$0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4$0].rootEl;
      _el_0[$append](_el_4);
      this.createAttr(_el_4, "raised", "");
      this.addShimC(_el_4);
      this[_AcxDarkTheme_4_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$63 || (const$63 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$64 || (const$64 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_4_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_4, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_4_5$]), this[_compView_4$0].ref, null);
      let _text_5 = html.Text.new("Edit");
      this[_compView_6$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      let _el_6 = this[_compView_6$].rootEl;
      this.createAttr(_el_6, "icon", "edit");
      this.createAttr(_el_6, "size", "large");
      this.addShimC(_el_6);
      this[_MaterialIconComponent_6_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_6);
      this[_compView_6$].create(this[_MaterialIconComponent_6_5$], []);
      this[_compView_4$0].create(this[_MaterialButtonComponent_4_6$], [JSArrayOfNode().of([_text_5, _el_6])]);
      _el_1[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'back')));
      _el_4[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'startEdit')));
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_AcxDarkTheme_1_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialButtonComponent_1_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_AcxDarkTheme_4_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialButtonComponent_4_6$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_1_6].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_1$0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_1_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5$].icon = "reply_all";
        changed = true;
      }
      if (changed) {
        this[_compView_3$].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_4_6$].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_4$0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_4_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5$].icon = "edit";
        changed = true;
      }
      if (changed) {
        this[_compView_6$].markAsCheckOnce();
      }
      this[_compView_1$0].detectHostChanges(firstCheck);
      this[_compView_4$0].detectHostChanges(firstCheck);
      this[_compView_1$0].detectChanges();
      this[_compView_3$].detectChanges();
      this[_compView_4$0].detectChanges();
      this[_compView_6$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$0].destroy();
      this[_compView_3$].destroy();
      this[_compView_4$0].destroy();
      this[_compView_6$].destroy();
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8.new = function(parentView, parentIndex) {
    this[_compView_1$0] = null;
    this[_AcxDarkTheme_1_5] = null;
    this[_MaterialButtonComponent_1_6] = null;
    this[_compView_3$] = null;
    this[_MaterialIconComponent_3_5$] = null;
    this[_compView_4$0] = null;
    this[_AcxDarkTheme_4_5$] = null;
    this[_MaterialButtonComponent_4_6$] = null;
    this[_compView_6$] = null;
    this[_MaterialIconComponent_6_5$] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8.__proto__),
    [_compView_1$0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_1_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_1_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_3$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_4$0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_4_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_4_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_6$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_6_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent8 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent8.new(parentView, parentIndex);
  };
  const _AcxDarkTheme_7_5$ = Symbol('_AcxDarkTheme_7_5');
  const _MaterialButtonComponent_7_6$ = Symbol('_MaterialButtonComponent_7_6');
  const _compView_9$ = Symbol('_compView_9');
  const _MaterialIconComponent_9_5$ = Symbol('_MaterialIconComponent_9_5');
  const _compView_10$ = Symbol('_compView_10');
  const _AcxDarkTheme_10_5 = Symbol('_AcxDarkTheme_10_5');
  const _MaterialButtonComponent_10_6 = Symbol('_MaterialButtonComponent_10_6');
  const _compView_12 = Symbol('_compView_12');
  const _MaterialIconComponent_12_5 = Symbol('_MaterialIconComponent_12_5');
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  const _handle_click_10_0 = Symbol('_handle_click_10_0');
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9 = class _ViewViewDocumentComponent9 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      this[_compView_1$0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 1);
      let _el_1 = this[_compView_1$0].rootEl;
      _el_0[$append](_el_1);
      this.createAttr(_el_1, "raised", "");
      this.addShimC(_el_1);
      this[_AcxDarkTheme_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$65 || (const$65 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$66 || (const$66 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_1_6] = new material_button__material_button.MaterialButtonComponent.new(_el_1, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_1_5]), this[_compView_1$0].ref, null);
      let _text_2 = html.Text.new("Add new snippet");
      this[_compView_3$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3$].rootEl;
      this.createAttr(_el_3, "icon", "add_comment");
      this.createAttr(_el_3, "size", "large");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3$].create(this[_MaterialIconComponent_3_5$], []);
      this[_compView_1$0].create(this[_MaterialButtonComponent_1_6], [JSArrayOfNode().of([_text_2, _el_3])]);
      this[_compView_4$0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4$0].rootEl;
      _el_0[$append](_el_4);
      this.createAttr(_el_4, "raised", "");
      this.addShimC(_el_4);
      this[_AcxDarkTheme_4_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$67 || (const$67 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$68 || (const$68 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_4_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_4, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_4_5$]), this[_compView_4$0].ref, null);
      let _text_5 = html.Text.new("Stop Editing");
      this[_compView_6$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      let _el_6 = this[_compView_6$].rootEl;
      this.createAttr(_el_6, "icon", "lock_open");
      this.createAttr(_el_6, "size", "large");
      this.addShimC(_el_6);
      this[_MaterialIconComponent_6_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_6);
      this[_compView_6$].create(this[_MaterialIconComponent_6_5$], []);
      this[_compView_4$0].create(this[_MaterialButtonComponent_4_6$], [JSArrayOfNode().of([_text_5, _el_6])]);
      this[_compView_7$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 7);
      let _el_7 = this[_compView_7$].rootEl;
      _el_0[$append](_el_7);
      this.createAttr(_el_7, "raised", "");
      this.addShimC(_el_7);
      this[_AcxDarkTheme_7_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$69 || (const$69 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$70 || (const$70 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_7_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_7, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_7_5$]), this[_compView_7$].ref, null);
      let _text_8 = html.Text.new("SaveChanges");
      this[_compView_9$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 9);
      let _el_9 = this[_compView_9$].rootEl;
      this.createAttr(_el_9, "icon", "save");
      this.createAttr(_el_9, "size", "large");
      this.addShimC(_el_9);
      this[_MaterialIconComponent_9_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_9);
      this[_compView_9$].create(this[_MaterialIconComponent_9_5$], []);
      this[_compView_7$].create(this[_MaterialButtonComponent_7_6$], [JSArrayOfNode().of([_text_8, _el_9])]);
      this[_compView_10$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 10);
      let _el_10 = this[_compView_10$].rootEl;
      _el_0[$append](_el_10);
      this.createAttr(_el_10, "raised", "");
      this.addShimC(_el_10);
      this[_AcxDarkTheme_10_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$71 || (const$71 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$72 || (const$72 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_10_6] = new material_button__material_button.MaterialButtonComponent.new(_el_10, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_10_5]), this[_compView_10$].ref, null);
      let _text_11 = html.Text.new("Delete document");
      this[_compView_12] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 12);
      let _el_12 = this[_compView_12].rootEl;
      this.createAttr(_el_12, "icon", "delete_forever");
      this.createAttr(_el_12, "size", "large");
      this.addShimC(_el_12);
      this[_MaterialIconComponent_12_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_12);
      this[_compView_12].create(this[_MaterialIconComponent_12_5], []);
      this[_compView_10$].create(this[_MaterialButtonComponent_10_6], [JSArrayOfNode().of([_text_11, _el_12])]);
      this[_compView_13] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 13);
      let _el_13 = this[_compView_13].rootEl;
      _el_0[$append](_el_13);
      this.createAttr(_el_13, "raised", "");
      this.addShimC(_el_13);
      this[_AcxDarkTheme_13_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$73 || (const$73 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$74 || (const$74 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_13_6] = new material_button__material_button.MaterialButtonComponent.new(_el_13, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_13_5]), this[_compView_13].ref, null);
      let _text_14 = html.Text.new("Extend Lock");
      this[_compView_15] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 15);
      let _el_15 = this[_compView_15].rootEl;
      this.createAttr(_el_15, "icon", "lock");
      this.createAttr(_el_15, "size", "large");
      this.addShimC(_el_15);
      this[_MaterialIconComponent_15_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_15);
      this[_compView_15].create(this[_MaterialIconComponent_15_5], []);
      this[_compView_13].create(this[_MaterialButtonComponent_13_6], [JSArrayOfNode().of([_text_14, _el_15])]);
      _el_1[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'addNewSnippet')));
      _el_4[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'stopEdit')));
      _el_7[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'saveChanges')));
      _el_10[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_10_0)));
      _el_13[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'extendLock')));
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_AcxDarkTheme_1_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialButtonComponent_1_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_AcxDarkTheme_4_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialButtonComponent_4_6$];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_AcxDarkTheme_7_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        return this[_MaterialButtonComponent_7_6$];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_AcxDarkTheme_10_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 10 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 12) {
        return this[_MaterialButtonComponent_10_6];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 13 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 15) {
        return this[_AcxDarkTheme_13_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 13 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 15) {
        return this[_MaterialButtonComponent_13_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_1_6].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_1$0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_1_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5$].icon = "add_comment";
        changed = true;
      }
      if (changed) {
        this[_compView_3$].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_4_6$].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_4$0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_4_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5$].icon = "lock_open";
        changed = true;
      }
      if (changed) {
        this[_compView_6$].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_7_6$].raised = true;
        changed = true;
      }
      let currVal_4 = _ctx.lockDuration == null || dart.test(_ctx.lockDuration.isNegative);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialButtonComponent_7_6$].disabled = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_7$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_7_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_9_5$].icon = "save";
        changed = true;
      }
      if (changed) {
        this[_compView_9$].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_10_6].raised = true;
        changed = true;
      }
      let currVal_7 = _ctx.lockDuration == null || dart.test(_ctx.lockDuration.isNegative);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7$], currVal_7))) {
        this[_MaterialButtonComponent_10_6].disabled = currVal_7;
        changed = true;
        this[_expr_7$] = currVal_7;
      }
      if (changed) {
        this[_compView_10$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_10_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_12_5].icon = "delete_forever";
        changed = true;
      }
      if (changed) {
        this[_compView_12].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_13_6].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_13].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_13_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_15_5].icon = "lock";
        changed = true;
      }
      if (changed) {
        this[_compView_15].markAsCheckOnce();
      }
      this[_compView_1$0].detectHostChanges(firstCheck);
      this[_compView_4$0].detectHostChanges(firstCheck);
      this[_compView_7$].detectHostChanges(firstCheck);
      this[_compView_10$].detectHostChanges(firstCheck);
      this[_compView_13].detectHostChanges(firstCheck);
      this[_compView_1$0].detectChanges();
      this[_compView_3$].detectChanges();
      this[_compView_4$0].detectChanges();
      this[_compView_6$].detectChanges();
      this[_compView_7$].detectChanges();
      this[_compView_9$].detectChanges();
      this[_compView_10$].detectChanges();
      this[_compView_12].detectChanges();
      this[_compView_13].detectChanges();
      this[_compView_15].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$0].destroy();
      this[_compView_3$].destroy();
      this[_compView_4$0].destroy();
      this[_compView_6$].destroy();
      this[_compView_7$].destroy();
      this[_compView_9$].destroy();
      this[_compView_10$].destroy();
      this[_compView_12].destroy();
      this[_compView_13].destroy();
      this[_compView_15].destroy();
    }
    [_handle_click_10_0]($event) {
      this.ctx.showDeleteDocumentDialog = true;
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9.new = function(parentView, parentIndex) {
    this[_compView_1$0] = null;
    this[_AcxDarkTheme_1_5] = null;
    this[_MaterialButtonComponent_1_6] = null;
    this[_compView_3$] = null;
    this[_MaterialIconComponent_3_5$] = null;
    this[_compView_4$0] = null;
    this[_AcxDarkTheme_4_5$] = null;
    this[_MaterialButtonComponent_4_6$] = null;
    this[_compView_6$] = null;
    this[_MaterialIconComponent_6_5$] = null;
    this[_compView_7$] = null;
    this[_AcxDarkTheme_7_5$] = null;
    this[_MaterialButtonComponent_7_6$] = null;
    this[_compView_9$] = null;
    this[_MaterialIconComponent_9_5$] = null;
    this[_compView_10$] = null;
    this[_AcxDarkTheme_10_5] = null;
    this[_MaterialButtonComponent_10_6] = null;
    this[_compView_12] = null;
    this[_MaterialIconComponent_12_5] = null;
    this[_compView_13] = null;
    this[_AcxDarkTheme_13_5] = null;
    this[_MaterialButtonComponent_13_6] = null;
    this[_compView_15] = null;
    this[_MaterialIconComponent_15_5] = null;
    this[_expr_4] = null;
    this[_expr_7$] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_10_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9.__proto__),
    [_compView_1$0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_1_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_1_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_3$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_4$0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_4_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_4_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_6$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_6_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_7$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_7_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_7_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_9$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_9_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_10$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_10_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_10_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_12]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_12_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_13]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_13_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_13_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_15]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_15_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_7$]: dart.fieldType(core.bool)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent9 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent9.new(parentView, parentIndex);
  };
  const _AcxDarkTheme_0_5$ = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6$ = Symbol('_MaterialButtonComponent_0_6');
  const _MaterialIconComponent_2_5 = Symbol('_MaterialIconComponent_2_5');
  let const$75;
  let const$76;
  const _handle_click_0_0$ = Symbol('_handle_click_0_0');
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10 = class _ViewViewDocumentComponent10 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      this[_compView_0$0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      this.createAttr(_el_0, "raised", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$75 || (const$75 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$76 || (const$76 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_0, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5$]), this[_compView_0$0].ref, null);
      let _text_1 = html.Text.new("Show Metadata");
      this[_compView_2$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      let _el_2 = this[_compView_2$].rootEl;
      this.createAttr(_el_2, "icon", "visibility");
      this.createAttr(_el_2, "size", "large");
      this.addShimC(_el_2);
      this[_MaterialIconComponent_2_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_2);
      this[_compView_2$].create(this[_MaterialIconComponent_2_5], []);
      this[_compView_0$0].create(this[_MaterialButtonComponent_0_6$], [JSArrayOfNode().of([_text_1, _el_2])]);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0$)));
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_AcxDarkTheme_0_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialButtonComponent_0_6$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_0_6$].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "visibility";
        changed = true;
      }
      if (changed) {
        this[_compView_2$].markAsCheckOnce();
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
      this[_compView_2$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
      this[_compView_2$].destroy();
    }
    [_handle_click_0_0$]($event) {
      this.ctx.showMetadata = true;
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_AcxDarkTheme_0_5$] = null;
    this[_MaterialButtonComponent_0_6$] = null;
    this[_compView_2$] = null;
    this[_MaterialIconComponent_2_5] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10.__proto__),
    [_compView_0$0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_2$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_2_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent10 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent10.new(parentView, parentIndex);
  };
  let const$77;
  let const$78;
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11 = class _ViewViewDocumentComponent11 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    build() {
      this[_compView_0$0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      this.createAttr(_el_0, "raised", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$77 || (const$77 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.parentView.injectorGet(const$78 || (const$78 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6$] = new material_button__material_button.MaterialButtonComponent.new(_el_0, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5$]), this[_compView_0$0].ref, null);
      let _text_1 = html.Text.new("Hide Metadata");
      this[_compView_2$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      let _el_2 = this[_compView_2$].rootEl;
      this.createAttr(_el_2, "icon", "visibility_off");
      this.createAttr(_el_2, "size", "large");
      this.addShimC(_el_2);
      this[_MaterialIconComponent_2_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_2);
      this[_compView_2$].create(this[_MaterialIconComponent_2_5], []);
      this[_compView_0$0].create(this[_MaterialButtonComponent_0_6$], [JSArrayOfNode().of([_text_1, _el_2])]);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0$)));
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_AcxDarkTheme_0_5$];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialButtonComponent_0_6$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialButtonComponent_0_6$].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6$].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "visibility_off";
        changed = true;
      }
      if (changed) {
        this[_compView_2$].markAsCheckOnce();
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
      this[_compView_2$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
      this[_compView_2$].destroy();
    }
    [_handle_click_0_0$]($event) {
      this.ctx.showMetadata = false;
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_AcxDarkTheme_0_5$] = null;
    this[_MaterialButtonComponent_0_6$] = null;
    this[_compView_2$] = null;
    this[_MaterialIconComponent_2_5] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0._renderType;
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11.__proto__),
    [_compView_0$0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5$]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6$]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_2$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_2_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponent11 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponent11.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document__view_document_component$46template, {
    /*src__view__view_document__view_document_component$46template.styles$ViewDocumentComponentHost*/get styles$ViewDocumentComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ViewDocumentComponent_0_5 = Symbol('_ViewDocumentComponent_0_5');
  const __Document_0_6$ = Symbol('__Document_0_6');
  const __Window_0_7$ = Symbol('__Window_0_7');
  const __DomService_0_8$ = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9$ = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10$ = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11$ = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12$ = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13$ = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14$ = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15$ = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16$ = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17$ = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18$ = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19$ = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20$ = Symbol('__OverlayService_0_20');
  const _Document_0_6$ = Symbol('_Document_0_6');
  const _Window_0_7$ = Symbol('_Window_0_7');
  const _DomService_0_8$ = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9$ = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10$ = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11$ = Symbol('_ManagedZone_0_11');
  let const$79;
  let const$80;
  let const$81;
  const _overlayContainerName_0_12$ = Symbol('_overlayContainerName_0_12');
  let const$82;
  let const$83;
  let const$84;
  const _overlayContainerParent_0_13$ = Symbol('_overlayContainerParent_0_13');
  let const$85;
  let const$86;
  let const$87;
  const _overlayContainer_0_14$ = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15$ = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16$ = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17$ = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18$ = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19$ = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20$ = Symbol('_OverlayService_0_20');
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0 = class _ViewViewDocumentComponentHost0 extends src__core__linker__app_view.AppView$(src__view__view_document__view_document_component.ViewDocumentComponent) {
    get [_Document_0_6$]() {
      if (this[__Document_0_6$] == null) {
        this[__Document_0_6$] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6$];
    }
    get [_Window_0_7$]() {
      if (this[__Window_0_7$] == null) {
        this[__Window_0_7$] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7$];
    }
    get [_DomService_0_8$]() {
      if (this[__DomService_0_8$] == null) {
        this[__DomService_0_8$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7$])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7$]));
      }
      return this[__DomService_0_8$];
    }
    get [_AcxImperativeViewUtils_0_9$]() {
      if (this[__AcxImperativeViewUtils_0_9$] == null) {
        this[__AcxImperativeViewUtils_0_9$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]));
      }
      return this[__AcxImperativeViewUtils_0_9$];
    }
    get [_DomRuler_0_10$]() {
      if (this[__DomRuler_0_10$] == null) {
        this[__DomRuler_0_10$] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6$]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]));
      }
      return this[__DomRuler_0_10$];
    }
    get [_ManagedZone_0_11$]() {
      if (this[__ManagedZone_0_11$] == null) {
        this[__ManagedZone_0_11$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11$];
    }
    get [_overlayContainerName_0_12$]() {
      if (this[__overlayContainerName_0_12$] == null) {
        this[__overlayContainerName_0_12$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core.String, const$79 || (const$79 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$80 || (const$80 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$81 || (const$81 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12$];
    }
    get [_overlayContainerParent_0_13$]() {
      if (this[__overlayContainerParent_0_13$] == null) {
        this[__overlayContainerParent_0_13$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$82 || (const$82 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6$]), this.injectorGet(const$83 || (const$83 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6$]), this.injectorGet(const$84 || (const$84 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13$];
    }
    get [_overlayContainer_0_14$]() {
      if (this[__overlayContainer_0_14$] == null) {
        this[__overlayContainer_0_14$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$85 || (const$85 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12$]), html.HtmlElement._check(this[_overlayContainerParent_0_13$]), this.injectorGet(const$86 || (const$86 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12$]), html.HtmlElement._check(this[_overlayContainerParent_0_13$]), this.injectorGet(const$87 || (const$87 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14$];
    }
    get [_overlaySyncDom_0_15$]() {
      if (this[__overlaySyncDom_0_15$] == null) {
        this[__overlaySyncDom_0_15$] = true;
      }
      return this[__overlaySyncDom_0_15$];
    }
    get [_overlayRepositionLoop_0_16$]() {
      if (this[__overlayRepositionLoop_0_16$] == null) {
        this[__overlayRepositionLoop_0_16$] = true;
      }
      return this[__overlayRepositionLoop_0_16$];
    }
    get [_OverlayStyleConfig_0_17$]() {
      if (this[__OverlayStyleConfig_0_17$] == null) {
        this[__OverlayStyleConfig_0_17$] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6$]));
      }
      return this[__OverlayStyleConfig_0_17$];
    }
    get [_ZIndexer_0_18$]() {
      if (this[__ZIndexer_0_18$] == null) {
        this[__ZIndexer_0_18$] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18$];
    }
    get [_OverlayDomRenderService_0_19$]() {
      if (this[__OverlayDomRenderService_0_19$] == null) {
        this[__OverlayDomRenderService_0_19$] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17$], html.HtmlElement._check(this[_overlayContainer_0_14$]), core.String._check(this[_overlayContainerName_0_12$]), this[_DomRuler_0_10$], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_9$]), this[_overlaySyncDom_0_15$], this[_overlayRepositionLoop_0_16$], this[_ZIndexer_0_18$]);
      }
      return this[__OverlayDomRenderService_0_19$];
    }
    get [_OverlayService_0_20$]() {
      if (this[__OverlayService_0_20$] == null) {
        this[__OverlayService_0_20$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15$], this[_OverlayDomRenderService_0_19$], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15$], this[_OverlayDomRenderService_0_19$], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20$];
    }
    build() {
      this[_compView_0$0] = new src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_ViewDocumentComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__view__view_document__view_document_component.ViewDocumentComponent, dart.wrapType(src__view__view_document__view_document_component.ViewDocumentComponent), dart.fn(() => new src__view__view_document__view_document_component.ViewDocumentComponent.new(src__model__model.Model._check(this.injectorGet(dart.wrapType(src__model__model.Model), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex))), VoidToViewDocumentComponent())) : new src__view__view_document__view_document_component.ViewDocumentComponent.new(src__model__model.Model._check(this.injectorGet(dart.wrapType(src__model__model.Model), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0$0].create(this[_ViewDocumentComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfViewDocumentComponent()).new(0, this, this.rootEl, this[_ViewDocumentComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6$];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7$];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8$];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9$];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10$];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11$];
      }
      if (token === (const$88 || (const$88 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12$];
      }
      if (token === (const$89 || (const$89 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13$];
      }
      if (token === (const$90 || (const$90 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14$];
      }
      if (token === (const$91 || (const$91 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15$];
      }
      if (token === (const$92 || (const$92 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16$];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17$];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18$];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19$];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
    }
  };
  (src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_ViewDocumentComponent_0_5] = null;
    this[__Document_0_6$] = null;
    this[__Window_0_7$] = null;
    this[__DomService_0_8$] = null;
    this[__AcxImperativeViewUtils_0_9$] = null;
    this[__DomRuler_0_10$] = null;
    this[__ManagedZone_0_11$] = null;
    this[__overlayContainerName_0_12$] = null;
    this[__overlayContainerParent_0_13$] = null;
    this[__overlayContainer_0_14$] = null;
    this[__overlaySyncDom_0_15$] = null;
    this[__overlayRepositionLoop_0_16$] = null;
    this[__OverlayStyleConfig_0_17$] = null;
    this[__ZIndexer_0_18$] = null;
    this[__OverlayDomRenderService_0_19$] = null;
    this[__OverlayService_0_20$] = null;
    src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0.prototype;
  dart.addTypeTests(src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0);
  dart.setMethodSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0, () => ({
    __proto__: dart.getMethods(src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__view__view_document__view_document_component.ViewDocumentComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0, () => ({
    __proto__: dart.getGetters(src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0.__proto__),
    [_Document_0_6$]: dart.dynamic,
    [_Window_0_7$]: dart.dynamic,
    [_DomService_0_8$]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9$]: dart.dynamic,
    [_DomRuler_0_10$]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11$]: dart.dynamic,
    [_overlayContainerName_0_12$]: dart.dynamic,
    [_overlayContainerParent_0_13$]: dart.dynamic,
    [_overlayContainer_0_14$]: dart.dynamic,
    [_overlaySyncDom_0_15$]: core.bool,
    [_overlayRepositionLoop_0_16$]: core.bool,
    [_OverlayStyleConfig_0_17$]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18$]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19$]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20$]: dart.dynamic
  }));
  dart.setFieldSignature(src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0, () => ({
    __proto__: dart.getFields(src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__view__view_document__view_document_component$46template.ViewViewDocumentComponent0),
    [_ViewDocumentComponent_0_5]: dart.fieldType(src__view__view_document__view_document_component.ViewDocumentComponent),
    [__Document_0_6$]: dart.fieldType(dart.dynamic),
    [__Window_0_7$]: dart.fieldType(dart.dynamic),
    [__DomService_0_8$]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9$]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_10$]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11$]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_12$]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13$]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14$]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15$]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_16$]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_17$]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18$]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19$]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20$]: dart.fieldType(dart.dynamic)
  }));
  src__view__view_document__view_document_component$46template.viewFactory_ViewDocumentComponentHost0 = function(parentView, parentIndex) {
    return new src__view__view_document__view_document_component$46template._ViewViewDocumentComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__view__view_document__view_document_component$46template, {
    /*src__view__view_document__view_document_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__view__view_document__view_document_component$46template.initReflector = function() {
    if (dart.test(src__view__view_document__view_document_component$46template._visited)) {
      return;
    }
    src__view__view_document__view_document_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__view__view_document__view_document_component.ViewDocumentComponent), src__view__view_document__view_document_component$46template.ViewDocumentComponentNgFactory);
    src__model__model$46template.initReflector();
    src__routes$46template.initReflector();
    src__view__view_document__time_pipe$46template.initReflector();
    src__view__view_document__view_snippet__view_snippet_component$46template.initReflector();
    angular$46template.initReflector();
    auto_dismiss__auto_dismiss$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    laminate__overlay__module$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_dialog__material_dialog$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    angular_forms$46template.initReflector();
    angular_router$46template.initReflector();
  };
  src__routes.Routes = class Routes extends core.Object {};
  (src__routes.Routes.new = function() {
  }).prototype = src__routes.Routes.prototype;
  dart.addTypeTests(src__routes.Routes);
  dart.defineLazy(src__routes.Routes, {
    /*src__routes.Routes.DOCUMENT_LIST*/get DOCUMENT_LIST() {
      return src__route_definition.RouteDefinition.new({routePath: src__routes_path.RoutePaths.DOCUMENT_LIST, component: src__view__view_document_list__view_document_list_component$46template.ViewDocumentListComponentNgFactory});
    },
    /*src__routes.Routes.DOCUMENT_VIEW*/get DOCUMENT_VIEW() {
      return src__route_definition.RouteDefinition.new({routePath: src__routes_path.RoutePaths.DOCUMENT_VIEW, component: src__view__view_document__view_document_component$46template.ViewDocumentComponentNgFactory});
    },
    /*src__routes.Routes.all*/get all() {
      return JSArrayOfRouteDefinition().of([src__routes.Routes.DOCUMENT_LIST, src__routes.Routes.DOCUMENT_VIEW, src__route_definition.RouteDefinition.redirect({path: "", redirectTo: src__routes_path.RoutePaths.DOCUMENT_LIST.toUrl()})]);
    }
  });
  dart.trackLibraries("packages/Internal_lore/src/model/document.ddc", {
    "package:Internal_lore/src/network/gateway_service.dart": src__network__gateway_service,
    "package:Internal_lore/src/network/network_service.dart": src__network__network_service,
    "package:Internal_lore/src/model/model.dart": src__model__model,
    "package:Internal_lore/src/routes_path.dart": src__routes_path,
    "package:Internal_lore/src/view/view_document/view_snippet/elastic_directive.dart": src__view__view_document__view_snippet__elastic_directive,
    "package:Internal_lore/src/view/view_document/view_snippet/view_snippet_component.dart": src__view__view_document__view_snippet__view_snippet_component,
    "package:Internal_lore/src/view/view_document/time_pipe.dart": src__view__view_document__time_pipe,
    "package:Internal_lore/src/network/gateway_service.template.dart": src__network__gateway_service$46template,
    "package:Internal_lore/src/network/network_service.template.dart": src__network__network_service$46template,
    "package:Internal_lore/src/model/model.template.dart": src__model__model$46template,
    "package:Internal_lore/src/routes_path.template.dart": src__routes_path$46template,
    "package:Internal_lore/src/view/view_document/time_pipe.template.dart": src__view__view_document__time_pipe$46template,
    "package:Internal_lore/src/view/view_document/view_snippet/elastic_directive.template.dart": src__view__view_document__view_snippet__elastic_directive$46template,
    "package:Internal_lore/src/view/view_document/view_snippet/view_snippet_component.template.dart": src__view__view_document__view_snippet__view_snippet_component$46template,
    "package:Internal_lore/src/view/view_document_list/view_document_list_component.dart": src__view__view_document_list__view_document_list_component,
    "package:Internal_lore/src/view/view_document_list/view_document_list_component.template.dart": src__view__view_document_list__view_document_list_component$46template,
    "package:Internal_lore/src/routes.template.dart": src__routes$46template,
    "package:Internal_lore/src/view/view_document/view_document_component.dart": src__view__view_document__view_document_component,
    "package:Internal_lore/src/view/view_document/view_document_component.template.dart": src__view__view_document__view_document_component$46template,
    "package:Internal_lore/src/routes.dart": src__routes
  }, '{"version":3,"sourceRoot":"","sources":["../network/gateway_service.dart","../network/network_service.dart","model.dart","document.dart","snippet.dart","../routes_path.dart","../view/view_document/view_snippet/elastic_directive.dart","../view/view_document/view_snippet/view_snippet_component.dart","../view/view_document/time_pipe.dart","../network/gateway_service.template.dart","../network/network_service.template.dart","model.template.dart","../routes_path.template.dart","../view/view_document/time_pipe.template.dart","../view/view_document/view_snippet/elastic_directive.template.dart","../view/view_document/view_snippet/view_snippet_component.template.dart","../view/view_document_list/view_document_list_component.dart","../view/view_document_list/view_document_list_component.template.dart","../routes.template.dart","../view/view_document/view_document_component.dart","../view/view_document/view_document_component.template.dart","../routes.dart"],"names":[],"mappings":"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","file":"document.ddc.js"}');
  // Exports:
  return {
    src__network__gateway_service: src__network__gateway_service,
    src__network__network_service: src__network__network_service,
    src__model__model: src__model__model,
    src__routes_path: src__routes_path,
    src__view__view_document__view_snippet__elastic_directive: src__view__view_document__view_snippet__elastic_directive,
    src__view__view_document__view_snippet__view_snippet_component: src__view__view_document__view_snippet__view_snippet_component,
    src__view__view_document__time_pipe: src__view__view_document__time_pipe,
    src__network__gateway_service$46template: src__network__gateway_service$46template,
    src__network__network_service$46template: src__network__network_service$46template,
    src__model__model$46template: src__model__model$46template,
    src__routes_path$46template: src__routes_path$46template,
    src__view__view_document__time_pipe$46template: src__view__view_document__time_pipe$46template,
    src__view__view_document__view_snippet__elastic_directive$46template: src__view__view_document__view_snippet__elastic_directive$46template,
    src__view__view_document__view_snippet__view_snippet_component$46template: src__view__view_document__view_snippet__view_snippet_component$46template,
    src__view__view_document_list__view_document_list_component: src__view__view_document_list__view_document_list_component,
    src__view__view_document_list__view_document_list_component$46template: src__view__view_document_list__view_document_list_component$46template,
    src__routes$46template: src__routes$46template,
    src__view__view_document__view_document_component: src__view__view_document__view_document_component,
    src__view__view_document__view_document_component$46template: src__view__view_document__view_document_component$46template,
    src__routes: src__routes
  };
});

//# sourceMappingURL=document.ddc.js.map
