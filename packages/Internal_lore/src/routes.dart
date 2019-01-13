import 'package:angular_router/angular_router.dart';

import 'routes_path.dart';
import 'view/view_document/view_document_component.template.dart'
    as document_template;
import 'view/view_document_list/view_document_list_component.template.dart'
    as document_list_template;

export 'routes_path.dart';

class Routes {
  static final DOCUMENT_LIST = RouteDefinition(
    routePath: RoutePaths.DOCUMENT_LIST,
    component: document_list_template.ViewDocumentListComponentNgFactory,
  );

  static final DOCUMENT_VIEW = RouteDefinition(
    routePath: RoutePaths.DOCUMENT_VIEW,
    component: document_template.ViewDocumentComponentNgFactory,
  );

  static final all = <RouteDefinition>[
    DOCUMENT_LIST,
    DOCUMENT_VIEW,
    RouteDefinition.redirect(
        path: '', redirectTo: RoutePaths.DOCUMENT_LIST.toUrl()),
  ];
}
