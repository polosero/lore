// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_date_range_picker.dart';
export 'material_date_range_picker.dart';
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
import 'package:angular_components/material_button/material_button.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/comparison.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/comparison_option.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/config.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/date_range_editor.template.dart' as _ref13;
import 'package:angular_components/material_datepicker/date_range_editor_host.template.dart' as _ref14;
import 'package:angular_components/material_datepicker/model.template.dart' as _ref15;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref16;
import 'package:angular_components/material_datepicker/next_prev_buttons.template.dart' as _ref17;
import 'package:angular_components/material_datepicker/preset.template.dart' as _ref18;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref19;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref20;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref21;
import 'package:angular_components/model/date/date.template.dart' as _ref22;
import 'package:angular_components/model/date/date_formatter.template.dart' as _ref23;
import 'package:angular_components/model/observable/observable.template.dart' as _ref24;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref25;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref26;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref27;
import 'package:angular_components/material_datepicker/material_date_range_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_date_range_picker.dart' as import2;
import '../button_decorator/button_decorator.template.dart' as import3;
import '../focus/keyboard_only_focus_indicator.dart' as import4;
import '../src/laminate/popup/popup_source_directive.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../material_select/dropdown_button.template.dart' as import8;
import '../material_select/dropdown_button.dart' as import9;
import '../material_popup/material_popup.template.dart' as import10;
import '../material_popup/material_popup.dart' as import11;
import 'dart:html' as import12;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import14;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/src/runtime.dart' as import17;
import 'package:angular/angular.dart';
import '../button_decorator/button_decorator.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import '../utils/browser/dom_service/dom_service.dart' as import21;
import '../src/laminate/popup/dom_popup_source.dart' as import22;
import '../utils/angular/reference/reference.dart' as import23;
import '../focus/focus_interface.dart' as import24;
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import26;
import 'package:angular/src/core/zone/ng_zone.dart' as import27;
import '../src/laminate/overlay/overlay_service.dart' as import28;
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
import 'next_prev_buttons.template.dart' as import39;
import 'next_prev_buttons.dart' as import40;
import '../focus/focus_trap.template.dart' as import41;
import '../focus/focus_trap.dart' as import42;
import 'date_range_editor.template.dart' as import43;
import 'date_range_editor.dart' as import44;
import '../material_button/material_button.template.dart' as import45;
import '../material_button/material_button.dart' as import46;
import '../src/utils/angular/managed_zone/managed_zone.dart' as import47;
import 'date_range_editor_host.dart' as import48;
import 'package:quiver/time.dart' as import49;
import '../theme/dark_theme.dart' as import50;
import 'config.dart' as import51;

final List<dynamic> styles$MaterialDateRangePickerComponent = [import0.styles];

class ViewMaterialDateRangePickerComponent0 extends AppView<import2.MaterialDateRangePickerComponent> {
  import3.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import4.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  import5.PopupSourceDirective _PopupSourceDirective_0_7;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import8.ViewDropdownButtonComponent0 _compView_4;
  import9.DropdownButtonComponent _DropdownButtonComponent_4_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  import10.ViewMaterialPopupComponent0 _compView_7;
  ViewContainer _appEl_7;
  import11.MaterialPopupComponent _MaterialPopupComponent_7_8;
  dynamic __PopupHierarchy_7_11;
  dynamic __PopupRef_7_12;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  String _expr_1;
  bool _expr_2;
  String _expr_3;
  var _expr_9;
  var _expr_10;
  bool _expr_12;
  bool _expr_13;
  import12.DivElement _el_0;
  import12.Element _el_7;
  static RenderComponentType _renderType;
  ViewMaterialDateRangePickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import12.document.createElement('material-date-range-picker');
    _renderType ??= import16.appViewUtils.createRenderType((import17.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_date_range_picker.dart' : null), ViewEncapsulation.Emulated, styles$MaterialDateRangePickerComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupHierarchy_7_11 {
    if ((__PopupHierarchy_7_11 == null)) {
      (__PopupHierarchy_7_11 = import11.getHierarchy(_MaterialPopupComponent_7_8));
    }
    return __PopupHierarchy_7_11;
  }

  dynamic get _PopupRef_7_12 {
    if ((__PopupRef_7_12 == null)) {
      (__PopupRef_7_12 = import11.getResolvedPopupRef(_MaterialPopupComponent_7_8));
    }
    return __PopupRef_7_12;
  }

  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    final _rootEl = rootEl;
    final import12.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import12.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'main-content';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    createAttr(_el_0, 'popupSource', '');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import3.ButtonDirectiveNgCd(import19.ButtonDirective(_el_0, null));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = (import17.isDevMode
        ? import20.debugInjectorWrap(import4.KeyboardOnlyFocusIndicatorDirective, () {
            return import4.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import21.DomService, viewData.parentIndex));
          })
        : import4.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import21.DomService, viewData.parentIndex)));
    _PopupSourceDirective_0_7 = (import17.isDevMode
        ? import20.debugInjectorWrap(import5.PopupSourceDirective, () {
            return import5.PopupSourceDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import23.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import24.Focusable, viewData.parentIndex, null), null);
          })
        : import5.PopupSourceDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import23.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import24.Focusable, viewData.parentIndex, null), null));
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialDateRangePickerComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'dropdown-and-comparison';
    addShimC(_el_2);
    final _el_3 = createSpanAndAppend(doc, _el_2);
    _el_3.className = 'main-line';
    addShimE(_el_3);
    _compView_4 = import8.ViewDropdownButtonComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    _el_4.className = 'menu-lookalike primary-range';
    addShimC(_el_4);
    _DropdownButtonComponent_4_5 = import9.DropdownButtonComponent();
    _compView_4.create(_DropdownButtonComponent_4_5, [const []]);
    final _anchor_5 = createViewContainerAnchor();
    _el_3.append(_anchor_5);
    _appEl_5 = ViewContainer(5, 3, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_MaterialDateRangePickerComponent2);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _anchor_6 = createViewContainerAnchor();
    _el_2.append(_anchor_6);
    _appEl_6 = ViewContainer(6, 2, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialDateRangePickerComponent3);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    _compView_7 = import10.ViewMaterialPopupComponent0(this, 7);
    _el_7 = _compView_7.rootEl;
    parentRenderNode.append(_el_7);
    createAttr(_el_7, 'enforceSpaceConstraints', '');
    addShimC(_el_7);
    _appEl_7 = ViewContainer(7, null, this, _el_7);
    _MaterialPopupComponent_7_8 = (import17.isDevMode
        ? import20.debugInjectorWrap(import11.MaterialPopupComponent, () {
            return import11.MaterialPopupComponent(parentView.injectorGet(import26.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import11.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import27.NgZone, viewData.parentIndex), parentView.injectorGet(import28.OverlayService, viewData.parentIndex), parentView.injectorGet(import21.DomService, viewData.parentIndex), parentView.injectorGet(import29.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import30.OpaqueToken<List<import32.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import33.PopupSizeProvider, viewData.parentIndex, null), _compView_7.ref, _appEl_7, ElementRef(_el_7));
          })
        : import11.MaterialPopupComponent(parentView.injectorGet(import26.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import11.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import27.NgZone, viewData.parentIndex), parentView.injectorGet(import28.OverlayService, viewData.parentIndex), parentView.injectorGet(import21.DomService, viewData.parentIndex), parentView.injectorGet(import29.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import30.OpaqueToken<List<import32.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import30.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import33.PopupSizeProvider, viewData.parentIndex, null), _compView_7.ref, _appEl_7, ElementRef(_el_7)));
    final _anchor_8 = createViewContainerAnchor();
    _appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_MaterialDateRangePickerComponent4);
    _NgIf_8_9 = NgIf(_appEl_8, _TemplateRef_8_8);
    _compView_7.create(_MaterialPopupComponent_7_8, [
      const [],
      [_appEl_8],
      const []
    ]);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_1));
    _el_0.addEventListener('mouseenter', eventHandler0(ctx.initEditor));
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_3));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(ctx.open));
    final subscription_1 = _MaterialPopupComponent_7_8.onOpen.listen(eventHandler0(ctx.open));
    final subscription_2 = _MaterialPopupComponent_7_8.onClose.listen(eventHandler0(ctx.close));
    ctx.focusOnClose = _KeyboardOnlyFocusIndicatorDirective_0_6;
    ctx.popup = _MaterialPopupComponent_7_8;
    init(const [], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import35.HasDisabled) || identical(token, import24.Focusable)) && (4 == nodeIndex))) {
      return _DropdownButtonComponent_4_5;
    }
    if ((identical(token, import19.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _ButtonDirective_0_5.instance;
    }
    if ((((identical(token, import11.MaterialPopupComponent) || identical(token, import36.DeferredContentAware)) || identical(token, import37.DropdownHandle)) && ((7 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _MaterialPopupComponent_7_8;
    }
    if ((identical(token, import26.PopupHierarchy) && ((7 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _PopupHierarchy_7_11;
    }
    if ((identical(token, import38.PopupRef) && ((7 <= nodeIndex) && (nodeIndex <= 8)))) {
      return _PopupRef_7_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import5.PopupSourceDirective local_button = _PopupSourceDirective_0_7;
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    _NgIf_1_9.ngIf = (_ctx.hasTitle && _ctx.presets.isNotEmpty);
    changed = false;
    if (firstCheck) {
      _DropdownButtonComponent_4_5.tabbable = false;
      changed = true;
    }
    final currVal_1 = _ctx.formattedRange;
    if (import16.checkBinding(_expr_1, currVal_1)) {
      _DropdownButtonComponent_4_5.buttonText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import16.checkBinding(_expr_2, currVal_2)) {
      _DropdownButtonComponent_4_5.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.error;
    if (import16.checkBinding(_expr_3, currVal_3)) {
      _DropdownButtonComponent_4_5.error = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _DropdownButtonComponent_4_5.ngOnInit();
    }
    _NgIf_5_9.ngIf = _ctx.showNextPrevButtons;
    _NgIf_6_9.ngIf = _ctx.hasComparison;
    if (firstCheck) {
      (_MaterialPopupComponent_7_8.enforceSpaceConstraints = true);
    }
    final currVal_9 = _ctx.overlapAlignments;
    if (import16.checkBinding(_expr_9, currVal_9)) {
      _MaterialPopupComponent_7_8.preferredPositions = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = local_button;
    if (import16.checkBinding(_expr_10, currVal_10)) {
      _MaterialPopupComponent_7_8.source = currVal_10;
      _expr_10 = currVal_10;
    }
    _NgIf_8_9.ngIf = _ctx.isEditorCreated;
    _appEl_1.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_8.detectChangesInNestedViews();
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        _compView_7.updateChildClass(_el_7, _ctx.popupClassName);
      }
    }
    _compView_7.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_7.detectChanges();
    if (!import16.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _PopupSourceDirective_0_7.ngAfterViewInit();
        _MaterialPopupComponent_7_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _appEl_8.destroyNestedViews();
    _compView_4.destroy();
    _compView_7.destroy();
    _PopupSourceDirective_0_7.ngOnDestroy();
    _MaterialPopupComponent_7_8.ngOnDestroy();
  }

  void _handle_focus_0_1($event) {
    ctx.initEditor();
    _KeyboardOnlyFocusIndicatorDirective_0_6.onFocus($event);
  }

  void _handle_click_0_3($event) {
    _ButtonDirective_0_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_12 = ctx.compact;
    if (import16.checkBinding(_expr_12, currVal_12)) {
      updateElemClass(rootEl, 'compact', currVal_12);
      _expr_12 = currVal_12;
    }
    final currVal_13 = ctx.disabled;
    if (import16.checkBinding(_expr_13, currVal_13)) {
      updateElemClass(rootEl, 'disabled', currVal_13);
      _expr_13 = currVal_13;
    }
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialDateRangePickerComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialDateRangePickerComponent> _MaterialDateRangePickerComponentNgFactory = const ComponentFactory('material-date-range-picker', viewFactory_MaterialDateRangePickerComponentHost0);
ComponentFactory<import2.MaterialDateRangePickerComponent> get MaterialDateRangePickerComponentNgFactory {
  return _MaterialDateRangePickerComponentNgFactory;
}

class _ViewMaterialDateRangePickerComponent1 extends AppView<import2.MaterialDateRangePickerComponent> {
  var _expr_0;
  import12.Text _text_1;
  _ViewMaterialDateRangePickerComponent1(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDateRangePickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    var doc = import12.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'range-title';
    addShimC(_el_0);
    _text_1 = import12.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.rangeTitle ?? '');
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponent1(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent2 extends AppView<import2.MaterialDateRangePickerComponent> {
  import39.ViewNextPrevComponent0 _compView_0;
  import40.NextPrevComponent _NextPrevComponent_0_5;
  bool _expr_0;
  _ViewMaterialDateRangePickerComponent2(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDateRangePickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    _compView_0 = import39.ViewNextPrevComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.className = 'next-prev-buttons';
    addShimC(_el_0);
    _NextPrevComponent_0_5 = import40.NextPrevComponent(_compView_0.ref);
    _compView_0.create(_NextPrevComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.model, null)) {
        _NextPrevComponent_0_5.model = _ctx.model;
        changed = true;
      }
    }
    final currVal_0 = _ctx.disabled;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _NextPrevComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
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

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponent2(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent3 extends AppView<import2.MaterialDateRangePickerComponent> {
  var _expr_0;
  import12.Text _text_1;
  _ViewMaterialDateRangePickerComponent3(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDateRangePickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    var doc = import12.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'comparison-title';
    addShimC(_el_0);
    _text_1 = import12.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.formattedComparison ?? '');
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponent3(parentView, parentIndex);
}

class _ViewMaterialDateRangePickerComponent4 extends AppView<import2.MaterialDateRangePickerComponent> {
  import41.ViewFocusTrapComponent0 _compView_0;
  import42.FocusTrapComponent _FocusTrapComponent_0_5;
  import43.ViewDateRangeEditorComponent0 _compView_2;
  import44.DateRangeEditorComponent _DateRangeEditorComponent_2_5;
  import45.ViewMaterialButtonComponent0 _compView_6;
  dynamic _AcxDarkTheme_6_5;
  import46.MaterialButtonComponent _MaterialButtonComponent_6_6;
  import45.ViewMaterialButtonComponent0 _compView_8;
  dynamic _AcxDarkTheme_8_5;
  import46.MaterialButtonComponent _MaterialButtonComponent_8_6;
  bool _expr_0;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  bool _expr_7;
  bool _expr_8;
  bool _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  bool _expr_13;
  bool _expr_14;
  var _expr_15;
  import12.Element _el_0;
  import12.DivElement _el_3;
  import12.Text _text_9;
  _ViewMaterialDateRangePickerComponent4(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDateRangePickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    _compView_0 = import41.ViewFocusTrapComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'popup-contents';
    addShimC(_el_0);
    _FocusTrapComponent_0_5 = import42.FocusTrapComponent();
    var doc = import12.document;
    final _el_1 = doc.createElement('div');
    _el_1.className = 'wrapper';
    addShimC(_el_1);
    _compView_2 = import43.ViewDateRangeEditorComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_1.append(_el_2);
    addShimC(_el_2);
    _DateRangeEditorComponent_2_5 = (import17.isDevMode
        ? import20.debugInjectorWrap(import44.DateRangeEditorComponent, () {
            return import44.DateRangeEditorComponent(_el_2, parentView.parentView.injectorGet(import21.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import47.ManagedZone, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import48.DateRangeEditorHost, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import49.Clock, parentView.viewData.parentIndex));
          })
        : import44.DateRangeEditorComponent(_el_2, parentView.parentView.injectorGet(import21.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import47.ManagedZone, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import48.DateRangeEditorHost, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import49.Clock, parentView.viewData.parentIndex)));
    _compView_2.create(_DateRangeEditorComponent_2_5, []);
    project(_el_1, 0);
    _el_3 = createDivAndAppend(doc, _el_1);
    _el_3.className = 'apply-bar';
    addShimC(_el_3);
    final _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'separator';
    addShimC(_el_4);
    final _text_5 = import12.Text(' ');
    _el_4.append(_text_5);
    _compView_6 = import45.ViewMaterialButtonComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    _el_3.append(_el_6);
    _el_6.className = 'cancel';
    addShimC(_el_6);
    _AcxDarkTheme_6_5 = (import17.isDevMode
        ? import20.debugInjectorWrap(import50.AcxDarkTheme, () {
            return import50.AcxDarkTheme(parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import50.AcxDarkTheme(parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_6_6 = import46.MaterialButtonComponent(_el_6, _AcxDarkTheme_6_5, _compView_6.ref, null);
    final _text_7 = import12.Text((import2.MaterialDateRangePickerComponent.cancelButtonMsg ?? ''));
    _compView_6.create(_MaterialButtonComponent_6_6, [
      [_text_7]
    ]);
    _compView_8 = import45.ViewMaterialButtonComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    _el_3.append(_el_8);
    _el_8.className = 'apply';
    addShimC(_el_8);
    _AcxDarkTheme_8_5 = (import17.isDevMode
        ? import20.debugInjectorWrap(import50.AcxDarkTheme, () {
            return import50.AcxDarkTheme(parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import50.AcxDarkTheme(parentView.parentView.injectorGet(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_8_6 = import46.MaterialButtonComponent(_el_8, _AcxDarkTheme_8_5, _compView_8.ref, null);
    _text_9 = import12.Text('');
    _compView_8.create(_MaterialButtonComponent_8_6, [
      [_text_9]
    ]);
    _compView_0.create(_FocusTrapComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = _DateRangeEditorComponent_2_5.presetRangeSelected.listen(eventHandler1(ctx.onRangeClicked));
    final subscription_1 = _MaterialButtonComponent_6_6.trigger.listen(eventHandler1(_handle_trigger_6_0));
    final subscription_2 = _MaterialButtonComponent_8_6.trigger.listen(eventHandler1(_handle_trigger_8_0));
    init([_el_0], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import50.AcxDarkTheme) && ((6 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _AcxDarkTheme_6_5;
    }
    if ((((identical(token, import46.MaterialButtonComponent) || identical(token, import19.ButtonDirective)) || identical(token, import35.HasDisabled)) && ((6 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialButtonComponent_6_6;
    }
    if ((identical(token, import50.AcxDarkTheme) && ((8 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _AcxDarkTheme_8_5;
    }
    if ((((identical(token, import46.MaterialButtonComponent) || identical(token, import19.ButtonDirective)) || identical(token, import35.HasDisabled)) && ((8 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _MaterialButtonComponent_8_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.model, null)) {
        (_DateRangeEditorComponent_2_5.model = _ctx.model);
      }
    }
    final currVal_2 = _ctx.movingStartMaintainsLength;
    if (import16.checkBinding(_expr_2, currVal_2)) {
      _DateRangeEditorComponent_2_5.movingStartMaintainsLength = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.supportsClearRange;
    if (import16.checkBinding(_expr_3, currVal_3)) {
      _DateRangeEditorComponent_2_5.supportsClearRange = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.supportsCustomRange;
    if (import16.checkBinding(_expr_4, currVal_4)) {
      _DateRangeEditorComponent_2_5.supportsCustomRange = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.relativeDaysToToday;
    if (import16.checkBinding(_expr_5, currVal_5)) {
      _DateRangeEditorComponent_2_5.relativeDaysToToday = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.allowHighlightUpdates;
    if (import16.checkBinding(_expr_6, currVal_6)) {
      _DateRangeEditorComponent_2_5.allowHighlightUpdates = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.supportsComparison;
    if (import16.checkBinding(_expr_7, currVal_7)) {
      _DateRangeEditorComponent_2_5.supportsComparison = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.compact;
    if (import16.checkBinding(_expr_8, currVal_8)) {
      _DateRangeEditorComponent_2_5.compact = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.supportsDaysInputs;
    if (import16.checkBinding(_expr_9, currVal_9)) {
      _DateRangeEditorComponent_2_5.supportsDaysInputs = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.presets;
    if (import16.checkBinding(_expr_10, currVal_10)) {
      _DateRangeEditorComponent_2_5.presets = currVal_10;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.minDate;
    if (import16.checkBinding(_expr_11, currVal_11)) {
      _DateRangeEditorComponent_2_5.minDate = currVal_11;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.maxDate;
    if (import16.checkBinding(_expr_12, currVal_12)) {
      _DateRangeEditorComponent_2_5.maxDate = currVal_12;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.isCalendarCreated;
    if (import16.checkBinding(_expr_13, currVal_13)) {
      _DateRangeEditorComponent_2_5.isCalendarCreated = currVal_13;
      _expr_13 = currVal_13;
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _DateRangeEditorComponent_2_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_6_6.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_8_6.ngOnInit();
    }
    final currVal_0 = _ctx.compact;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'compact', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_2.detectHostChanges(firstCheck);
    final currVal_14 = _ctx.applyBarVisible;
    if (import16.checkBinding(_expr_14, currVal_14)) {
      updateClass(_el_3, 'visible', currVal_14);
      _expr_14 = currVal_14;
    }
    _compView_6.detectHostChanges(firstCheck);
    _compView_8.detectHostChanges(firstCheck);
    final currVal_15 = (_ctx.applyButtonMsg ?? '');
    if (import16.checkBinding(_expr_15, currVal_15)) {
      _text_9.text = currVal_15;
      _expr_15 = currVal_15;
    }
    _compView_0.detectChanges();
    _compView_2.detectChanges();
    _compView_6.detectChanges();
    _compView_8.detectChanges();
    if (!import16.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _DateRangeEditorComponent_2_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_2.destroy();
    _compView_6.destroy();
    _compView_8.destroy();
    _FocusTrapComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_6_0($event) {
    ctx.cancel();
    $event.preventDefault();
  }

  void _handle_trigger_8_0($event) {
    ctx.apply($event);
    $event.preventDefault();
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponent4(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDateRangePickerComponentHost = const [];

class _ViewMaterialDateRangePickerComponentHost0 extends AppView<import2.MaterialDateRangePickerComponent> {
  ViewMaterialDateRangePickerComponent0 _compView_0;
  import2.MaterialDateRangePickerComponent _MaterialDateRangePickerComponent_0_5;
  _ViewMaterialDateRangePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialDateRangePickerComponent> build() {
    _compView_0 = ViewMaterialDateRangePickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDateRangePickerComponent_0_5 = (import17.isDevMode
        ? import20.debugInjectorWrap(import2.MaterialDateRangePickerComponent, () {
            return import2.MaterialDateRangePickerComponent(this.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), this.injectorGet(import49.Clock, viewData.parentIndex), this.injectorGet(import51.DatepickerConfig, viewData.parentIndex, null), null, this.injectorGet(import33.PopupSizeProvider, viewData.parentIndex, null), rootEl, this.injectorGet(import21.DomService, viewData.parentIndex), this.injectorGet(import27.NgZone, viewData.parentIndex));
          })
        : import2.MaterialDateRangePickerComponent(this.injectorGet(const import30.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), this.injectorGet(import49.Clock, viewData.parentIndex), this.injectorGet(import51.DatepickerConfig, viewData.parentIndex, null), null, this.injectorGet(import33.PopupSizeProvider, viewData.parentIndex, null), rootEl, this.injectorGet(import21.DomService, viewData.parentIndex), this.injectorGet(import27.NgZone, viewData.parentIndex)));
    _compView_0.create(_MaterialDateRangePickerComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialDateRangePickerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import48.DateRangeEditorHost) || identical(token, import35.HasDisabled)) || identical(token, import33.PopupSizeProvider)) && (0 == nodeIndex))) {
      return _MaterialDateRangePickerComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialDateRangePickerComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialDateRangePickerComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialDateRangePickerComponent> viewFactory_MaterialDateRangePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDateRangePickerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDateRangePickerComponent, MaterialDateRangePickerComponentNgFactory);
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
}
