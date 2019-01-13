// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_radio_group.dart';
export 'material_radio_group.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/material_radio/material_radio.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_forms/angular_forms.template.dart' as _ref5;
import 'package:angular_components/material_radio/material_radio_group.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_radio_group.dart' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import10;
import 'package:angular/src/core/zone/ng_zone.dart' as import11;

final List<dynamic> styles$MaterialRadioGroupComponent = [import0.styles];

class ViewMaterialRadioGroupComponent0 extends AppView<import2.MaterialRadioGroupComponent> {
  static RenderComponentType _renderType;
  ViewMaterialRadioGroupComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import6.document.createElement('material-radio-group');
    createAttr(rootEl, 'role', import2.MaterialRadioGroupComponent.role);
    rootEl.tabIndex = import2.MaterialRadioGroupComponent.tabIndex;
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/material_radio/material_radio_group.dart' : null), ViewEncapsulation.Emulated, styles$MaterialRadioGroupComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialRadioGroupComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    project(parentRenderNode, 0);
    init(const [], null);
  }
}

AppView<import2.MaterialRadioGroupComponent> viewFactory_MaterialRadioGroupComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialRadioGroupComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialRadioGroupComponent> _MaterialRadioGroupComponentNgFactory = const ComponentFactory('material-radio-group', viewFactory_MaterialRadioGroupComponentHost0);
ComponentFactory<import2.MaterialRadioGroupComponent> get MaterialRadioGroupComponentNgFactory {
  return _MaterialRadioGroupComponentNgFactory;
}

final List<dynamic> styles$MaterialRadioGroupComponentHost = const [];

class _ViewMaterialRadioGroupComponentHost0 extends AppView<import2.MaterialRadioGroupComponent> {
  ViewMaterialRadioGroupComponent0 _compView_0;
  import2.MaterialRadioGroupComponent _MaterialRadioGroupComponent_0_5;
  _ViewMaterialRadioGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialRadioGroupComponent> build() {
    _compView_0 = ViewMaterialRadioGroupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialRadioGroupComponent_0_5 = (import8.isDevMode
        ? import10.debugInjectorWrap(import2.MaterialRadioGroupComponent, () {
            return import2.MaterialRadioGroupComponent(this.injectorGet(import11.NgZone, viewData.parentIndex), null);
          })
        : import2.MaterialRadioGroupComponent(this.injectorGet(import11.NgZone, viewData.parentIndex), null));
    _MaterialRadioGroupComponent_0_5.radioComponents = [];
    _compView_0.create(_MaterialRadioGroupComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialRadioGroupComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialRadioGroupComponent) && (0 == nodeIndex))) {
      return _MaterialRadioGroupComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (!import7.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialRadioGroupComponent_0_5.ngAfterContentInit();
      }
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialRadioGroupComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialRadioGroupComponent> viewFactory_MaterialRadioGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialRadioGroupComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRadioGroupComponent, MaterialRadioGroupComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
