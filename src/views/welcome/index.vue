<template>
  <div class="big-data-bg">
    <div class="title-name">数据看板</div>
    <div class="main-content">
      <div class="button-box flex">
        <div
          class="al-c cursor"
          :class="{ sel: activeIndex === 0 }"
          @click="changeChart(0)"
        >
          2021
        </div>
        <div
          class="al-c cursor"
          :class="{ sel: activeIndex === 1 }"
          @click="changeChart(1)"
        >
          2022
        </div>
      </div>
      <Chart height="515px" width="1920px" :options="options1" />
      <div class="flex">
        <Chart height="515px" width="960px" :options="options2" />
        <Chart height="515px" width="960px" :options="options3" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import { options3,options2, options1 } from "./chartOptions";
export default {
  name: "index",
  components: {Chart },
  data() {
    return {
      activeIndex: 0,
      options1,
      options2,
      options3,

      dataList1: [
        {
          data: [12, 15, 16, 12, 48, 56, 35],
        },
        {
          data: [77, 65, 32, 25, 24, 69, 85],
        },
      ],
      xAxisData:["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","帽子"],
      dataList2: [
        {
          data: [12, 45, 67, 90, 45, 63, 19],
        },
        {
          data: [312, 145, 567, 190, 145, 563, 419],
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.options1.series.forEach((v, i) => {
        v.data = this.dataList1[i].data;
    });
    this.options1.xAxis.data = this.xAxisData;
  },
  methods: {
    changeChart(tag) {
      this.activeIndex = tag;
      if (tag === 0) {
        this.options1.series.forEach((v, i) => {
          v.data = this.dataList1[i].data;
        });
        this.options1.xAxis.data = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","帽子"];
      } else {
        this.options1.series.forEach((v, i) => {
          v.data = this.dataList2[i].data;
        });
        this.options1.xAxis.data = ["衬衫2", "羊毛衫2", "雪纺衫2", "裤子2", "高跟鞋2", "袜子2","帽子2"];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.big-data-bg {
  height: 100%;
  width: 100%;
  background: url("../../assets/images/bg.png") left top;
  .title-name {
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    color: #fff;
    font-size: 40px;
    font-weight: 700;
  }
  .main-content {
    height: 100%;
    width: 100%;
    padding-top: 50px;
    .chart-bar {
      height: 515px;
      width: 1920px;
      &.l,
      &.r {
        flex: 1;
      }
    }
    .button-box {
      height: 30px;
      line-height: 30px;
      position: absolute;
      right: 50px;
      top: 70px;
      z-index: 100;
      color: #fff;
      font-size: 16px;
      > div {
        margin: 0 5px;
        border: 1px solid #fff;
        width: 70px;
      }
      .sel {
        background: #999;
      }
    }
  }
}
</style>
