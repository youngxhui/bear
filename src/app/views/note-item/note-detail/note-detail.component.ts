import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.less']
})
export class NoteDetailComponent implements OnInit {
  markdown = '';
  title = '';
  courseId = 0;

  constructor(public route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    console.log('get res data', this.route.queryParams);
    // @ts-ignore
    const temp = this.route.queryParams._value;
    this.title = temp.title;
    this.markdown = temp.content;
    this.courseId = temp.courseId;
  }

  onBack(): void {
    this.router.navigateByUrl('/course/profile/' + this.courseId);
  }
}
