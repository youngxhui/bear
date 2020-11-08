import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  todayHotCourseNumber = [1, 2, 3, 4];

  constructor() {
  }

  ngOnInit(): void {
  }

}
