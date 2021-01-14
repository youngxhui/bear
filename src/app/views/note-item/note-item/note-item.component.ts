import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteItemService} from "../../../service/note-item.service";
import {Note} from "../../../entity/Note";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.less']
})
export class NoteItemComponent implements OnInit {

  isVisible = false;
  isSubmitted = 0;
  mdText = '';
  courseId = 0;
  value?: string;

  constructor(private route: ActivatedRoute, private noteItemService: NoteItemService, private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
  }

  /**
   * 模态框
   */
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    const note: Note = new Note();
    note.content = this.mdText;
    note.courseId = this.courseId;
    note.userId = this.authService.getUser().id;
    note.title = this.value;
    console.log('note before submit', note);
    this.noteItemService.saveNote(note).subscribe(
      (data) => {
        this.isSubmitted += 1;
        console.log('after sub', data);
      });
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  /**
   * 页头返回
   */
  onBack(): void {
    // const url: string = '/course/'.concat(String(this.courseId));
    this.router.navigateByUrl('/course/profile/' + this.courseId);
  }

  /**
   * 获取md编辑器内容
   */
  receive(event): void {
    this.mdText = event;
  }
}
