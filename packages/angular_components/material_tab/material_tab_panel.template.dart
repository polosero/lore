// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tab_panel.dart';
export 'material_tab_panel.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_tab/fixed_material_tab_strip.template.dart' as _ref1;
import 'package:angular_components/material_tab/material_tab.template.dart' as _ref2;
import 'package:angular_components/material_tab/tab_change_event.template.dart' as _ref3;
import 'package:angular_components/material_tab/material_tab_panel.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tab_panel.dart' as import2;
import 'fixed_material_tab_strip.template.dart' as import3;
import 'fixed_material_tab_strip.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import12;
import 'package:angular/src/core/di/opaque_token.dart' as import13;

final List<dynamic> styles$MaterialTabPanelComponent = [import0.styles];

class ViewMaterialTabPanelComponent0 extends AppView<import2.MaterialTabPanelComponent> {
  import3.ViewFixedMaterialTabStripComponent0 _compView_0;
  import4.FixedMaterialTabStripComponent _FixedMaterialTabStripComponent_0_5;
  var _expr_0;
  int _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewMaterialTabPanelComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('material-tab-panel');
    rootEl.className = import2.MaterialTabPanelComponent.hostClass;
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_tab/material_tab_panel.dart' : null), ViewEncapsulation.Emulated, styles$MaterialTabPanelComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTabPanelComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewFixedMaterialTabStripComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _FixedMaterialTabStripComponent_0_5 = (import10.isDevMode
        ? import12.debugInjectorWrap(import4.FixedMaterialTabStripComponent, () {
            return import4.FixedMaterialTabStripComponent(_compView_0.ref, parentView.injectorGet(const import13.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex, null));
          })
        : import4.FixedMaterialTabStripComponent(_compView_0.ref, parentView.injectorGet(const import13.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex, null)));
    _compView_0.create(_FixedMaterialTabStripComponent_0_5, []);
    project(parentRenderNode, 0);
    final subscription_0 = _FixedMaterialTabStripComponent_0_5.beforeTabChange.listen(eventHandler1(ctx.onBeforeTabChange));
    final subscription_1 = _FixedMaterialTabStripComponent_0_5.tabChange.listen(eventHandler1(ctx.onTabChange));
    init(const [], [subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.tabIds;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _FixedMaterialTabStripComponent_0_5.tabIds = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.activeTabIndex;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _FixedMaterialTabStripComponent_0_5.activeTabIndex = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.tabLabels;
    if (import9.checkBinding(_expr_2, currVal_2)) {
      _FixedMaterialTabStripComponent_0_5.tabLabels = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.MaterialTabPanelComponent> viewFactory_MaterialTabPanelComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialTabPanelComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTabPanelComponent> _MaterialTabPanelComponentNgFactory = const ComponentFactory('material-tab-panel', viewFactory_MaterialTabPanelComponentHost0);
ComponentFactory<import2.MaterialTabPanelComponent> get MaterialTabPanelComponentNgFactory {
  return _MaterialTabPanelComponentNgFactory;
}

final List<dynamic> styles$MaterialTabPanelComponentHost = const [];

class _ViewMaterialTabPanelComponentHost0 extends AppView<import2.MaterialTabPanelComponent> {
  ViewMaterialTabPanelComponent0 _compView_0;
  import2.MaterialTabPanelComponent _MaterialTabPanelComponent_0_5;
  _ViewMaterialTabPanelComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTabPanelComponent> build() {
    _compView_0 = ViewMaterialTabPanelComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTabPanelComponent_0_5 = import2.MaterialTabPanelComponent(_compView_0.ref);
    _MaterialTabPanelComponent_0_5.tabs = [];
    _compView_0.create(_MaterialTabPanelComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTabPanelComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (!import9.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialTabPanelComponent_0_5.ngAfterContentInit();
      }
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.MaterialTabPanelComponent> viewFactory_MaterialTabPanelComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTabPanelComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTabPanelComponent, MaterialTabPanelComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
