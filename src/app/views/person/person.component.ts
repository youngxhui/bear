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
import {NoteService} from '../../service/note.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {Observable, Observer} from 'rxjs';
import {UpdateUser} from "../../entity/UpdateUser";
import {CourseService} from "../../service/course.service";
import {FileService} from "../../service/file.service";
import {NzMessageService} from "ng-zorro-antd/message";

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
  favoriteList: ItemData[] = [];
  loading = false;
  pageIndex = 1;
  totalElm = 0;
  noteIndex = 1;
  totalNotes = 0;
  favIndex = 1;
  totalFav = 0;
  // 详细的某个note的信息
  @Output()
  soonOutput: EventEmitter<Note> = new EventEmitter();
  // 修改个人信息
  isVisible = false;
  isOkLoading = false;
  validateForm!: FormGroup;
  avatarFile: NzUploadFile[] = [];
  uploading = false;

  constructor(private personService: PersonService, private authService: AuthService, private noteService: NoteService,
              private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private fileService: FileService,
              private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.userId = this.authService.getUser().id;
    this.getUerComments();
    this.validateForm = this.fb.group({
      nickname: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
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
    this.getFavorite();
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
    this.router.navigate(['/note/detail'], {
      queryParams: {
        content: note.content,
        title: note.title,
        useId: note.userId,
        courseId: note.courseId
      }
    });
  }

  getFavorite(): void {
    this.personService.getByUserId(this.userId, this.favIndex - 1).subscribe(
      (data) => {
        console.log(data);
        // @ts-ignore
        this.totalFav = data.data.totalElements;
        // @ts-ignore
        const temp = data.data.notes;
        this.favoriteList = new Array(temp.length).fill({}).map((_, index) => {
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

  /**
   * 修改个人信息
   */
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.isVisible = false;
    this.isOkLoading = false;
    this.submitForm(this.validateForm.value);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(value: { nickname: string; description: string; }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    const updateUser = new UpdateUser();
    updateUser.id = this.authService.getUser().id;
    updateUser.account = this.authService.getUser().account;
    updateUser.description = value.description;
    updateUser.name = value.nickname;
    console.log('form', updateUser);
    this.handleAvatarUpload(updateUser);
  }

  beforeAvatarUpload = (file: NzUploadFile): boolean => {
    this.avatarFile = this.avatarFile.concat(file);
    return false;
  }

  handleAvatarUpload(user: UpdateUser): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.avatarFile.forEach((file: any) => {
      formData.append('files', file);
    });
    formData.append('type', 'avatar');
    this.uploading = true;
    this.fileService.uploadImages(formData).subscribe(
      (data) => {
        // console.log('file upload res is ', data);
        // @ts-ignore
        const temp = data.data.paths;
        // @ts-ignore
        const rootPath = data.data.root;
        var s = '';
        for (let i = 0; i < temp.length; i++) {
          s = s + rootPath + '/' + temp[i] + '】【';
        }
        user.avatar = s;
        console.log('entity is ', user);
        this.updateUser(user);
        this.msg.success('上传成功');
      },
      () => {
        this.uploading = false;
        this.msg.error('Error.');
      },
      () => {
        this.uploading = false;
        this.avatarFile = [];
      }
    );
  }

  updateUser(user: UpdateUser): void {
    this.personService.updateUser(user).subscribe(
      (data) => {
        console.log('update ok', data);
      }
    );
  }
}
