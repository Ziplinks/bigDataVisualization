<template>
  <div ref="chartBox" :style="style"></div>
</template>
<script type="module">
import uploadedData from "../../assets/get/s/L7f5oCXeKgA6N7UA.json";
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
      default() {
        return {
          title: {
            text: "ECharts 入门示例",
          },
          tooltip: {},
          legend: {
            data: ["销量"],
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
        };
      },
    },
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
      };
    },
    mapData() {
      let arr = [];
      for (let key in this.geoCoordMap) {
        arr.push({
          year: "陕西",
          name: key,
          value: this.value[key] / 100,
          value1: this.value[key] / 100,
        });
      }
      return arr.sort(function sortNumber(a, b) {
        return a.value - b.value;
      });
    },
  },
  watch: {
    options: {
      handler(newVal, oldVal) {
        if (this.chart) {
          this.chart.setOption(newVal);
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
      geoGpsMap: [109.1162, 34.2004],
       geoCoordMap: {
        "江苏": [118.8062, 31.9208],
        '内蒙古': [110.3467, 41.4899],
        "辽宁": [123.1238, 42.1216],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "河南": [113.4668, 34.6234],
        "西藏": [116.3896, 39.91],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "湖南": [113.0823, 28.2568],
        "四川": [113.0823, 28.2568],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "海南": [110.3893, 19.8516]
      },
      value: {
        '江苏': 10000,
        '内蒙古': 10000,
        '辽宁': 10000,
        '陕西': 10000,
        '福建': 10000,
        '甘肃': 10000,
        '青海': 10000,
        '新疆': 10000,
        '湖北': 10000,
        '浙江': 10000,
        '河南': 10000,
        '湖南': 10000,
        '云南': 10000,
        '广东': 10000,
        '海南': 10000,
        '西藏': 10000,
      },
      colors: "#f9b207",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(this.$refs.chartBox);
      this.$echarts.registerMap("china", uploadedData);
      let options = {
        backgroundColor: "transparent",
        geo: {
          show: true,
          map: "china",
          roam: true,
          zoom: 1,
          center: [101.4038, 36.8207],
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
              shadowColor: "rgba(128, 217, 248, 1)",
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2, //地图边阴影 
              shadowOffsetY: 2,
              shadowBlur: 10,
            },
            emphasis: {
              areaColor: "#389BB7",
              borderWidth: 0,
            },
          },
        },
        series: [
          //地图？
          {
            type: "map",
            map: "china",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#FFFFFF",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: false,
          },
          //地图点的动画效果
          {
            //  name: 'Top 5',
            type: "effectScatter",
            coordinateSystem: "geo",
            data: this.convertData(
              this.mapData
                .sort((a, b) => {
                  return b.value - a.value;
                })
                .slice(0, 20)
            ),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: this.colors,
                shadowBlur: 10,
                shadowColor: this.colors,
              },
            },
            zlevel: 1,
          },
          //地图线的动画效果
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 3, //图标大小
            },
            lineStyle: {
              normal: {
                color: this.colors,
                width: 0.1, //尾迹线条宽度
                opacity: 0.5, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
              },
            },
            data: this.convertToLineData(this.mapData, this.geoGpsMap),
          },
        ],
      };

      this.chart.setOption(options);
      window.addEventListener("resize", this.chart.resize);
    },
    convertData(data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    },
    convertToLineData(data, gps) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let dataItem = data[i];
        let toCoord = this.geoCoordMap[dataItem.name];

        let fromCoord = gps;

        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord,
              value: dataItem.value,
            },
            {
              coord: toCoord,
            },
          ]);
        }
      }
      return res;
    },
  },
};
</script>

<style scoped>
</style>
