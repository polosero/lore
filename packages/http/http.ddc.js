define(['dart_sdk', 'packages/http/src/base_client', 'packages/http_parser/http_parser', 'packages/path/path', 'packages/async/async'], function(dart_sdk, base_client, http_parser, path, async) {
  'use strict';
  const core = dart_sdk.core;
  const async$ = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const io = dart_sdk.io;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__response = base_client.src__response;
  const src__client = base_client.src__client;
  const src__utils = base_client.src__utils;
  const src__byte_stream = base_client.src__byte_stream;
  const src__base_request = base_client.src__base_request;
  const src__media_type = http_parser.src__media_type;
  const path$ = path.path;
  const src__delegate__stream = async.src__delegate__stream;
  const _root = Object.create(null);
  const http = Object.create(_root);
  const src__multipart_file = Object.create(_root);
  const src__boundary_characters = Object.create(_root);
  const src__multipart_request = Object.create(_root);
  const src__streamed_request = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $replaceAll = dartx.replaceAll;
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async$.Future$(src__response.Response)))();
  let ClientToFutureOfResponse = () => (ClientToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [src__client.Client])))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async$.Future$(core.String)))();
  let ClientToFutureOfString = () => (ClientToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [src__client.Client])))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async$.Future$(typed_data.Uint8List)))();
  let ClientToFutureOfUint8List = () => (ClientToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [src__client.Client])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfMultipartFile = () => (JSArrayOfMultipartFile = dart.constFn(_interceptors.JSArray$(src__multipart_file.MultipartFile)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async$.StreamController$(ListOfint())))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async$.Future, [dart.dynamic])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfMultipartFile = () => (ListOfMultipartFile = dart.constFn(core.List$(src__multipart_file.MultipartFile)))();
  http.head = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.head(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.get = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.get(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.post = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.put = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.patch = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.delete = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.delete(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.read = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(core.String, dart.fn(client => client.read(url, {headers: headers}), ClientToFutureOfString()));
  };
  http.readBytes = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(typed_data.Uint8List, dart.fn(client => client.readBytes(url, {headers: headers}), ClientToFutureOfUint8List()));
  };
  http._withClient = function(T, fn) {
    return async$.async(T, function* _withClient() {
      let client = src__client.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  const _stream = Symbol('_stream');
  const _isFinalized = Symbol('_isFinalized');
  src__multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = src__byte_stream.ByteStream.fromBytes(value);
      return new src__multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType = contentType == null ? new src__media_type.MediaType.new("text", "plain") : contentType;
      let encoding = src__utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", encoding.name])});
      return src__multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      return async$.async(src__multipart_file.MultipartFile, function* fromPath() {
        let filename = opts && 'filename' in opts ? opts.filename : null;
        let contentType = opts && 'contentType' in opts ? opts.contentType : null;
        if (filename == null) filename = path$.basename(filePath);
        let file = io.File.new(filePath);
        let length = (yield file.length());
        let stream = new src__byte_stream.ByteStream.new(src__delegate__stream.DelegatingStream.typed(ListOfint(), file.openRead()));
        return new src__multipart_file.MultipartFile.new(field, stream, length, {filename: filename, contentType: contentType});
      });
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (src__multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = src__utils.toByteStream(stream);
    this[contentType$] = contentType != null ? contentType : new src__media_type.MediaType.new("application", "octet-stream");
  }).prototype = src__multipart_file.MultipartFile.prototype;
  dart.addTypeTests(src__multipart_file.MultipartFile);
  const field$ = Symbol("MultipartFile.field");
  const length$ = Symbol("MultipartFile.length");
  const filename$ = Symbol("MultipartFile.filename");
  const contentType$ = Symbol("MultipartFile.contentType");
  dart.setMethodSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(src__multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(src__byte_stream.ByteStream, [])
  }));
  dart.setGetterSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(src__multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setFieldSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(src__multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(core.String),
    contentType: dart.finalFieldType(src__media_type.MediaType),
    [_stream]: dart.finalFieldType(src__byte_stream.ByteStream),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__boundary_characters, {
    /*src__boundary_characters.BOUNDARY_CHARACTERS*/get BOUNDARY_CHARACTERS() {
      return dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    }
  });
  dart.defineLazy(src__multipart_request, {
    /*src__multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  });
  const _files = Symbol('_files');
  const _headerForField = Symbol('_headerForField');
  const _headerForFile = Symbol('_headerForFile');
  const _boundaryString = Symbol('_boundaryString');
  const _browserEncode = Symbol('_browserEncode');
  src__multipart_request.MultipartRequest = class MultipartRequest extends src__base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[_files];
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForField](name, value))[$length]) + dart.notNull(convert.utf8.encode(value)[$length]) + "\r\n".length);
      }, StringAndStringToNull()));
      for (let file of this[_files]) {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForFile](file))[$length]) + dart.notNull(file.length) + "\r\n".length);
      }
      return length + "--".length + 70 + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]("content-type", "multipart/form-data; boundary=" + dart.str(boundary));
      super.finalize();
      let controller = StreamControllerOfListOfint().new({sync: true});
      function writeAscii(string) {
        controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeAscii, StringTovoid());
      function writeUtf8(string) {
        return controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeUtf8, StringTovoid());
      function writeLine() {
        return controller.add(JSArrayOfint().of([13, 10]));
      }
      dart.fn(writeLine, VoidTovoid());
      this.fields[$forEach](dart.fn((name, value) => {
        writeAscii("--" + dart.str(boundary) + "\r\n");
        writeAscii(this[_headerForField](name, value));
        writeUtf8(value);
        writeLine();
      }, StringAndStringToNull()));
      async$.Future.forEach(src__multipart_file.MultipartFile, this[_files], dart.fn(file => {
        writeAscii("--" + dart.str(boundary) + "\r\n");
        writeAscii(this[_headerForFile](src__multipart_file.MultipartFile._check(file)));
        return src__utils.writeStreamToSink(async$.Stream._check(dart.dsend(file, 'finalize', [])), controller).then(dart.dynamic, dart.fn(_ => writeLine(), dynamicTovoid()));
      }, dynamicToFuture())).then(core.Null, dart.fn(_ => {
        writeAscii("--" + dart.str(boundary) + "--\r\n");
        controller.close();
      }, dynamicToNull()));
      return new src__byte_stream.ByteStream.new(controller.stream);
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](name)) + "\"";
      if (!dart.test(src__utils.isPlainAscii(value))) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](file) {
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + ("content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](file.field)) + "\"");
      if (file.filename != null) {
        header = header + "; filename=\"" + dart.str(this[_browserEncode](file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](src__multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]("\"", "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = ListOfint().generate(70 - prefix.length, dart.fn(index => src__boundary_characters.BOUNDARY_CHARACTERS[$_get](src__multipart_request.MultipartRequest._random.nextInt(src__boundary_characters.BOUNDARY_CHARACTERS[$length])), intToint()), {growable: false});
      return prefix + core.String.fromCharCodes(list);
    }
  };
  (src__multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (IdentityMapOfString$String()).new();
    this[_files] = JSArrayOfMultipartFile().of([]);
    src__multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
  }).prototype = src__multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(src__multipart_request.MultipartRequest);
  const fields = Symbol("MultipartRequest.fields");
  dart.setMethodSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(src__multipart_request.MultipartRequest.__proto__),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [src__multipart_file.MultipartFile]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    [_boundaryString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getGetters(src__multipart_request.MultipartRequest.__proto__),
    files: core.List$(src__multipart_file.MultipartFile)
  }));
  dart.setFieldSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(src__multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(MapOfString$String()),
    [_files]: dart.finalFieldType(ListOfMultipartFile())
  }));
  dart.defineLazy(src__multipart_request.MultipartRequest, {
    /*src__multipart_request.MultipartRequest._BOUNDARY_LENGTH*/get _BOUNDARY_LENGTH() {
      return 70;
    },
    /*src__multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  });
  const _controller = Symbol('_controller');
  src__streamed_request.StreamedRequest = class StreamedRequest extends src__base_request.BaseRequest {
    get sink() {
      return this[_controller].sink;
    }
    finalize() {
      super.finalize();
      return new src__byte_stream.ByteStream.new(this[_controller].stream);
    }
  };
  (src__streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller] = StreamControllerOfListOfint().new({sync: true});
    src__streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
  }).prototype = src__streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(src__streamed_request.StreamedRequest);
  dart.setGetterSignature(src__streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(src__streamed_request.StreamedRequest.__proto__),
    sink: async$.EventSink$(core.List$(core.int))
  }));
  dart.setFieldSignature(src__streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(src__streamed_request.StreamedRequest.__proto__),
    [_controller]: dart.finalFieldType(StreamControllerOfListOfint())
  }));
  dart.trackLibraries("packages/http/http.ddc", {
    "package:http/http.dart": http,
    "package:http/src/multipart_file.dart": src__multipart_file,
    "package:http/src/boundary_characters.dart": src__boundary_characters,
    "package:http/src/multipart_request.dart": src__multipart_request,
    "package:http/src/streamed_request.dart": src__streamed_request
  }, '{"version":3,"sourceRoot":"","sources":["http.dart","src/multipart_file.dart","src/boundary_characters.dart","src/multipart_request.dart","src/streamed_request.dart"],"names":[],"mappings":"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","file":"http.ddc.js"}');
  // Exports:
  return {
    http: http,
    src__multipart_file: src__multipart_file,
    src__boundary_characters: src__boundary_characters,
    src__multipart_request: src__multipart_request,
    src__streamed_request: src__streamed_request
  };
});

//# sourceMappingURL=http.ddc.js.map
