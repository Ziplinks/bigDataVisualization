<template>
  <div class="big-data-bg">
    <div class="title-name">数据看板</div>
    <div class="main-content">
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
            <Chart height="500px" :options="usageOptions" />
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
          <Chart height="500px" :options="orderPaymentOptions" />
          <PieChart height="500px" :options="options4" />
        </div>
      </div>
    </div>
    <ModuleDialog title="" :show="dialogShow" size="750px" @cancel="cancel">
      <div slot="content">
        <Chart height="500px" :options="top10DetailOptions" />
      </div>
    </ModuleDialog>
  </div>
</template>

<script>
import Chart from "@/components/BarLineChart";
import MapChart from "@/components/MapChart";
import PieChart from "@/components/PieChart";
import TabIndex from "@/components/TabIndex";
import RankChart from "@/components/RankChart";
import ModuleDialog from "@/components/ModuleDialog";
import {
  adsTrafficStatsByChannel,
  adsDownloadTop101d,
  adsDownloadTop10Detail,
  adsNewBuyerStats,
} from "@/api/api";
import {
  options4,
  usageOptions,
  orderPaymentOptions,
  top10Options,
  top10DetailOptions,
} from "./chartOptions";
export default {
  name: "index",
  components: { Chart, MapChart, PieChart, TabIndex, RankChart, ModuleDialog },
  data() {
    return {
      options4,
      orderPaymentOptions,
      usageOptions,
      top10Options,
      top10DetailOptions,
      dialogShow: false,
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
    this.init();
  },
  methods: {
    init() {
      this.getUvCount();
      this.getAdsDownloadTop101d();
      this.getAdsNewBuyerStats();
    },
    //app学习模块使用情况
    getUvCount() {
      let params = {
        type: this.value1,
        day: this.value2,
      };
      adsTrafficStatsByChannel(params).then((res) => {
        if (res.data.code === 200) {
          let data = res.data.data;
          this.usageOptions.title.text = data.title;
          this.usageOptions.xAxis.data = data.xData;
          this.usageOptions.yAxis.name = data.yUnit;
          this.usageOptions.series[0].data = data.yData;
          this.usageOptions.series[0].name =
            this.value1 === "uvCount"
              ? "访客人数"
              : this.value1 === "avgDurationSec"
              ? "平均停留时长"
              : "平均访问次数";
        }
      });
    },
    //学校排行榜点击
    getRankChartIndex(index) {
      let name = this.top10Options.xAxis.data[index];
      this.getAdsDownloadTop10Detail(name);
    },
    //关闭弹窗
    cancel() {
      this.dialogShow = false;
    },
    //学校数据表、数据库下载排行详情
    getAdsDownloadTop10Detail(schoolName) {
      let params = {
        type: this.top10Type,
        school: schoolName,
      };
      adsDownloadTop10Detail(params).then((res) => {
        if (res.data.code === 200) {
          this.dialogShow = true;
          let data = res.data.data;
          this.top10DetailOptions.title.text = data.title;
          this.top10DetailOptions.xAxis.data = data.xData;
          this.top10DetailOptions.yAxis.name = data.yUnit;
          this.top10DetailOptions.series[0].data = data.yData;
        }
      });
    },
    //数据表、数据库下载排行
    getAdsDownloadTop101d() {
      adsDownloadTop101d(this.top10Type).then((res) => {
        if (res.data.code === 200) {
          let data = res.data.data;
          this.top10Options.title.text = data.title;
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
    //最近7日下单人数/支付人数
    getAdsNewBuyerStats() {
      adsNewBuyerStats().then((res) => {
        if (res.data.code === 200) {
          let data = res.data.data;
          this.orderPaymentOptions.title.text = "最近7日下单/支付人数";
          this.orderPaymentOptions.xAxis.data = data.xData;
          this.orderPaymentOptions.yAxis.forEach((v) => {
            v.name = data.yUnit;
          });
          this.orderPaymentOptions.series = _.merge(
            this.orderPaymentOptions.series,
            data.series
          );
        }
      });
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
