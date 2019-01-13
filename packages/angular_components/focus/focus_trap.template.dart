// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'focus_trap.dart';
export 'focus_trap.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_iterator/dom_iterator.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;
import 'package:angular_components/focus/focus_trap.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'focus_trap.dart' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$FocusTrapComponent = [import0.styles];

class ViewFocusTrapComponent0 extends AppView<import2.FocusTrapComponent> {
  import2.FocusContentWrapper _FocusContentWrapper_1_5;
  static RenderComponentType _renderType;
  ViewFocusTrapComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import6.document.createElement('focus-trap');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/focus/focus_trap.dart' : null), ViewEncapsulation.Emulated, styles$FocusTrapComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.FocusTrapComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import6.document;
    final _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.tabIndex = 0;
    addShimC(_el_0);
    final _el_1 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_1, 'focusContentWrapper', '');
    createAttr(_el_1, 'style', 'outline: none');
    _el_1.tabIndex = -1;
    addShimC(_el_1);
    _FocusContentWrapper_1_5 = import2.FocusContentWrapper(_el_1);
    project(_el_1, 0);
    final _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.tabIndex = 0;
    addShimC(_el_2);
    _el_0.addEventListener('focus', eventHandler0(ctx.focusLast));
    _el_2.addEventListener('focus', eventHandler0(ctx.focusFirst));
    ctx.content = _FocusContentWrapper_1_5;
    init(const [], null);
  }
}

AppView<import2.FocusTrapComponent> viewFactory_FocusTrapComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewFocusTrapComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.FocusTrapComponent> _FocusTrapComponentNgFactory = const ComponentFactory('focus-trap', viewFactory_FocusTrapComponentHost0);
ComponentFactory<import2.FocusTrapComponent> get FocusTrapComponentNgFactory {
  return _FocusTrapComponentNgFactory;
}

final List<dynamic> styles$FocusTrapComponentHost = const [];

class _ViewFocusTrapComponentHost0 extends AppView<import2.FocusTrapComponent> {
  ViewFocusTrapComponent0 _compView_0;
  import2.FocusTrapComponent _FocusTrapComponent_0_5;
  _ViewFocusTrapComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.FocusTrapComponent> build() {
    _compView_0 = ViewFocusTrapComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FocusTrapComponent_0_5 = import2.FocusTrapComponent();
    _compView_0.create(_FocusTrapComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _FocusTrapComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _FocusTrapComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.FocusTrapComponent> viewFactory_FocusTrapComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFocusTrapComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FocusTrapComponent, FocusTrapComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
