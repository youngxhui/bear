import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Result from '../entity/result';
import Page from '../entity/page';
import {NoteShow} from '../entity/NoteShow';
import {Note} from '../entity/Note';
import {UpdateUser} from "../entity/UpdateUser";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  getCommentsByUserId(userId: number, page: number): Observable<Result<Page<Comment>>> {
    return this.httpClient.get<Result<Page<Comment>>>(`/comment/user/${userId}?page=${page}`);
  }

  getNotesByUserId(userId: number, page: number): Observable<Result<Page<NoteShow>>> {
    return this.httpClient.get<Result<Page<NoteShow>>>(`/note/user/${userId}?page=${page}`);
  }

  getByUserId(userId: number, page: number): Observable<Result<Array<NoteShow>>> {
    return this.httpClient.get<Result<Array<NoteShow>>>(`/favorite/${userId}?page=${page}&size=10`);
  }

  updateUser(updateUser: UpdateUser): Observable<Result<Array<any>>> {
    return this.httpClient.put<Result<Array<any>>>('/user', updateUser);
  }
}
