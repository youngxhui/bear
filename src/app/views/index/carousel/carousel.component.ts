import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  array = [1, 2, 3, 4];

  imageUrl = ['https://img.mukewang.com/5f9aa51e0001983718720764.jpg',
    'https://img.mukewang.com/5fa519f10001608218720764.jpg', 'https://img.mukewang.com/5fa5399a00017e0818720764.jpg'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
