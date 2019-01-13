define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular/src/core/change_detection/change_detection.template'], function(dart_sdk, router_outlet_directive, change_detection, angular, change_detection$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location__browser_platform_location = router_outlet_directive.src__location__browser_platform_location;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__location__location_strategy = router_outlet_directive.src__location__location_strategy;
  const src__location__hash_location_strategy = router_outlet_directive.src__location__hash_location_strategy;
  const src__location__platform_location = router_outlet_directive.src__location__platform_location;
  const src__location__path_location_strategy = router_outlet_directive.src__location__path_location_strategy;
  const src__router__router_impl = router_outlet_directive.src__router__router_impl;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const angular$46template = angular.angular$46template;
  const src__runtime$46template = change_detection$.src__runtime$46template;
  const _root = Object.create(null);
  const src__location__base_href$46template = Object.create(_root);
  const src__location__platform_location$46template = Object.create(_root);
  const src__location__browser_platform_location$46template = Object.create(_root);
  const src__location__location_strategy$46template = Object.create(_root);
  const src__location__location$46template = Object.create(_root);
  const src__location__hash_location_strategy$46template = Object.create(_root);
  const src__location__path_location_strategy$46template = Object.create(_root);
  const src__location$46template = Object.create(_root);
  const src__url$46template = Object.create(_root);
  const src__route_path$46template = Object.create(_root);
  const src__route_definition$46template = Object.create(_root);
  const src__router__router_state$46template = Object.create(_root);
  const src__lifecycle$46template = Object.create(_root);
  const src__router__navigation_params$46template = Object.create(_root);
  const src__router_hook$46template = Object.create(_root);
  const src__router__router_outlet_token$46template = Object.create(_root);
  const src__directives__router_outlet_directive$46template = Object.create(_root);
  const src__router__router$46template = Object.create(_root);
  const src__router__router_impl$46template = Object.create(_root);
  let VoidToBrowserPlatformLocation = () => (VoidToBrowserPlatformLocation = dart.constFn(dart.fnType(src__location__browser_platform_location.BrowserPlatformLocation, [])))();
  let LocationStrategyToLocation = () => (LocationStrategyToLocation = dart.constFn(dart.fnType(src__location__location.Location, [src__location__location_strategy.LocationStrategy])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let PlatformLocationAndStringToHashLocationStrategy = () => (PlatformLocationAndStringToHashLocationStrategy = dart.constFn(dart.fnType(src__location__hash_location_strategy.HashLocationStrategy, [src__location__platform_location.PlatformLocation, core.String])))();
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let PlatformLocationAndStringToPathLocationStrategy = () => (PlatformLocationAndStringToPathLocationStrategy = dart.constFn(dart.fnType(src__location__path_location_strategy.PathLocationStrategy, [src__location__platform_location.PlatformLocation, core.String])))();
  let LocationAndRouterHookToRouterImpl = () => (LocationAndRouterHookToRouterImpl = dart.constFn(dart.fnType(src__router__router_impl.RouterImpl, [src__location__location.Location, src__router_hook.RouterHook])))();
  src__location__base_href$46template.initReflector = function() {
  };
  src__location__platform_location$46template.initReflector = function() {
  };
  dart.defineLazy(src__location__browser_platform_location$46template, {
    /*src__location__browser_platform_location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__location__browser_platform_location$46template.initReflector = function() {
    if (dart.test(src__location__browser_platform_location$46template._visited)) {
      return;
    }
    src__location__browser_platform_location$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__location__browser_platform_location.BrowserPlatformLocation), dart.fn(() => new src__location__browser_platform_location.BrowserPlatformLocation.new(), VoidToBrowserPlatformLocation()));
    src__location__base_href$46template.initReflector();
    angular$46template.initReflector();
    src__location__platform_location$46template.initReflector();
  };
  dart.defineLazy(src__location__location_strategy$46template, {
    /*src__location__location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__location__location_strategy$46template.initReflector = function() {
    if (dart.test(src__location__location_strategy$46template._visited)) {
      return;
    }
    src__location__location_strategy$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(src__location__location$46template, {
    /*src__location__location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__location__location$46template.initReflector = function() {
    if (dart.test(src__location__location$46template._visited)) {
      return;
    }
    src__location__location$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__location__location.Location), dart.fn(p0 => new src__location__location.Location.new(p0), LocationStrategyToLocation()));
    src__di__reflector.registerDependencies(dart.wrapType(src__location__location.Location), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__location__location_strategy.LocationStrategy)], core.Object))], ListOfObject())));
    src__location__location_strategy$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__location__hash_location_strategy$46template, {
    /*src__location__hash_location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  src__location__hash_location_strategy$46template.initReflector = function() {
    if (dart.test(src__location__hash_location_strategy$46template._visited)) {
      return;
    }
    src__location__hash_location_strategy$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__location__hash_location_strategy.HashLocationStrategy), dart.fn((p0, p1) => new src__location__hash_location_strategy.HashLocationStrategy.new(p0, p1), PlatformLocationAndStringToHashLocationStrategy()));
    src__di__reflector.registerDependencies(dart.wrapType(src__location__hash_location_strategy.HashLocationStrategy), const$6 || (const$6 = dart.constList([const$1 || (const$1 = dart.constList([dart.wrapType(src__location__platform_location.PlatformLocation)], core.Object)), const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__core__di__decorators.Inject.new(const$2 || (const$2 = dart.const(new (OpaqueTokenOfString()).new("appBaseHref")))))), const$4 || (const$4 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    src__location__location$46template.initReflector();
    src__location__location_strategy$46template.initReflector();
    angular$46template.initReflector();
    src__location__platform_location$46template.initReflector();
  };
  dart.defineLazy(src__location__path_location_strategy$46template, {
    /*src__location__path_location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  src__location__path_location_strategy$46template.initReflector = function() {
    if (dart.test(src__location__path_location_strategy$46template._visited)) {
      return;
    }
    src__location__path_location_strategy$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__location__path_location_strategy.PathLocationStrategy), dart.fn((p0, p1) => new src__location__path_location_strategy.PathLocationStrategy.new(p0, p1), PlatformLocationAndStringToPathLocationStrategy()));
    src__di__reflector.registerDependencies(dart.wrapType(src__location__path_location_strategy.PathLocationStrategy), const$12 || (const$12 = dart.constList([const$7 || (const$7 = dart.constList([dart.wrapType(src__location__platform_location.PlatformLocation)], core.Object)), const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__core__di__decorators.Inject.new(const$8 || (const$8 = dart.const(new (OpaqueTokenOfString()).new("appBaseHref")))))), const$10 || (const$10 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    src__location__location$46template.initReflector();
    src__location__location_strategy$46template.initReflector();
    angular$46template.initReflector();
    src__location__platform_location$46template.initReflector();
  };
  dart.defineLazy(src__location$46template, {
    /*src__location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__location$46template.initReflector = function() {
    if (dart.test(src__location$46template._visited)) {
      return;
    }
    src__location$46template._visited = true;
    src__location__browser_platform_location$46template.initReflector();
    src__location__hash_location_strategy$46template.initReflector();
    src__location__location$46template.initReflector();
    src__location__location_strategy$46template.initReflector();
    src__location__path_location_strategy$46template.initReflector();
    src__location__platform_location$46template.initReflector();
  };
  src__url$46template.initReflector = function() {
  };
  dart.defineLazy(src__route_path$46template, {
    /*src__route_path$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__route_path$46template.initReflector = function() {
    if (dart.test(src__route_path$46template._visited)) {
      return;
    }
    src__route_path$46template._visited = true;
    src__location$46template.initReflector();
    src__route_definition$46template.initReflector();
    src__url$46template.initReflector();
  };
  dart.defineLazy(src__route_definition$46template, {
    /*src__route_definition$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__route_definition$46template.initReflector = function() {
    if (dart.test(src__route_definition$46template._visited)) {
      return;
    }
    src__route_definition$46template._visited = true;
    angular$46template.initReflector();
    src__runtime$46template.initReflector();
    src__route_path$46template.initReflector();
    src__url$46template.initReflector();
  };
  dart.defineLazy(src__router__router_state$46template, {
    /*src__router__router_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router__router_state$46template.initReflector = function() {
    if (dart.test(src__router__router_state$46template._visited)) {
      return;
    }
    src__router__router_state$46template._visited = true;
    src__route_definition$46template.initReflector();
    src__route_path$46template.initReflector();
    src__url$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__lifecycle$46template, {
    /*src__lifecycle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__lifecycle$46template.initReflector = function() {
    if (dart.test(src__lifecycle$46template._visited)) {
      return;
    }
    src__lifecycle$46template._visited = true;
    src__router__router_state$46template.initReflector();
  };
  dart.defineLazy(src__router__navigation_params$46template, {
    /*src__router__navigation_params$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router__navigation_params$46template.initReflector = function() {
    if (dart.test(src__router__navigation_params$46template._visited)) {
      return;
    }
    src__router__navigation_params$46template._visited = true;
    src__runtime$46template.initReflector();
  };
  dart.defineLazy(src__router_hook$46template, {
    /*src__router_hook$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router_hook$46template.initReflector = function() {
    if (dart.test(src__router_hook$46template._visited)) {
      return;
    }
    src__router_hook$46template._visited = true;
    src__router__navigation_params$46template.initReflector();
    src__router__router_state$46template.initReflector();
  };
  dart.defineLazy(src__router__router_outlet_token$46template, {
    /*src__router__router_outlet_token$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router__router_outlet_token$46template.initReflector = function() {
    if (dart.test(src__router__router_outlet_token$46template._visited)) {
      return;
    }
    src__router__router_outlet_token$46template._visited = true;
    src__directives__router_outlet_directive$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__directives__router_outlet_directive$46template, {
    /*src__directives__router_outlet_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__router_outlet_directive$46template.initReflector = function() {
    if (dart.test(src__directives__router_outlet_directive$46template._visited)) {
      return;
    }
    src__directives__router_outlet_directive$46template._visited = true;
    src__lifecycle$46template.initReflector();
    src__route_definition$46template.initReflector();
    src__router__router$46template.initReflector();
    src__router__router_outlet_token$46template.initReflector();
    src__router__router_state$46template.initReflector();
    src__router_hook$46template.initReflector();
    angular$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.defineLazy(src__router__router$46template, {
    /*src__router__router$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router__router$46template.initReflector = function() {
    if (dart.test(src__router__router$46template._visited)) {
      return;
    }
    src__router__router$46template._visited = true;
    src__directives__router_outlet_directive$46template.initReflector();
    src__router__navigation_params$46template.initReflector();
    src__router__router_state$46template.initReflector();
  };
  dart.defineLazy(src__router__router_impl$46template, {
    /*src__router__router_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  src__router__router_impl$46template.initReflector = function() {
    if (dart.test(src__router__router_impl$46template._visited)) {
      return;
    }
    src__router__router_impl$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__router__router_impl.RouterImpl), dart.fn((p0, p1) => new src__router__router_impl.RouterImpl.new(p0, p1), LocationAndRouterHookToRouterImpl()));
    src__di__reflector.registerDependencies(dart.wrapType(src__router__router_impl.RouterImpl), const$16 || (const$16 = dart.constList([const$13 || (const$13 = dart.constList([dart.wrapType(src__location__location.Location)], core.Object)), const$15 || (const$15 = dart.constList([dart.wrapType(src__router_hook.RouterHook), const$14 || (const$14 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    src__directives__router_outlet_directive$46template.initReflector();
    src__lifecycle$46template.initReflector();
    src__location$46template.initReflector();
    src__route_definition$46template.initReflector();
    src__router_hook$46template.initReflector();
    src__url$46template.initReflector();
    src__router__navigation_params$46template.initReflector();
    angular$46template.initReflector();
    src__router__router$46template.initReflector();
    src__router__router_outlet_token$46template.initReflector();
    src__router__router_state$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_router/src/directives/router_outlet_directive.template.ddc", {
    "package:angular_router/src/location/base_href.template.dart": src__location__base_href$46template,
    "package:angular_router/src/location/platform_location.template.dart": src__location__platform_location$46template,
    "package:angular_router/src/location/browser_platform_location.template.dart": src__location__browser_platform_location$46template,
    "package:angular_router/src/location/location_strategy.template.dart": src__location__location_strategy$46template,
    "package:angular_router/src/location/location.template.dart": src__location__location$46template,
    "package:angular_router/src/location/hash_location_strategy.template.dart": src__location__hash_location_strategy$46template,
    "package:angular_router/src/location/path_location_strategy.template.dart": src__location__path_location_strategy$46template,
    "package:angular_router/src/location.template.dart": src__location$46template,
    "package:angular_router/src/url.template.dart": src__url$46template,
    "package:angular_router/src/route_path.template.dart": src__route_path$46template,
    "package:angular_router/src/route_definition.template.dart": src__route_definition$46template,
    "package:angular_router/src/router/router_state.template.dart": src__router__router_state$46template,
    "package:angular_router/src/lifecycle.template.dart": src__lifecycle$46template,
    "package:angular_router/src/router/navigation_params.template.dart": src__router__navigation_params$46template,
    "package:angular_router/src/router_hook.template.dart": src__router_hook$46template,
    "package:angular_router/src/router/router_outlet_token.template.dart": src__router__router_outlet_token$46template,
    "package:angular_router/src/directives/router_outlet_directive.template.dart": src__directives__router_outlet_directive$46template,
    "package:angular_router/src/router/router.template.dart": src__router__router$46template,
    "package:angular_router/src/router/router_impl.template.dart": src__router__router_impl$46template
  }, '{"version":3,"sourceRoot":"","sources":["../location/base_href.template.dart","../location/platform_location.template.dart","../location/browser_platform_location.template.dart","../location/location_strategy.template.dart","../location/location.template.dart","../location/hash_location_strategy.template.dart","../location/path_location_strategy.template.dart","../location.template.dart","../url.template.dart","../route_path.template.dart","../route_definition.template.dart","../router/router_state.template.dart","../lifecycle.template.dart","../router/navigation_params.template.dart","../router_hook.template.dart","../router/router_outlet_token.template.dart","router_outlet_directive.template.dart","../router/router.template.dart","../router/router_impl.template.dart"],"names":[],"mappings":"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","file":"router_outlet_directive.template.ddc.js"}');
  // Exports:
  return {
    src__location__base_href$46template: src__location__base_href$46template,
    src__location__platform_location$46template: src__location__platform_location$46template,
    src__location__browser_platform_location$46template: src__location__browser_platform_location$46template,
    src__location__location_strategy$46template: src__location__location_strategy$46template,
    src__location__location$46template: src__location__location$46template,
    src__location__hash_location_strategy$46template: src__location__hash_location_strategy$46template,
    src__location__path_location_strategy$46template: src__location__path_location_strategy$46template,
    src__location$46template: src__location$46template,
    src__url$46template: src__url$46template,
    src__route_path$46template: src__route_path$46template,
    src__route_definition$46template: src__route_definition$46template,
    src__router__router_state$46template: src__router__router_state$46template,
    src__lifecycle$46template: src__lifecycle$46template,
    src__router__navigation_params$46template: src__router__navigation_params$46template,
    src__router_hook$46template: src__router_hook$46template,
    src__router__router_outlet_token$46template: src__router__router_outlet_token$46template,
    src__directives__router_outlet_directive$46template: src__directives__router_outlet_directive$46template,
    src__router__router$46template: src__router__router$46template,
    src__router__router_impl$46template: src__router__router_impl$46template
  };
});

//# sourceMappingURL=router_outlet_directive.template.ddc.js.map
