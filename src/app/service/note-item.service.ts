import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../entity/course';
import {Observable} from 'rxjs';
import Result from '../entity/result';
import {Note} from '../entity/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteItemService {

  constructor(private httpClient: HttpClient) {
  }

  saveNote(note: Note): Observable<Result<any>> {
    return this.httpClient.post<Result<any>>('/note', note);
  }

  // getDetail(noteId: number): Observable<Result<Note>> {
  //   // return this.httpClient.get<Result<Note>>()
  // }
}
