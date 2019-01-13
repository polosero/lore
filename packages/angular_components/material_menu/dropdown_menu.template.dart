// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dropdown_menu.dart';
export 'dropdown_menu.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/material_menu/menu_popup.template.dart' as _ref3;
import 'package:angular_components/material_menu/menu_popup_wrapper.template.dart' as _ref4;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref5;
import 'package:angular_components/material_select/dropdown_button.template.dart' as _ref6;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref7;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref8;
import 'package:angular/src/core/linker/app_view.dart';
import 'dropdown_menu.dart' as import1;
import '../material_select/dropdown_button.template.dart' as import2;
import '../material_select/dropdown_button.dart' as import3;
import '../src/laminate/popup/popup_source_directive.dart' as import4;
import 'menu_popup.template.dart' as import5;
import 'menu_popup.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import14;
import '../src/laminate/popup/dom_popup_source.dart' as import15;
import '../utils/angular/reference/reference.dart' as import16;
import '../focus/focus_interface.dart' as import17;
import '../interfaces/has_disabled.dart' as import18;

final List<dynamic> styles$DropdownMenuComponent = const [];

class ViewDropdownMenuComponent0 extends AppView<import1.DropdownMenuComponent> {
  import2.ViewDropdownButtonComponent0 _compView_1;
  import3.DropdownButtonComponent _DropdownButtonComponent_1_5;
  import3.DropdownButtonComponent _Focusable_1_6;
  import4.PopupSourceDirective _PopupSourceDirective_1_7;
  import5.ViewMenuPopupComponent0 _compView_5;
  import6.MenuPopupComponent _MenuPopupComponent_5_5;
  import4.PopupSourceDirective _PopupSourceDirective_5_6;
  String _expr_0;
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  static RenderComponentType _renderType;
  ViewDropdownMenuComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import10.document.createElement('dropdown-menu');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:angular_components/lib/material_menu/dropdown_menu.dart' : null), ViewEncapsulation.None, styles$DropdownMenuComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.DropdownMenuComponent> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import10.Text('\n');
    parentRenderNode.append(_text_0);
    _compView_1 = import2.ViewDropdownButtonComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    createAttr(_el_1, 'popupSource', '');
    _DropdownButtonComponent_1_5 = import3.DropdownButtonComponent();
    _Focusable_1_6 = _DropdownButtonComponent_1_5;
    _PopupSourceDirective_1_7 = (import12.isDevMode
        ? import14.debugInjectorWrap(import4.PopupSourceDirective, () {
            return import4.PopupSourceDirective(parentView.injectorGet(import15.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGet(import16.ReferenceDirective, viewData.parentIndex, null), _Focusable_1_6, null);
          })
        : import4.PopupSourceDirective(parentView.injectorGet(import15.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGet(import16.ReferenceDirective, viewData.parentIndex, null), _Focusable_1_6, null));
    final _text_2 = import10.Text('\n  ');
    final _text_3 = import10.Text('\n');
    _compView_1.create(_DropdownButtonComponent_1_5, [
      <dynamic>[_text_2]..addAll(projectableNodes[0])..addAll([_text_3])
    ]);
    final _text_4 = import10.Text('\n');
    parentRenderNode.append(_text_4);
    _compView_5 = import5.ViewMenuPopupComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    parentRenderNode.append(_el_5);
    _MenuPopupComponent_5_5 = import6.MenuPopupComponent();
    _PopupSourceDirective_5_6 = (import12.isDevMode
        ? import14.debugInjectorWrap(import4.PopupSourceDirective, () {
            return import4.PopupSourceDirective(parentView.injectorGet(import15.DomPopupSourceFactory, viewData.parentIndex), _el_5, parentView.injectorGet(import16.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import17.Focusable, viewData.parentIndex, null), null);
          })
        : import4.PopupSourceDirective(parentView.injectorGet(import15.DomPopupSourceFactory, viewData.parentIndex), _el_5, parentView.injectorGet(import16.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import17.Focusable, viewData.parentIndex, null), null));
    final _text_6 = import10.Text('\n  ');
    final _text_7 = import10.Text('\n');
    _compView_5.create(_MenuPopupComponent_5_5, [
      <dynamic>[_text_6]..addAll(projectableNodes[1])..addAll([_text_7])
    ]);
    final _text_8 = import10.Text('\n');
    parentRenderNode.append(_text_8);
    final subscription_0 = _DropdownButtonComponent_1_5.trigger.listen(eventHandler1(_handle_trigger_1_0));
    final subscription_1 = _MenuPopupComponent_5_5.isExpandedChange.listen(eventHandler1(_handle_isExpandedChange_5_0));
    ctx.dropdownButton = _DropdownButtonComponent_1_5;
    ctx.menuPopup = _MenuPopupComponent_5_5;
    init(const [], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.HasDisabled) && ((1 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _DropdownButtonComponent_1_5;
    }
    if ((identical(token, import17.Focusable) && ((1 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _Focusable_1_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import4.PopupSourceDirective local_toggle = _PopupSourceDirective_1_7;
    changed = false;
    final currVal_0 = _ctx.buttonText;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _DropdownButtonComponent_1_5.buttonText = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _DropdownButtonComponent_1_5.disabled = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.tabbable;
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _DropdownButtonComponent_1_5.tabbable = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _DropdownButtonComponent_1_5.ngOnInit();
    }
    changed = false;
    final currVal_3 = _ctx.menu;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      _MenuPopupComponent_5_5.menu = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.preferredPositions;
    if (import11.checkBinding(_expr_4, currVal_4)) {
      _MenuPopupComponent_5_5.preferredPositions = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.isExpanded;
    if (import11.checkBinding(_expr_5, currVal_5)) {
      _MenuPopupComponent_5_5.isExpanded = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.width;
    if (import11.checkBinding(_expr_6, currVal_6)) {
      _MenuPopupComponent_5_5.width = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_7 = local_toggle;
    if (import11.checkBinding(_expr_7, currVal_7)) {
      _MenuPopupComponent_5_5.popupSource = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    _compView_1.detectChanges();
    _compView_5.detectChanges();
    if (!import11.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _PopupSourceDirective_1_7.ngAfterViewInit();
        _PopupSourceDirective_5_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_1.destroy();
    _compView_5.destroy();
    _PopupSourceDirective_1_7.ngOnDestroy();
    _PopupSourceDirective_5_6.ngOnDestroy();
  }

  void _handle_trigger_1_0($event) {
    ctx.isExpanded = true;
  }

  void _handle_isExpandedChange_5_0($event) {
    ctx.isExpanded = $event;
  }
}

AppView<import1.DropdownMenuComponent> viewFactory_DropdownMenuComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewDropdownMenuComponent0(parentView, parentIndex);
}

const ComponentFactory<import1.DropdownMenuComponent> _DropdownMenuComponentNgFactory = const ComponentFactory('dropdown-menu', viewFactory_DropdownMenuComponentHost0);
ComponentFactory<import1.DropdownMenuComponent> get DropdownMenuComponentNgFactory {
  return _DropdownMenuComponentNgFactory;
}

final List<dynamic> styles$DropdownMenuComponentHost = const [];

class _ViewDropdownMenuComponentHost0 extends AppView<import1.DropdownMenuComponent> {
  ViewDropdownMenuComponent0 _compView_0;
  import1.DropdownMenuComponent _DropdownMenuComponent_0_5;
  _ViewDropdownMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.DropdownMenuComponent> build() {
    _compView_0 = ViewDropdownMenuComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DropdownMenuComponent_0_5 = import1.DropdownMenuComponent(_compView_0.ref);
    _compView_0.create(_DropdownMenuComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _DropdownMenuComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.HasDisabled) && (0 == nodeIndex))) {
      return _DropdownMenuComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (!import11.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _DropdownMenuComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _DropdownMenuComponent_0_5.ngOnDestroy();
  }
}

AppView<import1.DropdownMenuComponent> viewFactory_DropdownMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDropdownMenuComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DropdownMenuComponent, DropdownMenuComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
