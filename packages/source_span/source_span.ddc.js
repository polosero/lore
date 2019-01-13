define(['dart_sdk', 'packages/path/path'], function(dart_sdk, path) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path$ = path.path;
  const _root = Object.create(null);
  const source_span = Object.create(_root);
  const src__colors = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__span_with_context = Object.create(_root);
  const src__span_mixin = Object.create(_root);
  const src__span = Object.create(_root);
  const src__location = Object.create(_root);
  const src__location_mixin = Object.create(_root);
  const src__file = Object.create(_root);
  const src__span_exception = Object.create(_root);
  const $compareTo = dartx.compareTo;
  const $indexOf = dartx.indexOf;
  const $lastIndexOf = dartx.lastIndexOf;
  const $contains = dartx.contains;
  const $substring = dartx.substring;
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $split = dartx.split;
  const $endsWith = dartx.endsWith;
  const $codeUnitAt = dartx.codeUnitAt;
  const $times = dartx['*'];
  const $runtimeType = dartx.runtimeType;
  const $abs = dartx.abs;
  const $runes = dartx.runes;
  const $codeUnits = dartx.codeUnits;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $last = dartx.last;
  const $truncate = dartx.truncate;
  const $sublist = dartx.sublist;
  const $toString = dartx.toString;
  let ComparableOfSourceSpan = () => (ComparableOfSourceSpan = dart.constFn(core.Comparable$(src__span.SourceSpan)))();
  let ComparableOfSourceLocation = () => (ComparableOfSourceLocation = dart.constFn(core.Comparable$(src__location.SourceLocation)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  dart.defineLazy(src__colors, {
    /*src__colors.RED*/get RED() {
      return "[31m";
    },
    /*src__colors.YELLOW*/get YELLOW() {
      return "[33m";
    },
    /*src__colors.NONE*/get NONE() {
      return "[0m";
    }
  });
  src__utils.min = function(obj1, obj2) {
    return dart.notNull(obj1[$compareTo](obj2)) > 0 ? obj2 : obj1;
  };
  src__utils.max = function(obj1, obj2) {
    return dart.notNull(obj1[$compareTo](obj2)) > 0 ? obj1 : obj2;
  };
  src__utils.findLineStart = function(context, text, column) {
    let isEmpty = text === "";
    let index = context[$indexOf](text);
    while (index !== -1) {
      let lineStart = context[$lastIndexOf]("\n", index) + 1;
      let textColumn = index - lineStart;
      if (column === textColumn || isEmpty && column === textColumn + 1) {
        return lineStart;
      }
      index = context[$indexOf](text, index + 1);
    }
    return null;
  };
  const _context = Symbol('_context');
  src__span_mixin.SourceSpanMixin = class SourceSpanMixin extends core.Object {
    get sourceUrl() {
      return this.start.sourceUrl;
    }
    get length() {
      return dart.notNull(this.end.offset) - dart.notNull(this.start.offset);
    }
    compareTo(other) {
      src__span.SourceSpan._check(other);
      let result = this.start.compareTo(other.start);
      return result === 0 ? this.end.compareTo(other.end) : result;
    }
    union(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + (" \"" + dart.str(other.sourceUrl) + "\" don't match.")));
      }
      let start = src__utils.min(this.start, other.start);
      let end = src__utils.max(this.end, other.end);
      let beginSpan = dart.equals(start, this.start) ? this : other;
      let endSpan = dart.equals(end, this.end) ? this : other;
      if (dart.notNull(beginSpan.end.compareTo(endSpan.start)) < 0) {
        dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
      }
      let text = dart.notNull(beginSpan.text) + endSpan.text[$substring](beginSpan.end.distance(endSpan.start));
      return src__span.SourceSpan.new(src__location.SourceLocation._check(start), src__location.SourceLocation._check(end), text);
    }
    message(message, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let buffer = new core.StringBuffer.new();
      buffer.write("line " + dart.str(dart.notNull(this.start.line) + 1) + ", column " + dart.str(dart.notNull(this.start.column) + 1));
      if (this.sourceUrl != null) buffer.write(" of " + dart.str(path$.prettyUri(this.sourceUrl)));
      buffer.write(": " + dart.str(message));
      let highlight = this.highlight({color: color});
      if (!highlight[$isEmpty]) {
        buffer.writeln();
        buffer.write(highlight);
      }
      return buffer.toString();
    }
    highlight(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (dart.equals(color, true)) color = "[31m";
      if (dart.equals(color, false)) color = null;
      let column = this.start.column;
      let buffer = new core.StringBuffer.new();
      let textLine = null;
      if (src__span_with_context.SourceSpanWithContext.is(this)) {
        let context = src__span_with_context.SourceSpanWithContext.as(this).context;
        let lineStart = src__utils.findLineStart(context, this.text, column);
        if (lineStart != null && dart.notNull(lineStart) > 0) {
          buffer.write(context[$substring](0, lineStart));
          context = context[$substring](lineStart);
        }
        let endIndex = context[$indexOf]("\n");
        textLine = endIndex === -1 ? context : context[$substring](0, endIndex + 1);
        column = math.min(core.int, column, textLine.length);
      } else if (this.length === 0) {
        return "";
      } else {
        textLine = this.text[$split]("\n")[$first];
        column = 0;
      }
      let toColumn = math.min(core.int, dart.notNull(column) + dart.notNull(this.end.offset) - dart.notNull(this.start.offset), textLine.length);
      if (color != null) {
        buffer.write(textLine[$substring](0, column));
        buffer.write(color);
        buffer.write(textLine[$substring](column, toColumn));
        buffer.write("[0m");
        buffer.write(textLine[$substring](toColumn));
      } else {
        buffer.write(textLine);
      }
      if (!textLine[$endsWith]("\n")) buffer.write("\n");
      for (let i = 0; i < dart.notNull(column); i++) {
        if (textLine[$codeUnitAt](i) === 9) {
          buffer.writeCharCode(9);
        } else {
          buffer.writeCharCode(32);
        }
      }
      if (color != null) buffer.write(color);
      buffer.write("^"[$times](math.max(core.int, toColumn - dart.notNull(column), 1)));
      if (color != null) buffer.write("[0m");
      return buffer.toString();
    }
    _equals(other) {
      if (other == null) return false;
      return src__span.SourceSpan.is(other) && dart.equals(this.start, other.start) && dart.equals(this.end, other.end);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.start)) + 31 * dart.notNull(dart.hashCode(this.end));
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ": from " + dart.str(this.start) + " to " + dart.str(this.end) + " \"" + dart.str(this.text) + "\">";
    }
  };
  (src__span_mixin.SourceSpanMixin.new = function() {
  }).prototype = src__span_mixin.SourceSpanMixin.prototype;
  dart.addTypeTests(src__span_mixin.SourceSpanMixin);
  src__span_mixin.SourceSpanMixin[dart.implements] = () => [src__span.SourceSpan];
  dart.setMethodSignature(src__span_mixin.SourceSpanMixin, () => ({
    __proto__: dart.getMethods(src__span_mixin.SourceSpanMixin.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    union: dart.fnType(src__span.SourceSpan, [src__span.SourceSpan]),
    message: dart.fnType(core.String, [core.String], {color: dart.dynamic}),
    highlight: dart.fnType(core.String, [], {color: dart.dynamic})
  }));
  dart.setGetterSignature(src__span_mixin.SourceSpanMixin, () => ({
    __proto__: dart.getGetters(src__span_mixin.SourceSpanMixin.__proto__),
    sourceUrl: core.Uri,
    length: core.int
  }));
  dart.defineExtensionMethods(src__span_mixin.SourceSpanMixin, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__span_mixin.SourceSpanMixin, ['hashCode']);
  src__span.SourceSpanBase = class SourceSpanBase extends src__span_mixin.SourceSpanMixin {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (src__span.SourceSpanBase.new = function(start, end, text) {
    this[start$] = start;
    this[end$] = end;
    this[text$] = text;
    if (!dart.equals(this.end.sourceUrl, this.start.sourceUrl)) {
      dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.start.sourceUrl) + "\" and " + (" \"" + dart.str(this.end.sourceUrl) + "\" don't match.")));
    } else if (dart.notNull(this.end.offset) < dart.notNull(this.start.offset)) {
      dart.throw(new core.ArgumentError.new("End " + dart.str(this.end) + " must come after start " + dart.str(this.start) + "."));
    } else if (this.text.length !== this.start.distance(this.end)) {
      dart.throw(new core.ArgumentError.new("Text \"" + dart.str(this.text) + "\" must be " + dart.str(this.start.distance(this.end)) + " " + "characters long."));
    }
  }).prototype = src__span.SourceSpanBase.prototype;
  dart.addTypeTests(src__span.SourceSpanBase);
  const start$ = Symbol("SourceSpanBase.start");
  const end$ = Symbol("SourceSpanBase.end");
  const text$ = Symbol("SourceSpanBase.text");
  dart.setFieldSignature(src__span.SourceSpanBase, () => ({
    __proto__: dart.getFields(src__span.SourceSpanBase.__proto__),
    start: dart.finalFieldType(src__location.SourceLocation),
    end: dart.finalFieldType(src__location.SourceLocation),
    text: dart.finalFieldType(core.String)
  }));
  src__span_with_context.SourceSpanWithContext = class SourceSpanWithContext extends src__span.SourceSpanBase {
    get context() {
      return this[_context];
    }
  };
  (src__span_with_context.SourceSpanWithContext.new = function(start, end, text, context) {
    this[_context] = context;
    src__span_with_context.SourceSpanWithContext.__proto__.new.call(this, start, end, text);
    if (!this.context[$contains](text)) {
      dart.throw(new core.ArgumentError.new("The context line \"" + dart.str(this.context) + "\" must contain \"" + dart.str(text) + "\"."));
    }
    if (src__utils.findLineStart(this.context, text, start.column) == null) {
      dart.throw(new core.ArgumentError.new("The span text \"" + dart.str(text) + "\" must start at " + ("column " + dart.str(dart.notNull(start.column) + 1) + " in a line within \"" + dart.str(this.context) + "\".")));
    }
  }).prototype = src__span_with_context.SourceSpanWithContext.prototype;
  dart.addTypeTests(src__span_with_context.SourceSpanWithContext);
  dart.setGetterSignature(src__span_with_context.SourceSpanWithContext, () => ({
    __proto__: dart.getGetters(src__span_with_context.SourceSpanWithContext.__proto__),
    context: core.String
  }));
  dart.setFieldSignature(src__span_with_context.SourceSpanWithContext, () => ({
    __proto__: dart.getFields(src__span_with_context.SourceSpanWithContext.__proto__),
    [_context]: dart.finalFieldType(core.String)
  }));
  src__span.SourceSpan = class SourceSpan extends core.Object {
    static new(start, end, text) {
      return new src__span.SourceSpanBase.new(start, end, text);
    }
  };
  (src__span.SourceSpan[dart.mixinNew] = function() {
  }).prototype = src__span.SourceSpan.prototype;
  dart.addTypeTests(src__span.SourceSpan);
  src__span.SourceSpan[dart.implements] = () => [ComparableOfSourceSpan()];
  src__location.SourceLocation = class SourceLocation extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
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
    get toolString() {
      let source = this.sourceUrl == null ? "unknown source" : this.sourceUrl;
      return dart.str(source) + ":" + dart.str(dart.notNull(this.line) + 1) + ":" + dart.str(dart.notNull(this.column) + 1);
    }
    distance(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + ("\"" + dart.str(other.sourceUrl) + "\" don't match.")));
      }
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$abs]();
    }
    pointSpan() {
      return src__span.SourceSpan.new(this, this, "");
    }
    compareTo(other) {
      src__location.SourceLocation._check(other);
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + ("\"" + dart.str(other.sourceUrl) + "\" don't match.")));
      }
      return dart.notNull(this.offset) - dart.notNull(other.offset);
    }
    _equals(other) {
      if (other == null) return false;
      return src__location.SourceLocation.is(other) && dart.equals(this.sourceUrl, other.sourceUrl) && this.offset == other.offset;
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.sourceUrl)) + dart.notNull(this.offset);
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ": " + dart.str(this.offset) + " " + dart.str(this.toolString) + ">";
    }
  };
  (src__location.SourceLocation.new = function(offset, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let column = opts && 'column' in opts ? opts.column : null;
    this[sourceUrl$] = core.Uri._check(typeof sourceUrl == 'string' ? core.Uri.parse(sourceUrl) : sourceUrl);
    this[offset$] = offset;
    this[line$] = line == null ? 0 : line;
    this[column$] = column == null ? offset : column;
    if (dart.notNull(offset) < 0) {
      dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(offset) + "."));
    } else if (line != null && dart.notNull(line) < 0) {
      dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
    } else if (column != null && dart.notNull(column) < 0) {
      dart.throw(new core.RangeError.new("Column may not be negative, was " + dart.str(column) + "."));
    }
  }).prototype = src__location.SourceLocation.prototype;
  dart.addTypeTests(src__location.SourceLocation);
  const sourceUrl$ = Symbol("SourceLocation.sourceUrl");
  const offset$ = Symbol("SourceLocation.offset");
  const line$ = Symbol("SourceLocation.line");
  const column$ = Symbol("SourceLocation.column");
  src__location.SourceLocation[dart.implements] = () => [ComparableOfSourceLocation()];
  dart.setMethodSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getMethods(src__location.SourceLocation.__proto__),
    distance: dart.fnType(core.int, [src__location.SourceLocation]),
    pointSpan: dart.fnType(src__span.SourceSpan, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getGetters(src__location.SourceLocation.__proto__),
    toolString: core.String
  }));
  dart.setFieldSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getFields(src__location.SourceLocation.__proto__),
    sourceUrl: dart.finalFieldType(core.Uri),
    offset: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__location.SourceLocation, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__location.SourceLocation, ['hashCode']);
  src__location.SourceLocationBase = class SourceLocationBase extends src__location.SourceLocation {};
  (src__location.SourceLocationBase.new = function(offset, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let column = opts && 'column' in opts ? opts.column : null;
    src__location.SourceLocationBase.__proto__.new.call(this, offset, {sourceUrl: sourceUrl, line: line, column: column});
  }).prototype = src__location.SourceLocationBase.prototype;
  dart.addTypeTests(src__location.SourceLocationBase);
  src__location_mixin.SourceLocationMixin = class SourceLocationMixin extends core.Object {
    get toolString() {
      let source = this.sourceUrl == null ? "unknown source" : this.sourceUrl;
      return dart.str(source) + ":" + dart.str(dart.notNull(this.line) + 1) + ":" + dart.str(dart.notNull(this.column) + 1);
    }
    distance(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + ("\"" + dart.str(other.sourceUrl) + "\" don't match.")));
      }
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$abs]();
    }
    pointSpan() {
      return src__span.SourceSpan.new(this, this, "");
    }
    compareTo(other) {
      src__location.SourceLocation._check(other);
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + ("\"" + dart.str(other.sourceUrl) + "\" don't match.")));
      }
      return dart.notNull(this.offset) - dart.notNull(other.offset);
    }
    _equals(other) {
      if (other == null) return false;
      return src__location.SourceLocation.is(other) && dart.equals(this.sourceUrl, other.sourceUrl) && this.offset == other.offset;
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.sourceUrl)) + dart.notNull(this.offset);
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ": " + dart.str(this.offset) + " " + dart.str(this.toolString) + ">";
    }
  };
  (src__location_mixin.SourceLocationMixin.new = function() {
  }).prototype = src__location_mixin.SourceLocationMixin.prototype;
  dart.addTypeTests(src__location_mixin.SourceLocationMixin);
  src__location_mixin.SourceLocationMixin[dart.implements] = () => [src__location.SourceLocation];
  dart.setMethodSignature(src__location_mixin.SourceLocationMixin, () => ({
    __proto__: dart.getMethods(src__location_mixin.SourceLocationMixin.__proto__),
    distance: dart.fnType(core.int, [src__location.SourceLocation]),
    pointSpan: dart.fnType(src__span.SourceSpan, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(src__location_mixin.SourceLocationMixin, () => ({
    __proto__: dart.getGetters(src__location_mixin.SourceLocationMixin.__proto__),
    toolString: core.String
  }));
  dart.defineExtensionMethods(src__location_mixin.SourceLocationMixin, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__location_mixin.SourceLocationMixin, ['hashCode']);
  dart.defineLazy(src__file, {
    /*src__file._LF*/get _LF() {
      return 10;
    },
    /*src__file._CR*/get _CR() {
      return 13;
    }
  });
  const _decodedChars = Symbol('_decodedChars');
  const _lineStarts = Symbol('_lineStarts');
  const _cachedLine = Symbol('_cachedLine');
  const _isNearCachedLine = Symbol('_isNearCachedLine');
  const _binarySearch = Symbol('_binarySearch');
  src__file.SourceFile = class SourceFile extends core.Object {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get length() {
      return this[_decodedChars][$length];
    }
    get lines() {
      return this[_lineStarts][$length];
    }
    span(start, end) {
      if (end === void 0) end = null;
      if (end == null) end = dart.notNull(this.length) - 1;
      return new src__file._FileSpan.new(this, start, end);
    }
    location(offset) {
      return new src__file.FileLocation.__(this, offset);
    }
    getLine(offset) {
      if (dart.notNull(offset) < 0) {
        dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(offset) + "."));
      } else if (dart.notNull(offset) > dart.notNull(this.length)) {
        dart.throw(new core.RangeError.new("Offset " + dart.str(offset) + " must not be greater than the number " + ("of characters in the file, " + dart.str(this.length) + ".")));
      }
      if (dart.notNull(offset) < dart.notNull(this[_lineStarts][$first])) return -1;
      if (dart.notNull(offset) >= dart.notNull(this[_lineStarts][$last])) return dart.notNull(this[_lineStarts][$length]) - 1;
      if (dart.test(this[_isNearCachedLine](offset))) return this[_cachedLine];
      this[_cachedLine] = dart.notNull(this[_binarySearch](offset)) - 1;
      return this[_cachedLine];
    }
    [_isNearCachedLine](offset) {
      if (this[_cachedLine] == null) return false;
      if (dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](this[_cachedLine]))) return false;
      if (dart.notNull(this[_cachedLine]) >= dart.notNull(this[_lineStarts][$length]) - 1 || dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](dart.notNull(this[_cachedLine]) + 1))) {
        return true;
      }
      if (dart.notNull(this[_cachedLine]) >= dart.notNull(this[_lineStarts][$length]) - 2 || dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](dart.notNull(this[_cachedLine]) + 2))) {
        this[_cachedLine] = dart.notNull(this[_cachedLine]) + 1;
        return true;
      }
      return false;
    }
    [_binarySearch](offset) {
      let min = 0;
      let max = dart.notNull(this[_lineStarts][$length]) - 1;
      while (min < max) {
        let half = min + ((max - min) / 2)[$truncate]();
        if (dart.notNull(this[_lineStarts][$_get](half)) > dart.notNull(offset)) {
          max = half;
        } else {
          min = half + 1;
        }
      }
      return max;
    }
    getColumn(offset, opts) {
      let line = opts && 'line' in opts ? opts.line : null;
      if (dart.notNull(offset) < 0) {
        dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(offset) + "."));
      } else if (dart.notNull(offset) > dart.notNull(this.length)) {
        dart.throw(new core.RangeError.new("Offset " + dart.str(offset) + " must be not be greater than the " + ("number of characters in the file, " + dart.str(this.length) + ".")));
      }
      if (line == null) {
        line = this.getLine(offset);
      } else if (dart.notNull(line) < 0) {
        dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
      } else if (dart.notNull(line) >= dart.notNull(this.lines)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " must be less than the number of " + ("lines in the file, " + dart.str(this.lines) + ".")));
      }
      let lineStart = this[_lineStarts][$_get](line);
      if (dart.notNull(lineStart) > dart.notNull(offset)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " comes after offset " + dart.str(offset) + "."));
      }
      return dart.notNull(offset) - dart.notNull(lineStart);
    }
    getOffset(line, column) {
      if (column === void 0) column = null;
      if (column == null) column = 0;
      if (dart.notNull(line) < 0) {
        dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
      } else if (dart.notNull(line) >= dart.notNull(this.lines)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " must be less than the number of " + ("lines in the file, " + dart.str(this.lines) + ".")));
      } else if (dart.notNull(column) < 0) {
        dart.throw(new core.RangeError.new("Column may not be negative, was " + dart.str(column) + "."));
      }
      let result = dart.notNull(this[_lineStarts][$_get](line)) + dart.notNull(column);
      if (result > dart.notNull(this.length) || dart.notNull(line) + 1 < dart.notNull(this.lines) && result >= dart.notNull(this[_lineStarts][$_get](dart.notNull(line) + 1))) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " doesn't have " + dart.str(column) + " columns."));
      }
      return result;
    }
    getText(start, end) {
      if (end === void 0) end = null;
      return core.String.fromCharCodes(this[_decodedChars][$sublist](start, end));
    }
  };
  (src__file.SourceFile.new = function(text, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    src__file.SourceFile.decoded.call(this, text[$runes], {url: url});
  }).prototype = src__file.SourceFile.prototype;
  (src__file.SourceFile.fromString = function(text, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    src__file.SourceFile.decoded.call(this, text[$codeUnits], {url: url});
  }).prototype = src__file.SourceFile.prototype;
  (src__file.SourceFile.decoded = function(decodedChars, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    this[_lineStarts] = JSArrayOfint().of([0]);
    this[_cachedLine] = null;
    this[url$] = core.Uri._check(typeof url == 'string' ? core.Uri.parse(url) : url);
    this[_decodedChars] = typed_data.Uint32List.fromList(decodedChars[$toList]());
    for (let i = 0; i < dart.notNull(this[_decodedChars][$length]); i++) {
      let c = this[_decodedChars][$_get](i);
      if (c === 13) {
        let j = i + 1;
        if (j >= dart.notNull(this[_decodedChars][$length]) || this[_decodedChars][$_get](j) !== 10) c = 10;
      }
      if (c === 10) this[_lineStarts][$add](i + 1);
    }
  }).prototype = src__file.SourceFile.prototype;
  dart.addTypeTests(src__file.SourceFile);
  const url$ = Symbol("SourceFile.url");
  dart.setMethodSignature(src__file.SourceFile, () => ({
    __proto__: dart.getMethods(src__file.SourceFile.__proto__),
    span: dart.fnType(src__file.FileSpan, [core.int], [core.int]),
    location: dart.fnType(src__file.FileLocation, [core.int]),
    getLine: dart.fnType(core.int, [core.int]),
    [_isNearCachedLine]: dart.fnType(core.bool, [core.int]),
    [_binarySearch]: dart.fnType(core.int, [core.int]),
    getColumn: dart.fnType(core.int, [core.int], {line: core.int}),
    getOffset: dart.fnType(core.int, [core.int], [core.int]),
    getText: dart.fnType(core.String, [core.int], [core.int])
  }));
  dart.setGetterSignature(src__file.SourceFile, () => ({
    __proto__: dart.getGetters(src__file.SourceFile.__proto__),
    length: core.int,
    lines: core.int
  }));
  dart.setFieldSignature(src__file.SourceFile, () => ({
    __proto__: dart.getFields(src__file.SourceFile.__proto__),
    url: dart.finalFieldType(core.Uri),
    [_lineStarts]: dart.finalFieldType(ListOfint()),
    [_decodedChars]: dart.finalFieldType(typed_data.Uint32List),
    [_cachedLine]: dart.fieldType(core.int)
  }));
  src__file.FileLocation = class FileLocation extends src__location_mixin.SourceLocationMixin {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get offset() {
      return this[offset$0];
    }
    set offset(value) {
      super.offset = value;
    }
    get sourceUrl() {
      return this.file.url;
    }
    get line() {
      return this.file.getLine(this.offset);
    }
    get column() {
      return this.file.getColumn(this.offset);
    }
    pointSpan() {
      return new src__file._FileSpan.new(this.file, this.offset, this.offset);
    }
  };
  (src__file.FileLocation.__ = function(file, offset) {
    this[file$] = file;
    this[offset$0] = offset;
    if (dart.notNull(this.offset) < 0) {
      dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(this.offset) + "."));
    } else if (dart.notNull(this.offset) > dart.notNull(this.file.length)) {
      dart.throw(new core.RangeError.new("Offset " + dart.str(this.offset) + " must not be greater than the number " + ("of characters in the file, " + dart.str(this.file.length) + ".")));
    }
  }).prototype = src__file.FileLocation.prototype;
  dart.addTypeTests(src__file.FileLocation);
  const file$ = Symbol("FileLocation.file");
  const offset$0 = Symbol("FileLocation.offset");
  src__file.FileLocation[dart.implements] = () => [src__location.SourceLocation];
  dart.setMethodSignature(src__file.FileLocation, () => ({
    __proto__: dart.getMethods(src__file.FileLocation.__proto__),
    pointSpan: dart.fnType(src__file.FileSpan, [])
  }));
  dart.setGetterSignature(src__file.FileLocation, () => ({
    __proto__: dart.getGetters(src__file.FileLocation.__proto__),
    sourceUrl: core.Uri,
    line: core.int,
    column: core.int
  }));
  dart.setFieldSignature(src__file.FileLocation, () => ({
    __proto__: dart.getFields(src__file.FileLocation.__proto__),
    file: dart.finalFieldType(src__file.SourceFile),
    offset: dart.finalFieldType(core.int)
  }));
  src__file.FileSpan = class FileSpan extends core.Object {};
  (src__file.FileSpan.new = function() {
  }).prototype = src__file.FileSpan.prototype;
  dart.addTypeTests(src__file.FileSpan);
  src__file.FileSpan[dart.implements] = () => [src__span_with_context.SourceSpanWithContext];
  const _start = Symbol('_start');
  const _end = Symbol('_end');
  src__file._FileSpan = class _FileSpan extends src__span_mixin.SourceSpanMixin {
    get sourceUrl() {
      return this.file.url;
    }
    get length() {
      return dart.notNull(this[_end]) - dart.notNull(this[_start]);
    }
    get start() {
      return new src__file.FileLocation.__(this.file, this[_start]);
    }
    get end() {
      return new src__file.FileLocation.__(this.file, this[_end]);
    }
    get text() {
      return this.file.getText(this[_start], this[_end]);
    }
    get context() {
      return this.file.getText(this.file.getOffset(this.start.line), this.end.line === dart.notNull(this.file.lines) - 1 ? null : this.file.getOffset(dart.notNull(this.end.line) + 1));
    }
    compareTo(other) {
      src__span.SourceSpan._check(other);
      if (!src__file._FileSpan.is(other)) return super.compareTo(other);
      let otherFile = src__file._FileSpan._check(other);
      let result = this[_start][$compareTo](otherFile[_start]);
      return result === 0 ? this[_end][$compareTo](otherFile[_end]) : result;
    }
    union(other) {
      if (!src__file.FileSpan.is(other)) return super.union(other);
      let span = src__file._FileSpan._check(this.expand(src__file.FileSpan._check(other)));
      if (src__file._FileSpan.is(other)) {
        if (dart.notNull(this[_start]) > dart.notNull(other[_end]) || dart.notNull(other[_start]) > dart.notNull(this[_end])) {
          dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
        }
      } else {
        if (dart.notNull(this[_start]) > dart.notNull(other.end.offset) || dart.notNull(other.start.offset) > dart.notNull(this[_end])) {
          dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
        }
      }
      return span;
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__file.FileSpan.is(other)) return super._equals(other);
      if (!src__file._FileSpan.is(other)) {
        return super._equals(other) && dart.equals(this.sourceUrl, dart.dload(other, 'sourceUrl'));
      }
      return core.identical(this[_start], dart.dload(other, _start)) && core.identical(this[_end], dart.dload(other, _end)) && dart.equals(this.sourceUrl, dart.dload(other, 'sourceUrl'));
    }
    get hashCode() {
      return super.hashCode;
    }
    expand(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + (" \"" + dart.str(other.sourceUrl) + "\" don't match.")));
      }
      if (src__file._FileSpan.is(other)) {
        let start = math.min(core.int, this[_start], other[_start]);
        let end = math.max(core.int, this[_end], other[_end]);
        return new src__file._FileSpan.new(this.file, start, end);
      } else {
        let start = math.min(core.int, this[_start], other.start.offset);
        let end = math.max(core.int, this[_end], other.end.offset);
        return new src__file._FileSpan.new(this.file, start, end);
      }
    }
  };
  (src__file._FileSpan.new = function(file, start, end) {
    this.file = file;
    this[_start] = start;
    this[_end] = end;
    if (dart.notNull(this[_end]) < dart.notNull(this[_start])) {
      dart.throw(new core.ArgumentError.new("End " + dart.str(this[_end]) + " must come after start " + dart.str(this[_start]) + "."));
    } else if (dart.notNull(this[_end]) > dart.notNull(this.file.length)) {
      dart.throw(new core.RangeError.new("End " + dart.str(this[_end]) + " must not be greater than the number " + ("of characters in the file, " + dart.str(this.file.length) + ".")));
    } else if (dart.notNull(this[_start]) < 0) {
      dart.throw(new core.RangeError.new("Start may not be negative, was " + dart.str(this[_start]) + "."));
    }
  }).prototype = src__file._FileSpan.prototype;
  dart.addTypeTests(src__file._FileSpan);
  src__file._FileSpan[dart.implements] = () => [src__file.FileSpan];
  dart.setMethodSignature(src__file._FileSpan, () => ({
    __proto__: dart.getMethods(src__file._FileSpan.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    expand: dart.fnType(src__file.FileSpan, [src__file.FileSpan])
  }));
  dart.setGetterSignature(src__file._FileSpan, () => ({
    __proto__: dart.getGetters(src__file._FileSpan.__proto__),
    start: src__file.FileLocation,
    end: src__file.FileLocation,
    text: core.String,
    context: core.String
  }));
  dart.setFieldSignature(src__file._FileSpan, () => ({
    __proto__: dart.getFields(src__file._FileSpan.__proto__),
    file: dart.finalFieldType(src__file.SourceFile),
    [_start]: dart.finalFieldType(core.int),
    [_end]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__file._FileSpan, ['compareTo', '_equals']);
  dart.defineExtensionAccessors(src__file._FileSpan, ['hashCode']);
  const _message = Symbol('_message');
  const _span = Symbol('_span');
  src__span_exception.SourceSpanException = class SourceSpanException extends core.Object {
    get message() {
      return this[_message];
    }
    get span() {
      return this[_span];
    }
    toString(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (this.span == null) return this.message;
      return "Error on " + dart.notNull(this.span.message(this.message, {color: color}));
    }
  };
  (src__span_exception.SourceSpanException.new = function(message, span) {
    this[_message] = message;
    this[_span] = span;
  }).prototype = src__span_exception.SourceSpanException.prototype;
  dart.addTypeTests(src__span_exception.SourceSpanException);
  src__span_exception.SourceSpanException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getMethods(src__span_exception.SourceSpanException.__proto__),
    toString: dart.fnType(core.String, [], {color: dart.dynamic}),
    [$toString]: dart.fnType(core.String, [], {color: dart.dynamic})
  }));
  dart.setGetterSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getGetters(src__span_exception.SourceSpanException.__proto__),
    message: core.String,
    span: src__span.SourceSpan
  }));
  dart.setFieldSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getFields(src__span_exception.SourceSpanException.__proto__),
    [_message]: dart.finalFieldType(core.String),
    [_span]: dart.finalFieldType(src__span.SourceSpan)
  }));
  dart.defineExtensionMethods(src__span_exception.SourceSpanException, ['toString']);
  const _source = Symbol('_source');
  src__span_exception.SourceSpanFormatException = class SourceSpanFormatException extends src__span_exception.SourceSpanException {
    get source() {
      return this[_source];
    }
    get offset() {
      return this.span == null ? null : this.span.start.offset;
    }
  };
  (src__span_exception.SourceSpanFormatException.new = function(message, span, source) {
    if (source === void 0) source = null;
    this[_source] = source;
    src__span_exception.SourceSpanFormatException.__proto__.new.call(this, message, span);
  }).prototype = src__span_exception.SourceSpanFormatException.prototype;
  dart.addTypeTests(src__span_exception.SourceSpanFormatException);
  src__span_exception.SourceSpanFormatException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(src__span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getGetters(src__span_exception.SourceSpanFormatException.__proto__),
    source: dart.dynamic,
    offset: core.int
  }));
  dart.setFieldSignature(src__span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getFields(src__span_exception.SourceSpanFormatException.__proto__),
    [_source]: dart.finalFieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/source_span/source_span.ddc", {
    "package:source_span/source_span.dart": source_span,
    "package:source_span/src/colors.dart": src__colors,
    "package:source_span/src/utils.dart": src__utils,
    "package:source_span/src/span_with_context.dart": src__span_with_context,
    "package:source_span/src/span_mixin.dart": src__span_mixin,
    "package:source_span/src/span.dart": src__span,
    "package:source_span/src/location.dart": src__location,
    "package:source_span/src/location_mixin.dart": src__location_mixin,
    "package:source_span/src/file.dart": src__file,
    "package:source_span/src/span_exception.dart": src__span_exception
  }, '{"version":3,"sourceRoot":"","sources":["src/colors.dart","src/utils.dart","src/span_mixin.dart","src/span.dart","src/span_with_context.dart","src/location.dart","src/location_mixin.dart","src/file.dart","src/span_exception.dart"],"names":[],"mappings":"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","file":"source_span.ddc.js"}');
  // Exports:
  return {
    source_span: source_span,
    src__colors: src__colors,
    src__utils: src__utils,
    src__span_with_context: src__span_with_context,
    src__span_mixin: src__span_mixin,
    src__span: src__span,
    src__location: src__location,
    src__location_mixin: src__location_mixin,
    src__file: src__file,
    src__span_exception: src__span_exception
  };
});

//# sourceMappingURL=source_span.ddc.js.map
