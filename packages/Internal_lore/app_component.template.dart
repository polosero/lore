// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'src/model/model.template.dart' as _ref2;
import 'src/network/gateway_service.template.dart' as _ref3;
import 'src/network/network_service.template.dart' as _ref4;
import 'src/routes.template.dart' as _ref5;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import11;
import 'package:angular_router/src/router/router_outlet_token.dart' as import12;
import 'package:angular_router/src/router/router.dart' as import13;
import 'package:angular_router/src/router_hook.dart' as import14;
import 'src/routes.dart' as import15;
import 'src/network/network_service.dart' as import16;
import 'src/model/model.dart' as import17;
import 'src/network/gateway_service.dart' as import18;
import 'package:http/browser_client.dart' as import19;
import 'package:angular/src/core/di/opaque_token.dart' as import20;
import 'dart:core';

final List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  ViewContainer _appEl_0;
  import3.RouterOutlet _RouterOutlet_0_8;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('app');
    _renderType ??= import8.appViewUtils.createRenderType((import9.isDevMode ? 'asset:Internal_lore/lib/app_component.dart' : null), ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import7.document;
    final _el_0 = createAndAppend(doc, 'router-outlet', parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _RouterOutlet_0_8 = (import9.isDevMode
        ? import11.debugInjectorWrap(import3.RouterOutlet, () {
            return import3.RouterOutlet(parentView.injectorGet(import12.RouterOutletToken, viewData.parentIndex, null), _appEl_0, parentView.injectorGet(import13.Router, viewData.parentIndex), parentView.injectorGet(import14.RouterHook, viewData.parentIndex, null));
          })
        : import3.RouterOutlet(parentView.injectorGet(import12.RouterOutletToken, viewData.parentIndex, null), _appEl_0, parentView.injectorGet(import13.Router, viewData.parentIndex), parentView.injectorGet(import14.RouterHook, viewData.parentIndex, null)));
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(import15.Routes.all, null)) {
        (_RouterOutlet_0_8.routes = import15.Routes.all);
      }
    }
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _RouterOutlet_0_8.ngOnInit();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _RouterOutlet_0_8.ngOnDestroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> _AppComponentNgFactory = const ComponentFactory('app', viewFactory_AppComponentHost0);
ComponentFactory<import1.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import1.AppComponent> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_5;
  dynamic __Gateway_0_6;
  import16.NetworkService __NetworkService_0_7;
  import17.Model __Model_0_8;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Gateway_0_6 {
    if ((__Gateway_0_6 == null)) {
      (__Gateway_0_6 = (import9.isDevMode
          ? import11.debugInjectorWrap(import18.Gateway, () {
              return import18.Gateway(this.injectorGet(import19.BrowserClient, viewData.parentIndex), this.injectorGet(const import20.OpaqueToken<String>('Authorization'), viewData.parentIndex));
            })
          : import18.Gateway(this.injectorGet(import19.BrowserClient, viewData.parentIndex), this.injectorGet(const import20.OpaqueToken<String>('Authorization'), viewData.parentIndex))));
    }
    return __Gateway_0_6;
  }

  import16.NetworkService get _NetworkService_0_7 {
    if ((__NetworkService_0_7 == null)) {
      (__NetworkService_0_7 = import16.NetworkService(_Gateway_0_6));
    }
    return __NetworkService_0_7;
  }

  import17.Model get _Model_0_8 {
    if ((__Model_0_8 == null)) {
      (__Model_0_8 = import17.Model(_NetworkService_0_7));
    }
    return __Model_0_8;
  }

  @override
  ComponentRef<import1.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import1.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.Gateway) && (0 == nodeIndex))) {
      return _Gateway_0_6;
    }
    if ((identical(token, import16.NetworkService) && (0 == nodeIndex))) {
      return _NetworkService_0_7;
    }
    if ((identical(token, import17.Model) && (0 == nodeIndex))) {
      return _Model_0_8;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
