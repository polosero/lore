define(['dart_sdk', 'packages/angular_components/src/utils/async/async_update_scheduler.template'], function(dart_sdk, async_update_scheduler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils__async__async_update_scheduler$46template = async_update_scheduler.src__utils__async__async_update_scheduler$46template;
  const src__utils__async__async_where$46template = async_update_scheduler.src__utils__async__async_where$46template;
  const src__utils__async__debounce_stream$46template = async_update_scheduler.src__utils__async__debounce_stream$46template;
  const src__utils__async__disposable_future$46template = async_update_scheduler.src__utils__async__disposable_future$46template;
  const src__utils__async__lazy_stream_controller$46template = async_update_scheduler.src__utils__async__lazy_stream_controller$46template;
  const src__utils__async__priority_stream_iterator$46template = async_update_scheduler.src__utils__async__priority_stream_iterator$46template;
  const src__utils__async__simple_stream$46template = async_update_scheduler.src__utils__async__simple_stream$46template;
  const src__utils__async__throttle_stream$46template = async_update_scheduler.src__utils__async__throttle_stream$46template;
  const src__utils__async__zoned_async$46template = async_update_scheduler.src__utils__async__zoned_async$46template;
  const _root = Object.create(null);
  const utils__async__async$46template = Object.create(_root);
  dart.defineLazy(utils__async__async$46template, {
    /*utils__async__async$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  utils__async__async$46template.initReflector = function() {
    if (dart.test(utils__async__async$46template._visited)) {
      return;
    }
    utils__async__async$46template._visited = true;
    src__utils__async__async_update_scheduler$46template.initReflector();
    src__utils__async__async_where$46template.initReflector();
    src__utils__async__debounce_stream$46template.initReflector();
    src__utils__async__disposable_future$46template.initReflector();
    src__utils__async__lazy_stream_controller$46template.initReflector();
    src__utils__async__priority_stream_iterator$46template.initReflector();
    src__utils__async__simple_stream$46template.initReflector();
    src__utils__async__throttle_stream$46template.initReflector();
    src__utils__async__zoned_async$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/utils/async/async.template.ddc", {
    "package:angular_components/utils/async/async.template.dart": utils__async__async$46template
  }, '{"version":3,"sourceRoot":"","sources":["async.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAgBI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,kEAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,kEAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,uDAAa;EACrB","file":"async.template.ddc.js"}');
  // Exports:
  return {
    utils__async__async$46template: utils__async__async$46template
  };
});

//# sourceMappingURL=async.template.ddc.js.map
