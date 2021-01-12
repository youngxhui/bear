import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
@Component({
  selector: 'app-course-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent implements OnInit {
  btn = '添加笔记';
  courseId = 0;

  data: ItemData[] = [];

  constructor(private route: ActivatedRoute) {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources ' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }
}
