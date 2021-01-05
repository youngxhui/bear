import {Component, OnInit} from '@angular/core';


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
        roam: true,
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
          y: 100,
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
          target: 7
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
      text: 'CDA学习路线'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: true,
        label: {
          show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        data: [{
          name: '节点1',
          x: 300,
          y: 300,
          children: [
            {
              name: 'VUE',
              x: 400,
              y: 400
            }
          ]
        }, {
          name: '节点2',
          x: 800,
          y: 300
        }, {
          name: '节点3',
          x: 550,
          y: 100
        }, {
          name: '节点4',
          x: 550,
          y: 500
        }],
        // links: [],
        links: [{
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true
          },
          lineStyle: {
            width: 5,
            curveness: 0.2
          }
        }, {
          source: '节点2',
          target: '节点1',
          label: {
            show: true
          },
          lineStyle: {
            curveness: 0.2
          }
        }, {
          source: '节点1',
          target: '节点3'
        }, {
          source: '节点2',
          target: '节点3'
        }, {
          source: '节点2',
          target: '节点4'
        }, {
          source: '节点1',
          target: '节点4'
        }],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    ]
  };

  getItem(event: unknown): void {
    console.log(event);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
