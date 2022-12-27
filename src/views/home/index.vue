<template>
  <div class="big-data-bg">
    <div class="title-name">数据看板</div>
    <div class="main-content">
      <div class="button-box">
        <TabIndex :tabList="tabList" @tabChange="tabChange"></TabIndex>
      </div>

      <div class="flex">
        <div class="side-box">
          <div class="pos-r">
            <div class="flex select-box">
              <el-select
                class="w120"
                style="margin-right: 7px"
                v-model="value1"
                placeholder="请选择"
                @change="getUvCount"
              >
                <el-option
                  v-for="item in elOptions1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-select
                class="w70"
                v-model="value2"
                placeholder="请选择"
                @change="getUvCount"
              >
                <el-option
                  v-for="item in elOptions2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <Chart height="500px" :options="options2" />
          </div>
          <div class="pos-r">
            <TabIndex
              class="tbs2"
              :tabList="tabList2"
              @tabChange="tab2Change"
            ></TabIndex>
            <RankChart
              height="500px"
              :options="top10Options"
              @getChartIndex="getRankChartIndex"
            />
          </div>
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
import TabIndex from "@/components/TabIndex";
import RankChart from "@/components/RankChart";
import { getAdsTrafficStatsByChannel, getAdsDownloadTop101d } from "@/api/api";
import {
  options5,
  options4,
  options3,
  options2,
  options1,
  top10Options,
} from "./chartOptions";
export default {
  name: "index",
  components: { Chart, MapChart, PieChart, TabIndex, RankChart },
  data() {
    return {
      options1,
      options2,
      options3,
      options4,
      options5,
      top10Options,
      tabList: [
        {
          label: "日",
          value: 1,
        },
        {
          label: "周",
          value: 7,
        },
        {
          label: "月",
          value: 30,
        },
      ],
      tabList2: [
        {
          label: "数据库",
          value: "db",
        },
        {
          label: "数据表",
          value: "tbl",
        },
      ],
      top10Type: "db",
      dataList: [
        {
          name: "苹果",
          value: "56",
        },
        {
          name: "橘子",
          value: "75",
        },
        {
          name: "香蕉",
          value: "85",
        },
        {
          name: "火龙果",
          value: "78",
        },
        {
          name: "西瓜",
          value: "76",
        },
        {
          name: "椰子",
          value: "45",
        },
        {
          name: "葡萄",
          value: "100",
        },
      ],

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
      elOptions1: [
        {
          value: "uvCount",
          label: "访客人数",
        },
        {
          value: "avgDurationSec",
          label: "平均停留时长",
        },
        {
          value: "avg_page_count",
          label: "平均访问次数",
        },
      ],
      elOptions2: [
        {
          value: "1",
          label: "日",
        },
        {
          value: "7",
          label: "周",
        },
        {
          value: "30",
          label: "月",
        },
      ],
      value1: "uvCount",
      value2: "1",
    };
  },
  computed: {},
  mounted() {
    this.options5.series[0].data = this.dataList;
    this.init();
  },
  methods: {
    init() {
      this.getUvCount();
      this.getAdsDownloadTop101d();
    },
    getUvCount() {
      let params = {
        type: this.value1,
        day: this.value2,
      };
      getAdsTrafficStatsByChannel(params).then((res) => {
        if (res.data.code === 200) {
          let data = res.data.data;
          this.options2.title.text = data.title;
          this.options2.xAxis.data = data.xData;
          this.options2.yAxis.name = data.yUnit;
          this.options2.series[0].data = data.yData;
          this.options2.series[0].name =
            this.value1 === "uvCount"
              ? "访客人数"
              : this.value1 === "avgDurationSec"
              ? "平均停留时长"
              : "平均访问次数";
        }
      });
    },
    getRankChartIndex(index){
     let name = this.top10Options.xAxis.data[index]
     console.log(name)
    },
    getChartIndex(index) {
      // console.log(this.options5.series[0].data[index], index);
    },
    getAdsDownloadTop101d() {
      getAdsDownloadTop101d(this.top10Type).then((res) => {
        if (res.data.code === 200) {
          let data = res.data.data;
          this.top10Options.title.text =
            this.top10Type === "db"
              ? "最近一日数据库下载量 "
              : "最近一日数据表下载量 ";
          this.top10Options.xAxis.data = data.xData;
          this.top10Options.yAxis.name = data.yUnit;
          let arr = [];
          data.yData.forEach((v, i) => {
            let obj = {
              name: data.xData[i],
              value: v,
            };
            arr.push(obj);
          });
          this.top10Options.series[0].data = arr;
        }
      });
    },
    tab2Change(item) {
      this.top10Type = item.value;
      this.getAdsDownloadTop101d();
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
      } else if (item.value == 7) {
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
      } else if (item.value == 30) {
        this.options3.series.forEach((v, i) => {
          v.data = this.dataList3[i].data;
        });
        this.options3.xAxis.data = ["1", "3", "5", "7", "9", "11", "13"];
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
    .tbs2 {
      position: absolute;
      right: 0;
      top: 15px;
      z-index: 100;
      color: #fff;
      font-size: 16px;
    }
  }
  .select-box {
    position: absolute;
    right: 0;
    top: 13px;
    // width: 200px;
    z-index: 100;
  }
}
</style>
