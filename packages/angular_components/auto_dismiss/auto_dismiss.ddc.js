define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, events, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const auto_dismiss__auto_dismiss = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  const _zone = Symbol('_zone');
  const _dismissEvents = Symbol('_dismissEvents');
  const _ignoreEvents = Symbol('_ignoreEvents');
  const _autoDismissable = Symbol('_autoDismissable');
  const _listenForEvents = Symbol('_listenForEvents');
  auto_dismiss__auto_dismiss.AutoDismissDirective = class AutoDismissDirective extends core.Object {
    get autoDismissable() {
      return this[_autoDismissable];
    }
    set autoDismissable(b) {
      this[_autoDismissable] = b;
      this[_ignoreEvents] = this[_autoDismissable];
      this[_dismissEvents].first.then(dart.dynamic, dart.bind(this, _listenForEvents));
      this[_zone].runOutsideAngular(dart.void, dart.fn(() => async.Timer.run(dart.bind(this, _listenForEvents)), VoidTovoid()));
    }
    get dismiss() {
      return this[_dismissEvents].where(dart.fn(_ => dart.test(this[_autoDismissable]) && !dart.test(this[_ignoreEvents]), dynamicTobool()));
    }
    [_listenForEvents](_) {
      if (_ === void 0) _ = null;
      return this[_ignoreEvents] = false;
    }
  };
  (auto_dismiss__auto_dismiss.AutoDismissDirective.new = function(element, zone) {
    this[_ignoreEvents] = false;
    this[_autoDismissable] = false;
    this[_zone] = zone;
    this[_dismissEvents] = utils__browser__events__events.triggersOutside(element);
  }).prototype = auto_dismiss__auto_dismiss.AutoDismissDirective.prototype;
  dart.addTypeTests(auto_dismiss__auto_dismiss.AutoDismissDirective);
  dart.setMethodSignature(auto_dismiss__auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getMethods(auto_dismiss__auto_dismiss.AutoDismissDirective.__proto__),
    [_listenForEvents]: dart.fnType(dart.dynamic, [], [dart.dynamic])
  }));
  dart.setGetterSignature(auto_dismiss__auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getGetters(auto_dismiss__auto_dismiss.AutoDismissDirective.__proto__),
    autoDismissable: core.bool,
    dismiss: async.Stream
  }));
  dart.setSetterSignature(auto_dismiss__auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getSetters(auto_dismiss__auto_dismiss.AutoDismissDirective.__proto__),
    autoDismissable: core.bool
  }));
  dart.setFieldSignature(auto_dismiss__auto_dismiss.AutoDismissDirective, () => ({
    __proto__: dart.getFields(auto_dismiss__auto_dismiss.AutoDismissDirective.__proto__),
    [_dismissEvents]: dart.finalFieldType(async.Stream),
    [_zone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_ignoreEvents]: dart.fieldType(core.bool),
    [_autoDismissable]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/auto_dismiss/auto_dismiss.ddc", {
    "package:angular_components/auto_dismiss/auto_dismiss.dart": auto_dismiss__auto_dismiss
  }, '{"version":3,"sourceRoot":"","sources":["auto_dismiss.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;YA2C8B,uBAAgB;;wBAIxB,CAAM;AACxB,4BAAgB,GAAG,CAAC;AAKpB,yBAAa,GAAG,sBAAgB;AAChC,0BAAc,MAAM,KAAK,eAAC,iCAAgB;AAG1C,iBAAK,kBAAkB,YAAC,cAAM,WAAK,IAAI,CAAC,iCAAgB;IAC1D;;YAMI,qBAAc,MAAM,CAAC,QAAC,CAAC,IAAsB,UAAjB,sBAAgB,gBAAK,mBAAa;IAAC;uBAEjD,CAAC;wBAAD;YAAO,oBAAa,GAAG;IAAK;;kEA5BzB,OAAmB;IAGnC,mBAAa,GAAG;IAChB,sBAAgB,GAAG;IAJuB,WAAK;IAC9C,oBAAc,GAAG,8CAAe,CAAC,OAAO;EAAC","file":"auto_dismiss.ddc.js"}');
  // Exports:
  return {
    auto_dismiss__auto_dismiss: auto_dismiss__auto_dismiss
  };
});

//# sourceMappingURL=auto_dismiss.ddc.js.map
