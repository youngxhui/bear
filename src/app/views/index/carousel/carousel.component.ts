import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../../service/index.service';
import Banner from '../../../entity/banner';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  array = [1, 2, 3, 4];

  banners: Array<Banner> = [];

  constructor(private indexService: IndexService) {
  }

  ngOnInit(): void {
    this.indexService.getBanner().subscribe(
      result => {
        this.banners = result.data;
      }
    );
  }

}
