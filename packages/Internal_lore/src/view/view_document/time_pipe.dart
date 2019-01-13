import 'package:angular/angular.dart';
import 'dart:core';

@Pipe('time')
class TimePipe extends PipeTransform {
  String transform(Duration d) {
    return d.inMinutes.toString() +
        ":" +
        (((d.inSeconds % 60) > 9)
            ? ((d.inSeconds % 60).toString())
            : ("0" + (d.inSeconds % 60).toString()));
  }
}
