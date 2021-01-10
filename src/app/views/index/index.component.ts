import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/entity/course';
import { IndexService } from '../../service/index.service';
import Level from '../../entity/level';

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

    constructor(indexService: IndexService) {
        this.indexService = indexService;

    }

    ngOnInit(): void {
        this.course.name = '测试';

        const level = new Level();
        level.name = '困难';
        level.id = 2;
        // this.course.levelId = level;
        this.course.cover = 'https://img1.sycdn.imooc.com/szimg/5fbc6dba09d42b9e05400304.jpg';
        this.courseList = [this.course];
        this.indexService.getBanner().subscribe(
            next => {
                console.log(next);
            }
        );
    }

}
