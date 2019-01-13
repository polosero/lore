define(['dart_sdk', 'packages/angular_components/utils/rate_limit_utils/rate_limit_utils', 'packages/angular_components/utils/disposer/disposer', 'packages/collection/src/priority_queue'], function(dart_sdk, rate_limit_utils, disposer, priority_queue) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__rate_limit_utils__rate_limit_utils = rate_limit_utils.utils__rate_limit_utils__rate_limit_utils;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__priority_queue = priority_queue.src__priority_queue;
  const _root = Object.create(null);
  const src__utils__async__async_update_scheduler = Object.create(_root);
  const src__utils__async__async_where = Object.create(_root);
  const src__utils__async__rate_limit = Object.create(_root);
  const src__utils__async__debounce_stream = Object.create(_root);
  const src__utils__async__disposable_future = Object.create(_root);
  const src__utils__async__lazy_stream_controller = Object.create(_root);
  const src__utils__async__priority_stream_iterator = Object.create(_root);
  const src__utils__async__simple_stream = Object.create(_root);
  const src__utils__async__throttle_stream = Object.create(_root);
  const src__utils__async__zoned_async = Object.create(_root);
  const $compareTo = dartx.compareTo;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $keys = dartx.keys;
  const $sort = dartx.sort;
  const $add = dartx.add;
  const $removeAt = dartx.removeAt;
  const $isNotEmpty = dartx.isNotEmpty;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let FnAndDurationToFn = () => (FnAndDurationToFn = dart.constFn(dart.fnType(dynamicTodynamic(), [dynamicTodynamic(), core.Duration])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let EventSinkTo_RateLimitSink = () => (EventSinkTo_RateLimitSink = dart.constFn(dart.fnType(src__utils__async__rate_limit._RateLimitSink, [async.EventSink])))();
  let FnAndDurationToFn$ = () => (FnAndDurationToFn$ = dart.constFn(dart.gFnType(T => [dart.fnType(async.Future, [T]), [dart.fnType(dart.dynamic, [T]), core.Duration]])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let StreamOfNull = () => (StreamOfNull = dart.constFn(async.Stream$(core.Null)))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let JSArrayOfSimpleStream = () => (JSArrayOfSimpleStream = dart.constFn(_interceptors.JSArray$(src__utils__async__simple_stream.SimpleStream)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let FnTovoid = () => (FnTovoid = dart.constFn(dart.fnType(dart.void, [VoidTodynamic()])))();
  let FnAndDurationToFn$0 = () => (FnAndDurationToFn$0 = dart.constFn(dart.gFnType(T => [dart.fnType(dart.dynamic, [T]), [dart.fnType(dart.dynamic, [T]), core.Duration]])))();
  let FnTodynamic = () => (FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [VoidTodynamic()])))();
  const _updateCallback = Symbol('_updateCallback');
  const _isUpdateScheduled = Symbol('_isUpdateScheduled');
  const _onUpdateStreamController = Symbol('_onUpdateStreamController');
  src__utils__async__async_update_scheduler.AsyncUpdateScheduler = class AsyncUpdateScheduler extends core.Object {
    get onUpdate() {
      if (this[_onUpdateStreamController] == null) {
        this[_onUpdateStreamController] = async.StreamController.broadcast({sync: true});
      }
      return this[_onUpdateStreamController].stream;
    }
    scheduleUpdate() {
      if (!dart.test(this[_isUpdateScheduled])) {
        this[_isUpdateScheduled] = true;
        async.scheduleMicrotask(dart.fn(() => {
          this[_isUpdateScheduled] = false;
          if (this[_updateCallback] != null) {
            this[_updateCallback]();
          }
          if (this[_onUpdateStreamController] != null) {
            this[_onUpdateStreamController].add(null);
          }
        }, VoidToNull()));
      }
    }
  };
  (src__utils__async__async_update_scheduler.AsyncUpdateScheduler.new = function(updateCallback) {
    if (updateCallback === void 0) updateCallback = null;
    this[_isUpdateScheduled] = false;
    this[_onUpdateStreamController] = null;
    this[_updateCallback] = updateCallback;
  }).prototype = src__utils__async__async_update_scheduler.AsyncUpdateScheduler.prototype;
  dart.addTypeTests(src__utils__async__async_update_scheduler.AsyncUpdateScheduler);
  dart.setMethodSignature(src__utils__async__async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getMethods(src__utils__async__async_update_scheduler.AsyncUpdateScheduler.__proto__),
    scheduleUpdate: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__utils__async__async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getGetters(src__utils__async__async_update_scheduler.AsyncUpdateScheduler.__proto__),
    onUpdate: async.Stream
  }));
  dart.setFieldSignature(src__utils__async__async_update_scheduler.AsyncUpdateScheduler, () => ({
    __proto__: dart.getFields(src__utils__async__async_update_scheduler.AsyncUpdateScheduler.__proto__),
    [_updateCallback]: dart.finalFieldType(VoidTovoid()),
    [_isUpdateScheduled]: dart.fieldType(core.bool),
    [_onUpdateStreamController]: dart.fieldType(async.StreamController)
  }));
  src__utils__async__async_where.asyncWhere = function(T, items, filter) {
    return new (async._AsyncStarImpl$(T)).new(function* asyncWhere(stream) {
      for (let item of items) {
        if (dart.test(yield filter(item))) {
          if (stream.add(item)) return;
          yield;
        }
      }
    }).stream;
  };
  src__utils__async__async_where.asyncFirst = function(T, items, filter, opts) {
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    return src__utils__async__async_where.asyncWhere(T, items, filter).firstWhere(dart.fn(_ => true, dart.fnType(core.bool, [T])), {orElse: dart.fnType(T, [])._check(orElse)}).then(T, dart.fn(x => x, dart.fnType(T, [T])));
  };
  src__utils__async__async_where.asyncSingle = function(T, items, filter) {
    return src__utils__async__async_where.asyncWhere(T, items, filter).single;
  };
  const _outputSink = Symbol('_outputSink');
  const _duration = Symbol('_duration');
  const _rateLimitStrategy = Symbol('_rateLimitStrategy');
  const _addEvent = Symbol('_addEvent');
  src__utils__async__rate_limit._RateLimitSink = class _RateLimitSink extends core.Object {
    add(event) {
      this[_addEvent](event);
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      this[_outputSink].addError(error, stackTrace);
    }
    close() {
      this[_outputSink].close();
    }
  };
  (src__utils__async__rate_limit._RateLimitSink.new = function(outputSink, duration, rateLimitStrategy) {
    this[_addEvent] = null;
    this[_outputSink] = outputSink;
    this[_duration] = duration;
    this[_rateLimitStrategy] = rateLimitStrategy;
    this[_addEvent] = this[_rateLimitStrategy](dart.bind(this[_outputSink], 'add'), this[_duration]);
  }).prototype = src__utils__async__rate_limit._RateLimitSink.prototype;
  dart.addTypeTests(src__utils__async__rate_limit._RateLimitSink);
  src__utils__async__rate_limit._RateLimitSink[dart.implements] = () => [async.EventSink];
  dart.setMethodSignature(src__utils__async__rate_limit._RateLimitSink, () => ({
    __proto__: dart.getMethods(src__utils__async__rate_limit._RateLimitSink.__proto__),
    add: dart.fnType(dart.void, [dart.dynamic]),
    addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__utils__async__rate_limit._RateLimitSink, () => ({
    __proto__: dart.getFields(src__utils__async__rate_limit._RateLimitSink.__proto__),
    [_outputSink]: dart.finalFieldType(async.EventSink),
    [_duration]: dart.finalFieldType(core.Duration),
    [_rateLimitStrategy]: dart.finalFieldType(FnAndDurationToFn()),
    [_addEvent]: dart.fieldType(dynamicTovoid())
  }));
  const _is_RateLimitTransformer_default = Symbol('_is_RateLimitTransformer_default');
  src__utils__async__rate_limit.RateLimitTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class RateLimitTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return StreamOfT().eventTransformed(stream, dart.fn(sink => new src__utils__async__rate_limit._RateLimitSink.new(sink, this[_duration], this[_rateLimitStrategy]), EventSinkTo_RateLimitSink()));
      }
    }
    (RateLimitTransformer.new = function(duration, rateLimitStrategy) {
      this[_duration] = duration;
      this[_rateLimitStrategy] = rateLimitStrategy;
      RateLimitTransformer.__proto__.new.call(this);
    }).prototype = RateLimitTransformer.prototype;
    dart.addTypeTests(RateLimitTransformer);
    RateLimitTransformer.prototype[_is_RateLimitTransformer_default] = true;
    dart.setMethodSignature(RateLimitTransformer, () => ({
      __proto__: dart.getMethods(RateLimitTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(RateLimitTransformer, () => ({
      __proto__: dart.getFields(RateLimitTransformer.__proto__),
      [_duration]: dart.finalFieldType(core.Duration),
      [_rateLimitStrategy]: dart.finalFieldType(FnAndDurationToFn())
    }));
    return RateLimitTransformer;
  });
  src__utils__async__rate_limit.RateLimitTransformer = src__utils__async__rate_limit.RateLimitTransformer$();
  dart.addTypeTests(src__utils__async__rate_limit.RateLimitTransformer, _is_RateLimitTransformer_default);
  src__utils__async__debounce_stream.debounceStream = function(S, T, duration) {
    return new (src__utils__async__rate_limit.RateLimitTransformer$(S, T)).new(duration, dart.gbind(dart.fn(utils__rate_limit_utils__rate_limit_utils.debounce, FnAndDurationToFn$()), dart.dynamic));
  };
  const _delegateFuture = Symbol('_delegateFuture');
  const _disposeFn = Symbol('_disposeFn');
  const _wasDisposed = Symbol('_wasDisposed');
  const _is_DisposableFuture_default = Symbol('_is_DisposableFuture_default');
  src__utils__async__disposable_future.DisposableFuture$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let DisposableFutureOfT = () => (DisposableFutureOfT = dart.constFn(src__utils__async__disposable_future.DisposableFuture$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class DisposableFuture extends core.Object {
      static first(stream) {
        let completer = CompleterOfT().sync();
        let subscription = null;
        subscription = stream.listen(dart.fn(value => {
          subscription.cancel();
          completer.complete(value);
        }, TToNull()), {onError: dart.bind(completer, 'completeError')});
        return new (DisposableFutureOfT()).new(completer.future, dart.bind(subscription, 'cancel'));
      }
      static last(stream) {
        let completer = CompleterOfT().sync();
        let subscription = null;
        let lastValue = null;
        subscription = stream.listen(dart.fn(value => {
          lastValue = value;
        }, TToNull()), {onDone: dart.fn(() => {
            completer.complete(lastValue);
          }, VoidToNull())});
        return new (DisposableFutureOfT()).new(completer.future, dart.bind(subscription, 'cancel'));
      }
      static fromFuture(future) {
        return DisposableFutureOfT().first(future.asStream());
      }
      static fromValue(value) {
        let completer = CompleterOfT().sync();
        let cancelled = false;
        async.scheduleMicrotask(dart.fn(() => {
          if (!cancelled) {
            completer.complete(value);
          }
        }, VoidToNull()));
        return new (DisposableFutureOfT()).new(completer.future, dart.fn(() => {
          cancelled = true;
        }, VoidToNull()));
      }
      dispose() {
        this[_wasDisposed] = true;
        this[_disposeFn]();
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return new (src__utils__async__disposable_future.DisposableFuture$(S)).new(this[_delegateFuture].then(S, dart.fn(v => {
          if (!dart.test(this[_wasDisposed])) {
            return onValue(v);
          }
          return null;
        }, dart.fnType(async.FutureOr$(S), [T])), {onError: onError}), this[_disposeFn]);
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_delegateFuture].catchError(onError, {test: test});
      }
      whenComplete(action) {
        return this[_delegateFuture].whenComplete(dart.fn(() => {
          if (!dart.test(this[_wasDisposed])) {
            action();
          }
        }, VoidToNull()));
      }
      asStream() {
        return this[_delegateFuture].asStream();
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return this[_delegateFuture].timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
    }
    (DisposableFuture.new = function(delegateFuture, disposeFn) {
      this[_wasDisposed] = false;
      this[_delegateFuture] = delegateFuture;
      this[_disposeFn] = disposeFn;
    }).prototype = DisposableFuture.prototype;
    DisposableFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(DisposableFuture);
    DisposableFuture.prototype[_is_DisposableFuture_default] = true;
    DisposableFuture[dart.implements] = () => [FutureOfT(), utils__disposer__disposer.Disposable];
    dart.setMethodSignature(DisposableFuture, () => ({
      __proto__: dart.getMethods(DisposableFuture.__proto__),
      dispose: dart.fnType(dart.void, []),
      then: dart.gFnType(S => [src__utils__async__disposable_future.DisposableFuture$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])]),
      asStream: dart.fnType(async.Stream$(T), []),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: dart.fnType(dart.dynamic, [])})
    }));
    dart.setFieldSignature(DisposableFuture, () => ({
      __proto__: dart.getFields(DisposableFuture.__proto__),
      [_delegateFuture]: dart.finalFieldType(FutureOfT()),
      [_disposeFn]: dart.finalFieldType(VoidTovoid()),
      [_wasDisposed]: dart.fieldType(core.bool)
    }));
    return DisposableFuture;
  });
  src__utils__async__disposable_future.DisposableFuture = src__utils__async__disposable_future.DisposableFuture$();
  dart.addTypeTests(src__utils__async__disposable_future.DisposableFuture, _is_DisposableFuture_default);
  const _streamControllerFactory = Symbol('_streamControllerFactory');
  const _streamController = Symbol('_streamController');
  const _initializeLazy = Symbol('_initializeLazy');
  const _is_LazyStreamController_default = Symbol('_is_LazyStreamController_default');
  src__utils__async__lazy_stream_controller.LazyStreamController$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let VoidToStreamControllerOfT = () => (VoidToStreamControllerOfT = dart.constFn(dart.fnType(StreamControllerOfT(), [])))();
    let LazyStreamControllerOfT = () => (LazyStreamControllerOfT = dart.constFn(src__utils__async__lazy_stream_controller.LazyStreamController$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class LazyStreamController extends core.Object {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        return new (LazyStreamControllerOfT()).__(dart.fn(() => StreamControllerOfT().new({onListen: onListen, onCancel: onCancel, sync: sync}), VoidToStreamControllerOfT()));
      }
      static broadcast(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        return new (LazyStreamControllerOfT()).__(dart.fn(() => StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync}), VoidToStreamControllerOfT()));
      }
      [_initializeLazy]() {
        if (this[_streamController] == null) {
          this[_streamController] = this[_streamControllerFactory]();
        }
        return this[_streamController];
      }
      get isClosed() {
        return this[_streamController] != null ? this[_streamController].isClosed : false;
      }
      get hasListener() {
        return this[_streamController] != null ? this[_streamController].hasListener : false;
      }
      get isPaused() {
        return this[_streamController] != null ? this[_streamController].isPaused : false;
      }
      add(event) {
        T._check(event);
        if (this[_streamController] != null) {
          this[_streamController].add(event);
        }
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (this[_streamController] != null) {
          this[_streamController].addError(error, stackTrace);
        }
      }
      addStream(source, opts) {
        StreamOfT()._check(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        return this[_initializeLazy]().addStream(source, {cancelOnError: cancelOnError});
      }
      close() {
        if (this[_streamController] != null) {
          return this[_streamController].close();
        }
        return async.Future.value();
      }
      get done() {
        return this[_initializeLazy]().done;
      }
      get sink() {
        return this[_initializeLazy]().sink;
      }
      get stream() {
        return this[_initializeLazy]().stream;
      }
      set onListen(onListenHandler) {
        this[_initializeLazy]().onListen = onListenHandler;
      }
      get onListen() {
        return this[_initializeLazy]().onListen;
      }
      set onPause(onPauseHandler) {
        this[_initializeLazy]().onPause = onPauseHandler;
      }
      get onPause() {
        return this[_initializeLazy]().onPause;
      }
      set onResume(onResumeHandler) {
        this[_initializeLazy]().onResume = onResumeHandler;
      }
      get onResume() {
        return this[_initializeLazy]().onResume;
      }
      set onCancel(onCancelHandler) {
        this[_initializeLazy]().onCancel = onCancelHandler;
      }
      get onCancel() {
        return this[_initializeLazy]().onCancel;
      }
    }
    (LazyStreamController.__ = function(streamControllerFactory) {
      this[_streamController] = null;
      this[_streamControllerFactory] = streamControllerFactory;
    }).prototype = LazyStreamController.prototype;
    dart.addTypeTests(LazyStreamController);
    LazyStreamController.prototype[_is_LazyStreamController_default] = true;
    LazyStreamController[dart.implements] = () => [StreamControllerOfT()];
    dart.setMethodSignature(LazyStreamController, () => ({
      __proto__: dart.getMethods(LazyStreamController.__proto__),
      [_initializeLazy]: dart.fnType(async.StreamController$(T), []),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object], {cancelOnError: core.bool}),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(LazyStreamController, () => ({
      __proto__: dart.getGetters(LazyStreamController.__proto__),
      isClosed: core.bool,
      hasListener: core.bool,
      isPaused: core.bool,
      done: async.Future,
      sink: async.StreamSink$(T),
      stream: async.Stream$(T),
      onListen: dart.fnType(dart.void, []),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(LazyStreamController, () => ({
      __proto__: dart.getSetters(LazyStreamController.__proto__),
      onListen: dart.fnType(dart.void, []),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(LazyStreamController, () => ({
      __proto__: dart.getFields(LazyStreamController.__proto__),
      [_streamControllerFactory]: dart.finalFieldType(VoidToStreamControllerOfT()),
      [_streamController]: dart.fieldType(StreamControllerOfT())
    }));
    return LazyStreamController;
  });
  src__utils__async__lazy_stream_controller.LazyStreamController = src__utils__async__lazy_stream_controller.LazyStreamController$();
  dart.addTypeTests(src__utils__async__lazy_stream_controller.LazyStreamController, _is_LazyStreamController_default);
  const _iterator = Symbol('_iterator');
  const _queue = Symbol('_queue');
  const _current = Symbol('_current');
  const _next = Symbol('_next');
  const _accumulateValues = Symbol('_accumulateValues');
  const _clear = Symbol('_clear');
  const _getNextValue = Symbol('_getNextValue');
  const _is_PriorityStreamIterator_default = Symbol('_is_PriorityStreamIterator_default');
  src__utils__async__priority_stream_iterator.PriorityStreamIterator$ = dart.generic(T => {
    let StreamIteratorOfT = () => (StreamIteratorOfT = dart.constFn(async.StreamIterator$(T)))();
    let _StablePriorityQueueOfT = () => (_StablePriorityQueueOfT = dart.constFn(src__utils__async__priority_stream_iterator._StablePriorityQueue$(T)))();
    let PriorityQueueOfT = () => (PriorityQueueOfT = dart.constFn(src__priority_queue.PriorityQueue$(T)))();
    class PriorityStreamIterator extends core.Object {
      moveNext() {
        if (dart.test(this[_queue].isNotEmpty)) {
          this[_current] = this[_queue].removeFirst();
          return FutureOfbool().value(true);
        }
        this[_current] = null;
        return this[_next].then(core.bool, dart.fn(_ => {
          if (dart.test(_)) {
            this[_current] = this[_queue].removeFirst();
          }
          return _;
        }, boolTobool()));
      }
      get current() {
        return this[_current];
      }
      cancel() {
        this[_clear]();
        return this[_iterator].cancel();
      }
      [_accumulateValues]() {
        (this[_next] = this[_getNextValue]()).then(core.Null, dart.fn(_ => {
          if (dart.test(_)) {
            this[_accumulateValues]();
          }
        }, boolToNull()));
      }
      [_getNextValue]() {
        return this[_iterator].moveNext().then(core.bool, dart.fn(_ => {
          if (dart.test(_)) {
            this[_queue].add(this[_iterator].current);
          }
          return _;
        }, boolTobool()));
      }
      [_clear]() {
        this[_current] = null;
        this[_queue].clear();
      }
    }
    (PriorityStreamIterator.new = function(stream, comparison) {
      if (comparison === void 0) comparison = null;
      this[_current] = null;
      this[_next] = null;
      this[_iterator] = StreamIteratorOfT().new(stream);
      this[_queue] = new (_StablePriorityQueueOfT()).new(comparison);
      this[_accumulateValues]();
    }).prototype = PriorityStreamIterator.prototype;
    dart.addTypeTests(PriorityStreamIterator);
    PriorityStreamIterator.prototype[_is_PriorityStreamIterator_default] = true;
    PriorityStreamIterator[dart.implements] = () => [StreamIteratorOfT()];
    dart.setMethodSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getMethods(PriorityStreamIterator.__proto__),
      moveNext: dart.fnType(async.Future$(core.bool), []),
      cancel: dart.fnType(async.Future, []),
      [_accumulateValues]: dart.fnType(dart.void, []),
      [_getNextValue]: dart.fnType(async.Future$(core.bool), []),
      [_clear]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getGetters(PriorityStreamIterator.__proto__),
      current: T
    }));
    dart.setFieldSignature(PriorityStreamIterator, () => ({
      __proto__: dart.getFields(PriorityStreamIterator.__proto__),
      [_iterator]: dart.finalFieldType(StreamIteratorOfT()),
      [_queue]: dart.finalFieldType(PriorityQueueOfT()),
      [_current]: dart.fieldType(T),
      [_next]: dart.fieldType(FutureOfbool())
    }));
    return PriorityStreamIterator;
  });
  src__utils__async__priority_stream_iterator.PriorityStreamIterator = src__utils__async__priority_stream_iterator.PriorityStreamIterator$();
  dart.addTypeTests(src__utils__async__priority_stream_iterator.PriorityStreamIterator, _is_PriorityStreamIterator_default);
  const _is__StablePriorityQueue_default = Symbol('_is__StablePriorityQueue_default');
  src__utils__async__priority_stream_iterator._StablePriorityQueue$ = dart.generic(T => {
    let _OrderedComparatorOfT = () => (_OrderedComparatorOfT = dart.constFn(src__utils__async__priority_stream_iterator._OrderedComparator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class _StablePriorityQueue extends src__priority_queue.HeapPriorityQueue$(T) {
      add(el) {
        T._check(el);
        this.comparator.add(el);
        super.add(el);
      }
      addAll(elements) {
        IterableOfT()._check(elements);
        this.comparator.addAll(elements);
        super.addAll(elements);
      }
      remove(el) {
        T._check(el);
        let result = super.remove(el);
        this.comparator.remove(el);
        return result;
      }
      removeAll() {
        let result = super.removeAll();
        this.comparator.clear();
        return result;
      }
      removeFirst() {
        let el = super.removeFirst();
        this.comparator.remove(el);
        return el;
      }
      clear() {
        super.clear();
        this.comparator.clear();
      }
    }
    (_StablePriorityQueue.new = function(comparison) {
      if (comparison === void 0) comparison = null;
      _StablePriorityQueue.__.call(this, new (_OrderedComparatorOfT()).new((() => {
        let l = comparison;
        return l != null ? l : src__utils__async__priority_stream_iterator._defaultComparator(T);
      })()));
    }).prototype = _StablePriorityQueue.prototype;
    (_StablePriorityQueue.__ = function(comparator) {
      this.comparator = comparator;
      _StablePriorityQueue.__proto__.new.call(this, dart.bindCall(comparator, 'call'));
    }).prototype = _StablePriorityQueue.prototype;
    dart.addTypeTests(_StablePriorityQueue);
    _StablePriorityQueue.prototype[_is__StablePriorityQueue_default] = true;
    dart.setMethodSignature(_StablePriorityQueue, () => ({
      __proto__: dart.getMethods(_StablePriorityQueue.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setFieldSignature(_StablePriorityQueue, () => ({
      __proto__: dart.getFields(_StablePriorityQueue.__proto__),
      comparator: dart.finalFieldType(_OrderedComparatorOfT())
    }));
    return _StablePriorityQueue;
  });
  src__utils__async__priority_stream_iterator._StablePriorityQueue = src__utils__async__priority_stream_iterator._StablePriorityQueue$();
  dart.addTypeTests(src__utils__async__priority_stream_iterator._StablePriorityQueue, _is__StablePriorityQueue_default);
  src__utils__async__priority_stream_iterator._defaultComparator = function(T) {
    return dart.fn((a, b) => a[$compareTo](b), dart.fnType(core.int, [T, T]));
  };
  const _comparison = Symbol('_comparison');
  const _ordinalByElement = Symbol('_ordinalByElement');
  const _nextOrdinal = Symbol('_nextOrdinal');
  const _renumerate = Symbol('_renumerate');
  const _compareOrder = Symbol('_compareOrder');
  const _is__OrderedComparator_default = Symbol('_is__OrderedComparator_default');
  src__utils__async__priority_stream_iterator._OrderedComparator$ = dart.generic(T => {
    let LinkedMapOfT$int = () => (LinkedMapOfT$int = dart.constFn(_js_helper.LinkedMap$(T, core.int)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let TAndTToint = () => (TAndTToint = dart.constFn(dart.fnType(core.int, [T, T])))();
    let MapOfT$int = () => (MapOfT$int = dart.constFn(core.Map$(T, core.int)))();
    class _OrderedComparator extends core.Object {
      add(el) {
        T._check(el);
        this[_ordinalByElement][$_set](el, (() => {
          let x = this[_nextOrdinal];
          this[_nextOrdinal] = dart.notNull(x) + 1;
          return x;
        })());
      }
      addAll(elements) {
        IterableOfT()._check(elements);
        return elements[$forEach](dart.bind(this, 'add'));
      }
      clear() {
        this[_ordinalByElement][$clear]();
        this[_nextOrdinal] = 0;
      }
      remove(el) {
        T._check(el);
        this[_ordinalByElement][$remove](el);
        this[_renumerate]();
      }
      call(a, b) {
        T._check(a);
        T._check(b);
        let result = this[_comparison](a, b);
        return result !== 0 ? result : this[_compareOrder](a, b);
      }
      [_compareOrder](a, b) {
        T._check(a);
        T._check(b);
        if (!dart.test(this[_ordinalByElement][$containsKey](a)) || !dart.test(this[_ordinalByElement][$containsKey](b))) {
          dart.throw(new core.StateError.new("Comparing elements that weren't registered with the comparator."));
        }
        return dart.notNull(this[_ordinalByElement][$_get](a)) - dart.notNull(this[_ordinalByElement][$_get](b));
      }
      [_renumerate]() {
        if (dart.test(this[_ordinalByElement][$isEmpty])) {
          this[_nextOrdinal] = 0;
        }
        if (dart.notNull(this[_nextOrdinal]) > dart.notNull(this[_ordinalByElement][$length]) + 1000000) {
          let orderedElements = this[_ordinalByElement][$keys][$toList]({growable: false});
          orderedElements[$sort](dart.bind(this, _compareOrder));
          this.clear();
          this.addAll(orderedElements);
        }
      }
    }
    (_OrderedComparator.new = function(comparison) {
      this[_ordinalByElement] = new (LinkedMapOfT$int()).new();
      this[_nextOrdinal] = 0;
      this[_comparison] = comparison;
    }).prototype = _OrderedComparator.prototype;
    dart.addTypeTests(_OrderedComparator);
    _OrderedComparator.prototype[_is__OrderedComparator_default] = true;
    _OrderedComparator[dart.implements] = () => [core.Function];
    dart.setMethodSignature(_OrderedComparator, () => ({
      __proto__: dart.getMethods(_OrderedComparator.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(dart.void, [core.Object]),
      call: dart.fnType(core.int, [core.Object, core.Object]),
      [_compareOrder]: dart.fnType(core.int, [core.Object, core.Object]),
      [_renumerate]: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_OrderedComparator, () => ({
      __proto__: dart.getFields(_OrderedComparator.__proto__),
      [_comparison]: dart.finalFieldType(TAndTToint()),
      [_ordinalByElement]: dart.finalFieldType(MapOfT$int()),
      [_nextOrdinal]: dart.fieldType(core.int)
    }));
    return _OrderedComparator;
  });
  src__utils__async__priority_stream_iterator._OrderedComparator = src__utils__async__priority_stream_iterator._OrderedComparator$();
  dart.defineLazy(src__utils__async__priority_stream_iterator._OrderedComparator, {
    /*src__utils__async__priority_stream_iterator._OrderedComparator.RENUMERATE_THRESHOLD*/get RENUMERATE_THRESHOLD() {
      return 1000000;
    }
  });
  dart.addTypeTests(src__utils__async__priority_stream_iterator._OrderedComparator, _is__OrderedComparator_default);
  const _isSync = Symbol('_isSync');
  const _runInZone = Symbol('_runInZone');
  const _onListen = Symbol('_onListen');
  const _onCancel = Symbol('_onCancel');
  const _subscriptions = Symbol('_subscriptions');
  const _itemsToSend = Symbol('_itemsToSend');
  const _subscriptionRemoved = Symbol('_subscriptionRemoved');
  let const$;
  let const$0;
  const _sendItem = Symbol('_sendItem');
  const _sendAsync = Symbol('_sendAsync');
  const _cleanUp = Symbol('_cleanUp');
  const _stream = Symbol('_stream');
  const _add = Symbol('_add');
  const _onError = Symbol('_onError');
  const _cancelOnError = Symbol('_cancelOnError');
  const _closeSubscription = Symbol('_closeSubscription');
  const _scheduleCleanup = Symbol('_scheduleCleanup');
  const _is_SimpleStream_default = Symbol('_is_SimpleStream_default');
  src__utils__async__simple_stream.SimpleStream$ = dart.generic(T => {
    let SimpleStreamSubscriptionOfT = () => (SimpleStreamSubscriptionOfT = dart.constFn(src__utils__async__simple_stream.SimpleStreamSubscription$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let ListOfSimpleStreamSubscriptionOfT = () => (ListOfSimpleStreamSubscriptionOfT = dart.constFn(core.List$(SimpleStreamSubscriptionOfT())))();
    let JSArrayOfSimpleStreamSubscriptionOfT = () => (JSArrayOfSimpleStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(SimpleStreamSubscriptionOfT())))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let StreamSubscriptionOfTTovoid = () => (StreamSubscriptionOfTTovoid = dart.constFn(dart.fnType(dart.void, [StreamSubscriptionOfT()])))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class SimpleStream extends async.StreamView$(T) {
      get isBroadcast() {
        return this[isBroadcast];
      }
      set isBroadcast(value) {
        super.isBroadcast = value;
      }
      get isSync() {
        return this[_isSync];
      }
      asBroadcastStream(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        if (onListen != null || onCancel != null) {
          dart.throw(new core.UnsupportedError.new("Not supported outside constructor."));
        }
        return this;
      }
      get stream() {
        return this;
      }
      add(item) {
        T._check(item);
        if (!dart.test(this.hasListener)) return;
        if (dart.test(this[_isSync])) {
          this[_sendItem](this[_subscriptions], item);
        } else {
          let schedule = false;
          if (this[_itemsToSend] == null) {
            this[_itemsToSend] = JSArrayOfT().of([]);
            schedule = true;
          }
          this[_itemsToSend][$add](item);
          if (schedule) {
            async.scheduleMicrotask(dart.bind(this, _sendAsync));
          }
        }
      }
      static _cleanupTask() {
        for (let i = 0; i < dart.notNull(src__utils__async__simple_stream.SimpleStream._cleanupStreams[$length]); i++) {
          src__utils__async__simple_stream.SimpleStream._cleanupStreams[$_get](i)[_cleanUp]();
        }
        src__utils__async__simple_stream.SimpleStream._cleanupStreams[$clear]();
      }
      [_cleanUp]() {
        if (dart.test(this.hasListener)) {
          let listeners = this[_subscriptions];
          let lastSubscription = null;
          let i = dart.notNull(listeners[$length]) - 1;
          while (i >= 0) {
            let stream = listeners[$_get](i)[_stream];
            if (stream == null) {
              lastSubscription = listeners[$removeAt](i);
            }
            i--;
          }
          if (dart.test(listeners[$isEmpty]) && lastSubscription != null && this[_onCancel] != null) {
            this[_onCancel](lastSubscription);
          }
        }
        this[_subscriptionRemoved] = false;
      }
      [_sendItem](listeners, item, len) {
        ListOfSimpleStreamSubscriptionOfT()._check(listeners);
        T._check(item);
        if (len === void 0) len = -1;
        if (len === -1) {
          len = listeners[$length];
        }
        for (let i = 0; i < dart.notNull(len); i++) {
          listeners[$_get](i)[_add](item);
        }
      }
      addError(errorEvent, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (!dart.test(this.hasListener)) return;
        let listeners = this[_subscriptions];
        let len = listeners[$length];
        for (let i = 0; i < dart.notNull(len); i++) {
          let sub = listeners[$_get](i);
          let callback = sub[_onError];
          if (sub[_cancelOnError] === true) {
            sub[_closeSubscription]();
          }
          if (callback != null) {
            if (dynamicAnddynamicTodynamic().is(callback)) {
              callback(errorEvent, stackTrace);
            } else if (dynamicTodynamic().is(callback)) {
              callback(errorEvent);
            }
          }
        }
      }
      close() {
        if (this[_subscriptions] != null) {
          let listeners = this[_subscriptions];
          this[_subscriptions] = null;
          for (let i = 0; i < dart.notNull(listeners[$length]); i++) {
            listeners[$_get](i)[_closeSubscription]();
          }
        }
      }
      get isClosed() {
        return this[_subscriptions] == null;
      }
      get hasListener() {
        return this[_subscriptions] != null && dart.test(this[_subscriptions][$isNotEmpty]);
      }
      [_sendAsync]() {
        let listeners = this[_subscriptions];
        let sendList = this[_itemsToSend];
        this[_itemsToSend] = null;
        if (listeners != null) {
          let len = listeners[$length];
          for (let i = 0; i < dart.notNull(sendList[$length]); i++) {
            let item = sendList[$_get](i);
            this[_sendItem](listeners, item, len);
          }
        }
      }
      [_scheduleCleanup](subscription) {
        SimpleStreamSubscriptionOfT()._check(subscription);
        if (!dart.test(this[_subscriptionRemoved])) {
          this[_subscriptionRemoved] = true;
          src__utils__async__simple_stream.SimpleStream._cleanupStreams[$add](this);
          if (src__utils__async__simple_stream.SimpleStream._cleanupStreams[$length] === 1) {
            async.scheduleMicrotask(dart.fn(src__utils__async__simple_stream.SimpleStream._cleanupTask, VoidTovoid()));
          }
        }
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (!(this[_subscriptions] != null)) dart.assertFailed();
        let contextFunc = null;
        if (dart.test(this[_runInZone])) {
          contextFunc = dart.gbind(dart.bind(async.Zone.current, 'run'), dart.dynamic);
        }
        let sub = new (SimpleStreamSubscriptionOfT()).new(this, onData, onDone, onError, cancelOnError, contextFunc);
        if (dart.test(this[_subscriptions][$isEmpty])) {
          this[_subscriptions] = JSArrayOfSimpleStreamSubscriptionOfT().of([sub]);
        } else {
          this[_subscriptions][$add](sub);
        }
        if (this[_onListen] != null && this[_subscriptions][$length] === 1) {
          this[_onListen](sub);
        }
        return sub;
      }
    }
    (SimpleStream.new = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      this[_onListen] = null;
      this[_onCancel] = null;
      this[isBroadcast] = true;
      this[_subscriptions] = dart.constList([], SimpleStreamSubscriptionOfT());
      this[_itemsToSend] = null;
      this[_subscriptionRemoved] = false;
      this[_isSync] = isSync;
      this[_runInZone] = runInZone;
      SimpleStream.__proto__.new.call(this, const$ || (const$ = dart.const(StreamOfNull().empty())));
    }).prototype = SimpleStream.prototype;
    (SimpleStream.broadcast = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[isBroadcast] = true;
      this[_subscriptions] = dart.constList([], SimpleStreamSubscriptionOfT());
      this[_itemsToSend] = null;
      this[_subscriptionRemoved] = false;
      this[_isSync] = isSync;
      this[_runInZone] = runInZone;
      this[_onListen] = onListen;
      this[_onCancel] = onCancel;
      SimpleStream.__proto__.new.call(this, const$0 || (const$0 = dart.const(StreamOfNull().empty())));
    }).prototype = SimpleStream.prototype;
    dart.addTypeTests(SimpleStream);
    SimpleStream.prototype[_is_SimpleStream_default] = true;
    const isBroadcast = Symbol("SimpleStream.isBroadcast");
    SimpleStream[dart.implements] = () => [EventSinkOfT()];
    dart.setMethodSignature(SimpleStream, () => ({
      __proto__: dart.getMethods(SimpleStream.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      [_cleanUp]: dart.fnType(dart.void, []),
      [_sendItem]: dart.fnType(dart.void, [core.Object, core.Object], [core.int]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, []),
      [_sendAsync]: dart.fnType(dart.void, []),
      [_scheduleCleanup]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(SimpleStream, () => ({
      __proto__: dart.getGetters(SimpleStream.__proto__),
      isSync: core.bool,
      stream: async.Stream$(T),
      isClosed: core.bool,
      hasListener: core.bool
    }));
    dart.setFieldSignature(SimpleStream, () => ({
      __proto__: dart.getFields(SimpleStream.__proto__),
      [_isSync]: dart.finalFieldType(core.bool),
      [_runInZone]: dart.finalFieldType(core.bool),
      [_onListen]: dart.fieldType(StreamSubscriptionOfTTovoid()),
      [_onCancel]: dart.fieldType(StreamSubscriptionOfTTovoid()),
      isBroadcast: dart.finalFieldType(core.bool),
      [_subscriptions]: dart.fieldType(ListOfSimpleStreamSubscriptionOfT()),
      [_itemsToSend]: dart.fieldType(ListOfT()),
      [_subscriptionRemoved]: dart.fieldType(core.bool)
    }));
    return SimpleStream;
  });
  src__utils__async__simple_stream.SimpleStream = src__utils__async__simple_stream.SimpleStream$();
  dart.defineLazy(src__utils__async__simple_stream.SimpleStream, {
    /*src__utils__async__simple_stream.SimpleStream._cleanupStreams*/get _cleanupStreams() {
      return JSArrayOfSimpleStream().of([]);
    },
    set _cleanupStreams(_) {}
  });
  dart.addTypeTests(src__utils__async__simple_stream.SimpleStream, _is_SimpleStream_default);
  const _lastItem = Symbol('_lastItem');
  const _is_LastStateStream_default = Symbol('_is_LastStateStream_default');
  src__utils__async__simple_stream.LastStateStream$ = dart.generic(T => {
    let SimpleStreamSubscriptionOfT = () => (SimpleStreamSubscriptionOfT = dart.constFn(src__utils__async__simple_stream.SimpleStreamSubscription$(T)))();
    let JSArrayOfSimpleStreamSubscriptionOfT = () => (JSArrayOfSimpleStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(SimpleStreamSubscriptionOfT())))();
    class LastStateStream extends src__utils__async__simple_stream.SimpleStream$(T) {
      add(item) {
        T._check(item);
        this[_lastItem] = item;
        super.add(item);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        let sub = SimpleStreamSubscriptionOfT()._check(super.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError}));
        if (this[_lastItem] != null) {
          if (dart.test(this[_isSync])) {
            this[_sendItem](JSArrayOfSimpleStreamSubscriptionOfT().of([sub]), this[_lastItem]);
          } else if (this[_itemsToSend] == null) {
            async.scheduleMicrotask(dart.fn(() => {
              this[_sendItem](JSArrayOfSimpleStreamSubscriptionOfT().of([sub]), this[_lastItem]);
            }, VoidToNull()));
          }
        }
        return sub;
      }
    }
    (LastStateStream.new = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : false;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : false;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[_lastItem] = null;
      LastStateStream.__proto__.broadcast.call(this, {isSync: isSync, runInZone: runInZone, onListen: onListen, onCancel: onCancel});
    }).prototype = LastStateStream.prototype;
    dart.addTypeTests(LastStateStream);
    LastStateStream.prototype[_is_LastStateStream_default] = true;
    dart.setMethodSignature(LastStateStream, () => ({
      __proto__: dart.getMethods(LastStateStream.__proto__),
      add: dart.fnType(dart.void, [core.Object])
    }));
    dart.setFieldSignature(LastStateStream, () => ({
      __proto__: dart.getFields(LastStateStream.__proto__),
      [_lastItem]: dart.fieldType(T)
    }));
    return LastStateStream;
  });
  src__utils__async__simple_stream.LastStateStream = src__utils__async__simple_stream.LastStateStream$();
  dart.addTypeTests(src__utils__async__simple_stream.LastStateStream, _is_LastStateStream_default);
  const _is_EmptySimpleStream_default = Symbol('_is_EmptySimpleStream_default');
  src__utils__async__simple_stream.EmptySimpleStream$ = dart.generic(T => {
    let SimpleStreamSubscriptionOfT = () => (SimpleStreamSubscriptionOfT = dart.constFn(src__utils__async__simple_stream.SimpleStreamSubscription$(T)))();
    class EmptySimpleStream extends src__utils__async__simple_stream.SimpleStream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return SimpleStreamSubscriptionOfT()._empty();
      }
    }
    (EmptySimpleStream.new = function(isSync) {
      if (isSync === void 0) isSync = false;
      EmptySimpleStream.__proto__.new.call(this, {isSync: isSync});
    }).prototype = EmptySimpleStream.prototype;
    dart.addTypeTests(EmptySimpleStream);
    EmptySimpleStream.prototype[_is_EmptySimpleStream_default] = true;
    return EmptySimpleStream;
  });
  src__utils__async__simple_stream.EmptySimpleStream = src__utils__async__simple_stream.EmptySimpleStream$();
  dart.addTypeTests(src__utils__async__simple_stream.EmptySimpleStream, _is_EmptySimpleStream_default);
  const _callback = Symbol('_callback');
  const _doneCallback = Symbol('_doneCallback');
  const _contextFunc = Symbol('_contextFunc');
  const _is_SimpleStreamSubscription_default = Symbol('_is_SimpleStreamSubscription_default');
  src__utils__async__simple_stream.SimpleStreamSubscription$ = dart.generic(T => {
    let SimpleStreamSubscriptionOfT = () => (SimpleStreamSubscriptionOfT = dart.constFn(src__utils__async__simple_stream.SimpleStreamSubscription$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let SimpleStreamOfT = () => (SimpleStreamOfT = dart.constFn(src__utils__async__simple_stream.SimpleStream$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class SimpleStreamSubscription extends core.Object {
      get isPaused() {
        return this[isPaused];
      }
      set isPaused(value) {
        super.isPaused = value;
      }
      static _empty() {
        return new (SimpleStreamSubscriptionOfT()).new(null, null, null, null, false, null);
      }
      cancel() {
        if (this[_stream] != null) {
          let stream = this[_stream];
          this[_doneCallback] = null;
          this[_closeSubscription]();
          stream[_scheduleCleanup](this);
        }
        return null;
      }
      [_closeSubscription]() {
        this[_stream] = null;
        this[_callback] = null;
        this[_onError] = null;
        if (this[_doneCallback] != null) {
          dart.dcall(this[_doneCallback], []);
          this[_doneCallback] = null;
        }
      }
      [_add](data) {
        T._check(data);
        if (this[_callback] != null) {
          if (this[_contextFunc] != null) {
            this[_contextFunc](dart.fn(() => this[_callback](data), VoidTovoid()));
          } else {
            this[_callback](data);
          }
        }
      }
      onData(handleData) {
        if (this[_stream] != null) {
          this[_callback] = handleData;
        }
      }
      onError(handleError) {
        if (this[_stream] != null) {
          this[_onError] = handleError;
        }
      }
      onDone(handleDone) {
        if (this[_stream] != null) {
          this[_doneCallback] = handleDone;
        }
      }
      pause(resumeSignal) {
        if (resumeSignal === void 0) resumeSignal = null;
        return dart.throw(new core.UnsupportedError.new("Not supported."));
      }
      resume() {
        dart.throw(new core.UnsupportedError.new("Not supported."));
      }
      asFuture(S, futureValue) {
        if (futureValue === void 0) futureValue = null;
        dart.throw(new core.UnsupportedError.new("Not supported."));
      }
    }
    (SimpleStreamSubscription.new = function(stream, callback, doneCallback, onError, cancelOnError, contextFunc) {
      this[isPaused] = false;
      this[_stream] = stream;
      this[_callback] = callback;
      this[_doneCallback] = doneCallback;
      this[_onError] = onError;
      this[_cancelOnError] = cancelOnError;
      this[_contextFunc] = contextFunc;
    }).prototype = SimpleStreamSubscription.prototype;
    SimpleStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(SimpleStreamSubscription);
    SimpleStreamSubscription.prototype[_is_SimpleStreamSubscription_default] = true;
    const isPaused = Symbol("SimpleStreamSubscription.isPaused");
    SimpleStreamSubscription[dart.implements] = () => [StreamSubscriptionOfT()];
    dart.setMethodSignature(SimpleStreamSubscription, () => ({
      __proto__: dart.getMethods(SimpleStreamSubscription.__proto__),
      cancel: dart.fnType(async.Future, []),
      [_closeSubscription]: dart.fnType(dart.void, []),
      [_add]: dart.fnType(dart.void, [core.Object]),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      asFuture: dart.gFnType(S => [async.Future$(S), [], [S]])
    }));
    dart.setFieldSignature(SimpleStreamSubscription, () => ({
      __proto__: dart.getFields(SimpleStreamSubscription.__proto__),
      isPaused: dart.finalFieldType(core.bool),
      [_stream]: dart.fieldType(SimpleStreamOfT()),
      [_callback]: dart.fieldType(TTovoid()),
      [_contextFunc]: dart.fieldType(FnTovoid()),
      [_doneCallback]: dart.fieldType(core.Function),
      [_onError]: dart.fieldType(core.Function),
      [_cancelOnError]: dart.fieldType(core.bool)
    }));
    return SimpleStreamSubscription;
  });
  src__utils__async__simple_stream.SimpleStreamSubscription = src__utils__async__simple_stream.SimpleStreamSubscription$();
  dart.addTypeTests(src__utils__async__simple_stream.SimpleStreamSubscription, _is_SimpleStreamSubscription_default);
  const _is_SimpleEmitter_default = Symbol('_is_SimpleEmitter_default');
  src__utils__async__simple_stream.SimpleEmitter$ = dart.generic(T => {
    class SimpleEmitter extends src__utils__async__simple_stream.SimpleStream$(T) {
      get stream() {
        return this;
      }
      get sink() {
        return this;
      }
    }
    (SimpleEmitter.new = function(opts) {
      let isSync = opts && 'isSync' in opts ? opts.isSync : true;
      let runInZone = opts && 'runInZone' in opts ? opts.runInZone : true;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      SimpleEmitter.__proto__.broadcast.call(this, {isSync: isSync, runInZone: runInZone, onListen: onListen, onCancel: onCancel});
    }).prototype = SimpleEmitter.prototype;
    dart.addTypeTests(SimpleEmitter);
    SimpleEmitter.prototype[_is_SimpleEmitter_default] = true;
    dart.setGetterSignature(SimpleEmitter, () => ({
      __proto__: dart.getGetters(SimpleEmitter.__proto__),
      sink: async.EventSink$(T)
    }));
    return SimpleEmitter;
  });
  src__utils__async__simple_stream.SimpleEmitter = src__utils__async__simple_stream.SimpleEmitter$();
  dart.addTypeTests(src__utils__async__simple_stream.SimpleEmitter, _is_SimpleEmitter_default);
  src__utils__async__throttle_stream.throttleStream = function(S, T, duration, opts) {
    let guaranteeLast = opts && 'guaranteeLast' in opts ? opts.guaranteeLast : true;
    return new (src__utils__async__rate_limit.RateLimitTransformer$(S, T)).new(duration, dart.test(guaranteeLast) ? dart.gbind(dart.fn(utils__rate_limit_utils__rate_limit_utils.throttleGuaranteeLast, FnAndDurationToFn$0()), dart.dynamic) : dart.gbind(dart.fn(utils__rate_limit_utils__rate_limit_utils.throttle, FnAndDurationToFn$0()), dart.dynamic));
  };
  const _runInZoneFn = Symbol('_runInZoneFn');
  const _runInZone$ = Symbol('_runInZone');
  src__utils__async__zoned_async._ZoneRunner = class _ZoneRunner extends core.Object {
    [_runInZone$](S, fn) {
      return S.as(this[_runInZoneFn](fn));
    }
  };
  (src__utils__async__zoned_async._ZoneRunner.new = function() {
  }).prototype = src__utils__async__zoned_async._ZoneRunner.prototype;
  dart.addTypeTests(src__utils__async__zoned_async._ZoneRunner);
  dart.setMethodSignature(src__utils__async__zoned_async._ZoneRunner, () => ({
    __proto__: dart.getMethods(src__utils__async__zoned_async._ZoneRunner.__proto__),
    [_runInZone$]: dart.gFnType(S => [S, [dart.fnType(S, [])]])
  }));
  const _innerFuture = Symbol('_innerFuture');
  const _is_ZonedFuture_default = Symbol('_is_ZonedFuture_default');
  src__utils__async__zoned_async.ZonedFuture$ = dart.generic(T => {
    let ZonedStreamOfT = () => (ZonedStreamOfT = dart.constFn(src__utils__async__zoned_async.ZonedStream$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let VoidToFutureOfT = () => (VoidToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [])))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    class ZonedFuture extends src__utils__async__zoned_async._ZoneRunner {
      asStream() {
        return new (ZonedStreamOfT()).new(this[_innerFuture].asStream(), this[_runInZoneFn]);
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_runInZone$](FutureOfT(), dart.fn(() => this[_innerFuture].catchError(onError, {test: test}), VoidToFutureOfT()));
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this[_runInZone$](async.Future$(S), dart.fn(() => this[_innerFuture].then(S, onValue, {onError: onError}), dart.fnType(async.Future$(S), [])));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return this[_runInZone$](FutureOfT(), dart.fn(() => this[_innerFuture].timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)}), VoidToFutureOfT()));
      }
      whenComplete(action) {
        return this[_runInZone$](FutureOfT(), dart.fn(() => this[_innerFuture].whenComplete(action), VoidToFutureOfT()));
      }
    }
    (ZonedFuture.new = function(innerFuture, runInZoneFn) {
      this[_innerFuture] = innerFuture;
      this[_runInZoneFn] = runInZoneFn;
    }).prototype = ZonedFuture.prototype;
    ZonedFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(ZonedFuture);
    ZonedFuture.prototype[_is_ZonedFuture_default] = true;
    ZonedFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(ZonedFuture, () => ({
      __proto__: dart.getMethods(ZonedFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: dart.fnType(dart.dynamic, [])}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])])
    }));
    dart.setFieldSignature(ZonedFuture, () => ({
      __proto__: dart.getFields(ZonedFuture.__proto__),
      [_innerFuture]: dart.finalFieldType(FutureOfT()),
      [_runInZoneFn]: dart.finalFieldType(FnTodynamic())
    }));
    return ZonedFuture;
  });
  src__utils__async__zoned_async.ZonedFuture = src__utils__async__zoned_async.ZonedFuture$();
  dart.addTypeTests(src__utils__async__zoned_async.ZonedFuture, _is_ZonedFuture_default);
  const _innerStream = Symbol('_innerStream');
  const _is_ZonedStream_default = Symbol('_is_ZonedStream_default');
  src__utils__async__zoned_async.ZonedStream$ = dart.generic(T => {
    let ZonedFutureOfT = () => (ZonedFutureOfT = dart.constFn(src__utils__async__zoned_async.ZonedFuture$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let VoidToStreamSubscriptionOfT = () => (VoidToStreamSubscriptionOfT = dart.constFn(dart.fnType(StreamSubscriptionOfT(), [])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    const Stream__ZoneRunner$ = class Stream__ZoneRunner extends async.Stream$(T) {};
    (Stream__ZoneRunner$.new = function() {
      Stream__ZoneRunner$.__proto__.new.call(this);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$._internal = function() {
      Stream__ZoneRunner$.__proto__._internal.call(this);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.empty = function() {
      Stream__ZoneRunner$.__proto__.empty.call(this);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.fromFuture = function(future) {
      Stream__ZoneRunner$.__proto__.fromFuture.call(this, future);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.fromFutures = function(futures) {
      Stream__ZoneRunner$.__proto__.fromFutures.call(this, futures);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.fromIterable = function(elements) {
      Stream__ZoneRunner$.__proto__.fromIterable.call(this, elements);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.periodic = function(period, computation) {
      Stream__ZoneRunner$.__proto__.periodic.call(this, period, computation);
    }).prototype = Stream__ZoneRunner$.prototype;
    (Stream__ZoneRunner$.eventTransformed = function(source, mapSink) {
      Stream__ZoneRunner$.__proto__.eventTransformed.call(this, source, mapSink);
    }).prototype = Stream__ZoneRunner$.prototype;
    dart.applyMixin(Stream__ZoneRunner$, src__utils__async__zoned_async._ZoneRunner);
    class ZonedStream extends Stream__ZoneRunner$ {
      get isBroadcast() {
        return this[_innerStream].isBroadcast;
      }
      get first() {
        return new (ZonedFutureOfT()).new(this[_innerStream].first, dart.gbind(dart.bind(this, _runInZone$), dart.dynamic));
      }
      get last() {
        return new (ZonedFutureOfT()).new(this[_innerStream].last, dart.gbind(dart.bind(this, _runInZone$), dart.dynamic));
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_runInZone$](StreamSubscriptionOfT(), dart.fn(() => this[_innerStream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError}), VoidToStreamSubscriptionOfT()));
      }
    }
    (ZonedStream.new = function(innerStream, runInZoneFn) {
      this[_innerStream] = innerStream;
      this[_runInZoneFn] = runInZoneFn;
      ZonedStream.__proto__.new.call(this);
    }).prototype = ZonedStream.prototype;
    dart.addTypeTests(ZonedStream);
    ZonedStream.prototype[_is_ZonedStream_default] = true;
    dart.setMethodSignature(ZonedStream, () => ({
      __proto__: dart.getMethods(ZonedStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(ZonedStream, () => ({
      __proto__: dart.getFields(ZonedStream.__proto__),
      [_innerStream]: dart.finalFieldType(StreamOfT()),
      [_runInZoneFn]: dart.finalFieldType(FnTodynamic())
    }));
    return ZonedStream;
  });
  src__utils__async__zoned_async.ZonedStream = src__utils__async__zoned_async.ZonedStream$();
  dart.addTypeTests(src__utils__async__zoned_async.ZonedStream, _is_ZonedStream_default);
  dart.trackLibraries("packages/angular_components/src/utils/async/async_update_scheduler.ddc", {
    "package:angular_components/src/utils/async/async_update_scheduler.dart": src__utils__async__async_update_scheduler,
    "package:angular_components/src/utils/async/async_where.dart": src__utils__async__async_where,
    "package:angular_components/src/utils/async/rate_limit.dart": src__utils__async__rate_limit,
    "package:angular_components/src/utils/async/debounce_stream.dart": src__utils__async__debounce_stream,
    "package:angular_components/src/utils/async/disposable_future.dart": src__utils__async__disposable_future,
    "package:angular_components/src/utils/async/lazy_stream_controller.dart": src__utils__async__lazy_stream_controller,
    "package:angular_components/src/utils/async/priority_stream_iterator.dart": src__utils__async__priority_stream_iterator,
    "package:angular_components/src/utils/async/simple_stream.dart": src__utils__async__simple_stream,
    "package:angular_components/src/utils/async/throttle_stream.dart": src__utils__async__throttle_stream,
    "package:angular_components/src/utils/async/zoned_async.dart": src__utils__async__zoned_async
  }, '{"version":3,"sourceRoot":"","sources":["async_update_scheduler.dart","async_where.dart","rate_limit.dart","debounce_stream.dart","disposable_future.dart","lazy_stream_controller.dart","priority_stream_iterator.dart","simple_stream.dart","throttle_stream.dart","zoned_async.dart"],"names":[],"mappings":"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","file":"async_update_scheduler.ddc.js"}');
  // Exports:
  return {
    src__utils__async__async_update_scheduler: src__utils__async__async_update_scheduler,
    src__utils__async__async_where: src__utils__async__async_where,
    src__utils__async__rate_limit: src__utils__async__rate_limit,
    src__utils__async__debounce_stream: src__utils__async__debounce_stream,
    src__utils__async__disposable_future: src__utils__async__disposable_future,
    src__utils__async__lazy_stream_controller: src__utils__async__lazy_stream_controller,
    src__utils__async__priority_stream_iterator: src__utils__async__priority_stream_iterator,
    src__utils__async__simple_stream: src__utils__async__simple_stream,
    src__utils__async__throttle_stream: src__utils__async__throttle_stream,
    src__utils__async__zoned_async: src__utils__async__zoned_async
  };
});

//# sourceMappingURL=async_update_scheduler.ddc.js.map
