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
            color: "#d9ecfa",
            fontSize: 26,
          },
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        grid: {
          left: "10%",
          right: "5%",
          top: "20%",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(this.$refs.chartBox);
      this.chart.setOption(this.assignOptions(this.options));
      window.addEventListener("resize", this.chart.resize);
    },
    assignOptions(option){
      let op = Object.assign({},this.defaultOptions, option);
      return op
    }
  },
};
</script>

<style scoped>
</style>
