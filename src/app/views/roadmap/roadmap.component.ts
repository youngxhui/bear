import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RoadMapService} from "../../service/road-map.service";


@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.less']
})
export class RoadmapComponent implements OnInit {


  option = {
    title: {
      text: '开发学习路线'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        // roam: true,
        symbol: 'roundRect',
        label: {
          show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        data: [{
          id: 1,
          name: '初级程序员',
          x: 470,
          y: 0,
          itemStyle: {
            color: 'rgb(221, 107, 102)'
          },
          symbolSize: 80
        }, {
          id: 2,
          name: '前端开发工程师',
          x: 70,
          y: 200,
          itemStyle: {
            color: 'rgb(117, 154, 160)'
          },
          symbolSize: 110
        }, {
          id: 3,
          name: '测试工程师',
          x: 230,
          y: 200,
          itemStyle: {
            color: 'rgb(230, 157, 135)'
          },
          symbolSize: 100
        }, {
          id: 4,
          name: '服务端开发',
          x: 380,
          y: 200,
          itemStyle: {
            color: 'rgb(141, 193, 169)'
          },
          symbolSize: 100
        }, {
          id: 5,
          name: '初级DBA',
          x: 530,
          y: 200,
          itemStyle: {
            color: 'rgb(234, 126, 83)'
          },
          symbolSize: 70
        }, {
          id: 6,
          name: '安全',
          x: 650,
          y: 200,
          itemStyle: {
            color: 'rgb(238, 221, 120)'
          }
        }, {
          name: '运维',
          x: 750,
          y: 200,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          }
        }, {
          name: '产品',
          x: 850,
          y: 200,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          }
        }, {
          name: '高级DBA',
          x: 520,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 70
        }, {
          name: '数据库运维',
          x: 680,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 80
        }, {
          name: '运维开发',
          x: 810,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 70
        }, {
          name: '运维架构师',
          x: 745,
          y: 470,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 80
        }, {
          name: '高级测试工程师',
          x: 370,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 100
        }, {
          name: '高级开发工程师',
          x: 220,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 100
        }, {
          name: '测试开发工程师',
          x: 70,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 100
        }, {
          name: '系统架构师',
          x: 220,
          y: 470,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 100
        }],
        links: [{
          source: 0,
          target: 1,
        }, {
          source: 0,
          target: 2,
        }, {
          source: 0,
          target: 3
        }, {
          source: 0,
          target: 4
        }, {
          source: 0,
          target: 5
        }, {
          source: 0,
          target: 6
        }, {
          source: 4,
          target: 8
        }, {
          source: 6,
          target: 9
        }, {
          source: 6,
          target: 10
        }, {
          source: 9,
          target: 11
        }, {
          source: 10,
          target: 11
        }, {
          source: 2,
          target: 12
        }, {
          source: 1,
          target: 13
        }, {
          source: 3,
          target: 13
        }, {
          source: 1,
          target: 14
        }, {
          source: 2,
          target: 14
        }, {
          source: 3,
          target: 14
        }, {
          source: 13,
          target: 15
        }],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        },
        force: {
          repulsion: 950
        }
      }
    ]
  };
  option1 = {
    title: {
      text: '开发学习路线'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        symbol: 'roundRect',
        label: {
          show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        data: [{
          id: 1,
          name: '数据分析员',
          x: 470,
          y: 0,
          itemStyle: {
            color: 'rgb(221, 107, 102)'
          },
          symbolSize: 80
        }, {
          id: 2,
          name: '数据运营',
          x: 70,
          y: 200,
          itemStyle: {
            color: 'rgb(117, 154, 160)'
          },
          symbolSize: 110
        }, {
          id: 3,
          name: '数据产品经理',
          x: 230,
          y: 200,
          itemStyle: {
            color: 'rgb(230, 157, 135)'
          },
          symbolSize: 100
        }, {
          id: 4,
          name: '高级数据产品经理',
          x: 380,
          y: 200,
          itemStyle: {
            color: 'rgb(141, 193, 169)'
          },
          symbolSize: 100
        }, {
          id: 5,
          name: '数据分析师',
          x: 530,
          y: 200,
          itemStyle: {
            color: 'rgb(234, 126, 83)'
          },
          symbolSize: 70
        }, {
          id: 6,
          name: '大数据工程师',
          x: 650,
          y: 200,
          itemStyle: {
            color: 'rgb(238, 221, 120)'
          }
        }, {
          name: '高级建模分析师',
          x: 750,
          y: 200,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          }
        }, {
          name: '大数据架构师',
          x: 850,
          y: 200,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          }
        }, {
          name: '机器学习',
          x: 520,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 70
        }, {
          name: 'CV工程师',
          x: 680,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 80
        }, {
          name: 'NLP工程师',
          x: 810,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 70
        }, {
          name: '高级AI工程师',
          x: 370,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 100
        }, {
          name: '数据科学家',
          x: 220,
          y: 350,
          itemStyle: {
            color: 'rgb(41, 60, 85)'
          },
          symbolSize: 100
        }],
        links: [{
          source: 0,
          target: 1,
        }, {
          source: 0,
          target: 4,
        }, {
          source: 1,
          target: 2
        }, {
          source: 2,
          target: 3
        }, {
          source: 4,
          target: 5
        }, {
          source: 4,
          target: 6
        }, {
          source: 5,
          target: 7
        }, {
          source: 8,
          target: 9
        }, {
          source: 8,
          target: 10
        }, {
          source: 9,
          target: 11
        }, {
          source: 10,
          target: 11
        }, {
          source: 11,
          target: 12
        }, {
          source: 6,
          target: 12
        }, {
          source: 7,
          target: 12
        }],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        },
        force: {
          repulsion: 950
        }
      }
    ]
  };

  getItem(event: unknown): void {
    // @ts-ignore
    this.router.navigate([`/course/${event.data.id}`]);
    // console.log(event.data);
  }

  constructor(public router: Router, private roadService: RoadMapService) {
  }

  ngOnInit(): void {
    // this.roadService.test().subscribe(
    //   (data) => {
    //     console.log('road map', data);
    //   }
    // );
  }

}
