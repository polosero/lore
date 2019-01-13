/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/$sdk/dev_compiler/amd/dart_sdk",
 "packages/Internal_lore/app_component": "packages/Internal_lore/app_component.ddc",
 "packages/Internal_lore/app_component.template": "packages/Internal_lore/app_component.template.ddc",
 "packages/Internal_lore/src/model/document": "packages/Internal_lore/src/model/document.ddc",
 "packages/angular/angular": "packages/angular/angular.ddc",
 "packages/angular/angular.template": "packages/angular/angular.template.ddc",
 "packages/angular/core": "packages/angular/core.ddc",
 "packages/angular/core.template": "packages/angular/core.template.ddc",
 "packages/angular/di": "packages/angular/di.ddc",
 "packages/angular/di.template": "packages/angular/di.template.ddc",
 "packages/angular/experimental": "packages/angular/experimental.ddc",
 "packages/angular/experimental.template": "packages/angular/experimental.template.ddc",
 "packages/angular/meta": "packages/angular/meta.ddc",
 "packages/angular/meta.template": "packages/angular/meta.template.ddc",
 "packages/angular/src/bootstrap/modules": "packages/angular/src/bootstrap/modules.ddc",
 "packages/angular/src/bootstrap/run.template": "packages/angular/src/bootstrap/run.template.ddc",
 "packages/angular/src/common/directives/ng_for_identity": "packages/angular/src/common/directives/ng_for_identity.ddc",
 "packages/angular/src/core/application_tokens": "packages/angular/src/core/application_tokens.ddc",
 "packages/angular/src/core/application_tokens.template": "packages/angular/src/core/application_tokens.template.ddc",
 "packages/angular/src/core/change_detection/change_detection": "packages/angular/src/core/change_detection/change_detection.ddc",
 "packages/angular/src/core/change_detection/change_detection.template": "packages/angular/src/core/change_detection/change_detection.template.ddc",
 "packages/angular/src/core/change_detection/directive_change_detector": "packages/angular/src/core/change_detection/directive_change_detector.ddc",
 "packages/angular/src/core/linker/view_type": "packages/angular/src/core/linker/view_type.ddc",
 "packages/angular/src/core/zone/ng_zone": "packages/angular/src/core/zone/ng_zone.ddc",
 "packages/angular/src/meta": "packages/angular/src/meta.ddc",
 "packages/angular_components/annotations/rtl_annotation": "packages/angular_components/annotations/rtl_annotation.ddc",
 "packages/angular_components/annotations/rtl_annotation.template": "packages/angular_components/annotations/rtl_annotation.template.ddc",
 "packages/angular_components/auto_dismiss/auto_dismiss": "packages/angular_components/auto_dismiss/auto_dismiss.ddc",
 "packages/angular_components/auto_dismiss/auto_dismiss.template": "packages/angular_components/auto_dismiss/auto_dismiss.template.ddc",
 "packages/angular_components/button_decorator/button_decorator": "packages/angular_components/button_decorator/button_decorator.ddc",
 "packages/angular_components/button_decorator/button_decorator.template": "packages/angular_components/button_decorator/button_decorator.template.ddc",
 "packages/angular_components/content/deferred_content_aware": "packages/angular_components/content/deferred_content_aware.ddc",
 "packages/angular_components/content/deferred_content_aware.template": "packages/angular_components/content/deferred_content_aware.template.ddc",
 "packages/angular_components/focus/focus": "packages/angular_components/focus/focus.ddc",
 "packages/angular_components/focus/focus.template": "packages/angular_components/focus/focus.template.ddc",
 "packages/angular_components/focus/focus_interface": "packages/angular_components/focus/focus_interface.ddc",
 "packages/angular_components/focus/focus_interface.template": "packages/angular_components/focus/focus_interface.template.ddc",
 "packages/angular_components/focus/focus_trap": "packages/angular_components/focus/focus_trap.ddc",
 "packages/angular_components/focus/focus_trap.scss.css.shim": "packages/angular_components/focus/focus_trap.scss.css.shim.ddc",
 "packages/angular_components/focus/focus_trap.template": "packages/angular_components/focus/focus_trap.template.ddc",
 "packages/angular_components/framework_stabilizers/framework_stabilizers": "packages/angular_components/framework_stabilizers/framework_stabilizers.ddc",
 "packages/angular_components/framework_stabilizers/framework_stabilizers.template": "packages/angular_components/framework_stabilizers/framework_stabilizers.template.ddc",
 "packages/angular_components/framework_stabilizers/testability": "packages/angular_components/framework_stabilizers/testability.ddc",
 "packages/angular_components/framework_stabilizers/testability.template": "packages/angular_components/framework_stabilizers/testability.template.ddc",
 "packages/angular_components/interfaces/has_disabled": "packages/angular_components/interfaces/has_disabled.ddc",
 "packages/angular_components/interfaces/has_disabled.template": "packages/angular_components/interfaces/has_disabled.template.ddc",
 "packages/angular_components/laminate/components/modal/modal": "packages/angular_components/laminate/components/modal/modal.ddc",
 "packages/angular_components/laminate/components/modal/modal.template": "packages/angular_components/laminate/components/modal/modal.template.ddc",
 "packages/angular_components/laminate/enums/alignment": "packages/angular_components/laminate/enums/alignment.ddc",
 "packages/angular_components/laminate/enums/alignment.template": "packages/angular_components/laminate/enums/alignment.template.ddc",
 "packages/angular_components/laminate/enums/position": "packages/angular_components/laminate/enums/position.ddc",
 "packages/angular_components/laminate/enums/position.template": "packages/angular_components/laminate/enums/position.template.ddc",
 "packages/angular_components/laminate/enums/visibility": "packages/angular_components/laminate/enums/visibility.ddc",
 "packages/angular_components/laminate/enums/visibility.template": "packages/angular_components/laminate/enums/visibility.template.ddc",
 "packages/angular_components/laminate/overlay/constants": "packages/angular_components/laminate/overlay/constants.ddc",
 "packages/angular_components/laminate/overlay/constants.template": "packages/angular_components/laminate/overlay/constants.template.ddc",
 "packages/angular_components/laminate/overlay/module": "packages/angular_components/laminate/overlay/module.ddc",
 "packages/angular_components/laminate/overlay/module.template": "packages/angular_components/laminate/overlay/module.template.ddc",
 "packages/angular_components/laminate/overlay/overlay": "packages/angular_components/laminate/overlay/overlay.ddc",
 "packages/angular_components/laminate/overlay/overlay.template": "packages/angular_components/laminate/overlay/overlay.template.ddc",
 "packages/angular_components/laminate/overlay/zindexer": "packages/angular_components/laminate/overlay/zindexer.ddc",
 "packages/angular_components/laminate/overlay/zindexer.template": "packages/angular_components/laminate/overlay/zindexer.template.ddc",
 "packages/angular_components/laminate/popup/popup": "packages/angular_components/laminate/popup/popup.ddc",
 "packages/angular_components/laminate/popup/popup.template": "packages/angular_components/laminate/popup/popup.template.ddc",
 "packages/angular_components/laminate/portal/portal": "packages/angular_components/laminate/portal/portal.ddc",
 "packages/angular_components/laminate/portal/portal.template": "packages/angular_components/laminate/portal/portal.template.ddc",
 "packages/angular_components/laminate/ruler/dom_ruler": "packages/angular_components/laminate/ruler/dom_ruler.ddc",
 "packages/angular_components/laminate/ruler/dom_ruler.template": "packages/angular_components/laminate/ruler/dom_ruler.template.ddc",
 "packages/angular_components/material_button/material_button": "packages/angular_components/material_button/material_button.ddc",
 "packages/angular_components/material_button/material_button.scss.css.shim": "packages/angular_components/material_button/material_button.scss.css.shim.ddc",
 "packages/angular_components/material_button/material_button.template": "packages/angular_components/material_button/material_button.template.ddc",
 "packages/angular_components/material_button/material_button_base": "packages/angular_components/material_button/material_button_base.ddc",
 "packages/angular_components/material_button/material_button_base.template": "packages/angular_components/material_button/material_button_base.template.ddc",
 "packages/angular_components/material_dialog/material_dialog": "packages/angular_components/material_dialog/material_dialog.ddc",
 "packages/angular_components/material_dialog/material_dialog.scss.css.shim": "packages/angular_components/material_dialog/material_dialog.scss.css.shim.ddc",
 "packages/angular_components/material_dialog/material_dialog.template": "packages/angular_components/material_dialog/material_dialog.template.ddc",
 "packages/angular_components/material_icon/material_icon": "packages/angular_components/material_icon/material_icon.ddc",
 "packages/angular_components/material_icon/material_icon.scss.css.shim": "packages/angular_components/material_icon/material_icon.scss.css.shim.ddc",
 "packages/angular_components/material_icon/material_icon.template": "packages/angular_components/material_icon/material_icon.template.ddc",
 "packages/angular_components/material_ripple/material_ripple": "packages/angular_components/material_ripple/material_ripple.ddc",
 "packages/angular_components/material_ripple/material_ripple.scss.css": "packages/angular_components/material_ripple/material_ripple.scss.css.ddc",
 "packages/angular_components/material_ripple/material_ripple.template": "packages/angular_components/material_ripple/material_ripple.template.ddc",
 "packages/angular_components/mixins/has_tab_index": "packages/angular_components/mixins/has_tab_index.ddc",
 "packages/angular_components/mixins/has_tab_index.template": "packages/angular_components/mixins/has_tab_index.template.ddc",
 "packages/angular_components/model/a11y/keyboard_handler_mixin": "packages/angular_components/model/a11y/keyboard_handler_mixin.ddc",
 "packages/angular_components/model/a11y/keyboard_handler_mixin.template": "packages/angular_components/model/a11y/keyboard_handler_mixin.template.ddc",
 "packages/angular_components/model/action/async_action": "packages/angular_components/model/action/async_action.ddc",
 "packages/angular_components/model/action/async_action.template": "packages/angular_components/model/action/async_action.template.ddc",
 "packages/angular_components/model/ui/icon": "packages/angular_components/model/ui/icon.ddc",
 "packages/angular_components/model/ui/icon.template": "packages/angular_components/model/ui/icon.template.ddc",
 "packages/angular_components/src/laminate/components/modal/modal_controller_directive": "packages/angular_components/src/laminate/components/modal/modal_controller_directive.ddc",
 "packages/angular_components/src/laminate/components/modal/modal_controller_directive.template": "packages/angular_components/src/laminate/components/modal/modal_controller_directive.template.ddc",
 "packages/angular_components/src/laminate/enums/base": "packages/angular_components/src/laminate/enums/base.ddc",
 "packages/angular_components/src/laminate/enums/base.template": "packages/angular_components/src/laminate/enums/base.template.ddc",
 "packages/angular_components/src/laminate/overlay/overlay_ref": "packages/angular_components/src/laminate/overlay/overlay_ref.ddc",
 "packages/angular_components/src/laminate/overlay/overlay_ref.template": "packages/angular_components/src/laminate/overlay/overlay_ref.template.ddc",
 "packages/angular_components/src/laminate/popup/dom_popup_source": "packages/angular_components/src/laminate/popup/dom_popup_source.ddc",
 "packages/angular_components/src/laminate/popup/dom_popup_source.template": "packages/angular_components/src/laminate/popup/dom_popup_source.template.ddc",
 "packages/angular_components/src/laminate/popup/popup_hierarchy": "packages/angular_components/src/laminate/popup/popup_hierarchy.ddc",
 "packages/angular_components/src/laminate/popup/popup_hierarchy.template": "packages/angular_components/src/laminate/popup/popup_hierarchy.template.ddc",
 "packages/angular_components/src/laminate/ruler/ruler_interface": "packages/angular_components/src/laminate/ruler/ruler_interface.ddc",
 "packages/angular_components/src/laminate/ruler/ruler_interface.template": "packages/angular_components/src/laminate/ruler/ruler_interface.template.ddc",
 "packages/angular_components/src/model/action/async_action": "packages/angular_components/src/model/action/async_action.ddc",
 "packages/angular_components/src/model/action/async_action.template": "packages/angular_components/src/model/action/async_action.template.ddc",
 "packages/angular_components/src/utils/angular/managed_zone/managed_zone": "packages/angular_components/src/utils/angular/managed_zone/managed_zone.ddc",
 "packages/angular_components/src/utils/angular/managed_zone/managed_zone.template": "packages/angular_components/src/utils/angular/managed_zone/managed_zone.template.ddc",
 "packages/angular_components/src/utils/async/async_update_scheduler": "packages/angular_components/src/utils/async/async_update_scheduler.ddc",
 "packages/angular_components/src/utils/async/async_update_scheduler.template": "packages/angular_components/src/utils/async/async_update_scheduler.template.ddc",
 "packages/angular_components/theme/dark_theme": "packages/angular_components/theme/dark_theme.ddc",
 "packages/angular_components/theme/dark_theme.template": "packages/angular_components/theme/dark_theme.template.ddc",
 "packages/angular_components/theme/module": "packages/angular_components/theme/module.ddc",
 "packages/angular_components/theme/module.template": "packages/angular_components/theme/module.template.ddc",
 "packages/angular_components/utils/angular/imperative_view/imperative_view": "packages/angular_components/utils/angular/imperative_view/imperative_view.ddc",
 "packages/angular_components/utils/angular/imperative_view/imperative_view.template": "packages/angular_components/utils/angular/imperative_view/imperative_view.template.ddc",
 "packages/angular_components/utils/angular/managed_zone/angular_2": "packages/angular_components/utils/angular/managed_zone/angular_2.ddc",
 "packages/angular_components/utils/angular/managed_zone/angular_2.template": "packages/angular_components/utils/angular/managed_zone/angular_2.template.ddc",
 "packages/angular_components/utils/angular/properties/properties": "packages/angular_components/utils/angular/properties/properties.ddc",
 "packages/angular_components/utils/angular/properties/properties.template": "packages/angular_components/utils/angular/properties/properties.template.ddc",
 "packages/angular_components/utils/angular/reference/reference": "packages/angular_components/utils/angular/reference/reference.ddc",
 "packages/angular_components/utils/angular/reference/reference.template": "packages/angular_components/utils/angular/reference/reference.template.ddc",
 "packages/angular_components/utils/async/async": "packages/angular_components/utils/async/async.ddc",
 "packages/angular_components/utils/async/async.template": "packages/angular_components/utils/async/async.template.ddc",
 "packages/angular_components/utils/browser/dom_iterator/dom_iterator": "packages/angular_components/utils/browser/dom_iterator/dom_iterator.ddc",
 "packages/angular_components/utils/browser/dom_iterator/dom_iterator.template": "packages/angular_components/utils/browser/dom_iterator/dom_iterator.template.ddc",
 "packages/angular_components/utils/browser/dom_service/angular_2": "packages/angular_components/utils/browser/dom_service/angular_2.ddc",
 "packages/angular_components/utils/browser/dom_service/angular_2.template": "packages/angular_components/utils/browser/dom_service/angular_2.template.ddc",
 "packages/angular_components/utils/browser/dom_service/dom_service": "packages/angular_components/utils/browser/dom_service/dom_service.ddc",
 "packages/angular_components/utils/browser/dom_service/dom_service.template": "packages/angular_components/utils/browser/dom_service/dom_service.template.ddc",
 "packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability": "packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.ddc",
 "packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template": "packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template.ddc",
 "packages/angular_components/utils/browser/events/events": "packages/angular_components/utils/browser/events/events.ddc",
 "packages/angular_components/utils/browser/events/events.template": "packages/angular_components/utils/browser/events/events.template.ddc",
 "packages/angular_components/utils/browser/feature_detector/feature_detector": "packages/angular_components/utils/browser/feature_detector/feature_detector.ddc",
 "packages/angular_components/utils/browser/feature_detector/feature_detector.template": "packages/angular_components/utils/browser/feature_detector/feature_detector.template.ddc",
 "packages/angular_components/utils/browser/window/module": "packages/angular_components/utils/browser/window/module.ddc",
 "packages/angular_components/utils/browser/window/module.template": "packages/angular_components/utils/browser/window/module.template.ddc",
 "packages/angular_components/utils/color/color": "packages/angular_components/utils/color/color.ddc",
 "packages/angular_components/utils/color/color.template": "packages/angular_components/utils/color/color.template.ddc",
 "packages/angular_components/utils/color/material": "packages/angular_components/utils/color/material.ddc",
 "packages/angular_components/utils/color/material.template": "packages/angular_components/utils/color/material.template.ddc",
 "packages/angular_components/utils/disposer/disposable_callback": "packages/angular_components/utils/disposer/disposable_callback.ddc",
 "packages/angular_components/utils/disposer/disposable_callback.template": "packages/angular_components/utils/disposer/disposable_callback.template.ddc",
 "packages/angular_components/utils/disposer/disposer": "packages/angular_components/utils/disposer/disposer.ddc",
 "packages/angular_components/utils/disposer/disposer.template": "packages/angular_components/utils/disposer/disposer.template.ddc",
 "packages/angular_components/utils/rate_limit_utils/rate_limit_utils": "packages/angular_components/utils/rate_limit_utils/rate_limit_utils.ddc",
 "packages/angular_components/utils/rate_limit_utils/rate_limit_utils.template": "packages/angular_components/utils/rate_limit_utils/rate_limit_utils.template.ddc",
 "packages/angular_forms/angular_forms": "packages/angular_forms/angular_forms.ddc",
 "packages/angular_forms/angular_forms.template": "packages/angular_forms/angular_forms.template.ddc",
 "packages/angular_forms/src/directives": "packages/angular_forms/src/directives.ddc",
 "packages/angular_router/angular_router": "packages/angular_router/angular_router.ddc",
 "packages/angular_router/angular_router.template": "packages/angular_router/angular_router.template.ddc",
 "packages/angular_router/src/constants": "packages/angular_router/src/constants.ddc",
 "packages/angular_router/src/directives/router_outlet_directive": "packages/angular_router/src/directives/router_outlet_directive.ddc",
 "packages/angular_router/src/directives/router_outlet_directive.template": "packages/angular_router/src/directives/router_outlet_directive.template.ddc",
 "packages/async/async": "packages/async/async.ddc",
 "packages/charcode/ascii": "packages/charcode/ascii.ddc",
 "packages/charcode/charcode": "packages/charcode/charcode.ddc",
 "packages/charcode/html_entity": "packages/charcode/html_entity.ddc",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/dart_internal/extract_type_arguments": "packages/dart_internal/extract_type_arguments.ddc",
 "packages/http/browser_client": "packages/http/browser_client.ddc",
 "packages/http/http": "packages/http/http.ddc",
 "packages/http/src/base_client": "packages/http/src/base_client.ddc",
 "packages/http_parser/http_parser": "packages/http_parser/http_parser.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/js/js": "packages/js/js.ddc",
 "packages/js/js_util": "packages/js/js_util.ddc",
 "packages/logging/logging": "packages/logging/logging.ddc",
 "packages/markdown/markdown": "packages/markdown/markdown.ddc",
 "packages/meta/dart2js": "packages/meta/dart2js.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/observable/observable": "packages/observable/observable.ddc",
 "packages/path/path": "packages/path/path.ddc",
 "packages/quiver/core": "packages/quiver/core.ddc",
 "packages/quiver/strings": "packages/quiver/strings.ddc",
 "packages/source_span/source_span": "packages/source_span/source_span.ddc",
 "packages/stack_trace/stack_trace": "packages/stack_trace/stack_trace.ddc",
 "packages/string_scanner/string_scanner": "packages/string_scanner/string_scanner.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.ddc",
 "packages/typed_data/typed_data": "packages/typed_data/typed_data.ddc",
 "web/main": "main.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
     // Used in package:build_runner/src/server/build_updates_client/hot_reload_client.dart
     moduleParentsGraph: new Map(),
     moduleLoadingErrorCallbacks: new Map(),
     forceLoadModule: function (moduleName, callback, onError) {
       // dartdevc only strips the final extension when adding modules to source
       // maps, so we need to do the same.
       if (moduleName.endsWith('.ddc')) {
         moduleName = moduleName.substring(0, moduleName.length - 4);
       }
       if (typeof onError != 'undefined') {
         var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks;
         if (!errorCallbacks.has(moduleName)) {
           errorCallbacks.set(moduleName, new Set());
         }
         errorCallbacks.get(moduleName).add(onError);
       }
       requirejs.undef(moduleName);
       requirejs([moduleName], function() {
         if (typeof onError != 'undefined') {
           errorCallbacks.get(moduleName).delete(onError);
         }
         if (typeof callback != 'undefined') {
           callback();
         }
       });
     },
     getModuleLibraries: null, // set up by _initializeTools
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  // dartdevc only strips the final extension when adding modules to source
  // maps, so we need to do the same.
  if (moduleName != 'dart_sdk') {
    moduleName += '.ddc';
  }
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.requireModules) {
      if (e.message) {
        // If error occurred on loading dependencies, we need to invalidate ancessor too.
        var ancesor = e.message.match(/needed by: (.*)/);
        if (ancesor) {
          e.requireModules.push(ancesor[1]);
        }
      }
      for (const module of e.requireModules) {
        var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks.get(module);
        if (errorCallbacks) {
          for (const callback of errorCallbacks) callback(e);
          errorCallbacks.clear();
        }
      }
    }
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});

const modulesGraph = new Map();
function getRegisteredModuleName(moduleMap) {
  if ($dartLoader.moduleIdToUrl.has(moduleMap.name + '.ddc')) {
    return moduleMap.name + '.ddc';
  }
  return moduleMap.name;
}
requirejs.onResourceLoad = function (context, map, depArray) {
  const name = getRegisteredModuleName(map);
  const depNameArray = depArray.map(getRegisteredModuleName);
  if (modulesGraph.has(name)) {
    // TODO Move this logic to better place
    var previousDeps = modulesGraph.get(name);
    var changed = previousDeps.length != depNameArray.length;
    changed = changed || depNameArray.some(function(depName) {
      return !previousDeps.includes(depName);
    });
    if (changed) {
      console.warn("Dependencies graph change for module '" + name + "' detected. " +
        "Dependencies was [" + previousDeps + "], now [" +  depNameArray.map((depName) => depName) +"]. " +
        "Page can't be hot-reloaded, firing full page reload.");
      window.location.reload();
    }
  } else {
    modulesGraph.set(name, []);
    for (const depName of depNameArray) {
      if (!$dartLoader.moduleParentsGraph.has(depName)) {
        $dartLoader.moduleParentsGraph.set(depName, []);
      }
      $dartLoader.moduleParentsGraph.get(depName).push(name);
      modulesGraph.get(name).push(depName);
    }
  }
};
define("main.dart.bootstrap", ["web/main", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.ignoreWhitelistedErrors(false);
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  $dartLoader.getModuleLibraries = dart_sdk.dart.getModuleLibraries;
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (typeof document != 'undefined') {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  app.main.main();
  var bootstrap = {
      hot$onChildUpdate: function(childName, child) {
        if (childName === "main.dart") {
          child.main();
          return true;
        }
      }
    }
  dart_sdk.dart.trackLibraries("main.dart.bootstrap", {
    "main.dart.bootstrap": bootstrap
  }, '');
  return {
    bootstrap: bootstrap
  };
});
})();
