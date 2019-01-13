// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'view_document_component.dart';
export 'view_document_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:Internal_lore/src/model/model.template.dart' as _ref0;
import 'package:Internal_lore/src/routes.template.dart' as _ref1;
import 'package:Internal_lore/src/view/view_document/time_pipe.template.dart' as _ref2;
import 'package:Internal_lore/src/view/view_document/view_snippet/view_snippet_component.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'package:angular_components/auto_dismiss/auto_dismiss.template.dart' as _ref5;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref6;
import 'package:angular_components/laminate/overlay/module.template.dart' as _ref7;
import 'package:angular_components/material_button/material_button.template.dart' as _ref8;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as _ref9;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref10;
import 'package:angular_forms/angular_forms.template.dart' as _ref11;
import 'package:angular_router/angular_router.template.dart' as _ref12;
import 'package:angular/src/core/linker/app_view.dart';
import 'view_document_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_components/laminate/components/modal/modal.template.dart' as import4;
import 'package:angular_components/laminate/components/modal/modal.dart' as import5;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import6;
import 'package:angular_components/auto_dismiss/auto_dismiss.dart' as import7;
import 'package:angular_components/material_dialog/material_dialog.dart' as import8;
import 'package:angular_components/material_button/material_button.template.dart' as import9;
import 'package:angular_components/material_button/material_button.dart' as import10;
import 'package:angular_components/material_icon/material_icon.template.dart' as import11;
import 'package:angular_components/material_icon/material_icon.dart' as import12;
import 'time_pipe.dart' as import13;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import17;
import 'package:angular/src/core/linker/app_view_utils.dart' as import18;
import 'package:angular/src/runtime.dart' as import19;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import22;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import23;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import24;
import 'package:angular/src/core/zone/ng_zone.dart' as import25;
import 'package:angular_components/theme/dark_theme.dart' as import26;
import 'package:angular/src/core/di/opaque_token.dart' as import27;
import 'package:angular_components/button_decorator/button_decorator.dart' as import28;
import 'package:angular_components/interfaces/has_disabled.dart' as import29;
import 'package:angular_components/content/deferred_content_aware.dart' as import30;
import 'package:angular/src/common/directives/ng_for.dart' as import31;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import32;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import33;
import 'package:angular_forms/src/directives/ng_model.dart' as import34;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import35;
import 'package:angular_forms/src/directives/ng_control.dart' as import36;
import 'dart:core';
import 'view_snippet/view_snippet_component.template.dart' as import38;
import 'view_snippet/view_snippet_component.dart' as import39;
import '../../model/model.dart' as import40;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import41;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import42;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import43;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import44;
import 'package:angular_components/utils/browser/window/module.dart' as import45;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import46;
import 'package:angular_components/utils/disposer/disposer.dart' as import47;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import48;
import 'package:angular/src/core/linker/component_loader.dart' as import49;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import50;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import51;
import 'package:angular_components/laminate/overlay/module.dart' as import52;
import 'package:angular_router/src/router/router.dart' as import53;

final List<dynamic> styles$ViewDocumentComponent = ['.scrollable._ngcontent-%ID%{top:8vh;position:fixed;height:82vh;overflow:auto}.header-bar._ngcontent-%ID%{height:7.5vh;width:98vw;position:fixed}.title._ngcontent-%ID%{float:left;overflow:auto}.lock-duration._ngcontent-%ID%{float:right}.toolbar._ngcontent-%ID%{bottom:0;margin-left:20%;margin-right:20%;position:fixed}.toolbar._ngcontent-%ID% div._ngcontent-%ID%{display:contents}'];

class ViewViewDocumentComponent0 extends AppView<import1.ViewDocumentComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  import4.ViewModalComponent0 _compView_7;
  import5.ModalComponent _ModalComponent_7_5;
  import6.ViewMaterialDialogComponent0 _compView_8;
  import7.AutoDismissDirective _AutoDismissDirective_8_5;
  import8.MaterialDialogComponent _MaterialDialogComponent_8_6;
  import9.ViewMaterialButtonComponent0 _compView_13;
  dynamic _AcxDarkTheme_13_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_13_6;
  import11.ViewMaterialIconComponent0 _compView_15;
  import12.MaterialIconComponent _MaterialIconComponent_15_5;
  import9.ViewMaterialButtonComponent0 _compView_16;
  dynamic _AcxDarkTheme_16_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_16_6;
  import11.ViewMaterialIconComponent0 _compView_18;
  import12.MaterialIconComponent _MaterialIconComponent_18_5;
  import9.ViewMaterialButtonComponent0 _compView_19;
  dynamic _AcxDarkTheme_19_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_19_6;
  import11.ViewMaterialIconComponent0 _compView_21;
  import12.MaterialIconComponent _MaterialIconComponent_21_5;
  import4.ViewModalComponent0 _compView_22;
  import5.ModalComponent _ModalComponent_22_5;
  import6.ViewMaterialDialogComponent0 _compView_23;
  import7.AutoDismissDirective _AutoDismissDirective_23_5;
  import8.MaterialDialogComponent _MaterialDialogComponent_23_6;
  import9.ViewMaterialButtonComponent0 _compView_28;
  dynamic _AcxDarkTheme_28_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_28_6;
  import11.ViewMaterialIconComponent0 _compView_30;
  import12.MaterialIconComponent _MaterialIconComponent_30_5;
  import9.ViewMaterialButtonComponent0 _compView_31;
  dynamic _AcxDarkTheme_31_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_31_6;
  import11.ViewMaterialIconComponent0 _compView_33;
  import12.MaterialIconComponent _MaterialIconComponent_33_5;
  import4.ViewModalComponent0 _compView_34;
  import5.ModalComponent _ModalComponent_34_5;
  import6.ViewMaterialDialogComponent0 _compView_35;
  import7.AutoDismissDirective _AutoDismissDirective_35_5;
  import8.MaterialDialogComponent _MaterialDialogComponent_35_6;
  import9.ViewMaterialButtonComponent0 _compView_40;
  dynamic _AcxDarkTheme_40_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_40_6;
  import11.ViewMaterialIconComponent0 _compView_42;
  import12.MaterialIconComponent _MaterialIconComponent_42_5;
  import9.ViewMaterialButtonComponent0 _compView_43;
  dynamic _AcxDarkTheme_43_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_43_6;
  import11.ViewMaterialIconComponent0 _compView_45;
  import12.MaterialIconComponent _MaterialIconComponent_45_5;
  import4.ViewModalComponent0 _compView_46;
  import5.ModalComponent _ModalComponent_46_5;
  import6.ViewMaterialDialogComponent0 _compView_47;
  import7.AutoDismissDirective _AutoDismissDirective_47_5;
  import8.MaterialDialogComponent _MaterialDialogComponent_47_6;
  import9.ViewMaterialButtonComponent0 _compView_54;
  dynamic _AcxDarkTheme_54_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_54_6;
  import11.ViewMaterialIconComponent0 _compView_55;
  import12.MaterialIconComponent _MaterialIconComponent_55_5;
  import4.ViewModalComponent0 _compView_56;
  import5.ModalComponent _ModalComponent_56_5;
  import6.ViewMaterialDialogComponent0 _compView_57;
  import7.AutoDismissDirective _AutoDismissDirective_57_5;
  import8.MaterialDialogComponent _MaterialDialogComponent_57_6;
  import9.ViewMaterialButtonComponent0 _compView_67;
  dynamic _AcxDarkTheme_67_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_67_6;
  import11.ViewMaterialIconComponent0 _compView_68;
  import12.MaterialIconComponent _MaterialIconComponent_68_5;
  import4.ViewModalComponent0 _compView_69;
  import5.ModalComponent _ModalComponent_69_5;
  import6.ViewMaterialDialogComponent0 _compView_70;
  import7.AutoDismissDirective _AutoDismissDirective_70_5;
  import8.MaterialDialogComponent _MaterialDialogComponent_70_6;
  import9.ViewMaterialButtonComponent0 _compView_77;
  dynamic _AcxDarkTheme_77_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_77_6;
  import11.ViewMaterialIconComponent0 _compView_78;
  import12.MaterialIconComponent _MaterialIconComponent_78_5;
  bool _expr_5;
  bool _expr_6;
  bool _expr_7;
  bool _expr_11;
  bool _expr_12;
  bool _expr_15;
  bool _expr_16;
  bool _expr_17;
  bool _expr_20;
  bool _expr_21;
  bool _expr_23;
  bool _expr_24;
  bool _expr_26;
  bool _expr_27;
  import13.TimePipe _pipe_time_0;
  static RenderComponentType _renderType;
  ViewViewDocumentComponent0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import17.document.createElement('view-document');
    _renderType ??= import18.appViewUtils.createRenderType((import19.isDevMode ? 'asset:Internal_lore/lib/src/view/view_document/view_document_component.dart' : null), ViewEncapsulation.Emulated, styles$ViewDocumentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    final _rootEl = rootEl;
    final import17.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_ViewDocumentComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    var doc = import17.document;
    final _el_1 = createDivAndAppend(doc, parentRenderNode);
    _el_1.className = 'toolbar';
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_ViewDocumentComponent8);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = createViewContainerAnchor();
    _el_1.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_ViewDocumentComponent9);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _el_4 = createDivAndAppend(doc, _el_1);
    addShimC(_el_4);
    final _anchor_5 = createViewContainerAnchor();
    _el_4.append(_anchor_5);
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_ViewDocumentComponent10);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _anchor_6 = createViewContainerAnchor();
    _el_4.append(_anchor_6);
    _appEl_6 = ViewContainer(6, 4, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_ViewDocumentComponent11);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    _compView_7 = import4.ViewModalComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    parentRenderNode.append(_el_7);
    createAttr(_el_7, 'headered', '');
    addShimC(_el_7);
    _ModalComponent_7_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import5.ModalComponent, () {
            return import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_7, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null));
          })
        : import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_7, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null)));
    _compView_8 = import6.ViewMaterialDialogComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    _el_8.className = 'basic-dialog';
    addShimC(_el_8);
    _AutoDismissDirective_8_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import7.AutoDismissDirective, () {
            return import7.AutoDismissDirective(_el_8, parentView.injectorGet(import25.NgZone, viewData.parentIndex));
          })
        : import7.AutoDismissDirective(_el_8, parentView.injectorGet(import25.NgZone, viewData.parentIndex)));
    _MaterialDialogComponent_8_6 = (import19.isDevMode
        ? import22.debugInjectorWrap(import8.MaterialDialogComponent, () {
            return import8.MaterialDialogComponent(_el_8, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_8.ref, _ModalComponent_7_5);
          })
        : import8.MaterialDialogComponent(_el_8, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_8.ref, _ModalComponent_7_5));
    final _el_9 = doc.createElement('div');
    createAttr(_el_9, 'header', '');
    addShimC(_el_9);
    final _el_10 = createAndAppend(doc, 'h1', _el_9);
    addShimE(_el_10);
    final _text_11 = import17.Text('Do you wish to save changes');
    _el_10.append(_text_11);
    final _el_12 = doc.createElement('div');
    createAttr(_el_12, 'footer', '');
    addShimC(_el_12);
    _compView_13 = import9.ViewMaterialButtonComponent0(this, 13);
    final _el_13 = _compView_13.rootEl;
    _el_12.append(_el_13);
    createAttr(_el_13, 'clear-size', '');
    addShimC(_el_13);
    _AcxDarkTheme_13_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_13_6 = import10.MaterialButtonComponent(_el_13, _AcxDarkTheme_13_5, _compView_13.ref, null);
    final _text_14 = import17.Text('Save Changes And Stop Editing');
    _compView_15 = import11.ViewMaterialIconComponent0(this, 15);
    final _el_15 = _compView_15.rootEl;
    createAttr(_el_15, 'icon', 'save');
    createAttr(_el_15, 'size', 'large');
    addShimC(_el_15);
    _MaterialIconComponent_15_5 = import12.MaterialIconComponent(_el_15);
    _compView_15.create(_MaterialIconComponent_15_5, []);
    _compView_13.create(_MaterialButtonComponent_13_6, [
      [_text_14, _el_15]
    ]);
    _compView_16 = import9.ViewMaterialButtonComponent0(this, 16);
    final _el_16 = _compView_16.rootEl;
    _el_12.append(_el_16);
    createAttr(_el_16, 'clear-size', '');
    addShimC(_el_16);
    _AcxDarkTheme_16_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_16_6 = import10.MaterialButtonComponent(_el_16, _AcxDarkTheme_16_5, _compView_16.ref, null);
    final _text_17 = import17.Text('Trash Changes And Stop Editing');
    _compView_18 = import11.ViewMaterialIconComponent0(this, 18);
    final _el_18 = _compView_18.rootEl;
    createAttr(_el_18, 'icon', 'delete_forever');
    createAttr(_el_18, 'size', 'large');
    addShimC(_el_18);
    _MaterialIconComponent_18_5 = import12.MaterialIconComponent(_el_18);
    _compView_18.create(_MaterialIconComponent_18_5, []);
    _compView_16.create(_MaterialButtonComponent_16_6, [
      [_text_17, _el_18]
    ]);
    _compView_19 = import9.ViewMaterialButtonComponent0(this, 19);
    final _el_19 = _compView_19.rootEl;
    _el_12.append(_el_19);
    createAttr(_el_19, 'clear-size', '');
    addShimC(_el_19);
    _AcxDarkTheme_19_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_19_6 = import10.MaterialButtonComponent(_el_19, _AcxDarkTheme_19_5, _compView_19.ref, null);
    final _text_20 = import17.Text('Cancel');
    _compView_21 = import11.ViewMaterialIconComponent0(this, 21);
    final _el_21 = _compView_21.rootEl;
    createAttr(_el_21, 'icon', 'clear');
    createAttr(_el_21, 'size', 'large');
    addShimC(_el_21);
    _MaterialIconComponent_21_5 = import12.MaterialIconComponent(_el_21);
    _compView_21.create(_MaterialIconComponent_21_5, []);
    _compView_19.create(_MaterialButtonComponent_19_6, [
      [_text_20, _el_21]
    ]);
    _compView_8.create(_MaterialDialogComponent_8_6, [
      [_el_9],
      const [],
      [_el_12]
    ]);
    _compView_7.create(_ModalComponent_7_5, [
      [_el_8]
    ]);
    _compView_22 = import4.ViewModalComponent0(this, 22);
    final _el_22 = _compView_22.rootEl;
    parentRenderNode.append(_el_22);
    createAttr(_el_22, 'headered', '');
    addShimC(_el_22);
    _ModalComponent_22_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import5.ModalComponent, () {
            return import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_22, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null));
          })
        : import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_22, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null)));
    _compView_23 = import6.ViewMaterialDialogComponent0(this, 23);
    final _el_23 = _compView_23.rootEl;
    _el_23.className = 'basic-dialog';
    addShimC(_el_23);
    _AutoDismissDirective_23_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import7.AutoDismissDirective, () {
            return import7.AutoDismissDirective(_el_23, parentView.injectorGet(import25.NgZone, viewData.parentIndex));
          })
        : import7.AutoDismissDirective(_el_23, parentView.injectorGet(import25.NgZone, viewData.parentIndex)));
    _MaterialDialogComponent_23_6 = (import19.isDevMode
        ? import22.debugInjectorWrap(import8.MaterialDialogComponent, () {
            return import8.MaterialDialogComponent(_el_23, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_23.ref, _ModalComponent_22_5);
          })
        : import8.MaterialDialogComponent(_el_23, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_23.ref, _ModalComponent_22_5));
    final _el_24 = doc.createElement('div');
    createAttr(_el_24, 'header', '');
    addShimC(_el_24);
    final _el_25 = createAndAppend(doc, 'h1', _el_24);
    addShimE(_el_25);
    final _text_26 = import17.Text('Do you really wish to remove snippet?');
    _el_25.append(_text_26);
    final _el_27 = doc.createElement('div');
    createAttr(_el_27, 'footer', '');
    addShimC(_el_27);
    _compView_28 = import9.ViewMaterialButtonComponent0(this, 28);
    final _el_28 = _compView_28.rootEl;
    _el_27.append(_el_28);
    createAttr(_el_28, 'clear-size', '');
    addShimC(_el_28);
    _AcxDarkTheme_28_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_28_6 = import10.MaterialButtonComponent(_el_28, _AcxDarkTheme_28_5, _compView_28.ref, null);
    final _text_29 = import17.Text('Remove Snippet');
    _compView_30 = import11.ViewMaterialIconComponent0(this, 30);
    final _el_30 = _compView_30.rootEl;
    createAttr(_el_30, 'icon', 'delete_forever');
    createAttr(_el_30, 'size', 'large');
    addShimC(_el_30);
    _MaterialIconComponent_30_5 = import12.MaterialIconComponent(_el_30);
    _compView_30.create(_MaterialIconComponent_30_5, []);
    _compView_28.create(_MaterialButtonComponent_28_6, [
      [_text_29, _el_30]
    ]);
    _compView_31 = import9.ViewMaterialButtonComponent0(this, 31);
    final _el_31 = _compView_31.rootEl;
    _el_27.append(_el_31);
    createAttr(_el_31, 'clear-size', '');
    addShimC(_el_31);
    _AcxDarkTheme_31_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_31_6 = import10.MaterialButtonComponent(_el_31, _AcxDarkTheme_31_5, _compView_31.ref, null);
    final _text_32 = import17.Text('Cancel');
    _compView_33 = import11.ViewMaterialIconComponent0(this, 33);
    final _el_33 = _compView_33.rootEl;
    createAttr(_el_33, 'icon', 'clear');
    createAttr(_el_33, 'size', 'large');
    addShimC(_el_33);
    _MaterialIconComponent_33_5 = import12.MaterialIconComponent(_el_33);
    _compView_33.create(_MaterialIconComponent_33_5, []);
    _compView_31.create(_MaterialButtonComponent_31_6, [
      [_text_32, _el_33]
    ]);
    _compView_23.create(_MaterialDialogComponent_23_6, [
      [_el_24],
      const [],
      [_el_27]
    ]);
    _compView_22.create(_ModalComponent_22_5, [
      [_el_23]
    ]);
    _compView_34 = import4.ViewModalComponent0(this, 34);
    final _el_34 = _compView_34.rootEl;
    parentRenderNode.append(_el_34);
    createAttr(_el_34, 'headered', '');
    addShimC(_el_34);
    _ModalComponent_34_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import5.ModalComponent, () {
            return import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_34, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null));
          })
        : import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_34, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null)));
    _compView_35 = import6.ViewMaterialDialogComponent0(this, 35);
    final _el_35 = _compView_35.rootEl;
    _el_35.className = 'basic-dialog';
    addShimC(_el_35);
    _AutoDismissDirective_35_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import7.AutoDismissDirective, () {
            return import7.AutoDismissDirective(_el_35, parentView.injectorGet(import25.NgZone, viewData.parentIndex));
          })
        : import7.AutoDismissDirective(_el_35, parentView.injectorGet(import25.NgZone, viewData.parentIndex)));
    _MaterialDialogComponent_35_6 = (import19.isDevMode
        ? import22.debugInjectorWrap(import8.MaterialDialogComponent, () {
            return import8.MaterialDialogComponent(_el_35, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_35.ref, _ModalComponent_34_5);
          })
        : import8.MaterialDialogComponent(_el_35, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_35.ref, _ModalComponent_34_5));
    final _el_36 = doc.createElement('div');
    createAttr(_el_36, 'header', '');
    addShimC(_el_36);
    final _el_37 = createAndAppend(doc, 'h1', _el_36);
    addShimE(_el_37);
    final _text_38 = import17.Text('Do you really wish to delete this snippet?');
    _el_37.append(_text_38);
    final _el_39 = doc.createElement('div');
    createAttr(_el_39, 'footer', '');
    addShimC(_el_39);
    _compView_40 = import9.ViewMaterialButtonComponent0(this, 40);
    final _el_40 = _compView_40.rootEl;
    _el_39.append(_el_40);
    createAttr(_el_40, 'clear-size', '');
    addShimC(_el_40);
    _AcxDarkTheme_40_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_40_6 = import10.MaterialButtonComponent(_el_40, _AcxDarkTheme_40_5, _compView_40.ref, null);
    final _text_41 = import17.Text('Delete Document');
    _compView_42 = import11.ViewMaterialIconComponent0(this, 42);
    final _el_42 = _compView_42.rootEl;
    createAttr(_el_42, 'icon', 'delete_forever');
    createAttr(_el_42, 'size', 'large');
    addShimC(_el_42);
    _MaterialIconComponent_42_5 = import12.MaterialIconComponent(_el_42);
    _compView_42.create(_MaterialIconComponent_42_5, []);
    _compView_40.create(_MaterialButtonComponent_40_6, [
      [_text_41, _el_42]
    ]);
    _compView_43 = import9.ViewMaterialButtonComponent0(this, 43);
    final _el_43 = _compView_43.rootEl;
    _el_39.append(_el_43);
    createAttr(_el_43, 'clear-size', '');
    addShimC(_el_43);
    _AcxDarkTheme_43_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_43_6 = import10.MaterialButtonComponent(_el_43, _AcxDarkTheme_43_5, _compView_43.ref, null);
    final _text_44 = import17.Text('Cancel');
    _compView_45 = import11.ViewMaterialIconComponent0(this, 45);
    final _el_45 = _compView_45.rootEl;
    createAttr(_el_45, 'icon', 'clear');
    createAttr(_el_45, 'size', 'large');
    addShimC(_el_45);
    _MaterialIconComponent_45_5 = import12.MaterialIconComponent(_el_45);
    _compView_45.create(_MaterialIconComponent_45_5, []);
    _compView_43.create(_MaterialButtonComponent_43_6, [
      [_text_44, _el_45]
    ]);
    _compView_35.create(_MaterialDialogComponent_35_6, [
      [_el_36],
      const [],
      [_el_39]
    ]);
    _compView_34.create(_ModalComponent_34_5, [
      [_el_35]
    ]);
    _compView_46 = import4.ViewModalComponent0(this, 46);
    final _el_46 = _compView_46.rootEl;
    parentRenderNode.append(_el_46);
    addShimC(_el_46);
    _ModalComponent_46_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import5.ModalComponent, () {
            return import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_46, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null));
          })
        : import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_46, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null)));
    _compView_47 = import6.ViewMaterialDialogComponent0(this, 47);
    final _el_47 = _compView_47.rootEl;
    _el_47.className = 'basic-dialog';
    createAttr(_el_47, 'headered', '');
    addShimC(_el_47);
    _AutoDismissDirective_47_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import7.AutoDismissDirective, () {
            return import7.AutoDismissDirective(_el_47, parentView.injectorGet(import25.NgZone, viewData.parentIndex));
          })
        : import7.AutoDismissDirective(_el_47, parentView.injectorGet(import25.NgZone, viewData.parentIndex)));
    _MaterialDialogComponent_47_6 = (import19.isDevMode
        ? import22.debugInjectorWrap(import8.MaterialDialogComponent, () {
            return import8.MaterialDialogComponent(_el_47, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_47.ref, _ModalComponent_46_5);
          })
        : import8.MaterialDialogComponent(_el_47, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_47.ref, _ModalComponent_46_5));
    final _el_48 = doc.createElement('div');
    createAttr(_el_48, 'header', '');
    addShimC(_el_48);
    final _el_49 = createAndAppend(doc, 'h1', _el_48);
    addShimE(_el_49);
    final _text_50 = import17.Text('Edit Error');
    _el_49.append(_text_50);
    final _el_51 = doc.createElement('p');
    createAttr(_el_51, 'style', 'color: red');
    addShimE(_el_51);
    final _text_52 = import17.Text('We are sorry. But you cannot edit this document because someone else is already editing it. Try it again later.');
    _el_51.append(_text_52);
    final _el_53 = doc.createElement('div');
    createAttr(_el_53, 'footer', '');
    addShimC(_el_53);
    _compView_54 = import9.ViewMaterialButtonComponent0(this, 54);
    final _el_54 = _compView_54.rootEl;
    _el_53.append(_el_54);
    createAttr(_el_54, 'clear-size', '');
    addShimC(_el_54);
    _AcxDarkTheme_54_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_54_6 = import10.MaterialButtonComponent(_el_54, _AcxDarkTheme_54_5, _compView_54.ref, null);
    _compView_55 = import11.ViewMaterialIconComponent0(this, 55);
    final _el_55 = _compView_55.rootEl;
    createAttr(_el_55, 'icon', 'clear');
    createAttr(_el_55, 'size', 'large');
    addShimC(_el_55);
    _MaterialIconComponent_55_5 = import12.MaterialIconComponent(_el_55);
    _compView_55.create(_MaterialIconComponent_55_5, []);
    _compView_54.create(_MaterialButtonComponent_54_6, [
      [_el_55]
    ]);
    _compView_47.create(_MaterialDialogComponent_47_6, [
      [_el_48],
      [_el_51],
      [_el_53]
    ]);
    _compView_46.create(_ModalComponent_46_5, [
      [_el_47]
    ]);
    _compView_56 = import4.ViewModalComponent0(this, 56);
    final _el_56 = _compView_56.rootEl;
    parentRenderNode.append(_el_56);
    addShimC(_el_56);
    _ModalComponent_56_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import5.ModalComponent, () {
            return import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_56, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null));
          })
        : import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_56, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null)));
    _compView_57 = import6.ViewMaterialDialogComponent0(this, 57);
    final _el_57 = _compView_57.rootEl;
    _el_57.className = 'basic-dialog';
    createAttr(_el_57, 'headered', '');
    addShimC(_el_57);
    _AutoDismissDirective_57_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import7.AutoDismissDirective, () {
            return import7.AutoDismissDirective(_el_57, parentView.injectorGet(import25.NgZone, viewData.parentIndex));
          })
        : import7.AutoDismissDirective(_el_57, parentView.injectorGet(import25.NgZone, viewData.parentIndex)));
    _MaterialDialogComponent_57_6 = (import19.isDevMode
        ? import22.debugInjectorWrap(import8.MaterialDialogComponent, () {
            return import8.MaterialDialogComponent(_el_57, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_57.ref, _ModalComponent_56_5);
          })
        : import8.MaterialDialogComponent(_el_57, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_57.ref, _ModalComponent_56_5));
    final _el_58 = doc.createElement('div');
    createAttr(_el_58, 'header', '');
    addShimC(_el_58);
    final _el_59 = createAndAppend(doc, 'h1', _el_58);
    addShimE(_el_59);
    final _text_60 = import17.Text('Edit Error');
    _el_59.append(_text_60);
    final _el_61 = doc.createElement('p');
    createAttr(_el_61, 'style', 'color: red');
    addShimE(_el_61);
    final _text_62 = import17.Text('We are sorry, but during the time you haven\'t held this document\'s lock somebody else edited it. For that reason we cannot allow you to save your current changes. Save your changes to text document and then click ');
    _el_61.append(_text_62);
    final _el_63 = createAndAppend(doc, 'i', _el_61);
    addShimE(_el_63);
    final _text_64 = import17.Text('Stop Editing -> Trash Changes And Stop Editing');
    _el_63.append(_text_64);
    final _text_65 = import17.Text('. After that you will be able to edit this document again.');
    _el_61.append(_text_65);
    final _el_66 = doc.createElement('div');
    createAttr(_el_66, 'footer', '');
    addShimC(_el_66);
    _compView_67 = import9.ViewMaterialButtonComponent0(this, 67);
    final _el_67 = _compView_67.rootEl;
    _el_66.append(_el_67);
    createAttr(_el_67, 'clear-size', '');
    addShimC(_el_67);
    _AcxDarkTheme_67_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_67_6 = import10.MaterialButtonComponent(_el_67, _AcxDarkTheme_67_5, _compView_67.ref, null);
    _compView_68 = import11.ViewMaterialIconComponent0(this, 68);
    final _el_68 = _compView_68.rootEl;
    createAttr(_el_68, 'icon', 'clear');
    createAttr(_el_68, 'size', 'large');
    addShimC(_el_68);
    _MaterialIconComponent_68_5 = import12.MaterialIconComponent(_el_68);
    _compView_68.create(_MaterialIconComponent_68_5, []);
    _compView_67.create(_MaterialButtonComponent_67_6, [
      [_el_68]
    ]);
    _compView_57.create(_MaterialDialogComponent_57_6, [
      [_el_58],
      [_el_61],
      [_el_66]
    ]);
    _compView_56.create(_ModalComponent_56_5, [
      [_el_57]
    ]);
    _compView_69 = import4.ViewModalComponent0(this, 69);
    final _el_69 = _compView_69.rootEl;
    parentRenderNode.append(_el_69);
    addShimC(_el_69);
    _ModalComponent_69_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import5.ModalComponent, () {
            return import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_69, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null));
          })
        : import5.ModalComponent(parentView.injectorGet(import23.OverlayService, viewData.parentIndex), _el_69, parentView.injectorGet(import24.DomService, viewData.parentIndex), parentView.injectorGet(import5.Modal, viewData.parentIndex, null), parentView.injectorGet(import5.GlobalModalStack, viewData.parentIndex, null)));
    _compView_70 = import6.ViewMaterialDialogComponent0(this, 70);
    final _el_70 = _compView_70.rootEl;
    _el_70.className = 'basic-dialog';
    createAttr(_el_70, 'headered', '');
    addShimC(_el_70);
    _AutoDismissDirective_70_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import7.AutoDismissDirective, () {
            return import7.AutoDismissDirective(_el_70, parentView.injectorGet(import25.NgZone, viewData.parentIndex));
          })
        : import7.AutoDismissDirective(_el_70, parentView.injectorGet(import25.NgZone, viewData.parentIndex)));
    _MaterialDialogComponent_70_6 = (import19.isDevMode
        ? import22.debugInjectorWrap(import8.MaterialDialogComponent, () {
            return import8.MaterialDialogComponent(_el_70, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_70.ref, _ModalComponent_69_5);
          })
        : import8.MaterialDialogComponent(_el_70, parentView.injectorGet(import24.DomService, viewData.parentIndex), _compView_70.ref, _ModalComponent_69_5));
    final _el_71 = doc.createElement('div');
    createAttr(_el_71, 'header', '');
    addShimC(_el_71);
    final _el_72 = createAndAppend(doc, 'h1', _el_71);
    addShimE(_el_72);
    final _text_73 = import17.Text('Rename Error');
    _el_72.append(_text_73);
    final _el_74 = doc.createElement('p');
    createAttr(_el_74, 'style', 'color: red');
    addShimE(_el_74);
    final _text_75 = import17.Text('We are sorry. But we were unable to rename the document, because the new name is not unique.');
    _el_74.append(_text_75);
    final _el_76 = doc.createElement('div');
    createAttr(_el_76, 'footer', '');
    addShimC(_el_76);
    _compView_77 = import9.ViewMaterialButtonComponent0(this, 77);
    final _el_77 = _compView_77.rootEl;
    _el_76.append(_el_77);
    createAttr(_el_77, 'clear-size', '');
    addShimC(_el_77);
    _AcxDarkTheme_77_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_77_6 = import10.MaterialButtonComponent(_el_77, _AcxDarkTheme_77_5, _compView_77.ref, null);
    _compView_78 = import11.ViewMaterialIconComponent0(this, 78);
    final _el_78 = _compView_78.rootEl;
    createAttr(_el_78, 'icon', 'clear');
    createAttr(_el_78, 'size', 'large');
    addShimC(_el_78);
    _MaterialIconComponent_78_5 = import12.MaterialIconComponent(_el_78);
    _compView_78.create(_MaterialIconComponent_78_5, []);
    _compView_77.create(_MaterialButtonComponent_77_6, [
      [_el_78]
    ]);
    _compView_70.create(_MaterialDialogComponent_70_6, [
      [_el_71],
      [_el_74],
      [_el_76]
    ]);
    _compView_69.create(_ModalComponent_69_5, [
      [_el_70]
    ]);
    final subscription_0 = _AutoDismissDirective_8_5.dismiss.listen(eventHandler1(_handle_dismiss_8_0));
    final subscription_1 = _MaterialButtonComponent_13_6.trigger.listen(eventHandler0(ctx.saveChangesAndStopEdit));
    final subscription_2 = _MaterialButtonComponent_16_6.trigger.listen(eventHandler0(ctx.trashChangesAndStopEdit));
    final subscription_3 = _MaterialButtonComponent_19_6.trigger.listen(eventHandler1(_handle_trigger_19_0));
    final subscription_4 = _AutoDismissDirective_23_5.dismiss.listen(eventHandler1(_handle_dismiss_23_0));
    final subscription_5 = _MaterialButtonComponent_28_6.trigger.listen(eventHandler0(ctx.removeSnippet));
    final subscription_6 = _MaterialButtonComponent_31_6.trigger.listen(eventHandler1(_handle_trigger_31_0));
    final subscription_7 = _AutoDismissDirective_35_5.dismiss.listen(eventHandler1(_handle_dismiss_35_0));
    final subscription_8 = _MaterialButtonComponent_40_6.trigger.listen(eventHandler0(ctx.removeDocument));
    final subscription_9 = _MaterialButtonComponent_43_6.trigger.listen(eventHandler1(_handle_trigger_43_0));
    final subscription_10 = _AutoDismissDirective_47_5.dismiss.listen(eventHandler1(_handle_dismiss_47_0));
    final subscription_11 = _MaterialButtonComponent_54_6.trigger.listen(eventHandler1(_handle_trigger_54_0));
    final subscription_12 = _AutoDismissDirective_57_5.dismiss.listen(eventHandler1(_handle_dismiss_57_0));
    final subscription_13 = _MaterialButtonComponent_67_6.trigger.listen(eventHandler1(_handle_trigger_67_0));
    final subscription_14 = _AutoDismissDirective_70_5.dismiss.listen(eventHandler1(_handle_dismiss_70_0));
    final subscription_15 = _MaterialButtonComponent_77_6.trigger.listen(eventHandler1(_handle_trigger_77_0));
    _pipe_time_0 = import13.TimePipe();
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7, subscription_8, subscription_9, subscription_10, subscription_11, subscription_12, subscription_13, subscription_14, subscription_15]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.AcxDarkTheme) && ((13 <= nodeIndex) && (nodeIndex <= 15)))) {
      return _AcxDarkTheme_13_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((13 <= nodeIndex) && (nodeIndex <= 15)))) {
      return _MaterialButtonComponent_13_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((16 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _AcxDarkTheme_16_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((16 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _MaterialButtonComponent_16_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((19 <= nodeIndex) && (nodeIndex <= 21)))) {
      return _AcxDarkTheme_19_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((19 <= nodeIndex) && (nodeIndex <= 21)))) {
      return _MaterialButtonComponent_19_6;
    }
    if ((((identical(token, import5.ModalComponent) || identical(token, import30.DeferredContentAware)) || identical(token, import5.Modal)) && ((7 <= nodeIndex) && (nodeIndex <= 21)))) {
      return _ModalComponent_7_5;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((28 <= nodeIndex) && (nodeIndex <= 30)))) {
      return _AcxDarkTheme_28_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((28 <= nodeIndex) && (nodeIndex <= 30)))) {
      return _MaterialButtonComponent_28_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((31 <= nodeIndex) && (nodeIndex <= 33)))) {
      return _AcxDarkTheme_31_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((31 <= nodeIndex) && (nodeIndex <= 33)))) {
      return _MaterialButtonComponent_31_6;
    }
    if ((((identical(token, import5.ModalComponent) || identical(token, import30.DeferredContentAware)) || identical(token, import5.Modal)) && ((22 <= nodeIndex) && (nodeIndex <= 33)))) {
      return _ModalComponent_22_5;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((40 <= nodeIndex) && (nodeIndex <= 42)))) {
      return _AcxDarkTheme_40_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((40 <= nodeIndex) && (nodeIndex <= 42)))) {
      return _MaterialButtonComponent_40_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((43 <= nodeIndex) && (nodeIndex <= 45)))) {
      return _AcxDarkTheme_43_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((43 <= nodeIndex) && (nodeIndex <= 45)))) {
      return _MaterialButtonComponent_43_6;
    }
    if ((((identical(token, import5.ModalComponent) || identical(token, import30.DeferredContentAware)) || identical(token, import5.Modal)) && ((34 <= nodeIndex) && (nodeIndex <= 45)))) {
      return _ModalComponent_34_5;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((54 <= nodeIndex) && (nodeIndex <= 55)))) {
      return _AcxDarkTheme_54_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((54 <= nodeIndex) && (nodeIndex <= 55)))) {
      return _MaterialButtonComponent_54_6;
    }
    if ((((identical(token, import5.ModalComponent) || identical(token, import30.DeferredContentAware)) || identical(token, import5.Modal)) && ((46 <= nodeIndex) && (nodeIndex <= 55)))) {
      return _ModalComponent_46_5;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((67 <= nodeIndex) && (nodeIndex <= 68)))) {
      return _AcxDarkTheme_67_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((67 <= nodeIndex) && (nodeIndex <= 68)))) {
      return _MaterialButtonComponent_67_6;
    }
    if ((((identical(token, import5.ModalComponent) || identical(token, import30.DeferredContentAware)) || identical(token, import5.Modal)) && ((56 <= nodeIndex) && (nodeIndex <= 68)))) {
      return _ModalComponent_56_5;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((77 <= nodeIndex) && (nodeIndex <= 78)))) {
      return _AcxDarkTheme_77_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((77 <= nodeIndex) && (nodeIndex <= 78)))) {
      return _MaterialButtonComponent_77_6;
    }
    if ((((identical(token, import5.ModalComponent) || identical(token, import30.DeferredContentAware)) || identical(token, import5.Modal)) && ((69 <= nodeIndex) && (nodeIndex <= 78)))) {
      return _ModalComponent_69_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_0_9.ngIf = (_ctx.document != null);
    _NgIf_2_9.ngIf = !_ctx.editMode;
    _NgIf_3_9.ngIf = _ctx.editMode;
    _NgIf_5_9.ngIf = !_ctx.showMetadata;
    _NgIf_6_9.ngIf = _ctx.showMetadata;
    final currVal_5 = _ctx.showSaveChangesDialog;
    if (import18.checkBinding(_expr_5, currVal_5)) {
      _ModalComponent_7_5.visible = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.showSaveChangesDialog;
    if (import18.checkBinding(_expr_6, currVal_6)) {
      _AutoDismissDirective_8_5.autoDismissable = currVal_6;
      _expr_6 = currVal_6;
    }
    changed = false;
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    changed = false;
    final currVal_7 = ((_ctx.lockDuration == null) || _ctx.lockDuration.isNegative);
    if (import18.checkBinding(_expr_7, currVal_7)) {
      _MaterialButtonComponent_13_6.disabled = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _compView_13.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_13_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_15_5.icon = 'save';
      changed = true;
    }
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_16.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_16_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_18_5.icon = 'delete_forever';
      changed = true;
    }
    if (changed) {
      _compView_18.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_19.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_19_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_21_5.icon = 'clear';
      changed = true;
    }
    if (changed) {
      _compView_21.markAsCheckOnce();
    }
    final currVal_11 = _ctx.showRemoveSnippetDialog;
    if (import18.checkBinding(_expr_11, currVal_11)) {
      _ModalComponent_22_5.visible = currVal_11;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.showRemoveSnippetDialog;
    if (import18.checkBinding(_expr_12, currVal_12)) {
      _AutoDismissDirective_23_5.autoDismissable = currVal_12;
      _expr_12 = currVal_12;
    }
    changed = false;
    if (changed) {
      _compView_23.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_28.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_28_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_30_5.icon = 'delete_forever';
      changed = true;
    }
    if (changed) {
      _compView_30.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_31.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_31_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_33_5.icon = 'clear';
      changed = true;
    }
    if (changed) {
      _compView_33.markAsCheckOnce();
    }
    final currVal_15 = _ctx.showDeleteDocumentDialog;
    if (import18.checkBinding(_expr_15, currVal_15)) {
      _ModalComponent_34_5.visible = currVal_15;
      _expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.showDeleteDocumentDialog;
    if (import18.checkBinding(_expr_16, currVal_16)) {
      _AutoDismissDirective_35_5.autoDismissable = currVal_16;
      _expr_16 = currVal_16;
    }
    changed = false;
    if (changed) {
      _compView_35.markAsCheckOnce();
    }
    changed = false;
    final currVal_17 = ((_ctx.lockDuration == null) || _ctx.lockDuration.isNegative);
    if (import18.checkBinding(_expr_17, currVal_17)) {
      _MaterialButtonComponent_40_6.disabled = currVal_17;
      changed = true;
      _expr_17 = currVal_17;
    }
    if (changed) {
      _compView_40.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_40_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_42_5.icon = 'delete_forever';
      changed = true;
    }
    if (changed) {
      _compView_42.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_43.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_43_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_45_5.icon = 'clear';
      changed = true;
    }
    if (changed) {
      _compView_45.markAsCheckOnce();
    }
    final currVal_20 = _ctx.showCannotEditDialog1;
    if (import18.checkBinding(_expr_20, currVal_20)) {
      _ModalComponent_46_5.visible = currVal_20;
      _expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.showCannotEditDialog1;
    if (import18.checkBinding(_expr_21, currVal_21)) {
      _AutoDismissDirective_47_5.autoDismissable = currVal_21;
      _expr_21 = currVal_21;
    }
    changed = false;
    if (changed) {
      _compView_47.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_54.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_54_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_55_5.icon = 'clear';
      changed = true;
    }
    if (changed) {
      _compView_55.markAsCheckOnce();
    }
    final currVal_23 = _ctx.showCannotEditDialog2;
    if (import18.checkBinding(_expr_23, currVal_23)) {
      _ModalComponent_56_5.visible = currVal_23;
      _expr_23 = currVal_23;
    }
    final currVal_24 = _ctx.showCannotEditDialog2;
    if (import18.checkBinding(_expr_24, currVal_24)) {
      _AutoDismissDirective_57_5.autoDismissable = currVal_24;
      _expr_24 = currVal_24;
    }
    changed = false;
    if (changed) {
      _compView_57.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_67.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_67_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_68_5.icon = 'clear';
      changed = true;
    }
    if (changed) {
      _compView_68.markAsCheckOnce();
    }
    final currVal_26 = _ctx.showRenameUnsuccessfulDialog;
    if (import18.checkBinding(_expr_26, currVal_26)) {
      _ModalComponent_69_5.visible = currVal_26;
      _expr_26 = currVal_26;
    }
    final currVal_27 = _ctx.showRenameUnsuccessfulDialog;
    if (import18.checkBinding(_expr_27, currVal_27)) {
      _AutoDismissDirective_70_5.autoDismissable = currVal_27;
      _expr_27 = currVal_27;
    }
    changed = false;
    if (changed) {
      _compView_70.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_77.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_77_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_78_5.icon = 'clear';
      changed = true;
    }
    if (changed) {
      _compView_78.markAsCheckOnce();
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    if (!import18.AppViewUtils.throwOnChanges) {
      _MaterialDialogComponent_8_6.ngAfterContentChecked();
      _MaterialDialogComponent_23_6.ngAfterContentChecked();
      _MaterialDialogComponent_35_6.ngAfterContentChecked();
      _MaterialDialogComponent_47_6.ngAfterContentChecked();
      _MaterialDialogComponent_57_6.ngAfterContentChecked();
      _MaterialDialogComponent_70_6.ngAfterContentChecked();
    }
    _compView_7.detectHostChanges(firstCheck);
    _compView_13.detectHostChanges(firstCheck);
    _compView_16.detectHostChanges(firstCheck);
    _compView_19.detectHostChanges(firstCheck);
    _compView_22.detectHostChanges(firstCheck);
    _compView_28.detectHostChanges(firstCheck);
    _compView_31.detectHostChanges(firstCheck);
    _compView_34.detectHostChanges(firstCheck);
    _compView_40.detectHostChanges(firstCheck);
    _compView_43.detectHostChanges(firstCheck);
    _compView_46.detectHostChanges(firstCheck);
    _compView_54.detectHostChanges(firstCheck);
    _compView_56.detectHostChanges(firstCheck);
    _compView_67.detectHostChanges(firstCheck);
    _compView_69.detectHostChanges(firstCheck);
    _compView_77.detectHostChanges(firstCheck);
    _compView_7.detectChanges();
    _compView_8.detectChanges();
    _compView_13.detectChanges();
    _compView_15.detectChanges();
    _compView_16.detectChanges();
    _compView_18.detectChanges();
    _compView_19.detectChanges();
    _compView_21.detectChanges();
    _compView_22.detectChanges();
    _compView_23.detectChanges();
    _compView_28.detectChanges();
    _compView_30.detectChanges();
    _compView_31.detectChanges();
    _compView_33.detectChanges();
    _compView_34.detectChanges();
    _compView_35.detectChanges();
    _compView_40.detectChanges();
    _compView_42.detectChanges();
    _compView_43.detectChanges();
    _compView_45.detectChanges();
    _compView_46.detectChanges();
    _compView_47.detectChanges();
    _compView_54.detectChanges();
    _compView_55.detectChanges();
    _compView_56.detectChanges();
    _compView_57.detectChanges();
    _compView_67.detectChanges();
    _compView_68.detectChanges();
    _compView_69.detectChanges();
    _compView_70.detectChanges();
    _compView_77.detectChanges();
    _compView_78.detectChanges();
    if (!import18.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _ModalComponent_7_5.ngAfterViewInit();
        _ModalComponent_22_5.ngAfterViewInit();
        _ModalComponent_34_5.ngAfterViewInit();
        _ModalComponent_46_5.ngAfterViewInit();
        _ModalComponent_56_5.ngAfterViewInit();
        _ModalComponent_69_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _compView_7.destroy();
    _compView_8.destroy();
    _compView_13.destroy();
    _compView_15.destroy();
    _compView_16.destroy();
    _compView_18.destroy();
    _compView_19.destroy();
    _compView_21.destroy();
    _compView_22.destroy();
    _compView_23.destroy();
    _compView_28.destroy();
    _compView_30.destroy();
    _compView_31.destroy();
    _compView_33.destroy();
    _compView_34.destroy();
    _compView_35.destroy();
    _compView_40.destroy();
    _compView_42.destroy();
    _compView_43.destroy();
    _compView_45.destroy();
    _compView_46.destroy();
    _compView_47.destroy();
    _compView_54.destroy();
    _compView_55.destroy();
    _compView_56.destroy();
    _compView_57.destroy();
    _compView_67.destroy();
    _compView_68.destroy();
    _compView_69.destroy();
    _compView_70.destroy();
    _compView_77.destroy();
    _compView_78.destroy();
    _MaterialDialogComponent_8_6.ngOnDestroy();
    _ModalComponent_7_5.ngOnDestroy();
    _MaterialDialogComponent_23_6.ngOnDestroy();
    _ModalComponent_22_5.ngOnDestroy();
    _MaterialDialogComponent_35_6.ngOnDestroy();
    _ModalComponent_34_5.ngOnDestroy();
    _MaterialDialogComponent_47_6.ngOnDestroy();
    _ModalComponent_46_5.ngOnDestroy();
    _MaterialDialogComponent_57_6.ngOnDestroy();
    _ModalComponent_56_5.ngOnDestroy();
    _MaterialDialogComponent_70_6.ngOnDestroy();
    _ModalComponent_69_5.ngOnDestroy();
  }

  void _handle_dismiss_8_0($event) {
    ctx.showSaveChangesDialog = false;
  }

  void _handle_trigger_19_0($event) {
    ctx.showSaveChangesDialog = false;
  }

  void _handle_dismiss_23_0($event) {
    ctx.showRemoveSnippetDialog = false;
  }

  void _handle_trigger_31_0($event) {
    ctx.showRemoveSnippetDialog = false;
  }

  void _handle_dismiss_35_0($event) {
    ctx.showDeleteDocumentDialog = false;
  }

  void _handle_trigger_43_0($event) {
    ctx.showDeleteDocumentDialog = false;
  }

  void _handle_dismiss_47_0($event) {
    ctx.showCannotEditDialog1 = false;
  }

  void _handle_trigger_54_0($event) {
    ctx.showCannotEditDialog1 = false;
  }

  void _handle_dismiss_57_0($event) {
    ctx.showCannotEditDialog2 = false;
  }

  void _handle_trigger_67_0($event) {
    ctx.showCannotEditDialog2 = false;
  }

  void _handle_dismiss_70_0($event) {
    ctx.showRenameUnsuccessfulDialog = false;
  }

  void _handle_trigger_77_0($event) {
    ctx.showRenameUnsuccessfulDialog = false;
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewViewDocumentComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.ViewDocumentComponent> _ViewDocumentComponentNgFactory = const ComponentFactory('view-document', viewFactory_ViewDocumentComponentHost0);
ComponentFactory<import1.ViewDocumentComponent> get ViewDocumentComponentNgFactory {
  return _ViewDocumentComponentNgFactory;
}

class _ViewViewDocumentComponent1 extends AppView<import1.ViewDocumentComponent> {
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_7;
  import31.NgFor _NgFor_7_9;
  var _expr_3;
  _ViewViewDocumentComponent1(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    var doc = import17.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'header-bar';
    addShimC(_el_1);
    final _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'title';
    addShimC(_el_2);
    final _anchor_3 = createViewContainerAnchor();
    _el_2.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_ViewDocumentComponent2);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = createViewContainerAnchor();
    _el_2.append(_anchor_4);
    _appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_ViewDocumentComponent3);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _anchor_5 = createViewContainerAnchor();
    _el_1.append(_anchor_5);
    _appEl_5 = ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_ViewDocumentComponent4);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _el_6 = createDivAndAppend(doc, _el_0);
    _el_6.className = 'scrollable';
    addShimC(_el_6);
    final _anchor_7 = createViewContainerAnchor();
    _el_6.append(_anchor_7);
    _appEl_7 = ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_ViewDocumentComponent7);
    _NgFor_7_9 = import31.NgFor(_appEl_7, _TemplateRef_7_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_3_9.ngIf = _ctx.showName;
    _NgIf_4_9.ngIf = !_ctx.showName;
    _NgIf_5_9.ngIf = (_ctx.editMode && (_ctx.lockDuration != null));
    final currVal_3 = _ctx.document.snippets;
    if (import18.checkBinding(_expr_3, currVal_3)) {
      _NgFor_7_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if (!import18.AppViewUtils.throwOnChanges) {
      _NgFor_7_9.ngDoCheck();
    }
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_7.destroyNestedViews();
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent1(parentView, parentIndex);
}

class _ViewViewDocumentComponent2 extends AppView<import1.ViewDocumentComponent> {
  var _expr_0;
  import17.Text _text_1;
  _ViewViewDocumentComponent2(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    var doc = import17.document;
    final _el_0 = doc.createElement('h1');
    addShimE(_el_0);
    _text_1 = import17.Text('');
    _el_0.append(_text_1);
    _el_0.addEventListener('click', eventHandler0(ctx.editName));
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = import18.interpolate0(_ctx.document.name);
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent2(parentView, parentIndex);
}

class _ViewViewDocumentComponent3 extends AppView<import1.ViewDocumentComponent> {
  import32.DefaultValueAccessor _DefaultValueAccessor_1_5;
  List<import33.ControlValueAccessor<dynamic>> _NgValueAccessor_1_6;
  import34.NgModel _NgModel_1_7;
  import9.ViewMaterialButtonComponent0 _compView_2;
  dynamic _AcxDarkTheme_2_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_2_6;
  import11.ViewMaterialIconComponent0 _compView_3;
  import12.MaterialIconComponent _MaterialIconComponent_3_5;
  _ViewViewDocumentComponent3(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    var doc = import17.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _el_1 = createAndAppend(doc, 'input', _el_0);
    addShimC(_el_1);
    _DefaultValueAccessor_1_5 = import32.DefaultValueAccessor(_el_1);
    _NgValueAccessor_1_6 = [_DefaultValueAccessor_1_5];
    _NgModel_1_7 = import34.NgModel(null, _NgValueAccessor_1_6);
    _compView_2 = import9.ViewMaterialButtonComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    createAttr(_el_2, 'icon', '');
    addShimC(_el_2);
    _AcxDarkTheme_2_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_2_6 = import10.MaterialButtonComponent(_el_2, _AcxDarkTheme_2_5, _compView_2.ref, null);
    _compView_3 = import11.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    createAttr(_el_3, 'icon', 'done');
    createAttr(_el_3, 'size', 'small');
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import12.MaterialIconComponent(_el_3);
    _compView_3.create(_MaterialIconComponent_3_5, []);
    _compView_2.create(_MaterialButtonComponent_2_6, [
      [_el_3]
    ]);
    _el_1.addEventListener('blur', eventHandler0(_DefaultValueAccessor_1_5.touchHandler));
    _el_1.addEventListener('input', eventHandler1(_handle_input_1_2));
    final subscription_0 = _NgModel_1_7.update.listen(eventHandler1(_handle_ngModelChange_1_0));
    final subscription_1 = _MaterialButtonComponent_2_6.trigger.listen(eventHandler0(ctx.deselect));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import27.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (1 == nodeIndex))) {
      return _NgValueAccessor_1_6;
    }
    if (((identical(token, import34.NgModel) || identical(token, import36.NgControl)) && (1 == nodeIndex))) {
      return _NgModel_1_7;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _AcxDarkTheme_2_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
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
    _NgModel_1_7.model = _ctx.document.name;
    _NgModel_1_7.ngAfterChanges();
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_1_7.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
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
    ctx.document.name = $event;
  }

  void _handle_input_1_2($event) {
    _DefaultValueAccessor_1_5.handleChange($event.target.value);
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent3(parentView, parentIndex);
}

class _ViewViewDocumentComponent4 extends AppView<import1.ViewDocumentComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0 = false;
  import17.Comment _anchor_1;
  import17.DivElement _el_1_0;
  _ViewViewDocumentComponent4(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    var doc = import17.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'lock-duration';
    addShimC(_el_0);
    _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_ViewDocumentComponent6);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.lockDuration.isNegative == true);
    if (import18.checkBinding(_expr_0, currVal_0)) {
      if (currVal_0) {
        var doc = import17.document;
        _el_1_0 = doc.createElement('div');
        addShimC(_el_1_0);
        final _el_1_1 = createAndAppend(doc, 'h2', _el_1_0);
        addShimE(_el_1_1);
        final _text_1_2 = import17.Text('Your lock has run out. Please try to extend your lock.');
        _el_1_1.append(_text_1_2);
        addInlinedNodes(_anchor_1, [_el_1_0]);
      } else {
        removeInlinedNodes([_el_1_0]);
      }
      _expr_0 = currVal_0;
    }
    _NgIf_2_9.ngIf = !_ctx.lockDuration.isNegative;
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent4(parentView, parentIndex);
}

class _ViewViewDocumentComponent6 extends AppView<import1.ViewDocumentComponent> {
  var _expr_0;
  String Function(Duration) _pipe_time_0_0;
  import17.Text _text_3;
  _ViewViewDocumentComponent6(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    var doc = import17.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    final _text_2 = import17.Text('Your lock will expire in: ');
    _el_1.append(_text_2);
    _text_3 = import17.Text('');
    _el_1.append(_text_3);
    _pipe_time_0_0 = import18.pureProxy1(import19.unsafeCast<ViewViewDocumentComponent0>(parentView.parentView.parentView)._pipe_time_0.transform);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = import18.interpolate0(_pipe_time_0_0(_ctx.lockDuration));
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _text_3.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent6(parentView, parentIndex);
}

class _ViewViewDocumentComponent7 extends AppView<import1.ViewDocumentComponent> {
  import38.ViewViewSnippetComponent0 _compView_0;
  import39.ViewSnippetComponent _ViewSnippetComponent_0_5;
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  _ViewViewDocumentComponent7(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {'\$implicit': null, 'first': null, 'last': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    _compView_0 = import38.ViewViewSnippetComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _ViewSnippetComponent_0_5 = import39.ViewSnippetComponent();
    _compView_0.create(_ViewSnippetComponent_0_5, []);
    final subscription_0 = _ViewSnippetComponent_0_5.selectMe.listen(eventHandler1(ctx.selectSnippet));
    final subscription_1 = _ViewSnippetComponent_0_5.removeMe.listen(eventHandler1(ctx.removeSnippetDialog));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_snippet = import19.unsafeCast<import40.Snippet>(locals['\$implicit']);
    final local_f = import19.unsafeCast<bool>(locals['first']);
    final local_l = import19.unsafeCast<bool>(locals['last']);
    final currVal_0 = local_snippet;
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _ViewSnippetComponent_0_5.snippet = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.showMetadata;
    if (import18.checkBinding(_expr_1, currVal_1)) {
      _ViewSnippetComponent_0_5.showMetadata = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.editMode;
    if (import18.checkBinding(_expr_2, currVal_2)) {
      _ViewSnippetComponent_0_5.allowEdit = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = identical(_ctx.selected, local_snippet);
    if (import18.checkBinding(_expr_3, currVal_3)) {
      _ViewSnippetComponent_0_5.selected = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = local_f;
    if (import18.checkBinding(_expr_4, currVal_4)) {
      _ViewSnippetComponent_0_5.first = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = local_l;
    if (import18.checkBinding(_expr_5, currVal_5)) {
      _ViewSnippetComponent_0_5.last = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _ViewSnippetComponent_0_5.ngOnDestroy();
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent7(parentView, parentIndex);
}

class _ViewViewDocumentComponent8 extends AppView<import1.ViewDocumentComponent> {
  import9.ViewMaterialButtonComponent0 _compView_1;
  dynamic _AcxDarkTheme_1_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_1_6;
  import11.ViewMaterialIconComponent0 _compView_3;
  import12.MaterialIconComponent _MaterialIconComponent_3_5;
  import9.ViewMaterialButtonComponent0 _compView_4;
  dynamic _AcxDarkTheme_4_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_4_6;
  import11.ViewMaterialIconComponent0 _compView_6;
  import12.MaterialIconComponent _MaterialIconComponent_6_5;
  _ViewViewDocumentComponent8(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    var doc = import17.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _compView_1 = import9.ViewMaterialButtonComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'raised', '');
    addShimC(_el_1);
    _AcxDarkTheme_1_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_1_6 = import10.MaterialButtonComponent(_el_1, _AcxDarkTheme_1_5, _compView_1.ref, null);
    final _text_2 = import17.Text('Back');
    _compView_3 = import11.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    createAttr(_el_3, 'icon', 'reply_all');
    createAttr(_el_3, 'size', 'large');
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import12.MaterialIconComponent(_el_3);
    _compView_3.create(_MaterialIconComponent_3_5, []);
    _compView_1.create(_MaterialButtonComponent_1_6, [
      [_text_2, _el_3]
    ]);
    _compView_4 = import9.ViewMaterialButtonComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_0.append(_el_4);
    createAttr(_el_4, 'raised', '');
    addShimC(_el_4);
    _AcxDarkTheme_4_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_4_6 = import10.MaterialButtonComponent(_el_4, _AcxDarkTheme_4_5, _compView_4.ref, null);
    final _text_5 = import17.Text('Edit');
    _compView_6 = import11.ViewMaterialIconComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    createAttr(_el_6, 'icon', 'edit');
    createAttr(_el_6, 'size', 'large');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import12.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_5, []);
    _compView_4.create(_MaterialButtonComponent_4_6, [
      [_text_5, _el_6]
    ]);
    _el_1.addEventListener('click', eventHandler0(ctx.back));
    _el_4.addEventListener('click', eventHandler0(ctx.startEdit));
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.AcxDarkTheme) && ((1 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _AcxDarkTheme_1_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((1 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialButtonComponent_1_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _AcxDarkTheme_4_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialButtonComponent_4_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_1_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_1_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_3_5.icon = 'reply_all';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_4_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_4_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'edit';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_4.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    _compView_6.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroy();
    _compView_3.destroy();
    _compView_4.destroy();
    _compView_6.destroy();
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent8(parentView, parentIndex);
}

class _ViewViewDocumentComponent9 extends AppView<import1.ViewDocumentComponent> {
  import9.ViewMaterialButtonComponent0 _compView_1;
  dynamic _AcxDarkTheme_1_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_1_6;
  import11.ViewMaterialIconComponent0 _compView_3;
  import12.MaterialIconComponent _MaterialIconComponent_3_5;
  import9.ViewMaterialButtonComponent0 _compView_4;
  dynamic _AcxDarkTheme_4_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_4_6;
  import11.ViewMaterialIconComponent0 _compView_6;
  import12.MaterialIconComponent _MaterialIconComponent_6_5;
  import9.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import11.ViewMaterialIconComponent0 _compView_9;
  import12.MaterialIconComponent _MaterialIconComponent_9_5;
  import9.ViewMaterialButtonComponent0 _compView_10;
  dynamic _AcxDarkTheme_10_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_10_6;
  import11.ViewMaterialIconComponent0 _compView_12;
  import12.MaterialIconComponent _MaterialIconComponent_12_5;
  import9.ViewMaterialButtonComponent0 _compView_13;
  dynamic _AcxDarkTheme_13_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_13_6;
  import11.ViewMaterialIconComponent0 _compView_15;
  import12.MaterialIconComponent _MaterialIconComponent_15_5;
  bool _expr_4;
  bool _expr_7;
  _ViewViewDocumentComponent9(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    var doc = import17.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _compView_1 = import9.ViewMaterialButtonComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'raised', '');
    addShimC(_el_1);
    _AcxDarkTheme_1_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_1_6 = import10.MaterialButtonComponent(_el_1, _AcxDarkTheme_1_5, _compView_1.ref, null);
    final _text_2 = import17.Text('Add new snippet');
    _compView_3 = import11.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    createAttr(_el_3, 'icon', 'add_comment');
    createAttr(_el_3, 'size', 'large');
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import12.MaterialIconComponent(_el_3);
    _compView_3.create(_MaterialIconComponent_3_5, []);
    _compView_1.create(_MaterialButtonComponent_1_6, [
      [_text_2, _el_3]
    ]);
    _compView_4 = import9.ViewMaterialButtonComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_0.append(_el_4);
    createAttr(_el_4, 'raised', '');
    addShimC(_el_4);
    _AcxDarkTheme_4_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_4_6 = import10.MaterialButtonComponent(_el_4, _AcxDarkTheme_4_5, _compView_4.ref, null);
    final _text_5 = import17.Text('Stop Editing');
    _compView_6 = import11.ViewMaterialIconComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    createAttr(_el_6, 'icon', 'lock_open');
    createAttr(_el_6, 'size', 'large');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import12.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_5, []);
    _compView_4.create(_MaterialButtonComponent_4_6, [
      [_text_5, _el_6]
    ]);
    _compView_7 = import9.ViewMaterialButtonComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_0.append(_el_7);
    createAttr(_el_7, 'raised', '');
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_7_6 = import10.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7.ref, null);
    final _text_8 = import17.Text('SaveChanges');
    _compView_9 = import11.ViewMaterialIconComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    createAttr(_el_9, 'icon', 'save');
    createAttr(_el_9, 'size', 'large');
    addShimC(_el_9);
    _MaterialIconComponent_9_5 = import12.MaterialIconComponent(_el_9);
    _compView_9.create(_MaterialIconComponent_9_5, []);
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_text_8, _el_9]
    ]);
    _compView_10 = import9.ViewMaterialButtonComponent0(this, 10);
    final _el_10 = _compView_10.rootEl;
    _el_0.append(_el_10);
    createAttr(_el_10, 'raised', '');
    addShimC(_el_10);
    _AcxDarkTheme_10_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_10_6 = import10.MaterialButtonComponent(_el_10, _AcxDarkTheme_10_5, _compView_10.ref, null);
    final _text_11 = import17.Text('Delete document');
    _compView_12 = import11.ViewMaterialIconComponent0(this, 12);
    final _el_12 = _compView_12.rootEl;
    createAttr(_el_12, 'icon', 'delete_forever');
    createAttr(_el_12, 'size', 'large');
    addShimC(_el_12);
    _MaterialIconComponent_12_5 = import12.MaterialIconComponent(_el_12);
    _compView_12.create(_MaterialIconComponent_12_5, []);
    _compView_10.create(_MaterialButtonComponent_10_6, [
      [_text_11, _el_12]
    ]);
    _compView_13 = import9.ViewMaterialButtonComponent0(this, 13);
    final _el_13 = _compView_13.rootEl;
    _el_0.append(_el_13);
    createAttr(_el_13, 'raised', '');
    addShimC(_el_13);
    _AcxDarkTheme_13_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_13_6 = import10.MaterialButtonComponent(_el_13, _AcxDarkTheme_13_5, _compView_13.ref, null);
    final _text_14 = import17.Text('Extend Lock');
    _compView_15 = import11.ViewMaterialIconComponent0(this, 15);
    final _el_15 = _compView_15.rootEl;
    createAttr(_el_15, 'icon', 'lock');
    createAttr(_el_15, 'size', 'large');
    addShimC(_el_15);
    _MaterialIconComponent_15_5 = import12.MaterialIconComponent(_el_15);
    _compView_15.create(_MaterialIconComponent_15_5, []);
    _compView_13.create(_MaterialButtonComponent_13_6, [
      [_text_14, _el_15]
    ]);
    _el_1.addEventListener('click', eventHandler0(ctx.addNewSnippet));
    _el_4.addEventListener('click', eventHandler0(ctx.stopEdit));
    _el_7.addEventListener('click', eventHandler0(ctx.saveChanges));
    _el_10.addEventListener('click', eventHandler1(_handle_click_10_0));
    _el_13.addEventListener('click', eventHandler0(ctx.extendLock));
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.AcxDarkTheme) && ((1 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _AcxDarkTheme_1_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((1 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialButtonComponent_1_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _AcxDarkTheme_4_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialButtonComponent_4_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((7 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _AcxDarkTheme_7_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((7 <= nodeIndex) && (nodeIndex <= 9)))) {
      return _MaterialButtonComponent_7_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((10 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _AcxDarkTheme_10_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((10 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _MaterialButtonComponent_10_6;
    }
    if ((identical(token, import26.AcxDarkTheme) && ((13 <= nodeIndex) && (nodeIndex <= 15)))) {
      return _AcxDarkTheme_13_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((13 <= nodeIndex) && (nodeIndex <= 15)))) {
      return _MaterialButtonComponent_13_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_1_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_1_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_3_5.icon = 'add_comment';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_4_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_4_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'lock_open';
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
    final currVal_4 = ((_ctx.lockDuration == null) || _ctx.lockDuration.isNegative);
    if (import18.checkBinding(_expr_4, currVal_4)) {
      _MaterialButtonComponent_7_6.disabled = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_7_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_9_5.icon = 'save';
      changed = true;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_10_6.raised = true;
      changed = true;
    }
    final currVal_7 = ((_ctx.lockDuration == null) || _ctx.lockDuration.isNegative);
    if (import18.checkBinding(_expr_7, currVal_7)) {
      _MaterialButtonComponent_10_6.disabled = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _compView_10.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_10_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_12_5.icon = 'delete_forever';
      changed = true;
    }
    if (changed) {
      _compView_12.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_13_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_13.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_13_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_15_5.icon = 'lock';
      changed = true;
    }
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_4.detectHostChanges(firstCheck);
    _compView_7.detectHostChanges(firstCheck);
    _compView_10.detectHostChanges(firstCheck);
    _compView_13.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    _compView_7.detectChanges();
    _compView_9.detectChanges();
    _compView_10.detectChanges();
    _compView_12.detectChanges();
    _compView_13.detectChanges();
    _compView_15.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroy();
    _compView_3.destroy();
    _compView_4.destroy();
    _compView_6.destroy();
    _compView_7.destroy();
    _compView_9.destroy();
    _compView_10.destroy();
    _compView_12.destroy();
    _compView_13.destroy();
    _compView_15.destroy();
  }

  void _handle_click_10_0($event) {
    ctx.showDeleteDocumentDialog = true;
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent9(parentView, parentIndex);
}

class _ViewViewDocumentComponent10 extends AppView<import1.ViewDocumentComponent> {
  import9.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import11.ViewMaterialIconComponent0 _compView_2;
  import12.MaterialIconComponent _MaterialIconComponent_2_5;
  _ViewViewDocumentComponent10(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    _compView_0 = import9.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_0_6 = import10.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    final _text_1 = import17.Text('Show Metadata');
    _compView_2 = import11.ViewMaterialIconComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    createAttr(_el_2, 'icon', 'visibility');
    createAttr(_el_2, 'size', 'large');
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import12.MaterialIconComponent(_el_2);
    _compView_2.create(_MaterialIconComponent_2_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_text_1, _el_2]
    ]);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
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
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_2_5.icon = 'visibility';
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_2.destroy();
  }

  void _handle_click_0_0($event) {
    ctx.showMetadata = true;
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent10(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent10(parentView, parentIndex);
}

class _ViewViewDocumentComponent11 extends AppView<import1.ViewDocumentComponent> {
  import9.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import10.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import11.ViewMaterialIconComponent0 _compView_2;
  import12.MaterialIconComponent _MaterialIconComponent_2_5;
  _ViewViewDocumentComponent11(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewViewDocumentComponent0._renderType;
  }
  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    _compView_0 = import9.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGet(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_0_6 = import10.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    final _text_1 = import17.Text('Hide Metadata');
    _compView_2 = import11.ViewMaterialIconComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    createAttr(_el_2, 'icon', 'visibility_off');
    createAttr(_el_2, 'size', 'large');
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import12.MaterialIconComponent(_el_2);
    _compView_2.create(_MaterialIconComponent_2_5, []);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_text_1, _el_2]
    ]);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import10.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
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
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_2_5.icon = 'visibility_off';
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_2.destroy();
  }

  void _handle_click_0_0($event) {
    ctx.showMetadata = false;
  }
}

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponent11(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponent11(parentView, parentIndex);
}

final List<dynamic> styles$ViewDocumentComponentHost = const [];

class _ViewViewDocumentComponentHost0 extends AppView<import1.ViewDocumentComponent> {
  ViewViewDocumentComponent0 _compView_0;
  import1.ViewDocumentComponent _ViewDocumentComponent_0_5;
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  dynamic __AcxImperativeViewUtils_0_9;
  import41.DomRuler __DomRuler_0_10;
  dynamic __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import42.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import43.ZIndexer __ZIndexer_0_18;
  import44.OverlayDomRenderService __OverlayDomRenderService_0_19;
  dynamic __OverlayService_0_20;
  _ViewViewDocumentComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import45.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((__Window_0_7 == null)) {
      (__Window_0_7 = import45.getWindow());
    }
    return __Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((__DomService_0_8 == null)) {
      (__DomService_0_8 = (import19.isDevMode
          ? import22.debugInjectorWrap(import24.DomService, () {
              return import46.createDomService(this.injectorGet(import24.DomService, viewData.parentIndex, null), this.injectorGet(import47.Disposer, viewData.parentIndex, null), this.injectorGet(import25.NgZone, viewData.parentIndex), _Window_0_7);
            })
          : import46.createDomService(this.injectorGet(import24.DomService, viewData.parentIndex, null), this.injectorGet(import47.Disposer, viewData.parentIndex, null), this.injectorGet(import25.NgZone, viewData.parentIndex), _Window_0_7)));
    }
    return __DomService_0_8;
  }

  dynamic get _AcxImperativeViewUtils_0_9 {
    if ((__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = (import19.isDevMode
          ? import22.debugInjectorWrap(import48.AcxImperativeViewUtils, () {
              return import48.AcxImperativeViewUtils(this.injectorGet(import49.ComponentLoader, viewData.parentIndex), _DomService_0_8);
            })
          : import48.AcxImperativeViewUtils(this.injectorGet(import49.ComponentLoader, viewData.parentIndex), _DomService_0_8)));
    }
    return __AcxImperativeViewUtils_0_9;
  }

  import41.DomRuler get _DomRuler_0_10 {
    if ((__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import41.DomRuler(_Document_0_6, _DomService_0_8));
    }
    return __DomRuler_0_10;
  }

  dynamic get _ManagedZone_0_11 {
    if ((__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = (import19.isDevMode
          ? import22.debugInjectorWrap(import50.ManagedZone, () {
              return import51.Angular2ManagedZone(this.injectorGet(import25.NgZone, viewData.parentIndex));
            })
          : import51.Angular2ManagedZone(this.injectorGet(import25.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = (import19.isDevMode
          ? import22.debugInjectorWrap(const import27.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import52.getDefaultContainerName(this.injectorGet(const import27.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null));
            })
          : import52.getDefaultContainerName(this.injectorGet(const import27.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null))));
    }
    return __overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = (import19.isDevMode
          ? import22.debugInjectorWrap(const import27.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import52.getOverlayContainerParent(_Document_0_6, this.injectorGet(const import27.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null));
            })
          : import52.getOverlayContainerParent(_Document_0_6, this.injectorGet(const import27.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null))));
    }
    return __overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = (import19.isDevMode
          ? import22.debugInjectorWrap(const import27.OpaqueToken<dynamic>('overlayContainer'), () {
              return import52.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, this.injectorGet(const import27.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null));
            })
          : import52.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, this.injectorGet(const import27.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null))));
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

  import42.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import42.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_17;
  }

  import43.ZIndexer get _ZIndexer_0_18 {
    if ((__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import43.ZIndexer());
    }
    return __ZIndexer_0_18;
  }

  import44.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import44.OverlayDomRenderService(_OverlayStyleConfig_0_17, _overlayContainer_0_14, _overlayContainerName_0_12, _DomRuler_0_10, _DomService_0_8, _AcxImperativeViewUtils_0_9, _overlaySyncDom_0_15, _overlayRepositionLoop_0_16, _ZIndexer_0_18));
    }
    return __OverlayDomRenderService_0_19;
  }

  dynamic get _OverlayService_0_20 {
    if ((__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = (import19.isDevMode
          ? import22.debugInjectorWrap(import23.OverlayService, () {
              return import23.OverlayService(this.injectorGet(import25.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, this.injectorGet(import23.OverlayService, viewData.parentIndex, null));
            })
          : import23.OverlayService(this.injectorGet(import25.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, this.injectorGet(import23.OverlayService, viewData.parentIndex, null))));
    }
    return __OverlayService_0_20;
  }

  @override
  ComponentRef<import1.ViewDocumentComponent> build() {
    _compView_0 = ViewViewDocumentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ViewDocumentComponent_0_5 = (import19.isDevMode
        ? import22.debugInjectorWrap(import1.ViewDocumentComponent, () {
            return import1.ViewDocumentComponent(this.injectorGet(import40.Model, viewData.parentIndex), this.injectorGet(import53.Router, viewData.parentIndex));
          })
        : import1.ViewDocumentComponent(this.injectorGet(import40.Model, viewData.parentIndex), this.injectorGet(import53.Router, viewData.parentIndex)));
    _compView_0.create(_ViewDocumentComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _ViewDocumentComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import17.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import24.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import48.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import41.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import50.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import27.OpaqueToken<dynamic>('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import27.OpaqueToken<dynamic>('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import27.OpaqueToken<dynamic>('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import27.OpaqueToken<dynamic>('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import27.OpaqueToken<dynamic>('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import42.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import43.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import44.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import23.OverlayService) && (0 == nodeIndex))) {
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

AppView<import1.ViewDocumentComponent> viewFactory_ViewDocumentComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewViewDocumentComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ViewDocumentComponent, ViewDocumentComponentNgFactory);
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
