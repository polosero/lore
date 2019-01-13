// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_fab_menu.dart';
export 'material_fab_menu.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'menu_item_groups.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref4;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref5;
import 'package:angular_components/material_button/material_fab.template.dart' as _ref6;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref7;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref8;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref9;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref10;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref11;
import 'package:angular_components/mixins/track_layout_changes.template.dart' as _ref12;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref13;
import 'package:angular_components/model/menu/menu.template.dart' as _ref14;
import 'package:angular_components/model/observable/observable.template.dart' as _ref15;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref16;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref17;
import 'package:angular_components/material_menu/material_fab_menu.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_fab_menu.dart' as import2;
import '../material_button/material_fab.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_button/material_fab.dart' as import5;
import '../src/material_tooltip/tooltip.dart' as import6;
import '../src/laminate/popup/popup_source_directive.dart' as import7;
import '../material_icon/material_icon.template.dart' as import8;
import '../material_icon/material_icon.dart' as import9;
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import11;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime.dart' as import16;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import18;
import '../src/material_tooltip/tooltip_controller.dart' as import19;
import '../material_tooltip/module.dart' as import20;
import '../utils/disposer/disposer.dart' as import21;
import '../src/laminate/popup/dom_popup_source.dart' as import22;
import '../utils/angular/reference/reference.dart' as import23;
import '../focus/focus_interface.dart' as import24;
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_popup/material_popup.template.dart' as import26;
import '../material_popup/material_popup.dart' as import27;
import '../content/deferred_content.dart' as import28;
import '../src/laminate/popup/popup_hierarchy.dart' as import29;
import 'package:angular/src/core/zone/ng_zone.dart' as import30;
import '../src/laminate/overlay/overlay_service.dart' as import31;
import '../utils/browser/dom_service/dom_service.dart' as import32;
import '../laminate/overlay/zindexer.dart' as import33;
import 'package:angular/src/core/di/opaque_token.dart' as import34;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import36;
import '../src/laminate/popup/popup_size_provider.dart' as import37;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import39;
import '../mixins/material_dropdown_base.dart' as import40;
import '../src/laminate/popup/popup_ref.dart' as import41;
import '../material_list/material_list_item.template.dart' as import42;
import '../material_list/material_list_item.dart' as import43;
import 'menu_item_groups.template.dart' as import44;
import '../focus/focus.dart' as import45;
import 'menu_root.dart' as import46;
import 'menu_item_groups.dart' as import47;
import '../laminate/components/modal/modal.dart' as import48;
import '../utils/id_generator/id_generator.dart' as import49;
import '../interfaces/has_disabled.dart' as import50;

final List<dynamic> styles$MaterialFabMenuComponent = [import0.styles];

class ViewMaterialFabMenuComponent0 extends AppView<import2.MaterialFabMenuComponent> {
  import3.ViewMaterialFabComponent0 _compView_1;
  ViewContainer _appEl_1;
  import5.MaterialFabComponent _MaterialFabComponent_1_8;
  import6.MaterialTooltipDirective _MaterialTooltipDirective_1_9;
  import7.PopupSourceDirective _PopupSourceDirective_1_10;
  dynamic __TooltipController_1_11;
  import8.ViewMaterialIconComponent0 _compView_3;
  import9.MaterialIconComponent _MaterialIconComponent_3_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  String _expr_6;
  bool _expr_7;
  var _expr_8;
  import11.Element _el_1;
  static RenderComponentType _renderType;
  ViewMaterialFabMenuComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import11.document.createElement('material-fab-menu');
    _renderType ??= import15.appViewUtils.createRenderType((import16.isDevMode ? 'asset:angular_components/lib/material_menu/material_fab_menu.dart' : null), ViewEncapsulation.Emulated, styles$MaterialFabMenuComponent);
    setupComponentType(_renderType);
  }
  dynamic get _TooltipController_1_11 {
    if ((__TooltipController_1_11 == null)) {
      (__TooltipController_1_11 = (import16.isDevMode
          ? import18.debugInjectorWrap(import19.TooltipController, () {
              return import20.createTooltipController(parentView.injectorGet(import19.TooltipController, viewData.parentIndex, null), parentView.injectorGet(import21.Disposer, viewData.parentIndex, null));
            })
          : import20.createTooltipController(parentView.injectorGet(import19.TooltipController, viewData.parentIndex, null), parentView.injectorGet(import21.Disposer, viewData.parentIndex, null))));
    }
    return __TooltipController_1_11;
  }

  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    final import2.MaterialFabMenuComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import11.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import11.Text('\n');
    parentRenderNode.append(_text_0);
    _compView_1 = import3.ViewMaterialFabComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    createAttr(_el_1, 'popupSource', '');
    createAttr(_el_1, 'raised', '');
    addShimC(_el_1);
    _appEl_1 = ViewContainer(1, null, this, _el_1);
    _MaterialFabComponent_1_8 = import5.MaterialFabComponent(_el_1, _compView_1.ref);
    _MaterialTooltipDirective_1_9 = (import16.isDevMode
        ? import18.debugInjectorWrap(import6.MaterialTooltipDirective, () {
            return import6.MaterialTooltipDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1.ref, parentView.injectorGet(import11.Window, viewData.parentIndex));
          })
        : import6.MaterialTooltipDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1.ref, parentView.injectorGet(import11.Window, viewData.parentIndex)));
    _PopupSourceDirective_1_10 = (import16.isDevMode
        ? import18.debugInjectorWrap(import7.PopupSourceDirective, () {
            return import7.PopupSourceDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGet(import23.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import24.Focusable, viewData.parentIndex, null), null);
          })
        : import7.PopupSourceDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGet(import23.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import24.Focusable, viewData.parentIndex, null), null));
    final _text_2 = import11.Text('\n  ');
    _compView_3 = import8.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import9.MaterialIconComponent(_el_3);
    _compView_3.create(_MaterialIconComponent_3_5, []);
    final _text_4 = import11.Text('\n');
    _compView_1.create(_MaterialFabComponent_1_8, [
      [_text_2, _el_3, _text_4]
    ]);
    final _text_5 = import11.Text('\n');
    parentRenderNode.append(_text_5);
    final _anchor_6 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_6);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialFabMenuComponent1);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _text_7 = import11.Text('\n');
    parentRenderNode.append(_text_7);
    _el_1.addEventListener('keydown', eventHandler1(ctx.onKeyDown));
    _el_1.addEventListener('keypress', eventHandler1(ctx.onKeyPress));
    final subscription_0 = _MaterialFabComponent_1_8.trigger.listen(eventHandler0(ctx.trigger));
    init(const [], [subscription_0]);
    _rootEl.addEventListener('keydown', eventHandler1(_ctx.handleKeyDown));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.TooltipController) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _TooltipController_1_11;
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
      _MaterialFabComponent_1_8.raised = true;
      changed = true;
    }
    final bool currVal_3 = !_ctx.isFabEnabled;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      _MaterialFabComponent_1_8.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialFabComponent_1_8.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(_ctx.tooltipPositions, null)) {
        (_MaterialTooltipDirective_1_9.positions = _ctx.tooltipPositions);
      }
    }
    final currVal_6 = _ctx.tooltip;
    if (import15.checkBinding(_expr_6, currVal_6)) {
      _MaterialTooltipDirective_1_9.text = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.hasTooltip;
    if (import15.checkBinding(_expr_7, currVal_7)) {
      _MaterialTooltipDirective_1_9.canShow = currVal_7;
      _expr_7 = currVal_7;
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialTooltipDirective_1_9.ngOnInit();
    }
    changed = false;
    final currVal_8 = _ctx.glyph;
    if (import15.checkBinding(_expr_8, currVal_8)) {
      _MaterialIconComponent_3_5.icon = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _NgIf_6_9.ngIf = _ctx.hasMenu;
    _appEl_1.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.isFabHidden;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_1, 'invisible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaLabel;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_1, 'aria-label', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.naviId;
    if (import15.checkBinding(_expr_2, currVal_2)) {
      setAttr(_el_1, 'navi-id', currVal_2);
      _expr_2 = currVal_2;
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    if (!import15.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialTooltipDirective_1_9.ngAfterViewInit();
        _PopupSourceDirective_1_10.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _compView_1.destroy();
    _compView_3.destroy();
    _MaterialTooltipDirective_1_9.ngOnDestroy();
    _PopupSourceDirective_1_10.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialFabMenuComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialFabMenuComponent> _MaterialFabMenuComponentNgFactory = const ComponentFactory('material-fab-menu', viewFactory_MaterialFabMenuComponentHost0);
ComponentFactory<import2.MaterialFabMenuComponent> get MaterialFabMenuComponentNgFactory {
  return _MaterialFabMenuComponentNgFactory;
}

class _ViewMaterialFabMenuComponent1 extends AppView<import2.MaterialFabMenuComponent> {
  import26.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import27.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupRef_0_11;
  dynamic __PopupHierarchy_0_12;
  ViewContainer _appEl_2;
  import28.DeferredContentDirective _DeferredContentDirective_2_9;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  bool _expr_5;
  _ViewMaterialFabMenuComponent1(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialFabMenuComponent0._renderType;
  }
  dynamic get _PopupRef_0_11 {
    if ((__PopupRef_0_11 == null)) {
      (__PopupRef_0_11 = import27.getResolvedPopupRef(_MaterialPopupComponent_0_8));
    }
    return __PopupRef_0_11;
  }

  dynamic get _PopupHierarchy_0_12 {
    if ((__PopupHierarchy_0_12 == null)) {
      (__PopupHierarchy_0_12 = import27.getHierarchy(_MaterialPopupComponent_0_8));
    }
    return __PopupHierarchy_0_12;
  }

  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    _compView_0 = import26.ViewMaterialPopupComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'autoDismiss', '');
    createAttr(_el_0, 'enforceSpaceConstraints', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = (import16.isDevMode
        ? import18.debugInjectorWrap(import27.MaterialPopupComponent, () {
            return import27.MaterialPopupComponent(parentView.injectorGet(import29.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import27.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import30.NgZone, viewData.parentIndex), parentView.injectorGet(import31.OverlayService, viewData.parentIndex), parentView.injectorGet(import32.DomService, viewData.parentIndex), parentView.injectorGet(import33.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import34.OpaqueToken<List<import36.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import34.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import37.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, ElementRef(_el_0));
          })
        : import27.MaterialPopupComponent(parentView.injectorGet(import29.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import27.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import30.NgZone, viewData.parentIndex), parentView.injectorGet(import31.OverlayService, viewData.parentIndex), parentView.injectorGet(import32.DomService, viewData.parentIndex), parentView.injectorGet(import33.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import34.OpaqueToken<List<import36.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import34.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import37.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, ElementRef(_el_0)));
    final _text_1 = import11.Text('\n  ');
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialFabMenuComponent2);
    _DeferredContentDirective_2_9 = import28.DeferredContentDirective(_appEl_2, _TemplateRef_2_8, _MaterialPopupComponent_0_8);
    final _text_3 = import11.Text('\n');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    final subscription_0 = _MaterialPopupComponent_0_8.onClose.listen(eventHandler0(ctx.onPopupClosed));
    final subscription_1 = _MaterialPopupComponent_0_8.onOpened.listen(eventHandler0(ctx.onPopupOpened));
    init([_appEl_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import27.MaterialPopupComponent) || identical(token, import39.DeferredContentAware)) || identical(token, import40.DropdownHandle)) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialPopupComponent_0_8;
    }
    if ((identical(token, import41.PopupRef) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupRef_0_11;
    }
    if ((identical(token, import29.PopupHierarchy) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupHierarchy_0_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_source = import16.unsafeCast<ViewMaterialFabMenuComponent0>(parentView)._PopupSourceDirective_1_10;
    if (firstCheck) {
      _MaterialPopupComponent_0_8.autoDismiss = true;
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      _MaterialPopupComponent_0_8.hasBox = false;
    }
    final currVal_2 = _ctx.preferredPopupPositions;
    if (import15.checkBinding(_expr_2, currVal_2)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_source;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.source = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.trackLayoutChanges;
    if (import15.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.trackLayoutChanges = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.showPopup;
    if (import15.checkBinding(_expr_5, currVal_5)) {
      _MaterialPopupComponent_0_8.visible = currVal_5;
      _expr_5 = currVal_5;
    }
    if (firstCheck) {
      (_DeferredContentDirective_2_9.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import15.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _compView_0.destroy();
    _DeferredContentDirective_2_9.ngOnDestroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponent1(parentView, parentIndex);
}

class _ViewMaterialFabMenuComponent2 extends AppView<import2.MaterialFabMenuComponent> {
  import42.ViewMaterialListItemComponent0 _compView_4;
  import43.MaterialListItemComponent _MaterialListItemComponent_4_5;
  import8.ViewMaterialIconComponent0 _compView_6;
  import9.MaterialIconComponent _MaterialIconComponent_6_5;
  import44.ViewMenuItemGroupsComponent0 _compView_9;
  import45.AutoFocusDirective _AutoFocusDirective_9_5;
  import46.MenuRootDirective _MenuRootDirective_9_6;
  import46.MenuRootDirective _MenuRoot_9_7;
  import47.MenuItemGroupsComponent _MenuItemGroupsComponent_9_8;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  var _expr_7;
  var _expr_9;
  import11.DivElement _el_0;
  import11.DivElement _el_2;
  import11.Element _el_9;
  _ViewMaterialFabMenuComponent2(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialFabMenuComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    var doc = import11.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'menu-content';
    createAttr(_el_0, 'elevation', '2');
    addShimC(_el_0);
    final _text_1 = import11.Text('\n    ');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'content-wrapper';
    addShimC(_el_2);
    final _text_3 = import11.Text('\n      ');
    _el_2.append(_text_3);
    _compView_4 = import42.ViewMaterialListItemComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_2.append(_el_4);
    _el_4.className = import15.interpolate2('', 'close-menu', ' ', import43.MaterialListItemComponent.hostClass, '');
    addShimC(_el_4);
    _MaterialListItemComponent_4_5 = import43.MaterialListItemComponent(_el_4, import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8, null, null);
    final _text_5 = import11.Text('\n        ');
    _compView_6 = import8.ViewMaterialIconComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    _el_6.className = 'close-icon material-list-item-primary';
    createAttr(_el_6, 'icon', 'close');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import9.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_5, []);
    final _text_7 = import11.Text('\n      ');
    _compView_4.create(_MaterialListItemComponent_4_5, [
      [_text_5, _el_6, _text_7]
    ]);
    final _text_8 = import11.Text('\n      ');
    _el_2.append(_text_8);
    _compView_9 = import44.ViewMenuItemGroupsComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_2.append(_el_9);
    createAttr(_el_9, 'autoFocus', '');
    _el_9.className = 'menu-groups';
    createAttr(_el_9, 'menu-root', '');
    createAttr(_el_9, 'preventCloseOnPressLeft', '');
    addShimC(_el_9);
    _AutoFocusDirective_9_5 = (import16.isDevMode
        ? import18.debugInjectorWrap(import45.AutoFocusDirective, () {
            return import45.AutoFocusDirective(_el_9, parentView.parentView.injectorGet(import32.DomService, parentView.viewData.parentIndex), null, parentView.parentView.injectorGet(import48.ModalComponent, parentView.viewData.parentIndex, null), import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._PopupRef_0_11);
          })
        : import45.AutoFocusDirective(_el_9, parentView.parentView.injectorGet(import32.DomService, parentView.viewData.parentIndex), null, parentView.parentView.injectorGet(import48.ModalComponent, parentView.viewData.parentIndex, null), import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._PopupRef_0_11));
    _MenuRootDirective_9_6 = import46.MenuRootDirective(import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8);
    _MenuRoot_9_7 = _MenuRootDirective_9_6;
    _MenuItemGroupsComponent_9_8 = (import16.isDevMode
        ? import18.debugInjectorWrap(import47.MenuItemGroupsComponent, () {
            return import47.MenuItemGroupsComponent(_MenuRoot_9_7, _compView_9.ref, import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8, parentView.parentView.injectorGet(import49.IdGenerator, parentView.viewData.parentIndex, null));
          })
        : import47.MenuItemGroupsComponent(_MenuRoot_9_7, _compView_9.ref, import16.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8, parentView.parentView.injectorGet(import49.IdGenerator, parentView.viewData.parentIndex, null)));
    final _text_10 = import11.Text('\n      ');
    _compView_9.create(_MenuItemGroupsComponent_9_8, []);
    final _text_11 = import11.Text('\n    ');
    _el_2.append(_text_11);
    final _text_12 = import11.Text('\n  ');
    _el_0.append(_text_12);
    final subscription_0 = _MaterialListItemComponent_4_5.trigger.listen(eventHandler0(ctx.hideMenu));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import50.HasDisabled) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialListItemComponent_4_5;
    }
    if ((identical(token, import46.MenuRoot) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MenuRoot_9_7;
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
      _MaterialListItemComponent_4_5.closeOnActivate = false;
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_4_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'close';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_9_5.autoFocus = true);
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _AutoFocusDirective_9_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MenuItemGroupsComponent_9_8.preventCloseOnPressLeft = '';
      changed = true;
      if (!identical(_ctx.activeModel, null)) {
        _MenuItemGroupsComponent_9_8.activeModel = _ctx.activeModel;
        changed = true;
      }
    }
    final currVal_9 = _ctx.menuItem.subMenu;
    if (import15.checkBinding(_expr_9, currVal_9)) {
      _MenuItemGroupsComponent_9_8.menu = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _MenuItemGroupsComponent_9_8.ngOnInit();
    }
    final currVal_0 = _ctx.menuVisible;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.closing;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_0, 'closing', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hasIcons;
    if (import15.checkBinding(_expr_2, currVal_2)) {
      updateClass(_el_0, 'has-icons', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.menuVisible;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      updateClass(_el_2, 'visible', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.closing;
    if (import15.checkBinding(_expr_4, currVal_4)) {
      updateClass(_el_2, 'closing', currVal_4);
      _expr_4 = currVal_4;
    }
    _compView_4.detectHostChanges(firstCheck);
    final currVal_7 = _ctx.activeModel.activeId;
    if (import15.checkBinding(_expr_7, currVal_7)) {
      setAttr(_el_9, 'aria-activedescendant', currVal_7);
      _expr_7 = currVal_7;
    }
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    _compView_9.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_4.destroy();
    _compView_6.destroy();
    _compView_9.destroy();
    _MaterialListItemComponent_4_5.ngOnDestroy();
    _AutoFocusDirective_9_5.ngOnDestroy();
    _MenuItemGroupsComponent_9_8.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialFabMenuComponentHost = const [];

class _ViewMaterialFabMenuComponentHost0 extends AppView<import2.MaterialFabMenuComponent> {
  ViewMaterialFabMenuComponent0 _compView_0;
  import2.MaterialFabMenuComponent _MaterialFabMenuComponent_0_5;
  _ViewMaterialFabMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    _compView_0 = ViewMaterialFabMenuComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialFabMenuComponent_0_5 = (import16.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialFabMenuComponent, () {
            return import2.MaterialFabMenuComponent(_compView_0.ref, this.injectorGet(import49.IdGenerator, viewData.parentIndex, null));
          })
        : import2.MaterialFabMenuComponent(_compView_0.ref, this.injectorGet(import49.IdGenerator, viewData.parentIndex, null)));
    _compView_0.create(_MaterialFabMenuComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialFabMenuComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialFabMenuComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialFabMenuComponent, MaterialFabMenuComponentNgFactory);
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
}
