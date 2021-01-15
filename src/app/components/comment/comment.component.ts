import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "../../service/course.service";
import {DomSanitizer} from "@angular/platform-browser";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  likes = 0;
  dislikes = 0;
  commentList = [];
  @Input() courseId;
  pageIndex = 1;
  totalPage = 1;
  picList = [];
  totalEle = 0;
  userId = 0;
  commented = true;

  constructor(private courseService: CourseService, public sanitizer: DomSanitizer, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getAllComment(0);
  }

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  getAllComment(pi: number): void {
    this.courseService.getAllCommentByCourseId(this.courseId, pi).subscribe(
      (data) => {
        this.commentList = data.data.content;
        this.totalPage = data.data.totalPages;
        this.totalEle = data.data.totalElements;
      }
    );
  }

  changePageIndex(): void {
    console.log(this.pageIndex);
    // console.log(page);
    this.getAllComment(this.pageIndex - 1);
  }
}
