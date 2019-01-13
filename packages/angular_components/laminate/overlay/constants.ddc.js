define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const laminate__overlay__constants = Object.create(_root);
  dart.defineLazy(laminate__overlay__constants, {
    /*laminate__overlay__constants.overlayDefaultContainerId*/get overlayDefaultContainerId() {
      return "default-acx-overlay-container";
    },
    /*laminate__overlay__constants.overlayContainerClassName*/get overlayContainerClassName() {
      return "acx-overlay-container";
    },
    /*laminate__overlay__constants.overlayContainerNameAttribute*/get overlayContainerNameAttribute() {
      return "container-name";
    },
    /*laminate__overlay__constants.overlayFocusablePlaceholderClassName*/get overlayFocusablePlaceholderClassName() {
      return "acx-overlay-focusable-placeholder";
    }
  });
  dart.trackLibraries("packages/angular_components/laminate/overlay/constants.ddc", {
    "package:angular_components/laminate/overlay/constants.dart": laminate__overlay__constants
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart"],"names":[],"mappings":";;;;;;;;MAIM,sDAAyB;YAAG;;MAC5B,sDAAyB;YAAG;;MAC5B,0DAA6B;YAAG;;MAChC,iEAAoC;YACtC","file":"constants.ddc.js"}');
  // Exports:
  return {
    laminate__overlay__constants: laminate__overlay__constants
  };
});

//# sourceMappingURL=constants.ddc.js.map
