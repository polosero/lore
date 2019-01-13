library model;

import 'package:markdown/markdown.dart';

import '../network/network_service.dart';

part 'document.dart';

part 'snippet.dart';

class Model {
  List<Document> documentList;
  NetworkService _networkService;

  Model(this._networkService) {
    documentList = List<Document>();
  }

  Future<void> _GetDocuments() async {
    await _networkService.GetAllDocumentsData().then((list) {
      list.forEach((data) {
        documentList.add(Document.WithoutSnippets(data, this));
      });
    });
    return;
  }

  Future<void> UpdateDocuments() async {
    if (documentList.isEmpty) {
      await _GetDocuments();
    } else {
      await _networkService.GetAllDocumentsData().then((list) {
        for (Document doc in documentList) {
          int index = list.indexWhere((data) => data['id'] == doc.id);
          if (index != -1) {
            doc.UpdateDocument(list.removeAt(index));
          } else {
            documentList.remove(doc);
          }
        }
        list.forEach((data) {
          documentList.add(Document.WithoutSnippets(data, this));
        });
      });
    }
    return;
  }

  Future<bool> NewDocument(String name) async {
    if (await _networkService.PostDocument(name)) {
      UpdateDocuments();
      return true;
    } else {
      return false;
    }
  }

  Future<Document> getDocument(int id) async {
    Document res;
    if (documentList.isEmpty) {
      await UpdateDocuments();
    }
    res = documentList.where((d) => d.id == id).toList().first;
    if(res==null){
      await UpdateDocuments();
      res = documentList.where((d) => d.id == id).toList().first;
    }

    if(res!=null){
      res.UpdateSnippets();
    }
    return res;
  }

  Future<Map<String,dynamic>> LockDocument(int id) async {
    Map<String,dynamic> data = await _networkService.LockDocument(id);
    if (data["success"]) {
      await UpdateDocuments();
    }
    return data;
  }

  Future<void> UnlockDocument(int id) async {
    await _networkService.UnlockDocument(id);
  }

  Future<bool> SaveDocument(int oId, Document document) async {
    Document originalDocument = await getDocument(oId),
        newDocument = Document(document, this);
    bool renamed = true;
    if (originalDocument.name != newDocument.name)
      renamed = await _networkService.RenameDocument(newDocument.name, oId);

    for(Snippet snip1 in originalDocument.snippets){
      int index = newDocument.snippets
          .indexWhere((Snippet snip2) => snip1.snippetId == snip2.snippetId);
      if (index != -1) {
        Map<String, dynamic> data =
        Snippet.Difference(snip1, newDocument.snippets[index]);
        if (data != null) {
          await _networkService.UpdateSnippet(oId, snip1.snippetId, data);
        }
        newDocument.snippets.removeAt(index);
      } else {
        await _networkService.DeleteDocument(oId, snip1.snippetId);
      }
    }

    for(Snippet snip in newDocument.snippets){
      await _networkService.MakeSnippet(oId, snip.toMap());
    }
    return renamed;
  }

  void RemoveDocument(int id)async {
    await _networkService.RemoveDocument(id);
    UpdateDocuments();
  }
}
