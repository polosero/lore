// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_auto_suggest_input.dart';
export 'material_auto_suggest_input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_input.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content.template.dart' as _ref3;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref4;
import 'package:angular_components/focus/focus.template.dart' as _ref5;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref6;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref7;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref8;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref9;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref10;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref11;
import 'package:angular_components/material_input/input_wrapper.template.dart' as _ref12;
import 'package:angular_components/material_list/material_list.template.dart' as _ref13;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref14;
import 'package:angular_components/material_select/material_select_base.template.dart' as _ref15;
import 'package:angular_components/material_select/material_select_dropdown_item.template.dart' as _ref16;
import 'package:angular_components/material_spinner/material_spinner.template.dart' as _ref17;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref18;
import 'package:angular_components/mixins/highlight_assistant_mixin.template.dart' as _ref19;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref20;
import 'package:angular_components/mixins/selection_input_adapter.template.dart' as _ref21;
import 'package:angular_components/model/a11y/active_item.template.dart' as _ref22;
import 'package:angular_components/model/a11y/active_item_directive.template.dart' as _ref23;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref24;
import 'package:angular_components/model/selection/select.template.dart' as _ref25;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref26;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref27;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref28;
import 'package:angular_components/model/selection/string_selection_options.template.dart' as _ref29;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref30;
import 'package:angular_components/model/ui/highlight_provider.template.dart' as _ref31;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref32;
import 'package:angular_components/stop_propagation/stop_propagation.template.dart' as _ref33;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref34;
import 'package:angular_components/utils/async/async.template.dart' as _ref35;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref36;
import 'package:angular_forms/angular_forms.template.dart' as _ref37;
import 'package:angular_components/material_input/material_auto_suggest_input.scss.css.shim.dart' as import0;
import 'package:angular_components/material_input/material_input_wrapper.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_auto_suggest_input.dart' as import3;
import 'material_input.template.dart' as import4;
import 'deferred_validator.dart' as import5;
import 'package:angular_forms/src/directives/ng_model.dart' as import6;
import 'material_input.dart' as import7;
import 'material_input_default_value_accessor.dart' as import8;
import '../src/laminate/popup/popup_source_directive.dart' as import9;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_popup/material_popup.template.dart' as import12;
import '../material_popup/material_popup.dart' as import13;
import '../focus/keyboard_only_focus_indicator.dart' as import14;
import '../content/deferred_content.dart' as import15;
import 'dart:html' as import16;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import18;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import20;
import 'package:angular/src/runtime.dart' as import21;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import23;
import '../src/laminate/popup/dom_popup_source.dart' as import24;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import26;
import 'package:angular/src/core/zone/ng_zone.dart' as import27;
import '../src/laminate/overlay/overlay_service.dart' as import28;
import '../utils/browser/dom_service/dom_service.dart' as import29;
import '../laminate/overlay/zindexer.dart' as import30;
import 'package:angular/src/core/di/opaque_token.dart' as import31;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import33;
import '../src/laminate/popup/popup_size_provider.dart' as import34;
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular_forms/src/directives/ng_control.dart' as import36;
import '../interfaces/has_disabled.dart' as import37;
import 'base_material_input.dart' as import38;
import '../utils/angular/reference/reference.dart' as import39;
import '../focus/focus_interface.dart' as import40;
import '../content/deferred_content_aware.dart' as import41;
import '../mixins/material_dropdown_base.dart' as import42;
import '../src/laminate/popup/popup_ref.dart' as import43;
import '../material_icon/material_icon.template.dart' as import44;
import '../button_decorator/button_decorator.template.dart' as import45;
import '../material_icon/material_icon.dart' as import46;
import '../src/material_tooltip/tooltip.dart' as import47;
import '../stop_propagation/stop_propagation.dart' as import48;
import '../src/material_tooltip/tooltip_controller.dart' as import49;
import '../material_tooltip/module.dart' as import50;
import '../utils/disposer/disposer.dart' as import51;
import '../button_decorator/button_decorator.dart' as import52;
import '../focus/focus_trap.template.dart' as import53;
import '../focus/focus_trap.dart' as import54;
import '../material_spinner/material_spinner.template.dart' as import55;
import '../material_spinner/material_spinner.dart' as import56;
import '../material_list/material_list.template.dart' as import57;
import '../material_list/material_list.dart' as import58;
import 'package:angular/src/common/directives/ng_for.dart' as import59;
import '../model/selection/selection_options.dart' as import60;
import '../dynamic_component/dynamic_component.template.dart' as import61;
import '../dynamic_component/dynamic_component.dart' as import62;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import63;
import '../material_select/material_select_dropdown_item.template.dart' as import64;
import '../material_select/material_select_dropdown_item.dart' as import65;
import '../material_select/activation_handler.dart' as import66;
import '../utils/id_generator/id_generator.dart' as import67;
import '../model/selection/selection_container.dart' as import68;
import '../model/ui/has_renderer.dart' as import69;
import '../model/a11y/active_item_directive.template.dart' as import70;
import '../model/a11y/active_item_directive.dart' as import71;
import '../laminate/components/modal/modal.dart' as import72;
import '../model/ui/highlight_provider.dart' as import73;
import '../model/ui/has_factory.dart' as import74;

final List<dynamic> styles$MaterialAutoSuggestInputComponent = [import0.styles, import1.styles];

class ViewMaterialAutoSuggestInputComponent0<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  import4.ViewMaterialInputComponent0 _compView_0;
  import5.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import6.NgModel _NgModel_0_7;
  import6.NgModel _NgControl_0_8;
  import7.MaterialInputComponent _MaterialInputComponent_0_9;
  import7.MaterialInputComponent _BaseMaterialInput_0_10;
  import8.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  import7.MaterialInputComponent _ReferenceDirective_0_12;
  import7.MaterialInputComponent _Focusable_0_13;
  import9.PopupSourceDirective _PopupSourceDirective_0_14;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import12.ViewMaterialPopupComponent0 _compView_3;
  ViewContainer _appEl_3;
  import13.MaterialPopupComponent _MaterialPopupComponent_3_8;
  dynamic __PopupRef_3_11;
  dynamic __PopupHierarchy_3_12;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_4_5;
  ViewContainer _appEl_5;
  import15.CachingDeferredContentDirective _CachingDeferredContentDirective_5_9;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_6_5;
  String _expr_2;
  String _expr_3;
  int _expr_4;
  bool _expr_5;
  bool _expr_6;
  String _expr_7;
  var _expr_8;
  String _expr_9;
  var _expr_10;
  var _expr_11;
  bool _expr_12;
  bool _expr_13;
  bool _expr_14;
  String _expr_15;
  String _expr_16;
  String _expr_17;
  String _expr_18;
  bool _expr_20;
  String _expr_22;
  String _expr_23;
  bool _expr_24;
  String _expr_27;
  bool _expr_28;
  bool _expr_29;
  bool _expr_30;
  var _expr_31;
  var _expr_32;
  bool _expr_34;
  bool _expr_35;
  String _expr_36;
  import16.Element _el_0;
  import16.Element _el_3;
  static RenderComponentType _renderType;
  ViewMaterialAutoSuggestInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import16.document.createElement('material-auto-suggest-input');
    _renderType ??= import20.appViewUtils.createRenderType((import21.isDevMode ? 'asset:angular_components/lib/material_input/material_auto_suggest_input.dart' : null), ViewEncapsulation.Emulated, styles$MaterialAutoSuggestInputComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupRef_3_11 {
    if ((__PopupRef_3_11 == null)) {
      (__PopupRef_3_11 = import13.getResolvedPopupRef(_MaterialPopupComponent_3_8));
    }
    return __PopupRef_3_11;
  }

  dynamic get _PopupHierarchy_3_12 {
    if ((__PopupHierarchy_3_12 == null)) {
      (__PopupHierarchy_3_12 = import13.getHierarchy(_MaterialPopupComponent_3_8));
    }
    return __PopupHierarchy_3_12;
  }

  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    final _rootEl = rootEl;
    final import16.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewMaterialInputComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    createAttr(_el_0, 'alignPositionY', 'after');
    createAttr(_el_0, 'initPopupAriaAttributes', 'false');
    createAttr(_el_0, 'inputAriaAutocomplete', 'list');
    createAttr(_el_0, 'inputAriaHasPopup', 'listbox');
    createAttr(_el_0, 'popupSource', '');
    createAttr(_el_0, 'role', 'combobox');
    addShimC(_el_0);
    _DeferredValidator_0_5 = import5.DeferredValidator();
    _NgValidators_0_6 = [_DeferredValidator_0_5];
    _NgModel_0_7 = import6.NgModel(_NgValidators_0_6, null);
    _NgControl_0_8 = _NgModel_0_7;
    _MaterialInputComponent_0_9 = import7.MaterialInputComponent(null, null, 'combobox', _NgControl_0_8, _compView_0.ref, _DeferredValidator_0_5);
    _BaseMaterialInput_0_10 = _MaterialInputComponent_0_9;
    _MaterialInputDefaultValueAccessor_0_11 = import8.MaterialInputDefaultValueAccessor(_BaseMaterialInput_0_10, _NgControl_0_8);
    _ReferenceDirective_0_12 = _MaterialInputComponent_0_9;
    _Focusable_0_13 = _MaterialInputComponent_0_9;
    _PopupSourceDirective_0_14 = (import21.isDevMode
        ? import23.debugInjectorWrap(import9.PopupSourceDirective, () {
            return import9.PopupSourceDirective(parentView.injectorGet(import24.DomPopupSourceFactory, viewData.parentIndex), _el_0, _ReferenceDirective_0_12, _Focusable_0_13, 'false');
          })
        : import9.PopupSourceDirective(parentView.injectorGet(import24.DomPopupSourceFactory, viewData.parentIndex), _el_0, _ReferenceDirective_0_12, _Focusable_0_13, 'false'));
    var doc = import16.document;
    final _el_1 = doc.createElement('span');
    createAttr(_el_1, 'trailing', '');
    addShimE(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent1<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    project(_el_1, 0);
    _compView_0.create(_MaterialInputComponent_0_9, [
      [_el_1],
      const []
    ]);
    _compView_3 = import12.ViewMaterialPopupComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    createAttr(_el_3, 'trackLayoutChanges', '');
    addShimC(_el_3);
    _appEl_3 = ViewContainer(3, null, this, _el_3);
    _MaterialPopupComponent_3_8 = (import21.isDevMode
        ? import23.debugInjectorWrap(import13.MaterialPopupComponent, () {
            return import13.MaterialPopupComponent(parentView.injectorGet(import26.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import13.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import27.NgZone, viewData.parentIndex), parentView.injectorGet(import28.OverlayService, viewData.parentIndex), parentView.injectorGet(import29.DomService, viewData.parentIndex), parentView.injectorGet(import30.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import31.OpaqueToken<List<import33.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import31.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import34.PopupSizeProvider, viewData.parentIndex, null), _compView_3.ref, _appEl_3, ElementRef(_el_3));
          })
        : import13.MaterialPopupComponent(parentView.injectorGet(import26.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import13.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import27.NgZone, viewData.parentIndex), parentView.injectorGet(import28.OverlayService, viewData.parentIndex), parentView.injectorGet(import29.DomService, viewData.parentIndex), parentView.injectorGet(import30.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import31.OpaqueToken<List<import33.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import31.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import34.PopupSizeProvider, viewData.parentIndex, null), _compView_3.ref, _appEl_3, ElementRef(_el_3)));
    final _el_4 = doc.createElement('div');
    createAttr(_el_4, 'header', '');
    createAttr(_el_4, 'keyboardOnlyFocusIndicator', '');
    _el_4.tabIndex = -1;
    addShimC(_el_4);
    _KeyboardOnlyFocusIndicatorDirective_4_5 = (import21.isDevMode
        ? import23.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_4, parentView.injectorGet(import29.DomService, viewData.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_4, parentView.injectorGet(import29.DomService, viewData.parentIndex)));
    project(_el_4, 1);
    final _anchor_5 = createViewContainerAnchor();
    _appEl_5 = ViewContainer(5, 3, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent2<T>(parentView, parentIndex);
    });
    _CachingDeferredContentDirective_5_9 = import15.CachingDeferredContentDirective(_appEl_5, _TemplateRef_5_8, _MaterialPopupComponent_3_8);
    final _el_6 = doc.createElement('div');
    createAttr(_el_6, 'footer', '');
    createAttr(_el_6, 'keyboardOnlyFocusIndicator', '');
    _el_6.tabIndex = -1;
    addShimC(_el_6);
    _KeyboardOnlyFocusIndicatorDirective_6_5 = (import21.isDevMode
        ? import23.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_6, parentView.injectorGet(import29.DomService, viewData.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_6, parentView.injectorGet(import29.DomService, viewData.parentIndex)));
    project(_el_6, 2);
    _compView_3.create(_MaterialPopupComponent_3_8, [
      [_el_4],
      [_appEl_5],
      [_el_6]
    ]);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_0.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    final subscription_0 = _NgModel_0_7.update.listen(eventHandler1(_handle_ngModelChange_0_0));
    final subscription_1 = _MaterialInputComponent_0_9.onFocus.listen(eventHandler1(ctx.handleFocus));
    final subscription_2 = _MaterialInputComponent_0_9.onBlur.listen(eventHandler1(ctx.handleBlur));
    final subscription_3 = _MaterialPopupComponent_3_8.onVisible.listen(eventHandler1(_handle_visibleChange_3_0));
    _el_4.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    _el_4.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_4_5.keydown));
    _el_4.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_4_5.resetOutline));
    _el_4.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_4_5.onMouseInteraction));
    _el_4.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_4_5.onMouseInteraction));
    _el_4.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_4_5.onFocus));
    _el_6.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    _el_6.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_6_5.keydown));
    _el_6.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_6_5.resetOutline));
    _el_6.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_6_5.onMouseInteraction));
    _el_6.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_6_5.onMouseInteraction));
    _el_6.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_6_5.onFocus));
    ctx.input = _MaterialInputComponent_0_9;
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.DeferredValidator) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _DeferredValidator_0_5;
    }
    if ((identical(token, const import31.MultiToken<dynamic>('NgValidators')) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _NgValidators_0_6;
    }
    if ((identical(token, import6.NgModel) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _NgModel_0_7;
    }
    if ((identical(token, import36.NgControl) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _NgControl_0_8;
    }
    if (((identical(token, import7.MaterialInputComponent) || identical(token, import37.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _MaterialInputComponent_0_9;
    }
    if ((identical(token, import38.BaseMaterialInput) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _BaseMaterialInput_0_10;
    }
    if ((identical(token, import8.MaterialInputDefaultValueAccessor) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _MaterialInputDefaultValueAccessor_0_11;
    }
    if ((identical(token, import39.ReferenceDirective) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _ReferenceDirective_0_12;
    }
    if ((identical(token, import40.Focusable) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _Focusable_0_13;
    }
    if ((((identical(token, import13.MaterialPopupComponent) || identical(token, import41.DeferredContentAware)) || identical(token, import42.DropdownHandle)) && ((3 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialPopupComponent_3_8;
    }
    if ((identical(token, import43.PopupRef) && ((3 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _PopupRef_3_11;
    }
    if ((identical(token, import26.PopupHierarchy) && ((3 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _PopupHierarchy_3_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import9.PopupSourceDirective local_input = _PopupSourceDirective_0_14;
    changed = false;
    _NgModel_0_7.model = _ctx.inputText;
    _NgModel_0_7.ngAfterChanges();
    if ((!import20.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_9.inputAriaHasPopup = 'listbox';
      changed = true;
      _MaterialInputComponent_0_9.inputAriaAutocomplete = 'list';
      changed = true;
    }
    final currVal_2 = _ctx.label;
    if (import20.checkBinding(_expr_2, currVal_2)) {
      _MaterialInputComponent_0_9.label = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.ariaLabel;
    if (import20.checkBinding(_expr_3, currVal_3)) {
      _MaterialInputComponent_0_9.inputAriaLabel = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.maxCount;
    if (import20.checkBinding(_expr_4, currVal_4)) {
      _MaterialInputComponent_0_9.maxCount = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.displayBottomPanel;
    if (import20.checkBinding(_expr_5, currVal_5)) {
      _MaterialInputComponent_0_9.displayBottomPanel = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.floatingLabel;
    if (import20.checkBinding(_expr_6, currVal_6)) {
      _MaterialInputComponent_0_9.floatingLabel = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.errorText;
    if (import20.checkBinding(_expr_7, currVal_7)) {
      _MaterialInputComponent_0_9.error = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.hintText;
    if (import20.checkBinding(_expr_8, currVal_8)) {
      _MaterialInputComponent_0_9.hintText = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.requiredErrorMsg;
    if (import20.checkBinding(_expr_9, currVal_9)) {
      _MaterialInputComponent_0_9.requiredErrorMsg = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.checkValid;
    if (import20.checkBinding(_expr_10, currVal_10)) {
      _MaterialInputComponent_0_9.checkValid = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.characterCounter;
    if (import20.checkBinding(_expr_11, currVal_11)) {
      _MaterialInputComponent_0_9.characterCounter = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.disabled;
    if (import20.checkBinding(_expr_12, currVal_12)) {
      _MaterialInputComponent_0_9.disabled = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.showHintOnlyOnFocus;
    if (import20.checkBinding(_expr_13, currVal_13)) {
      _MaterialInputComponent_0_9.showHintOnlyOnFocus = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.required;
    if (import20.checkBinding(_expr_14, currVal_14)) {
      _MaterialInputComponent_0_9.required = currVal_14;
      changed = true;
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.leadingGlyph;
    if (import20.checkBinding(_expr_15, currVal_15)) {
      _MaterialInputComponent_0_9.leadingGlyph = currVal_15;
      changed = true;
      _expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.trailingGlyph;
    if (import20.checkBinding(_expr_16, currVal_16)) {
      _MaterialInputComponent_0_9.trailingGlyph = currVal_16;
      changed = true;
      _expr_16 = currVal_16;
    }
    final currVal_17 = (_ctx.showPopup ? _ctx.popupId : null);
    if (import20.checkBinding(_expr_17, currVal_17)) {
      _MaterialInputComponent_0_9.inputAriaOwns = currVal_17;
      changed = true;
      _expr_17 = currVal_17;
    }
    final currVal_18 = (_ctx.showPopup ? _ctx.activeModel.activeId : null);
    if (import20.checkBinding(_expr_18, currVal_18)) {
      _MaterialInputComponent_0_9.inputAriaActivedescendent = currVal_18;
      changed = true;
      _expr_18 = currVal_18;
    }
    final currVal_20 = _ctx.showPopup;
    if (import20.checkBinding(_expr_20, currVal_20)) {
      _MaterialInputComponent_0_9.inputAriaExpanded = currVal_20;
      changed = true;
      _expr_20 = currVal_20;
    }
    final currVal_22 = _ctx.leadingText;
    if (import20.checkBinding(_expr_22, currVal_22)) {
      _MaterialInputComponent_0_9.leadingText = currVal_22;
      changed = true;
      _expr_22 = currVal_22;
    }
    final currVal_23 = _ctx.trailingText;
    if (import20.checkBinding(_expr_23, currVal_23)) {
      _MaterialInputComponent_0_9.trailingText = currVal_23;
      changed = true;
      _expr_23 = currVal_23;
    }
    final currVal_24 = _ctx.rightAlign;
    if (import20.checkBinding(_expr_24, currVal_24)) {
      _MaterialInputComponent_0_9.rightAlign = currVal_24;
      changed = true;
      _expr_24 = currVal_24;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_PopupSourceDirective_0_14.alignY = 'after');
    }
    _NgIf_2_9.ngIf = _ctx.showClearIcon;
    if (firstCheck) {
      (_MaterialPopupComponent_3_8.trackLayoutChanges = true);
    }
    final currVal_28 = _ctx.autoDismiss;
    if (import20.checkBinding(_expr_28, currVal_28)) {
      _MaterialPopupComponent_3_8.autoDismiss = currVal_28;
      _expr_28 = currVal_28;
    }
    final currVal_29 = _ctx.enforceSpaceConstraints;
    if (import20.checkBinding(_expr_29, currVal_29)) {
      _MaterialPopupComponent_3_8.enforceSpaceConstraints = currVal_29;
      _expr_29 = currVal_29;
    }
    final currVal_30 = _ctx.popupMatchInputWidth;
    if (import20.checkBinding(_expr_30, currVal_30)) {
      _MaterialPopupComponent_3_8.matchMinSourceWidth = currVal_30;
      _expr_30 = currVal_30;
    }
    final currVal_31 = _ctx.popupPositions;
    if (import20.checkBinding(_expr_31, currVal_31)) {
      _MaterialPopupComponent_3_8.preferredPositions = currVal_31;
      _expr_31 = currVal_31;
    }
    final currVal_32 = local_input;
    if (import20.checkBinding(_expr_32, currVal_32)) {
      _MaterialPopupComponent_3_8.source = currVal_32;
      _expr_32 = currVal_32;
    }
    final currVal_34 = _ctx.constrainToViewport;
    if (import20.checkBinding(_expr_34, currVal_34)) {
      _MaterialPopupComponent_3_8.constrainToViewport = currVal_34;
      _expr_34 = currVal_34;
    }
    final currVal_35 = _ctx.showPopup;
    if (import20.checkBinding(_expr_35, currVal_35)) {
      _MaterialPopupComponent_3_8.visible = currVal_35;
      _expr_35 = currVal_35;
    }
    final currVal_36 = _ctx.slide;
    if (import20.checkBinding(_expr_36, currVal_36)) {
      _MaterialPopupComponent_3_8.slide = currVal_36;
      _expr_36 = currVal_36;
    }
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.inputId, null)) {
        setProp(_el_0, 'id', _ctx.inputId);
      }
    }
    final currVal_27 = import20.interpolate1('selections ', _ctx.popupShadowCssClass, '');
    if (import20.checkBinding(_expr_27, currVal_27)) {
      _compView_3.updateChildClass(_el_3, currVal_27);
      _expr_27 = currVal_27;
    }
    _compView_3.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_3.detectChanges();
    if (!import20.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_0_9.ngAfterViewInit();
        _PopupSourceDirective_0_14.ngAfterViewInit();
        _MaterialPopupComponent_3_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _compView_0.destroy();
    _compView_3.destroy();
    _MaterialInputComponent_0_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_11.ngOnDestroy();
    _PopupSourceDirective_0_14.ngOnDestroy();
    _CachingDeferredContentDirective_5_9.ngOnDestroy();
    _MaterialPopupComponent_3_8.ngOnDestroy();
  }

  void _handle_ngModelChange_0_0($event) {
    ctx.inputText = $event;
    ctx.showPopup = true;
  }

  void _handle_click_0_1($event) {
    ctx.showPopup = true;
    $event.stopPropagation();
  }

  void _handle_visibleChange_3_0($event) {
    ctx.showPopup = $event;
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent0<T>(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialAutoSuggestInputComponent0(parentView, parentIndex);
}

const ComponentFactory<import3.MaterialAutoSuggestInputComponent> _MaterialAutoSuggestInputComponentNgFactory = const ComponentFactory('material-auto-suggest-input', viewFactory_MaterialAutoSuggestInputComponentHost0);
ComponentFactory<import3.MaterialAutoSuggestInputComponent> get MaterialAutoSuggestInputComponentNgFactory {
  return _MaterialAutoSuggestInputComponentNgFactory;
}

class _ViewMaterialAutoSuggestInputComponent1<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  import44.ViewMaterialIconComponent0 _compView_0;
  ViewContainer _appEl_0;
  import45.ButtonDirectiveNgCd _ButtonDirective_0_8;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_9;
  import46.MaterialIconComponent _MaterialIconComponent_0_10;
  import47.MaterialTooltipDirective _MaterialTooltipDirective_0_11;
  import48.StopPropagationDirective _StopPropagationDirective_0_12;
  dynamic __TooltipController_0_13;
  var _expr_0;
  String _expr_2;
  bool _expr_3;
  import16.Element _el_0;
  _ViewMaterialAutoSuggestInputComponent1(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  dynamic get _TooltipController_0_13 {
    if ((__TooltipController_0_13 == null)) {
      (__TooltipController_0_13 = (import21.isDevMode
          ? import23.debugInjectorWrap(import49.TooltipController, () {
              return import50.createTooltipController(parentView.parentView.injectorGet(import49.TooltipController, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import51.Disposer, parentView.viewData.parentIndex, null));
            })
          : import50.createTooltipController(parentView.parentView.injectorGet(import49.TooltipController, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import51.Disposer, parentView.viewData.parentIndex, null))));
    }
    return __TooltipController_0_13;
  }

  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    _compView_0 = import44.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'clear-icon';
    createAttr(_el_0, 'icon', 'clear');
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'stopPropagation', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _ButtonDirective_0_8 = import45.ButtonDirectiveNgCd(import52.ButtonDirective(_el_0, null));
    _KeyboardOnlyFocusIndicatorDirective_0_9 = (import21.isDevMode
        ? import23.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.injectorGet(import29.DomService, parentView.viewData.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.injectorGet(import29.DomService, parentView.viewData.parentIndex)));
    _MaterialIconComponent_0_10 = import46.MaterialIconComponent(_el_0);
    _MaterialTooltipDirective_0_11 = (import21.isDevMode
        ? import23.debugInjectorWrap(import47.MaterialTooltipDirective, () {
            return import47.MaterialTooltipDirective(parentView.parentView.injectorGet(import24.DomPopupSourceFactory, parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0.ref, parentView.parentView.injectorGet(import16.Window, parentView.viewData.parentIndex));
          })
        : import47.MaterialTooltipDirective(parentView.parentView.injectorGet(import24.DomPopupSourceFactory, parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0.ref, parentView.parentView.injectorGet(import16.Window, parentView.viewData.parentIndex)));
    _StopPropagationDirective_0_12 = import48.StopPropagationDirective(_el_0);
    _compView_0.create(_MaterialIconComponent_0_10, []);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_8.instance.handleKeyPress));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_9.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_9.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_9.onMouseInteraction));
    _el_0.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_9.onFocus));
    final subscription_0 = _ButtonDirective_0_8.instance.trigger.listen(eventHandler0(ctx.onClearIcon));
    init([_appEl_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import52.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_8.instance;
    }
    if ((identical(token, import49.TooltipController) && (0 == nodeIndex))) {
      return _TooltipController_0_13;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if ((!import20.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_8.instance.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_10.icon = 'clear';
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_2 = _ctx.clearIconTooltip;
    if (import20.checkBinding(_expr_2, currVal_2)) {
      _MaterialTooltipDirective_0_11.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.hasClearIconTooltip;
    if (import20.checkBinding(_expr_3, currVal_3)) {
      _MaterialTooltipDirective_0_11.canShow = currVal_3;
      _expr_3 = currVal_3;
    }
    if ((!import20.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialTooltipDirective_0_11.ngOnInit();
    }
    _appEl_0.detectChangesInNestedViews();
    final currVal_0 = _ctx.clearIconTooltip;
    if (import20.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0);
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_8.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
    if (!import20.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialTooltipDirective_0_11.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroy();
    _MaterialTooltipDirective_0_11.ngOnDestroy();
    _StopPropagationDirective_0_12.ngOnDestroy();
  }

  void _handle_click_0_1($event) {
    _ButtonDirective_0_8.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_9.onMouseInteraction();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent1(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent2<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  import53.ViewFocusTrapComponent0 _compView_0;
  import54.FocusTrapComponent _FocusTrapComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewMaterialAutoSuggestInputComponent2(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    _compView_0 = import53.ViewFocusTrapComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _FocusTrapComponent_0_5 = import54.FocusTrapComponent();
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent3<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent4<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = createViewContainerAnchor();
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent5<T>(parentView, parentIndex);
    });
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    _compView_0.create(_FocusTrapComponent_0_5, [
      [_appEl_1, _appEl_2, _appEl_3]
    ]);
    _el_0.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_0.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    _el_0.addEventListener('keyup', eventHandler1(ctx.onKeyUp));
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.showLoadingSpinner;
    _NgIf_2_9.ngIf = _ctx.showEmptyPlaceholder;
    _NgIf_3_9.ngIf = _ctx.hasOptions;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _compView_0.destroy();
    _FocusTrapComponent_0_5.ngOnDestroy();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent2(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent3<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  import55.ViewMaterialSpinnerComponent0 _compView_1;
  import56.MaterialSpinnerComponent _MaterialSpinnerComponent_1_5;
  _ViewMaterialAutoSuggestInputComponent3(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    var doc = import16.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'loading';
    addShimC(_el_0);
    _compView_1 = import55.ViewMaterialSpinnerComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _MaterialSpinnerComponent_1_5 = import56.MaterialSpinnerComponent();
    _compView_1.create(_MaterialSpinnerComponent_1_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroy();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent3(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent4<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  var _expr_0;
  import16.Text _text_1;
  _ViewMaterialAutoSuggestInputComponent4(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    var doc = import16.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'empty';
    addShimC(_el_0);
    _text_1 = import16.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.emptyPlaceholder ?? '');
    if (import20.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent4(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent5<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  import57.ViewMaterialListComponent0 _compView_0;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_5;
  import58.MaterialListComponent _MaterialListComponent_0_6;
  ViewContainer _appEl_1;
  import59.NgFor _NgFor_1_9;
  var _expr_0;
  var _expr_3;
  var _expr_4;
  import16.Element _el_0;
  _ViewMaterialAutoSuggestInputComponent5(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    _compView_0 = import57.ViewMaterialListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'suggestion-list';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'role', 'listbox');
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_5 = (import21.isDevMode
        ? import23.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.injectorGet(import29.DomService, parentView.parentView.viewData.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.injectorGet(import29.DomService, parentView.parentView.viewData.parentIndex)));
    _MaterialListComponent_0_6 = import58.MaterialListComponent();
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent6<T>(parentView, parentIndex);
    });
    _NgFor_1_9 = import59.NgFor(_appEl_1, _TemplateRef_1_8);
    _compView_0.create(_MaterialListComponent_0_6, [
      [_appEl_1]
    ]);
    _el_0.addEventListener('mouseleave', eventHandler1(_handle_mouseleave_0_0));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_5.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    _el_0.addEventListener('click', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    _el_0.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_5.onFocus));
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_3 = _ctx.width;
    if (import20.checkBinding(_expr_3, currVal_3)) {
      _MaterialListComponent_0_6.width = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (_NgFor_1_9.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_4 = _ctx.visibleSuggestionGroups;
    if (import20.checkBinding(_expr_4, currVal_4)) {
      _NgFor_1_9.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    if (!import20.AppViewUtils.throwOnChanges) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.inputId, null)) {
        setAttr(_el_0, 'aria-labelledby', _ctx.inputId);
      }
      if (!identical(_ctx.popupId, null)) {
        setProp(_el_0, 'id', _ctx.popupId);
      }
    }
    final currVal_0 = _ctx.isMultiSelect;
    if (import20.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-multiselectable', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _compView_0.destroy();
  }

  void _handle_mouseleave_0_0($event) {
    ctx.activeModel.activate(null);
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent5(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent6<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  import59.NgFor _NgFor_4_9;
  var _expr_3;
  _ViewMaterialAutoSuggestInputComponent6(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    var doc = import16.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'list-group';
    createAttr(_el_0, 'group', '');
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent7<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent8<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent9<T>(parentView, parentIndex);
    });
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = createViewContainerAnchor();
    _el_0.append(_anchor_4);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialAutoSuggestInputComponent10<T>(parentView, parentIndex);
    });
    _NgFor_4_9 = import59.NgFor(_appEl_4, _TemplateRef_4_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_suggestionGroup = import21.unsafeCast<import60.OptionGroup<dynamic>>(locals['\$implicit']);
    _NgIf_1_9.ngIf = (local_suggestionGroup.hasLabel && !_ctx.hasCustomLabelRenderer);
    _NgIf_2_9.ngIf = _ctx.hasCustomLabelRenderer;
    _NgIf_3_9.ngIf = (local_suggestionGroup.isEmpty && local_suggestionGroup.hasEmptyLabel);
    final currVal_3 = local_suggestionGroup;
    if (import20.checkBinding(_expr_3, currVal_3)) {
      _NgFor_4_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if (!import20.AppViewUtils.throwOnChanges) {
      _NgFor_4_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent6<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent6(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent7<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  var _expr_0;
  import16.Text _text_1;
  _ViewMaterialAutoSuggestInputComponent7(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    var doc = import16.document;
    final _el_0 = doc.createElement('span');
    _el_0.className = 'list-group-label';
    createAttr(_el_0, 'label', '');
    addShimE(_el_0);
    _text_1 = import16.Text('');
    _el_0.append(_text_1);
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_0));
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_suggestionGroup = import21.unsafeCast<import60.OptionGroup<dynamic>>(parentView.locals['\$implicit']);
    final currVal_0 = import20.interpolate0(local_suggestionGroup.uiDisplayName);
    if (import20.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_mouseenter_0_0($event) {
    ctx.activeModel.activate(null);
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent7<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent7(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent8<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  import61.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import62.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialAutoSuggestInputComponent8(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    _compView_0 = import61.ViewDynamicComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = (import21.isDevMode
        ? import23.debugInjectorWrap(import62.DynamicComponent, () {
            return import62.DynamicComponent(parentView.parentView.parentView.parentView.parentView.injectorGet(import63.SlowComponentLoader, parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0.ref, _appEl_0);
          })
        : import62.DynamicComponent(parentView.parentView.parentView.parentView.parentView.injectorGet(import63.SlowComponentLoader, parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0.ref, _appEl_0));
    _compView_0.create(_DynamicComponent_0_8, []);
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_0));
    init0(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_suggestionGroup = import21.unsafeCast<import60.OptionGroup<dynamic>>(parentView.locals['\$implicit']);
    changed = false;
    final currVal_0 = ((_ctx.labelRenderer != null) ? _ctx.labelRenderer(local_suggestionGroup) : null);
    if (import20.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = ((_ctx.labelFactory != null) ? _ctx.labelFactory(local_suggestionGroup) : null);
    if (import20.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_suggestionGroup;
    if (import20.checkBinding(_expr_2, currVal_2)) {
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

  void _handle_mouseenter_0_0($event) {
    ctx.activeModel.activate(null);
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent8<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent8(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent9<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  import64.ViewMaterialSelectDropdownItemComponent0<String> _compView_0;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_5;
  import65.MaterialSelectDropdownItemComponent<String> _MaterialSelectDropdownItemComponent_0_6;
  var _expr_1;
  _ViewMaterialAutoSuggestInputComponent9(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    _compView_0 = import64.ViewMaterialSelectDropdownItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_5 = (import21.isDevMode
        ? import23.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import29.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import29.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex)));
    _MaterialSelectDropdownItemComponent_0_6 = (import21.isDevMode
        ? import23.debugInjectorWrap(import65.MaterialSelectDropdownItemComponent, () {
            return import65.MaterialSelectDropdownItemComponent(_el_0, null, import21.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8, parentView.parentView.parentView.parentView.parentView.injectorGet(import66.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import67.IdGenerator, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref);
          })
        : import65.MaterialSelectDropdownItemComponent(_el_0, null, import21.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8, parentView.parentView.parentView.parentView.parentView.injectorGet(import66.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import67.IdGenerator, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref));
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
    if (((identical(token, import68.SelectionItem) || identical(token, import69.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectDropdownItemComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_suggestionGroup = import21.unsafeCast<import60.OptionGroup<dynamic>>(parentView.locals['\$implicit']);
    if (firstCheck) {
      (_MaterialSelectDropdownItemComponent_0_6.disabled = true);
    }
    final currVal_1 = local_suggestionGroup.emptyLabel;
    if (import20.checkBinding(_expr_1, currVal_1)) {
      _MaterialSelectDropdownItemComponent_0_6.value = currVal_1;
      _expr_1 = currVal_1;
    }
    if ((!import20.AppViewUtils.throwOnChanges && firstCheck)) {
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

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent9<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent9(parentView, parentIndex);
}

class _ViewMaterialAutoSuggestInputComponent10<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  import64.ViewMaterialSelectDropdownItemComponent0<T> _compView_0;
  import70.ActiveItemDirectiveNgCd _ActiveItemDirective_0_5;
  import14.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  import65.MaterialSelectDropdownItemComponent<T> _MaterialSelectDropdownItemComponent_0_7;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  bool _expr_7;
  var _expr_8;
  var _expr_9;
  String _expr_10;
  import16.Element _el_0;
  _ViewMaterialAutoSuggestInputComponent10(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialAutoSuggestInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    _compView_0 = import64.ViewMaterialSelectDropdownItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = import20.interpolate2('', 'list-item', ' ', import65.MaterialSelectDropdownItemComponent.hostClass, '');
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _ActiveItemDirective_0_5 = import70.ActiveItemDirectiveNgCd((import21.isDevMode
        ? import23.debugInjectorWrap(import71.ActiveItemDirective, () {
            return import71.ActiveItemDirective(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import29.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGet(import72.Modal, parentView.parentView.parentView.parentView.viewData.parentIndex, null), import21.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(parentView.parentView.parentView.parentView)._PopupRef_3_11);
          })
        : import71.ActiveItemDirective(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import29.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGet(import72.Modal, parentView.parentView.parentView.parentView.viewData.parentIndex, null), import21.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(parentView.parentView.parentView.parentView)._PopupRef_3_11)));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = (import21.isDevMode
        ? import23.debugInjectorWrap(import14.KeyboardOnlyFocusIndicatorDirective, () {
            return import14.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import29.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex));
          })
        : import14.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import29.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex)));
    _MaterialSelectDropdownItemComponent_0_7 = (import21.isDevMode
        ? import23.debugInjectorWrap(import65.MaterialSelectDropdownItemComponent, () {
            return import65.MaterialSelectDropdownItemComponent(_el_0, null, import21.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8, parentView.parentView.parentView.parentView.parentView.injectorGet(import66.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import67.IdGenerator, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref);
          })
        : import65.MaterialSelectDropdownItemComponent(_el_0, null, import21.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8, parentView.parentView.parentView.parentView.parentView.injectorGet(import66.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import67.IdGenerator, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref));
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
    if (((identical(token, import68.SelectionItem) || identical(token, import69.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectDropdownItemComponent_0_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_popup = import21.unsafeCast<ViewMaterialAutoSuggestInputComponent0>(parentView.parentView.parentView.parentView)._MaterialPopupComponent_3_8;
    final local_suggestion = locals['\$implicit'];
    final currVal_0 = (local_popup.showPopup && _ctx.activeModel.isActive(local_suggestion));
    if (import20.checkBinding(_expr_0, currVal_0)) {
      _ActiveItemDirective_0_5.instance.itemActive = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isOptionDisabled(local_suggestion);
    if (import20.checkBinding(_expr_1, currVal_1)) {
      _MaterialSelectDropdownItemComponent_0_7.disabled = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.componentRenderer;
    if (import20.checkBinding(_expr_2, currVal_2)) {
      _MaterialSelectDropdownItemComponent_0_7.componentRenderer = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.factoryRenderer;
    if (import20.checkBinding(_expr_3, currVal_3)) {
      _MaterialSelectDropdownItemComponent_0_7.factoryRenderer = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = local_suggestion;
    if (import20.checkBinding(_expr_4, currVal_4)) {
      _MaterialSelectDropdownItemComponent_0_7.value = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.hideCheckbox;
    if (import20.checkBinding(_expr_5, currVal_5)) {
      _MaterialSelectDropdownItemComponent_0_7.hideCheckbox = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.itemRenderer;
    if (import20.checkBinding(_expr_6, currVal_6)) {
      _MaterialSelectDropdownItemComponent_0_7.itemRenderer = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.isMultiSelect;
    if (import20.checkBinding(_expr_7, currVal_7)) {
      _MaterialSelectDropdownItemComponent_0_7.deselectOnActivate = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.selection;
    if (import20.checkBinding(_expr_8, currVal_8)) {
      _MaterialSelectDropdownItemComponent_0_7.selection = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.closeOnActivate;
    if (import20.checkBinding(_expr_9, currVal_9)) {
      _MaterialSelectDropdownItemComponent_0_7.closeOnActivate = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.activeModel.id(local_suggestion);
    if (import20.checkBinding(_expr_10, currVal_10)) {
      _MaterialSelectDropdownItemComponent_0_7.id = currVal_10;
      _expr_10 = currVal_10;
    }
    if ((!import20.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialSelectDropdownItemComponent_0_7.ngOnInit();
    }
    _ActiveItemDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import20.AppViewUtils.throwOnChanges) {
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
    final local_suggestion = locals['\$implicit'];
    ctx.activeModel.activate(local_suggestion);
    _ActiveItemDirective_0_5.instance.onMouseEnter();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponent10<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponent10(parentView, parentIndex);
}

final List<dynamic> styles$MaterialAutoSuggestInputComponentHost = const [];

class _ViewMaterialAutoSuggestInputComponentHost0<T> extends AppView<import3.MaterialAutoSuggestInputComponent<T>> {
  ViewMaterialAutoSuggestInputComponent0<T> _compView_0;
  import3.MaterialAutoSuggestInputComponent<T> _MaterialAutoSuggestInputComponent_0_5;
  _ViewMaterialAutoSuggestInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import18.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.MaterialAutoSuggestInputComponent<T>> build() {
    _compView_0 = ViewMaterialAutoSuggestInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialAutoSuggestInputComponent_0_5 = (import21.isDevMode
        ? import23.debugInjectorWrap(import3.MaterialAutoSuggestInputComponent, () {
            return import3.MaterialAutoSuggestInputComponent(null, this.injectorGet(import67.IdGenerator, viewData.parentIndex, null), this.injectorGet(import34.PopupSizeProvider, viewData.parentIndex, null));
          })
        : import3.MaterialAutoSuggestInputComponent(null, this.injectorGet(import67.IdGenerator, viewData.parentIndex, null), this.injectorGet(import34.PopupSizeProvider, viewData.parentIndex, null)));
    _compView_0.create(_MaterialAutoSuggestInputComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialAutoSuggestInputComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((((((((((identical(token, import3.MaterialAutoSuggestInputComponent) || identical(token, import37.HasDisabled)) || identical(token, import69.HasRenderer)) || identical(token, import68.SelectionContainer)) || identical(token, import73.HighlightProvider)) || identical(token, import42.DropdownHandle)) || identical(token, import69.HasComponentRenderer)) || identical(token, import74.HasFactoryRenderer)) || identical(token, import40.Focusable)) || identical(token, import34.PopupSizeProvider)) && (0 == nodeIndex))) {
      return _MaterialAutoSuggestInputComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import20.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialAutoSuggestInputComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialAutoSuggestInputComponent_0_5.ngOnDestroy();
  }
}

AppView<import3.MaterialAutoSuggestInputComponent<T>> viewFactory_MaterialAutoSuggestInputComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialAutoSuggestInputComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialAutoSuggestInputComponent, MaterialAutoSuggestInputComponentNgFactory);
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
  _ref32.initReflector();
  _ref33.initReflector();
  _ref34.initReflector();
  _ref35.initReflector();
  _ref36.initReflector();
  _ref37.initReflector();
}
