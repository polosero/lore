// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_input_multiline.dart';
export 'material_input_multiline.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_material_input.template.dart' as _ref0;
import 'base_material_input.template.dart' as _ref1;
import 'deferred_validator.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref5;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref6;
import 'package:angular_components/utils/angular/reference/reference.template.dart' as _ref7;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref8;
import 'package:angular_forms/angular_forms.template.dart' as _ref9;
import 'package:angular_components/material_input/material_input.scss.css.shim.dart' as import0;
import 'package:angular_components/material_input/material_input_multiline.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_input_multiline.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import6;
import '../focus/focus.dart' as import7;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import8;
import 'package:angular_forms/src/directives/ng_model.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import '../focus/focus_interface.dart' as import19;
import 'package:angular/src/core/di/opaque_token.dart' as import20;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import21;
import 'package:angular_forms/src/directives/ng_control.dart' as import22;
import 'package:angular/src/common/directives/ng_switch.dart' as import23;
import 'deferred_validator.dart' as import24;
import 'package:angular/src/di/errors.dart' as import25;
import '../utils/browser/dom_service/dom_service.dart' as import26;
import '../interfaces/has_disabled.dart' as import27;
import '../utils/angular/reference/reference.dart' as import28;
import 'base_material_input.dart' as import29;

final List<dynamic> styles$MaterialMultilineInputComponent = [import0.styles, import1.styles];

class ViewMaterialMultilineInputComponent0 extends AppView<import3.MaterialMultilineInputComponent> {
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  import6.DefaultValueAccessor _DefaultValueAccessor_11_5;
  import7.FocusableDirective _FocusableDirective_11_6;
  List<import8.ControlValueAccessor<dynamic>> _NgValueAccessor_11_7;
  import9.NgModel _NgModel_11_8;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  var _expr_7;
  var _expr_8;
  bool _expr_10;
  bool _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  bool _expr_17;
  bool _expr_18;
  bool _expr_19;
  bool _expr_20;
  bool _expr_21;
  bool _expr_22;
  import10.DivElement _el_2;
  import10.Element _el_5;
  import10.Text _text_6;
  import10.DivElement _el_7;
  import10.TextAreaElement _el_11;
  import10.DivElement _el_13;
  import10.DivElement _el_14;
  import10.DivElement _el_15;
  static RenderComponentType _renderType;
  ViewMaterialMultilineInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import10.document.createElement('material-input');
    rootEl.className = import3.MaterialMultilineInputComponent.hostClass;
    rootEl.tabIndex = import3.MaterialMultilineInputComponent.hostTabIndex;
    _renderType ??= import14.appViewUtils.createRenderType((import15.isDevMode ? 'asset:angular_components/lib/material_input/material_input_multiline.dart' : null), ViewEncapsulation.Emulated, styles$MaterialMultilineInputComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final import3.MaterialMultilineInputComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import10.document;
    final _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'baseline';
    addShimC(_el_0);
    final _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'top-section';
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'input-container';
    addShimC(_el_2);
    final _el_3 = createDivAndAppend(doc, _el_2);
    createAttr(_el_3, 'aria-hidden', 'true');
    _el_3.className = 'label';
    addShimC(_el_3);
    final _text_4 = import10.Text(' ');
    _el_3.append(_text_4);
    _el_5 = createSpanAndAppend(doc, _el_3);
    _el_5.className = 'label-text';
    addShimE(_el_5);
    _text_6 = import10.Text('');
    _el_5.append(_text_6);
    _el_7 = createDivAndAppend(doc, _el_2);
    addShimC(_el_7);
    final _anchor_8 = createViewContainerAnchor();
    _el_7.append(_anchor_8);
    _appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_MaterialMultilineInputComponent1);
    _NgIf_8_9 = NgIf(_appEl_8, _TemplateRef_8_8);
    final _el_9 = createDivAndAppend(doc, _el_7);
    createAttr(_el_9, 'aria-hidden', 'true');
    _el_9.className = 'line-height-measure';
    addShimC(_el_9);
    final _el_10 = createAndAppend(doc, 'br', _el_9);
    addShimE(_el_10);
    _el_11 = createAndAppend(doc, 'textarea', _el_7);
    _el_11.className = 'textarea';
    createAttr(_el_11, 'focusableElement', '');
    addShimC(_el_11);
    _DefaultValueAccessor_11_5 = import6.DefaultValueAccessor(_el_11);
    _FocusableDirective_11_6 = import7.FocusableDirective(_el_11);
    _NgValueAccessor_11_7 = [_DefaultValueAccessor_11_5];
    _NgModel_11_8 = import9.NgModel(null, _NgValueAccessor_11_7);
    project(_el_1, 0);
    final _el_12 = createDivAndAppend(doc, _el_0);
    _el_12.className = 'underline';
    addShimC(_el_12);
    _el_13 = createDivAndAppend(doc, _el_12);
    _el_13.className = 'disabled-underline';
    addShimC(_el_13);
    _el_14 = createDivAndAppend(doc, _el_12);
    _el_14.className = 'unfocused-underline';
    addShimC(_el_14);
    _el_15 = createDivAndAppend(doc, _el_12);
    _el_15.className = 'focused-underline';
    addShimC(_el_15);
    final _anchor_16 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_16);
    _appEl_16 = ViewContainer(16, null, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(_appEl_16, viewFactory_MaterialMultilineInputComponent2);
    _NgIf_16_9 = NgIf(_appEl_16, _TemplateRef_16_8);
    _el_11.addEventListener('blur', eventHandler1(_handle_blur_11_0));
    _el_11.addEventListener('change', eventHandler1(_handle_change_11_1));
    _el_11.addEventListener('focus', eventHandler1(ctx.inputFocusAction));
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_3));
    ctx.focusable = _FocusableDirective_11_6;
    ctx.lineHeightMeasure = ElementRef(_el_9);
    ctx.textareaEl = ElementRef(_el_11);
    ctx.popupSourceEl = ElementRef(_el_0);
    init(const [], null);
    _rootEl.addEventListener('focus', eventHandler0(_ctx.focus));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.Focusable) && (11 == nodeIndex))) {
      return _FocusableDirective_11_6;
    }
    if ((identical(token, const import20.MultiToken<import21.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (11 == nodeIndex))) {
      return _NgValueAccessor_11_7;
    }
    if (((identical(token, import9.NgModel) || identical(token, import22.NgControl)) && (11 == nodeIndex))) {
      return _NgModel_11_8;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_8_9.ngIf = (_ctx.rows != _ctx.maxRows);
    changed = false;
    _NgModel_11_8.model = _ctx.inputText;
    _NgModel_11_8.ngAfterChanges();
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_11_8.ngOnInit();
    }
    _NgIf_16_9.ngIf = _ctx.displayBottomPanel;
    _appEl_8.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    final currVal_0 = _ctx.floatingLabel;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_2, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.rows > 1);
    if (import14.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_5, 'multiline', currVal_1);
      _expr_1 = currVal_1;
    }
    final bool currVal_2 = !_ctx.labelVisible;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      updateClass(_el_5, 'invisible', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.labelAnimated;
    if (import14.checkBinding(_expr_3, currVal_3)) {
      updateClass(_el_5, 'animated', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.labelAnimationReset;
    if (import14.checkBinding(_expr_4, currVal_4)) {
      updateClass(_el_5, 'reset', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = (_ctx.focused && _ctx.floatingLabelVisible);
    if (import14.checkBinding(_expr_5, currVal_5)) {
      updateClass(_el_5, 'focused', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = (_ctx.invalid && _ctx.floatingLabelVisible);
    if (import14.checkBinding(_expr_6, currVal_6)) {
      updateClass(_el_5, 'invalid', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = import14.interpolate0(_ctx.label);
    if (import14.checkBinding(_expr_7, currVal_7)) {
      _text_6.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.textAreaHeight;
    if (import14.checkBinding(_expr_8, currVal_8)) {
      _el_7.style.setProperty('height', ((currVal_8?.toString() == null) ? null : (currVal_8?.toString() + 'px')));
      _expr_8 = currVal_8;
    }
    final currVal_10 = _ctx.disabled;
    if (import14.checkBinding(_expr_10, currVal_10)) {
      updateClass(_el_11, 'disabledInput', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = (_ctx.rows == _ctx.maxRows);
    if (import14.checkBinding(_expr_11, currVal_11)) {
      updateClass(_el_11, 'staticHeight', currVal_11);
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.textAreaHeight;
    if (import14.checkBinding(_expr_12, currVal_12)) {
      _el_11.style.setProperty('height', ((currVal_12?.toString() == null) ? null : (currVal_12?.toString() + 'px')));
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.ariaLabel;
    if (import14.checkBinding(_expr_13, currVal_13)) {
      setAttr(_el_11, 'aria-label', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.disabled;
    if (import14.checkBinding(_expr_14, currVal_14)) {
      setProp(_el_11, 'readOnly', currVal_14);
      _expr_14 = currVal_14;
    }
    final currVal_15 = import14.interpolate0(_ctx.invalid);
    if (import14.checkBinding(_expr_15, currVal_15)) {
      setAttr(_el_11, 'aria-invalid', currVal_15.toString());
      _expr_15 = currVal_15;
    }
    final bool currVal_17 = !_ctx.disabled;
    if (import14.checkBinding(_expr_17, currVal_17)) {
      updateClass(_el_13, 'invisible', currVal_17);
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.disabled;
    if (import14.checkBinding(_expr_18, currVal_18)) {
      updateClass(_el_14, 'invisible', currVal_18);
      _expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.invalid;
    if (import14.checkBinding(_expr_19, currVal_19)) {
      updateClass(_el_14, 'invalid', currVal_19);
      _expr_19 = currVal_19;
    }
    final bool currVal_20 = (!_ctx.focused || _ctx.disabled);
    if (import14.checkBinding(_expr_20, currVal_20)) {
      updateClass(_el_15, 'invisible', currVal_20);
      _expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.invalid;
    if (import14.checkBinding(_expr_21, currVal_21)) {
      updateClass(_el_15, 'invalid', currVal_21);
      _expr_21 = currVal_21;
    }
    final currVal_22 = _ctx.underlineAnimated;
    if (import14.checkBinding(_expr_22, currVal_22)) {
      updateClass(_el_15, 'animated', currVal_22);
      _expr_22 = currVal_22;
    }
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _appEl_16.destroyNestedViews();
  }

  void _handle_blur_11_0($event) {
    final local_textareaEl = _el_11;
    ctx.inputBlurAction($event, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    _DefaultValueAccessor_11_5.touchHandler();
  }

  void _handle_change_11_1($event) {
    final local_textareaEl = _el_11;
    ctx.inputChange(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    $event.stopPropagation();
  }

  void _handle_input_11_3($event) {
    final local_textareaEl = _el_11;
    ctx.inputKeypress(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    _DefaultValueAccessor_11_5.handleChange($event.target.value);
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialMultilineInputComponent0(parentView, parentIndex);
}

const ComponentFactory<import3.MaterialMultilineInputComponent> _MaterialMultilineInputComponentNgFactory = const ComponentFactory('material-input[multiline]', viewFactory_MaterialMultilineInputComponentHost0);
ComponentFactory<import3.MaterialMultilineInputComponent> get MaterialMultilineInputComponentNgFactory {
  return _MaterialMultilineInputComponentNgFactory;
}

class _ViewMaterialMultilineInputComponent1 extends AppView<import3.MaterialMultilineInputComponent> {
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import10.DivElement _el_0;
  import10.Text _text_1;
  _ViewMaterialMultilineInputComponent1(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import10.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'aria-hidden', 'true');
    _el_0.className = 'mirror-text';
    addShimC(_el_0);
    _text_1 = import10.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.minInputHeight;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _el_0.style.setProperty('min-height', ((currVal_0?.toString() == null) ? null : (currVal_0?.toString() + 'px')));
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.maxInputHeight;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _el_0.style.setProperty('max-height', ((currVal_1?.toString() == null) ? null : (currVal_1?.toString() + 'px')));
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.mirrorText ?? '');
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent1(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent2 extends AppView<import3.MaterialMultilineInputComponent> {
  import23.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import23.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import23.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import23.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialMultilineInputComponent2(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import10.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'bottom-section';
    addShimC(_el_0);
    _NgSwitch_0_5 = import23.NgSwitch();
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialMultilineInputComponent3);
    _NgSwitchWhen_1_9 = import23.NgSwitchWhen(_appEl_1, _TemplateRef_1_8, _NgSwitch_0_5);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialMultilineInputComponent4);
    _NgSwitchWhen_2_9 = import23.NgSwitchWhen(_appEl_2, _TemplateRef_2_8, _NgSwitch_0_5);
    final _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialMultilineInputComponent5);
    _NgSwitchWhen_3_9 = import23.NgSwitchWhen(_appEl_3, _TemplateRef_3_8, _NgSwitch_0_5);
    final _anchor_4 = createViewContainerAnchor();
    _el_0.append(_anchor_4);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialMultilineInputComponent6);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import23.NgSwitch) && ((0 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.bottomPanelState;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _NgSwitch_0_5.ngSwitch = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.errorState;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _NgSwitchWhen_1_9.ngSwitchWhen = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hintState;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _NgSwitchWhen_2_9.ngSwitchWhen = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.emptyState;
    if (import14.checkBinding(_expr_3, currVal_3)) {
      _NgSwitchWhen_3_9.ngSwitchWhen = currVal_3;
      _expr_3 = currVal_3;
    }
    _NgIf_4_9.ngIf = ((_ctx.maxCount != null) || _ctx.showCharacterCount);
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

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent2(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent3 extends AppView<import3.MaterialMultilineInputComponent> {
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  import10.DivElement _el_0;
  import10.Text _text_1;
  _ViewMaterialMultilineInputComponent3(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import10.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'error-text';
    createAttr(_el_0, 'role', 'alert');
    addShimC(_el_0);
    _text_1 = import10.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.focused;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'focused', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.invalid;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_0, 'invalid', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = import14.interpolate0(!_ctx.invalid);
    if (import14.checkBinding(_expr_2, currVal_2)) {
      setAttr(_el_0, 'aria-hidden', currVal_2.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = import14.interpolate0(_ctx.errorMessage);
    if (import14.checkBinding(_expr_3, currVal_3)) {
      _text_1.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent3(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent4 extends AppView<import3.MaterialMultilineInputComponent> {
  var _expr_0;
  import10.Text _text_1;
  _ViewMaterialMultilineInputComponent4(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import10.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'hint-text';
    addShimC(_el_0);
    _text_1 = import10.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = import14.interpolate0(_ctx.hintText);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent4(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent5 extends AppView<import3.MaterialMultilineInputComponent> {
  _ViewMaterialMultilineInputComponent5(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import10.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'spaceholder';
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    final _text_1 = import10.Text(' ');
    _el_0.append(_text_1);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    init0(_el_0);
  }

  void _handle_focus_0_0($event) {
    $event.stopPropagation();
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent5(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent6 extends AppView<import3.MaterialMultilineInputComponent> {
  bool _expr_0;
  var _expr_1;
  import10.DivElement _el_0;
  import10.Text _text_1;
  _ViewMaterialMultilineInputComponent6(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMultilineInputComponent0._renderType;
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    var doc = import10.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'aria-hidden', 'true');
    _el_0.className = 'counter';
    addShimC(_el_0);
    _text_1 = import10.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.invalid;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'invalid', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import14.interpolate0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount));
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent6(parentView, parentIndex);
}

final List<dynamic> styles$MaterialMultilineInputComponentHost = const [];

class _ViewMaterialMultilineInputComponentHost0 extends AppView<import3.MaterialMultilineInputComponent> {
  ViewMaterialMultilineInputComponent0 _compView_0;
  import24.DeferredValidator _DeferredValidator_0_5;
  import3.MaterialMultilineInputComponent _MaterialMultilineInputComponent_0_6;
  List<dynamic> __NgValidators_0_8;
  _ViewMaterialMultilineInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _NgValidators_0_8 {
    if ((__NgValidators_0_8 == null)) {
      (__NgValidators_0_8 = [_DeferredValidator_0_5]);
    }
    return __NgValidators_0_8;
  }

  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    _compView_0 = ViewMaterialMultilineInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DeferredValidator_0_5 = import24.DeferredValidator();
    _MaterialMultilineInputComponent_0_6 = (import15.isDevMode
        ? import25.debugInjectorWrap(import3.MaterialMultilineInputComponent, () {
            return import3.MaterialMultilineInputComponent(null, _compView_0.ref, _DeferredValidator_0_5, this.injectorGet(import26.DomService, viewData.parentIndex));
          })
        : import3.MaterialMultilineInputComponent(null, _compView_0.ref, _DeferredValidator_0_5, this.injectorGet(import26.DomService, viewData.parentIndex)));
    _compView_0.create(_MaterialMultilineInputComponent_0_6, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialMultilineInputComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import24.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if ((((((identical(token, import3.MaterialMultilineInputComponent) || identical(token, import27.HasDisabled)) || identical(token, import28.ReferenceDirective)) || identical(token, import19.Focusable)) || identical(token, import29.BaseMaterialInput)) && (0 == nodeIndex))) {
      return _MaterialMultilineInputComponent_0_6;
    }
    if ((identical(token, const import20.MultiToken<dynamic>('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_8;
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
    _compView_0.detectChanges();
    if (!import14.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialMultilineInputComponent_0_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialMultilineInputComponent_0_6.ngOnDestroy();
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMultilineInputComponent, MaterialMultilineInputComponentNgFactory);
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
}
