import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Result from '../entity/result';
import Page from '../entity/page';
import {NoteShow} from '../entity/NoteShow';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  getCommentsByUserId(userId: number, page: number): Observable<Result<Page<Comment>>> {
    return this.httpClient.get<Result<Page<Comment>>>(`/comment/user/${userId}?page=${page}`);
  }

  getNotesByUserId(userId: number, page: number): Observable<Result<Page<NoteShow>>> {
    return this.httpClient.get<Result<Page<NoteShow>>>(`/note/user/${userId}?page=${page}`);
  }
}
