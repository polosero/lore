// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'paper_tooltip.dart';
export 'paper_tooltip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref4;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref5;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref6;
import 'package:angular_components/material_tooltip/module.template.dart' as _ref7;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref8;
import 'tooltip_controller.template.dart' as _ref9;
import 'tooltip_target.template.dart' as _ref10;
import 'package:angular_components/src/material_tooltip/paper_tooltip.dart' as _i1;
import 'package:angular_components/src/material_tooltip/paper_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'paper_tooltip.dart' as import2;
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
import '../../focus/focus.dart' as import15;
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
import '../../laminate/components/modal/modal.dart' as import27;
import '../../content/deferred_content_aware.dart' as import28;
import '../../mixins/material_dropdown_base.dart' as import29;
import '../laminate/popup/popup_ref.dart' as import30;
import 'tooltip_controller.dart' as import31;
import '../../material_tooltip/module.dart' as import32;
import '../../utils/disposer/disposer.dart' as import33;

final List<dynamic> styles$MaterialPaperTooltipComponent = [import0.styles];

class ViewMaterialPaperTooltipComponent0 extends AppView<import2.MaterialPaperTooltipComponent> {
  ViewContainer _appEl_0;
  bool _query_MaterialPopupComponent_1_0_isDirty = true;
  NgIf _NgIf_0_9;
  static RenderComponentType _renderType;
  ViewMaterialPaperTooltipComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('material-tooltip-card');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart' : null), ViewEncapsulation.Emulated, styles$MaterialPaperTooltipComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialPaperTooltipComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialPaperTooltipComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.popupSource != null);
    _appEl_0.detectChangesInNestedViews();
    if (!import9.AppViewUtils.throwOnChanges) {
      if (_query_MaterialPopupComponent_1_0_isDirty) {
        ctx.popupChild = import9.firstOrNull(_appEl_0.mapNestedViews((_ViewMaterialPaperTooltipComponent1 nestedView) {
          return [nestedView._MaterialPopupComponent_0_8];
        }));
        _query_MaterialPopupComponent_1_0_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<import2.MaterialPaperTooltipComponent> viewFactory_MaterialPaperTooltipComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialPaperTooltipComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialPaperTooltipComponent> _MaterialPaperTooltipComponentNgFactory = const ComponentFactory('material-tooltip-card', viewFactory_MaterialPaperTooltipComponentHost0);
ComponentFactory<import2.MaterialPaperTooltipComponent> get MaterialPaperTooltipComponentNgFactory {
  return _MaterialPaperTooltipComponentNgFactory;
}

class _ViewMaterialPaperTooltipComponent1 extends AppView<import2.MaterialPaperTooltipComponent> {
  import13.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import14.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic _PopupRef_0_9;
  dynamic __PopupHierarchy_0_12;
  import15.AutoFocusDirective _AutoFocusDirective_2_5;
  bool _expr_1;
  int _expr_3;
  int _expr_4;
  var _expr_5;
  var _expr_6;
  bool _expr_8;
  bool _expr_9;
  import8.Element _el_0;
  _ViewMaterialPaperTooltipComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialPaperTooltipComponent0._renderType;
  }
  dynamic get _PopupHierarchy_0_12 {
    if ((__PopupHierarchy_0_12 == null)) {
      (__PopupHierarchy_0_12 = import14.getHierarchy(_MaterialPopupComponent_0_8));
    }
    return __PopupHierarchy_0_12;
  }

  @override
  ComponentRef<import2.MaterialPaperTooltipComponent> build() {
    _compView_0 = import13.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'enforceSpaceConstraints', '');
    createAttr(_el_0, 'role', 'tooltip');
    createAttr(_el_0, 'trackLayoutChanges', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = (import10.isDevMode
        ? import16.debugInjectorWrap(import14.MaterialPopupComponent, () {
            return import14.MaterialPopupComponent(parentView.injectorGet(import17.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import14.MaterialPopupComponent, viewData.parentIndex, null), 'tooltip', parentView.injectorGet(import18.NgZone, viewData.parentIndex), parentView.injectorGet(import19.OverlayService, viewData.parentIndex), parentView.injectorGet(import20.DomService, viewData.parentIndex), parentView.injectorGet(import21.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<List<import24.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import25.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, ElementRef(_el_0));
          })
        : import14.MaterialPopupComponent(parentView.injectorGet(import17.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import14.MaterialPopupComponent, viewData.parentIndex, null), 'tooltip', parentView.injectorGet(import18.NgZone, viewData.parentIndex), parentView.injectorGet(import19.OverlayService, viewData.parentIndex), parentView.injectorGet(import20.DomService, viewData.parentIndex), parentView.injectorGet(import21.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<List<import24.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import25.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, ElementRef(_el_0)));
    _PopupRef_0_9 = import14.getResolvedPopupRef(_MaterialPopupComponent_0_8);
    final _text_1 = import8.Text('\n  ');
    var doc = import8.document;
    final _el_2 = doc.createElement('div');
    _el_2.className = 'paper-container';
    addShimC(_el_2);
    _AutoFocusDirective_2_5 = (import10.isDevMode
        ? import16.debugInjectorWrap(import15.AutoFocusDirective, () {
            return import15.AutoFocusDirective(_el_2, parentView.injectorGet(import20.DomService, viewData.parentIndex), null, parentView.injectorGet(import27.ModalComponent, viewData.parentIndex, null), _PopupRef_0_9);
          })
        : import15.AutoFocusDirective(_el_2, parentView.injectorGet(import20.DomService, viewData.parentIndex), null, parentView.injectorGet(import27.ModalComponent, viewData.parentIndex, null), _PopupRef_0_9));
    final _text_3 = import8.Text('\n    ');
    _el_2.append(_text_3);
    final _el_4 = createDivAndAppend(doc, _el_2);
    _el_4.className = 'header';
    addShimC(_el_4);
    project(_el_4, 0);
    final _text_5 = import8.Text('\n    ');
    _el_2.append(_text_5);
    final _el_6 = createDivAndAppend(doc, _el_2);
    _el_6.className = 'body';
    addShimC(_el_6);
    project(_el_6, 1);
    final _text_7 = import8.Text('\n    ');
    _el_2.append(_text_7);
    final _el_8 = createDivAndAppend(doc, _el_2);
    _el_8.className = 'footer';
    addShimC(_el_8);
    project(_el_8, 2);
    final _text_9 = import8.Text('\n  ');
    _el_2.append(_text_9);
    final _text_10 = import8.Text('\n');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _el_2, _text_10],
      const []
    ]);
    _el_2.addEventListener('mouseover', eventHandler0(ctx.onMouseOver));
    _el_2.addEventListener('mouseleave', eventHandler0(ctx.onMouseLeave));
    init0(_appEl_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import14.MaterialPopupComponent) || identical(token, import28.DeferredContentAware)) || identical(token, import29.DropdownHandle)) && ((0 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MaterialPopupComponent_0_8;
    }
    if ((identical(token, import30.PopupRef) && ((0 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _PopupRef_0_9;
    }
    if ((identical(token, import17.PopupHierarchy) && ((0 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _PopupHierarchy_0_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      _MaterialPopupComponent_0_8.trackLayoutChanges = true;
    }
    final currVal_1 = _ctx.focusContents;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _MaterialPopupComponent_0_8.autoDismiss = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.offsetX;
    if (import9.checkBinding(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.offsetX = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.offsetY;
    if (import9.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.offsetY = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.preferredPositions;
    if (import9.checkBinding(_expr_5, currVal_5)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.popupSource;
    if (import9.checkBinding(_expr_6, currVal_6)) {
      _MaterialPopupComponent_0_8.source = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.showPopup;
    if (import9.checkBinding(_expr_8, currVal_8)) {
      _MaterialPopupComponent_0_8.visible = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.focusContents;
    if (import9.checkBinding(_expr_9, currVal_9)) {
      _AutoFocusDirective_2_5.autoFocus = currVal_9;
      _expr_9 = currVal_9;
    }
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _AutoFocusDirective_2_5.ngOnInit();
    }
    _appEl_0.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        _compView_0.updateChildClass(_el_0, _ctx.popupClassName);
      }
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import9.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import10.unsafeCast<ViewMaterialPaperTooltipComponent0>(parentView)._query_MaterialPopupComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroy();
    _AutoFocusDirective_2_5.ngOnDestroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialPaperTooltipComponent> viewFactory_MaterialPaperTooltipComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialPaperTooltipComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialPaperTooltipComponentHost = const [];

class _ViewMaterialPaperTooltipComponentHost0 extends AppView<import2.MaterialPaperTooltipComponent> {
  ViewMaterialPaperTooltipComponent0 _compView_0;
  dynamic _TooltipController_0_5;
  import2.MaterialPaperTooltipComponent _MaterialPaperTooltipComponent_0_6;
  dynamic __Tooltip_0_7;
  _ViewMaterialPaperTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Tooltip_0_7 {
    if ((__Tooltip_0_7 == null)) {
      (__Tooltip_0_7 = import2.getTooltipHandle(_MaterialPaperTooltipComponent_0_6));
    }
    return __Tooltip_0_7;
  }

  @override
  ComponentRef<import2.MaterialPaperTooltipComponent> build() {
    _compView_0 = ViewMaterialPaperTooltipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TooltipController_0_5 = (import10.isDevMode
        ? import16.debugInjectorWrap(import31.TooltipController, () {
            return import32.createTooltipController(this.injectorGet(import31.TooltipController, viewData.parentIndex, null), this.injectorGet(import33.Disposer, viewData.parentIndex, null));
          })
        : import32.createTooltipController(this.injectorGet(import31.TooltipController, viewData.parentIndex, null), this.injectorGet(import33.Disposer, viewData.parentIndex, null)));
    _MaterialPaperTooltipComponent_0_6 = import2.MaterialPaperTooltipComponent(_TooltipController_0_5, _compView_0.ref, rootEl, null);
    _compView_0.create(_MaterialPaperTooltipComponent_0_6, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialPaperTooltipComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import31.TooltipController) && (0 == nodeIndex))) {
      return _TooltipController_0_5;
    }
    if (((identical(token, import2.MaterialPaperTooltipComponent) || identical(token, import28.DeferredContentAware)) && (0 == nodeIndex))) {
      return _MaterialPaperTooltipComponent_0_6;
    }
    if ((identical(token, import31.Tooltip) && (0 == nodeIndex))) {
      return _Tooltip_0_7;
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

AppView<import2.MaterialPaperTooltipComponent> viewFactory_MaterialPaperTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialPaperTooltipComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialPaperTooltipComponent, MaterialPaperTooltipComponentNgFactory);
  _ngRef.registerDependencies(getTooltipHandle, const [
    const [_i1.MaterialPaperTooltipComponent]
  ]);
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
