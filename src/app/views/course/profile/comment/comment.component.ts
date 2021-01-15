import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../../../../service/course.service';
import {Comment} from '../../../../entity/Comment';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {FileService} from '../../../../service/file.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AuthService} from '../../../../service/auth.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

@Component({
  selector: 'app-course-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '【整体评价】\n【难易程度】\n【优质部分】\n【缺陷部分】\n';
  recommend = 0;
  costPerformance = 0;
  score = 0;

  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  comment = new Comment();
  isVisible = false;
  courseId = 0;
  // 以下是评论列表参数
  likes = 0;
  dislikes = 0;
  commentList = [];
  pageIndex = 1;
  totalPage = 1;
  picList = [];
  totalEle = 0;
  userId = 0;
  commented = true;

  commentVisible = true;


  constructor(private courseService: CourseService, private fileService: FileService, private msg: NzMessageService,
              private authService: AuthService, private route: ActivatedRoute, public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAllComment(0);
  }

  handleSubmit(): void {
    this.comment.costPerformance = this.costPerformance;
    this.comment.recommend = this.recommend;
    this.comment.score = this.score;
    this.comment.content = this.inputValue;
    this.comment.userId = this.authService.getUser().id;
    this.comment.courseId = this.courseId;
    console.log('entity ', this.comment);
    this.courseService.saveComment(this.comment).subscribe(
      (data) => {
        console.log('save res ', data);
        this.inputValue = '';
        this.comment = new Comment();
        this.fileList = [];
        this.score = 0;
        this.costPerformance = 0;
        this.recommend = 0;
      }
    );
  }

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      // tslint:disable-next-line:no-non-null-assertion
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  }

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files', file);
    });
    formData.append('type', 'comment');
    console.log(formData);
    if (this.fileList.length !== 0){
      this.fileService.uploadImages(formData).subscribe(
        (data) => {
          // @ts-ignore
          const temp = data.data.paths;
          // @ts-ignore
          const rootPath = data.data.root;
          var s = '';
          for (let i = 0; i < temp.length; i++) {
            s = s + rootPath + '/' + temp[i] + '】【';
          }
          this.comment.picture = s;
          console.log('s is ', s);
          this.handleSubmit();
          this.msg.success('评论成功');
        },
        () => {
          console.log('Error');
        },
        () => {
        }
      );
    }else {
      this.handleSubmit();
    }
  }

  /**
   * 提交评论modal
   */
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.handleUpload();
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
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
        console.log('req ', data.data);
        this.commentList = data.data.content;
        this.totalPage = data.data.totalPages;
        this.totalEle = data.data.totalElements;
        this.isCommented();
      }
    );
  }

  changePageIndex(): void {
    this.getAllComment(this.pageIndex - 1);
  }

  isCommented(): void {
    if (this.commentVisible){
      this.userId = this.authService.getUser().id;
      for (let i of this.commentList) {
        if (this.userId === i.userId) {
          this.commentVisible = false;
          break;
        }
      }
    }
  }
}
