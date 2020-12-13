import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../../../../entity/course';

@Component({
    selector: 'app-course-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit, OnChanges {

    @Input()
    course: Course = new Course();

    showCourse: Course = new Course();

    constructor() {
    }

    ngOnInit(): void {
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
        console.log('show course', this.showCourse);

    }


}
