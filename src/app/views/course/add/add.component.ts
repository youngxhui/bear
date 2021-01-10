import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { Course } from '../../../entity/course';
import Level from '../../../entity/level';
import { CourseService } from '../../../service/course.service';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import Result from '../../../entity/result';
import { FileService } from '../../../service/file.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})

export class AddComponent implements OnInit {


  constructor(private fb: FormBuilder, private http: HttpClient, private msg: NzMessageService,
              private courseService: CourseService, private fileService: FileService) {
  }

  // 翻页按钮和index
  current = 0;

  index = 'First-content';
  // 表单参数
  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };
  // 授课模式
  online = '1';
  // 难度
  level = '1';
  levelname = '简单';
  // tab级联选择

  // 级联选择
  nzOptions: NzCascaderOption[] = [];

  values: string[] = [];

  // 课程实体
  courseEntity = new Course();

  // 课程时长
  hour = 0;
  minutes = 0;

  listOfData = [1];

  // 封面文件
  uploading = false;
  coverFile: NzUploadFile[] = [];
  // 目录列表
  catalogFile: NzUploadFile[] = [];
  fileList: NzUploadFile[] = [];

  // 翻页器按钮及内容联动设置
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    this.current += 1;
    this.handleCoverUpload();
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = '课程信息';
        break;
      }
      case 1: {
        console.log(this.validateForm.controls);
        this.courseEntity.url = this.validateForm.controls.courseUrl.value;
        this.courseEntity.period = this.hour * 60 + this.minutes;
        this.courseEntity.name = this.validateForm.controls.courseName.value;
        this.courseEntity.institution = this.validateForm.controls.institution.value;
        this.courseEntity.description = this.validateForm.controls.description.value;
        this.courseEntity.teacher = this.validateForm.controls.teacher.value;
        this.courseEntity.online = this.online !== '0';
        this.courseEntity.tipId = Number(this.values[0]);
        this.courseEntity.subTipId = Number(this.values[1]);
        this.courseEntity.levelId = Number(this.level);
        // @ts-ignore
        if (this.level === '1') {
          this.levelname = '简单';
        } else if (this.level === '2') {
          this.levelname = '一般';
        } else {
          this.levelname = '困难';
        }
        break;
      }
      case 2: {
        this.index = '完成';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  // 发起课程信息提交请求
  submitCourse(): void{
    this.courseService.saveOne(this.courseEntity).subscribe(
      (data) => {
        console.log('添加成功', data);
      },
      () => {
        console.log('Error');
      },
      () => {
      }
    );
  }

  // 表单内容部分
  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  getCourseUrl(e: MouseEvent): void {
    e.preventDefault();
  }

  getTipAndSub(): void {
    this.courseService.getTipsAndSub().subscribe(({data}) => {
      // tslint:disable-next-line:forin
      for (const i in data) {
        this.nzOptions = [...this.nzOptions, {
          value: data[i].tip.id.toString(),
          label: data[i].tip.name,
          children: []
        }];
        for (const j in data[i].subTipsList) {
          // tslint:disable-next-line:forin
          this.nzOptions[i].children = [...this.nzOptions[i].children, {
            value: data[i].subTipsList[j].id.toString(),
            label: data[i].subTipsList[j].name,
            isLeaf: true
          }];
        }
      }
    });
  }

  changeTips(values: string[]): void {
    console.log(values, this.values);
  }

  // 上传封面
  beforeCoverUpload = (file: NzUploadFile): boolean => {
    console.log('cover', file);
    this.coverFile = this.coverFile.concat(file);
    return false;
  }

  handleCoverUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.coverFile.forEach((file: any) => {
      formData.append('files', file);
    });
    formData.append('type', 'cover');
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
        console.log('s is ', s);
        this.courseEntity.cover = s;
        this.uploading = false;
        this.coverFile = [];
        this.handleCatalogUpload();
        this.msg.success('封面上传成功');
      },
      () => {
        this.uploading = false;
        this.msg.error('Error.');
      },
      () => {
        this.uploading = false;
      }
    );
  }

  // 提交目录图片
  beforeCatalogUpload = (file: NzUploadFile): boolean => {
    this.catalogFile = this.catalogFile.concat(file);
    return false;
  }

  handleCatalogUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.catalogFile.forEach((file: any) => {
      formData.append('files', file);
    });
    formData.append('type', 'catalog');
    console.log(formData);
    this.uploading = true;
    this.fileService.uploadImages(formData).subscribe(
      (data) => {
        this.uploading = false;
        // @ts-ignore
        const temp = data.data.paths;
        // @ts-ignore
        const rootPath = data.data.root;
        var s = '';
        for (let i = 0; i < temp.length; i++) {
          s = s + rootPath + '/' + temp[i] + '】【';
        }
        console.log('s is ', s);
        this.courseEntity.catalog = s;
        this.submitCourse();
        this.msg.success('添加成功');
      },
      () => {
        console.log('Error');
        this.uploading = false;
      },
      () => {
        this.uploading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getTipAndSub();
    this.validateForm = this.fb.group({
      courseUrl: [null, [Validators.required]],
      courseName: [null, [Validators.required]],
      institution: [null, [Validators.required]],
      description: [null, [Validators.required]],
      teacher: [null, [Validators.required]],
    });
  }

}
