// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'next_prev_buttons.dart';
export 'next_prev_buttons.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref1;
import 'package:angular_components/src/material_datepicker/sequential.template.dart' as _ref2;
import 'package:angular_components/src/material_datepicker/sequential.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_datepicker/next_prev_buttons.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'next_prev_buttons.dart' as import2;
import '../material_icon/material_icon.template.dart' as import3;
import '../material_icon/material_icon.dart' as import4;
import 'dart:html' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';

final List<dynamic> styles$NextPrevComponent = [import0.styles];

class ViewNextPrevComponent0 extends AppView<import2.NextPrevComponent> {
  import3.ViewMaterialIconComponent0 _compView_1;
  import4.MaterialIconComponent _MaterialIconComponent_1_5;
  import3.ViewMaterialIconComponent0 _compView_4;
  import4.MaterialIconComponent _MaterialIconComponent_4_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  bool _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import5.ButtonElement _el_0;
  import5.Element _el_1;
  import5.ButtonElement _el_3;
  import5.Element _el_4;
  static RenderComponentType _renderType;
  ViewNextPrevComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import5.document.createElement('next-prev-buttons');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_datepicker/next_prev_buttons.dart' : null), ViewEncapsulation.Emulated, styles$NextPrevComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.NextPrevComponent> build() {
    final import2.NextPrevComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import5.document;
    _el_0 = createAndAppend(doc, 'button', parentRenderNode);
    _el_0.className = 'prev';
    addShimC(_el_0);
    _compView_1 = import3.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'icon', 'navigate_before');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import4.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    final _text_2 = import5.Text('\n');
    parentRenderNode.append(_text_2);
    _el_3 = createAndAppend(doc, 'button', parentRenderNode);
    _el_3.className = 'next';
    addShimC(_el_3);
    _compView_4 = import3.ViewMaterialIconComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    createAttr(_el_4, 'icon', 'navigate_next');
    addShimC(_el_4);
    _MaterialIconComponent_4_5 = import4.MaterialIconComponent(_el_4);
    _compView_4.create(_MaterialIconComponent_4_5, []);
    _el_0.addEventListener('click', eventHandler0(ctx.prev));
    _el_3.addEventListener('click', eventHandler0(ctx.next));
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler1(_ctx.stopPropagation));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.stopPropagation));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'navigate_before';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_4_5.icon = 'navigate_next';
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isPrevDisabled;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'disabled', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(_ctx.isPrevDisabled);
    if (import9.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-disabled', currVal_1.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = import9.interpolate0((_ctx.isPrevDisabled ? (0 - 1) : 0));
    if (import9.checkBinding(_expr_2, currVal_2)) {
      setAttr(_el_0, 'tabindex', currVal_2.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.prevLabel;
    if (import9.checkBinding(_expr_3, currVal_3)) {
      setAttr(_el_1, 'aria-label', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_5 = _ctx.isNextDisabled;
    if (import9.checkBinding(_expr_5, currVal_5)) {
      updateClass(_el_3, 'disabled', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = import9.interpolate0(_ctx.isNextDisabled);
    if (import9.checkBinding(_expr_6, currVal_6)) {
      setAttr(_el_3, 'aria-disabled', currVal_6.toString());
      _expr_6 = currVal_6;
    }
    final currVal_7 = import9.interpolate0((_ctx.isNextDisabled ? (0 - 1) : 0));
    if (import9.checkBinding(_expr_7, currVal_7)) {
      setAttr(_el_3, 'tabindex', currVal_7.toString());
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.nextLabel;
    if (import9.checkBinding(_expr_8, currVal_8)) {
      setAttr(_el_4, 'aria-label', currVal_8);
      _expr_8 = currVal_8;
    }
    _compView_1.detectChanges();
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroy();
    _compView_4.destroy();
  }
}

AppView<import2.NextPrevComponent> viewFactory_NextPrevComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewNextPrevComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.NextPrevComponent> _NextPrevComponentNgFactory = const ComponentFactory('next-prev-buttons', viewFactory_NextPrevComponentHost0);
ComponentFactory<import2.NextPrevComponent> get NextPrevComponentNgFactory {
  return _NextPrevComponentNgFactory;
}

final List<dynamic> styles$NextPrevComponentHost = const [];

class _ViewNextPrevComponentHost0 extends AppView<import2.NextPrevComponent> {
  ViewNextPrevComponent0 _compView_0;
  import2.NextPrevComponent _NextPrevComponent_0_5;
  _ViewNextPrevComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.NextPrevComponent> build() {
    _compView_0 = ViewNextPrevComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NextPrevComponent_0_5 = import2.NextPrevComponent(_compView_0.ref);
    _compView_0.create(_NextPrevComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _NextPrevComponent_0_5);
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
    _NextPrevComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.NextPrevComponent> viewFactory_NextPrevComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewNextPrevComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(NextPrevComponent, NextPrevComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
