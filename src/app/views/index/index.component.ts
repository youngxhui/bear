import {Component, OnInit} from '@angular/core';
import {Course} from 'src/app/entity/course';
import {IndexService} from '../../service/index.service';
import Level from '../../entity/level';
import {CourseService} from "../../service/course.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  // todayHotCourseNumber = [1, 2, 3, 4];
  course = new Course();
  courseList: Array<Course> = [];

  private indexService: IndexService;

  constructor(indexService: IndexService, private courseService: CourseService) {
    this.indexService = indexService;

  }

  ngOnInit(): void {
    this.getCourseByTipId();
  }
  getCourseByTipId(): void {
    this.courseService.getCourseByTip(1, 0, 10).subscribe(({data}) => {
      this.courseList = data.content;
    });
  }
}
