import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../entity/course';
import { CourseService } from '../../../service/course.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ShowCourse} from '../../../entity/ShowCourse';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

    courseId: number;
    showCourse = new ShowCourse();

    constructor(private route: ActivatedRoute, private courseService: CourseService, public sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.courseId = Number(this.route.snapshot.paramMap.get('id'));
        this.getCourseInfo();
    }

    getCourseInfo(): void {
        this.courseService.getCourseById(this.courseId).subscribe(({data}) => {
            this.showCourse = data;
            console.log('course info', this.showCourse);
        });

    }

}
