// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'browser_common.dart';
export 'browser_common.dart';
import '../core/testability/testability.template.dart' as _ref0;
import 'browser/testability.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
