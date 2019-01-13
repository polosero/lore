// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_progress.dart';
export 'material_progress.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref1;
import 'package:angular_components/material_progress/material_progress.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_progress.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$MaterialProgressComponent = [import0.styles];

class ViewMaterialProgressComponent0 extends AppView<import2.MaterialProgressComponent> {
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.DivElement _el_2;
  static RenderComponentType _renderType;
  ViewMaterialProgressComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-progress');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/material_progress/material_progress.dart' : null), ViewEncapsulation.Emulated, styles$MaterialProgressComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialProgressComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'progress-container';
    createAttr(_el_0, 'role', 'progressbar');
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'secondary-progress';
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    _el_2.className = 'active-progress';
    addShimC(_el_2);
    ctx.primary = _el_2;
    ctx.secondary = _el_1;
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.ariaValue;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-valuenow', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.indeterminate;
    if (import7.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_0, 'indeterminate', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.useFallbackAnimation;
    if (import7.checkBinding(_expr_2, currVal_2)) {
      updateClass(_el_0, 'fallback', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = import7.interpolate0(_ctx.min);
    if (import7.checkBinding(_expr_3, currVal_3)) {
      setAttr(_el_0, 'aria-valuemin', currVal_3.toString());
      _expr_3 = currVal_3;
    }
    final currVal_4 = import7.interpolate0(_ctx.max);
    if (import7.checkBinding(_expr_4, currVal_4)) {
      setAttr(_el_0, 'aria-valuemax', currVal_4.toString());
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.secondaryTransform;
    if (import7.checkBinding(_expr_5, currVal_5)) {
      _el_1.style.setProperty('transform', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.primaryTransform;
    if (import7.checkBinding(_expr_6, currVal_6)) {
      _el_2.style.setProperty('transform', currVal_6);
      _expr_6 = currVal_6;
    }
  }
}

AppView<import2.MaterialProgressComponent> viewFactory_MaterialProgressComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialProgressComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialProgressComponent> _MaterialProgressComponentNgFactory = const ComponentFactory('material-progress', viewFactory_MaterialProgressComponentHost0);
ComponentFactory<import2.MaterialProgressComponent> get MaterialProgressComponentNgFactory {
  return _MaterialProgressComponentNgFactory;
}

final List<dynamic> styles$MaterialProgressComponentHost = const [];

class _ViewMaterialProgressComponentHost0 extends AppView<import2.MaterialProgressComponent> {
  ViewMaterialProgressComponent0 _compView_0;
  import2.MaterialProgressComponent _MaterialProgressComponent_0_5;
  _ViewMaterialProgressComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialProgressComponent> build() {
    _compView_0 = ViewMaterialProgressComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialProgressComponent_0_5 = import2.MaterialProgressComponent(null, _compView_0.ref, rootEl);
    _compView_0.create(_MaterialProgressComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialProgressComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (!import7.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialProgressComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialProgressComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialProgressComponent> viewFactory_MaterialProgressComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialProgressComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialProgressComponent, MaterialProgressComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
