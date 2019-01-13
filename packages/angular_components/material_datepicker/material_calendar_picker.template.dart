// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_calendar_picker.dart';
export 'material_calendar_picker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../src/material_datepicker/calendar_listener.template.dart' as _ref0;
import '../src/material_datepicker/enum_parsing.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref3;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref4;
import 'package:angular_components/model/date/date.template.dart' as _ref5;
import 'package:angular_components/model/observable/observable.template.dart' as _ref6;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref7;
import 'package:angular_components/material_datepicker/material_calendar_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_calendar_picker.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';
import 'package:angular/src/di/errors.dart' as import14;
import 'package:angular/src/core/di/opaque_token.dart' as import15;
import 'package:quiver/time.dart' as import16;

final List<dynamic> styles$MaterialCalendarPickerComponent = [import0.styles];

class ViewMaterialCalendarPickerComponent0 extends AppView<import2.MaterialCalendarPickerComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  bool _expr_1;
  static RenderComponentType _renderType;
  ViewMaterialCalendarPickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import8.document.createElement('material-calendar-picker');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_calendar_picker.dart' : null), ViewEncapsulation.Emulated, styles$MaterialCalendarPickerComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialCalendarPickerComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import8.document;
    final _el_0 = createAndAppend(doc, 'header', parentRenderNode);
    _el_0.className = 'header';
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialCalendarPickerComponent1);
    _NgFor_1_9 = import4.NgFor(_appEl_1, _TemplateRef_1_8);
    final _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.className = 'scroll-container';
    addShimC(_el_2);
    final _el_3 = createDivAndAppend(doc, _el_2);
    _el_3.className = 'calendar-container';
    addShimC(_el_3);
    ctx.container = _el_3;
    init(const [], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.dayNames;
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

  void detectHostChanges(bool firstCheck) {
    final currVal_1 = ctx.compact;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      updateElemClass(rootEl, 'compact', currVal_1);
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.MaterialCalendarPickerComponent> viewFactory_MaterialCalendarPickerComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialCalendarPickerComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialCalendarPickerComponent> _MaterialCalendarPickerComponentNgFactory = const ComponentFactory('material-calendar-picker', viewFactory_MaterialCalendarPickerComponentHost0);
ComponentFactory<import2.MaterialCalendarPickerComponent> get MaterialCalendarPickerComponentNgFactory {
  return _MaterialCalendarPickerComponentNgFactory;
}

class _ViewMaterialCalendarPickerComponent1 extends AppView<import2.MaterialCalendarPickerComponent> {
  var _expr_0;
  import8.Text _text_1;
  _ViewMaterialCalendarPickerComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialCalendarPickerComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialCalendarPickerComponent> build() {
    var doc = import8.document;
    final _el_0 = doc.createElement('div');
    _el_0.className = 'header-day';
    addShimC(_el_0);
    _text_1 = import8.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_name = import10.unsafeCast<String>(locals['\$implicit']);
    final currVal_0 = import9.interpolate0(local_name);
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.MaterialCalendarPickerComponent> viewFactory_MaterialCalendarPickerComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialCalendarPickerComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialCalendarPickerComponentHost = const [];

class _ViewMaterialCalendarPickerComponentHost0 extends AppView<import2.MaterialCalendarPickerComponent> {
  ViewMaterialCalendarPickerComponent0 _compView_0;
  import2.MaterialCalendarPickerComponent _MaterialCalendarPickerComponent_0_5;
  _ViewMaterialCalendarPickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialCalendarPickerComponent> build() {
    _compView_0 = ViewMaterialCalendarPickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialCalendarPickerComponent_0_5 = (import10.isDevMode
        ? import14.debugInjectorWrap(import2.MaterialCalendarPickerComponent, () {
            return import2.MaterialCalendarPickerComponent(this.injectorGet(const import15.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), this.injectorGet(import16.Clock, viewData.parentIndex), null);
          })
        : import2.MaterialCalendarPickerComponent(this.injectorGet(const import15.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex, null), this.injectorGet(import16.Clock, viewData.parentIndex), null));
    _compView_0.create(_MaterialCalendarPickerComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialCalendarPickerComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialCalendarPickerComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import9.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialCalendarPickerComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _MaterialCalendarPickerComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialCalendarPickerComponent> viewFactory_MaterialCalendarPickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialCalendarPickerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialCalendarPickerComponent, MaterialCalendarPickerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
