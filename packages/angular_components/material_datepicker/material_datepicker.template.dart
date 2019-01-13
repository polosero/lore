// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_datepicker.dart';
export 'material_datepicker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref4;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref5;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref6;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref7;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref8;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/date_input.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/material_calendar_picker.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref13;
import 'package:angular_components/material_input/material_input.template.dart' as _ref14;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref15;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref16;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref17;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref18;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref19;
import 'package:angular_components/model/date/date.template.dart' as _ref20;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref21;
import 'package:angular_components/material_datepicker/material_datepicker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_datepicker.dart' as import2;
import '../src/laminate/popup/popup_source_directive.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_select/dropdown_button.template.dart' as import6;
import '../material_select/dropdown_button.dart' as import7;
import '../material_popup/material_popup.template.dart' as import8;
import '../material_popup/material_popup.dart' as import9;
import '../focus/focus_trap.template.dart' as import10;
import '../focus/focus_trap.dart' as import11;
import '../content/deferred_content.dart' as import12;
import 'dart:html' as import13;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import 'package:angular/src/runtime.dart' as import18;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import20;
import '../src/laminate/popup/dom_popup_source.dart' as import21;
import '../utils/angular/reference/reference.dart' as import22;
import '../focus/focus_interface.dart' as import23;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import25;
import 'package:angular/src/core/zone/ng_zone.dart' as import26;
import '../src/laminate/overlay/overlay_service.dart' as import27;
import '../utils/browser/dom_service/dom_service.dart' as import28;
import '../laminate/overlay/zindexer.dart' as import29;
import 'package:angular/src/core/di/opaque_token.dart' as import30;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import32;
import '../src/laminate/popup/popup_size_provider.dart' as import33;
import 'package:angular/src/core/linker/element_ref.dart';
import '../interfaces/has_disabled.dart' as import35;
import '../content/deferred_content_aware.dart' as import36;
import '../mixins/material_dropdown_base.dart' as import37;
import '../src/laminate/popup/popup_ref.dart' as import38;
import '../material_input/material_input.template.dart' as import39;
import '../material_input/deferred_validator.dart' as import40;
import '../material_input/material_input.dart' as import41;
import '../focus/focus.dart' as import42;
import 'date_input.dart' as import43;
import '../material_input/material_input_default_value_accessor.dart' as import44;
import 'material_calendar_picker.template.dart' as import45;
import 'material_calendar_picker.dart' as import46;
import 'package:angular/src/common/directives/ng_class.dart' as import47;
import '../laminate/components/modal/modal.dart' as import48;
import 'package:quiver/time.dart' as import49;
import '../material_input/base_material_input.dart' as import50;
import 'package:angular/src/common/directives/ng_for.dart' as import51;
import '../material_select/material_select_item.template.dart' as import52;
import '../material_select/material_select_item.dart' as import53;
import '../material_select/activation_handler.dart' as import54;
import '../model/selection/selection_container.dart' as import55;
import '../model/ui/has_renderer.dart' as import56;
import 'range.dart' as import57;

final List<dynamic> styles$MaterialDatepickerComponent = [import0.styles];

class ViewMaterialDatepickerComponent0 extends AppView<import2.MaterialDatepickerComponent> {
  import3.PopupSourceDirective _PopupSourceDirective_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import6.ViewDropdownButtonComponent0 _compView_2;
  import7.DropdownButtonComponent _DropdownButtonComponent_2_5;
  import8.ViewMaterialPopupComponent0 _compView_3;
  ViewContainer _appEl_3;
  import9.MaterialPopupComponent _MaterialPopupComponent_3_8;
  dynamic __PopupRef_3_10;
  dynamic __PopupHierarchy_3_12;
  import10.ViewFocusTrapComponent0 _compView_4;
  import11.FocusTrapComponent _FocusTrapComponent_4_5;
  ViewContainer _appEl_5;
  bool _query_MaterialInputComponent_1_1_isDirty = true;
  bool _query_AutoFocusDirective_4_0_isDirty = true;
  import12.DeferredContentDirective _DeferredContentDirective_5_9;
  String _expr_1;
  bool _expr_2;
  String _expr_3;
  var _expr_6;
  var _expr_7;
  bool _expr_8;
  bool _expr_10;
  import13.Element _el_3;
  static RenderComponentType _renderType;
  ViewMaterialDatepickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import13.document.createElement('material-datepicker');
    _renderType ??= import17.appViewUtils.createRenderType((import18.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_datepicker.dart' : null), ViewEncapsulation.Emulated, styles$MaterialDatepickerComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupRef_3_10 {
    if ((__PopupRef_3_10 == null)) {
      (__PopupRef_3_10 = import9.getResolvedPopupRef(_MaterialPopupComponent_3_8));
    }
    return __PopupRef_3_10;
  }

  dynamic get _PopupHierarchy_3_12 {
    if ((__PopupHierarchy_3_12 == null)) {
      (__PopupHierarchy_3_12 = import9.getHierarchy(_MaterialPopupComponent_3_8));
    }
    return __PopupHierarchy_3_12;
  }

  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    final _rootEl = rootEl;
    final import13.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import13.document;
    final _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'main-content';
    createAttr(_el_0, 'popupSource', '');
    addShimC(_el_0);
    _PopupSourceDirective_0_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import3.PopupSourceDirective, () {
            return import3.PopupSourceDirective(parentView.injectorGet(import21.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import22.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import23.Focusable, viewData.parentIndex, null), null);
          })
        : import3.PopupSourceDirective(parentView.injectorGet(import21.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import22.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import23.Focusable, viewData.parentIndex, null), null));
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialDatepickerComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    _compView_2 = import6.ViewDropdownButtonComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    _el_2.className = 'menu-lookalike primary-range';
    addShimC(_el_2);
    _DropdownButtonComponent_2_5 = import7.DropdownButtonComponent();
    _compView_2.create(_DropdownButtonComponent_2_5, [const []]);
    _compView_3 = import8.ViewMaterialPopupComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    createAttr(_el_3, 'enforceSpaceConstraints', '');
    addShimC(_el_3);
    _appEl_3 = ViewContainer(3, null, this, _el_3);
    _MaterialPopupComponent_3_8 = (import18.isDevMode
        ? import20.debugInjectorWrap(import9.MaterialPopupComponent, () {
            return import9.MaterialPopupComponent(parentView.injectorGet(import25.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import9.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import26.NgZone, viewData.parentIndex), parentView.injectorGet(import27.OverlayService, viewData.parentIndex), parentView.injectorGet(import28.DomService, viewData.parentIndex), parentView.injectorGet(import29.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import30.OpaqueToken<List<import32.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import33.PopupSizeProvider, viewData.parentIndex, null), _compView_3.ref, _appEl_3, ElementRef(_el_3));
          })
        : import9.MaterialPopupComponent(parentView.injectorGet(import25.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import9.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import26.NgZone, viewData.parentIndex), parentView.injectorGet(import27.OverlayService, viewData.parentIndex), parentView.injectorGet(import28.DomService, viewData.parentIndex), parentView.injectorGet(import29.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import30.OpaqueToken<List<import32.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import33.PopupSizeProvider, viewData.parentIndex, null), _compView_3.ref, _appEl_3, ElementRef(_el_3)));
    _compView_4 = import10.ViewFocusTrapComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    addShimC(_el_4);
    _FocusTrapComponent_4_5 = import11.FocusTrapComponent();
    final _anchor_5 = createViewContainerAnchor();
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_MaterialDatepickerComponent2);
    _DeferredContentDirective_5_9 = import12.DeferredContentDirective(_appEl_5, _TemplateRef_5_8, _MaterialPopupComponent_3_8);
    _compView_4.create(_FocusTrapComponent_4_5, [
      [_appEl_5]
    ]);
    _compView_3.create(_MaterialPopupComponent_3_8, [
      const [],
      [_el_4],
      const []
    ]);
    final subscription_0 = _DropdownButtonComponent_2_5.trigger.listen(eventHandler0(ctx.onTrigger));
    final subscription_1 = _MaterialPopupComponent_3_8.onVisible.listen(eventHandler1(_handle_visibleChange_3_0));
    ctx.dropdownButton = _DropdownButtonComponent_2_5;
    init(const [], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import35.HasDisabled) || identical(token, import23.Focusable)) && (2 == nodeIndex))) {
      return _DropdownButtonComponent_2_5;
    }
    if ((((identical(token, import9.MaterialPopupComponent) || identical(token, import36.DeferredContentAware)) || identical(token, import37.DropdownHandle)) && ((3 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialPopupComponent_3_8;
    }
    if ((identical(token, import38.PopupRef) && ((3 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupRef_3_10;
    }
    if ((identical(token, import25.PopupHierarchy) && ((3 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _PopupHierarchy_3_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import3.PopupSourceDirective local_container = _PopupSourceDirective_0_5;
    _NgIf_1_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_1 = _ctx.formattedDate;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      _DropdownButtonComponent_2_5.buttonText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import17.checkBinding(_expr_2, currVal_2)) {
      _DropdownButtonComponent_2_5.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.error;
    if (import17.checkBinding(_expr_3, currVal_3)) {
      _DropdownButtonComponent_2_5.error = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if ((!import17.AppViewUtils.throwOnChanges && firstCheck)) {
      _DropdownButtonComponent_2_5.ngOnInit();
    }
    if (firstCheck) {
      (_MaterialPopupComponent_3_8.enforceSpaceConstraints = true);
    }
    final currVal_6 = _ctx.preferredPositions;
    if (import17.checkBinding(_expr_6, currVal_6)) {
      _MaterialPopupComponent_3_8.preferredPositions = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = local_container;
    if (import17.checkBinding(_expr_7, currVal_7)) {
      _MaterialPopupComponent_3_8.source = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.popupVisible;
    if (import17.checkBinding(_expr_8, currVal_8)) {
      _MaterialPopupComponent_3_8.visible = currVal_8;
      _expr_8 = currVal_8;
    }
    if (firstCheck) {
      (_DeferredContentDirective_5_9.preserveDimensions = true);
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    if (!import17.AppViewUtils.throwOnChanges) {
      if (_query_AutoFocusDirective_4_0_isDirty) {
        _FocusTrapComponent_4_5.autoFocus = import17.firstOrNull(_appEl_5.mapNestedViews((_ViewMaterialDatepickerComponent2 nestedView) {
          return [nestedView._AutoFocusDirective_4_8];
        }));
        _query_AutoFocusDirective_4_0_isDirty = false;
      }
      if (_query_MaterialInputComponent_1_1_isDirty) {
        ctx.textInput = import17.firstOrNull(_appEl_5.mapNestedViews((_ViewMaterialDatepickerComponent2 nestedView) {
          return [nestedView._MaterialInputComponent_4_6];
        }));
        _query_MaterialInputComponent_1_1_isDirty = false;
      }
    }
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        _compView_3.updateChildClass(_el_3, _ctx.popupClassName);
      }
    }
    _compView_3.detectHostChanges(firstCheck);
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    if (!import17.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _PopupSourceDirective_0_5.ngAfterViewInit();
        _MaterialPopupComponent_3_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _compView_2.destroy();
    _compView_3.destroy();
    _compView_4.destroy();
    _PopupSourceDirective_0_5.ngOnDestroy();
    _DeferredContentDirective_5_9.ngOnDestroy();
    _FocusTrapComponent_4_5.ngOnDestroy();
    _MaterialPopupComponent_3_8.ngOnDestroy();
  }

  void _handle_visibleChange_3_0($event) {
    ctx.popupVisible = $event;
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_10 = ctx.compact;
    if (import17.checkBinding(_expr_10, currVal_10)) {
      updateElemClass(rootEl, 'compact', currVal_10);
      _expr_10 = currVal_10;
    }
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialDatepickerComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialDatepickerComponent> _MaterialDatepickerComponentNgFactory = const ComponentFactory('material-datepicker', viewFactory_MaterialDatepickerComponentHost0);
ComponentFactory<import2.MaterialDatepickerComponent> get MaterialDatepickerComponentNgFactory {
  return _MaterialDatepickerComponentNgFactory;
}

class _ViewMaterialDatepickerComponent1 extends AppView<import2.MaterialDatepickerComponent> {
  var _expr_0;
  import13.Text _text_1;
  _ViewMaterialDatepickerComponent1(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    var doc = import13.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'primary-label';
    addShimC(_el_0);
    _text_1 = import13.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.labelMsg ?? '');
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent1(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent2 extends AppView<import2.MaterialDatepickerComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import39.ViewMaterialInputComponent0 _compView_4;
  import40.DeferredValidator _DeferredValidator_4_5;
  import41.MaterialInputComponent _MaterialInputComponent_4_6;
  import41.MaterialInputComponent _Focusable_4_7;
  import42.AutoFocusDirective _AutoFocusDirective_4_8;
  import43.DateInputDirective _DateInputDirective_4_9;
  import41.MaterialInputComponent _BaseMaterialInput_4_10;
  import44.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_4_11;
  List<dynamic> __NgValidators_4_12;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  import45.ViewMaterialCalendarPickerComponent0 _compView_6;
  import46.MaterialCalendarPickerComponent _MaterialCalendarPickerComponent_6_5;
  import47.NgClass _NgClass_6_6;
  bool _expr_0;
  String _expr_2;
  bool _expr_3;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  bool _expr_13;
  var _expr_15;
  import13.DivElement _el_0;
  _ViewMaterialDatepickerComponent2(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  List<dynamic> get _NgValidators_4_12 {
    if ((__NgValidators_4_12 == null)) {
      (__NgValidators_4_12 = [_DeferredValidator_4_5]);
    }
    return __NgValidators_4_12;
  }

  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    var doc = import13.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'popup-content';
    addShimC(_el_0);
    final _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'inner-label-wrapper';
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialDatepickerComponent3);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _el_3 = createDivAndAppend(doc, _el_0);
    _el_3.className = 'date-input';
    addShimC(_el_3);
    _compView_4 = import39.ViewMaterialInputComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    createAttr(_el_4, 'autoFocus', '');
    createAttr(_el_4, 'dateParsing', '');
    createAttr(_el_4, 'type', 'text');
    addShimC(_el_4);
    _DeferredValidator_4_5 = import40.DeferredValidator();
    _MaterialInputComponent_4_6 = import41.MaterialInputComponent('text', null, null, null, _compView_4.ref, _DeferredValidator_4_5);
    _Focusable_4_7 = _MaterialInputComponent_4_6;
    _AutoFocusDirective_4_8 = (import18.isDevMode
        ? import20.debugInjectorWrap(import42.AutoFocusDirective, () {
            return import42.AutoFocusDirective(_el_4, parentView.parentView.injectorGet(import28.DomService, parentView.viewData.parentIndex), _Focusable_4_7, parentView.parentView.injectorGet(import48.ModalComponent, parentView.viewData.parentIndex, null), import18.unsafeCast<ViewMaterialDatepickerComponent0>(parentView)._PopupRef_3_10);
          })
        : import42.AutoFocusDirective(_el_4, parentView.parentView.injectorGet(import28.DomService, parentView.viewData.parentIndex), _Focusable_4_7, parentView.parentView.injectorGet(import48.ModalComponent, parentView.viewData.parentIndex, null), import18.unsafeCast<ViewMaterialDatepickerComponent0>(parentView)._PopupRef_3_10));
    _DateInputDirective_4_9 = (import18.isDevMode
        ? import20.debugInjectorWrap(import43.DateInputDirective, () {
            return import43.DateInputDirective(parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import49.Clock, parentView.viewData.parentIndex), _MaterialInputComponent_4_6);
          })
        : import43.DateInputDirective(parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import49.Clock, parentView.viewData.parentIndex), _MaterialInputComponent_4_6));
    _BaseMaterialInput_4_10 = _MaterialInputComponent_4_6;
    _MaterialInputDefaultValueAccessor_4_11 = import44.MaterialInputDefaultValueAccessor(_BaseMaterialInput_4_10, null);
    _compView_4.create(_MaterialInputComponent_4_6, [const [], const []]);
    final _anchor_5 = createViewContainerAnchor();
    _el_0.append(_anchor_5);
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_MaterialDatepickerComponent4);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    _compView_6 = import45.ViewMaterialCalendarPickerComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    _el_0.append(_el_6);
    _el_6.className = 'calendar-picker';
    createAttr(_el_6, 'mode', 'single-date');
    addShimC(_el_6);
    _MaterialCalendarPickerComponent_6_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import46.MaterialCalendarPickerComponent, () {
            return import46.MaterialCalendarPickerComponent(parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import49.Clock, parentView.viewData.parentIndex), 'single-date');
          })
        : import46.MaterialCalendarPickerComponent(parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import49.Clock, parentView.viewData.parentIndex), 'single-date'));
    _NgClass_6_6 = import47.NgClass(_el_6);
    _compView_6.create(_MaterialCalendarPickerComponent_6_5, []);
    final subscription_0 = _DateInputDirective_4_9.dateChange.listen(eventHandler1(ctx.setDateFromInput));
    final subscription_1 = _MaterialCalendarPickerComponent_6_5.stateChange.listen(eventHandler1(_handle_stateChange_6_0));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import40.DeferredValidator) && (4 == nodeIndex))) {
      return _DeferredValidator_4_5;
    }
    if ((((identical(token, import41.MaterialInputComponent) || identical(token, import22.ReferenceDirective)) || identical(token, import35.HasDisabled)) && (4 == nodeIndex))) {
      return _MaterialInputComponent_4_6;
    }
    if ((identical(token, import23.Focusable) && (4 == nodeIndex))) {
      return _Focusable_4_7;
    }
    if ((identical(token, import50.BaseMaterialInput) && (4 == nodeIndex))) {
      return _BaseMaterialInput_4_10;
    }
    if ((identical(token, import44.MaterialInputDefaultValueAccessor) && (4 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_4_11;
    }
    if ((identical(token, const import30.MultiToken<dynamic>('NgValidators')) && (4 == nodeIndex))) {
      return _NgValidators_4_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_2_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_2 = _ctx.placeholderMsg;
    if (import17.checkBinding(_expr_2, currVal_2)) {
      _MaterialInputComponent_4_6.label = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.required;
    if (import17.checkBinding(_expr_3, currVal_3)) {
      _MaterialInputComponent_4_6.required = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_4_8.autoFocus = true);
    }
    if ((!import17.AppViewUtils.throwOnChanges && firstCheck)) {
      _AutoFocusDirective_4_8.ngOnInit();
    }
    final currVal_5 = _ctx.outputFormat;
    if (import17.checkBinding(_expr_5, currVal_5)) {
      _DateInputDirective_4_9.dateFormat = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.maxDate;
    if (import17.checkBinding(_expr_6, currVal_6)) {
      _DateInputDirective_4_9.maxDate = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.minDate;
    if (import17.checkBinding(_expr_7, currVal_7)) {
      _DateInputDirective_4_9.minDate = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.date;
    if (import17.checkBinding(_expr_8, currVal_8)) {
      _DateInputDirective_4_9.date = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgIf_5_9.ngIf = _ctx.presetDates.isNotEmpty;
    changed = false;
    final currVal_10 = _ctx.calendar;
    if (import17.checkBinding(_expr_10, currVal_10)) {
      _MaterialCalendarPickerComponent_6_5.state = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.minDate;
    if (import17.checkBinding(_expr_11, currVal_11)) {
      _MaterialCalendarPickerComponent_6_5.minDate = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.maxDate;
    if (import17.checkBinding(_expr_12, currVal_12)) {
      _MaterialCalendarPickerComponent_6_5.maxDate = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.compact;
    if (import17.checkBinding(_expr_13, currVal_13)) {
      _MaterialCalendarPickerComponent_6_5.compact = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    if (changed) {
      _MaterialCalendarPickerComponent_6_5.ngAfterChanges();
    }
    if ((!import17.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialCalendarPickerComponent_6_5.ngOnInit();
    }
    if (firstCheck) {
      (_NgClass_6_6.initialClasses = 'calendar-picker');
    }
    final currVal_15 = _ctx.calendarWeekRowsStyle;
    if (import17.checkBinding(_expr_15, currVal_15)) {
      _NgClass_6_6.rawClass = currVal_15;
      _expr_15 = currVal_15;
    }
    if (!import17.AppViewUtils.throwOnChanges) {
      _NgClass_6_6.ngDoCheck();
    }
    _appEl_2.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    final currVal_0 = _ctx.compact;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'compact', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_6.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    if (!import17.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_4_6.ngAfterViewInit();
        _MaterialCalendarPickerComponent_6_5.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import18.unsafeCast<ViewMaterialDatepickerComponent0>(parentView)._query_MaterialInputComponent_1_1_isDirty = true;
    import18.unsafeCast<ViewMaterialDatepickerComponent0>(parentView)._query_AutoFocusDirective_4_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _compView_4.destroy();
    _compView_6.destroy();
    _MaterialInputComponent_4_6.ngOnDestroy();
    _AutoFocusDirective_4_8.ngOnDestroy();
    _DateInputDirective_4_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_4_11.ngOnDestroy();
    _MaterialCalendarPickerComponent_6_5.ngOnDestroy();
    _NgClass_6_6.ngOnDestroy();
  }

  void _handle_stateChange_6_0($event) {
    ctx.calendar = $event;
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent2(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent3 extends AppView<import2.MaterialDatepickerComponent> {
  var _expr_0;
  import13.Text _text_1;
  _ViewMaterialDatepickerComponent3(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    var doc = import13.document;
    final _el_0 = doc.createElement('span');
    _el_0.className = 'inner-label';
    addShimE(_el_0);
    _text_1 = import13.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.labelMsg ?? '');
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent3(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent4 extends AppView<import2.MaterialDatepickerComponent> {
  ViewContainer _appEl_1;
  import51.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMaterialDatepickerComponent4(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    var doc = import13.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'preset-dates-wrapper';
    createAttr(_el_0, 'role', 'listbox');
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialDatepickerComponent5);
    _NgFor_1_9 = import51.NgFor(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.presetDates;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import17.AppViewUtils.throwOnChanges) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent4(parentView, parentIndex);
}

class _ViewMaterialDatepickerComponent5 extends AppView<import2.MaterialDatepickerComponent> {
  import52.ViewMaterialSelectItemComponent0 _compView_0;
  import53.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  var _expr_2;
  import13.Text _text_1;
  _ViewMaterialDatepickerComponent5(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDatepickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    _compView_0 = import52.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'closeOnActivate', 'false');
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import53.MaterialSelectItemComponent, () {
            return import53.MaterialSelectItemComponent(_el_0, import18.unsafeCast<ViewMaterialDatepickerComponent0>(parentView.parentView.parentView)._MaterialPopupComponent_3_8, parentView.parentView.parentView.parentView.injectorGet(import54.ActivationHandler, parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref, null);
          })
        : import53.MaterialSelectItemComponent(_el_0, import18.unsafeCast<ViewMaterialDatepickerComponent0>(parentView.parentView.parentView)._MaterialPopupComponent_3_8, parentView.parentView.parentView.parentView.injectorGet(import54.ActivationHandler, parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref, null));
    _text_1 = import13.Text('');
    _compView_0.create(_MaterialSelectItemComponent_0_5, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_0_5.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import55.SelectionItem) || identical(token, import35.HasDisabled)) || identical(token, import56.HasRenderer)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_presetDate = import18.unsafeCast<import57.SingleDayRange>(locals['\$implicit']);
    if (firstCheck) {
      (_MaterialSelectItemComponent_0_5.closeOnActivate = 'false');
    }
    final currVal_0 = _ctx.isPresetDateSelected(local_presetDate);
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import17.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialSelectItemComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = import17.interpolate0(local_presetDate.title);
    if (import17.checkBinding(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_presetDate = import18.unsafeCast<import57.SingleDayRange>(locals['\$implicit']);
    ctx.onPresetClicked(local_presetDate);
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponent5(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDatepickerComponentHost = const [];

class _ViewMaterialDatepickerComponentHost0 extends AppView<import2.MaterialDatepickerComponent> {
  ViewMaterialDatepickerComponent0 _compView_0;
  import2.MaterialDatepickerComponent _MaterialDatepickerComponent_0_5;
  _ViewMaterialDatepickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialDatepickerComponent> build() {
    _compView_0 = ViewMaterialDatepickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDatepickerComponent_0_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import2.MaterialDatepickerComponent, () {
            return import2.MaterialDatepickerComponent(rootEl, null, this.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null));
          })
        : import2.MaterialDatepickerComponent(rootEl, null, this.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null)));
    _compView_0.create(_MaterialDatepickerComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialDatepickerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import35.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialDatepickerComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import17.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialDatepickerComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.MaterialDatepickerComponent> viewFactory_MaterialDatepickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDatepickerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDatepickerComponent, MaterialDatepickerComponentNgFactory);
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
}
