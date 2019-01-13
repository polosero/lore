define(['dart_sdk', 'packages/source_span/source_span'], function(dart_sdk, source_span) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__span_exception = source_span.src__span_exception;
  const src__file = source_span.src__file;
  const _root = Object.create(null);
  const string_scanner = Object.create(_root);
  const src__exception = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__string_scanner = Object.create(_root);
  const src__line_scanner = Object.create(_root);
  const src__relative_span_scanner = Object.create(_root);
  const src__span_scanner = Object.create(_root);
  const src__eager_span_scanner = Object.create(_root);
  const $substring = dartx.substring;
  const $codeUnitAt = dartx.codeUnitAt;
  const $replaceAll = dartx.replaceAll;
  const $toString = dartx.toString;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $length = dartx.length;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $lastIndexOf = dartx.lastIndexOf;
  const $toList = dartx.toList;
  src__exception.StringScannerException = class StringScannerException extends src__span_exception.SourceSpanFormatException {
    get source() {
      return core.String._check(super.source);
    }
    get sourceUrl() {
      return this.span.sourceUrl;
    }
  };
  (src__exception.StringScannerException.new = function(message, span, source) {
    src__exception.StringScannerException.__proto__.new.call(this, message, span, source);
  }).prototype = src__exception.StringScannerException.prototype;
  dart.addTypeTests(src__exception.StringScannerException);
  dart.setGetterSignature(src__exception.StringScannerException, () => ({
    __proto__: dart.getGetters(src__exception.StringScannerException.__proto__),
    source: core.String,
    sourceUrl: core.Uri
  }));
  src__utils.validateErrorArgs = function(string, match, position, length) {
    if (match != null && (position != null || length != null)) {
      dart.throw(new core.ArgumentError.new("Can't pass both match and position/length."));
    }
    if (position != null) {
      if (dart.notNull(position) < 0) {
        dart.throw(new core.RangeError.new("position must be greater than or equal to 0."));
      } else if (dart.notNull(position) > string.length) {
        dart.throw(new core.RangeError.new("position must be less than or equal to the " + "string length."));
      }
    }
    if (length != null && dart.notNull(length) < 0) {
      dart.throw(new core.RangeError.new("length must be greater than or equal to 0."));
    }
    if (position != null && length != null && dart.notNull(position) + dart.notNull(length) > string.length) {
      dart.throw(new core.RangeError.new("position plus length must not go beyond the end of " + "the string."));
    }
  };
  dart.defineLazy(src__string_scanner, {
    /*src__string_scanner._slashAutoEscape*/get _slashAutoEscape() {
      return core.RegExp.new("/").pattern === "\\/";
    }
  });
  const _position = Symbol('_position');
  const _lastMatch = Symbol('_lastMatch');
  const _lastMatchPosition = Symbol('_lastMatchPosition');
  const _fail = Symbol('_fail');
  src__string_scanner.StringScanner = class StringScanner extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get string() {
      return this[string$];
    }
    set string(value) {
      super.string = value;
    }
    get position() {
      return this[_position];
    }
    set position(position) {
      if (dart.notNull(position) < 0 || dart.notNull(position) > this.string.length) {
        dart.throw(new core.ArgumentError.new("Invalid position " + dart.str(position)));
      }
      this[_position] = position;
      this[_lastMatch] = null;
    }
    get lastMatch() {
      if (this[_position] != this[_lastMatchPosition]) this[_lastMatch] = null;
      return this[_lastMatch];
    }
    get rest() {
      return this.string[$substring](this.position);
    }
    get isDone() {
      return this.position === this.string.length;
    }
    readChar() {
      if (dart.test(this.isDone)) this[_fail]("more input");
      return this.string[$codeUnitAt]((() => {
        let x = this[_position];
        this[_position] = dart.notNull(x) + 1;
        return x;
      })());
    }
    peekChar(offset) {
      if (offset === void 0) offset = null;
      if (offset == null) offset = 0;
      let index = dart.notNull(this.position) + dart.notNull(offset);
      if (index < 0 || index >= this.string.length) return null;
      return this.string[$codeUnitAt](index);
    }
    scanChar(character) {
      if (dart.test(this.isDone)) return false;
      if (this.string[$codeUnitAt](this[_position]) !== character) return false;
      this[_position] = dart.notNull(this[_position]) + 1;
      return true;
    }
    expectChar(character, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scanChar(character))) return;
      if (name == null) {
        if (character === 92) {
          name = "\"\\\"";
        } else if (character === 34) {
          name = "\"\\\"\"";
        } else {
          name = "\"" + core.String.fromCharCode(character) + "\"";
        }
      }
      this[_fail](name);
    }
    scan(pattern) {
      let success = this.matches(pattern);
      if (dart.test(success)) {
        this[_position] = this[_lastMatch].end;
        this[_lastMatchPosition] = this[_position];
      }
      return success;
    }
    expect(pattern, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scan(pattern))) return;
      if (name == null) {
        if (core.RegExp.is(pattern)) {
          let source = pattern.pattern;
          if (!dart.test(src__string_scanner._slashAutoEscape)) source = source[$replaceAll]("/", "\\/");
          name = "/" + dart.str(source) + "/";
        } else {
          name = dart.toString(pattern)[$replaceAll]("\\", "\\\\")[$replaceAll]("\"", "\\\"");
          name = "\"" + dart.str(name) + "\"";
        }
      }
      this[_fail](name);
    }
    expectDone() {
      if (dart.test(this.isDone)) return;
      this[_fail]("no more input");
    }
    matches(pattern) {
      this[_lastMatch] = pattern[$matchAsPrefix](this.string, this.position);
      this[_lastMatchPosition] = this[_position];
      return this[_lastMatch] != null;
    }
    substring(start, end) {
      if (end === void 0) end = null;
      if (end == null) end = this.position;
      return this.string[$substring](start, end);
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      src__utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      if (position == null) {
        position = match == null ? this.position : match.start;
      }
      if (length == null) length = match == null ? 0 : dart.notNull(match.end) - dart.notNull(match.start);
      let sourceFile = new src__file.SourceFile.fromString(this.string, {url: this.sourceUrl});
      let span = sourceFile.span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
    [_fail](name) {
      this.error("expected " + dart.str(name) + ".", {position: this.position, length: 0});
    }
  };
  (src__string_scanner.StringScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_position] = 0;
    this[_lastMatch] = null;
    this[_lastMatchPosition] = null;
    this[string$] = string;
    this[sourceUrl$] = core.Uri._check(typeof sourceUrl == 'string' ? core.Uri.parse(sourceUrl) : sourceUrl);
    if (position != null) this.position = position;
  }).prototype = src__string_scanner.StringScanner.prototype;
  dart.addTypeTests(src__string_scanner.StringScanner);
  const sourceUrl$ = Symbol("StringScanner.sourceUrl");
  const string$ = Symbol("StringScanner.string");
  dart.setMethodSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getMethods(src__string_scanner.StringScanner.__proto__),
    readChar: dart.fnType(core.int, []),
    peekChar: dart.fnType(core.int, [], [core.int]),
    scanChar: dart.fnType(core.bool, [core.int]),
    expectChar: dart.fnType(dart.void, [core.int], {name: core.String}),
    scan: dart.fnType(core.bool, [core.Pattern]),
    expect: dart.fnType(dart.void, [core.Pattern], {name: core.String}),
    expectDone: dart.fnType(dart.void, []),
    matches: dart.fnType(core.bool, [core.Pattern]),
    substring: dart.fnType(core.String, [core.int], [core.int]),
    error: dart.fnType(dart.void, [core.String], {match: core.Match, position: core.int, length: core.int}),
    [_fail]: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getGetters(src__string_scanner.StringScanner.__proto__),
    position: core.int,
    lastMatch: core.Match,
    rest: core.String,
    isDone: core.bool
  }));
  dart.setSetterSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getSetters(src__string_scanner.StringScanner.__proto__),
    position: core.int
  }));
  dart.setFieldSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getFields(src__string_scanner.StringScanner.__proto__),
    sourceUrl: dart.finalFieldType(core.Uri),
    string: dart.finalFieldType(core.String),
    [_position]: dart.fieldType(core.int),
    [_lastMatch]: dart.fieldType(core.Match),
    [_lastMatchPosition]: dart.fieldType(core.int)
  }));
  dart.defineLazy(src__line_scanner, {
    /*src__line_scanner._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n?|\\n");
    }
  });
  const _line = Symbol('_line');
  const _column = Symbol('_column');
  const _betweenCRLF = Symbol('_betweenCRLF');
  const _scanner = Symbol('_scanner');
  const _newlinesIn = Symbol('_newlinesIn');
  const _adjustLineAndColumn = Symbol('_adjustLineAndColumn');
  src__line_scanner.LineScanner = class LineScanner extends src__string_scanner.StringScanner {
    get line() {
      return this[_line];
    }
    get column() {
      return this[_column];
    }
    get state() {
      return new src__line_scanner.LineScannerState.__(this, this.position, this.line, this.column);
    }
    get [_betweenCRLF]() {
      return this.peekChar(-1) === 13 && this.peekChar() === 10;
    }
    set state(state) {
      if (!(state[_scanner] === this)) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      super.position = state.position;
      this[_line] = state.line;
      this[_column] = state.column;
    }
    set position(newPosition) {
      let oldPosition = this.position;
      super.position = newPosition;
      if (dart.notNull(newPosition) > dart.notNull(oldPosition)) {
        let newlines = this[_newlinesIn](this.string[$substring](oldPosition, newPosition));
        this[_line] = dart.notNull(this[_line]) + dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column] = dart.notNull(this[_column]) + (dart.notNull(newPosition) - dart.notNull(oldPosition));
        } else {
          this[_column] = dart.notNull(newPosition) - dart.notNull(newlines[$last].end);
        }
      } else {
        let newlines = this[_newlinesIn](this.string[$substring](newPosition, oldPosition));
        if (dart.test(this[_betweenCRLF])) newlines[$removeLast]();
        this[_line] = dart.notNull(this[_line]) - dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column] = dart.notNull(this[_column]) - (dart.notNull(oldPosition) - dart.notNull(newPosition));
        } else {
          this[_column] = dart.notNull(newPosition) - this.string[$lastIndexOf](src__line_scanner._newlineRegExp, newPosition) - 1;
        }
      }
    }
    get position() {
      return super.position;
    }
    scanChar(character) {
      if (!dart.test(super.scanChar(character))) return false;
      this[_adjustLineAndColumn](character);
      return true;
    }
    readChar() {
      let character = super.readChar();
      this[_adjustLineAndColumn](character);
      return character;
    }
    [_adjustLineAndColumn](character) {
      if (character === 10 || character === 13 && this.peekChar() !== 10) {
        this[_line] = dart.notNull(this[_line]) + 1;
        this[_column] = 0;
      } else {
        this[_column] = dart.notNull(this[_column]) + 1;
      }
    }
    scan(pattern) {
      if (!dart.test(super.scan(pattern))) return false;
      let newlines = this[_newlinesIn](this.lastMatch._get(0));
      this[_line] = dart.notNull(this[_line]) + dart.notNull(newlines[$length]);
      if (dart.test(newlines[$isEmpty])) {
        this[_column] = dart.notNull(this[_column]) + this.lastMatch._get(0).length;
      } else {
        this[_column] = this.lastMatch._get(0).length - dart.notNull(newlines[$last].end);
      }
      return true;
    }
    [_newlinesIn](text) {
      let newlines = src__line_scanner._newlineRegExp.allMatches(text)[$toList]();
      if (dart.test(this[_betweenCRLF])) newlines[$removeLast]();
      return newlines;
    }
  };
  (src__line_scanner.LineScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_line] = 0;
    this[_column] = 0;
    src__line_scanner.LineScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
  }).prototype = src__line_scanner.LineScanner.prototype;
  dart.addTypeTests(src__line_scanner.LineScanner);
  dart.setMethodSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getMethods(src__line_scanner.LineScanner.__proto__),
    [_adjustLineAndColumn]: dart.fnType(dart.void, [core.int]),
    [_newlinesIn]: dart.fnType(core.List$(core.Match), [core.String])
  }));
  dart.setGetterSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getGetters(src__line_scanner.LineScanner.__proto__),
    line: core.int,
    column: core.int,
    state: src__line_scanner.LineScannerState,
    [_betweenCRLF]: core.bool
  }));
  dart.setSetterSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getSetters(src__line_scanner.LineScanner.__proto__),
    state: src__line_scanner.LineScannerState
  }));
  dart.setFieldSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getFields(src__line_scanner.LineScanner.__proto__),
    [_line]: dart.fieldType(core.int),
    [_column]: dart.fieldType(core.int)
  }));
  src__line_scanner.LineScannerState = class LineScannerState extends core.Object {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
  };
  (src__line_scanner.LineScannerState.__ = function(scanner, position, line, column) {
    this[_scanner] = scanner;
    this[position$] = position;
    this[line$] = line;
    this[column$] = column;
  }).prototype = src__line_scanner.LineScannerState.prototype;
  dart.addTypeTests(src__line_scanner.LineScannerState);
  const position$ = Symbol("LineScannerState.position");
  const line$ = Symbol("LineScannerState.line");
  const column$ = Symbol("LineScannerState.column");
  dart.setFieldSignature(src__line_scanner.LineScannerState, () => ({
    __proto__: dart.getFields(src__line_scanner.LineScannerState.__proto__),
    [_scanner]: dart.finalFieldType(src__line_scanner.LineScanner),
    position: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  const _sourceFile = Symbol('_sourceFile');
  const _startLocation = Symbol('_startLocation');
  const _lastSpan = Symbol('_lastSpan');
  const _scanner$ = Symbol('_scanner');
  src__relative_span_scanner.RelativeSpanScanner = class RelativeSpanScanner extends src__string_scanner.StringScanner {
    get line() {
      return dart.notNull(this[_sourceFile].getLine(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position))) - dart.notNull(this[_startLocation].line);
    }
    get column() {
      let line = this[_sourceFile].getLine(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position));
      let column = this[_sourceFile].getColumn(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position), {line: line});
      return line == this[_startLocation].line ? dart.notNull(column) - dart.notNull(this[_startLocation].column) : column;
    }
    get state() {
      return new src__relative_span_scanner._SpanScannerState.new(this, this.position);
    }
    set state(state) {
      if (!src__relative_span_scanner._SpanScannerState.is(state) || !(src__relative_span_scanner._SpanScannerState.as(state)[_scanner$] === this)) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      this.position = state.position;
    }
    get lastSpan() {
      return this[_lastSpan];
    }
    get location() {
      return this[_sourceFile].location(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position));
    }
    get emptySpan() {
      return this.location.pointSpan();
    }
    spanFrom(startState, endState) {
      if (endState === void 0) endState = null;
      let endPosition = endState == null ? this.position : endState.position;
      return this[_sourceFile].span(dart.notNull(this[_startLocation].offset) + dart.notNull(startState.position), dart.notNull(this[_startLocation].offset) + dart.notNull(endPosition));
    }
    matches(pattern) {
      if (!dart.test(super.matches(pattern))) {
        this[_lastSpan] = null;
        return false;
      }
      this[_lastSpan] = this[_sourceFile].span(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position), dart.notNull(this[_startLocation].offset) + dart.notNull(this.lastMatch.end));
      return true;
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      src__utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      if (position == null) {
        position = match == null ? this.position : match.start;
      }
      if (length == null) length = match == null ? 1 : dart.notNull(match.end) - dart.notNull(match.start);
      let span = this[_sourceFile].span(dart.notNull(this[_startLocation].offset) + dart.notNull(position), dart.notNull(this[_startLocation].offset) + dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
  };
  (src__relative_span_scanner.RelativeSpanScanner.new = function(span) {
    this[_lastSpan] = null;
    this[_sourceFile] = span.file;
    this[_startLocation] = span.start;
    src__relative_span_scanner.RelativeSpanScanner.__proto__.new.call(this, span.text, {sourceUrl: span.sourceUrl});
  }).prototype = src__relative_span_scanner.RelativeSpanScanner.prototype;
  dart.addTypeTests(src__relative_span_scanner.RelativeSpanScanner);
  src__relative_span_scanner.RelativeSpanScanner[dart.implements] = () => [src__span_scanner.SpanScanner];
  dart.setMethodSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getMethods(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    spanFrom: dart.fnType(src__file.FileSpan, [src__line_scanner.LineScannerState], [src__line_scanner.LineScannerState])
  }));
  dart.setGetterSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getGetters(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    line: core.int,
    column: core.int,
    state: src__line_scanner.LineScannerState,
    lastSpan: src__file.FileSpan,
    location: src__file.FileLocation,
    emptySpan: src__file.FileSpan
  }));
  dart.setSetterSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getSetters(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    state: src__line_scanner.LineScannerState
  }));
  dart.setFieldSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getFields(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    [_sourceFile]: dart.finalFieldType(src__file.SourceFile),
    [_startLocation]: dart.finalFieldType(src__file.FileLocation),
    [_lastSpan]: dart.fieldType(src__file.FileSpan)
  }));
  src__relative_span_scanner._SpanScannerState = class _SpanScannerState extends core.Object {
    get line() {
      return this[_scanner$][_sourceFile].getLine(this.position);
    }
    get column() {
      return this[_scanner$][_sourceFile].getColumn(this.position);
    }
  };
  (src__relative_span_scanner._SpanScannerState.new = function(scanner, position) {
    this[_scanner$] = scanner;
    this.position = position;
  }).prototype = src__relative_span_scanner._SpanScannerState.prototype;
  dart.addTypeTests(src__relative_span_scanner._SpanScannerState);
  src__relative_span_scanner._SpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setGetterSignature(src__relative_span_scanner._SpanScannerState, () => ({
    __proto__: dart.getGetters(src__relative_span_scanner._SpanScannerState.__proto__),
    line: core.int,
    column: core.int
  }));
  dart.setFieldSignature(src__relative_span_scanner._SpanScannerState, () => ({
    __proto__: dart.getFields(src__relative_span_scanner._SpanScannerState.__proto__),
    [_scanner$]: dart.finalFieldType(src__relative_span_scanner.RelativeSpanScanner),
    position: dart.finalFieldType(core.int)
  }));
  const _sourceFile$ = Symbol('_sourceFile');
  const _lastSpan$ = Symbol('_lastSpan');
  const _scanner$0 = Symbol('_scanner');
  src__span_scanner.SpanScanner = class SpanScanner extends src__string_scanner.StringScanner {
    get line() {
      return this[_sourceFile$].getLine(this.position);
    }
    get column() {
      return this[_sourceFile$].getColumn(this.position);
    }
    get state() {
      return new src__span_scanner._SpanScannerState.new(this, this.position);
    }
    set state(state) {
      if (!src__span_scanner._SpanScannerState.is(state) || !(src__span_scanner._SpanScannerState.as(state)[_scanner$0] === this)) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      this.position = state.position;
    }
    get lastSpan() {
      if (this.lastMatch == null) this[_lastSpan$] = null;
      return this[_lastSpan$];
    }
    get location() {
      return this[_sourceFile$].location(this.position);
    }
    get emptySpan() {
      return this.location.pointSpan();
    }
    static eager(string, opts) {
      return new src__eager_span_scanner.EagerSpanScanner.new(string, opts);
    }
    static within(span) {
      return new src__relative_span_scanner.RelativeSpanScanner.new(span);
    }
    spanFrom(startState, endState) {
      if (endState === void 0) endState = null;
      let endPosition = endState == null ? this.position : endState.position;
      return this[_sourceFile$].span(startState.position, endPosition);
    }
    matches(pattern) {
      if (!dart.test(super.matches(pattern))) {
        this[_lastSpan$] = null;
        return false;
      }
      this[_lastSpan$] = this[_sourceFile$].span(this.position, this.lastMatch.end);
      return true;
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      src__utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      if (position == null) {
        position = match == null ? this.position : match.start;
      }
      if (length == null) length = match == null ? 0 : dart.notNull(match.end) - dart.notNull(match.start);
      let span = this[_sourceFile$].span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
  };
  (src__span_scanner.SpanScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_lastSpan$] = null;
    this[_sourceFile$] = new src__file.SourceFile.fromString(string, {url: sourceUrl});
    src__span_scanner.SpanScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
  }).prototype = src__span_scanner.SpanScanner.prototype;
  dart.addTypeTests(src__span_scanner.SpanScanner);
  src__span_scanner.SpanScanner[dart.implements] = () => [src__line_scanner.LineScanner];
  dart.setMethodSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getMethods(src__span_scanner.SpanScanner.__proto__),
    spanFrom: dart.fnType(src__file.FileSpan, [src__line_scanner.LineScannerState], [src__line_scanner.LineScannerState])
  }));
  dart.setGetterSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getGetters(src__span_scanner.SpanScanner.__proto__),
    line: core.int,
    column: core.int,
    state: src__line_scanner.LineScannerState,
    lastSpan: src__file.FileSpan,
    location: src__file.FileLocation,
    emptySpan: src__file.FileSpan
  }));
  dart.setSetterSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getSetters(src__span_scanner.SpanScanner.__proto__),
    state: src__line_scanner.LineScannerState
  }));
  dart.setFieldSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getFields(src__span_scanner.SpanScanner.__proto__),
    [_sourceFile$]: dart.finalFieldType(src__file.SourceFile),
    [_lastSpan$]: dart.fieldType(src__file.FileSpan)
  }));
  src__span_scanner._SpanScannerState = class _SpanScannerState extends core.Object {
    get line() {
      return this[_scanner$0][_sourceFile$].getLine(this.position);
    }
    get column() {
      return this[_scanner$0][_sourceFile$].getColumn(this.position);
    }
  };
  (src__span_scanner._SpanScannerState.new = function(scanner, position) {
    this[_scanner$0] = scanner;
    this.position = position;
  }).prototype = src__span_scanner._SpanScannerState.prototype;
  dart.addTypeTests(src__span_scanner._SpanScannerState);
  src__span_scanner._SpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setGetterSignature(src__span_scanner._SpanScannerState, () => ({
    __proto__: dart.getGetters(src__span_scanner._SpanScannerState.__proto__),
    line: core.int,
    column: core.int
  }));
  dart.setFieldSignature(src__span_scanner._SpanScannerState, () => ({
    __proto__: dart.getFields(src__span_scanner._SpanScannerState.__proto__),
    [_scanner$0]: dart.finalFieldType(src__span_scanner.SpanScanner),
    position: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__eager_span_scanner, {
    /*src__eager_span_scanner._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n?|\\n");
    }
  });
  const _line$ = Symbol('_line');
  const _column$ = Symbol('_column');
  const _betweenCRLF$ = Symbol('_betweenCRLF');
  const _scanner$1 = Symbol('_scanner');
  const _newlinesIn$ = Symbol('_newlinesIn');
  const _adjustLineAndColumn$ = Symbol('_adjustLineAndColumn');
  src__eager_span_scanner.EagerSpanScanner = class EagerSpanScanner extends src__span_scanner.SpanScanner {
    get line() {
      return this[_line$];
    }
    get column() {
      return this[_column$];
    }
    get state() {
      return new src__eager_span_scanner._EagerSpanScannerState.new(this, this.position, this.line, this.column);
    }
    get [_betweenCRLF$]() {
      return this.peekChar(-1) === 13 && this.peekChar() === 10;
    }
    set state(state) {
      if (!src__eager_span_scanner._EagerSpanScannerState.is(state) || !(src__eager_span_scanner._EagerSpanScannerState.as(state)[_scanner$1] === this)) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      super.position = state.position;
      this[_line$] = state.line;
      this[_column$] = state.column;
    }
    set position(newPosition) {
      let oldPosition = this.position;
      super.position = newPosition;
      if (dart.notNull(newPosition) > dart.notNull(oldPosition)) {
        let newlines = this[_newlinesIn$](this.string[$substring](oldPosition, newPosition));
        this[_line$] = dart.notNull(this[_line$]) + dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$] = dart.notNull(this[_column$]) + (dart.notNull(newPosition) - dart.notNull(oldPosition));
        } else {
          this[_column$] = dart.notNull(newPosition) - dart.notNull(newlines[$last].end);
        }
      } else {
        let newlines = this[_newlinesIn$](this.string[$substring](newPosition, oldPosition));
        if (dart.test(this[_betweenCRLF$])) newlines[$removeLast]();
        this[_line$] = dart.notNull(this[_line$]) - dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$] = dart.notNull(this[_column$]) - (dart.notNull(oldPosition) - dart.notNull(newPosition));
        } else {
          this[_column$] = dart.notNull(newPosition) - this.string[$lastIndexOf](src__eager_span_scanner._newlineRegExp, newPosition) - 1;
        }
      }
    }
    get position() {
      return super.position;
    }
    scanChar(character) {
      if (!dart.test(super.scanChar(character))) return false;
      this[_adjustLineAndColumn$](character);
      return true;
    }
    readChar() {
      let character = super.readChar();
      this[_adjustLineAndColumn$](character);
      return character;
    }
    [_adjustLineAndColumn$](character) {
      if (character === 10 || character === 13 && this.peekChar() !== 10) {
        this[_line$] = dart.notNull(this[_line$]) + 1;
        this[_column$] = 0;
      } else {
        this[_column$] = dart.notNull(this[_column$]) + 1;
      }
    }
    scan(pattern) {
      if (!dart.test(super.scan(pattern))) return false;
      let newlines = this[_newlinesIn$](this.lastMatch._get(0));
      this[_line$] = dart.notNull(this[_line$]) + dart.notNull(newlines[$length]);
      if (dart.test(newlines[$isEmpty])) {
        this[_column$] = dart.notNull(this[_column$]) + this.lastMatch._get(0).length;
      } else {
        this[_column$] = this.lastMatch._get(0).length - dart.notNull(newlines[$last].end);
      }
      return true;
    }
    [_newlinesIn$](text) {
      let newlines = src__eager_span_scanner._newlineRegExp.allMatches(text)[$toList]();
      if (dart.test(this[_betweenCRLF$])) newlines[$removeLast]();
      return newlines;
    }
  };
  (src__eager_span_scanner.EagerSpanScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_line$] = 0;
    this[_column$] = 0;
    src__eager_span_scanner.EagerSpanScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
  }).prototype = src__eager_span_scanner.EagerSpanScanner.prototype;
  dart.addTypeTests(src__eager_span_scanner.EagerSpanScanner);
  dart.setMethodSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getMethods(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_adjustLineAndColumn$]: dart.fnType(dart.void, [core.int]),
    [_newlinesIn$]: dart.fnType(core.List$(core.Match), [core.String])
  }));
  dart.setGetterSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getGetters(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_betweenCRLF$]: core.bool
  }));
  dart.setFieldSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getFields(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_line$]: dart.fieldType(core.int),
    [_column$]: dart.fieldType(core.int)
  }));
  src__eager_span_scanner._EagerSpanScannerState = class _EagerSpanScannerState extends core.Object {};
  (src__eager_span_scanner._EagerSpanScannerState.new = function(scanner, position, line, column) {
    this[_scanner$1] = scanner;
    this.position = position;
    this.line = line;
    this.column = column;
  }).prototype = src__eager_span_scanner._EagerSpanScannerState.prototype;
  dart.addTypeTests(src__eager_span_scanner._EagerSpanScannerState);
  src__eager_span_scanner._EagerSpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setFieldSignature(src__eager_span_scanner._EagerSpanScannerState, () => ({
    __proto__: dart.getFields(src__eager_span_scanner._EagerSpanScannerState.__proto__),
    [_scanner$1]: dart.finalFieldType(src__eager_span_scanner.EagerSpanScanner),
    position: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/string_scanner/string_scanner.ddc", {
    "package:string_scanner/string_scanner.dart": string_scanner,
    "package:string_scanner/src/exception.dart": src__exception,
    "package:string_scanner/src/utils.dart": src__utils,
    "package:string_scanner/src/string_scanner.dart": src__string_scanner,
    "package:string_scanner/src/line_scanner.dart": src__line_scanner,
    "package:string_scanner/src/relative_span_scanner.dart": src__relative_span_scanner,
    "package:string_scanner/src/span_scanner.dart": src__span_scanner,
    "package:string_scanner/src/eager_span_scanner.dart": src__eager_span_scanner
  }, '{"version":3,"sourceRoot":"","sources":["src/exception.dart","src/utils.dart","src/string_scanner.dart","src/line_scanner.dart","src/relative_span_scanner.dart","src/span_scanner.dart","src/eager_span_scanner.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;gCAQuB,YAAY;;;YAKZ,UAAI,UAAU;;;wDAEZ,OAAc,EAAE,IAAe,EAAE,MAAa;AAC/D,mEAAM,OAAO,EAAE,IAAI,EAAE,MAAM;EAAC;;;;;;;0CCXb,MAAa,EAAE,KAAW,EAAE,QAAY,EAAE,MAAU;AACzE,QAAI,KAAK,IAAI,SAAS,QAAQ,IAAI,QAAQ,MAAM,IAAI,OAAO;AACzD,iBAAM,IAAI,sBAAa,CAAC;;AAG1B,QAAI,QAAQ,IAAI,MAAM;AACpB,UAAa,aAAT,QAAQ,IAAG,GAAG;AAChB,mBAAM,IAAI,mBAAU,CAAC;YAChB,KAAa,aAAT,QAAQ,IAAG,MAAM,OAAO,EAAE;AACnC,mBAAM,IAAI,mBAAU,CAAC,gDACjB;;;AAIR,QAAI,MAAM,IAAI,QAAe,aAAP,MAAM,IAAG,GAAG;AAChC,iBAAM,IAAI,mBAAU,CAAC;;AAGvB,QAAI,QAAQ,IAAI,QAAQ,MAAM,IAAI,QAAiB,AAAS,aAAlB,QAAQ,iBAAG,MAAM,IAAG,MAAM,OAAO,EAAE;AAC3E,iBAAM,IAAI,mBAAU,CAAC,wDACjB;;EAER;;MCbM,oCAAgB;YAAG,AAAI,gBAAM,CAAC,YAAY,KAAI;;;;;;;;IAQxC;;;;;;IAGG;;;;;;;YAGO,gBAAS;;iBAChB,QAAY;AACvB,UAAa,aAAT,QAAQ,IAAG,KAAc,aAAT,QAAQ,IAAG,WAAM,OAAO,EAAE;AAC5C,mBAAM,IAAI,sBAAa,CAAC,+BAAmB,QAAQ;;AAGrD,qBAAS,GAAG,QAAQ;AACpB,sBAAU,GAAG;IACf;;AAUE,UAAI,eAAS,IAAI,wBAAkB,EAAE,gBAAU,GAAG;AAClD,YAAO,iBAAU;IACnB;;YAMmB,YAAM,YAAU,CAAC,aAAQ;IAAC;;YAG1B,cAAQ,KAAI,WAAM,OAAO;;;AAiB1C,oBAAI,WAAM,GAAE,WAAK,CAAC;AAClB,YAAO,YAAM,aAAW;gBAAC,eAAS;4CA3EtC;;;IA4EE;aASc,MAAU;6BAAN;AAChB,UAAI,MAAM,IAAI,MAAM,MAAM,GAAG;AAC7B,UAAI,QAAiB,aAAT,aAAQ,iBAAG,MAAM;AAC7B,UAAI,AAAM,KAAD,GAAG,KAAK,AAAM,KAAD,IAAI,WAAM,OAAO,EAAE,MAAO;AAChD,YAAO,YAAM,aAAW,CAAC,KAAK;IAChC;aAKc,SAAa;AACzB,oBAAI,WAAM,GAAE,MAAO;AACnB,UAAI,WAAM,aAAW,CAAC,eAAS,MAAK,SAAS,EAAE,MAAO;AACtD,qBAAS,gBAAT,eAAS,IAlGb;AAmGI,YAAO;IACT;eAQgB,SAAa;UAAU;AACrC,oBAAI,aAAQ,CAAC,SAAS,IAAG;AAEzB,UAAI,IAAI,IAAI,MAAM;AAChB,YAAI,SAAS,KAAI,EAAU,EAAE;AAC3B,cAAI,GAAG;cACF,KAAI,SAAS,KAAI,EAAa,EAAE;AACrC,cAAI,GAAG;eACF;AACL,cAAI,GAAG,OAAI,AAAI,wBAAmB,CAAC,SAAS;;;AAIhD,iBAAK,CAAC,IAAI;IACZ;SAMU,OAAe;AACvB,UAAI,UAAU,YAAO,CAAC,OAAO;AAC7B,oBAAI,OAAO,GAAE;AACX,uBAAS,GAAG,gBAAU,IAAI;AAC1B,gCAAkB,GAAG,eAAS;;AAEhC,YAAO,QAAO;IAChB;WASY,OAAe;UAAU;AACnC,oBAAI,SAAI,CAAC,OAAO,IAAG;AAEnB,UAAI,IAAI,IAAI,MAAM;AAChB,2BAAI,OAAO,GAAY;AACrB,cAAI,SAAS,OAAO,QAAQ;AAC5B,yBAAK,oCAAgB,GAAE,MAAM,GAAG,MAAM,aAAW,CAAC,KAAK;AACvD,cAAI,GAAG,eAAG,MAAM;eACX;AACL,cAAI,iBACA,OAAO,cAAsB,CAAC,MAAM,oBAAkB,CAAC,MAAK;AAChE,cAAI,GAAG,gBAAG,IAAI;;;AAGlB,iBAAK,CAAC,IAAI;IACZ;;AAKE,oBAAI,WAAM,GAAE;AACZ,iBAAK,CAAC;IACR;YAMa,OAAe;AAC1B,sBAAU,GAAG,OAAO,gBAAc,CAAC,WAAM,EAAE,aAAQ;AACnD,8BAAkB,GAAG,eAAS;AAC9B,YAAO,iBAAU,IAAI;IACvB;cAMiB,KAAS,EAAG,GAAO;0BAAH;AAC/B,UAAI,GAAG,IAAI,MAAM,GAAG,GAAG,aAAQ;AAC/B,YAAO,YAAM,YAAU,CAAC,KAAK,EAAE,GAAG;IACpC;UAgBW,OAAc;UAAS;UAAW;UAAc;AACzD,kCAAiB,CAAC,WAAM,EAAE,KAAK,EAAE,QAAQ,EAAE,MAAM;AAEjD,UAAI,KAAK,IAAI,QAAQ,QAAQ,IAAI,QAAQ,MAAM,IAAI,MAAM,KAAK,GAAG,cAAS;AAC1E,UAAI,QAAQ,IAAI,MAAM;AACpB,gBAAQ,GAAG,KAAK,IAAI,OAAO,aAAa,GAAG,KAAK,MAAM;;AAExD,UAAI,MAAM,IAAI,MAAM,MAAM,GAAG,KAAK,IAAI,OAAO,IAAc,aAAV,KAAK,IAAI,iBAAG,KAAK,MAAM;AAExE,UAAI,aAAa,IAAI,+BAAqB,CAAC,WAAM,QAAO,cAAS;AACjE,UAAI,OAAO,UAAU,KAAK,CAAC,QAAQ,EAAW,aAAT,QAAQ,iBAAG,MAAM;AACtD,iBAAM,IAAI,yCAAsB,CAAC,OAAO,EAAE,IAAI,EAAE,WAAM;IACxD;YAKW,IAAW;AACpB,gBAAK,CAAC,uBAAW,IAAI,oBAAc,aAAa,UAAU;IAC5D;;oDA5Jc,MAAW;QAAG;QAAe;IA1BvC,eAAS,GAAG;IAYV,gBAAU;IACZ,wBAAkB;IAaH,aAAM,GAAN,MAAM;IACnB,gBAAS,0BAAG,SAAS,eAAa,QAAG,MAAM,CAAC,SAAS,IAAI,SAAS;AACtE,QAAI,QAAQ,IAAI,MAAM,aAAa,GAAG,QAAQ;EAChD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCxDI,gCAAc;YAAG,AAAI,gBAAM,CAAC;;;;;;;;;;;YAKhB,YAAK;;;YAIH,cAAO;;;YAWrB,KAAI,qCAAkB,CAAC,MAAM,aAAQ,EAAE,SAAI,EAAE,WAAM;IAAC;;YAI/B,AAAoB,cAAZ,CAAC,CAAC,OAAM,EAAG,IAAI,aAAQ,OAAM,EAAG;;cAEvD,KAAsB;AAC9B,YAAK,AAAU,KAAK,UAAS,KAAE,OAAO;AACpC,mBAAM,IAAI,sBAAa,CAAC,oDACpB;;AAGN,oBAAc,GAAG,KAAK,SAAS;AAC/B,iBAAK,GAAG,KAAK,KAAK;AAClB,mBAAO,GAAG,KAAK,OAAO;IACxB;iBAEa,WAAe;AAC1B,UAAI,cAAc,aAAQ;AAC1B,oBAAc,GAAG,WAAW;AAE5B,UAAgB,aAAZ,WAAW,iBAAG,WAAW,GAAE;AAC7B,YAAI,WAAW,iBAAW,CAAC,WAAM,YAAU,CAAC,WAAW,EAAE,WAAW;AACpE,mBAAK,GAtDX,aAsDM,WAAK,iBAAI,QAAQ,SAAO;AACxB,sBAAI,QAAQ,UAAQ,GAAE;AACpB,uBAAO,GAxDf,aAwDQ,aAAO,KAAgB,aAAZ,WAAW,iBAAG,WAAW;eAC/B;AACL,uBAAO,GAAe,aAAZ,WAAW,iBAAG,QAAQ,OAAK,IAAI;;aAEtC;AACL,YAAI,WAAW,iBAAW,CAAC,WAAM,YAAU,CAAC,WAAW,EAAE,WAAW;AACpE,sBAAI,kBAAY,GAAE,QAAQ,aAAW;AAErC,mBAAK,GAhEX,aAgEM,WAAK,iBAAI,QAAQ,SAAO;AACxB,sBAAI,QAAQ,UAAQ,GAAE;AACpB,uBAAO,GAlEf,aAkEQ,aAAO,KAAgB,aAAZ,WAAW,iBAAG,WAAW;eAC/B;AACL,uBAAO,GACS,AAAkD,aAA9D,WAAW,IAAG,WAAM,cAAY,CAAC,gCAAc,EAAE,WAAW,IAAI;;;IAG1E;;;;aAKc,SAAa;AACzB,qBAAK,cAAc,CAAC,SAAS,IAAG,MAAO;AACvC,gCAAoB,CAAC,SAAS;AAC9B,YAAO;IACT;;AAGE,UAAI,YAAY,cAAc;AAC9B,gCAAoB,CAAC,SAAS;AAC9B,YAAO,UAAS;IAClB;2BAG0B,SAAa;AACrC,UAAI,SAAS,KAAI,EAAG,IAAK,SAAS,KAAI,EAAG,IAAI,aAAQ,OAAM,EAAG,EAAG;AAC/D,mBAAK,GA5FX,aA4FM,WAAK,IAAI;AACT,qBAAO,GAAG;aACL;AACL,qBAAO,GA/Fb,aA+FM,aAAO,IAAI;;IAEf;SAEU,OAAe;AACvB,qBAAK,UAAU,CAAC,OAAO,IAAG,MAAO;AAEjC,UAAI,WAAW,iBAAW,CAAC,cAAS,MAAC;AACrC,iBAAK,GAvGT,aAuGI,WAAK,iBAAI,QAAQ,SAAO;AACxB,oBAAI,QAAQ,UAAQ,GAAE;AACpB,qBAAO,GAzGb,aAyGM,aAAO,IAAI,cAAS,MAAC,SAAS;aACzB;AACL,qBAAO,GAAG,AAAoB,cAAX,MAAC,SAAS,gBAAG,QAAQ,OAAK,IAAI;;AAGnD,YAAO;IACT;kBAIwB,IAAW;AACjC,UAAI,WAAW,gCAAc,WAAW,CAAC,IAAI,UAAQ;AACrD,oBAAI,kBAAY,GAAE,QAAQ,aAAW;AACrC,YAAO,SAAQ;IACjB;;gDA7CY,MAAa;QAAG;QAAe;IAzDvC,WAAK,GAAG;IAIR,aAAO,GAAG;AAsDR,2DAAM,MAAM,cAAa,SAAS,YAAY,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;IAqDnD;;;;;;IAGA;;;;;;IAGA;;;;;;;6DAEwB,QAAa,EAAE,IAAS,EAAE,MAAW;IAA/C,cAAQ;IAAO,eAAQ,GAAR,QAAQ;IAAO,WAAI,GAAJ,IAAI;IAAO,aAAM,GAAN,MAAM;EAAC;;;;;;;;;;;;;;;;;;YC1Gd,cAAtD,iBAAW,QAAQ,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ,mBACpD,oBAAc,KAAK;;;AAGrB,UAAI,OAAO,iBAAW,QAAQ,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ;AAC/D,UAAI,SACA,iBAAW,UAAU,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ,UAAQ,IAAI;AACtE,YAAO,KAAI,IAAI,oBAAc,KAAK,GACrB,aAAP,MAAM,iBAAG,oBAAc,OAAO,IAC9B,MAAM;IACd;;YAE8B,KAAI,gDAAiB,CAAC,MAAM,aAAQ;IAAC;cAEzD,KAAsB;AAC9B,2DAAI,KAAK,OACJ,gDAAW,KAAK,YAA+B,KAAE,OAAO;AAC3D,mBAAM,IAAI,sBAAa,CAAC,oDACpB;;AAGN,mBAAa,GAAG,KAAK,SAAS;IAChC;;YAEyB,gBAAS;;;YAI9B,kBAAW,SAAS,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ;IAAC;;YAEhC,cAAQ,UAAU;IAAE;aAO5B,UAA2B,EAAG,QAAyB;+BAAR;AAC/D,UAAI,cAAc,QAAQ,IAAI,OAAO,aAAQ,GAAG,QAAQ,SAAS;AACjE,YAAO,kBAAW,KAAK,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,UAAU,SAAS,GACzC,aAAtB,oBAAc,OAAO,iBAAG,WAAW;IACzC;YAEa,OAAe;AAC1B,qBAAK,aAAa,CAAC,OAAO,IAAG;AAC3B,uBAAS,GAAG;AACZ,cAAO;;AAGT,qBAAS,GAAG,iBAAW,KAAK,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ,GACnC,aAAtB,oBAAc,OAAO,iBAAG,cAAS,IAAI;AACzC,YAAO;IACT;UAEW,OAAc;UAAS;UAAW;UAAc;AACzD,kCAAiB,CAAC,WAAM,EAAE,KAAK,EAAE,QAAQ,EAAE,MAAM;AAEjD,UAAI,KAAK,IAAI,QAAQ,QAAQ,IAAI,QAAQ,MAAM,IAAI,MAAM,KAAK,GAAG,cAAS;AAC1E,UAAI,QAAQ,IAAI,MAAM;AACpB,gBAAQ,GAAG,KAAK,IAAI,OAAO,aAAa,GAAG,KAAK,MAAM;;AAExD,UAAI,MAAM,IAAI,MAAM,MAAM,GAAG,KAAK,IAAI,OAAO,IAAc,aAAV,KAAK,IAAI,iBAAG,KAAK,MAAM;AAExE,UAAI,OAAO,iBAAW,KAAK,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,QAAQ,GAClC,AAAW,aAAjC,oBAAc,OAAO,iBAAG,QAAQ,iBAAG,MAAM;AAC7C,iBAAM,IAAI,yCAAsB,CAAC,OAAO,EAAE,IAAI,EAAE,WAAM;IACxD;;iEAlCoB,IAAa;IAPxB,eAAS;IAQZ,iBAAW,GAAG,IAAI,KAAK;IACvB,oBAAc,GAAG,IAAI,MAAM;AAC3B,4EAAM,IAAI,KAAK,cAAa,IAAI,UAAU;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;YAwCjC,gBAAQ,aAAY,QAAQ,CAAC,aAAQ;IAAC;;YACpC,gBAAQ,aAAY,UAAU,CAAC,aAAQ;IAAC;;wEAEzB,QAAa;IAAvB,eAAQ;IAAO,aAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;YCvF/B,mBAAW,QAAQ,CAAC,aAAQ;IAAC;;YAC3B,mBAAW,UAAU,CAAC,aAAQ;IAAC;;YAEnB,KAAI,uCAAiB,CAAC,MAAM,aAAQ;IAAC;cAEzD,KAAsB;AAC9B,kDAAI,KAAK,OACJ,uCAAW,KAAK,aAA+B,KAAE,OAAO;AAC3D,mBAAM,IAAI,sBAAa,CAAC,oDACpB;;AAGN,mBAAa,GAAG,KAAK,SAAS;IAChC;;AAOE,UAAI,cAAS,IAAI,MAAM,gBAAS,GAAG;AACnC,YAAO,iBAAS;IAClB;;YAK6B,mBAAW,SAAS,CAAC,aAAQ;IAAC;;YAGjC,cAAQ,UAAU;IAAE;iBAsBpB,MAAa;AACnC,8DADsB,MAAa;IACnB;kBAQO,IAAa;AAAI,oEAAjB,IAAa;IAAuB;aAI7C,UAA2B,EAAG,QAAyB;+BAAR;AAC/D,UAAI,cAAc,QAAQ,IAAI,OAAO,aAAQ,GAAG,QAAQ,SAAS;AACjE,YAAO,mBAAW,KAAK,CAAC,UAAU,SAAS,EAAE,WAAW;IAC1D;YAEa,OAAe;AAC1B,qBAAK,aAAa,CAAC,OAAO,IAAG;AAC3B,wBAAS,GAAG;AACZ,cAAO;;AAGT,sBAAS,GAAG,kBAAW,KAAK,CAAC,aAAQ,EAAE,cAAS,IAAI;AACpD,YAAO;IACT;UAEW,OAAc;UAAS;UAAW;UAAc;AACzD,kCAAiB,CAAC,WAAM,EAAE,KAAK,EAAE,QAAQ,EAAE,MAAM;AAEjD,UAAI,KAAK,IAAI,QAAQ,QAAQ,IAAI,QAAQ,MAAM,IAAI,MAAM,KAAK,GAAG,cAAS;AAC1E,UAAI,QAAQ,IAAI,MAAM;AACpB,gBAAQ,GAAG,KAAK,IAAI,OAAO,aAAa,GAAG,KAAK,MAAM;;AAExD,UAAI,MAAM,IAAI,MAAM,MAAM,GAAG,KAAK,IAAI,OAAO,IAAc,aAAV,KAAK,IAAI,iBAAG,KAAK,MAAM;AAExE,UAAI,OAAO,kBAAW,KAAK,CAAC,QAAQ,EAAW,aAAT,QAAQ,iBAAG,MAAM;AACvD,iBAAM,IAAI,yCAAsB,CAAC,OAAO,EAAE,IAAI,EAAE,WAAM;IACxD;;gDAtDY,MAAa;QAAG;QAAe;IAblC,gBAAS;IAcZ,kBAAW,GAAG,IAAI,+BAAqB,CAAC,MAAM,QAAO,SAAS;AAC9D,2DAAM,MAAM,cAAa,SAAS,YAAY,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;YA6D7C,iBAAQ,cAAY,QAAQ,CAAC,aAAQ;IAAC;;YACpC,iBAAQ,cAAY,UAAU,CAAC,aAAQ;IAAC;;+DAEzB,QAAa;IAAvB,gBAAQ;IAAO,aAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;MC/G3C,sCAAc;YAAG,AAAI,gBAAM,CAAC;;;;;;;;;;;YAIhB,aAAK;;;YAGH,eAAO;;;YAIrB,KAAI,kDAAsB,CAAC,MAAM,aAAQ,EAAE,SAAI,EAAE,WAAM;IAAC;;YAEnC,AAAoB,cAAZ,CAAC,CAAC,OAAM,EAAG,IAAI,aAAQ,OAAM,EAAG;;cAEvD,KAAsB;AAC9B,6DAAI,KAAK,OACJ,kDAAW,KAAK,aAAoC,KAAE,OAAO;AAChE,mBAAM,IAAI,sBAAa,CAAC,oDACpB;;AAGN,oBAAc,GAAG,KAAK,SAAS;AAC/B,kBAAK,GAAG,KAAK,KAAK;AAClB,oBAAO,GAAG,KAAK,OAAO;IACxB;iBAEa,WAAe;AAC1B,UAAI,cAAc,aAAQ;AAC1B,oBAAc,GAAG,WAAW;AAE5B,UAAgB,aAAZ,WAAW,iBAAG,WAAW,GAAE;AAC7B,YAAI,WAAW,kBAAW,CAAC,WAAM,YAAU,CAAC,WAAW,EAAE,WAAW;AACpE,oBAAK,GA9CX,aA8CM,YAAK,iBAAI,QAAQ,SAAO;AACxB,sBAAI,QAAQ,UAAQ,GAAE;AACpB,wBAAO,GAhDf,aAgDQ,cAAO,KAAgB,aAAZ,WAAW,iBAAG,WAAW;eAC/B;AACL,wBAAO,GAAe,aAAZ,WAAW,iBAAG,QAAQ,OAAK,IAAI;;aAEtC;AACL,YAAI,WAAW,kBAAW,CAAC,WAAM,YAAU,CAAC,WAAW,EAAE,WAAW;AACpE,sBAAI,mBAAY,GAAE,QAAQ,aAAW;AAErC,oBAAK,GAxDX,aAwDM,YAAK,iBAAI,QAAQ,SAAO;AACxB,sBAAI,QAAQ,UAAQ,GAAE;AACpB,wBAAO,GA1Df,aA0DQ,cAAO,KAAgB,aAAZ,WAAW,iBAAG,WAAW;eAC/B;AACL,wBAAO,GACS,AAAkD,aAA9D,WAAW,IAAG,WAAM,cAAY,CAAC,sCAAc,EAAE,WAAW,IAAI;;;IAG1E;;;;aAKc,SAAa;AACzB,qBAAK,cAAc,CAAC,SAAS,IAAG,MAAO;AACvC,iCAAoB,CAAC,SAAS;AAC9B,YAAO;IACT;;AAGE,UAAI,YAAY,cAAc;AAC9B,iCAAoB,CAAC,SAAS;AAC9B,YAAO,UAAS;IAClB;4BAG0B,SAAa;AACrC,UAAI,SAAS,KAAI,EAAG,IAAK,SAAS,KAAI,EAAG,IAAI,aAAQ,OAAM,EAAG,EAAG;AAC/D,oBAAK,GApFX,aAoFM,YAAK,IAAI;AACT,sBAAO,GAAG;aACL;AACL,sBAAO,GAvFb,aAuFM,cAAO,IAAI;;IAEf;SAEU,OAAe;AACvB,qBAAK,UAAU,CAAC,OAAO,IAAG,MAAO;AAEjC,UAAI,WAAW,kBAAW,CAAC,cAAS,MAAC;AACrC,kBAAK,GA/FT,aA+FI,YAAK,iBAAI,QAAQ,SAAO;AACxB,oBAAI,QAAQ,UAAQ,GAAE;AACpB,sBAAO,GAjGb,aAiGM,cAAO,IAAI,cAAS,MAAC,SAAS;aACzB;AACL,sBAAO,GAAG,AAAoB,cAAX,MAAC,SAAS,gBAAG,QAAQ,OAAK,IAAI;;AAGnD,YAAO;IACT;mBAIwB,IAAW;AACjC,UAAI,WAAW,sCAAc,WAAW,CAAC,IAAI,UAAQ;AACrD,oBAAI,mBAAY,GAAE,QAAQ,aAAW;AACrC,YAAO,SAAQ;IACjB;;2DA7CiB,MAAa;QAAG;QAAe;IAhD5C,YAAK,GAAG;IAGR,cAAO,GAAG;AA8CR,sEAAM,MAAM,cAAa,SAAS,YAAY,QAAQ;EAAC;;;;;;;;;;;;;;;;;0EAsDvB,QAAa,EAAE,IAAS,EAAE,MAAW;IAA/C,gBAAQ;IAAO,aAAQ,GAAR,QAAQ;IAAO,SAAI,GAAJ,IAAI;IAAO,WAAM,GAAN,MAAM;EAAC","file":"string_scanner.ddc.js"}');
  // Exports:
  return {
    string_scanner: string_scanner,
    src__exception: src__exception,
    src__utils: src__utils,
    src__string_scanner: src__string_scanner,
    src__line_scanner: src__line_scanner,
    src__relative_span_scanner: src__relative_span_scanner,
    src__span_scanner: src__span_scanner,
    src__eager_span_scanner: src__eager_span_scanner
  };
});

//# sourceMappingURL=string_scanner.ddc.js.map
