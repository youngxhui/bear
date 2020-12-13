import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../entity/course';
import { CourseService } from '../../../service/course.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

    courseId: number;
    course = new Course();

    constructor(private route: ActivatedRoute, private courseService: CourseService) {
    }

    ngOnInit(): void {
        this.courseId = Number(this.route.snapshot.paramMap.get('id'));
        this.getCourseInfo();
    }

    getCourseInfo(): void {
        console.log('course id', this.courseId);
        this.courseService.getCourseById(this.courseId).subscribe(({data}) => {
            this.course = data;
            console.log(this.course);
        });

    }

}
