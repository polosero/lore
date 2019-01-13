define(['dart_sdk', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/focus/focus', 'packages/angular_components/mixins/has_tab_index', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/interfaces/has_disabled'], function(dart_sdk, events, focus, has_tab_index, change_detection, has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__browser__events__events = events.utils__browser__events__events;
  const focus__focus = focus.focus__focus;
  const mixins__has_tab_index = has_tab_index.mixins__has_tab_index;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const _root = Object.create(null);
  const button_decorator__button_decorator = Object.create(_root);
  let StreamControllerOfUIEvent = () => (StreamControllerOfUIEvent = dart.constFn(async.StreamController$(html.UIEvent)))();
  const _role = Symbol('_role');
  const _trigger = Symbol('_trigger');
  const _hostTabIndex = Symbol('_hostTabIndex');
  const _ariaRole = Symbol('_ariaRole');
  const RootFocusable_HasTabIndex$ = class RootFocusable_HasTabIndex extends focus__focus.RootFocusable {};
  (RootFocusable_HasTabIndex$.new = function(_root) {
    mixins__has_tab_index.HasTabIndex.new.call(this);
    RootFocusable_HasTabIndex$.__proto__.new.call(this, _root);
  }).prototype = RootFocusable_HasTabIndex$.prototype;
  dart.applyMixin(RootFocusable_HasTabIndex$, mixins__has_tab_index.HasTabIndex);
  button_decorator__button_decorator.ButtonDirective = class ButtonDirective extends RootFocusable_HasTabIndex$ {
    get trigger() {
      return this[_trigger].stream;
    }
    set role(value) {
      if (!(this.ariaRole == null)) dart.assertFailed("Role can only be set before initialization.");
      this[_role] = value;
    }
    get ariaRole() {
      return this[_ariaRole];
    }
    ngOnInit() {
      let l = this[_role];
      this[_ariaRole] = l != null ? l : "button";
    }
    get disabledStr() {
      return dart.str(this.disabled);
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get tabbable() {
      return this[tabbable];
    }
    set tabbable(value) {
      this[tabbable] = value;
    }
    get hostTabIndex() {
      return dart.test(this.tabbable) && !dart.test(this.disabled) ? this[_hostTabIndex] : "-1";
    }
    set tabindex(value) {
      this[_hostTabIndex] = value;
    }
    handleClick(mouseEvent) {
      if (dart.test(this.disabled)) return;
      this[_trigger].add(mouseEvent);
    }
    handleKeyPress(keyboardEvent) {
      if (dart.test(this.disabled)) return;
      let keyCode = keyboardEvent.keyCode;
      if (keyCode === html.KeyCode.ENTER || dart.test(utils__browser__events__events.isSpaceKey(keyboardEvent))) {
        this[_trigger].add(keyboardEvent);
        keyboardEvent.preventDefault();
      }
    }
  };
  (button_decorator__button_decorator.ButtonDirective.new = function(element, role) {
    this[_trigger] = StreamControllerOfUIEvent().broadcast({sync: true});
    this[_hostTabIndex] = null;
    this[_ariaRole] = null;
    this[disabled] = false;
    this[tabbable] = true;
    this[_role] = role;
    button_decorator__button_decorator.ButtonDirective.__proto__.new.call(this, element);
  }).prototype = button_decorator__button_decorator.ButtonDirective.prototype;
  dart.addTypeTests(button_decorator__button_decorator.ButtonDirective);
  const disabled = Symbol("ButtonDirective.disabled");
  const tabbable = Symbol("ButtonDirective.tabbable");
  button_decorator__button_decorator.ButtonDirective[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, interfaces__has_disabled.HasDisabled];
  dart.setMethodSignature(button_decorator__button_decorator.ButtonDirective, () => ({
    __proto__: dart.getMethods(button_decorator__button_decorator.ButtonDirective.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, [html.MouseEvent]),
    handleKeyPress: dart.fnType(dart.void, [html.KeyboardEvent])
  }));
  dart.setGetterSignature(button_decorator__button_decorator.ButtonDirective, () => ({
    __proto__: dart.getGetters(button_decorator__button_decorator.ButtonDirective.__proto__),
    trigger: async.Stream$(html.UIEvent),
    ariaRole: core.String,
    disabledStr: core.String,
    hostTabIndex: core.String
  }));
  dart.setSetterSignature(button_decorator__button_decorator.ButtonDirective, () => ({
    __proto__: dart.getSetters(button_decorator__button_decorator.ButtonDirective.__proto__),
    role: core.String,
    tabindex: core.String
  }));
  dart.setFieldSignature(button_decorator__button_decorator.ButtonDirective, () => ({
    __proto__: dart.getFields(button_decorator__button_decorator.ButtonDirective.__proto__),
    [_trigger]: dart.finalFieldType(StreamControllerOfUIEvent()),
    [_hostTabIndex]: dart.fieldType(core.String),
    [_role]: dart.fieldType(core.String),
    [_ariaRole]: dart.fieldType(core.String),
    disabled: dart.fieldType(core.bool),
    tabbable: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/button_decorator/button_decorator.ddc", {
    "package:angular_components/button_decorator/button_decorator.dart": button_decorator__button_decorator
  }, '{"version":3,"sourceRoot":"","sources":["button_decorator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;YA+BiC,eAAQ,OAAO;;aAcrC,KAAY;AACnB,YAAO,aAAQ,IAAI,yBAAM;AACzB,iBAAK,GAAG,KAAK;IACf;;YAGuB,gBAAS;;;AAI9B,cAAY,WAAK;qBAAR,mBAAY;IACvB;;YAI0B,UAAE,aAAQ;IAAC;IAKhC;;;;;;IAIA;;;;;;;uBAEsB,aAAQ,gBAAK,aAAQ,IAAG,mBAAa,GAAG;IAAI;iBAM1D,KAAY;AACvB,yBAAa,GAAG,KAAK;IACvB;gBAIiB,UAAqB;AACpC,oBAAI,aAAQ,GAAE;AACd,oBAAQ,IAAI,CAAC,UAAU;IACzB;mBAIoB,aAA2B;AAC7C,oBAAI,aAAQ,GAAE;AACd,UAAI,UAAU,aAAa,QAAQ;AACnC,UAAI,OAAO,KAAI,YAAO,MAAM,cAAI,yCAAU,CAAC,aAAa,IAAG;AACzD,sBAAQ,IAAI,CAAC,aAAa;AAE1B,qBAAa,eAAe;;IAEhC;;qEA3DgB,OAAe,EAAE,IAA8B;IANzD,cAAQ,GAAG,qCAAmC,QAAO;IAEpD,mBAAa;IAEb,eAAS;IA4BX,cAAQ,GAAG;IAIX,cAAQ,GAAG;IA7BV,WAAK,GAAG,IAAI;AACZ,gFAAM,OAAO;EAAC","file":"button_decorator.ddc.js"}');
  // Exports:
  return {
    button_decorator__button_decorator: button_decorator__button_decorator
  };
});

//# sourceMappingURL=button_decorator.ddc.js.map
