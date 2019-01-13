// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'view_snippet_component.dart';
export 'view_snippet_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'elastic_directive.template.dart' as _ref0;
import 'package:Internal_lore/src/model/model.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/material_button/material_button.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_forms/angular_forms.template.dart' as _ref5;
import 'package:angular/src/core/linker/app_view.dart';
import 'view_snippet_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import12;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import13;
import 'package:angular_forms/src/directives/ng_model.dart' as import14;
import 'elastic_directive.dart' as import15;
import 'package:angular_components/material_button/material_button.template.dart' as import16;
import 'package:angular_components/material_button/material_button.dart' as import17;
import 'package:angular_components/material_icon/material_icon.template.dart' as import18;
import 'package:angular_components/material_icon/material_icon.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:angular_components/theme/dark_theme.dart' as import21;
import 'package:angular/src/core/di/opaque_token.dart' as import22;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import23;
import 'package:angular_forms/src/directives/ng_control.dart' as import24;
import 'package:angular_components/button_decorator/button_decorator.dart' as import25;
import 'package:angular_components/interfaces/has_disabled.dart' as import26;

final List<dynamic> styles$ViewSnippetComponent = ['.snippet._ngcontent-%ID%{width:98vw;height:auto;overflow:auto}.snippet-content._ngcontent-%ID%{margin-left:25%;width:50%;float:left}.snippet-content._ngcontent-%ID% textarea._ngcontent-%ID%{resize:none;width:100%}.snippet-buttons._ngcontent-%ID%{position:relative;margin-left:75%;width:40px}'];

class ViewViewSnippetComponent0 extends AppView<import1.ViewSnippetComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static RenderComponentType _renderType;
  ViewViewSnippetComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('snippet-comp');
    _renderType ??= import8.appViewUtils.createRenderType((import9.isDevMode ? 'asset:Internal_lore/lib/src/view/view_document/view_snippet/view_snippet_component.dart' : null), ViewEncapsulation.Emulated, styles$ViewSnippetComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ViewSnippetComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_ViewSnippetComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.snippet != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<import1.ViewSnippetComponent> viewFactory_ViewSnippetComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewViewSnippetComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.ViewSnippetComponent> _ViewSnippetComponentNgFactory = const ComponentFactory('snippet-comp', viewFactory_ViewSnippetComponentHost0);
ComponentFactory<import1.ViewSnippetComponent> get ViewSnippetComponentNgFactory {
  return _ViewSnippetComponentNgFactory;
}

class _ViewViewSnippetComponent1 extends AppView<import1.ViewSnippetComponent> {
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  bool _expr_0 = false;
  import7.Comment _anchor_1;
  import7.DivElement _el_1_0;
  _ViewViewSnippetComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewSnippetComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewSnippetComponent> build() {
    var doc = import7.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'snippet';
    addShimC(_el_0);
    _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    final _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'snippet-content';
    addShimC(_el_2);
    final _anchor_3 = createViewContainerAnchor();
    _el_2.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_ViewSnippetComponent3);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = createViewContainerAnchor();
    _el_2.append(_anchor_4);
    _appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_ViewSnippetComponent4);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _anchor_5 = createViewContainerAnchor();
    _el_0.append(_anchor_5);
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_ViewSnippetComponent5);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.showMetadata == true);
    if (import8.checkBinding(_expr_0, currVal_0)) {
      if (currVal_0) {
        var doc = import7.document;
        _el_1_0 = doc.createElement('div');
        _el_1_0.className = 'metadata';
        addShimC(_el_1_0);
        addInlinedNodes(_anchor_1, [_el_1_0]);
      } else {
        removeInlinedNodes([_el_1_0]);
      }
      _expr_0 = currVal_0;
    }
    _NgIf_3_9.ngIf = _ctx.viewHTML;
    _NgIf_4_9.ngIf = !_ctx.viewHTML;
    _NgIf_5_9.ngIf = _ctx.allowEdit;
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_5.destroyNestedViews();
  }
}

AppView<import1.ViewSnippetComponent> viewFactory_ViewSnippetComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewSnippetComponent1(parentView, parentIndex);
}

class _ViewViewSnippetComponent3 extends AppView<import1.ViewSnippetComponent> {
  var _expr_0;
  import7.DivElement _el_0;
  _ViewViewSnippetComponent3(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewSnippetComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewSnippetComponent> build() {
    var doc = import7.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'align', 'left');
    addShimC(_el_0);
    _el_0.addEventListener('click', eventHandler0(ctx.select));
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.snippet.html;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      setProp(_el_0, 'innerHTML', import8.appViewUtils.sanitizer.sanitizeHtml(currVal_0));
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ViewSnippetComponent> viewFactory_ViewSnippetComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewSnippetComponent3(parentView, parentIndex);
}

class _ViewViewSnippetComponent4 extends AppView<import1.ViewSnippetComponent> {
  import12.DefaultValueAccessor _DefaultValueAccessor_1_5;
  List<import13.ControlValueAccessor<dynamic>> _NgValueAccessor_1_6;
  import14.NgModel _NgModel_1_7;
  import15.ElasticDirective _ElasticDirective_1_8;
  import16.ViewMaterialButtonComponent0 _compView_2;
  dynamic _AcxDarkTheme_2_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_2_6;
  import18.ViewMaterialIconComponent0 _compView_3;
  import19.MaterialIconComponent _MaterialIconComponent_3_5;
  _ViewViewSnippetComponent4(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewSnippetComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewSnippetComponent> build() {
    var doc = import7.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _el_1 = createAndAppend(doc, 'textarea', _el_0);
    createAttr(_el_1, 'autofocus', '');
    createAttr(_el_1, 'elastic', '');
    addShimC(_el_1);
    _DefaultValueAccessor_1_5 = import12.DefaultValueAccessor(_el_1);
    _NgValueAccessor_1_6 = [_DefaultValueAccessor_1_5];
    _NgModel_1_7 = import14.NgModel(null, _NgValueAccessor_1_6);
    _ElasticDirective_1_8 = import15.ElasticDirective(_el_1);
    _compView_2 = import16.ViewMaterialButtonComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    createAttr(_el_2, 'icon', '');
    addShimC(_el_2);
    _AcxDarkTheme_2_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import21.AcxDarkTheme, () {
            return import21.AcxDarkTheme(parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import21.AcxDarkTheme(parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_2_6 = import17.MaterialButtonComponent(_el_2, _AcxDarkTheme_2_5, _compView_2.ref, null);
    _compView_3 = import18.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    createAttr(_el_3, 'icon', 'done');
    createAttr(_el_3, 'size', 'small');
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import19.MaterialIconComponent(_el_3);
    _compView_3.create(_MaterialIconComponent_3_5, []);
    _compView_2.create(_MaterialButtonComponent_2_6, [
      [_el_3]
    ]);
    _el_1.addEventListener('blur', eventHandler0(_DefaultValueAccessor_1_5.touchHandler));
    _el_1.addEventListener('input', eventHandler1(_handle_input_1_2));
    _el_1.addEventListener('focus', eventHandler0(_ElasticDirective_1_8.onFocus));
    final subscription_0 = _NgModel_1_7.update.listen(eventHandler1(_handle_ngModelChange_1_0));
    final subscription_1 = _MaterialButtonComponent_2_6.trigger.listen(eventHandler0(ctx.deselect));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import22.MultiToken<import23.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (1 == nodeIndex))) {
      return _NgValueAccessor_1_6;
    }
    if (((identical(token, import14.NgModel) || identical(token, import24.NgControl)) && (1 == nodeIndex))) {
      return _NgModel_1_7;
    }
    if ((identical(token, import21.AcxDarkTheme) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _AcxDarkTheme_2_5;
    }
    if ((((identical(token, import17.MaterialButtonComponent) || identical(token, import25.ButtonDirective)) || identical(token, import26.HasDisabled)) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialButtonComponent_2_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_1_7.model = _ctx.snippet.content;
    _NgModel_1_7.ngAfterChanges();
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_1_7.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_2_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_3_5.icon = 'done';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _compView_2.detectHostChanges(firstCheck);
    _compView_2.detectChanges();
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroy();
    _compView_3.destroy();
  }

  void _handle_ngModelChange_1_0($event) {
    ctx.snippet.content = $event;
  }

  void _handle_input_1_2($event) {
    _DefaultValueAccessor_1_5.handleChange($event.target.value);
    _ElasticDirective_1_8.onInput();
  }
}

AppView<import1.ViewSnippetComponent> viewFactory_ViewSnippetComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewSnippetComponent4(parentView, parentIndex);
}

class _ViewViewSnippetComponent5 extends AppView<import1.ViewSnippetComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import16.ViewMaterialButtonComponent0 _compView_3;
  dynamic _AcxDarkTheme_3_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_3_6;
  import18.ViewMaterialIconComponent0 _compView_4;
  import19.MaterialIconComponent _MaterialIconComponent_4_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  _ViewViewSnippetComponent5(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewSnippetComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewSnippetComponent> build() {
    var doc = import7.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'snippet-buttons';
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ViewSnippetComponent6);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _el_2 = createAndAppend(doc, 'br', _el_0);
    addShimE(_el_2);
    _compView_3 = import16.ViewMaterialButtonComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    _el_0.append(_el_3);
    createAttr(_el_3, 'icon', '');
    createAttr(_el_3, 'raised', '');
    addShimC(_el_3);
    _AcxDarkTheme_3_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import21.AcxDarkTheme, () {
            return import21.AcxDarkTheme(parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import21.AcxDarkTheme(parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_3_6 = import17.MaterialButtonComponent(_el_3, _AcxDarkTheme_3_5, _compView_3.ref, null);
    _compView_4 = import18.ViewMaterialIconComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    createAttr(_el_4, 'icon', 'cancel');
    createAttr(_el_4, 'size', 'small');
    addShimC(_el_4);
    _MaterialIconComponent_4_5 = import19.MaterialIconComponent(_el_4);
    _compView_4.create(_MaterialIconComponent_4_5, []);
    _compView_3.create(_MaterialButtonComponent_3_6, [
      [_el_4]
    ]);
    final _el_5 = createAndAppend(doc, 'br', _el_0);
    addShimE(_el_5);
    final _anchor_6 = createViewContainerAnchor();
    _el_0.append(_anchor_6);
    _appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_ViewSnippetComponent7);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final subscription_0 = _MaterialButtonComponent_3_6.trigger.listen(eventHandler0(ctx.destroyMe));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.AcxDarkTheme) && ((3 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _AcxDarkTheme_3_5;
    }
    if ((((identical(token, import17.MaterialButtonComponent) || identical(token, import25.ButtonDirective)) || identical(token, import26.HasDisabled)) && ((3 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _MaterialButtonComponent_3_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_1_9.ngIf = !_ctx.first;
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_3_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_3_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_4_5.icon = 'cancel';
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    _NgIf_6_9.ngIf = !_ctx.last;
    _appEl_1.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _compView_3.detectHostChanges(firstCheck);
    _compView_3.detectChanges();
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _compView_3.destroy();
    _compView_4.destroy();
  }
}

AppView<import1.ViewSnippetComponent> viewFactory_ViewSnippetComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewSnippetComponent5(parentView, parentIndex);
}

class _ViewViewSnippetComponent6 extends AppView<import1.ViewSnippetComponent> {
  import16.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import18.ViewMaterialIconComponent0 _compView_1;
  import19.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewViewSnippetComponent6(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewSnippetComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewSnippetComponent> build() {
    _compView_0 = import16.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'icon', '');
    createAttr(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import21.AcxDarkTheme, () {
            return import21.AcxDarkTheme(parentView.parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex, null));
          })
        : import21.AcxDarkTheme(parentView.parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_0_6 = import17.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = import18.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'icon', 'keyboard_arrow_up');
    createAttr(_el_1, 'size', 'small');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import19.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import17.MaterialButtonComponent) || identical(token, import25.ButtonDirective)) || identical(token, import26.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'keyboard_arrow_up';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_1.destroy();
  }

  void _handle_trigger_0_0($event) {
    ctx.swap(true);
  }
}

AppView<import1.ViewSnippetComponent> viewFactory_ViewSnippetComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewSnippetComponent6(parentView, parentIndex);
}

class _ViewViewSnippetComponent7 extends AppView<import1.ViewSnippetComponent> {
  import16.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import17.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import18.ViewMaterialIconComponent0 _compView_1;
  import19.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewViewSnippetComponent7(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewSnippetComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewSnippetComponent> build() {
    _compView_0 = import16.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'icon', '');
    createAttr(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import20.debugInjectorWrap(import21.AcxDarkTheme, () {
            return import21.AcxDarkTheme(parentView.parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex, null));
          })
        : import21.AcxDarkTheme(parentView.parentView.parentView.injectorGet(const import22.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_0_6 = import17.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = import18.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'icon', 'keyboard_arrow_down');
    createAttr(_el_1, 'size', 'small');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import19.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import17.MaterialButtonComponent) || identical(token, import25.ButtonDirective)) || identical(token, import26.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'keyboard_arrow_down';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_1.destroy();
  }

  void _handle_trigger_0_0($event) {
    ctx.swap(false);
  }
}

AppView<import1.ViewSnippetComponent> viewFactory_ViewSnippetComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewSnippetComponent7(parentView, parentIndex);
}

final List<dynamic> styles$ViewSnippetComponentHost = const [];

class _ViewViewSnippetComponentHost0 extends AppView<import1.ViewSnippetComponent> {
  ViewViewSnippetComponent0 _compView_0;
  import1.ViewSnippetComponent _ViewSnippetComponent_0_5;
  _ViewViewSnippetComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.ViewSnippetComponent> build() {
    _compView_0 = ViewViewSnippetComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ViewSnippetComponent_0_5 = import1.ViewSnippetComponent();
    _compView_0.create(_ViewSnippetComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _ViewSnippetComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _ViewSnippetComponent_0_5.ngOnDestroy();
  }
}

AppView<import1.ViewSnippetComponent> viewFactory_ViewSnippetComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewSnippetComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ViewSnippetComponent, ViewSnippetComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
