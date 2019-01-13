define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal'], function(dart_sdk, disposer, async_action, keyboard_handler_mixin, change_detection, dom_service, modal) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const _root = Object.create(null);
  const material_dialog__material_dialog = Object.create(_root);
  const $onScroll = dartx.onScroll;
  const $scrollTop = dartx.scrollTop;
  const $scrollHeight = dartx.scrollHeight;
  const $onResize = dartx.onResize;
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let AsyncActionToNull = () => (AsyncActionToNull = dart.constFn(dart.fnType(core.Null, [src__model__action__async_action.AsyncAction])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let KeyboardEventTovoid = () => (KeyboardEventTovoid = dart.constFn(dart.fnType(dart.void, [html.KeyboardEvent])))();
  const _rootElement = Symbol('_rootElement');
  const _domService = Symbol('_domService');
  const _changeDetector = Symbol('_changeDetector');
  const _modal = Symbol('_modal');
  const _disposer = Symbol('_disposer');
  const _mainElement = Symbol('_mainElement');
  const _shouldShowHeader = Symbol('_shouldShowHeader');
  const _shouldShowFooter = Symbol('_shouldShowFooter');
  const _isInFullscreenModeStreamController = Symbol('_isInFullscreenModeStreamController');
  const _isInFullscreenMode = Symbol('_isInFullscreenMode');
  const _shouldListenForFullscreenChanges = Symbol('_shouldListenForFullscreenChanges');
  const _defaultEscapeHandler = Symbol('_defaultEscapeHandler');
  const _setHeaderFooterScrollBorder = Symbol('_setHeaderFooterScrollBorder');
  const _listenForFullscreenChanges = Symbol('_listenForFullscreenChanges');
  const _updateForFullscreenChangesInsideDomReadLoop = Symbol('_updateForFullscreenChangesInsideDomReadLoop');
  const Object_KeyboardHandlerMixin$ = class Object_KeyboardHandlerMixin extends core.Object {};
  (Object_KeyboardHandlerMixin$.new = function() {
    model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
  }).prototype = Object_KeyboardHandlerMixin$.prototype;
  dart.applyMixin(Object_KeyboardHandlerMixin$, model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
  material_dialog__material_dialog.MaterialDialogComponent = class MaterialDialogComponent extends Object_KeyboardHandlerMixin$ {
    get shouldShowTopScrollStroke() {
      return this[shouldShowTopScrollStroke];
    }
    set shouldShowTopScrollStroke(value) {
      this[shouldShowTopScrollStroke] = value;
    }
    get shouldShowBottomScrollStroke() {
      return this[shouldShowBottomScrollStroke];
    }
    set shouldShowBottomScrollStroke(value) {
      this[shouldShowBottomScrollStroke] = value;
    }
    set main(element) {
      this[_mainElement] = element;
      this[_disposer].addStreamSubscription(html.Event, element[$onScroll].listen(dart.fn(_ => {
        this[_setHeaderFooterScrollBorder]();
      }, EventToNull())));
      if (this[_modal] == null) return;
      this[_disposer].addStreamSubscription(src__model__action__async_action.AsyncAction, this[_modal].onOpen.listen(dart.fn(_ => {
        this[_setHeaderFooterScrollBorder]();
      }, AsyncActionToNull())));
    }
    get escapeHandler() {
      return this[escapeHandler];
    }
    set escapeHandler(value) {
      this[escapeHandler] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    set hideHeader(shouldHideHeader) {
      return this[_shouldShowHeader] = !dart.test(shouldHideHeader);
    }
    set hideFooter(shouldHideFooter) {
      return this[_shouldShowFooter] = !dart.test(shouldHideFooter);
    }
    get shouldShowHeader() {
      return this[_shouldShowHeader];
    }
    get shouldShowFooter() {
      return this[_shouldShowFooter];
    }
    get shouldShowScrollStrokes() {
      return this[shouldShowScrollStrokes];
    }
    set shouldShowScrollStrokes(value) {
      this[shouldShowScrollStrokes] = value;
    }
    [_setHeaderFooterScrollBorder]() {
      if (!dart.test(this.shouldShowScrollStrokes)) return;
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleRead(dart.fn(() => {
        let shouldShowTopScrollStroke = dart.notNull(this[_mainElement][$scrollTop]) > 0 && this.error == null;
        let shouldShowBottomScrollStroke = dart.notNull(this[_mainElement].clientHeight) < dart.notNull(this[_mainElement][$scrollHeight]) && dart.notNull(this[_mainElement][$scrollTop]) < dart.notNull(this[_mainElement][$scrollHeight]) - dart.notNull(this[_mainElement].clientHeight);
        if (shouldShowTopScrollStroke !== this.shouldShowTopScrollStroke || shouldShowBottomScrollStroke !== this.shouldShowBottomScrollStroke) {
          this.shouldShowTopScrollStroke = shouldShowTopScrollStroke;
          this.shouldShowBottomScrollStroke = shouldShowBottomScrollStroke;
          this[_changeDetector].markForCheck();
          this[_changeDetector].detectChanges();
        }
      }, VoidToNull())));
    }
    set shouldListenForFullscreenChanges(shouldListenForFullscreenChanges) {
      if (!dart.test(shouldListenForFullscreenChanges)) return;
      if (dart.test(this[_shouldListenForFullscreenChanges])) return;
      this[_shouldListenForFullscreenChanges] = shouldListenForFullscreenChanges;
      this[_disposer].addStreamSubscription(html.Event, html.window[$onResize].listen(dart.fn(_ => {
        this[_listenForFullscreenChanges]();
      }, EventToNull())));
    }
    get isInFullscreenMode() {
      return this[_isInFullscreenModeStreamController].stream;
    }
    [_listenForFullscreenChanges]() {
      if (!dart.test(this[_shouldListenForFullscreenChanges])) return;
      this[_disposer].addDisposable(utils__disposer__disposer.Disposable, this[_domService].scheduleRead(dart.bind(this, _updateForFullscreenChangesInsideDomReadLoop)));
    }
    [_updateForFullscreenChangesInsideDomReadLoop]() {
      let isInFullscreenMode = dart.notNull(html.document.body.clientWidth) <= dart.notNull(this[_rootElement].clientWidth) && dart.notNull(html.document.body.clientHeight) <= dart.notNull(this[_rootElement].clientHeight);
      if (this[_isInFullscreenMode] !== isInFullscreenMode) {
        this[_isInFullscreenMode] = isInFullscreenMode;
        this[_isInFullscreenModeStreamController].add(isInFullscreenMode);
      }
    }
    handleEscapeKey(event) {
      if (this.escapeHandler != null) {
        this.escapeHandler(event);
      }
    }
    [_defaultEscapeHandler](event) {
      if (this[_modal] != null) {
        event.preventDefault();
        this[_modal].close();
      }
    }
    ngAfterContentChecked() {
      if (dart.test(this[_shouldListenForFullscreenChanges])) {
        this[_updateForFullscreenChangesInsideDomReadLoop]();
      }
      this[_setHeaderFooterScrollBorder]();
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (material_dialog__material_dialog.MaterialDialogComponent.new = function(rootElement, domService, changeDetector, modal) {
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_mainElement] = null;
    this[_shouldShowHeader] = true;
    this[_shouldShowFooter] = true;
    this[shouldShowTopScrollStroke] = false;
    this[shouldShowBottomScrollStroke] = false;
    this[_isInFullscreenModeStreamController] = StreamControllerOfbool().new();
    this[_isInFullscreenMode] = null;
    this[_shouldListenForFullscreenChanges] = false;
    this[escapeHandler] = null;
    this[error] = null;
    this[shouldShowScrollStrokes] = true;
    this[_rootElement] = rootElement;
    this[_domService] = domService;
    this[_changeDetector] = changeDetector;
    this[_modal] = modal;
    material_dialog__material_dialog.MaterialDialogComponent.__proto__.new.call(this);
    this.escapeHandler = dart.bind(this, _defaultEscapeHandler);
  }).prototype = material_dialog__material_dialog.MaterialDialogComponent.prototype;
  dart.addTypeTests(material_dialog__material_dialog.MaterialDialogComponent);
  const shouldShowTopScrollStroke = Symbol("MaterialDialogComponent.shouldShowTopScrollStroke");
  const shouldShowBottomScrollStroke = Symbol("MaterialDialogComponent.shouldShowBottomScrollStroke");
  const escapeHandler = Symbol("MaterialDialogComponent.escapeHandler");
  const error = Symbol("MaterialDialogComponent.error");
  const shouldShowScrollStrokes = Symbol("MaterialDialogComponent.shouldShowScrollStrokes");
  material_dialog__material_dialog.MaterialDialogComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterContentChecked, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_dialog__material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getMethods(material_dialog__material_dialog.MaterialDialogComponent.__proto__),
    [_setHeaderFooterScrollBorder]: dart.fnType(dart.void, []),
    [_listenForFullscreenChanges]: dart.fnType(dart.void, []),
    [_updateForFullscreenChangesInsideDomReadLoop]: dart.fnType(dart.void, []),
    [_defaultEscapeHandler]: dart.fnType(dart.void, [html.KeyboardEvent]),
    ngAfterContentChecked: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_dialog__material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getGetters(material_dialog__material_dialog.MaterialDialogComponent.__proto__),
    shouldShowHeader: core.bool,
    shouldShowFooter: core.bool,
    isInFullscreenMode: async.Stream$(core.bool)
  }));
  dart.setSetterSignature(material_dialog__material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getSetters(material_dialog__material_dialog.MaterialDialogComponent.__proto__),
    main: html.HtmlElement,
    hideHeader: core.bool,
    hideFooter: core.bool,
    shouldListenForFullscreenChanges: core.bool
  }));
  dart.setFieldSignature(material_dialog__material_dialog.MaterialDialogComponent, () => ({
    __proto__: dart.getFields(material_dialog__material_dialog.MaterialDialogComponent.__proto__),
    [_rootElement]: dart.finalFieldType(html.HtmlElement),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    [_modal]: dart.finalFieldType(laminate__components__modal__modal.ModalComponent),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_mainElement]: dart.fieldType(html.HtmlElement),
    [_shouldShowHeader]: dart.fieldType(core.bool),
    [_shouldShowFooter]: dart.fieldType(core.bool),
    shouldShowTopScrollStroke: dart.fieldType(core.bool),
    shouldShowBottomScrollStroke: dart.fieldType(core.bool),
    [_isInFullscreenModeStreamController]: dart.finalFieldType(StreamControllerOfbool()),
    [_isInFullscreenMode]: dart.fieldType(core.bool),
    [_shouldListenForFullscreenChanges]: dart.fieldType(core.bool),
    escapeHandler: dart.fieldType(KeyboardEventTovoid()),
    error: dart.fieldType(core.String),
    shouldShowScrollStrokes: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_components/material_dialog/material_dialog.ddc", {
    "package:angular_components/material_dialog/material_dialog.dart": material_dialog__material_dialog
  }, '{"version":3,"sourceRoot":"","sources":["material_dialog.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6CO;;;;;;IACA;;;;;;aAYI,OAAmB;AAC1B,wBAAY,GAAG,OAAO;AACtB,qBAAS,sBAAsB,aAAC,OAAO,WAAS,OAAO,CAAC,QAAC,CAAC;AACxD,0CAA4B;;AAE9B,UAAI,YAAM,IAAI,MAAM;AACpB,qBAAS,sBAAsB,+CAAC,YAAM,OAAO,OAAO,CAAC,QAAC,CAAC;AACrD,0CAA4B;;IAEhC;IAKqB;;;;;;IAId;;;;;;mBAIQ,gBAAqB;YAChC,wBAAiB,GAAG,WAAC,gBAAgB;;mBAI1B,gBAAqB;YAChC,wBAAiB,GAAG,WAAC,gBAAgB;;;YAEZ,wBAAiB;;;YAEjB,wBAAiB;;IAMzC;;;;;;;AAGH,qBAAK,4BAAuB,GAAE;AAC9B,qBAAS,cAAc,uCAAC,iBAAW,aAAa,CAAC;AAC/C,YAAI,4BACuB,AAAI,aAA3B,kBAAY,YAAU,IAAG,KAAK,UAAK,IAAI;AAC3C,YAAI,+BAC0B,AAA4B,aAAtD,kBAAY,aAAa,iBAAG,kBAAY,eAAa,KAC1B,aAAvB,kBAAY,YAAU,IACQ,aAA1B,kBAAY,eAAa,iBAAG,kBAAY,aAAa;AACjE,YAAI,yBAAyB,KAAI,8BAA8B,IAC3D,4BAA4B,KAAI,iCAAiC,EAAE;AACrE,wCAA8B,GAAG,yBAAyB;AAC1D,2CAAiC,GAAG,4BAA4B;AAChE,UACE,AAAE,kCAAY;UAGd,AAAE,mCAAa;;;IAGvB;yCAKqC,gCAAqC;AAExE,qBAAK,gCAAgC,GAAE;AAIvC,oBAAI,uCAAiC,GAAE;AAEvC,6CAAiC,GAAG,gCAAgC;AACpE,qBAAS,sBAAsB,aAAC,WAAM,WAAS,OAAO,CAAC,QAAC,CAAC;AACvD,yCAA2B;;IAE/B;;YAKI,0CAAmC,OAAO;;;AAG5C,qBAAK,uCAAiC,GAAE;AACxC,qBAAS,cAAc,uCACnB,iBAAW,aAAa,CAAC,6DAA4C;IAC3E;;AAGE,UAAM,qBACwB,AAA4B,aAAtD,aAAQ,KAAK,YAAY,kBAAI,kBAAY,YAAY,KACtB,aAA3B,aAAQ,KAAK,aAAa,kBAAI,kBAAY,aAAa;AAC/D,UAAI,yBAAmB,KAAI,kBAAkB,EAAE;AAC7C,iCAAmB,GAAG,kBAAkB;AACxC,iDAAmC,IAAI,CAAC,kBAAkB;;IAE9D;oBAGqB,KAAmB;AACtC,UAAI,kBAAa,IAAI,MAAM;AACzB,0BAAa,CAAC,KAAK;;IAEvB;4BAE2B,KAAmB;AAC5C,UAAI,YAAM,IAAI,MAAM;AAClB,aAAK,eAAe;AACpB,oBAAM,MAAM;;IAEhB;;AAIE,oBAAI,uCAAiC,GAAE;AACrC,0DAA4C;;AAK9C,wCAA4B;IAC9B;;AAIE,qBAAS,QAAQ;IACnB;;;IAlJM,eAAS,OAAG,0CAAgB;IAEtB,kBAAY;IACnB,uBAAiB,GAAG;IACpB,uBAAiB,GAAG;IACpB,+BAAyB,GAAG;IAC5B,kCAA4B,GAAG;IAE9B,yCAAmC,GAAG,4BAAsB;IAC7D,yBAAmB;IACnB,uCAAiC,GAAG;IAsBpB,mBAAa;IAI3B,WAAK;IAoBP,6BAAuB,GAAG;IA5CF,kBAAY;IAAO,iBAAW;IAClD,qBAAe;IAAmB,YAAM;;AAC/C,sBAAa,GAAG,sCAAqB;EACvC","file":"material_dialog.ddc.js"}');
  // Exports:
  return {
    material_dialog__material_dialog: material_dialog__material_dialog
  };
});

//# sourceMappingURL=material_dialog.ddc.js.map
