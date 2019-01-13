// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_list_item.dart';
export 'material_list_item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_list/material_list_item.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_list_item.dart' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import10;
import '../mixins/material_dropdown_base.dart' as import11;
import '../interfaces/has_disabled.dart' as import12;

final List<dynamic> styles$MaterialListItemComponent = [import0.styles];

class ViewMaterialListItemComponent0 extends AppView<import2.MaterialListItemComponent> {
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  bool _expr_4;
  static RenderComponentType _renderType;
  ViewMaterialListItemComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import6.document.createElement('material-list-item');
    rootEl.className = import2.MaterialListItemComponent.hostClass;
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/material_list/material_list_item.dart' : null), ViewEncapsulation.Emulated, styles$MaterialListItemComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialListItemComponent> build() {
    final import2.MaterialListItemComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    project(parentRenderNode, 0);
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_0 = ctx.tabIndex;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      setProp(rootEl, 'tabIndex', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = ctx.ariaRole;
    if (import7.checkBinding(_expr_1, currVal_1)) {
      setAttr(rootEl, 'role', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.disabledStr;
    if (import7.checkBinding(_expr_2, currVal_2)) {
      setAttr(rootEl, 'aria-disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.disabled;
    if (import7.checkBinding(_expr_3, currVal_3)) {
      updateElemClass(rootEl, 'is-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = ctx.disabled;
    if (import7.checkBinding(_expr_4, currVal_4)) {
      updateElemClass(rootEl, 'disabled', currVal_4);
      _expr_4 = currVal_4;
    }
  }
}

AppView<import2.MaterialListItemComponent> viewFactory_MaterialListItemComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialListItemComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialListItemComponent> _MaterialListItemComponentNgFactory = const ComponentFactory('material-list-item', viewFactory_MaterialListItemComponentHost0);
ComponentFactory<import2.MaterialListItemComponent> get MaterialListItemComponentNgFactory {
  return _MaterialListItemComponentNgFactory;
}

final List<dynamic> styles$MaterialListItemComponentHost = const [];

class _ViewMaterialListItemComponentHost0 extends AppView<import2.MaterialListItemComponent> {
  ViewMaterialListItemComponent0 _compView_0;
  import2.MaterialListItemComponent _MaterialListItemComponent_0_5;
  _ViewMaterialListItemComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialListItemComponent> build() {
    _compView_0 = ViewMaterialListItemComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialListItemComponent_0_5 = (import8.isDevMode
        ? import10.debugInjectorWrap(import2.MaterialListItemComponent, () {
            return import2.MaterialListItemComponent(rootEl, this.injectorGet(import11.DropdownHandle, viewData.parentIndex, null), null, null);
          })
        : import2.MaterialListItemComponent(rootEl, this.injectorGet(import11.DropdownHandle, viewData.parentIndex, null), null, null));
    _compView_0.create(_MaterialListItemComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialListItemComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import12.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialListItemComponent_0_5;
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
    if ((!import7.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialListItemComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialListItemComponent> viewFactory_MaterialListItemComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialListItemComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialListItemComponent, MaterialListItemComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
