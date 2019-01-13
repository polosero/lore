// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_list.dart';
export 'material_list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_list_size.template.dart' as _ref0;
import 'material_list_size.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/model/ui/accepts_width.template.dart' as _ref3;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref4;
import 'package:angular_components/material_list/material_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_list.dart' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$MaterialListComponent = [import0.styles];

class ViewMaterialListComponent0 extends AppView<import2.MaterialListComponent> {
  var _expr_0;
  static RenderComponentType _renderType;
  ViewMaterialListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import6.document.createElement('material-list');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/material_list/material_list.dart' : null), ViewEncapsulation.Emulated, styles$MaterialListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialListComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    project(parentRenderNode, 0);
    init(const [], null);
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_0 = ctx.size;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      setAttr(rootEl, 'size', currVal_0);
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialListComponent> viewFactory_MaterialListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialListComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialListComponent> _MaterialListComponentNgFactory = const ComponentFactory('material-list', viewFactory_MaterialListComponentHost0);
ComponentFactory<import2.MaterialListComponent> get MaterialListComponentNgFactory {
  return _MaterialListComponentNgFactory;
}

final List<dynamic> styles$MaterialListComponentHost = const [];

class _ViewMaterialListComponentHost0 extends AppView<import2.MaterialListComponent> {
  ViewMaterialListComponent0 _compView_0;
  import2.MaterialListComponent _MaterialListComponent_0_5;
  _ViewMaterialListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialListComponent> build() {
    _compView_0 = ViewMaterialListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialListComponent_0_5 = import2.MaterialListComponent();
    _compView_0.create(_MaterialListComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialListComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.MaterialListComponent> viewFactory_MaterialListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialListComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialListComponent, MaterialListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
