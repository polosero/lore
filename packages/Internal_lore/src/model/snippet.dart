part of model;

class Snippet {
  int snippetId, documentId, order;
  Document document;
  String _content;
  String html;

  String get content => _content;

  set content(String val) {
    _content = val;
    html = markdownToHtml(_content);
  }

  Snippet.FromMap(Map<String, dynamic> map, this.document) {
    snippetId = map["id"];
    documentId = map["document_id"];
    content = map["content"];
    order = map["document_order"];
  }

  Snippet(Snippet snip, this.document) {
    snippetId = snip.snippetId;
    documentId = snip.snippetId;
    content = snip.content;
    order = snip.order;
  }

  void UpdateSnippet(Map<String, dynamic> map) {
    content = map["content"];
    order = map["document_order"];
  }

  Map<String, dynamic> toMap() {
    Map<String, dynamic> res = Map<String, dynamic>();
    res["order"] = order.toString();
    res["content"] = _content;
    //todo:add restrictions
    return res;
  }

  static Map<String, dynamic> Difference(Snippet oldS, Snippet newS) {
    Map<String, dynamic> dataO = oldS.toMap(),
        dataN = newS.toMap(),
        res = Map<String, dynamic>();
    if (dataO["order"] != dataN["order"]) {
      res["order"] = dataN["order"];
    }
    if (dataO["content"] != dataN["content"]) {
      res["content"] = dataN["content"];
    }
    //todo: restrictions
    return res.isEmpty ? null : res;
  }
}
