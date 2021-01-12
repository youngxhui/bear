import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  @Output()
  soonOutput: EventEmitter<string> = new EventEmitter();
  code = '# Hi' +
    '\n' +
    '## Mark' +
    '\n' +
    'Page Content' +
    '\n' +
    'love :heart: **sunshine** ![alt text](https://island-hexo.oss-cn-beijing.aliyuncs.com/new_compose.png "Logo Title Text 1")\n' +
    '\n' +
    '| Tables        | Are           | Cool  |\n' +
    '| ------------- |:-------------:| -----:|\n' +
    '| col 3 is      | right-aligned | $1600 |\n' +
    '| col 2 is      | centered      |   $12 |\n' +
    '| zebra stripes | are neat      |    $1 |';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeCode(): void {
    this.soonOutput.emit(this.code);
  }

}
