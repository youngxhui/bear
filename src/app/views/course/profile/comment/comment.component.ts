import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../service/course.service';
import { Comment } from '../../../../entity/Comment';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FileService } from '../../../../service/file.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../../../service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import 'echarts-wordcloud/src/wordCloud.js';
import {LikedParam} from '../../../../entity/LikedParam';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

@Component({
  selector: 'app-course-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less'],
})
export class CommentComponent implements OnInit {

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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
  // 雷达图的
  option = {
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5],
        },
      },
      indicator: [
        { name: '难度', max: 5 },
        { name: '质量', max: 5 },
        { name: '人气', max: 5 },
        { name: '性价比', max: 5 },
        { name: '推荐度', max: 5 },
      ],
      radius: 80,
    },
    series: [
      {
        name: '评价情况',
        type: 'radar',
        data: [
          {
            value: [4.8, 4.7, 4.5, 4.9, 5.0],
            name: '本周情况',
            label: {
              show: true,
              // tslint:disable-next-line:only-arrow-functions
              formatter: function (params) {
                return params.value;
              },
            },
          },
          {
            value: [4.9, 4.6, 4.8, 4.7, 4.7],
            name: '本月情况',
            label: {
              show: true,
              formatter: function (params) {
                return params.value;
              },
            },
          },
        ],
      },
    ],
  };
  // 词云的
  hotwordOption =
    {
      title: {
        // text: '企业一专利热词'
      },
      tooltip: {},
      series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        // rotationRange: [-90, 90],
        rotationRange: [-50, 50],
        shape: 'circle',
        textStyle: {
          normal: {
            color: () => {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.15)'
          }
        },
        data: [
          {name: '性价比高', value: 2},
          {name: '通俗易懂', value: 3},
          {name: '代码清晰', value: 4},
          {name: '新颖', value: 5},
          {name: '容易上手', value: 6},
        ]
      }]};
  // 词云的
  // 第二排的图表中的图
  chartoption1 = {
    xAxis: {
      type: 'category',
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },
    grid: {
      height: 50
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      symbol: 'none',
      itemStyle: {
        normal: {
          color: '#389fff', // 折点颜色
          lineStyle: {
            color: '#389fff' // 折线颜色
          }
        }
      },
      areaStyle: {
        color: '#d0e9ff'
      }
    }]
  };
  // 表格
  listOfData = [
    {
      key: '1',
      name: '3',
      age: 32,
      address: '-10%'
    },
    {
      key: '2',
      name: '2',
      age: 42,
      address: '10%'
    },
    {
      key: '3',
      name: '1',
      age: 32,
      address: '320%'
    }
  ];
  // 课程热度
  hotoption = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [5, 4.0, 4.1, 4.3, 4.5, 4.5, 4.55, 4.6, 4.65, 4.47, 4.8, 4.76],
      type: 'line'
    }]
  };
  // 评论点赞用于变换style的数组，全0
  great = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


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
    this.courseService.saveComment(this.comment).subscribe((data) => {
      this.inputValue = '';
      this.comment = new Comment();
      this.fileList = [];
      this.score = 0;
      this.costPerformance = 0;
      this.recommend = 0;
    });
  }

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      // tslint:disable-next-line:no-non-null-assertion
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files', file);
    });
    formData.append('type', 'comment');
    if (this.fileList.length !== 0) {
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
          this.handleSubmit();
          this.msg.success('评论成功');
        },
        () => {
          console.log('Error');
        },
        () => {}
      );
    } else {
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
    this.isVisible = false;
  }

  like(commentId: number, type: number, index: number): void {
    const liked = new LikedParam();
    liked.userId = this.userId;
    liked.commentId = commentId;
    if (type === 0){
      liked.value = 1;
      this.courseService.likeClick(liked).subscribe(
        (data) => {
          this.commentList[index].likeCount += 1;
          this.great[index] = 1;
          console.log(data);
        }
      );
    }else {
      liked.value = 0;
      this.courseService.likeClick(liked).subscribe(
        (data) => {
          this.commentList[index].likeCount -= 1;
          this.great[index] = 0;
          console.log(data);
        }
      );
    }
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  getAllComment(pi: number): void {
    this.courseService
      .getAllCommentByCourseId(this.courseId, pi)
      .subscribe((data) => {
        console.log('12', data.data.content);
        this.commentList = data.data.content;
        this.totalPage = data.data.totalPages;
        this.totalEle = data.data.totalElements;
        this.isCommented();
      });
  }

  changePageIndex(): void {
    this.getAllComment(this.pageIndex - 1);
  }

  isCommented(): void {
    if (this.commentVisible) {
      this.userId = this.authService.getUser().id;
      for (let i of this.commentList) {
        if (this.userId === i.userId) {
          this.commentVisible = false;
          break;
        }
      }
    }
  }

  /**
   * 图标部分的数据处理
   */
}
