import 'dart:async';
import 'package:angular/angular.dart';
import 'package:http/browser_client.dart';
import 'package:http/http.dart';

const AuthToken = OpaqueToken<String>('Authorization');

class Gateway {
  BrowserClient _client;
  final String url = "https://polosero.pythonanywhere.com";
  final String authToken;
  Map<String, String> headers;

  Gateway(this._client,@Inject(AuthToken) this.authToken){
    headers = {"Authorization": this.authToken};
  }

  Future<Response> _request(String method, Map<String, dynamic> data) async {
    Future<Response> res;

    try {
      switch (method) {
        case "GET":
          res = _client.get(url + data["endPoint"], headers: headers);
          break;
        case "POST":
          res = _client.post(url + data["endPoint"],
              body: data["body"], headers: headers);
          break;
        case "PUT":
          res = _client.put(url + data["endPoint"],
              headers: headers, body: data["body"]);
          break;
        case "DELETE":
          res = _client.delete(url + data["endPoint"], headers: headers);
          break;
        default:
          throw UnimplementedError("Invalid method");
      }
    } catch (e) {
      print(e);
      throw e;
    }
    return res;
  }

  Future<Response> get(Map<String, String> data) async {
    return _request("GET", data);
  }

  Future<Response> post(Map<String, dynamic> data) async {
    return _request("POST", data);
  }

  Future<Response> put(Map<String, dynamic> data) async {
    return _request("PUT", data);
  }

  Future<Response> delete(Map<String, String> data) async {
    return _request("DELETE", data);
  }
}
