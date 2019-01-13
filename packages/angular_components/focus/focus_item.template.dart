// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'focus_item.dart';
export 'focus_item.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'focus_item.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;
import 'package:angular/src/core/linker/app_view_utils.dart' as import4;

class FocusItemDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.FocusItemDirective instance;
  var _expr_1;
  FocusItemDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    bool firstCheck = (view.cdState == 0);
    if (firstCheck) {
      if (!identical(instance.role, null)) {
        setAttr(el, 'role', instance.role);
      }
    }
    final currVal_1 = instance.tabIndex;
    if (import4.checkBinding(_expr_1, currVal_1)) {
      setAttr(el, 'tabindex', currVal_1);
      _expr_1 = currVal_1;
    }
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
}
