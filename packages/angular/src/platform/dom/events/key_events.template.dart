// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'key_events.dart';
export 'key_events.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'event_manager.template.dart' as _ref0;
import 'package:angular/src/core/di.template.dart' as _ref1;
import 'package:angular/src/runtime.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(KeyEventsPlugin, () => new KeyEventsPlugin());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
