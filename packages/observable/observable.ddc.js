define(['dart_sdk', 'packages/quiver/core', 'packages/collection/src/canonicalized_map', 'packages/collection/src/comparators', 'packages/dart_internal/extract_type_arguments'], function(dart_sdk, core, canonicalized_map, comparators, extract_type_arguments) {
  'use strict';
  const core$ = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$0 = core.core;
  const src__wrappers = canonicalized_map.src__wrappers;
  const src__equality = comparators.src__equality;
  const extract_type_arguments$ = extract_type_arguments.extract_type_arguments;
  const _root = Object.create(null);
  const observable = Object.create(_root);
  const src__internal = Object.create(_root);
  const src__records = Object.create(_root);
  const src__observable = Object.create(_root);
  const src__change_notifier = Object.create(_root);
  const src__differs = Object.create(_root);
  const src__observable_list = Object.create(_root);
  const src__to_observable = Object.create(_root);
  const src__observable_map = Object.create(_root);
  const $runtimeType = dartx.runtimeType;
  const $_equals = dartx._equals;
  const $hashCode = dartx.hashCode;
  const $length = dartx.length;
  const $getRange = dartx.getRange;
  const $removeRange = dartx.removeRange;
  const $insertAll = dartx.insertAll;
  const $toString = dartx.toString;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $_get = dartx._get;
  const $reversed = dartx.reversed;
  const $sublist = dartx.sublist;
  const $removeAt = dartx.removeAt;
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  const $insert = dartx.insert;
  const $containsKey = dartx.containsKey;
  const $forEach = dartx.forEach;
  const $cast = dartx.cast;
  const $setAll = dartx.setAll;
  const $setRange = dartx.setRange;
  const $isNotEmpty = dartx.isNotEmpty;
  const $replaceRange = dartx.replaceRange;
  const $keys = dartx.keys;
  const $values = dartx.values;
  const $containsValue = dartx.containsValue;
  const $putIfAbsent = dartx.putIfAbsent;
  const $clear = dartx.clear;
  const $entries = dartx.entries;
  const $addEntries = dartx.addEntries;
  const $map = dartx.map;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  const $removeWhere = dartx.removeWhere;
  const $isEmpty = dartx.isEmpty;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core$.bool, [])))();
  let ChangeRecordsOfChangeRecord = () => (ChangeRecordsOfChangeRecord = dart.constFn(src__records.ChangeRecords$(src__records.ChangeRecord)))();
  let ListEqualityOfChangeRecord = () => (ListEqualityOfChangeRecord = dart.constFn(src__equality.ListEquality$(src__records.ChangeRecord)))();
  let ListOfint = () => (ListOfint = dart.constFn(core$.List$(core$.int)))();
  let ListOfListOfint = () => (ListOfListOfint = dart.constFn(core$.List$(ListOfint())))();
  let JSArrayOf_Edit = () => (JSArrayOf_Edit = dart.constFn(_interceptors.JSArray$(src__differs._Edit)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core$.Null, [])))();
  let ObservableOfChangeRecord = () => (ObservableOfChangeRecord = dart.constFn(src__observable.Observable$(src__records.ChangeRecord)))();
  let VoidToObservableMapOfK$V = () => (VoidToObservableMapOfK$V = dart.constFn(dart.gFnType((K, V) => [src__observable_map.ObservableMap$(K, V), []])))();
  let VoidToObservableListOfT = () => (VoidToObservableListOfT = dart.constFn(dart.gFnType(T => [src__observable_list.ObservableList$(T), []])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core$.Null, [dart.dynamic, dart.dynamic])))();
  let PropertyChangeRecordOfNull = () => (PropertyChangeRecordOfNull = dart.constFn(src__records.PropertyChangeRecord$(core$.Null)))();
  src__internal.freezeInDevMode = function(E, list) {
    if (list == null) return dart.constList([], E);
    if (!dart.test(dart.fn(() => {
      list = core$.List$(E).unmodifiable(list);
      return true;
    }, VoidTobool())())) dart.assertFailed();
    return list;
  };
  src__records.ChangeRecord = class ChangeRecord extends core$.Object {};
  (src__records.ChangeRecord.new = function() {
  }).prototype = src__records.ChangeRecord.prototype;
  dart.addTypeTests(src__records.ChangeRecord);
  dart.defineLazy(src__records.ChangeRecord, {
    /*src__records.ChangeRecord.ANY*/get ANY() {
      return dart.const(new (ChangeRecordsOfChangeRecord()).any());
    },
    /*src__records.ChangeRecord.NONE*/get NONE() {
      return dart.const(new (ChangeRecordsOfChangeRecord()).none());
    }
  });
  const _delegate = Symbol('_delegate');
  const _isAny = Symbol('_isAny');
  const _is_ChangeRecords_default = Symbol('_is_ChangeRecords_default');
  src__records.ChangeRecords$ = dart.generic(RecordType => {
    let ListOfRecordType = () => (ListOfRecordType = dart.constFn(core$.List$(RecordType)))();
    class ChangeRecords extends src__wrappers.DelegatingList$(RecordType) {
      get hashCode() {
        return core$0.hash2(this[_delegate], this[_isAny]);
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || ChangeRecordsOfChangeRecord().is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && (dart.test(this[_isAny]) && dart.test(other[_isAny]) || !dart.test(this[_isAny]) && !dart.test(other[_isAny]) && dart.test(src__records.ChangeRecords._listEquals.equals(this[_delegate], other[_delegate])));
      }
      toString() {
        return dart.test(this[_isAny]) ? "ChangeRecords.any" : "ChangeRecords(" + dart.str(this[_delegate]) + ")";
      }
    }
    (ChangeRecords.any = function() {
      ChangeRecords.__.call(this, dart.constList([], RecordType), true);
    }).prototype = ChangeRecords.prototype;
    (ChangeRecords.none = function() {
      ChangeRecords.__.call(this, dart.constList([], RecordType), false);
    }).prototype = ChangeRecords.prototype;
    (ChangeRecords.wrap = function(list) {
      ChangeRecords.__.call(this, list, false);
    }).prototype = ChangeRecords.prototype;
    (ChangeRecords.fromIterable = function(it) {
      ChangeRecords.__.call(this, ListOfRecordType().unmodifiable(it), false);
    }).prototype = ChangeRecords.prototype;
    (ChangeRecords.__ = function(delegate, isAny) {
      this[_delegate] = delegate;
      this[_isAny] = isAny;
      ChangeRecords.__proto__.new.call(this, delegate);
    }).prototype = ChangeRecords.prototype;
    dart.addTypeTests(ChangeRecords);
    ChangeRecords.prototype[_is_ChangeRecords_default] = true;
    dart.setMethodSignature(ChangeRecords, () => ({
      __proto__: dart.getMethods(ChangeRecords.__proto__),
      _equals: dart.fnType(core$.bool, [core$.Object]),
      [$_equals]: dart.fnType(core$.bool, [core$.Object])
    }));
    dart.setGetterSignature(ChangeRecords, () => ({
      __proto__: dart.getGetters(ChangeRecords.__proto__),
      hashCode: core$.int,
      [$hashCode]: core$.int
    }));
    dart.setFieldSignature(ChangeRecords, () => ({
      __proto__: dart.getFields(ChangeRecords.__proto__),
      [_isAny]: dart.finalFieldType(core$.bool),
      [_delegate]: dart.finalFieldType(ListOfRecordType())
    }));
    dart.defineExtensionMethods(ChangeRecords, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ChangeRecords, ['hashCode']);
    return ChangeRecords;
  });
  src__records.ChangeRecords = src__records.ChangeRecords$();
  dart.defineLazy(src__records.ChangeRecords, {
    /*src__records.ChangeRecords._listEquals*/get _listEquals() {
      return dart.const(new (ListEqualityOfChangeRecord()).new());
    }
  });
  dart.addTypeTests(src__records.ChangeRecords, _is_ChangeRecords_default);
  const _assertValidState = Symbol('_assertValidState');
  let const$;
  let const$0;
  const _is_ListChangeRecord_default = Symbol('_is_ListChangeRecord_default');
  src__records.ListChangeRecord$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let UnmodifiableListViewOfE = () => (UnmodifiableListViewOfE = dart.constFn(collection.UnmodifiableListView$(E)))();
    let ListChangeRecordOfE = () => (ListChangeRecordOfE = dart.constFn(src__records.ListChangeRecord$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    class ListChangeRecord extends core$.Object {
      get addedCount() {
        return this[addedCount$];
      }
      set addedCount(value) {
        super.addedCount = value;
      }
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get object() {
        return this[object$];
      }
      set object(value) {
        super.object = value;
      }
      get removed() {
        return this[removed$];
      }
      set removed(value) {
        super.removed = value;
      }
      static new(object, index, opts) {
        let removed = opts && 'removed' in opts ? opts.removed : null;
        let addedCount = opts && 'addedCount' in opts ? opts.addedCount : 0;
        return new (ListChangeRecordOfE()).__(object, index, removed != null ? removed : new (UnmodifiableListViewOfE()).new(JSArrayOfE().of([])), addedCount);
      }
      get added() {
        return this.addedCount === 0 ? dart.constList([], E) : this.object[$getRange](this.index, dart.notNull(this.index) + dart.notNull(this.addedCount));
      }
      apply(list) {
        ListOfE()._check(list);
        list[$removeRange](this.index, dart.notNull(this.index) + dart.notNull(this.removed[$length]));
        list[$insertAll](this.index, this.object[$getRange](this.index, dart.notNull(this.index) + dart.notNull(this.addedCount)));
      }
      [_assertValidState]() {
        if (!dart.test(dart.fn(() => {
          if (this.object == null) {
            dart.throw(new core$.ArgumentError.notNull("object"));
          }
          if (this.index == null) {
            dart.throw(new core$.ArgumentError.notNull("index"));
          }
          if (this.removed == null) {
            dart.throw(new core$.ArgumentError.notNull("removed"));
          }
          if (this.addedCount == null || dart.notNull(this.addedCount) < 0) {
            dart.throw(new core$.ArgumentError.new("Invalid `addedCount`: " + dart.str(this.addedCount)));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed();
      }
      indexChanged(reference) {
        if (dart.notNull(reference) < dart.notNull(this.index)) return false;
        if (this.addedCount != this.removed[$length]) return true;
        return dart.notNull(reference) < dart.notNull(this.index) + dart.notNull(this.addedCount);
      }
      _equals(o) {
        if (o == null) return false;
        if (ListChangeRecordOfE().is(o)) {
          return this.object == o.object && this.index == o.index && this.addedCount == o.addedCount && dart.test((const$ || (const$ = dart.const(new src__equality.ListEquality.new()))).equals(this.removed, o.removed));
        }
        return false;
      }
      get hashCode() {
        return core$0.hash4(this.object, this.index, this.addedCount, (const$0 || (const$0 = dart.const(new src__equality.ListEquality.new()))).hash(this.removed));
      }
      toString() {
        return "" + ("#<" + dart.str(dart.wrapType(src__records.ListChangeRecord)) + " index: " + dart.str(this.index) + ", ") + ("removed: " + dart.str(this.removed) + ", ") + ("addedCount: " + dart.str(this.addedCount) + ">");
      }
    }
    (ListChangeRecord.add = function(object, index, addedCount) {
      this[object$] = object;
      this[index$] = index;
      this[addedCount$] = addedCount;
      this[removed$] = new (UnmodifiableListViewOfE()).new(JSArrayOfE().of([]));
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.remove = function(object, index, removed) {
      this[object$] = object;
      this[index$] = index;
      this[removed$] = src__internal.freezeInDevMode(E, removed);
      this[addedCount$] = 0;
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.replace = function(object, index, removed, addedCount) {
      if (addedCount === void 0) addedCount = null;
      this[object$] = object;
      this[index$] = index;
      this[removed$] = src__internal.freezeInDevMode(E, removed);
      this[addedCount$] = addedCount != null ? addedCount : removed[$length];
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    (ListChangeRecord.__ = function(object, index, removed, addedCount) {
      this[object$] = object;
      this[index$] = index;
      this[removed$] = removed;
      this[addedCount$] = addedCount;
      this[_assertValidState]();
    }).prototype = ListChangeRecord.prototype;
    dart.addTypeTests(ListChangeRecord);
    ListChangeRecord.prototype[_is_ListChangeRecord_default] = true;
    const addedCount$ = Symbol("ListChangeRecord.addedCount");
    const index$ = Symbol("ListChangeRecord.index");
    const object$ = Symbol("ListChangeRecord.object");
    const removed$ = Symbol("ListChangeRecord.removed");
    ListChangeRecord[dart.implements] = () => [src__records.ChangeRecord];
    dart.setMethodSignature(ListChangeRecord, () => ({
      __proto__: dart.getMethods(ListChangeRecord.__proto__),
      apply: dart.fnType(dart.void, [core$.Object]),
      [_assertValidState]: dart.fnType(dart.void, []),
      indexChanged: dart.fnType(core$.bool, [core$.int]),
      _equals: dart.fnType(core$.bool, [core$.Object]),
      [$_equals]: dart.fnType(core$.bool, [core$.Object]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setGetterSignature(ListChangeRecord, () => ({
      __proto__: dart.getGetters(ListChangeRecord.__proto__),
      added: core$.Iterable$(E),
      hashCode: core$.int,
      [$hashCode]: core$.int
    }));
    dart.setFieldSignature(ListChangeRecord, () => ({
      __proto__: dart.getFields(ListChangeRecord.__proto__),
      addedCount: dart.finalFieldType(core$.int),
      index: dart.finalFieldType(core$.int),
      object: dart.finalFieldType(ListOfE()),
      removed: dart.finalFieldType(ListOfE())
    }));
    dart.defineExtensionMethods(ListChangeRecord, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ListChangeRecord, ['hashCode']);
    return ListChangeRecord;
  });
  src__records.ListChangeRecord = src__records.ListChangeRecord$();
  dart.addTypeTests(src__records.ListChangeRecord, _is_ListChangeRecord_default);
  const _is_MapChangeRecord_default = Symbol('_is_MapChangeRecord_default');
  src__records.MapChangeRecord$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let MapChangeRecordOfK$V = () => (MapChangeRecordOfK$V = dart.constFn(src__records.MapChangeRecord$(K, V)))();
    class MapChangeRecord extends core$.Object {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
      get oldValue() {
        return this[oldValue$];
      }
      set oldValue(value) {
        super.oldValue = value;
      }
      get newValue() {
        return this[newValue$];
      }
      set newValue(value) {
        super.newValue = value;
      }
      get isInsert() {
        return this[isInsert];
      }
      set isInsert(value) {
        super.isInsert = value;
      }
      get isRemove() {
        return this[isRemove];
      }
      set isRemove(value) {
        super.isRemove = value;
      }
      apply(map) {
        MapOfK$V()._check(map);
        if (dart.test(this.isRemove)) {
          map[$remove](this.key);
        } else {
          map[$_set](this.key, this.newValue);
        }
      }
      _equals(o) {
        if (o == null) return false;
        if (MapChangeRecordOfK$V().is(o)) {
          return dart.equals(this.key, o.key) && dart.equals(this.oldValue, o.oldValue) && dart.equals(this.newValue, o.newValue) && this.isInsert == o.isInsert && this.isRemove == o.isRemove;
        }
        return false;
      }
      get hashCode() {
        return core$0.hashObjects([this.key, this.oldValue, this.newValue, this.isInsert, this.isRemove]);
      }
      toString() {
        let kind = dart.test(this.isInsert) ? "insert" : dart.test(this.isRemove) ? "remove" : "set";
        return "#<MapChangeRecord " + kind + " " + dart.str(this.key) + " from " + dart.str(this.oldValue) + " to " + dart.str(this.newValue);
      }
    }
    (MapChangeRecord.new = function(key, oldValue, newValue) {
      this[key$] = key;
      this[oldValue$] = oldValue;
      this[newValue$] = newValue;
      this[isInsert] = false;
      this[isRemove] = false;
    }).prototype = MapChangeRecord.prototype;
    (MapChangeRecord.insert = function(key, newValue) {
      this[key$] = key;
      this[newValue$] = newValue;
      this[isInsert] = true;
      this[isRemove] = false;
      this[oldValue$] = null;
    }).prototype = MapChangeRecord.prototype;
    (MapChangeRecord.remove = function(key, oldValue) {
      this[key$] = key;
      this[oldValue$] = oldValue;
      this[isInsert] = false;
      this[isRemove] = true;
      this[newValue$] = null;
    }).prototype = MapChangeRecord.prototype;
    dart.addTypeTests(MapChangeRecord);
    MapChangeRecord.prototype[_is_MapChangeRecord_default] = true;
    const key$ = Symbol("MapChangeRecord.key");
    const oldValue$ = Symbol("MapChangeRecord.oldValue");
    const newValue$ = Symbol("MapChangeRecord.newValue");
    const isInsert = Symbol("MapChangeRecord.isInsert");
    const isRemove = Symbol("MapChangeRecord.isRemove");
    MapChangeRecord[dart.implements] = () => [src__records.ChangeRecord];
    dart.setMethodSignature(MapChangeRecord, () => ({
      __proto__: dart.getMethods(MapChangeRecord.__proto__),
      apply: dart.fnType(dart.void, [core$.Object]),
      _equals: dart.fnType(core$.bool, [core$.Object]),
      [$_equals]: dart.fnType(core$.bool, [core$.Object]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setGetterSignature(MapChangeRecord, () => ({
      __proto__: dart.getGetters(MapChangeRecord.__proto__),
      hashCode: core$.int,
      [$hashCode]: core$.int
    }));
    dart.setFieldSignature(MapChangeRecord, () => ({
      __proto__: dart.getFields(MapChangeRecord.__proto__),
      key: dart.finalFieldType(K),
      oldValue: dart.finalFieldType(V),
      newValue: dart.finalFieldType(V),
      isInsert: dart.finalFieldType(core$.bool),
      isRemove: dart.finalFieldType(core$.bool)
    }));
    dart.defineExtensionMethods(MapChangeRecord, ['_equals', 'toString']);
    dart.defineExtensionAccessors(MapChangeRecord, ['hashCode']);
    return MapChangeRecord;
  });
  src__records.MapChangeRecord = src__records.MapChangeRecord$();
  dart.addTypeTests(src__records.MapChangeRecord, _is_MapChangeRecord_default);
  const _is_PropertyChangeRecord_default = Symbol('_is_PropertyChangeRecord_default');
  src__records.PropertyChangeRecord$ = dart.generic(T => {
    class PropertyChangeRecord extends core$.Object {
      get object() {
        return this[object$];
      }
      set object(value) {
        super.object = value;
      }
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get oldValue() {
        return this[oldValue$];
      }
      set oldValue(value) {
        super.oldValue = value;
      }
      get newValue() {
        return this[newValue$];
      }
      set newValue(value) {
        super.newValue = value;
      }
      toString() {
        return "" + ("#<" + dart.str(dart.wrapType(src__records.PropertyChangeRecord)) + " " + dart.str(this.name) + " from " + dart.str(this.oldValue) + " to: " + dart.str(this.newValue));
      }
    }
    (PropertyChangeRecord.new = function(object, name, oldValue, newValue) {
      this[object$] = object;
      this[name$] = name;
      this[oldValue$] = oldValue;
      this[newValue$] = newValue;
    }).prototype = PropertyChangeRecord.prototype;
    dart.addTypeTests(PropertyChangeRecord);
    PropertyChangeRecord.prototype[_is_PropertyChangeRecord_default] = true;
    const object$ = Symbol("PropertyChangeRecord.object");
    const name$ = Symbol("PropertyChangeRecord.name");
    const oldValue$ = Symbol("PropertyChangeRecord.oldValue");
    const newValue$ = Symbol("PropertyChangeRecord.newValue");
    PropertyChangeRecord[dart.implements] = () => [src__records.ChangeRecord];
    dart.setMethodSignature(PropertyChangeRecord, () => ({
      __proto__: dart.getMethods(PropertyChangeRecord.__proto__),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, [])
    }));
    dart.setFieldSignature(PropertyChangeRecord, () => ({
      __proto__: dart.getFields(PropertyChangeRecord.__proto__),
      object: dart.finalFieldType(core$.Object),
      name: dart.finalFieldType(core$.Symbol),
      oldValue: dart.finalFieldType(T),
      newValue: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(PropertyChangeRecord, ['toString']);
    return PropertyChangeRecord;
  });
  src__records.PropertyChangeRecord = src__records.PropertyChangeRecord$();
  dart.addTypeTests(src__records.PropertyChangeRecord, _is_PropertyChangeRecord_default);
  const _delegate$ = Symbol('_delegate');
  const _isNotGeneric = Symbol('_isNotGeneric');
  const _is_Observable_default = Symbol('_is_Observable_default');
  src__observable.Observable$ = dart.generic(C => {
    let ChangeNotifierOfC = () => (ChangeNotifierOfC = dart.constFn(src__change_notifier.ChangeNotifier$(C)))();
    class Observable extends core$.Object {
      get changes() {
        return this[_delegate$].changes;
      }
      observed() {
        return this[_delegate$].observed();
      }
      unobserved() {
        return this[_delegate$].unobserved();
      }
      get hasObservers() {
        return this[_delegate$].hasObservers;
      }
      deliverChanges() {
        return this[_delegate$].deliverChanges();
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        if (dart.test(this.hasObservers) && !dart.equals(oldValue, newValue)) {
          if (dart.test(this[_isNotGeneric])) {
            this.notifyChange(C.as(new (src__records.PropertyChangeRecord$(T)).new(this, field, oldValue, newValue)));
          } else {
          }
        }
        return newValue;
      }
      notifyChange(change) {
        if (change === void 0) change = null;
        C._check(change);
        return this[_delegate$].notifyChange(change);
      }
    }
    (Observable.new = function() {
      this[_delegate$] = new (ChangeNotifierOfC()).new();
      this[_isNotGeneric] = dart.equals(dart.wrapType(C), dart.wrapType(dart.dynamic)) || dart.equals(dart.wrapType(C), dart.wrapType(src__records.ChangeRecord));
    }).prototype = Observable.prototype;
    dart.addTypeTests(Observable);
    Observable.prototype[_is_Observable_default] = true;
    dart.setMethodSignature(Observable, () => ({
      __proto__: dart.getMethods(Observable.__proto__),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverChanges: dart.fnType(core$.bool, []),
      notifyPropertyChange: dart.gFnType(T => [T, [core$.Symbol, T, T]]),
      notifyChange: dart.fnType(dart.void, [], [core$.Object])
    }));
    dart.setGetterSignature(Observable, () => ({
      __proto__: dart.getGetters(Observable.__proto__),
      changes: async.Stream$(core$.List$(C)),
      hasObservers: core$.bool
    }));
    dart.setFieldSignature(Observable, () => ({
      __proto__: dart.getFields(Observable.__proto__),
      [_delegate$]: dart.finalFieldType(ChangeNotifierOfC()),
      [_isNotGeneric]: dart.finalFieldType(core$.bool)
    }));
    return Observable;
  });
  src__observable.Observable = src__observable.Observable$();
  dart.addTypeTests(src__observable.Observable, _is_Observable_default);
  const _changes = Symbol('_changes');
  const _scheduled = Symbol('_scheduled');
  const _queue = Symbol('_queue');
  const _is_ChangeNotifier_default = Symbol('_is_ChangeNotifier_default');
  src__change_notifier.ChangeNotifier$ = dart.generic(C => {
    let ListOfC = () => (ListOfC = dart.constFn(core$.List$(C)))();
    let StreamControllerOfListOfC = () => (StreamControllerOfListOfC = dart.constFn(async.StreamController$(ListOfC())))();
    let ChangeRecordsOfC = () => (ChangeRecordsOfC = dart.constFn(src__records.ChangeRecords$(C)))();
    let JSArrayOfC = () => (JSArrayOfC = dart.constFn(_interceptors.JSArray$(C)))();
    let ObservableOfC = () => (ObservableOfC = dart.constFn(src__observable.Observable$(C)))();
    class ChangeNotifier extends core$.Object {
      get changes() {
        return (() => {
          let t = this[_changes];
          return t == null ? this[_changes] = StreamControllerOfListOfC().broadcast({sync: true, onListen: dart.bind(this, 'observed'), onCancel: dart.bind(this, 'unobserved')}) : t;
        })().stream;
      }
      observed() {}
      unobserved() {
        this[_changes] = this[_queue] = null;
      }
      deliverChanges() {
        if (dart.test(this[_scheduled]) && dart.test(this.hasObservers)) {
          let changes = this[_queue] == null ? new (ChangeRecordsOfC()).any() : new (ChangeRecordsOfC()).wrap(src__internal.freezeInDevMode(C, this[_queue]));
          this[_queue] = null;
          this[_scheduled] = false;
          this[_changes].add(changes);
          return true;
        }
        return false;
      }
      get hasObservers() {
        return (() => {
          let t = this[_changes];
          return t == null ? null : t.hasListener;
        })() === true;
      }
      notifyChange(change) {
        if (change === void 0) change = null;
        C._check(change);
        if (!dart.test(this.hasObservers)) {
          return;
        }
        if (change != null) {
          (() => {
            let t = this[_queue];
            return t == null ? this[_queue] = JSArrayOfC().of([]) : t;
          })()[$add](change);
        }
        if (!dart.test(this[_scheduled])) {
          async.scheduleMicrotask(dart.bind(this, 'deliverChanges'));
          this[_scheduled] = true;
        }
      }
      notifyPropertyChange(T, field, oldValue, newValue) {
        dart.throw(new core$.UnsupportedError.new("Not supported by ChangeNotifier"));
      }
    }
    (ChangeNotifier.new = function() {
      this[_changes] = null;
      this[_scheduled] = false;
      this[_queue] = null;
    }).prototype = ChangeNotifier.prototype;
    dart.addTypeTests(ChangeNotifier);
    ChangeNotifier.prototype[_is_ChangeNotifier_default] = true;
    ChangeNotifier[dart.implements] = () => [ObservableOfC()];
    dart.setMethodSignature(ChangeNotifier, () => ({
      __proto__: dart.getMethods(ChangeNotifier.__proto__),
      observed: dart.fnType(dart.void, []),
      unobserved: dart.fnType(dart.void, []),
      deliverChanges: dart.fnType(core$.bool, []),
      notifyChange: dart.fnType(dart.void, [], [core$.Object]),
      notifyPropertyChange: dart.gFnType(T => [T, [core$.Symbol, T, T]])
    }));
    dart.setGetterSignature(ChangeNotifier, () => ({
      __proto__: dart.getGetters(ChangeNotifier.__proto__),
      changes: async.Stream$(core$.List$(C)),
      hasObservers: core$.bool
    }));
    dart.setFieldSignature(ChangeNotifier, () => ({
      __proto__: dart.getFields(ChangeNotifier.__proto__),
      [_changes]: dart.fieldType(StreamControllerOfListOfC()),
      [_scheduled]: dart.fieldType(core$.bool),
      [_queue]: dart.fieldType(ListOfC())
    }));
    return ChangeNotifier;
  });
  src__change_notifier.ChangeNotifier = src__change_notifier.ChangeNotifier$();
  dart.addTypeTests(src__change_notifier.ChangeNotifier, _is_ChangeNotifier_default);
  src__change_notifier.PropertyChangeNotifier = class PropertyChangeNotifier extends src__change_notifier.ChangeNotifier$(src__records.ChangeRecord) {
    notifyPropertyChange(T, field, oldValue, newValue) {
      if (dart.test(this.hasObservers) && !dart.equals(oldValue, newValue)) {
        this.notifyChange(new (src__records.PropertyChangeRecord$(T)).new(this, field, oldValue, newValue));
      }
      return newValue;
    }
  };
  (src__change_notifier.PropertyChangeNotifier.new = function() {
    src__change_notifier.PropertyChangeNotifier.__proto__.new.call(this);
  }).prototype = src__change_notifier.PropertyChangeNotifier.prototype;
  dart.addTypeTests(src__change_notifier.PropertyChangeNotifier);
  dart.setMethodSignature(src__change_notifier.PropertyChangeNotifier, () => ({
    __proto__: dart.getMethods(src__change_notifier.PropertyChangeNotifier.__proto__),
    notifyPropertyChange: dart.gFnType(T => [T, [core$.Symbol, T, T]])
  }));
  const _is_Differ_default = Symbol('_is_Differ_default');
  src__differs.Differ$ = dart.generic(E => {
    class Differ extends core$.Object {}
    (Differ.new = function() {
    }).prototype = Differ.prototype;
    dart.addTypeTests(Differ);
    Differ.prototype[_is_Differ_default] = true;
    return Differ;
  });
  src__differs.Differ = src__differs.Differ$();
  dart.addTypeTests(src__differs.Differ, _is_Differ_default);
  const _equality = Symbol('_equality');
  const _is_EqualityDiffer_default = Symbol('_is_EqualityDiffer_default');
  src__differs.EqualityDiffer$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    let IdentityEqualityOfE = () => (IdentityEqualityOfE = dart.constFn(src__equality.IdentityEquality$(E)))();
    let DifferOfE = () => (DifferOfE = dart.constFn(src__differs.Differ$(E)))();
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    class EqualityDiffer extends core$.Object {
      diff(oldValue, newValue) {
        E._check(oldValue);
        E._check(newValue);
        return dart.test(this[_equality].equals(oldValue, newValue)) ? src__records.ChangeRecord.NONE : src__records.ChangeRecord.ANY;
      }
    }
    (EqualityDiffer.new = function(equality) {
      if (equality === void 0) equality = dart.const(new (DefaultEqualityOfE()).new());
      this[_equality] = equality;
    }).prototype = EqualityDiffer.prototype;
    (EqualityDiffer.identity = function() {
      this[_equality] = dart.const(new (IdentityEqualityOfE()).new());
    }).prototype = EqualityDiffer.prototype;
    dart.addTypeTests(EqualityDiffer);
    EqualityDiffer.prototype[_is_EqualityDiffer_default] = true;
    EqualityDiffer[dart.implements] = () => [DifferOfE()];
    dart.setMethodSignature(EqualityDiffer, () => ({
      __proto__: dart.getMethods(EqualityDiffer.__proto__),
      diff: dart.fnType(core$.List$(src__records.ChangeRecord), [core$.Object, core$.Object])
    }));
    dart.setFieldSignature(EqualityDiffer, () => ({
      __proto__: dart.getFields(EqualityDiffer.__proto__),
      [_equality]: dart.finalFieldType(EqualityOfE())
    }));
    return EqualityDiffer;
  });
  src__differs.EqualityDiffer = src__differs.EqualityDiffer$();
  dart.addTypeTests(src__differs.EqualityDiffer, _is_EqualityDiffer_default);
  const _is_ListDiffer_default = Symbol('_is_ListDiffer_default');
  src__differs.ListDiffer$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    let DifferOfListOfE = () => (DifferOfListOfE = dart.constFn(src__differs.Differ$(ListOfE())))();
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    class ListDiffer extends core$.Object {
      diff(e1, e2) {
        ListOfE()._check(e1);
        ListOfE()._check(e2);
        return src__differs._calcSplices(E, e2, this[_equality], 0, e2[$length], e1, 0, e1[$length]);
      }
    }
    (ListDiffer.new = function(equality) {
      if (equality === void 0) equality = dart.const(new (DefaultEqualityOfE()).new());
      this[_equality] = equality;
    }).prototype = ListDiffer.prototype;
    dart.addTypeTests(ListDiffer);
    ListDiffer.prototype[_is_ListDiffer_default] = true;
    ListDiffer[dart.implements] = () => [DifferOfListOfE()];
    dart.setMethodSignature(ListDiffer, () => ({
      __proto__: dart.getMethods(ListDiffer.__proto__),
      diff: dart.fnType(core$.List$(src__records.ListChangeRecord$(E)), [core$.Object, core$.Object])
    }));
    dart.setFieldSignature(ListDiffer, () => ({
      __proto__: dart.getFields(ListDiffer.__proto__),
      [_equality]: dart.finalFieldType(EqualityOfE())
    }));
    return ListDiffer;
  });
  src__differs.ListDiffer = src__differs.ListDiffer$();
  dart.addTypeTests(src__differs.ListDiffer, _is_ListDiffer_default);
  src__differs._Edit = class _Edit extends core$.Object {
    toString() {
      return {
        0: "_Edit.leave",
        1: "_Edit.update",
        2: "_Edit.add",
        3: "_Edit.delete"
      }[this.index];
    }
  };
  (src__differs._Edit.new = function(x) {
    this.index = x;
  }).prototype = src__differs._Edit.prototype;
  dart.addTypeTests(src__differs._Edit);
  dart.setFieldSignature(src__differs._Edit, () => ({
    __proto__: dart.getFields(src__differs._Edit.__proto__),
    index: dart.finalFieldType(core$.int)
  }));
  dart.defineExtensionMethods(src__differs._Edit, ['toString']);
  src__differs._Edit.leave = dart.const(new src__differs._Edit.new(0));
  src__differs._Edit.update = dart.const(new src__differs._Edit.new(1));
  src__differs._Edit.add = dart.const(new src__differs._Edit.new(2));
  src__differs._Edit.delete = dart.const(new src__differs._Edit.new(3));
  src__differs._Edit.values = dart.constList([src__differs._Edit.leave, src__differs._Edit.update, src__differs._Edit.add, src__differs._Edit.delete], src__differs._Edit);
  src__differs._calcEditDistance = function(E, current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let rowCount = dart.notNull(oldEnd) - dart.notNull(oldStart) + 1;
    let columnCount = dart.notNull(currentEnd) - dart.notNull(currentStart) + 1;
    let distances = ListOfListOfint().new(rowCount);
    for (let i = 0; i < rowCount; i++) {
      distances[$_set](i, ListOfint().new(columnCount));
      distances[$_get](i)[$_set](0, i);
    }
    for (let j = 0; j < columnCount; j++) {
      distances[$_get](0)[$_set](j, j);
    }
    for (let i = 1; i < rowCount; i++) {
      for (let j = 1; j < columnCount; j++) {
        if (dart.equals(old[$_get](dart.notNull(oldStart) + i - 1), current[$_get](dart.notNull(currentStart) + j - 1))) {
          distances[$_get](i)[$_set](j, distances[$_get](i - 1)[$_get](j - 1));
        } else {
          let north = dart.notNull(distances[$_get](i - 1)[$_get](j)) + 1;
          let west = dart.notNull(distances[$_get](i)[$_get](j - 1)) + 1;
          distances[$_get](i)[$_set](j, math.min(core$.int, north, west));
        }
      }
    }
    return distances;
  };
  src__differs._spliceOperationsFromEditDistances = function(distances) {
    let i = dart.notNull(distances[$length]) - 1;
    let j = dart.notNull(distances[$_get](0)[$length]) - 1;
    let current = distances[$_get](i)[$_get](j);
    let edits = JSArrayOf_Edit().of([]);
    while (i > 0 || j > 0) {
      if (i === 0) {
        edits[$add](src__differs._Edit.add);
        j--;
        continue;
      }
      if (j === 0) {
        edits[$add](src__differs._Edit.delete);
        i--;
        continue;
      }
      let northWest = distances[$_get](i - 1)[$_get](j - 1);
      let west = distances[$_get](i - 1)[$_get](j);
      let north = distances[$_get](i)[$_get](j - 1);
      let min = math.min(core$.int, math.min(core$.int, west, north), northWest);
      if (min === northWest) {
        if (northWest == current) {
          edits[$add](src__differs._Edit.leave);
        } else {
          edits[$add](src__differs._Edit.update);
          current = northWest;
        }
        i--;
        j--;
      } else if (min === west) {
        edits[$add](src__differs._Edit.delete);
        i--;
        current = west;
      } else {
        edits[$add](src__differs._Edit.add);
        j--;
        current = north;
      }
    }
    return edits[$reversed];
  };
  src__differs._sharedPrefix = function(E, equality, e1, e2, searchLength) {
    for (let i = 0; i < dart.notNull(searchLength); i++) {
      if (!dart.test(equality.equals(e1[$_get](i), e2[$_get](i)))) {
        return i;
      }
    }
    return searchLength;
  };
  src__differs._sharedSuffix = function(E, equality, e1, e2, searchLength) {
    let index1 = e1[$length];
    let index2 = e2[$length];
    let count = 0;
    while (count < dart.notNull(searchLength) && dart.test(equality.equals(e1[$_get](index1 = dart.notNull(index1) - 1), e2[$_get](index2 = dart.notNull(index2) - 1)))) {
      count++;
    }
    return count;
  };
  src__differs._calcSplices = function(E, current, equality, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    let minLength = math.min(core$.int, dart.notNull(currentEnd) - dart.notNull(currentStart), dart.notNull(oldEnd) - dart.notNull(oldStart));
    if (currentStart === 0 && oldStart === 0) {
      prefixCount = src__differs._sharedPrefix(E, equality, current, old, minLength);
    }
    if (currentEnd == current[$length] && oldEnd == old[$length]) {
      suffixCount = src__differs._sharedSuffix(E, equality, current, old, minLength - dart.notNull(prefixCount));
    }
    currentStart = dart.notNull(currentStart) + dart.notNull(prefixCount);
    oldStart = dart.notNull(oldStart) + dart.notNull(prefixCount);
    currentEnd = dart.notNull(currentEnd) - dart.notNull(suffixCount);
    oldEnd = dart.notNull(oldEnd) - dart.notNull(suffixCount);
    if (dart.notNull(currentEnd) - dart.notNull(currentStart) === 0 && dart.notNull(oldEnd) - dart.notNull(oldStart) === 0) {
      return dart.constList([], src__records.ListChangeRecord$(E));
    }
    if (currentStart == currentEnd) {
      let spliceRemoved = old[$sublist](oldStart, oldEnd);
      return _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([new (src__records.ListChangeRecord$(E)).remove(current, currentStart, spliceRemoved)]);
    }
    if (oldStart == oldEnd) {
      return _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([new (src__records.ListChangeRecord$(E)).add(current, currentStart, dart.notNull(currentEnd) - dart.notNull(currentStart))]);
    }
    let ops = src__differs._spliceOperationsFromEditDistances(src__differs._calcEditDistance(E, current, currentStart, currentEnd, old, oldStart, oldEnd));
    let spliceIndex = -1;
    let spliceRemovals = _interceptors.JSArray$(E).of([]);
    let spliceAddedCount = 0;
    function hasSplice() {
      return spliceIndex !== -1;
    }
    dart.fn(hasSplice, VoidTobool());
    function resetSplice() {
      spliceIndex = -1;
      spliceRemovals = _interceptors.JSArray$(E).of([]);
      spliceAddedCount = 0;
    }
    dart.fn(resetSplice, VoidTovoid());
    let splices = _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([]);
    let index = currentStart;
    let oldIndex = oldStart;
    for (let op of ops) {
      switch (op) {
        case src__differs._Edit.leave:
        {
          if (dart.test(hasSplice())) {
            splices[$add](src__records.ListChangeRecord$(E).new(current, spliceIndex, {removed: spliceRemovals, addedCount: spliceAddedCount}));
            resetSplice();
          }
          index = dart.notNull(index) + 1;
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
        case src__differs._Edit.update:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceAddedCount++;
          index = dart.notNull(index) + 1;
          spliceRemovals[$add](old[$_get](oldIndex));
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
        case src__differs._Edit.add:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceAddedCount++;
          index = dart.notNull(index) + 1;
          break;
        }
        case src__differs._Edit.delete:
        {
          if (!dart.test(hasSplice())) {
            spliceIndex = index;
          }
          spliceRemovals[$add](old[$_get](oldIndex));
          oldIndex = dart.notNull(oldIndex) + 1;
          break;
        }
      }
    }
    if (dart.test(hasSplice())) {
      splices[$add](src__records.ListChangeRecord$(E).new(current, spliceIndex, {removed: spliceRemovals, addedCount: spliceAddedCount}));
    }
    if (!dart.test(dart.fn(() => {
      splices = core$.List$(src__records.ListChangeRecord$(E)).unmodifiable(splices);
      return true;
    }, VoidTobool())())) dart.assertFailed();
    return splices;
  };
  src__differs._intersect = function(start1, end1, start2, end2) {
    return dart.asInt(math.min(core$.int, end1, end2) - math.max(core$.num, start1, start2));
  };
  src__differs._mergeSplices = function(E, splices, record) {
    let spliceIndex = record.index;
    let spliceRemoved = record.removed;
    let spliceAdded = record.addedCount;
    let inserted = false;
    let insertionOffset = 0;
    for (let i = 0; i < dart.notNull(splices[$length]); i++) {
      let current = splices[$_get](i);
      current = splices[$_set](i, src__records.ListChangeRecord$(E).new(current.object, dart.notNull(current.index) + insertionOffset, {removed: current.removed, addedCount: current.addedCount}));
      if (inserted) continue;
      let intersectCount = src__differs._intersect(spliceIndex, dart.notNull(spliceIndex) + dart.notNull(spliceRemoved[$length]), current.index, dart.notNull(current.index) + dart.notNull(current.addedCount));
      if (dart.notNull(intersectCount) >= 0) {
        splices[$removeAt](i);
        i--;
        insertionOffset = insertionOffset - (dart.notNull(current.addedCount) - dart.notNull(current.removed[$length]));
        spliceAdded = dart.notNull(spliceAdded) + (dart.notNull(current.addedCount) - dart.notNull(intersectCount));
        let deleteCount = dart.notNull(spliceRemoved[$length]) + dart.notNull(current.removed[$length]) - dart.notNull(intersectCount);
        if (spliceAdded === 0 && deleteCount === 0) {
          inserted = true;
        } else {
          let removed = current.removed[$toList]();
          if (dart.notNull(spliceIndex) < dart.notNull(current.index)) {
            removed[$insertAll](0, spliceRemoved[$getRange](0, dart.notNull(current.index) - dart.notNull(spliceIndex)));
          }
          if (dart.notNull(spliceIndex) + dart.notNull(spliceRemoved[$length]) > dart.notNull(current.index) + dart.notNull(current.addedCount)) {
            removed[$addAll](spliceRemoved[$getRange](dart.notNull(current.index) + dart.notNull(current.addedCount) - dart.notNull(spliceIndex), spliceRemoved[$length]));
          }
          spliceRemoved = removed;
          if (dart.notNull(current.index) < dart.notNull(spliceIndex)) {
            spliceIndex = current.index;
          }
        }
      } else if (dart.notNull(spliceIndex) < dart.notNull(current.index)) {
        inserted = true;
        splices[$insert](i, src__records.ListChangeRecord$(E).new(record.object, spliceIndex, {removed: spliceRemoved, addedCount: spliceAdded}));
        i++;
        let offset = dart.notNull(spliceAdded) - dart.notNull(spliceRemoved[$length]);
        current = splices[$_set](i, src__records.ListChangeRecord$(E).new(current.object, dart.notNull(current.index) + offset, {removed: current.removed, addedCount: current.addedCount}));
        insertionOffset = insertionOffset + offset;
      }
    }
    if (!inserted) {
      splices[$add](src__records.ListChangeRecord$(E).new(record.object, spliceIndex, {removed: spliceRemoved, addedCount: spliceAdded}));
    }
  };
  src__differs._createInitialSplices = function(E, list, records) {
    let splices = _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([]);
    for (let i = 0; i < dart.notNull(records[$length]); i++) {
      src__differs._mergeSplices(E, splices, records[$_get](i));
    }
    return splices;
  };
  src__differs.projectListSplices = function(E, list, records, equality) {
    if (equality === void 0) equality = null;
    let t = equality;
    t == null ? equality = new (src__equality.DefaultEquality$(E)).new() : t;
    if (dart.notNull(records[$length]) <= 1) return records;
    let splices = _interceptors.JSArray$(src__records.ListChangeRecord$(E)).of([]);
    let initialSplices = src__differs._createInitialSplices(E, list, records);
    for (let splice of initialSplices) {
      if (splice.addedCount === 1 && splice.removed[$length] === 1) {
        if (!dart.equals(splice.removed[$_get](0), list[$_get](splice.index))) {
          splices[$add](splice);
        }
        continue;
      }
      splices[$addAll](src__differs._calcSplices(E, list, equality, splice.index, dart.notNull(splice.index) + dart.notNull(splice.addedCount), splice.removed, 0, splice.removed[$length]));
    }
    return splices;
  };
  const _is_MapDiffer_default = Symbol('_is_MapDiffer_default');
  src__differs.MapDiffer$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let MapChangeRecordOfK$V = () => (MapChangeRecordOfK$V = dart.constFn(src__records.MapChangeRecord$(K, V)))();
    let JSArrayOfMapChangeRecordOfK$V = () => (JSArrayOfMapChangeRecordOfK$V = dart.constFn(_interceptors.JSArray$(MapChangeRecordOfK$V())))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core$.Null, [K, V])))();
    let DifferOfMapOfK$V = () => (DifferOfMapOfK$V = dart.constFn(src__differs.Differ$(MapOfK$V())))();
    class MapDiffer extends core$.Object {
      diff(oldValue, newValue) {
        MapOfK$V()._check(oldValue);
        MapOfK$V()._check(newValue);
        if (oldValue == newValue) {
          return dart.constList([], MapChangeRecordOfK$V());
        }
        let changes = JSArrayOfMapChangeRecordOfK$V().of([]);
        oldValue[$forEach](dart.fn((oldK, oldV) => {
          let newV = newValue[$_get](oldK);
          if (newV == null && !dart.test(newValue[$containsKey](oldK))) {
            changes[$add](new (MapChangeRecordOfK$V()).remove(oldK, oldV));
          } else if (!dart.equals(newV, oldV)) {
            changes[$add](new (MapChangeRecordOfK$V()).new(oldK, oldV, newV));
          }
        }, KAndVToNull()));
        newValue[$forEach](dart.fn((newK, newV) => {
          if (!dart.test(oldValue[$containsKey](newK))) {
            changes[$add](new (MapChangeRecordOfK$V()).insert(newK, newV));
          }
        }, KAndVToNull()));
        return src__internal.freezeInDevMode(MapChangeRecordOfK$V(), changes);
      }
    }
    (MapDiffer.new = function() {
    }).prototype = MapDiffer.prototype;
    dart.addTypeTests(MapDiffer);
    MapDiffer.prototype[_is_MapDiffer_default] = true;
    MapDiffer[dart.implements] = () => [DifferOfMapOfK$V()];
    dart.setMethodSignature(MapDiffer, () => ({
      __proto__: dart.getMethods(MapDiffer.__proto__),
      diff: dart.fnType(core$.List$(src__records.MapChangeRecord$(K, V)), [core$.Object, core$.Object])
    }));
    return MapDiffer;
  });
  src__differs.MapDiffer = src__differs.MapDiffer$();
  dart.addTypeTests(src__differs.MapDiffer, _is_MapDiffer_default);
  const _list = Symbol('_list');
  const _listRecords = Symbol('_listRecords');
  const _listChanges = Symbol('_listChanges');
  const _notifyChangeLength = Symbol('_notifyChangeLength');
  const _notifyListChange = Symbol('_notifyListChange');
  const _rangeCheck = Symbol('_rangeCheck');
  let const$1;
  let const$2;
  let const$3;
  const _is_ObservableList_default = Symbol('_is_ObservableList_default');
  src__observable_list.ObservableList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core$.List$(E)))();
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let ListChangeRecordOfE = () => (ListChangeRecordOfE = dart.constFn(src__records.ListChangeRecord$(E)))();
    let ListOfListChangeRecordOfE = () => (ListOfListChangeRecordOfE = dart.constFn(core$.List$(ListChangeRecordOfE())))();
    let StreamControllerOfListOfListChangeRecordOfE = () => (StreamControllerOfListOfListChangeRecordOfE = dart.constFn(async.StreamController$(ListOfListChangeRecordOfE())))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core$.Iterable$(E)))();
    let JSArrayOfListChangeRecordOfE = () => (JSArrayOfListChangeRecordOfE = dart.constFn(_interceptors.JSArray$(ListChangeRecordOfE())))();
    let UnmodifiableListViewOfListChangeRecordOfE = () => (UnmodifiableListViewOfListChangeRecordOfE = dart.constFn(collection.UnmodifiableListView$(ListChangeRecordOfE())))();
    const ListBase_Observable$ = class ListBase_Observable extends collection.ListBase$(E) {};
    (ListBase_Observable$.new = function() {
      src__observable.Observable$(src__records.ChangeRecord).new.call(this);
    }).prototype = ListBase_Observable$.prototype;
    dart.applyMixin(ListBase_Observable$, src__observable.Observable$(src__records.ChangeRecord));
    class ObservableList extends ListBase_Observable$ {
      static castFrom(S, T, source) {
        return new (src__observable_list.ObservableList$(T))._spy(source[_list][$cast](T));
      }
      cast(T) {
        return src__observable_list.ObservableList.castFrom(E, T, this);
      }
      retype(T) {
        return this.cast(T);
      }
      get listChanges() {
        if (this[_listChanges] == null) {
          this[_listChanges] = StreamControllerOfListOfListChangeRecordOfE().broadcast({sync: true, onCancel: dart.fn(() => {
              this[_listChanges] = null;
            }, VoidToNull())});
        }
        return this[_listChanges].stream;
      }
      get hasListObservers() {
        return this[_listChanges] != null && dart.test(this[_listChanges].hasListener);
      }
      get length() {
        return this[_list][$length];
      }
      set length(value) {
        let len = this[_list][$length];
        if (len == value) return;
        this[_notifyChangeLength](len, value);
        if (dart.test(this.hasListObservers)) {
          if (dart.notNull(value) < dart.notNull(len)) {
            this[_notifyListChange](value, {removed: this[_list][$getRange](value, len)[$toList]()});
          } else {
            this[_notifyListChange](len, {addedCount: dart.notNull(value) - dart.notNull(len)});
          }
        }
        this[_list][$length] = value;
      }
      _get(index) {
        return this[_list][$_get](index);
      }
      _set(index, value) {
        E._check(value);
        let oldValue = this[_list][$_get](index);
        if (dart.test(this.hasListObservers) && !dart.equals(oldValue, value)) {
          this[_notifyListChange](index, {addedCount: 1, removed: JSArrayOfE().of([oldValue])});
        }
        this[_list][$_set](index, value);
        return value;
      }
      get isEmpty() {
        return super.isEmpty;
      }
      get isNotEmpty() {
        return super.isNotEmpty;
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        if (!core$.List.is(iterable) && !core$.Set.is(iterable)) {
          iterable = iterable[$toList]();
        }
        let length = iterable[$length];
        if (dart.test(this.hasListObservers) && dart.notNull(length) > 0) {
          this[_notifyListChange](index, {addedCount: length, removed: this[_list][$sublist](index, length)});
        }
        this[_list][$setAll](index, iterable);
      }
      add(value) {
        E._check(value);
        let len = this[_list][$length];
        this[_notifyChangeLength](len, dart.notNull(len) + 1);
        if (dart.test(this.hasListObservers)) {
          this[_notifyListChange](len, {addedCount: 1});
        }
        this[_list][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        let len = this[_list][$length];
        this[_list][$addAll](iterable);
        this[_notifyChangeLength](len, this[_list][$length]);
        let added = dart.notNull(this[_list][$length]) - dart.notNull(len);
        if (dart.test(this.hasListObservers) && added > 0) {
          this[_notifyListChange](len, {addedCount: added});
        }
      }
      remove(element) {
        for (let i = 0; i < dart.notNull(this.length); i++) {
          if (dart.equals(this._get(i), element)) {
            this.removeRange(i, i + 1);
            return true;
          }
        }
        return false;
      }
      removeRange(start, end) {
        this[_rangeCheck](start, end);
        let rangeLength = dart.notNull(end) - dart.notNull(start);
        let len = this[_list][$length];
        this[_notifyChangeLength](len, dart.notNull(len) - rangeLength);
        if (dart.test(this.hasListObservers) && rangeLength > 0) {
          this[_notifyListChange](start, {removed: this[_list][$getRange](start, end)[$toList]()});
        }
        this[_list][$removeRange](start, end);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this.length)) {
          dart.throw(new core$.RangeError.range(index, 0, this.length));
        }
        if (!core$.List.is(iterable) && !core$.Set.is(iterable)) {
          iterable = iterable[$toList]();
        }
        let insertionLength = iterable[$length];
        let len = this[_list][$length];
        this[_list][$length] = dart.notNull(this[_list][$length]) + dart.notNull(insertionLength);
        this[_list][$setRange](dart.notNull(index) + dart.notNull(insertionLength), this.length, this, index);
        this[_list][$setAll](index, iterable);
        this[_notifyChangeLength](len, this[_list][$length]);
        if (dart.test(this.hasListObservers) && dart.notNull(insertionLength) > 0) {
          this[_notifyListChange](index, {addedCount: insertionLength});
        }
      }
      insert(index, element) {
        E._check(element);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this.length)) {
          dart.throw(new core$.RangeError.range(index, 0, this.length));
        }
        if (index == this.length) {
          this.add(element);
          return;
        }
        if (!core$.int.is(index)) dart.throw(new core$.ArgumentError.new(index));
        this[_list][$length] = dart.notNull(this[_list][$length]) + 1;
        this[_list][$setRange](dart.notNull(index) + 1, this.length, this, index);
        this[_notifyChangeLength](dart.notNull(this[_list][$length]) - 1, this[_list][$length]);
        if (dart.test(this.hasListObservers)) {
          this[_notifyListChange](index, {addedCount: 1});
        }
        this[_list][$_set](index, element);
      }
      removeAt(index) {
        let result = this._get(index);
        this.removeRange(index, dart.notNull(index) + 1);
        return result;
      }
      [_rangeCheck](start, end) {
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(this.length)) {
          dart.throw(new core$.RangeError.range(start, 0, this.length));
        }
        if (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(this.length)) {
          dart.throw(new core$.RangeError.range(end, start, this.length));
        }
      }
      [_notifyListChange](index, opts) {
        let removed = opts && 'removed' in opts ? opts.removed : null;
        ListOfE()._check(removed);
        let addedCount = opts && 'addedCount' in opts ? opts.addedCount : 0;
        if (!dart.test(this.hasListObservers)) return;
        if (this[_listRecords] == null) {
          this[_listRecords] = JSArrayOfListChangeRecordOfE().of([]);
          async.scheduleMicrotask(dart.bind(this, 'deliverListChanges'));
        }
        this[_listRecords][$add](ListChangeRecordOfE().new(this, index, {removed: removed, addedCount: addedCount}));
      }
      [_notifyChangeLength](oldValue, newValue) {
        this.notifyPropertyChange(core$.int, const$1 || (const$1 = dart.const(core$.Symbol.new('length'))), oldValue, newValue);
        this.notifyPropertyChange(core$.bool, const$2 || (const$2 = dart.const(core$.Symbol.new('isEmpty'))), oldValue === 0, newValue === 0);
        this.notifyPropertyChange(core$.bool, const$3 || (const$3 = dart.const(core$.Symbol.new('isNotEmpty'))), oldValue !== 0, newValue !== 0);
      }
      discardListChanges() {
        if (this[_listRecords] != null) this[_listRecords] = JSArrayOfListChangeRecordOfE().of([]);
      }
      deliverListChanges() {
        if (this[_listRecords] == null) return false;
        let records = src__differs.projectListSplices(E, this, this[_listRecords]);
        this[_listRecords] = null;
        if (dart.test(this.hasListObservers) && dart.test(records[$isNotEmpty])) {
          this[_listChanges].add(new (UnmodifiableListViewOfListChangeRecordOfE()).new(records));
          return true;
        }
        return false;
      }
      static calculateChangeRecords(E, oldValue, newValue) {
        return new (src__differs.ListDiffer$(E)).new().diff(oldValue, newValue);
      }
      static applyChangeRecords(previous, current, changeRecords) {
        if (previous == current) {
          dart.throw(new core$.ArgumentError.new("can't use same list for previous and current"));
        }
        for (let change of changeRecords) {
          let addEnd = dart.notNull(change.index) + dart.notNull(change.addedCount);
          let removeEnd = dart.notNull(change.index) + dart.notNull(change.removed[$length]);
          let addedItems = current[$getRange](change.index, addEnd);
          previous[$replaceRange](change.index, removeEnd, addedItems);
        }
      }
    }
    (ObservableList.new = function(length) {
      if (length === void 0) length = null;
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = length != null ? ListOfE().new(length) : JSArrayOfE().of([]);
      ObservableList.__proto__.new.call(this);
    }).prototype = ObservableList.prototype;
    (ObservableList.withLength = function(length) {
      ObservableList.new.call(this, length);
    }).prototype = ObservableList.prototype;
    (ObservableList.from = function(other) {
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = ListOfE().from(other);
      ObservableList.__proto__.new.call(this);
    }).prototype = ObservableList.prototype;
    (ObservableList._spy = function(other) {
      this[_listRecords] = null;
      this[_listChanges] = null;
      this[_list] = other;
      ObservableList.__proto__.new.call(this);
    }).prototype = ObservableList.prototype;
    dart.addTypeTests(ObservableList);
    ObservableList.prototype[_is_ObservableList_default] = true;
    dart.setMethodSignature(ObservableList, () => ({
      __proto__: dart.getMethods(ObservableList.__proto__),
      cast: dart.gFnType(T => [src__observable_list.ObservableList$(T), []]),
      [$cast]: dart.gFnType(T => [src__observable_list.ObservableList$(T), []]),
      retype: dart.gFnType(T => [src__observable_list.ObservableList$(T), []]),
      _get: dart.fnType(E, [core$.int]),
      [$_get]: dart.fnType(E, [core$.int]),
      _set: dart.fnType(dart.void, [core$.int, core$.Object]),
      [$_set]: dart.fnType(dart.void, [core$.int, core$.Object]),
      setAll: dart.fnType(dart.void, [core$.int, core$.Object]),
      [$setAll]: dart.fnType(dart.void, [core$.int, core$.Object]),
      add: dart.fnType(dart.void, [core$.Object]),
      [$add]: dart.fnType(dart.void, [core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      [$addAll]: dart.fnType(dart.void, [core$.Object]),
      insertAll: dart.fnType(dart.void, [core$.int, core$.Object]),
      [$insertAll]: dart.fnType(dart.void, [core$.int, core$.Object]),
      insert: dart.fnType(dart.void, [core$.int, core$.Object]),
      [$insert]: dart.fnType(dart.void, [core$.int, core$.Object]),
      [_rangeCheck]: dart.fnType(dart.void, [core$.int, core$.int]),
      [_notifyListChange]: dart.fnType(dart.void, [core$.int], {removed: core$.Object, addedCount: core$.int}),
      [_notifyChangeLength]: dart.fnType(dart.void, [core$.int, core$.int]),
      discardListChanges: dart.fnType(dart.void, []),
      deliverListChanges: dart.fnType(core$.bool, [])
    }));
    dart.setGetterSignature(ObservableList, () => ({
      __proto__: dart.getGetters(ObservableList.__proto__),
      listChanges: async.Stream$(core$.List$(src__records.ListChangeRecord$(E))),
      hasListObservers: core$.bool,
      length: core$.int,
      [$length]: core$.int
    }));
    dart.setSetterSignature(ObservableList, () => ({
      __proto__: dart.getSetters(ObservableList.__proto__),
      length: core$.int,
      [$length]: core$.int
    }));
    dart.setFieldSignature(ObservableList, () => ({
      __proto__: dart.getFields(ObservableList.__proto__),
      [_listRecords]: dart.fieldType(ListOfListChangeRecordOfE()),
      [_listChanges]: dart.fieldType(StreamControllerOfListOfListChangeRecordOfE()),
      [_list]: dart.finalFieldType(ListOfE())
    }));
    dart.defineExtensionMethods(ObservableList, [
      'cast',
      '_get',
      '_set',
      'setAll',
      'add',
      'addAll',
      'remove',
      'removeRange',
      'insertAll',
      'insert',
      'removeAt'
    ]);
    dart.defineExtensionAccessors(ObservableList, ['length', 'isEmpty', 'isNotEmpty']);
    return ObservableList;
  });
  src__observable_list.ObservableList = src__observable_list.ObservableList$();
  dart.addTypeTests(src__observable_list.ObservableList, _is_ObservableList_default);
  src__to_observable.toObservable = function(value, opts) {
    let deep = opts && 'deep' in opts ? opts.deep : true;
    return dart.test(deep) ? src__to_observable._toObservableDeep(value) : src__to_observable._toObservableShallow(value);
  };
  src__to_observable._toObservableShallow = function(value) {
    if (ObservableOfChangeRecord().is(value)) return value;
    if (core$.Map.is(value)) {
      return extract_type_arguments$.extractMapTypeArguments(value, dart.fn((K, V) => src__observable_map.ObservableMap$(K, V).from(core$.Map$(K, V)._check(value)), VoidToObservableMapOfK$V()));
    }
    if (core$.Iterable.is(value)) {
      return extract_type_arguments$.extractIterableTypeArgument(value, dart.fn(T => new (src__observable_list.ObservableList$(T)).from(value), VoidToObservableListOfT()));
    }
    return value;
  };
  src__to_observable._toObservableDeep = function(value) {
    if (ObservableOfChangeRecord().is(value)) return value;
    if (core$.Map.is(value)) {
      return extract_type_arguments$.extractMapTypeArguments(value, dart.fn((K, V) => {
        let result = src__observable_map.ObservableMap$(K, V).createFromType(core$.Map$(K, V)._check(value));
        value[$forEach](dart.fn((k, v) => {
          result._set(K._check(src__to_observable._toObservableDeep(k)), V._check(src__to_observable._toObservableDeep(v)));
        }, dynamicAnddynamicToNull()));
        return result;
      }, VoidToObservableMapOfK$V()));
    }
    if (core$.Iterable.is(value)) {
      return extract_type_arguments$.extractIterableTypeArgument(value, dart.fn(T => {
        let result = new (src__observable_list.ObservableList$(T)).new();
        for (let element of value) {
          result.add(T._check(src__to_observable._toObservableDeep(element)));
        }
        return result;
      }, VoidToObservableListOfT()));
    }
    return value;
  };
  const _map = Symbol('_map');
  let const$4;
  const _notifyKeysValuesChanged = Symbol('_notifyKeysValuesChanged');
  const _notifyValuesChanged = Symbol('_notifyValuesChanged');
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  const _is_ObservableMap_default = Symbol('_is_ObservableMap_default');
  src__observable_map.ObservableMap$ = dart.generic((K, V) => {
    let LinkedMapOfK$V = () => (LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    let SplayTreeMapOfK$V = () => (SplayTreeMapOfK$V = dart.constFn(collection.SplayTreeMap$(K, V)))();
    let ObservableMapOfK$V = () => (ObservableMapOfK$V = dart.constFn(src__observable_map.ObservableMap$(K, V)))();
    let MapChangeRecordOfK$V = () => (MapChangeRecordOfK$V = dart.constFn(src__records.MapChangeRecord$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core$.Map$(K, V)))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core$.Null, [K, V])))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core$.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core$.Iterable$(MapEntryOfK$V())))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let MapChangeRecordOfObject$V = () => (MapChangeRecordOfObject$V = dart.constFn(src__records.MapChangeRecord$(core$.Object, V)))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class ObservableMap extends src__observable.Observable$(src__records.ChangeRecord) {
      static castFrom(K, V, K2, V2, source) {
        return new (src__observable_map.ObservableMap$(K2, V2)).spy(source[_map][$cast](K2, V2));
      }
      static from(other) {
        let _ = ObservableMapOfK$V().createFromType(other);
        _.addAll(other);
        return _;
      }
      static createFromType(other) {
        let result = null;
        if (collection.SplayTreeMap.is(other)) {
          result = new (ObservableMapOfK$V()).sorted();
        } else if (collection.LinkedHashMap.is(other)) {
          result = new (ObservableMapOfK$V()).linked();
        } else {
          result = new (ObservableMapOfK$V()).new();
        }
        return result;
      }
      get keys() {
        return this[_map][$keys];
      }
      get values() {
        return this[_map][$values];
      }
      get length() {
        return this[_map][$length];
      }
      get isEmpty() {
        return this.length === 0;
      }
      get isNotEmpty() {
        return !dart.test(this.isEmpty);
      }
      containsValue(value) {
        return this[_map][$containsValue](value);
      }
      containsKey(key) {
        return this[_map][$containsKey](key);
      }
      _get(key) {
        return this[_map][$_get](key);
      }
      _set(key, value) {
        K._check(key);
        V._check(value);
        if (!dart.test(this.hasObservers)) {
          this[_map][$_set](key, value);
          return value;
        }
        let len = this[_map][$length];
        let oldValue = this[_map][$_get](key);
        this[_map][$_set](key, value);
        if (len != this[_map][$length]) {
          this.notifyPropertyChange(core$.int, const$4 || (const$4 = dart.const(core$.Symbol.new('length'))), len, this[_map][$length]);
          this.notifyChange(new (MapChangeRecordOfK$V()).insert(key, value));
          this[_notifyKeysValuesChanged]();
        } else if (!dart.equals(oldValue, value)) {
          this.notifyChange(new (MapChangeRecordOfK$V()).new(key, oldValue, value));
          this[_notifyValuesChanged]();
        }
        return value;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        other[$forEach](dart.fn((key, value) => {
          this._set(key, value);
        }, KAndVToNull()));
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        let len = this[_map][$length];
        let result = this[_map][$putIfAbsent](key, ifAbsent);
        if (dart.test(this.hasObservers) && len != this[_map][$length]) {
          this.notifyPropertyChange(core$.int, const$5 || (const$5 = dart.const(core$.Symbol.new('length'))), len, this[_map][$length]);
          this.notifyChange(new (MapChangeRecordOfK$V()).insert(key, result));
          this[_notifyKeysValuesChanged]();
        }
        return result;
      }
      remove(key) {
        let len = this[_map][$length];
        let result = this[_map][$remove](key);
        if (dart.test(this.hasObservers) && len != this[_map][$length]) {
          this.notifyChange(new (MapChangeRecordOfObject$V()).remove(key, result));
          this.notifyPropertyChange(core$.int, const$6 || (const$6 = dart.const(core$.Symbol.new('length'))), len, this[_map][$length]);
          this[_notifyKeysValuesChanged]();
        }
        return result;
      }
      clear() {
        let len = this[_map][$length];
        if (dart.test(this.hasObservers) && dart.notNull(len) > 0) {
          this[_map][$forEach](dart.fn((key, value) => {
            this.notifyChange(new (MapChangeRecordOfK$V()).remove(key, value));
          }, KAndVToNull()));
          this.notifyPropertyChange(core$.int, const$7 || (const$7 = dart.const(core$.Symbol.new('length'))), len, 0);
          this[_notifyKeysValuesChanged]();
        }
        this[_map][$clear]();
      }
      forEach(f) {
        return this[_map][$forEach](f);
      }
      toString() {
        return collection.MapBase.mapToString(this);
      }
      cast(K2, V2) {
        return src__observable_map.ObservableMap.castFrom(K, V, K2, V2, this);
      }
      retype(K2, V2) {
        return src__observable_map.ObservableMap.castFrom(K, V, K2, V2, this);
      }
      get entries() {
        return this[_map][$entries];
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        this[_map][$addEntries](entries);
      }
      map(K2, V2, transform) {
        return this[_map][$map](K2, V2, transform);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_map][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KAndVToV()._check(update);
        return this[_map][$updateAll](update);
      }
      removeWhere(test) {
        return this[_map][$removeWhere](test);
      }
      [_notifyKeysValuesChanged]() {
        this.notifyChange(new (PropertyChangeRecordOfNull()).new(this, const$8 || (const$8 = dart.const(core$.Symbol.new('keys'))), null, null));
        this[_notifyValuesChanged]();
      }
      [_notifyValuesChanged]() {
        this.notifyChange(new (PropertyChangeRecordOfNull()).new(this, const$9 || (const$9 = dart.const(core$.Symbol.new('values'))), null, null));
      }
    }
    (ObservableMap.new = function() {
      this[_map] = new (LinkedMapOfK$V()).new();
      ObservableMap.__proto__.new.call(this);
    }).prototype = ObservableMap.prototype;
    (ObservableMap.linked = function() {
      this[_map] = new (LinkedMapOfK$V()).new();
      ObservableMap.__proto__.new.call(this);
    }).prototype = ObservableMap.prototype;
    (ObservableMap.sorted = function() {
      this[_map] = new (SplayTreeMapOfK$V()).new();
      ObservableMap.__proto__.new.call(this);
    }).prototype = ObservableMap.prototype;
    (ObservableMap.spy = function(other) {
      this[_map] = other;
      ObservableMap.__proto__.new.call(this);
    }).prototype = ObservableMap.prototype;
    ObservableMap.prototype[dart.isMap] = true;
    dart.addTypeTests(ObservableMap);
    ObservableMap.prototype[_is_ObservableMap_default] = true;
    ObservableMap[dart.implements] = () => [MapOfK$V()];
    dart.setMethodSignature(ObservableMap, () => ({
      __proto__: dart.getMethods(ObservableMap.__proto__),
      containsValue: dart.fnType(core$.bool, [core$.Object]),
      [$containsValue]: dart.fnType(core$.bool, [core$.Object]),
      containsKey: dart.fnType(core$.bool, [core$.Object]),
      [$containsKey]: dart.fnType(core$.bool, [core$.Object]),
      _get: dart.fnType(V, [core$.Object]),
      [$_get]: dart.fnType(V, [core$.Object]),
      _set: dart.fnType(dart.void, [core$.Object, core$.Object]),
      [$_set]: dart.fnType(dart.void, [core$.Object, core$.Object]),
      addAll: dart.fnType(dart.void, [core$.Object]),
      [$addAll]: dart.fnType(dart.void, [core$.Object]),
      putIfAbsent: dart.fnType(V, [core$.Object, core$.Object]),
      [$putIfAbsent]: dart.fnType(V, [core$.Object, core$.Object]),
      remove: dart.fnType(V, [core$.Object]),
      [$remove]: dart.fnType(V, [core$.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      toString: dart.fnType(core$.String, []),
      [$toString]: dart.fnType(core$.String, []),
      cast: dart.gFnType((K2, V2) => [src__observable_map.ObservableMap$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [src__observable_map.ObservableMap$(K2, V2), []]),
      retype: dart.gFnType((K2, V2) => [src__observable_map.ObservableMap$(K2, V2), []]),
      addEntries: dart.fnType(dart.void, [core$.Object]),
      [$addEntries]: dart.fnType(dart.void, [core$.Object]),
      map: dart.gFnType((K2, V2) => [core$.Map$(K2, V2), [dart.fnType(core$.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core$.Map$(K2, V2), [dart.fnType(core$.MapEntry$(K2, V2), [K, V])]]),
      update: dart.fnType(V, [core$.Object, core$.Object], {ifAbsent: core$.Object}),
      [$update]: dart.fnType(V, [core$.Object, core$.Object], {ifAbsent: core$.Object}),
      updateAll: dart.fnType(dart.void, [core$.Object]),
      [$updateAll]: dart.fnType(dart.void, [core$.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core$.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core$.bool, [K, V])]),
      [_notifyKeysValuesChanged]: dart.fnType(dart.void, []),
      [_notifyValuesChanged]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ObservableMap, () => ({
      __proto__: dart.getGetters(ObservableMap.__proto__),
      keys: core$.Iterable$(K),
      [$keys]: core$.Iterable$(K),
      values: core$.Iterable$(V),
      [$values]: core$.Iterable$(V),
      length: core$.int,
      [$length]: core$.int,
      isEmpty: core$.bool,
      [$isEmpty]: core$.bool,
      isNotEmpty: core$.bool,
      [$isNotEmpty]: core$.bool,
      entries: core$.Iterable$(core$.MapEntry$(K, V)),
      [$entries]: core$.Iterable$(core$.MapEntry$(K, V))
    }));
    dart.setFieldSignature(ObservableMap, () => ({
      __proto__: dart.getFields(ObservableMap.__proto__),
      [_map]: dart.finalFieldType(MapOfK$V())
    }));
    dart.defineExtensionMethods(ObservableMap, [
      'containsValue',
      'containsKey',
      '_get',
      '_set',
      'addAll',
      'putIfAbsent',
      'remove',
      'clear',
      'forEach',
      'toString',
      'cast',
      'addEntries',
      'map',
      'update',
      'updateAll',
      'removeWhere'
    ]);
    dart.defineExtensionAccessors(ObservableMap, [
      'keys',
      'values',
      'length',
      'isEmpty',
      'isNotEmpty',
      'entries'
    ]);
    return ObservableMap;
  });
  src__observable_map.ObservableMap = src__observable_map.ObservableMap$();
  dart.addTypeTests(src__observable_map.ObservableMap, _is_ObservableMap_default);
  dart.trackLibraries("packages/observable/observable.ddc", {
    "package:observable/observable.dart": observable,
    "package:observable/src/internal.dart": src__internal,
    "package:observable/src/records.dart": src__records,
    "package:observable/src/observable.dart": src__observable,
    "package:observable/src/change_notifier.dart": src__change_notifier,
    "package:observable/src/differs.dart": src__differs,
    "package:observable/src/observable_list.dart": src__observable_list,
    "package:observable/src/to_observable.dart": src__to_observable,
    "package:observable/src/observable_map.dart": src__observable_map
  }, '{"version":3,"sourceRoot":"","sources":["src/internal.dart","src/records.dart","src/records/list_change_record.dart","src/records/map_change_record.dart","src/records/property_change_record.dart","src/observable.dart","src/change_notifier.dart","src/differs.dart","src/differs/list_differ.dart","src/differs/map_differ.dart","src/observable_list.dart","src/to_observable.dart","src/observable_map.dart"],"names":[],"mappings":"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","file":"observable.ddc.js"}');
  // Exports:
  return {
    observable: observable,
    src__internal: src__internal,
    src__records: src__records,
    src__observable: src__observable,
    src__change_notifier: src__change_notifier,
    src__differs: src__differs,
    src__observable_list: src__observable_list,
    src__to_observable: src__to_observable,
    src__observable_map: src__observable_map
  };
});

//# sourceMappingURL=observable.ddc.js.map
