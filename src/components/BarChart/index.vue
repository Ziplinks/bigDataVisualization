<template>
  <div id="main" ref="chartBox"></div>
</template>
<script>
// import { chartSize } from "@/utils/common";
export default {
  name: "index",
  props: {
    yData:{
      type:Array,
      default:[]
    }
  },
  computed: {},
  data() {
    return {
      chartInstance: "",
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chartInstance = this.$echarts.init(this.$refs.chartBox);
    this.setChartOption();
    window.addEventListener("resize", () => {
      this.refreshChart();
    });
  },
  methods: {
    // 绘制图表
    setChartOption() {
      this.chartInstance.setOption({
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
            data: this.yData,
            barWidth: 40,
            itemStyle: {
              color: "#67c",
            },
          },
          {
            name: "国内销量",
            type: "bar",
            data: this.yData,
            barWidth: 40,
            itemStyle: {
              color: "#339",
            },
          },
        ],
      });
    },
    //刷新图表
    refreshChart() {
       setTimeout(() => {
        if (!this.chartInstance) return;
        this.chartInstance.resize();
        this.setChartOption();
      }, 400);
    },
  },
};
</script>

<style scoped>
</style>
