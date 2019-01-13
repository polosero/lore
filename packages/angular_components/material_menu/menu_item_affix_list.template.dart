// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'menu_item_affix_list.dart';
export 'menu_item_affix_list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/material_menu/affix/icon_affix_model.template.dart' as _ref4;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref5;
import 'package:angular_components/model/menu/menu_item_affix.template.dart' as _ref6;
import 'package:angular_components/model/ui/icon.template.dart' as _ref7;
import 'package:angular_components/material_menu/menu_item_affix_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'menu_item_affix_list.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import13;
import '../model/menu/menu_item_affix.dart' as import14;
import '../material_icon/material_icon.template.dart' as import15;
import '../button_decorator/button_decorator.template.dart' as import16;
import '../material_icon/material_icon.dart' as import17;
import 'package:angular/src/common/directives/ng_class.dart' as import18;
import '../button_decorator/button_decorator.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'menu_root.dart' as import21;
import '../interfaces/has_disabled.dart' as import22;

final List<dynamic> styles$MenuItemAffixListComponent = [import0.styles];

class ViewMenuItemAffixListComponent0 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  static RenderComponentType _renderType;
  ViewMenuItemAffixListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('menu-item-affix-list');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_menu/menu_item_affix_list.dart' : null), ViewEncapsulation.Emulated, styles$MenuItemAffixListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import8.Text('\n');
    parentRenderNode.append(_text_0);
    final _anchor_1 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_1);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MenuItemAffixListComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import8.Text('\n');
    parentRenderNode.append(_text_2);
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.hasAffixes;
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMenuItemAffixListComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MenuItemAffixListComponent> _MenuItemAffixListComponentNgFactory = const ComponentFactory('menu-item-affix-list', viewFactory_MenuItemAffixListComponentHost0);
ComponentFactory<import2.MenuItemAffixListComponent> get MenuItemAffixListComponentNgFactory {
  return _MenuItemAffixListComponentNgFactory;
}

class _ViewMenuItemAffixListComponent1 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_1;
  import13.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMenuItemAffixListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    final _text_0 = import8.Text('\n  ');
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MenuItemAffixListComponent2);
    _NgFor_1_9 = import13.NgFor(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import8.Text('\n');
    init([_text_0, _appEl_1, _text_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.affixes;
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

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponent1(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent2 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewMenuItemAffixListComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    final _text_0 = import8.Text('\n    ');
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MenuItemAffixListComponent3);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import8.Text('\n  ');
    init([_text_0, _appEl_1, _text_2], null);
  }

  @override
  void detectChangesInternal() {
    final local_affix = import10.unsafeCast<import14.MenuItemAffix>(locals['\$implicit']);
    _NgIf_1_9.ngIf = local_affix.isVisible;
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponent2(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent3 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewMenuItemAffixListComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    final _text_0 = import8.Text('\n      ');
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MenuItemAffixListComponent4);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import8.Text('\n      ');
    final _anchor_3 = createViewContainerAnchor();
    _appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MenuItemAffixListComponent5);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _text_4 = import8.Text('\n    ');
    init([_text_0, _appEl_1, _text_2, _appEl_3, _text_4], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_affix = import10.unsafeCast<import14.MenuItemAffix>(parentView.locals['\$implicit']);
    _NgIf_1_9.ngIf = _ctx.isIconAffix(local_affix);
    _NgIf_3_9.ngIf = _ctx.isCaptionAffix(local_affix);
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_3.destroyNestedViews();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponent3(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent4 extends AppView<import2.MenuItemAffixListComponent> {
  import15.ViewMaterialIconComponent0 _compView_0;
  import16.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import17.MaterialIconComponent _MaterialIconComponent_0_6;
  import18.NgClass _NgClass_0_7;
  var _expr_0;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  var _expr_5;
  var _expr_7;
  import8.Element _el_0;
  _ViewMenuItemAffixListComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    _compView_0 = import15.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'baseline', '');
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'material-list-item-primary secondary-icon';
    addShimC(_el_0);
    _ButtonDirective_0_5 = import16.ButtonDirectiveNgCd(import19.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import17.MaterialIconComponent(_el_0);
    _NgClass_0_7 = import18.NgClass(_el_0);
    final _text_1 = import8.Text('\n      ');
    _compView_0.create(_MaterialIconComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import19.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_affix = import10.unsafeCast<import14.MenuItemAffix>(parentView.parentView.locals['\$implicit']);
    final bool currVal_4 = !_ctx.isActionIconAffix(local_affix);
    if (import9.checkBinding(_expr_4, currVal_4)) {
      _ButtonDirective_0_5.instance.disabled = currVal_4;
      _expr_4 = currVal_4;
    }
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    changed = false;
    final currVal_5 = _ctx.getIcon(local_affix);
    if (import9.checkBinding(_expr_5, currVal_5)) {
      _MaterialIconComponent_0_6.icon = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_NgClass_0_7.initialClasses = 'material-list-item-primary secondary-icon');
    }
    final currVal_7 = local_affix.cssClass;
    if (import9.checkBinding(_expr_7, currVal_7)) {
      _NgClass_0_7.rawClass = currVal_7;
      _expr_7 = currVal_7;
    }
    if (!import9.AppViewUtils.throwOnChanges) {
      _NgClass_0_7.ngDoCheck();
    }
    if (firstCheck) {
      updateElemClass(_el_0, 'action-icon', false);
    }
    final currVal_0 = _ctx.getActionIconAriaLabel(_ctx.getIcon(local_affix));
    if (import9.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final bool currVal_2 = !_ctx.isActionIconAffix(local_affix);
    if (import9.checkBinding(_expr_2, currVal_2)) {
      updateElemClass(_el_0, 'disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_affix.isVisibleOnHover;
    if (import9.checkBinding(_expr_3, currVal_3)) {
      updateElemClass(_el_0, 'hover-icon', currVal_3);
      _expr_3 = currVal_3;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _NgClass_0_7.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_affix = import10.unsafeCast<import14.MenuItemAffix>(parentView.parentView.locals['\$implicit']);
    ctx.handleActionIconTrigger(ctx.getIcon(local_affix), $event);
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponent4(parentView, parentIndex);
}

class _ViewMenuItemAffixListComponent5 extends AppView<import2.MenuItemAffixListComponent> {
  import18.NgClass _NgClass_0_5;
  var _expr_1;
  var _expr_2;
  import8.Text _text_2;
  _ViewMenuItemAffixListComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuItemAffixListComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    var doc = import8.document;
    final _el_0 = doc.createElement('span');
    _el_0.className = 'material-list-item-primary caption-text';
    addShimE(_el_0);
    _NgClass_0_5 = import18.NgClass(_el_0);
    final _text_1 = import8.Text('\n        ');
    _el_0.append(_text_1);
    _text_2 = import8.Text('');
    _el_0.append(_text_2);
    final _text_3 = import8.Text('\n      ');
    _el_0.append(_text_3);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_affix = import10.unsafeCast<import14.MenuItemAffix>(parentView.parentView.locals['\$implicit']);
    if (firstCheck) {
      (_NgClass_0_5.initialClasses = 'material-list-item-primary caption-text');
    }
    final currVal_1 = local_affix.cssClass;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _NgClass_0_5.rawClass = currVal_1;
      _expr_1 = currVal_1;
    }
    if (!import9.AppViewUtils.throwOnChanges) {
      _NgClass_0_5.ngDoCheck();
    }
    final currVal_2 = import9.interpolate0(_ctx.getText(local_affix));
    if (import9.checkBinding(_expr_2, currVal_2)) {
      _text_2.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  @override
  void destroyInternal() {
    _NgClass_0_5.ngOnDestroy();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponent5(parentView, parentIndex);
}

final List<dynamic> styles$MenuItemAffixListComponentHost = const [];

class _ViewMenuItemAffixListComponentHost0 extends AppView<import2.MenuItemAffixListComponent> {
  ViewMenuItemAffixListComponent0 _compView_0;
  import2.MenuItemAffixListComponent _MenuItemAffixListComponent_0_5;
  _ViewMenuItemAffixListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    _compView_0 = ViewMenuItemAffixListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MenuItemAffixListComponent_0_5 = (import10.isDevMode
        ? import20.debugInjectorWrap(import2.MenuItemAffixListComponent, () {
            return import2.MenuItemAffixListComponent(_compView_0.ref, this.injectorGet(import21.MenuRoot, viewData.parentIndex, null));
          })
        : import2.MenuItemAffixListComponent(_compView_0.ref, this.injectorGet(import21.MenuRoot, viewData.parentIndex, null)));
    _compView_0.create(_MenuItemAffixListComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MenuItemAffixListComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.HasDisabled) && (0 == nodeIndex))) {
      return _MenuItemAffixListComponent_0_5;
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
    _MenuItemAffixListComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuItemAffixListComponent, MenuItemAffixListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
