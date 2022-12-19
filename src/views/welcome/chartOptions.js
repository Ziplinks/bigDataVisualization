export const options1 = {
    title: {
      text: "2022年总销量柱图11111",
    },
    tooltip: {},
    grid: {
      left: "15%",
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","帽子"],
    },
    yAxis: {
      name: "（万元）",
      nameTextStyle: {
        padding: [0, 0, 5, -40],
      },
    },
    series: [
      {
        name: "国外销量",
        type: "bar",
        data: [1200,789,732,695,805,120,495],
        barWidth: 20,
        itemStyle: {
          color: "#67c",
        },
      },
      {
        name: "国内销量",
        type: "bar",
        data: [194,324,334,635,835,932,404],
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
      text: "小黄鱼",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","帽子"],
    },
    yAxis: {
      name: "（万元）",
    },
    series: [
      {
        name: "国外销量",
        type: "bar",
        data: [12,15,16,12,48,56,35],
        barWidth: 20,
        itemStyle: {
          color: "#67c",
        },
      },
      {
        name: "国内销量",
        type: "bar",
        data: [77,65,32,25,24,69,85],
        barWidth: 20,
        itemStyle: {
          color: "#339",
        },
      },
    ],
  }