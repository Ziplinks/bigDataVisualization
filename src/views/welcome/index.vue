<template>

<div class="big-data-bg">
    <!-- <div class="header">
      <div class="kanban">数据看板</div>
      <div class="date">2020-12-22</div>
    </div> -->
    <div class="title-name">数据看板</div>
    <div class="main-content">
      <div class="button-box flex">
        <div class="al-c cursor" :class="{'sel': activeIndex === 0}" @click="changeChart(0)">2021</div>
        <div class="al-c cursor" :class="{'sel': activeIndex === 1}" @click="changeChart(1)">2022</div>
      </div>
      <BarChart ref="BarChart" :yData="yData" class="chart-bar" />
      <LineChart class="chart-bar" />
    </div>
  </div>

  
</template>

<script>
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";

export default {
  name: "index",
  components: { BarChart, LineChart },
  data() {
    return {
      message: "The webmaster said that you can not enter this page...",
      yData:[12,23,56,89,32,12,45],
      activeIndex:0,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changeChart(tag){
      this.activeIndex = tag;
      if(tag === 0){
        this.yData = [12,23,56,89,32,12,45];
      }else{
         this.yData = [120,35,12,65,32,78,145];
      }
      //动态刷新列表
      this.$refs.BarChart.refreshChart();
    }
  },
};
</script>

<style lang="scss" scoped>
.big-data-bg {
  height: 100%;
  width: 100%;
  background: url("../../assets/images/bg.png") left top;
  .title-name{
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
    }
    .button-box{
      height: 30px;
      line-height: 30px;
      position: absolute;
      right: 50px;
      top: 70px;
      z-index: 100;
      color: #fff;
      font-size: 16px;
      >div{
        margin: 0 5px;
        border: 1px solid #fff;
        width: 70px;
      }
      .sel{
        background: #999;
      }
    }
  }
}
</style>
