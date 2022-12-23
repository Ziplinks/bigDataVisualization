import * as echarts from 'echarts';
export const options1 = {
  title: {
    text: "2022年总销量柱图11111",
  },
  tooltip: {},
  grid: {
    left: "15%",
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "帽子"],
  },
  yAxis: {
    name: "（万元）",
    nameTextStyle: {
      padding: [0, 0, 5, -40],
    },
  },
  series: [{
      name: "国外销量",
      type: "bar",
      data: [1200, 789, 732, 695, 805, 120, 495],
      barWidth: 20,
      itemStyle: {
        color: "#67c",
      },
    },
    {
      name: "国内销量",
      type: "bar",
      data: [194, 324, 334, 635, 835, 932, 404],
      barWidth: 20,
      itemStyle: {
        color: "#339",
      },
    },
  ],
}

export const options2 = {
  title: {
    text: "小白兔",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {
    name: "（万元）",
  },
  series: [{
    name: "国内销量",
    type: "line",
    data: [75, 60, 72, 59, 53, 72],
    // showSymbol: false,//设置后会隐藏节点
    smooth: true,
    symbol: 'emptyCircle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none', 默认emptyCircle
    showAllSymbol: true,
    symbolSize: 12,
    lineStyle: {
      normal: {
        color: '#6c50f3',
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        // shadowOffsetY: 5,
        // shadowOffsetX: 5
      },
    },
    label:{
      show:true,
      position: 'top',
      textStyle: {
          color: '#9eb7cd',
          fontSize: 14,
      }
    },
    itemStyle: {
      color: "#6c50f3",
      borderColor: "#fff",
      borderWidth: 3,
      shadowColor: 'rgba(0, 0, 0, .3)',
      shadowBlur: 0,
      // shadowOffsetY: 2,
      // shadowOffsetX: 2,
  },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(108,80,243,0.3)'
          },
          {
            offset: 1,
            color: 'rgba(108,80,243,0)'
          }
        ], false),
        shadowColor: 'rgba(108,80,243, 0.9)',
        shadowBlur: 20
      }
    },
  }, ],
}

export const options3 = {
  title: {
    text: "小黄鱼",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "帽子"],
  },
  yAxis: {
    name: "（万元）",
  },
  series: [{
      name: "国外销量",
      type: "bar",
      data: [12, 15, 16, 12, 48, 56, 35],
      barWidth: 20,
      itemStyle: {
        color: "#67c",
      },
    },
    {
      name: "国内销量",
      type: "bar",
      data: [77, 65, 32, 25, 24, 69, 85],
      barWidth: 20,
      itemStyle: {
        color: "#339",
      },
    },
  ],
}

export const options4 = {
  series: [{
    data: [
      // { value: 98, name: 'c1' },
      // { value: 5, name: 'c2' },
      // { value: 30, name: 'c3' },
      // { value: 94, name: 'c4' },
      // { value: 30, name: 'c5' }
    ]
  }]
};

export const options5 = {
  title: {
    text: '柱图测试',
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      crossStyle: {
        color: "#999"
      }
    },
  },
  grid: {
    left: "15%",
  },
  xAxis: {
    type: "category",
    data: ['丙烯', '乙烯', '甲苯', '烯烃', '苯系物', '烷烃'],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}%",
    },
  },

  series: [{
      name: "",
      type: "bar",
      data: [],
      barGap: '-100%',
      barCategoryGap: '60%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(27,168,240,1)'
            },
            {
              offset: 1,
              color: 'rgba(32,40,95,0.3)'
            }
          ])
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(27,168,240,1)'
            },
            {
              offset: 1,
              color: 'rgba(27,168,240,0.3)'
            }
          ])
        }
      },
    },

  ]
}
