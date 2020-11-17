import {Component, OnInit} from '@angular/core';
import {Course} from '../../../../entity/course';

@Component({
  selector: 'app-course-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {

  course: Course;

  constructor() {
  }

  ngOnInit(): void {
  }

}
