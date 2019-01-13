define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/feature_detector/feature_detector'], function(dart_sdk, modules, feature_detector) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const math = dart_sdk.math;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const utils__browser__feature_detector__feature_detector = feature_detector.utils__browser__feature_detector__feature_detector;
  const _root = Object.create(null);
  const utils__browser__events__events = Object.create(_root);
  const $target = dartx.target;
  const $parent = dartx.parent;
  const $onMouseDown = dartx.onMouseDown;
  const $onMouseUp = dartx.onMouseUp;
  const $onClick = dartx.onClick;
  const $addEventListener = dartx.addEventListener;
  const $removeEventListener = dartx.removeEventListener;
  const $containsKey = dartx.containsKey;
  const $attributes = dartx.attributes;
  const $toLowerCase = dartx.toLowerCase;
  const $classes = dartx.classes;
  let NodeTobool = () => (NodeTobool = dart.constFn(dart.fnType(core.bool, [html.Node])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamControllerOfEvent = () => (StreamControllerOfEvent = dart.constFn(async.StreamController$(html.Event)))();
  let ListOfResizeObserverEntry = () => (ListOfResizeObserverEntry = dart.constFn(core.List$(html.ResizeObserverEntry)))();
  let ListOfResizeObserverEntryAndResizeObserverToNull = () => (ListOfResizeObserverEntryAndResizeObserverToNull = dart.constFn(dart.fnType(core.Null, [ListOfResizeObserverEntry(), html.ResizeObserver])))();
  let ListOfResizeObserverEntryAndResizeObserverTovoid = () => (ListOfResizeObserverEntryAndResizeObserverTovoid = dart.constFn(dart.fnType(dart.void, [ListOfResizeObserverEntry(), html.ResizeObserver])))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let StreamControllerOfRectangleOfnum = () => (StreamControllerOfRectangleOfnum = dart.constFn(async.StreamController$(RectangleOfnum())))();
  utils__browser__events__events.isSpaceKey = function(event) {
    return event.keyCode !== 0 ? event.keyCode === html.KeyCode.SPACE : event.key === " ";
  };
  utils__browser__events__events.isKeyboardTrigger = function(event) {
    return event.keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(event));
  };
  utils__browser__events__events.isStandardMouseEvent = function(event) {
    return event.button === 0 && !dart.test(event.altKey) && !dart.test(event.ctrlKey) && !dart.test(event.metaKey) && !dart.test(event.shiftKey);
  };
  utils__browser__events__events.isStandardTriggerEvent = function(event) {
    return html.MouseEvent.is(event) && dart.test(utils__browser__events__events.isStandardMouseEvent(event)) || html.KeyboardEvent.is(event) && dart.test(utils__browser__events__events.isKeyboardTrigger(event));
  };
  utils__browser__events__events.not = function(T, predicate) {
    return dart.fn(value => !dart.test(predicate(value)), dart.fnType(core.bool, [T]));
  };
  utils__browser__events__events.triggersOutside = function(element) {
    if (src__core__linker__element_ref.ElementRef.is(element)) element = dart.dload(element, 'nativeElement');
    return utils__browser__events__events.triggersOutsideAny(dart.fn(node => dart.equals(node, element), NodeTobool()));
  };
  dart.defineLazy(utils__browser__events__events, {
    /*utils__browser__events__events.enableNewTriggerLogic*/get enableNewTriggerLogic() {
      return null;
    },
    set enableNewTriggerLogic(_) {}
  });
  utils__browser__events__events.triggersOutsideAny = function(checkNodeInside) {
    let controller = null;
    let clickListener = null;
    let mouseDownListener = null;
    let mouseUpListener = null;
    let listener = null;
    if (utils__browser__events__events.enableNewTriggerLogic == null) {
      if (!dart.test(dart.fn(() => {
        let t = utils__browser__events__events.enableNewTriggerLogic;
        t == null ? utils__browser__events__events.enableNewTriggerLogic = true : t;
        return true;
      }, VoidTobool())())) dart.assertFailed();
      let t = utils__browser__events__events.enableNewTriggerLogic;
      t == null ? utils__browser__events__events.enableNewTriggerLogic = false : t;
    }
    controller = StreamControllerOfEvent().broadcast({sync: true, onListen: dart.fn(() => {
        if (!(clickListener == null)) dart.assertFailed();
        if (!(mouseDownListener == null)) dart.assertFailed();
        if (!(mouseUpListener == null)) dart.assertFailed();
        let lastEvent = null;
        let lastDownEvent = null;
        listener = dart.fn(e => {
          lastEvent = e;
          let node = html.Node.as(e[$target]);
          while (node != null) {
            if (dart.test(checkNodeInside(node))) {
              return;
            } else {
              node = node[$parent];
            }
          }
          controller.add(e);
        }, EventToNull());
        if (dart.test(utils__browser__events__events.enableNewTriggerLogic)) {
          mouseDownListener = html.document[$onMouseDown].listen(dart.fn(e => {
            lastDownEvent = e;
          }, MouseEventToNull()));
        }
        mouseUpListener = html.document[$onMouseUp].listen(dart.fn(e => {
          if (lastDownEvent == null || dart.equals(e[$target], lastDownEvent[$target])) {
            listener(e);
          }
          lastEvent = e;
        }, MouseEventToNull()));
        clickListener = html.document[$onClick].listen(dart.fn(e => {
          if ((() => {
            let t = lastEvent;
            return t == null ? null : t.type;
          })() === "mouseup" && dart.equals(e[$target], (() => {
            let t = lastEvent;
            return t == null ? null : t[$target];
          })())) {
            return;
          }
          if (lastDownEvent == null || dart.equals(e[$target], lastDownEvent[$target])) {
            listener(e);
          }
          lastDownEvent = null;
        }, MouseEventToNull()));
        html.document[$addEventListener]("focus", listener, true);
        html.document[$addEventListener]("touchend", listener);
      }, VoidToNull()), onCancel: dart.fn(() => {
        clickListener.cancel();
        clickListener = null;
        let t = mouseDownListener;
        t == null ? null : t.cancel();
        mouseDownListener = null;
        mouseUpListener.cancel();
        mouseUpListener = null;
        html.document[$removeEventListener]("focus", listener, true);
        html.document[$removeEventListener]("touchend", listener);
      }, VoidToNull())});
    return controller.stream;
  };
  utils__browser__events__events.onResize = function(element) {
    if (!dart.test(utils__browser__feature_detector__feature_detector.supportsResizeObserver)) dart.assertFailed("ResizeObserver support is required");
    let controller = null;
    let observer = null;
    controller = StreamControllerOfRectangleOfnum().broadcast({sync: true, onListen: dart.fn(() => {
        observer = html.ResizeObserver.new(js.allowInterop(ListOfResizeObserverEntryAndResizeObserverTovoid(), dart.fn((entries, _) => {
          for (let entry of entries) {
            controller.add(entry.contentRect);
          }
        }, ListOfResizeObserverEntryAndResizeObserverToNull())));
        observer.observe(element);
      }, VoidToNull()), onCancel: dart.fn(() => {
        observer.disconnect();
      }, VoidToNull())});
    return controller.stream;
  };
  utils__browser__events__events.anyParentHasAttribute = function(target, attribute) {
    while (target != null) {
      if (dart.test(target[$attributes][$containsKey](attribute))) {
        return true;
      }
      target = target[$parent];
    }
    return false;
  };
  utils__browser__events__events.anyParentHasTag = function(target, componentTag) {
    componentTag = componentTag[$toLowerCase]();
    while (target != null) {
      if (target.tagName[$toLowerCase]() === componentTag) {
        return true;
      }
      target = target[$parent];
    }
    return false;
  };
  utils__browser__events__events.anyParentHasClass = function(target, className) {
    return utils__browser__events__events.closestWithClass(target, className) != null;
  };
  utils__browser__events__events.closestWithClass = function(target, className) {
    while (target != null) {
      if (dart.test(target[$attributes][$containsKey]("class")) && dart.test(target[$classes].contains(className))) {
        return target;
      }
      target = target[$parent];
    }
    return null;
  };
  utils__browser__events__events.isParentOf = function(element, node) {
    while (node != null) {
      if (dart.equals(node, element)) {
        return true;
      } else {
        node = node[$parent];
      }
    }
    return false;
  };
  utils__browser__events__events.compareDocumentPosition = function(a, b) {
    let bitmask = core.int._check(js_util.callMethod(a, "compareDocumentPosition", [b]));
    if ((dart.notNull(bitmask) & 4) !== 0 || (dart.notNull(bitmask) & 16) !== 0) {
      return -1;
    } else if ((dart.notNull(bitmask) & 2) !== 0 || (dart.notNull(bitmask) & 8) !== 0) {
      return 1;
    } else {
      return 0;
    }
  };
  dart.trackLibraries("packages/angular_components/utils/browser/events/events.ddc", {
    "package:angular_components/utils/browser/events/events.dart": utils__browser__events__events
  }, '{"version":3,"sourceRoot":"","sources":["events.dart"],"names":[],"mappings":"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","file":"events.ddc.js"}');
  // Exports:
  return {
    utils__browser__events__events: utils__browser__events__events
  };
});

//# sourceMappingURL=events.ddc.js.map
