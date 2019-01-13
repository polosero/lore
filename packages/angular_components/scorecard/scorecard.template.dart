// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'scorecard.dart';
export 'scorecard.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref4;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref5;
import 'package:angular_components/utils/color/color.template.dart' as _ref6;
import 'package:angular_components/utils/color/palette.template.dart' as _ref7;
import 'package:angular_components/scorecard/scorecard.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'scorecard.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../material_ripple/material_ripple.template.dart' as import13;
import '../material_ripple/material_ripple.dart' as import14;
import '../material_icon/material_icon.template.dart' as import15;
import '../material_icon/material_icon.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import '../utils/browser/dom_service/dom_service.dart' as import18;

final List<dynamic> styles$ScorecardComponent = [import0.styles];

class ViewScorecardComponent0 extends AppView<import2.ScorecardComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  bool _expr_7;
  bool _expr_8;
  bool _expr_9;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  bool _expr_13;
  bool _expr_14;
  import5.Text _text_2;
  import5.Element _el_3;
  import5.Text _text_4;
  static RenderComponentType _renderType;
  ViewScorecardComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import5.document.createElement('acx-scorecard');
    rootEl.className = import2.ScorecardComponent.hostClass;
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/scorecard/scorecard.dart' : null), ViewEncapsulation.Emulated, styles$ScorecardComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    final import2.ScorecardComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_ScorecardComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    var doc = import5.document;
    final _el_1 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_1);
    _text_2 = import5.Text('');
    _el_1.append(_text_2);
    project(_el_1, 0);
    _el_3 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_3);
    _text_4 = import5.Text('');
    _el_3.append(_text_4);
    project(_el_3, 1);
    final _anchor_5 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_5);
    _appEl_5 = ViewContainer(5, null, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_ScorecardComponent2);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _text_6 = import5.Text('\n');
    parentRenderNode.append(_text_6);
    final _anchor_7 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_7);
    _appEl_7 = ViewContainer(7, null, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_ScorecardComponent3);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    final _text_8 = import5.Text('\n');
    parentRenderNode.append(_text_8);
    final _anchor_9 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_9);
    _appEl_9 = ViewContainer(9, null, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_ScorecardComponent5);
    _NgIf_9_9 = NgIf(_appEl_9, _TemplateRef_9_8);
    final _text_10 = import5.Text('\n');
    parentRenderNode.append(_text_10);
    project(parentRenderNode, 3);
    init(const [], null);
    _rootEl.addEventListener('keydown', eventHandler1(_ctx.keydown));
    _rootEl.addEventListener('blur', eventHandler0(_ctx.resetOutline));
    _rootEl.addEventListener('mousedown', eventHandler0(_ctx.onMouseInteraction));
    _rootEl.addEventListener('click', eventHandler0(_ctx.handleClick));
    _rootEl.addEventListener('focus', eventHandler1(_ctx.onFocus));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeypress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.selectable;
    _NgIf_5_9.ngIf = (_ctx.suggestionBefore != null);
    _NgIf_7_9.ngIf = (_ctx.description != null);
    _NgIf_9_9.ngIf = (_ctx.suggestionAfter != null);
    _appEl_0.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    final currVal_1 = (_ctx.label ?? '');
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.tooltip;
    if (import9.checkBinding(_expr_2, currVal_2)) {
      setProp(_el_3, 'title', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.value ?? '');
    if (import9.checkBinding(_expr_3, currVal_3)) {
      _text_4.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _appEl_9.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_7 = ctx.isChangePositive;
    if (import9.checkBinding(_expr_7, currVal_7)) {
      updateElemClass(rootEl, 'is-change-positive', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = ctx.isChangeNegative;
    if (import9.checkBinding(_expr_8, currVal_8)) {
      updateElemClass(rootEl, 'is-change-negative', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = ctx.selectable;
    if (import9.checkBinding(_expr_9, currVal_9)) {
      updateElemClass(rootEl, 'selectable', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = ctx.hostTabIndex;
    if (import9.checkBinding(_expr_10, currVal_10)) {
      setAttr(rootEl, 'tabindex', currVal_10?.toString());
      _expr_10 = currVal_10;
    }
    final currVal_11 = ctx.hostRole;
    if (import9.checkBinding(_expr_11, currVal_11)) {
      setAttr(rootEl, 'role', currVal_11);
      _expr_11 = currVal_11;
    }
    final currVal_12 = ctx.backgroundStyle;
    if (import9.checkBinding(_expr_12, currVal_12)) {
      rootEl.style.setProperty('background', currVal_12);
      _expr_12 = currVal_12;
    }
    final currVal_13 = ctx.extraBig;
    if (import9.checkBinding(_expr_13, currVal_13)) {
      updateElemClass(rootEl, 'extra-big', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = ctx.selected;
    if (import9.checkBinding(_expr_14, currVal_14)) {
      updateElemClass(rootEl, 'selected', currVal_14);
      _expr_14 = currVal_14;
    }
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewScorecardComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.ScorecardComponent> _ScorecardComponentNgFactory = const ComponentFactory('acx-scorecard', viewFactory_ScorecardComponentHost0);
ComponentFactory<import2.ScorecardComponent> get ScorecardComponentNgFactory {
  return _ScorecardComponentNgFactory;
}

class _ViewScorecardComponent1 extends AppView<import2.ScorecardComponent> {
  import13.ViewMaterialRippleComponent0 _compView_0;
  import14.MaterialRippleComponent _MaterialRippleComponent_0_5;
  _ViewScorecardComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    _compView_0 = import13.ViewMaterialRippleComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRippleComponent_0_5 = import14.MaterialRippleComponent(_el_0);
    _compView_0.create(_MaterialRippleComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent1(parentView, parentIndex);
}

class _ViewScorecardComponent2 extends AppView<import2.ScorecardComponent> {
  var _expr_0;
  import5.Text _text_1;
  _ViewScorecardComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    var doc = import5.document;
    final _el_0 = doc.createElement('span');
    _el_0.className = 'suggestion before';
    addShimE(_el_0);
    _text_1 = import5.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.suggestionBefore ?? '');
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent2(parentView, parentIndex);
}

class _ViewScorecardComponent3 extends AppView<import2.ScorecardComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_1;
  import5.Text _text_3;
  _ViewScorecardComponent3(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    var doc = import5.document;
    final _el_0 = doc.createElement('span');
    _el_0.className = 'description';
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ScorecardComponent4);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import5.Text(' ');
    _el_0.append(_text_2);
    _text_3 = import5.Text('');
    _el_0.append(_text_3);
    final _text_4 = import5.Text('  ');
    _el_0.append(_text_4);
    project(_el_0, 2);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = ((_ctx.changeGlyph && (_ctx.description != '')) && !_ctx.isChangeNeutral);
    _appEl_1.detectChangesInNestedViews();
    final currVal_1 = (_ctx.description ?? '');
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent3(parentView, parentIndex);
}

class _ViewScorecardComponent4 extends AppView<import2.ScorecardComponent> {
  import15.ViewMaterialIconComponent0 _compView_0;
  import16.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewScorecardComponent4(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    _compView_0 = import15.ViewMaterialIconComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.className = 'change-glyph';
    createAttr(_el_0, 'size', 'small');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import16.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.changeGlyphIcon;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _MaterialIconComponent_0_5.icon = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
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

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent4(parentView, parentIndex);
}

class _ViewScorecardComponent5 extends AppView<import2.ScorecardComponent> {
  var _expr_0;
  import5.Text _text_1;
  _ViewScorecardComponent5(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewScorecardComponent0._renderType;
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    var doc = import5.document;
    final _el_0 = doc.createElement('span');
    _el_0.className = 'suggestion after';
    addShimE(_el_0);
    _text_1 = import5.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.suggestionAfter ?? '');
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent5(parentView, parentIndex);
}

final List<dynamic> styles$ScorecardComponentHost = const [];

class _ViewScorecardComponentHost0 extends AppView<import2.ScorecardComponent> {
  ViewScorecardComponent0 _compView_0;
  import2.ScorecardComponent _ScorecardComponent_0_5;
  _ViewScorecardComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    _compView_0 = ViewScorecardComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ScorecardComponent_0_5 = (import10.isDevMode
        ? import17.debugInjectorWrap(import2.ScorecardComponent, () {
            return import2.ScorecardComponent(_compView_0.ref, rootEl, this.injectorGet(import18.DomService, viewData.parentIndex));
          })
        : import2.ScorecardComponent(_compView_0.ref, rootEl, this.injectorGet(import18.DomService, viewData.parentIndex)));
    _compView_0.create(_ScorecardComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _ScorecardComponent_0_5);
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

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ScorecardComponent, ScorecardComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
