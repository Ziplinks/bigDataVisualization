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
          text: '饼图示例',
          subtext: '',
          left: 'center',
          textStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight:500,
          },
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 40,
          textStyle: {
            color: "#9eb7cd",
            fontSize: 14,
          },
        },
        series: [
          {
            name: '指标名称',
            type: 'pie',
            center:['50%','60%'],//饼图位置
            radius: ['30%', '45%'],//饼图大小
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            label:{
               formatter:  '{b}\n {c}  {d}%',
               color: "#9eb7cd",
               fontSize: 14, 
            },
          }
        ]
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
    assignOptions(option) {
      return _.merge(this.defaultOptions, option);
    },
  },
};
</script>

<style scoped>
</style>
