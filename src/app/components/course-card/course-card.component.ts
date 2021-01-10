import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../entity/course';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course = new Course();

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

}
