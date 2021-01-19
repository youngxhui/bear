import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../../service/index.service';
import Banner from '../../../entity/banner';
import {CourseService} from '../../../service/course.service';
import {TipAndSub} from '../../../entity/tipAndSub';
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  array = [1, 2, 3, 4];

  banners: Array<Banner> = [];
  tipAndSubList: Array<TipAndSub> = [];

  constructor(private indexService: IndexService, private courseService: CourseService, public sanitizer: DomSanitizer,
              public router: Router) {
  }

  ngOnInit(): void {
    this.getSubTips();
    this.getBanners();
  }
  getBanners(): void {
    this.indexService.getBanner().subscribe(
      (data) => {
        this.banners = data.data;
        console.log(data);
      }
    );
  }

  getSubTips(): void {
    this.courseService.getTipsAndSub().subscribe(
      (data) => {
        this.tipAndSubList = data.data;
      }
    );
  }

  redirectCourseBySUbId(tipId: number, subId: number): void {
    this.router.navigate([`/course/index/${tipId}/${subId}`]);
  }

}
