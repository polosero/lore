// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_filter.dart';
export 'material_tree_filter.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_input/material_input.template.dart' as _ref1;
import 'package:angular_components/model/selection/select.template.dart' as _ref2;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref3;
import 'package:angular_components/utils/async/async.template.dart' as _ref4;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_filter.dart' as import1;
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
import '../../material_input/material_input.template.dart' as import12;
import '../../material_input/deferred_validator.dart' as import13;
import 'package:angular_forms/src/directives/ng_model.dart' as import14;
import '../../material_input/material_input.dart' as import15;
import '../../material_input/material_input_default_value_accessor.dart' as import16;
import 'package:angular/src/core/di/opaque_token.dart' as import17;
import 'package:angular_forms/src/directives/ng_control.dart' as import18;
import '../../utils/angular/reference/reference.dart' as import19;
import '../../focus/focus_interface.dart' as import20;
import '../../interfaces/has_disabled.dart' as import21;
import '../../material_input/base_material_input.dart' as import22;
import 'package:angular/src/di/errors.dart' as import23;
import 'material_tree_root.dart' as import24;

final List<dynamic> styles$MaterialTreeFilterComponent = const [];

class ViewMaterialTreeFilterComponent0 extends AppView<import1.MaterialTreeFilterComponent> {
  ViewContainer _appEl_0;
  bool _query_materialInput_1_0_isDirty = true;
  NgIf _NgIf_0_9;
  static RenderComponentType _renderType;
  ViewMaterialTreeFilterComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('material-tree-filter');
    _renderType ??= import8.appViewUtils.createRenderType((import9.isDevMode ? 'asset:angular_components/lib/src/material_tree/material_tree_filter.dart' : null), ViewEncapsulation.None, styles$MaterialTreeFilterComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.MaterialTreeFilterComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTreeFilterComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.hasFilterable;
    _appEl_0.detectChangesInNestedViews();
    if (!import8.AppViewUtils.throwOnChanges) {
      if (_query_materialInput_1_0_isDirty) {
        ctx.materialInput = import8.firstOrNull(_appEl_0.mapNestedViews((_ViewMaterialTreeFilterComponent1 nestedView) {
          return [nestedView._MaterialInputComponent_0_9];
        }));
        _query_materialInput_1_0_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<import1.MaterialTreeFilterComponent> viewFactory_MaterialTreeFilterComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialTreeFilterComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.MaterialTreeFilterComponent> _MaterialTreeFilterComponentNgFactory = const ComponentFactory('material-tree-filter', viewFactory_MaterialTreeFilterComponentHost0);
ComponentFactory<import1.MaterialTreeFilterComponent> get MaterialTreeFilterComponentNgFactory {
  return _MaterialTreeFilterComponentNgFactory;
}

class _ViewMaterialTreeFilterComponent1 extends AppView<import1.MaterialTreeFilterComponent> {
  import12.ViewMaterialInputComponent0 _compView_0;
  import13.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import14.NgModel _NgModel_0_7;
  import14.NgModel _NgControl_0_8;
  import15.MaterialInputComponent _MaterialInputComponent_0_9;
  import15.MaterialInputComponent _BaseMaterialInput_0_10;
  import16.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  String _expr_1;
  String _expr_3;
  _ViewMaterialTreeFilterComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeFilterComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialTreeFilterComponent> build() {
    _compView_0 = import12.ViewMaterialInputComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'style', 'width: 100%;');
    _DeferredValidator_0_5 = import13.DeferredValidator();
    _NgValidators_0_6 = [_DeferredValidator_0_5];
    _NgModel_0_7 = import14.NgModel(_NgValidators_0_6, null);
    _NgControl_0_8 = _NgModel_0_7;
    _MaterialInputComponent_0_9 = import15.MaterialInputComponent(null, null, null, _NgControl_0_8, _compView_0.ref, _DeferredValidator_0_5);
    _BaseMaterialInput_0_10 = _MaterialInputComponent_0_9;
    _MaterialInputDefaultValueAccessor_0_11 = import16.MaterialInputDefaultValueAccessor(_BaseMaterialInput_0_10, _NgControl_0_8);
    _compView_0.create(_MaterialInputComponent_0_9, [const [], const []]);
    final subscription_0 = _MaterialInputComponent_0_9.onFocus.listen(eventHandler0(ctx.handleFocus));
    final subscription_1 = _MaterialInputComponent_0_9.onKeypress.listen(eventHandler1(_handle_inputKeyPress_0_1));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.DeferredValidator) && (0 == nodeIndex))) {
      return _DeferredValidator_0_5;
    }
    if ((identical(token, const import17.MultiToken<dynamic>('NgValidators')) && (0 == nodeIndex))) {
      return _NgValidators_0_6;
    }
    if ((identical(token, import14.NgModel) && (0 == nodeIndex))) {
      return _NgModel_0_7;
    }
    if ((identical(token, import18.NgControl) && (0 == nodeIndex))) {
      return _NgControl_0_8;
    }
    if (((((identical(token, import15.MaterialInputComponent) || identical(token, import19.ReferenceDirective)) || identical(token, import20.Focusable)) || identical(token, import21.HasDisabled)) && (0 == nodeIndex))) {
      return _MaterialInputComponent_0_9;
    }
    if ((identical(token, import22.BaseMaterialInput) && (0 == nodeIndex))) {
      return _BaseMaterialInput_0_10;
    }
    if ((identical(token, import16.MaterialInputDefaultValueAccessor) && (0 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_0_11;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_0_7.model = _ctx.inputText;
    _NgModel_0_7.ngAfterChanges();
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_1 = _ctx.placeholder;
    if (import8.checkBinding(_expr_1, currVal_1)) {
      _MaterialInputComponent_0_9.label = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.leadingGlyph;
    if (import8.checkBinding(_expr_3, currVal_3)) {
      _MaterialInputComponent_0_9.leadingGlyph = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (!import8.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_0_9.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialTreeFilterComponent0>(parentView)._query_materialInput_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialInputComponent_0_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_11.ngOnDestroy();
  }

  void _handle_inputKeyPress_0_1($event) {
    ctx.inputText = $event;
  }
}

AppView<import1.MaterialTreeFilterComponent> viewFactory_MaterialTreeFilterComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeFilterComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeFilterComponentHost = const [];

class _ViewMaterialTreeFilterComponentHost0 extends AppView<import1.MaterialTreeFilterComponent> {
  ViewMaterialTreeFilterComponent0 _compView_0;
  import1.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  _ViewMaterialTreeFilterComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.MaterialTreeFilterComponent> build() {
    _compView_0 = ViewMaterialTreeFilterComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeFilterComponent_0_5 = (import9.isDevMode
        ? import23.debugInjectorWrap(import1.MaterialTreeFilterComponent, () {
            return import1.MaterialTreeFilterComponent(this.injectorGet(import24.MaterialTreeRoot, viewData.parentIndex, null));
          })
        : import1.MaterialTreeFilterComponent(this.injectorGet(import24.MaterialTreeRoot, viewData.parentIndex, null)));
    _compView_0.create(_MaterialTreeFilterComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeFilterComponent_0_5);
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

AppView<import1.MaterialTreeFilterComponent> viewFactory_MaterialTreeFilterComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeFilterComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeFilterComponent, MaterialTreeFilterComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
