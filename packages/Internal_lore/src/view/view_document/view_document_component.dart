import 'package:angular/angular.dart';
import 'dart:async';

import 'package:Internal_lore/src/model/model.dart';
import 'package:Internal_lore/src/routes.dart';
import 'package:Internal_lore/src/view/view_document/view_snippet/view_snippet_component.dart';
import 'package:Internal_lore/src/view/view_document/time_pipe.dart';

import 'package:angular_components/auto_dismiss/auto_dismiss.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';

@Component(
    selector: 'view-document',
    templateUrl: 'view_document_component.html',
    directives: [
      AutoDismissDirective,
      MaterialButtonComponent,
      MaterialDialogComponent,
      ModalComponent,
      coreDirectives,
      MaterialIconComponent,
      formDirectives,
      ViewSnippetComponent
    ],
    pipes: [
      TimePipe
    ],
    providers: [
      overlayBindings
    ],
    styles: [
      """
      .scrollable{
        top:8vh;
        position:fixed;
        height: 82vh;
        overflow: auto;
      }
      .header-bar{
        height: 7.5vh;
        width: 98vw;
        position: fixed;
      }
      .title{
        float: left;
        overflow: auto;
      }
      .lock-duration{
        float: right; 
      }
      .toolbar{
        bottom:0;
        margin-left: 20%;
        margin-right: 20%;
        position: fixed;
        
      }
      .toolbar div{
        display: contents;
      }
    """
    ])
class ViewDocumentComponent implements OnActivate {
  Model model;
  Router _router;
  Document document;
  Snippet selected;
  int maxId, idToRemove;
  Timer timer;
  Duration lockDuration;
  bool editMode = false,
      showMetadata = true,
      showSaveChangesDialog = false,
      showRemoveSnippetDialog = false,
      showCannotEditDialog1 = false,
      showCannotEditDialog2 = false,
      showDeleteDocumentDialog = false,
      showRenameUnsuccessfulDialog = false,
      editingName = false;

  ViewDocumentComponent(this.model, this._router);

  bool get showName {
    return !editMode || (!editingName && editMode);
  }

  void editName() {
    if (editMode) {
      editingName = true;
      selected = null;
    }
  }

  void deselect() {
    editingName = false;
  }

  void selectSnippet(Snippet snip) {
    selected = snip;
    editingName = false;
  }

  @override
  void onActivate(_, RouterState current) async {
    final id = int.parse(current.parameters['id']);
    document = await model.getDocument(id);
  }

  void lock(Map<String, dynamic> data) {
    document = Document(document, model);
    maxId = document.MaxSnippetId() + 1;
    editMode = true;
    lockDuration = Duration(minutes: data["time"]);
//      lockDuration = Duration(seconds: 1);
    timer = Timer.periodic(Duration(seconds: 1), (Timer t) {
      lockDuration -= Duration(seconds: 1);
      if (lockDuration.isNegative) t.cancel();
    });
  }

  void startEdit() async {
    Map<String, dynamic> data = await model.LockDocument(document.id);
    if (data["success"]) {
      lock(data);
    } else {
      showCannotEditDialog1 = true;
    }
  }

  void addNewSnippet() {
    document.snippets.add(Snippet.FromMap({
      "id": maxId++,
      "document_id": document.id,
      "content": "This is new snippet. Click to edit.",
      "document_order": document.snippets.length + 1
    }, document));
  }

  void removeSnippetDialog(int id) {
    idToRemove = id;
    showRemoveSnippetDialog = true;
  }

  void removeSnippet() {
    document.DeleteSnippetById(idToRemove);
    showRemoveSnippetDialog = false;
  }

  void stopEdit() async {
    showSaveChangesDialog = true;
  }

  void saveChanges() async {
    showRenameUnsuccessfulDialog =
        !(await model.SaveDocument(document.id, document));
  }

  void saveChangesAndStopEdit() async {
    showSaveChangesDialog = false;
    showRenameUnsuccessfulDialog =
        !(await model.SaveDocument(document.id, document));
    if (showRenameUnsuccessfulDialog) {
      model.UnlockDocument(document.id);
      document = await model.getDocument(document.id);
      editMode = false;
    }
  }

  void trashChangesAndStopEdit() async {
    model.UnlockDocument(document.id);
    document = await model.getDocument(document.id);
    editMode = false;
    showSaveChangesDialog = false;
  }

  void removeDocument() {
    model.RemoveDocument(document.id);
    _router.navigate(RoutePaths.DOCUMENT_LIST.toUrl());
  }

  void extendLock() async {
    Map<String, dynamic> data = await model.LockDocument(document.id);
    if (data["success"]) {
      if (data["fresh"]) {
        showCannotEditDialog2=true;
      } else {
        timer.cancel();
        lock(data);
      }
    } else {
      showCannotEditDialog1 = true;
    }
  }

  void back() {
    if (editMode) {
      stopEdit();
    } else {
      _router.navigate(RoutePaths.DOCUMENT_LIST.toUrl());
    }
  }
}
