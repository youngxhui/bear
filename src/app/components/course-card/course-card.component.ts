import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../entity/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course = new Course();

  constructor() {
  }

  ngOnInit(): void {
    this.course.title = "vue"
    this.course.cover = "https://img4.sycdn.imooc.com/szimg/5ed0bbc908af61c706000338-360-202.jpg"
  }

}
