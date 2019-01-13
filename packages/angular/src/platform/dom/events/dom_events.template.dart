// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dom_events.dart';
export 'dom_events.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'event_manager.template.dart' as _ref0;
import 'package:angular/di.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DomEventsPlugin, () => new DomEventsPlugin());
  _ref0.initReflector();
  _ref1.initReflector();
}
