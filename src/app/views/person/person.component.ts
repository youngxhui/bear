import {Component, OnInit} from '@angular/core';
import {NzButtonSize} from 'ng-zorro-antd/button';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {

  size: NzButtonSize = 'large';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}
