define(['dart_sdk', 'packages/quiver/core', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/laminate/enums/position', 'packages/angular_components/src/utils/async/async_update_scheduler', 'packages/angular_components/laminate/portal/portal', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular/src/core/zone/ng_zone', 'packages/logging/logging'], function(dart_sdk, core, visibility, position, async_update_scheduler, portal, change_detection, dom_ruler, dom_service, imperative_view, zindexer, ng_zone, logging) {
  'use strict';
  const core$ = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$0 = core.core;
  const laminate__enums__visibility = visibility.laminate__enums__visibility;
  const laminate__enums__position = position.laminate__enums__position;
  const src__utils__async__async_update_scheduler = async_update_scheduler.src__utils__async__async_update_scheduler;
  const laminate__portal__portal = portal.laminate__portal__portal;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const logging$ = logging.logging;
  const _root = Object.create(null);
  const src__laminate__overlay__overlay_state = Object.create(_root);
  const src__laminate__overlay__overlay_ref = Object.create(_root);
  const src__laminate__overlay__render__overlay_style_config = Object.create(_root);
  const src__laminate__overlay__render__overlay_dom_render_service = Object.create(_root);
  const src__laminate__overlay__overlay_service = Object.create(_root);
  const $toString = dartx.toString;
  const $onMouseDown = dartx.onMouseDown;
  const $_get = dartx._get;
  const $attributes = dartx.attributes;
  const $remove = dartx.remove;
  const $width = dartx.width;
  const $height = dartx.height;
  const $text = dartx.text;
  const $append = dartx.append;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $minWidth = dartx.minWidth;
  const $zIndex = dartx.zIndex;
  const $parent = dartx.parent;
  const $classes = dartx.classes;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core$.String, core$.Object)))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core$.num)))();
  let RectangleOfnumAndRectangleOfnumTobool = () => (RectangleOfnumAndRectangleOfnumTobool = dart.constFn(dart.fnType(core$.bool, [RectangleOfnum(), RectangleOfnum()])))();
  let StreamOfRectangleOfnum = () => (StreamOfRectangleOfnum = dart.constFn(async.Stream$(RectangleOfnum())))();
  let VoidToStreamOfRectangleOfnum = () => (VoidToStreamOfRectangleOfnum = dart.constFn(dart.fnType(StreamOfRectangleOfnum(), [])))();
  let _AsyncStarImplOfRectangleOfnum = () => (_AsyncStarImplOfRectangleOfnum = dart.constFn(async._AsyncStarImpl$(RectangleOfnum())))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core$.bool)))();
  let OverlayStateAndHtmlElementToFuture = () => (OverlayStateAndHtmlElementToFuture = dart.constFn(dart.fnType(async.Future, [src__laminate__overlay__overlay_state.OverlayState, html.HtmlElement])))();
  let HtmlElement__ToStreamOfRectangleOfnum = () => (HtmlElement__ToStreamOfRectangleOfnum = dart.constFn(dart.fnType(StreamOfRectangleOfnum(), [html.HtmlElement], {track: core$.bool})))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core$.Null, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core$.String)))();
  let JSArrayOfRectangleOfnum = () => (JSArrayOfRectangleOfnum = dart.constFn(_interceptors.JSArray$(RectangleOfnum())))();
  let dynamicToRectangleOfnum = () => (dynamicToRectangleOfnum = dart.constFn(dart.fnType(RectangleOfnum(), [dart.dynamic])))();
  let FutureOfRectangleOfnum = () => (FutureOfRectangleOfnum = dart.constFn(async.Future$(RectangleOfnum())))();
  let dynamicToHtmlElement = () => (dynamicToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [dart.dynamic])))();
  let FutureOfHtmlElement = () => (FutureOfHtmlElement = dart.constFn(async.Future$(html.HtmlElement)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core$.bool, [])))();
  src__laminate__overlay__overlay_state._stateEquals = function(a, b) {
    if (a == b) return true;
    return a.captureEvents == b.captureEvents && a.left == b.left && a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.width == b.width && a.minWidth == b.minWidth && a.height == b.height && a.zIndex == b.zIndex && dart.equals(a.position, b.position);
  };
  src__laminate__overlay__overlay_state._stateHashCode = function(a) {
    return core$0.hashObjects([a.captureEvents, a.left, a.top, a.right, a.bottom, a.width, a.minWidth, a.height, a.zIndex, a.position]);
  };
  src__laminate__overlay__overlay_state.OverlayState = class OverlayState extends core$.Object {
    static new(opts) {
      return new src__laminate__overlay__overlay_state._ImmutableOverlayState.new(opts);
    }
  };
  (src__laminate__overlay__overlay_state.OverlayState[dart.mixinNew] = function() {
  }).prototype = src__laminate__overlay__overlay_state.OverlayState.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_state.OverlayState);
  dart.defineLazy(src__laminate__overlay__overlay_state.OverlayState, {
    /*src__laminate__overlay__overlay_state.OverlayState.Dialog*/get Dialog() {
      return dart.const(src__laminate__overlay__overlay_state.OverlayState.new({captureEvents: true, top: 0, bottom: 0, left: 0, right: 0}));
    }
  });
  let const$;
  src__laminate__overlay__overlay_state._ImmutableOverlayState = class _ImmutableOverlayState extends core$.Object {
    _equals(o) {
      if (o == null) return false;
      return src__laminate__overlay__overlay_state.OverlayState.is(o) && dart.test(src__laminate__overlay__overlay_state._stateEquals(this, o));
    }
    get hashCode() {
      return src__laminate__overlay__overlay_state._stateHashCode(this);
    }
    get onUpdate() {
      return const$ || (const$ = dart.const(async.Stream.empty()));
    }
    toString() {
      return "ImmutableOverlayState " + dart.notNull(new (IdentityMapOfString$Object()).from(["captureEvents", this.captureEvents, "left", this.left, "top", this.top, "right", this.right, "bottom", this.bottom, "width", this.width, "height", this.height, "visibility", this.visibility, "zIndex", this.zIndex, "position", this.position])[$toString]());
    }
  };
  (src__laminate__overlay__overlay_state._ImmutableOverlayState.new = function(opts) {
    let captureEvents = opts && 'captureEvents' in opts ? opts.captureEvents : false;
    let left = opts && 'left' in opts ? opts.left : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : laminate__enums__visibility.Visibility.None;
    let position = opts && 'position' in opts ? opts.position : null;
    this.captureEvents = captureEvents;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.width = width;
    this.minWidth = minWidth;
    this.height = height;
    this.zIndex = zIndex;
    this.visibility = visibility;
    this.position = position;
  }).prototype = src__laminate__overlay__overlay_state._ImmutableOverlayState.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_state._ImmutableOverlayState);
  src__laminate__overlay__overlay_state._ImmutableOverlayState[dart.implements] = () => [src__laminate__overlay__overlay_state.OverlayState];
  dart.setGetterSignature(src__laminate__overlay__overlay_state._ImmutableOverlayState, () => ({
    __proto__: dart.getGetters(src__laminate__overlay__overlay_state._ImmutableOverlayState.__proto__),
    onUpdate: async.Stream
  }));
  dart.setFieldSignature(src__laminate__overlay__overlay_state._ImmutableOverlayState, () => ({
    __proto__: dart.getFields(src__laminate__overlay__overlay_state._ImmutableOverlayState.__proto__),
    captureEvents: dart.finalFieldType(core$.bool),
    left: dart.finalFieldType(core$.num),
    top: dart.finalFieldType(core$.num),
    right: dart.finalFieldType(core$.num),
    bottom: dart.finalFieldType(core$.num),
    width: dart.finalFieldType(core$.num),
    minWidth: dart.finalFieldType(core$.num),
    height: dart.finalFieldType(core$.num),
    visibility: dart.finalFieldType(laminate__enums__visibility.Visibility),
    zIndex: dart.finalFieldType(core$.int),
    position: dart.finalFieldType(laminate__enums__position.Position)
  }));
  dart.defineExtensionMethods(src__laminate__overlay__overlay_state._ImmutableOverlayState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__laminate__overlay__overlay_state._ImmutableOverlayState, ['hashCode']);
  const _asyncScheduler = Symbol('_asyncScheduler');
  const _captureEvents = Symbol('_captureEvents');
  const _left = Symbol('_left');
  const _top = Symbol('_top');
  const _right = Symbol('_right');
  const _bottom = Symbol('_bottom');
  const _width = Symbol('_width');
  const _minWidth = Symbol('_minWidth');
  const _height = Symbol('_height');
  const _zIndex = Symbol('_zIndex');
  const _visibility = Symbol('_visibility');
  const _position = Symbol('_position');
  src__laminate__overlay__overlay_state.MutableOverlayState = class MutableOverlayState extends core$.Object {
    static from(other) {
      if (other == null) return new src__laminate__overlay__overlay_state.MutableOverlayState.new();
      if (src__laminate__overlay__overlay_state.MutableOverlayState.is(other)) return other;
      return new src__laminate__overlay__overlay_state.MutableOverlayState.new({captureEvents: other.captureEvents, left: other.left, top: other.top, right: other.right, bottom: other.bottom, width: other.width, minWidth: other.minWidth, height: other.height, zIndex: other.zIndex, visibility: other.visibility, position: other.position});
    }
    _equals(o) {
      if (o == null) return false;
      return src__laminate__overlay__overlay_state.OverlayState.is(o) && dart.test(src__laminate__overlay__overlay_state._stateEquals(this, o));
    }
    get hashCode() {
      return src__laminate__overlay__overlay_state._stateHashCode(this);
    }
    get onUpdate() {
      return this[_asyncScheduler].onUpdate;
    }
    get captureEvents() {
      return this[_captureEvents];
    }
    set captureEvents(captureEvents) {
      if (this[_captureEvents] != captureEvents) {
        this[_captureEvents] = captureEvents;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get left() {
      return this[_left];
    }
    set left(left) {
      if (this[_left] != left) {
        this[_left] = left;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get top() {
      return this[_top];
    }
    set top(top) {
      if (this[_top] != top) {
        this[_top] = top;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get right() {
      return this[_right];
    }
    set right(right) {
      if (this[_right] != right) {
        this[_right] = right;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get bottom() {
      return this[_bottom];
    }
    set bottom(bottom) {
      if (this[_bottom] != bottom) {
        this[_bottom] = bottom;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get width() {
      return this[_width];
    }
    set width(width) {
      if (this[_width] != width) {
        this[_width] = width;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get minWidth() {
      return this[_minWidth];
    }
    set minWidth(minWidth) {
      if (this[_minWidth] != minWidth) {
        this[_minWidth] = minWidth;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get height() {
      return this[_height];
    }
    set height(height) {
      if (this[_height] != height) {
        this[_height] = height;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get zIndex() {
      return this[_zIndex];
    }
    set zIndex(zIndex) {
      if (this[_zIndex] != zIndex) {
        this[_zIndex] = zIndex;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get visibility() {
      return this[_visibility];
    }
    set visibility(visibility) {
      if (!dart.equals(this[_visibility], visibility)) {
        this[_visibility] = visibility;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    get position() {
      return this[_position];
    }
    set position(position) {
      if (!dart.equals(this[_position], position)) {
        this[_position] = position;
        this[_asyncScheduler].scheduleUpdate();
      }
    }
    toString() {
      return "MutableOverlayState " + dart.notNull(new (IdentityMapOfString$Object()).from(["captureEvents", this.captureEvents, "left", this.left, "top", this.top, "right", this.right, "bottom", this.bottom, "width", this.width, "minWidth", this.minWidth, "height", this.height, "zIndex", this.zIndex, "visibility", this.visibility, "position", this.position])[$toString]());
    }
  };
  (src__laminate__overlay__overlay_state.MutableOverlayState.new = function(opts) {
    let captureEvents = opts && 'captureEvents' in opts ? opts.captureEvents : false;
    let left = opts && 'left' in opts ? opts.left : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : laminate__enums__visibility.Visibility.None;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_asyncScheduler] = new src__utils__async__async_update_scheduler.AsyncUpdateScheduler.new();
    this[_captureEvents] = null;
    this[_left] = null;
    this[_top] = null;
    this[_right] = null;
    this[_bottom] = null;
    this[_width] = null;
    this[_minWidth] = null;
    this[_height] = null;
    this[_zIndex] = null;
    this[_visibility] = null;
    this[_position] = null;
    this[_captureEvents] = captureEvents;
    this[_left] = left;
    this[_top] = top;
    this[_right] = right;
    this[_bottom] = bottom;
    this[_width] = width;
    this[_minWidth] = minWidth;
    this[_height] = height;
    this[_zIndex] = zIndex;
    this[_visibility] = visibility;
  }).prototype = src__laminate__overlay__overlay_state.MutableOverlayState.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_state.MutableOverlayState);
  src__laminate__overlay__overlay_state.MutableOverlayState[dart.implements] = () => [src__laminate__overlay__overlay_state.OverlayState];
  dart.setGetterSignature(src__laminate__overlay__overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getGetters(src__laminate__overlay__overlay_state.MutableOverlayState.__proto__),
    onUpdate: async.Stream,
    captureEvents: core$.bool,
    left: core$.num,
    top: core$.num,
    right: core$.num,
    bottom: core$.num,
    width: core$.num,
    minWidth: core$.num,
    height: core$.num,
    zIndex: core$.int,
    visibility: laminate__enums__visibility.Visibility,
    position: laminate__enums__position.Position
  }));
  dart.setSetterSignature(src__laminate__overlay__overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getSetters(src__laminate__overlay__overlay_state.MutableOverlayState.__proto__),
    captureEvents: core$.bool,
    left: core$.num,
    top: core$.num,
    right: core$.num,
    bottom: core$.num,
    width: core$.num,
    minWidth: core$.num,
    height: core$.num,
    zIndex: core$.int,
    visibility: laminate__enums__visibility.Visibility,
    position: laminate__enums__position.Position
  }));
  dart.setFieldSignature(src__laminate__overlay__overlay_state.MutableOverlayState, () => ({
    __proto__: dart.getFields(src__laminate__overlay__overlay_state.MutableOverlayState.__proto__),
    [_asyncScheduler]: dart.finalFieldType(src__utils__async__async_update_scheduler.AsyncUpdateScheduler),
    [_captureEvents]: dart.fieldType(core$.bool),
    [_left]: dart.fieldType(core$.num),
    [_top]: dart.fieldType(core$.num),
    [_right]: dart.fieldType(core$.num),
    [_bottom]: dart.fieldType(core$.num),
    [_width]: dart.fieldType(core$.num),
    [_minWidth]: dart.fieldType(core$.num),
    [_height]: dart.fieldType(core$.num),
    [_zIndex]: dart.fieldType(core$.int),
    [_visibility]: dart.fieldType(laminate__enums__visibility.Visibility),
    [_position]: dart.fieldType(laminate__enums__position.Position)
  }));
  dart.defineExtensionMethods(src__laminate__overlay__overlay_state.MutableOverlayState, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__laminate__overlay__overlay_state.MutableOverlayState, ['hashCode']);
  const _asyncApplyState = Symbol('_asyncApplyState');
  const _asyncMeasureSize = Symbol('_asyncMeasureSize');
  const _delegatePortalHost = Symbol('_delegatePortalHost');
  const _runOutsideAngular = Symbol('_runOutsideAngular');
  const _lastVisible = Symbol('_lastVisible');
  const _onVisibleController = Symbol('_onVisibleController');
  const _stateUpdateListener = Symbol('_stateUpdateListener');
  const _applyChanges = Symbol('_applyChanges');
  src__laminate__overlay__overlay_ref.OverlayRef = class OverlayRef extends core$.Object {
    get isVisible() {
      return !dart.equals(this.state.visibility, laminate__enums__visibility.Visibility.None);
    }
    get onPanePressed() {
      return this.overlayElement[$onMouseDown];
    }
    measureSizeChanges() {
      return new (_AsyncStarImplOfRectangleOfnum()).new((function* measureSizeChanges(stream) {
        if (dart.equals(this.state.visibility, laminate__enums__visibility.Visibility.None)) {
          this.state.visibility = laminate__enums__visibility.Visibility.Hidden;
        }
        yield this[_applyChanges]();
        if (stream.addStream(StreamOfRectangleOfnum().as(dart.dcall(this[_runOutsideAngular], [dart.fn(() => this[_asyncMeasureSize](this.overlayElement, {track: true}).distinct(dart.fn(src__laminate__overlay__overlay_ref.OverlayRef._isEqualSize, RectangleOfnumAndRectangleOfnumTobool())), VoidToStreamOfRectangleOfnum())])))) return;
        yield;
      }).bind(this)).stream;
    }
    get onVisibleChanged() {
      let t = this[_onVisibleController];
      t == null ? this[_onVisibleController] = StreamControllerOfbool().broadcast({sync: true}) : t;
      return this[_onVisibleController].stream;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
    get containerElement() {
      return this[containerElement$];
    }
    set containerElement(value) {
      super.containerElement = value;
    }
    get overlayElement() {
      return this[overlayElement$];
    }
    set overlayElement(value) {
      super.overlayElement = value;
    }
    setPreventInteraction(preventInteraction) {
      if (preventInteraction === void 0) preventInteraction = null;
      this.state.captureEvents = preventInteraction != null ? preventInteraction : true;
    }
    setVisible(visible) {
      if (visible === void 0) visible = null;
      this.state.visibility = laminate__enums__visibility.Visibility.fromBoolean(visible != null ? visible : true);
    }
    get uniqueId() {
      return this.overlayElement[$attributes][$_get]("pane-id");
    }
    attach(portal) {
      return this[_delegatePortalHost].attach(portal);
    }
    detach() {
      return this[_delegatePortalHost].detach();
    }
    get hasAttached() {
      return this[_delegatePortalHost].hasAttached;
    }
    dispose() {
      this.overlayElement[$remove]();
      if (this[_onVisibleController] != null) {
        this[_onVisibleController].close();
      }
      if (this[_delegatePortalHost].hasAttached === true) {
        this[_delegatePortalHost].dispose();
      }
      this[_stateUpdateListener].cancel();
    }
    static _isEqualSize(a, b) {
      return a[$width] == b[$width] && a[$height] == b[$height];
    }
    [_applyChanges]() {
      if (this[_lastVisible] != this.isVisible) {
        this[_lastVisible] = this.isVisible;
        if (this[_onVisibleController] != null) {
          this[_onVisibleController].add(this.isVisible);
        }
      }
      return this[_asyncApplyState](this.state, this.overlayElement);
    }
  };
  (src__laminate__overlay__overlay_ref.OverlayRef.new = function(asyncApplyState, asyncMeasureSize, delegatePortalHost, containerElement, overlayElement, runOutsideAngular, opts) {
    let state = opts && 'state' in opts ? opts.state : null;
    this[_lastVisible] = false;
    this[_onVisibleController] = null;
    this[_stateUpdateListener] = null;
    this[_asyncApplyState] = asyncApplyState;
    this[_asyncMeasureSize] = asyncMeasureSize;
    this[_delegatePortalHost] = delegatePortalHost;
    this[containerElement$] = containerElement;
    this[overlayElement$] = overlayElement;
    this[_runOutsideAngular] = runOutsideAngular;
    this[state$] = src__laminate__overlay__overlay_state.MutableOverlayState.from(state);
    this[_stateUpdateListener] = this.state.onUpdate.listen(dart.fn(_ => this[_applyChanges](), dynamicToFuture()));
  }).prototype = src__laminate__overlay__overlay_ref.OverlayRef.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_ref.OverlayRef);
  const state$ = Symbol("OverlayRef.state");
  const containerElement$ = Symbol("OverlayRef.containerElement");
  const overlayElement$ = Symbol("OverlayRef.overlayElement");
  src__laminate__overlay__overlay_ref.OverlayRef[dart.implements] = () => [laminate__portal__portal.PortalHost];
  dart.setMethodSignature(src__laminate__overlay__overlay_ref.OverlayRef, () => ({
    __proto__: dart.getMethods(src__laminate__overlay__overlay_ref.OverlayRef.__proto__),
    measureSizeChanges: dart.fnType(async.Stream$(math.Rectangle$(core$.num)), []),
    setPreventInteraction: dart.fnType(dart.void, [], [core$.bool]),
    setVisible: dart.fnType(dart.void, [], [core$.bool]),
    attach: dart.fnType(async.Future, [laminate__portal__portal.Portal]),
    detach: dart.fnType(async.Future, []),
    dispose: dart.fnType(dart.void, []),
    [_applyChanges]: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(src__laminate__overlay__overlay_ref.OverlayRef, () => ({
    __proto__: dart.getGetters(src__laminate__overlay__overlay_ref.OverlayRef.__proto__),
    isVisible: core$.bool,
    onPanePressed: async.Stream$(html.MouseEvent),
    onVisibleChanged: async.Stream$(core$.bool),
    uniqueId: core$.String,
    hasAttached: core$.bool
  }));
  dart.setFieldSignature(src__laminate__overlay__overlay_ref.OverlayRef, () => ({
    __proto__: dart.getFields(src__laminate__overlay__overlay_ref.OverlayRef.__proto__),
    state: dart.finalFieldType(src__laminate__overlay__overlay_state.MutableOverlayState),
    containerElement: dart.finalFieldType(html.HtmlElement),
    overlayElement: dart.finalFieldType(html.HtmlElement),
    [_asyncApplyState]: dart.finalFieldType(OverlayStateAndHtmlElementToFuture()),
    [_asyncMeasureSize]: dart.finalFieldType(HtmlElement__ToStreamOfRectangleOfnum()),
    [_delegatePortalHost]: dart.finalFieldType(laminate__portal__portal.PortalHost),
    [_runOutsideAngular]: dart.finalFieldType(core$.Function),
    [_lastVisible]: dart.fieldType(core$.bool),
    [_onVisibleController]: dart.fieldType(StreamControllerOfbool()),
    [_stateUpdateListener]: dart.fieldType(async.StreamSubscription)
  }));
  const _styleHost = Symbol('_styleHost');
  const _document = Symbol('_document');
  const _stylesRegistered = Symbol('_stylesRegistered');
  src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig = class OverlayStyleConfig extends core$.Object {
    registerStyles() {
      if (dart.test(this.stylesRegistered)) return;
      this[_styleHost][$append]((() => {
        let _ = html.StyleElement.new();
        _.id = "__overlay_styles";
        _[$text] = "  #default-acx-overlay-container,\n  .acx-overlay-container {\n    position: absolute;\n\n    /* Disable event captures. This is an invisible container! */\n    pointer-events: none;\n\n    /* Make this full width and height in the viewport. */\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 10;\n  }\n\n  .acx-overlay-container > .pane {\n    display: flex;\n    /* TODO(google): verify prefixing flexbox fixes popups in IE */\n    display: -ms-flexbox;\n    position: absolute;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 11;\n\n    /* Disable event captures. This is an invisible container!\n       Panes that would like to capture events can enable this with .modal. */\n    pointer-events: none;\n  }\n\n  /* Children should have normal events. */\n  .acx-overlay-container > .pane > * { pointer-events: auto; }\n\n  .acx-overlay-container > .pane.modal {\n    justify-content: center;\n    align-items: center;\n    background: rgba(33,33,33,.4);\n    pointer-events: auto;\n\n    /* TODO(google): Pull out into a .fixed class instead. */\n    position: fixed;\n\n    /* Promote the .modal element to its own layer to fix scrolling issues.\n       will-change: transform is preferred, but not yet supported by Edge. */\n    -webkit-backface-visibility: hidden;  /* Safari 9/10 */\n    backface-visibility: hidden;\n  }\n\n  .acx-overlay-container > .pane,\n  .acx-overlay-container > .pane > * {\n    display: flex;\n    display: -ms-flexbox;\n  }\n\n  /* Optional debug mode that highlights the container and individual panes.\n     TODO(google): Pull this into a mixin so it won't get auto-exported. */\n  .acx-overlay-container.debug {\n    background: rgba(255, 0, 0, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane {\n    background: rgba(0, 0, 2555, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane.modal {\n    background: rgba(0, 0, 0, 0.30);\n  }\n";
        return _;
      })());
      this[_stylesRegistered] = true;
    }
    get stylesRegistered() {
      if (dart.test(this[_stylesRegistered])) return true;
      let styleNode = this[_document].querySelector("#" + "__overlay_styles");
      if (styleNode != null) this[_stylesRegistered] = true;
      return this[_stylesRegistered];
    }
  };
  (src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new = function(document) {
    this[_stylesRegistered] = false;
    this[_styleHost] = html.HeadElement._check(document.querySelector("head"));
    this[_document] = document;
  }).prototype = src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.prototype;
  dart.addTypeTests(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig);
  dart.setMethodSignature(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getMethods(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.__proto__),
    registerStyles: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getGetters(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.__proto__),
    stylesRegistered: core$.bool
  }));
  dart.setFieldSignature(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, () => ({
    __proto__: dart.getFields(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.__proto__),
    [_styleHost]: dart.finalFieldType(html.HeadElement),
    [_stylesRegistered]: dart.fieldType(core$.bool),
    [_document]: dart.fieldType(html.Document)
  }));
  dart.defineLazy(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, {
    /*src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig._styleId*/get _styleId() {
      return "__overlay_styles";
    },
    /*src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.inlinedStyles*/get inlinedStyles() {
      return "  #default-acx-overlay-container,\n  .acx-overlay-container {\n    position: absolute;\n\n    /* Disable event captures. This is an invisible container! */\n    pointer-events: none;\n\n    /* Make this full width and height in the viewport. */\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 10;\n  }\n\n  .acx-overlay-container > .pane {\n    display: flex;\n    /* TODO(google): verify prefixing flexbox fixes popups in IE */\n    display: -ms-flexbox;\n    position: absolute;\n\n    /* TODO(google): Use the ACX z-index guide instead. */\n    z-index: 11;\n\n    /* Disable event captures. This is an invisible container!\n       Panes that would like to capture events can enable this with .modal. */\n    pointer-events: none;\n  }\n\n  /* Children should have normal events. */\n  .acx-overlay-container > .pane > * { pointer-events: auto; }\n\n  .acx-overlay-container > .pane.modal {\n    justify-content: center;\n    align-items: center;\n    background: rgba(33,33,33,.4);\n    pointer-events: auto;\n\n    /* TODO(google): Pull out into a .fixed class instead. */\n    position: fixed;\n\n    /* Promote the .modal element to its own layer to fix scrolling issues.\n       will-change: transform is preferred, but not yet supported by Edge. */\n    -webkit-backface-visibility: hidden;  /* Safari 9/10 */\n    backface-visibility: hidden;\n  }\n\n  .acx-overlay-container > .pane,\n  .acx-overlay-container > .pane > * {\n    display: flex;\n    display: -ms-flexbox;\n  }\n\n  /* Optional debug mode that highlights the container and individual panes.\n     TODO(google): Pull this into a mixin so it won't get auto-exported. */\n  .acx-overlay-container.debug {\n    background: rgba(255, 0, 0, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane {\n    background: rgba(0, 0, 2555, 0.15);\n  }\n\n  .acx-overlay-container.debug > .pane.modal {\n    background: rgba(0, 0, 0, 0.30);\n  }\n";
    }
  });
  dart.defineLazy(src__laminate__overlay__render__overlay_dom_render_service, {
    /*src__laminate__overlay__render__overlay_dom_render_service.overlayContainerName*/get overlayContainerName() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"));
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.overlayContainerToken*/get overlayContainerToken() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"));
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.overlayContainerParent*/get overlayContainerParent() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"));
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.overlaySyncDom*/get overlaySyncDom() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom"));
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.overlayRepositionLoop*/get overlayRepositionLoop() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"));
    }
  });
  const _containerName = Symbol('_containerName');
  const _domRuler = Symbol('_domRuler');
  const _domService = Symbol('_domService');
  const _imperativeViewUtils = Symbol('_imperativeViewUtils');
  const _useDomSynchronously = Symbol('_useDomSynchronously');
  const _useRepositionLoop = Symbol('_useRepositionLoop');
  const _zIndexer = Symbol('_zIndexer');
  const _lastZIndex = Symbol('_lastZIndex');
  const _uniqueId = Symbol('_uniqueId');
  const _createUniqueId = Symbol('_createUniqueId');
  src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService = class OverlayDomRenderService extends core$.Object {
    get containerElement() {
      return this[containerElement$0];
    }
    set containerElement(value) {
      super.containerElement = value;
    }
    [_createUniqueId]() {
      return dart.str(this[_containerName]) + "-" + dart.str(this[_uniqueId] = dart.notNull(this[_uniqueId]) + 1);
    }
    applyState(state, pane) {
      return async.async(dart.dynamic, (function* applyState() {
        if (!dart.test(this[_useDomSynchronously])) {
          return this[_domService].onWrite().then(dart.dynamic, dart.fn(_ => {
            this.applyStateSync(state, pane);
          }, dynamicToNull()));
        } else {
          this.applyStateSync(state, pane);
        }
      }).bind(this));
    }
    applyStateSync(state, pane) {
      let cssClasses = JSArrayOfString().of([]);
      if (dart.test(state.captureEvents)) {
        cssClasses[$add]("modal");
      }
      if (dart.equals(state.visibility, laminate__enums__visibility.Visibility.Visible)) cssClasses[$add]("visible");
      this[_domRuler].updateSync(pane, {cssClasses: cssClasses, width: state.width, height: state.height, top: state.top, left: state.left, bottom: state.bottom, right: state.right, visibility: state.visibility, position: state.position, useCssTransform: !dart.test(this[_useRepositionLoop])});
      if (state.minWidth != null) {
        pane.style[$minWidth] = dart.str(state.minWidth) + "px";
      }
      if (state.zIndex != null) {
        pane.style[$zIndex] = dart.str(state.zIndex);
      }
      if (pane[$parent] != null) {
        if (this[_lastZIndex] != this[_zIndexer].peek()) {
          this[_lastZIndex] = this[_zIndexer].pop();
        }
        this[_domRuler].updateSync(pane[$parent], {zIndex: this[_lastZIndex]});
      }
    }
    measureSize(pane, opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      let sync = opts && 'sync' in opts ? opts.sync : false;
      if (dart.test(track)) {
        return this[_domRuler].track(pane);
      } else {
        if (!dart.test(sync)) {
          return this[_domRuler].measure(pane).asStream();
        }
        return StreamOfRectangleOfnum().fromIterable(JSArrayOfRectangleOfnum().of([this[_domRuler].measureSync(pane)]));
      }
    }
    measureContainer() {
      if (!dart.test(this[_useDomSynchronously])) {
        return this[_domService].onWrite().then(RectangleOfnum(), dart.fn(_ => this.containerElement.getBoundingClientRect(), dynamicToRectangleOfnum()));
      } else {
        return FutureOfRectangleOfnum().value(this.containerElement.getBoundingClientRect());
      }
    }
    createOverlayPane(state) {
      if (state === void 0) state = src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService._defaultConfig;
      let pane = html.DivElement.new();
      pane[$attributes][$_set]("pane-id", this[_createUniqueId]());
      pane[$classes].add("pane");
      this.applyStateSync(state, pane);
      if (!dart.test(this[_useDomSynchronously])) {
        return this[_domService].onWrite().then(html.HtmlElement, dart.fn(_ => {
          this.containerElement[$append](pane);
          return pane;
        }, dynamicToHtmlElement()));
      } else {
        this.containerElement[$append](pane);
        return FutureOfHtmlElement().value(pane);
      }
    }
    createOverlayPaneSync(state) {
      if (state === void 0) state = src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService._defaultConfig;
      let pane = html.DivElement.new();
      pane[$attributes][$_set]("pane-id", this[_createUniqueId]());
      pane[$classes].add("pane");
      this.applyStateSync(state, pane);
      this.containerElement[$append](pane);
      return pane;
    }
    createPortalHost(hostContainer) {
      return new laminate__portal__portal.DomPortalHost.new(hostContainer, this[_imperativeViewUtils]);
    }
  };
  (src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new = function(styleConfig, containerElement, containerName, domRuler, domService, imperativeViewUtils, useDomSynchronously, useRepositionLoop, zIndexer) {
    this[_lastZIndex] = null;
    this[_uniqueId] = 0;
    this[containerElement$0] = containerElement;
    this[_containerName] = containerName;
    this[_domRuler] = domRuler;
    this[_domService] = domService;
    this[_imperativeViewUtils] = imperativeViewUtils;
    this[_useDomSynchronously] = useDomSynchronously;
    this[_useRepositionLoop] = useRepositionLoop;
    this[_zIndexer] = zIndexer;
    this.containerElement[$attributes][$_set]("name", this[_containerName]);
    styleConfig.registerStyles();
    this[_lastZIndex] = this[_zIndexer].peek();
  }).prototype = src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.prototype;
  dart.addTypeTests(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService);
  const containerElement$0 = Symbol("OverlayDomRenderService.containerElement");
  dart.setMethodSignature(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, () => ({
    __proto__: dart.getMethods(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.__proto__),
    [_createUniqueId]: dart.fnType(core$.String, []),
    applyState: dart.fnType(async.Future, [src__laminate__overlay__overlay_state.OverlayState, html.HtmlElement]),
    applyStateSync: dart.fnType(dart.void, [src__laminate__overlay__overlay_state.OverlayState, html.HtmlElement]),
    measureSize: dart.fnType(async.Stream$(math.Rectangle$(core$.num)), [html.HtmlElement], {track: core$.bool, sync: core$.bool}),
    measureContainer: dart.fnType(async.Future$(math.Rectangle$(core$.num)), []),
    createOverlayPane: dart.fnType(async.Future$(html.HtmlElement), [], [src__laminate__overlay__overlay_state.OverlayState]),
    createOverlayPaneSync: dart.fnType(html.HtmlElement, [], [src__laminate__overlay__overlay_state.OverlayState]),
    createPortalHost: dart.fnType(laminate__portal__portal.PortalHost, [html.HtmlElement])
  }));
  dart.setFieldSignature(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, () => ({
    __proto__: dart.getFields(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.__proto__),
    containerElement: dart.finalFieldType(html.HtmlElement),
    [_containerName]: dart.finalFieldType(core$.String),
    [_domRuler]: dart.finalFieldType(laminate__ruler__dom_ruler.DomRuler),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_imperativeViewUtils]: dart.finalFieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [_useDomSynchronously]: dart.finalFieldType(core$.bool),
    [_useRepositionLoop]: dart.finalFieldType(core$.bool),
    [_zIndexer]: dart.finalFieldType(laminate__overlay__zindexer.ZIndexer),
    [_lastZIndex]: dart.fieldType(core$.int),
    [_uniqueId]: dart.fieldType(core$.int)
  }));
  dart.defineLazy(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, {
    /*src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService._defaultConfig*/get _defaultConfig() {
      return dart.const(src__laminate__overlay__overlay_state.OverlayState.new());
    },
    /*src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService._paneClassName*/get _paneClassName() {
      return "pane";
    }
  });
  const _ngZone = Symbol('_ngZone');
  const _useDomSynchronously$ = Symbol('_useDomSynchronously');
  const _renderService = Symbol('_renderService');
  const _createRef = Symbol('_createRef');
  const _measurePane = Symbol('_measurePane');
  src__laminate__overlay__overlay_service.OverlayService = class OverlayService extends core$.Object {
    createOverlayRef(initialState) {
      return async.async(src__laminate__overlay__overlay_ref.OverlayRef, (function* createOverlayRef() {
        if (initialState === void 0) initialState = src__laminate__overlay__overlay_service.OverlayService._defaultState;
        let pane = (yield this[_renderService].createOverlayPane(initialState));
        return this[_createRef](pane, initialState);
      }).bind(this));
    }
    createOverlayRefSync(initialState) {
      if (initialState === void 0) initialState = src__laminate__overlay__overlay_service.OverlayService._defaultState;
      let pane = this[_renderService].createOverlayPaneSync(initialState);
      return this[_createRef](pane, initialState);
    }
    measureContainer() {
      return this[_renderService].measureContainer();
    }
    [_createRef](pane, state) {
      return new src__laminate__overlay__overlay_ref.OverlayRef.new(dart.bind(this[_renderService], 'applyState'), dart.bind(this, _measurePane), this[_renderService].createPortalHost(pane), this[_renderService].containerElement, pane, dart.bind(this[_ngZone], 'runOutsideAngular'), {state: state});
    }
    [_measurePane](pane, opts) {
      let track = opts && 'track' in opts ? opts.track : false;
      return this[_renderService].measureSize(pane, {track: track, sync: this[_useDomSynchronously$]});
    }
  };
  (src__laminate__overlay__overlay_service.OverlayService.new = function(ngZone, useDomSynchronously, renderService, existingInstance) {
    this[_ngZone] = ngZone;
    this[_useDomSynchronously$] = useDomSynchronously;
    this[_renderService] = renderService;
    if (!dart.test(dart.fn(() => {
      if (existingInstance != null) {
        src__laminate__overlay__overlay_service.OverlayService._logger.severe("OverlayService must be a singleton: " + "Check that there is no nested overlayBindings or popupBindings");
      }
      return true;
    }, VoidTobool())())) dart.assertFailed();
  }).prototype = src__laminate__overlay__overlay_service.OverlayService.prototype;
  dart.addTypeTests(src__laminate__overlay__overlay_service.OverlayService);
  dart.setMethodSignature(src__laminate__overlay__overlay_service.OverlayService, () => ({
    __proto__: dart.getMethods(src__laminate__overlay__overlay_service.OverlayService.__proto__),
    createOverlayRef: dart.fnType(async.Future$(src__laminate__overlay__overlay_ref.OverlayRef), [], [src__laminate__overlay__overlay_state.OverlayState]),
    createOverlayRefSync: dart.fnType(src__laminate__overlay__overlay_ref.OverlayRef, [], [src__laminate__overlay__overlay_state.OverlayState]),
    measureContainer: dart.fnType(async.Future$(math.Rectangle$(core$.num)), []),
    [_createRef]: dart.fnType(src__laminate__overlay__overlay_ref.OverlayRef, [html.HtmlElement, src__laminate__overlay__overlay_state.OverlayState]),
    [_measurePane]: dart.fnType(async.Stream$(math.Rectangle$(core$.num)), [html.HtmlElement], {track: core$.bool})
  }));
  dart.setFieldSignature(src__laminate__overlay__overlay_service.OverlayService, () => ({
    __proto__: dart.getFields(src__laminate__overlay__overlay_service.OverlayService.__proto__),
    [_useDomSynchronously$]: dart.finalFieldType(core$.bool),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_renderService]: dart.finalFieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService)
  }));
  dart.defineLazy(src__laminate__overlay__overlay_service.OverlayService, {
    /*src__laminate__overlay__overlay_service.OverlayService._defaultState*/get _defaultState() {
      return dart.const(src__laminate__overlay__overlay_state.OverlayState.new());
    },
    /*src__laminate__overlay__overlay_service.OverlayService._logger*/get _logger() {
      return logging$.Logger.new("OverlayService");
    }
  });
  dart.trackLibraries("packages/angular_components/src/laminate/overlay/overlay_ref.ddc", {
    "package:angular_components/src/laminate/overlay/overlay_state.dart": src__laminate__overlay__overlay_state,
    "package:angular_components/src/laminate/overlay/overlay_ref.dart": src__laminate__overlay__overlay_ref,
    "package:angular_components/src/laminate/overlay/render/overlay_style_config.dart": src__laminate__overlay__render__overlay_style_config,
    "package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart": src__laminate__overlay__render__overlay_dom_render_service,
    "package:angular_components/src/laminate/overlay/overlay_service.dart": src__laminate__overlay__overlay_service
  }, '{"version":3,"sourceRoot":"","sources":["overlay_state.dart","overlay_ref.dart","render/overlay_style_config.dart","render/overlay_dom_render_service.dart","overlay_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gEAckB,CAAc,EAAE,CAAc;AAC9C,QAAI,AAAU,CAAC,IAAE,CAAC,EAAG,MAAO;AAC5B,UAAO,AAQkB,EARjB,cAAc,IAAI,CAAC,cAAc,IACrC,CAAC,KAAK,IAAI,CAAC,KAAK,IAChB,CAAC,IAAI,IAAI,CAAC,IAAI,IACd,CAAC,MAAM,IAAI,CAAC,MAAM,IAClB,CAAC,OAAO,IAAI,CAAC,OAAO,IACpB,CAAC,MAAM,IAAI,CAAC,MAAM,IAClB,CAAC,SAAS,IAAI,CAAC,SAAS,IACxB,CAAC,OAAO,IAAI,CAAC,OAAO,IACpB,CAAC,OAAO,IAAI,CAAC,OAAO,gBACpB,CAAC,SAAS,EAAI,CAAC,SAAS;EAC9B;kEAKmB,CAAc;AAC/B,UAAO,mBAAW,CAAC,CACjB,CAAC,cAAc,EACf,CAAC,KAAK,EACN,CAAC,IAAI,EACL,CAAC,MAAM,EACP,CAAC,OAAO,EACR,CAAC,MAAM,EACP,CAAC,SAAS,EACV,CAAC,OAAO,EACR,CAAC,OAAO,EACR,CAAC,SAAS;EAEd;;;AAoBgC;IAAsB;;;;;;MAdvC,yDAAM;wBACf,sDAAY,iBAAgB,WAAW,WAAW,SAAS,UAAU;;;;;YA6GxD,CAAC;UAAD,CAAC;YAAuB,uDAAlB,CAAC,eAAoB,kDAAY,CAAC,MAAM,CAAC;IAAC;;YAI7C,qDAAc,CAAC;IAAK;;YAGjB,gCAAM,kBAAY;IAAE;;YAIvC,AAAyB,yCACzB,yCACE,iBAAiB,kBAAa,EAC9B,QAAQ,SAAI,EACZ,OAAO,QAAG,EACV,SAAS,UAAK,EACd,UAAU,WAAM,EAChB,SAAS,UAAK,EACd,UAAU,WAAM,EAChB,cAAc,eAAU,EACxB,UAAU,WAAM,EAChB,YAAY,aAAQ,aACZ;IAAE;;;QApCN,uEAAgB;QACjB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA,8DAAa,sCAAU,KAAK;QAC5B;IAVC,kBAAa,GAAb,aAAa;IACd,SAAI,GAAJ,IAAI;IACJ,QAAG,GAAH,GAAG;IACH,UAAK,GAAL,KAAK;IACL,WAAM,GAAN,MAAM;IACN,UAAK,GAAL,KAAK;IACL,aAAQ,GAAR,QAAQ;IACR,WAAM,GAAN,MAAM;IACN,WAAM,GAAN,MAAM;IACN,eAAU,GAAV,UAAU;IACV,aAAQ,GAAR,QAAQ;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBAiDc,KAAkB;AAAE,AACnD,UAAI,KAAK,IAAI,MAAM,WAAO,6DAAmB;AAC7C,uEAAI,KAAK,GAAyB,MAAO,MAAK;AAC9C,iBAAO,6DAAmB,iBACP,KAAK,cAAc,QAC5B,KAAK,KAAK,OACX,KAAK,IAAI,SACP,KAAK,MAAM,UACV,KAAK,OAAO,SACb,KAAK,MAAM,YACR,KAAK,SAAS,UAChB,KAAK,OAAO,UACZ,KAAK,OAAO,cACR,KAAK,WAAW,YAClB,KAAK,SAAS;IAC9B;YA2BiB,CAAC;UAAD,CAAC;YAAuB,uDAAlB,CAAC,eAAoB,kDAAY,CAAC,MAAM,CAAC;IAAC;;YAG7C,qDAAc,CAAC;IAAK;;YAGjB,sBAAe,SAAS;;;YAGrB,qBAAc;;sBACtB,aAAkB;AAClC,UAAI,oBAAc,IAAI,aAAa,EAAE;AACnC,4BAAc,GAAG,aAAa;AAC9B,6BAAe,eAAe;;IAElC;;YAGgB,YAAK;;aACZ,IAAQ;AACf,UAAI,WAAK,IAAI,IAAI,EAAE;AACjB,mBAAK,GAAG,IAAI;AACZ,6BAAe,eAAe;;IAElC;;YAGe,WAAI;;YACX,GAAO;AACb,UAAI,UAAI,IAAI,GAAG,EAAE;AACf,kBAAI,GAAG,GAAG;AACV,6BAAe,eAAe;;IAElC;;YAGiB,aAAM;;cACb,KAAS;AACjB,UAAI,YAAM,IAAI,KAAK,EAAE;AACnB,oBAAM,GAAG,KAAK;AACd,6BAAe,eAAe;;IAElC;;YAGkB,cAAO;;eACd,MAAU;AACnB,UAAI,aAAO,IAAI,MAAM,EAAE;AACrB,qBAAO,GAAG,MAAM;AAChB,6BAAe,eAAe;;IAElC;;YAGiB,aAAM;;cACb,KAAS;AACjB,UAAI,YAAM,IAAI,KAAK,EAAE;AACnB,oBAAM,GAAG,KAAK;AACd,6BAAe,eAAe;;IAElC;;YAGoB,gBAAS;;iBAChB,QAAY;AACvB,UAAI,eAAS,IAAI,QAAQ,EAAE;AACzB,uBAAS,GAAG,QAAQ;AACpB,6BAAe,eAAe;;IAElC;;YAGkB,cAAO;;eACd,MAAU;AACnB,UAAI,aAAO,IAAI,MAAM,EAAE;AACrB,qBAAO,GAAG,MAAM;AAChB,6BAAe,eAAe;;IAElC;;YAGkB,cAAO;;eACd,MAAU;AACnB,UAAI,aAAO,IAAI,MAAM,EAAE;AACrB,qBAAO,GAAG,MAAM;AAChB,6BAAe,eAAe;;IAElC;;YAG6B,kBAAW;;mBACzB,UAAqB;AAClC,uBAAI,iBAAW,EAAI,UAAU,GAAE;AAC7B,yBAAW,GAAG,UAAU;AACxB,6BAAe,eAAe;;IAElC;;YAGyB,gBAAS;;iBACrB,QAAiB;AAC5B,uBAAI,eAAS,EAAI,QAAQ,GAAE;AACzB,uBAAS,GAAG,QAAQ;AACpB,6BAAe,eAAe;;IAElC;;YAII,AAAuB,uCACvB,yCACE,iBAAiB,kBAAa,EAC9B,QAAQ,SAAI,EACZ,OAAO,QAAG,EACV,SAAS,UAAK,EACd,UAAU,WAAM,EAChB,SAAS,UAAK,EACd,YAAY,aAAQ,EACpB,UAAU,WAAM,EAChB,UAAU,WAAM,EAChB,cAAc,eAAU,EACxB,YAAY,aAAQ,aACZ;IAAE;;;QAlJN,uEAAgB;QAClB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACO,8DAAa,sCAAU,KAAK;QAC9B;IA3CP,qBAAe,OAAG,kEAAoB;IAEvC,oBAAc;IACf,WAAK;IACL,UAAI;IACJ,YAAM;IACN,aAAO;IACP,YAAM;IACN,eAAS;IACT,aAAO;IACP,aAAO;IACA,iBAAW;IACb,eAAS;AAgChB,wBAAc,GAAG,aAAa;AAC9B,eAAK,GAAG,IAAI;AACZ,cAAI,GAAG,GAAG;AACV,gBAAM,GAAG,KAAK;AACd,iBAAO,GAAG,MAAM;AAChB,gBAAM,GAAG,KAAK;AACd,mBAAS,GAAG,QAAQ;AACpB,iBAAO,GAAG,MAAM;AAChB,iBAAO,GAAG,MAAM;AAChB,qBAAW,GAAG,UAAU;EAC1B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BCrNsB,UAAK,WAAW,EAAI,sCAAU,KAAK;;;YAKjB,oBAAc,cAAY;;;AAQ3B;AAIrC,wBAAI,UAAK,WAAW,EAAI,sCAAU,KAAK,GAAE;AACvC,oBAAK,WAAW,GAAG,sCAAU,OAAO;;AAEtC,cAAM,mBAAa;AACnB,oEAAO,wBAAkB,GAAC,cACjB,uBAAiB,CAAC,mBAAc,UAAS,eACnC,CAAC,6GAAY;QAF5B;MAIF;;;AAIE,wCAAoB;+CAAK,kCAA0B,QAAO;AAC1D,YAAO,2BAAoB,OAAO;IACpC;IAK0B;;;;;;IAGR;;;;;;IAGA;;;;;;0BAIU,kBAAuB;yCAAlB;AAC/B,gBAAK,cAAc,GAAG,kBAAkB,WAAlB,kBAAkB,GAAI;IAC9C;eAGiB,OAAY;8BAAP;AACpB,gBAAK,WAAW,GAAG,kDAAsB,CAAC,OAAO,WAAP,OAAO,GAAI;IACvD;;YAGuB,oBAAc,aAAW,QAAC;IAAU;WAG7C,MAAa;YAAK,0BAAmB,OAAO,CAAC,MAAM;IAAC;;YAG/C,0BAAmB,OAAO;IAAE;;YAGvB,0BAAmB,YAAY;;;AAIrD,yBAAc,SAAO;AACrB,UAAI,0BAAoB,IAAI,MAAM;AAChC,kCAAoB,MAAM;;AAE5B,UAAI,yBAAmB,YAAY,KAAI,MAAM;AAC3C,iCAAmB,QAAQ;;AAE7B,gCAAoB,OAAO;IAC7B;wBAEyB,CAAW,EAAE,CAAW;AAC/C,YAAO,AAAmB,EAAlB,QAAM,IAAI,CAAC,QAAM,IAAI,CAAC,SAAO,IAAI,CAAC,SAAO;IACnD;;AAeE,UAAI,kBAAY,IAAI,cAAS,EAAE;AAC7B,0BAAY,GAAG,cAAS;AACxB,YAAI,0BAAoB,IAAI,MAAM;AAChC,oCAAoB,IAAI,CAAC,cAAS;;;AAGtC,YAAO,uBAAgB,CAAC,UAAK,EAAE,mBAAc;IAC/C;;wHAMI,gBAAqB,EACrB,cAAmB;QAEL;IAxBb,kBAAY,GAAG;IAEG,0BAAoB;IAGxB,0BAAoB;IAa9B,sBAAgB;IAChB,uBAAiB;IACjB,yBAAmB;IACnB,uBAAgB,GAAhB,gBAAgB;IAChB,qBAAc,GAAd,cAAc;IACd,wBAAkB;IAEhB,YAAK,GAAG,8DAAwB,CAAC,KAAK;AAC/C,8BAAoB,GAAG,UAAU,SAAS,OAAO,CAAC,QAAC,CAAC,IAAK,mBAAa;EACxE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AClDE,oBAAI,qBAAgB,GAAE;AACtB,sBAAU,SAAO;gBAAC,qBAAY;eACrB,kBAAQ;mBACN,m9DAAa;;;AACxB,6BAAiB,GAAG;IACtB;;AAGE,oBAAI,uBAAiB,GAAE,MAAO;AAC9B,UAAI,YAAY,eAAS,cAAc,CAAC,MAAG,kBAAQ;AACnD,UAAI,SAAS,IAAI,MAAM,uBAAiB,GAAG;AAC3C,YAAO,wBAAiB;IAC1B;;0FAjBmB,QAAiB;IAH/B,uBAAiB,GAAG;IAInB,gBAAU,2BAAG,QAAQ,cAAc,CAAC;IACpC,eAAS,GAAG,QAAQ;;;;;;;;;;;;;;;;;;MAhFb,gFAAQ;YAAG;;MAEX,qFAAa;YAAG;;;;MCEzB,+EAAoB;4BAAG,2CAAW,CAAC;;MASnC,gFAAqB;4BAAG,2CAAW,CAAC;;MAGpC,iFAAsB;4BAAG,2CAAW,CAAC;;MAOrC,yEAAc;4BAAG,2CAAW,CAAC;;MAO7B,gFAAqB;4BAAG,2CAAW,CAAC;;;;;;;;;;;;;;IAYtB;;;;;;;YAiCU,UAAE,oBAAc,mBAAG,eAAW,GAzF5D,aAyFmD,eAAS,IAzF5D;IAyF8D;eAO1C,KAAkB,EAAE,IAAgB;AAAE;AACtD,uBAAK,0BAAoB,GAAE;AACzB,gBAAO,kBAAW,QAAQ,OAAO,eAAC,QAAC,CAAC;AAClC,+BAAc,CAAC,KAAK,EAAE,IAAI;;eAEvB;AACL,6BAAc,CAAC,KAAK,EAAE,IAAI;;MAE9B;;mBAGoB,KAAkB,EAAE,IAAgB;AACtD,UAAI,aAAa;AAGjB,oBAAI,KAAK,cAAc,GAAE;AACvB,kBAAU,MAAI,CAAC;;AAGjB,sBAAI,KAAK,WAAW,EAAI,sCAAU,QAAQ,GAAE,UAAU,MAAI,CAAC;AAG3D,qBAAS,WAAW,CAAC,IAAI,eACT,UAAU,SACf,KAAK,MAAM,UACV,KAAK,OAAO,OACf,KAAK,IAAI,QACR,KAAK,KAAK,UACR,KAAK,OAAO,SACb,KAAK,MAAM,cACN,KAAK,WAAW,YAClB,KAAK,SAAS,mBACP,WAAC,wBAAkB;AAGxC,UAAI,KAAK,SAAS,IAAI,MAAM;AAC1B,YAAI,MAAM,WAAS,GAAG,SAAG,KAAK,SAAS;;AAEzC,UAAI,KAAK,OAAO,IAAI,MAAM;AACxB,YAAI,MAAM,SAAO,GAAG,SAAG,KAAK,OAAO;;AAKrC,UAAI,IAAI,SAAO,IAAI,MAAM;AACvB,YAAI,iBAAW,IAAI,eAAS,KAAK,IAAI;AACnC,2BAAW,GAAG,eAAS,IAAI;;AAE7B,uBAAS,WAAW,CAAC,IAAI,SAAO,WAAU,iBAAW;;IAEzD;gBAa8B,IAAgB;UACpC,+CAAQ;UAAY,4CAAO;AACnC,oBAAI,KAAK,GAAE;AACT,cAAO,gBAAS,MAAM,CAAC,IAAI;aACtB;AAGL,uBAAK,IAAI,GAAE;AACT,gBAAO,gBAAS,QAAQ,CAAC,IAAI,UAAU;;AAEzC,cAAO,sCAAmB,CAAC,8BAAC,eAAS,YAAY,CAAC,IAAI;;IAE1D;;AAQE,qBAAK,0BAAoB,GAAE;AACzB,cAAO,kBAAW,QACN,OACH,mBAAC,QAAC,CAAC,IAAK,qBAAgB,sBAAsB;aAClD;AACL,cAAO,+BAAuB,CAAC,qBAAgB,sBAAsB;;IAEzE;sBAKuC,KAAmC;4BAAtB,QAAQ,iGAAc;AAExE,UAAY,OAAO,mBAAU;MAAjB,yBACG,WAAa,qBAAe;MAD/B,mBAEI,MAAc;AAK9B,yBAAc,CAAC,KAAK,EAAE,IAAI;AAE1B,qBAAK,0BAAoB,GAAE;AACzB,cAAO,kBAAW,QAAQ,OAAO,mBAAC,QAAC,CAAC;AAClC,+BAAgB,SAAO,CAAC,IAAI;AAC5B,gBAAO,KAAI;;aAER;AACL,6BAAgB,SAAO,CAAC,IAAI;AAC5B,cAAO,4BAAY,CAAC,IAAI;;IAE5B;0BAGmC,KAAmC;4BAAtB,QAAQ,iGAAc;AAEpE,UAAY,OAAO,mBAAU;MAAjB,yBACG,WAAa,qBAAe;MAD/B,mBAEI,MAAc;AAK9B,yBAAc,CAAC,KAAK,EAAE,IAAI;AAC1B,2BAAgB,SAAO,CAAC,IAAI;AAC5B,YAAO,KAAI;IACb;qBAG4B,aAAyB;AACnD,iBAAO,0CAAa,CAAC,aAAa,EAAE,0BAAoB;IAC1D;;qGA5JI,WAA8B,EAC9B,gBAAoD;IAPpD,iBAAW;IAGX,eAAS,GAAG;IAIwB,wBAAgB,GAAhB,gBAAgB;IACjB,oBAAc;IAC5C,eAAS;IACT,iBAAW;IACX,0BAAoB;IACI,0BAAoB;IACb,wBAAkB;IACjD,eAAS;AAChB,yBAAgB,aAAW,QAAC,QAAU,oBAAc;AACpD,eAAW,eAAe;AAC1B,qBAAW,GAAG,eAAS,KAAK;EAC9B;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAlCa,iGAAc;wBAAG,sDAAY;;MAC7B,iGAAc;YAAG;;;;;;;;;qBC3BzB,YAAyC;AAAG;qCAA/B,eAAe,oEAAa;AAC5C,YAAY,QAAO,MAAM,oBAAc,kBAAkB,CAAC,YAAY;AACtE,cAAO,iBAAU,CAAC,IAAI,EAAE,YAAY;MACtC;;yBAKiC,YAAyC;mCAA5B,eAAe,oEAAa;AACxE,UAAY,OAAO,oBAAc,sBAAsB,CAAC,YAAY;AACpE,YAAO,iBAAU,CAAC,IAAI,EAAE,YAAY;IACtC;;YAQI,qBAAc,iBAAiB;IAAE;iBASf,IAAgB,EAAE,KAAkB;iBAAK,kDAAU,WACrE,oBAAc,iBACd,6BAAY,EACZ,oBAAc,iBAAiB,CAAC,IAAI,GACpC,oBAAc,iBAAiB,EAC/B,IAAI,YACJ,aAAO,gCACA,KAAK;IAAC;mBAGmB,IAAgB;UAAQ,+CAAQ;AAClE,YAAO,qBAAc,YAAY,CAAC,IAAI,UAC3B,KAAK,QAAQ,2BAAoB;IAC9C;;qHAMI,gBAAuD;IAHlD,aAAO;IACiB,2BAAoB;IAC5C,oBAAc;AAErB,mBAAO;AAEL,UAAI,gBAAgB,IAAI,MAAM;AAC5B,sEAAO,OAAO,CAAC,yCACX;;AAEN,YAAO;;EAEX;;;;;;;;;;;;;;;;;MAnCa,oEAAa;wBAAG,sDAAY;;MAC5B,8DAAO;YAAG,oBAAM,CAAC","file":"overlay_ref.ddc.js"}');
  // Exports:
  return {
    src__laminate__overlay__overlay_state: src__laminate__overlay__overlay_state,
    src__laminate__overlay__overlay_ref: src__laminate__overlay__overlay_ref,
    src__laminate__overlay__render__overlay_style_config: src__laminate__overlay__render__overlay_style_config,
    src__laminate__overlay__render__overlay_dom_render_service: src__laminate__overlay__render__overlay_dom_render_service,
    src__laminate__overlay__overlay_service: src__laminate__overlay__overlay_service
  };
});

//# sourceMappingURL=overlay_ref.ddc.js.map
