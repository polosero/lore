define(['dart_sdk', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/browser/dom_service/dom_service'], function(dart_sdk, async_action, disposer, overlay_ref, deferred_content_aware, change_detection, dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const src__model__action__async_action_controller = async_action.src__model__action__async_action_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__laminate__overlay__overlay_state = overlay_ref.src__laminate__overlay__overlay_state;
  const src__laminate__overlay__overlay_ref = overlay_ref.src__laminate__overlay__overlay_ref;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const _root = Object.create(null);
  const laminate__components__modal__modal = Object.create(_root);
  const $length = dartx.length;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $isNotEmpty = dartx.isNotEmpty;
  const $remove = dartx.remove;
  const $add = dartx.add;
  const $toList = dartx.toList;
  const $reversed = dartx.reversed;
  let JSArrayOfModal = () => (JSArrayOfModal = dart.constFn(_interceptors.JSArray$(laminate__components__modal__modal.Modal)))();
  let ListOfModal = () => (ListOfModal = dart.constFn(core.List$(laminate__components__modal__modal.Modal)))();
  let StreamControllerOfAsyncAction = () => (StreamControllerOfAsyncAction = dart.constFn(async.StreamController$(src__model__action__async_action.AsyncAction)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let MouseEventTobool = () => (MouseEventTobool = dart.constFn(dart.fnType(core.bool, [html.MouseEvent])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOrOfbool = () => (FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))();
  let dynamicToFutureOrOfbool = () => (dynamicToFutureOrOfbool = dart.constFn(dart.fnType(FutureOrOfbool(), [dart.dynamic])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  const _stack = Symbol('_stack');
  laminate__components__modal__modal.GlobalModalStack = class GlobalModalStack extends core.Object {
    get length() {
      return this[_stack][$length];
    }
    onModalClosed(modal) {
      if (!dart.equals(this[_stack][$last], modal)) dart.assertFailed();
      if (dart.equals(this[_stack][$last], modal)) {
        this[_stack][$removeLast]();
        if (dart.test(this[_stack][$isNotEmpty])) {
          this[_stack][$last].hidden = false;
        }
      } else {
        this[_stack][$remove](modal);
      }
    }
    onModalOpened(modal) {
      if (dart.test(this[_stack][$isNotEmpty])) {
        this[_stack][$last].hidden = true;
      }
      this[_stack][$add](modal);
    }
    closeAll() {
      return async.async(dart.void, (function* closeAll() {
        for (let modal of this[_stack][$reversed][$toList]()) {
          yield modal.close();
        }
      }).bind(this));
    }
  };
  (laminate__components__modal__modal.GlobalModalStack.new = function() {
    this[_stack] = JSArrayOfModal().of([]);
  }).prototype = laminate__components__modal__modal.GlobalModalStack.prototype;
  dart.addTypeTests(laminate__components__modal__modal.GlobalModalStack);
  dart.setMethodSignature(laminate__components__modal__modal.GlobalModalStack, () => ({
    __proto__: dart.getMethods(laminate__components__modal__modal.GlobalModalStack.__proto__),
    onModalClosed: dart.fnType(dart.void, [laminate__components__modal__modal.Modal]),
    onModalOpened: dart.fnType(dart.void, [laminate__components__modal__modal.Modal]),
    closeAll: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(laminate__components__modal__modal.GlobalModalStack, () => ({
    __proto__: dart.getGetters(laminate__components__modal__modal.GlobalModalStack.__proto__),
    length: core.int
  }));
  dart.setFieldSignature(laminate__components__modal__modal.GlobalModalStack, () => ({
    __proto__: dart.getFields(laminate__components__modal__modal.GlobalModalStack.__proto__),
    [_stack]: dart.finalFieldType(ListOfModal())
  }));
  laminate__components__modal__modal.Modal = class Modal extends core.Object {};
  (laminate__components__modal__modal.Modal.new = function() {
  }).prototype = laminate__components__modal__modal.Modal.prototype;
  dart.addTypeTests(laminate__components__modal__modal.Modal);
  const _element = Symbol('_element');
  const _domService = Symbol('_domService');
  const _parentModal = Symbol('_parentModal');
  const _onOpen = Symbol('_onOpen');
  const _onClose = Symbol('_onClose');
  const _onVisibleChanged = Symbol('_onVisibleChanged');
  const _disposer = Symbol('_disposer');
  const _isDestroyed = Symbol('_isDestroyed');
  const _isHidden = Symbol('_isHidden');
  const _isVisible = Symbol('_isVisible');
  const _resolvedOverlayRef = Symbol('_resolvedOverlayRef');
  const _lastFocusedElement = Symbol('_lastFocusedElement');
  const _pendingOpen = Symbol('_pendingOpen');
  const _pendingClose = Symbol('_pendingClose');
  const _createdOverlayRef = Symbol('_createdOverlayRef');
  const _hideModalOverlay = Symbol('_hideModalOverlay');
  const _onOverlayVisibleChanged = Symbol('_onOverlayVisibleChanged');
  const _saveFocus = Symbol('_saveFocus');
  const _showModalOverlay = Symbol('_showModalOverlay');
  const _restoreFocus = Symbol('_restoreFocus');
  laminate__components__modal__modal.ModalComponent = class ModalComponent extends core.Object {
    get onOpen() {
      return this[_onOpen].stream;
    }
    get onClose() {
      return this[_onClose].stream;
    }
    get onVisibleChanged() {
      return this[_onVisibleChanged].stream;
    }
    get restoreFocus() {
      return this[restoreFocus];
    }
    set restoreFocus(value) {
      this[restoreFocus] = value;
    }
    set preventInteraction(preventInteraction) {
      this[_resolvedOverlayRef].state.captureEvents = preventInteraction !== false;
    }
    ngAfterViewInit() {
      let hostClassName = this[_element].className;
      this.resolvedOverlayRef.overlayElement.className = dart.notNull(this.resolvedOverlayRef.overlayElement.className) + (" " + dart.str(hostClassName));
    }
    ngOnDestroy() {
      if (dart.test(this.visible)) {
        this[_hideModalOverlay]();
      }
      this[_isDestroyed] = true;
      this[_disposer].dispose();
    }
    [_createdOverlayRef](overlayRef) {
      if (dart.test(this[_isDestroyed])) {
        overlayRef.dispose();
      } else {
        this[_resolvedOverlayRef] = overlayRef;
        this[_disposer].addDisposable(src__laminate__overlay__overlay_ref.OverlayRef, this[_resolvedOverlayRef]);
        this[_disposer].addStreamSubscription(core.bool, this[_resolvedOverlayRef].onVisibleChanged.listen(dart.bind(this, _onOverlayVisibleChanged)));
      }
    }
    [_onOverlayVisibleChanged](isVisible) {
      this[_isVisible] = isVisible;
      this[_onVisibleChanged].add(this[_isVisible]);
    }
    get shieldClick() {
      return this[_resolvedOverlayRef].onPanePressed.where(dart.fn(e => e.eventPhase === html.Event.AT_TARGET, MouseEventTobool()));
    }
    get contentVisible() {
      return this.onVisibleChanged;
    }
    get resolvedOverlayRef() {
      return this[_resolvedOverlayRef];
    }
    get uniquePaneId() {
      let t = this[_resolvedOverlayRef];
      return t == null ? null : t.uniqueId;
    }
    [_showModalOverlay](opts) {
      let temporary = opts && 'temporary' in opts ? opts.temporary : false;
      if (!dart.test(temporary)) {
        this[_saveFocus]();
        if (this[_stack] != null) {
          this[_stack].onModalOpened(this);
        } else if (this[_parentModal] != null) {
          this[_parentModal].hidden = true;
        }
      }
      this[_resolvedOverlayRef].setVisible(true);
    }
    [_hideModalOverlay](opts) {
      let temporary = opts && 'temporary' in opts ? opts.temporary : false;
      if (!dart.test(temporary)) {
        this[_restoreFocus]();
        if (this[_stack] != null) {
          this[_stack].onModalClosed(this);
        } else if (this[_parentModal] != null) {
          this[_parentModal].hidden = false;
        }
      }
      this[_resolvedOverlayRef].setVisible(false);
    }
    [_saveFocus]() {
      this[_lastFocusedElement] = dart.test(this.restoreFocus) ? html.document.activeElement : null;
    }
    [_restoreFocus]() {
      if (this[_lastFocusedElement] == null) return;
      if (this[_stack] != null && dart.notNull(this[_stack].length) > 1 || this[_parentModal] != null) return;
      let elementToFocus = this[_lastFocusedElement];
      this[_domService].scheduleWrite(dart.fn(() => {
        if (html.document.activeElement != null && (dart.test(this[_resolvedOverlayRef].overlayElement.contains(html.document.activeElement)) || dart.equals(html.document.activeElement, html.document.body))) {
          elementToFocus.focus();
        }
      }, VoidToNull()));
    }
    open() {
      if (this[_pendingOpen] == null) {
        let controller = new src__model__action__async_action_controller.AsyncActionController.new();
        controller.execute(dart.bind(this, _showModalOverlay));
        this[_pendingOpen] = controller.action.onDone.then(core.bool, dart.fn(completed => {
          this[_pendingOpen] = null;
          return FutureOrOfbool()._check(completed);
        }, dynamicToFutureOrOfbool()));
        this[_onOpen].add(controller.action);
      }
      return this[_pendingOpen];
    }
    close() {
      if (this[_pendingClose] == null) {
        let controller = new src__model__action__async_action_controller.AsyncActionController.new();
        controller.execute(dart.bind(this, _hideModalOverlay));
        this[_pendingClose] = controller.action.onDone.then(core.bool, dart.fn(completed => {
          this[_pendingClose] = null;
          return FutureOrOfbool()._check(completed);
        }, dynamicToFutureOrOfbool()));
        this[_onClose].add(controller.action);
      }
      return this[_pendingClose];
    }
    get visible() {
      return this[_isVisible];
    }
    set visible(visible) {
      if (this[_isVisible] == visible || dart.test(this[_isDestroyed])) return;
      if (visible === true) {
        this.open();
      } else {
        this.close();
      }
    }
    get hidden() {
      return this[_isHidden];
    }
    set hidden(hidden) {
      this[_isHidden] = hidden;
      if (dart.test(this[_isHidden])) {
        this[_hideModalOverlay]({temporary: true});
      } else {
        this[_showModalOverlay]({temporary: true});
      }
    }
  };
  (laminate__components__modal__modal.ModalComponent.new = function(overlayService, element, domService, parentModal, stack) {
    this[_onOpen] = StreamControllerOfAsyncAction().broadcast({sync: true});
    this[_onClose] = StreamControllerOfAsyncAction().broadcast({sync: true});
    this[_onVisibleChanged] = StreamControllerOfbool().broadcast({sync: true});
    this[_disposer] = new utils__disposer__disposer.Disposer.oneShot();
    this[_isDestroyed] = false;
    this[_isHidden] = false;
    this[_isVisible] = false;
    this[_resolvedOverlayRef] = null;
    this[_lastFocusedElement] = null;
    this[restoreFocus] = true;
    this[_pendingOpen] = null;
    this[_pendingClose] = null;
    this[_element] = element;
    this[_domService] = domService;
    this[_parentModal] = parentModal;
    this[_stack] = stack;
    this[_createdOverlayRef](overlayService.createOverlayRefSync(src__laminate__overlay__overlay_state.OverlayState.Dialog));
  }).prototype = laminate__components__modal__modal.ModalComponent.prototype;
  dart.addTypeTests(laminate__components__modal__modal.ModalComponent);
  const restoreFocus = Symbol("ModalComponent.restoreFocus");
  laminate__components__modal__modal.ModalComponent[dart.implements] = () => [content__deferred_content_aware.DeferredContentAware, laminate__components__modal__modal.Modal, src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(laminate__components__modal__modal.ModalComponent, () => ({
    __proto__: dart.getMethods(laminate__components__modal__modal.ModalComponent.__proto__),
    ngAfterViewInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_createdOverlayRef]: dart.fnType(dart.void, [src__laminate__overlay__overlay_ref.OverlayRef]),
    [_onOverlayVisibleChanged]: dart.fnType(dart.void, [core.bool]),
    [_showModalOverlay]: dart.fnType(dart.void, [], {temporary: core.bool}),
    [_hideModalOverlay]: dart.fnType(dart.void, [], {temporary: core.bool}),
    [_saveFocus]: dart.fnType(dart.void, []),
    [_restoreFocus]: dart.fnType(dart.void, []),
    open: dart.fnType(async.Future$(core.bool), []),
    close: dart.fnType(async.Future$(core.bool), [])
  }));
  dart.setGetterSignature(laminate__components__modal__modal.ModalComponent, () => ({
    __proto__: dart.getGetters(laminate__components__modal__modal.ModalComponent.__proto__),
    onOpen: async.Stream$(src__model__action__async_action.AsyncAction),
    onClose: async.Stream$(src__model__action__async_action.AsyncAction),
    onVisibleChanged: async.Stream$(core.bool),
    shieldClick: async.Stream$(dart.void),
    contentVisible: async.Stream$(core.bool),
    resolvedOverlayRef: src__laminate__overlay__overlay_ref.OverlayRef,
    uniquePaneId: core.String,
    visible: core.bool,
    hidden: core.bool
  }));
  dart.setSetterSignature(laminate__components__modal__modal.ModalComponent, () => ({
    __proto__: dart.getSetters(laminate__components__modal__modal.ModalComponent.__proto__),
    preventInteraction: core.bool,
    visible: core.bool,
    hidden: core.bool
  }));
  dart.setFieldSignature(laminate__components__modal__modal.ModalComponent, () => ({
    __proto__: dart.getFields(laminate__components__modal__modal.ModalComponent.__proto__),
    [_element]: dart.finalFieldType(html.Element),
    [_parentModal]: dart.finalFieldType(laminate__components__modal__modal.Modal),
    [_stack]: dart.finalFieldType(laminate__components__modal__modal.GlobalModalStack),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_onOpen]: dart.finalFieldType(StreamControllerOfAsyncAction()),
    [_onClose]: dart.finalFieldType(StreamControllerOfAsyncAction()),
    [_onVisibleChanged]: dart.finalFieldType(StreamControllerOfbool()),
    [_disposer]: dart.finalFieldType(utils__disposer__disposer.Disposer),
    [_isDestroyed]: dart.fieldType(core.bool),
    [_isHidden]: dart.fieldType(core.bool),
    [_isVisible]: dart.fieldType(core.bool),
    [_resolvedOverlayRef]: dart.fieldType(src__laminate__overlay__overlay_ref.OverlayRef),
    [_lastFocusedElement]: dart.fieldType(html.Element),
    restoreFocus: dart.fieldType(core.bool),
    [_pendingOpen]: dart.fieldType(FutureOfbool()),
    [_pendingClose]: dart.fieldType(FutureOfbool())
  }));
  dart.trackLibraries("packages/angular_components/laminate/components/modal/modal.ddc", {
    "package:angular_components/laminate/components/modal/modal.dart": laminate__components__modal__modal
  }, '{"version":3,"sourceRoot":"","sources":["modal.dart"],"names":[],"mappings":"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","file":"modal.ddc.js"}');
  // Exports:
  return {
    laminate__components__modal__modal: laminate__components__modal__modal
  };
});

//# sourceMappingURL=modal.ddc.js.map
