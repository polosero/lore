define(['dart_sdk', 'packages/collection/collection'], function(dart_sdk, collection) {
  'use strict';
  const core = dart_sdk.core;
  const collection$ = dart_sdk.collection;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__queue_list = collection.src__queue_list;
  const _root = Object.create(null);
  const src__stream_queue = Object.create(_root);
  const src__cancelable_operation = Object.create(_root);
  const src__byte_collector = Object.create(_root);
  const src__async_cache = Object.create(_root);
  const async$ = Object.create(_root);
  const src__async_memoizer = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__delegate__event_sink = Object.create(_root);
  const src__delegate__future = Object.create(_root);
  const src__delegate__sink = Object.create(_root);
  const src__delegate__stream = Object.create(_root);
  const src__delegate__stream_consumer = Object.create(_root);
  const src__delegate__stream_sink = Object.create(_root);
  const src__typed__stream_subscription = Object.create(_root);
  const src__delegate__stream_subscription = Object.create(_root);
  const src__future_group = Object.create(_root);
  const src__stream_completer = Object.create(_root);
  const src__lazy_stream = Object.create(_root);
  const src__null_stream_sink = Object.create(_root);
  const src__restartable_timer = Object.create(_root);
  const src__stream_sink_transformer__typed = Object.create(_root);
  const src__stream_sink_transformer__stream_transformer_wrapper = Object.create(_root);
  const src__stream_sink_transformer__handler_transformer = Object.create(_root);
  const src__stream_sink_transformer = Object.create(_root);
  const src__result__release_transformer = Object.create(_root);
  const src__result__release_sink = Object.create(_root);
  const src__result__value = Object.create(_root);
  const src__result__error = Object.create(_root);
  const src__result__capture_transformer = Object.create(_root);
  const src__result__capture_sink = Object.create(_root);
  const src__result__result = Object.create(_root);
  const src__result__future = Object.create(_root);
  const src__single_subscription_transformer = Object.create(_root);
  const src__stream_group = Object.create(_root);
  const src__subscription_stream = Object.create(_root);
  const src__stream_splitter = Object.create(_root);
  const src__stream_sink_completer = Object.create(_root);
  const src__stream_subscription_transformer = Object.create(_root);
  const src__stream_zip = Object.create(_root);
  const src__typed_stream_transformer = Object.create(_root);
  const $length = dartx.length;
  const $add = dartx.add;
  const $setRange = dartx.setRange;
  const $_set = dartx._set;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $forEach = dartx.forEach;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $values = dartx.values;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $map = dartx.map;
  const $clear = dartx.clear;
  const $_get = dartx._get;
  let QueueOf_EventRequest = () => (QueueOf_EventRequest = dart.constFn(collection$.Queue$(src__stream_queue._EventRequest)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let _HashSetOfStreamQueue = () => (_HashSetOfStreamQueue = dart.constFn(collection$._HashSet$(src__stream_queue.StreamQueue)))();
  let SetOfStreamQueue = () => (SetOfStreamQueue = dart.constFn(core.Set$(src__stream_queue.StreamQueue)))();
  let CompleterOfint = () => (CompleterOfint = dart.constFn(async.Completer$(core.int)))();
  let CompleterOfbool = () => (CompleterOfbool = dart.constFn(async.Completer$(core.bool)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let VoidToFutureOr = () => (VoidToFutureOr = dart.constFn(dart.fnType(async.FutureOr, [])))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamSubscriptionOfListOfint = () => (StreamSubscriptionOfListOfint = dart.constFn(async.StreamSubscription$(ListOfint())))();
  let StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List = () => (StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [StreamSubscriptionOfListOfint(), FutureOfUint8List()])))();
  let CancelableOperationOfUint8List = () => (CancelableOperationOfUint8List = dart.constFn(src__cancelable_operation.CancelableOperation$(typed_data.Uint8List)))();
  let StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List = () => (StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List = dart.constFn(dart.fnType(CancelableOperationOfUint8List(), [StreamSubscriptionOfListOfint(), FutureOfUint8List()])))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  let ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let EventSinkTovoid = () => (EventSinkTovoid = dart.constFn(dart.fnType(dart.void, [async.EventSink])))();
  let EventSinkOfResult = () => (EventSinkOfResult = dart.constFn(async.EventSink$(src__result__result.Result)))();
  let EventSinkToEventSinkOfResult = () => (EventSinkToEventSinkOfResult = dart.constFn(dart.fnType(EventSinkOfResult(), [async.EventSink])))();
  let dynamicAnddynamicToErrorResult = () => (dynamicAnddynamicToErrorResult = dart.constFn(dart.fnType(src__result__error.ErrorResult, [dart.dynamic, dart.dynamic])))();
  let CaptureStreamTransformerOfObject = () => (CaptureStreamTransformerOfObject = dart.constFn(src__result__capture_transformer.CaptureStreamTransformer$(core.Object)))();
  let ReleaseStreamTransformerOfObject = () => (ReleaseStreamTransformerOfObject = dart.constFn(src__result__release_transformer.ReleaseStreamTransformer$(core.Object)))();
  let ResultOfObject = () => (ResultOfObject = dart.constFn(src__result__result.Result$(core.Object)))();
  let StreamSinkTransformerOfObject$ResultOfObject = () => (StreamSinkTransformerOfObject$ResultOfObject = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(core.Object, ResultOfObject())))();
  let StreamSinkTransformerOfResultOfObject$Object = () => (StreamSinkTransformerOfResultOfObject$Object = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(ResultOfObject(), core.Object)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let ResultOfNull = () => (ResultOfNull = dart.constFn(src__result__result.Result$(core.Null)))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ObjectAndStackTraceTovoid = () => (ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))();
  const _isDone = Symbol('_isDone');
  const _isClosed = Symbol('_isClosed');
  const _eventsReceived = Symbol('_eventsReceived');
  const _eventQueue = Symbol('_eventQueue');
  const _requestQueue = Symbol('_requestQueue');
  const _addRequest = Symbol('_addRequest');
  const _failClosed = Symbol('_failClosed');
  const _cancel = Symbol('_cancel');
  const _pause = Symbol('_pause');
  const _updateRequests = Symbol('_updateRequests');
  const _addResult = Symbol('_addResult');
  const _close = Symbol('_close');
  const _ensureListening = Symbol('_ensureListening');
  const _is_StreamQueue_default = Symbol('_is_StreamQueue_default');
  src__stream_queue.StreamQueue$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _StreamQueueOfT = () => (_StreamQueueOfT = dart.constFn(src__stream_queue._StreamQueue$(T)))();
    let _HasNextRequestOfT = () => (_HasNextRequestOfT = dart.constFn(src__stream_queue._HasNextRequest$(T)))();
    let _LookAheadRequestOfT = () => (_LookAheadRequestOfT = dart.constFn(src__stream_queue._LookAheadRequest$(T)))();
    let _NextRequestOfT = () => (_NextRequestOfT = dart.constFn(src__stream_queue._NextRequest$(T)))();
    let _PeekRequestOfT = () => (_PeekRequestOfT = dart.constFn(src__stream_queue._PeekRequest$(T)))();
    let _RestRequestOfT = () => (_RestRequestOfT = dart.constFn(src__stream_queue._RestRequest$(T)))();
    let _SkipRequestOfT = () => (_SkipRequestOfT = dart.constFn(src__stream_queue._SkipRequest$(T)))();
    let _TakeRequestOfT = () => (_TakeRequestOfT = dart.constFn(src__stream_queue._TakeRequest$(T)))();
    let _TransactionRequestOfT = () => (_TransactionRequestOfT = dart.constFn(src__stream_queue._TransactionRequest$(T)))();
    let _CancelRequestOfT = () => (_CancelRequestOfT = dart.constFn(src__stream_queue._CancelRequest$(T)))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class StreamQueue extends core.Object {
      get eventsDispatched() {
        return dart.notNull(this[_eventsReceived]) - dart.notNull(this[_eventQueue].length);
      }
      static new(source) {
        return new (_StreamQueueOfT()).new(source);
      }
      get hasNext() {
        if (!dart.test(this[_isClosed])) {
          let hasNextRequest = new (_HasNextRequestOfT()).new();
          this[_addRequest](hasNextRequest);
          return hasNextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      lookAhead(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed])) {
          let request = new (_LookAheadRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      get next() {
        if (!dart.test(this[_isClosed])) {
          let nextRequest = new (_NextRequestOfT()).new();
          this[_addRequest](nextRequest);
          return nextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      get peek() {
        if (!dart.test(this[_isClosed])) {
          let nextRequest = new (_PeekRequestOfT()).new();
          this[_addRequest](nextRequest);
          return nextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      get rest() {
        if (dart.test(this[_isClosed])) {
          dart.throw(this[_failClosed]());
        }
        let request = new (_RestRequestOfT()).new(this);
        this[_isClosed] = true;
        this[_addRequest](request);
        return request.stream;
      }
      skip(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed])) {
          let request = new (_SkipRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      take(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed])) {
          let request = new (_TakeRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      startTransaction() {
        if (dart.test(this[_isClosed])) dart.throw(this[_failClosed]());
        let request = new (_TransactionRequestOfT()).new(this);
        this[_addRequest](request);
        return request.transaction;
      }
      withTransaction(callback) {
        let transaction = this.startTransaction();
        let queue = transaction.newQueue();
        return callback(queue).then(core.bool, dart.fn(result => {
          if (dart.test(result)) {
            transaction.commit(queue);
          } else {
            transaction.reject();
          }
          return result;
        }, boolTobool()), {onError: dart.fn(error => {
            transaction.commit(queue);
            dart.throw(error);
          }, dynamicToNull())});
      }
      cancelable(S, callback) {
        let transaction = this.startTransaction();
        let completer = new (src__cancelable_operation.CancelableCompleter$(S)).new({onCancel: dart.fn(() => {
            transaction.reject();
          }, VoidToNull())});
        let queue = transaction.newQueue();
        completer.complete(callback(queue).whenComplete(dart.fn(() => {
          if (!dart.test(completer.isCanceled)) transaction.commit(queue);
        }, VoidToNull())));
        return completer.operation;
      }
      cancel(opts) {
        let immediate = opts && 'immediate' in opts ? opts.immediate : false;
        if (dart.test(this[_isClosed])) dart.throw(this[_failClosed]());
        this[_isClosed] = true;
        if (!dart.test(immediate)) {
          let request = new (_CancelRequestOfT()).new(this);
          this[_addRequest](request);
          return request.future;
        }
        if (dart.test(this[_isDone]) && dart.test(this[_eventQueue].isEmpty)) return async.Future.value();
        return this[_cancel]();
      }
      [_updateRequests]() {
        while (dart.test(this[_requestQueue].isNotEmpty)) {
          if (dart.test(this[_requestQueue].first.update(this[_eventQueue], this[_isDone]))) {
            this[_requestQueue].removeFirst();
          } else {
            return;
          }
        }
        if (!dart.test(this[_isDone])) {
          this[_pause]();
        }
      }
      [_addResult](result) {
        ResultOfT()._check(result);
        this[_eventsReceived] = dart.notNull(this[_eventsReceived]) + 1;
        this[_eventQueue].add(result);
        this[_updateRequests]();
      }
      [_close]() {
        this[_isDone] = true;
        this[_updateRequests]();
      }
      [_failClosed]() {
        return new core.StateError.new("Already cancelled");
      }
      [_addRequest](request) {
        _EventRequestOfT()._check(request);
        if (dart.test(this[_requestQueue].isEmpty)) {
          if (dart.test(request.update(this[_eventQueue], this[_isDone]))) return;
          this[_ensureListening]();
        }
        this[_requestQueue].add(request);
      }
    }
    (StreamQueue.__ = function() {
      this[_isDone] = false;
      this[_isClosed] = false;
      this[_eventsReceived] = 0;
      this[_eventQueue] = new (QueueListOfResultOfT()).new();
      this[_requestQueue] = QueueOf_EventRequest().new();
    }).prototype = StreamQueue.prototype;
    dart.addTypeTests(StreamQueue);
    StreamQueue.prototype[_is_StreamQueue_default] = true;
    dart.setMethodSignature(StreamQueue, () => ({
      __proto__: dart.getMethods(StreamQueue.__proto__),
      lookAhead: dart.fnType(async.Future$(core.List$(T)), [core.int]),
      skip: dart.fnType(async.Future$(core.int), [core.int]),
      take: dart.fnType(async.Future$(core.List$(T)), [core.int]),
      startTransaction: dart.fnType(src__stream_queue.StreamQueueTransaction$(T), []),
      withTransaction: dart.fnType(async.Future$(core.bool), [dart.fnType(async.Future$(core.bool), [src__stream_queue.StreamQueue$(T)])]),
      cancelable: dart.gFnType(S => [src__cancelable_operation.CancelableOperation$(S), [dart.fnType(async.Future$(S), [src__stream_queue.StreamQueue$(T)])]]),
      cancel: dart.fnType(async.Future, [], {immediate: core.bool}),
      [_updateRequests]: dart.fnType(dart.void, []),
      [_addResult]: dart.fnType(dart.void, [core.Object]),
      [_close]: dart.fnType(dart.void, []),
      [_failClosed]: dart.fnType(core.Error, []),
      [_addRequest]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(StreamQueue, () => ({
      __proto__: dart.getGetters(StreamQueue.__proto__),
      eventsDispatched: core.int,
      hasNext: async.Future$(core.bool),
      next: async.Future$(T),
      peek: async.Future$(T),
      rest: async.Stream$(T)
    }));
    dart.setFieldSignature(StreamQueue, () => ({
      __proto__: dart.getFields(StreamQueue.__proto__),
      [_isDone]: dart.fieldType(core.bool),
      [_isClosed]: dart.fieldType(core.bool),
      [_eventsReceived]: dart.fieldType(core.int),
      [_eventQueue]: dart.finalFieldType(QueueListOfResultOfT()),
      [_requestQueue]: dart.finalFieldType(QueueOf_EventRequest())
    }));
    return StreamQueue;
  });
  src__stream_queue.StreamQueue = src__stream_queue.StreamQueue$();
  dart.addTypeTests(src__stream_queue.StreamQueue, _is_StreamQueue_default);
  const _sourceStream = Symbol('_sourceStream');
  const _subscription = Symbol('_subscription');
  const _extractStream = Symbol('_extractStream');
  const _is__StreamQueue_default = Symbol('_is__StreamQueue_default');
  src__stream_queue._StreamQueue$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let SubscriptionStreamOfT = () => (SubscriptionStreamOfT = dart.constFn(src__subscription_stream.SubscriptionStream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class _StreamQueue extends src__stream_queue.StreamQueue$(T) {
      [_cancel]() {
        if (dart.test(this[_isDone])) return null;
        if (this[_subscription] == null) this[_subscription] = this[_sourceStream].listen(null);
        let future = this[_subscription].cancel();
        this[_close]();
        return future;
      }
      [_ensureListening]() {
        if (dart.test(this[_isDone])) return;
        if (this[_subscription] == null) {
          this[_subscription] = this[_sourceStream].listen(dart.fn(data => {
            this[_addResult](ResultOfT().value(data));
          }, TToNull()), {onError: dart.fn((error, stackTrace) => {
              this[_addResult](ResultOfT().error(error, stackTrace));
            }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
              this[_subscription] = null;
              this[_close]();
            }, VoidToNull())});
        } else {
          this[_subscription].resume();
        }
      }
      [_pause]() {
        this[_subscription].pause();
      }
      [_extractStream]() {
        if (!dart.test(this[_isClosed])) dart.assertFailed();
        if (dart.test(this[_isDone])) {
          return StreamOfT().empty();
        }
        this[_isDone] = true;
        if (this[_subscription] == null) {
          return this[_sourceStream];
        }
        let subscription = this[_subscription];
        this[_subscription] = null;
        let wasPaused = subscription.isPaused;
        let result = new (SubscriptionStreamOfT()).new(subscription);
        if (dart.test(wasPaused)) subscription.resume();
        return result;
      }
    }
    (_StreamQueue.new = function(sourceStream) {
      this[_subscription] = null;
      this[_sourceStream] = sourceStream;
      _StreamQueue.__proto__.__.call(this);
    }).prototype = _StreamQueue.prototype;
    dart.addTypeTests(_StreamQueue);
    _StreamQueue.prototype[_is__StreamQueue_default] = true;
    dart.setMethodSignature(_StreamQueue, () => ({
      __proto__: dart.getMethods(_StreamQueue.__proto__),
      [_cancel]: dart.fnType(async.Future, []),
      [_ensureListening]: dart.fnType(dart.void, []),
      [_pause]: dart.fnType(dart.void, []),
      [_extractStream]: dart.fnType(async.Stream$(T), [])
    }));
    dart.setFieldSignature(_StreamQueue, () => ({
      __proto__: dart.getFields(_StreamQueue.__proto__),
      [_sourceStream]: dart.finalFieldType(StreamOfT()),
      [_subscription]: dart.fieldType(StreamSubscriptionOfT())
    }));
    return _StreamQueue;
  });
  src__stream_queue._StreamQueue = src__stream_queue._StreamQueue$();
  dart.addTypeTests(src__stream_queue._StreamQueue, _is__StreamQueue_default);
  const _parent = Symbol('_parent');
  const _splitter = Symbol('_splitter');
  const _queues = Symbol('_queues');
  const _committed = Symbol('_committed');
  const _rejected = Symbol('_rejected');
  const _assertActive = Symbol('_assertActive');
  const _done = Symbol('_done');
  const _is_StreamQueueTransaction_default = Symbol('_is_StreamQueueTransaction_default');
  src__stream_queue.StreamQueueTransaction$ = dart.generic(T => {
    let StreamSplitterOfT = () => (StreamSplitterOfT = dart.constFn(src__stream_splitter.StreamSplitter$(T)))();
    let StreamQueueOfT = () => (StreamQueueOfT = dart.constFn(src__stream_queue.StreamQueue$(T)))();
    class StreamQueueTransaction extends core.Object {
      newQueue() {
        let queue = StreamQueueOfT().new(this[_splitter].split());
        this[_queues].add(queue);
        return queue;
      }
      commit(queue) {
        StreamQueueOfT()._check(queue);
        this[_assertActive]();
        if (!dart.test(this[_queues].contains(queue))) {
          dart.throw(new core.ArgumentError.new("Queue doesn't belong to this transaction."));
        } else if (dart.test(queue[_requestQueue].isNotEmpty)) {
          dart.throw(new core.StateError.new("A queue with pending requests can't be committed."));
        }
        this[_committed] = true;
        for (let j = 0; j < dart.notNull(queue.eventsDispatched); j++) {
          this[_parent][_eventQueue].removeFirst();
        }
        this[_done]();
      }
      reject() {
        this[_assertActive]();
        this[_rejected] = true;
        this[_done]();
      }
      [_done]() {
        this[_splitter].close();
        for (let queue of this[_queues]) {
          queue[_cancel]();
        }
        let currentRequest = this[_parent][_requestQueue].first;
        if (src__stream_queue._TransactionRequest.is(currentRequest) && dart.equals(currentRequest.transaction, this)) {
          this[_parent][_requestQueue].removeFirst();
          this[_parent][_updateRequests]();
        }
      }
      [_assertActive]() {
        if (dart.test(this[_committed])) {
          dart.throw(new core.StateError.new("This transaction has already been accepted."));
        } else if (dart.test(this[_rejected])) {
          dart.throw(new core.StateError.new("This transaction has already been rejected."));
        }
      }
    }
    (StreamQueueTransaction.__ = function(parent, source) {
      this[_queues] = new (_HashSetOfStreamQueue()).new();
      this[_committed] = false;
      this[_rejected] = false;
      this[_parent] = parent;
      this[_splitter] = new (StreamSplitterOfT()).new(source);
    }).prototype = StreamQueueTransaction.prototype;
    dart.addTypeTests(StreamQueueTransaction);
    StreamQueueTransaction.prototype[_is_StreamQueueTransaction_default] = true;
    dart.setMethodSignature(StreamQueueTransaction, () => ({
      __proto__: dart.getMethods(StreamQueueTransaction.__proto__),
      newQueue: dart.fnType(src__stream_queue.StreamQueue$(T), []),
      commit: dart.fnType(dart.void, [core.Object]),
      reject: dart.fnType(dart.void, []),
      [_done]: dart.fnType(dart.void, []),
      [_assertActive]: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(StreamQueueTransaction, () => ({
      __proto__: dart.getFields(StreamQueueTransaction.__proto__),
      [_parent]: dart.finalFieldType(StreamQueueOfT()),
      [_splitter]: dart.finalFieldType(StreamSplitterOfT()),
      [_queues]: dart.finalFieldType(SetOfStreamQueue()),
      [_committed]: dart.fieldType(core.bool),
      [_rejected]: dart.fieldType(core.bool)
    }));
    return StreamQueueTransaction;
  });
  src__stream_queue.StreamQueueTransaction = src__stream_queue.StreamQueueTransaction$();
  dart.addTypeTests(src__stream_queue.StreamQueueTransaction, _is_StreamQueueTransaction_default);
  const _is__EventRequest_default = Symbol('_is__EventRequest_default');
  src__stream_queue._EventRequest$ = dart.generic(T => {
    class _EventRequest extends core.Object {}
    (_EventRequest.new = function() {
    }).prototype = _EventRequest.prototype;
    dart.addTypeTests(_EventRequest);
    _EventRequest.prototype[_is__EventRequest_default] = true;
    return _EventRequest;
  });
  src__stream_queue._EventRequest = src__stream_queue._EventRequest$();
  dart.addTypeTests(src__stream_queue._EventRequest, _is__EventRequest_default);
  const _completer = Symbol('_completer');
  const _is__NextRequest_default = Symbol('_is__NextRequest_default');
  src__stream_queue._NextRequest$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _NextRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events.isNotEmpty)) {
          events.removeFirst().complete(this[_completer]);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer].completeError(new core.StateError.new("No elements"), core.StackTrace.current);
          return true;
        }
        return false;
      }
    }
    (_NextRequest.new = function() {
      this[_completer] = CompleterOfT().new();
    }).prototype = _NextRequest.prototype;
    dart.addTypeTests(_NextRequest);
    _NextRequest.prototype[_is__NextRequest_default] = true;
    _NextRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_NextRequest, () => ({
      __proto__: dart.getMethods(_NextRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_NextRequest, () => ({
      __proto__: dart.getGetters(_NextRequest.__proto__),
      future: async.Future$(T)
    }));
    dart.setFieldSignature(_NextRequest, () => ({
      __proto__: dart.getFields(_NextRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfT())
    }));
    return _NextRequest;
  });
  src__stream_queue._NextRequest = src__stream_queue._NextRequest$();
  dart.addTypeTests(src__stream_queue._NextRequest, _is__NextRequest_default);
  const _is__PeekRequest_default = Symbol('_is__PeekRequest_default');
  src__stream_queue._PeekRequest$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _PeekRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events.isNotEmpty)) {
          events.first.complete(this[_completer]);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer].completeError(new core.StateError.new("No elements"), core.StackTrace.current);
          return true;
        }
        return false;
      }
    }
    (_PeekRequest.new = function() {
      this[_completer] = CompleterOfT().new();
    }).prototype = _PeekRequest.prototype;
    dart.addTypeTests(_PeekRequest);
    _PeekRequest.prototype[_is__PeekRequest_default] = true;
    _PeekRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_PeekRequest, () => ({
      __proto__: dart.getMethods(_PeekRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_PeekRequest, () => ({
      __proto__: dart.getGetters(_PeekRequest.__proto__),
      future: async.Future$(T)
    }));
    dart.setFieldSignature(_PeekRequest, () => ({
      __proto__: dart.getFields(_PeekRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfT())
    }));
    return _PeekRequest;
  });
  src__stream_queue._PeekRequest = src__stream_queue._PeekRequest$();
  dart.addTypeTests(src__stream_queue._PeekRequest, _is__PeekRequest_default);
  const _eventsToSkip = Symbol('_eventsToSkip');
  const _is__SkipRequest_default = Symbol('_is__SkipRequest_default');
  src__stream_queue._SkipRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _SkipRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_eventsToSkip]) > 0) {
          if (dart.test(events.isEmpty)) {
            if (dart.test(isDone)) break;
            return false;
          }
          this[_eventsToSkip] = dart.notNull(this[_eventsToSkip]) - 1;
          let event = events.removeFirst();
          if (dart.test(event.isError)) {
            this[_completer].completeError(event.asError.error, event.asError.stackTrace);
            return true;
          }
        }
        this[_completer].complete(this[_eventsToSkip]);
        return true;
      }
    }
    (_SkipRequest.new = function(eventsToSkip) {
      this[_completer] = CompleterOfint().new();
      this[_eventsToSkip] = eventsToSkip;
    }).prototype = _SkipRequest.prototype;
    dart.addTypeTests(_SkipRequest);
    _SkipRequest.prototype[_is__SkipRequest_default] = true;
    _SkipRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_SkipRequest, () => ({
      __proto__: dart.getMethods(_SkipRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_SkipRequest, () => ({
      __proto__: dart.getGetters(_SkipRequest.__proto__),
      future: async.Future$(core.int)
    }));
    dart.setFieldSignature(_SkipRequest, () => ({
      __proto__: dart.getFields(_SkipRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfint()),
      [_eventsToSkip]: dart.fieldType(core.int)
    }));
    return _SkipRequest;
  });
  src__stream_queue._SkipRequest = src__stream_queue._SkipRequest$();
  dart.addTypeTests(src__stream_queue._SkipRequest, _is__SkipRequest_default);
  const _eventsToTake = Symbol('_eventsToTake');
  const _list = Symbol('_list');
  const _is__ListRequest_default = Symbol('_is__ListRequest_default');
  src__stream_queue._ListRequest$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let CompleterOfListOfT = () => (CompleterOfListOfT = dart.constFn(async.Completer$(ListOfT())))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _ListRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
    }
    (_ListRequest.new = function(eventsToTake) {
      this[_completer] = CompleterOfListOfT().new();
      this[_list] = JSArrayOfT().of([]);
      this[_eventsToTake] = eventsToTake;
    }).prototype = _ListRequest.prototype;
    dart.addTypeTests(_ListRequest);
    _ListRequest.prototype[_is__ListRequest_default] = true;
    _ListRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setGetterSignature(_ListRequest, () => ({
      __proto__: dart.getGetters(_ListRequest.__proto__),
      future: async.Future$(core.List$(T))
    }));
    dart.setFieldSignature(_ListRequest, () => ({
      __proto__: dart.getFields(_ListRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfListOfT()),
      [_list]: dart.finalFieldType(ListOfT()),
      [_eventsToTake]: dart.finalFieldType(core.int)
    }));
    return _ListRequest;
  });
  src__stream_queue._ListRequest = src__stream_queue._ListRequest$();
  dart.addTypeTests(src__stream_queue._ListRequest, _is__ListRequest_default);
  const _is__TakeRequest_default = Symbol('_is__TakeRequest_default');
  src__stream_queue._TakeRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _TakeRequest extends src__stream_queue._ListRequest$(T) {
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_list][$length]) < dart.notNull(this[_eventsToTake])) {
          if (dart.test(events.isEmpty)) {
            if (dart.test(isDone)) break;
            return false;
          }
          let event = events.removeFirst();
          if (dart.test(event.isError)) {
            event.asError.complete(this[_completer]);
            return true;
          }
          this[_list][$add](event.asValue.value);
        }
        this[_completer].complete(this[_list]);
        return true;
      }
    }
    (_TakeRequest.new = function(eventsToTake) {
      _TakeRequest.__proto__.new.call(this, eventsToTake);
    }).prototype = _TakeRequest.prototype;
    dart.addTypeTests(_TakeRequest);
    _TakeRequest.prototype[_is__TakeRequest_default] = true;
    dart.setMethodSignature(_TakeRequest, () => ({
      __proto__: dart.getMethods(_TakeRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    return _TakeRequest;
  });
  src__stream_queue._TakeRequest = src__stream_queue._TakeRequest$();
  dart.addTypeTests(src__stream_queue._TakeRequest, _is__TakeRequest_default);
  const _is__LookAheadRequest_default = Symbol('_is__LookAheadRequest_default');
  src__stream_queue._LookAheadRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _LookAheadRequest extends src__stream_queue._ListRequest$(T) {
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_list][$length]) < dart.notNull(this[_eventsToTake])) {
          if (events.length == this[_list][$length]) {
            if (dart.test(isDone)) break;
            return false;
          }
          let event = events.elementAt(this[_list][$length]);
          if (dart.test(event.isError)) {
            event.asError.complete(this[_completer]);
            return true;
          }
          this[_list][$add](event.asValue.value);
        }
        this[_completer].complete(this[_list]);
        return true;
      }
    }
    (_LookAheadRequest.new = function(eventsToTake) {
      _LookAheadRequest.__proto__.new.call(this, eventsToTake);
    }).prototype = _LookAheadRequest.prototype;
    dart.addTypeTests(_LookAheadRequest);
    _LookAheadRequest.prototype[_is__LookAheadRequest_default] = true;
    dart.setMethodSignature(_LookAheadRequest, () => ({
      __proto__: dart.getMethods(_LookAheadRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    return _LookAheadRequest;
  });
  src__stream_queue._LookAheadRequest = src__stream_queue._LookAheadRequest$();
  dart.addTypeTests(src__stream_queue._LookAheadRequest, _is__LookAheadRequest_default);
  const _streamQueue = Symbol('_streamQueue');
  const _is__CancelRequest_default = Symbol('_is__CancelRequest_default');
  src__stream_queue._CancelRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _CancelRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(this[_streamQueue][_isDone])) {
          this[_completer].complete();
        } else {
          this[_streamQueue][_ensureListening]();
          this[_completer].complete(this[_streamQueue][_extractStream]().listen(null).cancel());
        }
        return true;
      }
    }
    (_CancelRequest.new = function(streamQueue) {
      this[_completer] = async.Completer.new();
      this[_streamQueue] = streamQueue;
    }).prototype = _CancelRequest.prototype;
    dart.addTypeTests(_CancelRequest);
    _CancelRequest.prototype[_is__CancelRequest_default] = true;
    _CancelRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_CancelRequest, () => ({
      __proto__: dart.getMethods(_CancelRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_CancelRequest, () => ({
      __proto__: dart.getGetters(_CancelRequest.__proto__),
      future: async.Future
    }));
    dart.setFieldSignature(_CancelRequest, () => ({
      __proto__: dart.getFields(_CancelRequest.__proto__),
      [_completer]: dart.finalFieldType(async.Completer),
      [_streamQueue]: dart.finalFieldType(src__stream_queue.StreamQueue)
    }));
    return _CancelRequest;
  });
  src__stream_queue._CancelRequest = src__stream_queue._CancelRequest$();
  dart.addTypeTests(src__stream_queue._CancelRequest, _is__CancelRequest_default);
  const _is__RestRequest_default = Symbol('_is__RestRequest_default');
  src__stream_queue._RestRequest$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(src__stream_completer.StreamCompleter$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    let StreamQueueOfT = () => (StreamQueueOfT = dart.constFn(src__stream_queue.StreamQueue$(T)))();
    class _RestRequest extends core.Object {
      get stream() {
        return this[_completer].stream;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events.isEmpty)) {
          if (dart.test(this[_streamQueue][_isDone])) {
            this[_completer].setEmpty();
          } else {
            this[_completer].setSourceStream(this[_streamQueue][_extractStream]());
          }
        } else {
          let controller = StreamControllerOfT().new();
          for (let event of events) {
            event.addTo(controller);
          }
          controller.addStream(this[_streamQueue][_extractStream](), {cancelOnError: false}).whenComplete(dart.bind(controller, 'close'));
          this[_completer].setSourceStream(controller.stream);
        }
        return true;
      }
    }
    (_RestRequest.new = function(streamQueue) {
      this[_completer] = new (StreamCompleterOfT()).new();
      this[_streamQueue] = streamQueue;
    }).prototype = _RestRequest.prototype;
    dart.addTypeTests(_RestRequest);
    _RestRequest.prototype[_is__RestRequest_default] = true;
    _RestRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_RestRequest, () => ({
      __proto__: dart.getMethods(_RestRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_RestRequest, () => ({
      __proto__: dart.getGetters(_RestRequest.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setFieldSignature(_RestRequest, () => ({
      __proto__: dart.getFields(_RestRequest.__proto__),
      [_completer]: dart.finalFieldType(StreamCompleterOfT()),
      [_streamQueue]: dart.finalFieldType(StreamQueueOfT())
    }));
    return _RestRequest;
  });
  src__stream_queue._RestRequest = src__stream_queue._RestRequest$();
  dart.addTypeTests(src__stream_queue._RestRequest, _is__RestRequest_default);
  const _is__HasNextRequest_default = Symbol('_is__HasNextRequest_default');
  src__stream_queue._HasNextRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _HasNextRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events.isNotEmpty)) {
          this[_completer].complete(true);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer].complete(false);
          return true;
        }
        return false;
      }
    }
    (_HasNextRequest.new = function() {
      this[_completer] = CompleterOfbool().new();
    }).prototype = _HasNextRequest.prototype;
    dart.addTypeTests(_HasNextRequest);
    _HasNextRequest.prototype[_is__HasNextRequest_default] = true;
    _HasNextRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_HasNextRequest, () => ({
      __proto__: dart.getMethods(_HasNextRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_HasNextRequest, () => ({
      __proto__: dart.getGetters(_HasNextRequest.__proto__),
      future: async.Future$(core.bool)
    }));
    dart.setFieldSignature(_HasNextRequest, () => ({
      __proto__: dart.getFields(_HasNextRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfbool())
    }));
    return _HasNextRequest;
  });
  src__stream_queue._HasNextRequest = src__stream_queue._HasNextRequest$();
  dart.addTypeTests(src__stream_queue._HasNextRequest, _is__HasNextRequest_default);
  const _transaction = Symbol('_transaction');
  const _controller = Symbol('_controller');
  const _eventsSent = Symbol('_eventsSent');
  const _is__TransactionRequest_default = Symbol('_is__TransactionRequest_default');
  src__stream_queue._TransactionRequest$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamQueueTransactionOfT = () => (StreamQueueTransactionOfT = dart.constFn(src__stream_queue.StreamQueueTransaction$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _TransactionRequest extends core.Object {
      get transaction() {
        return this[_transaction];
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_eventsSent]) < dart.notNull(events.length)) {
          events._get((() => {
            let x = this[_eventsSent];
            this[_eventsSent] = dart.notNull(x) + 1;
            return x;
          })()).addTo(this[_controller]);
        }
        if (dart.test(isDone) && !dart.test(this[_controller].isClosed)) this[_controller].close();
        return dart.test(this.transaction[_committed]) || dart.test(this[_transaction][_rejected]);
      }
    }
    (_TransactionRequest.new = function(parent) {
      this[_transaction] = null;
      this[_controller] = StreamControllerOfT().new({sync: true});
      this[_eventsSent] = 0;
      this[_transaction] = new (StreamQueueTransactionOfT()).__(parent, this[_controller].stream);
    }).prototype = _TransactionRequest.prototype;
    dart.addTypeTests(_TransactionRequest);
    _TransactionRequest.prototype[_is__TransactionRequest_default] = true;
    _TransactionRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_TransactionRequest, () => ({
      __proto__: dart.getMethods(_TransactionRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_TransactionRequest, () => ({
      __proto__: dart.getGetters(_TransactionRequest.__proto__),
      transaction: src__stream_queue.StreamQueueTransaction$(T)
    }));
    dart.setFieldSignature(_TransactionRequest, () => ({
      __proto__: dart.getFields(_TransactionRequest.__proto__),
      [_transaction]: dart.fieldType(StreamQueueTransactionOfT()),
      [_controller]: dart.finalFieldType(StreamControllerOfT()),
      [_eventsSent]: dart.fieldType(core.int)
    }));
    return _TransactionRequest;
  });
  src__stream_queue._TransactionRequest = src__stream_queue._TransactionRequest$();
  dart.addTypeTests(src__stream_queue._TransactionRequest, _is__TransactionRequest_default);
  const _completer$ = Symbol('_completer');
  const _inner = Symbol('_inner');
  const _cancel$ = Symbol('_cancel');
  const _cancelMemo = Symbol('_cancelMemo');
  const _is_CancelableOperation_default = Symbol('_is_CancelableOperation_default');
  src__cancelable_operation.CancelableOperation$ = dart.generic(T => {
    let CancelableCompleterOfT = () => (CancelableCompleterOfT = dart.constFn(src__cancelable_operation.CancelableCompleter$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class CancelableOperation extends core.Object {
      static fromFuture(inner, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let completer = new (CancelableCompleterOfT()).new({onCancel: onCancel});
        completer.complete(inner);
        return completer.operation;
      }
      get value() {
        return this[_completer$][_inner].future;
      }
      asStream() {
        let controller = StreamControllerOfT().new({sync: true, onCancel: dart.bind(this[_completer$], _cancel$)});
        this.value.then(core.Null, dart.fn(value => {
          controller.add(value);
          controller.close();
        }, TToNull()), {onError: dart.fn((error, stackTrace) => {
            controller.addError(error, core.StackTrace._check(stackTrace));
            controller.close();
          }, dynamicAnddynamicToNull())});
        return controller.stream;
      }
      valueOrCancellation(cancellationValue) {
        if (cancellationValue === void 0) cancellationValue = null;
        T._check(cancellationValue);
        let completer = CompleterOfT().sync();
        this.value.then(dart.void, dart.fn(result => completer.complete(result), TTovoid()), {onError: dart.bind(completer, 'completeError')});
        this[_completer$][_cancelMemo].future.then(core.Null, dart.fn(_ => {
          completer.complete(cancellationValue);
        }, dynamicToNull()), {onError: dart.bind(completer, 'completeError')});
        return completer.future;
      }
      cancel() {
        return this[_completer$][_cancel$]();
      }
    }
    (CancelableOperation.__ = function(completer) {
      this[_completer$] = completer;
    }).prototype = CancelableOperation.prototype;
    dart.addTypeTests(CancelableOperation);
    CancelableOperation.prototype[_is_CancelableOperation_default] = true;
    dart.setMethodSignature(CancelableOperation, () => ({
      __proto__: dart.getMethods(CancelableOperation.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      valueOrCancellation: dart.fnType(async.Future, [], [core.Object]),
      cancel: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(CancelableOperation, () => ({
      __proto__: dart.getGetters(CancelableOperation.__proto__),
      value: async.Future$(T)
    }));
    dart.setFieldSignature(CancelableOperation, () => ({
      __proto__: dart.getFields(CancelableOperation.__proto__),
      [_completer$]: dart.finalFieldType(CancelableCompleterOfT())
    }));
    return CancelableOperation;
  });
  src__cancelable_operation.CancelableOperation = src__cancelable_operation.CancelableOperation$();
  dart.addTypeTests(src__cancelable_operation.CancelableOperation, _is_CancelableOperation_default);
  const _onCancel = Symbol('_onCancel');
  const _operation = Symbol('_operation');
  const _isCompleted = Symbol('_isCompleted');
  const _isCanceled = Symbol('_isCanceled');
  const _is_CancelableCompleter_default = Symbol('_is_CancelableCompleter_default');
  src__cancelable_operation.CancelableCompleter$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let CancelableOperationOfT = () => (CancelableOperationOfT = dart.constFn(src__cancelable_operation.CancelableOperation$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    class CancelableCompleter extends core.Object {
      get operation() {
        return this[_operation];
      }
      get isCompleted() {
        return this[_isCompleted];
      }
      get isCanceled() {
        return this[_isCanceled];
      }
      complete(value) {
        if (value === void 0) value = null;
        if (dart.test(this[_isCompleted])) dart.throw(new core.StateError.new("Operation already completed"));
        this[_isCompleted] = true;
        if (!async.Future.is(value)) {
          if (dart.test(this[_isCanceled])) return;
          this[_inner].complete(FutureOrOfT()._check(value));
          return;
        }
        if (dart.test(this[_isCanceled])) {
          dart.dsend(value, 'catchError', [dart.fn(_ => {
            }, dynamicToNull())]);
          return;
        }
        dart.dsend(value, 'then', [dart.fn(result => {
            if (dart.test(this[_isCanceled])) return;
            this[_inner].complete(FutureOrOfT()._check(result));
          }, dynamicToNull())], {onError: dart.fn((error, stackTrace) => {
            if (dart.test(this[_isCanceled])) return;
            this[_inner].completeError(error, core.StackTrace._check(stackTrace));
          }, dynamicAnddynamicToNull())});
      }
      completeError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_isCompleted])) dart.throw(new core.StateError.new("Operation already completed"));
        this[_isCompleted] = true;
        if (dart.test(this[_isCanceled])) return;
        this[_inner].completeError(error, stackTrace);
      }
      [_cancel$]() {
        if (dart.test(this[_inner].isCompleted)) return async.Future.value();
        return this[_cancelMemo].runOnce(dart.fn(() => {
          this[_isCanceled] = true;
          if (this[_onCancel] != null) return this[_onCancel]();
        }, VoidToFutureOr()));
      }
    }
    (CancelableCompleter.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[_operation] = null;
      this[_isCompleted] = false;
      this[_isCanceled] = false;
      this[_cancelMemo] = new src__async_memoizer.AsyncMemoizer.new();
      this[_onCancel] = onCancel;
      this[_inner] = CompleterOfT().new();
      this[_operation] = new (CancelableOperationOfT()).__(this);
    }).prototype = CancelableCompleter.prototype;
    dart.addTypeTests(CancelableCompleter);
    CancelableCompleter.prototype[_is_CancelableCompleter_default] = true;
    dart.setMethodSignature(CancelableCompleter, () => ({
      __proto__: dart.getMethods(CancelableCompleter.__proto__),
      complete: dart.fnType(dart.void, [], [dart.dynamic]),
      completeError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_cancel$]: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(CancelableCompleter, () => ({
      __proto__: dart.getGetters(CancelableCompleter.__proto__),
      operation: src__cancelable_operation.CancelableOperation$(T),
      isCompleted: core.bool,
      isCanceled: core.bool
    }));
    dart.setFieldSignature(CancelableCompleter, () => ({
      __proto__: dart.getFields(CancelableCompleter.__proto__),
      [_inner]: dart.finalFieldType(CompleterOfT()),
      [_onCancel]: dart.finalFieldType(VoidToFutureOr()),
      [_operation]: dart.fieldType(CancelableOperationOfT()),
      [_isCompleted]: dart.fieldType(core.bool),
      [_isCanceled]: dart.fieldType(core.bool),
      [_cancelMemo]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return CancelableCompleter;
  });
  src__cancelable_operation.CancelableCompleter = src__cancelable_operation.CancelableCompleter$();
  dart.addTypeTests(src__cancelable_operation.CancelableCompleter, _is_CancelableCompleter_default);
  src__byte_collector.collectBytes = function(source) {
    return src__byte_collector._collectBytes(FutureOfUint8List(), source, dart.fn((_, result) => result, StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List()));
  };
  src__byte_collector.collectBytesCancelable = function(source) {
    return src__byte_collector._collectBytes(CancelableOperationOfUint8List(), source, dart.fn((subscription, result) => CancelableOperationOfUint8List().fromFuture(result, {onCancel: dart.bind(subscription, 'cancel')}), StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List()));
  };
  src__byte_collector._collectBytes = function(T, source, result) {
    let byteLists = JSArrayOfListOfint().of([]);
    let length = 0;
    let completer = CompleterOfUint8List().sync();
    let subscription = source.listen(dart.fn(bytes => {
      byteLists[$add](bytes);
      length = length + dart.notNull(bytes[$length]);
    }, ListOfintToNull()), {onError: dart.bind(completer, 'completeError'), onDone: dart.fn(() => {
        completer.complete(src__byte_collector._collect(length, byteLists));
      }, VoidToNull()), cancelOnError: true});
    return result(subscription, completer.future);
  };
  src__byte_collector._collect = function(length, byteLists) {
    let result = typed_data.Uint8List.new(length);
    let i = 0;
    for (let byteList of byteLists) {
      let end = i + dart.notNull(byteList[$length]);
      result[$setRange](i, end, byteList);
      i = end;
    }
    return result;
  };
  const _duration = Symbol('_duration');
  const _cachedStreamSplitter = Symbol('_cachedStreamSplitter');
  const _cachedValueFuture = Symbol('_cachedValueFuture');
  const _stale = Symbol('_stale');
  const _startStaleTimer = Symbol('_startStaleTimer');
  const _is_AsyncCache_default = Symbol('_is_AsyncCache_default');
  src__async_cache.AsyncCache$ = dart.generic(T => {
    let AsyncCacheOfT = () => (AsyncCacheOfT = dart.constFn(src__async_cache.AsyncCache$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let VoidToFutureOfT = () => (VoidToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let EventSinkOfTToNull = () => (EventSinkOfTToNull = dart.constFn(dart.fnType(core.Null, [EventSinkOfT()])))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    let StreamSplitterOfT = () => (StreamSplitterOfT = dart.constFn(src__stream_splitter.StreamSplitter$(T)))();
    class AsyncCache extends core.Object {
      static ephemeral() {
        return new (AsyncCacheOfT()).new(core.Duration.zero);
      }
      fetch(callback) {
        return async.async(T, (function* fetch() {
          VoidToFutureOfT()._check(callback);
          if (this[_cachedStreamSplitter] != null) {
            dart.throw(new core.StateError.new("Previously used to cache via `fetchStream`"));
          }
          if (this[_cachedValueFuture] == null) {
            this[_cachedValueFuture] = callback();
            yield this[_cachedValueFuture];
            this[_startStaleTimer]();
          }
          return this[_cachedValueFuture];
        }).bind(this));
      }
      fetchStream(callback) {
        VoidToStreamOfT()._check(callback);
        if (this[_cachedValueFuture] != null) {
          dart.throw(new core.StateError.new("Previously used to cache via `fetch`"));
        }
        if (this[_cachedStreamSplitter] == null) {
          this[_cachedStreamSplitter] = new (StreamSplitterOfT()).new(callback().transform(T, StreamTransformerOfT$T().fromHandlers({handleDone: dart.fn(sink => {
              this[_startStaleTimer]();
              sink.close();
            }, EventSinkOfTToNull())})));
        }
        return this[_cachedStreamSplitter].split();
      }
      invalidate() {
        this[_cachedValueFuture] = null;
        let t = this[_cachedStreamSplitter];
        t == null ? null : t.close();
        this[_cachedStreamSplitter] = null;
        let t$ = this[_stale];
        t$ == null ? null : t$.cancel();
        this[_stale] = null;
      }
      [_startStaleTimer]() {
        this[_stale] = async.Timer.new(this[_duration], dart.bind(this, 'invalidate'));
      }
    }
    (AsyncCache.new = function(duration) {
      this[_cachedStreamSplitter] = null;
      this[_cachedValueFuture] = null;
      this[_stale] = null;
      this[_duration] = duration;
    }).prototype = AsyncCache.prototype;
    dart.addTypeTests(AsyncCache);
    AsyncCache.prototype[_is_AsyncCache_default] = true;
    dart.setMethodSignature(AsyncCache, () => ({
      __proto__: dart.getMethods(AsyncCache.__proto__),
      fetch: dart.fnType(async.Future$(T), [core.Object]),
      fetchStream: dart.fnType(async.Stream$(T), [core.Object]),
      invalidate: dart.fnType(dart.void, []),
      [_startStaleTimer]: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(AsyncCache, () => ({
      __proto__: dart.getFields(AsyncCache.__proto__),
      [_duration]: dart.finalFieldType(core.Duration),
      [_cachedStreamSplitter]: dart.fieldType(StreamSplitterOfT()),
      [_cachedValueFuture]: dart.fieldType(FutureOfT()),
      [_stale]: dart.fieldType(async.Timer)
    }));
    return AsyncCache;
  });
  src__async_cache.AsyncCache = src__async_cache.AsyncCache$();
  dart.addTypeTests(src__async_cache.AsyncCache, _is_AsyncCache_default);
  const _completer$0 = Symbol('_completer');
  const _is_AsyncMemoizer_default = Symbol('_is_AsyncMemoizer_default');
  src__async_memoizer.AsyncMemoizer$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class AsyncMemoizer extends core.Object {
      get future() {
        return this[_completer$0].future;
      }
      get hasRun() {
        return this[_completer$0].isCompleted;
      }
      runOnce(computation) {
        VoidToFutureOrOfT()._check(computation);
        if (!dart.test(this.hasRun)) this[_completer$0].complete(FutureOfT().sync(computation));
        return this.future;
      }
    }
    (AsyncMemoizer.new = function() {
      this[_completer$0] = CompleterOfT().new();
    }).prototype = AsyncMemoizer.prototype;
    dart.addTypeTests(AsyncMemoizer);
    AsyncMemoizer.prototype[_is_AsyncMemoizer_default] = true;
    dart.setMethodSignature(AsyncMemoizer, () => ({
      __proto__: dart.getMethods(AsyncMemoizer.__proto__),
      runOnce: dart.fnType(async.Future$(T), [core.Object])
    }));
    dart.setGetterSignature(AsyncMemoizer, () => ({
      __proto__: dart.getGetters(AsyncMemoizer.__proto__),
      future: async.Future$(T),
      hasRun: core.bool
    }));
    dart.setFieldSignature(AsyncMemoizer, () => ({
      __proto__: dart.getFields(AsyncMemoizer.__proto__),
      [_completer$0]: dart.finalFieldType(CompleterOfT())
    }));
    return AsyncMemoizer;
  });
  src__async_memoizer.AsyncMemoizer = src__async_memoizer.AsyncMemoizer$();
  dart.addTypeTests(src__async_memoizer.AsyncMemoizer, _is_AsyncMemoizer_default);
  const _sink = Symbol('_sink');
  const _is_DelegatingEventSink_default = Symbol('_is_DelegatingEventSink_default');
  src__delegate__event_sink.DelegatingEventSink$ = dart.generic(T => {
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    class DelegatingEventSink extends core.Object {
      static typed(T, sink) {
        return async.EventSink$(T).is(sink) ? sink : new (src__delegate__event_sink.DelegatingEventSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink].addError(error, stackTrace);
      }
      close() {
        this[_sink].close();
      }
    }
    (DelegatingEventSink.new = function(sink) {
      this[_sink] = sink;
    }).prototype = DelegatingEventSink.prototype;
    (DelegatingEventSink.__ = function(sink) {
      this[_sink] = sink;
    }).prototype = DelegatingEventSink.prototype;
    dart.addTypeTests(DelegatingEventSink);
    DelegatingEventSink.prototype[_is_DelegatingEventSink_default] = true;
    DelegatingEventSink[dart.implements] = () => [EventSinkOfT()];
    dart.setMethodSignature(DelegatingEventSink, () => ({
      __proto__: dart.getMethods(DelegatingEventSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(DelegatingEventSink, () => ({
      __proto__: dart.getFields(DelegatingEventSink.__proto__),
      [_sink]: dart.finalFieldType(async.EventSink)
    }));
    return DelegatingEventSink;
  });
  src__delegate__event_sink.DelegatingEventSink = src__delegate__event_sink.DelegatingEventSink$();
  dart.addTypeTests(src__delegate__event_sink.DelegatingEventSink, _is_DelegatingEventSink_default);
  const _future = Symbol('_future');
  const _is_DelegatingFuture_default = Symbol('_is_DelegatingFuture_default');
  src__delegate__future.DelegatingFuture$ = dart.generic(T => {
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class DelegatingFuture extends core.Object {
      static typed(T, future) {
        return async.Future$(T).is(future) ? future : future.then(T, dart.fn(v => T.as(v), dart.fnType(T, [dart.dynamic])));
      }
      asStream() {
        return this[_future].asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_future].catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this[_future].then(S, onValue, {onError: onError});
      }
      whenComplete(action) {
        return this[_future].whenComplete(action);
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return this[_future].timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
    }
    (DelegatingFuture.new = function(future) {
      this[_future] = future;
    }).prototype = DelegatingFuture.prototype;
    DelegatingFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(DelegatingFuture);
    DelegatingFuture.prototype[_is_DelegatingFuture_default] = true;
    DelegatingFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(DelegatingFuture, () => ({
      __proto__: dart.getMethods(DelegatingFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: dart.fnType(dart.dynamic, [])})
    }));
    dart.setFieldSignature(DelegatingFuture, () => ({
      __proto__: dart.getFields(DelegatingFuture.__proto__),
      [_future]: dart.finalFieldType(FutureOfT())
    }));
    return DelegatingFuture;
  });
  src__delegate__future.DelegatingFuture = src__delegate__future.DelegatingFuture$();
  dart.addTypeTests(src__delegate__future.DelegatingFuture, _is_DelegatingFuture_default);
  const _sink$ = Symbol('_sink');
  const _is_DelegatingSink_default = Symbol('_is_DelegatingSink_default');
  src__delegate__sink.DelegatingSink$ = dart.generic(T => {
    let SinkOfT = () => (SinkOfT = dart.constFn(core.Sink$(T)))();
    class DelegatingSink extends core.Object {
      static typed(T, sink) {
        return core.Sink$(T).is(sink) ? sink : new (src__delegate__sink.DelegatingSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink$].add(data);
      }
      close() {
        this[_sink$].close();
      }
    }
    (DelegatingSink.new = function(sink) {
      this[_sink$] = sink;
    }).prototype = DelegatingSink.prototype;
    (DelegatingSink.__ = function(sink) {
      this[_sink$] = sink;
    }).prototype = DelegatingSink.prototype;
    dart.addTypeTests(DelegatingSink);
    DelegatingSink.prototype[_is_DelegatingSink_default] = true;
    DelegatingSink[dart.implements] = () => [SinkOfT()];
    dart.setMethodSignature(DelegatingSink, () => ({
      __proto__: dart.getMethods(DelegatingSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(DelegatingSink, () => ({
      __proto__: dart.getFields(DelegatingSink.__proto__),
      [_sink$]: dart.finalFieldType(core.Sink)
    }));
    return DelegatingSink;
  });
  src__delegate__sink.DelegatingSink = src__delegate__sink.DelegatingSink$();
  dart.addTypeTests(src__delegate__sink.DelegatingSink, _is_DelegatingSink_default);
  const _is_DelegatingStream_default = Symbol('_is_DelegatingStream_default');
  src__delegate__stream.DelegatingStream$ = dart.generic(T => {
    class DelegatingStream extends async.StreamView$(T) {
      static typed(T, stream) {
        return stream.cast(T);
      }
    }
    (DelegatingStream.new = function(stream) {
      DelegatingStream.__proto__.new.call(this, stream);
    }).prototype = DelegatingStream.prototype;
    dart.addTypeTests(DelegatingStream);
    DelegatingStream.prototype[_is_DelegatingStream_default] = true;
    return DelegatingStream;
  });
  src__delegate__stream.DelegatingStream = src__delegate__stream.DelegatingStream$();
  dart.addTypeTests(src__delegate__stream.DelegatingStream, _is_DelegatingStream_default);
  const _consumer = Symbol('_consumer');
  const _is_DelegatingStreamConsumer_default = Symbol('_is_DelegatingStreamConsumer_default');
  src__delegate__stream_consumer.DelegatingStreamConsumer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamConsumerOfT = () => (StreamConsumerOfT = dart.constFn(async.StreamConsumer$(T)))();
    class DelegatingStreamConsumer extends core.Object {
      static typed(T, consumer) {
        return async.StreamConsumer$(T).is(consumer) ? consumer : new (src__delegate__stream_consumer.DelegatingStreamConsumer$(T)).__(consumer);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        return this[_consumer].addStream(stream);
      }
      close() {
        return this[_consumer].close();
      }
    }
    (DelegatingStreamConsumer.new = function(consumer) {
      this[_consumer] = consumer;
    }).prototype = DelegatingStreamConsumer.prototype;
    (DelegatingStreamConsumer.__ = function(consumer) {
      this[_consumer] = consumer;
    }).prototype = DelegatingStreamConsumer.prototype;
    dart.addTypeTests(DelegatingStreamConsumer);
    DelegatingStreamConsumer.prototype[_is_DelegatingStreamConsumer_default] = true;
    DelegatingStreamConsumer[dart.implements] = () => [StreamConsumerOfT()];
    dart.setMethodSignature(DelegatingStreamConsumer, () => ({
      __proto__: dart.getMethods(DelegatingStreamConsumer.__proto__),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setFieldSignature(DelegatingStreamConsumer, () => ({
      __proto__: dart.getFields(DelegatingStreamConsumer.__proto__),
      [_consumer]: dart.finalFieldType(async.StreamConsumer)
    }));
    return DelegatingStreamConsumer;
  });
  src__delegate__stream_consumer.DelegatingStreamConsumer = src__delegate__stream_consumer.DelegatingStreamConsumer$();
  dart.addTypeTests(src__delegate__stream_consumer.DelegatingStreamConsumer, _is_DelegatingStreamConsumer_default);
  const _sink$0 = Symbol('_sink');
  const _is_DelegatingStreamSink_default = Symbol('_is_DelegatingStreamSink_default');
  src__delegate__stream_sink.DelegatingStreamSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class DelegatingStreamSink extends core.Object {
      get done() {
        return this[_sink$0].done;
      }
      static typed(T, sink) {
        return async.StreamSink$(T).is(sink) ? sink : new (src__delegate__stream_sink.DelegatingStreamSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink$0].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink$0].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        return this[_sink$0].addStream(stream);
      }
      close() {
        return this[_sink$0].close();
      }
    }
    (DelegatingStreamSink.new = function(sink) {
      this[_sink$0] = sink;
    }).prototype = DelegatingStreamSink.prototype;
    (DelegatingStreamSink.__ = function(sink) {
      this[_sink$0] = sink;
    }).prototype = DelegatingStreamSink.prototype;
    dart.addTypeTests(DelegatingStreamSink);
    DelegatingStreamSink.prototype[_is_DelegatingStreamSink_default] = true;
    DelegatingStreamSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getMethods(DelegatingStreamSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getGetters(DelegatingStreamSink.__proto__),
      done: async.Future
    }));
    dart.setFieldSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getFields(DelegatingStreamSink.__proto__),
      [_sink$0]: dart.finalFieldType(async.StreamSink)
    }));
    return DelegatingStreamSink;
  });
  src__delegate__stream_sink.DelegatingStreamSink = src__delegate__stream_sink.DelegatingStreamSink$();
  dart.addTypeTests(src__delegate__stream_sink.DelegatingStreamSink, _is_DelegatingStreamSink_default);
  const _subscription$ = Symbol('_subscription');
  const _is_TypeSafeStreamSubscription_default = Symbol('_is_TypeSafeStreamSubscription_default');
  src__typed__stream_subscription.TypeSafeStreamSubscription$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class TypeSafeStreamSubscription extends core.Object {
      get isPaused() {
        return this[_subscription$].isPaused;
      }
      onData(handleData) {
        this[_subscription$].onData(dart.fn(data => handleData(T.as(data)), dynamicTovoid()));
      }
      onError(handleError) {
        this[_subscription$].onError(handleError);
      }
      onDone(handleDone) {
        this[_subscription$].onDone(handleDone);
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        this[_subscription$].pause(resumeFuture);
      }
      resume() {
        this[_subscription$].resume();
      }
      cancel() {
        return this[_subscription$].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_subscription$].asFuture(E, futureValue);
      }
    }
    (TypeSafeStreamSubscription.new = function(subscription) {
      this[_subscription$] = subscription;
    }).prototype = TypeSafeStreamSubscription.prototype;
    TypeSafeStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(TypeSafeStreamSubscription);
    TypeSafeStreamSubscription.prototype[_is_TypeSafeStreamSubscription_default] = true;
    TypeSafeStreamSubscription[dart.implements] = () => [StreamSubscriptionOfT()];
    dart.setMethodSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getMethods(TypeSafeStreamSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getGetters(TypeSafeStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setFieldSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getFields(TypeSafeStreamSubscription.__proto__),
      [_subscription$]: dart.finalFieldType(async.StreamSubscription)
    }));
    return TypeSafeStreamSubscription;
  });
  src__typed__stream_subscription.TypeSafeStreamSubscription = src__typed__stream_subscription.TypeSafeStreamSubscription$();
  dart.addTypeTests(src__typed__stream_subscription.TypeSafeStreamSubscription, _is_TypeSafeStreamSubscription_default);
  const _source = Symbol('_source');
  const _is_DelegatingStreamSubscription_default = Symbol('_is_DelegatingStreamSubscription_default');
  src__delegate__stream_subscription.DelegatingStreamSubscription$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class DelegatingStreamSubscription extends core.Object {
      static typed(T, subscription) {
        return async.StreamSubscription$(T).is(subscription) ? subscription : new (src__typed__stream_subscription.TypeSafeStreamSubscription$(T)).new(subscription);
      }
      onData(handleData) {
        this[_source].onData(handleData);
      }
      onError(handleError) {
        this[_source].onError(handleError);
      }
      onDone(handleDone) {
        this[_source].onDone(handleDone);
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        this[_source].pause(resumeFuture);
      }
      resume() {
        this[_source].resume();
      }
      cancel() {
        return this[_source].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_source].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source].isPaused;
      }
    }
    (DelegatingStreamSubscription.new = function(sourceSubscription) {
      this[_source] = sourceSubscription;
    }).prototype = DelegatingStreamSubscription.prototype;
    DelegatingStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(DelegatingStreamSubscription);
    DelegatingStreamSubscription.prototype[_is_DelegatingStreamSubscription_default] = true;
    DelegatingStreamSubscription[dart.implements] = () => [StreamSubscriptionOfT()];
    dart.setMethodSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getMethods(DelegatingStreamSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getGetters(DelegatingStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setFieldSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getFields(DelegatingStreamSubscription.__proto__),
      [_source]: dart.finalFieldType(StreamSubscriptionOfT())
    }));
    return DelegatingStreamSubscription;
  });
  src__delegate__stream_subscription.DelegatingStreamSubscription = src__delegate__stream_subscription.DelegatingStreamSubscription$();
  dart.addTypeTests(src__delegate__stream_subscription.DelegatingStreamSubscription, _is_DelegatingStreamSubscription_default);
  const _pending = Symbol('_pending');
  const _closed = Symbol('_closed');
  const _completer$1 = Symbol('_completer');
  const _onIdleController = Symbol('_onIdleController');
  const _values = Symbol('_values');
  const _is_FutureGroup_default = Symbol('_is_FutureGroup_default');
  src__future_group.FutureGroup$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let CompleterOfListOfT = () => (CompleterOfListOfT = dart.constFn(async.Completer$(ListOfT())))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let SinkOfFutureOfT = () => (SinkOfFutureOfT = dart.constFn(core.Sink$(FutureOfT())))();
    class FutureGroup extends core.Object {
      get future() {
        return this[_completer$1].future;
      }
      get isIdle() {
        return this[_pending] === 0;
      }
      get onIdle() {
        if (this[_onIdleController] == null) {
          this[_onIdleController] = async.StreamController.broadcast({sync: true});
        }
        return this[_onIdleController].stream;
      }
      add(task) {
        FutureOfT()._check(task);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("The FutureGroup is closed."));
        let index = this[_values][$length];
        this[_values][$add](null);
        this[_pending] = dart.notNull(this[_pending]) + 1;
        task.then(core.Null, dart.fn(value => {
          if (dart.test(this[_completer$1].isCompleted)) return null;
          this[_pending] = dart.notNull(this[_pending]) - 1;
          this[_values][$_set](index, value);
          if (this[_pending] !== 0) return null;
          if (this[_onIdleController] != null) this[_onIdleController].add(null);
          if (!dart.test(this[_closed])) return null;
          if (this[_onIdleController] != null) this[_onIdleController].close();
          this[_completer$1].complete(this[_values]);
        }, TToNull())).catchError(dart.fn((error, stackTrace) => {
          if (dart.test(this[_completer$1].isCompleted)) return null;
          this[_completer$1].completeError(error, core.StackTrace._check(stackTrace));
        }, dynamicAnddynamicToNull()));
      }
      close() {
        this[_closed] = true;
        if (this[_pending] !== 0) return;
        if (dart.test(this[_completer$1].isCompleted)) return;
        this[_completer$1].complete(this[_values]);
      }
    }
    (FutureGroup.new = function() {
      this[_pending] = 0;
      this[_closed] = false;
      this[_completer$1] = CompleterOfListOfT().new();
      this[_onIdleController] = null;
      this[_values] = JSArrayOfT().of([]);
    }).prototype = FutureGroup.prototype;
    dart.addTypeTests(FutureGroup);
    FutureGroup.prototype[_is_FutureGroup_default] = true;
    FutureGroup[dart.implements] = () => [SinkOfFutureOfT()];
    dart.setMethodSignature(FutureGroup, () => ({
      __proto__: dart.getMethods(FutureGroup.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(FutureGroup, () => ({
      __proto__: dart.getGetters(FutureGroup.__proto__),
      future: async.Future$(core.List$(T)),
      isIdle: core.bool,
      onIdle: async.Stream
    }));
    dart.setFieldSignature(FutureGroup, () => ({
      __proto__: dart.getFields(FutureGroup.__proto__),
      [_pending]: dart.fieldType(core.int),
      [_closed]: dart.fieldType(core.bool),
      [_completer$1]: dart.finalFieldType(CompleterOfListOfT()),
      [_onIdleController]: dart.fieldType(async.StreamController),
      [_values]: dart.finalFieldType(ListOfT())
    }));
    return FutureGroup;
  });
  src__future_group.FutureGroup = src__future_group.FutureGroup$();
  dart.addTypeTests(src__future_group.FutureGroup, _is_FutureGroup_default);
  const _stream = Symbol('_stream');
  const _isSourceStreamSet = Symbol('_isSourceStreamSet');
  const _setSourceStream = Symbol('_setSourceStream');
  const _setEmpty = Symbol('_setEmpty');
  const _is_StreamCompleter_default = Symbol('_is_StreamCompleter_default');
  src__stream_completer.StreamCompleter$ = dart.generic(T => {
    let _CompleterStreamOfT = () => (_CompleterStreamOfT = dart.constFn(src__stream_completer._CompleterStream$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class StreamCompleter extends core.Object {
      static fromFuture(T, streamFuture) {
        let completer = new (src__stream_completer.StreamCompleter$(T)).new();
        streamFuture.then(dart.void, dart.bind(completer, 'setSourceStream'), {onError: dart.bind(completer, 'setError')});
        return completer.stream;
      }
      get stream() {
        return this[_stream];
      }
      setSourceStream(sourceStream) {
        StreamOfT()._check(sourceStream);
        if (dart.test(this[_stream][_isSourceStreamSet])) {
          dart.throw(new core.StateError.new("Source stream already set"));
        }
        this[_stream][_setSourceStream](sourceStream);
      }
      setEmpty() {
        if (dart.test(this[_stream][_isSourceStreamSet])) {
          dart.throw(new core.StateError.new("Source stream already set"));
        }
        this[_stream][_setEmpty]();
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.setSourceStream(StreamOfT().fromFuture(FutureOfT().error(error, stackTrace)));
      }
    }
    (StreamCompleter.new = function() {
      this[_stream] = new (_CompleterStreamOfT()).new();
    }).prototype = StreamCompleter.prototype;
    dart.addTypeTests(StreamCompleter);
    StreamCompleter.prototype[_is_StreamCompleter_default] = true;
    dart.setMethodSignature(StreamCompleter, () => ({
      __proto__: dart.getMethods(StreamCompleter.__proto__),
      setSourceStream: dart.fnType(dart.void, [core.Object]),
      setEmpty: dart.fnType(dart.void, []),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamCompleter, () => ({
      __proto__: dart.getGetters(StreamCompleter.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setFieldSignature(StreamCompleter, () => ({
      __proto__: dart.getFields(StreamCompleter.__proto__),
      [_stream]: dart.finalFieldType(_CompleterStreamOfT())
    }));
    return StreamCompleter;
  });
  src__stream_completer.StreamCompleter = src__stream_completer.StreamCompleter$();
  dart.addTypeTests(src__stream_completer.StreamCompleter, _is_StreamCompleter_default);
  const _controller$ = Symbol('_controller');
  const _sourceStream$ = Symbol('_sourceStream');
  const _createController = Symbol('_createController');
  const _linkStreamToController = Symbol('_linkStreamToController');
  const _is__CompleterStream_default = Symbol('_is__CompleterStream_default');
  src__stream_completer._CompleterStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _CompleterStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_controller$] == null) {
          if (this[_sourceStream$] != null && !dart.test(this[_sourceStream$].isBroadcast)) {
            return this[_sourceStream$].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
          }
          this[_createController]();
          if (this[_sourceStream$] != null) {
            this[_linkStreamToController]();
          }
        }
        return this[_controller$].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get [_isSourceStreamSet]() {
        return this[_sourceStream$] != null;
      }
      [_setSourceStream](sourceStream) {
        StreamOfT()._check(sourceStream);
        if (!(this[_sourceStream$] == null)) dart.assertFailed();
        this[_sourceStream$] = sourceStream;
        if (this[_controller$] != null) {
          this[_linkStreamToController]();
        }
      }
      [_linkStreamToController]() {
        if (!(this[_controller$] != null)) dart.assertFailed();
        if (!(this[_sourceStream$] != null)) dart.assertFailed();
        this[_controller$].addStream(this[_sourceStream$], {cancelOnError: false}).whenComplete(dart.bind(this[_controller$], 'close'));
      }
      [_setEmpty]() {
        if (!(this[_sourceStream$] == null)) dart.assertFailed();
        if (this[_controller$] == null) {
          this[_createController]();
        }
        this[_sourceStream$] = this[_controller$].stream;
        this[_controller$].close();
      }
      [_createController]() {
        if (!(this[_controller$] == null)) dart.assertFailed();
        this[_controller$] = StreamControllerOfT().new({sync: true});
      }
    }
    (_CompleterStream.new = function() {
      this[_controller$] = null;
      this[_sourceStream$] = null;
      _CompleterStream.__proto__.new.call(this);
    }).prototype = _CompleterStream.prototype;
    dart.addTypeTests(_CompleterStream);
    _CompleterStream.prototype[_is__CompleterStream_default] = true;
    dart.setMethodSignature(_CompleterStream, () => ({
      __proto__: dart.getMethods(_CompleterStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.dynamic, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool}),
      [_setSourceStream]: dart.fnType(dart.void, [core.Object]),
      [_linkStreamToController]: dart.fnType(dart.void, []),
      [_setEmpty]: dart.fnType(dart.void, []),
      [_createController]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_CompleterStream, () => ({
      __proto__: dart.getGetters(_CompleterStream.__proto__),
      [_isSourceStreamSet]: core.bool
    }));
    dart.setFieldSignature(_CompleterStream, () => ({
      __proto__: dart.getFields(_CompleterStream.__proto__),
      [_controller$]: dart.fieldType(StreamControllerOfT()),
      [_sourceStream$]: dart.fieldType(StreamOfT())
    }));
    return _CompleterStream;
  });
  src__stream_completer._CompleterStream = src__stream_completer._CompleterStream$();
  dart.addTypeTests(src__stream_completer._CompleterStream, _is__CompleterStream_default);
  const _callback = Symbol('_callback');
  const _is_LazyStream_default = Symbol('_is_LazyStream_default');
  src__lazy_stream.LazyStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let FutureOfStreamOfT = () => (FutureOfStreamOfT = dart.constFn(async.Future$(StreamOfT())))();
    let StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    let FutureOrOfStreamOfT = () => (FutureOrOfStreamOfT = dart.constFn(async.FutureOr$(StreamOfT())))();
    let VoidToFutureOrOfStreamOfT = () => (VoidToFutureOrOfStreamOfT = dart.constFn(dart.fnType(FutureOrOfStreamOfT(), [])))();
    class LazyStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_callback] == null) {
          dart.throw(new core.StateError.new("Stream has already been listened to."));
        }
        let callback = this[_callback];
        this[_callback] = null;
        let result = callback();
        let stream = null;
        if (FutureOfStreamOfT().is(result)) {
          stream = src__stream_completer.StreamCompleter.fromFuture(T, result.then(StreamOfT(), dart.fn(stream => src__delegate__stream.DelegatingStream.typed(T, stream), StreamOfTToStreamOfT())));
        } else {
          stream = src__delegate__stream.DelegatingStream.typed(T, async.Stream.as(result));
        }
        return stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (LazyStream.new = function(callback) {
      this[_callback] = callback;
      LazyStream.__proto__.new.call(this);
      if (this[_callback] == null) dart.throw(new core.ArgumentError.notNull("callback"));
    }).prototype = LazyStream.prototype;
    dart.addTypeTests(LazyStream);
    LazyStream.prototype[_is_LazyStream_default] = true;
    dart.setMethodSignature(LazyStream, () => ({
      __proto__: dart.getMethods(LazyStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(LazyStream, () => ({
      __proto__: dart.getFields(LazyStream.__proto__),
      [_callback]: dart.fieldType(VoidToFutureOrOfStreamOfT())
    }));
    return LazyStream;
  });
  src__lazy_stream.LazyStream = src__lazy_stream.LazyStream$();
  dart.addTypeTests(src__lazy_stream.LazyStream, _is_LazyStream_default);
  const _closed$ = Symbol('_closed');
  const _addingStream = Symbol('_addingStream');
  const _checkEventAllowed = Symbol('_checkEventAllowed');
  const _is_NullStreamSink_default = Symbol('_is_NullStreamSink_default');
  src__null_stream_sink.NullStreamSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class NullStreamSink extends core.Object {
      get done() {
        return this[done$];
      }
      set done(value) {
        super.done = value;
      }
      add(data) {
        T._check(data);
        this[_checkEventAllowed]();
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_checkEventAllowed]();
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        this[_checkEventAllowed]();
        this[_addingStream] = true;
        let l = stream.listen(null).cancel();
        let future = l != null ? l : async.Future.value();
        return future.whenComplete(dart.fn(() => {
          this[_addingStream] = false;
        }, VoidToNull()));
      }
      [_checkEventAllowed]() {
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add to a closed sink."));
        if (dart.test(this[_addingStream])) {
          dart.throw(new core.StateError.new("Cannot add to a sink while adding a stream."));
        }
      }
      close() {
        this[_closed$] = true;
        return this.done;
      }
    }
    (NullStreamSink.new = function(opts) {
      let done = opts && 'done' in opts ? opts.done : null;
      this[_closed$] = false;
      this[_addingStream] = false;
      this[done$] = done != null ? done : async.Future.value();
    }).prototype = NullStreamSink.prototype;
    (NullStreamSink.error = function(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      this[_closed$] = false;
      this[_addingStream] = false;
      let _ = async.Future.error(error, stackTrace);
      _.catchError(dart.fn(_ => {
      }, dynamicToNull()));
      this[done$] = _;
    }).prototype = NullStreamSink.prototype;
    dart.addTypeTests(NullStreamSink);
    NullStreamSink.prototype[_is_NullStreamSink_default] = true;
    const done$ = Symbol("NullStreamSink.done");
    NullStreamSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(NullStreamSink, () => ({
      __proto__: dart.getMethods(NullStreamSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      [_checkEventAllowed]: dart.fnType(dart.void, []),
      close: dart.fnType(async.Future, [])
    }));
    dart.setFieldSignature(NullStreamSink, () => ({
      __proto__: dart.getFields(NullStreamSink.__proto__),
      done: dart.finalFieldType(async.Future),
      [_closed$]: dart.fieldType(core.bool),
      [_addingStream]: dart.fieldType(core.bool)
    }));
    return NullStreamSink;
  });
  src__null_stream_sink.NullStreamSink = src__null_stream_sink.NullStreamSink$();
  dart.addTypeTests(src__null_stream_sink.NullStreamSink, _is_NullStreamSink_default);
  const _duration$ = Symbol('_duration');
  const _callback$ = Symbol('_callback');
  const _timer = Symbol('_timer');
  src__restartable_timer.RestartableTimer = class RestartableTimer extends core.Object {
    get isActive() {
      return this[_timer].isActive;
    }
    reset() {
      this[_timer].cancel();
      this[_timer] = async.Timer.new(this[_duration$], this[_callback$]);
    }
    cancel() {
      this[_timer].cancel();
    }
    get tick() {
      dart.throw(new core.UnimplementedError.new("tick"));
    }
  };
  (src__restartable_timer.RestartableTimer.new = function(duration, callback) {
    this[_timer] = null;
    this[_duration$] = duration;
    this[_callback$] = callback;
    this[_timer] = async.Timer.new(this[_duration$], this[_callback$]);
  }).prototype = src__restartable_timer.RestartableTimer.prototype;
  dart.addTypeTests(src__restartable_timer.RestartableTimer);
  src__restartable_timer.RestartableTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getMethods(src__restartable_timer.RestartableTimer.__proto__),
    reset: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getGetters(src__restartable_timer.RestartableTimer.__proto__),
    isActive: core.bool,
    tick: core.int
  }));
  dart.setFieldSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getFields(src__restartable_timer.RestartableTimer.__proto__),
    [_duration$]: dart.finalFieldType(core.Duration),
    [_callback$]: dart.finalFieldType(VoidTodynamic()),
    [_timer]: dart.fieldType(async.Timer)
  }));
  const _inner$ = Symbol('_inner');
  const _is_TypeSafeStreamSinkTransformer_default = Symbol('_is_TypeSafeStreamSinkTransformer_default');
  src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$ = dart.generic((S, T) => {
    let StreamSinkTransformerOfS$T = () => (StreamSinkTransformerOfS$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(S, T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class TypeSafeStreamSinkTransformer extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return src__delegate__stream_sink.DelegatingStreamSink.typed(S, this[_inner$].bind(sink));
      }
    }
    (TypeSafeStreamSinkTransformer.new = function(inner) {
      this[_inner$] = inner;
    }).prototype = TypeSafeStreamSinkTransformer.prototype;
    dart.addTypeTests(TypeSafeStreamSinkTransformer);
    TypeSafeStreamSinkTransformer.prototype[_is_TypeSafeStreamSinkTransformer_default] = true;
    TypeSafeStreamSinkTransformer[dart.implements] = () => [StreamSinkTransformerOfS$T()];
    dart.setMethodSignature(TypeSafeStreamSinkTransformer, () => ({
      __proto__: dart.getMethods(TypeSafeStreamSinkTransformer.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setFieldSignature(TypeSafeStreamSinkTransformer, () => ({
      __proto__: dart.getFields(TypeSafeStreamSinkTransformer.__proto__),
      [_inner$]: dart.finalFieldType(src__stream_sink_transformer.StreamSinkTransformer)
    }));
    return TypeSafeStreamSinkTransformer;
  });
  src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer = src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$();
  dart.addTypeTests(src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer, _is_TypeSafeStreamSinkTransformer_default);
  const _transformer = Symbol('_transformer');
  const _is_StreamTransformerWrapper_default = Symbol('_is_StreamTransformerWrapper_default');
  src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$ = dart.generic((S, T) => {
    let _StreamTransformerWrapperSinkOfS$T = () => (_StreamTransformerWrapperSinkOfS$T = dart.constFn(src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$(S, T)))();
    let StreamSinkTransformerOfS$T = () => (StreamSinkTransformerOfS$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(S, T)))();
    let StreamTransformerOfS$T = () => (StreamTransformerOfS$T = dart.constFn(async.StreamTransformer$(S, T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class StreamTransformerWrapper extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return new (_StreamTransformerWrapperSinkOfS$T()).new(this[_transformer], sink);
      }
    }
    (StreamTransformerWrapper.new = function(transformer) {
      this[_transformer] = transformer;
    }).prototype = StreamTransformerWrapper.prototype;
    dart.addTypeTests(StreamTransformerWrapper);
    StreamTransformerWrapper.prototype[_is_StreamTransformerWrapper_default] = true;
    StreamTransformerWrapper[dart.implements] = () => [StreamSinkTransformerOfS$T()];
    dart.setMethodSignature(StreamTransformerWrapper, () => ({
      __proto__: dart.getMethods(StreamTransformerWrapper.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setFieldSignature(StreamTransformerWrapper, () => ({
      __proto__: dart.getFields(StreamTransformerWrapper.__proto__),
      [_transformer]: dart.finalFieldType(StreamTransformerOfS$T())
    }));
    return StreamTransformerWrapper;
  });
  src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper = src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$();
  dart.addTypeTests(src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper, _is_StreamTransformerWrapper_default);
  const _inner$0 = Symbol('_inner');
  const _controller$0 = Symbol('_controller');
  const _is__StreamTransformerWrapperSink_default = Symbol('_is__StreamTransformerWrapperSink_default');
  src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$ = dart.generic((S, T) => {
    let StreamControllerOfS = () => (StreamControllerOfS = dart.constFn(async.StreamController$(S)))();
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamSinkOfS = () => (StreamSinkOfS = dart.constFn(async.StreamSink$(S)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _StreamTransformerWrapperSink extends core.Object {
      get done() {
        return this[_inner$0].done;
      }
      add(event) {
        S._check(event);
        this[_controller$0].add(event);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_controller$0].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfS()._check(stream);
        return this[_controller$0].addStream(stream);
      }
      close() {
        this[_controller$0].close();
        return this[_inner$0].done;
      }
    }
    (_StreamTransformerWrapperSink.new = function(transformer, inner) {
      this[_controller$0] = StreamControllerOfS().new({sync: true});
      this[_inner$0] = inner;
      this[_controller$0].stream.transform(T, transformer).listen(dart.bind(this[_inner$0], 'add'), {onError: dart.bind(this[_inner$0], 'addError'), onDone: dart.fn(() => {
          this[_inner$0].close().catchError(dart.fn(_ => {
          }, dynamicToNull()));
        }, VoidToNull())});
    }).prototype = _StreamTransformerWrapperSink.prototype;
    dart.addTypeTests(_StreamTransformerWrapperSink);
    _StreamTransformerWrapperSink.prototype[_is__StreamTransformerWrapperSink_default] = true;
    _StreamTransformerWrapperSink[dart.implements] = () => [StreamSinkOfS()];
    dart.setMethodSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getMethods(_StreamTransformerWrapperSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getGetters(_StreamTransformerWrapperSink.__proto__),
      done: async.Future
    }));
    dart.setFieldSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getFields(_StreamTransformerWrapperSink.__proto__),
      [_controller$0]: dart.finalFieldType(StreamControllerOfS()),
      [_inner$0]: dart.finalFieldType(StreamSinkOfT())
    }));
    return _StreamTransformerWrapperSink;
  });
  src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink = src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$();
  dart.addTypeTests(src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink, _is__StreamTransformerWrapperSink_default);
  const _handleData = Symbol('_handleData');
  const _handleError = Symbol('_handleError');
  const _handleDone = Symbol('_handleDone');
  const _is_HandlerTransformer_default = Symbol('_is_HandlerTransformer_default');
  src__stream_sink_transformer__handler_transformer.HandlerTransformer$ = dart.generic((S, T) => {
    let _HandlerSinkOfS$T = () => (_HandlerSinkOfS$T = dart.constFn(src__stream_sink_transformer__handler_transformer._HandlerSink$(S, T)))();
    let StreamSinkTransformerOfS$T = () => (StreamSinkTransformerOfS$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(S, T)))();
    let SAndEventSinkOfTTovoid = () => (SAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [S, EventSinkOfT()])))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let ObjectAndStackTraceAndEventSinkOfTTovoid = () => (ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfT()])))();
    let EventSinkOfTTovoid = () => (EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [EventSinkOfT()])))();
    class HandlerTransformer extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return new (_HandlerSinkOfS$T()).new(this, sink);
      }
    }
    (HandlerTransformer.new = function(handleData, handleError, handleDone) {
      this[_handleData] = handleData;
      this[_handleError] = handleError;
      this[_handleDone] = handleDone;
    }).prototype = HandlerTransformer.prototype;
    dart.addTypeTests(HandlerTransformer);
    HandlerTransformer.prototype[_is_HandlerTransformer_default] = true;
    HandlerTransformer[dart.implements] = () => [StreamSinkTransformerOfS$T()];
    dart.setMethodSignature(HandlerTransformer, () => ({
      __proto__: dart.getMethods(HandlerTransformer.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setFieldSignature(HandlerTransformer, () => ({
      __proto__: dart.getFields(HandlerTransformer.__proto__),
      [_handleData]: dart.finalFieldType(SAndEventSinkOfTTovoid()),
      [_handleError]: dart.finalFieldType(ObjectAndStackTraceAndEventSinkOfTTovoid()),
      [_handleDone]: dart.finalFieldType(EventSinkOfTTovoid())
    }));
    return HandlerTransformer;
  });
  src__stream_sink_transformer__handler_transformer.HandlerTransformer = src__stream_sink_transformer__handler_transformer.HandlerTransformer$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer.HandlerTransformer, _is_HandlerTransformer_default);
  const _transformer$ = Symbol('_transformer');
  const _inner$1 = Symbol('_inner');
  const _safeCloseInner = Symbol('_safeCloseInner');
  const _is__HandlerSink_default = Symbol('_is__HandlerSink_default');
  src__stream_sink_transformer__handler_transformer._HandlerSink$ = dart.generic((S, T) => {
    let SAndEventSinkOfTTovoid = () => (SAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [S, EventSinkOfT()])))();
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamTransformerOfS$T = () => (StreamTransformerOfS$T = dart.constFn(async.StreamTransformer$(S, T)))();
    let StreamSinkOfS = () => (StreamSinkOfS = dart.constFn(async.StreamSink$(S)))();
    let HandlerTransformerOfS$T = () => (HandlerTransformerOfS$T = dart.constFn(src__stream_sink_transformer__handler_transformer.HandlerTransformer$(S, T)))();
    let _SafeCloseSinkOfT = () => (_SafeCloseSinkOfT = dart.constFn(src__stream_sink_transformer__handler_transformer._SafeCloseSink$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let ObjectAndStackTraceAndEventSinkOfTTovoid = () => (ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfT()])))();
    let EventSinkOfTTovoid = () => (EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [EventSinkOfT()])))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _HandlerSink extends core.Object {
      get done() {
        return this[_inner$1].done;
      }
      add(event) {
        S._check(event);
        if (SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData]) == null) {
          this[_inner$1].add(T.as(event));
        } else {
          SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData])(event, this[_safeCloseInner]);
        }
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError]) == null) {
          this[_inner$1].addError(error, stackTrace);
        } else {
          ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError])(error, stackTrace, this[_safeCloseInner]);
        }
      }
      addStream(stream) {
        StreamOfS()._check(stream);
        return this[_inner$1].addStream(stream.transform(T, StreamTransformerOfS$T().fromHandlers({handleData: SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData]), handleError: ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError]), handleDone: dart.fn(src__stream_sink_transformer__handler_transformer._closeSink, EventSinkTovoid())})));
      }
      close() {
        if (EventSinkOfTTovoid()._check(this[_transformer$][_handleDone]) == null) return this[_inner$1].close();
        EventSinkOfTTovoid()._check(this[_transformer$][_handleDone])(this[_safeCloseInner]);
        return this[_inner$1].done;
      }
    }
    (_HandlerSink.new = function(transformer, inner) {
      this[_transformer$] = transformer;
      this[_inner$1] = inner;
      this[_safeCloseInner] = new (_SafeCloseSinkOfT()).new(inner);
    }).prototype = _HandlerSink.prototype;
    dart.addTypeTests(_HandlerSink);
    _HandlerSink.prototype[_is__HandlerSink_default] = true;
    _HandlerSink[dart.implements] = () => [StreamSinkOfS()];
    dart.setMethodSignature(_HandlerSink, () => ({
      __proto__: dart.getMethods(_HandlerSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_HandlerSink, () => ({
      __proto__: dart.getGetters(_HandlerSink.__proto__),
      done: async.Future
    }));
    dart.setFieldSignature(_HandlerSink, () => ({
      __proto__: dart.getFields(_HandlerSink.__proto__),
      [_transformer$]: dart.finalFieldType(HandlerTransformerOfS$T()),
      [_inner$1]: dart.finalFieldType(StreamSinkOfT()),
      [_safeCloseInner]: dart.finalFieldType(StreamSinkOfT())
    }));
    return _HandlerSink;
  });
  src__stream_sink_transformer__handler_transformer._HandlerSink = src__stream_sink_transformer__handler_transformer._HandlerSink$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer._HandlerSink, _is__HandlerSink_default);
  const _is__SafeCloseSink_default = Symbol('_is__SafeCloseSink_default');
  src__stream_sink_transformer__handler_transformer._SafeCloseSink$ = dart.generic(T => {
    class _SafeCloseSink extends src__delegate__stream_sink.DelegatingStreamSink$(T) {
      close() {
        return super.close().catchError(dart.fn(_ => {
        }, dynamicToNull()));
      }
    }
    (_SafeCloseSink.new = function(inner) {
      _SafeCloseSink.__proto__.new.call(this, inner);
    }).prototype = _SafeCloseSink.prototype;
    dart.addTypeTests(_SafeCloseSink);
    _SafeCloseSink.prototype[_is__SafeCloseSink_default] = true;
    return _SafeCloseSink;
  });
  src__stream_sink_transformer__handler_transformer._SafeCloseSink = src__stream_sink_transformer__handler_transformer._SafeCloseSink$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer._SafeCloseSink, _is__SafeCloseSink_default);
  src__stream_sink_transformer__handler_transformer._closeSink = function(sink) {
    sink.close();
  };
  const _is_StreamSinkTransformer_default = Symbol('_is_StreamSinkTransformer_default');
  src__stream_sink_transformer.StreamSinkTransformer$ = dart.generic((S, T) => {
    let StreamTransformerWrapperOfS$T = () => (StreamTransformerWrapperOfS$T = dart.constFn(src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$(S, T)))();
    let HandlerTransformerOfS$T = () => (HandlerTransformerOfS$T = dart.constFn(src__stream_sink_transformer__handler_transformer.HandlerTransformer$(S, T)))();
    class StreamSinkTransformer extends core.Object {
      static fromStreamTransformer(transformer) {
        return new (StreamTransformerWrapperOfS$T()).new(transformer);
      }
      static fromHandlers(opts) {
        let handleData = opts && 'handleData' in opts ? opts.handleData : null;
        let handleError = opts && 'handleError' in opts ? opts.handleError : null;
        let handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
        return new (HandlerTransformerOfS$T()).new(handleData, handleError, handleDone);
      }
      static typed(S, T, transformer) {
        return src__stream_sink_transformer.StreamSinkTransformer$(S, T).is(transformer) ? transformer : new (src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$(S, T)).new(transformer);
      }
    }
    (StreamSinkTransformer[dart.mixinNew] = function() {
    }).prototype = StreamSinkTransformer.prototype;
    dart.addTypeTests(StreamSinkTransformer);
    StreamSinkTransformer.prototype[_is_StreamSinkTransformer_default] = true;
    return StreamSinkTransformer;
  });
  src__stream_sink_transformer.StreamSinkTransformer = src__stream_sink_transformer.StreamSinkTransformer$();
  dart.addTypeTests(src__stream_sink_transformer.StreamSinkTransformer, _is_StreamSinkTransformer_default);
  const _is_Result_default = Symbol('_is_Result_default');
  src__result__result.Result$ = dart.generic(T => {
    let ValueResultOfT = () => (ValueResultOfT = dart.constFn(src__result__value.ValueResult$(T)))();
    class Result extends core.Object {
      static new(computation) {
        try {
          return new (ValueResultOfT()).new(computation());
        } catch (e) {
          let s = dart.stackTrace(e);
          return new src__result__error.ErrorResult.new(e, s);
        }
      }
      static value(value) {
        return new (ValueResultOfT()).new(value);
      }
      static error(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        return new src__result__error.ErrorResult.new(error, stackTrace);
      }
      static capture(T, future) {
        return future.then(src__result__result.Result$(T), dart.fn(value => new (src__result__value.ValueResult$(T)).new(value), dart.fnType(src__result__value.ValueResult$(T), [T])), {onError: dart.fn((error, stackTrace) => new src__result__error.ErrorResult.new(error, core.StackTrace._check(stackTrace)), dynamicAnddynamicToErrorResult())});
      }
      static captureAll(T, elements) {
        let results = _interceptors.JSArray$(src__result__result.Result$(T)).of([]);
        let pending = 0;
        let completer = null;
        for (let element of elements) {
          if (async.Future$(T).is(element)) {
            let i = results[$length];
            results[$add](null);
            pending++;
            src__result__result.Result.capture(T, element).then(core.Null, dart.fn(result => {
              results[$_set](i, result);
              if (--pending === 0) {
                completer.complete(results);
              }
            }, dart.fnType(core.Null, [src__result__result.Result$(T)])));
          } else {
            results[$add](src__result__result.Result$(T).value(T._check(element)));
          }
        }
        if (pending === 0) {
          return async.Future$(core.List$(src__result__result.Result$(T))).value(results);
        }
        completer = async.Completer$(core.List$(src__result__result.Result$(T))).new();
        return completer.future;
      }
      static release(T, future) {
        return future.then(T, dart.fn(result => result.asFuture, dart.fnType(async.Future$(T), [src__result__result.Result$(T)])));
      }
      static captureStream(T, source) {
        return source.transform(src__result__result.Result$(T), new (src__result__capture_transformer.CaptureStreamTransformer$(T)).new());
      }
      static releaseStream(T, source) {
        return source.transform(T, new (src__result__release_transformer.ReleaseStreamTransformer$(T)).new());
      }
      static releaseSink(T, sink) {
        return new (src__result__release_sink.ReleaseSink$(T)).new(sink);
      }
      static captureSink(T, sink) {
        return new (src__result__capture_sink.CaptureSink$(T)).new(sink);
      }
      static flatten(T, result) {
        if (dart.test(result.isValue)) return result.asValue.value;
        return result.asError;
      }
      static flattenAll(T, results) {
        let values = _interceptors.JSArray$(T).of([]);
        for (let result of results) {
          if (dart.test(result.isValue)) {
            values[$add](result.asValue.value);
          } else {
            return result.asError;
          }
        }
        return src__result__result.Result$(core.List$(T)).value(values);
      }
    }
    (Result[dart.mixinNew] = function() {
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    return Result;
  });
  src__result__result.Result = src__result__result.Result$();
  dart.defineLazy(src__result__result.Result, {
    /*src__result__result.Result.captureStreamTransformer*/get captureStreamTransformer() {
      return dart.const(new (CaptureStreamTransformerOfObject()).new());
    },
    /*src__result__result.Result.releaseStreamTransformer*/get releaseStreamTransformer() {
      return dart.const(new (ReleaseStreamTransformerOfObject()).new());
    },
    /*src__result__result.Result.captureSinkTransformer*/get captureSinkTransformer() {
      return dart.const(StreamSinkTransformerOfObject$ResultOfObject().fromStreamTransformer(dart.const(new (CaptureStreamTransformerOfObject()).new())));
    },
    /*src__result__result.Result.releaseSinkTransformer*/get releaseSinkTransformer() {
      return dart.const(StreamSinkTransformerOfResultOfObject$Object().fromStreamTransformer(dart.const(new (ReleaseStreamTransformerOfObject()).new())));
    }
  });
  dart.addTypeTests(src__result__result.Result, _is_Result_default);
  const _is_ReleaseStreamTransformer_default = Symbol('_is_ReleaseStreamTransformer_default');
  src__result__release_transformer.ReleaseStreamTransformer$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let StreamOfResultOfT = () => (StreamOfResultOfT = dart.constFn(async.Stream$(ResultOfT())))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ReleaseStreamTransformer extends async.StreamTransformerBase$(src__result__result.Result$(T), T) {
      bind(source) {
        StreamOfResultOfT()._check(source);
        return StreamOfT().eventTransformed(source, dart.fn(src__result__release_transformer.ReleaseStreamTransformer._createSink, EventSinkToEventSinkOfResult()));
      }
      static _createSink(sink) {
        return new src__result__release_sink.ReleaseSink.new(sink);
      }
    }
    (ReleaseStreamTransformer.new = function() {
      ReleaseStreamTransformer.__proto__.new.call(this);
    }).prototype = ReleaseStreamTransformer.prototype;
    dart.addTypeTests(ReleaseStreamTransformer);
    ReleaseStreamTransformer.prototype[_is_ReleaseStreamTransformer_default] = true;
    dart.setMethodSignature(ReleaseStreamTransformer, () => ({
      __proto__: dart.getMethods(ReleaseStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    return ReleaseStreamTransformer;
  });
  src__result__release_transformer.ReleaseStreamTransformer = src__result__release_transformer.ReleaseStreamTransformer$();
  dart.addTypeTests(src__result__release_transformer.ReleaseStreamTransformer, _is_ReleaseStreamTransformer_default);
  const _sink$1 = Symbol('_sink');
  const _is_ReleaseSink_default = Symbol('_is_ReleaseSink_default');
  src__result__release_sink.ReleaseSink$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let EventSinkOfResultOfT = () => (EventSinkOfResultOfT = dart.constFn(async.EventSink$(ResultOfT())))();
    class ReleaseSink extends core.Object {
      add(result) {
        ResultOfT()._check(result);
        result.addTo(EventSinkOfT()._check(this[_sink$1]));
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink$1].addError(error, stackTrace);
      }
      close() {
        this[_sink$1].close();
      }
    }
    (ReleaseSink.new = function(sink) {
      this[_sink$1] = sink;
    }).prototype = ReleaseSink.prototype;
    dart.addTypeTests(ReleaseSink);
    ReleaseSink.prototype[_is_ReleaseSink_default] = true;
    ReleaseSink[dart.implements] = () => [EventSinkOfResultOfT()];
    dart.setMethodSignature(ReleaseSink, () => ({
      __proto__: dart.getMethods(ReleaseSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ReleaseSink, () => ({
      __proto__: dart.getFields(ReleaseSink.__proto__),
      [_sink$1]: dart.finalFieldType(async.EventSink)
    }));
    return ReleaseSink;
  });
  src__result__release_sink.ReleaseSink = src__result__release_sink.ReleaseSink$();
  dart.addTypeTests(src__result__release_sink.ReleaseSink, _is_ReleaseSink_default);
  const _is_ValueResult_default = Symbol('_is_ValueResult_default');
  src__result__value.ValueResult$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    class ValueResult extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get isValue() {
        return true;
      }
      get isError() {
        return false;
      }
      get asValue() {
        return this;
      }
      get asError() {
        return null;
      }
      complete(completer) {
        CompleterOfT()._check(completer);
        completer.complete(this.value);
      }
      addTo(sink) {
        EventSinkOfT()._check(sink);
        sink.add(this.value);
      }
      get asFuture() {
        return FutureOfT().value(this.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.value)) ^ 842997089) >>> 0;
      }
      _equals(other) {
        if (other == null) return false;
        return src__result__value.ValueResult.is(other) && dart.equals(this.value, other.value);
      }
    }
    (ValueResult.new = function(value) {
      this[value$] = value;
    }).prototype = ValueResult.prototype;
    dart.addTypeTests(ValueResult);
    ValueResult.prototype[_is_ValueResult_default] = true;
    const value$ = Symbol("ValueResult.value");
    ValueResult[dart.implements] = () => [ResultOfT()];
    dart.setMethodSignature(ValueResult, () => ({
      __proto__: dart.getMethods(ValueResult.__proto__),
      complete: dart.fnType(dart.void, [core.Object]),
      addTo: dart.fnType(dart.void, [core.Object]),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ValueResult, () => ({
      __proto__: dart.getGetters(ValueResult.__proto__),
      isValue: core.bool,
      isError: core.bool,
      asValue: src__result__value.ValueResult$(T),
      asError: src__result__error.ErrorResult,
      asFuture: async.Future$(T),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(ValueResult, () => ({
      __proto__: dart.getFields(ValueResult.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueResult, ['_equals']);
    dart.defineExtensionAccessors(ValueResult, ['hashCode']);
    return ValueResult;
  });
  src__result__value.ValueResult = src__result__value.ValueResult$();
  dart.addTypeTests(src__result__value.ValueResult, _is_ValueResult_default);
  src__result__error.ErrorResult = class ErrorResult extends core.Object {
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
    get isValue() {
      return false;
    }
    get isError() {
      return true;
    }
    get asValue() {
      return null;
    }
    get asError() {
      return this;
    }
    complete(completer) {
      completer.completeError(this.error, this.stackTrace);
    }
    addTo(sink) {
      sink.addError(this.error, this.stackTrace);
    }
    get asFuture() {
      return FutureOfNull().error(this.error, this.stackTrace);
    }
    handle(errorHandler) {
      if (dynamicAnddynamicTodynamic().is(errorHandler)) {
        errorHandler(this.error, this.stackTrace);
      } else {
        dart.dcall(errorHandler, [this.error]);
      }
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ 492929599) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return src__result__error.ErrorResult.is(other) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace);
    }
  };
  (src__result__error.ErrorResult.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
  }).prototype = src__result__error.ErrorResult.prototype;
  dart.addTypeTests(src__result__error.ErrorResult);
  const error$ = Symbol("ErrorResult.error");
  const stackTrace$ = Symbol("ErrorResult.stackTrace");
  src__result__error.ErrorResult[dart.implements] = () => [ResultOfNull()];
  dart.setMethodSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getMethods(src__result__error.ErrorResult.__proto__),
    complete: dart.fnType(dart.void, [async.Completer]),
    addTo: dart.fnType(dart.void, [async.EventSink]),
    handle: dart.fnType(dart.void, [core.Function]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getGetters(src__result__error.ErrorResult.__proto__),
    isValue: core.bool,
    isError: core.bool,
    asValue: src__result__value.ValueResult$(core.Null),
    asError: src__result__error.ErrorResult,
    asFuture: async.Future$(core.Null)
  }));
  dart.setFieldSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getFields(src__result__error.ErrorResult.__proto__),
    error: dart.finalFieldType(core.Object),
    stackTrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(src__result__error.ErrorResult, ['_equals']);
  dart.defineExtensionAccessors(src__result__error.ErrorResult, ['hashCode']);
  const _is_CaptureStreamTransformer_default = Symbol('_is_CaptureStreamTransformer_default');
  src__result__capture_transformer.CaptureStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let CaptureSinkOfT = () => (CaptureSinkOfT = dart.constFn(src__result__capture_sink.CaptureSink$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let EventSinkOfResultOfT = () => (EventSinkOfResultOfT = dart.constFn(async.EventSink$(ResultOfT())))();
    let EventSinkOfResultOfTToCaptureSinkOfT = () => (EventSinkOfResultOfTToCaptureSinkOfT = dart.constFn(dart.fnType(CaptureSinkOfT(), [EventSinkOfResultOfT()])))();
    let StreamOfResultOfT = () => (StreamOfResultOfT = dart.constFn(async.Stream$(ResultOfT())))();
    class CaptureStreamTransformer extends async.StreamTransformerBase$(T, src__result__result.Result$(T)) {
      bind(source) {
        StreamOfT()._check(source);
        return StreamOfResultOfT().eventTransformed(source, dart.fn(sink => new (CaptureSinkOfT()).new(sink), EventSinkOfResultOfTToCaptureSinkOfT()));
      }
    }
    (CaptureStreamTransformer.new = function() {
      CaptureStreamTransformer.__proto__.new.call(this);
    }).prototype = CaptureStreamTransformer.prototype;
    dart.addTypeTests(CaptureStreamTransformer);
    CaptureStreamTransformer.prototype[_is_CaptureStreamTransformer_default] = true;
    dart.setMethodSignature(CaptureStreamTransformer, () => ({
      __proto__: dart.getMethods(CaptureStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__result__result.Result$(T)), [core.Object])
    }));
    return CaptureStreamTransformer;
  });
  src__result__capture_transformer.CaptureStreamTransformer = src__result__capture_transformer.CaptureStreamTransformer$();
  dart.addTypeTests(src__result__capture_transformer.CaptureStreamTransformer, _is_CaptureStreamTransformer_default);
  const _sink$2 = Symbol('_sink');
  const _is_CaptureSink_default = Symbol('_is_CaptureSink_default');
  src__result__capture_sink.CaptureSink$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let EventSinkOfResultOfT = () => (EventSinkOfResultOfT = dart.constFn(async.EventSink$(ResultOfT())))();
    class CaptureSink extends core.Object {
      add(value) {
        T._check(value);
        this[_sink$2].add(ResultOfT().value(value));
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink$2].add(ResultOfT().error(error, stackTrace));
      }
      close() {
        this[_sink$2].close();
      }
    }
    (CaptureSink.new = function(sink) {
      this[_sink$2] = sink;
    }).prototype = CaptureSink.prototype;
    dart.addTypeTests(CaptureSink);
    CaptureSink.prototype[_is_CaptureSink_default] = true;
    CaptureSink[dart.implements] = () => [EventSinkOfT()];
    dart.setMethodSignature(CaptureSink, () => ({
      __proto__: dart.getMethods(CaptureSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(CaptureSink, () => ({
      __proto__: dart.getFields(CaptureSink.__proto__),
      [_sink$2]: dart.finalFieldType(EventSinkOfResultOfT())
    }));
    return CaptureSink;
  });
  src__result__capture_sink.CaptureSink = src__result__capture_sink.CaptureSink$();
  dart.addTypeTests(src__result__capture_sink.CaptureSink, _is_CaptureSink_default);
  const _result = Symbol('_result');
  const _is_ResultFuture_default = Symbol('_is_ResultFuture_default');
  src__result__future.ResultFuture$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let ResultOfTToNull = () => (ResultOfTToNull = dart.constFn(dart.fnType(core.Null, [ResultOfT()])))();
    class ResultFuture extends src__delegate__future.DelegatingFuture$(T) {
      get isComplete() {
        return this.result != null;
      }
      get result() {
        return this[_result];
      }
    }
    (ResultFuture.new = function(future) {
      this[_result] = null;
      ResultFuture.__proto__.new.call(this, future);
      src__result__result.Result.capture(T, future).then(core.Null, dart.fn(result => {
        this[_result] = result;
      }, ResultOfTToNull()));
    }).prototype = ResultFuture.prototype;
    dart.addTypeTests(ResultFuture);
    ResultFuture.prototype[_is_ResultFuture_default] = true;
    dart.setGetterSignature(ResultFuture, () => ({
      __proto__: dart.getGetters(ResultFuture.__proto__),
      isComplete: core.bool,
      result: src__result__result.Result$(T)
    }));
    dart.setFieldSignature(ResultFuture, () => ({
      __proto__: dart.getFields(ResultFuture.__proto__),
      [_result]: dart.fieldType(ResultOfT())
    }));
    return ResultFuture;
  });
  src__result__future.ResultFuture = src__result__future.ResultFuture$();
  dart.addTypeTests(src__result__future.ResultFuture, _is_ResultFuture_default);
  const _is_SingleSubscriptionTransformer_default = Symbol('_is_SingleSubscriptionTransformer_default');
  src__single_subscription_transformer.SingleSubscriptionTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let SToNull = () => (SToNull = dart.constFn(dart.fnType(core.Null, [S])))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class SingleSubscriptionTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        let subscription = null;
        let controller = StreamControllerOfT().new({sync: true, onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        subscription = stream.listen(dart.fn(value => {
          try {
            controller.add(T.as(value));
          } catch (error) {
            if (core.CastError.is(error)) {
              let stackTrace = dart.stackTrace(error);
              controller.addError(error, stackTrace);
            } else
              throw error;
          }
        }, SToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
        return controller.stream;
      }
    }
    (SingleSubscriptionTransformer.new = function() {
      SingleSubscriptionTransformer.__proto__.new.call(this);
    }).prototype = SingleSubscriptionTransformer.prototype;
    dart.addTypeTests(SingleSubscriptionTransformer);
    SingleSubscriptionTransformer.prototype[_is_SingleSubscriptionTransformer_default] = true;
    dart.setMethodSignature(SingleSubscriptionTransformer, () => ({
      __proto__: dart.getMethods(SingleSubscriptionTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    return SingleSubscriptionTransformer;
  });
  src__single_subscription_transformer.SingleSubscriptionTransformer = src__single_subscription_transformer.SingleSubscriptionTransformer$();
  dart.addTypeTests(src__single_subscription_transformer.SingleSubscriptionTransformer, _is_SingleSubscriptionTransformer_default);
  const _controller$1 = Symbol('_controller');
  const _closed$0 = Symbol('_closed');
  const _state = Symbol('_state');
  const _subscriptions = Symbol('_subscriptions');
  const _onListen = Symbol('_onListen');
  const _onPause = Symbol('_onPause');
  const _onResume = Symbol('_onResume');
  const _onCancel$ = Symbol('_onCancel');
  const _onCancelBroadcast = Symbol('_onCancelBroadcast');
  const _listenToStream = Symbol('_listenToStream');
  const _is_StreamGroup_default = Symbol('_is_StreamGroup_default');
  src__stream_group.StreamGroup$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let LinkedMapOfStreamOfT$StreamSubscriptionOfT = () => (LinkedMapOfStreamOfT$StreamSubscriptionOfT = dart.constFn(_js_helper.LinkedMap$(StreamOfT(), StreamSubscriptionOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let VoidToStreamSubscriptionOfT = () => (VoidToStreamSubscriptionOfT = dart.constFn(dart.fnType(StreamSubscriptionOfT(), [])))();
    let StreamOfTAndStreamSubscriptionOfTToNull = () => (StreamOfTAndStreamSubscriptionOfTToNull = dart.constFn(dart.fnType(core.Null, [StreamOfT(), StreamSubscriptionOfT()])))();
    let StreamSubscriptionOfTToFuture = () => (StreamSubscriptionOfTToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfT()])))();
    let SinkOfStreamOfT = () => (SinkOfStreamOfT = dart.constFn(core.Sink$(StreamOfT())))();
    let MapOfStreamOfT$StreamSubscriptionOfT = () => (MapOfStreamOfT$StreamSubscriptionOfT = dart.constFn(core.Map$(StreamOfT(), StreamSubscriptionOfT())))();
    class StreamGroup extends core.Object {
      get stream() {
        return this[_controller$1].stream;
      }
      static merge(T, streams) {
        let group = new (src__stream_group.StreamGroup$(T)).new();
        streams[$forEach](dart.bind(group, 'add'));
        group.close();
        return group.stream;
      }
      add(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed$0])) {
          dart.throw(new core.StateError.new("Can't add a Stream to a closed StreamGroup."));
        }
        if (dart.equals(this[_state], src__stream_group._StreamGroupState.dormant)) {
          this[_subscriptions][$putIfAbsent](stream, dart.fn(() => null, VoidToNull()));
        } else if (dart.equals(this[_state], src__stream_group._StreamGroupState.canceled)) {
          return stream.listen(null).cancel();
        } else {
          this[_subscriptions][$putIfAbsent](stream, dart.fn(() => this[_listenToStream](stream), VoidToStreamSubscriptionOfT()));
        }
        return null;
      }
      remove(stream) {
        StreamOfT()._check(stream);
        let subscription = this[_subscriptions][$remove](stream);
        let future = subscription == null ? null : subscription.cancel();
        if (dart.test(this[_closed$0]) && dart.test(this[_subscriptions][$isEmpty])) this[_controller$1].close();
        return future;
      }
      [_onListen]() {
        this[_state] = src__stream_group._StreamGroupState.listening;
        this[_subscriptions][$forEach](dart.fn((stream, subscription) => {
          if (subscription != null) return;
          this[_subscriptions][$_set](stream, this[_listenToStream](stream));
        }, StreamOfTAndStreamSubscriptionOfTToNull()));
      }
      [_onPause]() {
        this[_state] = src__stream_group._StreamGroupState.paused;
        for (let subscription of this[_subscriptions][$values]) {
          subscription.pause();
        }
      }
      [_onResume]() {
        this[_state] = src__stream_group._StreamGroupState.listening;
        for (let subscription of this[_subscriptions][$values]) {
          subscription.resume();
        }
      }
      [_onCancel$]() {
        this[_state] = src__stream_group._StreamGroupState.canceled;
        let futures = this[_subscriptions][$values][$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionOfTToFuture()))[$where](dart.fn(future => future != null, FutureTobool()))[$toList]();
        this[_subscriptions][$clear]();
        return dart.test(futures[$isEmpty]) ? null : async.Future.wait(dart.dynamic, futures);
      }
      [_onCancelBroadcast]() {
        this[_state] = src__stream_group._StreamGroupState.dormant;
        this[_subscriptions][$forEach](dart.fn((stream, subscription) => {
          if (!dart.test(stream.isBroadcast)) return;
          subscription.cancel();
          this[_subscriptions][$_set](stream, null);
        }, StreamOfTAndStreamSubscriptionOfTToNull()));
      }
      [_listenToStream](stream) {
        StreamOfT()._check(stream);
        let subscription = stream.listen(dart.bind(this[_controller$1], 'add'), {onError: dart.bind(this[_controller$1], 'addError'), onDone: dart.fn(() => this.remove(stream), VoidToFuture())});
        if (dart.equals(this[_state], src__stream_group._StreamGroupState.paused)) subscription.pause();
        return subscription;
      }
      close() {
        if (dart.test(this[_closed$0])) return this[_controller$1].done;
        this[_closed$0] = true;
        if (dart.test(this[_subscriptions][$isEmpty])) this[_controller$1].close();
        return this[_controller$1].done;
      }
    }
    (StreamGroup.new = function() {
      this[_controller$1] = null;
      this[_closed$0] = false;
      this[_state] = src__stream_group._StreamGroupState.dormant;
      this[_subscriptions] = new (LinkedMapOfStreamOfT$StreamSubscriptionOfT()).new();
      this[_controller$1] = StreamControllerOfT().new({onListen: dart.bind(this, _onListen), onPause: dart.bind(this, _onPause), onResume: dart.bind(this, _onResume), onCancel: dart.bind(this, _onCancel$), sync: true});
    }).prototype = StreamGroup.prototype;
    (StreamGroup.broadcast = function() {
      this[_controller$1] = null;
      this[_closed$0] = false;
      this[_state] = src__stream_group._StreamGroupState.dormant;
      this[_subscriptions] = new (LinkedMapOfStreamOfT$StreamSubscriptionOfT()).new();
      this[_controller$1] = StreamControllerOfT().broadcast({onListen: dart.bind(this, _onListen), onCancel: dart.bind(this, _onCancelBroadcast), sync: true});
    }).prototype = StreamGroup.prototype;
    dart.addTypeTests(StreamGroup);
    StreamGroup.prototype[_is_StreamGroup_default] = true;
    StreamGroup[dart.implements] = () => [SinkOfStreamOfT()];
    dart.setMethodSignature(StreamGroup, () => ({
      __proto__: dart.getMethods(StreamGroup.__proto__),
      add: dart.fnType(async.Future, [core.Object]),
      remove: dart.fnType(async.Future, [core.Object]),
      [_onListen]: dart.fnType(dart.void, []),
      [_onPause]: dart.fnType(dart.void, []),
      [_onResume]: dart.fnType(dart.void, []),
      [_onCancel$]: dart.fnType(async.Future, []),
      [_onCancelBroadcast]: dart.fnType(dart.void, []),
      [_listenToStream]: dart.fnType(async.StreamSubscription$(T), [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(StreamGroup, () => ({
      __proto__: dart.getGetters(StreamGroup.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setFieldSignature(StreamGroup, () => ({
      __proto__: dart.getFields(StreamGroup.__proto__),
      [_controller$1]: dart.fieldType(StreamControllerOfT()),
      [_closed$0]: dart.fieldType(core.bool),
      [_state]: dart.fieldType(src__stream_group._StreamGroupState),
      [_subscriptions]: dart.finalFieldType(MapOfStreamOfT$StreamSubscriptionOfT())
    }));
    return StreamGroup;
  });
  src__stream_group.StreamGroup = src__stream_group.StreamGroup$();
  dart.addTypeTests(src__stream_group.StreamGroup, _is_StreamGroup_default);
  src__stream_group._StreamGroupState = class _StreamGroupState extends core.Object {
    toString() {
      return this.name;
    }
  };
  (src__stream_group._StreamGroupState.new = function(name) {
    this.name = name;
  }).prototype = src__stream_group._StreamGroupState.prototype;
  dart.addTypeTests(src__stream_group._StreamGroupState);
  dart.setFieldSignature(src__stream_group._StreamGroupState, () => ({
    __proto__: dart.getFields(src__stream_group._StreamGroupState.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__stream_group._StreamGroupState, ['toString']);
  dart.defineLazy(src__stream_group._StreamGroupState, {
    /*src__stream_group._StreamGroupState.dormant*/get dormant() {
      return dart.const(new src__stream_group._StreamGroupState.new("dormant"));
    },
    /*src__stream_group._StreamGroupState.listening*/get listening() {
      return dart.const(new src__stream_group._StreamGroupState.new("listening"));
    },
    /*src__stream_group._StreamGroupState.paused*/get paused() {
      return dart.const(new src__stream_group._StreamGroupState.new("paused"));
    },
    /*src__stream_group._StreamGroupState.canceled*/get canceled() {
      return dart.const(new src__stream_group._StreamGroupState.new("canceled"));
    }
  });
  const _source$ = Symbol('_source');
  const _is_SubscriptionStream_default = Symbol('_is_SubscriptionStream_default');
  src__subscription_stream.SubscriptionStream$ = dart.generic(T => {
    let _CancelOnErrorSubscriptionWrapperOfT = () => (_CancelOnErrorSubscriptionWrapperOfT = dart.constFn(src__subscription_stream._CancelOnErrorSubscriptionWrapper$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class SubscriptionStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_source$] == null) {
          dart.throw(new core.StateError.new("Stream has already been listened to."));
        }
        cancelOnError = true === cancelOnError;
        let subscription = this[_source$];
        this[_source$] = null;
        let result = dart.test(cancelOnError) ? new (_CancelOnErrorSubscriptionWrapperOfT()).new(subscription) : subscription;
        result.onData(onData);
        result.onError(onError);
        result.onDone(onDone);
        subscription.resume();
        return result;
      }
    }
    (SubscriptionStream.new = function(subscription) {
      this[_source$] = subscription;
      SubscriptionStream.__proto__.new.call(this);
      this[_source$].pause();
      this[_source$].onData(null);
      this[_source$].onError(null);
      this[_source$].onDone(null);
    }).prototype = SubscriptionStream.prototype;
    dart.addTypeTests(SubscriptionStream);
    SubscriptionStream.prototype[_is_SubscriptionStream_default] = true;
    dart.setMethodSignature(SubscriptionStream, () => ({
      __proto__: dart.getMethods(SubscriptionStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(SubscriptionStream, () => ({
      __proto__: dart.getFields(SubscriptionStream.__proto__),
      [_source$]: dart.fieldType(StreamSubscriptionOfT())
    }));
    return SubscriptionStream;
  });
  src__subscription_stream.SubscriptionStream = src__subscription_stream.SubscriptionStream$();
  dart.addTypeTests(src__subscription_stream.SubscriptionStream, _is_SubscriptionStream_default);
  const _is__CancelOnErrorSubscriptionWrapper_default = Symbol('_is__CancelOnErrorSubscriptionWrapper_default');
  src__subscription_stream._CancelOnErrorSubscriptionWrapper$ = dart.generic(T => {
    class _CancelOnErrorSubscriptionWrapper extends src__delegate__stream_subscription.DelegatingStreamSubscription$(T) {
      onError(handleError) {
        super.onError(dart.fn((error, stackTrace) => {
          let cancelFuture = super.cancel();
          if (cancelFuture != null) {
            cancelFuture.whenComplete(dart.fn(() => {
              if (dynamicAnddynamicTodynamic().is(handleError)) {
                handleError(error, stackTrace);
              } else {
                dart.dcall(handleError, [error]);
              }
            }, VoidToNull()));
          } else {
            if (dynamicAnddynamicTodynamic().is(handleError)) {
              handleError(error, stackTrace);
            } else {
              dart.dcall(handleError, [error]);
            }
          }
        }, dynamicAndStackTraceToNull()));
      }
    }
    (_CancelOnErrorSubscriptionWrapper.new = function(subscription) {
      _CancelOnErrorSubscriptionWrapper.__proto__.new.call(this, subscription);
    }).prototype = _CancelOnErrorSubscriptionWrapper.prototype;
    dart.addTypeTests(_CancelOnErrorSubscriptionWrapper);
    _CancelOnErrorSubscriptionWrapper.prototype[_is__CancelOnErrorSubscriptionWrapper_default] = true;
    return _CancelOnErrorSubscriptionWrapper;
  });
  src__subscription_stream._CancelOnErrorSubscriptionWrapper = src__subscription_stream._CancelOnErrorSubscriptionWrapper$();
  dart.addTypeTests(src__subscription_stream._CancelOnErrorSubscriptionWrapper, _is__CancelOnErrorSubscriptionWrapper_default);
  const _stream$ = Symbol('_stream');
  const _subscription$0 = Symbol('_subscription');
  const _buffer = Symbol('_buffer');
  const _controllers = Symbol('_controllers');
  const _closeGroup = Symbol('_closeGroup');
  const _isDone$ = Symbol('_isDone');
  const _isClosed$ = Symbol('_isClosed');
  const _onListen$ = Symbol('_onListen');
  const _onPause$ = Symbol('_onPause');
  const _onResume$ = Symbol('_onResume');
  const _onCancel$0 = Symbol('_onCancel');
  const _cancelSubscription = Symbol('_cancelSubscription');
  const _onData = Symbol('_onData');
  const _onError = Symbol('_onError');
  const _onDone = Symbol('_onDone');
  const _is_StreamSplitter_default = Symbol('_is_StreamSplitter_default');
  src__stream_splitter.StreamSplitter$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let JSArrayOfResultOfT = () => (JSArrayOfResultOfT = dart.constFn(_interceptors.JSArray$(ResultOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let _HashSetOfStreamControllerOfT = () => (_HashSetOfStreamControllerOfT = dart.constFn(collection$._HashSet$(StreamControllerOfT())))();
    let StreamControllerOfTTobool = () => (StreamControllerOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamControllerOfT()])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let ListOfResultOfT = () => (ListOfResultOfT = dart.constFn(core.List$(ResultOfT())))();
    let SetOfStreamControllerOfT = () => (SetOfStreamControllerOfT = dart.constFn(core.Set$(StreamControllerOfT())))();
    class StreamSplitter extends core.Object {
      static splitFrom(T, stream, count) {
        if (count === void 0) count = null;
        if (count == null) count = 2;
        let splitter = new (src__stream_splitter.StreamSplitter$(T)).new(stream);
        let streams = core.List$(async.Stream$(T)).generate(count, dart.fn(_ => splitter.split(), dart.fnType(async.Stream$(T), [core.int])));
        splitter.close();
        return streams;
      }
      split() {
        if (dart.test(this[_isClosed$])) {
          dart.throw(new core.StateError.new("Can't call split() on a closed StreamSplitter."));
        }
        let controller = StreamControllerOfT().new({onListen: dart.bind(this, _onListen$), onPause: dart.bind(this, _onPause$), onResume: dart.bind(this, _onResume$)});
        controller.onCancel = dart.fn(() => this[_onCancel$0](controller), VoidTovoid());
        for (let result of this[_buffer]) {
          result.addTo(controller);
        }
        if (dart.test(this[_isDone$])) {
          this[_closeGroup].add(controller.close());
        } else {
          this[_controllers].add(controller);
        }
        return controller.stream;
      }
      close() {
        if (dart.test(this[_isClosed$])) return this[_closeGroup].future;
        this[_isClosed$] = true;
        this[_buffer][$clear]();
        if (dart.test(this[_controllers].isEmpty)) this[_cancelSubscription]();
        return this[_closeGroup].future;
      }
      [_cancelSubscription]() {
        if (!dart.test(this[_controllers].isEmpty)) dart.assertFailed();
        if (!dart.test(this[_isClosed$])) dart.assertFailed();
        let future = null;
        if (this[_subscription$0] != null) future = this[_subscription$0].cancel();
        if (future != null) this[_closeGroup].add(async.Future._check(future));
        this[_closeGroup].close();
      }
      [_onListen$]() {
        if (dart.test(this[_isDone$])) return;
        if (this[_subscription$0] != null) {
          this[_subscription$0].resume();
        } else {
          this[_subscription$0] = this[_stream$].listen(dart.bind(this, _onData), {onError: dart.bind(this, _onError), onDone: dart.bind(this, _onDone)});
        }
      }
      [_onPause$]() {
        if (!dart.test(this[_controllers].every(dart.fn(controller => controller.isPaused, StreamControllerOfTTobool())))) return;
        this[_subscription$0].pause();
      }
      [_onResume$]() {
        this[_subscription$0].resume();
      }
      [_onCancel$0](controller) {
        this[_controllers].remove(controller);
        if (dart.test(this[_controllers].isNotEmpty)) return;
        if (dart.test(this[_isClosed$])) {
          this[_cancelSubscription]();
        } else {
          this[_subscription$0].pause();
        }
      }
      [_onData](data) {
        T._check(data);
        if (!dart.test(this[_isClosed$])) this[_buffer][$add](ResultOfT().value(data));
        for (let controller of this[_controllers]) {
          controller.add(data);
        }
      }
      [_onError](error, stackTrace) {
        if (!dart.test(this[_isClosed$])) this[_buffer][$add](ResultOfT().error(error, stackTrace));
        for (let controller of this[_controllers]) {
          controller.addError(error, stackTrace);
        }
      }
      [_onDone]() {
        this[_isDone$] = true;
        for (let controller of this[_controllers]) {
          this[_closeGroup].add(controller.close());
        }
      }
    }
    (StreamSplitter.new = function(stream) {
      this[_subscription$0] = null;
      this[_buffer] = JSArrayOfResultOfT().of([]);
      this[_controllers] = new (_HashSetOfStreamControllerOfT()).new();
      this[_closeGroup] = new src__future_group.FutureGroup.new();
      this[_isDone$] = false;
      this[_isClosed$] = false;
      this[_stream$] = stream;
    }).prototype = StreamSplitter.prototype;
    dart.addTypeTests(StreamSplitter);
    StreamSplitter.prototype[_is_StreamSplitter_default] = true;
    dart.setMethodSignature(StreamSplitter, () => ({
      __proto__: dart.getMethods(StreamSplitter.__proto__),
      split: dart.fnType(async.Stream$(T), []),
      close: dart.fnType(async.Future, []),
      [_cancelSubscription]: dart.fnType(dart.void, []),
      [_onListen$]: dart.fnType(dart.void, []),
      [_onPause$]: dart.fnType(dart.void, []),
      [_onResume$]: dart.fnType(dart.void, []),
      [_onCancel$0]: dart.fnType(dart.void, [async.StreamController]),
      [_onData]: dart.fnType(dart.void, [core.Object]),
      [_onError]: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      [_onDone]: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(StreamSplitter, () => ({
      __proto__: dart.getFields(StreamSplitter.__proto__),
      [_stream$]: dart.finalFieldType(StreamOfT()),
      [_subscription$0]: dart.fieldType(StreamSubscriptionOfT()),
      [_buffer]: dart.finalFieldType(ListOfResultOfT()),
      [_controllers]: dart.finalFieldType(SetOfStreamControllerOfT()),
      [_closeGroup]: dart.finalFieldType(src__future_group.FutureGroup),
      [_isDone$]: dart.fieldType(core.bool),
      [_isClosed$]: dart.fieldType(core.bool)
    }));
    return StreamSplitter;
  });
  src__stream_splitter.StreamSplitter = src__stream_splitter.StreamSplitter$();
  dart.addTypeTests(src__stream_splitter.StreamSplitter, _is_StreamSplitter_default);
  const _sink$3 = Symbol('_sink');
  const _destinationSink = Symbol('_destinationSink');
  const _setDestinationSink = Symbol('_setDestinationSink');
  const _is_StreamSinkCompleter_default = Symbol('_is_StreamSinkCompleter_default');
  src__stream_sink_completer.StreamSinkCompleter$ = dart.generic(T => {
    let _CompleterSinkOfT = () => (_CompleterSinkOfT = dart.constFn(src__stream_sink_completer._CompleterSink$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    class StreamSinkCompleter extends core.Object {
      get sink() {
        return this[sink];
      }
      set sink(value) {
        super.sink = value;
      }
      get [_sink$3]() {
        return _CompleterSinkOfT()._check(this.sink);
      }
      static fromFuture(T, sinkFuture) {
        let completer = new (src__stream_sink_completer.StreamSinkCompleter$(T)).new();
        sinkFuture.then(dart.void, dart.bind(completer, 'setDestinationSink'), {onError: dart.bind(completer, 'setError')});
        return completer.sink;
      }
      setDestinationSink(destinationSink) {
        StreamSinkOfT()._check(destinationSink);
        if (this[_sink$3][_destinationSink] != null) {
          dart.throw(new core.StateError.new("Destination sink already set"));
        }
        this[_sink$3][_setDestinationSink](destinationSink);
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.setDestinationSink(new (NullStreamSinkOfT()).error(error, stackTrace));
      }
    }
    (StreamSinkCompleter.new = function() {
      this[sink] = new (_CompleterSinkOfT()).new();
    }).prototype = StreamSinkCompleter.prototype;
    dart.addTypeTests(StreamSinkCompleter);
    StreamSinkCompleter.prototype[_is_StreamSinkCompleter_default] = true;
    const sink = Symbol("StreamSinkCompleter.sink");
    dart.setMethodSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getMethods(StreamSinkCompleter.__proto__),
      setDestinationSink: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getGetters(StreamSinkCompleter.__proto__),
      [_sink$3]: src__stream_sink_completer._CompleterSink$(T)
    }));
    dart.setFieldSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getFields(StreamSinkCompleter.__proto__),
      sink: dart.finalFieldType(StreamSinkOfT())
    }));
    return StreamSinkCompleter;
  });
  src__stream_sink_completer.StreamSinkCompleter = src__stream_sink_completer.StreamSinkCompleter$();
  dart.addTypeTests(src__stream_sink_completer.StreamSinkCompleter, _is_StreamSinkCompleter_default);
  const _controller$2 = Symbol('_controller');
  const _doneCompleter = Symbol('_doneCompleter');
  const _canSendDirectly = Symbol('_canSendDirectly');
  const _ensureController = Symbol('_ensureController');
  const _is__CompleterSink_default = Symbol('_is__CompleterSink_default');
  src__stream_sink_completer._CompleterSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _CompleterSink extends core.Object {
      get [_canSendDirectly]() {
        return this[_controller$2] == null && this[_destinationSink] != null;
      }
      get done() {
        if (this[_doneCompleter] != null) return this[_doneCompleter].future;
        if (this[_destinationSink] == null) {
          this[_doneCompleter] = async.Completer.sync();
          return this[_doneCompleter].future;
        }
        return this[_destinationSink].done;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].add(event);
        } else {
          this[_ensureController]();
          this[_controller$2].add(event);
        }
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].addError(error, stackTrace);
        } else {
          this[_ensureController]();
          this[_controller$2].addError(error, stackTrace);
        }
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_canSendDirectly])) return this[_destinationSink].addStream(stream);
        this[_ensureController]();
        return this[_controller$2].addStream(stream, {cancelOnError: false});
      }
      close() {
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].close();
        } else {
          this[_ensureController]();
          this[_controller$2].close();
        }
        return this.done;
      }
      [_ensureController]() {
        if (this[_controller$2] == null) this[_controller$2] = StreamControllerOfT().new({sync: true});
      }
      [_setDestinationSink](sink) {
        StreamSinkOfT()._check(sink);
        if (!(this[_destinationSink] == null)) dart.assertFailed();
        this[_destinationSink] = sink;
        if (this[_controller$2] != null) {
          sink.addStream(this[_controller$2].stream).whenComplete(dart.bind(sink, 'close')).catchError(dart.fn(_ => {
          }, dynamicToNull()));
        }
        if (this[_doneCompleter] != null) {
          this[_doneCompleter].complete(sink.done);
        }
      }
    }
    (_CompleterSink.new = function() {
      this[_controller$2] = null;
      this[_doneCompleter] = null;
      this[_destinationSink] = null;
    }).prototype = _CompleterSink.prototype;
    dart.addTypeTests(_CompleterSink);
    _CompleterSink.prototype[_is__CompleterSink_default] = true;
    _CompleterSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(_CompleterSink, () => ({
      __proto__: dart.getMethods(_CompleterSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, []),
      [_ensureController]: dart.fnType(dart.void, []),
      [_setDestinationSink]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(_CompleterSink, () => ({
      __proto__: dart.getGetters(_CompleterSink.__proto__),
      [_canSendDirectly]: core.bool,
      done: async.Future
    }));
    dart.setFieldSignature(_CompleterSink, () => ({
      __proto__: dart.getFields(_CompleterSink.__proto__),
      [_controller$2]: dart.fieldType(StreamControllerOfT()),
      [_doneCompleter]: dart.fieldType(async.Completer),
      [_destinationSink]: dart.fieldType(StreamSinkOfT())
    }));
    return _CompleterSink;
  });
  src__stream_sink_completer._CompleterSink = src__stream_sink_completer._CompleterSink$();
  dart.addTypeTests(src__stream_sink_completer._CompleterSink, _is__CompleterSink_default);
  src__stream_subscription_transformer.subscriptionTransformer = function(T, opts) {
    let handleCancel = opts && 'handleCancel' in opts ? opts.handleCancel : null;
    let handlePause = opts && 'handlePause' in opts ? opts.handlePause : null;
    let handleResume = opts && 'handleResume' in opts ? opts.handleResume : null;
    return async.StreamTransformer$(T, T).new(dart.fn((stream, cancelOnError) => new (src__stream_subscription_transformer._TransformedSubscription$(T)).new(stream.listen(null, {cancelOnError: cancelOnError}), handleCancel != null ? handleCancel : dart.fn(inner => inner.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])), handlePause != null ? handlePause : dart.fn(inner => {
      inner.pause();
    }, dart.fnType(core.Null, [async.StreamSubscription$(T)])), handleResume != null ? handleResume : dart.fn(inner => {
      inner.resume();
    }, dart.fnType(core.Null, [async.StreamSubscription$(T)]))), dart.fnType(src__stream_subscription_transformer._TransformedSubscription$(T), [async.Stream$(T), core.bool])));
  };
  const _inner$2 = Symbol('_inner');
  const _handleCancel = Symbol('_handleCancel');
  const _handlePause = Symbol('_handlePause');
  const _handleResume = Symbol('_handleResume');
  const _cancelMemoizer = Symbol('_cancelMemoizer');
  const _is__TransformedSubscription_default = Symbol('_is__TransformedSubscription_default');
  src__stream_subscription_transformer._TransformedSubscription$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let StreamSubscriptionOfTToFuture = () => (StreamSubscriptionOfTToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfT()])))();
    let StreamSubscriptionOfTTovoid = () => (StreamSubscriptionOfTTovoid = dart.constFn(dart.fnType(dart.void, [StreamSubscriptionOfT()])))();
    class _TransformedSubscription extends core.Object {
      get isPaused() {
        let t = this[_inner$2];
        let l = t == null ? null : t.isPaused;
        return l != null ? l : false;
      }
      onData(handleData) {
        let t = this[_inner$2];
        t == null ? null : t.onData(handleData);
      }
      onError(handleError) {
        let t = this[_inner$2];
        t == null ? null : t.onError(handleError);
      }
      onDone(handleDone) {
        let t = this[_inner$2];
        t == null ? null : t.onDone(handleDone);
      }
      cancel() {
        return this[_cancelMemoizer].runOnce(dart.fn(() => {
          let inner = this[_inner$2];
          this[_inner$2].onData(null);
          this[_inner$2].onDone(null);
          this[_inner$2].onError(dart.fn((_, __) => {
          }, dynamicAnddynamicToNull()));
          this[_inner$2] = null;
          return this[_handleCancel](inner);
        }, VoidToFuture()));
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        if (dart.test(this[_cancelMemoizer].hasRun)) return;
        if (resumeFuture != null) resumeFuture.whenComplete(dart.bind(this, 'resume'));
        this[_handlePause](this[_inner$2]);
      }
      resume() {
        if (dart.test(this[_cancelMemoizer].hasRun)) return;
        this[_handleResume](this[_inner$2]);
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        let t = this[_inner$2];
        let l = t == null ? null : t.asFuture(E, futureValue);
        return l != null ? l : async.Completer$(E).new().future;
      }
    }
    (_TransformedSubscription.new = function(inner, handleCancel, handlePause, handleResume) {
      this[_cancelMemoizer] = new src__async_memoizer.AsyncMemoizer.new();
      this[_inner$2] = inner;
      this[_handleCancel] = handleCancel;
      this[_handlePause] = handlePause;
      this[_handleResume] = handleResume;
    }).prototype = _TransformedSubscription.prototype;
    _TransformedSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(_TransformedSubscription);
    _TransformedSubscription.prototype[_is__TransformedSubscription_default] = true;
    _TransformedSubscription[dart.implements] = () => [StreamSubscriptionOfT()];
    dart.setMethodSignature(_TransformedSubscription, () => ({
      __proto__: dart.getMethods(_TransformedSubscription.__proto__),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      cancel: dart.fnType(async.Future, []),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(_TransformedSubscription, () => ({
      __proto__: dart.getGetters(_TransformedSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setFieldSignature(_TransformedSubscription, () => ({
      __proto__: dart.getFields(_TransformedSubscription.__proto__),
      [_inner$2]: dart.fieldType(StreamSubscriptionOfT()),
      [_handleCancel]: dart.finalFieldType(StreamSubscriptionOfTToFuture()),
      [_handlePause]: dart.finalFieldType(StreamSubscriptionOfTTovoid()),
      [_handleResume]: dart.finalFieldType(StreamSubscriptionOfTTovoid()),
      [_cancelMemoizer]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return _TransformedSubscription;
  });
  src__stream_subscription_transformer._TransformedSubscription = src__stream_subscription_transformer._TransformedSubscription$();
  dart.addTypeTests(src__stream_subscription_transformer._TransformedSubscription, _is__TransformedSubscription_default);
  const _streams = Symbol('_streams');
  const _is_StreamZip_default = Symbol('_is_StreamZip_default');
  src__stream_zip.StreamZip$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let JSArrayOfStreamSubscriptionOfT = () => (JSArrayOfStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfT())))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let intAndTTovoid = () => (intAndTTovoid = dart.constFn(dart.fnType(dart.void, [core.int, T])))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let StreamControllerOfListOfT = () => (StreamControllerOfListOfT = dart.constFn(async.StreamController$(ListOfT())))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let IterableOfStreamOfT = () => (IterableOfStreamOfT = dart.constFn(core.Iterable$(StreamOfT())))();
    class StreamZip extends async.Stream$(core.List$(T)) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        cancelOnError = true === cancelOnError;
        let subscriptions = JSArrayOfStreamSubscriptionOfT().of([]);
        let controller = null;
        let current = null;
        let dataCount = 0;
        function handleData(index, data) {
          current[$_set](index, data);
          dataCount++;
          if (dataCount === subscriptions[$length]) {
            let data = current;
            current = ListOfT().new(subscriptions[$length]);
            dataCount = 0;
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
              if (i !== index) subscriptions[$_get](i).resume();
            }
            controller.add(data);
          } else {
            subscriptions[$_get](index).pause();
          }
        }
        dart.fn(handleData, intAndTTovoid());
        function handleError(error, stackTrace) {
          controller.addError(error, stackTrace);
        }
        dart.fn(handleError, ObjectAndStackTraceTovoid());
        function handleErrorCancel(error, stackTrace) {
          for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
            subscriptions[$_get](i).cancel();
          }
          controller.addError(error, stackTrace);
        }
        dart.fn(handleErrorCancel, ObjectAndStackTraceTovoid());
        function handleDone() {
          for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
            subscriptions[$_get](i).cancel();
          }
          controller.close();
        }
        dart.fn(handleDone, VoidTovoid());
        try {
          for (let stream of this[_streams]) {
            let index = subscriptions[$length];
            subscriptions[$add](stream.listen(dart.fn(data => {
              handleData(index, data);
            }, TToNull()), {onError: dart.test(cancelOnError) ? handleError : handleErrorCancel, onDone: handleDone, cancelOnError: cancelOnError}));
          }
        } catch (e) {
          for (let i = dart.notNull(subscriptions[$length]) - 1; i >= 0; i--) {
            subscriptions[$_get](i).cancel();
          }
          dart.rethrow(e);
        }
        current = ListOfT().new(subscriptions[$length]);
        controller = StreamControllerOfListOfT().new({onPause: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
              subscriptions[$_get](i).pause();
            }
          }, VoidToNull()), onResume: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
              subscriptions[$_get](i).resume();
            }
          }, VoidToNull()), onCancel: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
              subscriptions[$_get](i).cancel();
            }
          }, VoidToNull())});
        if (dart.test(subscriptions[$isEmpty])) {
          controller.close();
        }
        return controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (StreamZip.new = function(streams) {
      this[_streams] = streams;
      StreamZip.__proto__.new.call(this);
    }).prototype = StreamZip.prototype;
    dart.addTypeTests(StreamZip);
    StreamZip.prototype[_is_StreamZip_default] = true;
    dart.setMethodSignature(StreamZip, () => ({
      __proto__: dart.getMethods(StreamZip.__proto__),
      listen: dart.fnType(async.StreamSubscription$(core.List$(T)), [dart.fnType(dart.void, [core.List$(T)])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(StreamZip, () => ({
      __proto__: dart.getFields(StreamZip.__proto__),
      [_streams]: dart.finalFieldType(IterableOfStreamOfT())
    }));
    return StreamZip;
  });
  src__stream_zip.StreamZip = src__stream_zip.StreamZip$();
  dart.addTypeTests(src__stream_zip.StreamZip, _is_StreamZip_default);
  src__typed_stream_transformer.typedStreamTransformer = function(S, T, transformer) {
    return async.StreamTransformer$(S, T).is(transformer) ? transformer : new (src__typed_stream_transformer._TypeSafeStreamTransformer$(S, T)).new(transformer);
  };
  const _inner$3 = Symbol('_inner');
  const _is__TypeSafeStreamTransformer_default = Symbol('_is__TypeSafeStreamTransformer_default');
  src__typed_stream_transformer._TypeSafeStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class _TypeSafeStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return src__delegate__stream.DelegatingStream.typed(T, this[_inner$3].bind(stream));
      }
    }
    (_TypeSafeStreamTransformer.new = function(inner) {
      this[_inner$3] = inner;
      _TypeSafeStreamTransformer.__proto__.new.call(this);
    }).prototype = _TypeSafeStreamTransformer.prototype;
    dart.addTypeTests(_TypeSafeStreamTransformer);
    _TypeSafeStreamTransformer.prototype[_is__TypeSafeStreamTransformer_default] = true;
    dart.setMethodSignature(_TypeSafeStreamTransformer, () => ({
      __proto__: dart.getMethods(_TypeSafeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(_TypeSafeStreamTransformer, () => ({
      __proto__: dart.getFields(_TypeSafeStreamTransformer.__proto__),
      [_inner$3]: dart.finalFieldType(async.StreamTransformer)
    }));
    return _TypeSafeStreamTransformer;
  });
  src__typed_stream_transformer._TypeSafeStreamTransformer = src__typed_stream_transformer._TypeSafeStreamTransformer$();
  dart.addTypeTests(src__typed_stream_transformer._TypeSafeStreamTransformer, _is__TypeSafeStreamTransformer_default);
  dart.trackLibraries("packages/async/async.ddc", {
    "package:async/src/stream_queue.dart": src__stream_queue,
    "package:async/src/cancelable_operation.dart": src__cancelable_operation,
    "package:async/src/byte_collector.dart": src__byte_collector,
    "package:async/src/async_cache.dart": src__async_cache,
    "package:async/async.dart": async$,
    "package:async/src/async_memoizer.dart": src__async_memoizer,
    "package:async/src/utils.dart": src__utils,
    "package:async/src/delegate/event_sink.dart": src__delegate__event_sink,
    "package:async/src/delegate/future.dart": src__delegate__future,
    "package:async/src/delegate/sink.dart": src__delegate__sink,
    "package:async/src/delegate/stream.dart": src__delegate__stream,
    "package:async/src/delegate/stream_consumer.dart": src__delegate__stream_consumer,
    "package:async/src/delegate/stream_sink.dart": src__delegate__stream_sink,
    "package:async/src/typed/stream_subscription.dart": src__typed__stream_subscription,
    "package:async/src/delegate/stream_subscription.dart": src__delegate__stream_subscription,
    "package:async/src/future_group.dart": src__future_group,
    "package:async/src/stream_completer.dart": src__stream_completer,
    "package:async/src/lazy_stream.dart": src__lazy_stream,
    "package:async/src/null_stream_sink.dart": src__null_stream_sink,
    "package:async/src/restartable_timer.dart": src__restartable_timer,
    "package:async/src/stream_sink_transformer/typed.dart": src__stream_sink_transformer__typed,
    "package:async/src/stream_sink_transformer/stream_transformer_wrapper.dart": src__stream_sink_transformer__stream_transformer_wrapper,
    "package:async/src/stream_sink_transformer/handler_transformer.dart": src__stream_sink_transformer__handler_transformer,
    "package:async/src/stream_sink_transformer.dart": src__stream_sink_transformer,
    "package:async/src/result/release_transformer.dart": src__result__release_transformer,
    "package:async/src/result/release_sink.dart": src__result__release_sink,
    "package:async/src/result/value.dart": src__result__value,
    "package:async/src/result/error.dart": src__result__error,
    "package:async/src/result/capture_transformer.dart": src__result__capture_transformer,
    "package:async/src/result/capture_sink.dart": src__result__capture_sink,
    "package:async/src/result/result.dart": src__result__result,
    "package:async/src/result/future.dart": src__result__future,
    "package:async/src/single_subscription_transformer.dart": src__single_subscription_transformer,
    "package:async/src/stream_group.dart": src__stream_group,
    "package:async/src/subscription_stream.dart": src__subscription_stream,
    "package:async/src/stream_splitter.dart": src__stream_splitter,
    "package:async/src/stream_sink_completer.dart": src__stream_sink_completer,
    "package:async/src/stream_subscription_transformer.dart": src__stream_subscription_transformer,
    "package:async/src/stream_zip.dart": src__stream_zip,
    "package:async/src/typed_stream_transformer.dart": src__typed_stream_transformer
  }, '{"version":3,"sourceRoot":"","sources":["src/stream_queue.dart","src/cancelable_operation.dart","src/byte_collector.dart","src/async_cache.dart","src/async_memoizer.dart","src/delegate/event_sink.dart","src/delegate/future.dart","src/delegate/sink.dart","src/delegate/stream.dart","src/delegate/stream_consumer.dart","src/delegate/stream_sink.dart","src/typed/stream_subscription.dart","src/delegate/stream_subscription.dart","src/future_group.dart","src/stream_completer.dart","src/lazy_stream.dart","src/null_stream_sink.dart","src/restartable_timer.dart","src/stream_sink_transformer/typed.dart","src/stream_sink_transformer/stream_transformer_wrapper.dart","src/stream_sink_transformer/handler_transformer.dart","src/stream_sink_transformer.dart","src/result/result.dart","src/result/release_transformer.dart","src/result/release_sink.dart","src/result/value.dart","src/result/error.dart","src/result/capture_transformer.dart","src/result/capture_sink.dart","src/result/future.dart","src/single_subscription_transformer.dart","src/stream_group.dart","src/subscription_stream.dart","src/stream_splitter.dart","src/stream_sink_completer.dart","src/stream_subscription_transformer.dart","src/stream_zip.dart","src/typed_stream_transformer.dart"],"names":[],"mappings":"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","file":"async.ddc.js"}');
  // Exports:
  return {
    src__stream_queue: src__stream_queue,
    src__cancelable_operation: src__cancelable_operation,
    src__byte_collector: src__byte_collector,
    src__async_cache: src__async_cache,
    async: async$,
    src__async_memoizer: src__async_memoizer,
    src__utils: src__utils,
    src__delegate__event_sink: src__delegate__event_sink,
    src__delegate__future: src__delegate__future,
    src__delegate__sink: src__delegate__sink,
    src__delegate__stream: src__delegate__stream,
    src__delegate__stream_consumer: src__delegate__stream_consumer,
    src__delegate__stream_sink: src__delegate__stream_sink,
    src__typed__stream_subscription: src__typed__stream_subscription,
    src__delegate__stream_subscription: src__delegate__stream_subscription,
    src__future_group: src__future_group,
    src__stream_completer: src__stream_completer,
    src__lazy_stream: src__lazy_stream,
    src__null_stream_sink: src__null_stream_sink,
    src__restartable_timer: src__restartable_timer,
    src__stream_sink_transformer__typed: src__stream_sink_transformer__typed,
    src__stream_sink_transformer__stream_transformer_wrapper: src__stream_sink_transformer__stream_transformer_wrapper,
    src__stream_sink_transformer__handler_transformer: src__stream_sink_transformer__handler_transformer,
    src__stream_sink_transformer: src__stream_sink_transformer,
    src__result__release_transformer: src__result__release_transformer,
    src__result__release_sink: src__result__release_sink,
    src__result__value: src__result__value,
    src__result__error: src__result__error,
    src__result__capture_transformer: src__result__capture_transformer,
    src__result__capture_sink: src__result__capture_sink,
    src__result__result: src__result__result,
    src__result__future: src__result__future,
    src__single_subscription_transformer: src__single_subscription_transformer,
    src__stream_group: src__stream_group,
    src__subscription_stream: src__subscription_stream,
    src__stream_splitter: src__stream_splitter,
    src__stream_sink_completer: src__stream_sink_completer,
    src__stream_subscription_transformer: src__stream_subscription_transformer,
    src__stream_zip: src__stream_zip,
    src__typed_stream_transformer: src__typed_stream_transformer
  };
});

//# sourceMappingURL=async.ddc.js.map
