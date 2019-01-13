define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/dom_iterator/dom_iterator', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/focus/focus'], function(dart_sdk, disposer, dom_iterator, change_detection, focus) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__browser__dom_iterator__dom_iterator = dom_iterator.utils__browser__dom_iterator__dom_iterator;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const focus__focus = focus.focus__focus;
  const _root = Object.create(null);
  const focus__focus_trap = Object.create(_root);
  const $offsetWidth = dartx.offsetWidth;
  const $offsetHeight = dartx.offsetHeight;
  const _disposer = Symbol('_disposer');
  const _autoFocusDirective = Symbol('_autoFocusDirective');
  const _content = Symbol('_content');
  const _element = Symbol('_element');
  const _focusFirstInOrder = Symbol('_focusFirstInOrder');
  const _visible = Symbol('_visible');
  const _focusDefault = Symbol('_focusDefault');
  focus__focus_trap.FocusTrapComponent = class FocusTrapComponent extends core.Object {
    set autoFocus(value) {
      this[_autoFocusDirective] = value;
    }
    set content(value) {
      this[_content] = value;
      if (this[_content] != null && this[_autoFocusDirective] == null) {
        this[_content][_element].focus();
      }
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    focusFirst() {
      this[_focusFirstInOrder](new utils__browser__dom_iterator__dom_iterator.DomTreeIterator.new(this[_content].element, {scope: this[_content].element}));
    }
    focusLast() {
      this[_focusFirstInOrder](new utils__browser__dom_iterator__dom_iterator.DomTreeIterator.new(this[_content].element, {scope: this[_content].element, reverse: true, wraps: true}));
    }
    [_focusFirstInOrder](iterator) {
      while (dart.test(iterator.moveNext())) {
        if (iterator.current.tabIndex === 0 && dart.test(this[_visible](iterator.current))) {
          iterator.current.focus();
          return;
        }
      }
      this[_focusDefault]();
    }
    [_visible](element) {
      return element[$offsetWidth] !== 0 && element[$offsetHeight] !== 0;
    }
    [_focusDefault]() {
      if (this[_autoFocusDirective] != null) {
        this[_autoFocusDirective].focus();
      } else if (this[_content] != null) {
        this[_content].element.focus();
      }
    }
  };
  (focus__focus_trap.FocusTrapComponent.new = function() {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_autoFocusDirective] = null;
    this[_content] = null;
  }).prototype = focus__focus_trap.FocusTrapComponent.prototype;
  dart.addTypeTests(focus__focus_trap.FocusTrapComponent);
  focus__focus_trap.FocusTrapComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(focus__focus_trap.FocusTrapComponent, () => ({
    __proto__: dart.getMethods(focus__focus_trap.FocusTrapComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    focusFirst: dart.fnType(dart.void, []),
    focusLast: dart.fnType(dart.void, []),
    [_focusFirstInOrder]: dart.fnType(dart.void, [core.Iterator$(html.Element)]),
    [_visible]: dart.fnType(core.bool, [html.Element]),
    [_focusDefault]: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(focus__focus_trap.FocusTrapComponent, () => ({
    __proto__: dart.getSetters(focus__focus_trap.FocusTrapComponent.__proto__),
    autoFocus: focus__focus.AutoFocusDirective,
    content: focus__focus_trap.FocusContentWrapper
  }));
  dart.setFieldSignature(focus__focus_trap.FocusTrapComponent, () => ({
    __proto__: dart.getFields(focus__focus_trap.FocusTrapComponent.__proto__),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_autoFocusDirective]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_content]: dart.fieldType(focus__focus_trap.FocusContentWrapper)
  }));
  focus__focus_trap.FocusContentWrapper = class FocusContentWrapper extends focus__focus.FocusableDirective {
    get element() {
      return this[_element];
    }
  };
  (focus__focus_trap.FocusContentWrapper.new = function(element) {
    this[_element] = element;
    focus__focus_trap.FocusContentWrapper.__proto__.new.call(this, element);
  }).prototype = focus__focus_trap.FocusContentWrapper.prototype;
  dart.addTypeTests(focus__focus_trap.FocusContentWrapper);
  dart.setGetterSignature(focus__focus_trap.FocusContentWrapper, () => ({
    __proto__: dart.getGetters(focus__focus_trap.FocusContentWrapper.__proto__),
    element: html.Element
  }));
  dart.setFieldSignature(focus__focus_trap.FocusContentWrapper, () => ({
    __proto__: dart.getFields(focus__focus_trap.FocusContentWrapper.__proto__),
    [_element]: dart.fieldType(html.Element)
  }));
  dart.trackLibraries("packages/angular_components/focus/focus_trap.ddc", {
    "package:angular_components/focus/focus_trap.dart": focus__focus_trap
  }, '{"version":3,"sourceRoot":"","sources":["focus_trap.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;kBA0BgB,KAAwB;AACpC,+BAAmB,GAAG,KAAK;IAC7B;gBAIY,KAAyB;AACnC,oBAAQ,GAAG,KAAK;AAChB,UAAI,cAAQ,IAAI,QAAQ,yBAAmB,IAAI,MAAM;AACnD,sBAAQ,UAAS,MAAM;;IAE3B;;AAIE,qBAAS,QAAQ;IACnB;;AAGE,8BAAkB,KACd,8DAAe,CAAC,cAAQ,QAAQ,UAAS,cAAQ,QAAQ;IAC/D;;AAGE,8BAAkB,KAAC,8DAAe,CAAC,cAAQ,QAAQ,UACxC,cAAQ,QAAQ,WAAW,aAAa;IACrD;yBAEwB,QAA0B;AAChD,uBAAO,QAAQ,SAAS,KAAI;AAC1B,YAAI,QAAQ,QAAQ,SAAS,KAAI,eAAK,cAAQ,CAAC,QAAQ,QAAQ,IAAG;AAChE,kBAAQ,QAAQ,MAAM;AACtB;;;AAGJ,yBAAa;IACf;eAEc,OAAe;AAC3B,YAAQ,AAAyB,QAAlB,cAAY,KAAI,KAAK,OAAO,eAAa,KAAI;IAC9D;;AAGE,UAAI,yBAAmB,IAAI,MAAM;AAC/B,iCAAmB,MAAM;YACpB,KAAI,cAAQ,IAAI,MAAM;AAC3B,sBAAQ,QAAQ,MAAM;;IAE1B;;;IApDM,eAAS,OAAG,0CAAgB;IAEf,yBAAmB;IAMlB,cAAQ;EA6C9B;;;;;;;;;;;;;;;;;;;;;;;;;YAWyB,eAAQ;;;wDAJX,OAAmB;IACjC,cAAQ,GAAG,OAAO;AAClB,mEAAM,OAAO;EAAC","file":"focus_trap.ddc.js"}');
  // Exports:
  return {
    focus__focus_trap: focus__focus_trap
  };
});

//# sourceMappingURL=focus_trap.ddc.js.map
