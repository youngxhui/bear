import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Result from '../entity/result';
import {Observable} from 'rxjs';
import {Tip} from '../entity/tip';
import {SubTip} from '../entity/subTip';
import {Course} from '../entity/course';
import Page from '../entity/page';
import {TipAndSub} from '../entity/tipAndSub';
import {LearnAndSub} from '../entity/learnAndSub';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) {
  }

  getTip(): Observable<Result<Array<Tip>>> {
    return this.httpClient.get<Result<Array<Tip>>>('/tip/all');
  }

  getSubTipByTipId(tipId: number): Observable<Result<Array<SubTip>>> {
    return this.httpClient.get<Result<Array<SubTip>>>(`/subtip/list/enable/${tipId}`);
  }

  getCourseByTip(tipId: number, page: number, size: number): Observable<Result<Page<Course>>> {
    return this.httpClient.get <Result<Page<Course>>>(`/course/tip/${tipId}?page=${page}&size=${size}`);
  }


  getCourseById(courseId: number): Observable<Result<Course>> {
    return this.httpClient.get<Result<Course>>(`/course/${courseId}`);
  }

  getTipsAndSub(): Observable<Result<Array<TipAndSub>>> {
    return this.httpClient.get<Result<Array<TipAndSub>>>('/banner_tips');
  }

  getTipAndCourse(learnId: number): Observable<Result<LearnAndSub>> {
    return this.httpClient.get<Result<LearnAndSub>>(`/learnAndSubTip/${learnId}`);
  }

  saveOne(course: Course): Observable<Result<any>> {
    return this.httpClient.post<Result<any>>('/course', course);
  }
}
