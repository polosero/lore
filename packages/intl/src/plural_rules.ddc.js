define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__plural_rules = Object.create(_root);
  const $modulo = dartx['%'];
  const $containsKey = dartx.containsKey;
  let VoidToPluralCase = () => (VoidToPluralCase = dart.constFn(dart.fnType(src__plural_rules.PluralCase, [])))();
  src__plural_rules.PluralCase = class PluralCase extends core.Object {
    toString() {
      return {
        0: "PluralCase.ZERO",
        1: "PluralCase.ONE",
        2: "PluralCase.TWO",
        3: "PluralCase.FEW",
        4: "PluralCase.MANY",
        5: "PluralCase.OTHER"
      }[this.index];
    }
  };
  (src__plural_rules.PluralCase.new = function(x) {
    this.index = x;
  }).prototype = src__plural_rules.PluralCase.prototype;
  dart.addTypeTests(src__plural_rules.PluralCase);
  dart.setFieldSignature(src__plural_rules.PluralCase, () => ({
    __proto__: dart.getFields(src__plural_rules.PluralCase.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__plural_rules.PluralCase, ['toString']);
  src__plural_rules.PluralCase.ZERO = dart.const(new src__plural_rules.PluralCase.new(0));
  src__plural_rules.PluralCase.ONE = dart.const(new src__plural_rules.PluralCase.new(1));
  src__plural_rules.PluralCase.TWO = dart.const(new src__plural_rules.PluralCase.new(2));
  src__plural_rules.PluralCase.FEW = dart.const(new src__plural_rules.PluralCase.new(3));
  src__plural_rules.PluralCase.MANY = dart.const(new src__plural_rules.PluralCase.new(4));
  src__plural_rules.PluralCase.OTHER = dart.const(new src__plural_rules.PluralCase.new(5));
  src__plural_rules.PluralCase.values = dart.constList([src__plural_rules.PluralCase.ZERO, src__plural_rules.PluralCase.ONE, src__plural_rules.PluralCase.TWO, src__plural_rules.PluralCase.FEW, src__plural_rules.PluralCase.MANY, src__plural_rules.PluralCase.OTHER], src__plural_rules.PluralCase);
  src__plural_rules._default_rule = function() {
    return src__plural_rules.OTHER;
  };
  src__plural_rules.startRuleEvaluation = function(howMany) {
    src__plural_rules._n = howMany;
  };
  dart.defineLazy(src__plural_rules, {
    /*src__plural_rules._n*/get _n() {
      return null;
    },
    set _n(_) {}
  });
  dart.copyProperties(src__plural_rules, {
    get _i() {
      return src__plural_rules._n;
    }
  });
  dart.defineLazy(src__plural_rules, {
    /*src__plural_rules.opt_precision*/get opt_precision() {
      return null;
    },
    set opt_precision(_) {}
  });
  dart.copyProperties(src__plural_rules, {
    get _v() {
      return 0;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get _f() {
      return 0;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get _t() {
      return 0;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get ZERO() {
      return src__plural_rules.PluralCase.ZERO;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get ONE() {
      return src__plural_rules.PluralCase.ONE;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get TWO() {
      return src__plural_rules.PluralCase.TWO;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get FEW() {
      return src__plural_rules.PluralCase.FEW;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get MANY() {
      return src__plural_rules.PluralCase.MANY;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get OTHER() {
      return src__plural_rules.PluralCase.OTHER;
    }
  });
  src__plural_rules._fil_rule = function() {
    if (src__plural_rules._v === 0 && (src__plural_rules._i === 1 || src__plural_rules._i === 2 || src__plural_rules._i === 3) || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) !== 4 && src__plural_rules._i[$modulo](10) !== 6 && src__plural_rules._i[$modulo](10) !== 9 || src__plural_rules._v !== 0 && src__plural_rules._f[$modulo](10) !== 4 && src__plural_rules._f[$modulo](10) !== 6 && src__plural_rules._f[$modulo](10) !== 9) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._pt_PT_rule = function() {
    if (src__plural_rules._n === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._br_rule = function() {
    if (src__plural_rules._n[$modulo](10) === 1 && src__plural_rules._n[$modulo](100) !== 11 && src__plural_rules._n[$modulo](100) !== 71 && src__plural_rules._n[$modulo](100) !== 91) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n[$modulo](10) === 2 && src__plural_rules._n[$modulo](100) !== 12 && src__plural_rules._n[$modulo](100) !== 72 && src__plural_rules._n[$modulo](100) !== 92) {
      return src__plural_rules.TWO;
    }
    if ((src__plural_rules._n[$modulo](10) >= 3 && src__plural_rules._n[$modulo](10) <= 4 || src__plural_rules._n[$modulo](10) === 9) && (src__plural_rules._n[$modulo](100) < 10 || src__plural_rules._n[$modulo](100) > 19) && (src__plural_rules._n[$modulo](100) < 70 || src__plural_rules._n[$modulo](100) > 79) && (src__plural_rules._n[$modulo](100) < 90 || src__plural_rules._n[$modulo](100) > 99)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n !== 0 && src__plural_rules._n[$modulo](1000000) === 0) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._sr_rule = function() {
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) === 1 && src__plural_rules._i[$modulo](100) !== 11 || src__plural_rules._f[$modulo](10) === 1 && src__plural_rules._f[$modulo](100) !== 11) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 2 && src__plural_rules._i[$modulo](10) <= 4 && (src__plural_rules._i[$modulo](100) < 12 || src__plural_rules._i[$modulo](100) > 14) || src__plural_rules._f[$modulo](10) >= 2 && src__plural_rules._f[$modulo](10) <= 4 && (src__plural_rules._f[$modulo](100) < 12 || src__plural_rules._f[$modulo](100) > 14)) {
      return src__plural_rules.FEW;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._ro_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v !== 0 || src__plural_rules._n === 0 || src__plural_rules._n !== 1 && src__plural_rules._n[$modulo](100) >= 1 && src__plural_rules._n[$modulo](100) <= 19) {
      return src__plural_rules.FEW;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._hi_rule = function() {
    if (src__plural_rules._i === 0 || src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._fr_rule = function() {
    if (src__plural_rules._i === 0 || src__plural_rules._i === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._cs_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    if (dart.notNull(src__plural_rules._i) >= 2 && dart.notNull(src__plural_rules._i) <= 4 && src__plural_rules._v === 0) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._v !== 0) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._pl_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 2 && src__plural_rules._i[$modulo](10) <= 4 && (src__plural_rules._i[$modulo](100) < 12 || src__plural_rules._i[$modulo](100) > 14)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i !== 1 && src__plural_rules._i[$modulo](10) >= 0 && src__plural_rules._i[$modulo](10) <= 1 || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 5 && src__plural_rules._i[$modulo](10) <= 9 || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) >= 12 && src__plural_rules._i[$modulo](100) <= 14) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._lv_rule = function() {
    if (src__plural_rules._n[$modulo](10) === 0 || src__plural_rules._n[$modulo](100) >= 11 && src__plural_rules._n[$modulo](100) <= 19 || src__plural_rules._v === 2 && src__plural_rules._f[$modulo](100) >= 11 && src__plural_rules._f[$modulo](100) <= 19) {
      return src__plural_rules.ZERO;
    }
    if (src__plural_rules._n[$modulo](10) === 1 && src__plural_rules._n[$modulo](100) !== 11 || src__plural_rules._v === 2 && src__plural_rules._f[$modulo](10) === 1 && src__plural_rules._f[$modulo](100) !== 11 || src__plural_rules._v !== 2 && src__plural_rules._f[$modulo](10) === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._he_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._i === 2 && src__plural_rules._v === 0) {
      return src__plural_rules.TWO;
    }
    if (src__plural_rules._v === 0 && (dart.notNull(src__plural_rules._n) < 0 || dart.notNull(src__plural_rules._n) > 10) && src__plural_rules._n[$modulo](10) === 0) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._mt_rule = function() {
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n === 0 || src__plural_rules._n[$modulo](100) >= 2 && src__plural_rules._n[$modulo](100) <= 10) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n[$modulo](100) >= 11 && src__plural_rules._n[$modulo](100) <= 19) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._si_rule = function() {
    if (src__plural_rules._n === 0 || src__plural_rules._n === 1 || src__plural_rules._i === 0 && src__plural_rules._f === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._cy_rule = function() {
    if (src__plural_rules._n === 0) {
      return src__plural_rules.ZERO;
    }
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n === 2) {
      return src__plural_rules.TWO;
    }
    if (src__plural_rules._n === 3) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n === 6) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._da_rule = function() {
    if (src__plural_rules._n === 1 || src__plural_rules._t !== 0 && (src__plural_rules._i === 0 || src__plural_rules._i === 1)) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._ru_rule = function() {
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) === 1 && src__plural_rules._i[$modulo](100) !== 11) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 2 && src__plural_rules._i[$modulo](10) <= 4 && (src__plural_rules._i[$modulo](100) < 12 || src__plural_rules._i[$modulo](100) > 14)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) === 0 || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 5 && src__plural_rules._i[$modulo](10) <= 9 || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) >= 11 && src__plural_rules._i[$modulo](100) <= 14) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._be_rule = function() {
    if (src__plural_rules._n[$modulo](10) === 1 && src__plural_rules._n[$modulo](100) !== 11) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n[$modulo](10) >= 2 && src__plural_rules._n[$modulo](10) <= 4 && (src__plural_rules._n[$modulo](100) < 12 || src__plural_rules._n[$modulo](100) > 14)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n[$modulo](10) === 0 || src__plural_rules._n[$modulo](10) >= 5 && src__plural_rules._n[$modulo](10) <= 9 || src__plural_rules._n[$modulo](100) >= 11 && src__plural_rules._n[$modulo](100) <= 14) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._mk_rule = function() {
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) === 1 || src__plural_rules._f[$modulo](10) === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._ga_rule = function() {
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n === 2) {
      return src__plural_rules.TWO;
    }
    if (dart.notNull(src__plural_rules._n) >= 3 && dart.notNull(src__plural_rules._n) <= 6) {
      return src__plural_rules.FEW;
    }
    if (dart.notNull(src__plural_rules._n) >= 7 && dart.notNull(src__plural_rules._n) <= 10) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._pt_rule = function() {
    if (dart.notNull(src__plural_rules._n) >= 0 && dart.notNull(src__plural_rules._n) <= 2 && src__plural_rules._n !== 2) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._es_rule = function() {
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._is_rule = function() {
    if (src__plural_rules._t === 0 && src__plural_rules._i[$modulo](10) === 1 && src__plural_rules._i[$modulo](100) !== 11 || src__plural_rules._t !== 0) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._ar_rule = function() {
    if (src__plural_rules._n === 0) {
      return src__plural_rules.ZERO;
    }
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n === 2) {
      return src__plural_rules.TWO;
    }
    if (src__plural_rules._n[$modulo](100) >= 3 && src__plural_rules._n[$modulo](100) <= 10) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n[$modulo](100) >= 11 && src__plural_rules._n[$modulo](100) <= 99) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._sl_rule = function() {
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) === 2) {
      return src__plural_rules.TWO;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) >= 3 && src__plural_rules._i[$modulo](100) <= 4 || src__plural_rules._v !== 0) {
      return src__plural_rules.FEW;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._lt_rule = function() {
    if (src__plural_rules._n[$modulo](10) === 1 && (src__plural_rules._n[$modulo](100) < 11 || src__plural_rules._n[$modulo](100) > 19)) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n[$modulo](10) >= 2 && src__plural_rules._n[$modulo](10) <= 9 && (src__plural_rules._n[$modulo](100) < 11 || src__plural_rules._n[$modulo](100) > 19)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._f !== 0) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._en_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  src__plural_rules._ak_rule = function() {
    if (dart.notNull(src__plural_rules._n) >= 0 && dart.notNull(src__plural_rules._n) <= 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.defineLazy(src__plural_rules, {
    /*src__plural_rules.pluralRules*/get pluralRules() {
      return new _js_helper.LinkedMap.from(["af", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "am", dart.fn(src__plural_rules._hi_rule, VoidToPluralCase()), "ar", dart.fn(src__plural_rules._ar_rule, VoidToPluralCase()), "az", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "be", dart.fn(src__plural_rules._be_rule, VoidToPluralCase()), "bg", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "bn", dart.fn(src__plural_rules._hi_rule, VoidToPluralCase()), "br", dart.fn(src__plural_rules._br_rule, VoidToPluralCase()), "bs", dart.fn(src__plural_rules._sr_rule, VoidToPluralCase()), "ca", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "chr", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "cs", dart.fn(src__plural_rules._cs_rule, VoidToPluralCase()), "cy", dart.fn(src__plural_rules._cy_rule, VoidToPluralCase()), "da", dart.fn(src__plural_rules._da_rule, VoidToPluralCase()), "de", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "de_AT", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "de_CH", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "el", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "en", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "en_AU", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "en_CA", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "en_GB", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "en_IE", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "en_IN", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "en_SG", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "en_US", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "en_ZA", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "es", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "es_419", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "es_ES", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "es_MX", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "es_US", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "et", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "eu", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "fa", dart.fn(src__plural_rules._hi_rule, VoidToPluralCase()), "fi", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "fil", dart.fn(src__plural_rules._fil_rule, VoidToPluralCase()), "fr", dart.fn(src__plural_rules._fr_rule, VoidToPluralCase()), "fr_CA", dart.fn(src__plural_rules._fr_rule, VoidToPluralCase()), "ga", dart.fn(src__plural_rules._ga_rule, VoidToPluralCase()), "gl", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "gsw", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "gu", dart.fn(src__plural_rules._hi_rule, VoidToPluralCase()), "haw", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "he", dart.fn(src__plural_rules._he_rule, VoidToPluralCase()), "hi", dart.fn(src__plural_rules._hi_rule, VoidToPluralCase()), "hr", dart.fn(src__plural_rules._sr_rule, VoidToPluralCase()), "hu", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "hy", dart.fn(src__plural_rules._fr_rule, VoidToPluralCase()), "id", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "in", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "is", dart.fn(src__plural_rules._is_rule, VoidToPluralCase()), "it", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "iw", dart.fn(src__plural_rules._he_rule, VoidToPluralCase()), "ja", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "ka", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "kk", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "km", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "kn", dart.fn(src__plural_rules._hi_rule, VoidToPluralCase()), "ko", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "ky", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "ln", dart.fn(src__plural_rules._ak_rule, VoidToPluralCase()), "lo", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "lt", dart.fn(src__plural_rules._lt_rule, VoidToPluralCase()), "lv", dart.fn(src__plural_rules._lv_rule, VoidToPluralCase()), "mk", dart.fn(src__plural_rules._mk_rule, VoidToPluralCase()), "ml", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "mn", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "mo", dart.fn(src__plural_rules._ro_rule, VoidToPluralCase()), "mr", dart.fn(src__plural_rules._hi_rule, VoidToPluralCase()), "ms", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "mt", dart.fn(src__plural_rules._mt_rule, VoidToPluralCase()), "my", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "nb", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "ne", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "nl", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "no", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "no_NO", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "or", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "pa", dart.fn(src__plural_rules._ak_rule, VoidToPluralCase()), "pl", dart.fn(src__plural_rules._pl_rule, VoidToPluralCase()), "pt", dart.fn(src__plural_rules._pt_rule, VoidToPluralCase()), "pt_BR", dart.fn(src__plural_rules._pt_rule, VoidToPluralCase()), "pt_PT", dart.fn(src__plural_rules._pt_PT_rule, VoidToPluralCase()), "ro", dart.fn(src__plural_rules._ro_rule, VoidToPluralCase()), "ru", dart.fn(src__plural_rules._ru_rule, VoidToPluralCase()), "sh", dart.fn(src__plural_rules._sr_rule, VoidToPluralCase()), "si", dart.fn(src__plural_rules._si_rule, VoidToPluralCase()), "sk", dart.fn(src__plural_rules._cs_rule, VoidToPluralCase()), "sl", dart.fn(src__plural_rules._sl_rule, VoidToPluralCase()), "sq", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "sr", dart.fn(src__plural_rules._sr_rule, VoidToPluralCase()), "sr_Latn", dart.fn(src__plural_rules._sr_rule, VoidToPluralCase()), "sv", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "sw", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "ta", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "te", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "th", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "tl", dart.fn(src__plural_rules._fil_rule, VoidToPluralCase()), "tr", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "uk", dart.fn(src__plural_rules._ru_rule, VoidToPluralCase()), "ur", dart.fn(src__plural_rules._en_rule, VoidToPluralCase()), "uz", dart.fn(src__plural_rules._es_rule, VoidToPluralCase()), "vi", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "zh", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "zh_CN", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "zh_HK", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "zh_TW", dart.fn(src__plural_rules._default_rule, VoidToPluralCase()), "zu", dart.fn(src__plural_rules._hi_rule, VoidToPluralCase()), "default", dart.fn(src__plural_rules._default_rule, VoidToPluralCase())]);
    }
  });
  src__plural_rules.localeHasPluralRules = function(locale) {
    return src__plural_rules.pluralRules[$containsKey](locale);
  };
  dart.trackLibraries("packages/intl/src/plural_rules.ddc", {
    "package:intl/src/plural_rules.dart": src__plural_rules
  }, '{"version":3,"sourceRoot":"","sources":["plural_rules.dart"],"names":[],"mappings":"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","file":"plural_rules.ddc.js"}');
  // Exports:
  return {
    src__plural_rules: src__plural_rules
  };
});

//# sourceMappingURL=plural_rules.ddc.js.map
