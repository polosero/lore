// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'highlighted_text.dart';
export 'highlighted_text.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref1;
import 'package:angular_components/highlighted_text/highlighted_text.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'highlighted_text.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../model/ui/highlighted_text_model.dart' as import13;

final List<dynamic> styles$HighlightedTextComponent = [import0.styles];

class ViewHighlightedTextComponent0 extends AppView<import2.HighlightedTextComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHighlightedTextComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('highlighted-text');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/highlighted_text/highlighted_text.dart' : null), ViewEncapsulation.Emulated, styles$HighlightedTextComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HighlightedTextComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import8.Text('\n');
    parentRenderNode.append(_text_0);
    final _anchor_1 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_1);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_HighlightedTextComponent1);
    _NgFor_1_9 = import4.NgFor(_appEl_1, _TemplateRef_1_8);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.segments;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import9.AppViewUtils.throwOnChanges) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.HighlightedTextComponent> viewFactory_HighlightedTextComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewHighlightedTextComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.HighlightedTextComponent> _HighlightedTextComponentNgFactory = const ComponentFactory('highlighted-text', viewFactory_HighlightedTextComponentHost0);
ComponentFactory<import2.HighlightedTextComponent> get HighlightedTextComponentNgFactory {
  return _HighlightedTextComponentNgFactory;
}

class _ViewHighlightedTextComponent1 extends AppView<import2.HighlightedTextComponent> {
  bool _expr_0;
  var _expr_1;
  import8.Element _el_0;
  import8.Text _text_1;
  _ViewHighlightedTextComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHighlightedTextComponent0._renderType;
  }
  @override
  ComponentRef<import2.HighlightedTextComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'text-segment';
    addShimE(_el_0);
    _text_1 = import8.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_segment = import10.unsafeCast<import13.HighlightedTextSegment>(locals['\$implicit']);
    final currVal_0 = local_segment.isHighlighted;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'segment-highlight', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(local_segment.text);
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.HighlightedTextComponent> viewFactory_HighlightedTextComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHighlightedTextComponent1(parentView, parentIndex);
}

final List<dynamic> styles$HighlightedTextComponentHost = const [];

class _ViewHighlightedTextComponentHost0 extends AppView<import2.HighlightedTextComponent> {
  ViewHighlightedTextComponent0 _compView_0;
  import2.HighlightedTextComponent _HighlightedTextComponent_0_5;
  _ViewHighlightedTextComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HighlightedTextComponent> build() {
    _compView_0 = ViewHighlightedTextComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HighlightedTextComponent_0_5 = import2.HighlightedTextComponent();
    _compView_0.create(_HighlightedTextComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _HighlightedTextComponent_0_5);
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

AppView<import2.HighlightedTextComponent> viewFactory_HighlightedTextComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHighlightedTextComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HighlightedTextComponent, HighlightedTextComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
