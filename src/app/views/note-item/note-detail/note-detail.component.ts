import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteParam} from "../../../entity/NoteParam";
import {AuthService} from "../../../service/auth.service";
import {NoteService} from "../../../service/note.service";

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.less']
})
export class NoteDetailComponent implements OnInit {
  markdown = '';
  title = '';
  courseId = 0;
  noteId = 0;
  like = 0;

  constructor(public route: ActivatedRoute, private router: Router, private authService: AuthService, private noteService: NoteService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    const temp = this.route.queryParams._value;
    this.title = temp.title;
    this.markdown = temp.content;
    this.courseId = temp.courseId;
    this.noteId = temp.noteId;
  }

  onBack(): void {
    this.router.navigateByUrl('/course/profile/' + this.courseId);
  }

  favorite(): void {
    const noteParam = new NoteParam();
    noteParam.noteId = this.noteId;
    noteParam.userId = this.authService.getUser().id;
    if (this.like === 0){
      noteParam.value = 1;
      console.log(noteParam);
      // this.noteService.saveFavorite(noteParam).subscribe(
      //   (data) => {
      //     console.log(data);
      //   }
      // );
      this.like = 1;
    }else {
      noteParam.value = 0;
      // this.noteService.saveFavorite(noteParam).subscribe();
      this.like = 0;
    }
  }
}
