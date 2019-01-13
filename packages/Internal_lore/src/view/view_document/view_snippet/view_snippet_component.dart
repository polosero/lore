import 'dart:async';
import 'dart:core';
import 'package:Internal_lore/src/model/model.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_forms/angular_forms.dart';
import 'elastic_directive.dart';

@Component(
    selector: 'snippet-comp',
    templateUrl: 'view_snippet_component.html',
    directives: [
      formDirectives,
      coreDirectives,
      MaterialIconComponent,
      MaterialButtonComponent,
      ElasticDirective,
    ],
    styles: [
      """
.snippet{
width: 98 vw;
height: auto;
overflow: auto;
}
.snippet-content{
  margin-left: 25%;
  width: 50%;
  float: left;
}
.snippet-content textarea{
  resize: none;
  width: 100%;
}
.snippet-buttons{
  position: relative;
  margin-left:  75%;
  width: 40 px;
}
"""
    ])
class ViewSnippetComponent implements OnDestroy {
  @Input()
  Snippet snippet;
  @Input()
  bool showMetadata;
  @Input()
  bool allowEdit;
  @Input()
  bool selected;
  @Input()
  bool first;
  @Input()
  bool last;

  final _selectMe = StreamController<Snippet>();
  final _removeMe = StreamController<int>();

  @Output()
  Stream<Snippet> get selectMe => _selectMe.stream;
  @Output()
  Stream<int> get removeMe => _removeMe.stream;

  bool get viewHTML {
    return !allowEdit || (allowEdit && !selected);
  }

  void swap(bool up) {
    snippet.document
        .Swap(snippet.order - 1, up ? snippet.order - 2 : snippet.order);
  }

  void select() {
    if (allowEdit && !selected) {
      _selectMe.add(snippet);
    }
  }

  void deselect() {
    _selectMe.add(null);
  }

  void destroyMe() {
    _removeMe.add(snippet.snippetId);
  }

  @override
  void ngOnDestroy() {
    _removeMe.close();
    _selectMe.close();
  }
}
