import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { Tip } from '../../../entity/tip';
import result from '../../../entity/result';
import { SubTip } from '../../../entity/subTip';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

  tips: Tip[] = new Array<Tip>();
  subTips: SubTip[] = new Array<SubTip>();
  selectSort = 'hot';
  courseNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getTip().subscribe(({data}) => {
      this.tips = data;
      this.getSubTip(this.tips[0].id);
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
  }


}
