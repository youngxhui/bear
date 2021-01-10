import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../service/course.service';
import {Tip} from '../../../entity/tip';
import {SubTip} from '../../../entity/subTip';
import {Course} from '../../../entity/course';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

  tips: Tip[] = new Array<Tip>();
  subTips: SubTip[] = new Array<SubTip>();
  selectSort = 'hot';
  /**
   * 被选中的 id
   */
  selectTip = 0;
  courseList: Array<Course> = [];

  pageIndex = 1;
  total = 10;
  pageSize = 10;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // img =  img );
    const learnId = Number(this.route.snapshot.paramMap.get('id'));
    if (learnId !== 0) {
      this.getLearnAndSub(learnId);
    } else {
      this.getTip();
    }
  }

  getTip(): void {
    this.courseService.getTip().subscribe(({data}) => {
      this.tips = data;
      this.selectTip = this.tips[0].id;
      this.getSubTip(this.tips[0].id);
      this.getCourseByTipId();
    });
  }

  getSubTip(tipId: number): void {
    this.courseService.getSubTipByTipId(tipId).subscribe(({data}) => {
      this.subTips = data;
    });
  }

  /**
   * 更改 tip 来进行新的 subTip 获取
   * @param tipId tipId
   */
  changeTip(tipId: number): void {
    this.getSubTip(tipId);
    this.selectTip = tipId;
    this.getCourseByTipId();
  }

  getCourseByTipId(): void {
    this.courseService.getCourseByTip(this.selectTip, this.pageIndex - 1, this.pageSize).subscribe(({data}) => {
      // this.pageSize = data.totalElements;
      this.total = data.totalElements;
      this.courseList = data.content;
      console.log('page data ', data);
    });
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
    console.log('here res ', this.courseList, this.subTips);
  }

}
