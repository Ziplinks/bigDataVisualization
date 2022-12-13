export const options1 = {
    title: {
      text: "2022年总销量柱图",
      textStyle: {
        color: "#fff",
        fontSize: 18,
      },
      // padding:100
      left: "3%",
      top: "3%",
    },
    tooltip: {},
    legend: {
      show: true,
      top: "10%",
      left:"10%",
      textStyle: {
        color: "#fff",
        fontSize: 16,
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "20%",
    },
    xAxis: {
      data: [],
      axisLabel: {
        textStyle: {
          show: true,
          color: "#fff",
          fontSize: 16,
        },
      },
      axisLine: {
        lineStyle: {
          color: "#17c5b3", //坐标轴线颜色
        },
      },
      axisTick: {
        lineStyle: {
          color: "#d2d2d2", //刻度线颜色
        },
      },
      splitLine: {
        //纵向分割线设置
        show: false,
        lineStyle: {
          color: ["red"],
          width: 1,
          type: "dashed",
        },
      },
    },
    yAxis: {
      name: "（万元）",
      nameTextStyle: {
        color: "#fff",
        fontSize: 16,
        padding: [0, 0, 5, 0],
      },
      axisLabel: {
        textStyle: {
          show: true,
          color: "#fff",
          fontSize: 16,
        },
      },
      axisLine: {
        lineStyle: {
          color: "#17c5b3", //坐标轴线颜色
        },
      },
      axisTick: {
        lineStyle: {
          color: "#d2d2d2", //刻度线颜色
        },
      },
      splitLine: {
        //横向分割线设置
        show: true,
        lineStyle: {
          color: ["#17c5b3"],
          width: 1,
          type: "solid",
        },
      },
    },
    series: [
      {
        name: "国外销量",
        type: "bar",
        data: [],
        barWidth: 40,
        itemStyle: {
          color: "#67c",
        },
      },
      {
        name: "国内销量",
        type: "bar",
        data: [],
        barWidth: 40,
        itemStyle: {
          color: "#339",
        },
      },
    ],
  }

export const options2 = {
    title: {
        text: "2022年总销量趋势图",
        textStyle: {
          color: "#fff",
          fontSize: 18,
        },
        // padding:100
        left: "3%",
        top: "3%",
      },
      tooltip: {},
      legend: {
        show: true,
        top: "10%",
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
      },
      grid: {
        left: "5%",
        right: "5%",
        top: "20%",
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        axisLabel: {
          textStyle: {
            show: true,
            color: "#fff",
            fontSize: 16,
          },
        },
        axisLine: {
          lineStyle: {
            color: "#17c5b3", //坐标轴线颜色
          },
        },
        axisTick: {
          lineStyle: {
            color: "#d2d2d2", //刻度线颜色
          },
        },
        splitLine: {
          //纵向分割线设置
          show: false,
          lineStyle: {
            color: ["red"],
            width: 1,
            type: "dashed",
          },
        },
      },
      yAxis: {
        name: "（万元）",
        nameTextStyle: {
          color: "#fff",
          fontSize: 16,
          padding: [0, 0, 5, 0],
        },
        axisLabel: {
          textStyle: {
            show: true,
            color: "#fff",
            fontSize: 16,
          },
        },
        axisLine: {
          lineStyle: {
            color: "#17c5b3", //坐标轴线颜色
          },
        },
        axisTick: {
          lineStyle: {
            color: "#d2d2d2", //刻度线颜色
          },
        },
        splitLine: {
          //横向分割线设置
          show: true,
          lineStyle: {
            color: ["#61a"],
            width: 1,
            type: "solid",
          },
        },
      },
      series: [
        {
          name: "国外销量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
          barWidth: 40,
          itemStyle: {
            color: "#5d4",
          },
        },
        {
          name: "国内销量",
          type: "line",
          data: [15, 60, 76, 50, 20, 80],
          barWidth: 40,
          // showSymbol: false,//设置后会隐藏节点
          smooth:true,
          symbol: 'emptyCircle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none', 默认emptyCircle
          symbolSize: 10,
          itemStyle: {
            color: "#33f",
          },
        },
      ],
  }

export const options3 = {
    title: {
      text: "2022年总销量柱图",
      textStyle: {
        color: "#fff",
        fontSize: 18,
      },
      // padding:100
      left: "3%",
      top: "3%",
    },
    tooltip: {},
    legend: {
      show: true,
      top: "10%",
      left:"10%",
      textStyle: {
        color: "#fff",
        fontSize: 16,
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "20%",
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","帽子"],
      axisLabel: {
        textStyle: {
          show: true,
          color: "#fff",
          fontSize: 16,
        },
      },
      axisLine: {
        lineStyle: {
          color: "#17c5b3", //坐标轴线颜色
        },
      },
      axisTick: {
        lineStyle: {
          color: "#d2d2d2", //刻度线颜色
        },
      },
      splitLine: {
        //纵向分割线设置
        show: false,
        lineStyle: {
          color: ["red"],
          width: 1,
          type: "dashed",
        },
      },
    },
    yAxis: {
      name: "（万元）",
      nameTextStyle: {
        color: "#fff",
        fontSize: 16,
        padding: [0, 0, 5, 0],
      },
      axisLabel: {
        textStyle: {
          show: true,
          color: "#fff",
          fontSize: 16,
        },
      },
      axisLine: {
        lineStyle: {
          color: "#17c5b3", //坐标轴线颜色
        },
      },
      axisTick: {
        lineStyle: {
          color: "#d2d2d2", //刻度线颜色
        },
      },
      splitLine: {
        //横向分割线设置
        show: true,
        lineStyle: {
          color: ["#17c5b3"],
          width: 1,
          type: "solid",
        },
      },
    },
    series: [
      {
        name: "国外销量",
        type: "bar",
        data: [12,15,16,12,48,56,35],
        barWidth: 40,
        itemStyle: {
          color: "#67c",
        },
      },
      {
        name: "国内销量",
        type: "bar",
        data: [77,65,32,25,24,69,85],
        barWidth: 40,
        itemStyle: {
          color: "#339",
        },
      },
    ],
  }