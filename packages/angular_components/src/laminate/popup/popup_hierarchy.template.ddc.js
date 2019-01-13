define(['dart_sdk', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_components/laminate/overlay/constants.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/src/laminate/popup/dom_popup_source.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/angular/reference/reference.template'], function(dart_sdk, popup_hierarchy, change_detection, angular, constants, events, alignment, dom_popup_source, focus_interface, properties, reference) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__di__reflector = change_detection.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const laminate__overlay__constants$46template = constants.laminate__overlay__constants$46template;
  const utils__browser__events__events$46template = events.utils__browser__events__events$46template;
  const laminate__enums__alignment$46template = alignment.laminate__enums__alignment$46template;
  const src__laminate__popup__popup_source$46template = dom_popup_source.src__laminate__popup__popup_source$46template;
  const src__laminate__popup__dom_popup_source$46template = dom_popup_source.src__laminate__popup__dom_popup_source$46template;
  const focus__focus_interface$46template = focus_interface.focus__focus_interface$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__angular__reference__reference$46template = reference.utils__angular__reference__reference$46template;
  const _root = Object.create(null);
  const src__laminate__popup__popup_hierarchy$46template = Object.create(_root);
  const src__laminate__popup__popup_state$46template = Object.create(_root);
  const src__laminate__popup__popup_interface$46template = Object.create(_root);
  const src__laminate__popup__popup_size_provider$46template = Object.create(_root);
  const src__laminate__popup__popup_position_mixin$46template = Object.create(_root);
  const src__laminate__popup__popup_ref$46template = Object.create(_root);
  const src__laminate__popup__popup_size_provider_directive$46template = Object.create(_root);
  const src__laminate__popup__popup_source_directive$46template = Object.create(_root);
  let VoidToPopupHierarchy = () => (VoidToPopupHierarchy = dart.constFn(dart.fnType(src__laminate__popup__popup_hierarchy.PopupHierarchy, [])))();
  dart.defineLazy(src__laminate__popup__popup_hierarchy$46template, {
    /*src__laminate__popup__popup_hierarchy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_hierarchy$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_hierarchy$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_hierarchy$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), dart.fn(() => new src__laminate__popup__popup_hierarchy.PopupHierarchy.new(), VoidToPopupHierarchy()));
    angular$46template.initReflector();
    laminate__overlay__constants$46template.initReflector();
    utils__browser__events__events$46template.initReflector();
  };
  dart.defineLazy(src__laminate__popup__popup_state$46template, {
    /*src__laminate__popup__popup_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_state$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_state$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_state$46template._visited = true;
    laminate__enums__alignment$46template.initReflector();
    src__laminate__popup__popup_source$46template.initReflector();
  };
  dart.defineLazy(src__laminate__popup__popup_interface$46template, {
    /*src__laminate__popup__popup_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_interface$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_interface$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_interface$46template._visited = true;
    angular$46template.initReflector();
    src__laminate__popup__popup_source$46template.initReflector();
    src__laminate__popup__popup_state$46template.initReflector();
  };
  src__laminate__popup__popup_size_provider$46template.initReflector = function() {
  };
  dart.defineLazy(src__laminate__popup__popup_position_mixin$46template, {
    /*src__laminate__popup__popup_position_mixin$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_position_mixin$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_position_mixin$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_position_mixin$46template._visited = true;
    angular$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    src__laminate__popup__popup_size_provider$46template.initReflector();
  };
  src__laminate__popup__popup_ref$46template.initReflector = function() {
  };
  dart.defineLazy(src__laminate__popup__popup_size_provider_directive$46template, {
    /*src__laminate__popup__popup_size_provider_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_size_provider_directive$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_size_provider_directive$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_size_provider_directive$46template._visited = true;
    angular$46template.initReflector();
    src__laminate__popup__popup_size_provider$46template.initReflector();
  };
  dart.defineLazy(src__laminate__popup__popup_source_directive$46template, {
    /*src__laminate__popup__popup_source_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__laminate__popup__popup_source_directive$46template.initReflector = function() {
    if (dart.test(src__laminate__popup__popup_source_directive$46template._visited)) {
      return;
    }
    src__laminate__popup__popup_source_directive$46template._visited = true;
    angular$46template.initReflector();
    focus__focus_interface$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    src__laminate__popup__dom_popup_source$46template.initReflector();
    src__laminate__popup__popup_source$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__angular__reference__reference$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/laminate/popup/popup_hierarchy.template.ddc", {
    "package:angular_components/src/laminate/popup/popup_hierarchy.template.dart": src__laminate__popup__popup_hierarchy$46template,
    "package:angular_components/src/laminate/popup/popup_state.template.dart": src__laminate__popup__popup_state$46template,
    "package:angular_components/src/laminate/popup/popup_interface.template.dart": src__laminate__popup__popup_interface$46template,
    "package:angular_components/src/laminate/popup/popup_size_provider.template.dart": src__laminate__popup__popup_size_provider$46template,
    "package:angular_components/src/laminate/popup/popup_position_mixin.template.dart": src__laminate__popup__popup_position_mixin$46template,
    "package:angular_components/src/laminate/popup/popup_ref.template.dart": src__laminate__popup__popup_ref$46template,
    "package:angular_components/src/laminate/popup/popup_size_provider_directive.template.dart": src__laminate__popup__popup_size_provider_directive$46template,
    "package:angular_components/src/laminate/popup/popup_source_directive.template.dart": src__laminate__popup__popup_source_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["popup_hierarchy.template.dart","popup_state.template.dart","popup_interface.template.dart","popup_size_provider.template.dart","popup_position_mixin.template.dart","popup_ref.template.dart","popup_size_provider_directive.template.dart","popup_source_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;MAWI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAO,kCAAe,CAAC,mEAAc,EAAE,cAAM,IAAI,wDAAc;AAC/D,IAAM,gCAAa;AACnB,IAAM,qDAAa;AACnB,IAAM,uDAAa;EACrB;;MCbI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,mDAAa;AACnB,IAAM,2DAAa;EACrB;;MCRI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,0DAAa;EACrB;;ECZsB;;MCElB,8DAAQ;YAAG;;;;;AAEb,kBAAI,8DAAQ,GAAE;AACZ;;AAEF,qEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,kEAAa;EACrB;;ECZsB;;MCClB,uEAAQ;YAAG;;;;;AAEb,kBAAI,uEAAQ,GAAE;AACZ;;AAEF,8EAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,kEAAa;EACrB;;MCJI,gEAAQ;YAAG;;;;;AAEb,kBAAI,gEAAQ,GAAE;AACZ;;AAEF,uEAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,6DAAa;EACrB","file":"popup_hierarchy.template.ddc.js"}');
  // Exports:
  return {
    src__laminate__popup__popup_hierarchy$46template: src__laminate__popup__popup_hierarchy$46template,
    src__laminate__popup__popup_state$46template: src__laminate__popup__popup_state$46template,
    src__laminate__popup__popup_interface$46template: src__laminate__popup__popup_interface$46template,
    src__laminate__popup__popup_size_provider$46template: src__laminate__popup__popup_size_provider$46template,
    src__laminate__popup__popup_position_mixin$46template: src__laminate__popup__popup_position_mixin$46template,
    src__laminate__popup__popup_ref$46template: src__laminate__popup__popup_ref$46template,
    src__laminate__popup__popup_size_provider_directive$46template: src__laminate__popup__popup_size_provider_directive$46template,
    src__laminate__popup__popup_source_directive$46template: src__laminate__popup__popup_source_directive$46template
  };
});

//# sourceMappingURL=popup_hierarchy.template.ddc.js.map
