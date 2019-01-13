// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'main.dart';
export 'main.dart';
import 'main.template.dart' as _ref0;
import 'package:Internal_lore/app_component.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_router/angular_router.template.dart' as _ref3;
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:http/browser_client.dart' as _i3;
import 'package:angular_router/src/router/router_impl.dart' as _i4;
import 'package:angular_router/src/location/location.dart' as _i5;
import 'package:angular_router/src/location/browser_platform_location.dart' as _i6;
import 'package:angular_router/src/location/hash_location_strategy.dart' as _i7;
import 'main.dart' as _i8;
import 'package:angular_router/src/router_hook.dart' as _i9;
import 'package:angular_router/src/location/location_strategy.dart' as _i10;
import 'package:angular_router/src/location/platform_location.dart' as _i11;
import 'package:angular/src/core/di/opaque_token.dart' as _i12;
import 'package:angular_router/src/router/router.dart' as _i13;

_i1.Injector injector$Injector([_i1.Injector parent]) => new _Injector$injector._(parent);

class _Injector$injector extends _i2.HierarchicalInjector {
  _Injector$injector._([_i1.Injector parent]) : super(parent);

  String _field0;

  _i3.BrowserClient _field1;

  _i4.RouterImpl _field2;

  _i5.Location _field3;

  _i6.BrowserPlatformLocation _field4;

  _i7.HashLocationStrategy _field5;

  String _getString$0() => _field0 ??= _i8.getToken();
  _i3.BrowserClient _getBrowserClient$1() => _field1 ??= new _i3.BrowserClient();
  _i4.RouterImpl _getRouterImpl$2() => _field2 ??= new _i4.RouterImpl(this.get(_i5.Location), provideUntyped(_i9.RouterHook, null));
  _i5.Location _getLocation$3() => _field3 ??= new _i5.Location(this.get(_i10.LocationStrategy));
  _i6.BrowserPlatformLocation _getBrowserPlatformLocation$4() => _field4 ??= new _i6.BrowserPlatformLocation();
  _i7.HashLocationStrategy _getHashLocationStrategy$5() => _field5 ??= new _i7.HashLocationStrategy(this.get(_i11.PlatformLocation), provideUntyped(const _i12.OpaqueToken<String>('appBaseHref'), null));
  _i1.Injector _getInjector$6() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, const _i12.OpaqueToken<String>('Authorization'))) {
      return _getString$0();
    }
    if (identical(token, _i3.BrowserClient)) {
      return _getBrowserClient$1();
    }
    if (identical(token, _i13.Router)) {
      return _getRouterImpl$2();
    }
    if (identical(token, _i5.Location)) {
      return _getLocation$3();
    }
    if (identical(token, _i11.PlatformLocation)) {
      return _getBrowserPlatformLocation$4();
    }
    if (identical(token, _i10.LocationStrategy)) {
      return _getHashLocationStrategy$5();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$6();
    }
    return orElse;
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
