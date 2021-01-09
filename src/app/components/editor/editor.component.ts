import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  code = '# Hi' +
    '\n' +
    '## Mark' +
    '\n' +
    'Page Content' +
    '\n' +
    'love :heart: **sunshine** ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n' +
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

}
