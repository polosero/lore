// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_icon_toggle.dart';
export 'material_icon_toggle.dart';
import 'material_icon.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/meta.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'material_icon_toggle.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;
import 'package:angular/src/core/linker/app_view_utils.dart' as import4;

class MaterialIconToggleDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.MaterialIconToggleDirective instance;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  MaterialIconToggleDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.showBasic;
    if (import4.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(el, 'basic-icon', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = instance.showToggled;
    if (import4.checkBinding(_expr_1, currVal_1)) {
      updateElemClass(el, 'toggled-icon', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = instance.hideIcon;
    if (import4.checkBinding(_expr_2, currVal_2)) {
      updateElemClass(el, 'hide-icon', currVal_2);
      _expr_2 = currVal_2;
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
}
