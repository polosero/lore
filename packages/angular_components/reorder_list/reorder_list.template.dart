// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'reorder_list.dart';
export 'reorder_list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/reorder_list/reorder_events.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref2;
import 'package:angular_components/utils/keyboard/keyboard.template.dart' as _ref3;
import 'reorder_events.template.dart' as _ref4;
import 'package:angular_components/reorder_list/reorder_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'reorder_list.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import10;
import 'package:angular/src/core/zone/ng_zone.dart' as import11;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import12;

final List<dynamic> styles$ReorderListComponent = [import0.styles];

class ViewReorderListComponent0 extends AppView<import2.ReorderListComponent> {
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  import3.DivElement _el_1;
  static RenderComponentType _renderType;
  ViewReorderListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('reorder-list');
    rootEl.className = import2.ReorderListComponent.hostClass;
    createAttr(rootEl, 'role', import2.ReorderListComponent.hostRole);
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/reorder_list/reorder_list.dart' : null), ViewEncapsulation.Emulated, styles$ReorderListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ReorderListComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import3.Text('\n');
    parentRenderNode.append(_text_0);
    project(parentRenderNode, 0);
    var doc = import3.document;
    _el_1 = createDivAndAppend(doc, parentRenderNode);
    _el_1.className = 'placeholder';
    addShimC(_el_1);
    project(_el_1, 1);
    ctx.placeholder = _el_1;
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final bool currVal_0 = !_ctx.showPlaceholder;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_1, 'hidden', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_1 = ctx.verticalItems;
    if (import7.checkBinding(_expr_1, currVal_1)) {
      updateElemClass(rootEl, 'vertical', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.multiSelect;
    if (import7.checkBinding(_expr_2, currVal_2)) {
      updateElemClass(rootEl, 'multiselect', currVal_2);
      _expr_2 = currVal_2;
    }
  }
}

AppView<import2.ReorderListComponent> viewFactory_ReorderListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewReorderListComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.ReorderListComponent> _ReorderListComponentNgFactory = const ComponentFactory('reorder-list', viewFactory_ReorderListComponentHost0);
ComponentFactory<import2.ReorderListComponent> get ReorderListComponentNgFactory {
  return _ReorderListComponentNgFactory;
}

final List<dynamic> styles$ReorderListComponentHost = const [];

class _ViewReorderListComponentHost0 extends AppView<import2.ReorderListComponent> {
  ViewReorderListComponent0 _compView_0;
  import2.ReorderListComponent _ReorderListComponent_0_5;
  _ViewReorderListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ReorderListComponent> build() {
    _compView_0 = ViewReorderListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ReorderListComponent_0_5 = (import8.isDevMode
        ? import10.debugInjectorWrap(import2.ReorderListComponent, () {
            return import2.ReorderListComponent(this.injectorGet(import11.NgZone, viewData.parentIndex));
          })
        : import2.ReorderListComponent(this.injectorGet(import11.NgZone, viewData.parentIndex)));
    _ReorderListComponent_0_5.items = [];
    _compView_0.create(_ReorderListComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _ReorderListComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.ReorderListComponent) && (0 == nodeIndex))) {
      return _ReorderListComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _ReorderListComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.ReorderListComponent> viewFactory_ReorderListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewReorderListComponentHost0(parentView, parentIndex);
}

class ReorderItemDirectiveNgCd extends import12.DirectiveChangeDetector {
  final import2.ReorderItemDirective instance;
  var _expr_0;
  ReorderItemDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.hostDraggable;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      setAttr(el, 'draggable', currVal_0);
      _expr_0 = currVal_0;
    }
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ReorderListComponent, ReorderListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
