// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'button_decorator.dart';
export 'button_decorator.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/mixins/has_tab_index.template.dart' as _ref3;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref4;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'button_decorator.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;
import 'package:angular/src/core/linker/app_view_utils.dart' as import4;

class ButtonDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.ButtonDirective instance;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  ButtonDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.tabIndex;
    if (import4.checkBinding(_expr_0, currVal_0)) {
      setProp(el, 'tabIndex', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = instance.ariaRole;
    if (import4.checkBinding(_expr_1, currVal_1)) {
      setAttr(el, 'role', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = instance.disabledStr;
    if (import4.checkBinding(_expr_2, currVal_2)) {
      setAttr(el, 'aria-disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = instance.disabled;
    if (import4.checkBinding(_expr_3, currVal_3)) {
      updateElemClass(el, 'is-disabled', currVal_3);
      _expr_3 = currVal_3;
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
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
