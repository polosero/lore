define(['dart_sdk', 'packages/angular_components/utils/rate_limit_utils/rate_limit_utils.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, rate_limit_utils, disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__rate_limit_utils__rate_limit_utils$46template = rate_limit_utils.utils__rate_limit_utils__rate_limit_utils$46template;
  const utils__disposer__disposer$46template = disposer.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const src__utils__async__async_update_scheduler$46template = Object.create(_root);
  const src__utils__async__async_where$46template = Object.create(_root);
  const src__utils__async__rate_limit$46template = Object.create(_root);
  const src__utils__async__debounce_stream$46template = Object.create(_root);
  const src__utils__async__disposable_future$46template = Object.create(_root);
  const src__utils__async__lazy_stream_controller$46template = Object.create(_root);
  const src__utils__async__priority_stream_iterator$46template = Object.create(_root);
  const src__utils__async__simple_stream$46template = Object.create(_root);
  const src__utils__async__throttle_stream$46template = Object.create(_root);
  const src__utils__async__zoned_async$46template = Object.create(_root);
  src__utils__async__async_update_scheduler$46template.initReflector = function() {
  };
  src__utils__async__async_where$46template.initReflector = function() {
  };
  dart.defineLazy(src__utils__async__rate_limit$46template, {
    /*src__utils__async__rate_limit$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__async__rate_limit$46template.initReflector = function() {
    if (dart.test(src__utils__async__rate_limit$46template._visited)) {
      return;
    }
    src__utils__async__rate_limit$46template._visited = true;
    utils__rate_limit_utils__rate_limit_utils$46template.initReflector();
  };
  dart.defineLazy(src__utils__async__debounce_stream$46template, {
    /*src__utils__async__debounce_stream$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__async__debounce_stream$46template.initReflector = function() {
    if (dart.test(src__utils__async__debounce_stream$46template._visited)) {
      return;
    }
    src__utils__async__debounce_stream$46template._visited = true;
    utils__rate_limit_utils__rate_limit_utils$46template.initReflector();
    src__utils__async__rate_limit$46template.initReflector();
  };
  dart.defineLazy(src__utils__async__disposable_future$46template, {
    /*src__utils__async__disposable_future$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__async__disposable_future$46template.initReflector = function() {
    if (dart.test(src__utils__async__disposable_future$46template._visited)) {
      return;
    }
    src__utils__async__disposable_future$46template._visited = true;
    utils__disposer__disposer$46template.initReflector();
  };
  src__utils__async__lazy_stream_controller$46template.initReflector = function() {
  };
  src__utils__async__priority_stream_iterator$46template.initReflector = function() {
  };
  src__utils__async__simple_stream$46template.initReflector = function() {
  };
  dart.defineLazy(src__utils__async__throttle_stream$46template, {
    /*src__utils__async__throttle_stream$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__utils__async__throttle_stream$46template.initReflector = function() {
    if (dart.test(src__utils__async__throttle_stream$46template._visited)) {
      return;
    }
    src__utils__async__throttle_stream$46template._visited = true;
    utils__rate_limit_utils__rate_limit_utils$46template.initReflector();
    src__utils__async__rate_limit$46template.initReflector();
  };
  src__utils__async__zoned_async$46template.initReflector = function() {
  };
  dart.trackLibraries("packages/angular_components/src/utils/async/async_update_scheduler.template.ddc", {
    "package:angular_components/src/utils/async/async_update_scheduler.template.dart": src__utils__async__async_update_scheduler$46template,
    "package:angular_components/src/utils/async/async_where.template.dart": src__utils__async__async_where$46template,
    "package:angular_components/src/utils/async/rate_limit.template.dart": src__utils__async__rate_limit$46template,
    "package:angular_components/src/utils/async/debounce_stream.template.dart": src__utils__async__debounce_stream$46template,
    "package:angular_components/src/utils/async/disposable_future.template.dart": src__utils__async__disposable_future$46template,
    "package:angular_components/src/utils/async/lazy_stream_controller.template.dart": src__utils__async__lazy_stream_controller$46template,
    "package:angular_components/src/utils/async/priority_stream_iterator.template.dart": src__utils__async__priority_stream_iterator$46template,
    "package:angular_components/src/utils/async/simple_stream.template.dart": src__utils__async__simple_stream$46template,
    "package:angular_components/src/utils/async/throttle_stream.template.dart": src__utils__async__throttle_stream$46template,
    "package:angular_components/src/utils/async/zoned_async.template.dart": src__utils__async__zoned_async$46template
  }, '{"version":3,"sourceRoot":"","sources":["async_update_scheduler.template.dart","async_where.template.dart","rate_limit.template.dart","debounce_stream.template.dart","disposable_future.template.dart","lazy_stream_controller.template.dart","priority_stream_iterator.template.dart","simple_stream.template.dart","throttle_stream.template.dart","zoned_async.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;EAQsB;;ECAA;;MCAlB,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,kEAAa;EACrB;;MCPI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,kEAAa;AACnB,IAAM,sDAAa;EACrB;;MCVI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,kDAAa;EACrB;;ECRsB;;ECAA;;ECAA;;MCClB,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,kEAAa;AACnB,IAAM,sDAAa;EACrB;;ECVsB","file":"async_update_scheduler.template.ddc.js"}');
  // Exports:
  return {
    src__utils__async__async_update_scheduler$46template: src__utils__async__async_update_scheduler$46template,
    src__utils__async__async_where$46template: src__utils__async__async_where$46template,
    src__utils__async__rate_limit$46template: src__utils__async__rate_limit$46template,
    src__utils__async__debounce_stream$46template: src__utils__async__debounce_stream$46template,
    src__utils__async__disposable_future$46template: src__utils__async__disposable_future$46template,
    src__utils__async__lazy_stream_controller$46template: src__utils__async__lazy_stream_controller$46template,
    src__utils__async__priority_stream_iterator$46template: src__utils__async__priority_stream_iterator$46template,
    src__utils__async__simple_stream$46template: src__utils__async__simple_stream$46template,
    src__utils__async__throttle_stream$46template: src__utils__async__throttle_stream$46template,
    src__utils__async__zoned_async$46template: src__utils__async__zoned_async$46template
  };
});

//# sourceMappingURL=async_update_scheduler.template.ddc.js.map
