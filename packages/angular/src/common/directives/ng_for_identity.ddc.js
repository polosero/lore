define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__core__linker__view_container_ref = modules.src__core__linker__view_container_ref;
  const _root = Object.create(null);
  const src__common__directives__ng_for_identity = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const _template = Symbol('_template');
  const _container = Symbol('_container');
  const _is_NgForIdentity_default = Symbol('_is_NgForIdentity_default');
  src__common__directives__ng_for_identity.NgForIdentity$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class NgForIdentity extends core.Object {
      set ngForIdentityOf(elements) {
        IterableOfT()._check(elements);
        this[_container].clear();
        if (elements == null || dart.test(elements[$isEmpty])) {
          return;
        }
        let i = 0;
        for (let element of elements) {
          let view = this[_container].createEmbeddedView(this[_template]);
          view.setLocal("$implicit", element);
          view.setLocal("index", i++);
        }
      }
    }
    (NgForIdentity.new = function(template, container) {
      this[_template] = template;
      this[_container] = container;
    }).prototype = NgForIdentity.prototype;
    dart.addTypeTests(NgForIdentity);
    NgForIdentity.prototype[_is_NgForIdentity_default] = true;
    dart.setSetterSignature(NgForIdentity, () => ({
      __proto__: dart.getSetters(NgForIdentity.__proto__),
      ngForIdentityOf: core.Iterable$(T)
    }));
    dart.setFieldSignature(NgForIdentity, () => ({
      __proto__: dart.getFields(NgForIdentity.__proto__),
      [_template]: dart.finalFieldType(src__core__linker__template_ref.TemplateRef),
      [_container]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef)
    }));
    return NgForIdentity;
  });
  src__common__directives__ng_for_identity.NgForIdentity = src__common__directives__ng_for_identity.NgForIdentity$();
  dart.addTypeTests(src__common__directives__ng_for_identity.NgForIdentity, _is_NgForIdentity_default);
  dart.trackLibraries("packages/angular/src/common/directives/ng_for_identity.ddc", {
    "package:angular/src/common/directives/ng_for_identity.dart": src__common__directives__ng_for_identity
  }, '{"version":3,"sourceRoot":"","sources":["ng_for_identity.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;0BA+BsB,QAAoB;6BAAR;AAC9B,wBAAU,MAAM;AAChB,YAAI,QAAQ,IAAI,kBAAQ,QAAQ,UAAQ,GAAE;AACxC;;AAEF,YAAI,IAAI;AACR,iBAAW,UAAW,SAAQ,EAAE;AAC9B,cAAM,OAAO,gBAAU,mBAAmB,CAAC,eAAS;AACpD,cAAI,SAAS,CAAC,aAAc,OAAO;AACnC,cAAI,SAAS,CAAC,SAAU,CAAC;;MAG7B;;;MAjBO,eAAS;MACT,gBAAU;IAChB","file":"ng_for_identity.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_for_identity: src__common__directives__ng_for_identity
  };
});

//# sourceMappingURL=ng_for_identity.ddc.js.map
