// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_stackable_drawer.dart';
export 'material_stackable_drawer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/app_layout/material_temporary_drawer.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/app_layout/material_stackable_drawer.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_stackable_drawer.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import10;
import '../content/deferred_content_aware.dart' as import11;

final List<dynamic> styles$MaterialStackableDrawerComponent = [import0.styles];

class ViewMaterialStackableDrawerComponent0 extends AppView<import2.MaterialStackableDrawerComponent> {
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  import3.DivElement _el_0;
  static RenderComponentType _renderType;
  ViewMaterialStackableDrawerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('material-drawer');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:angular_components/lib/app_layout/material_stackable_drawer.dart' : null), ViewEncapsulation.Emulated, styles$MaterialStackableDrawerComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialStackableDrawerComponent> build() {
    final import2.MaterialStackableDrawerComponent _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'drawer-content';
    addShimC(_el_0);
    project(_el_0, 0);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init(const [], null);
    _rootEl.addEventListener('click', eventHandler0(_ctx.toggle));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.isExpanded;
    if (import7.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'drawer-content-expanded', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  void _handle_click_0_0($event) {
    $event.stopPropagation();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_1 = ctx.hostMatDrawerCollapsed;
    if (import7.checkBinding(_expr_1, currVal_1)) {
      updateElemClass(rootEl, 'mat-drawer-collapsed', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.hostMatDrawerExpanded;
    if (import7.checkBinding(_expr_2, currVal_2)) {
      updateElemClass(rootEl, 'mat-drawer-expanded', currVal_2);
      _expr_2 = currVal_2;
    }
  }
}

AppView<import2.MaterialStackableDrawerComponent> viewFactory_MaterialStackableDrawerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialStackableDrawerComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialStackableDrawerComponent> _MaterialStackableDrawerComponentNgFactory = const ComponentFactory('material-drawer[stackable]', viewFactory_MaterialStackableDrawerComponentHost0);
ComponentFactory<import2.MaterialStackableDrawerComponent> get MaterialStackableDrawerComponentNgFactory {
  return _MaterialStackableDrawerComponentNgFactory;
}

final List<dynamic> styles$MaterialStackableDrawerComponentHost = const [];

class _ViewMaterialStackableDrawerComponentHost0 extends AppView<import2.MaterialStackableDrawerComponent> {
  ViewMaterialStackableDrawerComponent0 _compView_0;
  import2.MaterialStackableDrawerComponent _MaterialStackableDrawerComponent_0_5;
  _ViewMaterialStackableDrawerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialStackableDrawerComponent> build() {
    _compView_0 = ViewMaterialStackableDrawerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialStackableDrawerComponent_0_5 = (import8.isDevMode
        ? import10.debugInjectorWrap(import2.MaterialStackableDrawerComponent, () {
            return import2.MaterialStackableDrawerComponent(this.injectorGet(import2.MaterialStackableDrawerComponent, viewData.parentIndex, null));
          })
        : import2.MaterialStackableDrawerComponent(this.injectorGet(import2.MaterialStackableDrawerComponent, viewData.parentIndex, null)));
    _compView_0.create(_MaterialStackableDrawerComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialStackableDrawerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialStackableDrawerComponent) || identical(token, import11.DeferredContentAware)) && (0 == nodeIndex))) {
      return _MaterialStackableDrawerComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import7.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialStackableDrawerComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.MaterialStackableDrawerComponent> viewFactory_MaterialStackableDrawerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStackableDrawerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialStackableDrawerComponent, MaterialStackableDrawerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
