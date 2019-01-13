// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_ripple.dart';
export 'material_ripple.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref1;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref2;
import 'package:angular_components/utils/color/material.template.dart' as _ref3;
import 'package:angular_components/material_ripple/material_ripple.scss.css.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_ripple.dart' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$MaterialRippleComponent = [import0.styles];

class ViewMaterialRippleComponent0 extends AppView<import2.MaterialRippleComponent> {
  static RenderComponentType _renderType;
  ViewMaterialRippleComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import6.document.createElement('material-ripple');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/material_ripple/material_ripple.dart' : null), ViewEncapsulation.None, styles$MaterialRippleComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialRippleComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    init(const [], null);
  }
}

AppView<import2.MaterialRippleComponent> viewFactory_MaterialRippleComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialRippleComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialRippleComponent> _MaterialRippleComponentNgFactory = const ComponentFactory('material-ripple', viewFactory_MaterialRippleComponentHost0);
ComponentFactory<import2.MaterialRippleComponent> get MaterialRippleComponentNgFactory {
  return _MaterialRippleComponentNgFactory;
}

final List<dynamic> styles$MaterialRippleComponentHost = const [];

class _ViewMaterialRippleComponentHost0 extends AppView<import2.MaterialRippleComponent> {
  ViewMaterialRippleComponent0 _compView_0;
  import2.MaterialRippleComponent _MaterialRippleComponent_0_5;
  _ViewMaterialRippleComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialRippleComponent> build() {
    _compView_0 = ViewMaterialRippleComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialRippleComponent_0_5 = import2.MaterialRippleComponent(rootEl);
    _compView_0.create(_MaterialRippleComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialRippleComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialRippleComponent> viewFactory_MaterialRippleComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialRippleComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRippleComponent, MaterialRippleComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
