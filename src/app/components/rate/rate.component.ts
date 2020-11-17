import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.less']
})
export class RateComponent implements OnInit {

  tooltips = ['差中差', '差', '中等', '较好', '完美'];
  @Input()
  value = 3;

  constructor() {
  }

  ngOnInit(): void {
  }

}
