part of model;

class Document {
  Model model;
  int id;
  String name;
  bool hasSnippets;
  List<Snippet> snippets;

  Document.WithoutSnippets(Map<String, dynamic> map, this.model) {
    id = map['id'];
    name = map['name'];
    snippets = List<Snippet>();
    hasSnippets = false;
  }

  Document(Document doc, this.model) {
    id = doc.id;
    name = doc.name;
    hasSnippets = doc.hasSnippets;
    snippets = List<Snippet>();
    doc.snippets.forEach((snippet) {
      snippets.add(Snippet(snippet, this));
    });
  }

  Future<void> _GetSnippets() async {
    hasSnippets = true;
    model._networkService.GetDocumentSnippetsData(id).then((list) {
      list.forEach((data) {
        snippets.add(Snippet.FromMap(data, this));
      });
    });
  }

  void NormalizeOrder() {
    int i = 1;
    snippets.forEach((Snippet snip) => snip.order = i++);
  }

  void DeleteSnippetById(int id) {
    snippets.removeWhere((Snippet snip) => snip.snippetId == id);
    NormalizeOrder();
  }

  void Swap(int a, int b) {
    Snippet temporary = snippets[a];
    snippets[a] = snippets[b];
    snippets[b] = temporary;
    NormalizeOrder();
  }

  void UpdateDocument(Map<String, dynamic> map) {
    name = map['name'];
    if (hasSnippets) UpdateSnippets();
  }

  Future<void> UpdateSnippets() async {
    if (hasSnippets) {
      await model._networkService.GetDocumentSnippetsData(id).then((list) {
        for (Snippet snip in snippets) {
          int index = list.indexWhere((data) => data['id'] == snip.snippetId);
          if (index != -1) {
            snip.UpdateSnippet(list.removeAt(index));
          } else {
            snippets.remove(snip);
          }
        }
        list.forEach((data) {
          snippets.add(Snippet.FromMap(data, this));
        });
        SortSnippets();
        NormalizeOrder();
      });
    } else {
      await _GetSnippets();
    }
  }

  void SortSnippets() {
    snippets.sort((Snippet a, Snippet b) => a.order - b.order);
  }

  int MaxSnippetId() {
    int res = 0;
    for (Snippet snip in snippets) {
      if (res < snip.snippetId) res = snip.snippetId;
    }
    return res;
  }
  Map<String,dynamic> toMap(){
    Map<String,dynamic> res;
    res["name"]=this.name;
    List<Map<String,dynamic>> snips =List<Map<String,dynamic>>();
    for(Snippet snip in this.snippets){
      snips.add(snip.toMap());
    }
    res["snippets"]=snips;
    return res;
  }
}
