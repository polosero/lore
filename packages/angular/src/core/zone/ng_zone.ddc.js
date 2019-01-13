define(['dart_sdk', 'packages/stack_trace/stack_trace', 'packages/logging/logging'], function(dart_sdk, stack_trace, logging) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__chain = stack_trace.src__chain;
  const src__trace = stack_trace.src__trace;
  const logging$ = logging.logging;
  const _root = Object.create(null);
  const src__core__zone__ng_zone = Object.create(_root);
  const src__facade__exception_handler = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $remove = dartx.remove;
  const $isNotEmpty = dartx.isNotEmpty;
  const $add = dartx.add;
  const $join = dartx.join;
  const $toString = dartx.toString;
  let StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  let StreamControllerOfNgZoneError = () => (StreamControllerOfNgZoneError = dart.constFn(async.StreamController$(src__core__zone__ng_zone.NgZoneError)))();
  let JSArrayOf_WrappedTimer = () => (JSArrayOf_WrappedTimer = dart.constFn(_interceptors.JSArray$(src__core__zone__ng_zone._WrappedTimer)))();
  let VoidToZone = () => (VoidToZone = dart.constFn(dart.fnType(async.Zone, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TraceToString = () => (TraceToString = dart.constFn(dart.fnType(core.String, [src__trace.Trace])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ListOf_WrappedTimer = () => (ListOf_WrappedTimer = dart.constFn(core.List$(src__core__zone__ng_zone._WrappedTimer)))();
  const _thisZoneKey = Symbol('_thisZoneKey');
  const _onTurnStart = Symbol('_onTurnStart');
  const _onMicrotaskEmpty = Symbol('_onMicrotaskEmpty');
  const _onTurnDone = Symbol('_onTurnDone');
  const _onError = Symbol('_onError');
  const _outerZone = Symbol('_outerZone');
  const _innerZone = Symbol('_innerZone');
  const _hasPendingMicrotasks = Symbol('_hasPendingMicrotasks');
  const _hasPendingMacrotasks = Symbol('_hasPendingMacrotasks');
  const _isStable = Symbol('_isStable');
  const _nesting = Symbol('_nesting');
  const _isRunning = Symbol('_isRunning');
  const _disposed = Symbol('_disposed');
  const _pendingMicrotasks = Symbol('_pendingMicrotasks');
  const _pendingTimers = Symbol('_pendingTimers');
  const _createInnerZone = Symbol('_createInnerZone');
  const _onErrorWithLongStackTrace = Symbol('_onErrorWithLongStackTrace');
  const _onErrorWithoutLongStackTrace = Symbol('_onErrorWithoutLongStackTrace');
  const _scheduleMicrotask = Symbol('_scheduleMicrotask');
  const _run = Symbol('_run');
  const _runUnary = Symbol('_runUnary');
  const _runBinary = Symbol('_runBinary');
  const _createTimer = Symbol('_createTimer');
  const _setMicrotask = Symbol('_setMicrotask');
  const _onLeave = Symbol('_onLeave');
  const _onEnter = Symbol('_onEnter');
  const _checkStable = Symbol('_checkStable');
  const _setMacrotask = Symbol('_setMacrotask');
  const _duration = Symbol('_duration');
  const _longestPendingTimer = Symbol('_longestPendingTimer');
  src__core__zone__ng_zone.NgZone = class NgZone extends core.Object {
    static isInAngularZone() {
      return async.Zone.current._get(src__core__zone__ng_zone.NgZone._anyZoneKey) === true;
    }
    static assertInAngularZone() {
      if (!dart.test(src__core__zone__ng_zone.NgZone.isInAngularZone())) {
        dart.throw(core.Exception.new("Expected to be in Angular Zone, but it is not!"));
      }
    }
    static assertNotInAngularZone() {
      if (dart.test(src__core__zone__ng_zone.NgZone.isInAngularZone())) {
        dart.throw(core.Exception.new("Expected to not be in Angular Zone, but it is!"));
      }
    }
    get inInnerZone() {
      return dart.equals(async.Zone.current, this[_innerZone]);
    }
    get inOuterZone() {
      return dart.equals(async.Zone.current, this[_outerZone]);
    }
    [_createInnerZone](zone, opts) {
      let handleUncaughtError = opts && 'handleUncaughtError' in opts ? opts.handleUncaughtError : null;
      return zone.fork({specification: async.ZoneSpecification.new({scheduleMicrotask: dart.bind(this, _scheduleMicrotask), run: dart.bind(this, _run), runUnary: dart.bind(this, _runUnary), runBinary: dart.bind(this, _runBinary), handleUncaughtError: handleUncaughtError, createTimer: dart.bind(this, _createTimer)}), zoneValues: new _js_helper.LinkedMap.from([this[_thisZoneKey], true, src__core__zone__ng_zone.NgZone._anyZoneKey, true])});
    }
    [_scheduleMicrotask](self, parent, zone, fn) {
      if (this[_pendingMicrotasks] === 0) {
        this[_setMicrotask](true);
      }
      this[_pendingMicrotasks] = dart.notNull(this[_pendingMicrotasks]) + 1;
      let safeMicrotask = () => {
        try {
          fn();
        } finally {
          this[_pendingMicrotasks] = dart.notNull(this[_pendingMicrotasks]) - 1;
          if (this[_pendingMicrotasks] === 0) {
            this[_setMicrotask](false);
          }
        }
      };
      dart.fn(safeMicrotask, VoidToNull());
      parent.scheduleMicrotask(zone, safeMicrotask);
    }
    [_run](R, self, parent, zone, fn) {
      return parent.run(R, zone, dart.fn(() => {
        try {
          this[_onEnter]();
          return fn();
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(R, [])));
    }
    [_runUnary](R, T, self, parent, zone, fn, arg) {
      return parent.runUnary(R, T, zone, dart.fn(arg => {
        try {
          this[_onEnter]();
          return fn(arg);
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(R, [T])), arg);
    }
    [_runBinary](R, T1, T2, self, parent, zone, fn, arg1, arg2) {
      return parent.runBinary(R, T1, T2, zone, dart.fn((arg1, arg2) => {
        try {
          this[_onEnter]();
          return fn(arg1, arg2);
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(R, [T1, T2])), arg1, arg2);
    }
    [_onEnter]() {
      this[_nesting] = dart.notNull(this[_nesting]) + 1;
      if (dart.test(this[_isStable])) {
        this[_isStable] = false;
        this[_isRunning] = true;
        this[_onTurnStart].add(null);
      }
    }
    [_onLeave]() {
      this[_nesting] = dart.notNull(this[_nesting]) - 1;
      this[_checkStable]();
    }
    [_onErrorWithLongStackTrace](error, chain) {
      let traces = chain.terse.traces[$map](core.String, dart.fn(t => dart.toString(t), TraceToString()))[$toList]();
      this[_onError].add(new src__core__zone__ng_zone.NgZoneError.new(error, traces));
    }
    [_onErrorWithoutLongStackTrace](self, parent, zone, error, trace) {
      this[_onError].add(new src__core__zone__ng_zone.NgZoneError.new(error, [dart.toString(trace)]));
    }
    [_createTimer](self, parent, zone, duration, fn) {
      let wrappedTimer = null;
      let onDone = () => {
        this[_pendingTimers][$remove](wrappedTimer);
        this[_setMacrotask](this[_pendingTimers][$isNotEmpty]);
      };
      dart.fn(onDone, VoidToNull());
      let callback = () => {
        try {
          fn();
        } finally {
          onDone();
        }
      };
      dart.fn(callback, VoidToNull());
      let timer = parent.createTimer(zone, duration, callback);
      wrappedTimer = new src__core__zone__ng_zone._WrappedTimer.new(timer, duration, onDone);
      this[_pendingTimers][$add](wrappedTimer);
      this[_setMacrotask](true);
      return wrappedTimer;
    }
    get [_longestPendingTimer]() {
      let duration = core.Duration.zero;
      for (let timer of this[_pendingTimers]) {
        if (dart.test(timer[_duration]['>'](duration))) {
          duration = timer[_duration];
        }
      }
      return duration;
    }
    [_setMicrotask](hasMicrotasks) {
      this[_hasPendingMicrotasks] = hasMicrotasks;
      this[_checkStable]();
    }
    [_setMacrotask](hasMacrotasks) {
      this[_hasPendingMacrotasks] = hasMacrotasks;
    }
    [_checkStable]() {
      if (this[_nesting] === 0) {
        if (!dart.test(this[_hasPendingMicrotasks]) && !dart.test(this[_isStable])) {
          try {
            this[_nesting] = dart.notNull(this[_nesting]) + 1;
            this[_isRunning] = false;
            if (!dart.test(this[_disposed])) this[_onMicrotaskEmpty].add(null);
          } finally {
            this[_nesting] = dart.notNull(this[_nesting]) - 1;
            if (!dart.test(this[_hasPendingMicrotasks])) {
              try {
                this.runOutsideAngular(core.Null, dart.fn(() => {
                  if (!dart.test(this[_disposed])) {
                    this[_onTurnDone].add(null);
                  }
                }, VoidToNull()));
              } finally {
                this[_isStable] = true;
              }
            }
          }
        }
      }
    }
    get hasPendingMicrotasks() {
      return this[_hasPendingMicrotasks];
    }
    get hasPendingMacrotasks() {
      return this[_hasPendingMacrotasks];
    }
    run(R, callback) {
      return this[_innerZone].run(R, callback);
    }
    runGuarded(callback) {
      return this[_innerZone].runGuarded(callback);
    }
    runOutsideAngular(R, callback) {
      return this[_outerZone].run(R, callback);
    }
    get isRunning() {
      return this[_isRunning];
    }
    get onError() {
      return this[_onError].stream;
    }
    get onMicrotaskEmpty() {
      return this[_onMicrotaskEmpty].stream;
    }
    get onEventDone() {
      return this[_onMicrotaskEmpty].stream;
    }
    get onTurnStart() {
      return this[_onTurnStart].stream;
    }
    get onTurnDone() {
      return this[_onTurnDone].stream;
    }
    runAfterChangesObserved(callback) {
      if (dart.test(this.isRunning)) {
        this.onTurnDone.first.whenComplete(dart.fn(() => async.scheduleMicrotask(callback), VoidTovoid()));
      } else {
        async.scheduleMicrotask(callback);
      }
    }
    dispose() {
      this[_disposed] = true;
    }
  };
  (src__core__zone__ng_zone.NgZone.new = function(opts) {
    let enableLongStackTrace = opts && 'enableLongStackTrace' in opts ? opts.enableLongStackTrace : false;
    this[_thisZoneKey] = new core.Object.new();
    this[_onTurnStart] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onMicrotaskEmpty] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onTurnDone] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onError] = StreamControllerOfNgZoneError().broadcast({sync: true});
    this[_outerZone] = null;
    this[_innerZone] = null;
    this[_hasPendingMicrotasks] = false;
    this[_hasPendingMacrotasks] = false;
    this[_isStable] = true;
    this[_nesting] = 0;
    this[_isRunning] = false;
    this[_disposed] = false;
    this[_pendingMicrotasks] = 0;
    this[_pendingTimers] = JSArrayOf_WrappedTimer().of([]);
    this[_outerZone] = async.Zone.current;
    if (dart.test(enableLongStackTrace)) {
      this[_innerZone] = src__chain.Chain.capture(async.Zone, dart.fn(() => this[_createInnerZone](async.Zone.current), VoidToZone()), {onError: dart.bind(this, _onErrorWithLongStackTrace)});
    } else {
      this[_innerZone] = this[_createInnerZone](async.Zone.current, {handleUncaughtError: dart.bind(this, _onErrorWithoutLongStackTrace)});
    }
  }).prototype = src__core__zone__ng_zone.NgZone.prototype;
  dart.addTypeTests(src__core__zone__ng_zone.NgZone);
  dart.setMethodSignature(src__core__zone__ng_zone.NgZone, () => ({
    __proto__: dart.getMethods(src__core__zone__ng_zone.NgZone.__proto__),
    [_createInnerZone]: dart.fnType(async.Zone, [async.Zone], {handleUncaughtError: dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.Object, core.StackTrace])}),
    [_scheduleMicrotask]: dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(dart.void, [])]),
    [_run]: dart.gFnType(R => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [])]]),
    [_runUnary]: dart.gFnType((R, T) => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T]), T]]),
    [_runBinary]: dart.gFnType((R, T1, T2) => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T1, T2]), T1, T2]]),
    [_onEnter]: dart.fnType(dart.void, []),
    [_onLeave]: dart.fnType(dart.void, []),
    [_onErrorWithLongStackTrace]: dart.fnType(dart.void, [dart.dynamic, src__chain.Chain]),
    [_onErrorWithoutLongStackTrace]: dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, dart.dynamic, core.StackTrace]),
    [_createTimer]: dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, dart.fnType(dart.void, [])]),
    [_setMicrotask]: dart.fnType(dart.void, [core.bool]),
    [_setMacrotask]: dart.fnType(dart.void, [core.bool]),
    [_checkStable]: dart.fnType(dart.void, []),
    run: dart.gFnType(R => [R, [dart.fnType(R, [])]]),
    runGuarded: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    runOutsideAngular: dart.gFnType(R => [R, [dart.fnType(R, [])]]),
    runAfterChangesObserved: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__zone__ng_zone.NgZone, () => ({
    __proto__: dart.getGetters(src__core__zone__ng_zone.NgZone.__proto__),
    inInnerZone: core.bool,
    inOuterZone: core.bool,
    [_longestPendingTimer]: core.Duration,
    hasPendingMicrotasks: core.bool,
    hasPendingMacrotasks: core.bool,
    isRunning: core.bool,
    onError: async.Stream$(src__core__zone__ng_zone.NgZoneError),
    onMicrotaskEmpty: async.Stream$(dart.void),
    onEventDone: async.Stream$(dart.void),
    onTurnStart: async.Stream$(dart.void),
    onTurnDone: async.Stream$(dart.void)
  }));
  dart.setFieldSignature(src__core__zone__ng_zone.NgZone, () => ({
    __proto__: dart.getFields(src__core__zone__ng_zone.NgZone.__proto__),
    [_thisZoneKey]: dart.finalFieldType(core.Object),
    [_onTurnStart]: dart.finalFieldType(StreamControllerOfvoid()),
    [_onMicrotaskEmpty]: dart.finalFieldType(StreamControllerOfvoid()),
    [_onTurnDone]: dart.finalFieldType(StreamControllerOfvoid()),
    [_onError]: dart.finalFieldType(StreamControllerOfNgZoneError()),
    [_outerZone]: dart.fieldType(async.Zone),
    [_innerZone]: dart.fieldType(async.Zone),
    [_hasPendingMicrotasks]: dart.fieldType(core.bool),
    [_hasPendingMacrotasks]: dart.fieldType(core.bool),
    [_isStable]: dart.fieldType(core.bool),
    [_nesting]: dart.fieldType(core.int),
    [_isRunning]: dart.fieldType(core.bool),
    [_disposed]: dart.fieldType(core.bool),
    [_pendingMicrotasks]: dart.fieldType(core.int),
    [_pendingTimers]: dart.finalFieldType(ListOf_WrappedTimer())
  }));
  dart.defineLazy(src__core__zone__ng_zone.NgZone, {
    /*src__core__zone__ng_zone.NgZone._anyZoneKey*/get _anyZoneKey() {
      return new core.Object.new();
    }
  });
  src__core__zone__ng_zone.longestPendingTimer = function(zone) {
    return zone[_longestPendingTimer];
  };
  src__core__zone__ng_zone.hasPendingMacrotasks = function(zone) {
    return zone[_hasPendingMacrotasks];
  };
  src__core__zone__ng_zone.inAngularZone = function(ngZone, zone) {
    return async.Zone.current._get(ngZone[_thisZoneKey]) === true;
  };
  const _timer = Symbol('_timer');
  const _onCancel = Symbol('_onCancel');
  src__core__zone__ng_zone._WrappedTimer = class _WrappedTimer extends core.Object {
    cancel() {
      this[_onCancel]();
      this[_timer].cancel();
    }
    get isActive() {
      return this[_timer].isActive;
    }
    get tick() {
      return this[_timer].tick;
    }
  };
  (src__core__zone__ng_zone._WrappedTimer.new = function(timer, duration, onCancel) {
    this[_timer] = timer;
    this[_duration] = duration;
    this[_onCancel] = onCancel;
  }).prototype = src__core__zone__ng_zone._WrappedTimer.prototype;
  dart.addTypeTests(src__core__zone__ng_zone._WrappedTimer);
  src__core__zone__ng_zone._WrappedTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(src__core__zone__ng_zone._WrappedTimer, () => ({
    __proto__: dart.getMethods(src__core__zone__ng_zone._WrappedTimer.__proto__),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__zone__ng_zone._WrappedTimer, () => ({
    __proto__: dart.getGetters(src__core__zone__ng_zone._WrappedTimer.__proto__),
    isActive: core.bool,
    tick: core.int
  }));
  dart.setFieldSignature(src__core__zone__ng_zone._WrappedTimer, () => ({
    __proto__: dart.getFields(src__core__zone__ng_zone._WrappedTimer.__proto__),
    [_timer]: dart.finalFieldType(async.Timer),
    [_duration]: dart.finalFieldType(core.Duration),
    [_onCancel]: dart.finalFieldType(VoidTovoid())
  }));
  src__core__zone__ng_zone.NgZoneError = class NgZoneError extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
  };
  (src__core__zone__ng_zone.NgZoneError.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
  }).prototype = src__core__zone__ng_zone.NgZoneError.prototype;
  dart.addTypeTests(src__core__zone__ng_zone.NgZoneError);
  const error$ = Symbol("NgZoneError.error");
  const stackTrace$ = Symbol("NgZoneError.stackTrace");
  dart.setFieldSignature(src__core__zone__ng_zone.NgZoneError, () => ({
    __proto__: dart.getFields(src__core__zone__ng_zone.NgZoneError.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stackTrace: dart.finalFieldType(core.List)
  }));
  const _logger = Symbol('_logger');
  src__facade__exception_handler.ExceptionHandler = class ExceptionHandler extends core.Object {
    static _longStackTrace(stackTrace) {
      return core.Iterable.is(stackTrace) ? stackTrace[$join]("\n\n-----async gap-----\n") : dart.toString(stackTrace);
    }
    static exceptionToString(exception, stackTrace, reason) {
      if (stackTrace === void 0) stackTrace = null;
      if (reason === void 0) reason = null;
      let buffer = new core.StringBuffer.new();
      buffer.writeln("EXCEPTION: " + dart.str(exception));
      if (stackTrace != null) {
        buffer.writeln("STACKTRACE: ");
        buffer.writeln(src__facade__exception_handler.ExceptionHandler._longStackTrace(stackTrace));
      }
      if (reason != null) {
        buffer.writeln("REASON: " + dart.str(reason));
      }
      return buffer.toString();
    }
    call(exception, stackTrace, reason) {
      if (stackTrace === void 0) stackTrace = null;
      if (reason === void 0) reason = null;
      this[_logger].severe(src__facade__exception_handler.ExceptionHandler.exceptionToString(exception, stackTrace, reason));
    }
  };
  (src__facade__exception_handler.ExceptionHandler.new = function(logger) {
    this[_logger] = logger;
  }).prototype = src__facade__exception_handler.ExceptionHandler.prototype;
  dart.addTypeTests(src__facade__exception_handler.ExceptionHandler);
  dart.setMethodSignature(src__facade__exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getMethods(src__facade__exception_handler.ExceptionHandler.__proto__),
    call: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, core.String])
  }));
  dart.setFieldSignature(src__facade__exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getFields(src__facade__exception_handler.ExceptionHandler.__proto__),
    [_logger]: dart.finalFieldType(logging$.Logger)
  }));
  dart.trackLibraries("packages/angular/src/core/zone/ng_zone.ddc", {
    "package:angular/src/core/zone/ng_zone.dart": src__core__zone__ng_zone,
    "package:angular/src/facade/exception_handler.dart": src__facade__exception_handler
  }, '{"version":3,"sourceRoot":"","sources":["ng_zone.dart","../../facade/exception_handler.dart"],"names":[],"mappings":"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","file":"ng_zone.ddc.js"}');
  // Exports:
  return {
    src__core__zone__ng_zone: src__core__zone__ng_zone,
    src__facade__exception_handler: src__facade__exception_handler
  };
});

//# sourceMappingURL=ng_zone.ddc.js.map
