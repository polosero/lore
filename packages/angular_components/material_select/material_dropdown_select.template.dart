// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_dropdown_select.dart';
export 'material_dropdown_select.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/annotations/rtl_annotation.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref3;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref4;
import 'package:angular_components/focus/focus.template.dart' as _ref5;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref6;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref7;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref8;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref9;
import 'package:angular_components/material_list/material_list.template.dart' as _ref10;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref11;
import 'package:angular_components/material_select/activation_handler.template.dart' as _ref12;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref13;
import 'package:angular_components/material_select/material_select_base.template.dart' as _ref14;
import 'package:angular_components/material_select/material_select_dropdown_item.template.dart' as _ref15;
import 'package:angular_components/material_select/shift_click_selection.template.dart' as _ref16;
import 'package:angular_components/mixins/button_wrapper.template.dart' as _ref17;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref18;
import 'package:angular_components/mixins/selection_input_adapter.template.dart' as _ref19;
import 'package:angular_components/mixins/track_layout_changes.template.dart' as _ref20;
import 'package:angular_components/model/a11y/active_item.template.dart' as _ref21;
import 'package:angular_components/model/a11y/active_item_directive.template.dart' as _ref22;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref23;
import 'package:angular_components/model/selection/select.template.dart' as _ref24;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref25;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref26;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref27;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref28;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref29;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref30;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref31;
import 'package:angular_components/material_select/material_dropdown_select.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_dropdown_select.dart' as import2;
import 'dropdown_button.template.dart' as import3;
import 'dropdown_button.dart' as import4;
import '../src/laminate/popup/popup_source_directive.dart' as import5;
import '../material_popup/material_popup.template.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_popup/material_popup.dart' as import8;
import '../content/deferred_content.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import17;
import '../src/laminate/popup/dom_popup_source.dart' as import18;
import '../utils/angular/reference/reference.dart' as import19;
import '../src/laminate/popup/popup_hierarchy.dart' as import20;
import 'package:angular/src/core/zone/ng_zone.dart' as import21;
import '../src/laminate/overlay/overlay_service.dart' as import22;
import '../utils/browser/dom_service/dom_service.dart' as import23;
import '../laminate/overlay/zindexer.dart' as import24;
import 'package:angular/src/core/di/opaque_token.dart' as import25;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import27;
import '../src/laminate/popup/popup_size_provider.dart' as import28;
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../interfaces/has_disabled.dart' as import31;
import '../focus/focus_interface.dart' as import32;
import '../content/deferred_content_aware.dart' as import33;
import '../mixins/material_dropdown_base.dart' as import34;
import '../src/laminate/popup/popup_ref.dart' as import35;
import '../material_list/material_list.template.dart' as import36;
import '../focus/focus.dart' as import37;
import '../material_list/material_list.dart' as import38;
import 'package:angular/src/common/directives/ng_if.dart';
import '../laminate/components/modal/modal.dart' as import40;
import 'package:angular/src/common/directives/ng_for.dart' as import41;
import 'material_select_dropdown_item.template.dart' as import42;
import '../model/a11y/active_item_directive.template.dart' as import43;
import '../focus/keyboard_only_focus_indicator.dart' as import44;
import 'material_select_dropdown_item.dart' as import45;
import '../model/a11y/active_item_directive.dart' as import46;
import 'activation_handler.dart' as import47;
import '../utils/id_generator/id_generator.dart' as import48;
import '../model/selection/selection_container.dart' as import49;
import '../model/ui/has_renderer.dart' as import50;
import '../model/selection/selection_options.dart' as import51;
import '../dynamic_component/dynamic_component.template.dart' as import52;
import '../dynamic_component/dynamic_component.dart' as import53;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import54;

final List<dynamic> styles$MaterialDropdownSelectComponent = [import0.styles];

class ViewMaterialDropdownSelectComponent0<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  import3.ViewDropdownButtonComponent0 _compView_0;
  import4.DropdownButtonComponent _DropdownButtonComponent_0_5;
  import4.DropdownButtonComponent _Focusable_0_6;
  import5.PopupSourceDirective _PopupSourceDirective_0_7;
  import6.ViewMaterialPopupComponent0 _compView_2;
  ViewContainer _appEl_2;
  import8.MaterialPopupComponent _MaterialPopupComponent_2_8;
  dynamic __PopupRef_2_10;
  dynamic __PopupHierarchy_2_12;
  ViewContainer _appEl_4;
  import9.DeferredContentDirective _DeferredContentDirective_4_9;
  String _expr_0;
  String _expr_1;
  bool _expr_2;
  var _expr_3;
  String _expr_4;
  bool _expr_5;
  String _expr_7;
  String _expr_8;
  bool _expr_9;
  String _expr_11;
  bool _expr_12;
  bool _expr_14;
  bool _expr_16;
  var _expr_17;
  var _expr_18;
  bool _expr_19;
  bool _expr_20;
  String _expr_21;
  import10.Element _el_2;
  static RenderComponentType _renderType;
  ViewMaterialDropdownSelectComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import10.document.createElement('material-dropdown-select');
    _renderType ??= import14.appViewUtils.createRenderType((import15.isDevMode ? 'asset:angular_components/lib/material_select/material_dropdown_select.dart' : null), ViewEncapsulation.Emulated, styles$MaterialDropdownSelectComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupRef_2_10 {
    if ((__PopupRef_2_10 == null)) {
      (__PopupRef_2_10 = import8.getResolvedPopupRef(_MaterialPopupComponent_2_8));
    }
    return __PopupRef_2_10;
  }

  dynamic get _PopupHierarchy_2_12 {
    if ((__PopupHierarchy_2_12 == null)) {
      (__PopupHierarchy_2_12 = import8.getHierarchy(_MaterialPopupComponent_2_8));
    }
    return __PopupHierarchy_2_12;
  }

  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewDropdownButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    createAttr(_el_0, 'initPopupAriaAttributes', 'false');
    createAttr(_el_0, 'popupSource', '');
    createAttr(_el_0, 'popupType', 'listbox');
    addShimC(_el_0);
    _DropdownButtonComponent_0_5 = import4.DropdownButtonComponent();
    _Focusable_0_6 = _DropdownButtonComponent_0_5;
    _PopupSourceDirective_0_7 = (import15.isDevMode
        ? import17.debugInjectorWrap(import5.PopupSourceDirective, () {
            return import5.PopupSourceDirective(parentView.injectorGet(import18.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import19.ReferenceDirective, viewData.parentIndex, null), _Focusable_0_6, 'false');
          })
        : import5.PopupSourceDirective(parentView.injectorGet(import18.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import19.ReferenceDirective, viewData.parentIndex, null), _Focusable_0_6, 'false'));
    final _text_1 = import10.Text(' ');
    _compView_0.create(_DropdownButtonComponent_0_5, [
      <dynamic>[_text_1]..addAll(projectableNodes[0])
    ]);
    _compView_2 = import6.ViewMaterialPopupComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    createAttr(_el_2, 'enforceSpaceConstraints', '');
    addShimC(_el_2);
    _appEl_2 = ViewContainer(2, null, this, _el_2);
    _MaterialPopupComponent_2_8 = (import15.isDevMode
        ? import17.debugInjectorWrap(import8.MaterialPopupComponent, () {
            return import8.MaterialPopupComponent(parentView.injectorGet(import20.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import8.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import21.NgZone, viewData.parentIndex), parentView.injectorGet(import22.OverlayService, viewData.parentIndex), parentView.injectorGet(import23.DomService, viewData.parentIndex), parentView.injectorGet(import24.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import25.OpaqueToken<List<import27.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import25.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import28.PopupSizeProvider, viewData.parentIndex, null), _compView_2.ref, _appEl_2, ElementRef(_el_2));
          })
        : import8.MaterialPopupComponent(parentView.injectorGet(import20.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import8.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import21.NgZone, viewData.parentIndex), parentView.injectorGet(import22.OverlayService, viewData.parentIndex), parentView.injectorGet(import23.DomService, viewData.parentIndex), parentView.injectorGet(import24.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import25.OpaqueToken<List<import27.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import25.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import28.PopupSizeProvider, viewData.parentIndex, null), _compView_2.ref, _appEl_2, ElementRef(_el_2)));
    var doc = import10.document;
    final _el_3 = doc.createElement('div');
    createAttr(_el_3, 'header', '');
    addShimC(_el_3);
    project(_el_3, 1);
    final _anchor_4 = createViewContainerAnchor();
    _appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent1<T>(parentView, parentIndex);
    });
    _DeferredContentDirective_4_9 = import9.DeferredContentDirective(_appEl_4, _TemplateRef_4_8, _MaterialPopupComponent_2_8);
    final _el_5 = doc.createElement('div');
    createAttr(_el_5, 'footer', '');
    addShimC(_el_5);
    project(_el_5, 5);
    _compView_2.create(_MaterialPopupComponent_2_8, [
      [_el_3],
      [_appEl_4],
      [_el_5]
    ]);
    _el_0.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_0.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    final subscription_0 = _DropdownButtonComponent_0_5.onFocus.listen(eventHandler1(ctx.onFocus));
    final subscription_1 = _DropdownButtonComponent_0_5.onBlur.listen(eventHandler1(ctx.onBlur));
    final subscription_2 = _DropdownButtonComponent_0_5.trigger.listen(eventHandler1(ctx.handleClick));
    final subscription_3 = _MaterialPopupComponent_2_8.onVisible.listen(eventHandler1(ctx.onVisible));
    _el_3.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_3.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    _el_3.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    _el_5.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_5.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    _el_5.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    ctx.dropdownButton = _DropdownButtonComponent_0_5;
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import31.HasDisabled) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _DropdownButtonComponent_0_5;
    }
    if ((identical(token, import32.Focusable) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _Focusable_0_6;
    }
    if ((((identical(token, import8.MaterialPopupComponent) || identical(token, import33.DeferredContentAware)) || identical(token, import34.DropdownHandle)) && ((2 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialPopupComponent_2_8;
    }
    if ((identical(token, import35.PopupRef) && ((2 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupRef_2_10;
    }
    if ((identical(token, import20.PopupHierarchy) && ((2 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupHierarchy_2_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import5.PopupSourceDirective local_source = _PopupSourceDirective_0_7;
    changed = false;
    if (firstCheck) {
      _DropdownButtonComponent_0_5.popupType = 'listbox';
      changed = true;
      if (!identical(_ctx.buttonAriaRole, null)) {
        _DropdownButtonComponent_0_5.role = _ctx.buttonAriaRole;
        changed = true;
      }
    }
    final currVal_0 = _ctx.buttonText;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _DropdownButtonComponent_0_5.buttonText = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.buttonAriaLabel;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _DropdownButtonComponent_0_5.buttonAriaLabel = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _DropdownButtonComponent_0_5.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.icon;
    if (import14.checkBinding(_expr_3, currVal_3)) {
      _DropdownButtonComponent_0_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.iconName;
    if (import14.checkBinding(_expr_4, currVal_4)) {
      _DropdownButtonComponent_0_5.iconName = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.raised;
    if (import14.checkBinding(_expr_5, currVal_5)) {
      _DropdownButtonComponent_0_5.raised = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_7 = _ctx.error;
    if (import14.checkBinding(_expr_7, currVal_7)) {
      _DropdownButtonComponent_0_5.error = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.visible ? _ctx.listId : null);
    if (import14.checkBinding(_expr_8, currVal_8)) {
      _DropdownButtonComponent_0_5.ariaOwns = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.visible;
    if (import14.checkBinding(_expr_9, currVal_9)) {
      _DropdownButtonComponent_0_5.ariaExpanded = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    final currVal_11 = _ctx.buttonAriaLabelledBy;
    if (import14.checkBinding(_expr_11, currVal_11)) {
      _DropdownButtonComponent_0_5.ariaLabelledBy = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.showButtonBorder;
    if (import14.checkBinding(_expr_12, currVal_12)) {
      _DropdownButtonComponent_0_5.showButtonBorder = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _DropdownButtonComponent_0_5.ngOnInit();
    }
    if (firstCheck) {
      (_MaterialPopupComponent_2_8.enforceSpaceConstraints = true);
    }
    final currVal_14 = _ctx.autoDismiss;
    if (import14.checkBinding(_expr_14, currVal_14)) {
      _MaterialPopupComponent_2_8.autoDismiss = currVal_14;
      _expr_14 = currVal_14;
    }
    final currVal_16 = _ctx.popupMatchInputWidth;
    if (import14.checkBinding(_expr_16, currVal_16)) {
      _MaterialPopupComponent_2_8.matchMinSourceWidth = currVal_16;
      _expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.preferredPositions;
    if (import14.checkBinding(_expr_17, currVal_17)) {
      _MaterialPopupComponent_2_8.preferredPositions = currVal_17;
      _expr_17 = currVal_17;
    }
    final currVal_18 = local_source;
    if (import14.checkBinding(_expr_18, currVal_18)) {
      _MaterialPopupComponent_2_8.source = currVal_18;
      _expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.trackLayoutChanges;
    if (import14.checkBinding(_expr_19, currVal_19)) {
      _MaterialPopupComponent_2_8.trackLayoutChanges = currVal_19;
      _expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.visible;
    if (import14.checkBinding(_expr_20, currVal_20)) {
      _MaterialPopupComponent_2_8.visible = currVal_20;
      _expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.slide;
    if (import14.checkBinding(_expr_21, currVal_21)) {
      _MaterialPopupComponent_2_8.slide = currVal_21;
      _expr_21 = currVal_21;
    }
    if (firstCheck) {
      (_DeferredContentDirective_4_9.preserveDimensions = true);
    }
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        _compView_2.updateChildClass(_el_2, _ctx.popupClassName);
      }
    }
    _compView_2.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_2.detectChanges();
    if (!import14.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _PopupSourceDirective_0_7.ngAfterViewInit();
        _MaterialPopupComponent_2_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _compView_0.destroy();
    _compView_2.destroy();
    _PopupSourceDirective_0_7.ngOnDestroy();
    _DeferredContentDirective_4_9.ngOnDestroy();
    _MaterialPopupComponent_2_8.ngOnDestroy();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent0<T>(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialDropdownSelectComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialDropdownSelectComponent> _MaterialDropdownSelectComponentNgFactory = const ComponentFactory('material-dropdown-select', viewFactory_MaterialDropdownSelectComponentHost0);
ComponentFactory<import2.MaterialDropdownSelectComponent> get MaterialDropdownSelectComponentNgFactory {
  return _MaterialDropdownSelectComponentNgFactory;
}

class _ViewMaterialDropdownSelectComponent1<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  import36.ViewMaterialListComponent0 _compView_0;
  import37.AutoFocusDirective _AutoFocusDirective_0_5;
  import38.MaterialListComponent _MaterialListComponent_0_6;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_1;
  bool _expr_2;
  var _expr_3;
  import10.Element _el_0;
  _ViewMaterialDropdownSelectComponent1(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    _compView_0 = import36.ViewMaterialListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'options-list';
    createAttr(_el_0, 'role', 'listbox');
    _el_0.tabIndex = 0;
    addShimC(_el_0);
    _AutoFocusDirective_0_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import37.AutoFocusDirective, () {
            return import37.AutoFocusDirective(_el_0, parentView.parentView.injectorGet(import23.DomService, parentView.viewData.parentIndex), null, parentView.parentView.injectorGet(import40.ModalComponent, parentView.viewData.parentIndex, null), import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView)._PopupRef_2_10);
          })
        : import37.AutoFocusDirective(_el_0, parentView.parentView.injectorGet(import23.DomService, parentView.viewData.parentIndex), null, parentView.parentView.injectorGet(import40.ModalComponent, parentView.viewData.parentIndex, null), import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView)._PopupRef_2_10));
    _MaterialListComponent_0_6 = import38.MaterialListComponent();
    final _text_1 = import10.Text(' ');
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent2<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    _compView_0.create(_MaterialListComponent_0_6, [
      <dynamic>[projectableNodes[2]]..addAll([_text_1])..addAll(projectableNodes[3])..addAll([_appEl_2])..addAll(projectableNodes[4])
    ]);
    _el_0.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_0.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    _el_0.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    _el_0.addEventListener('mouseout', eventHandler1(_handle_mouseout_0_3));
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_2 = _ctx.listAutoFocus;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _AutoFocusDirective_0_5.autoFocus = currVal_2;
      _expr_2 = currVal_2;
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _AutoFocusDirective_0_5.ngOnInit();
    }
    changed = false;
    final currVal_3 = _ctx.width;
    if (import14.checkBinding(_expr_3, currVal_3)) {
      _MaterialListComponent_0_6.width = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_2_9.ngIf = (_ctx.options != null);
    _appEl_2.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.listId, null)) {
        setAttr(_el_0, 'id', _ctx.listId);
      }
    }
    final currVal_1 = _ctx.ariaActiveDescendant;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-activedescendant', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _compView_0.destroy();
    _AutoFocusDirective_0_5.ngOnDestroy();
  }

  void _handle_mouseout_0_3($event) {
    ctx.activeModel.activate(null);
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent1(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent2<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  import41.NgFor _NgFor_2_9;
  var _expr_1;
  _ViewMaterialDropdownSelectComponent2(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    var doc = import10.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'options-wrapper';
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent3<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent4<T>(parentView, parentIndex);
    });
    _NgFor_2_9 = import41.NgFor(_appEl_2, _TemplateRef_2_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    _NgIf_1_9.ngIf = _ctx.showDeselectItem;
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (_NgFor_2_9.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_1 = _ctx.options.optionGroups;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _NgFor_2_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if (!import14.AppViewUtils.throwOnChanges) {
      _NgFor_2_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent2(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent3<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  import42.ViewMaterialSelectDropdownItemComponent0<String> _compView_0;
  import43.ActiveItemDirectiveNgCd _ActiveItemDirective_0_5;
  import44.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  import45.MaterialSelectDropdownItemComponent<String> _MaterialSelectDropdownItemComponent_0_7;
  bool _expr_0;
  bool _expr_1;
  var _expr_3;
  var _expr_4;
  String _expr_5;
  import10.Element _el_0;
  _ViewMaterialDropdownSelectComponent3(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    _compView_0 = import42.ViewMaterialSelectDropdownItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _ActiveItemDirective_0_5 = import43.ActiveItemDirectiveNgCd((import15.isDevMode
        ? import17.debugInjectorWrap(import46.ActiveItemDirective, () {
            return import46.ActiveItemDirective(_el_0, parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.injectorGet(import40.Modal, parentView.parentView.parentView.viewData.parentIndex, null), import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView)._PopupRef_2_10);
          })
        : import46.ActiveItemDirective(_el_0, parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.injectorGet(import40.Modal, parentView.parentView.parentView.viewData.parentIndex, null), import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView)._PopupRef_2_10)));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = (import15.isDevMode
        ? import17.debugInjectorWrap(import44.KeyboardOnlyFocusIndicatorDirective, () {
            return import44.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.viewData.parentIndex));
          })
        : import44.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.viewData.parentIndex)));
    _MaterialSelectDropdownItemComponent_0_7 = (import15.isDevMode
        ? import17.debugInjectorWrap(import45.MaterialSelectDropdownItemComponent, () {
            return import45.MaterialSelectDropdownItemComponent(_el_0, null, import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.injectorGet(import47.ActivationHandler, parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.injectorGet(import48.IdGenerator, parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref);
          })
        : import45.MaterialSelectDropdownItemComponent(_el_0, null, import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.injectorGet(import47.ActivationHandler, parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.injectorGet(import48.IdGenerator, parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref));
    _compView_0.create(_MaterialSelectDropdownItemComponent_0_7, [const []]);
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_1));
    _el_0.addEventListener('mouseleave', eventHandler0(_ActiveItemDirective_0_5.instance.onMouseLeave));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    _el_0.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    _el_0.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_6.onFocus));
    final subscription_0 = _MaterialSelectDropdownItemComponent_0_7.trigger.listen(eventHandler0(ctx.deselectCurrentSelection));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import49.SelectionItem) || identical(token, import50.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectDropdownItemComponent_0_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_popup = import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView)._MaterialPopupComponent_2_8;
    final currVal_1 = (local_popup.showPopup && _ctx.activeModel.isActive(_ctx.deselectLabel));
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _ActiveItemDirective_0_5.instance.itemActive = currVal_1;
      _expr_1 = currVal_1;
    }
    if (firstCheck) {
      (_MaterialSelectDropdownItemComponent_0_7.tabbable = false);
    }
    final currVal_3 = _ctx.deselectLabel;
    if (import14.checkBinding(_expr_3, currVal_3)) {
      _MaterialSelectDropdownItemComponent_0_7.value = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.isDeselectItemSelected;
    if (import14.checkBinding(_expr_4, currVal_4)) {
      _MaterialSelectDropdownItemComponent_0_7.selected = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.activeModel.id(_ctx.deselectLabel);
    if (import14.checkBinding(_expr_5, currVal_5)) {
      _MaterialSelectDropdownItemComponent_0_7.id = currVal_5;
      _expr_5 = currVal_5;
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialSelectDropdownItemComponent_0_7.ngOnInit();
    }
    final currVal_0 = (_ctx.options.optionGroups.length == 1);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'empty', currVal_0);
      _expr_0 = currVal_0;
    }
    _ActiveItemDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import14.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _ActiveItemDirective_0_5.instance.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _ActiveItemDirective_0_5.instance.ngOnDestroy();
    _MaterialSelectDropdownItemComponent_0_7.ngOnDestroy();
  }

  void _handle_mouseenter_0_1($event) {
    ctx.activeModel.activate(ctx.deselectLabel);
    _ActiveItemDirective_0_5.instance.onMouseEnter();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent3(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent4<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  bool _expr_0;
  import10.DivElement _el_0;
  _ViewMaterialDropdownSelectComponent4(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    var doc = import10.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'group', '');
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent5<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import15.unsafeCast<import51.OptionGroup<T>>(locals['\$implicit']);
    _NgIf_1_9.ngIf = (local_group.isNotEmpty || local_group.hasEmptyLabel);
    _appEl_1.detectChangesInNestedViews();
    final currVal_0 = (local_group.isEmpty && !local_group.hasEmptyLabel);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'empty', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent4(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent5<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewMaterialDropdownSelectComponent5(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent6<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent7<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent8<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = createViewContainerAnchor();
    _appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent10<T>(parentView, parentIndex);
    });
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    init([_appEl_0, _appEl_1, _appEl_2, _appEl_3], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_group = import15.unsafeCast<import51.OptionGroup<T>>(parentView.locals['\$implicit']);
    _NgIf_0_9.ngIf = (local_group.hasLabel && !_ctx.hasCustomLabelRenderer);
    _NgIf_1_9.ngIf = _ctx.hasCustomLabelRenderer;
    _NgIf_2_9.ngIf = local_group.isNotEmpty;
    _NgIf_3_9.ngIf = (local_group.isEmpty && local_group.hasEmptyLabel);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent5(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent6<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  var _expr_0;
  import10.Text _text_1;
  _ViewMaterialDropdownSelectComponent6(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    var doc = import10.document;
    final _el_0 = doc.createElement('span');
    createAttr(_el_0, 'label', '');
    addShimE(_el_0);
    _text_1 = import10.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import15.unsafeCast<import51.OptionGroup<T>>(parentView.parentView.locals['\$implicit']);
    final currVal_0 = import14.interpolate0(local_group.uiDisplayName);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent6<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent6(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent7<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  import52.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import53.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  _ViewMaterialDropdownSelectComponent7(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    _compView_0 = import52.ViewDynamicComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = (import15.isDevMode
        ? import17.debugInjectorWrap(import53.DynamicComponent, () {
            return import53.DynamicComponent(parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import54.SlowComponentLoader, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0.ref, _appEl_0);
          })
        : import53.DynamicComponent(parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import54.SlowComponentLoader, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0.ref, _appEl_0));
    _compView_0.create(_DynamicComponent_0_8, []);
    init0(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_group = import15.unsafeCast<import51.OptionGroup<T>>(parentView.parentView.locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.labelFactory(local_group);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentFactory = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_group;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.value = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
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

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent7<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent7(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent8<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  ViewContainer _appEl_0;
  import41.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialDropdownSelectComponent8(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialDropdownSelectComponent9<T>(parentView, parentIndex);
    });
    _NgFor_0_9 = import41.NgFor(_appEl_0, _TemplateRef_0_8);
    init0(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import15.unsafeCast<import51.OptionGroup<T>>(parentView.parentView.locals['\$implicit']);
    final currVal_0 = local_group;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import14.AppViewUtils.throwOnChanges) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent8<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent8(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent9<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  import42.ViewMaterialSelectDropdownItemComponent0<T> _compView_0;
  import43.ActiveItemDirectiveNgCd _ActiveItemDirective_0_5;
  import44.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  import45.MaterialSelectDropdownItemComponent<T> _MaterialSelectDropdownItemComponent_0_7;
  bool _expr_0;
  bool _expr_1;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  bool _expr_8;
  var _expr_9;
  String _expr_10;
  import10.Element _el_0;
  _ViewMaterialDropdownSelectComponent9(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    _compView_0 = import42.ViewMaterialSelectDropdownItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _ActiveItemDirective_0_5 = import43.ActiveItemDirectiveNgCd((import15.isDevMode
        ? import17.debugInjectorWrap(import46.ActiveItemDirective, () {
            return import46.ActiveItemDirective(_el_0, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import40.Modal, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView.parentView.parentView.parentView)._PopupRef_2_10);
          })
        : import46.ActiveItemDirective(_el_0, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import40.Modal, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView.parentView.parentView.parentView)._PopupRef_2_10)));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = (import15.isDevMode
        ? import17.debugInjectorWrap(import44.KeyboardOnlyFocusIndicatorDirective, () {
            return import44.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex));
          })
        : import44.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
    _MaterialSelectDropdownItemComponent_0_7 = (import15.isDevMode
        ? import17.debugInjectorWrap(import45.MaterialSelectDropdownItemComponent, () {
            return import45.MaterialSelectDropdownItemComponent(_el_0, null, import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import47.ActivationHandler, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import48.IdGenerator, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref);
          })
        : import45.MaterialSelectDropdownItemComponent(_el_0, null, import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import47.ActivationHandler, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import48.IdGenerator, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref));
    _compView_0.create(_MaterialSelectDropdownItemComponent_0_7, [const []]);
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_0));
    _el_0.addEventListener('mouseleave', eventHandler0(_ActiveItemDirective_0_5.instance.onMouseLeave));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    _el_0.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    _el_0.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_6.onFocus));
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import49.SelectionItem) || identical(token, import50.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectDropdownItemComponent_0_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_popup = import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8;
    final local_item = locals['\$implicit'];
    final currVal_0 = (local_popup.showPopup && _ctx.activeModel.isActive(local_item));
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _ActiveItemDirective_0_5.instance.itemActive = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      (_MaterialSelectDropdownItemComponent_0_7.tabbable = false);
    }
    final currVal_1 = _ctx.isOptionDisabled(local_item);
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _MaterialSelectDropdownItemComponent_0_7.disabled = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.componentRenderer;
    if (import14.checkBinding(_expr_3, currVal_3)) {
      _MaterialSelectDropdownItemComponent_0_7.componentRenderer = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.factoryRenderer;
    if (import14.checkBinding(_expr_4, currVal_4)) {
      _MaterialSelectDropdownItemComponent_0_7.factoryRenderer = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.isOptionHidden(local_item);
    if (import14.checkBinding(_expr_5, currVal_5)) {
      _MaterialSelectDropdownItemComponent_0_7.isHidden = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = local_item;
    if (import14.checkBinding(_expr_6, currVal_6)) {
      _MaterialSelectDropdownItemComponent_0_7.value = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.itemRenderer;
    if (import14.checkBinding(_expr_7, currVal_7)) {
      _MaterialSelectDropdownItemComponent_0_7.itemRenderer = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.deselectOnActivate;
    if (import14.checkBinding(_expr_8, currVal_8)) {
      _MaterialSelectDropdownItemComponent_0_7.deselectOnActivate = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.selection;
    if (import14.checkBinding(_expr_9, currVal_9)) {
      _MaterialSelectDropdownItemComponent_0_7.selection = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.activeModel.id(local_item);
    if (import14.checkBinding(_expr_10, currVal_10)) {
      _MaterialSelectDropdownItemComponent_0_7.id = currVal_10;
      _expr_10 = currVal_10;
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialSelectDropdownItemComponent_0_7.ngOnInit();
    }
    _ActiveItemDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import14.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _ActiveItemDirective_0_5.instance.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _ActiveItemDirective_0_5.instance.ngOnDestroy();
    _MaterialSelectDropdownItemComponent_0_7.ngOnDestroy();
  }

  void _handle_mouseenter_0_0($event) {
    final local_item = locals['\$implicit'];
    ctx.activeModel.activate(local_item);
    _ActiveItemDirective_0_5.instance.onMouseEnter();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent9<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent9(parentView, parentIndex);
}

class _ViewMaterialDropdownSelectComponent10<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  import42.ViewMaterialSelectDropdownItemComponent0<String> _compView_0;
  import44.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_5;
  import45.MaterialSelectDropdownItemComponent<String> _MaterialSelectDropdownItemComponent_0_6;
  var _expr_2;
  _ViewMaterialDropdownSelectComponent10(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDropdownSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    _compView_0 = import42.ViewMaterialSelectDropdownItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import44.KeyboardOnlyFocusIndicatorDirective, () {
            return import44.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex));
          })
        : import44.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import23.DomService, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
    _MaterialSelectDropdownItemComponent_0_6 = (import15.isDevMode
        ? import17.debugInjectorWrap(import45.MaterialSelectDropdownItemComponent, () {
            return import45.MaterialSelectDropdownItemComponent(_el_0, null, import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import47.ActivationHandler, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import48.IdGenerator, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref);
          })
        : import45.MaterialSelectDropdownItemComponent(_el_0, null, import15.unsafeCast<ViewMaterialDropdownSelectComponent0>(parentView.parentView.parentView.parentView.parentView)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import47.ActivationHandler, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import48.IdGenerator, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref));
    _compView_0.create(_MaterialSelectDropdownItemComponent_0_6, [const []]);
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_5.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    _el_0.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    _el_0.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_5.onFocus));
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import49.SelectionItem) || identical(token, import50.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectDropdownItemComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_group = import15.unsafeCast<import51.OptionGroup<T>>(parentView.parentView.locals['\$implicit']);
    if (firstCheck) {
      _MaterialSelectDropdownItemComponent_0_6.disabled = true;
      _MaterialSelectDropdownItemComponent_0_6.tabbable = false;
    }
    final currVal_2 = local_group.emptyLabel;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _MaterialSelectDropdownItemComponent_0_6.value = currVal_2;
      _expr_2 = currVal_2;
    }
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialSelectDropdownItemComponent_0_6.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialSelectDropdownItemComponent_0_6.ngOnDestroy();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponent10<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponent10(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDropdownSelectComponentHost = const [];

class _ViewMaterialDropdownSelectComponentHost0<T> extends AppView<import2.MaterialDropdownSelectComponent<T>> {
  ViewMaterialDropdownSelectComponent0<T> _compView_0;
  import2.MaterialDropdownSelectComponent<T> _MaterialDropdownSelectComponent_0_5;
  _ViewMaterialDropdownSelectComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialDropdownSelectComponent<T>> build() {
    _compView_0 = ViewMaterialDropdownSelectComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDropdownSelectComponent_0_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import2.MaterialDropdownSelectComponent, () {
            return import2.MaterialDropdownSelectComponent(this.injectorGet(import48.IdGenerator, viewData.parentIndex, null), this.injectorGet(import28.PopupSizeProvider, viewData.parentIndex, null), this.injectorGet(const import25.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex, null), null, null, rootEl);
          })
        : import2.MaterialDropdownSelectComponent(this.injectorGet(import48.IdGenerator, viewData.parentIndex, null), this.injectorGet(import28.PopupSizeProvider, viewData.parentIndex, null), this.injectorGet(const import25.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex, null), null, null, rootEl));
    _compView_0.create(_MaterialDropdownSelectComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialDropdownSelectComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((((((((identical(token, import2.MaterialDropdownSelectComponent) || identical(token, import34.DropdownHandle)) || identical(token, import31.HasDisabled)) || identical(token, import50.HasRenderer)) || identical(token, import33.DeferredContentAware)) || identical(token, import49.SelectionContainer)) || identical(token, import28.PopupSizeProvider)) || identical(token, import47.ActivationHandler)) && (0 == nodeIndex))) {
      return _MaterialDropdownSelectComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    Map<String, SimpleChange> changes;
    changes = null;
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialDropdownSelectComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialDropdownSelectComponent<T>> viewFactory_MaterialDropdownSelectComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDropdownSelectComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDropdownSelectComponent, MaterialDropdownSelectComponentNgFactory);
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
  _ref13.initReflector();
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
  _ref19.initReflector();
  _ref20.initReflector();
  _ref21.initReflector();
  _ref22.initReflector();
  _ref23.initReflector();
  _ref24.initReflector();
  _ref25.initReflector();
  _ref26.initReflector();
  _ref27.initReflector();
  _ref28.initReflector();
  _ref29.initReflector();
  _ref30.initReflector();
  _ref31.initReflector();
}
