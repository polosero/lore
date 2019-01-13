// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_checkbox.dart';
export 'material_checkbox.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref4;
import 'package:angular_components/model/ui/icon.template.dart' as _ref5;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref6;
import 'package:angular_forms/angular_forms.template.dart' as _ref7;
import 'package:angular_components/material_checkbox/material_checkbox.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_checkbox.dart' as import2;
import '../material_icon/material_icon.template.dart' as import3;
import '../material_icon/material_icon.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_ripple/material_ripple.template.dart' as import15;
import '../material_ripple/material_ripple.dart' as import16;
import '../interfaces/has_disabled.dart' as import17;

final List<dynamic> styles$MaterialCheckboxComponent = [import0.styles];

class ViewMaterialCheckboxComponent0 extends AppView<import2.MaterialCheckboxComponent> {
  import3.ViewMaterialIconComponent0 _compView_1;
  import4.MaterialIconComponent _MaterialIconComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  var _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_5;
  var _expr_6;
  bool _expr_8;
  var _expr_9;
  var _expr_10;
  import7.DivElement _el_0;
  import7.Element _el_1;
  import7.Text _text_4;
  static RenderComponentType _renderType;
  ViewMaterialCheckboxComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import7.document.createElement('material-checkbox');
    rootEl.className = import2.MaterialCheckboxComponent.hostClass;
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:angular_components/lib/material_checkbox/material_checkbox.dart' : null), ViewEncapsulation.Emulated, styles$MaterialCheckboxComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialCheckboxComponent> build() {
    final import2.MaterialCheckboxComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import7.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'icon-container';
    addShimC(_el_0);
    _compView_1 = import3.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'aria-hidden', 'true');
    _el_1.className = 'icon';
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import4.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialCheckboxComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _el_3 = createDivAndAppend(doc, parentRenderNode);
    _el_3.className = 'content';
    addShimC(_el_3);
    _text_4 = import7.Text('');
    _el_3.append(_text_4);
    final _text_5 = import7.Text(' ');
    _el_3.append(_text_5);
    project(_el_3, 0);
    init(const [], null);
    _rootEl.addEventListener('keyup', eventHandler1(_ctx.handleKeyUp));
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('mousedown', eventHandler1(_ctx.handleMouseDown));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    _rootEl.addEventListener('focus', eventHandler1(_ctx.handleFocus));
    _rootEl.addEventListener('blur', eventHandler1(_ctx.handleBlur));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = _ctx.icon;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      _MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _NgIf_2_9.ngIf = !_ctx.disabled;
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.showFocus;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'focus', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.themeColor;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _el_1.style.setProperty('color', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.checked || _ctx.indeterminate);
    if (import11.checkBinding(_expr_2, currVal_2)) {
      updateElemClass(_el_1, 'filled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_5 = (_ctx.label ?? '');
    if (import11.checkBinding(_expr_5, currVal_5)) {
      _text_4.text = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _compView_1.destroy();
  }

  void detectHostChanges(bool firstCheck) {
    if (firstCheck) {
      if (!identical(ctx.role, null)) {
        setAttr(rootEl, 'role', ctx.role);
      }
    }
    final currVal_6 = ctx.tabIndex;
    if (import11.checkBinding(_expr_6, currVal_6)) {
      setAttr(rootEl, 'tabindex', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_8 = ctx.disabled;
    if (import11.checkBinding(_expr_8, currVal_8)) {
      updateElemClass(rootEl, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = ctx.disabled;
    if (import11.checkBinding(_expr_9, currVal_9)) {
      setAttr(rootEl, 'aria-disabled', currVal_9?.toString());
      _expr_9 = currVal_9;
    }
    final currVal_10 = ctx.label;
    if (import11.checkBinding(_expr_10, currVal_10)) {
      setAttr(rootEl, 'aria-label', currVal_10);
      _expr_10 = currVal_10;
    }
  }
}

AppView<import2.MaterialCheckboxComponent> viewFactory_MaterialCheckboxComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialCheckboxComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialCheckboxComponent> _MaterialCheckboxComponentNgFactory = const ComponentFactory('material-checkbox', viewFactory_MaterialCheckboxComponentHost0);
ComponentFactory<import2.MaterialCheckboxComponent> get MaterialCheckboxComponentNgFactory {
  return _MaterialCheckboxComponentNgFactory;
}

class _ViewMaterialCheckboxComponent1 extends AppView<import2.MaterialCheckboxComponent> {
  import15.ViewMaterialRippleComponent0 _compView_0;
  import16.MaterialRippleComponent _MaterialRippleComponent_0_5;
  var _expr_0;
  import7.Element _el_0;
  _ViewMaterialCheckboxComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialCheckboxComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialCheckboxComponent> build() {
    _compView_0 = import15.ViewMaterialRippleComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'ripple';
    addShimC(_el_0);
    _MaterialRippleComponent_0_5 = import16.MaterialRippleComponent(_el_0);
    _compView_0.create(_MaterialRippleComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.rippleColor;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _el_0.style.setProperty('color', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialCheckboxComponent> viewFactory_MaterialCheckboxComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialCheckboxComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialCheckboxComponentHost = const [];

class _ViewMaterialCheckboxComponentHost0 extends AppView<import2.MaterialCheckboxComponent> {
  ViewMaterialCheckboxComponent0 _compView_0;
  import2.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  _ViewMaterialCheckboxComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialCheckboxComponent> build() {
    _compView_0 = ViewMaterialCheckboxComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialCheckboxComponent_0_5 = import2.MaterialCheckboxComponent(rootEl, _compView_0.ref, null, null, null);
    _compView_0.create(_MaterialCheckboxComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialCheckboxComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialCheckboxComponent_0_5;
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
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialCheckboxComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialCheckboxComponent> viewFactory_MaterialCheckboxComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialCheckboxComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialCheckboxComponent, MaterialCheckboxComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
