import 'package:angular/angular.dart';
import 'dart:html';

@Directive(
  selector: '[elastic]',
)
class ElasticDirective {
  @HostListener('input')
  void onInput() {
    _resize();
  }

  //Element has to have autofocus directive so that it resizes on initialization
  @HostListener('focus')
  void onFocus() {
    ;
    _resize();
  }

  final Element _el;

  ElasticDirective(this._el);

  void _resize() {
    _el.style.height = 'auto';
    _el.style.height =
        '${_el.scrollHeight - _el.offsetHeight + _el.clientHeight}px';
  }
}
