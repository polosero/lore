define(['dart_sdk', 'packages/http/src/base_client'], function(dart_sdk, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__streamed_response = base_client.src__streamed_response;
  const src__byte_stream = base_client.src__byte_stream;
  const src__exception = base_client.src__exception;
  const src__base_client = base_client.src__base_client;
  const src__base_request = base_client.src__base_request;
  const _root = Object.create(null);
  const browser_client = Object.create(_root);
  const $forEach = dartx.forEach;
  const $response = dartx.response;
  const $result = dartx.result;
  const $length = dartx.length;
  const $responseHeaders = dartx.responseHeaders;
  const $onLoad = dartx.onLoad;
  const $toString = dartx.toString;
  const $onError = dartx.onError;
  let _HashSetOfHttpRequest = () => (_HashSetOfHttpRequest = dart.constFn(collection._HashSet$(html.HttpRequest)))();
  let CompleterOfStreamedResponse = () => (CompleterOfStreamedResponse = dart.constFn(async.Completer$(src__streamed_response.StreamedResponse)))();
  let ProgressEventToNull = () => (ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))();
  let SetOfHttpRequest = () => (SetOfHttpRequest = dart.constFn(core.Set$(html.HttpRequest)))();
  const _xhrs = Symbol('_xhrs');
  const _openHttpRequest = Symbol('_openHttpRequest');
  browser_client.BrowserClient = class BrowserClient extends src__base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(src__streamed_response.StreamedResponse, (function* send() {
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        this[_openHttpRequest](xhr, request.method, dart.toString(request.url), {asynch: true});
        xhr.responseType = "blob";
        xhr.withCredentials = this.withCredentials;
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = CompleterOfStreamedResponse().new();
        xhr[$onLoad].first.then(core.Null, dart.fn(_ => {
          let blob = xhr[$response] == null ? html.Blob.new([]) : xhr[$response];
          let reader = html.FileReader.new();
          reader[$onLoad].first.then(core.Null, dart.fn(_ => {
            let body = typed_data.Uint8List.as(reader[$result]);
            completer.complete(new src__streamed_response.StreamedResponse.new(src__byte_stream.ByteStream.fromBytes(body), xhr.status, {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
          }, ProgressEventToNull()));
          reader[$onError].first.then(core.Null, dart.fn(error => {
            completer.completeError(new src__exception.ClientException.new(dart.toString(error), request.url), core.StackTrace.current);
          }, ProgressEventToNull()));
          reader.readAsArrayBuffer(html.Blob._check(blob));
        }, ProgressEventToNull()));
        xhr[$onError].first.then(core.Null, dart.fn(_ => {
          completer.completeError(new src__exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, ProgressEventToNull()));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    [_openHttpRequest](request, method, url, opts) {
      let asynch = opts && 'asynch' in opts ? opts.asynch : null;
      let user = opts && 'user' in opts ? opts.user : null;
      let password = opts && 'password' in opts ? opts.password : null;
      request.open(method, url, {async: asynch, user: user, password: password});
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
  };
  (browser_client.BrowserClient.new = function() {
    this[_xhrs] = new (_HashSetOfHttpRequest()).new();
    this[withCredentials] = false;
  }).prototype = browser_client.BrowserClient.prototype;
  dart.addTypeTests(browser_client.BrowserClient);
  const withCredentials = Symbol("BrowserClient.withCredentials");
  dart.setMethodSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(browser_client.BrowserClient.__proto__),
    send: dart.fnType(async.Future$(src__streamed_response.StreamedResponse), [src__base_request.BaseRequest]),
    [_openHttpRequest]: dart.fnType(dart.void, [html.HttpRequest, core.String, core.String], {asynch: core.bool, user: core.String, password: core.String})
  }));
  dart.setFieldSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(SetOfHttpRequest()),
    withCredentials: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/http/browser_client.ddc", {
    "package:http/browser_client.dart": browser_client
  }, '{"version":3,"sourceRoot":"","sources":["browser_client.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsCO;;;;;;SAGyB,OAAmB;AAAE;AACjD,YAAI,SAAQ,MAAM,OAAO,SAAS,UAAU;AAC5C,YAAI,MAAM,AAAI,oBAAW;AACzB,mBAAK,IAAI,CAAC,GAAG;AACb,8BAAgB,CAAC,GAAG,EAAE,OAAO,OAAO,gBAAE,OAAO,IAAI,YAAqB;AACtE,WAAG,aAAa,GAAG;AACnB,WAAG,gBAAgB,GAAG,oBAAe;AACrC,eAAO,QAAQ,UAAQ,WAAC,GAAG;AAE3B,YAAI,YAAY,AAAI,iCAA2B;AAC/C,WAAG,SAAO,MAAM,KAAK,YAAC,QAAC,CAAC;AAGtB,cAAI,OAAO,GAAG,WAAS,IAAI,OAAO,AAAI,aAAI,CAAC,MAAM,GAAG,WAAS;AAC7D,cAAI,SAAS,AAAI,mBAAU;AAE3B,gBAAM,SAAO,MAAM,KAAK,YAAC,QAAC,CAAC;AACzB,gBAAI,+BAAO,MAAM,SAAO;AACxB,qBAAS,SAAS,CAAC,IAAI,2CAAgB,CACnC,AAAI,qCAAoB,CAAC,IAAI,GAC7B,GAAG,OAAO,kBACK,IAAI,SAAO,WACjB,OAAO,WACP,GAAG,kBAAgB,gBACd,GAAG,WAAW;;AAGlC,gBAAM,UAAQ,MAAM,KAAK,YAAC,QAAC,KAAK;AAC9B,qBAAS,cAAc,CACnB,IAAI,kCAAe,eAAC,KAAK,GAAa,OAAO,IAAI,GACjD,eAAU,QAAQ;;AAGxB,gBAAM,kBAAkB,kBAAC,IAAI;;AAG/B,WAAG,UAAQ,MAAM,KAAK,YAAC,QAAC,CAAC;AAGvB,mBAAS,cAAc,CACnB,IAAI,kCAAe,CAAC,yBAAyB,OAAO,IAAI,GACxD,eAAU,QAAQ;;AAGxB,WAAG,KAAK,CAAC,KAAK;AAEd,YAAI;AACF,gBAAO,OAAM,SAAS,OAAO;kBACrB;AACR,qBAAK,OAAO,CAAC,GAAG;;MAEpB;;uBAGsB,OAAmB,EAAE,MAAa,EAAE,GAAU;UAC1D;UAAe;UAAa;AACpC,aAAO,KAAK,CAAC,MAAM,EAAE,GAAG,UAAS,MAAM,QAAQ,IAAI,YAAY,QAAQ;IACzE;;AAME,eAAS,MAAO,YAAK,EAAE;AACrB,WAAG,MAAM;;IAEb;;;IA9EM,WAAK,GAAG;IAST,qBAAe,GAAG;EANR","file":"browser_client.ddc.js"}');
  // Exports:
  return {
    browser_client: browser_client
  };
});

//# sourceMappingURL=browser_client.ddc.js.map
