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
  selectSub = 0;
  courseList: Array<Course> = [];

  pageIndex = 1;
  total = 10;
  pageSize = 10;
  isSub = false;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // img =  img );
    const routeTip = Number(this.route.snapshot.paramMap.get('tip'));
    this.selectSub = Number(this.route.snapshot.paramMap.get('subtip'));
    this.isSub = true;
    if (routeTip !== 0) {
      this.selectTip = routeTip;
      this.courseService.getTip().subscribe((result) => {
        this.tips = result.data;
        this.getSubTip(this.tips[0].id);
      });
      this.getCourseBySubTipId();
    } else {
        this.getTips();
    }
  }

  getTips(): void {
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
    if (!this.isSub){
      this.getSubTip(tipId);
      this.selectTip = tipId;
      this.getCourseByTipId();
    }else{
      this.isSub = false;
    }
  }

  getCourseByTipId(): void {
    console.log('exe');
    this.courseService.getCourseByTip(this.selectTip, this.pageIndex - 1, this.pageSize).subscribe(({data}) => {
      // this.pageSize = data.totalElements;
      this.total = data.totalElements;
      this.courseList = data.content;
    });
  }

  changeSubTip(subTipId: number): void {
    this.selectSub = subTipId;
    this.getCourseBySubTipId();
  }

  getCourseBySubTipId(): void {
    this.courseService.getCourseBySubTip(this.selectSub, this.pageIndex - 1).subscribe(({data}) => {
      // this.pageSize = data.totalElements;
      this.total = data.totalElements;
      this.courseList = data.content;
      console.log('course list', this.courseList);
    });
  }

  changePage(): void {
    if (this.isSub) {
      this.getCourseBySubTipId();
    } else {
      this.getCourseByTipId();
    }
  }

}
