define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const utils__angular__properties__properties = Object.create(_root);
  utils__angular__properties__properties._parseBool = function(strValue) {
    switch (strValue) {
      case "":
      {
        return true;
      }
      case "true":
      {
        return true;
      }
      case "false":
      {
        return false;
      }
      default:
      {
        dart.throw(new core.ArgumentError.value(strValue, "strValue", "Only \"\", \"true\", and \"false\" are acceptable values for parseBool. " + "Found: "));
      }
    }
  };
  utils__angular__properties__properties.getBool = function(inputValue) {
    if (inputValue == null) dart.throw(new core.ArgumentError.notNull("inputValue"));
    if (typeof inputValue == 'string') return utils__angular__properties__properties._parseBool(inputValue);
    if (typeof inputValue == 'boolean') return inputValue;
    dart.throw(new core.ArgumentError.value(inputValue, "inputValue", "Expected a String, or bool type"));
  };
  utils__angular__properties__properties.attributeToBool = function(inputValue, opts) {
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : false;
    if (inputValue == null) return defaultValue;
    return utils__angular__properties__properties._parseBool(inputValue);
  };
  utils__angular__properties__properties.getInt = function(inputValue, opts) {
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : 0;
    if (inputValue == null) {
      return defaultValue;
    } else if (typeof inputValue == 'string') {
      return core.int.parse(inputValue);
    } else {
      if (!core.int.is(inputValue)) dart.assertFailed();
      return core.int._check(inputValue);
    }
  };
  dart.trackLibraries("packages/angular_components/utils/angular/properties/properties.ddc", {
    "package:angular_components/utils/angular/properties/properties.dart": utils__angular__properties__properties
  }, '{"version":3,"sourceRoot":"","sources":["properties.dart"],"names":[],"mappings":";;;;;;;+DAgBgB,QAAe;AAC7B,YAAQ,QAAQ;UACT;;AACH,cAAO;;UACJ;;AACH,cAAO;;UACJ;;AACH,cAAO;;;;AAEP,uBAAM,wBAAmB,CACrB,QAAQ,EACR,YACA,6EACA;;;EAEV;4DAYa,UAAU;AACrB,QAAI,UAAU,IAAI,MAAM,eAAM,0BAAqB,CAAC;AAEpD,eAAI,UAAU,cAAY,MAAO,kDAAU,CAAC,UAAU;AACtD,eAAI,UAAU,eAAU,MAAO,WAAU;AAEzC,mBAAM,wBAAmB,CACrB,UAAU,EAAE,cAAc;EAChC;oEAiBqB,UAAiB;QAAQ,oEAAe;AAC3D,QAAI,UAAU,IAAI,MAAM,MAAO,aAAY;AAC3C,UAAO,kDAAU,CAAC,UAAU;EAC9B;2DAMW,UAAU;QAAO,oEAAe;AACzC,QAAI,UAAU,IAAI,MAAM;AACtB,YAAO,aAAY;UACd,YAAI,UAAU,cAAY;AAC/B,YAAO,SAAG,MAAM,CAAC,UAAU;WACtB;AACL,uBAAO,UAAU;AACjB,6BAAO,UAAU;;EAErB","file":"properties.ddc.js"}');
  // Exports:
  return {
    utils__angular__properties__properties: utils__angular__properties__properties
  };
});

//# sourceMappingURL=properties.ddc.js.map
