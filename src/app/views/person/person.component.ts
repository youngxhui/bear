import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzButtonSize} from 'ng-zorro-antd/button';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {filter} from 'rxjs/operators';
import {PersonService} from '../../service/person.service';
import {AuthService} from '../../service/auth.service';
import {Comment} from '../../entity/Comment';
import {Note} from '../../entity/Note';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteShow} from '../../entity/NoteShow';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
  entity: NoteShow;
}
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {

  size: NzButtonSize = 'large';
  section = 0;
  userId = 0;
  commentList = [];
  noteList: ItemData[] = [];
  loading = false;
  pageIndex = 1;
  totalElm = 0;
  noteIndex = 1;
  totalNotes = 0;
  // 详细的某个note的信息
  @Output()
  soonOutput: EventEmitter<Note> = new EventEmitter();

  constructor(private personService: PersonService, private authService: AuthService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.userId = this.authService.getUser().id;
    this.getUerComments();
  }

  noteClick(): void {
    this.section = 2;
    this.getUerNotes();
  }

  commentClick(): void {
    this.section = 0;
  }

  collectClick(): void {
    this.section = 1;
  }

  getUerComments(): void {
    this.personService.getCommentsByUserId(this.userId, this.pageIndex - 1).subscribe(
      (data) => {
        this.commentList = data.data.content;
        this.totalElm = data.data.totalElements;
        console.log('12222', this.commentList);
      }
    );
  }

  getUerNotes(): void {
    this.personService.getNotesByUserId(this.userId, this.noteIndex - 1).subscribe(
      (data) => {
        this.totalNotes = data.data.totalElements;
        const temp = data.data.content;
        this.noteList = new Array(temp.length).fill({}).map((_, index) => {
          return {
            href: 'http://localhost:4200/note/detail',
            title: `${temp[index].title}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: '坚持写笔记，分享快乐多',
            content: `${temp[index].content.substr(0, 20).replace('#', '')}`,
            entity: temp[index]
          };
        });
      }
    );
  }

  detail(note: NoteShow): void {
    this.soonOutput.emit(note);
    this.router.navigate(['/note/detail'], {queryParams: {
        content: note.content,
        title: note.title,
        useId: note.userId,
        courseId: note.courseId
      }});
  }

}
