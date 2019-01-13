define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_forms/src/directives', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, angular, modules, directive_change_detector, directives, change_detection, change_detection$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const src__directives__validators = directives.src__directives__validators;
  const src__directives__radio_control_value_accessor = directives.src__directives__radio_control_value_accessor;
  const src__directives__ng_control_status = directives.src__directives__ng_control_status;
  const src__facade__lang$46template = change_detection.src__facade__lang$46template;
  const src__di__reflector = change_detection$.src__di__reflector;
  const _root = Object.create(null);
  const angular_forms$46template = Object.create(_root);
  const src__validators$46template = Object.create(_root);
  const src__directives__validators$46template = Object.create(_root);
  const src__model$46template = Object.create(_root);
  const src__directives__abstract_control_directive$46template = Object.create(_root);
  const src__directives__control_value_accessor$46template = Object.create(_root);
  const src__directives__checkbox_value_accessor$46template = Object.create(_root);
  const src__directives__normalize_validator$46template = Object.create(_root);
  const src__directives__number_value_accessor$46template = Object.create(_root);
  const src__directives__select_control_value_accessor$46template = Object.create(_root);
  const src__directives__radio_control_value_accessor$46template = Object.create(_root);
  const src__directives__ng_control_group$46template = Object.create(_root);
  const src__directives__default_value_accessor$46template = Object.create(_root);
  const src__directives__shared$46template = Object.create(_root);
  const src__directives__ng_control$46template = Object.create(_root);
  const src__directives__form_interface$46template = Object.create(_root);
  const src__directives__control_container$46template = Object.create(_root);
  const src__directives__abstract_form$46template = Object.create(_root);
  const src__directives__ng_form$46template = Object.create(_root);
  const src__directives__memorized_form$46template = Object.create(_root);
  const src__directives__ng_control_name$46template = Object.create(_root);
  const src__directives__ng_control_status$46template = Object.create(_root);
  const src__directives__ng_form_control$46template = Object.create(_root);
  const src__directives__ng_form_model$46template = Object.create(_root);
  const src__directives__ng_model$46template = Object.create(_root);
  const src__directives$46template = Object.create(_root);
  const src__form_builder$46template = Object.create(_root);
  let VoidToRadioControlRegistry = () => (VoidToRadioControlRegistry = dart.constFn(dart.fnType(src__directives__radio_control_value_accessor.RadioControlRegistry, [])))();
  dart.defineLazy(angular_forms$46template, {
    /*angular_forms$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  angular_forms$46template.initReflector = function() {
    if (dart.test(angular_forms$46template._visited)) {
      return;
    }
    angular_forms$46template._visited = true;
    src__directives$46template.initReflector();
    src__directives__radio_control_value_accessor$46template.initReflector();
    src__form_builder$46template.initReflector();
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
  };
  dart.defineLazy(src__validators$46template, {
    /*src__validators$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__validators$46template.initReflector = function() {
    if (dart.test(src__validators$46template._visited)) {
      return;
    }
    src__validators$46template._visited = true;
    src__directives__validators$46template.initReflector();
    src__model$46template.initReflector();
    angular$46template.initReflector();
  };
  const _expr_0 = Symbol('_expr_0');
  src__directives__validators$46template.MinLengthValidatorNgCd = class MinLengthValidatorNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.minLengthAttr;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(el, "minlength", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__directives__validators$46template.MinLengthValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    src__directives__validators$46template.MinLengthValidatorNgCd.__proto__.new.call(this);
  }).prototype = src__directives__validators$46template.MinLengthValidatorNgCd.prototype;
  dart.addTypeTests(src__directives__validators$46template.MinLengthValidatorNgCd);
  const instance$ = Symbol("MinLengthValidatorNgCd.instance");
  dart.setFieldSignature(src__directives__validators$46template.MinLengthValidatorNgCd, () => ({
    __proto__: dart.getFields(src__directives__validators$46template.MinLengthValidatorNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__validators.MinLengthValidator),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__directives__validators$46template.MaxLengthValidatorNgCd = class MaxLengthValidatorNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$0];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.maxLengthAttr;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(el, "maxlength", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__directives__validators$46template.MaxLengthValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$0] = instance;
    src__directives__validators$46template.MaxLengthValidatorNgCd.__proto__.new.call(this);
  }).prototype = src__directives__validators$46template.MaxLengthValidatorNgCd.prototype;
  dart.addTypeTests(src__directives__validators$46template.MaxLengthValidatorNgCd);
  const instance$0 = Symbol("MaxLengthValidatorNgCd.instance");
  dart.setFieldSignature(src__directives__validators$46template.MaxLengthValidatorNgCd, () => ({
    __proto__: dart.getFields(src__directives__validators$46template.MaxLengthValidatorNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__validators.MaxLengthValidator),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__directives__validators$46template.PatternValidatorNgCd = class PatternValidatorNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$1];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.pattern;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(el, "pattern", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__directives__validators$46template.PatternValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$1] = instance;
    src__directives__validators$46template.PatternValidatorNgCd.__proto__.new.call(this);
  }).prototype = src__directives__validators$46template.PatternValidatorNgCd.prototype;
  dart.addTypeTests(src__directives__validators$46template.PatternValidatorNgCd);
  const instance$1 = Symbol("PatternValidatorNgCd.instance");
  dart.setFieldSignature(src__directives__validators$46template.PatternValidatorNgCd, () => ({
    __proto__: dart.getFields(src__directives__validators$46template.PatternValidatorNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__validators.PatternValidator),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__directives__validators$46template, {
    /*src__directives__validators$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__validators$46template.initReflector = function() {
    if (dart.test(src__directives__validators$46template._visited)) {
      return;
    }
    src__directives__validators$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__model$46template, {
    /*src__model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__model$46template.initReflector = function() {
    if (dart.test(src__model$46template._visited)) {
      return;
    }
    src__model$46template._visited = true;
    src__directives__validators$46template.initReflector();
  };
  dart.defineLazy(src__directives__abstract_control_directive$46template, {
    /*src__directives__abstract_control_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__abstract_control_directive$46template.initReflector = function() {
    if (dart.test(src__directives__abstract_control_directive$46template._visited)) {
      return;
    }
    src__directives__abstract_control_directive$46template._visited = true;
    src__model$46template.initReflector();
  };
  dart.defineLazy(src__directives__control_value_accessor$46template, {
    /*src__directives__control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__control_value_accessor$46template.initReflector = function() {
    if (dart.test(src__directives__control_value_accessor$46template._visited)) {
      return;
    }
    src__directives__control_value_accessor$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(src__directives__checkbox_value_accessor$46template, {
    /*src__directives__checkbox_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__checkbox_value_accessor$46template.initReflector = function() {
    if (dart.test(src__directives__checkbox_value_accessor$46template._visited)) {
      return;
    }
    src__directives__checkbox_value_accessor$46template._visited = true;
    src__directives__control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__directives__normalize_validator$46template, {
    /*src__directives__normalize_validator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__normalize_validator$46template.initReflector = function() {
    if (dart.test(src__directives__normalize_validator$46template._visited)) {
      return;
    }
    src__directives__normalize_validator$46template._visited = true;
    src__directives__validators$46template.initReflector();
  };
  dart.defineLazy(src__directives__number_value_accessor$46template, {
    /*src__directives__number_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__number_value_accessor$46template.initReflector = function() {
    if (dart.test(src__directives__number_value_accessor$46template._visited)) {
      return;
    }
    src__directives__number_value_accessor$46template._visited = true;
    src__directives__control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__directives__select_control_value_accessor$46template, {
    /*src__directives__select_control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__select_control_value_accessor$46template.initReflector = function() {
    if (dart.test(src__directives__select_control_value_accessor$46template._visited)) {
      return;
    }
    src__directives__select_control_value_accessor$46template._visited = true;
    src__directives__control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
    src__facade__lang$46template.initReflector();
  };
  dart.defineLazy(src__directives__radio_control_value_accessor$46template, {
    /*src__directives__radio_control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__radio_control_value_accessor$46template.initReflector = function() {
    if (dart.test(src__directives__radio_control_value_accessor$46template._visited)) {
      return;
    }
    src__directives__radio_control_value_accessor$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__directives__radio_control_value_accessor.RadioControlRegistry), dart.fn(() => new src__directives__radio_control_value_accessor.RadioControlRegistry.new(), VoidToRadioControlRegistry()));
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
  };
  dart.defineLazy(src__directives__ng_control_group$46template, {
    /*src__directives__ng_control_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_control_group$46template.initReflector = function() {
    if (dart.test(src__directives__ng_control_group$46template._visited)) {
      return;
    }
    src__directives__ng_control_group$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.defineLazy(src__directives__default_value_accessor$46template, {
    /*src__directives__default_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__default_value_accessor$46template.initReflector = function() {
    if (dart.test(src__directives__default_value_accessor$46template._visited)) {
      return;
    }
    src__directives__default_value_accessor$46template._visited = true;
    src__directives__control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
  };
  dart.defineLazy(src__directives__shared$46template, {
    /*src__directives__shared$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__shared$46template.initReflector = function() {
    if (dart.test(src__directives__shared$46template._visited)) {
      return;
    }
    src__directives__shared$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__abstract_control_directive$46template.initReflector();
    src__directives__checkbox_value_accessor$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__default_value_accessor$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    src__directives__normalize_validator$46template.initReflector();
    src__directives__number_value_accessor$46template.initReflector();
    src__directives__radio_control_value_accessor$46template.initReflector();
    src__directives__select_control_value_accessor$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.defineLazy(src__directives__ng_control$46template, {
    /*src__directives__ng_control$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_control$46template.initReflector = function() {
    if (dart.test(src__directives__ng_control$46template._visited)) {
      return;
    }
    src__directives__ng_control$46template._visited = true;
    src__model$46template.initReflector();
    src__directives__abstract_control_directive$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__shared$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.defineLazy(src__directives__form_interface$46template, {
    /*src__directives__form_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__form_interface$46template.initReflector = function() {
    if (dart.test(src__directives__form_interface$46template._visited)) {
      return;
    }
    src__directives__form_interface$46template._visited = true;
    src__model$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
  };
  dart.defineLazy(src__directives__control_container$46template, {
    /*src__directives__control_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__control_container$46template.initReflector = function() {
    if (dart.test(src__directives__control_container$46template._visited)) {
      return;
    }
    src__directives__control_container$46template._visited = true;
    src__model$46template.initReflector();
    src__directives__abstract_control_directive$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
  };
  dart.defineLazy(src__directives__abstract_form$46template, {
    /*src__directives__abstract_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__abstract_form$46template.initReflector = function() {
    if (dart.test(src__directives__abstract_form$46template._visited)) {
      return;
    }
    src__directives__abstract_form$46template._visited = true;
    src__model$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__directives__ng_form$46template, {
    /*src__directives__ng_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_form$46template.initReflector = function() {
    if (dart.test(src__directives__ng_form$46template._visited)) {
      return;
    }
    src__directives__ng_form$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__abstract_form$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
  };
  dart.defineLazy(src__directives__memorized_form$46template, {
    /*src__directives__memorized_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__memorized_form$46template.initReflector = function() {
    if (dart.test(src__directives__memorized_form$46template._visited)) {
      return;
    }
    src__directives__memorized_form$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    src__directives__ng_form$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
  };
  dart.defineLazy(src__directives__ng_control_name$46template, {
    /*src__directives__ng_control_name$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_control_name$46template.initReflector = function() {
    if (dart.test(src__directives__ng_control_name$46template._visited)) {
      return;
    }
    src__directives__ng_control_name$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
  };
  const _expr_0$ = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  src__directives__ng_control_status$46template.NgControlStatusNgCd = class NgControlStatusNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$2];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.ngClassUntouched;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateElemClass(el, "ng-untouched", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = this.instance.ngClassTouched;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.updateElemClass(el, "ng-touched", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.instance.ngClassPristine;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.updateElemClass(el, "ng-pristine", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.instance.ngClassDirty;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this.updateElemClass(el, "ng-dirty", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = this.instance.ngClassValid;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this.updateElemClass(el, "ng-valid", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = this.instance.ngClassInvalid;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this.updateElemClass(el, "ng-invalid", currVal_5);
        this[_expr_5] = currVal_5;
      }
    }
  };
  (src__directives__ng_control_status$46template.NgControlStatusNgCd.new = function(instance) {
    this[_expr_0$] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[instance$2] = instance;
    src__directives__ng_control_status$46template.NgControlStatusNgCd.__proto__.new.call(this);
  }).prototype = src__directives__ng_control_status$46template.NgControlStatusNgCd.prototype;
  dart.addTypeTests(src__directives__ng_control_status$46template.NgControlStatusNgCd);
  const instance$2 = Symbol("NgControlStatusNgCd.instance");
  dart.setFieldSignature(src__directives__ng_control_status$46template.NgControlStatusNgCd, () => ({
    __proto__: dart.getFields(src__directives__ng_control_status$46template.NgControlStatusNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__ng_control_status.NgControlStatus),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__directives__ng_control_status$46template, {
    /*src__directives__ng_control_status$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_control_status$46template.initReflector = function() {
    if (dart.test(src__directives__ng_control_status$46template._visited)) {
      return;
    }
    src__directives__ng_control_status$46template._visited = true;
    src__directives__ng_control$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(src__directives__ng_form_control$46template, {
    /*src__directives__ng_form_control$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_form_control$46template.initReflector = function() {
    if (dart.test(src__directives__ng_form_control$46template._visited)) {
      return;
    }
    src__directives__ng_form_control$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
  };
  dart.defineLazy(src__directives__ng_form_model$46template, {
    /*src__directives__ng_form_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_form_model$46template.initReflector = function() {
    if (dart.test(src__directives__ng_form_model$46template._visited)) {
      return;
    }
    src__directives__ng_form_model$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__abstract_form$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.defineLazy(src__directives__ng_model$46template, {
    /*src__directives__ng_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_model$46template.initReflector = function() {
    if (dart.test(src__directives__ng_model$46template._visited)) {
      return;
    }
    src__directives__ng_model$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
  };
  dart.defineLazy(src__directives$46template, {
    /*src__directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives$46template.initReflector = function() {
    if (dart.test(src__directives$46template._visited)) {
      return;
    }
    src__directives$46template._visited = true;
    src__directives__abstract_control_directive$46template.initReflector();
    src__directives__checkbox_value_accessor$46template.initReflector();
    src__directives__checkbox_value_accessor$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__default_value_accessor$46template.initReflector();
    src__directives__default_value_accessor$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
    src__directives__memorized_form$46template.initReflector();
    src__directives__memorized_form$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    src__directives__ng_control_name$46template.initReflector();
    src__directives__ng_control_name$46template.initReflector();
    src__directives__ng_control_status$46template.initReflector();
    src__directives__ng_form$46template.initReflector();
    src__directives__ng_form$46template.initReflector();
    src__directives__ng_form_control$46template.initReflector();
    src__directives__ng_form_control$46template.initReflector();
    src__directives__ng_form_model$46template.initReflector();
    src__directives__ng_form_model$46template.initReflector();
    src__directives__ng_model$46template.initReflector();
    src__directives__ng_model$46template.initReflector();
    src__directives__number_value_accessor$46template.initReflector();
    src__directives__number_value_accessor$46template.initReflector();
    src__directives__radio_control_value_accessor$46template.initReflector();
    src__directives__radio_control_value_accessor$46template.initReflector();
    src__directives__select_control_value_accessor$46template.initReflector();
    src__directives__select_control_value_accessor$46template.initReflector();
    src__directives__shared$46template.initReflector();
    src__directives__validators$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.defineLazy(src__form_builder$46template, {
    /*src__form_builder$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__form_builder$46template.initReflector = function() {
    if (dart.test(src__form_builder$46template._visited)) {
      return;
    }
    src__form_builder$46template._visited = true;
    src__directives__validators$46template.initReflector();
    src__model$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_forms/angular_forms.template.ddc", {
    "package:angular_forms/angular_forms.template.dart": angular_forms$46template,
    "package:angular_forms/src/validators.template.dart": src__validators$46template,
    "package:angular_forms/src/directives/validators.template.dart": src__directives__validators$46template,
    "package:angular_forms/src/model.template.dart": src__model$46template,
    "package:angular_forms/src/directives/abstract_control_directive.template.dart": src__directives__abstract_control_directive$46template,
    "package:angular_forms/src/directives/control_value_accessor.template.dart": src__directives__control_value_accessor$46template,
    "package:angular_forms/src/directives/checkbox_value_accessor.template.dart": src__directives__checkbox_value_accessor$46template,
    "package:angular_forms/src/directives/normalize_validator.template.dart": src__directives__normalize_validator$46template,
    "package:angular_forms/src/directives/number_value_accessor.template.dart": src__directives__number_value_accessor$46template,
    "package:angular_forms/src/directives/select_control_value_accessor.template.dart": src__directives__select_control_value_accessor$46template,
    "package:angular_forms/src/directives/radio_control_value_accessor.template.dart": src__directives__radio_control_value_accessor$46template,
    "package:angular_forms/src/directives/ng_control_group.template.dart": src__directives__ng_control_group$46template,
    "package:angular_forms/src/directives/default_value_accessor.template.dart": src__directives__default_value_accessor$46template,
    "package:angular_forms/src/directives/shared.template.dart": src__directives__shared$46template,
    "package:angular_forms/src/directives/ng_control.template.dart": src__directives__ng_control$46template,
    "package:angular_forms/src/directives/form_interface.template.dart": src__directives__form_interface$46template,
    "package:angular_forms/src/directives/control_container.template.dart": src__directives__control_container$46template,
    "package:angular_forms/src/directives/abstract_form.template.dart": src__directives__abstract_form$46template,
    "package:angular_forms/src/directives/ng_form.template.dart": src__directives__ng_form$46template,
    "package:angular_forms/src/directives/memorized_form.template.dart": src__directives__memorized_form$46template,
    "package:angular_forms/src/directives/ng_control_name.template.dart": src__directives__ng_control_name$46template,
    "package:angular_forms/src/directives/ng_control_status.template.dart": src__directives__ng_control_status$46template,
    "package:angular_forms/src/directives/ng_form_control.template.dart": src__directives__ng_form_control$46template,
    "package:angular_forms/src/directives/ng_form_model.template.dart": src__directives__ng_form_model$46template,
    "package:angular_forms/src/directives/ng_model.template.dart": src__directives__ng_model$46template,
    "package:angular_forms/src/directives.template.dart": src__directives$46template,
    "package:angular_forms/src/form_builder.template.dart": src__form_builder$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_forms.template.dart","src/validators.template.dart","src/directives/validators.template.dart","src/model.template.dart","src/directives/abstract_control_directive.template.dart","src/directives/control_value_accessor.template.dart","src/directives/checkbox_value_accessor.template.dart","src/directives/normalize_validator.template.dart","src/directives/number_value_accessor.template.dart","src/directives/select_control_value_accessor.template.dart","src/directives/radio_control_value_accessor.template.dart","src/directives/ng_control_group.template.dart","src/directives/default_value_accessor.template.dart","src/directives/shared.template.dart","src/directives/ng_control.template.dart","src/directives/form_interface.template.dart","src/directives/control_container.template.dart","src/directives/abstract_form.template.dart","src/directives/ng_form.template.dart","src/directives/memorized_form.template.dart","src/directives/ng_control_name.template.dart","src/directives/ng_control_status.template.dart","src/directives/ng_form_control.template.dart","src/directives/ng_form_model.template.dart","src/directives/ng_model.template.dart","src/directives.template.dart","src/form_builder.template.dart"],"names":[],"mappings":"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","file":"angular_forms.template.ddc.js"}');
  // Exports:
  return {
    angular_forms$46template: angular_forms$46template,
    src__validators$46template: src__validators$46template,
    src__directives__validators$46template: src__directives__validators$46template,
    src__model$46template: src__model$46template,
    src__directives__abstract_control_directive$46template: src__directives__abstract_control_directive$46template,
    src__directives__control_value_accessor$46template: src__directives__control_value_accessor$46template,
    src__directives__checkbox_value_accessor$46template: src__directives__checkbox_value_accessor$46template,
    src__directives__normalize_validator$46template: src__directives__normalize_validator$46template,
    src__directives__number_value_accessor$46template: src__directives__number_value_accessor$46template,
    src__directives__select_control_value_accessor$46template: src__directives__select_control_value_accessor$46template,
    src__directives__radio_control_value_accessor$46template: src__directives__radio_control_value_accessor$46template,
    src__directives__ng_control_group$46template: src__directives__ng_control_group$46template,
    src__directives__default_value_accessor$46template: src__directives__default_value_accessor$46template,
    src__directives__shared$46template: src__directives__shared$46template,
    src__directives__ng_control$46template: src__directives__ng_control$46template,
    src__directives__form_interface$46template: src__directives__form_interface$46template,
    src__directives__control_container$46template: src__directives__control_container$46template,
    src__directives__abstract_form$46template: src__directives__abstract_form$46template,
    src__directives__ng_form$46template: src__directives__ng_form$46template,
    src__directives__memorized_form$46template: src__directives__memorized_form$46template,
    src__directives__ng_control_name$46template: src__directives__ng_control_name$46template,
    src__directives__ng_control_status$46template: src__directives__ng_control_status$46template,
    src__directives__ng_form_control$46template: src__directives__ng_form_control$46template,
    src__directives__ng_form_model$46template: src__directives__ng_form_model$46template,
    src__directives__ng_model$46template: src__directives__ng_model$46template,
    src__directives$46template: src__directives$46template,
    src__form_builder$46template: src__form_builder$46template
  };
});

//# sourceMappingURL=angular_forms.template.ddc.js.map
