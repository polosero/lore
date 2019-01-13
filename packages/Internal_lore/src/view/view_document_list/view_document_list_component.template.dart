// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'view_document_list_component.dart';
export 'view_document_list_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../../model/model.template.dart' as _ref0;
import '../../routes.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/auto_dismiss/auto_dismiss.template.dart' as _ref3;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref4;
import 'package:angular_components/laminate/overlay/module.template.dart' as _ref5;
import 'package:angular_components/material_button/material_button.template.dart' as _ref6;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as _ref7;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref8;
import 'package:angular_forms/angular_forms.template.dart' as _ref9;
import 'package:angular_router/angular_router.template.dart' as _ref10;
import 'package:angular/src/core/linker/app_view.dart';
import 'view_document_list_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import3;
import 'package:angular_components/material_button/material_button.template.dart' as import4;
import 'package:angular_components/material_button/material_button.dart' as import5;
import 'package:angular_components/material_icon/material_icon.template.dart' as import6;
import 'package:angular_components/material_icon/material_icon.dart' as import7;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as import8;
import 'package:angular_components/laminate/components/modal/modal.dart' as import9;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import10;
import 'package:angular_components/auto_dismiss/auto_dismiss.dart' as import11;
import 'package:angular_components/material_dialog/material_dialog.dart' as import12;
import 'package:angular_forms/src/directives/ng_form.dart' as import13;
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import15;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import17;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import19;
import 'package:angular/src/runtime.dart' as import20;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import23;
import 'package:angular_components/theme/dark_theme.dart' as import24;
import 'package:angular/src/core/di/opaque_token.dart' as import25;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import26;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import27;
import 'package:angular/src/core/zone/ng_zone.dart' as import28;
import 'package:angular_components/button_decorator/button_decorator.dart' as import29;
import 'package:angular_components/interfaces/has_disabled.dart' as import30;
import 'package:angular_forms/src/directives/control_container.dart' as import31;
import 'package:angular_components/content/deferred_content_aware.dart' as import32;
import '../../model/model.dart' as import33;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import34;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import35;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import36;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import37;
import 'package:angular_components/utils/browser/window/module.dart' as import38;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import39;
import 'package:angular_components/utils/disposer/disposer.dart' as import40;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import41;
import 'package:angular/src/core/linker/component_loader.dart' as import42;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import43;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import44;
import 'package:angular_components/laminate/overlay/module.dart' as import45;
import 'package:angular_router/src/router/router.dart' as import46;

final List<dynamic> styles$ViewDocumentListComponent = ['.scrollable._ngcontent-%ID%{height:90vh;overflow:auto}.toolbar._ngcontent-%ID%{bottom:0;margin-left:25%;margin-right:auto;position:fixed}.list._ngcontent-%ID%{margin-left:10%;font-size:20px;font-weight:bold;list-style-type:none;margin:20;padding:10}'];

class ViewViewDocumentListComponent0 extends AppView<import1.ViewDocumentListComponent> {
  ViewContainer _appEl_2;
  import3.NgFor _NgFor_2_9;
  import4.ViewMaterialButtonComponent0 _compView_4;
  dynamic _AcxDarkTheme_4_5;
  import5.MaterialButtonComponent _MaterialButtonComponent_4_6;
  import6.ViewMaterialIconComponent0 _compView_6;
  import7.MaterialIconComponent _MaterialIconComponent_6_5;
  import4.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import5.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import6.ViewMaterialIconComponent0 _compView_9;
  import7.MaterialIconComponent _MaterialIconComponent_9_5;
  import8.ViewModalComponent0 _compView_10;
  import9.ModalComponent _ModalComponent_10_5;
  import10.ViewMaterialDialogComponent0 _compView_11;
  import11.AutoDismissDirective _AutoDismissDirective_11_5;
  import12.MaterialDialogComponent _MaterialDialogComponent_11_6;
  import13.NgForm _NgForm_12_5;
  ViewContainer _appEl_24;
  NgIf _NgIf_24_9;
  import4.ViewMaterialButtonComponent0 _compView_26;
  dynamic _AcxDarkTheme_26_5;
  import5.MaterialButtonComponent _MaterialButtonComponent_26_6;
  import4.ViewMaterialButtonComponent0 _compView_28;
  dynamic _AcxDarkTheme_28_5;
  import5.MaterialButtonComponent _MaterialButtonComponent_28_6;
  var _expr_0;
  bool _expr_1;
  bool _expr_6;
  bool _expr_7;
  bool _expr_9;
  import15.InputElement _el_20;
  static RenderComponentType _renderType;
  ViewViewDocumentListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import17.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import15.document.createElement('view-document-list');
    _renderType ??= import19.appViewUtils.createRenderType((import20.isDevMode ? 'asset:Internal_lore/lib/src/view/view_document_list/view_document_list_component.dart' : null), ViewEncapsulation.Emulated, styles$ViewDocumentListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ViewDocumentListComponent> build() {
    final _rootEl = rootEl;
    final import15.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import15.document;
    final _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'scrollable';
    addShimC(_el_0);
    final _el_1 = createAndAppend(doc, 'ul', _el_0);
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_ViewDocumentListComponent1);
    _NgFor_2_9 = import3.NgFor(_appEl_2, _TemplateRef_2_8);
    final _el_3 = createDivAndAppend(doc, parentRenderNode);
    _el_3.className = 'toolbar';
    addShimC(_el_3);
    _compView_4 = import4.ViewMaterialButtonComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    createAttr(_el_4, 'raised', '');
    addShimC(_el_4);
    _AcxDarkTheme_4_5 = (import20.isDevMode
        ? import23.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import24.AcxDarkTheme(parentView.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_4_6 = import5.MaterialButtonComponent(_el_4, _AcxDarkTheme_4_5, _compView_4.ref, null);
    final _text_5 = import15.Text('New Document');
    _compView_6 = import6.ViewMaterialIconComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    createAttr(_el_6, 'icon', 'note_add');
    createAttr(_el_6, 'size', 'large');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import7.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_5, []);
    _compView_4.create(_MaterialButtonComponent_4_6, [
      [_text_5, _el_6]
    ]);
    _compView_7 = import4.ViewMaterialButtonComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_3.append(_el_7);
    createAttr(_el_7, 'raised', '');
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = (import20.isDevMode
        ? import23.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import24.AcxDarkTheme(parentView.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_7_6 = import5.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7.ref, null);
    final _text_8 = import15.Text('Reload');
    _compView_9 = import6.ViewMaterialIconComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    createAttr(_el_9, 'icon', 'autorenew');
    createAttr(_el_9, 'size', 'large');
    addShimC(_el_9);
    _MaterialIconComponent_9_5 = import7.MaterialIconComponent(_el_9);
    _compView_9.create(_MaterialIconComponent_9_5, []);
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_text_8, _el_9]
    ]);
    _compView_10 = import8.ViewModalComponent0(this, 10);
    final _el_10 = _compView_10.rootEl;
    parentRenderNode.append(_el_10);
    addShimC(_el_10);
    _ModalComponent_10_5 = (import20.isDevMode
        ? import23.debugInjectorWrap(import9.ModalComponent, () {
            return import9.ModalComponent(parentView.injectorGet(import26.OverlayService, viewData.parentIndex), _el_10, parentView.injectorGet(import27.DomService, viewData.parentIndex), parentView.injectorGet(import9.Modal, viewData.parentIndex, null), parentView.injectorGet(import9.GlobalModalStack, viewData.parentIndex, null));
          })
        : import9.ModalComponent(parentView.injectorGet(import26.OverlayService, viewData.parentIndex), _el_10, parentView.injectorGet(import27.DomService, viewData.parentIndex), parentView.injectorGet(import9.Modal, viewData.parentIndex, null), parentView.injectorGet(import9.GlobalModalStack, viewData.parentIndex, null)));
    _compView_11 = import10.ViewMaterialDialogComponent0(this, 11);
    final _el_11 = _compView_11.rootEl;
    _el_11.className = 'basic-dialog';
    addShimC(_el_11);
    _AutoDismissDirective_11_5 = (import20.isDevMode
        ? import23.debugInjectorWrap(import11.AutoDismissDirective, () {
            return import11.AutoDismissDirective(_el_11, parentView.injectorGet(import28.NgZone, viewData.parentIndex));
          })
        : import11.AutoDismissDirective(_el_11, parentView.injectorGet(import28.NgZone, viewData.parentIndex)));
    _MaterialDialogComponent_11_6 = (import20.isDevMode
        ? import23.debugInjectorWrap(import12.MaterialDialogComponent, () {
            return import12.MaterialDialogComponent(_el_11, parentView.injectorGet(import27.DomService, viewData.parentIndex), _compView_11.ref, _ModalComponent_10_5);
          })
        : import12.MaterialDialogComponent(_el_11, parentView.injectorGet(import27.DomService, viewData.parentIndex), _compView_11.ref, _ModalComponent_10_5));
    final _el_12 = doc.createElement('form');
    addShimC(_el_12);
    _NgForm_12_5 = import13.NgForm(null);
    final _el_13 = createAndAppend(doc, 'h1', _el_12);
    createAttr(_el_13, 'header', '');
    addShimE(_el_13);
    final _text_14 = import15.Text('Create new document');
    _el_13.append(_text_14);
    final _el_15 = createAndAppend(doc, 'label', _el_12);
    addShimE(_el_15);
    final _text_16 = import15.Text('Name of the new document:');
    _el_15.append(_text_16);
    final _text_17 = import15.Text(' ');
    _el_12.append(_text_17);
    final _el_18 = createAndAppend(doc, 'br', _el_12);
    addShimE(_el_18);
    final _text_19 = import15.Text(' ');
    _el_12.append(_text_19);
    _el_20 = createAndAppend(doc, 'input', _el_12);
    createAttr(_el_20, 'autofocus', '');
    createAttr(_el_20, 'type', 'text');
    addShimC(_el_20);
    final _text_21 = import15.Text(' ');
    _el_12.append(_text_21);
    final _el_22 = createAndAppend(doc, 'br', _el_12);
    addShimE(_el_22);
    final _text_23 = import15.Text(' ');
    _el_12.append(_text_23);
    final _anchor_24 = createViewContainerAnchor();
    _el_12.append(_anchor_24);
    _appEl_24 = ViewContainer(24, 12, this, _anchor_24);
    TemplateRef _TemplateRef_24_8 = TemplateRef(_appEl_24, viewFactory_ViewDocumentListComponent2);
    _NgIf_24_9 = NgIf(_appEl_24, _TemplateRef_24_8);
    final _el_25 = createDivAndAppend(doc, _el_12);
    createAttr(_el_25, 'footer', '');
    addShimC(_el_25);
    _compView_26 = import4.ViewMaterialButtonComponent0(this, 26);
    final _el_26 = _compView_26.rootEl;
    _el_25.append(_el_26);
    createAttr(_el_26, 'clear-size', '');
    addShimC(_el_26);
    _AcxDarkTheme_26_5 = (import20.isDevMode
        ? import23.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import24.AcxDarkTheme(parentView.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_26_6 = import5.MaterialButtonComponent(_el_26, _AcxDarkTheme_26_5, _compView_26.ref, null);
    final _text_27 = import15.Text('Close');
    _compView_26.create(_MaterialButtonComponent_26_6, [
      [_text_27]
    ]);
    _compView_28 = import4.ViewMaterialButtonComponent0(this, 28);
    final _el_28 = _compView_28.rootEl;
    _el_25.append(_el_28);
    createAttr(_el_28, 'clear-size', '');
    createAttr(_el_28, 'type', 'submit');
    addShimC(_el_28);
    _AcxDarkTheme_28_5 = (import20.isDevMode
        ? import23.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import24.AcxDarkTheme(parentView.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_28_6 = import5.MaterialButtonComponent(_el_28, _AcxDarkTheme_28_5, _compView_28.ref, null);
    final _text_29 = import15.Text('Submit');
    _compView_28.create(_MaterialButtonComponent_28_6, [
      [_text_29]
    ]);
    _compView_11.create(_MaterialDialogComponent_11_6, [
      const [],
      [_el_12],
      const []
    ]);
    _compView_10.create(_ModalComponent_10_5, [
      [_el_11]
    ]);
    final subscription_0 = _MaterialButtonComponent_4_6.trigger.listen(eventHandler1(_handle_trigger_4_0));
    final subscription_1 = _MaterialButtonComponent_7_6.trigger.listen(eventHandler0(ctx.reload));
    final subscription_2 = _AutoDismissDirective_11_5.dismiss.listen(eventHandler0(ctx.close));
    import19.appViewUtils.eventManager.addEventListener(_el_12, 'submit', eventHandler1(_NgForm_12_5.onSubmit));
    _el_12.addEventListener('reset', eventHandler1(_NgForm_12_5.onReset));
    final subscription_3 = _NgForm_12_5.ngSubmit.listen(eventHandler1(_handle_ngSubmit_12_0));
    _el_20.addEventListener('keyup', eventHandler1(_handle_keyup_20_0));
    final subscription_4 = _MaterialButtonComponent_26_6.trigger.listen(eventHandler0(ctx.close));
    final subscription_5 = _MaterialButtonComponent_28_6.trigger.listen(eventHandler1(_handle_trigger_28_0));
    ctx.newDocumentName = _el_20;
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import24.AcxDarkTheme) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _AcxDarkTheme_4_5;
    }
    if ((((identical(token, import5.MaterialButtonComponent) || identical(token, import29.ButtonDirective)) || identical(token, import30.HasDisabled)) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialButtonComponent_4_6;
    }
    if ((identical(token, import24.AcxDarkTheme) && ((7 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _AcxDarkTheme_7_5;
    }
    if ((((identical(token, import5.MaterialButtonComponent) || identical(token, import29.ButtonDirective)) || identical(token, import30.HasDisabled)) && ((7 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _MaterialButtonComponent_7_6;
    }
    if ((identical(token, import24.AcxDarkTheme) && ((26 <= nodeIndex) && (nodeIndex <= 27)))) {
      return _AcxDarkTheme_26_5;
    }
    if ((((identical(token, import5.MaterialButtonComponent) || identical(token, import29.ButtonDirective)) || identical(token, import30.HasDisabled)) && ((26 <= nodeIndex) && (nodeIndex <= 27)))) {
      return _MaterialButtonComponent_26_6;
    }
    if ((identical(token, import24.AcxDarkTheme) && ((28 <= nodeIndex) && (nodeIndex <= 29)))) {
      return _AcxDarkTheme_28_5;
    }
    if ((((identical(token, import5.MaterialButtonComponent) || identical(token, import29.ButtonDirective)) || identical(token, import30.HasDisabled)) && ((28 <= nodeIndex) && (nodeIndex <= 29)))) {
      return _MaterialButtonComponent_28_6;
    }
    if (((identical(token, import13.NgForm) || identical(token, import31.ControlContainer)) && ((12 <= nodeIndex) && (nodeIndex <= 29)))) {
      return _NgForm_12_5;
    }
    if ((((identical(token, import9.ModalComponent) || identical(token, import32.DeferredContentAware)) || identical(token, import9.Modal)) && ((10 <= nodeIndex) && (nodeIndex <= 29)))) {
      return _ModalComponent_10_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_name = _el_20;
    final currVal_0 = _ctx.model.documentList;
    if (import19.checkBinding(_expr_0, currVal_0)) {
      _NgFor_2_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import19.AppViewUtils.throwOnChanges) {
      _NgFor_2_9.ngDoCheck();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_4_6.raised = true;
      changed = true;
    }
    final currVal_1 = _ctx.showDialog;
    if (import19.checkBinding(_expr_1, currVal_1)) {
      _MaterialButtonComponent_4_6.disabled = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import19.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_4_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'note_add';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_7_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    if ((!import19.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_7_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_9_5.icon = 'autorenew';
      changed = true;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    final currVal_6 = _ctx.showDialog;
    if (import19.checkBinding(_expr_6, currVal_6)) {
      _ModalComponent_10_5.visible = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.showDialog;
    if (import19.checkBinding(_expr_7, currVal_7)) {
      _AutoDismissDirective_11_5.autoDismissable = currVal_7;
      _expr_7 = currVal_7;
    }
    changed = false;
    if (changed) {
      _compView_11.markAsCheckOnce();
    }
    _NgIf_24_9.ngIf = _ctx.showError;
    changed = false;
    if (changed) {
      _compView_26.markAsCheckOnce();
    }
    if ((!import19.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_26_6.ngOnInit();
    }
    changed = false;
    final currVal_9 = (local_name.value == '');
    if (import19.checkBinding(_expr_9, currVal_9)) {
      _MaterialButtonComponent_28_6.disabled = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_28.markAsCheckOnce();
    }
    if ((!import19.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_28_6.ngOnInit();
    }
    _appEl_2.detectChangesInNestedViews();
    _appEl_24.detectChangesInNestedViews();
    if (!import19.AppViewUtils.throwOnChanges) {
      _MaterialDialogComponent_11_6.ngAfterContentChecked();
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_7.detectHostChanges(firstCheck);
    _compView_10.detectHostChanges(firstCheck);
    _compView_26.detectHostChanges(firstCheck);
    _compView_28.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    _compView_7.detectChanges();
    _compView_9.detectChanges();
    _compView_10.detectChanges();
    _compView_11.detectChanges();
    _compView_26.detectChanges();
    _compView_28.detectChanges();
    if (!import19.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _ModalComponent_10_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_24.destroyNestedViews();
    _compView_4.destroy();
    _compView_6.destroy();
    _compView_7.destroy();
    _compView_9.destroy();
    _compView_10.destroy();
    _compView_11.destroy();
    _compView_26.destroy();
    _compView_28.destroy();
    _MaterialDialogComponent_11_6.ngOnDestroy();
    _ModalComponent_10_5.ngOnDestroy();
  }

  void _handle_trigger_4_0($event) {
    ctx.showDialog = true;
  }

  void _handle_ngSubmit_12_0($event) {
    final local_name = _el_20;
    ctx.onSubmit(local_name.value);
  }

  void _handle_keyup_20_0($event) {
    0;
  }

  void _handle_trigger_28_0($event) {
    final local_name = _el_20;
    ctx.onSubmit(local_name.value);
  }
}

AppView<import1.ViewDocumentListComponent> viewFactory_ViewDocumentListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewViewDocumentListComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.ViewDocumentListComponent> _ViewDocumentListComponentNgFactory = const ComponentFactory('view-document-list', viewFactory_ViewDocumentListComponentHost0);
ComponentFactory<import1.ViewDocumentListComponent> get ViewDocumentListComponentNgFactory {
  return _ViewDocumentListComponentNgFactory;
}

class _ViewViewDocumentListComponent1 extends AppView<import1.ViewDocumentListComponent> {
  import6.ViewMaterialIconComponent0 _compView_1;
  import7.MaterialIconComponent _MaterialIconComponent_1_5;
  var _expr_1;
  import15.Text _text_2;
  _ViewViewDocumentListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import17.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentListComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentListComponent> build() {
    var doc = import15.document;
    final _el_0 = doc.createElement('li');
    _el_0.className = 'list';
    addShimE(_el_0);
    _compView_1 = import6.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'icon', 'label_important');
    createAttr(_el_1, 'size', 'large');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import7.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    _text_2 = import15.Text('');
    _el_0.append(_text_2);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_document = import20.unsafeCast<import33.Document>(locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'label_important';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_1 = import19.interpolate0(local_document.name);
    if (import19.checkBinding(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroy();
  }

  void _handle_click_0_0($event) {
    final local_document = import20.unsafeCast<import33.Document>(locals['\$implicit']);
    ctx.viewDocument(local_document.id);
  }
}

AppView<import1.ViewDocumentListComponent> viewFactory_ViewDocumentListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentListComponent1(parentView, parentIndex);
}

class _ViewViewDocumentListComponent2 extends AppView<import1.ViewDocumentListComponent> {
  _ViewViewDocumentListComponent2(AppView<dynamic> parentView, int parentIndex) : super(import17.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentListComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentListComponent> build() {
    var doc = import15.document;
    final _el_0 = doc.createElement('small');
    createAttr(_el_0, 'style', 'color: red');
    addShimE(_el_0);
    final _text_1 = import15.Text('Name is already taken');
    _el_0.append(_text_1);
    init0(_el_0);
  }
}

AppView<import1.ViewDocumentListComponent> viewFactory_ViewDocumentListComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentListComponent2(parentView, parentIndex);
}

final List<dynamic> styles$ViewDocumentListComponentHost = const [];

class _ViewViewDocumentListComponentHost0 extends AppView<import1.ViewDocumentListComponent> {
  ViewViewDocumentListComponent0 _compView_0;
  import1.ViewDocumentListComponent _ViewDocumentListComponent_0_5;
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  dynamic __AcxImperativeViewUtils_0_9;
  import34.DomRuler __DomRuler_0_10;
  dynamic __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import35.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import36.ZIndexer __ZIndexer_0_18;
  import37.OverlayDomRenderService __OverlayDomRenderService_0_19;
  dynamic __OverlayService_0_20;
  _ViewViewDocumentListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import17.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import38.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((__Window_0_7 == null)) {
      (__Window_0_7 = import38.getWindow());
    }
    return __Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((__DomService_0_8 == null)) {
      (__DomService_0_8 = (import20.isDevMode
          ? import23.debugInjectorWrap(import27.DomService, () {
              return import39.createDomService(this.injectorGet(import27.DomService, viewData.parentIndex, null), this.injectorGet(import40.Disposer, viewData.parentIndex, null), this.injectorGet(import28.NgZone, viewData.parentIndex), _Window_0_7);
            })
          : import39.createDomService(this.injectorGet(import27.DomService, viewData.parentIndex, null), this.injectorGet(import40.Disposer, viewData.parentIndex, null), this.injectorGet(import28.NgZone, viewData.parentIndex), _Window_0_7)));
    }
    return __DomService_0_8;
  }

  dynamic get _AcxImperativeViewUtils_0_9 {
    if ((__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = (import20.isDevMode
          ? import23.debugInjectorWrap(import41.AcxImperativeViewUtils, () {
              return import41.AcxImperativeViewUtils(this.injectorGet(import42.ComponentLoader, viewData.parentIndex), _DomService_0_8);
            })
          : import41.AcxImperativeViewUtils(this.injectorGet(import42.ComponentLoader, viewData.parentIndex), _DomService_0_8)));
    }
    return __AcxImperativeViewUtils_0_9;
  }

  import34.DomRuler get _DomRuler_0_10 {
    if ((__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import34.DomRuler(_Document_0_6, _DomService_0_8));
    }
    return __DomRuler_0_10;
  }

  dynamic get _ManagedZone_0_11 {
    if ((__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = (import20.isDevMode
          ? import23.debugInjectorWrap(import43.ManagedZone, () {
              return import44.Angular2ManagedZone(this.injectorGet(import28.NgZone, viewData.parentIndex));
            })
          : import44.Angular2ManagedZone(this.injectorGet(import28.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = (import20.isDevMode
          ? import23.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import45.getDefaultContainerName(this.injectorGet(const import25.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null));
            })
          : import45.getDefaultContainerName(this.injectorGet(const import25.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null))));
    }
    return __overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = (import20.isDevMode
          ? import23.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import45.getOverlayContainerParent(_Document_0_6, this.injectorGet(const import25.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null));
            })
          : import45.getOverlayContainerParent(_Document_0_6, this.injectorGet(const import25.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null))));
    }
    return __overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = (import20.isDevMode
          ? import23.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainer'), () {
              return import45.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, this.injectorGet(const import25.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null));
            })
          : import45.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, this.injectorGet(const import25.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null))));
    }
    return __overlayContainer_0_14;
  }

  bool get _overlaySyncDom_0_15 {
    if ((__overlaySyncDom_0_15 == null)) {
      (__overlaySyncDom_0_15 = true);
    }
    return __overlaySyncDom_0_15;
  }

  bool get _overlayRepositionLoop_0_16 {
    if ((__overlayRepositionLoop_0_16 == null)) {
      (__overlayRepositionLoop_0_16 = true);
    }
    return __overlayRepositionLoop_0_16;
  }

  import35.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import35.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_17;
  }

  import36.ZIndexer get _ZIndexer_0_18 {
    if ((__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import36.ZIndexer());
    }
    return __ZIndexer_0_18;
  }

  import37.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import37.OverlayDomRenderService(_OverlayStyleConfig_0_17, _overlayContainer_0_14, _overlayContainerName_0_12, _DomRuler_0_10, _DomService_0_8, _AcxImperativeViewUtils_0_9, _overlaySyncDom_0_15, _overlayRepositionLoop_0_16, _ZIndexer_0_18));
    }
    return __OverlayDomRenderService_0_19;
  }

  dynamic get _OverlayService_0_20 {
    if ((__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = (import20.isDevMode
          ? import23.debugInjectorWrap(import26.OverlayService, () {
              return import26.OverlayService(this.injectorGet(import28.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, this.injectorGet(import26.OverlayService, viewData.parentIndex, null));
            })
          : import26.OverlayService(this.injectorGet(import28.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, this.injectorGet(import26.OverlayService, viewData.parentIndex, null))));
    }
    return __OverlayService_0_20;
  }

  @override
  ComponentRef<import1.ViewDocumentListComponent> build() {
    _compView_0 = ViewViewDocumentListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ViewDocumentListComponent_0_5 = (import20.isDevMode
        ? import23.debugInjectorWrap(import1.ViewDocumentListComponent, () {
            return import1.ViewDocumentListComponent(this.injectorGet(import33.Model, viewData.parentIndex), this.injectorGet(import46.Router, viewData.parentIndex));
          })
        : import1.ViewDocumentListComponent(this.injectorGet(import33.Model, viewData.parentIndex), this.injectorGet(import46.Router, viewData.parentIndex)));
    _compView_0.create(_ViewDocumentListComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _ViewDocumentListComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import15.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import27.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import41.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import34.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import43.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import25.OpaqueToken<dynamic>('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import25.OpaqueToken<dynamic>('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import25.OpaqueToken<dynamic>('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import25.OpaqueToken<dynamic>('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import25.OpaqueToken<dynamic>('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import35.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import36.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import37.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import26.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import1.ViewDocumentListComponent> viewFactory_ViewDocumentListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentListComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ViewDocumentListComponent, ViewDocumentListComponentNgFactory);
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
}
