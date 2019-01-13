define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__model__action__async_action = Object.create(_root);
  const src__model__action__async_action_controller = Object.create(_root);
  const src__model__action__delegating_async_action = Object.create(_root);
  const $add = dartx.add;
  const $clear = dartx.clear;
  const $any = dartx.any;
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let ListOfFutureOfbool = () => (ListOfFutureOfbool = dart.constFn(core.List$(FutureOfbool())))();
  let ListOfFuture = () => (ListOfFuture = dart.constFn(core.List$(async.Future)))();
  let CompleterOfbool = () => (CompleterOfbool = dart.constFn(async.Completer$(core.bool)))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let JSArrayOfFutureOfbool = () => (JSArrayOfFutureOfbool = dart.constFn(_interceptors.JSArray$(FutureOfbool())))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let boolToFuture = () => (boolToFuture = dart.constFn(dart.fnType(async.Future, [core.bool])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  let ListOfboolTobool = () => (ListOfboolTobool = dart.constFn(dart.fnType(core.bool, [ListOfbool()])))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  const _onDone = Symbol('_onDone');
  const _onDefer = Symbol('_onDefer');
  const _futureCancellations = Symbol('_futureCancellations');
  const _executionDeferrals = Symbol('_executionDeferrals');
  const _lockedGetter = Symbol('_lockedGetter');
  const _cancelledGetter = Symbol('_cancelledGetter');
  const _doneGetter = Symbol('_doneGetter');
  const _syncCancelled = Symbol('_syncCancelled');
  const _waitingForDone = Symbol('_waitingForDone');
  const _is_AsyncAction_default = Symbol('_is_AsyncAction_default');
  src__model__action__async_action.AsyncAction$ = dart.generic(V => {
    let FutureOfV = () => (FutureOfV = dart.constFn(async.Future$(V)))();
    class AsyncAction extends core.Object {
      get [_waitingForDone]() {
        return core.bool._check(dart.dcall(this[_lockedGetter], []));
      }
      get cancelled() {
        return dart.test(this[_syncCancelled]) || dart.dtest(dart.dcall(this[_cancelledGetter], []));
      }
      get isDone() {
        return core.bool._check(dart.dcall(this[_doneGetter], []));
      }
      get onDone() {
        return this[_onDone];
      }
      get onDefer() {
        return this[_onDefer];
      }
      cancelIf(whetherToCancel) {
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new("Cannot register. Action is complete."));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new("Cannot register. Already waiting."));
        }
        this[_futureCancellations][$add](whetherToCancel);
      }
      cancel() {
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new("Cannot register. Action is complete."));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new("Cannot register. Already waiting."));
        }
        this[_syncCancelled] = true;
        this[_futureCancellations][$clear]();
        this[_futureCancellations][$add](FutureOfbool().value(true));
      }
      defer(executionDeferral) {
        if (dart.test(this.cancelled)) return;
        if (dart.test(this.isDone)) {
          dart.throw(new core.StateError.new("Cannot register. Action is complete."));
        }
        if (dart.test(this[_waitingForDone])) {
          dart.throw(new core.StateError.new("Cannot register. Already waiting."));
        }
        this[_executionDeferrals][$add](executionDeferral);
      }
    }
    (AsyncAction.new = function(onDone, onDefer, futureCancellations, executionDeferrals, lockedGetter, cancelledGetter, doneGetter) {
      this[_syncCancelled] = false;
      this[_onDone] = onDone;
      this[_onDefer] = onDefer;
      this[_futureCancellations] = futureCancellations;
      this[_executionDeferrals] = executionDeferrals;
      this[_lockedGetter] = lockedGetter;
      this[_cancelledGetter] = cancelledGetter;
      this[_doneGetter] = doneGetter;
    }).prototype = AsyncAction.prototype;
    dart.addTypeTests(AsyncAction);
    AsyncAction.prototype[_is_AsyncAction_default] = true;
    dart.setMethodSignature(AsyncAction, () => ({
      __proto__: dart.getMethods(AsyncAction.__proto__),
      cancelIf: dart.fnType(dart.void, [async.Future$(core.bool)]),
      cancel: dart.fnType(dart.void, []),
      defer: dart.fnType(dart.void, [async.Future])
    }));
    dart.setGetterSignature(AsyncAction, () => ({
      __proto__: dart.getGetters(AsyncAction.__proto__),
      [_waitingForDone]: core.bool,
      cancelled: core.bool,
      isDone: core.bool,
      onDone: async.Future$(V),
      onDefer: async.Future$(core.bool)
    }));
    dart.setFieldSignature(AsyncAction, () => ({
      __proto__: dart.getFields(AsyncAction.__proto__),
      [_onDone]: dart.finalFieldType(FutureOfV()),
      [_onDefer]: dart.finalFieldType(FutureOfbool()),
      [_futureCancellations]: dart.finalFieldType(ListOfFutureOfbool()),
      [_executionDeferrals]: dart.finalFieldType(ListOfFuture()),
      [_cancelledGetter]: dart.finalFieldType(core.Function),
      [_lockedGetter]: dart.finalFieldType(core.Function),
      [_doneGetter]: dart.finalFieldType(core.Function),
      [_syncCancelled]: dart.fieldType(core.bool)
    }));
    return AsyncAction;
  });
  src__model__action__async_action.AsyncAction = src__model__action__async_action.AsyncAction$();
  dart.addTypeTests(src__model__action__async_action.AsyncAction, _is_AsyncAction_default);
  const _executeCompleter = Symbol('_executeCompleter');
  const _deferCompleter = Symbol('_deferCompleter');
  const _executionDeferrals$ = Symbol('_executionDeferrals');
  const _futureCancellations$ = Symbol('_futureCancellations');
  const _locked = Symbol('_locked');
  const _cancelled = Symbol('_cancelled');
  const _done = Symbol('_done');
  const _action = Symbol('_action');
  const _executeAndAttach = Symbol('_executeAndAttach');
  const _maybeWait = Symbol('_maybeWait');
  const _attachFuture = Symbol('_attachFuture');
  const _shouldCancel = Symbol('_shouldCancel');
  const _is_AsyncActionController_default = Symbol('_is_AsyncActionController_default');
  src__model__action__async_action_controller.AsyncActionController$ = dart.generic(V => {
    let CompleterOfV = () => (CompleterOfV = dart.constFn(async.Completer$(V)))();
    let AsyncActionOfV = () => (AsyncActionOfV = dart.constFn(src__model__action__async_action.AsyncAction$(V)))();
    let dynamicToV = () => (dynamicToV = dart.constFn(dart.fnType(V, [dart.dynamic])))();
    let FutureOfV = () => (FutureOfV = dart.constFn(async.Future$(V)))();
    let FutureOrOfV = () => (FutureOrOfV = dart.constFn(async.FutureOr$(V)))();
    class AsyncActionController extends core.Object {
      get action() {
        if (this[_action] == null) {
          this[_action] = new (AsyncActionOfV()).new(this[_executeCompleter].future, this[_deferCompleter].future, this[_futureCancellations$], this[_executionDeferrals$], dart.fn(() => this[_locked], VoidTobool()), dart.fn(() => this[_cancelled], VoidTobool()), dart.fn(() => this[_done], VoidTobool()));
        }
        return this[_action];
      }
      execute(exec, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let valueOnCancel = opts && 'valueOnCancel' in opts ? opts.valueOnCancel : null;
        V._check(valueOnCancel);
        return async.Future.microtask(dart.fn(() => {
          if (dart.test(this[_locked])) {
            dart.throw(new core.StateError.new("Cannot execute, execution already in process."));
          }
          this[_locked] = true;
          return this[_shouldCancel]().then(dart.dynamic, dart.fn(shouldCancel => {
            this[_cancelled] = shouldCancel;
            let shouldProceed = !dart.test(this[_cancelled]);
            this[_deferCompleter].complete(shouldProceed);
            if (shouldProceed) {
              return this[_maybeWait]().then(dart.dynamic, dart.fn(_ => {
                this[_executeAndAttach](exec);
              }, dynamicToNull()));
            } else {
              this[_done] = true;
              if (onCancel == null) {
                this[_executeCompleter].complete(valueOnCancel);
              } else {
                let cancelRes = onCancel();
                if (!async.Future.is(cancelRes)) {
                  this[_executeCompleter].complete(valueOnCancel);
                } else {
                  this[_attachFuture](FutureOfV()._check(dart.dsend(cancelRes, 'then', [dart.fn(_ => valueOnCancel, dynamicToV())])));
                }
              }
              return null;
            }
          }, boolToFuture()));
        }, VoidToFuture()));
      }
      [_maybeWait]() {
        return async.Future.wait(dart.dynamic, this[_executionDeferrals$]);
      }
      [_shouldCancel]() {
        return FutureOfbool().microtask(dart.fn(() => async.Future.wait(core.bool, this[_futureCancellations$]).then(core.bool, dart.fn(results => results[$any](dart.fn(cancel => cancel === true, boolTobool())), ListOfboolTobool())), VoidToFutureOfbool()));
      }
      [_executeAndAttach](exec) {
        let execResult = dart.dcall(exec, []);
        this[_done] = true;
        if (async.Future.is(execResult)) {
          this[_attachFuture](FutureOfV()._check(execResult));
        } else {
          this[_executeCompleter].complete(FutureOrOfV()._check(execResult));
        }
      }
      [_attachFuture](future) {
        FutureOfV()._check(future);
        future.then(dart.void, dart.bind(this[_executeCompleter], 'complete')).catchError(dart.bind(this[_executeCompleter], 'completeError'));
      }
    }
    (AsyncActionController.new = function() {
      this[_executeCompleter] = CompleterOfV().new();
      this[_deferCompleter] = CompleterOfbool().new();
      this[_executionDeferrals$] = JSArrayOfFuture().of([]);
      this[_futureCancellations$] = JSArrayOfFutureOfbool().of([]);
      this[_locked] = false;
      this[_cancelled] = false;
      this[_done] = false;
      this[_action] = null;
    }).prototype = AsyncActionController.prototype;
    dart.addTypeTests(AsyncActionController);
    AsyncActionController.prototype[_is_AsyncActionController_default] = true;
    dart.setMethodSignature(AsyncActionController, () => ({
      __proto__: dart.getMethods(AsyncActionController.__proto__),
      execute: dart.fnType(async.Future, [dart.fnType(dart.dynamic, [])], {onCancel: dart.fnType(dart.dynamic, []), valueOnCancel: core.Object}),
      [_maybeWait]: dart.fnType(async.Future, []),
      [_shouldCancel]: dart.fnType(async.Future$(core.bool), []),
      [_executeAndAttach]: dart.fnType(dart.void, [dart.dynamic]),
      [_attachFuture]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(AsyncActionController, () => ({
      __proto__: dart.getGetters(AsyncActionController.__proto__),
      action: src__model__action__async_action.AsyncAction$(V)
    }));
    dart.setFieldSignature(AsyncActionController, () => ({
      __proto__: dart.getFields(AsyncActionController.__proto__),
      [_executeCompleter]: dart.finalFieldType(CompleterOfV()),
      [_deferCompleter]: dart.finalFieldType(CompleterOfbool()),
      [_executionDeferrals$]: dart.finalFieldType(ListOfFuture()),
      [_futureCancellations$]: dart.finalFieldType(ListOfFutureOfbool()),
      [_locked]: dart.fieldType(core.bool),
      [_cancelled]: dart.fieldType(core.bool),
      [_done]: dart.fieldType(core.bool),
      [_action]: dart.fieldType(AsyncActionOfV())
    }));
    return AsyncActionController;
  });
  src__model__action__async_action_controller.AsyncActionController = src__model__action__async_action_controller.AsyncActionController$();
  dart.addTypeTests(src__model__action__async_action_controller.AsyncActionController, _is_AsyncActionController_default);
  const _is_DelegatingAsyncAction_default = Symbol('_is_DelegatingAsyncAction_default');
  src__model__action__delegating_async_action.DelegatingAsyncAction$ = dart.generic(V => {
    let AsyncActionOfV = () => (AsyncActionOfV = dart.constFn(src__model__action__async_action.AsyncAction$(V)))();
    class DelegatingAsyncAction extends core.Object {
      get cancelled() {
        return this.delegate.cancelled;
      }
      get isDone() {
        return this.delegate.isDone;
      }
      get onDone() {
        return this.delegate.onDone;
      }
      get onDefer() {
        return this.delegate.onDefer;
      }
      cancelIf(whetherToCancel) {
        return this.delegate.cancelIf(whetherToCancel);
      }
      cancel() {
        return this.delegate.cancel();
      }
      defer(executionDeferral) {
        return this.delegate.defer(executionDeferral);
      }
    }
    (DelegatingAsyncAction.new = function() {
    }).prototype = DelegatingAsyncAction.prototype;
    dart.addTypeTests(DelegatingAsyncAction);
    DelegatingAsyncAction.prototype[_is_DelegatingAsyncAction_default] = true;
    DelegatingAsyncAction[dart.implements] = () => [AsyncActionOfV()];
    dart.setMethodSignature(DelegatingAsyncAction, () => ({
      __proto__: dart.getMethods(DelegatingAsyncAction.__proto__),
      cancelIf: dart.fnType(dart.void, [async.Future$(core.bool)]),
      cancel: dart.fnType(dart.void, []),
      defer: dart.fnType(dart.void, [async.Future])
    }));
    dart.setGetterSignature(DelegatingAsyncAction, () => ({
      __proto__: dart.getGetters(DelegatingAsyncAction.__proto__),
      cancelled: core.bool,
      isDone: core.bool,
      onDone: async.Future$(V),
      onDefer: async.Future$(core.bool)
    }));
    return DelegatingAsyncAction;
  });
  src__model__action__delegating_async_action.DelegatingAsyncAction = src__model__action__delegating_async_action.DelegatingAsyncAction$();
  dart.addTypeTests(src__model__action__delegating_async_action.DelegatingAsyncAction, _is_DelegatingAsyncAction_default);
  dart.trackLibraries("packages/angular_components/src/model/action/async_action.ddc", {
    "package:angular_components/src/model/action/async_action.dart": src__model__action__async_action,
    "package:angular_components/src/model/action/async_action_controller.dart": src__model__action__async_action_controller,
    "package:angular_components/src/model/action/delegating_async_action.dart": src__model__action__delegating_async_action
  }, '{"version":3,"sourceRoot":"","sources":["async_action.dart","async_action_controller.dart","delegating_async_action.dart"],"names":[],"mappings":"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","file":"async_action.ddc.js"}');
  // Exports:
  return {
    src__model__action__async_action: src__model__action__async_action,
    src__model__action__async_action_controller: src__model__action__async_action_controller,
    src__model__action__delegating_async_action: src__model__action__delegating_async_action
  };
});

//# sourceMappingURL=async_action.ddc.js.map
