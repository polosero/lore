// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'module.dart';
export 'module.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'dart:html' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerDependencies(getLocation, const [
    const [_i1.Window]
  ]);
  _ref0.initReflector();
}
