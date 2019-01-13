import 'dart:async';
import 'dart:convert';
import 'dart:core';
import 'package:http/http.dart';

import 'gateway_service.dart';

class NetworkService {
  final Gateway _gateway;
  NetworkService(this._gateway);

  Future<List<dynamic>> GetAllDocumentsData() async {
    Response res = await _gateway.get({"endPoint": "/documents/"});
    return jsonDecode(res.body);
  }

  Future<bool> PostDocument(String name) async {
    Response res;
    try {
      res = await _gateway.post({
        "endPoint": "/documents/",
        "body": {"name": name}
      });
    } catch (e) {
      print(e);
    }
    return res.statusCode == 200;
  }

  Future<List<dynamic>> GetDocumentSnippetsData(int id) async {
    Response res = await _gateway.get({"endPoint": "/documents/$id"});
    return jsonDecode(res.body);
  }

  Future<Map<String,dynamic>> LockDocument(int id) async {
    Response response;
    Map<String,dynamic> res = Map<String,dynamic>();
    try {
      response = await _gateway.put({"endPoint": "/documents/$id/lock"});
      print(response.body);
      res["success"]=response.statusCode==200;
      if(res["success"]){
        Map<String,dynamic> data = jsonDecode(response.body);
        res["fresh"]= data["fresh"]==1;
        RegExp reg = RegExp(r"(\d+)");
        Iterable<Match> matches = reg.allMatches(data["length"]);
        String longestNumber= "";
        for (Match m in matches) {
          String match = m.group(0);
          if(match.length>longestNumber.length) longestNumber=match;
        }
        res["time"]=int.parse(longestNumber);
      }
    } catch (e) {}
    return res;
  }

  Future<void> UnlockDocument(int id) async {
    Response res;
    try {
      res = await _gateway.delete({"endPoint": "/documents/$id/lock"});
    } catch (e) {
      print(e);
    }
  }

  Future<bool> RenameDocument(String name, int id) async {
    Response res;
    try {
      res = await _gateway.put({
        "endPoint": "/documents/$id",
        "body": {"name": name}
      });
    } catch (e) {
      print(e);
    }
    return res.statusCode==200;
  }

  Future<void> DeleteDocument(int documentId, int snippetId) async {
    Response res;
    try {
      res = await _gateway
          .delete({"endPoint": "/documents/$documentId/$snippetId"});
    } catch (e) {
      print(e);
    }
  }

  Future<void> MakeSnippet(int id, Map<String, dynamic> map) async {
    Response res;
    try {
      res = await _gateway.post({"endPoint": "/documents/$id", "body": map});
    } catch (e) {
      print(e);
    }
  }

  Future<void> UpdateSnippet(
      int documentId, int snippetId, Map<String, dynamic> data) async {
    Response res;
    try {
      res = await _gateway
          .put({"endPoint": "/documents/$documentId/$snippetId", "body": data});
    } catch (e) {
      print(e);
    }
  }

  Future<void> RemoveDocument(int id) async{
    Response res;
    try {
      res = await _gateway.delete({"endPoint": "/documents/$id"});
    } catch (e) {
      print(e);
    }
  }
}
