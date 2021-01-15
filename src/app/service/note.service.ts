import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Result from '../entity/result';
import {Note} from '../entity/Note';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) {
  }

  getByCourseId(courseId: number, page: number): Observable<Result<Array<Note>>> {
    return this.httpClient.get<Result<Array<Note>>>(`/note/list/${courseId}?page=${page}`);
  }
}
