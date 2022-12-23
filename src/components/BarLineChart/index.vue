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
      defaultOptions: {
        backgroundColor: "transparent",
        title: {
          text: "ECharts 入门示例",
          textStyle: {
            color: "#fff",
            fontSize: 18,
          },
          left: "3%",
          top: "3%",
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
        legend: {
          show: true,
          top: "12%",
          left: "18%",
          textStyle: {
            color: "#7c829c",
            fontSize: 16,
          },
        },
        grid: {
          left: "10%",
          right: "5%",
          top: "20%",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",],
          axisLabel: {
            textStyle: {
              show: true,
              color: "#9eb7cd",
              fontSize: 16,
            },
          },
          axisLine: {
            lineStyle: {
              color: "#3e486c", //坐标轴线颜色
            },
          },
          axisTick: {
            lineStyle: {
              color: "#9eb7cd", //刻度线颜色
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
          type: "value",
          nameTextStyle: {
            color: "#7c829c",
            fontSize: 16,
            padding: [0, 0, 5, 0],
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
            show: true,
            lineStyle: {
              color: ["#2d3858"],
              width: 1,
              type: "solid",
            },
          },
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330],
            type: "line",
          },
        ],
      },
    };
  },
  mounted() {
    this.init();
    //这里使用getZr(),直接使用click方法点击背景不会触发
    this.chart.getZr().on('click', params => {
        const pointInPixel = [params.offsetX, params.offsetY]
        if (this.chart.containPixel('grid', pointInPixel)) {
            const currentIndex = Math.abs(this.chart.convertFromPixel(
                'grid',
                pointInPixel
            )[0])
            //这个就是当前的index下标
            // console.log(currentIndex)
            //这里就是当前的值
            // console.log(dataList[pointInGrid])
            this.$emit("getChartIndex",currentIndex)

        } else {
            console.log('点击的是背景...')
        }
    })
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
