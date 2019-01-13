import 'package:angular/angular.dart';
import 'package:http/browser_client.dart';
import 'package:angular_router/angular_router.dart';
import 'package:Internal_lore/app_component.template.dart' as ng;
import 'main.template.dart' as self;

import 'dart:html';

const OpaqueToken<String> AuthToken = OpaqueToken<String>('Authorization');

final String token = getToken();

@GenerateInjector([
  ClassProvider(BrowserClient),
  routerProvidersHash, // You can use routerProviders in production //routerProvidersHash
  FactoryProvider.forToken(AuthToken, getToken),
])
final InjectorFactory injector = self.injector$Injector;
void main() {
  runApp(ng.AppComponentNgFactory, createInjector: injector);
}
String getToken(){
//  return "Bearer 0000";
//  return "Bearer 1234";
  print(document.cookie);
  for(String cookie in document.cookie.split(";")){
    List<String> KVPair =cookie.split("=");
    if(KVPair[0]=="auth-token"){
      return KVPair[1];
    }
  }
  return null;
}