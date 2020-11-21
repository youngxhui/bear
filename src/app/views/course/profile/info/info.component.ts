import {Component, OnInit} from '@angular/core';
import {Course} from '../../../../entity/course';

@Component({
  selector: 'app-course-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {

  course: Course = new Course();


  constructor() {
  }

  ngOnInit(): void {
    this.course.title = '123';
    this.course.rate = 2;
  }

}
