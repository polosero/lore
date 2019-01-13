// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_persistent_drawer.dart';
export 'material_persistent_drawer.dart';
import 'material_drawer_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'material_persistent_drawer.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;
import 'package:angular/src/core/linker/app_view_utils.dart' as import4;

class MaterialPersistentDrawerDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.MaterialPersistentDrawerDirective instance;
  bool _expr_0;
  bool _expr_1;
  MaterialPersistentDrawerDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.hostMatDrawerCollapsed;
    if (import4.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(el, 'mat-drawer-collapsed', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = instance.hostMatDrawerExpanded;
    if (import4.checkBinding(_expr_1, currVal_1)) {
      updateElemClass(el, 'mat-drawer-expanded', currVal_1);
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
  _ref2.initReflector();
}
