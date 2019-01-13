// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_chip.dart';
export 'material_chip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref4;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref5;
import 'package:angular_components/material_chips/material_chip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_chip.dart' as import2;
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
import '../button_decorator/button_decorator.template.dart' as import13;
import '../button_decorator/button_decorator.dart' as import14;
import '../model/ui/has_renderer.dart' as import15;

final List<dynamic> styles$MaterialChipComponent = [import0.styles];

class ViewMaterialChipComponent0<T> extends AppView<import2.MaterialChipComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_1;
  var _expr_2;
  import5.DivElement _el_1;
  import5.Text _text_2;
  static RenderComponentType _renderType;
  ViewMaterialChipComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import5.document.createElement('material-chip');
    rootEl.className = import2.MaterialChipComponent.hostClass;
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_chips/material_chip.dart' : null), ViewEncapsulation.Emulated, styles$MaterialChipComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialChipComponent<T>> build() {
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialChipComponent1<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    var doc = import5.document;
    _el_1 = createDivAndAppend(doc, parentRenderNode);
    _el_1.className = 'content';
    addShimC(_el_1);
    _text_2 = import5.Text('');
    _el_1.append(_text_2);
    final _text_3 = import5.Text(' ');
    _el_1.append(_text_3);
    project(_el_1, 1);
    final _anchor_4 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_4);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialChipComponent2<T>(parentView, parentIndex);
    });
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.hasLeftIcon;
    _NgIf_4_9.ngIf = _ctx.removable;
    _appEl_0.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    final currVal_1 = _ctx.uuid;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      setProp(_el_1, 'id', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.label ?? '');
    if (import9.checkBinding(_expr_2, currVal_2)) {
      _text_2.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }
}

AppView<import2.MaterialChipComponent<T>> viewFactory_MaterialChipComponent0<T>(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialChipComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialChipComponent> _MaterialChipComponentNgFactory = const ComponentFactory('material-chip', viewFactory_MaterialChipComponentHost0);
ComponentFactory<import2.MaterialChipComponent> get MaterialChipComponentNgFactory {
  return _MaterialChipComponentNgFactory;
}

class _ViewMaterialChipComponent1<T> extends AppView<import2.MaterialChipComponent<T>> {
  _ViewMaterialChipComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialChipComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialChipComponent<T>> build() {
    var doc = import5.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'left-icon';
    addShimC(_el_0);
    project(_el_0, 0);
    init0(_el_0);
  }
}

AppView<import2.MaterialChipComponent<T>> viewFactory_MaterialChipComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialChipComponent1(parentView, parentIndex);
}

class _ViewMaterialChipComponent2<T> extends AppView<import2.MaterialChipComponent<T>> {
  import13.ButtonDirectiveNgCd _ButtonDirective_0_5;
  var _expr_1;
  import5.Element _el_0;
  _ViewMaterialChipComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialChipComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialChipComponent<T>> build() {
    var doc = import5.document;
    _el_0 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    createAttr(_el_0, 'buttonDecorator', '');
    createAttr(_el_0, 'class', 'delete-icon');
    createAttr(_el_0, 'height', '24');
    createAttr(_el_0, 'viewBox', '0 0 24 24');
    createAttr(_el_0, 'width', '24');
    createAttr(_el_0, 'xmlns', 'http://www.w3.org/2000/svg');
    addShimE(_el_0);
    _ButtonDirective_0_5 = import13.ButtonDirectiveNgCd(import14.ButtonDirective(_el_0, null));
    final _el_1 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_0.append(_el_1);
    createAttr(_el_1, 'd', 'M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5\n               13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59\n               3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z');
    addShimE(_el_1);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(ctx.removeChip));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(import2.MaterialChipComponent.chipDeleteButtonMessage, null)) {
        setAttr(_el_0, 'aria-label', import2.MaterialChipComponent.chipDeleteButtonMessage);
      }
    }
    final currVal_1 = _ctx.uuid;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_0, 'aria-describedby', currVal_1);
      _expr_1 = currVal_1;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
  }
}

AppView<import2.MaterialChipComponent<T>> viewFactory_MaterialChipComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialChipComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialChipComponentHost = const [];

class _ViewMaterialChipComponentHost0<T> extends AppView<import2.MaterialChipComponent<T>> {
  ViewMaterialChipComponent0<T> _compView_0;
  import2.MaterialChipComponent<T> _MaterialChipComponent_0_5;
  _ViewMaterialChipComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialChipComponent<T>> build() {
    _compView_0 = ViewMaterialChipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialChipComponent_0_5 = import2.MaterialChipComponent(rootEl);
    _compView_0.create(_MaterialChipComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialChipComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.HasRenderer) && (0 == nodeIndex))) {
      return _MaterialChipComponent_0_5;
    }
    return notFoundResult;
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

AppView<import2.MaterialChipComponent<T>> viewFactory_MaterialChipComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialChipComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialChipComponent, MaterialChipComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
