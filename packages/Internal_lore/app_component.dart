import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'src/model/model.dart';
import 'src/network/gateway_service.dart';
import 'src/network/network_service.dart';
import 'src/routes.dart';

@Component(selector: 'app',
  templateUrl: "app_component.html",
  providers: [
    ClassProvider(Model),
    ClassProvider(NetworkService),
    ClassProvider(Gateway)
  ],
  directives: [
    routerDirectives
  ],
  exports: [
    RoutePaths,
    Routes
  ])
class AppComponent {
  AppComponent();
}
