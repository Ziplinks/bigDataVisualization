<template>

<div class="big-data-bg">
    <div class="header">
      <div class="kanban">数据看板</div>
      <div class="date">2020-12-22</div>
    </div>
    <div class="main-content">
      <div class="button-box flex">
        <div class="al-c">2021</div>
        <div class="al-c">2022</div>
      </div>
      <BarChart class="chart-bar" />
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
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.big-data-bg {
  height: 100%;
  width: 100%;
  background: url("../../assets/images/bg.png") left top;
  .header { 
    position: fixed;
    top: 0;
    right: 0;
    height: 50px;
    left: 0;
    background: #175;
    z-index: 999;
    .kanban {
      line-height: 50px;
      margin-left: 20px;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
    }
    .date {
      position: absolute;
      right: 20px;
      top: 15px;
      color: #fff;
    }
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
    }
  }
}
</style>
