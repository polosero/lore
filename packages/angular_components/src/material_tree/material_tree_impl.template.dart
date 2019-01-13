// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_impl.dart';
export 'material_tree_impl.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/selection/select.template.dart' as _ref1;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref4;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref5;
import 'package:angular_components/src/material_tree/group/material_tree_group.template.dart' as _ref6;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart' as _ref7;
import 'package:angular_components/src/material_tree/material_tree_rendering_options.template.dart' as _ref8;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref9;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_impl.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import12;
import 'group/material_tree_group.template.dart' as import13;
import 'group/material_tree_group.dart' as import14;
import 'package:angular/src/di/errors.dart' as import15;
import 'material_tree_root.dart' as import16;
import '../../mixins/material_dropdown_base.dart' as import17;
import 'package:angular/src/core/di/opaque_token.dart' as import18;
import '../../model/selection/selection_options.dart' as import19;
import 'group/material_tree_group_flat.template.dart' as import20;
import 'group/material_tree_group_flat.dart' as import21;

final List<dynamic> styles$MaterialTreeComponent = const [];

class ViewMaterialTreeComponent0 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  bool _query_MaterialTreeGroupComponent_1_0_isDirty = true;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  static RenderComponentType _renderType;
  ViewMaterialTreeComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('material-tree');
    _renderType ??= import8.appViewUtils.createRenderType((import9.isDevMode ? 'asset:angular_components/lib/src/material_tree/material_tree_impl.dart' : null), ViewEncapsulation.None, styles$MaterialTreeComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_1);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialTreeComponent3);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.supportsHierarchy;
    _NgIf_1_9.ngIf = !_ctx.supportsHierarchy;
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    if (!import8.AppViewUtils.throwOnChanges) {
      if (_query_MaterialTreeGroupComponent_1_0_isDirty) {
        ctx.treeGroupNodes = _appEl_0.mapNestedViews((_ViewMaterialTreeComponent1 nestedView) {
          return nestedView._appEl_0.mapNestedViews((_ViewMaterialTreeComponent2 nestedView) {
            return [nestedView._MaterialTreeGroupComponent_0_5];
          });
        });
        _query_MaterialTreeGroupComponent_1_0_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_2 = ctx.role;
    if (import8.checkBinding(_expr_2, currVal_2)) {
      setAttr(rootEl, 'role', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.hostMultiselectable;
    if (import8.checkBinding(_expr_3, currVal_3)) {
      setAttr(rootEl, 'aria-multiselectable', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = ctx.hostReadonly;
    if (import8.checkBinding(_expr_4, currVal_4)) {
      setAttr(rootEl, 'aria-readonly', currVal_4);
      _expr_4 = currVal_4;
    }
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialTreeComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.MaterialTreeComponent> _MaterialTreeComponentNgFactory = const ComponentFactory('material-tree', viewFactory_MaterialTreeComponentHost0);
ComponentFactory<import1.MaterialTreeComponent> get MaterialTreeComponentNgFactory {
  return _MaterialTreeComponentNgFactory;
}

class _ViewMaterialTreeComponent1 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  import12.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent2);
    _NgFor_0_9 = import12.NgFor(_appEl_0, _TemplateRef_0_8);
    init0(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import8.AppViewUtils.throwOnChanges) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent1(parentView, parentIndex);
}

class _ViewMaterialTreeComponent2 extends AppView<import1.MaterialTreeComponent> {
  import13.ViewMaterialTreeGroupComponent0 _compView_0;
  import14.MaterialTreeGroupComponent _MaterialTreeGroupComponent_0_5;
  var _expr_0;
  bool _expr_1;
  int _expr_2;
  bool _expr_3;
  _ViewMaterialTreeComponent2(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = import13.ViewMaterialTreeGroupComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupComponent_0_5 = (import9.isDevMode
        ? import15.debugInjectorWrap(import14.MaterialTreeGroupComponent, () {
            return import14.MaterialTreeGroupComponent(parentView.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import17.DropdownHandle, viewData.parentIndex, null), parentView.injectorGet(const import18.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), viewData.parentIndex, null));
          })
        : import14.MaterialTreeGroupComponent(parentView.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import17.DropdownHandle, viewData.parentIndex, null), parentView.injectorGet(const import18.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), viewData.parentIndex, null)));
    _compView_0.create(_MaterialTreeGroupComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_group = import9.unsafeCast<import19.OptionGroup<dynamic>>(locals['\$implicit']);
    final local_optionIndex = import9.unsafeCast<int>(locals['index']);
    final currVal_0 = local_group;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupComponent_0_5.group = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.allowParentSingleSelection;
    if (import8.checkBinding(_expr_1, currVal_1)) {
      _MaterialTreeGroupComponent_0_5.allowParentSingleSelection = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
    if (import8.checkBinding(_expr_2, currVal_2)) {
      _MaterialTreeGroupComponent_0_5.maxInitialOptionsShown = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.shouldExpand(local_group, local_optionIndex);
    if (import8.checkBinding(_expr_3, currVal_3)) {
      _MaterialTreeGroupComponent_0_5.expandAll = currVal_3;
      _expr_3 = currVal_3;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialTreeComponent0>(parentView.parentView)._query_MaterialTreeGroupComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialTreeGroupComponent_0_5.ngOnDestroy();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent2(parentView, parentIndex);
}

class _ViewMaterialTreeComponent3 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeComponent3(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent4);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialTreeComponent6);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialTreeComponent8);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init([_appEl_0, _appEl_1, _appEl_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.showFlatList;
    _NgIf_1_9.ngIf = _ctx.showFlatRadio;
    _NgIf_2_9.ngIf = _ctx.showFlatCheck;
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent3(parentView, parentIndex);
}

class _ViewMaterialTreeComponent4 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  import12.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent4(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent5);
    _NgFor_0_9 = import12.NgFor(_appEl_0, _TemplateRef_0_8);
    init0(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import8.AppViewUtils.throwOnChanges) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent4(parentView, parentIndex);
}

class _ViewMaterialTreeComponent5 extends AppView<import1.MaterialTreeComponent> {
  import20.ViewMaterialTreeGroupFlatListComponent0 _compView_0;
  import21.MaterialTreeGroupFlatListComponent _MaterialTreeGroupFlatListComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent5(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = import20.ViewMaterialTreeGroupFlatListComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatListComponent_0_5 = (import9.isDevMode
        ? import15.debugInjectorWrap(import21.MaterialTreeGroupFlatListComponent, () {
            return import21.MaterialTreeGroupFlatListComponent(parentView.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref);
          })
        : import21.MaterialTreeGroupFlatListComponent(parentView.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref));
    _compView_0.create(_MaterialTreeGroupFlatListComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_group = import9.unsafeCast<import19.OptionGroup<dynamic>>(locals['\$implicit']);
    final currVal_0 = local_group;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatListComponent_0_5.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent5(parentView, parentIndex);
}

class _ViewMaterialTreeComponent6 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  import12.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent6(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent7);
    _NgFor_0_9 = import12.NgFor(_appEl_0, _TemplateRef_0_8);
    init0(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import8.AppViewUtils.throwOnChanges) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent6(parentView, parentIndex);
}

class _ViewMaterialTreeComponent7 extends AppView<import1.MaterialTreeComponent> {
  import20.ViewMaterialTreeGroupFlatRadioComponent0 _compView_0;
  import21.MaterialTreeGroupFlatRadioComponent _MaterialTreeGroupFlatRadioComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent7(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = import20.ViewMaterialTreeGroupFlatRadioComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatRadioComponent_0_5 = (import9.isDevMode
        ? import15.debugInjectorWrap(import21.MaterialTreeGroupFlatRadioComponent, () {
            return import21.MaterialTreeGroupFlatRadioComponent(parentView.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import17.DropdownHandle, viewData.parentIndex, null));
          })
        : import21.MaterialTreeGroupFlatRadioComponent(parentView.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import17.DropdownHandle, viewData.parentIndex, null)));
    _compView_0.create(_MaterialTreeGroupFlatRadioComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_group = import9.unsafeCast<import19.OptionGroup<dynamic>>(locals['\$implicit']);
    final currVal_0 = local_group;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatRadioComponent_0_5.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent7(parentView, parentIndex);
}

class _ViewMaterialTreeComponent8 extends AppView<import1.MaterialTreeComponent> {
  ViewContainer _appEl_0;
  import12.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent8(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTreeComponent9);
    _NgFor_0_9 = import12.NgFor(_appEl_0, _TemplateRef_0_8);
    init0(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import8.AppViewUtils.throwOnChanges) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent8(parentView, parentIndex);
}

class _ViewMaterialTreeComponent9 extends AppView<import1.MaterialTreeComponent> {
  import20.ViewMaterialTreeGroupFlatCheckComponent0 _compView_0;
  import21.MaterialTreeGroupFlatCheckComponent _MaterialTreeGroupFlatCheckComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent9(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = import20.ViewMaterialTreeGroupFlatCheckComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatCheckComponent_0_5 = (import9.isDevMode
        ? import15.debugInjectorWrap(import21.MaterialTreeGroupFlatCheckComponent, () {
            return import21.MaterialTreeGroupFlatCheckComponent(parentView.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import17.DropdownHandle, viewData.parentIndex, null));
          })
        : import21.MaterialTreeGroupFlatCheckComponent(parentView.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, parentView.injectorGet(import17.DropdownHandle, viewData.parentIndex, null)));
    _compView_0.create(_MaterialTreeGroupFlatCheckComponent_0_5, []);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_group = import9.unsafeCast<import19.OptionGroup<dynamic>>(locals['\$implicit']);
    final currVal_0 = local_group;
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatCheckComponent_0_5.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent9(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeComponentHost = const [];

class _ViewMaterialTreeComponentHost0 extends AppView<import1.MaterialTreeComponent> {
  ViewMaterialTreeComponent0 _compView_0;
  import1.MaterialTreeComponent _MaterialTreeComponent_0_5;
  _ViewMaterialTreeComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.MaterialTreeComponent> build() {
    _compView_0 = ViewMaterialTreeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeComponent_0_5 = (import9.isDevMode
        ? import15.debugInjectorWrap(import1.MaterialTreeComponent, () {
            return import1.MaterialTreeComponent(this.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex, null), null);
          })
        : import1.MaterialTreeComponent(this.injectorGet(import16.MaterialTreeRoot, viewData.parentIndex, null), null));
    _compView_0.create(_MaterialTreeComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.MaterialTreeRoot) && (0 == nodeIndex))) {
      return _MaterialTreeComponent_0_5;
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
  }
}

AppView<import1.MaterialTreeComponent> viewFactory_MaterialTreeComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeComponent, MaterialTreeComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
}
