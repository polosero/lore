define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const theme__dark_theme = Object.create(_root);
  const $classes = dartx.classes;
  dart.defineLazy(theme__dark_theme, {
    /*theme__dark_theme.darkThemeClass*/get darkThemeClass() {
      return "acx-theme-dark";
    }
  });
  theme__dark_theme.AcxDarkTheme = class AcxDarkTheme extends core.Object {
    get isDarkTheme() {
      return this[isDarkTheme];
    }
    set isDarkTheme(value) {
      super.isDarkTheme = value;
    }
    theme(element) {
      if (dart.test(this.isDarkTheme)) {
        element[$classes].add("acx-theme-dark");
      }
    }
    themeElement(element) {
      if (dart.test(this.isDarkTheme)) {
        element[$classes].add("acx-theme-dark");
      }
    }
  };
  (theme__dark_theme.AcxDarkTheme.new = function(dark) {
    this[isDarkTheme] = dark != null ? dark : false;
  }).prototype = theme__dark_theme.AcxDarkTheme.prototype;
  dart.addTypeTests(theme__dark_theme.AcxDarkTheme);
  const isDarkTheme = Symbol("AcxDarkTheme.isDarkTheme");
  dart.setMethodSignature(theme__dark_theme.AcxDarkTheme, () => ({
    __proto__: dart.getMethods(theme__dark_theme.AcxDarkTheme.__proto__),
    theme: dart.fnType(dart.void, [html.HtmlElement]),
    themeElement: dart.fnType(dart.void, [html.HtmlElement])
  }));
  dart.setFieldSignature(theme__dark_theme.AcxDarkTheme, () => ({
    __proto__: dart.getFields(theme__dark_theme.AcxDarkTheme.__proto__),
    isDarkTheme: dart.finalFieldType(core.bool)
  }));
  theme__dark_theme.DarkThemeDirective = class DarkThemeDirective extends core.Object {};
  (theme__dark_theme.DarkThemeDirective.new = function() {
  }).prototype = theme__dark_theme.DarkThemeDirective.prototype;
  dart.addTypeTests(theme__dark_theme.DarkThemeDirective);
  dart.trackLibraries("packages/angular_components/theme/dark_theme.ddc", {
    "package:angular_components/theme/dark_theme.dart": theme__dark_theme
  }, '{"version":3,"sourceRoot":"","sources":["dark_theme.dart"],"names":[],"mappings":";;;;;;;;;;MAWM,gCAAc;YAAG;;;;IAqBV;;;;;;UAKA,OAAmB;AAC5B,oBAAI,gBAAW,GAAE;AACf,eAAO,UAAQ,IAAI,CAAC,gBAAc;;IAEtC;iBAEkB,OAAmB;AACnC,oBAAI,gBAAW,GAAE;AACf,eAAO,UAAQ,IAAI,CAAC,gBAAc;;IAEtC;;iDAba,IAA6C;IACpD,iBAAW,GAAG,IAAI,WAAJ,IAAI,GAAI;EAAK;;;;;;;;;;;;;;EAoBT","file":"dark_theme.ddc.js"}');
  // Exports:
  return {
    theme__dark_theme: theme__dark_theme
  };
});

//# sourceMappingURL=dark_theme.ddc.js.map
