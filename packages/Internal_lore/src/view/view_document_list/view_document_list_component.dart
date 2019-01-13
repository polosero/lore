import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_components/auto_dismiss/auto_dismiss.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';

import '../../model/model.dart';
import '../../routes.dart';

@Component(
    selector: 'view-document-list',
    templateUrl: 'view_document_list_component.html',
    directives: [
      AutoDismissDirective,
      MaterialButtonComponent,
      MaterialDialogComponent,
      ModalComponent,
      coreDirectives,
      formDirectives,
      MaterialIconComponent,
    ],
    providers: [
      overlayBindings
    ],
    styles: [
      """
  .scrollable{
  height: 90vh;
  overflow: auto;
  }
  .toolbar{
  bottom:0;
  margin-left: 25%;
  margin-right: auto;
  position: fixed;
  }
  .list{
  margin-left: 10%;
  font-size: 20px;
  font-weight: bold;
  list-style-type: none;
  margin: 20;
  padding: 10;}
  
  """
    ])
class ViewDocumentListComponent implements OnActivate {
  @ViewChild("name")
  InputElement newDocumentName;

  bool showDialog = false;
  bool showError = false;
  Model model;
  Router _router;

  ViewDocumentListComponent(this.model, this._router);

  void viewDocument(int documentId) => _router.navigate(
      RoutePaths.DOCUMENT_VIEW.toUrl(parameters: {"id": "$documentId"}));

  void close() {
    newDocumentName.value = "";
    showDialog = false;
    showError = false;
  }

  void onSubmit(String data) async {
    if (await model.NewDocument(data)) {
      close();
    } else {
      showError = true;
    }
  }

  void reload() {
    model.UpdateDocuments();
  }

  @override
  void onActivate(RouterState, RouterState current) {
    model.UpdateDocuments();
  }
}
