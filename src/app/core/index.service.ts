import { Injectable } from '@angular/core';
import { ViewsModule } from '../views/views.module';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Result from '../entity/result';
import Banner from '../entity/banner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) {
  }

  getBanner(): Observable<Result<Banner>> {
    console.log('http start ....');
    return this.http.get<Result<Banner>>('/banner');
  }

}
