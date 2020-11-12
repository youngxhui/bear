import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../service/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  todayHotCourseNumber = [1, 2, 3, 4];

  private indexService: IndexService;

  constructor(indexService: IndexService) {
    this.indexService = indexService;

  }

  ngOnInit(): void {
    this.indexService.getBanner().subscribe(
      next => {
        console.log(next);
      }
    );
  }

}
