import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../entity/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  constructor() {
  }

  ngOnInit(): void {
  }

}
