// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'time_zone_aware_clock.dart';
export 'time_zone_aware_clock.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/di.template.dart' as _ref0;
import 'package:angular_components/model/date/time_zone_aware_clock.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(TimeZoneAwareClock, (_i1.SettableTimeZone p0) => new TimeZoneAwareClock(p0));
  _ngRef.registerDependencies(TimeZoneAwareClock, const [
    const [_i1.SettableTimeZone]
  ]);
  _ngRef.registerDependencies(clockFactory, const [
    const [_i1.SettableTimeZone]
  ]);
  _ref0.initReflector();
}
