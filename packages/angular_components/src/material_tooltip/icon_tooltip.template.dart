// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'icon_tooltip.dart';
export 'icon_tooltip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref2;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/theme/dark_theme.template.dart' as _ref5;
import 'paper_tooltip.template.dart' as _ref6;
import 'tooltip_target.template.dart' as _ref7;
import 'package:angular_components/src/material_tooltip/icon_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'icon_tooltip.dart' as import2;
import '../../material_icon/material_icon.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'tooltip_target.dart' as import5;
import '../../material_icon/material_icon.dart' as import6;
import '../../focus/keyboard_only_focus_indicator.dart' as import7;
import 'paper_tooltip.template.dart' as import8;
import 'paper_tooltip.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import17;
import '../laminate/popup/dom_popup_source.dart' as import18;
import '../../utils/browser/dom_service/dom_service.dart' as import19;
import 'tooltip_controller.dart' as import20;
import '../../material_tooltip/module.dart' as import21;
import '../../utils/disposer/disposer.dart' as import22;
import '../../content/deferred_content_aware.dart' as import23;
import '../../theme/dark_theme.dart' as import24;
import 'package:angular/src/core/di/opaque_token.dart' as import25;

final List<dynamic> styles$MaterialIconTooltipComponent = [import0.styles];

class ViewMaterialIconTooltipComponent0 extends AppView<import2.MaterialIconTooltipComponent> {
  import3.ViewMaterialIconComponent0 _compView_1;
  ViewContainer _appEl_1;
  import5.ClickableTooltipTargetDirective _ClickableTooltipTargetDirective_1_8;
  import6.MaterialIconComponent _MaterialIconComponent_1_9;
  import7.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_1_10;
  import8.ViewMaterialPaperTooltipComponent0 _compView_4;
  dynamic _TooltipController_4_5;
  import9.MaterialPaperTooltipComponent _MaterialPaperTooltipComponent_4_6;
  dynamic __Tooltip_4_7;
  var _expr_3;
  int _expr_4;
  int _expr_5;
  var _expr_6;
  import10.Element _el_1;
  static RenderComponentType _renderType;
  ViewMaterialIconTooltipComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import10.document.createElement('material-icon-tooltip');
    _renderType ??= import14.appViewUtils.createRenderType((import15.isDevMode ? 'asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart' : null), ViewEncapsulation.Emulated, styles$MaterialIconTooltipComponent);
    setupComponentType(_renderType);
  }
  dynamic get _Tooltip_4_7 {
    if ((__Tooltip_4_7 == null)) {
      (__Tooltip_4_7 = import9.getTooltipHandle(_MaterialPaperTooltipComponent_4_6));
    }
    return __Tooltip_4_7;
  }

  @override
  ComponentRef<import2.MaterialIconTooltipComponent> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import10.Text('    ');
    parentRenderNode.append(_text_0);
    _compView_1 = import3.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    createAttr(_el_1, 'clickableTooltipTarget', '');
    createAttr(_el_1, 'keyboardOnlyFocusIndicator', '');
    _el_1.tabIndex = 0;
    addShimC(_el_1);
    _appEl_1 = ViewContainer(1, null, this, _el_1);
    _ClickableTooltipTargetDirective_1_8 = (import15.isDevMode
        ? import17.debugInjectorWrap(import5.ClickableTooltipTargetDirective, () {
            return import5.ClickableTooltipTargetDirective(parentView.injectorGet(import18.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _compView_1.ref);
          })
        : import5.ClickableTooltipTargetDirective(parentView.injectorGet(import18.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _compView_1.ref));
    _MaterialIconComponent_1_9 = import6.MaterialIconComponent(_el_1);
    _KeyboardOnlyFocusIndicatorDirective_1_10 = (import15.isDevMode
        ? import17.debugInjectorWrap(import7.KeyboardOnlyFocusIndicatorDirective, () {
            return import7.KeyboardOnlyFocusIndicatorDirective(_el_1, parentView.injectorGet(import19.DomService, viewData.parentIndex));
          })
        : import7.KeyboardOnlyFocusIndicatorDirective(_el_1, parentView.injectorGet(import19.DomService, viewData.parentIndex)));
    final _text_2 = import10.Text('\n    ');
    _compView_1.create(_MaterialIconComponent_1_9, []);
    final _text_3 = import10.Text('\n    ');
    parentRenderNode.append(_text_3);
    _compView_4 = import8.ViewMaterialPaperTooltipComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    addShimC(_el_4);
    _TooltipController_4_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import20.TooltipController, () {
            return import21.createTooltipController(parentView.injectorGet(import20.TooltipController, viewData.parentIndex, null), parentView.injectorGet(import22.Disposer, viewData.parentIndex, null));
          })
        : import21.createTooltipController(parentView.injectorGet(import20.TooltipController, viewData.parentIndex, null), parentView.injectorGet(import22.Disposer, viewData.parentIndex, null)));
    _MaterialPaperTooltipComponent_4_6 = import9.MaterialPaperTooltipComponent(_TooltipController_4_5, _compView_4.ref, _el_4, null);
    final _text_5 = import10.Text('\n      ');
    final _text_6 = import10.Text('\n    ');
    _compView_4.create(_MaterialPaperTooltipComponent_4_6, [
      const [],
      <dynamic>[_text_5]..addAll(projectableNodes[0])..addAll([_text_6]),
      const []
    ]);
    _el_1.addEventListener('blur', eventHandler1(_handle_blur_1_0));
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_1));
    _el_1.addEventListener('mouseover', eventHandler0(_ClickableTooltipTargetDirective_1_8.onMouseOver));
    _el_1.addEventListener('mouseleave', eventHandler0(_ClickableTooltipTargetDirective_1_8.onMouseLeave));
    _el_1.addEventListener('keypress', eventHandler1(_ClickableTooltipTargetDirective_1_8.kbTrigger));
    _el_1.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_1_10.keydown));
    _el_1.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_10.onMouseInteraction));
    _el_1.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_1_10.onFocus));
    ctx.tooltipBehavior = _ClickableTooltipTargetDirective_1_8;
    init(const [], null);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.TooltipController) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _TooltipController_4_5;
    }
    if (((identical(token, import9.MaterialPaperTooltipComponent) || identical(token, import23.DeferredContentAware)) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialPaperTooltipComponent_4_6;
    }
    if ((identical(token, import20.Tooltip) && ((4 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _Tooltip_4_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import5.ClickableTooltipTargetDirective local_tooltipRef = _ClickableTooltipTargetDirective_1_8;
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.icon, null)) {
        _MaterialIconComponent_1_9.icon = _ctx.icon;
        changed = true;
      }
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    final currVal_3 = _ctx.preferredPositions;
    if (import14.checkBinding(_expr_3, currVal_3)) {
      _MaterialPaperTooltipComponent_4_6.preferredPositions = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.offsetX;
    if (import14.checkBinding(_expr_4, currVal_4)) {
      _MaterialPaperTooltipComponent_4_6.offsetX = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.offsetY;
    if (import14.checkBinding(_expr_5, currVal_5)) {
      _MaterialPaperTooltipComponent_4_6.offsetY = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = local_tooltipRef;
    if (import14.checkBinding(_expr_6, currVal_6)) {
      _MaterialPaperTooltipComponent_4_6.tooltipRef = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    _appEl_1.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(import2.MaterialIconTooltipComponent.helpTooltipLabel, null)) {
        setAttr(_el_1, 'aria-label', import2.MaterialIconTooltipComponent.helpTooltipLabel);
      }
      if (!identical(_ctx.iconSize, null)) {
        setAttr(_el_1, 'size', _ctx.iconSize);
      }
    }
    _compView_1.detectChanges();
    _compView_4.detectChanges();
    if (!import14.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _ClickableTooltipTargetDirective_1_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _compView_1.destroy();
    _compView_4.destroy();
    _ClickableTooltipTargetDirective_1_8.ngOnDestroy();
  }

  void _handle_blur_1_0($event) {
    _ClickableTooltipTargetDirective_1_8.onBlur($event);
    _KeyboardOnlyFocusIndicatorDirective_1_10.resetOutline();
  }

  void _handle_click_1_1($event) {
    _ClickableTooltipTargetDirective_1_8.onClick();
    _KeyboardOnlyFocusIndicatorDirective_1_10.onMouseInteraction();
  }
}

AppView<import2.MaterialIconTooltipComponent> viewFactory_MaterialIconTooltipComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialIconTooltipComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialIconTooltipComponent> _MaterialIconTooltipComponentNgFactory = const ComponentFactory('material-icon-tooltip', viewFactory_MaterialIconTooltipComponentHost0);
ComponentFactory<import2.MaterialIconTooltipComponent> get MaterialIconTooltipComponentNgFactory {
  return _MaterialIconTooltipComponentNgFactory;
}

final List<dynamic> styles$MaterialIconTooltipComponentHost = const [];

class _ViewMaterialIconTooltipComponentHost0 extends AppView<import2.MaterialIconTooltipComponent> {
  ViewMaterialIconTooltipComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import2.MaterialIconTooltipComponent _MaterialIconTooltipComponent_0_6;
  _ViewMaterialIconTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialIconTooltipComponent> build() {
    _compView_0 = ViewMaterialIconTooltipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AcxDarkTheme_0_5 = (import15.isDevMode
        ? import17.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(this.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import24.AcxDarkTheme(this.injectorGet(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialIconTooltipComponent_0_6 = import2.MaterialIconTooltipComponent(_AcxDarkTheme_0_5, rootEl, null, null, null);
    _compView_0.create(_MaterialIconTooltipComponent_0_6, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialIconTooltipComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import24.AcxDarkTheme) && (0 == nodeIndex))) {
      return _AcxDarkTheme_0_5;
    }
    if ((identical(token, import23.DeferredContentAware) && (0 == nodeIndex))) {
      return _MaterialIconTooltipComponent_0_6;
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

AppView<import2.MaterialIconTooltipComponent> viewFactory_MaterialIconTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialIconTooltipComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialIconTooltipComponent, MaterialIconTooltipComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
