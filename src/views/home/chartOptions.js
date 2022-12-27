import * as echarts from 'echarts';
export const orderPaymentOptions = {
  title: {
    text: "2022年总销量柱图11111",
  },
  tooltip: {},
  grid: {
    left: "15%",
    right: "15%"
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "帽子"],
  },
  yAxis: [
    {
      type: 'value',
      name: "（万元）",
      nameTextStyle: {
        color: "#7c829c",
        fontSize: 16,
        padding: [0, 30, 5, 0],
      },
      axisLabel: {
        textStyle: {
          show: true,
          color: "#7c829c",
          fontSize: 16,
        },
      },
      axisLine: {
        lineStyle: {
          color: "#2d3858", //坐标轴线颜色
        },
      },
      axisTick: {
        lineStyle: {
          color: "#d2d2d2", //刻度线颜色
        },
      },
      splitLine: {
        //横向分割线设置
        show: false,
        lineStyle: {
          color: ["#2d3858"],
          width: 1,
          type: "solid",
        },
      },
    },
    {
      type: 'value',
      name: "（万元）",
      nameTextStyle: {
        color: "#7c829c",
        fontSize: 16,
        padding: [0, 0, 5, 35],
      },
      axisLabel: {
        textStyle: {
          show: true,
          color: "#7c829c",
          fontSize: 16,
        },
      },
      axisLine: {
        lineStyle: {
          color: "#2d3858", //坐标轴线颜色
        },
      },
      axisTick: {
        lineStyle: {
          color: "#d2d2d2", //刻度线颜色
        },
      },
      splitLine: {
        //横向分割线设置
        show: false,
        lineStyle: {
          color: ["#2d3858"],
          width: 1,
          type: "solid",
        },
      },
    }
  ],
  series: [{
      name: "国外销量",
      type: "line",
      yAxisIndex: 0,
      data: [1200, 789, 732, 695, 805, 120, 495],
      barWidth: 20,
      smooth: true,
      itemStyle: {
        color: "#f5b54b",
      },
    },
    { 
      name: "国内销量",
      type: "bar",
      yAxisIndex: 1,
      data: [194, 324, 334, 635, 835, 932, 404],
      barWidth: 20,
      itemStyle: {
        color: "#67c",
        barBorderRadius : [ 3, 3, 0, 0],
      },
     
    },
  ],
}

export const usageOptions = {
  title: {
    text: "小白兔",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    axisLabel: {
      rotate:30,
    },
  },
  yAxis: {
    name: "（万元）",
    nameTextStyle: {
      padding: [0, 30, 5, 0],
    },
  },
  grid: {
    left: "15%",
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

export const top10Options = {
  title: {
    text: "",
  },
  xAxis: {
    data: [],
  },
  yAxis: {
    name: "",
  },
  series: [{
    name: "",
    type: "bar",
    data: []
  }],
}

export const top10DetailOptions = {
  title: {
    text: "",
  },
  xAxis: {
    data: [],
    axisLabel: {
      textStyle: {
        show: true,
        color: "#9eb7cd",
        fontSize: 14,
      },
      rotate:20,
    },
  },
  yAxis: {
    name: "",
    nameTextStyle: {
      padding: [0, 30, 5, 0],
    },
  },
  series: [{
    name: "",
    type: "bar",
    barWidth: 20,
    data: [],
    itemStyle: {
      normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(27,168,240,1)'
          },
          {
            offset: 1,
            color: 'rgba(32,40,95,0.5)'
          }
        ]),
        barBorderRadius : [ 10, 10, 0, 0],
      },
  }
  }],
}

