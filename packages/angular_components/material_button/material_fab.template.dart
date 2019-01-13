// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_fab.dart';
export 'material_fab.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_button_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref2;
import 'package:angular_components/material_button/material_fab.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_fab.dart' as import2;
import '../material_ripple/material_ripple.template.dart' as import3;
import '../material_ripple/material_ripple.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';

final List<dynamic> styles$MaterialFabComponent = [import0.styles];

class ViewMaterialFabComponent0 extends AppView<import2.MaterialFabComponent> {
  import3.ViewMaterialRippleComponent0 _compView_2;
  import4.MaterialRippleComponent _MaterialRippleComponent_2_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  bool _expr_6;
  bool _expr_7;
  static RenderComponentType _renderType;
  ViewMaterialFabComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('material-fab');
    createAttr(rootEl, 'animated', import2.MaterialFabComponent.hostAnimated);
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_button/material_fab.dart' : null), ViewEncapsulation.Emulated, styles$MaterialFabComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialFabComponent> build() {
    final import2.MaterialFabComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import8.Text('\n');
    parentRenderNode.append(_text_0);
    var doc = import8.document;
    final _el_1 = createDivAndAppend(doc, parentRenderNode);
    _el_1.className = 'content';
    addShimC(_el_1);
    project(_el_1, 0);
    _compView_2 = import3.ViewMaterialRippleComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _MaterialRippleComponent_2_5 = import4.MaterialRippleComponent(_el_2);
    _compView_2.create(_MaterialRippleComponent_2_5, []);
    _el_2.addEventListener('mousedown', eventHandler1(ctx.onMouseDown));
    _el_2.addEventListener('mouseup', eventHandler1(ctx.onMouseUp));
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    _rootEl.addEventListener('mousedown', eventHandler1(_ctx.onMouseDown));
    _rootEl.addEventListener('mouseup', eventHandler1(_ctx.onMouseUp));
    _rootEl.addEventListener('focus', eventHandler1(_ctx.onFocus));
    _rootEl.addEventListener('blur', eventHandler1(_ctx.onBlur));
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroy();
    _MaterialRippleComponent_2_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_0 = ctx.tabIndex;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      setProp(rootEl, 'tabIndex', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = ctx.ariaRole;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      setAttr(rootEl, 'role', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.disabledStr;
    if (import9.checkBinding(_expr_2, currVal_2)) {
      setAttr(rootEl, 'aria-disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.disabled;
    if (import9.checkBinding(_expr_3, currVal_3)) {
      updateElemClass(rootEl, 'is-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = ctx.hostDisabled;
    if (import9.checkBinding(_expr_4, currVal_4)) {
      setAttr(rootEl, 'disabled', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = ctx.hostRaised;
    if (import9.checkBinding(_expr_5, currVal_5)) {
      setAttr(rootEl, 'raised', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = ctx.hostClassIsFocused;
    if (import9.checkBinding(_expr_6, currVal_6)) {
      updateElemClass(rootEl, 'is-focused', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = ctx.hostClassIsPressed;
    if (import9.checkBinding(_expr_7, currVal_7)) {
      updateElemClass(rootEl, 'is-pressed', currVal_7);
      _expr_7 = currVal_7;
    }
  }
}

AppView<import2.MaterialFabComponent> viewFactory_MaterialFabComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialFabComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialFabComponent> _MaterialFabComponentNgFactory = const ComponentFactory('material-fab', viewFactory_MaterialFabComponentHost0);
ComponentFactory<import2.MaterialFabComponent> get MaterialFabComponentNgFactory {
  return _MaterialFabComponentNgFactory;
}

final List<dynamic> styles$MaterialFabComponentHost = const [];

class _ViewMaterialFabComponentHost0 extends AppView<import2.MaterialFabComponent> {
  ViewMaterialFabComponent0 _compView_0;
  import2.MaterialFabComponent _MaterialFabComponent_0_5;
  _ViewMaterialFabComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialFabComponent> build() {
    _compView_0 = ViewMaterialFabComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialFabComponent_0_5 = import2.MaterialFabComponent(rootEl, _compView_0.ref);
    _compView_0.create(_MaterialFabComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialFabComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialFabComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.MaterialFabComponent> viewFactory_MaterialFabComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialFabComponent, MaterialFabComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
