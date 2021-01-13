import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Course} from '../../../../entity/course';
import {ShowCourse} from '../../../../entity/ShowCourse';
import {CourseService} from '../../../../service/course.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-course-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit, OnChanges {

  @Input()
  showCourse: ShowCourse = new ShowCourse();

  cataList = [];

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const temp = this.showCourse.catalog.split('】【');
    this.cataList = temp.slice(0, temp.length - 2);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const prop in changes) {
      const changedProp = changes[prop];
      // console.log('current ', changedProp.currentValue);
      if (!changedProp.isFirstChange()) {
        // this.course = changedProp.currentValue;
        this.showCourse = changedProp.currentValue;
      }
    }

  }


}
