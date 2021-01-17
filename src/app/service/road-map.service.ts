import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../entity/Note';
import {Observable} from 'rxjs';
import Result from '../entity/result';

@Injectable({
  providedIn: 'root'
})
export class RoadMapService {

  constructor(private httpClient: HttpClient) { }
// 定时任务的数据生成测试接口
  test(): Observable<Result<any>> {
    return this.httpClient.get<Result<any>>('/test/cat');
  }
}
