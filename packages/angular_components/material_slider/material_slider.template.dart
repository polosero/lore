// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_slider.dart';
export 'material_slider.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref2;
import 'package:angular_components/material_slider/material_slider.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_slider.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import10;
import '../utils/browser/dom_service/dom_service.dart' as import11;
import '../interfaces/has_disabled.dart' as import12;

final List<dynamic> styles$MaterialSliderComponent = [import0.styles];

class ViewMaterialSliderComponent0 extends AppView<import2.MaterialSliderComponent> {
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  bool _expr_8;
  var _expr_9;
  var _expr_10;
  bool _expr_11;
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.DivElement _el_3;
  import3.DivElement _el_6;
  import3.DivElement _el_7;
  static RenderComponentType _renderType;
  ViewMaterialSliderComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-slider');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/material_slider/material_slider.dart' : null), ViewEncapsulation.Emulated, styles$MaterialSliderComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialSliderComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'container';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'track-container left-track-container';
    addShimC(_el_1);
    final _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'track';
    addShimC(_el_2);
    _el_3 = createDivAndAppend(doc, _el_0);
    _el_3.className = 'knob';
    createAttr(_el_3, 'role', 'slider');
    addShimC(_el_3);
    final _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'knob-real';
    addShimC(_el_4);
    final _el_5 = createDivAndAppend(doc, _el_3);
    _el_5.className = 'knob-hover-shadow';
    addShimC(_el_5);
    _el_6 = createDivAndAppend(doc, _el_3);
    _el_6.className = 'knob-drag-shadow';
    addShimC(_el_6);
    _el_7 = createDivAndAppend(doc, _el_0);
    _el_7.className = 'track-container right-track-container';
    addShimC(_el_7);
    final _el_8 = createDivAndAppend(doc, _el_7);
    _el_8.className = 'track';
    addShimC(_el_8);
    _el_0.addEventListener('mousedown', eventHandler1(ctx.mouseDown));
    _el_0.addEventListener('touchstart', eventHandler1(ctx.touchStart));
    _el_3.addEventListener('keydown', eventHandler1(ctx.knobKeyDown));
    ctx.container = _el_0;
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.disabled;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'is-disabled', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.progressPercent;
    if (import7.checkBinding(_expr_1, currVal_1)) {
      _el_1.style.setProperty('width', ((currVal_1?.toString() == null) ? null : (currVal_1?.toString() + '%')));
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.disabled ? (0 - 1) : 0);
    if (import7.checkBinding(_expr_2, currVal_2)) {
      setAttr(_el_3, 'tabindex', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.isRtl ? 0 : (0 - 8));
    if (import7.checkBinding(_expr_3, currVal_3)) {
      _el_3.style.setProperty('margin-left', ((currVal_3?.toString() == null) ? null : (currVal_3?.toString() + 'px')));
      _expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.isRtl ? (0 - 8) : 0);
    if (import7.checkBinding(_expr_4, currVal_4)) {
      _el_3.style.setProperty('margin-right', ((currVal_4?.toString() == null) ? null : (currVal_4?.toString() + 'px')));
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.min;
    if (import7.checkBinding(_expr_5, currVal_5)) {
      setAttr(_el_3, 'aria-valuemin', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.max;
    if (import7.checkBinding(_expr_6, currVal_6)) {
      setAttr(_el_3, 'aria-valuemax', currVal_6?.toString());
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.value;
    if (import7.checkBinding(_expr_7, currVal_7)) {
      setAttr(_el_3, 'aria-valuenow', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.isDragging;
    if (import7.checkBinding(_expr_8, currVal_8)) {
      updateClass(_el_6, 'is-dragging', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = import7.interpolate1('calc(', (100 - _ctx.progressPercent), '% + 8px)');
    if (import7.checkBinding(_expr_9, currVal_9)) {
      _el_7.style.setProperty('width', currVal_9.toString());
      _expr_9 = currVal_9;
    }
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_10 = ctx.disabled;
    if (import7.checkBinding(_expr_10, currVal_10)) {
      setAttr(rootEl, 'aria-disabled', currVal_10?.toString());
      _expr_10 = currVal_10;
    }
    final currVal_11 = ctx.disabled;
    if (import7.checkBinding(_expr_11, currVal_11)) {
      updateElemClass(rootEl, 'is-disabled', currVal_11);
      _expr_11 = currVal_11;
    }
  }
}

AppView<import2.MaterialSliderComponent> viewFactory_MaterialSliderComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialSliderComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialSliderComponent> _MaterialSliderComponentNgFactory = const ComponentFactory('material-slider', viewFactory_MaterialSliderComponentHost0);
ComponentFactory<import2.MaterialSliderComponent> get MaterialSliderComponentNgFactory {
  return _MaterialSliderComponentNgFactory;
}

final List<dynamic> styles$MaterialSliderComponentHost = const [];

class _ViewMaterialSliderComponentHost0 extends AppView<import2.MaterialSliderComponent> {
  ViewMaterialSliderComponent0 _compView_0;
  import2.MaterialSliderComponent _MaterialSliderComponent_0_5;
  _ViewMaterialSliderComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialSliderComponent> build() {
    _compView_0 = ViewMaterialSliderComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSliderComponent_0_5 = (import8.isDevMode
        ? import10.debugInjectorWrap(import2.MaterialSliderComponent, () {
            return import2.MaterialSliderComponent(_compView_0.ref, this.injectorGet(import11.DomService, viewData.parentIndex));
          })
        : import2.MaterialSliderComponent(_compView_0.ref, this.injectorGet(import11.DomService, viewData.parentIndex)));
    _compView_0.create(_MaterialSliderComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialSliderComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialSliderComponent) || identical(token, import12.HasDisabled)) && (0 == nodeIndex))) {
      return _MaterialSliderComponent_0_5;
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
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.MaterialSliderComponent> viewFactory_MaterialSliderComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSliderComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSliderComponent, MaterialSliderComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
