import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {

  size: NzButtonSize = 'large';
  constructor() { }

  ngOnInit(): void {
  }

}
