define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer'], function(dart_sdk, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const _root = Object.create(null);
  const utils__disposer__disposable_callback = Object.create(_root);
  const _callback = Symbol('_callback');
  utils__disposer__disposable_callback.DisposableCallbackBase = class DisposableCallbackBase extends core.Object {
    dispose() {
      this[_callback] = null;
    }
  };
  (utils__disposer__disposable_callback.DisposableCallbackBase.new = function() {
    this[_callback] = null;
  }).prototype = utils__disposer__disposable_callback.DisposableCallbackBase.prototype;
  dart.addTypeTests(utils__disposer__disposable_callback.DisposableCallbackBase);
  utils__disposer__disposable_callback.DisposableCallbackBase[dart.implements] = () => [utils__disposer__disposer.Disposable];
  dart.setMethodSignature(utils__disposer__disposable_callback.DisposableCallbackBase, () => ({
    __proto__: dart.getMethods(utils__disposer__disposable_callback.DisposableCallbackBase.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(utils__disposer__disposable_callback.DisposableCallbackBase, () => ({
    __proto__: dart.getFields(utils__disposer__disposable_callback.DisposableCallbackBase.__proto__),
    [_callback]: dart.fieldType(core.Function)
  }));
  utils__disposer__disposable_callback.DisposableCallback = class DisposableCallback extends utils__disposer__disposable_callback.DisposableCallbackBase {
    call() {
      if (this[_callback] != null) {
        dart.dcall(this[_callback], []);
      }
    }
  };
  (utils__disposer__disposable_callback.DisposableCallback.new = function(callback) {
    utils__disposer__disposable_callback.DisposableCallback.__proto__.new.call(this);
    this[_callback] = callback;
  }).prototype = utils__disposer__disposable_callback.DisposableCallback.prototype;
  dart.addTypeTests(utils__disposer__disposable_callback.DisposableCallback);
  dart.setMethodSignature(utils__disposer__disposable_callback.DisposableCallback, () => ({
    __proto__: dart.getMethods(utils__disposer__disposable_callback.DisposableCallback.__proto__),
    call: dart.fnType(dart.dynamic, [])
  }));
  const _is_SingleValueCallback_default = Symbol('_is_SingleValueCallback_default');
  utils__disposer__disposable_callback.SingleValueCallback$ = dart.generic(T => {
    class SingleValueCallback extends utils__disposer__disposable_callback.DisposableCallbackBase {
      call(value) {
        T._check(value);
        if (this[_callback] != null) {
          dart.dcall(this[_callback], [value]);
        }
      }
    }
    (SingleValueCallback.new = function(callback) {
      SingleValueCallback.__proto__.new.call(this);
      this[_callback] = callback;
    }).prototype = SingleValueCallback.prototype;
    dart.addTypeTests(SingleValueCallback);
    SingleValueCallback.prototype[_is_SingleValueCallback_default] = true;
    dart.setMethodSignature(SingleValueCallback, () => ({
      __proto__: dart.getMethods(SingleValueCallback.__proto__),
      call: dart.fnType(dart.dynamic, [core.Object])
    }));
    return SingleValueCallback;
  });
  utils__disposer__disposable_callback.SingleValueCallback = utils__disposer__disposable_callback.SingleValueCallback$();
  dart.addTypeTests(utils__disposer__disposable_callback.SingleValueCallback, _is_SingleValueCallback_default);
  dart.trackLibraries("packages/angular_components/utils/disposer/disposable_callback.ddc", {
    "package:angular_components/utils/disposer/disposable_callback.dart": utils__disposer__disposable_callback
  }, '{"version":3,"sourceRoot":"","sources":["disposable_callback.dart"],"names":[],"mappings":";;;;;;;;;;;AAqBI,qBAAS,GAAG;IACd;;;IALS,eAAS;EAMpB;;;;;;;;;;;;;AAWI,UAAI,eAAS,IAAI,MAAM;AACrB,kCAAS;;IAEb;;0EARmB,QAA0B;;AAC3C,mBAAS,GAAG,QAAQ;EACtB;;;;;;;;;WAeK,KAAO;iBAAL;AACL,YAAI,eAAS,IAAI,MAAM;AACrB,oCAAS,GAAC,KAAK;;MAEnB;;wCARoB,QAAiC;;AACnD,qBAAS,GAAG,QAAQ;IACtB","file":"disposable_callback.ddc.js"}');
  // Exports:
  return {
    utils__disposer__disposable_callback: utils__disposer__disposable_callback
  };
});

//# sourceMappingURL=disposable_callback.ddc.js.map
