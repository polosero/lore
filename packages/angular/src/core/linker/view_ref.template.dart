// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'view_ref.dart';
export 'view_ref.dart';
import '../change_detection/change_detector_ref.template.dart' as _ref0;
import 'app_view.template.dart' as _ref1;
import 'app_view_utils.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/constants.template.dart' as _ref3;

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
