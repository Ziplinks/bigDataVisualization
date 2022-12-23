<template>
  <div class="big-data-bg">
    <div class="title-name">数据看板</div>
    <div class="main-content">
      <div class="button-box">
         <TabIndex :tabList="tabList" @tabChange="tabChange"></TabIndex>
      </div>
     
      <div class="flex">
        <div class="side-box">
          <Chart height="500px" :options="options5" @getChartIndex="getChartIndex" />
          <Chart height="500px" :options="options2" />
        </div>
        <MapChart class="flex-1" height="1030px" />
        <div class="side-box">
          <Chart height="500px" :options="options3" />
          <PieChart height="500px" :options="options4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/BarLineChart";
import MapChart from "@/components/MapChart";
import PieChart from "@/components/PieChart";
import TabIndex from "@/components/TabIndex"
import {options5, options4, options3, options2, options1 } from "./chartOptions";
export default {
  name: "index",
  components: { Chart, MapChart, PieChart, TabIndex },
  data() {
    return {
      options1,
      options2,
      options3,
      options4,
      options5,
      tabList:[{
        label:"日",
        value:1
      },{
        label:"周",
        value:7
      },{
        label:"月",
        value:30
      },],
      dataList: [{
          name: '苹果',
          value: '56'
      }, {
          name: '橘子',
          value: '75'
      }, {
          name: '香蕉',
          value: '85'
      }, {
          name: '火龙果',
          value: '78'
      }, {
          name: '西瓜',
          value: '76'
      }, {
          name: '椰子',
          value: '45'
      }, {
          name: '葡萄',
          value: '100'
      }],

      dataList1: [
        {
          data: [12, 15, 16, 12, 48, 56, 35],
        },
        {
          data: [77, 65, 32, 25, 24, 69, 85],
        },
      ],
      xAxisData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "帽子"],
      dataList2: [
        {
          data: [12, 45, 67, 90, 45, 63, 19],
        },
        {
          data: [312, 145, 567, 190, 145, 563, 419],
        },
      ],
       dataList3: [
        {
          data: [112, 415, 617, 910, 415, 613, 119],
        },
        {
          data: [312, 745, 567, 190, 545, 563, 319],
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.options5.series[0].data = this.dataList
  },
  methods: {
    getChartIndex(index){
      console.log(this.options5.series[0].data[index])
    },
    tabChange(item) {
      if (item.value == 1) {
        this.options3.series.forEach((v, i) => {
          v.data = this.dataList1[i].data;
        });
        this.options3.xAxis.data = [
          "衬衫",
          "羊毛衫",
          "雪纺衫",
          "裤子",
          "高跟鞋",
          "袜子",
          "帽子",
        ];
      } else if(item.value == 7){
        this.options3.series.forEach((v, i) => {
          v.data = this.dataList2[i].data;
        });
        this.options3.xAxis.data = [
          "衬衫2",
          "羊毛衫2",
          "雪纺衫2",
          "裤子2",
          "高跟鞋2",
          "袜子2",
          "帽子2",
        ];
      }else if(item.value == 30){
         this.options3.series.forEach((v, i) => {
          v.data = this.dataList3[i].data;
        });
        this.options3.xAxis.data = [
          "1",
          "3",
          "5",
          "7",
          "9",
          "11",
          "13",
        ];
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
    .side-box {
      width: 500px;
      position: relative;
      margin-top: 30px;
    }
    .button-box {
      position: absolute;
      right: 50px;
      top: 70px;
      z-index: 100;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
