define(['dart_sdk', 'packages/collection/src/comparators'], function(dart_sdk, comparators) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__equality = comparators.src__equality;
  const _root = Object.create(null);
  const src__runtime__optimizations = Object.create(_root);
  const src__runtime = Object.create(_root);
  const src__di__errors = Object.create(_root);
  const src__core__di__opaque_token = Object.create(_root);
  const src__di__providers = Object.create(_root);
  const src__di__module = Object.create(_root);
  const src__core__di__decorators = Object.create(_root);
  const src__di__reflector = Object.create(_root);
  const src__di__injector__runtime = Object.create(_root);
  const src__di__injector__map = Object.create(_root);
  const src__di__injector__hierarchical = Object.create(_root);
  const src__di__injector__empty = Object.create(_root);
  const src__di__injector__injector = Object.create(_root);
  const src__core__di__provider = Object.create(_root);
  const src__core__di = Object.create(_root);
  const src__facade__lang = Object.create(_root);
  const src__core__change_detection__change_detection_util = Object.create(_root);
  const src__core__change_detection__change_detector_ref = Object.create(_root);
  const src__core__change_detection__constants = Object.create(_root);
  const src__core__change_detection__differs__default_iterable_differ = Object.create(_root);
  const src__core__change_detection__differs__default_keyvalue_differ = Object.create(_root);
  const src__core__change_detection__pipe_transform = Object.create(_root);
  const src__core__change_detection__change_detection = Object.create(_root);
  const src__core__metadata__typed = Object.create(_root);
  const src__core__metadata__view = Object.create(_root);
  const src__core__metadata__lifecycle_hooks = Object.create(_root);
  const src__core__metadata__visibility = Object.create(_root);
  const src__core__metadata = Object.create(_root);
  const $add = dartx.add;
  const $removeLast = dartx.removeLast;
  const $isNotEmpty = dartx.isNotEmpty;
  const $isEmpty = dartx.isEmpty;
  const $join = dartx.join;
  const $toString = dartx.toString;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $_set = dartx._set;
  const $values = dartx.values;
  const $containsKey = dartx.containsKey;
  const $substring = dartx.substring;
  const $forEach = dartx.forEach;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ProviderOfObject = () => (ProviderOfObject = dart.constFn(src__di__providers.Provider$(core.Object)))();
  let ListOfModule = () => (ListOfModule = dart.constFn(core.List$(src__di__module.Module)))();
  let ListOfProviderOfObject = () => (ListOfProviderOfObject = dart.constFn(core.List$(ProviderOfObject())))();
  let JSArrayOfProviderOfObject = () => (JSArrayOfProviderOfObject = dart.constFn(_interceptors.JSArray$(ProviderOfObject())))();
  let LinkedMapOfObject$dynamic = () => (LinkedMapOfObject$dynamic = dart.constFn(_js_helper.LinkedMap$(core.Object, dart.dynamic)))();
  let LinkedMapOfObject$Function = () => (LinkedMapOfObject$Function = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Function)))();
  let ListOfListOfObject = () => (ListOfListOfObject = dart.constFn(core.List$(ListOfObject())))();
  let LinkedMapOfObject$ListOfListOfObject = () => (LinkedMapOfObject$ListOfListOfObject = dart.constFn(_js_helper.LinkedMap$(core.Object, ListOfListOfObject())))();
  let ProviderOfvoid = () => (ProviderOfvoid = dart.constFn(src__di__providers.Provider$(dart.void)))();
  let JSArrayOfProviderOfvoid = () => (JSArrayOfProviderOfvoid = dart.constFn(_interceptors.JSArray$(ProviderOfvoid())))();
  let MapOfObject$ProviderOfObject = () => (MapOfObject$ProviderOfObject = dart.constFn(core.Map$(core.Object, ProviderOfObject())))();
  let MapOfdynamic$ProviderOfObject = () => (MapOfdynamic$ProviderOfObject = dart.constFn(core.Map$(dart.dynamic, ProviderOfObject())))();
  let IdentityMapOfObject$ProviderOfObject = () => (IdentityMapOfObject$ProviderOfObject = dart.constFn(_js_helper.IdentityMap$(core.Object, ProviderOfObject())))();
  let MapOfObject$Object = () => (MapOfObject$Object = dart.constFn(core.Map$(core.Object, core.Object)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IterableEqualityOfObject = () => (IterableEqualityOfObject = dart.constFn(src__equality.IterableEquality$(core.Object)))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let CollectionChangeRecordTovoid = () => (CollectionChangeRecordTovoid = dart.constFn(dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])))();
  let IdentityMapOfdynamic$_DuplicateItemRecordList = () => (IdentityMapOfdynamic$_DuplicateItemRecordList = dart.constFn(_js_helper.IdentityMap$(dart.dynamic, src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList)))();
  let MapOfdynamic$_DuplicateItemRecordList = () => (MapOfdynamic$_DuplicateItemRecordList = dart.constFn(core.Map$(dart.dynamic, src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList)))();
  let LinkedMapOfdynamic$KeyValueChangeRecord = () => (LinkedMapOfdynamic$KeyValueChangeRecord = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let MapOfdynamic$KeyValueChangeRecord = () => (MapOfdynamic$KeyValueChangeRecord = dart.constFn(core.Map$(dart.dynamic, src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfTyped = () => (ListOfTyped = dart.constFn(core.List$(src__core__metadata__typed.Typed)))();
  dart.copyProperties(src__runtime__optimizations, {
    get _assertionsEnabled() {
      let enabled = false;
      if (!(enabled = true)) dart.assertFailed();
      return enabled;
    }
  });
  dart.copyProperties(src__runtime__optimizations, {
    get isDevMode() {
      return src__runtime__optimizations._assertionsEnabled;
    }
  });
  src__runtime__optimizations.unsafeCast = function(T, any) {
    return T._check(any);
  };
  dart.defineLazy(src__di__errors, {
    /*src__di__errors._tokenStack*/get _tokenStack() {
      return null;
    },
    set _tokenStack(_) {}
  });
  src__di__errors.debugInjectorEnter = function(token) {
    if (!dart.test(src__runtime__optimizations.isDevMode)) {
      return;
    }
    if (src__di__errors._tokenStack == null) {
      src__di__errors._tokenStack = JSArrayOfObject().of([token]);
    } else {
      src__di__errors._tokenStack[$add](token);
    }
  };
  src__di__errors.debugInjectorLeave = function(token) {
    if (!dart.test(src__runtime__optimizations.isDevMode)) {
      return;
    }
    let removed = src__di__errors._tokenStack[$removeLast]();
    if (!core.identical(removed, token)) dart.assertFailed();
  };
  src__di__errors.debugInjectorWrap = function(T, token, wrap) {
    src__di__errors.debugInjectorEnter(token);
    let result = wrap();
    src__di__errors.debugInjectorLeave(token);
    return result;
  };
  src__di__errors.noProviderError = function(token) {
    if (dart.test(src__runtime__optimizations.isDevMode)) {
      let error = new src__di__errors.NoProviderError.__(token, src__di__errors._tokenStack);
      src__di__errors._tokenStack = null;
      return error;
    }
    return new core.ArgumentError.new(src__di__errors._noProviderError(token));
  };
  src__di__errors._noProviderError = function(token) {
    return "No provider found for " + dart.str(token);
  };
  src__di__errors.InjectionError = class InjectionError extends core.AssertionError {};
  (src__di__errors.InjectionError.__ = function() {
    src__di__errors.InjectionError.__proto__.new.call(this);
  }).prototype = src__di__errors.InjectionError.prototype;
  dart.addTypeTests(src__di__errors.InjectionError);
  let const$;
  src__di__errors.NoProviderError = class NoProviderError extends src__di__errors.InjectionError {
    static _withAdjacentDeduped(input, token) {
      if (input == null) {
        return const$ || (const$ = dart.constList([], core.Object));
      }
      let output = [];
      let lastElement = new core.Object.new();
      for (let element of input) {
        if (!core.identical(lastElement, element)) {
          output[$add](lastElement = element);
        }
      }
      if (dart.test(output[$isNotEmpty])) {
        output[$removeLast]();
      }
      return output;
    }
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      super.path = value;
    }
    toString() {
      return dart.test(this.path[$isEmpty]) ? src__di__errors._noProviderError(this.token) : dart.notNull(src__di__errors._noProviderError(this.token)) + (": " + dart.str(this.path[$join](" -> ")) + " -> " + dart.str(this.token) + ".\n" + "**NOTE**: This path is not exhaustive, and nodes may be missing " + "in between the \"->\" delimiters. There is ongoing work to improve " + "this error message and include all the nodes where possible. ");
    }
  };
  (src__di__errors.NoProviderError.__ = function(token, stack) {
    this[token$] = token;
    this[path] = src__di__errors.NoProviderError._withAdjacentDeduped(stack, token);
    src__di__errors.NoProviderError.__proto__.__.call(this);
  }).prototype = src__di__errors.NoProviderError.prototype;
  dart.addTypeTests(src__di__errors.NoProviderError);
  const token$ = Symbol("NoProviderError.token");
  const path = Symbol("NoProviderError.path");
  dart.setFieldSignature(src__di__errors.NoProviderError, () => ({
    __proto__: dart.getFields(src__di__errors.NoProviderError.__proto__),
    token: dart.finalFieldType(core.Object),
    path: dart.finalFieldType(ListOfObject())
  }));
  dart.defineExtensionMethods(src__di__errors.NoProviderError, ['toString']);
  const _uniqueName = Symbol('_uniqueName');
  const _is_OpaqueToken_default = Symbol('_is_OpaqueToken_default');
  src__core__di__opaque_token.OpaqueToken$ = dart.generic(T => {
    class OpaqueToken extends core.Object {
      toString() {
        if (dart.test(src__runtime__optimizations.isDevMode)) {
          return "OpaqueToken (" + dart.str(super.toString()) + ") <" + dart.str(dart.wrapType(T)) + ">('" + dart.str(this[_uniqueName]) + "')";
        }
        return super.toString();
      }
    }
    (OpaqueToken.new = function(uniqueName) {
      if (uniqueName === void 0) uniqueName = "";
      this[_uniqueName] = uniqueName;
    }).prototype = OpaqueToken.prototype;
    dart.addTypeTests(OpaqueToken);
    OpaqueToken.prototype[_is_OpaqueToken_default] = true;
    dart.setMethodSignature(OpaqueToken, () => ({
      __proto__: dart.getMethods(OpaqueToken.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setFieldSignature(OpaqueToken, () => ({
      __proto__: dart.getFields(OpaqueToken.__proto__),
      [_uniqueName]: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(OpaqueToken, ['toString']);
    return OpaqueToken;
  });
  src__core__di__opaque_token.OpaqueToken = src__core__di__opaque_token.OpaqueToken$();
  dart.addTypeTests(src__core__di__opaque_token.OpaqueToken, _is_OpaqueToken_default);
  const _listOf = Symbol('_listOf');
  const _is_MultiToken_default = Symbol('_is_MultiToken_default');
  src__core__di__opaque_token.MultiToken$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class MultiToken extends src__core__di__opaque_token.OpaqueToken$(core.List$(T)) {
      [_listOf]() {
        return JSArrayOfT().of([]);
      }
      toString() {
        if (dart.test(src__runtime__optimizations.isDevMode)) {
          return "MultiToken (" + dart.str(super.toString()) + ") <" + dart.str(dart.wrapType(T)) + ">('" + dart.str(this[_uniqueName]) + "')";
        }
        return super.toString();
      }
    }
    (MultiToken.new = function(uniqueName) {
      if (uniqueName === void 0) uniqueName = "";
      MultiToken.__proto__.new.call(this, uniqueName);
    }).prototype = MultiToken.prototype;
    dart.addTypeTests(MultiToken);
    MultiToken.prototype[_is_MultiToken_default] = true;
    dart.setMethodSignature(MultiToken, () => ({
      __proto__: dart.getMethods(MultiToken.__proto__),
      [_listOf]: dart.fnType(core.List$(T), []),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.defineExtensionMethods(MultiToken, ['toString']);
    return MultiToken;
  });
  src__core__di__opaque_token.MultiToken = src__core__di__opaque_token.MultiToken$();
  dart.addTypeTests(src__core__di__opaque_token.MultiToken, _is_MultiToken_default);
  src__core__di__opaque_token.listOfMultiToken = function(T, token) {
    return token[_listOf]();
  };
  dart.defineLazy(src__di__providers, {
    /*src__di__providers.noValueProvided*/get noValueProvided() {
      return "__noValueProvided__";
    }
  });
  src__di__providers.RuntimeInjectorBuilder = class RuntimeInjectorBuilder extends core.Object {};
  (src__di__providers.RuntimeInjectorBuilder.new = function() {
  }).prototype = src__di__providers.RuntimeInjectorBuilder.prototype;
  dart.addTypeTests(src__di__providers.RuntimeInjectorBuilder);
  src__di__providers.provide = function(T, token, opts) {
    let useClass = opts && 'useClass' in opts ? opts.useClass : null;
    let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
    let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
    let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
    let deps = opts && 'deps' in opts ? opts.deps : null;
    let multi = opts && 'multi' in opts ? opts.multi : null;
    return src__di__providers.Provider$(T).new(token, {useClass: useClass, useValue: useValue, useExisting: useExisting, useFactory: useFactory, deps: deps, multi: multi});
  };
  const _buildAtRuntime = Symbol('_buildAtRuntime');
  const _listOfMulti = Symbol('_listOfMulti');
  const _is_Provider_default = Symbol('_is_Provider_default');
  src__di__providers.Provider$ = dart.generic(T => {
    let ProviderOfT = () => (ProviderOfT = dart.constFn(src__di__providers.Provider$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class Provider extends core.Object {
      get token() {
        return this[token$];
      }
      set token(value) {
        super.token = value;
      }
      get useClass() {
        return this[useClass$];
      }
      set useClass(value) {
        super.useClass = value;
      }
      get useValue() {
        return this[useValue$];
      }
      set useValue(value) {
        super.useValue = value;
      }
      get useExisting() {
        return this[useExisting$];
      }
      set useExisting(value) {
        super.useExisting = value;
      }
      get useFactory() {
        return this[useFactory$];
      }
      set useFactory(value) {
        super.useFactory = value;
      }
      get deps() {
        return this[deps$];
      }
      set deps(value) {
        super.deps = value;
      }
      get multi() {
        return this[multi$];
      }
      set multi(value) {
        super.multi = value;
      }
      static new(token, opts) {
        return new (ProviderOfT()).__(token, opts);
      }
      [_buildAtRuntime](builder) {
        if (!(this.useValue === "__noValueProvided__")) {
          return builder.useValue(this.useValue);
        }
        if (this.useFactory != null) {
          return builder.useFactory(this.useFactory, {deps: this.deps});
        }
        if (this.useExisting != null) {
          return builder.useExisting(this.useExisting);
        }
        return builder.useClass(this.useClass != null ? this.useClass : src__runtime__optimizations.unsafeCast(core.Type, this.token), {deps: this.deps});
      }
      [_listOfMulti]() {
        return JSArrayOfT().of([]);
      }
    }
    (Provider.__ = function(token, opts) {
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
      let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
      let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let multi = opts && 'multi' in opts ? opts.multi : false;
      this[token$] = token;
      this[useClass$] = useClass;
      this[useValue$] = useValue;
      this[useExisting$] = useExisting;
      this[useFactory$] = useFactory;
      this[deps$] = deps;
      this[multi$] = multi;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    const token$ = Symbol("Provider.token");
    const useClass$ = Symbol("Provider.useClass");
    const useValue$ = Symbol("Provider.useValue");
    const useExisting$ = Symbol("Provider.useExisting");
    const useFactory$ = Symbol("Provider.useFactory");
    const deps$ = Symbol("Provider.deps");
    const multi$ = Symbol("Provider.multi");
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      [_buildAtRuntime]: dart.fnType(core.Object, [src__di__providers.RuntimeInjectorBuilder]),
      [_listOfMulti]: dart.fnType(core.List$(T), [])
    }));
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      token: dart.finalFieldType(core.Object),
      useClass: dart.finalFieldType(core.Type),
      useValue: dart.finalFieldType(core.Object),
      useExisting: dart.finalFieldType(core.Object),
      useFactory: dart.finalFieldType(core.Function),
      deps: dart.finalFieldType(ListOfObject()),
      multi: dart.finalFieldType(core.bool)
    }));
    return Provider;
  });
  src__di__providers.Provider = src__di__providers.Provider$();
  dart.addTypeTests(src__di__providers.Provider, _is_Provider_default);
  src__di__providers.buildAtRuntime = function(provider, builder) {
    return provider[_buildAtRuntime](builder);
  };
  src__di__providers.listOfMulti = function(provider) {
    let token = provider.token;
    if (src__core__di__opaque_token.MultiToken.is(token)) {
      return src__core__di__opaque_token.listOfMultiToken(dart.dynamic, token);
    }
    return provider[_listOfMulti]();
  };
  const _is_ClassProvider_default = Symbol('_is_ClassProvider_default');
  src__di__providers.ClassProvider$ = dart.generic(T => {
    let ClassProviderOfT = () => (ClassProviderOfT = dart.constFn(src__di__providers.ClassProvider$(T)))();
    class ClassProvider extends src__di__providers.Provider$(T) {
      static new(type, opts) {
        return new (ClassProviderOfT()).__(type, opts);
      }
      static forToken(token, opts) {
        return new (ClassProviderOfT()).__(token, opts);
      }
    }
    (ClassProvider.__ = function(token, opts) {
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let multi = opts && 'multi' in opts ? opts.multi : false;
      ClassProvider.__proto__.__.call(this, token, {useClass: core.Type._check((() => {
          let l = useClass;
          return l != null ? l : token;
        })()), multi: multi});
    }).prototype = ClassProvider.prototype;
    dart.addTypeTests(ClassProvider);
    ClassProvider.prototype[_is_ClassProvider_default] = true;
    return ClassProvider;
  });
  src__di__providers.ClassProvider = src__di__providers.ClassProvider$();
  dart.addTypeTests(src__di__providers.ClassProvider, _is_ClassProvider_default);
  const _is_ExistingProvider_default = Symbol('_is_ExistingProvider_default');
  src__di__providers.ExistingProvider$ = dart.generic(T => {
    let ExistingProviderOfT = () => (ExistingProviderOfT = dart.constFn(src__di__providers.ExistingProvider$(T)))();
    class ExistingProvider extends src__di__providers.Provider$(T) {
      static new(type, useExisting, opts) {
        return new (ExistingProviderOfT()).__(type, useExisting, opts);
      }
      static forToken(token, useExisting, opts) {
        return new (ExistingProviderOfT()).__(token, useExisting, opts);
      }
    }
    (ExistingProvider.__ = function(token, useExisting, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      ExistingProvider.__proto__.__.call(this, token, {useExisting: useExisting, multi: multi});
    }).prototype = ExistingProvider.prototype;
    dart.addTypeTests(ExistingProvider);
    ExistingProvider.prototype[_is_ExistingProvider_default] = true;
    return ExistingProvider;
  });
  src__di__providers.ExistingProvider = src__di__providers.ExistingProvider$();
  dart.addTypeTests(src__di__providers.ExistingProvider, _is_ExistingProvider_default);
  const _is_FactoryProvider_default = Symbol('_is_FactoryProvider_default');
  src__di__providers.FactoryProvider$ = dart.generic(T => {
    let FactoryProviderOfT = () => (FactoryProviderOfT = dart.constFn(src__di__providers.FactoryProvider$(T)))();
    class FactoryProvider extends src__di__providers.Provider$(T) {
      static new(type, useFactory, opts) {
        return new (FactoryProviderOfT()).__(type, useFactory, opts);
      }
      static forToken(token, useFactory, opts) {
        return new (FactoryProviderOfT()).__(token, useFactory, opts);
      }
    }
    (FactoryProvider.__ = function(token, useFactory, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      FactoryProvider.__proto__.__.call(this, token, {useFactory: useFactory, multi: multi, deps: deps});
    }).prototype = FactoryProvider.prototype;
    dart.addTypeTests(FactoryProvider);
    FactoryProvider.prototype[_is_FactoryProvider_default] = true;
    return FactoryProvider;
  });
  src__di__providers.FactoryProvider = src__di__providers.FactoryProvider$();
  dart.addTypeTests(src__di__providers.FactoryProvider, _is_FactoryProvider_default);
  const _is_ValueProvider_default = Symbol('_is_ValueProvider_default');
  src__di__providers.ValueProvider$ = dart.generic(T => {
    let ValueProviderOfT = () => (ValueProviderOfT = dart.constFn(src__di__providers.ValueProvider$(T)))();
    class ValueProvider extends src__di__providers.Provider$(T) {
      static new(type, useValue, opts) {
        return new (ValueProviderOfT()).__(type, useValue, opts);
      }
      static forToken(token, useValue, opts) {
        return new (ValueProviderOfT()).__(token, useValue, opts);
      }
    }
    (ValueProvider.__ = function(token, useValue, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      ValueProvider.__proto__.__.call(this, token, {useValue: useValue, multi: multi});
    }).prototype = ValueProvider.prototype;
    dart.addTypeTests(ValueProvider);
    ValueProvider.prototype[_is_ValueProvider_default] = true;
    return ValueProvider;
  });
  src__di__providers.ValueProvider = src__di__providers.ValueProvider$();
  dart.addTypeTests(src__di__providers.ValueProvider, _is_ValueProvider_default);
  let const$0;
  let const$1;
  src__di__module.Module = class Module extends core.Object {
    get include() {
      return this[include$];
    }
    set include(value) {
      super.include = value;
    }
    get provide() {
      return this[provide$];
    }
    set provide(value) {
      super.provide = value;
    }
    static new(opts) {
      return new src__di__module.Module.__(opts);
    }
  };
  (src__di__module.Module.__ = function(opts) {
    let include = opts && 'include' in opts ? opts.include : const$0 || (const$0 = dart.constList([], src__di__module.Module));
    let provide = opts && 'provide' in opts ? opts.provide : const$1 || (const$1 = dart.constList([], ProviderOfObject()));
    this[include$] = include;
    this[provide$] = provide;
  }).prototype = src__di__module.Module.prototype;
  dart.addTypeTests(src__di__module.Module);
  const include$ = Symbol("Module.include");
  const provide$ = Symbol("Module.provide");
  dart.setFieldSignature(src__di__module.Module, () => ({
    __proto__: dart.getFields(src__di__module.Module.__proto__),
    include: dart.finalFieldType(ListOfModule()),
    provide: dart.finalFieldType(ListOfProviderOfObject())
  }));
  src__di__module.internalModuleToList = function(module) {
    let result = JSArrayOfProviderOfObject().of([]);
    let includes = module.include;
    for (let i = 0, l = includes[$length]; i < dart.notNull(l); i++) {
      result[$addAll](src__di__module.internalModuleToList(includes[$_get](i)));
    }
    let provides = module.provide;
    for (let i = 0, l = provides[$length]; i < dart.notNull(l); i++) {
      result[$add](provides[$_get](i));
    }
    return result;
  };
  src__core__di__decorators.Inject = class Inject extends core.Object {
    get token() {
      return this[token$0];
    }
    set token(value) {
      super.token = value;
    }
    toString() {
      return "@Inject(" + dart.str(this.token) + ")";
    }
  };
  (src__core__di__decorators.Inject.new = function(token) {
    this[token$0] = token;
  }).prototype = src__core__di__decorators.Inject.prototype;
  dart.addTypeTests(src__core__di__decorators.Inject);
  const token$0 = Symbol("Inject.token");
  dart.setFieldSignature(src__core__di__decorators.Inject, () => ({
    __proto__: dart.getFields(src__core__di__decorators.Inject.__proto__),
    token: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__core__di__decorators.Inject, ['toString']);
  src__core__di__decorators.Injectable = class Injectable extends core.Object {};
  (src__core__di__decorators.Injectable.new = function() {
  }).prototype = src__core__di__decorators.Injectable.prototype;
  dart.addTypeTests(src__core__di__decorators.Injectable);
  src__core__di__decorators.Optional = class Optional extends core.Object {};
  (src__core__di__decorators.Optional.new = function() {
  }).prototype = src__core__di__decorators.Optional.prototype;
  dart.addTypeTests(src__core__di__decorators.Optional);
  src__core__di__decorators.Self = class Self extends core.Object {};
  (src__core__di__decorators.Self.new = function() {
  }).prototype = src__core__di__decorators.Self.prototype;
  dart.addTypeTests(src__core__di__decorators.Self);
  src__core__di__decorators.SkipSelf = class SkipSelf extends core.Object {};
  (src__core__di__decorators.SkipSelf.new = function() {
  }).prototype = src__core__di__decorators.SkipSelf.prototype;
  dart.addTypeTests(src__core__di__decorators.SkipSelf);
  src__core__di__decorators.Host = class Host extends core.Object {};
  (src__core__di__decorators.Host.new = function() {
  }).prototype = src__core__di__decorators.Host.prototype;
  dart.addTypeTests(src__core__di__decorators.Host);
  dart.defineLazy(src__di__reflector, {
    /*src__di__reflector._components*/get _components() {
      return new (LinkedMapOfObject$dynamic()).new();
    }
  });
  src__di__reflector.registerComponent = function(type, component) {
    src__di__reflector._components[$_set](type, component);
  };
  src__di__reflector.getComponent = function(type) {
    let component = src__di__reflector._components[$_get](type);
    if (dart.test(src__runtime__optimizations.isDevMode) && component == null) {
      dart.throw(new core.StateError.new("Could not find a component factory for " + dart.str(type) + "."));
    }
    return component;
  };
  dart.defineLazy(src__di__reflector, {
    /*src__di__reflector._factories*/get _factories() {
      return new (LinkedMapOfObject$Function()).new();
    }
  });
  src__di__reflector.registerFactory = function(typeOrFunc, factory) {
    src__di__reflector._factories[$_set](typeOrFunc, factory);
  };
  src__di__reflector.getFactory = function(type) {
    let factory = src__di__reflector._factories[$_get](type);
    if (dart.test(src__runtime__optimizations.isDevMode) && factory == null) {
      if (dart.test(src__di__reflector._factories[$isEmpty])) {
        dart.throw(new core.StateError.new("Could not find a factory for " + dart.str(type) + ", there were no factories of any " + "type found. The likely causes is that you are using the newer " + "runApp() semantics, which does not support runtime lookups of " + "factories (and does not support ReflectiveInjector) *or* " + "AngularDart code generation was never invoked (either due to a " + "misconfiguration of Bazel or Build Runner or a missing invocation " + "of `initReflector()` in your `main.dart`)."));
      }
      dart.throw(new core.StateError.new("Could not find a factory for " + dart.str(type) + ". Either a provider" + " was not set, *or* AngularDart code generation was never invoked on " + "the depending package (either due to a misconfiguration of Bazel or " + "Build Runner)."));
    }
    return factory;
  };
  dart.defineLazy(src__di__reflector, {
    /*src__di__reflector._dependencies*/get _dependencies() {
      return new (LinkedMapOfObject$ListOfListOfObject()).new();
    }
  });
  src__di__reflector.registerDependencies = function(invokable, dependencies) {
    src__di__reflector._dependencies[$_set](invokable, dependencies);
  };
  let const$2;
  src__di__reflector.getDependencies = function(object) {
    let l = src__di__reflector._dependencies[$_get](object);
    return l != null ? l : const$2 || (const$2 = dart.constList([], ListOfObject()));
  };
  let const$3;
  let const$4;
  src__di__injector__runtime.ReflectiveInjector = class ReflectiveInjector extends core.Object {
    static resolveAndCreate(providersOrLists, parent) {
      if (parent === void 0) parent = const$3 || (const$3 = dart.const(new src__di__injector__empty.EmptyInjector.new()));
      let flatProviders = src__di__injector__runtime._flattenProviders(providersOrLists);
      if (dart.test(src__runtime__optimizations.isDevMode)) {
        src__di__injector__runtime._assertProviders(flatProviders.providers[$values]);
        src__di__injector__runtime._assertProviders(flatProviders.multiProviders);
      }
      return new src__di__injector__runtime._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, src__runtime__optimizations.unsafeCast(src__di__injector__hierarchical.HierarchicalInjector, parent), false);
    }
    static resolveStaticAndCreate(providersOrLists, parent) {
      if (parent === void 0) parent = const$4 || (const$4 = dart.const(new src__di__injector__empty.EmptyInjector.new()));
      let flatProviders = src__di__injector__runtime._flattenProviders(providersOrLists);
      if (dart.test(src__runtime__optimizations.isDevMode)) {
        src__di__injector__runtime._assertStaticProviders(flatProviders.providers[$values]);
        src__di__injector__runtime._assertStaticProviders(flatProviders.multiProviders);
      }
      return new src__di__injector__runtime._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, src__runtime__optimizations.unsafeCast(src__di__injector__hierarchical.HierarchicalInjector, parent), true);
    }
  };
  (src__di__injector__runtime.ReflectiveInjector.new = function() {
  }).prototype = src__di__injector__runtime.ReflectiveInjector.prototype;
  dart.addTypeTests(src__di__injector__runtime.ReflectiveInjector);
  src__di__injector__runtime.ReflectiveInjector[dart.implements] = () => [src__di__injector__hierarchical.HierarchicalInjector];
  src__di__injector__runtime._isMultiProvider = function(p) {
    return p.multi === true || src__core__di__opaque_token.MultiToken.is(p.token);
  };
  const _providers = Symbol('_providers');
  const _multiProviders = Symbol('_multiProviders');
  const _staticOnlyResolveAndCreate = Symbol('_staticOnlyResolveAndCreate');
  const _instances = Symbol('_instances');
  const _resolveMulti = Symbol('_resolveMulti');
  const _resolveMeta = Symbol('_resolveMeta');
  const _resolveArgs = Symbol('_resolveArgs');
  let const$5;
  src__di__injector__injector.Injector = class Injector extends core.Object {
    static empty(parent) {
      return new src__di__injector__empty.EmptyInjector.new(parent);
    }
    static map(providers, parent) {
      return new src__di__injector__map.MapInjector.new(providers, parent);
    }
    get(token, notFoundValue) {
      if (notFoundValue === void 0) notFoundValue = src__di__injector__injector.throwIfNotFound;
      src__di__errors.debugInjectorEnter(token);
      let result = this.provideUntyped(token, notFoundValue);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      src__di__errors.debugInjectorLeave(token);
      return result;
    }
    provideType(T, token) {
      if (!!dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic))) dart.assertFailed("Returning a dynamic is not supported");
      return src__runtime__optimizations.unsafeCast(T, this.get(token));
    }
    provideToken(T, token) {
      return src__runtime__optimizations.unsafeCast(T, this.get(token));
    }
  };
  (src__di__injector__injector.Injector.new = function() {
  }).prototype = src__di__injector__injector.Injector.prototype;
  dart.addTypeTests(src__di__injector__injector.Injector);
  dart.setMethodSignature(src__di__injector__injector.Injector, () => ({
    __proto__: dart.getMethods(src__di__injector__injector.Injector.__proto__),
    get: dart.fnType(dart.dynamic, [core.Object], [core.Object]),
    provideType: dart.gFnType(T => [T, [core.Type]], T => [core.Object]),
    provideToken: dart.gFnType(T => [T, [src__core__di__opaque_token.OpaqueToken$(T)]])
  }));
  src__di__injector__hierarchical.HierarchicalInjector = class HierarchicalInjector extends src__di__injector__injector.Injector {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    provideUntyped(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      src__di__errors.debugInjectorEnter(token);
      let result = this.injectFromSelfOptional(token, orElse);
      if (core.identical(result, orElse)) {
        result = this.injectFromAncestryOptional(token, orElse);
      }
      src__di__errors.debugInjectorLeave(token);
      return result;
    }
    injectFromSelf(T, token) {
      let result = this.injectFromSelfOptional(token);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      return src__runtime__optimizations.unsafeCast(T, result);
    }
    injectFromParent(T, token) {
      let result = this.injectFromParentOptional(token);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      return src__runtime__optimizations.unsafeCast(T, result);
    }
    injectFromParentOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return this.parent.injectFromSelfOptional(token, orElse);
    }
    injectFromAncestry(T, token) {
      let result = this.injectFromAncestryOptional(token);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      return src__runtime__optimizations.unsafeCast(T, result);
    }
    injectFromAncestryOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return this.parent.provideUntyped(token, orElse);
    }
  };
  (src__di__injector__hierarchical.HierarchicalInjector.new = function(parent) {
    if (parent === void 0) parent = null;
    this[parent$] = src__di__injector__hierarchical.HierarchicalInjector._check((() => {
      let l = parent;
      return l != null ? l : const$5 || (const$5 = dart.const(src__di__injector__injector.Injector.empty()));
    })());
    src__di__injector__hierarchical.HierarchicalInjector.__proto__.new.call(this);
  }).prototype = src__di__injector__hierarchical.HierarchicalInjector.prototype;
  (src__di__injector__hierarchical.HierarchicalInjector.maybeEmpty = function(parent) {
    if (parent === void 0) parent = null;
    this[parent$] = parent;
    src__di__injector__hierarchical.HierarchicalInjector.__proto__.new.call(this);
  }).prototype = src__di__injector__hierarchical.HierarchicalInjector.prototype;
  dart.addTypeTests(src__di__injector__hierarchical.HierarchicalInjector);
  const parent$ = Symbol("HierarchicalInjector.parent");
  dart.setMethodSignature(src__di__injector__hierarchical.HierarchicalInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__hierarchical.HierarchicalInjector.__proto__),
    provideUntyped: dart.fnType(core.Object, [core.Object], [core.Object]),
    injectFromSelf: dart.gFnType(T => [T, [core.Object]]),
    injectFromParent: dart.gFnType(T => [T, [core.Object]]),
    injectFromParentOptional: dart.fnType(core.Object, [core.Object], [core.Object]),
    injectFromAncestry: dart.gFnType(T => [T, [core.Object]]),
    injectFromAncestryOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(src__di__injector__hierarchical.HierarchicalInjector, () => ({
    __proto__: dart.getFields(src__di__injector__hierarchical.HierarchicalInjector.__proto__),
    parent: dart.finalFieldType(src__di__injector__hierarchical.HierarchicalInjector)
  }));
  src__di__injector__runtime._RuntimeInjector = class _RuntimeInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      let instance = this[_instances][$_get](token);
      if (instance == null && !dart.test(this[_instances][$containsKey](token))) {
        let provider = this[_providers][$_get](token);
        if (provider == null) {
          return orElse;
        }
        if (dart.test(src__di__injector__runtime._isMultiProvider(provider))) {
          return this[_instances][$_set](provider.token, this[_resolveMulti](provider));
        }
        this[_instances][$_set](token, instance = src__di__providers.buildAtRuntime(provider, this));
      }
      return instance;
    }
    resolveAndCreateChild(providersOrLists) {
      if (dart.test(this[_staticOnlyResolveAndCreate])) {
        return src__di__injector__runtime.ReflectiveInjector.resolveStaticAndCreate(providersOrLists, this);
      }
      return src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(providersOrLists, this);
    }
    resolveAndInstantiate(providerOrType) {
      let provider = src__di__providers.Provider.is(providerOrType) ? providerOrType : src__di__providers.Provider.new(providerOrType, {useClass: src__runtime__optimizations.unsafeCast(core.Type, providerOrType)});
      if (dart.test(this[_staticOnlyResolveAndCreate])) {
        src__di__injector__runtime._assertStaticProviders(JSArrayOfProviderOfvoid().of([provider]));
      }
      return src__di__providers.buildAtRuntime(provider, this);
    }
    [_resolveArgs](token, deps) {
      if (deps === void 0) deps = null;
      let t = deps;
      t == null ? deps = src__di__reflector.getDependencies(token) : t;
      let resolved = core.List.new(deps[$length]);
      for (let i = 0, l = resolved[$length]; i < dart.notNull(l); i++) {
        let dep = deps[$_get](i);
        let result = null;
        if (core.List.is(dep)) {
          result = this[_resolveMeta](dep);
        } else {
          src__di__errors.debugInjectorEnter(dep);
          result = this.get(dep);
          src__di__errors.debugInjectorLeave(dep);
        }
        if (result === src__di__injector__injector.throwIfNotFound) {
          return src__di__injector__injector.throwsNotFound(this, dep);
        }
        resolved[$_set](i, result);
      }
      return resolved;
    }
    [_resolveMulti](provider) {
      let results = src__di__providers.listOfMulti(provider);
      for (let other of this[_multiProviders]) {
        if (core.identical(other.token, provider.token)) {
          results[$add](src__di__providers.buildAtRuntime(other, this));
        }
      }
      return results;
    }
    [_resolveMeta](metadata) {
      let token = null;
      let isOptional = false;
      let isSkipSelf = false;
      let isSelf = false;
      let isHost = false;
      for (let n = 0, l = metadata[$length]; n < dart.notNull(l); n++) {
        let annotation = metadata[$_get](n);
        if (src__core__di__decorators.Inject.is(annotation)) {
          token = annotation.token;
        } else if (src__core__di__decorators.Optional.is(annotation)) {
          isOptional = true;
        } else if (src__core__di__decorators.SkipSelf.is(annotation)) {
          isSkipSelf = true;
        } else if (src__core__di__decorators.Self.is(annotation)) {
          isSelf = true;
        } else if (src__core__di__decorators.Host.is(annotation)) {
          isHost = true;
        } else {
          token = annotation;
        }
      }
      let result = null;
      src__di__errors.debugInjectorEnter(token);
      let orElse = isOptional ? null : src__di__injector__injector.throwIfNotFound;
      if (isSkipSelf) {
        result = this.injectFromAncestryOptional(token, orElse);
      } else if (isSelf) {
        result = this.injectFromSelfOptional(token, orElse);
      } else if (isHost) {
        result = this.injectFromParentOptional(token, orElse);
      } else {
        result = this.provideUntyped(token, orElse);
      }
      if (result === src__di__injector__injector.throwIfNotFound) {
        src__di__injector__injector.throwsNotFound(this, token);
      }
      src__di__errors.debugInjectorLeave(token);
      return result;
    }
    useClass(clazz, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let factory = src__di__reflector.getFactory(clazz);
      return core.Function.apply(factory, this[_resolveArgs](clazz, deps));
    }
    useExisting(to) {
      return this.get(to);
    }
    useFactory(factory, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      return core.Function.apply(factory, this[_resolveArgs](factory, deps));
    }
    useValue(value) {
      return value;
    }
  };
  (src__di__injector__runtime._RuntimeInjector.new = function(providers, multiProviders, parent, staticOnlyResolveAndCreate) {
    this[_instances] = new _js_helper.IdentityMap.new();
    this[_providers] = providers;
    this[_multiProviders] = multiProviders;
    this[_staticOnlyResolveAndCreate] = staticOnlyResolveAndCreate;
    src__di__injector__runtime._RuntimeInjector.__proto__.new.call(this, parent);
    if (!(parent != null)) dart.assertFailed("A parent injector is always required.");
    this[_instances][$_set](dart.wrapType(src__di__injector__injector.Injector), this);
  }).prototype = src__di__injector__runtime._RuntimeInjector.prototype;
  dart.addTypeTests(src__di__injector__runtime._RuntimeInjector);
  src__di__injector__runtime._RuntimeInjector[dart.implements] = () => [src__di__injector__runtime.ReflectiveInjector, src__di__providers.RuntimeInjectorBuilder];
  dart.setMethodSignature(src__di__injector__runtime._RuntimeInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__runtime._RuntimeInjector.__proto__),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object]),
    resolveAndCreateChild: dart.fnType(src__di__injector__runtime.ReflectiveInjector, [core.List$(core.Object)]),
    resolveAndInstantiate: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_resolveArgs]: dart.fnType(core.List$(core.Object), [core.Object], [core.List$(core.Object)]),
    [_resolveMulti]: dart.fnType(core.List$(core.Object), [src__di__providers.Provider$(core.Object)]),
    [_resolveMeta]: dart.fnType(core.Object, [core.List$(core.Object)]),
    useClass: dart.fnType(core.Object, [core.Type], {deps: core.List$(core.Object)}),
    useExisting: dart.fnType(core.Object, [core.Object]),
    useFactory: dart.fnType(core.Object, [core.Function], {deps: core.List$(core.Object)}),
    useValue: dart.fnType(core.Object, [core.Object])
  }));
  dart.setFieldSignature(src__di__injector__runtime._RuntimeInjector, () => ({
    __proto__: dart.getFields(src__di__injector__runtime._RuntimeInjector.__proto__),
    [_instances]: dart.finalFieldType(core.Map),
    [_providers]: dart.finalFieldType(MapOfObject$ProviderOfObject()),
    [_multiProviders]: dart.finalFieldType(ListOfProviderOfObject()),
    [_staticOnlyResolveAndCreate]: dart.finalFieldType(core.bool)
  }));
  src__di__injector__runtime._FlatProviders = class _FlatProviders extends core.Object {};
  (src__di__injector__runtime._FlatProviders.new = function(providers, multiProviders) {
    this.providers = providers;
    this.multiProviders = multiProviders;
  }).prototype = src__di__injector__runtime._FlatProviders.prototype;
  dart.addTypeTests(src__di__injector__runtime._FlatProviders);
  dart.setFieldSignature(src__di__injector__runtime._FlatProviders, () => ({
    __proto__: dart.getFields(src__di__injector__runtime._FlatProviders.__proto__),
    providers: dart.finalFieldType(MapOfdynamic$ProviderOfObject()),
    multiProviders: dart.finalFieldType(ListOfProviderOfObject())
  }));
  src__di__injector__runtime._assertProviders = function(providers) {
    for (let provider of providers) {
      if (provider.useClass != null) {
        src__di__reflector.getFactory(provider.useClass);
      } else if (provider.useFactory != null && provider.deps == null) {
        src__di__reflector.getDependencies(provider.useFactory);
      } else if (provider.useFactory === "__noValueProvided__" && provider.useExisting == null && core.Type.is(provider.token)) {
        src__di__reflector.getFactory(src__runtime__optimizations.unsafeCast(core.Type, provider.token));
      }
    }
  };
  src__di__injector__runtime._throwUnsupportedProvider = function(provider) {
    dart.throw(new core.UnsupportedError.new("Could not create a provider for token \"" + dart.str(provider.token) + "\"!\n\n" + "ReflectiveInjector.resolveStaticAndCreate only supports some providers.\n" + "\n" + "* FactoryProvider (or Provider(useFactory: ...)) with deps: [ ... ] set\n" + "* ValueProvider (or Provider(useValue: ...))\n" + "* ExistingProvider (or Provider(useExisting: ...))\n" + "\n" + "Specifically, any providers that require looking up factory functions or " + "argument information for factory functions at runtime are not supported " + "since they would defeat the tree-shaking improvements of \"runApp\".\n\n" + "See https://github.com/dart-lang/angular/issues/1426 for details"));
  };
  src__di__injector__runtime._assertStaticProviders = function(providers) {
    for (let provider of providers) {
      if (!(provider.useValue === "__noValueProvided__")) {
        continue;
      }
      if (!(provider.useExisting == null)) {
        continue;
      }
      if (!(provider.useFactory === "__noValueProvided__")) {
        if (provider.deps != null) {
          continue;
        }
      }
      src__di__injector__runtime._throwUnsupportedProvider(provider);
    }
  };
  src__di__injector__runtime._flattenProviders = function(providersOrLists, allProviders, multiProviders) {
    if (allProviders === void 0) allProviders = null;
    if (multiProviders === void 0) multiProviders = null;
    let t = allProviders;
    t == null ? allProviders = new (IdentityMapOfObject$ProviderOfObject()).new() : t;
    let t$ = multiProviders;
    t$ == null ? multiProviders = JSArrayOfProviderOfObject().of([]) : t$;
    for (let i = 0, len = providersOrLists[$length]; i < dart.notNull(len); i++) {
      let item = providersOrLists[$_get](i);
      if (core.List.is(item)) {
        src__di__injector__runtime._flattenProviders(item, allProviders, multiProviders);
      } else if (src__di__providers.Provider.is(item)) {
        if (dart.test(src__di__injector__runtime._isMultiProvider(item))) {
          multiProviders[$add](item);
        }
        allProviders[$_set](item.token, item);
      } else if (core.Type.is(item)) {
        allProviders[$_set](item, ProviderOfObject().new(item, {useClass: item}));
      } else if (src__di__module.Module.is(item)) {
        let providers = src__di__module.internalModuleToList(item);
        src__di__injector__runtime._flattenProviders(providers, allProviders, multiProviders);
      } else {
        if (!false) dart.assertFailed("Unsupported: " + dart.str(item));
      }
    }
    return new src__di__injector__runtime._FlatProviders.new(allProviders, multiProviders);
  };
  let const$6;
  const _providers$ = Symbol('_providers');
  src__di__injector__map.MapInjector = class MapInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      let result = this[_providers$][$_get](token);
      if (result == null) {
        if (!!dart.test(this[_providers$][$containsKey](token))) dart.assertFailed("Value for " + dart.str(token) + " should not be null for Injector.map");
        if (token === dart.wrapType(src__di__injector__injector.Injector)) {
          return this;
        }
        result = orElse;
      }
      return result;
    }
  };
  (src__di__injector__map.MapInjector.new = function(providers, parent) {
    if (parent === void 0) parent = const$6 || (const$6 = dart.const(new src__di__injector__empty.EmptyInjector.new()));
    this[_providers$] = providers;
    src__di__injector__map.MapInjector.__proto__.new.call(this, parent);
  }).prototype = src__di__injector__map.MapInjector.prototype;
  dart.addTypeTests(src__di__injector__map.MapInjector);
  dart.setMethodSignature(src__di__injector__map.MapInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__map.MapInjector.__proto__),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(src__di__injector__map.MapInjector, () => ({
    __proto__: dart.getFields(src__di__injector__map.MapInjector.__proto__),
    [_providers$]: dart.finalFieldType(MapOfObject$Object())
  }));
  src__di__injector__empty.EmptyInjector = class EmptyInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return token === dart.wrapType(src__di__injector__injector.Injector) ? this : orElse;
    }
    injectFromParentOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (this.parent == null) {
        return orElse;
      }
      return this.parent.injectFromSelfOptional(token, orElse);
    }
    injectFromAncestryOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (this.parent == null) {
        return orElse;
      }
      return this.parent.provideUntyped(token, orElse);
    }
  };
  (src__di__injector__empty.EmptyInjector.new = function(parent) {
    if (parent === void 0) parent = null;
    src__di__injector__empty.EmptyInjector.__proto__.maybeEmpty.call(this, parent);
  }).prototype = src__di__injector__empty.EmptyInjector.prototype;
  dart.addTypeTests(src__di__injector__empty.EmptyInjector);
  dart.setMethodSignature(src__di__injector__empty.EmptyInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__empty.EmptyInjector.__proto__),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.defineLazy(src__di__injector__injector, {
    /*src__di__injector__injector.throwIfNotFound*/get throwIfNotFound() {
      return dart.const(new core.Object.new());
    }
  });
  src__di__injector__injector.throwsNotFound = function(injector, token) {
    dart.throw(src__di__errors.noProviderError(token));
  };
  const _providersOrModules = Symbol('_providersOrModules');
  src__di__injector__injector.GenerateInjector = class GenerateInjector extends core.Object {
    static fromModules(modules) {
      return new src__di__injector__injector.GenerateInjector.new(modules);
    }
  };
  (src__di__injector__injector.GenerateInjector.new = function(providersOrModules) {
    this[_providersOrModules] = providersOrModules;
  }).prototype = src__di__injector__injector.GenerateInjector.prototype;
  dart.addTypeTests(src__di__injector__injector.GenerateInjector);
  dart.setFieldSignature(src__di__injector__injector.GenerateInjector, () => ({
    __proto__: dart.getFields(src__di__injector__injector.GenerateInjector.__proto__),
    [_providersOrModules]: dart.finalFieldType(ListOfObject())
  }));
  src__facade__lang.jsSplit = function(s, regExp) {
    let parts = JSArrayOfString().of([]);
    let lastEnd = 0;
    for (let match of regExp.allMatches(s)) {
      parts[$add](s[$substring](lastEnd, match.start));
      lastEnd = match.end;
      for (let i = 0, len = match.groupCount; i < dart.notNull(len); i++) {
        parts[$add](match.group(i + 1));
      }
    }
    parts[$add](s[$substring](lastEnd));
    return parts;
  };
  src__facade__lang.isPrimitive = function(obj) {
    return typeof obj == 'number' || typeof obj == 'boolean' || obj == null || typeof obj == 'string';
  };
  let const$7;
  let const$8;
  src__core__change_detection__change_detection_util._DevModeEquality = class _DevModeEquality extends src__equality.DefaultEquality$(core.Object) {
    equals(a, b) {
      if (core.Iterable.is(a) && core.Iterable.is(b)) {
        return (const$8 || (const$8 = dart.const(new (IterableEqualityOfObject()).new(const$7 || (const$7 = dart.const(new src__core__change_detection__change_detection_util._DevModeEquality.new())))))).equals(a, b);
      } else if (!core.Iterable.is(a) && !dart.test(src__facade__lang.isPrimitive(a)) && !core.Iterable.is(b) && !dart.test(src__facade__lang.isPrimitive(b))) {
        return true;
      } else {
        return core.identical(a, b);
      }
    }
  };
  (src__core__change_detection__change_detection_util._DevModeEquality.new = function() {
    src__core__change_detection__change_detection_util._DevModeEquality.__proto__.new.call(this);
  }).prototype = src__core__change_detection__change_detection_util._DevModeEquality.prototype;
  dart.addTypeTests(src__core__change_detection__change_detection_util._DevModeEquality);
  dart.setMethodSignature(src__core__change_detection__change_detection_util._DevModeEquality, () => ({
    __proto__: dart.getMethods(src__core__change_detection__change_detection_util._DevModeEquality.__proto__),
    equals: dart.fnType(core.bool, [core.Object, core.Object])
  }));
  let const$9;
  src__core__change_detection__change_detection_util.devModeEqual = function(a, b) {
    return (const$9 || (const$9 = dart.const(new src__core__change_detection__change_detection_util._DevModeEquality.new()))).equals(a, b);
  };
  src__core__change_detection__change_detection_util.SimpleChange = class SimpleChange extends core.Object {
    get previousValue() {
      return this[previousValue$];
    }
    set previousValue(value) {
      this[previousValue$] = value;
    }
    get currentValue() {
      return this[currentValue$];
    }
    set currentValue(value) {
      this[currentValue$] = value;
    }
  };
  (src__core__change_detection__change_detection_util.SimpleChange.new = function(previousValue, currentValue) {
    this[previousValue$] = previousValue;
    this[currentValue$] = currentValue;
  }).prototype = src__core__change_detection__change_detection_util.SimpleChange.prototype;
  dart.addTypeTests(src__core__change_detection__change_detection_util.SimpleChange);
  const previousValue$ = Symbol("SimpleChange.previousValue");
  const currentValue$ = Symbol("SimpleChange.currentValue");
  dart.setFieldSignature(src__core__change_detection__change_detection_util.SimpleChange, () => ({
    __proto__: dart.getFields(src__core__change_detection__change_detection_util.SimpleChange.__proto__),
    previousValue: dart.fieldType(dart.dynamic),
    currentValue: dart.fieldType(dart.dynamic)
  }));
  src__core__change_detection__change_detector_ref.ChangeDetectorRef = class ChangeDetectorRef extends core.Object {};
  (src__core__change_detection__change_detector_ref.ChangeDetectorRef.new = function() {
  }).prototype = src__core__change_detection__change_detector_ref.ChangeDetectorRef.prototype;
  dart.addTypeTests(src__core__change_detection__change_detector_ref.ChangeDetectorRef);
  src__core__change_detection__constants.ChangeDetectorState = class ChangeDetectorState extends core.Object {};
  (src__core__change_detection__constants.ChangeDetectorState.new = function() {
  }).prototype = src__core__change_detection__constants.ChangeDetectorState.prototype;
  dart.addTypeTests(src__core__change_detection__constants.ChangeDetectorState);
  dart.defineLazy(src__core__change_detection__constants.ChangeDetectorState, {
    /*src__core__change_detection__constants.ChangeDetectorState.NeverChecked*/get NeverChecked() {
      return 0;
    },
    /*src__core__change_detection__constants.ChangeDetectorState.CheckedBefore*/get CheckedBefore() {
      return 1;
    },
    /*src__core__change_detection__constants.ChangeDetectorState.Errored*/get Errored() {
      return 2;
    }
  });
  src__core__change_detection__constants.ChangeDetectionStrategy = class ChangeDetectionStrategy extends core.Object {};
  (src__core__change_detection__constants.ChangeDetectionStrategy.new = function() {
  }).prototype = src__core__change_detection__constants.ChangeDetectionStrategy.prototype;
  dart.addTypeTests(src__core__change_detection__constants.ChangeDetectionStrategy);
  dart.defineLazy(src__core__change_detection__constants.ChangeDetectionStrategy, {
    /*src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce*/get CheckOnce() {
      return 1;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.Checked*/get Checked() {
      return 2;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways*/get CheckAlways() {
      return 3;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.Detached*/get Detached() {
      return 4;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.OnPush*/get OnPush() {
      return 5;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.Stateful*/get Stateful() {
      return 6;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.Default*/get Default() {
      return 0;
    }
  });
  src__core__change_detection__constants.isDefaultChangeDetectionStrategy = function(changeDetectionStrategy) {
    return changeDetectionStrategy == null || changeDetectionStrategy === src__core__change_detection__constants.ChangeDetectionStrategy.Default;
  };
  src__core__change_detection__differs__default_iterable_differ._trackByIdentity = function(index, item) {
    return item;
  };
  const _trackByFn = Symbol('_trackByFn');
  const _length = Symbol('_length');
  const _collection = Symbol('_collection');
  const _linkedRecords = Symbol('_linkedRecords');
  const _unlinkedRecords = Symbol('_unlinkedRecords');
  const _previousItHead = Symbol('_previousItHead');
  const _itHead = Symbol('_itHead');
  const _itTail = Symbol('_itTail');
  const _additionsHead = Symbol('_additionsHead');
  const _additionsTail = Symbol('_additionsTail');
  const _movesHead = Symbol('_movesHead');
  const _movesTail = Symbol('_movesTail');
  const _removalsHead = Symbol('_removalsHead');
  const _removalsTail = Symbol('_removalsTail');
  const _identityChangesHead = Symbol('_identityChangesHead');
  const _identityChangesTail = Symbol('_identityChangesTail');
  const _nextRemoved = Symbol('_nextRemoved');
  const _next = Symbol('_next');
  const _nextAdded = Symbol('_nextAdded');
  const _nextIdentityChange = Symbol('_nextIdentityChange');
  let const$10;
  const _reset = Symbol('_reset');
  const _mismatch = Symbol('_mismatch');
  const _verifyReinsertion = Symbol('_verifyReinsertion');
  const _addIdentityChange = Symbol('_addIdentityChange');
  const _truncate = Symbol('_truncate');
  const _nextPrevious = Symbol('_nextPrevious');
  const _nextMoved = Symbol('_nextMoved');
  const _prev = Symbol('_prev');
  const _remove = Symbol('_remove');
  const _moveAfter = Symbol('_moveAfter');
  const _reinsertAfter = Symbol('_reinsertAfter');
  const _addAfter = Symbol('_addAfter');
  const _addToMoves = Symbol('_addToMoves');
  const _unlink = Symbol('_unlink');
  const _addToRemovals = Symbol('_addToRemovals');
  const _prevRemoved = Symbol('_prevRemoved');
  const _insertAfter = Symbol('_insertAfter');
  src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer = class DefaultIterableDiffer extends core.Object {
    clone(trackByFn) {
      let differ = new src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.new(trackByFn);
      differ[_length] = this[_length];
      differ[_collection] = this[_collection];
      differ[_linkedRecords] = this[_linkedRecords];
      differ[_unlinkedRecords] = this[_unlinkedRecords];
      differ[_previousItHead] = this[_previousItHead];
      differ[_itHead] = this[_itHead];
      differ[_itTail] = this[_itTail];
      differ[_additionsHead] = this[_additionsHead];
      differ[_additionsTail] = this[_additionsTail];
      differ[_movesHead] = this[_movesHead];
      differ[_movesTail] = this[_movesTail];
      differ[_removalsHead] = this[_removalsHead];
      differ[_removalsTail] = this[_removalsTail];
      differ[_identityChangesHead] = this[_identityChangesHead];
      differ[_identityChangesTail] = this[_identityChangesTail];
      return differ;
    }
    get collection() {
      return this[_collection];
    }
    get length() {
      return this[_length];
    }
    forEachOperation(fn) {
      let nextIt = this[_itHead];
      let nextRemove = this[_removalsHead];
      let addRemoveOffset = 0;
      let sizeDeficit = null;
      let moveOffsets = null;
      while (nextIt != null || nextRemove != null) {
        let record = nextRemove == null || nextIt != null && dart.notNull(nextIt.currentIndex) < dart.notNull(src__core__change_detection__differs__default_iterable_differ._getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets)) ? nextIt : nextRemove;
        let adjPreviousIndex = src__core__change_detection__differs__default_iterable_differ._getPreviousIndex(src__runtime__optimizations.unsafeCast(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, record), addRemoveOffset, moveOffsets);
        let currentIndex = core.int._check(dart.dload(record, 'currentIndex'));
        if (core.identical(record, nextRemove)) {
          addRemoveOffset--;
          nextRemove = nextRemove[_nextRemoved];
        } else {
          nextIt = nextIt[_next];
          if (dart.dload(record, 'previousIndex') == null) {
            addRemoveOffset++;
          } else {
            let t = moveOffsets;
            t == null ? moveOffsets = JSArrayOfint().of([]) : t;
            let localMovePreviousIndex = dart.notNull(adjPreviousIndex) - addRemoveOffset;
            let localCurrentIndex = dart.notNull(currentIndex) - addRemoveOffset;
            if (localMovePreviousIndex !== localCurrentIndex) {
              for (let i = 0; i < localMovePreviousIndex; i++) {
                let offset = null;
                if (i < dart.notNull(moveOffsets[$length])) {
                  offset = moveOffsets[$_get](i);
                } else {
                  if (dart.notNull(moveOffsets[$length]) > i) {
                    offset = moveOffsets[$_set](i, 0);
                  } else {
                    sizeDeficit = i - dart.notNull(moveOffsets[$length]) + 1;
                    for (let j = 0; j < dart.notNull(sizeDeficit); j++) {
                      moveOffsets[$add](null);
                    }
                    offset = moveOffsets[$_set](i, 0);
                  }
                }
                let index = dart.notNull(offset) + i;
                if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                  moveOffsets[$_set](i, dart.notNull(offset) + 1);
                }
              }
              let previousIndex = core.int._check(dart.dload(record, 'previousIndex'));
              sizeDeficit = dart.notNull(previousIndex) - dart.notNull(moveOffsets[$length]) + 1;
              for (let j = 0; j < dart.notNull(sizeDeficit); j++) {
                moveOffsets[$add](null);
              }
              moveOffsets[$_set](previousIndex, localCurrentIndex - localMovePreviousIndex);
            }
          }
        }
        if (adjPreviousIndex != currentIndex) {
          fn(src__runtime__optimizations.unsafeCast(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, record), adjPreviousIndex, currentIndex);
        }
      }
    }
    forEachAddedItem(fn) {
      for (let record = this[_additionsHead]; !(record == null); record = record[_nextAdded]) {
        fn(record);
      }
    }
    forEachRemovedItem(fn) {
      for (let record = this[_removalsHead]; !(record == null); record = record[_nextRemoved]) {
        fn(record);
      }
    }
    forEachIdentityChange(fn) {
      for (let record = this[_identityChangesHead]; !(record == null); record = record[_nextIdentityChange]) {
        fn(record);
      }
    }
    diff(collection) {
      if (collection != null) {
        if (!core.Iterable.is(collection)) {
          dart.throw(new core.StateError.new("Error trying to diff '" + dart.str(collection) + "'"));
        }
      } else {
        collection = const$10 || (const$10 = dart.constList([], dart.dynamic));
      }
      return dart.test(this.check(collection)) ? this : null;
    }
    onDestroy() {}
    check(collection) {
      this[_reset]();
      let record = this[_itHead];
      let mayBeDirty = false;
      let index = null;
      let item = null;
      let itemTrackBy = null;
      if (core.List.is(collection)) {
        let list = collection;
        this[_length] = collection[$length];
        for (index = 0; dart.notNull(index) < dart.notNull(this[_length]); index = dart.notNull(index) + 1) {
          item = list[$_get](index);
          itemTrackBy = this[_trackByFn](index, item);
          if (record == null || !core.identical(record.trackById, itemTrackBy)) {
            record = this[_mismatch](record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this[_verifyReinsertion](record, item, itemTrackBy, index);
            }
            if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          }
          record = record[_next];
        }
      } else {
        index = 0;
        collection[$forEach](dart.fn(item => {
          itemTrackBy = this[_trackByFn](index, item);
          if (record == null || !core.identical(record.trackById, itemTrackBy)) {
            record = this[_mismatch](record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this[_verifyReinsertion](record, item, itemTrackBy, index);
            }
            if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          }
          record = record[_next];
          index = dart.notNull(index) + 1;
        }, dynamicToNull()));
        this[_length] = index;
      }
      this[_truncate](record);
      this[_collection] = collection;
      return this.isDirty;
    }
    get isDirty() {
      return !(this[_additionsHead] == null) || !(this[_movesHead] == null) || !(this[_removalsHead] == null) || !(this[_identityChangesHead] == null);
    }
    [_reset]() {
      if (dart.test(this.isDirty)) {
        let record = null;
        let nextRecord = null;
        for (record = this[_previousItHead] = this[_itHead]; !(record == null); record = record[_next]) {
          record[_nextPrevious] = record[_next];
        }
        for (record = this[_additionsHead]; !(record == null); record = record[_nextAdded]) {
          record.previousIndex = record.currentIndex;
        }
        this[_additionsHead] = this[_additionsTail] = null;
        for (record = this[_movesHead]; !(record == null); record = nextRecord) {
          record.previousIndex = record.currentIndex;
          nextRecord = record[_nextMoved];
        }
        this[_movesHead] = this[_movesTail] = null;
        this[_removalsHead] = this[_removalsTail] = null;
        this[_identityChangesHead] = this[_identityChangesTail] = null;
      }
    }
    [_mismatch](record, item, itemTrackBy, index) {
      let previousRecord = null;
      if (record == null) {
        previousRecord = this[_itTail];
      } else {
        previousRecord = record[_prev];
        this[_remove](record);
      }
      record = this[_linkedRecords] == null ? null : this[_linkedRecords].get(itemTrackBy, index);
      if (!(record == null)) {
        if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
        this[_moveAfter](record, previousRecord, index);
      } else {
        record = this[_unlinkedRecords] == null ? null : this[_unlinkedRecords].get(itemTrackBy);
        if (!(record == null)) {
          if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          this[_reinsertAfter](record, previousRecord, index);
        } else {
          record = this[_addAfter](new src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord.new(item, itemTrackBy), previousRecord, index);
        }
      }
      return record;
    }
    [_verifyReinsertion](record, item, itemTrackBy, index) {
      let reinsertRecord = this[_unlinkedRecords] == null ? null : this[_unlinkedRecords].get(itemTrackBy);
      if (!(reinsertRecord == null)) {
        record = this[_reinsertAfter](reinsertRecord, record[_prev], index);
      } else if (record.currentIndex != index) {
        record.currentIndex = index;
        this[_addToMoves](record, index);
      }
      return record;
    }
    [_truncate](record) {
      while (!(record == null)) {
        let nextRecord = record[_next];
        this[_addToRemovals](this[_unlink](record));
        record = nextRecord;
      }
      if (!(this[_unlinkedRecords] == null)) {
        this[_unlinkedRecords].clear();
      }
      if (!(this[_additionsTail] == null)) {
        this[_additionsTail][_nextAdded] = null;
      }
      if (!(this[_movesTail] == null)) {
        this[_movesTail][_nextMoved] = null;
      }
      if (!(this[_itTail] == null)) {
        this[_itTail][_next] = null;
      }
      if (!(this[_removalsTail] == null)) {
        this[_removalsTail][_nextRemoved] = null;
      }
      if (!(this[_identityChangesTail] == null)) {
        this[_identityChangesTail][_nextIdentityChange] = null;
      }
    }
    [_reinsertAfter](record, prevRecord, index) {
      if (!(this[_unlinkedRecords] == null)) {
        this[_unlinkedRecords].remove(record);
      }
      let prev = record[_prevRemoved];
      let next = record[_nextRemoved];
      if (prev == null) {
        this[_removalsHead] = next;
      } else {
        prev[_nextRemoved] = next;
      }
      if (next == null) {
        this[_removalsTail] = prev;
      } else {
        next[_prevRemoved] = prev;
      }
      this[_insertAfter](record, prevRecord, index);
      this[_addToMoves](record, index);
      return record;
    }
    [_moveAfter](record, prevRecord, index) {
      this[_unlink](record);
      this[_insertAfter](record, prevRecord, index);
      this[_addToMoves](record, index);
      return record;
    }
    [_addAfter](record, prevRecord, index) {
      this[_insertAfter](record, prevRecord, index);
      if (this[_additionsTail] == null) {
        this[_additionsTail] = this[_additionsHead] = record;
      } else {
        this[_additionsTail] = this[_additionsTail][_nextAdded] = record;
      }
      return record;
    }
    [_insertAfter](record, prevRecord, index) {
      let next = prevRecord == null ? this[_itHead] : prevRecord[_next];
      record[_next] = next;
      record[_prev] = prevRecord;
      if (next == null) {
        this[_itTail] = record;
      } else {
        next[_prev] = record;
      }
      if (prevRecord == null) {
        this[_itHead] = record;
      } else {
        prevRecord[_next] = record;
      }
      let t = this[_linkedRecords];
      t == null ? this[_linkedRecords] = new src__core__change_detection__differs__default_iterable_differ._DuplicateMap.new() : t;
      this[_linkedRecords].put(record);
      record.currentIndex = index;
      return record;
    }
    [_remove](record) {
      return this[_addToRemovals](this[_unlink](record));
    }
    [_unlink](record) {
      let t = this[_linkedRecords];
      t == null ? null : t.remove(record);
      let prev = record[_prev];
      let next = record[_next];
      if (prev == null) {
        this[_itHead] = next;
      } else {
        prev[_next] = next;
      }
      if (next == null) {
        this[_itTail] = prev;
      } else {
        next[_prev] = prev;
      }
      return record;
    }
    [_addToMoves](record, toIndex) {
      if (record.previousIndex == toIndex) {
        return record;
      }
      if (this[_movesTail] == null) {
        this[_movesTail] = this[_movesHead] = record;
      } else {
        this[_movesTail] = this[_movesTail][_nextMoved] = record;
      }
      return record;
    }
    [_addToRemovals](record) {
      let t = this[_unlinkedRecords];
      t == null ? this[_unlinkedRecords] = new src__core__change_detection__differs__default_iterable_differ._DuplicateMap.new() : t;
      this[_unlinkedRecords].put(record);
      record.currentIndex = null;
      record[_nextRemoved] = null;
      if (this[_removalsTail] == null) {
        this[_removalsTail] = this[_removalsHead] = record;
        record[_prevRemoved] = null;
      } else {
        record[_prevRemoved] = this[_removalsTail];
        this[_removalsTail] = this[_removalsTail][_nextRemoved] = record;
      }
      return record;
    }
    [_addIdentityChange](record, item) {
      record.item = item;
      if (this[_identityChangesTail] == null) {
        this[_identityChangesTail] = this[_identityChangesHead] = record;
      } else {
        this[_identityChangesTail] = this[_identityChangesTail][_nextIdentityChange] = record;
      }
      return record;
    }
    toString() {
      if (dart.test(src__runtime__optimizations.isDevMode)) {
        let list = [];
        for (let record = this[_itHead]; !(record == null); record = record[_next]) {
          list[$add](record);
        }
        let previous = [];
        for (let record = this[_previousItHead]; !(record == null); record = record[_nextPrevious]) {
          previous[$add](record);
        }
        let additions = [];
        this.forEachAddedItem(dart.fn(record => additions[$add](record), CollectionChangeRecordTovoid()));
        let moves = [];
        for (let record = this[_movesHead]; !(record == null); record = record[_nextMoved]) {
          moves[$add](record);
        }
        let removals = [];
        this.forEachRemovedItem(dart.fn(record => removals[$add](record), CollectionChangeRecordTovoid()));
        let identityChanges = [];
        this.forEachIdentityChange(dart.fn(record => identityChanges[$add](record), CollectionChangeRecordTovoid()));
        return "collection: " + dart.notNull(list[$join](", ")) + "\n" + "previous: " + dart.notNull(previous[$join](", ")) + "\n" + "additions: " + dart.notNull(additions[$join](", ")) + "\n" + "moves: " + dart.notNull(moves[$join](", ")) + "\n" + "removals: " + dart.notNull(removals[$join](", ")) + "\n" + "identityChanges: " + dart.notNull(identityChanges[$join](", ")) + "\n";
      } else {
        return super.toString();
      }
    }
  };
  (src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.new = function(trackByFn) {
    if (trackByFn === void 0) trackByFn = null;
    this[_length] = null;
    this[_collection] = null;
    this[_linkedRecords] = null;
    this[_unlinkedRecords] = null;
    this[_previousItHead] = null;
    this[_itHead] = null;
    this[_itTail] = null;
    this[_additionsHead] = null;
    this[_additionsTail] = null;
    this[_movesHead] = null;
    this[_movesTail] = null;
    this[_removalsHead] = null;
    this[_removalsTail] = null;
    this[_identityChangesHead] = null;
    this[_identityChangesTail] = null;
    let l = trackByFn;
    this[_trackByFn] = l != null ? l : dart.fn(src__core__change_detection__differs__default_iterable_differ._trackByIdentity, intAnddynamicToObject());
  }).prototype = src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer);
  dart.setMethodSignature(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getMethods(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.__proto__),
    clone: dart.fnType(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, [dart.fnType(core.Object, [core.int, dart.dynamic])]),
    forEachOperation: dart.fnType(dart.void, [dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int, core.int])]),
    forEachAddedItem: dart.fnType(dart.void, [dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])]),
    forEachRemovedItem: dart.fnType(dart.void, [dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])]),
    forEachIdentityChange: dart.fnType(dart.void, [dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])]),
    diff: dart.fnType(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, [core.Iterable]),
    onDestroy: dart.fnType(dart.void, []),
    check: dart.fnType(core.bool, [core.Iterable]),
    [_reset]: dart.fnType(dart.void, []),
    [_mismatch]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, dart.dynamic, dart.dynamic, core.int]),
    [_verifyReinsertion]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, dart.dynamic, dart.dynamic, core.int]),
    [_truncate]: dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    [_reinsertAfter]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_moveAfter]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_addAfter]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_insertAfter]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_remove]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    [_unlink]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    [_addToMoves]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_addToRemovals]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    [_addIdentityChange]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, dart.dynamic])
  }));
  dart.setGetterSignature(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getGetters(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.__proto__),
    collection: core.Iterable,
    length: core.int,
    isDirty: core.bool
  }));
  dart.setFieldSignature(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.__proto__),
    [_trackByFn]: dart.finalFieldType(intAnddynamicToObject()),
    [_length]: dart.fieldType(core.int),
    [_collection]: dart.fieldType(core.Iterable),
    [_linkedRecords]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ._DuplicateMap),
    [_unlinkedRecords]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ._DuplicateMap),
    [_previousItHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_itHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_itTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_additionsHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_additionsTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_movesHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_movesTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_removalsHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_removalsTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_identityChangesHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_identityChangesTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, ['toString']);
  const _prevDup = Symbol('_prevDup');
  const _nextDup = Symbol('_nextDup');
  src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord = class CollectionChangeRecord extends core.Object {
    get item() {
      return this[item$];
    }
    set item(value) {
      this[item$] = value;
    }
    get trackById() {
      return this[trackById$];
    }
    set trackById(value) {
      this[trackById$] = value;
    }
    get currentIndex() {
      return this[currentIndex];
    }
    set currentIndex(value) {
      this[currentIndex] = value;
    }
    get previousIndex() {
      return this[previousIndex];
    }
    set previousIndex(value) {
      this[previousIndex] = value;
    }
    toString() {
      return this.previousIndex == this.currentIndex ? dart.toString(this.item) : dart.str(this.item) + "[" + dart.str(this.previousIndex) + "->" + dart.str(this.currentIndex) + "]";
    }
  };
  (src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord.new = function(item, trackById) {
    this[currentIndex] = null;
    this[previousIndex] = null;
    this[_nextPrevious] = null;
    this[_prev] = null;
    this[_next] = null;
    this[_prevDup] = null;
    this[_nextDup] = null;
    this[_prevRemoved] = null;
    this[_nextRemoved] = null;
    this[_nextAdded] = null;
    this[_nextMoved] = null;
    this[_nextIdentityChange] = null;
    this[item$] = item;
    this[trackById$] = trackById;
  }).prototype = src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord);
  const item$ = Symbol("CollectionChangeRecord.item");
  const trackById$ = Symbol("CollectionChangeRecord.trackById");
  const currentIndex = Symbol("CollectionChangeRecord.currentIndex");
  const previousIndex = Symbol("CollectionChangeRecord.previousIndex");
  dart.setFieldSignature(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord.__proto__),
    item: dart.fieldType(dart.dynamic),
    trackById: dart.fieldType(dart.dynamic),
    currentIndex: dart.fieldType(core.int),
    previousIndex: dart.fieldType(core.int),
    [_nextPrevious]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_prev]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_next]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_prevDup]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextDup]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_prevRemoved]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextRemoved]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextAdded]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextMoved]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextIdentityChange]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, ['toString']);
  const _head = Symbol('_head');
  const _tail = Symbol('_tail');
  src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList = class _DuplicateItemRecordList extends core.Object {
    add(record) {
      if (this[_head] == null) {
        this[_head] = this[_tail] = record;
        record[_nextDup] = null;
        record[_prevDup] = null;
      } else {
        this[_tail][_nextDup] = record;
        record[_prevDup] = this[_tail];
        record[_nextDup] = null;
        this[_tail] = record;
      }
    }
    get(trackById, afterIndex) {
      let record = null;
      for (record = this[_head]; !(record == null); record = record[_nextDup]) {
        if ((afterIndex == null || dart.notNull(afterIndex) < dart.notNull(record.currentIndex)) && core.identical(record.trackById, trackById)) {
          return record;
        }
      }
      return null;
    }
    remove(record) {
      let prev = record[_prevDup];
      let next = record[_nextDup];
      if (prev == null) {
        this[_head] = next;
      } else {
        prev[_nextDup] = next;
      }
      if (next == null) {
        this[_tail] = prev;
      } else {
        next[_prevDup] = prev;
      }
      return this[_head] == null;
    }
  };
  (src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.new = function() {
    this[_head] = null;
    this[_tail] = null;
  }).prototype = src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList);
  dart.setMethodSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList, () => ({
    __proto__: dart.getMethods(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.__proto__),
    add: dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    get: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [dart.dynamic, core.int]),
    remove: dart.fnType(core.bool, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])
  }));
  dart.setFieldSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.__proto__),
    [_head]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_tail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord)
  }));
  const _map = Symbol('_map');
  src__core__change_detection__differs__default_iterable_differ._DuplicateMap = class _DuplicateMap extends core.Object {
    put(record) {
      let key = record.trackById;
      let duplicates = this[_map][$_get](key);
      if (duplicates == null) {
        duplicates = new src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.new();
        this[_map][$_set](key, duplicates);
      }
      duplicates.add(record);
    }
    get(trackById, afterIndex) {
      if (afterIndex === void 0) afterIndex = null;
      let recordList = this[_map][$_get](trackById);
      return recordList == null ? null : recordList.get(trackById, afterIndex);
    }
    remove(record) {
      let key = record.trackById;
      let recordList = this[_map][$_get](key);
      if (dart.test(recordList.remove(record))) {
        dart.test(this[_map][$containsKey](key)) && (this[_map][$remove](key) != null || true);
      }
      return record;
    }
    get isEmpty() {
      return this[_map][$length] === 0;
    }
    clear() {
      this[_map][$clear]();
    }
    toString() {
      return "_DuplicateMap(" + dart.str(this[_map]) + ")";
    }
  };
  (src__core__change_detection__differs__default_iterable_differ._DuplicateMap.new = function() {
    this[_map] = new (IdentityMapOfdynamic$_DuplicateItemRecordList()).new();
  }).prototype = src__core__change_detection__differs__default_iterable_differ._DuplicateMap.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_iterable_differ._DuplicateMap);
  dart.setMethodSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getMethods(src__core__change_detection__differs__default_iterable_differ._DuplicateMap.__proto__),
    put: dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    get: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [dart.dynamic], [core.int]),
    remove: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    clear: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getGetters(src__core__change_detection__differs__default_iterable_differ._DuplicateMap.__proto__),
    isEmpty: core.bool
  }));
  dart.setFieldSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_iterable_differ._DuplicateMap.__proto__),
    [_map]: dart.finalFieldType(MapOfdynamic$_DuplicateItemRecordList())
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_iterable_differ._DuplicateMap, ['toString']);
  src__core__change_detection__differs__default_iterable_differ._getPreviousIndex = function(item, addRemoveOffset, moveOffsets) {
    let previousIndex = item.previousIndex;
    if (previousIndex == null) return previousIndex;
    let moveOffset = 0;
    if (moveOffsets != null && dart.notNull(previousIndex) < dart.notNull(moveOffsets[$length])) {
      moveOffset = moveOffsets[$_get](previousIndex);
    }
    return dart.notNull(previousIndex) + dart.notNull(addRemoveOffset) + dart.notNull(moveOffset);
  };
  const _records = Symbol('_records');
  const _mapHead = Symbol('_mapHead');
  const _appendAfter = Symbol('_appendAfter');
  const _previousMapHead = Symbol('_previousMapHead');
  const _changesHead = Symbol('_changesHead');
  const _changesTail = Symbol('_changesTail');
  const _additionsHead$ = Symbol('_additionsHead');
  const _additionsTail$ = Symbol('_additionsTail');
  const _removalsHead$ = Symbol('_removalsHead');
  const _nextChanged = Symbol('_nextChanged');
  const _nextAdded$ = Symbol('_nextAdded');
  const _next$ = Symbol('_next');
  const _reset$ = Symbol('_reset');
  const _addToAdditions = Symbol('_addToAdditions');
  const _prev$ = Symbol('_prev');
  const _maybeAddToChanges = Symbol('_maybeAddToChanges');
  const _getOrCreateRecord = Symbol('_getOrCreateRecord');
  const _insertBeforeOrAppend = Symbol('_insertBeforeOrAppend');
  const _addToChanges = Symbol('_addToChanges');
  const _nextPrevious$ = Symbol('_nextPrevious');
  src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer = class DefaultKeyValueDiffer extends core.Object {
    get isDirty() {
      return !(this[_additionsHead$] == null) || !(this[_changesHead] == null) || !(this[_removalsHead$] == null);
    }
    forEachChangedItem(fn) {
      for (let record = this[_changesHead]; !(record == null); record = record[_nextChanged]) {
        fn(record);
      }
    }
    forEachAddedItem(fn) {
      for (let record = this[_additionsHead$]; !(record == null); record = record[_nextAdded$]) {
        fn(record);
      }
    }
    forEachRemovedItem(fn) {
      for (let record = this[_removalsHead$]; !(record == null); record = record[_next$]) {
        fn(record);
      }
    }
    diff(map) {
      let t = map;
      t == null ? map = new _js_helper.LinkedMap.new() : t;
      if (!core.Map.is(map)) {
        dart.throw(new core.StateError.new("Error trying to diff '" + dart.str(map) + "'"));
      }
      if (dart.test(this.check(map))) {
        return this;
      } else {
        return null;
      }
    }
    check(map) {
      this[_reset$]();
      if (this[_mapHead] == null) {
        map[$forEach](dart.fn((key, value) => {
          let record = new src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.new(key);
          record.currentValue = value;
          this[_records][$_set](key, record);
          this[_addToAdditions](record);
          if (this[_appendAfter] == null) {
            this[_mapHead] = record;
          } else {
            record[_prev$] = this[_appendAfter];
            this[_appendAfter][_next$] = record;
          }
          this[_appendAfter] = record;
        }, dynamicAnddynamicToNull()));
        return this[_mapHead] != null;
      }
      let insertBefore = this[_mapHead];
      map[$forEach](dart.fn((key, value) => {
        if (dart.equals((() => {
          let t = insertBefore;
          return t == null ? null : t.key;
        })(), key)) {
          this[_maybeAddToChanges](insertBefore, value);
          this[_appendAfter] = insertBefore;
          insertBefore = insertBefore[_next$];
        } else {
          let record = this[_getOrCreateRecord](key, value);
          insertBefore = this[_insertBeforeOrAppend](insertBefore, record);
        }
      }, dynamicAnddynamicToNull()));
      if (insertBefore != null) {
        this[_removalsHead$] = insertBefore;
        for (let record = insertBefore; record != null; record = record[_next$]) {
          this[_records][$remove](record.key);
          record.previousValue = record.currentValue;
          record.currentValue = null;
        }
        if (dart.equals(this[_removalsHead$], this[_mapHead])) {
          this[_mapHead] = null;
        } else {
          this[_removalsHead$][_prev$][_next$] = null;
        }
      }
      return this.isDirty;
    }
    [_insertBeforeOrAppend](before, record) {
      if (before != null) {
        record[_next$] = before;
        record[_prev$] = before[_prev$];
        let l = before[_prev$];
        l == null ? null : l[_next$] = record;
        before[_prev$] = record;
        if (dart.equals(before, this[_mapHead])) {
          this[_mapHead] = record;
        }
        this[_appendAfter] = before;
        return before;
      }
      if (this[_appendAfter] != null) {
        this[_appendAfter][_next$] = record;
        record[_prev$] = this[_appendAfter];
      } else {
        this[_mapHead] = record;
      }
      this[_appendAfter] = record;
      return null;
    }
    [_getOrCreateRecord](key, value) {
      if (dart.test(this[_records][$containsKey](key))) {
        let record = this[_records][$_get](key);
        this[_maybeAddToChanges](record, value);
        let l = record[_prev$];
        l == null ? null : l[_next$] = record[_next$];
        let l$ = record[_next$];
        l$ == null ? null : l$[_prev$] = record[_prev$];
        record[_prev$] = null;
        record[_next$] = null;
        return record;
      }
      let record = new src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.new(key);
      record.currentValue = value;
      this[_records][$_set](key, record);
      this[_addToAdditions](record);
      return record;
    }
    [_maybeAddToChanges](record, value) {
      if (!core.identical(value, record.currentValue)) {
        record.previousValue = record.currentValue;
        record.currentValue = value;
        this[_addToChanges](record);
      }
    }
    [_reset$]() {
      this[_appendAfter] = null;
      if (dart.test(this.isDirty)) {
        this[_previousMapHead] = this[_mapHead];
        for (let record = this[_previousMapHead]; record != null; record = record[_next$]) {
          record[_nextPrevious$] = record[_next$];
        }
        for (let record = this[_changesHead]; record != null; record = record[_nextChanged]) {
          record.previousValue = record.currentValue;
        }
        for (let record = this[_additionsHead$]; record != null; record = record[_nextAdded$]) {
          record.previousValue = record.currentValue;
        }
        this[_changesHead] = this[_changesTail] = null;
        this[_additionsHead$] = this[_additionsTail$] = null;
        this[_removalsHead$] = null;
      }
    }
    [_addToAdditions](record) {
      if (this[_additionsHead$] == null) {
        this[_additionsHead$] = this[_additionsTail$] = record;
      } else {
        this[_additionsTail$][_nextAdded$] = record;
        this[_additionsTail$] = record;
      }
    }
    [_addToChanges](record) {
      if (this[_changesHead] == null) {
        this[_changesHead] = this[_changesTail] = record;
      } else {
        this[_changesTail][_nextChanged] = record;
        this[_changesTail] = record;
      }
    }
    toString() {
      let items = [];
      let previous = [];
      let changes = [];
      let additions = [];
      let removals = [];
      for (let record = this[_mapHead]; !(record == null); record = record[_next$]) {
        items[$add](record);
      }
      for (let record = this[_previousMapHead]; !(record == null); record = record[_nextPrevious$]) {
        previous[$add](record);
      }
      for (let record = this[_changesHead]; !(record == null); record = record[_nextChanged]) {
        changes[$add](record);
      }
      for (let record = this[_additionsHead$]; !(record == null); record = record[_nextAdded$]) {
        additions[$add](record);
      }
      for (let record = this[_removalsHead$]; !(record == null); record = record[_next$]) {
        removals[$add](record);
      }
      return "map: " + dart.notNull(items[$join](", ")) + "\n" + "previous: " + dart.notNull(previous[$join](", ")) + "\n" + "additions: " + dart.notNull(additions[$join](", ")) + "\n" + "changes: " + dart.notNull(changes[$join](", ")) + "\n" + "removals: " + dart.notNull(removals[$join](", ")) + "\n";
    }
  };
  (src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.new = function() {
    this[_records] = new (LinkedMapOfdynamic$KeyValueChangeRecord()).new();
    this[_mapHead] = null;
    this[_appendAfter] = null;
    this[_previousMapHead] = null;
    this[_changesHead] = null;
    this[_changesTail] = null;
    this[_additionsHead$] = null;
    this[_additionsTail$] = null;
    this[_removalsHead$] = null;
  }).prototype = src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer);
  dart.setMethodSignature(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getMethods(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    forEachChangedItem: dart.fnType(dart.void, [dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord])]),
    forEachAddedItem: dart.fnType(dart.void, [dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord])]),
    forEachRemovedItem: dart.fnType(dart.void, [dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord])]),
    diff: dart.fnType(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, [core.Map]),
    check: dart.fnType(core.bool, [core.Map]),
    [_insertBeforeOrAppend]: dart.fnType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord]),
    [_getOrCreateRecord]: dart.fnType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, [dart.dynamic, dart.dynamic]),
    [_maybeAddToChanges]: dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, dart.dynamic]),
    [_reset$]: dart.fnType(dart.void, []),
    [_addToAdditions]: dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord]),
    [_addToChanges]: dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord])
  }));
  dart.setGetterSignature(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getGetters(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    isDirty: core.bool
  }));
  dart.setFieldSignature(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    [_records]: dart.finalFieldType(MapOfdynamic$KeyValueChangeRecord()),
    [_mapHead]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_appendAfter]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_previousMapHead]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_changesHead]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_changesTail]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_additionsHead$]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_additionsTail$]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_removalsHead$]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, ['toString']);
  src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord = class KeyValueChangeRecord extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      this[key$] = value;
    }
    get previousValue() {
      return this[previousValue];
    }
    set previousValue(value) {
      this[previousValue] = value;
    }
    get currentValue() {
      return this[currentValue];
    }
    set currentValue(value) {
      this[currentValue] = value;
    }
    toString() {
      return core.identical(this.previousValue, this.currentValue) ? dart.str(this.key) : dart.str(this.key) + "[" + dart.str(this.previousValue) + "->" + dart.str(this.currentValue) + "]";
    }
  };
  (src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.new = function(key) {
    this[previousValue] = null;
    this[currentValue] = null;
    this[_nextPrevious$] = null;
    this[_next$] = null;
    this[_prev$] = null;
    this[_nextAdded$] = null;
    this[_nextChanged] = null;
    this[key$] = key;
  }).prototype = src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord);
  const key$ = Symbol("KeyValueChangeRecord.key");
  const previousValue = Symbol("KeyValueChangeRecord.previousValue");
  const currentValue = Symbol("KeyValueChangeRecord.currentValue");
  dart.setFieldSignature(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.__proto__),
    key: dart.fieldType(dart.dynamic),
    previousValue: dart.fieldType(dart.dynamic),
    currentValue: dart.fieldType(dart.dynamic),
    [_nextPrevious$]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_next$]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_prev$]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_nextAdded$]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_nextChanged]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, ['toString']);
  src__core__change_detection__pipe_transform.PipeTransform = class PipeTransform extends core.Object {};
  (src__core__change_detection__pipe_transform.PipeTransform.new = function() {
  }).prototype = src__core__change_detection__pipe_transform.PipeTransform.prototype;
  dart.addTypeTests(src__core__change_detection__pipe_transform.PipeTransform);
  const _is_Typed_default = Symbol('_is_Typed_default');
  src__core__metadata__typed.Typed$ = dart.generic(T => {
    class Typed extends core.Object {
      get on() {
        return this[on$];
      }
      set on(value) {
        super.on = value;
      }
      get typeArguments() {
        return this[typeArguments$];
      }
      set typeArguments(value) {
        super.typeArguments = value;
      }
    }
    (Typed.new = function(opts) {
      let on = opts && 'on' in opts ? opts.on : null;
      this[on$] = on;
      this[typeArguments$] = null;
    }).prototype = Typed.prototype;
    (Typed.of = function(typeArguments, opts) {
      let on = opts && 'on' in opts ? opts.on : null;
      this[typeArguments$] = typeArguments;
      this[on$] = on;
    }).prototype = Typed.prototype;
    dart.addTypeTests(Typed);
    Typed.prototype[_is_Typed_default] = true;
    const on$ = Symbol("Typed.on");
    const typeArguments$ = Symbol("Typed.typeArguments");
    dart.setFieldSignature(Typed, () => ({
      __proto__: dart.getFields(Typed.__proto__),
      on: dart.finalFieldType(core.String),
      typeArguments: dart.finalFieldType(ListOfObject())
    }));
    return Typed;
  });
  src__core__metadata__typed.Typed = src__core__metadata__typed.Typed$();
  dart.addTypeTests(src__core__metadata__typed.Typed, _is_Typed_default);
  src__core__metadata__view.ViewEncapsulation = class ViewEncapsulation extends core.Object {
    toString() {
      return {
        0: "ViewEncapsulation.Emulated",
        1: "ViewEncapsulation.None"
      }[this.index];
    }
  };
  (src__core__metadata__view.ViewEncapsulation.new = function(x) {
    this.index = x;
  }).prototype = src__core__metadata__view.ViewEncapsulation.prototype;
  dart.addTypeTests(src__core__metadata__view.ViewEncapsulation);
  dart.setFieldSignature(src__core__metadata__view.ViewEncapsulation, () => ({
    __proto__: dart.getFields(src__core__metadata__view.ViewEncapsulation.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__metadata__view.ViewEncapsulation, ['toString']);
  src__core__metadata__view.ViewEncapsulation.Emulated = dart.const(new src__core__metadata__view.ViewEncapsulation.new(0));
  src__core__metadata__view.ViewEncapsulation.None = dart.const(new src__core__metadata__view.ViewEncapsulation.new(1));
  src__core__metadata__view.ViewEncapsulation.values = dart.constList([src__core__metadata__view.ViewEncapsulation.Emulated, src__core__metadata__view.ViewEncapsulation.None], src__core__metadata__view.ViewEncapsulation);
  src__core__metadata__lifecycle_hooks.LifecycleHooks = class LifecycleHooks extends core.Object {
    toString() {
      return {
        0: "LifecycleHooks.onInit",
        1: "LifecycleHooks.onDestroy",
        2: "LifecycleHooks.doCheck",
        3: "LifecycleHooks.onChanges",
        4: "LifecycleHooks.afterChanges",
        5: "LifecycleHooks.afterContentInit",
        6: "LifecycleHooks.afterContentChecked",
        7: "LifecycleHooks.afterViewInit",
        8: "LifecycleHooks.afterViewChecked"
      }[this.index];
    }
  };
  (src__core__metadata__lifecycle_hooks.LifecycleHooks.new = function(x) {
    this.index = x;
  }).prototype = src__core__metadata__lifecycle_hooks.LifecycleHooks.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.LifecycleHooks);
  dart.setFieldSignature(src__core__metadata__lifecycle_hooks.LifecycleHooks, () => ({
    __proto__: dart.getFields(src__core__metadata__lifecycle_hooks.LifecycleHooks.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__metadata__lifecycle_hooks.LifecycleHooks, ['toString']);
  src__core__metadata__lifecycle_hooks.LifecycleHooks.onInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(0));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.onDestroy = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(1));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.doCheck = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(2));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.onChanges = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(3));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterChanges = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(4));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterContentInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(5));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterContentChecked = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(6));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterViewInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(7));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterViewChecked = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(8));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.values = dart.constList([src__core__metadata__lifecycle_hooks.LifecycleHooks.onInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.onDestroy, src__core__metadata__lifecycle_hooks.LifecycleHooks.doCheck, src__core__metadata__lifecycle_hooks.LifecycleHooks.onChanges, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterChanges, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterContentInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterContentChecked, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterViewInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterViewChecked], src__core__metadata__lifecycle_hooks.LifecycleHooks);
  src__core__metadata__lifecycle_hooks.OnChanges = class OnChanges extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnChanges.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnChanges.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnChanges);
  src__core__metadata__lifecycle_hooks.AfterChanges = class AfterChanges extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterChanges.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterChanges.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterChanges);
  src__core__metadata__lifecycle_hooks.OnInit = class OnInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnInit);
  src__core__metadata__lifecycle_hooks.OnDestroy = class OnDestroy extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnDestroy.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnDestroy.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnDestroy);
  src__core__metadata__lifecycle_hooks.DoCheck = class DoCheck extends core.Object {};
  (src__core__metadata__lifecycle_hooks.DoCheck.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.DoCheck.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.DoCheck);
  src__core__metadata__lifecycle_hooks.AfterContentInit = class AfterContentInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterContentInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterContentInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterContentInit);
  src__core__metadata__lifecycle_hooks.AfterContentChecked = class AfterContentChecked extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterContentChecked.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterContentChecked.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterContentChecked);
  src__core__metadata__lifecycle_hooks.AfterViewInit = class AfterViewInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterViewInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterViewInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterViewInit);
  src__core__metadata__lifecycle_hooks.AfterViewChecked = class AfterViewChecked extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterViewChecked.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterViewChecked.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterViewChecked);
  src__core__metadata__visibility.Visibility = class Visibility extends core.Object {
    toString() {
      return {
        0: "Visibility.local",
        1: "Visibility.all"
      }[this.index];
    }
  };
  (src__core__metadata__visibility.Visibility.new = function(x) {
    this.index = x;
  }).prototype = src__core__metadata__visibility.Visibility.prototype;
  dart.addTypeTests(src__core__metadata__visibility.Visibility);
  dart.setFieldSignature(src__core__metadata__visibility.Visibility, () => ({
    __proto__: dart.getFields(src__core__metadata__visibility.Visibility.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__metadata__visibility.Visibility, ['toString']);
  src__core__metadata__visibility.Visibility.local = dart.const(new src__core__metadata__visibility.Visibility.new(0));
  src__core__metadata__visibility.Visibility.all = dart.const(new src__core__metadata__visibility.Visibility.new(1));
  src__core__metadata__visibility.Visibility.values = dart.constList([src__core__metadata__visibility.Visibility.local, src__core__metadata__visibility.Visibility.all], src__core__metadata__visibility.Visibility);
  src__core__metadata.Directive = class Directive extends core.Object {
    get selector() {
      return this[selector$];
    }
    set selector(value) {
      super.selector = value;
    }
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get exportAs() {
      return this[exportAs$];
    }
    set exportAs(value) {
      super.exportAs = value;
    }
    get visibility() {
      return this[visibility$];
    }
    set visibility(value) {
      super.visibility = value;
    }
  };
  (src__core__metadata.Directive.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : src__core__metadata__visibility.Visibility.local;
    this[selector$] = selector;
    this[providers$] = providers;
    this[exportAs$] = exportAs;
    this[visibility$] = visibility;
  }).prototype = src__core__metadata.Directive.prototype;
  dart.addTypeTests(src__core__metadata.Directive);
  const selector$ = Symbol("Directive.selector");
  const providers$ = Symbol("Directive.providers");
  const exportAs$ = Symbol("Directive.exportAs");
  const visibility$ = Symbol("Directive.visibility");
  dart.setFieldSignature(src__core__metadata.Directive, () => ({
    __proto__: dart.getFields(src__core__metadata.Directive.__proto__),
    selector: dart.finalFieldType(core.String),
    providers: dart.finalFieldType(ListOfObject()),
    exportAs: dart.finalFieldType(core.String),
    visibility: dart.finalFieldType(src__core__metadata__visibility.Visibility)
  }));
  src__core__metadata.Component = class Component extends src__core__metadata.Directive {
    get changeDetection() {
      return this[changeDetection$];
    }
    set changeDetection(value) {
      super.changeDetection = value;
    }
    get viewProviders() {
      return this[viewProviders$];
    }
    set viewProviders(value) {
      super.viewProviders = value;
    }
    get exports() {
      return this[exports$];
    }
    set exports(value) {
      super.exports = value;
    }
    get templateUrl() {
      return this[templateUrl$];
    }
    set templateUrl(value) {
      super.templateUrl = value;
    }
    get template() {
      return this[template$];
    }
    set template(value) {
      super.template = value;
    }
    get preserveWhitespace() {
      return this[preserveWhitespace$];
    }
    set preserveWhitespace(value) {
      super.preserveWhitespace = value;
    }
    get styleUrls() {
      return this[styleUrls$];
    }
    set styleUrls(value) {
      super.styleUrls = value;
    }
    get styles() {
      return this[styles$];
    }
    set styles(value) {
      super.styles = value;
    }
    get directives() {
      return this[directives$];
    }
    set directives(value) {
      super.directives = value;
    }
    get directiveTypes() {
      return this[directiveTypes$];
    }
    set directiveTypes(value) {
      super.directiveTypes = value;
    }
    get pipes() {
      return this[pipes$];
    }
    set pipes(value) {
      super.pipes = value;
    }
    get encapsulation() {
      return this[encapsulation$];
    }
    set encapsulation(value) {
      super.encapsulation = value;
    }
  };
  (src__core__metadata.Component.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : src__core__metadata__visibility.Visibility.local;
    let viewProviders = opts && 'viewProviders' in opts ? opts.viewProviders : null;
    let exports = opts && 'exports' in opts ? opts.exports : null;
    let changeDetection = opts && 'changeDetection' in opts ? opts.changeDetection : src__core__change_detection__constants.ChangeDetectionStrategy.Default;
    let templateUrl = opts && 'templateUrl' in opts ? opts.templateUrl : null;
    let template = opts && 'template' in opts ? opts.template : null;
    let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : false;
    let styleUrls = opts && 'styleUrls' in opts ? opts.styleUrls : null;
    let styles = opts && 'styles' in opts ? opts.styles : null;
    let directives = opts && 'directives' in opts ? opts.directives : null;
    let directiveTypes = opts && 'directiveTypes' in opts ? opts.directiveTypes : null;
    let pipes = opts && 'pipes' in opts ? opts.pipes : null;
    let encapsulation = opts && 'encapsulation' in opts ? opts.encapsulation : null;
    this[viewProviders$] = viewProviders;
    this[exports$] = exports;
    this[changeDetection$] = changeDetection;
    this[templateUrl$] = templateUrl;
    this[template$] = template;
    this[preserveWhitespace$] = preserveWhitespace;
    this[styleUrls$] = styleUrls;
    this[styles$] = styles;
    this[directives$] = directives;
    this[directiveTypes$] = directiveTypes;
    this[pipes$] = pipes;
    this[encapsulation$] = encapsulation;
    src__core__metadata.Component.__proto__.new.call(this, {selector: selector, exportAs: exportAs, providers: providers, visibility: visibility});
  }).prototype = src__core__metadata.Component.prototype;
  dart.addTypeTests(src__core__metadata.Component);
  const changeDetection$ = Symbol("Component.changeDetection");
  const viewProviders$ = Symbol("Component.viewProviders");
  const exports$ = Symbol("Component.exports");
  const templateUrl$ = Symbol("Component.templateUrl");
  const template$ = Symbol("Component.template");
  const preserveWhitespace$ = Symbol("Component.preserveWhitespace");
  const styleUrls$ = Symbol("Component.styleUrls");
  const styles$ = Symbol("Component.styles");
  const directives$ = Symbol("Component.directives");
  const directiveTypes$ = Symbol("Component.directiveTypes");
  const pipes$ = Symbol("Component.pipes");
  const encapsulation$ = Symbol("Component.encapsulation");
  dart.setFieldSignature(src__core__metadata.Component, () => ({
    __proto__: dart.getFields(src__core__metadata.Component.__proto__),
    changeDetection: dart.finalFieldType(core.int),
    viewProviders: dart.finalFieldType(ListOfObject()),
    exports: dart.finalFieldType(ListOfObject()),
    templateUrl: dart.finalFieldType(core.String),
    template: dart.finalFieldType(core.String),
    preserveWhitespace: dart.finalFieldType(core.bool),
    styleUrls: dart.finalFieldType(ListOfString()),
    styles: dart.finalFieldType(ListOfString()),
    directives: dart.finalFieldType(ListOfObject()),
    directiveTypes: dart.finalFieldType(ListOfTyped()),
    pipes: dart.finalFieldType(ListOfObject()),
    encapsulation: dart.finalFieldType(src__core__metadata__view.ViewEncapsulation)
  }));
  src__core__metadata.Pipe = class Pipe extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get pure() {
      return this[pure$];
    }
    set pure(value) {
      super.pure = value;
    }
  };
  (src__core__metadata.Pipe.new = function(name, opts) {
    let pure = opts && 'pure' in opts ? opts.pure : true;
    this[name$] = name;
    this[pure$] = pure;
  }).prototype = src__core__metadata.Pipe.prototype;
  dart.addTypeTests(src__core__metadata.Pipe);
  const name$ = Symbol("Pipe.name");
  const pure$ = Symbol("Pipe.pure");
  dart.setFieldSignature(src__core__metadata.Pipe, () => ({
    __proto__: dart.getFields(src__core__metadata.Pipe.__proto__),
    name: dart.finalFieldType(core.String),
    pure: dart.finalFieldType(core.bool)
  }));
  src__core__metadata.Attribute = class Attribute extends core.Object {
    get attributeName() {
      return this[attributeName$];
    }
    set attributeName(value) {
      super.attributeName = value;
    }
  };
  (src__core__metadata.Attribute.new = function(attributeName) {
    this[attributeName$] = attributeName;
  }).prototype = src__core__metadata.Attribute.prototype;
  dart.addTypeTests(src__core__metadata.Attribute);
  const attributeName$ = Symbol("Attribute.attributeName");
  dart.setFieldSignature(src__core__metadata.Attribute, () => ({
    __proto__: dart.getFields(src__core__metadata.Attribute.__proto__),
    attributeName: dart.finalFieldType(core.String)
  }));
  src__core__metadata._Query = class _Query extends core.Object {
    get selector() {
      return this[selector$0];
    }
    set selector(value) {
      super.selector = value;
    }
    get descendants() {
      return this[descendants$];
    }
    set descendants(value) {
      super.descendants = value;
    }
    get first() {
      return this[first$];
    }
    set first(value) {
      super.first = value;
    }
    get read() {
      return this[read$];
    }
    set read(value) {
      super.read = value;
    }
  };
  (src__core__metadata._Query.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    this[selector$0] = selector;
    this[descendants$] = descendants;
    this[first$] = first;
    this[read$] = read;
  }).prototype = src__core__metadata._Query.prototype;
  dart.addTypeTests(src__core__metadata._Query);
  const selector$0 = Symbol("_Query.selector");
  const descendants$ = Symbol("_Query.descendants");
  const first$ = Symbol("_Query.first");
  const read$ = Symbol("_Query.read");
  dart.setFieldSignature(src__core__metadata._Query, () => ({
    __proto__: dart.getFields(src__core__metadata._Query.__proto__),
    selector: dart.finalFieldType(core.Object),
    descendants: dart.finalFieldType(core.bool),
    first: dart.finalFieldType(core.bool),
    read: dart.finalFieldType(core.Object)
  }));
  src__core__metadata.ContentChildren = class ContentChildren extends src__core__metadata._Query {};
  (src__core__metadata.ContentChildren.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : true;
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata.ContentChildren.__proto__.new.call(this, selector, {descendants: descendants, read: read});
  }).prototype = src__core__metadata.ContentChildren.prototype;
  dart.addTypeTests(src__core__metadata.ContentChildren);
  src__core__metadata.ContentChild = class ContentChild extends src__core__metadata._Query {};
  (src__core__metadata.ContentChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata.ContentChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
  }).prototype = src__core__metadata.ContentChild.prototype;
  dart.addTypeTests(src__core__metadata.ContentChild);
  src__core__metadata._ViewQuery = class _ViewQuery extends src__core__metadata._Query {};
  (src__core__metadata._ViewQuery.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata._ViewQuery.__proto__.new.call(this, selector, {descendants: descendants, first: first, read: read});
  }).prototype = src__core__metadata._ViewQuery.prototype;
  dart.addTypeTests(src__core__metadata._ViewQuery);
  src__core__metadata.ViewChildren = class ViewChildren extends src__core__metadata._ViewQuery {};
  (src__core__metadata.ViewChildren.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata.ViewChildren.__proto__.new.call(this, selector, {descendants: true, read: read});
  }).prototype = src__core__metadata.ViewChildren.prototype;
  dart.addTypeTests(src__core__metadata.ViewChildren);
  src__core__metadata.ViewChild = class ViewChild extends src__core__metadata._ViewQuery {};
  (src__core__metadata.ViewChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata.ViewChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
  }).prototype = src__core__metadata.ViewChild.prototype;
  dart.addTypeTests(src__core__metadata.ViewChild);
  src__core__metadata.Input = class Input extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (src__core__metadata.Input.new = function(bindingPropertyName) {
    if (bindingPropertyName === void 0) bindingPropertyName = null;
    this[bindingPropertyName$] = bindingPropertyName;
  }).prototype = src__core__metadata.Input.prototype;
  dart.addTypeTests(src__core__metadata.Input);
  const bindingPropertyName$ = Symbol("Input.bindingPropertyName");
  dart.setFieldSignature(src__core__metadata.Input, () => ({
    __proto__: dart.getFields(src__core__metadata.Input.__proto__),
    bindingPropertyName: dart.finalFieldType(core.String)
  }));
  src__core__metadata.Output = class Output extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$0];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (src__core__metadata.Output.new = function(bindingPropertyName) {
    if (bindingPropertyName === void 0) bindingPropertyName = null;
    this[bindingPropertyName$0] = bindingPropertyName;
  }).prototype = src__core__metadata.Output.prototype;
  dart.addTypeTests(src__core__metadata.Output);
  const bindingPropertyName$0 = Symbol("Output.bindingPropertyName");
  dart.setFieldSignature(src__core__metadata.Output, () => ({
    __proto__: dart.getFields(src__core__metadata.Output.__proto__),
    bindingPropertyName: dart.finalFieldType(core.String)
  }));
  src__core__metadata.HostBinding = class HostBinding extends core.Object {
    get hostPropertyName() {
      return this[hostPropertyName$];
    }
    set hostPropertyName(value) {
      super.hostPropertyName = value;
    }
  };
  (src__core__metadata.HostBinding.new = function(hostPropertyName) {
    if (hostPropertyName === void 0) hostPropertyName = null;
    this[hostPropertyName$] = hostPropertyName;
  }).prototype = src__core__metadata.HostBinding.prototype;
  dart.addTypeTests(src__core__metadata.HostBinding);
  const hostPropertyName$ = Symbol("HostBinding.hostPropertyName");
  dart.setFieldSignature(src__core__metadata.HostBinding, () => ({
    __proto__: dart.getFields(src__core__metadata.HostBinding.__proto__),
    hostPropertyName: dart.finalFieldType(core.String)
  }));
  src__core__metadata.HostListener = class HostListener extends core.Object {
    get eventName() {
      return this[eventName$];
    }
    set eventName(value) {
      super.eventName = value;
    }
    get args() {
      return this[args$];
    }
    set args(value) {
      super.args = value;
    }
  };
  (src__core__metadata.HostListener.new = function(eventName, args) {
    if (args === void 0) args = null;
    this[eventName$] = eventName;
    this[args$] = args;
  }).prototype = src__core__metadata.HostListener.prototype;
  dart.addTypeTests(src__core__metadata.HostListener);
  const eventName$ = Symbol("HostListener.eventName");
  const args$ = Symbol("HostListener.args");
  dart.setFieldSignature(src__core__metadata.HostListener, () => ({
    __proto__: dart.getFields(src__core__metadata.HostListener.__proto__),
    eventName: dart.finalFieldType(core.String),
    args: dart.finalFieldType(ListOfString())
  }));
  dart.trackLibraries("packages/angular/src/core/change_detection/change_detection.ddc", {
    "package:angular/src/runtime/optimizations.dart": src__runtime__optimizations,
    "package:angular/src/runtime.dart": src__runtime,
    "package:angular/src/di/errors.dart": src__di__errors,
    "package:angular/src/core/di/opaque_token.dart": src__core__di__opaque_token,
    "package:angular/src/di/providers.dart": src__di__providers,
    "package:angular/src/di/module.dart": src__di__module,
    "package:angular/src/core/di/decorators.dart": src__core__di__decorators,
    "package:angular/src/di/reflector.dart": src__di__reflector,
    "package:angular/src/di/injector/runtime.dart": src__di__injector__runtime,
    "package:angular/src/di/injector/map.dart": src__di__injector__map,
    "package:angular/src/di/injector/hierarchical.dart": src__di__injector__hierarchical,
    "package:angular/src/di/injector/empty.dart": src__di__injector__empty,
    "package:angular/src/di/injector/injector.dart": src__di__injector__injector,
    "package:angular/src/core/di/provider.dart": src__core__di__provider,
    "package:angular/src/core/di.dart": src__core__di,
    "package:angular/src/facade/lang.dart": src__facade__lang,
    "package:angular/src/core/change_detection/change_detection_util.dart": src__core__change_detection__change_detection_util,
    "package:angular/src/core/change_detection/change_detector_ref.dart": src__core__change_detection__change_detector_ref,
    "package:angular/src/core/change_detection/constants.dart": src__core__change_detection__constants,
    "package:angular/src/core/change_detection/differs/default_iterable_differ.dart": src__core__change_detection__differs__default_iterable_differ,
    "package:angular/src/core/change_detection/differs/default_keyvalue_differ.dart": src__core__change_detection__differs__default_keyvalue_differ,
    "package:angular/src/core/change_detection/pipe_transform.dart": src__core__change_detection__pipe_transform,
    "package:angular/src/core/change_detection/change_detection.dart": src__core__change_detection__change_detection,
    "package:angular/src/core/metadata/typed.dart": src__core__metadata__typed,
    "package:angular/src/core/metadata/view.dart": src__core__metadata__view,
    "package:angular/src/core/metadata/lifecycle_hooks.dart": src__core__metadata__lifecycle_hooks,
    "package:angular/src/core/metadata/visibility.dart": src__core__metadata__visibility,
    "package:angular/src/core/metadata.dart": src__core__metadata
  }, '{"version":3,"sourceRoot":"","sources":["../../runtime/optimizations.dart","../../di/errors.dart","../di/opaque_token.dart","../../di/providers.dart","../../di/module.dart","../di/decorators.dart","../../di/reflector.dart","../../di/injector/runtime.dart","../../di/injector/injector.dart","../../di/injector/hierarchical.dart","../../di/injector/map.dart","../../di/injector/empty.dart","../../facade/lang.dart","change_detection_util.dart","change_detector_ref.dart","constants.dart","differs/default_iterable_differ.dart","differs/default_keyvalue_differ.dart","pipe_transform.dart","../metadata/typed.dart","../metadata/lifecycle_hooks.dart","../metadata.dart"],"names":[],"mappings":"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","file":"change_detection.ddc.js"}');
  // Exports:
  return {
    src__runtime__optimizations: src__runtime__optimizations,
    src__runtime: src__runtime,
    src__di__errors: src__di__errors,
    src__core__di__opaque_token: src__core__di__opaque_token,
    src__di__providers: src__di__providers,
    src__di__module: src__di__module,
    src__core__di__decorators: src__core__di__decorators,
    src__di__reflector: src__di__reflector,
    src__di__injector__runtime: src__di__injector__runtime,
    src__di__injector__map: src__di__injector__map,
    src__di__injector__hierarchical: src__di__injector__hierarchical,
    src__di__injector__empty: src__di__injector__empty,
    src__di__injector__injector: src__di__injector__injector,
    src__core__di__provider: src__core__di__provider,
    src__core__di: src__core__di,
    src__facade__lang: src__facade__lang,
    src__core__change_detection__change_detection_util: src__core__change_detection__change_detection_util,
    src__core__change_detection__change_detector_ref: src__core__change_detection__change_detector_ref,
    src__core__change_detection__constants: src__core__change_detection__constants,
    src__core__change_detection__differs__default_iterable_differ: src__core__change_detection__differs__default_iterable_differ,
    src__core__change_detection__differs__default_keyvalue_differ: src__core__change_detection__differs__default_keyvalue_differ,
    src__core__change_detection__pipe_transform: src__core__change_detection__pipe_transform,
    src__core__change_detection__change_detection: src__core__change_detection__change_detection,
    src__core__metadata__typed: src__core__metadata__typed,
    src__core__metadata__view: src__core__metadata__view,
    src__core__metadata__lifecycle_hooks: src__core__metadata__lifecycle_hooks,
    src__core__metadata__visibility: src__core__metadata__visibility,
    src__core__metadata: src__core__metadata
  };
});

//# sourceMappingURL=change_detection.ddc.js.map
