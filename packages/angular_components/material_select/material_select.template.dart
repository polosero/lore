// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_select.dart';
export 'material_select.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_select_base.template.dart' as _ref0;
import 'material_select_item.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref3;
import 'package:angular_components/material_list/material_list.template.dart' as _ref4;
import 'package:angular_components/model/selection/select.template.dart' as _ref5;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref7;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref8;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref9;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref10;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref11;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref12;
import 'package:angular_components/material_select/material_select.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_select.dart' as import2;
import '../material_list/material_list.template.dart' as import3;
import '../material_list/material_list.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import15;
import '../model/selection/selection_options.dart' as import16;
import 'material_select_item.template.dart' as import17;
import 'material_select_item.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import '../mixins/material_dropdown_base.dart' as import20;
import 'activation_handler.dart' as import21;
import '../model/selection/selection_container.dart' as import22;
import '../interfaces/has_disabled.dart' as import23;
import '../model/ui/has_renderer.dart' as import24;

final List<dynamic> styles$MaterialSelectComponent = [import0.styles];

class ViewMaterialSelectComponent0<T> extends AppView<import2.MaterialSelectComponent<T>> {
  import3.ViewMaterialListComponent0 _compView_0;
  import4.MaterialListComponent _MaterialListComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_0;
  var _expr_2;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewMaterialSelectComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import10.document.createElement('material-select');
    createAttr(rootEl, 'role', import2.MaterialSelectComponent.hostRole);
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:angular_components/lib/material_select/material_select.dart' : null), ViewEncapsulation.Emulated, styles$MaterialSelectComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewMaterialListComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _MaterialListComponent_0_5 = import4.MaterialListComponent();
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent1<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    _compView_0.create(_MaterialListComponent_0_5, [
      <dynamic>[projectableNodes[0]]..addAll([_appEl_1])
    ]);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.width;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _MaterialListComponent_0_5.width = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = (_ctx.options != null);
    _appEl_1.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _compView_0.destroy();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_2 = ctx.isMultiSelect;
    if (import11.checkBinding(_expr_2, currVal_2)) {
      setAttr(rootEl, 'aria-multiselectable', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.disabledStr;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      setAttr(rootEl, 'aria-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponent0<T>(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialSelectComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialSelectComponent> _MaterialSelectComponentNgFactory = const ComponentFactory('material-select', viewFactory_MaterialSelectComponentHost0);
ComponentFactory<import2.MaterialSelectComponent> get MaterialSelectComponentNgFactory {
  return _MaterialSelectComponentNgFactory;
}

class _ViewMaterialSelectComponent1<T> extends AppView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_1;
  import15.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMaterialSelectComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    var doc = import10.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'options-wrapper';
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent2<T>(parentView, parentIndex);
    });
    _NgFor_1_9 = import15.NgFor(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (_NgFor_1_9.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_0 = _ctx.options.optionGroups;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import11.AppViewUtils.throwOnChanges) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent1(parentView, parentIndex);
}

class _ViewMaterialSelectComponent2<T> extends AppView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  bool _expr_0;
  import10.DivElement _el_0;
  _ViewMaterialSelectComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    var doc = import10.document;
    _el_0 = doc.createElement('div');
    createAttr(_el_0, 'group', '');
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent3<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import12.unsafeCast<import16.OptionGroup<T>>(locals['\$implicit']);
    _NgIf_1_9.ngIf = local_group.isNotEmpty;
    _appEl_1.detectChangesInNestedViews();
    final currVal_0 = local_group.isEmpty;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'empty', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent2(parentView, parentIndex);
}

class _ViewMaterialSelectComponent3<T> extends AppView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  import15.NgFor _NgFor_1_9;
  var _expr_1;
  _ViewMaterialSelectComponent3(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    final _anchor_0 = createViewContainerAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent4<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent5<T>(parentView, parentIndex);
    });
    _NgFor_1_9 = import15.NgFor(_appEl_1, _TemplateRef_1_8);
    init([_appEl_0, _appEl_1], null);
  }

  @override
  void detectChangesInternal() {
    final local_group = import12.unsafeCast<import16.OptionGroup<T>>(parentView.locals['\$implicit']);
    _NgIf_0_9.ngIf = local_group.hasLabel;
    final currVal_1 = local_group;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _NgFor_1_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if (!import11.AppViewUtils.throwOnChanges) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent3(parentView, parentIndex);
}

class _ViewMaterialSelectComponent4<T> extends AppView<import2.MaterialSelectComponent<T>> {
  var _expr_0;
  import10.Text _text_1;
  _ViewMaterialSelectComponent4(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    var doc = import10.document;
    final _el_0 = doc.createElement('span');
    createAttr(_el_0, 'label', '');
    addShimE(_el_0);
    _text_1 = import10.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import12.unsafeCast<import16.OptionGroup<T>>(parentView.parentView.locals['\$implicit']);
    final currVal_0 = import11.interpolate0(local_group.uiDisplayName);
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent4(parentView, parentIndex);
}

class _ViewMaterialSelectComponent5<T> extends AppView<import2.MaterialSelectComponent<T>> {
  import17.ViewMaterialSelectItemComponent0<T> _compView_0;
  import18.MaterialSelectItemComponent<T> _MaterialSelectItemComponent_0_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  _ViewMaterialSelectComponent5(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialSelectComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    _compView_0 = import17.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = (import12.isDevMode
        ? import19.debugInjectorWrap(import18.MaterialSelectItemComponent, () {
            return import18.MaterialSelectItemComponent(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import20.DropdownHandle, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import21.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref, null);
          })
        : import18.MaterialSelectItemComponent(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGet(import20.DropdownHandle, parentView.parentView.parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.parentView.parentView.injectorGet(import21.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex, null), _compView_0.ref, null));
    _compView_0.create(_MaterialSelectItemComponent_0_5, [const []]);
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import22.SelectionItem) || identical(token, import23.HasDisabled)) || identical(token, import24.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_item = locals['\$implicit'];
    final currVal_0 = (_ctx.disabled || _ctx.isOptionDisabled(local_item));
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.disabled = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.componentRenderer;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _MaterialSelectItemComponent_0_5.componentRenderer = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.factoryRenderer;
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _MaterialSelectItemComponent_0_5.factoryRenderer = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_item;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      _MaterialSelectItemComponent_0_5.value = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.itemRenderer;
    if (import11.checkBinding(_expr_4, currVal_4)) {
      _MaterialSelectItemComponent_0_5.itemRenderer = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.selection;
    if (import11.checkBinding(_expr_5, currVal_5)) {
      _MaterialSelectItemComponent_0_5.selection = currVal_5;
      _expr_5 = currVal_5;
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialSelectItemComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent5(parentView, parentIndex);
}

final List<dynamic> styles$MaterialSelectComponentHost = const [];

class _ViewMaterialSelectComponentHost0<T> extends AppView<import2.MaterialSelectComponent<T>> {
  ViewMaterialSelectComponent0<T> _compView_0;
  import2.MaterialSelectComponent<T> _MaterialSelectComponent_0_5;
  _ViewMaterialSelectComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    _compView_0 = ViewMaterialSelectComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSelectComponent_0_5 = import2.MaterialSelectComponent();
    _MaterialSelectComponent_0_5.selectItems = [];
    _compView_0.create(_MaterialSelectComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialSelectComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import23.HasDisabled) || identical(token, import24.HasRenderer)) || identical(token, import22.SelectionContainer)) && (0 == nodeIndex))) {
      return _MaterialSelectComponent_0_5;
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

AppView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectComponent, MaterialSelectComponentNgFactory);
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
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
}
