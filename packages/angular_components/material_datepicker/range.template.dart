// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'range.dart';
export 'range.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/di.template.dart' as _ref0;
import 'package:angular_components/material_datepicker/proto/date.pb.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/proto/date_range.pb.template.dart' as _ref2;
import 'package:angular_components/model/date/date.template.dart' as _ref3;
import 'package:quiver/time.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerDependencies(today, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(yesterday, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(thisWeek, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(lastWeek, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(last7Days, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(last14Days, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(thisMonth, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(lastMonth, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(thisBroadcastMonth, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(lastBroadcastMonth, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(last30Days, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(thisYear, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(lastYear, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(thisQuarter, const [
    const [_i1.Clock]
  ]);
  _ngRef.registerDependencies(lastQuarter, const [
    const [_i1.Clock]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
