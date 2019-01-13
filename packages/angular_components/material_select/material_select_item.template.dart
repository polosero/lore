// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_select_item.dart';
export 'material_select_item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/glyph/glyph.template.dart' as _ref3;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref4;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref5;
import 'package:angular_components/material_select/activation_handler.template.dart' as _ref6;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref7;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref8;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref9;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref10;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref11;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref12;
import 'package:angular_components/material_select/material_select_item.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_select_item.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_checkbox/material_checkbox.template.dart' as import13;
import '../material_checkbox/material_checkbox.dart' as import14;
import '../interfaces/has_disabled.dart' as import15;
import '../glyph/glyph.template.dart' as import16;
import '../glyph/glyph.dart' as import17;
import '../dynamic_component/dynamic_component.template.dart' as import18;
import '../dynamic_component/dynamic_component.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import21;
import '../mixins/material_dropdown_base.dart' as import22;
import 'activation_handler.dart' as import23;
import '../model/selection/selection_container.dart' as import24;
import '../model/ui/has_renderer.dart' as import25;

final List<dynamic> styles$MaterialSelectItemComponent = [import0.styles];

class ViewMaterialSelectItemComponent0<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_0 = false;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  bool _expr_7;
  bool _expr_8;
  bool _expr_9;
  bool _expr_10;
  var _expr_11;
  bool _expr_12;
  import5.Comment _anchor_0;
  import5.DivElement _el_0_0;
  static RenderComponentType _renderType;
  ViewMaterialSelectItemComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import5.document.createElement('material-select-item');
    rootEl.className = import2.MaterialSelectItemComponent.hostClass;
    rootEl.tabIndex = import2.MaterialSelectItemComponent.hostTabIndexForSelectItem;
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_select/material_select_item.dart' : null), ViewEncapsulation.Emulated, styles$MaterialSelectItemComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    final import2.MaterialSelectItemComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    final _text_1 = import5.Text(' ');
    parentRenderNode.append(_text_1);
    final _anchor_2 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_2);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent2<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _text_3 = import5.Text('\n \n');
    parentRenderNode.append(_text_3);
    final _anchor_4 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_4);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent6<T>(parentView, parentIndex);
    });
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _text_5 = import5.Text('\n ');
    parentRenderNode.append(_text_5);
    final _anchor_6 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_6);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent7<T>(parentView, parentIndex);
    });
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    project(parentRenderNode, 0);
    init([], null);
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final bool currVal_0 = ((!_ctx.supportsMultiSelect && _ctx.isSelected) == true);
    if (import9.checkBinding(_expr_0, currVal_0)) {
      if (currVal_0) {
        var doc = import5.document;
        _el_0_0 = doc.createElement('div');
        _el_0_0.className = 'selected-accent mixin';
        addShimC(_el_0_0);
        addInlinedNodes(_anchor_0, [_el_0_0], true);
      } else {
        removeInlinedNodes([_el_0_0], true);
      }
      _expr_0 = currVal_0;
    }
    _NgIf_2_9.ngIf = (_ctx.supportsMultiSelect && !_ctx.hideCheckbox);
    _NgIf_4_9.ngIf = _ctx.valueHasLabel;
    _NgIf_6_9.ngIf = ((_ctx.componentType != null) || (_ctx.componentFactory != null));
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_6.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_4 = ctx.tabIndex;
    if (import9.checkBinding(_expr_4, currVal_4)) {
      setProp(rootEl, 'tabIndex', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = ctx.ariaRole;
    if (import9.checkBinding(_expr_5, currVal_5)) {
      setAttr(rootEl, 'role', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = ctx.disabledStr;
    if (import9.checkBinding(_expr_6, currVal_6)) {
      setAttr(rootEl, 'aria-disabled', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = ctx.disabled;
    if (import9.checkBinding(_expr_7, currVal_7)) {
      updateElemClass(rootEl, 'is-disabled', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = ctx.disabled;
    if (import9.checkBinding(_expr_8, currVal_8)) {
      updateElemClass(rootEl, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = ctx.isHidden;
    if (import9.checkBinding(_expr_9, currVal_9)) {
      updateElemClass(rootEl, 'hidden', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = ctx.supportsMultiSelect;
    if (import9.checkBinding(_expr_10, currVal_10)) {
      updateElemClass(rootEl, 'multiselect', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = ctx.isAriaChecked;
    if (import9.checkBinding(_expr_11, currVal_11)) {
      setAttr(rootEl, 'aria-checked', currVal_11?.toString());
      _expr_11 = currVal_11;
    }
    final currVal_12 = ctx.isSelected;
    if (import9.checkBinding(_expr_12, currVal_12)) {
      updateElemClass(rootEl, 'selected', currVal_12);
      _expr_12 = currVal_12;
    }
  }
}

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponent0<T>(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialSelectItemComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialSelectItemComponent> _MaterialSelectItemComponentNgFactory = const ComponentFactory('material-select-item', viewFactory_MaterialSelectItemComponentHost0);
ComponentFactory<import2.MaterialSelectItemComponent> get MaterialSelectItemComponentNgFactory {
  return _MaterialSelectItemComponentNgFactory;
}

class _ViewMaterialSelectItemComponent2<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialSelectItemComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectItemComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent3<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _text_1 = import5.Text('  ');
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent4<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init([_appEl_0, _text_1, _appEl_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = !_ctx.useCheckMarks;
    _NgIf_2_9.ngIf = _ctx.useCheckMarks;
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }
}

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent2(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent3<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  import13.ViewMaterialCheckboxComponent0 _compView_0;
  import14.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  bool _expr_0;
  bool _expr_1;
  _ViewMaterialSelectItemComponent3(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectItemComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    _compView_0 = import13.ViewMaterialCheckboxComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    _MaterialCheckboxComponent_0_5 = import14.MaterialCheckboxComponent(_el_0, _compView_0.ref, null, '-1', null);
    _compView_0.create(_MaterialCheckboxComponent_0_5, [const []]);
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.disabled;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _MaterialCheckboxComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelected;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _MaterialCheckboxComponent_0_5.checked = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
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

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent3(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent4<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewMaterialSelectItemComponent4(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectItemComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    var doc = import5.document;
    final _el_0 = doc.createElement('span');
    _el_0.className = 'check-container';
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent5<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.isSelected;
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent4(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent5<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  import16.ViewGlyphComponent0 _compView_0;
  import17.GlyphComponent _GlyphComponent_0_5;
  _ViewMaterialSelectItemComponent5(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectItemComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    _compView_0 = import16.ViewGlyphComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'baseline', '');
    _el_0.className = 'check';
    createAttr(_el_0, 'icon', 'check');
    addShimC(_el_0);
    _GlyphComponent_0_5 = import17.GlyphComponent(_el_0);
    _compView_0.create(_GlyphComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _GlyphComponent_0_5.icon = 'check';
      changed = true;
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

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent5(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent6<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  var _expr_0;
  import5.Text _text_1;
  _ViewMaterialSelectItemComponent6(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectItemComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    var doc = import5.document;
    final _el_0 = doc.createElement('span');
    _el_0.className = 'label';
    addShimE(_el_0);
    _text_1 = import5.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.valueLabel ?? '');
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponent6<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent6(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent7<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  import18.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import19.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialSelectItemComponent7(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectItemComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    _compView_0 = import18.ViewDynamicComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.className = 'dynamic-item';
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = (import10.isDevMode
        ? import20.debugInjectorWrap(import19.DynamicComponent, () {
            return import19.DynamicComponent(parentView.injectorGet(import21.SlowComponentLoader, viewData.parentIndex), _compView_0.ref, _appEl_0);
          })
        : import19.DynamicComponent(parentView.injectorGet(import21.SlowComponentLoader, viewData.parentIndex), _compView_0.ref, _appEl_0));
    _compView_0.create(_DynamicComponent_0_8, []);
    init0(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.componentType;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.componentFactory;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.value;
    if (import9.checkBinding(_expr_2, currVal_2)) {
      _DynamicComponent_0_8.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _DynamicComponent_0_8.ngAfterChanges();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroy();
    _DynamicComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponent7<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent7(parentView, parentIndex);
}

final List<dynamic> styles$MaterialSelectItemComponentHost = const [];

class _ViewMaterialSelectItemComponentHost0<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  ViewMaterialSelectItemComponent0<T> _compView_0;
  import2.MaterialSelectItemComponent<T> _MaterialSelectItemComponent_0_5;
  _ViewMaterialSelectItemComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    _compView_0 = ViewMaterialSelectItemComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSelectItemComponent_0_5 = (import10.isDevMode
        ? import20.debugInjectorWrap(import2.MaterialSelectItemComponent, () {
            return import2.MaterialSelectItemComponent(rootEl, this.injectorGet(import22.DropdownHandle, viewData.parentIndex, null), this.injectorGet(import23.ActivationHandler, viewData.parentIndex, null), _compView_0.ref, null);
          })
        : import2.MaterialSelectItemComponent(rootEl, this.injectorGet(import22.DropdownHandle, viewData.parentIndex, null), this.injectorGet(import23.ActivationHandler, viewData.parentIndex, null), _compView_0.ref, null));
    _compView_0.create(_MaterialSelectItemComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialSelectItemComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import24.SelectionItem) || identical(token, import15.HasDisabled)) || identical(token, import25.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialSelectItemComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectItemComponent, MaterialSelectItemComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
}
