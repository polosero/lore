// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'highlighted_value.dart';
export 'highlighted_value.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/highlighted_text/highlighted_text.template.dart' as _ref1;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref2;
import 'package:angular_components/model/ui/highlight_provider.template.dart' as _ref3;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref4;
import 'package:angular_components/highlighted_text/highlighted_text.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'highlighted_value.dart' as import2;
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
import 'package:angular/src/di/errors.dart' as import14;
import '../model/ui/highlight_provider.dart' as import15;

final List<dynamic> styles$HighlightedValueComponent = [import0.styles];

class ViewHighlightedValueComponent0 extends AppView<import2.HighlightedValueComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHighlightedValueComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('highlight-value');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/highlighted_text/highlighted_value.dart' : null), ViewEncapsulation.Emulated, styles$HighlightedValueComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HighlightedValueComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import8.Text('\n');
    parentRenderNode.append(_text_0);
    final _anchor_1 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_1);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_HighlightedValueComponent1);
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

AppView<import2.HighlightedValueComponent> viewFactory_HighlightedValueComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewHighlightedValueComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.HighlightedValueComponent> _HighlightedValueComponentNgFactory = const ComponentFactory('highlight-value', viewFactory_HighlightedValueComponentHost0);
ComponentFactory<import2.HighlightedValueComponent> get HighlightedValueComponentNgFactory {
  return _HighlightedValueComponentNgFactory;
}

class _ViewHighlightedValueComponent1 extends AppView<import2.HighlightedValueComponent> {
  bool _expr_0;
  var _expr_1;
  import8.Element _el_0;
  import8.Text _text_1;
  _ViewHighlightedValueComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHighlightedValueComponent0._renderType;
  }
  @override
  ComponentRef<import2.HighlightedValueComponent> build() {
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

AppView<import2.HighlightedValueComponent> viewFactory_HighlightedValueComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHighlightedValueComponent1(parentView, parentIndex);
}

final List<dynamic> styles$HighlightedValueComponentHost = const [];

class _ViewHighlightedValueComponentHost0 extends AppView<import2.HighlightedValueComponent> {
  ViewHighlightedValueComponent0 _compView_0;
  import2.HighlightedValueComponent _HighlightedValueComponent_0_5;
  _ViewHighlightedValueComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HighlightedValueComponent> build() {
    _compView_0 = ViewHighlightedValueComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HighlightedValueComponent_0_5 = (import10.isDevMode
        ? import14.debugInjectorWrap(import2.HighlightedValueComponent, () {
            return import2.HighlightedValueComponent(this.injectorGet(import15.HighlightProvider, viewData.parentIndex));
          })
        : import2.HighlightedValueComponent(this.injectorGet(import15.HighlightProvider, viewData.parentIndex)));
    _compView_0.create(_HighlightedValueComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _HighlightedValueComponent_0_5);
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

AppView<import2.HighlightedValueComponent> viewFactory_HighlightedValueComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHighlightedValueComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HighlightedValueComponent, HighlightedValueComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
