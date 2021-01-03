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


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})

export class AddComponent implements OnInit {


  constructor(private fb: FormBuilder, private http: HttpClient, private msg: NzMessageService,
              private courseService: CourseService) {
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
  level = 1;
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
  beforeUpload = (file: NzUploadFile): boolean => {
    console.log('test', file);
    this.fileList = this.fileList.concat(file);
    return false;
  };

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
    // this.courseService
    // this.handleUpload();
    this.handleCatalogUpload();
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
        const temp = new Level();
        if (this.level === 1) {
          temp.name = '简单';
        } else if (this.level === 2) {
          temp.name = '一般';
        } else {
          temp.name = '困难';
        }
        this.courseEntity.level = temp;
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

  // 上传图片

  handleChange({file, fileList}: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  handleCover({file, fileList}: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
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
  };

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.coverFile.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.coverFile = [];
          this.msg.success('upload successfully.');
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }

  // 提交目录图片
  beforeCatalogUpload = (file: NzUploadFile): boolean => {
    console.log('file is ', file);
    this.catalogFile = this.catalogFile.concat(file);
    console.log('catalogFile is ', this.catalogFile);
    return false;
  };

  handleCatalogUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.catalogFile.forEach((file: any) => {
      formData.append('cover', file);
    });
    this.uploading = true;

    this.http
      .post<Result<string>>('/course/upload/cover', formData)
      // .request<Result<string>>(req)
      // .pipe(data =>{})
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        (data) => {
          this.uploading = false;
          console.log('data', data);
          // this.courseEntity.catalog
          this.msg.success('upload successfully.');
        },
        () => {
          // console.log('error', e);
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
    // this.catalogFile = [];
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
