import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteService} from '../../../../service/note.service';
import {Note} from '../../../../entity/Note';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
  entity: Note;
  id: number;
}

@Component({
  selector: 'app-course-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent implements OnInit {
  courseId = 0;

  data: ItemData[] = [];

  totalPage = 0;
  pageIndex = 1;

  // 详细的某个note的信息
  @Output()
  soonOutput: EventEmitter<Note> = new EventEmitter();

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) {
  }
  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData(0);
  }

  loadData(pi: number): void {
    this.noteService.getByCourseId(this.courseId, pi).subscribe(
      (data) => {
        // @ts-ignore
        this.totalPage = data.data.totalElements;
        // @ts-ignore
        const temp = data.data.content;
        this.data = new Array(temp.length).fill({}).map((_, index) => {
          return {
            href: 'http://localhost:4200/note/detail',
            title: `${temp[index].title}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: '坚持写笔记，分享快乐多',
            content: `${temp[index].content.substr(0, 20).replace('#', '')}`,
            entity: temp[index],
            id: temp[index].id
          };
        });
      }
    );
  }

  changePageIndex(): void {
    this.loadData(this.pageIndex - 1);
  }

  detail(note: Note, id: number): void {
    // this.soonOutput.emit(note);
    this.router.navigate(['/note/detail'], {queryParams: {
      content: note.content,
        title: note.title,
        useId: note.userId,
        courseId: note.courseId,
        noteId: id
    }});
  }
}
