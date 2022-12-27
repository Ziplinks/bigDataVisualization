<template>
  <div ref="chartBox" :style="style"></div>
</template>
<script>
export default {
  name: "index",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    options: {
      type: Object,
      default: {},
    },
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
  watch: {
    options: {
      handler(newVal, oldVal) {
        if (this.chart) {
          console.log("change");
          this.chart.setOption(this.assignOptions(newVal));
        } else {
          this.init();
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      chart: "",
      // color:"#0093ff",
      defaultOptions: {
        backgroundColor: "transparent",
        title: {
          text: "ECharts 入门示例",
          textStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight: 500,
          },
          left: "5%",
          top: "3%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          show: false,
        },
        grid: {
          left: "7%",
          bottom: 0,
        },
        xAxis: {
          type: "value",

          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          inverse: true,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisPointer: {
            label: {
              show: true,
              margin: 30,
            },
          },
          data: [],
        },
        series: [
          {
            z: 2,
            name: "value",
            type: "bar",
            barWidth: 15,
            data: [
              { name: "香蕉", value: 3.9 },
              2.86,
              1.82,
              1.8,
              1.53,
              1.47,
              1.3,
              1.25,
              1.1,
              1.02,
            ],
            itemStyle:{
              normal:{
                color: (param) => {
                  let color = ["#e03837", "#ef6f2e", "#f5b54b", "#35aaf7"];
                  if (param.dataIndex < 3) {
                    return color[param.dataIndex];
                  } else {
                    return color[3];
                  }
                },
              }
            },
            label: {
              normal: {
                show: true,
                position: [0, -20],
                textStyle: {
                  fontSize: 14,
                },
                color: (param) => {
                  let color = ["#e03837", "#ef6f2e", "#f5b54b", "#35aaf7"];
                  if (param.dataIndex < 3) {
                    return color[param.dataIndex];
                  } else {
                    return color[3];
                  }
                },
                formatter: (a) => {
                  var num = "";
                  var str = "";
                  num =  (a.dataIndex + 1)+'.';
                  if (a.dataIndex === 0) {
                    str = "{color1|" + num + "} {color1|" + a.name + "} {value0|" + a.value + "次}";
                  } else if (a.dataIndex === 1) {
                    str = "{color2|" + num + "} {color2|" + a.name + "} {value0|" + a.value + "次}";
                  } else if (a.dataIndex === 2) {
                    str = "{color3|" + num + "} {color3|" + a.name + "} {value0|" + a.value + "次}";
                  } else {
                    str = "{color4|" + num + "} {color4|" + a.name + "} {value0|" + a.value + "次}";
                  }
                  return str;
                },
                rich: {
                  color1: {
                    color: "#fff",
                    fontSize: 14,
                    fontStyle:"italic"
                  },
                  color2: {
                    color: "#fff",
                    fontSize: 14,
                     fontStyle:"italic"
                  },
                  color3: {
                    color: "#fff",
                    fontSize: 14,
                     fontStyle:"italic"
                  },
                  color4: {
                    color: "#fff",
                    fontSize: 14,
                    fontStyle:"italic"
                  },
                  value0:{
                      color: "#fff",
                      fontSize: 14,
                      fontStyle:"italic",
                      padding:[0,0,0,12],
                  }
                },
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.init();
    //这里使用getZr(),直接使用click方法点击背景不会触发
    this.chart.getZr().on("click", (params) => {
        let pointInPixel = [params.offsetX, params.offsetY]
                if (this.chart.containPixel('grid', pointInPixel)) {
                    //点击第几个柱子
                    let pointInGrid = this.chart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)
                    // y轴数据的索引
                    let yIndex = pointInGrid[1]
                    // var a = dataAxis[yIndex];
                     this.$emit("getChartIndex",yIndex)
                }
    });
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(this.$refs.chartBox);
      this.chart.setOption(this.assignOptions(this.options));
      window.addEventListener("resize", this.chart.resize);
    },
    assignOptions(option) {
      return _.merge(this.defaultOptions, option);
    },
  },
};
</script>

<style scoped>
</style>
