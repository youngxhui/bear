import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../entity/course';
import {SubTip} from '../../../entity/subTip';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.less']
})
export class LearnComponent implements OnInit {
  courseList: Array<Course> = [];

  pageIndex = 1;
  total = 10;
  subTips: SubTip[] = new Array<SubTip>();
  selectSort = 'hot';
  selectSub = 0;
  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const learnId = Number(this.route.snapshot.paramMap.get('id'));
    this.getLearnAndSub(learnId);
  }
  /**
   * 带learnid时候的请求
   */
  getLearnAndSub(learnId: number): void {
    this.courseService.getTipAndCourse(learnId).subscribe(({data}) => {
      console.log('data is ', data);
      data.resultList.map(item => {
        this.courseList.concat(item.courseList);
        this.subTips.push(item.subTip);
      });
    });
  }

  getCourseBySubTipId(): void {
    this.courseService.getCourseBySubTip(this.selectSub, this.pageIndex - 1).subscribe(({data}) => {
      // this.pageSize = data.totalElements;
      this.total = data.totalElements;
      this.courseList = data.content;
      console.log('course list', this.courseList);
    });
  }

  changeSubTip(sub: number): void {
    this.selectSub = sub;
    this.getCourseBySubTipId();
  }
}
