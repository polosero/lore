// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ink_tooltip.dart';
export 'ink_tooltip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref2;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref3;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref4;
import 'package:angular_components/material_tooltip/module.template.dart' as _ref5;
import 'tooltip_controller.template.dart' as _ref6;
import 'tooltip_target.template.dart' as _ref7;
import 'package:angular_components/src/material_tooltip/ink_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'ink_tooltip.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../../material_popup/material_popup.template.dart' as import13;
import '../../material_popup/material_popup.dart' as import14;
import '../../content/deferred_content.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../laminate/popup/popup_hierarchy.dart' as import17;
import 'package:angular/src/core/zone/ng_zone.dart' as import18;
import '../laminate/overlay/overlay_service.dart' as import19;
import '../../utils/browser/dom_service/dom_service.dart' as import20;
import '../../laminate/overlay/zindexer.dart' as import21;
import 'package:angular/src/core/di/opaque_token.dart' as import22;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import24;
import '../laminate/popup/popup_size_provider.dart' as import25;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../content/deferred_content_aware.dart' as import27;
import '../../mixins/material_dropdown_base.dart' as import28;
import '../laminate/popup/popup_ref.dart' as import29;
import 'tooltip_controller.dart' as import30;
import '../../material_tooltip/module.dart' as import31;
import '../../utils/disposer/disposer.dart' as import32;

final List<dynamic> styles$MaterialInkTooltipComponent = [import0.styles];

class ViewMaterialInkTooltipComponent0 extends AppView<import2.MaterialInkTooltipComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  static RenderComponentType _renderType;
  ViewMaterialInkTooltipComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('material-tooltip-text');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart' : null), ViewEncapsulation.Emulated, styles$MaterialInkTooltipComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import8.Text('        ');
    parentRenderNode.append(_text_0);
    final _anchor_1 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_1);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialInkTooltipComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = (_ctx.popupSource != null);
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialInkTooltipComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialInkTooltipComponent> _MaterialInkTooltipComponentNgFactory = const ComponentFactory('material-tooltip-text', viewFactory_MaterialInkTooltipComponentHost0);
ComponentFactory<import2.MaterialInkTooltipComponent> get MaterialInkTooltipComponentNgFactory {
  return _MaterialInkTooltipComponentNgFactory;
}

class _ViewMaterialInkTooltipComponent1 extends AppView<import2.MaterialInkTooltipComponent> {
  import13.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import14.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupHierarchy_0_11;
  dynamic __PopupRef_0_12;
  ViewContainer _appEl_2;
  import15.DeferredContentDirective _DeferredContentDirective_2_9;
  var _expr_3;
  var _expr_4;
  bool _expr_6;
  _ViewMaterialInkTooltipComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInkTooltipComponent0._renderType;
  }
  dynamic get _PopupHierarchy_0_11 {
    if ((__PopupHierarchy_0_11 == null)) {
      (__PopupHierarchy_0_11 = import14.getHierarchy(_MaterialPopupComponent_0_8));
    }
    return __PopupHierarchy_0_11;
  }

  dynamic get _PopupRef_0_12 {
    if ((__PopupRef_0_12 == null)) {
      (__PopupRef_0_12 = import14.getResolvedPopupRef(_MaterialPopupComponent_0_8));
    }
    return __PopupRef_0_12;
  }

  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    _compView_0 = import13.ViewMaterialPopupComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.className = 'aacmtit-ink-tooltip-shadow';
    createAttr(_el_0, 'enforceSpaceConstraints', '');
    createAttr(_el_0, 'ink', '');
    createAttr(_el_0, 'role', 'tooltip');
    createAttr(_el_0, 'trackLayoutChanges', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = (import10.isDevMode
        ? import16.debugInjectorWrap(import14.MaterialPopupComponent, () {
            return import14.MaterialPopupComponent(parentView.injectorGet(import17.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import14.MaterialPopupComponent, viewData.parentIndex, null), 'tooltip', parentView.injectorGet(import18.NgZone, viewData.parentIndex), parentView.injectorGet(import19.OverlayService, viewData.parentIndex), parentView.injectorGet(import20.DomService, viewData.parentIndex), parentView.injectorGet(import21.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<List<import24.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import25.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, ElementRef(_el_0));
          })
        : import14.MaterialPopupComponent(parentView.injectorGet(import17.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import14.MaterialPopupComponent, viewData.parentIndex, null), 'tooltip', parentView.injectorGet(import18.NgZone, viewData.parentIndex), parentView.injectorGet(import19.OverlayService, viewData.parentIndex), parentView.injectorGet(import20.DomService, viewData.parentIndex), parentView.injectorGet(import21.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<List<import24.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import25.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, ElementRef(_el_0)));
    final _text_1 = import8.Text('\n          ');
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialInkTooltipComponent2);
    _DeferredContentDirective_2_9 = import15.DeferredContentDirective(_appEl_2, _TemplateRef_2_8, _MaterialPopupComponent_0_8);
    final _text_3 = import8.Text('\n        ');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    init0(_appEl_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import14.MaterialPopupComponent) || identical(token, import27.DeferredContentAware)) || identical(token, import28.DropdownHandle)) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialPopupComponent_0_8;
    }
    if ((identical(token, import17.PopupHierarchy) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupHierarchy_0_11;
    }
    if ((identical(token, import29.PopupRef) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _PopupRef_0_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _MaterialPopupComponent_0_8.autoDismiss = false;
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      _MaterialPopupComponent_0_8.matchMinSourceWidth = false;
      _MaterialPopupComponent_0_8.trackLayoutChanges = true;
      _MaterialPopupComponent_0_8.inkBackground = true;
    }
    final currVal_3 = _ctx.positions;
    if (import9.checkBinding(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.popupSource;
    if (import9.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.source = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_6 = _ctx.showPopup;
    if (import9.checkBinding(_expr_6, currVal_6)) {
      _MaterialPopupComponent_0_8.visible = currVal_6;
      _expr_6 = currVal_6;
    }
    if (firstCheck) {
      (_DeferredContentDirective_2_9.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import9.AppViewUtils.throwOnChanges) {
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

AppView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInkTooltipComponent1(parentView, parentIndex);
}

class _ViewMaterialInkTooltipComponent2 extends AppView<import2.MaterialInkTooltipComponent> {
  var _expr_0;
  import8.Text _text_2;
  _ViewMaterialInkTooltipComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialInkTooltipComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    var doc = import8.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'ink-container';
    addShimC(_el_0);
    final _text_1 = import8.Text('\n            ');
    _el_0.append(_text_1);
    _text_2 = import8.Text('');
    _el_0.append(_text_2);
    project(_el_0, 0);
    final _text_3 = import8.Text('\n          ');
    _el_0.append(_text_3);
    _el_0.addEventListener('mouseover', eventHandler0(ctx.onMouseOver));
    _el_0.addEventListener('mouseleave', eventHandler0(ctx.onMouseLeave));
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.text ?? '');
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInkTooltipComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialInkTooltipComponentHost = const [];

class _ViewMaterialInkTooltipComponentHost0 extends AppView<import2.MaterialInkTooltipComponent> {
  ViewMaterialInkTooltipComponent0 _compView_0;
  dynamic _TooltipController_0_5;
  import2.MaterialInkTooltipComponent _MaterialInkTooltipComponent_0_6;
  _ViewMaterialInkTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    _compView_0 = ViewMaterialInkTooltipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TooltipController_0_5 = (import10.isDevMode
        ? import16.debugInjectorWrap(import30.TooltipController, () {
            return import31.createTooltipController(this.injectorGet(import30.TooltipController, viewData.parentIndex, null), this.injectorGet(import32.Disposer, viewData.parentIndex, null));
          })
        : import31.createTooltipController(this.injectorGet(import30.TooltipController, viewData.parentIndex, null), this.injectorGet(import32.Disposer, viewData.parentIndex, null)));
    _MaterialInkTooltipComponent_0_6 = import2.MaterialInkTooltipComponent(_TooltipController_0_5, _compView_0.ref);
    _compView_0.create(_MaterialInkTooltipComponent_0_6, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialInkTooltipComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import30.TooltipController) && (0 == nodeIndex))) {
      return _TooltipController_0_5;
    }
    return notFoundResult;
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
  }
}

AppView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInkTooltipComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialInkTooltipComponent, MaterialInkTooltipComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
