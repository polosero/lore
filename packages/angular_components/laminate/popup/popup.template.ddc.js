define(['dart_sdk', 'packages/angular_components/src/laminate/popup/dom_popup_source.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy.template'], function(dart_sdk, dom_popup_source, popup_hierarchy) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__popup__dom_popup_source$46template = dom_popup_source.src__laminate__popup__dom_popup_source$46template;
  const src__laminate__popup__popup_source$46template = dom_popup_source.src__laminate__popup__popup_source$46template;
  const src__laminate__popup__popup_hierarchy$46template = popup_hierarchy.src__laminate__popup__popup_hierarchy$46template;
  const src__laminate__popup__popup_interface$46template = popup_hierarchy.src__laminate__popup__popup_interface$46template;
  const src__laminate__popup__popup_position_mixin$46template = popup_hierarchy.src__laminate__popup__popup_position_mixin$46template;
  const src__laminate__popup__popup_ref$46template = popup_hierarchy.src__laminate__popup__popup_ref$46template;
  const src__laminate__popup__popup_size_provider$46template = popup_hierarchy.src__laminate__popup__popup_size_provider$46template;
  const src__laminate__popup__popup_size_provider_directive$46template = popup_hierarchy.src__laminate__popup__popup_size_provider_directive$46template;
  const src__laminate__popup__popup_source_directive$46template = popup_hierarchy.src__laminate__popup__popup_source_directive$46template;
  const src__laminate__popup__popup_state$46template = popup_hierarchy.src__laminate__popup__popup_state$46template;
  const _root = Object.create(null);
  const laminate__popup__popup$46template = Object.create(_root);
  dart.defineLazy(laminate__popup__popup$46template, {
    /*laminate__popup__popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  laminate__popup__popup$46template.initReflector = function() {
    if (dart.test(laminate__popup__popup$46template._visited)) {
      return;
    }
    laminate__popup__popup$46template._visited = true;
    src__laminate__popup__dom_popup_source$46template.initReflector();
    src__laminate__popup__popup_hierarchy$46template.initReflector();
    src__laminate__popup__popup_interface$46template.initReflector();
    src__laminate__popup__popup_position_mixin$46template.initReflector();
    src__laminate__popup__popup_ref$46template.initReflector();
    src__laminate__popup__popup_size_provider$46template.initReflector();
    src__laminate__popup__popup_size_provider_directive$46template.initReflector();
    src__laminate__popup__popup_source$46template.initReflector();
    src__laminate__popup__popup_source_directive$46template.initReflector();
    src__laminate__popup__popup_state$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/laminate/popup/popup.template.ddc", {
    "package:angular_components/laminate/popup/popup.template.dart": laminate__popup__popup$46template
  }, '{"version":3,"sourceRoot":"","sources":["popup.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAiBI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,+DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,mEAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,4EAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,qEAAa;AACnB,IAAM,0DAAa;EACrB","file":"popup.template.ddc.js"}');
  // Exports:
  return {
    laminate__popup__popup$46template: laminate__popup__popup$46template
  };
});

//# sourceMappingURL=popup.template.ddc.js.map
