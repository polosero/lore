define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_router/src/constants', 'packages/angular/angular.template', 'packages/angular/src/core/change_detection/change_detection.template'], function(dart_sdk, router_outlet_directive, modules, directive_change_detector, constants, angular, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__router_outlet_directive$46template = router_outlet_directive.src__directives__router_outlet_directive$46template;
  const src__lifecycle$46template = router_outlet_directive.src__lifecycle$46template;
  const src__location$46template = router_outlet_directive.src__location$46template;
  const src__route_definition$46template = router_outlet_directive.src__route_definition$46template;
  const src__route_path$46template = router_outlet_directive.src__route_path$46template;
  const src__router__navigation_params$46template = router_outlet_directive.src__router__navigation_params$46template;
  const src__router__router$46template = router_outlet_directive.src__router__router$46template;
  const src__router__router_state$46template = router_outlet_directive.src__router__router_state$46template;
  const src__router_hook$46template = router_outlet_directive.src__router_hook$46template;
  const src__url$46template = router_outlet_directive.src__url$46template;
  const src__router__router_impl$46template = router_outlet_directive.src__router__router_impl$46template;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const src__directives__router_link_directive = constants.src__directives__router_link_directive;
  const angular$46template = angular.angular$46template;
  const src__runtime$46template = change_detection.src__runtime$46template;
  const _root = Object.create(null);
  const angular_router$46template = Object.create(_root);
  const src__directives__router_link_directive$46template = Object.create(_root);
  const src__directives__router_link_active_directive$46template = Object.create(_root);
  const src__constants$46template = Object.create(_root);
  dart.defineLazy(angular_router$46template, {
    /*angular_router$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  angular_router$46template.initReflector = function() {
    if (dart.test(angular_router$46template._visited)) {
      return;
    }
    angular_router$46template._visited = true;
    src__constants$46template.initReflector();
    src__directives__router_link_active_directive$46template.initReflector();
    src__directives__router_link_directive$46template.initReflector();
    src__directives__router_outlet_directive$46template.initReflector();
    src__lifecycle$46template.initReflector();
    src__location$46template.initReflector();
    src__route_definition$46template.initReflector();
    src__route_path$46template.initReflector();
    src__router__navigation_params$46template.initReflector();
    src__router__router$46template.initReflector();
    src__router__router_state$46template.initReflector();
    src__router_hook$46template.initReflector();
  };
  const _expr_0 = Symbol('_expr_0');
  src__directives__router_link_directive$46template.RouterLinkNgCd = class RouterLinkNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.visibleHref;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(el, "href", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__directives__router_link_directive$46template.RouterLinkNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    src__directives__router_link_directive$46template.RouterLinkNgCd.__proto__.new.call(this);
  }).prototype = src__directives__router_link_directive$46template.RouterLinkNgCd.prototype;
  dart.addTypeTests(src__directives__router_link_directive$46template.RouterLinkNgCd);
  const instance$ = Symbol("RouterLinkNgCd.instance");
  dart.setFieldSignature(src__directives__router_link_directive$46template.RouterLinkNgCd, () => ({
    __proto__: dart.getFields(src__directives__router_link_directive$46template.RouterLinkNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__router_link_directive.RouterLink),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__directives__router_link_directive$46template, {
    /*src__directives__router_link_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__router_link_directive$46template.initReflector = function() {
    if (dart.test(src__directives__router_link_directive$46template._visited)) {
      return;
    }
    src__directives__router_link_directive$46template._visited = true;
    src__location$46template.initReflector();
    src__router__navigation_params$46template.initReflector();
    src__router__router$46template.initReflector();
    src__url$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__directives__router_link_active_directive$46template, {
    /*src__directives__router_link_active_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__router_link_active_directive$46template.initReflector = function() {
    if (dart.test(src__directives__router_link_active_directive$46template._visited)) {
      return;
    }
    src__directives__router_link_active_directive$46template._visited = true;
    src__router__router$46template.initReflector();
    src__router__router_state$46template.initReflector();
    angular$46template.initReflector();
    src__runtime$46template.initReflector();
    src__directives__router_link_directive$46template.initReflector();
  };
  dart.defineLazy(src__constants$46template, {
    /*src__constants$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__constants$46template.initReflector = function() {
    if (dart.test(src__constants$46template._visited)) {
      return;
    }
    src__constants$46template._visited = true;
    src__directives__router_link_active_directive$46template.initReflector();
    src__directives__router_link_directive$46template.initReflector();
    src__directives__router_outlet_directive$46template.initReflector();
    src__location$46template.initReflector();
    angular$46template.initReflector();
    src__router__router$46template.initReflector();
    src__router__router_impl$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_router/angular_router.template.ddc", {
    "package:angular_router/angular_router.template.dart": angular_router$46template,
    "package:angular_router/src/directives/router_link_directive.template.dart": src__directives__router_link_directive$46template,
    "package:angular_router/src/directives/router_link_active_directive.template.dart": src__directives__router_link_active_directive$46template,
    "package:angular_router/src/constants.template.dart": src__constants$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_router.template.dart","src/directives/router_link_directive.template.dart","src/directives/router_link_active_directive.template.dart","src/constants.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;MAmBI,kCAAQ;YAAG;;;;;AAEb,kBAAI,kCAAQ,GAAE;AACZ;;AAEF,yCAAW;AAEX,IAAM,uCAAa;AACnB,IAAM,sEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,4CAAa;AACnB,IAAO,kDAAa;AACpB,IAAO,yCAAa;EACtB;;;ICpB2B;;;;;;sBAGF,IAAqB,EAAE,EAAkB;AAC9D,UAAM,YAAY,aAAQ,YAAY;AACtC,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,oBAAO,CAAC,EAAE,EAAE,QAAQ,SAAS;AAC7B,qBAAO,GAAG,SAAS;;IAEvB;;mFAPe,QAAa;IADxB,aAAO;IACS,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;MAU3B,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,sCAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,iCAAa;AACnB,IAAM,gCAAa;EACrB;;MC9BI,iEAAQ;YAAG;;;;;AAEb,kBAAI,iEAAQ,GAAE;AACZ;;AAEF,wEAAW;AAEX,IAAM,4CAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,+DAAa;EACrB;;MCVI,kCAAQ;YAAG;;;;;AAEb,kBAAI,kCAAQ,GAAE;AACZ;;AAEF,yCAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,iDAAa;EACrB","file":"angular_router.template.ddc.js"}');
  // Exports:
  return {
    angular_router$46template: angular_router$46template,
    src__directives__router_link_directive$46template: src__directives__router_link_directive$46template,
    src__directives__router_link_active_directive$46template: src__directives__router_link_active_directive$46template,
    src__constants$46template: src__constants$46template
  };
});

//# sourceMappingURL=angular_router.template.ddc.js.map
