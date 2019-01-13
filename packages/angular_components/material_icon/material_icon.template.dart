// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_icon.dart';
export 'material_icon.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/icon.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_icon.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$MaterialIconComponent = [import0.styles];

class ViewMaterialIconComponent0 extends AppView<import2.MaterialIconComponent> {
  var _expr_0;
  var _expr_1;
  import3.Element _el_1;
  import3.Text _text_2;
  static RenderComponentType _renderType;
  ViewMaterialIconComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-icon');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/material_icon/material_icon.dart' : null), ViewEncapsulation.Emulated, styles$MaterialIconComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialIconComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import3.Text('\n');
    parentRenderNode.append(_text_0);
    var doc = import3.document;
    _el_1 = createAndAppend(doc, 'i', parentRenderNode);
    createAttr(_el_1, 'aria-hidden', 'true');
    _el_1.className = 'material-icon-i material-icons';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.ariaLabel;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_1, 'aria-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.iconName ?? '');
    if (import7.checkBinding(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialIconComponent> viewFactory_MaterialIconComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialIconComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialIconComponent> _MaterialIconComponentNgFactory = const ComponentFactory('material-icon', viewFactory_MaterialIconComponentHost0);
ComponentFactory<import2.MaterialIconComponent> get MaterialIconComponentNgFactory {
  return _MaterialIconComponentNgFactory;
}

final List<dynamic> styles$MaterialIconComponentHost = const [];

class _ViewMaterialIconComponentHost0 extends AppView<import2.MaterialIconComponent> {
  ViewMaterialIconComponent0 _compView_0;
  import2.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMaterialIconComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialIconComponent> build() {
    _compView_0 = ViewMaterialIconComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialIconComponent_0_5 = import2.MaterialIconComponent(rootEl);
    _compView_0.create(_MaterialIconComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialIconComponent_0_5);
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

AppView<import2.MaterialIconComponent> viewFactory_MaterialIconComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialIconComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialIconComponent, MaterialIconComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
