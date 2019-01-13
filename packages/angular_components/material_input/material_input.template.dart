// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_input.dart';
export 'material_input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_material_input.template.dart' as _ref0;
import 'base_material_input.template.dart' as _ref1;
import 'deferred_validator.template.dart' as _ref2;
import 'material_input_default_value_accessor.template.dart' as _ref3;
import 'material_input_default_value_accessor.template.dart' as _ref4;
import 'material_input_multiline.template.dart' as _ref5;
import 'material_input_multiline.template.dart' as _ref6;
import 'package:angular/angular.template.dart' as _ref7;
import 'package:angular_components/focus/focus.template.dart' as _ref8;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref9;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref10;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref11;
import 'package:angular_components/utils/angular/reference/reference.template.dart' as _ref12;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref13;
import 'package:angular_forms/angular_forms.template.dart' as _ref14;
import 'package:angular_forms/angular_forms.template.dart' as _ref15;
import 'package:angular_components/material_input/material_input.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_input.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import5;
import '../focus/focus.dart' as import6;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import7;
import 'package:angular_forms/src/directives/ng_model.dart' as import8;
import 'dart:html' as import9;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import '../focus/focus_interface.dart' as import18;
import 'package:angular/src/core/di/opaque_token.dart' as import19;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import20;
import 'package:angular_forms/src/directives/ng_control.dart' as import21;
import '../material_icon/material_icon.template.dart' as import22;
import '../material_icon/material_icon.dart' as import23;
import 'package:angular/src/common/directives/ng_switch.dart' as import24;
import 'deferred_validator.dart' as import25;
import '../utils/angular/reference/reference.dart' as import26;
import '../interfaces/has_disabled.dart' as import27;
import 'base_material_input.dart' as import28;

final List<dynamic> styles$MaterialInputComponent = [import0.styles];

class ViewMaterialInputComponent0 extends AppView<import2.MaterialInputComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  import5.DefaultValueAccessor _DefaultValueAccessor_11_5;
  import6.FocusableDirective _FocusableDirective_11_6;
  List<import7.ControlValueAccessor<dynamic>> _NgValueAccessor_11_7;
  import8.NgModel _NgModel_11_8;
  ViewContainer _appEl_13;
  NgIf _NgIf_13_9;
  ViewContainer _appEl_15;
  NgIf _NgIf_15_9;
  ViewContainer _appEl_21;
  NgIf _NgIf_21_9;
  bool _expr_0;
  bool _expr_3;
  bool _expr_4;
  var _expr_5;
  bool _expr_6;
  bool _expr_7;
  bool _expr_8;
  bool _expr_9;
  bool _expr_10;
  bool _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_16;
  var _expr_17;
  var _expr_18;
  var _expr_19;
  var _expr_20;
  bool _expr_22;
  bool _expr_23;
  var _expr_24;
  var _expr_25;
  var _expr_26;
  bool _expr_30;
  bool _expr_31;
  bool _expr_32;
  bool _expr_33;
  bool _expr_34;
  bool _expr_35;
  import9.DivElement _el_1;
  import9.Element _el_6;
  import9.DivElement _el_7;
  import9.Element _el_9;
  import9.Text _text_10;
  import9.InputElement _el_11;
  import9.DivElement _el_18;
  import9.DivElement _el_19;
  import9.DivElement _el_20;
  static RenderComponentType _renderType;
  ViewMaterialInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import9.document.createElement('material-input');
    rootEl.className = import2.MaterialInputComponent.hostClass;
    rootEl.tabIndex = import2.MaterialInputComponent.hostTabIndex;
    _renderType ??= import13.appViewUtils.createRenderType((import14.isDevMode ? 'asset:angular_components/lib/material_input/material_input.dart' : null), ViewEncapsulation.Emulated, styles$MaterialInputComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final import2.MaterialInputComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import9.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import9.document;
    final _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'baseline';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'top-section';
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialInputComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _text_3 = import9.Text(' ');
    _el_1.append(_text_3);
    final _anchor_4 = createViewContainerAnchor();
    _el_1.append(_anchor_4);
    _appEl_4 = ViewContainer(4, 1, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialInputComponent2);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _text_5 = import9.Text(' ');
    _el_1.append(_text_5);
    _el_6 = createAndAppend(doc, 'label', _el_1);
    _el_6.className = 'input-container';
    addShimE(_el_6);
    _el_7 = createDivAndAppend(doc, _el_6);
    createAttr(_el_7, 'aria-hidden', 'true');
    _el_7.className = 'label';
    addShimC(_el_7);
    final _text_8 = import9.Text(' ');
    _el_7.append(_text_8);
    _el_9 = createSpanAndAppend(doc, _el_7);
    _el_9.className = 'label-text';
    addShimE(_el_9);
    _text_10 = import9.Text('');
    _el_9.append(_text_10);
    _el_11 = createAndAppend(doc, 'input', _el_6);
    _el_11.className = 'input';
    createAttr(_el_11, 'focusableElement', '');
    addShimC(_el_11);
    _DefaultValueAccessor_11_5 = import5.DefaultValueAccessor(_el_11);
    _FocusableDirective_11_6 = import6.FocusableDirective(_el_11);
    _NgValueAccessor_11_7 = [_DefaultValueAccessor_11_5];
    _NgModel_11_8 = import8.NgModel(null, _NgValueAccessor_11_7);
    final _text_12 = import9.Text(' ');
    _el_1.append(_text_12);
    final _anchor_13 = createViewContainerAnchor();
    _el_1.append(_anchor_13);
    _appEl_13 = ViewContainer(13, 1, this, _anchor_13);
    TemplateRef _TemplateRef_13_8 = TemplateRef(_appEl_13, viewFactory_MaterialInputComponent3);
    _NgIf_13_9 = NgIf(_appEl_13, _TemplateRef_13_8);
    final _text_14 = import9.Text(' ');
    _el_1.append(_text_14);
    final _anchor_15 = createViewContainerAnchor();
    _el_1.append(_anchor_15);
    _appEl_15 = ViewContainer(15, 1, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = TemplateRef(_appEl_15, viewFactory_MaterialInputComponent4);
    _NgIf_15_9 = NgIf(_appEl_15, _TemplateRef_15_8);
    final _text_16 = import9.Text(' ');
    _el_1.append(_text_16);
    project(_el_1, 0);
    final _el_17 = createDivAndAppend(doc, _el_0);
    _el_17.className = 'underline';
    addShimC(_el_17);
    _el_18 = createDivAndAppend(doc, _el_17);
    _el_18.className = 'disabled-underline';
    addShimC(_el_18);
    _el_19 = createDivAndAppend(doc, _el_17);
    _el_19.className = 'unfocused-underline';
    addShimC(_el_19);
    _el_20 = createDivAndAppend(doc, _el_17);
    _el_20.className = 'focused-underline';
    addShimC(_el_20);
    final _anchor_21 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_21);
    _appEl_21 = ViewContainer(21, null, this, _anchor_21);
    TemplateRef _TemplateRef_21_8 = TemplateRef(_appEl_21, viewFactory_MaterialInputComponent5);
    _NgIf_21_9 = NgIf(_appEl_21, _TemplateRef_21_8);
    _el_11.addEventListener('blur', eventHandler1(_handle_blur_11_0));
    _el_11.addEventListener('change', eventHandler1(_handle_change_11_1));
    _el_11.addEventListener('focus', eventHandler1(ctx.inputFocusAction));
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_3));
    ctx.focusable = _FocusableDirective_11_6;
    ctx.inputEl = ElementRef(_el_11);
    ctx.popupSourceEl = ElementRef(_el_0);
    init(const [], null);
    _rootEl.addEventListener('focus', eventHandler0(_ctx.focus));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.Focusable) && (11 == nodeIndex))) {
      return _FocusableDirective_11_6;
    }
    if ((identical(token, const import19.MultiToken<import20.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (11 == nodeIndex))) {
      return _NgValueAccessor_11_7;
    }
    if (((identical(token, import8.NgModel) || identical(token, import21.NgControl)) && (11 == nodeIndex))) {
      return _NgModel_11_8;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_2_9.ngIf = _ctx.hasLeadingGlyph;
    _NgIf_4_9.ngIf = _ctx.hasLeadingText;
    changed = false;
    _NgModel_11_8.model = _ctx.inputText;
    _NgModel_11_8.ngAfterChanges();
    if ((!import13.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_11_8.ngOnInit();
    }
    _NgIf_13_9.ngIf = _ctx.hasTrailingText;
    _NgIf_15_9.ngIf = _ctx.hasTrailingGlyph;
    _NgIf_21_9.ngIf = _ctx.displayBottomPanel;
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_13.detectChangesInNestedViews();
    _appEl_15.detectChangesInNestedViews();
    _appEl_21.detectChangesInNestedViews();
    final currVal_0 = _ctx.disabled;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_1, 'disabled', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_3 = _ctx.floatingLabel;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      updateClass(_el_6, 'floated-label', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.rightAlign;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      updateClass(_el_7, 'right-align', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.labelId;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      setAttr(_el_9, 'id', currVal_5);
      _expr_5 = currVal_5;
    }
    final bool currVal_6 = !_ctx.labelVisible;
    if (import13.checkBinding(_expr_6, currVal_6)) {
      updateClass(_el_9, 'invisible', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.labelAnimated;
    if (import13.checkBinding(_expr_7, currVal_7)) {
      updateClass(_el_9, 'animated', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.labelAnimationReset;
    if (import13.checkBinding(_expr_8, currVal_8)) {
      updateClass(_el_9, 'reset', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.disabled;
    if (import13.checkBinding(_expr_9, currVal_9)) {
      updateClass(_el_9, 'disabled', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = (_ctx.focused && _ctx.floatingLabelVisible);
    if (import13.checkBinding(_expr_10, currVal_10)) {
      updateClass(_el_9, 'focused', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = (_ctx.invalid && _ctx.floatingLabelVisible);
    if (import13.checkBinding(_expr_11, currVal_11)) {
      updateClass(_el_9, 'invalid', currVal_11);
      _expr_11 = currVal_11;
    }
    final currVal_12 = import13.interpolate0(_ctx.label);
    if (import13.checkBinding(_expr_12, currVal_12)) {
      _text_10.text = currVal_12;
      _expr_12 = currVal_12;
    }
    if (firstCheck) {
      if (!identical(_ctx.inputRole, null)) {
        setAttr(_el_11, 'role', _ctx.inputRole);
      }
    }
    final currVal_13 = _ctx.inputAriaActivedescendent;
    if (import13.checkBinding(_expr_13, currVal_13)) {
      setAttr(_el_11, 'aria-activedescendant', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.inputAriaAutocomplete;
    if (import13.checkBinding(_expr_14, currVal_14)) {
      setAttr(_el_11, 'aria-autocomplete', currVal_14);
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.inputAriaExpanded;
    if (import13.checkBinding(_expr_15, currVal_15)) {
      setAttr(_el_11, 'aria-expanded', currVal_15?.toString());
      _expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.inputAriaHasPopup;
    if (import13.checkBinding(_expr_16, currVal_16)) {
      setAttr(_el_11, 'aria-haspopup', currVal_16);
      _expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.invalid;
    if (import13.checkBinding(_expr_17, currVal_17)) {
      setAttr(_el_11, 'aria-invalid', currVal_17?.toString());
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.inputAriaLabel;
    if (import13.checkBinding(_expr_18, currVal_18)) {
      setAttr(_el_11, 'aria-label', currVal_18);
      _expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.labelId;
    if (import13.checkBinding(_expr_19, currVal_19)) {
      setAttr(_el_11, 'aria-labelledby', currVal_19);
      _expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.inputAriaOwns;
    if (import13.checkBinding(_expr_20, currVal_20)) {
      setAttr(_el_11, 'aria-owns', currVal_20);
      _expr_20 = currVal_20;
    }
    final currVal_22 = _ctx.disabled;
    if (import13.checkBinding(_expr_22, currVal_22)) {
      updateClass(_el_11, 'disabledInput', currVal_22);
      _expr_22 = currVal_22;
    }
    final currVal_23 = _ctx.rightAlign;
    if (import13.checkBinding(_expr_23, currVal_23)) {
      updateClass(_el_11, 'right-align', currVal_23);
      _expr_23 = currVal_23;
    }
    final currVal_24 = _ctx.multiple;
    if (import13.checkBinding(_expr_24, currVal_24)) {
      setProp(_el_11, 'multiple', currVal_24);
      _expr_24 = currVal_24;
    }
    final currVal_25 = _ctx.disabled;
    if (import13.checkBinding(_expr_25, currVal_25)) {
      setProp(_el_11, 'readOnly', currVal_25);
      _expr_25 = currVal_25;
    }
    final currVal_26 = _ctx.type;
    if (import13.checkBinding(_expr_26, currVal_26)) {
      setProp(_el_11, 'type', currVal_26);
      _expr_26 = currVal_26;
    }
    final bool currVal_30 = !_ctx.disabled;
    if (import13.checkBinding(_expr_30, currVal_30)) {
      updateClass(_el_18, 'invisible', currVal_30);
      _expr_30 = currVal_30;
    }
    final currVal_31 = _ctx.disabled;
    if (import13.checkBinding(_expr_31, currVal_31)) {
      updateClass(_el_19, 'invisible', currVal_31);
      _expr_31 = currVal_31;
    }
    final currVal_32 = _ctx.invalid;
    if (import13.checkBinding(_expr_32, currVal_32)) {
      updateClass(_el_19, 'invalid', currVal_32);
      _expr_32 = currVal_32;
    }
    final bool currVal_33 = (!_ctx.focused || _ctx.disabled);
    if (import13.checkBinding(_expr_33, currVal_33)) {
      updateClass(_el_20, 'invisible', currVal_33);
      _expr_33 = currVal_33;
    }
    final currVal_34 = _ctx.invalid;
    if (import13.checkBinding(_expr_34, currVal_34)) {
      updateClass(_el_20, 'invalid', currVal_34);
      _expr_34 = currVal_34;
    }
    final currVal_35 = _ctx.underlineAnimated;
    if (import13.checkBinding(_expr_35, currVal_35)) {
      updateClass(_el_20, 'animated', currVal_35);
      _expr_35 = currVal_35;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_13.destroyNestedViews();
    _appEl_15.destroyNestedViews();
    _appEl_21.destroyNestedViews();
  }

  void _handle_blur_11_0($event) {
    final local_inputEl = _el_11;
    ctx.inputBlurAction($event, local_inputEl.validity.valid, local_inputEl.validationMessage);
    _DefaultValueAccessor_11_5.touchHandler();
  }

  void _handle_change_11_1($event) {
    final local_inputEl = _el_11;
    ctx.inputChange(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
    $event.stopPropagation();
  }

  void _handle_input_11_3($event) {
    final local_inputEl = _el_11;
    ctx.inputKeypress(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
    _DefaultValueAccessor_11_5.handleChange($event.target.value);
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialInputComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialInputComponent> _MaterialInputComponentNgFactory = const ComponentFactory('material-input:not(material-input[multiline])', viewFactory_MaterialInputComponentHost0);
ComponentFactory<import2.MaterialInputComponent> get MaterialInputComponentNgFactory {
  return _MaterialInputComponentNgFactory;
}

class _ViewMaterialInputComponent1 extends AppView<import2.MaterialInputComponent> {
  import22.ViewMaterialIconComponent0 _compView_1;
  import23.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_1;
  String _expr_2;
  var _expr_3;
  import9.Element _el_0;
  import9.Element _el_1;
  _ViewMaterialInputComponent1(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'leading-text';
    addShimE(_el_0);
    _compView_1 = import22.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    _el_1.className = 'glyph leading';
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import23.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_2 = _ctx.leadingGlyphAriaLabel;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialIconComponent_1_5.ariaLabel = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.leadingGlyph ?? '');
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.floatingLabel;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_1, 'disabled', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroy();
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent1(parentView, parentIndex);
}

class _ViewMaterialInputComponent2 extends AppView<import2.MaterialInputComponent> {
  bool _expr_0;
  var _expr_1;
  import9.Element _el_0;
  import9.Text _text_1;
  _ViewMaterialInputComponent2(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'leading-text';
    addShimE(_el_0);
    _text_1 = import9.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.floatingLabel;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.leadingText ?? '');
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent2(parentView, parentIndex);
}

class _ViewMaterialInputComponent3 extends AppView<import2.MaterialInputComponent> {
  bool _expr_0;
  var _expr_1;
  import9.Element _el_0;
  import9.Text _text_1;
  _ViewMaterialInputComponent3(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'trailing-text';
    addShimE(_el_0);
    _text_1 = import9.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.floatingLabel;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.trailingText ?? '');
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent3(parentView, parentIndex);
}

class _ViewMaterialInputComponent4 extends AppView<import2.MaterialInputComponent> {
  import22.ViewMaterialIconComponent0 _compView_1;
  import23.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_1;
  String _expr_2;
  var _expr_3;
  import9.Element _el_0;
  import9.Element _el_1;
  _ViewMaterialInputComponent4(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'trailing-text';
    addShimE(_el_0);
    _compView_1 = import22.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    _el_1.className = 'glyph trailing';
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import23.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_2 = _ctx.trailingGlyphAriaLabel;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialIconComponent_1_5.ariaLabel = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.trailingGlyph ?? '');
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.floatingLabel;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_1, 'disabled', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroy();
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent4(parentView, parentIndex);
}

class _ViewMaterialInputComponent5 extends AppView<import2.MaterialInputComponent> {
  import24.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import24.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import24.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import24.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialInputComponent5(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'bottom-section';
    addShimC(_el_0);
    _NgSwitch_0_5 = import24.NgSwitch();
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialInputComponent6);
    _NgSwitchWhen_1_9 = import24.NgSwitchWhen(_appEl_1, _TemplateRef_1_8, _NgSwitch_0_5);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialInputComponent7);
    _NgSwitchWhen_2_9 = import24.NgSwitchWhen(_appEl_2, _TemplateRef_2_8, _NgSwitch_0_5);
    final _anchor_3 = createViewContainerAnchor();
    _el_0.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialInputComponent8);
    _NgSwitchWhen_3_9 = import24.NgSwitchWhen(_appEl_3, _TemplateRef_3_8, _NgSwitch_0_5);
    final _anchor_4 = createViewContainerAnchor();
    _el_0.append(_anchor_4);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialInputComponent9);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import24.NgSwitch) && ((0 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.bottomPanelState;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _NgSwitch_0_5.ngSwitch = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.errorState;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _NgSwitchWhen_1_9.ngSwitchWhen = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hintState;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _NgSwitchWhen_2_9.ngSwitchWhen = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.emptyState;
    if (import13.checkBinding(_expr_3, currVal_3)) {
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

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent5(parentView, parentIndex);
}

class _ViewMaterialInputComponent6 extends AppView<import2.MaterialInputComponent> {
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  import9.DivElement _el_0;
  import9.Text _text_1;
  _ViewMaterialInputComponent6(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'error-text';
    createAttr(_el_0, 'role', 'alert');
    addShimC(_el_0);
    _text_1 = import9.Text('');
    _el_0.append(_text_1);
    final _text_2 = import9.Text(' ');
    _el_0.append(_text_2);
    project(_el_0, 1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.focused;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'focused', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.invalid;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_0, 'invalid', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = import13.interpolate0(!_ctx.invalid);
    if (import13.checkBinding(_expr_2, currVal_2)) {
      setAttr(_el_0, 'aria-hidden', currVal_2.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = import13.interpolate0(_ctx.errorMessage);
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _text_1.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent6(parentView, parentIndex);
}

class _ViewMaterialInputComponent7 extends AppView<import2.MaterialInputComponent> {
  var _expr_0;
  import9.Text _text_1;
  _ViewMaterialInputComponent7(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'hint-text';
    addShimC(_el_0);
    _text_1 = import9.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = import13.interpolate0(_ctx.hintText);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent7(parentView, parentIndex);
}

class _ViewMaterialInputComponent8 extends AppView<import2.MaterialInputComponent> {
  _ViewMaterialInputComponent8(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'spaceholder';
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    final _text_1 = import9.Text(' ');
    _el_0.append(_text_1);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    init0(_el_0);
  }

  void _handle_focus_0_0($event) {
    $event.stopPropagation();
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent8(parentView, parentIndex);
}

class _ViewMaterialInputComponent9 extends AppView<import2.MaterialInputComponent> {
  bool _expr_0;
  var _expr_1;
  import9.DivElement _el_0;
  import9.Text _text_1;
  _ViewMaterialInputComponent9(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInputComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    var doc = import9.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'aria-hidden', 'true');
    _el_0.className = 'counter';
    addShimC(_el_0);
    _text_1 = import9.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.invalid;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'invalid', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import13.interpolate0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount));
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent9(parentView, parentIndex);
}

final List<dynamic> styles$MaterialInputComponentHost = const [];

class _ViewMaterialInputComponentHost0 extends AppView<import2.MaterialInputComponent> {
  ViewMaterialInputComponent0 _compView_0;
  import25.DeferredValidator _DeferredValidator_0_5;
  import2.MaterialInputComponent _MaterialInputComponent_0_6;
  List<dynamic> __NgValidators_0_7;
  _ViewMaterialInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _NgValidators_0_7 {
    if ((__NgValidators_0_7 == null)) {
      (__NgValidators_0_7 = [_DeferredValidator_0_5]);
    }
    return __NgValidators_0_7;
  }

  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    _compView_0 = ViewMaterialInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DeferredValidator_0_5 = import25.DeferredValidator();
    _MaterialInputComponent_0_6 = import2.MaterialInputComponent(null, null, null, null, _compView_0.ref, _DeferredValidator_0_5);
    _compView_0.create(_MaterialInputComponent_0_6, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialInputComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import25.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if ((((((identical(token, import2.MaterialInputComponent) || identical(token, import26.ReferenceDirective)) || identical(token, import18.Focusable)) || identical(token, import27.HasDisabled)) || identical(token, import28.BaseMaterialInput)) && (0 == nodeIndex))) {
      return _MaterialInputComponent_0_6;
    }
    if ((identical(token, const import19.MultiToken<dynamic>('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_7;
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
    if (!import13.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_0_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialInputComponent_0_6.ngOnDestroy();
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialInputComponent, MaterialInputComponentNgFactory);
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
}
