// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'tab_button.dart';
export 'tab_button.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button_base.template.dart' as _ref1;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref2;
import 'package:angular_components/material_tab/tab_mixin.template.dart' as _ref3;
import 'package:angular_components/material_tab/tab_button.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'tab_button.dart' as import2;
import '../material_ripple/material_ripple.template.dart' as import3;
import '../material_ripple/material_ripple.dart' as import4;
import 'dart:html' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';

final List<dynamic> styles$TabButtonComponent = [import0.styles];

class ViewTabButtonComponent0 extends AppView<import2.TabButtonComponent> {
  import3.ViewMaterialRippleComponent0 _compView_2;
  import4.MaterialRippleComponent _MaterialRippleComponent_2_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  var _expr_7;
  import5.Text _text_1;
  static RenderComponentType _renderType;
  ViewTabButtonComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import5.document.createElement('tab-button');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_tab/tab_button.dart' : null), ViewEncapsulation.Emulated, styles$TabButtonComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.TabButtonComponent> build() {
    final import2.TabButtonComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import5.document;
    final _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'content';
    addShimC(_el_0);
    _text_1 = import5.Text('');
    _el_0.append(_text_1);
    _compView_2 = import3.ViewMaterialRippleComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _MaterialRippleComponent_2_5 = import4.MaterialRippleComponent(_el_2);
    _compView_2.create(_MaterialRippleComponent_2_5, []);
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
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    final currVal_0 = import9.interpolate0(_ctx.label);
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroy();
    _MaterialRippleComponent_2_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_1 = ctx.tabIndex;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      setProp(rootEl, 'tabIndex', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.ariaRole;
    if (import9.checkBinding(_expr_2, currVal_2)) {
      setAttr(rootEl, 'role', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.disabledStr;
    if (import9.checkBinding(_expr_3, currVal_3)) {
      setAttr(rootEl, 'aria-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = ctx.disabled;
    if (import9.checkBinding(_expr_4, currVal_4)) {
      updateElemClass(rootEl, 'is-disabled', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = ctx.hostClassFocus;
    if (import9.checkBinding(_expr_5, currVal_5)) {
      updateElemClass(rootEl, 'focus', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = ctx.hostClassActive;
    if (import9.checkBinding(_expr_6, currVal_6)) {
      updateElemClass(rootEl, 'active', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = ctx.hostDisabled;
    if (import9.checkBinding(_expr_7, currVal_7)) {
      setAttr(rootEl, 'disabled', currVal_7);
      _expr_7 = currVal_7;
    }
  }
}

AppView<import2.TabButtonComponent> viewFactory_TabButtonComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewTabButtonComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.TabButtonComponent> _TabButtonComponentNgFactory = const ComponentFactory('tab-button', viewFactory_TabButtonComponentHost0);
ComponentFactory<import2.TabButtonComponent> get TabButtonComponentNgFactory {
  return _TabButtonComponentNgFactory;
}

final List<dynamic> styles$TabButtonComponentHost = const [];

class _ViewTabButtonComponentHost0 extends AppView<import2.TabButtonComponent> {
  ViewTabButtonComponent0 _compView_0;
  import2.TabButtonComponent _TabButtonComponent_0_5;
  _ViewTabButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.TabButtonComponent> build() {
    _compView_0 = ViewTabButtonComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TabButtonComponent_0_5 = import2.TabButtonComponent(rootEl);
    _compView_0.create(_TabButtonComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _TabButtonComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _TabButtonComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.TabButtonComponent> viewFactory_TabButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTabButtonComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TabButtonComponent, TabButtonComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
