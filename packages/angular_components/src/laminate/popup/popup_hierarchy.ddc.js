define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/bootstrap/modules', 'packages/observable/observable', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/core', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface'], function(dart_sdk, events, modules, observable, dom_popup_source, core, alignment, properties, change_detection, reference, focus_interface) {
  'use strict';
  const core$ = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__observable_map = observable.src__observable_map;
  const src__records = observable.src__records;
  const src__observable = observable.src__observable;
  const src__laminate__popup__popup_source = dom_popup_source.src__laminate__popup__popup_source;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const core$0 = core.core;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const utils__angular__properties__properties = properties.utils__angular__properties__properties;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const _root = Object.create(null);
  const src__laminate__popup__popup_hierarchy = Object.create(_root);
  const src__laminate__popup__popup_state = Object.create(_root);
  const src__laminate__popup__popup_interface = Object.create(_root);
  const src__laminate__popup__popup_size_provider = Object.create(_root);
  const src__laminate__popup__popup_position_mixin = Object.create(_root);
  const src__laminate__popup__popup_ref = Object.create(_root);
  const src__laminate__popup__popup_size_provider_directive = Object.create(_root);
  const src__laminate__popup__popup_source_directive = Object.create(_root);
  const $clear = dartx.clear;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $onKeyUp = dartx.onKeyUp;
  const $remove = dartx.remove;
  const $querySelectorAll = dartx.querySelectorAll;
  const $target = dartx.target;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toLowerCase = dartx.toLowerCase;
  let JSArrayOfPopupHierarchyElement = () => (JSArrayOfPopupHierarchyElement = dart.constFn(_interceptors.JSArray$(src__laminate__popup__popup_hierarchy.PopupHierarchyElement)))();
  let ListOfPopupHierarchyElement = () => (ListOfPopupHierarchyElement = dart.constFn(core$.List$(src__laminate__popup__popup_hierarchy.PopupHierarchyElement)))();
  let LinkedMapOfSymbol$dynamic = () => (LinkedMapOfSymbol$dynamic = dart.constFn(_js_helper.LinkedMap$(core$.Symbol, dart.dynamic)))();
  let ObservableMapOfSymbol$dynamic = () => (ObservableMapOfSymbol$dynamic = dart.constFn(src__observable_map.ObservableMap$(core$.Symbol, dart.dynamic)))();
  let ObservableMapOfSymbol$Object = () => (ObservableMapOfSymbol$Object = dart.constFn(src__observable_map.ObservableMap$(core$.Symbol, core$.Object)))();
  let JSArrayOfChangeRecord = () => (JSArrayOfChangeRecord = dart.constFn(_interceptors.JSArray$(src__records.ChangeRecord)))();
  let ListOfChangeRecord = () => (ListOfChangeRecord = dart.constFn(core$.List$(src__records.ChangeRecord)))();
  let ListOfChangeRecordToListOfChangeRecord = () => (ListOfChangeRecordToListOfChangeRecord = dart.constFn(dart.fnType(ListOfChangeRecord(), [ListOfChangeRecord()])))();
  let StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core$.bool)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core$.List$(laminate__enums__alignment.RelativePosition)))();
  const _visiblePopupStack = Symbol('_visiblePopupStack');
  const _rootPane = Symbol('_rootPane');
  const _triggerListener = Symbol('_triggerListener');
  const _keyUpListener = Symbol('_keyUpListener');
  const _lastTriggerEvent = Symbol('_lastTriggerEvent');
  const _disposeListeners = Symbol('_disposeListeners');
  const _onTrigger = Symbol('_onTrigger');
  const _onKeyUp = Symbol('_onKeyUp');
  const _attach = Symbol('_attach');
  const _detach = Symbol('_detach');
  const _isInHiddenModal = Symbol('_isInHiddenModal');
  src__laminate__popup__popup_hierarchy.PopupHierarchy = class PopupHierarchy extends core$.Object {
    get islastTriggerWithKeyboard() {
      return html.KeyboardEvent.is(this[_lastTriggerEvent]) || html.FocusEvent.is(this[_lastTriggerEvent]);
    }
    closeHierarchy() {
      for (let popup of this[_visiblePopupStack]) {
        popup.onDismiss();
      }
      this[_visiblePopupStack][$clear]();
      this[_disposeListeners]();
    }
    [_attach](child) {
      if (!(child != null)) dart.assertFailed();
      if (dart.test(this[_visiblePopupStack][$isEmpty])) {
        this[_rootPane] = utils__browser__events__events.closestWithClass(html.Element._check(child.elementRef.nativeElement), "pane");
      }
      this[_visiblePopupStack][$add](child);
      if (this[_triggerListener] == null) {
        this[_triggerListener] = utils__browser__events__events.triggersOutside(null).listen(dart.bind(this, _onTrigger));
      }
      if (this[_keyUpListener] == null) {
        this[_keyUpListener] = html.document[$onKeyUp].listen(dart.bind(this, _onKeyUp));
      }
    }
    [_disposeListeners]() {
      this[_triggerListener].cancel();
      this[_keyUpListener].cancel();
      this[_triggerListener] = null;
      this[_keyUpListener] = null;
    }
    [_detach](child) {
      if (dart.test(this[_visiblePopupStack][$remove](child)) && dart.test(this[_visiblePopupStack][$isEmpty])) {
        this[_rootPane] = null;
        this[_disposeListeners]();
      }
    }
    [_isInHiddenModal]() {
      let modalPanes = html.document[$querySelectorAll](html.Element, "." + "acx-overlay-container" + " .pane.modal.visible");
      if (dart.test(modalPanes.isNotEmpty)) {
        if (this[_rootPane] == null || !dart.equals(this[_rootPane], modalPanes.last) && dart.test(modalPanes.contains(this[_rootPane]))) {
          return true;
        }
      }
      return false;
    }
    [_onTrigger](event) {
      if ((event == null ? null : event[$target]) == null) return;
      this[_lastTriggerEvent] = event;
      if (dart.test(this[_isInHiddenModal]())) return;
      for (let i = dart.notNull(this[_visiblePopupStack][$length]) - 1; i >= 0; i--) {
        let current = this[_visiblePopupStack][$_get](i);
        if ((current == null ? null : current.container) == null) continue;
        if (dart.test(utils__browser__events__events.isParentOf(current.container, html.Node._check(event[$target])))) return;
        for (let blockerElement of current.autoDismissBlockers) {
          if (dart.test(utils__browser__events__events.isParentOf(blockerElement, html.Node._check(event[$target])))) return;
        }
        if (dart.test(current.autoDismiss)) current.onAutoDismiss(event);
      }
    }
    [_onKeyUp](event) {
      if ((event == null ? null : event[$target]) == null) return;
      this[_lastTriggerEvent] = event;
      if (dart.test(this[_isInHiddenModal]())) return;
      if (event.keyCode === html.KeyCode.ESC) {
        for (let i = dart.notNull(this[_visiblePopupStack][$length]) - 1; i >= 0; i--) {
          let current = this[_visiblePopupStack][$_get](i);
          if ((current == null ? null : current.container) == null) continue;
          if (dart.test(utils__browser__events__events.isParentOf(current.container, html.Node._check(event[$target])))) {
            event.stopPropagation();
            current.onDismiss();
            return;
          }
          for (let blockerElement of current.autoDismissBlockers) {
            if (dart.test(utils__browser__events__events.isParentOf(blockerElement, html.Node._check(event[$target])))) {
              event.stopPropagation();
              current.onDismiss();
              return;
            }
          }
        }
      }
    }
  };
  (src__laminate__popup__popup_hierarchy.PopupHierarchy.new = function() {
    this[_visiblePopupStack] = JSArrayOfPopupHierarchyElement().of([]);
    this[_rootPane] = null;
    this[_triggerListener] = null;
    this[_keyUpListener] = null;
    this[_lastTriggerEvent] = null;
  }).prototype = src__laminate__popup__popup_hierarchy.PopupHierarchy.prototype;
  dart.addTypeTests(src__laminate__popup__popup_hierarchy.PopupHierarchy);
  dart.setMethodSignature(src__laminate__popup__popup_hierarchy.PopupHierarchy, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_hierarchy.PopupHierarchy.__proto__),
    closeHierarchy: dart.fnType(dart.void, []),
    [_attach]: dart.fnType(dart.void, [src__laminate__popup__popup_hierarchy.PopupHierarchyElement]),
    [_disposeListeners]: dart.fnType(dart.void, []),
    [_detach]: dart.fnType(dart.void, [src__laminate__popup__popup_hierarchy.PopupHierarchyElement]),
    [_isInHiddenModal]: dart.fnType(core$.bool, []),
    [_onTrigger]: dart.fnType(dart.void, [html.Event]),
    [_onKeyUp]: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(src__laminate__popup__popup_hierarchy.PopupHierarchy, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_hierarchy.PopupHierarchy.__proto__),
    islastTriggerWithKeyboard: core$.bool
  }));
  dart.setFieldSignature(src__laminate__popup__popup_hierarchy.PopupHierarchy, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_hierarchy.PopupHierarchy.__proto__),
    [_visiblePopupStack]: dart.finalFieldType(ListOfPopupHierarchyElement()),
    [_rootPane]: dart.fieldType(html.Element),
    [_triggerListener]: dart.fieldType(async.StreamSubscription),
    [_keyUpListener]: dart.fieldType(async.StreamSubscription),
    [_lastTriggerEvent]: dart.fieldType(html.Event)
  }));
  src__laminate__popup__popup_hierarchy.PopupHierarchyElement = class PopupHierarchyElement extends core$.Object {
    get elementRef() {
      return null;
    }
    attachToVisibleHierarchy() {
      this.hierarchy[_attach](this);
    }
    detachFromVisibleHierarchy() {
      this.hierarchy[_detach](this);
    }
    onAutoDismiss(event) {
      this.onDismiss();
    }
  };
  (src__laminate__popup__popup_hierarchy.PopupHierarchyElement.new = function() {
  }).prototype = src__laminate__popup__popup_hierarchy.PopupHierarchyElement.prototype;
  dart.addTypeTests(src__laminate__popup__popup_hierarchy.PopupHierarchyElement);
  dart.setMethodSignature(src__laminate__popup__popup_hierarchy.PopupHierarchyElement, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_hierarchy.PopupHierarchyElement.__proto__),
    attachToVisibleHierarchy: dart.fnType(dart.void, []),
    detachFromVisibleHierarchy: dart.fnType(dart.void, []),
    onAutoDismiss: dart.fnType(dart.void, [html.Event])
  }));
  dart.setGetterSignature(src__laminate__popup__popup_hierarchy.PopupHierarchyElement, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_hierarchy.PopupHierarchyElement.__proto__),
    elementRef: src__core__linker__element_ref.ElementRef
  }));
  const _backingMap = Symbol('_backingMap');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  src__laminate__popup__popup_state.PopupState = class PopupState extends src__observable.Observable$(src__records.ChangeRecord) {
    static new(opts) {
      let autoDismiss = opts && 'autoDismiss' in opts ? opts.autoDismiss : true;
      let enforceSpaceConstraints = opts && 'enforceSpaceConstraints' in opts ? opts.enforceSpaceConstraints : false;
      let matchMinSourceWidth = opts && 'matchMinSourceWidth' in opts ? opts.matchMinSourceWidth : false;
      let offsetX = opts && 'offsetX' in opts ? opts.offsetX : 0;
      let offsetY = opts && 'offsetY' in opts ? opts.offsetY : 0;
      let preferredPositions = opts && 'preferredPositions' in opts ? opts.preferredPositions : const$ || (const$ = dart.constList([], dart.dynamic));
      let source = opts && 'source' in opts ? opts.source : null;
      let trackLayoutChanges = opts && 'trackLayoutChanges' in opts ? opts.trackLayoutChanges : true;
      let constrainToViewport = opts && 'constrainToViewport' in opts ? opts.constrainToViewport : true;
      return new src__laminate__popup__popup_state.PopupState.__(ObservableMapOfSymbol$dynamic().from(new (LinkedMapOfSymbol$dynamic()).from([const$0 || (const$0 = dart.const(core$.Symbol.new('autoDismiss'))), autoDismiss, const$1 || (const$1 = dart.const(core$.Symbol.new('enforceSpaceConstraints'))), enforceSpaceConstraints, const$2 || (const$2 = dart.const(core$.Symbol.new('matchMinSourceWidth'))), matchMinSourceWidth, const$3 || (const$3 = dart.const(core$.Symbol.new('offsetX'))), offsetX, const$4 || (const$4 = dart.const(core$.Symbol.new('offsetY'))), offsetY, const$5 || (const$5 = dart.const(core$.Symbol.new('preferredPositions'))), preferredPositions, const$6 || (const$6 = dart.const(core$.Symbol.new('source'))), source, const$7 || (const$7 = dart.const(core$.Symbol.new('trackLayoutChanges'))), trackLayoutChanges, const$8 || (const$8 = dart.const(core$.Symbol.new('constrainToViewport'))), constrainToViewport])));
    }
    static from(other) {
      if (other == null) return src__laminate__popup__popup_state.PopupState.new();
      return new src__laminate__popup__popup_state.PopupState.__(ObservableMapOfSymbol$Object().from(other[_backingMap]));
    }
    get changes() {
      return this[_backingMap].changes.map(ListOfChangeRecord(), dart.fn(records => {
        let propertyRecords = JSArrayOfChangeRecord().of([]);
        for (let record of records) {
          if (src__records.MapChangeRecord.is(record)) {
            propertyRecords[$add](new src__records.PropertyChangeRecord.new(this, core$.Symbol._check(record.key), record.oldValue, record.newValue));
          }
        }
        return propertyRecords;
      }, ListOfChangeRecordToListOfChangeRecord()));
    }
    get autoDismiss() {
      return core$.bool._check(this[_backingMap]._get(const$9 || (const$9 = dart.const(core$.Symbol.new('autoDismiss')))));
    }
    set autoDismiss(autoDismiss) {
      this[_backingMap]._set(const$10 || (const$10 = dart.const(core$.Symbol.new('autoDismiss'))), autoDismiss);
    }
    get enforceSpaceConstraints() {
      return core$.bool._check(this[_backingMap]._get(const$11 || (const$11 = dart.const(core$.Symbol.new('enforceSpaceConstraints')))));
    }
    set enforceSpaceConstraints(enforceSpaceConstraints) {
      this[_backingMap]._set(const$12 || (const$12 = dart.const(core$.Symbol.new('enforceSpaceConstraints'))), enforceSpaceConstraints);
    }
    get matchMinSourceWidth() {
      return core$.bool._check(this[_backingMap]._get(const$13 || (const$13 = dart.const(core$.Symbol.new('matchMinSourceWidth')))));
    }
    set matchMinSourceWidth(matchMinSourceWidth) {
      this[_backingMap]._set(const$14 || (const$14 = dart.const(core$.Symbol.new('matchMinSourceWidth'))), matchMinSourceWidth);
    }
    get source() {
      return src__laminate__popup__popup_source.PopupSource._check(this[_backingMap]._get(const$15 || (const$15 = dart.const(core$.Symbol.new('source')))));
    }
    set source(source) {
      this[_backingMap]._set(const$16 || (const$16 = dart.const(core$.Symbol.new('source'))), source);
    }
    get offsetX() {
      return core$.int._check(this[_backingMap]._get(const$17 || (const$17 = dart.const(core$.Symbol.new('offsetX')))));
    }
    set offsetX(offsetX) {
      this[_backingMap]._set(const$18 || (const$18 = dart.const(core$.Symbol.new('offsetX'))), offsetX);
    }
    get offsetY() {
      return core$.int._check(this[_backingMap]._get(const$19 || (const$19 = dart.const(core$.Symbol.new('offsetY')))));
    }
    set offsetY(offsetY) {
      this[_backingMap]._set(const$20 || (const$20 = dart.const(core$.Symbol.new('offsetY'))), offsetY);
    }
    get preferredPositions() {
      return core$.Iterable._check(this[_backingMap]._get(const$21 || (const$21 = dart.const(core$.Symbol.new('preferredPositions')))));
    }
    set preferredPositions(preferredPositions) {
      this[_backingMap]._set(const$22 || (const$22 = dart.const(core$.Symbol.new('preferredPositions'))), preferredPositions);
    }
    get trackLayoutChanges() {
      return core$.bool._check(this[_backingMap]._get(const$23 || (const$23 = dart.const(core$.Symbol.new('trackLayoutChanges')))));
    }
    set trackLayoutChanges(trackLayoutChanges) {
      this[_backingMap]._set(const$24 || (const$24 = dart.const(core$.Symbol.new('trackLayoutChanges'))), trackLayoutChanges);
    }
    get constrainToViewport() {
      return core$.bool._check(this[_backingMap]._get(const$25 || (const$25 = dart.const(core$.Symbol.new('constrainToViewport')))));
    }
    set constrainToViewport(constrainToViewport) {
      this[_backingMap]._set(const$26 || (const$26 = dart.const(core$.Symbol.new('constrainToViewport'))), constrainToViewport);
    }
    _equals(o) {
      if (o == null) return false;
      return src__laminate__popup__popup_state.PopupState.is(o) && o.autoDismiss == this.autoDismiss && o.enforceSpaceConstraints == this.enforceSpaceConstraints && o.matchMinSourceWidth == this.matchMinSourceWidth && dart.equals(o.source, this.source) && o.offsetX == this.offsetX && o.offsetY == this.offsetY && dart.equals(o.preferredPositions, this.preferredPositions) && o.trackLayoutChanges == this.trackLayoutChanges && o.constrainToViewport == this.constrainToViewport;
    }
    get hashCode() {
      return core$0.hashObjects([this.autoDismiss, this.enforceSpaceConstraints, this.matchMinSourceWidth, this.source, this.offsetX, this.offsetY, this.preferredPositions, this.trackLayoutChanges, this.constrainToViewport]);
    }
    toString() {
      return "PopupState " + dart.notNull(dart.toString(this[_backingMap]));
    }
  };
  (src__laminate__popup__popup_state.PopupState.__ = function(backingMap) {
    this[_backingMap] = backingMap;
    src__laminate__popup__popup_state.PopupState.__proto__.new.call(this);
  }).prototype = src__laminate__popup__popup_state.PopupState.prototype;
  dart.addTypeTests(src__laminate__popup__popup_state.PopupState);
  dart.setGetterSignature(src__laminate__popup__popup_state.PopupState, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_state.PopupState.__proto__),
    changes: async.Stream$(core$.List$(src__records.ChangeRecord)),
    autoDismiss: core$.bool,
    enforceSpaceConstraints: core$.bool,
    matchMinSourceWidth: core$.bool,
    source: src__laminate__popup__popup_source.PopupSource,
    offsetX: core$.int,
    offsetY: core$.int,
    preferredPositions: core$.Iterable,
    trackLayoutChanges: core$.bool,
    constrainToViewport: core$.bool
  }));
  dart.setSetterSignature(src__laminate__popup__popup_state.PopupState, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_state.PopupState.__proto__),
    autoDismiss: core$.bool,
    enforceSpaceConstraints: core$.bool,
    matchMinSourceWidth: core$.bool,
    source: src__laminate__popup__popup_source.PopupSource,
    offsetX: core$.int,
    offsetY: core$.int,
    preferredPositions: core$.Iterable,
    trackLayoutChanges: core$.bool,
    constrainToViewport: core$.bool
  }));
  dart.setFieldSignature(src__laminate__popup__popup_state.PopupState, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_state.PopupState.__proto__),
    [_backingMap]: dart.finalFieldType(ObservableMapOfSymbol$Object())
  }));
  dart.defineExtensionMethods(src__laminate__popup__popup_state.PopupState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__laminate__popup__popup_state.PopupState, ['hashCode']);
  src__laminate__popup__popup_interface.PopupInterface = class PopupInterface extends core$.Object {};
  (src__laminate__popup__popup_interface.PopupInterface.new = function() {
  }).prototype = src__laminate__popup__popup_interface.PopupInterface.prototype;
  dart.addTypeTests(src__laminate__popup__popup_interface.PopupInterface);
  src__laminate__popup__popup_interface.PopupEvents = class PopupEvents extends core$.Object {
    get onOpen() {
      return this.onOpenController.stream;
    }
    get onOpenController() {
      return this[onOpenController];
    }
    set onOpenController(value) {
      super.onOpenController = value;
    }
    get onClose() {
      return this.onCloseController.stream;
    }
    get onCloseController() {
      return this[onCloseController];
    }
    set onCloseController(value) {
      super.onCloseController = value;
    }
    get onVisible() {
      return this.onVisibleController.stream;
    }
    get onVisibleController() {
      return this[onVisibleController];
    }
    set onVisibleController(value) {
      super.onVisibleController = value;
    }
  };
  (src__laminate__popup__popup_interface.PopupEvents.new = function() {
    this[onOpenController] = StreamControllerOfvoid().broadcast({sync: true});
    this[onCloseController] = StreamControllerOfvoid().broadcast({sync: true});
    this[onVisibleController] = StreamControllerOfbool().broadcast({sync: true});
  }).prototype = src__laminate__popup__popup_interface.PopupEvents.prototype;
  dart.addTypeTests(src__laminate__popup__popup_interface.PopupEvents);
  const onOpenController = Symbol("PopupEvents.onOpenController");
  const onCloseController = Symbol("PopupEvents.onCloseController");
  const onVisibleController = Symbol("PopupEvents.onVisibleController");
  dart.setGetterSignature(src__laminate__popup__popup_interface.PopupEvents, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_interface.PopupEvents.__proto__),
    onOpen: async.Stream$(dart.void),
    onClose: async.Stream$(dart.void),
    onVisible: async.Stream$(core$.bool)
  }));
  dart.setFieldSignature(src__laminate__popup__popup_interface.PopupEvents, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_interface.PopupEvents.__proto__),
    onOpenController: dart.finalFieldType(StreamControllerOfvoid()),
    onCloseController: dart.finalFieldType(StreamControllerOfvoid()),
    onVisibleController: dart.finalFieldType(StreamControllerOfbool())
  }));
  src__laminate__popup__popup_interface.PopupBase = class PopupBase extends core$.Object {
    set autoDismiss(autoDismiss) {
      this.state.autoDismiss = autoDismiss;
    }
    set enforceSpaceConstraints(enforceSpaceConstraints) {
      this.state.enforceSpaceConstraints = enforceSpaceConstraints;
    }
    set matchMinSourceWidth(matchMinSourceWidth) {
      this.state.matchMinSourceWidth = matchMinSourceWidth;
    }
    set offsetX(offsetX) {
      this.state.offsetX = offsetX;
    }
    set offsetY(offsetY) {
      this.state.offsetY = offsetY;
    }
    set preferredPositions(preferredPositions) {
      this.state.preferredPositions = preferredPositions;
    }
    set source(source) {
      this.state.source = source;
    }
    set trackLayoutChanges(trackLayoutChanges) {
      this.state.trackLayoutChanges = trackLayoutChanges;
    }
    set constrainToViewport(constrainToViewport) {
      this.state.constrainToViewport = constrainToViewport;
    }
  };
  (src__laminate__popup__popup_interface.PopupBase.new = function() {
  }).prototype = src__laminate__popup__popup_interface.PopupBase.prototype;
  dart.addTypeTests(src__laminate__popup__popup_interface.PopupBase);
  src__laminate__popup__popup_interface.PopupBase[dart.implements] = () => [src__laminate__popup__popup_interface.PopupInterface];
  dart.setSetterSignature(src__laminate__popup__popup_interface.PopupBase, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_interface.PopupBase.__proto__),
    autoDismiss: core$.bool,
    enforceSpaceConstraints: core$.bool,
    matchMinSourceWidth: core$.bool,
    offsetX: core$.int,
    offsetY: core$.int,
    preferredPositions: core$.Iterable,
    source: src__laminate__popup__popup_source.PopupSource,
    trackLayoutChanges: core$.bool,
    constrainToViewport: core$.bool
  }));
  src__laminate__popup__popup_interface.PopupComposite = class PopupComposite extends core$.Object {
    get autoDismiss() {
      return this[autoDismiss];
    }
    set autoDismiss(value) {
      this[autoDismiss] = value;
    }
    get enforceSpaceConstraints() {
      return this[enforceSpaceConstraints];
    }
    set enforceSpaceConstraints(value) {
      this[enforceSpaceConstraints] = value;
    }
    get matchMinSourceWidth() {
      return this[matchMinSourceWidth];
    }
    set matchMinSourceWidth(value) {
      this[matchMinSourceWidth] = value;
    }
    get offsetX() {
      return this[offsetX];
    }
    set offsetX(value) {
      this[offsetX] = value;
    }
    get offsetY() {
      return this[offsetY];
    }
    set offsetY(value) {
      this[offsetY] = value;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get source() {
      return this[source];
    }
    set source(value) {
      this[source] = value;
    }
    get trackLayoutChanges() {
      return this[trackLayoutChanges];
    }
    set trackLayoutChanges(value) {
      this[trackLayoutChanges] = value;
    }
    get constrainToViewport() {
      return this[constrainToViewport];
    }
    set constrainToViewport(value) {
      this[constrainToViewport] = value;
    }
    get visible() {
      return this[visible];
    }
    set visible(value) {
      this[visible] = value;
    }
    toggle() {
      this.visible = !dart.test(this.visible);
    }
  };
  (src__laminate__popup__popup_interface.PopupComposite.new = function() {
    this[autoDismiss] = true;
    this[enforceSpaceConstraints] = false;
    this[matchMinSourceWidth] = true;
    this[offsetX] = 0;
    this[offsetY] = 0;
    this[preferredPositions] = dart.constList([], dart.dynamic);
    this[source] = null;
    this[trackLayoutChanges] = true;
    this[constrainToViewport] = true;
    this[visible] = false;
  }).prototype = src__laminate__popup__popup_interface.PopupComposite.prototype;
  dart.addTypeTests(src__laminate__popup__popup_interface.PopupComposite);
  const autoDismiss = Symbol("PopupComposite.autoDismiss");
  const enforceSpaceConstraints = Symbol("PopupComposite.enforceSpaceConstraints");
  const matchMinSourceWidth = Symbol("PopupComposite.matchMinSourceWidth");
  const offsetX = Symbol("PopupComposite.offsetX");
  const offsetY = Symbol("PopupComposite.offsetY");
  const preferredPositions = Symbol("PopupComposite.preferredPositions");
  const source = Symbol("PopupComposite.source");
  const trackLayoutChanges = Symbol("PopupComposite.trackLayoutChanges");
  const constrainToViewport = Symbol("PopupComposite.constrainToViewport");
  const visible = Symbol("PopupComposite.visible");
  src__laminate__popup__popup_interface.PopupComposite[dart.implements] = () => [src__laminate__popup__popup_interface.PopupInterface];
  dart.setMethodSignature(src__laminate__popup__popup_interface.PopupComposite, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_interface.PopupComposite.__proto__),
    toggle: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_interface.PopupComposite, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_interface.PopupComposite.__proto__),
    autoDismiss: dart.fieldType(core$.bool),
    enforceSpaceConstraints: dart.fieldType(core$.bool),
    matchMinSourceWidth: dart.fieldType(core$.bool),
    offsetX: dart.fieldType(core$.int),
    offsetY: dart.fieldType(core$.int),
    preferredPositions: dart.fieldType(core$.Iterable),
    source: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    trackLayoutChanges: dart.fieldType(core$.bool),
    constrainToViewport: dart.fieldType(core$.bool),
    visible: dart.fieldType(core$.bool)
  }));
  src__laminate__popup__popup_size_provider.PopupSizeProvider = class PopupSizeProvider extends core$.Object {};
  (src__laminate__popup__popup_size_provider.PopupSizeProvider.new = function() {
  }).prototype = src__laminate__popup__popup_size_provider.PopupSizeProvider.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider.PopupSizeProvider);
  const _minWidthPercentage = Symbol('_minWidthPercentage');
  const _minHeightPercentage = Symbol('_minHeightPercentage');
  const _maxWidthPercentage = Symbol('_maxWidthPercentage');
  const _maxHeightPercentage = Symbol('_maxHeightPercentage');
  src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider = class PercentagePopupSizeProvider extends core$.Object {
    getMinHeight(positionY, viewportHeight) {
      return this[_minHeightPercentage] == null ? null : dart.notNull(viewportHeight) * dart.notNull(this[_minHeightPercentage]);
    }
    getMinWidth(positionX, viewportWidth) {
      return this[_minWidthPercentage] == null ? null : dart.notNull(viewportWidth) * dart.notNull(this[_minWidthPercentage]);
    }
    getMaxWidth(_, viewportWidth) {
      return dart.notNull(viewportWidth) * dart.notNull(this[_maxWidthPercentage]);
    }
    getMaxHeight(_, viewportHeight) {
      return dart.notNull(viewportHeight) * dart.notNull(this[_maxHeightPercentage]);
    }
  };
  (src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.new = function(maxWidthPercentage, maxHeightPercentage, minWidthPercentage, minHeightPercentage) {
    if (maxWidthPercentage === void 0) maxWidthPercentage = null;
    if (maxHeightPercentage === void 0) maxHeightPercentage = null;
    if (minWidthPercentage === void 0) minWidthPercentage = null;
    if (minHeightPercentage === void 0) minHeightPercentage = null;
    this[_minWidthPercentage] = minWidthPercentage;
    this[_minHeightPercentage] = minHeightPercentage;
    this[_maxWidthPercentage] = maxWidthPercentage != null ? maxWidthPercentage : 0.7;
    this[_maxHeightPercentage] = maxHeightPercentage != null ? maxHeightPercentage : 0.5;
  }).prototype = src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider);
  src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.__proto__),
    getMinHeight: dart.fnType(core$.num, [core$.num, core$.num]),
    getMinWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxHeight: dart.fnType(core$.num, [core$.num, core$.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.__proto__),
    [_minWidthPercentage]: dart.finalFieldType(core$.num),
    [_minHeightPercentage]: dart.finalFieldType(core$.num),
    [_maxWidthPercentage]: dart.finalFieldType(core$.num),
    [_maxHeightPercentage]: dart.finalFieldType(core$.num)
  }));
  src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider = class WithinViewportPopupSizeProvider extends core$.Object {
    getMaxHeight(positionY, viewportHeight) {
      return dart.notNull(viewportHeight) - dart.notNull(positionY) - 8;
    }
    getMaxWidth(positionX, viewportWidth) {
      return dart.notNull(viewportWidth) - dart.notNull(positionX) - 8;
    }
    getMinHeight(positionY, viewportHeight) {
      return null;
    }
    getMinWidth(positionX, viewportWidth) {
      return null;
    }
  };
  (src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider.new = function() {
  }).prototype = src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider);
  src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider.__proto__),
    getMaxHeight: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMinHeight: dart.fnType(core$.num, [core$.num, core$.num]),
    getMinWidth: dart.fnType(core$.num, [core$.num, core$.num])
  }));
  dart.defineLazy(src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider, {
    /*src__laminate__popup__popup_size_provider.WithinViewportPopupSizeProvider._paddingPixels*/get _paddingPixels() {
      return 8;
    }
  });
  const _minWidth = Symbol('_minWidth');
  const _minHeight = Symbol('_minHeight');
  const _maxWidth = Symbol('_maxWidth');
  const _maxHeight = Symbol('_maxHeight');
  src__laminate__popup__popup_size_provider.FixedPopupSizeProvider = class FixedPopupSizeProvider extends core$.Object {
    getMinWidth(_, __) {
      return this[_minWidth];
    }
    getMinHeight(_, __) {
      return this[_minHeight];
    }
    getMaxWidth(_, __) {
      return this[_maxWidth];
    }
    getMaxHeight(_, __) {
      return this[_maxHeight];
    }
  };
  (src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.new = function(opts) {
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
    this[_minWidth] = minWidth;
    this[_minHeight] = minHeight;
    this[_maxWidth] = maxWidth;
    this[_maxHeight] = maxHeight;
  }).prototype = src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider);
  src__laminate__popup__popup_size_provider.FixedPopupSizeProvider[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.__proto__),
    getMinWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMinHeight: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxHeight: dart.fnType(core$.num, [core$.num, core$.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.__proto__),
    [_minWidth]: dart.finalFieldType(core$.num),
    [_minHeight]: dart.finalFieldType(core$.num),
    [_maxWidth]: dart.finalFieldType(core$.num),
    [_maxHeight]: dart.finalFieldType(core$.num)
  }));
  dart.defineLazy(src__laminate__popup__popup_size_provider, {
    /*src__laminate__popup__popup_size_provider.unboundedPopupSize*/get unboundedPopupSize() {
      return dart.const(new src__laminate__popup__popup_size_provider.FixedPopupSizeProvider.new());
    }
  });
  src__laminate__popup__popup_position_mixin.PopupPosition = class PopupPosition extends core$.Object {};
  (src__laminate__popup__popup_position_mixin.PopupPosition.new = function() {
  }).prototype = src__laminate__popup__popup_position_mixin.PopupPosition.prototype;
  dart.addTypeTests(src__laminate__popup__popup_position_mixin.PopupPosition);
  dart.defineLazy(src__laminate__popup__popup_position_mixin.PopupPosition, {
    /*src__laminate__popup__popup_position_mixin.PopupPosition.AUTO*/get AUTO() {
      return "";
    },
    /*src__laminate__popup__popup_position_mixin.PopupPosition.ABOVE*/get ABOVE() {
      return "above";
    },
    /*src__laminate__popup__popup_position_mixin.PopupPosition.BELOW*/get BELOW() {
      return "below";
    }
  });
  const _popupPosition = Symbol('_popupPosition');
  const _popupPositions = Symbol('_popupPositions');
  let const$27;
  let const$28;
  let const$29;
  src__laminate__popup__popup_position_mixin.PopupPositionMixin = class PopupPositionMixin extends core$.Object {
    get delegatePopupSizeProvider() {
      return this[delegatePopupSizeProvider];
    }
    set delegatePopupSizeProvider(value) {
      this[delegatePopupSizeProvider] = value;
    }
    getMinWidth(positionX, viewportWidth) {
      return this.delegatePopupSizeProvider.getMinWidth(positionX, viewportWidth);
    }
    getMinHeight(positionY, viewportHeight) {
      return this.delegatePopupSizeProvider.getMinHeight(positionY, viewportHeight);
    }
    getMaxWidth(positionX, viewportWidth) {
      return this.delegatePopupSizeProvider.getMaxHeight(positionX, viewportWidth);
    }
    getMaxHeight(positionY, viewportHeight) {
      let maxHeight = this.delegatePopupSizeProvider.getMaxHeight(positionY, viewportHeight);
      if (this[_popupPosition] === src__laminate__popup__popup_position_mixin.PopupPosition.BELOW) {
        return math.max(core$.num, 40, math.min(core$.num, dart.notNull(viewportHeight) - dart.notNull(positionY) - 4, maxHeight));
      } else {
        return maxHeight;
      }
    }
    get popupPositions() {
      return this[_popupPositions];
    }
    set popupPosition(position) {
      this[_popupPosition] = position;
      switch (this[_popupPosition]) {
        case src__laminate__popup__popup_position_mixin.PopupPosition.ABOVE:
        {
          this[_popupPositions] = const$27 || (const$27 = dart.constList([laminate__enums__alignment.RelativePosition.AdjacentTopLeft, laminate__enums__alignment.RelativePosition.AdjacentTopRight], laminate__enums__alignment.RelativePosition));
          break;
        }
        case src__laminate__popup__popup_position_mixin.PopupPosition.BELOW:
        {
          this[_popupPositions] = const$28 || (const$28 = dart.constList([laminate__enums__alignment.RelativePosition.AdjacentBottomLeft, laminate__enums__alignment.RelativePosition.AdjacentBottomRight], laminate__enums__alignment.RelativePosition));
          break;
        }
        case src__laminate__popup__popup_position_mixin.PopupPosition.AUTO:
        default:
        {
          this[_popupPositions] = const$29 || (const$29 = dart.constList([], laminate__enums__alignment.RelativePosition));
        }
      }
    }
  };
  (src__laminate__popup__popup_position_mixin.PopupPositionMixin.new = function() {
    this[delegatePopupSizeProvider] = new src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.new();
    this[_popupPosition] = src__laminate__popup__popup_position_mixin.PopupPosition.AUTO;
    this[_popupPositions] = dart.constList([], laminate__enums__alignment.RelativePosition);
  }).prototype = src__laminate__popup__popup_position_mixin.PopupPositionMixin.prototype;
  dart.addTypeTests(src__laminate__popup__popup_position_mixin.PopupPositionMixin);
  const delegatePopupSizeProvider = Symbol("PopupPositionMixin.delegatePopupSizeProvider");
  src__laminate__popup__popup_position_mixin.PopupPositionMixin[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_position_mixin.PopupPositionMixin.__proto__),
    getMinWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMinHeight: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxHeight: dart.fnType(core$.num, [core$.num, core$.num])
  }));
  dart.setGetterSignature(src__laminate__popup__popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_position_mixin.PopupPositionMixin.__proto__),
    popupPositions: core$.List$(laminate__enums__alignment.RelativePosition)
  }));
  dart.setSetterSignature(src__laminate__popup__popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_position_mixin.PopupPositionMixin.__proto__),
    popupPosition: core$.String
  }));
  dart.setFieldSignature(src__laminate__popup__popup_position_mixin.PopupPositionMixin, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_position_mixin.PopupPositionMixin.__proto__),
    delegatePopupSizeProvider: dart.fieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
    [_popupPosition]: dart.fieldType(core$.String),
    [_popupPositions]: dart.fieldType(ListOfRelativePosition())
  }));
  dart.defineLazy(src__laminate__popup__popup_position_mixin.PopupPositionMixin, {
    /*src__laminate__popup__popup_position_mixin.PopupPositionMixin._EDGE_SPACE_PX*/get _EDGE_SPACE_PX() {
      return 4;
    },
    /*src__laminate__popup__popup_position_mixin.PopupPositionMixin._MIN_HEIGHT_PX*/get _MIN_HEIGHT_PX() {
      return 40;
    }
  });
  src__laminate__popup__popup_ref.PopupRef = class PopupRef extends core$.Object {};
  (src__laminate__popup__popup_ref.PopupRef.new = function() {
  }).prototype = src__laminate__popup__popup_ref.PopupRef.prototype;
  dart.addTypeTests(src__laminate__popup__popup_ref.PopupRef);
  const _parentPopupSizeProvider = Symbol('_parentPopupSizeProvider');
  const _minHeight$ = Symbol('_minHeight');
  const _minWidth$ = Symbol('_minWidth');
  const _maxHeight$ = Symbol('_maxHeight');
  const _maxWidth$ = Symbol('_maxWidth');
  src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective = class PopupSizeProviderDirective extends core$.Object {
    getMinWidth(positionX, viewportWidth) {
      return this[_minWidth$] == null ? this[_parentPopupSizeProvider].getMinWidth(positionX, viewportWidth) : this[_minWidth$].getPixels(viewportWidth);
    }
    getMinHeight(positionY, viewportHeight) {
      return this[_minHeight$] == null ? this[_parentPopupSizeProvider].getMinHeight(positionY, viewportHeight) : this[_minHeight$].getPixels(viewportHeight);
    }
    getMaxWidth(positionX, viewportWidth) {
      return this[_maxWidth$] == null ? this[_parentPopupSizeProvider].getMaxWidth(positionX, viewportWidth) : this[_maxWidth$].getPixels(viewportWidth);
    }
    getMaxHeight(positionY, viewportHeight) {
      return this[_maxHeight$] == null ? this[_parentPopupSizeProvider].getMaxHeight(positionY, viewportHeight) : this[_maxHeight$].getPixels(viewportHeight);
    }
  };
  (src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective.new = function(minHeight, minWidth, maxHeight, maxWidth, parentPopupSizeProvider) {
    this[_minHeight$] = null;
    this[_minWidth$] = null;
    this[_maxHeight$] = null;
    this[_maxWidth$] = null;
    this[_parentPopupSizeProvider] = parentPopupSizeProvider;
    this[_minHeight$] = minHeight == null ? null : src__laminate__popup__popup_size_provider_directive._SizeDefinition.fromString(minHeight);
    this[_minWidth$] = minWidth == null ? null : src__laminate__popup__popup_size_provider_directive._SizeDefinition.fromString(minWidth);
    this[_maxHeight$] = maxHeight == null ? null : src__laminate__popup__popup_size_provider_directive._SizeDefinition.fromString(maxHeight);
    this[_maxWidth$] = maxWidth == null ? null : src__laminate__popup__popup_size_provider_directive._SizeDefinition.fromString(maxWidth);
    if ((this[_minHeight$] == null || this[_minWidth$] == null || this[_maxHeight$] == null || this[_maxWidth$] == null) && this[_parentPopupSizeProvider] == null) {
      this[_parentPopupSizeProvider] = new src__laminate__popup__popup_size_provider.PercentagePopupSizeProvider.new(0.7, 0.5);
    }
  }).prototype = src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective);
  src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective.__proto__),
    getMinWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMinHeight: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxWidth: dart.fnType(core$.num, [core$.num, core$.num]),
    getMaxHeight: dart.fnType(core$.num, [core$.num, core$.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider_directive.PopupSizeProviderDirective.__proto__),
    [_minHeight$]: dart.fieldType(src__laminate__popup__popup_size_provider_directive._SizeDefinition),
    [_minWidth$]: dart.fieldType(src__laminate__popup__popup_size_provider_directive._SizeDefinition),
    [_maxHeight$]: dart.fieldType(src__laminate__popup__popup_size_provider_directive._SizeDefinition),
    [_maxWidth$]: dart.fieldType(src__laminate__popup__popup_size_provider_directive._SizeDefinition),
    [_parentPopupSizeProvider]: dart.fieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider)
  }));
  src__laminate__popup__popup_size_provider_directive._SizeDefinition = class _SizeDefinition extends core$.Object {
    static fromString(attribute) {
      let match = src__laminate__popup__popup_size_provider_directive._SizeDefinition._parseAttribute.firstMatch(attribute);
      if (match == null) dart.throw(new core$.StateError.new("Invalid size string: " + dart.str(attribute)));
      let size = core$.num.parse(match.group(1));
      let unit = match.group(2)[$toLowerCase]();
      switch (unit) {
        case "px":
        {
          return new src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.new(size);
        }
        case "%":
        {
          return new src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.new(size);
        }
        default:
        {
          dart.throw(new core$.StateError.new("Invalid unit for size string: " + dart.str(attribute)));
        }
      }
    }
  };
  (src__laminate__popup__popup_size_provider_directive._SizeDefinition[dart.mixinNew] = function() {
  }).prototype = src__laminate__popup__popup_size_provider_directive._SizeDefinition.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive._SizeDefinition);
  dart.defineLazy(src__laminate__popup__popup_size_provider_directive._SizeDefinition, {
    /*src__laminate__popup__popup_size_provider_directive._SizeDefinition._parseAttribute*/get _parseAttribute() {
      return core$.RegExp.new("([\\d.]+)\\s*([^\\d\\s]+)");
    }
  });
  const _size = Symbol('_size');
  src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition = class _PixelSizeDefinition extends core$.Object {
    getPixels(viewportSize) {
      return this[_size];
    }
  };
  (src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.new = function(size) {
    this[_size] = size;
  }).prototype = src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition);
  src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition[dart.implements] = () => [src__laminate__popup__popup_size_provider_directive._SizeDefinition];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.__proto__),
    getPixels: dart.fnType(core$.num, [core$.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider_directive._PixelSizeDefinition.__proto__),
    [_size]: dart.finalFieldType(core$.num)
  }));
  const _percent = Symbol('_percent');
  src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition = class _PercentSizeDefinition extends core$.Object {
    getPixels(viewportSize) {
      return dart.notNull(viewportSize) * dart.notNull(this[_percent]) / 100;
    }
  };
  (src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.new = function(percent) {
    this[_percent] = percent;
  }).prototype = src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition);
  src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition[dart.implements] = () => [src__laminate__popup__popup_size_provider_directive._SizeDefinition];
  dart.setMethodSignature(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.__proto__),
    getPixels: dart.fnType(core$.num, [core$.num])
  }));
  dart.setFieldSignature(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_size_provider_directive._PercentSizeDefinition.__proto__),
    [_percent]: dart.finalFieldType(core$.num)
  }));
  src__laminate__popup__popup_size_provider_directive.PopupWithinViewportDirective = class PopupWithinViewportDirective extends core$.Object {};
  (src__laminate__popup__popup_size_provider_directive.PopupWithinViewportDirective.new = function() {
  }).prototype = src__laminate__popup__popup_size_provider_directive.PopupWithinViewportDirective.prototype;
  dart.addTypeTests(src__laminate__popup__popup_size_provider_directive.PopupWithinViewportDirective);
  const _domPopupSourceFactory = Symbol('_domPopupSourceFactory');
  const _element = Symbol('_element');
  const _referenceDirective = Symbol('_referenceDirective');
  const _focusable = Symbol('_focusable');
  const _initAriaAttributes = Symbol('_initAriaAttributes');
  const _alignOriginX = Symbol('_alignOriginX');
  const _alignOriginY = Symbol('_alignOriginY');
  const _popupSource = Symbol('_popupSource');
  const _popupId = Symbol('_popupId');
  const _updateSource = Symbol('_updateSource');
  src__laminate__popup__popup_source_directive.PopupSourceDirective = class PopupSourceDirective extends core$.Object {
    ngOnDestroy() {
      this[_element] = null;
      this[_popupSource] = null;
      this[_referenceDirective] = null;
      this[_focusable] = null;
    }
    ngAfterViewInit() {
      this[_element] = html.HtmlElement._check((() => {
        let t = this[_referenceDirective];
        let t$ = t == null ? null : t.elementRef;
        let l = t$ == null ? null : t$.nativeElement;
        return l != null ? l : this[_element];
      })());
      this[_updateSource]();
    }
    get sourceElement() {
      return this[_element];
    }
    get alignOriginX() {
      return this[_popupSource].alignOriginX;
    }
    set alignX(align) {
      this[_alignOriginX] = laminate__enums__alignment.Alignment.parse(align);
      this[_updateSource]();
    }
    get alignOriginY() {
      return this[_popupSource].alignOriginY;
    }
    set alignY(align) {
      this[_alignOriginY] = laminate__enums__alignment.Alignment.parse(align);
      this[_updateSource]();
    }
    onDimensionsChanged(opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      let t = this[_popupSource];
      let t$ = t == null ? null : t.onDimensionsChanged({track: track});
      return t$ == null ? null : t$.distinct();
    }
    get dimensions() {
      let t = this[_popupSource];
      return t == null ? null : t.dimensions;
    }
    get isRtl() {
      return this[_popupSource].isRtl;
    }
    set popupId(id) {
      this[_popupId] = id;
      let l = this[_popupSource];
      l == null ? null : l.popupId = id;
    }
    [_updateSource]() {
      this[_popupSource] = this[_domPopupSourceFactory].createPopupSource(this[_element], {alignOriginX: this[_alignOriginX], alignOriginY: this[_alignOriginY], initAriaAttributes: this[_initAriaAttributes]});
      if (this[_popupId] != null) {
        this[_popupSource].popupId = this[_popupId];
      }
    }
    focus() {
      if (this[_focusable] != null) {
        this[_focusable].focus();
      } else {
        let t = this[_element];
        t == null ? null : t.focus();
      }
    }
    onOpen() {
      let t = this[_popupSource];
      t == null ? null : t.onOpen();
    }
    onClose() {
      let t = this[_popupSource];
      t == null ? null : t.onClose();
    }
  };
  (src__laminate__popup__popup_source_directive.PopupSourceDirective.new = function(domPopupSourceFactory, element, referenceDirective, focusable, initAriaAttributes) {
    this[_alignOriginX] = laminate__enums__alignment.Alignment.Start;
    this[_alignOriginY] = laminate__enums__alignment.Alignment.Start;
    this[_popupSource] = null;
    this[_popupId] = null;
    this[_domPopupSourceFactory] = domPopupSourceFactory;
    this[_element] = element;
    this[_referenceDirective] = referenceDirective;
    this[_focusable] = focusable;
    this[_initAriaAttributes] = utils__angular__properties__properties.attributeToBool(initAriaAttributes, {defaultValue: true});
  }).prototype = src__laminate__popup__popup_source_directive.PopupSourceDirective.prototype;
  dart.addTypeTests(src__laminate__popup__popup_source_directive.PopupSourceDirective);
  src__laminate__popup__popup_source_directive.PopupSourceDirective[dart.implements] = () => [src__laminate__popup__popup_source.ElementPopupSource, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__laminate__popup__popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getMethods(src__laminate__popup__popup_source_directive.PopupSourceDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    onDimensionsChanged: dart.fnType(async.Stream$(math.Rectangle$(core$.num)), [], {track: core$.bool}),
    [_updateSource]: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    onOpen: dart.fnType(dart.void, []),
    onClose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__laminate__popup__popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getGetters(src__laminate__popup__popup_source_directive.PopupSourceDirective.__proto__),
    sourceElement: html.HtmlElement,
    alignOriginX: laminate__enums__alignment.Alignment,
    alignOriginY: laminate__enums__alignment.Alignment,
    dimensions: math.Rectangle$(core$.num),
    isRtl: core$.bool
  }));
  dart.setSetterSignature(src__laminate__popup__popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getSetters(src__laminate__popup__popup_source_directive.PopupSourceDirective.__proto__),
    alignX: core$.String,
    alignY: core$.String,
    popupId: core$.String
  }));
  dart.setFieldSignature(src__laminate__popup__popup_source_directive.PopupSourceDirective, () => ({
    __proto__: dart.getFields(src__laminate__popup__popup_source_directive.PopupSourceDirective.__proto__),
    [_domPopupSourceFactory]: dart.finalFieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [_initAriaAttributes]: dart.finalFieldType(core$.bool),
    [_element]: dart.fieldType(html.HtmlElement),
    [_referenceDirective]: dart.fieldType(utils__angular__reference__reference.ReferenceDirective),
    [_focusable]: dart.fieldType(focus__focus_interface.Focusable),
    [_alignOriginX]: dart.fieldType(laminate__enums__alignment.Alignment),
    [_alignOriginY]: dart.fieldType(laminate__enums__alignment.Alignment),
    [_popupSource]: dart.fieldType(src__laminate__popup__popup_source.PopupSource),
    [_popupId]: dart.fieldType(core$.String)
  }));
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_hierarchy.ddc", {
    "package:angular_components/src/laminate/popup/popup_hierarchy.dart": src__laminate__popup__popup_hierarchy,
    "package:angular_components/src/laminate/popup/popup_state.dart": src__laminate__popup__popup_state,
    "package:angular_components/src/laminate/popup/popup_interface.dart": src__laminate__popup__popup_interface,
    "package:angular_components/src/laminate/popup/popup_size_provider.dart": src__laminate__popup__popup_size_provider,
    "package:angular_components/src/laminate/popup/popup_position_mixin.dart": src__laminate__popup__popup_position_mixin,
    "package:angular_components/src/laminate/popup/popup_ref.dart": src__laminate__popup__popup_ref,
    "package:angular_components/src/laminate/popup/popup_size_provider_directive.dart": src__laminate__popup__popup_size_provider_directive,
    "package:angular_components/src/laminate/popup/popup_source_directive.dart": src__laminate__popup__popup_source_directive
  }, '{"version":3,"sourceRoot":"","sources":["popup_hierarchy.dart","popup_state.dart","popup_interface.dart","popup_size_provider.dart","popup_position_mixin.dart","popup_ref.dart","popup_size_provider_directive.dart","popup_source_directive.dart"],"names":[],"mappings":"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","file":"popup_hierarchy.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_hierarchy: src__laminate__popup__popup_hierarchy,
    src__laminate__popup__popup_state: src__laminate__popup__popup_state,
    src__laminate__popup__popup_interface: src__laminate__popup__popup_interface,
    src__laminate__popup__popup_size_provider: src__laminate__popup__popup_size_provider,
    src__laminate__popup__popup_position_mixin: src__laminate__popup__popup_position_mixin,
    src__laminate__popup__popup_ref: src__laminate__popup__popup_ref,
    src__laminate__popup__popup_size_provider_directive: src__laminate__popup__popup_size_provider_directive,
    src__laminate__popup__popup_source_directive: src__laminate__popup__popup_source_directive
  };
});

//# sourceMappingURL=popup_hierarchy.ddc.js.map
