define(['dart_sdk', 'packages/collection/src/canonicalized_map', 'packages/source_span/source_span', 'packages/string_scanner/string_scanner', 'packages/typed_data/typed_buffers'], function(dart_sdk, canonicalized_map, source_span, string_scanner, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__canonicalized_map = canonicalized_map.src__canonicalized_map;
  const src__span_exception = source_span.src__span_exception;
  const src__string_scanner = string_scanner.src__string_scanner;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const _root = Object.create(null);
  const http_parser = Object.create(_root);
  const src__case_insensitive_map = Object.create(_root);
  const src__scan = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__authentication_challenge = Object.create(_root);
  const src__chunked_coding__encoder = Object.create(_root);
  const src__chunked_coding__decoder = Object.create(_root);
  const src__chunked_coding = Object.create(_root);
  const src__http_date = Object.create(_root);
  const src__media_type = Object.create(_root);
  const $toLowerCase = dartx.toLowerCase;
  const $add = dartx.add;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $substring = dartx.substring;
  const $_set = dartx._set;
  const $contains = dartx.contains;
  const $length = dartx.length;
  const $toRadixString = dartx.toRadixString;
  const $codeUnits = dartx.codeUnits;
  const $setRange = dartx.setRange;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $asUint8List = dartx.asUint8List;
  const $toUpperCase = dartx.toUpperCase;
  const $toString = dartx.toString;
  const $indexOf = dartx.indexOf;
  const $split = dartx.split;
  const $addAll = dartx.addAll;
  const $forEach = dartx.forEach;
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let CaseInsensitiveMapOfString = () => (CaseInsensitiveMapOfString = dart.constFn(src__case_insensitive_map.CaseInsensitiveMap$(core.String)))();
  let UnmodifiableMapViewOfString$String = () => (UnmodifiableMapViewOfString$String = dart.constFn(collection.UnmodifiableMapView$(core.String, core.String)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToAuthenticationChallenge = () => (VoidToAuthenticationChallenge = dart.constFn(dart.fnType(src__authentication_challenge.AuthenticationChallenge, [])))();
  let ListOfAuthenticationChallenge = () => (ListOfAuthenticationChallenge = dart.constFn(core.List$(src__authentication_challenge.AuthenticationChallenge)))();
  let VoidToListOfAuthenticationChallenge = () => (VoidToListOfAuthenticationChallenge = dart.constFn(dart.fnType(ListOfAuthenticationChallenge(), [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let intAndStringToNull = () => (intAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.String])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let VoidToMediaType = () => (VoidToMediaType = dart.constFn(dart.fnType(src__media_type.MediaType, [])))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  const _is_CaseInsensitiveMap_default = Symbol('_is_CaseInsensitiveMap_default');
  src__case_insensitive_map.CaseInsensitiveMap$ = dart.generic(V => {
    class CaseInsensitiveMap extends src__canonicalized_map.CanonicalizedMap$(core.String, core.String, V) {}
    (CaseInsensitiveMap.new = function() {
      CaseInsensitiveMap.__proto__.new.call(this, dart.fn(key => key[$toLowerCase](), StringToString()), {isValidKey: dart.fn(key => key != null, ObjectTobool())});
    }).prototype = CaseInsensitiveMap.prototype;
    (CaseInsensitiveMap.from = function(other) {
      CaseInsensitiveMap.__proto__.from.call(this, other, dart.fn(key => key[$toLowerCase](), StringToString()), {isValidKey: dart.fn(key => key != null, ObjectTobool())});
    }).prototype = CaseInsensitiveMap.prototype;
    dart.addTypeTests(CaseInsensitiveMap);
    CaseInsensitiveMap.prototype[_is_CaseInsensitiveMap_default] = true;
    return CaseInsensitiveMap;
  });
  src__case_insensitive_map.CaseInsensitiveMap = src__case_insensitive_map.CaseInsensitiveMap$();
  dart.addTypeTests(src__case_insensitive_map.CaseInsensitiveMap, _is_CaseInsensitiveMap_default);
  dart.defineLazy(src__scan, {
    /*src__scan.token*/get token() {
      return core.RegExp.new("[^()<>@,;:\"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+");
    },
    /*src__scan._lws*/get _lws() {
      return core.RegExp.new("(?:\\r\\n)?[ \\t]+");
    },
    /*src__scan._quotedString*/get _quotedString() {
      return core.RegExp.new("\"(?:[^\"\\x00-\\x1F\\x7F]|\\\\.)*\"");
    },
    /*src__scan._quotedPair*/get _quotedPair() {
      return core.RegExp.new("\\\\(.)");
    },
    /*src__scan.nonToken*/get nonToken() {
      return core.RegExp.new("[()<>@,;:\"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]");
    },
    /*src__scan.whitespace*/get whitespace() {
      return core.RegExp.new("(?:" + dart.str(src__scan._lws.pattern) + ")*");
    }
  });
  src__scan.parseList = function(T, scanner, parseElement) {
    let result = _interceptors.JSArray$(T).of([]);
    while (dart.test(scanner.scan(","))) {
      scanner.scan(src__scan.whitespace);
    }
    result[$add](parseElement());
    scanner.scan(src__scan.whitespace);
    while (dart.test(scanner.scan(","))) {
      scanner.scan(src__scan.whitespace);
      if (dart.test(scanner.matches(",")) || dart.test(scanner.isDone)) continue;
      result[$add](parseElement());
      scanner.scan(src__scan.whitespace);
    }
    return result;
  };
  src__scan.expectQuotedString = function(scanner, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    if (name == null) name = "quoted string";
    scanner.expect(src__scan._quotedString, {name: name});
    let string = scanner.lastMatch._get(0);
    return string[$substring](1, string.length - 1)[$replaceAllMapped](src__scan._quotedPair, dart.fn(match => match._get(1), MatchToString()));
  };
  src__utils.wrapFormatException = function(T, name, value, body) {
    try {
      return body();
    } catch (e) {
      if (src__span_exception.SourceSpanFormatException.is(e)) {
        let error = e;
        dart.throw(new src__span_exception.SourceSpanFormatException.new("Invalid " + dart.str(name) + ": " + dart.str(error.message), error.span, error.source));
      } else if (core.FormatException.is(e)) {
        let error = e;
        dart.throw(new core.FormatException.new("Invalid " + dart.str(name) + " \"" + dart.str(value) + "\": " + dart.str(error.message), error.source, error.offset));
      } else
        throw e;
    }
  };
  src__authentication_challenge.AuthenticationChallenge = class AuthenticationChallenge extends core.Object {
    get scheme() {
      return this[scheme$];
    }
    set scheme(value) {
      super.scheme = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    static parseHeader(header) {
      return src__utils.wrapFormatException(ListOfAuthenticationChallenge(), "authentication header", header, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(header);
        scanner.scan(src__scan.whitespace);
        let challenges = src__scan.parseList(src__authentication_challenge.AuthenticationChallenge, scanner, dart.fn(() => {
          let scheme = src__authentication_challenge.AuthenticationChallenge._scanScheme(scanner, {whitespaceName: "\" \" or \"=\""});
          let params = new (IdentityMapOfString$String()).new();
          while (dart.test(scanner.scan(","))) {
            scanner.scan(src__scan.whitespace);
          }
          src__authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params);
          let beforeComma = scanner.position;
          while (dart.test(scanner.scan(","))) {
            scanner.scan(src__scan.whitespace);
            if (dart.test(scanner.matches(",")) || dart.test(scanner.isDone)) continue;
            scanner.expect(src__scan.token, {name: "a token"});
            let name = scanner.lastMatch._get(0);
            scanner.scan(src__scan.whitespace);
            if (!dart.test(scanner.scan("="))) {
              scanner.position = beforeComma;
              break;
            }
            scanner.scan(src__scan.whitespace);
            if (dart.test(scanner.scan(src__scan.token))) {
              params[$_set](name, scanner.lastMatch._get(0));
            } else {
              params[$_set](name, src__scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
            }
            scanner.scan(src__scan.whitespace);
            beforeComma = scanner.position;
          }
          return new src__authentication_challenge.AuthenticationChallenge.new(scheme, params);
        }, VoidToAuthenticationChallenge()));
        scanner.expectDone();
        return challenges;
      }, VoidToListOfAuthenticationChallenge()));
    }
    static parse(challenge) {
      return src__utils.wrapFormatException(src__authentication_challenge.AuthenticationChallenge, "authentication challenge", challenge, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(challenge);
        scanner.scan(src__scan.whitespace);
        let scheme = src__authentication_challenge.AuthenticationChallenge._scanScheme(scanner);
        let params = new (IdentityMapOfString$String()).new();
        src__scan.parseList(dart.void, scanner, dart.fn(() => src__authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params), VoidTovoid()));
        scanner.expectDone();
        return new src__authentication_challenge.AuthenticationChallenge.new(scheme, params);
      }, VoidToAuthenticationChallenge()));
    }
    static _scanScheme(scanner, opts) {
      let whitespaceName = opts && 'whitespaceName' in opts ? opts.whitespaceName : null;
      scanner.expect(src__scan.token, {name: "a token"});
      let scheme = scanner.lastMatch._get(0)[$toLowerCase]();
      scanner.scan(src__scan.whitespace);
      if (scanner.lastMatch == null || !scanner.lastMatch._get(0)[$contains](" ")) {
        scanner.expect(" ", {name: whitespaceName});
      }
      return scheme;
    }
    static _scanAuthParam(scanner, params) {
      scanner.expect(src__scan.token, {name: "a token"});
      let name = scanner.lastMatch._get(0);
      scanner.scan(src__scan.whitespace);
      scanner.expect("=");
      scanner.scan(src__scan.whitespace);
      if (dart.test(scanner.scan(src__scan.token))) {
        params[$_set](name, scanner.lastMatch._get(0));
      } else {
        params[$_set](name, src__scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
      }
      scanner.scan(src__scan.whitespace);
    }
  };
  (src__authentication_challenge.AuthenticationChallenge.new = function(scheme, parameters) {
    this[scheme$] = scheme;
    this[parameters$] = new (UnmodifiableMapViewOfString$String()).new(new (CaseInsensitiveMapOfString()).from(parameters));
  }).prototype = src__authentication_challenge.AuthenticationChallenge.prototype;
  dart.addTypeTests(src__authentication_challenge.AuthenticationChallenge);
  const scheme$ = Symbol("AuthenticationChallenge.scheme");
  const parameters$ = Symbol("AuthenticationChallenge.parameters");
  dart.setFieldSignature(src__authentication_challenge.AuthenticationChallenge, () => ({
    __proto__: dart.getFields(src__authentication_challenge.AuthenticationChallenge.__proto__),
    scheme: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(MapOfString$String())
  }));
  dart.defineLazy(src__chunked_coding__encoder, {
    /*src__chunked_coding__encoder.chunkedCodingEncoder*/get chunkedCodingEncoder() {
      return dart.const(new src__chunked_coding__encoder.ChunkedCodingEncoder.__());
    },
    /*src__chunked_coding__encoder._doneChunk*/get _doneChunk() {
      return typed_data.Uint8List.fromList(JSArrayOfint().of([48, 13, 10, 13, 10]));
    }
  });
  src__chunked_coding__encoder.ChunkedCodingEncoder = class ChunkedCodingEncoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__chunked_coding__encoder._convert(bytes, 0, bytes[$length], {isLast: true});
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__chunked_coding__encoder._Sink.new(sink);
    }
  };
  (src__chunked_coding__encoder.ChunkedCodingEncoder.__ = function() {
    src__chunked_coding__encoder.ChunkedCodingEncoder.__proto__.new.call(this);
  }).prototype = src__chunked_coding__encoder.ChunkedCodingEncoder.prototype;
  dart.addTypeTests(src__chunked_coding__encoder.ChunkedCodingEncoder);
  dart.setMethodSignature(src__chunked_coding__encoder.ChunkedCodingEncoder, () => ({
    __proto__: dart.getMethods(src__chunked_coding__encoder.ChunkedCodingEncoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink = Symbol('_sink');
  src__chunked_coding__encoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink].add(src__chunked_coding__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink].add(src__chunked_coding__encoder._convert(chunk, start, end, {isLast: isLast}));
      if (dart.test(isLast)) this[_sink].close();
    }
    close() {
      this[_sink].add(src__chunked_coding__encoder._doneChunk);
      this[_sink].close();
    }
  };
  (src__chunked_coding__encoder._Sink.new = function(sink) {
    this[_sink] = sink;
    src__chunked_coding__encoder._Sink.__proto__.new.call(this);
  }).prototype = src__chunked_coding__encoder._Sink.prototype;
  dart.addTypeTests(src__chunked_coding__encoder._Sink);
  dart.setMethodSignature(src__chunked_coding__encoder._Sink, () => ({
    __proto__: dart.getMethods(src__chunked_coding__encoder._Sink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__chunked_coding__encoder._Sink, () => ({
    __proto__: dart.getFields(src__chunked_coding__encoder._Sink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfListOfint())
  }));
  let const$;
  src__chunked_coding__encoder._convert = function(bytes, start, end, opts) {
    let isLast = opts && 'isLast' in opts ? opts.isLast : false;
    if (end == start) return dart.test(isLast) ? src__chunked_coding__encoder._doneChunk : const$ || (const$ = dart.constList([], core.int));
    let size = dart.notNull(end) - dart.notNull(start);
    let sizeInHex = size[$toRadixString](16);
    let footerSize = dart.test(isLast) ? src__chunked_coding__encoder._doneChunk[$length] : 0;
    let list = typed_data.Uint8List.new(sizeInHex.length + 4 + size + dart.notNull(footerSize));
    list[$setRange](0, sizeInHex.length, sizeInHex[$codeUnits]);
    let cursor = sizeInHex.length;
    list[$_set](cursor++, 13);
    list[$_set](cursor++, 10);
    list[$setRange](cursor, cursor + dart.notNull(end) - dart.notNull(start), bytes, start);
    cursor = cursor + (dart.notNull(end) - dart.notNull(start));
    list[$_set](cursor++, 13);
    list[$_set](cursor++, 10);
    if (dart.test(isLast)) {
      list[$setRange](dart.notNull(list[$length]) - dart.notNull(footerSize), list[$length], src__chunked_coding__encoder._doneChunk);
    }
    return list;
  };
  dart.defineLazy(src__chunked_coding__decoder, {
    /*src__chunked_coding__decoder.chunkedCodingDecoder*/get chunkedCodingDecoder() {
      return dart.const(new src__chunked_coding__decoder.ChunkedCodingDecoder.__());
    }
  });
  const _decode = Symbol('_decode');
  const _state = Symbol('_state');
  src__chunked_coding__decoder.ChunkedCodingDecoder = class ChunkedCodingDecoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    convert(bytes) {
      ListOfint()._check(bytes);
      let sink = new src__chunked_coding__decoder._Sink.new(null);
      let output = sink[_decode](bytes, 0, bytes[$length]);
      if (dart.equals(sink[_state], src__chunked_coding__decoder._State.end)) return output;
      dart.throw(new core.FormatException.new("Input ended unexpectedly.", bytes, bytes[$length]));
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__chunked_coding__decoder._Sink.new(sink);
    }
  };
  (src__chunked_coding__decoder.ChunkedCodingDecoder.__ = function() {
    src__chunked_coding__decoder.ChunkedCodingDecoder.__proto__.new.call(this);
  }).prototype = src__chunked_coding__decoder.ChunkedCodingDecoder.prototype;
  dart.addTypeTests(src__chunked_coding__decoder.ChunkedCodingDecoder);
  dart.setMethodSignature(src__chunked_coding__decoder.ChunkedCodingDecoder, () => ({
    __proto__: dart.getMethods(src__chunked_coding__decoder.ChunkedCodingDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink$ = Symbol('_sink');
  const _size = Symbol('_size');
  const _close = Symbol('_close');
  const _digitForByte = Symbol('_digitForByte');
  src__chunked_coding__decoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      let output = this[_decode](chunk, start, end);
      if (dart.test(output[$isNotEmpty])) this[_sink$].add(output);
      if (dart.test(isLast)) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (!dart.equals(this[_state], src__chunked_coding__decoder._State.end)) {
        dart.throw(new core.FormatException.new("Input ended unexpectedly.", chunk, index));
      }
      this[_sink$].close();
    }
    [_decode](bytes, start, end) {
      function assertCurrentChar(char, name) {
        if (bytes[$_get](start) != char) {
          dart.throw(new core.FormatException.new("Expected " + dart.str(name) + ".", bytes, start));
        }
      }
      dart.fn(assertCurrentChar, intAndStringToNull());
      let buffer = new typed_buffers$.Uint8Buffer.new();
      while (start != end) {
        switch (this[_state]) {
          case src__chunked_coding__decoder._State.boundary:
          {
            this[_size] = this[_digitForByte](bytes, start);
            this[_state] = src__chunked_coding__decoder._State.size;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.size:
          {
            if (bytes[$_get](start) === 13) {
              this[_state] = src__chunked_coding__decoder._State.sizeBeforeLF;
            } else {
              this[_size] = (dart.notNull(this[_size]) << 4 >>> 0) + dart.notNull(this[_digitForByte](bytes, start));
            }
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.sizeBeforeLF:
          {
            assertCurrentChar(10, "LF");
            this[_state] = this[_size] === 0 ? src__chunked_coding__decoder._State.endBeforeCR : src__chunked_coding__decoder._State.body;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.body:
          {
            let chunkEnd = math.min(core.int, end, dart.notNull(start) + dart.notNull(this[_size]));
            buffer.addAll(bytes, start, chunkEnd);
            this[_size] = dart.notNull(this[_size]) - (chunkEnd - dart.notNull(start));
            start = chunkEnd;
            if (this[_size] === 0) this[_state] = src__chunked_coding__decoder._State.bodyBeforeCR;
            break;
          }
          case src__chunked_coding__decoder._State.bodyBeforeCR:
          {
            assertCurrentChar(13, "CR");
            this[_state] = src__chunked_coding__decoder._State.bodyBeforeLF;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.bodyBeforeLF:
          {
            assertCurrentChar(10, "LF");
            this[_state] = src__chunked_coding__decoder._State.boundary;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.endBeforeCR:
          {
            assertCurrentChar(13, "CR");
            this[_state] = src__chunked_coding__decoder._State.endBeforeLF;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.endBeforeLF:
          {
            assertCurrentChar(10, "LF");
            this[_state] = src__chunked_coding__decoder._State.end;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.end:
          {
            dart.throw(new core.FormatException.new("Expected no more data.", bytes, start));
          }
        }
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    [_digitForByte](bytes, index) {
      let byte = bytes[$_get](index);
      let digit = (48 ^ dart.notNull(byte)) >>> 0;
      if (digit <= 9) {
        if (digit >= 0) return digit;
      } else {
        let letter = (32 | dart.notNull(byte)) >>> 0;
        if (97 <= letter && letter <= 102) return letter - 97 + 10;
      }
      dart.throw(new core.FormatException.new("Invalid hexadecimal byte 0x" + byte[$toRadixString](16)[$toUpperCase]() + ".", bytes, index));
    }
  };
  (src__chunked_coding__decoder._Sink.new = function(sink) {
    this[_state] = src__chunked_coding__decoder._State.boundary;
    this[_size] = null;
    this[_sink$] = sink;
    src__chunked_coding__decoder._Sink.__proto__.new.call(this);
  }).prototype = src__chunked_coding__decoder._Sink.prototype;
  dart.addTypeTests(src__chunked_coding__decoder._Sink);
  dart.setMethodSignature(src__chunked_coding__decoder._Sink, () => ({
    __proto__: dart.getMethods(src__chunked_coding__decoder._Sink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.List$(core.int), core.int]),
    [_decode]: dart.fnType(typed_data.Uint8List, [core.List$(core.int), core.int, core.int]),
    [_digitForByte]: dart.fnType(core.int, [core.List$(core.int), core.int])
  }));
  dart.setFieldSignature(src__chunked_coding__decoder._Sink, () => ({
    __proto__: dart.getFields(src__chunked_coding__decoder._Sink.__proto__),
    [_sink$]: dart.finalFieldType(SinkOfListOfint()),
    [_state]: dart.fieldType(src__chunked_coding__decoder._State),
    [_size]: dart.fieldType(core.int)
  }));
  const _name = Symbol('_name');
  src__chunked_coding__decoder._State = class _State extends core.Object {
    toString() {
      return this[_name];
    }
  };
  (src__chunked_coding__decoder._State.__ = function(name) {
    this[_name] = name;
  }).prototype = src__chunked_coding__decoder._State.prototype;
  dart.addTypeTests(src__chunked_coding__decoder._State);
  dart.setFieldSignature(src__chunked_coding__decoder._State, () => ({
    __proto__: dart.getFields(src__chunked_coding__decoder._State.__proto__),
    [_name]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__chunked_coding__decoder._State, ['toString']);
  dart.defineLazy(src__chunked_coding__decoder._State, {
    /*src__chunked_coding__decoder._State.boundary*/get boundary() {
      return dart.const(new src__chunked_coding__decoder._State.__("boundary"));
    },
    /*src__chunked_coding__decoder._State.size*/get size() {
      return dart.const(new src__chunked_coding__decoder._State.__("size"));
    },
    /*src__chunked_coding__decoder._State.sizeBeforeLF*/get sizeBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("size before LF"));
    },
    /*src__chunked_coding__decoder._State.body*/get body() {
      return dart.const(new src__chunked_coding__decoder._State.__("body"));
    },
    /*src__chunked_coding__decoder._State.bodyBeforeCR*/get bodyBeforeCR() {
      return dart.const(new src__chunked_coding__decoder._State.__("body before CR"));
    },
    /*src__chunked_coding__decoder._State.bodyBeforeLF*/get bodyBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("body before LF"));
    },
    /*src__chunked_coding__decoder._State.endBeforeCR*/get endBeforeCR() {
      return dart.const(new src__chunked_coding__decoder._State.__("end before CR"));
    },
    /*src__chunked_coding__decoder._State.endBeforeLF*/get endBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("end before LF"));
    },
    /*src__chunked_coding__decoder._State.end*/get end() {
      return dart.const(new src__chunked_coding__decoder._State.__("end"));
    }
  });
  dart.defineLazy(src__chunked_coding, {
    /*src__chunked_coding.chunkedCoding*/get chunkedCoding() {
      return dart.const(new src__chunked_coding.ChunkedCodingCodec.__());
    }
  });
  src__chunked_coding.ChunkedCodingCodec = class ChunkedCodingCodec extends convert.Codec$(core.List$(core.int), core.List$(core.int)) {
    get encoder() {
      return src__chunked_coding__encoder.chunkedCodingEncoder;
    }
    get decoder() {
      return src__chunked_coding__decoder.chunkedCodingDecoder;
    }
  };
  (src__chunked_coding.ChunkedCodingCodec.__ = function() {
    src__chunked_coding.ChunkedCodingCodec.__proto__.new.call(this);
  }).prototype = src__chunked_coding.ChunkedCodingCodec.prototype;
  dart.addTypeTests(src__chunked_coding.ChunkedCodingCodec);
  dart.setGetterSignature(src__chunked_coding.ChunkedCodingCodec, () => ({
    __proto__: dart.getGetters(src__chunked_coding.ChunkedCodingCodec.__proto__),
    encoder: src__chunked_coding__encoder.ChunkedCodingEncoder,
    decoder: src__chunked_coding__decoder.ChunkedCodingDecoder
  }));
  dart.defineLazy(src__http_date, {
    /*src__http_date._WEEKDAYS*/get _WEEKDAYS() {
      return dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    /*src__http_date._MONTHS*/get _MONTHS() {
      return dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    /*src__http_date._shortWeekdayRegExp*/get _shortWeekdayRegExp() {
      return core.RegExp.new("Mon|Tue|Wed|Thu|Fri|Sat|Sun");
    },
    /*src__http_date._longWeekdayRegExp*/get _longWeekdayRegExp() {
      return core.RegExp.new("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday");
    },
    /*src__http_date._monthRegExp*/get _monthRegExp() {
      return core.RegExp.new("Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec");
    },
    /*src__http_date._digitRegExp*/get _digitRegExp() {
      return core.RegExp.new("\\d+");
    }
  });
  src__http_date.formatHttpDate = function(date) {
    date = date.toUtc();
    let buffer = new core.StringBuffer.new();
    buffer.write(src__http_date._WEEKDAYS[$_get](dart.notNull(date.weekday) - 1));
    buffer.write(", ");
    buffer.write(dart.notNull(date.day) <= 9 ? "0" : "");
    buffer.write(dart.toString(date.day));
    buffer.write(" ");
    buffer.write(src__http_date._MONTHS[$_get](dart.notNull(date.month) - 1));
    buffer.write(" ");
    buffer.write(dart.toString(date.year));
    buffer.write(dart.notNull(date.hour) <= 9 ? " 0" : " ");
    buffer.write(dart.toString(date.hour));
    buffer.write(dart.notNull(date.minute) <= 9 ? ":0" : ":");
    buffer.write(dart.toString(date.minute));
    buffer.write(dart.notNull(date.second) <= 9 ? ":0" : ":");
    buffer.write(dart.toString(date.second));
    buffer.write(" GMT");
    return buffer.toString();
  };
  src__http_date.parseHttpDate = function(date) {
    return src__utils.wrapFormatException(core.DateTime, "HTTP date", date, dart.fn(() => {
      let scanner = new src__string_scanner.StringScanner.new(date);
      if (dart.test(scanner.scan(src__http_date._longWeekdayRegExp))) {
        scanner.expect(", ");
        let day = src__http_date._parseInt(scanner, 2);
        scanner.expect("-");
        let month = src__http_date._parseMonth(scanner);
        scanner.expect("-");
        let year = 1900 + dart.notNull(src__http_date._parseInt(scanner, 2));
        scanner.expect(" ");
        let time = src__http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return src__http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(src__http_date._shortWeekdayRegExp);
      if (dart.test(scanner.scan(", "))) {
        let day = src__http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let month = src__http_date._parseMonth(scanner);
        scanner.expect(" ");
        let year = src__http_date._parseInt(scanner, 4);
        scanner.expect(" ");
        let time = src__http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return src__http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(" ");
      let month = src__http_date._parseMonth(scanner);
      scanner.expect(" ");
      let day = dart.test(scanner.scan(" ")) ? src__http_date._parseInt(scanner, 1) : src__http_date._parseInt(scanner, 2);
      scanner.expect(" ");
      let time = src__http_date._parseTime(scanner);
      scanner.expect(" ");
      let year = src__http_date._parseInt(scanner, 4);
      scanner.expectDone();
      return src__http_date._makeDateTime(year, month, day, time);
    }, VoidToDateTime()));
  };
  src__http_date._parseMonth = function(scanner) {
    scanner.expect(src__http_date._monthRegExp);
    return dart.notNull(src__http_date._MONTHS[$indexOf](scanner.lastMatch._get(0))) + 1;
  };
  src__http_date._parseInt = function(scanner, digits) {
    scanner.expect(src__http_date._digitRegExp);
    if (scanner.lastMatch._get(0).length !== digits) {
      scanner.error("expected a " + dart.str(digits) + "-digit number.");
    }
    return core.int.parse(scanner.lastMatch._get(0));
  };
  src__http_date._parseTime = function(scanner) {
    let hours = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(hours) >= 24) scanner.error("hours may not be greater than 24.");
    scanner.expect(":");
    let minutes = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(minutes) >= 60) scanner.error("minutes may not be greater than 60.");
    scanner.expect(":");
    let seconds = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(seconds) >= 60) scanner.error("seconds may not be greater than 60.");
    return new core.DateTime.new(1, 1, 1, hours, minutes, seconds);
  };
  src__http_date._makeDateTime = function(year, month, day, time) {
    let dateTime = new core.DateTime.utc(year, month, day, time.hour, time.minute, time.second);
    if (dateTime.month != month) {
      dart.throw(new core.FormatException.new("invalid day '" + dart.str(day) + "' for month '" + dart.str(month) + "'."));
    }
    return dateTime;
  };
  dart.defineLazy(src__media_type, {
    /*src__media_type._escapedChar*/get _escapedChar() {
      return core.RegExp.new("[\"\\x00-\\x1F\\x7F]");
    }
  });
  src__media_type.MediaType = class MediaType extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get subtype() {
      return this[subtype$];
    }
    set subtype(value) {
      super.subtype = value;
    }
    get parameters() {
      return this[parameters$0];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get mimeType() {
      return dart.str(this.type) + "/" + dart.str(this.subtype);
    }
    static parse(mediaType) {
      return src__utils.wrapFormatException(src__media_type.MediaType, "media type", mediaType, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(mediaType);
        scanner.scan(src__scan.whitespace);
        scanner.expect(src__scan.token);
        let type = scanner.lastMatch._get(0);
        scanner.expect("/");
        scanner.expect(src__scan.token);
        let subtype = scanner.lastMatch._get(0);
        scanner.scan(src__scan.whitespace);
        let parameters = new (IdentityMapOfString$String()).new();
        while (dart.test(scanner.scan(";"))) {
          scanner.scan(src__scan.whitespace);
          scanner.expect(src__scan.token);
          let attribute = scanner.lastMatch._get(0);
          scanner.expect("=");
          let value = null;
          if (dart.test(scanner.scan(src__scan.token))) {
            value = scanner.lastMatch._get(0);
          } else {
            value = src__scan.expectQuotedString(scanner);
          }
          scanner.scan(src__scan.whitespace);
          parameters[$_set](attribute, value);
        }
        scanner.expectDone();
        return new src__media_type.MediaType.new(type, subtype, parameters);
      }, VoidToMediaType()));
    }
    change(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subtype = opts && 'subtype' in opts ? opts.subtype : null;
      let mimeType = opts && 'mimeType' in opts ? opts.mimeType : null;
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let clearParameters = opts && 'clearParameters' in opts ? opts.clearParameters : false;
      if (mimeType != null) {
        if (type != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [type] and [mimeType]."));
        } else if (subtype != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [subtype] and " + "[mimeType]."));
        }
        let segments = mimeType[$split]("/");
        if (segments[$length] !== 2) {
          dart.throw(new core.FormatException.new("Invalid mime type \"" + dart.str(mimeType) + "\"."));
        }
        type = segments[$_get](0);
        subtype = segments[$_get](1);
      }
      if (type == null) type = this.type;
      if (subtype == null) subtype = this.subtype;
      if (parameters == null) parameters = new (IdentityMapOfString$String()).new();
      if (!dart.test(clearParameters)) {
        let newParameters = parameters;
        parameters = MapOfString$String().from(this.parameters);
        parameters[$addAll](newParameters);
      }
      return new src__media_type.MediaType.new(type, subtype, parameters);
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      buffer.write(this.type);
      buffer.write("/");
      buffer.write(this.subtype);
      this.parameters[$forEach](dart.fn((attribute, value) => {
        buffer.write("; " + dart.str(attribute) + "=");
        if (dart.test(src__scan.nonToken.hasMatch(value))) {
          buffer.write("\"");
          buffer.write(value[$replaceAllMapped](src__media_type._escapedChar, dart.fn(match => "\\" + dart.notNull(match._get(0)), MatchToString())));
          buffer.write("\"");
        } else {
          buffer.write(value);
        }
      }, StringAndStringToNull()));
      return buffer.toString();
    }
  };
  (src__media_type.MediaType.new = function(type, subtype, parameters) {
    if (parameters === void 0) parameters = null;
    this[type$] = type[$toLowerCase]();
    this[subtype$] = subtype[$toLowerCase]();
    this[parameters$0] = new (UnmodifiableMapViewOfString$String()).new(parameters == null ? new (IdentityMapOfString$String()).new() : new (CaseInsensitiveMapOfString()).from(parameters));
  }).prototype = src__media_type.MediaType.prototype;
  dart.addTypeTests(src__media_type.MediaType);
  const type$ = Symbol("MediaType.type");
  const subtype$ = Symbol("MediaType.subtype");
  const parameters$0 = Symbol("MediaType.parameters");
  dart.setMethodSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getMethods(src__media_type.MediaType.__proto__),
    change: dart.fnType(src__media_type.MediaType, [], {type: core.String, subtype: core.String, mimeType: core.String, parameters: core.Map$(core.String, core.String), clearParameters: core.bool})
  }));
  dart.setGetterSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getGetters(src__media_type.MediaType.__proto__),
    mimeType: core.String
  }));
  dart.setFieldSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getFields(src__media_type.MediaType.__proto__),
    type: dart.finalFieldType(core.String),
    subtype: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(MapOfString$String())
  }));
  dart.defineExtensionMethods(src__media_type.MediaType, ['toString']);
  dart.trackLibraries("packages/http_parser/http_parser.ddc", {
    "package:http_parser/http_parser.dart": http_parser,
    "package:http_parser/src/case_insensitive_map.dart": src__case_insensitive_map,
    "package:http_parser/src/scan.dart": src__scan,
    "package:http_parser/src/utils.dart": src__utils,
    "package:http_parser/src/authentication_challenge.dart": src__authentication_challenge,
    "package:http_parser/src/chunked_coding/encoder.dart": src__chunked_coding__encoder,
    "package:http_parser/src/chunked_coding/decoder.dart": src__chunked_coding__decoder,
    "package:http_parser/src/chunked_coding.dart": src__chunked_coding,
    "package:http_parser/src/http_date.dart": src__http_date,
    "package:http_parser/src/media_type.dart": src__media_type
  }, '{"version":3,"sourceRoot":"","sources":["src/case_insensitive_map.dart","src/scan.dart","src/utils.dart","src/authentication_challenge.dart","src/chunked_coding/encoder.dart","src/chunked_coding/decoder.dart","src/chunked_coding.dart","src/http_date.dart","src/media_type.dart"],"names":[],"mappings":"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","file":"http_parser.ddc.js"}');
  // Exports:
  return {
    http_parser: http_parser,
    src__case_insensitive_map: src__case_insensitive_map,
    src__scan: src__scan,
    src__utils: src__utils,
    src__authentication_challenge: src__authentication_challenge,
    src__chunked_coding__encoder: src__chunked_coding__encoder,
    src__chunked_coding__decoder: src__chunked_coding__decoder,
    src__chunked_coding: src__chunked_coding,
    src__http_date: src__http_date,
    src__media_type: src__media_type
  };
});

//# sourceMappingURL=http_parser.ddc.js.map
