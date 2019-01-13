// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'glyph.dart';
export 'glyph.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/icon.template.dart' as _ref1;
import 'package:angular_components/glyph/glyph.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'glyph.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$GlyphComponent = [import0.styles];

class ViewGlyphComponent0 extends AppView<import2.GlyphComponent> {
  bool _expr_0;
  var _expr_1;
  import3.Element _el_1;
  import3.Text _text_2;
  static RenderComponentType _renderType;
  ViewGlyphComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('glyph');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/glyph/glyph.dart' : null), ViewEncapsulation.Emulated, styles$GlyphComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.GlyphComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import3.Text('\n');
    parentRenderNode.append(_text_0);
    var doc = import3.document;
    _el_1 = createAndAppend(doc, 'i', parentRenderNode);
    createAttr(_el_1, 'aria-hidden', 'true');
    _el_1.className = 'glyph-i';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.useMaterialIconsExtended;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_1, 'material-icons', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.iconName ?? '');
    if (import7.checkBinding(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.GlyphComponent> viewFactory_GlyphComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewGlyphComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.GlyphComponent> _GlyphComponentNgFactory = const ComponentFactory('glyph', viewFactory_GlyphComponentHost0);
ComponentFactory<import2.GlyphComponent> get GlyphComponentNgFactory {
  return _GlyphComponentNgFactory;
}

final List<dynamic> styles$GlyphComponentHost = const [];

class _ViewGlyphComponentHost0 extends AppView<import2.GlyphComponent> {
  ViewGlyphComponent0 _compView_0;
  import2.GlyphComponent _GlyphComponent_0_5;
  _ViewGlyphComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.GlyphComponent> build() {
    _compView_0 = ViewGlyphComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _GlyphComponent_0_5 = import2.GlyphComponent(rootEl);
    _compView_0.create(_GlyphComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _GlyphComponent_0_5);
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

AppView<import2.GlyphComponent> viewFactory_GlyphComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewGlyphComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(GlyphComponent, GlyphComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
