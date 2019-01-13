define(['dart_sdk', 'packages/angular_components/laminate/enums/visibility', 'packages/angular_components/laminate/enums/position'], function(dart_sdk, visibility, position) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__visibility = visibility.laminate__enums__visibility;
  const laminate__enums__position = position.laminate__enums__position;
  const _root = Object.create(null);
  const src__laminate__ruler__ruler_interface = Object.create(_root);
  const $abs = dartx.abs;
  const $top = dartx.top;
  const $left = dartx.left;
  const $width = dartx.width;
  const $height = dartx.height;
  const $round = dartx.round;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ExpandoOfListOfString = () => (ExpandoOfListOfString = dart.constFn(core.Expando$(ListOfString())))();
  let RectangleOfnum = () => (RectangleOfnum = dart.constFn(math.Rectangle$(core.num)))();
  let voidToRectangleOfnum = () => (voidToRectangleOfnum = dart.constFn(dart.fnType(RectangleOfnum(), [dart.void])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamControllerOfRectangleOfnum = () => (StreamControllerOfRectangleOfnum = dart.constFn(async.StreamController$(RectangleOfnum())))();
  let numAndnumTobool = () => (numAndnumTobool = dart.constFn(dart.fnType(core.bool, [core.num, core.num])))();
  let RectangleOfnumAndRectangleOfnumTobool = () => (RectangleOfnumAndRectangleOfnumTobool = dart.constFn(dart.fnType(core.bool, [RectangleOfnum(), RectangleOfnum()])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let StringAnddynamicToNull = () => (StringAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [core.String, dart.dynamic])))();
  const _is_Ruler_default = Symbol('_is_Ruler_default');
  src__laminate__ruler__ruler_interface.Ruler$ = dart.generic(E => {
    class Ruler extends core.Object {}
    (Ruler.new = function() {
    }).prototype = Ruler.prototype;
    dart.addTypeTests(Ruler);
    Ruler.prototype[_is_Ruler_default] = true;
    return Ruler;
  });
  src__laminate__ruler__ruler_interface.Ruler = src__laminate__ruler__ruler_interface.Ruler$();
  dart.addTypeTests(src__laminate__ruler__ruler_interface.Ruler, _is_Ruler_default);
  const _addedCssClasses = Symbol('_addedCssClasses');
  const _is_RulerBase_default = Symbol('_is_RulerBase_default');
  src__laminate__ruler__ruler_interface.RulerBase$ = dart.generic(E => {
    let RulerOfE = () => (RulerOfE = dart.constFn(src__laminate__ruler__ruler_interface.Ruler$(E)))();
    class RulerBase extends core.Object {
      measure(element, opts) {
        E._check(element);
        let offset = opts && 'offset' in opts ? opts.offset : false;
        return this.onRead().then(RectangleOfnum(), dart.fn(_ => this.measureSync(element, {offset: offset}), voidToRectangleOfnum()));
      }
      track(element) {
        E._check(element);
        let controller = null;
        let subscription = null;
        controller = StreamControllerOfRectangleOfnum().new({sync: true, onListen: dart.fn(() => {
            this.measure(element).then(dart.void, dart.bind(controller, 'add'));
            subscription = this.onLayoutChanged.listen(dart.fn(_ => {
              controller.add(this.measureSync(element));
            }, dynamicToNull()), {onDone: dart.fn(() => {
                controller.close();
              }, VoidToNull())});
          }, VoidToNull()), onCancel: dart.fn(() => {
            subscription.cancel();
          }, VoidToNull())});
        return controller.stream.distinct(dart.fn((previous, next) => {
          if (previous == null || next == null) return previous == next;
          function withinEpsilon(a, b) {
            return (dart.notNull(a) - dart.notNull(b))[$abs]() < 0.01;
          }
          dart.fn(withinEpsilon, numAndnumTobool());
          return dart.test(withinEpsilon(previous[$top], next[$top])) && dart.test(withinEpsilon(previous[$left], next[$left])) && dart.test(withinEpsilon(previous[$width], next[$width])) && dart.test(withinEpsilon(previous[$height], next[$height]));
        }, RectangleOfnumAndRectangleOfnumTobool()));
      }
      update(element, opts) {
        E._check(element);
        let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
        let visibility = opts && 'visibility' in opts ? opts.visibility : null;
        let position = opts && 'position' in opts ? opts.position : null;
        let width = opts && 'width' in opts ? opts.width : null;
        let height = opts && 'height' in opts ? opts.height : null;
        let left = opts && 'left' in opts ? opts.left : null;
        let top = opts && 'top' in opts ? opts.top : null;
        let right = opts && 'right' in opts ? opts.right : null;
        let bottom = opts && 'bottom' in opts ? opts.bottom : null;
        let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
        let useCssTransform = opts && 'useCssTransform' in opts ? opts.useCssTransform : true;
        const doSyncUpdate = (function() {
          this.updateSync(element, {cssClasses: cssClasses, visibility: visibility, position: position, width: width, height: height, top: top, left: left, right: right, bottom: bottom, zIndex: zIndex, useCssTransform: useCssTransform});
        }).bind(this);
        dart.fn(doSyncUpdate, VoidTovoid());
        if (dart.test(this.canSyncWrite(element))) {
          doSyncUpdate();
          return FutureOfvoid().value();
        }
        return this.onWrite().then(dart.void, dart.fn(_ => doSyncUpdate(), dynamicTovoid()));
      }
      updateSync(element, opts) {
        E._check(element);
        let cssClasses = opts && 'cssClasses' in opts ? opts.cssClasses : null;
        let visibility = opts && 'visibility' in opts ? opts.visibility : null;
        let position = opts && 'position' in opts ? opts.position : null;
        let width = opts && 'width' in opts ? opts.width : null;
        let height = opts && 'height' in opts ? opts.height : null;
        let left = opts && 'left' in opts ? opts.left : null;
        let top = opts && 'top' in opts ? opts.top : null;
        let right = opts && 'right' in opts ? opts.right : null;
        let bottom = opts && 'bottom' in opts ? opts.bottom : null;
        let zIndex = opts && 'zIndex' in opts ? opts.zIndex : null;
        let useCssTransform = opts && 'useCssTransform' in opts ? opts.useCssTransform : true;
        let setProperty = (name, value) => {
          this.setCssPropertySync(element, name, core.String._check(value));
        };
        dart.fn(setProperty, StringAnddynamicToNull());
        setProperty("display", null);
        setProperty("visibility", null);
        if (visibility != null && !dart.equals(visibility, laminate__enums__visibility.Visibility.Visible)) {
          visibility.apply(setProperty);
        }
        if (cssClasses != null) {
          let lastCssClasses = this[_addedCssClasses]._get(element);
          if (lastCssClasses != null) {
            this.removeCssClassesSync(element, lastCssClasses);
          }
          this.addCssClassesSync(element, cssClasses);
          this[_addedCssClasses]._set(element, cssClasses);
        }
        if (width != null) {
          setProperty("width", width === 0 ? "0" : dart.str(width) + "px");
        } else {
          setProperty("width", null);
        }
        if (height != null) {
          setProperty("height", height === 0 ? "0" : dart.str(height) + "px");
        } else {
          setProperty("height", null);
        }
        position == null ? null : position.apply(setProperty);
        if (dart.test(useCssTransform)) {
          let buffer = new core.StringBuffer.new();
          if (left != null) {
            setProperty("left", "0");
            buffer.write("translateX(" + dart.str(left[$round]()) + "px) ");
          } else {
            setProperty("left", null);
          }
          if (top != null) {
            setProperty("top", "0");
            buffer.write("translateY(" + dart.str(top[$round]()) + "px)");
          } else {
            setProperty("top", null);
          }
          setProperty("transform", buffer.toString());
          setProperty("-webkit-transform", buffer.toString());
          if (dart.test(buffer.isNotEmpty)) {
            setProperty("transform", buffer.toString());
            setProperty("-webkit-transform", buffer.toString());
          }
        } else {
          if (left != null) {
            setProperty("left", left === 0 ? "0" : dart.str(left) + "px");
          } else {
            setProperty("left", null);
          }
          if (top != null) {
            setProperty("top", top === 0 ? "0" : dart.str(top) + "px");
          } else {
            setProperty("top", null);
          }
          setProperty("transform", null);
          setProperty("-webkit-transform", null);
        }
        if (right != null) {
          setProperty("right", right === 0 ? "0" : dart.str(right) + "px");
        } else {
          setProperty("right", null);
        }
        if (bottom != null) {
          setProperty("bottom", bottom === 0 ? "0" : dart.str(bottom) + "px");
        } else {
          setProperty("bottom", null);
        }
        if (zIndex != null) {
          setProperty("z-index", dart.str(zIndex));
        } else {
          setProperty("z-index", null);
        }
        if (visibility != null && dart.equals(visibility, laminate__enums__visibility.Visibility.Visible)) {
          visibility.apply(setProperty);
        }
      }
    }
    (RulerBase.new = function() {
      this[_addedCssClasses] = new (ExpandoOfListOfString()).new();
    }).prototype = RulerBase.prototype;
    dart.addTypeTests(RulerBase);
    RulerBase.prototype[_is_RulerBase_default] = true;
    RulerBase[dart.implements] = () => [RulerOfE()];
    dart.setMethodSignature(RulerBase, () => ({
      __proto__: dart.getMethods(RulerBase.__proto__),
      measure: dart.fnType(async.Future$(math.Rectangle$(core.num)), [core.Object], {offset: core.bool}),
      track: dart.fnType(async.Stream$(math.Rectangle$(core.num)), [core.Object]),
      update: dart.fnType(async.Future$(dart.void), [core.Object], {cssClasses: core.List$(core.String), visibility: laminate__enums__visibility.Visibility, position: laminate__enums__position.Position, width: core.num, height: core.num, left: core.num, top: core.num, right: core.num, bottom: core.num, zIndex: core.num, useCssTransform: core.bool}),
      updateSync: dart.fnType(dart.void, [core.Object], {cssClasses: core.List$(core.String), visibility: laminate__enums__visibility.Visibility, position: laminate__enums__position.Position, width: core.num, height: core.num, left: core.num, top: core.num, right: core.num, bottom: core.num, zIndex: core.num, useCssTransform: core.bool})
    }));
    dart.setFieldSignature(RulerBase, () => ({
      __proto__: dart.getFields(RulerBase.__proto__),
      [_addedCssClasses]: dart.finalFieldType(ExpandoOfListOfString())
    }));
    return RulerBase;
  });
  src__laminate__ruler__ruler_interface.RulerBase = src__laminate__ruler__ruler_interface.RulerBase$();
  dart.addTypeTests(src__laminate__ruler__ruler_interface.RulerBase, _is_RulerBase_default);
  dart.trackLibraries("packages/angular_components/src/laminate/ruler/ruler_interface.ddc", {
    "package:angular_components/src/laminate/ruler/ruler_interface.dart": src__laminate__ruler__ruler_interface
  }, '{"version":3,"sourceRoot":"","sources":["ruler_interface.dart"],"names":[],"mappings":"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","file":"ruler_interface.ddc.js"}');
  // Exports:
  return {
    src__laminate__ruler__ruler_interface: src__laminate__ruler__ruler_interface
  };
});

//# sourceMappingURL=ruler_interface.ddc.js.map
