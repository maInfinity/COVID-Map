<template>
  <div style="margin-top: 0.2rem">
    <van-tabs
      v-model="active"
      color="transparent"
      background="#E6EDFF"
      title-active-color="#4169E2"
      sticky
      animated
    >
      <van-tab title-class="tabs" title="地区风险">
        <div class="tab_container">
          <div class="header">
            <span>近期疫情分布</span>
            <a>截至北京时间{{ modifyTime }}</a>
          </div>
          <div class="middle">
            <span
              >高风险地区<span>{{ highDangerCount }}</span
              >个 中风险地区<span>{{ midDangerCount }}</span
              >个</span
            >
            <a>查看全部 ></a>
          </div>
          <div class="footer">
            <table cellspacing="0">
              <tr class="tr_header">
                <td>地区</td>
                <td>现存确诊</td>
                <td>风险地区</td>
                <td>疫情</td>
              </tr>
              <tr
                class="tr_content"
                v-for="list in show_todayDetailList"
                :key="list.locationId"
              >
                <td>{{ list.provinceName }}</td>
                <td>{{ list.currentConfirmedNum }}</td>
                <td>{{ list.dangerAreas.length }}</td>
                <td><a style="font-weight: bolder">详情></a></td>
              </tr>
            </table>
          </div>
          <van-divider></van-divider>
          <div class="map">
            <Swiper
              :images="map_images"
              :legends="map_legends"
              :Btn="mapBtn"
              title="国内疫情地图"
            ></Swiper>
          </div>
        </div>
      </van-tab>
      <van-tab title-class="tabs" title="国内数据">
        <div class="tab_container">
          <div class="header" style="border: none">
            <span style="color: rgb(153, 153, 153)"
              >截至北京时间{{ modifyTime }}</span
            >
            <div class="data_desc_btn" @click="dataDescription">数据说明</div>
          </div>
          <div class="grid">
            <div>
              <p>较昨日<span class="color1">+5708</span></p>
              <p class="color1">{{ todayStatictic.confirmedNum }}</p>
              <p>现存确诊</p>
            </div>
            <div>
              <p>
                较昨日<span class="color2">{{ externalConfirmedIncr }}</span>
              </p>
              <p class="color2">{{ todayStatictic.externalConfirmedNum }}</p>
              <p>境外输入</p>
            </div>
            <div>
              <p>
                较昨日<span class="color3">{{ asymptomaticIncr }}</span>
              </p>
              <p class="color3">{{ todayStatictic.asymptomaticNum }}</p>
              <p>现存无症状</p>
            </div>
            <div>
              <p>
                较昨日<span class="color4">{{ confirmedIncr }}</span>
              </p>
              <p class="color4">
                {{
                  todayStatictic.confirmedNum +
                  todayStatictic.curedNum +
                  todayStatictic.deadNum
                }}
              </p>
              <p>累计确诊</p>
            </div>
            <div>
              <p>
                较昨日<span class="color5">{{ deadIncr }}</span>
              </p>
              <p class="color5">{{ todayStatictic.deadNum }}</p>
              <p>累计死亡</p>
            </div>
            <div>
              <p>
                较昨日<span class="color6">{{ curedIncr }}</span>
              </p>
              <p class="color6">{{ todayStatictic.curedNum }}</p>
              <p>累计治愈</p>
            </div>
          </div>
          <img
            style="margin-top: 0.2rem"
            src="./images/文章.png"
            width="100%"
          />
          <van-divider></van-divider>
          <Swiper
            :images="charts_images"
            :legends="[]"
            :Btn="charts_btn"
          ></Swiper>
        </div>
      </van-tab>
      <van-tab title-class="tabs" title="全球数据">
        <div class="tab_container">
          <div class="header" style="border: none">
            <span style="color: rgb(153, 153, 153)"
              >截至北京时间{{ modifyTime }}</span
            >
            <div class="data_desc_btn" @click="dataDescription">数据说明</div>
          </div>
          <div class="grid" style="grid-template-columns: 25% 25% 25% 25%">
            <div>
              <p>昨日<span class="color1">+5708</span></p>
              <p class="color1">{{ todayStatictic.confirmedNum }}</p>
              <p>现存确诊</p>
            </div>
            <div>
              <p>
                昨日<span class="color4">{{ confirmedIncr }}</span>
              </p>
              <p class="color4">
                {{
                  todayStatictic.confirmedNum +
                  todayStatictic.curedNum +
                  todayStatictic.deadNum
                }}
              </p>
              <p>累计确诊</p>
            </div>
            <div>
              <p>
                昨日<span class="color5">{{ deadIncr }}</span>
              </p>
              <p class="color5">{{ todayStatictic.deadNum }}</p>
              <p>累计死亡</p>
            </div>
            <div>
              <p>
                昨日<span class="color6">{{ curedIncr }}</span>
              </p>
              <p class="color6">{{ todayStatictic.curedNum }}</p>
              <p>累计治愈</p>
            </div>
          </div>
          <van-divider></van-divider>
          <div class="header">
            <span>重点国家疫情数据</span>
          </div>
          <div class="foreign">
            <div class="foreign_btn">
              <div
                v-for="(btn, index) in foreign_btn"
                :key="index"
                :class="{ active: index == foreignCurrentIndex }"
                @click="changeForeignTableSort(index)"
              >
                {{ btn }}
              </div>
            </div>
            <template v-if="more == 0">
              <table cellspacing="0">
                <tr class="tr_header">
                  <td>地区</td>
                  <td>累计确诊</td>
                  <td>累计死亡</td>
                  <td>排序</td>
                </tr>
                <tr
                  class="tr_content"
                  v-for="(list, index) in foreign_list"
                  :key="index"
                >
                  <td>{{ list.areaName }}</td>
                  <td>{{ list.confirmedNum || 0 }}</td>
                  <td>{{ list.deadNum || 0 }}</td>
                  <td>{{ index + 1 }}</td>
                </tr>
              </table>
            </template>
            <template v-else>
              <table cellspacing="0">
                <tr class="tr_header">
                  <td>地区</td>
                  <td>累计确诊</td>
                  <td>累计死亡</td>
                  <td>排序</td>
                </tr>
                <tr
                  class="tr_content"
                  v-for="(list, index) in more_foreign_list"
                  :key="index"
                >
                  <td>{{ list.areaName }}</td>
                  <td>{{ list.confirmedNum || 0 }}</td>
                  <td>{{ list.deadNum || 0 }}</td>
                  <td>{{ index + 1 }}</td>
                </tr>
              </table>
            </template>
            <div v-if="more == 0" class="more" @click="checkMore">
              展开更多v
            </div>
            <div v-else class="more" @click="checkLess">收起更多^</div>
          </div>
        </div>
      </van-tab>
      <van-tab title-class="tabs" title="新冠疫苗">
        <div class="tab_container">
          <Card v-for="mock in mockList" :key="mock.id" :imgUrl="mock.imgUrl">
            <template v-slot:content>
              {{ mock.content }}
            </template>
            <template v-slot:title>
              {{ mock.title }}
            </template>
          </Card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import moment from "moment";
import Card from "./components/Card";
export default {
  name: "Tabs",
  data() {
    return {
      conv1: [],
      conv2: {},
      conv3: [],
      active: 0,
      collapseNames: [],
      map_images: [
        "https://s1.ax1x.com/2022/04/25/LTA3pd.png",
        "https://s1.ax1x.com/2022/04/25/LTAQte.png",
        "https://s1.ax1x.com/2022/04/25/LTAMkD.png",
      ],
      map_legends: [
        "https://s1.ax1x.com/2022/04/25/LTAuTO.png",
        "https://s1.ax1x.com/2022/04/25/LTAlfH.png",
        "https://s1.ax1x.com/2022/04/25/LTAuTO.png",
      ],
      mapBtn: ["现存确诊", "风险地区", "累计确诊"],
      charts_images: [
        "https://s1.ax1x.com/2022/04/25/LTZfN8.png",
        "https://s1.ax1x.com/2022/04/25/LTZ59g.png",
        "https://s1.ax1x.com/2022/04/25/LTZWAf.png",
        "https://s1.ax1x.com/2022/04/25/LTZ2HP.png",
        "https://s1.ax1x.com/2022/04/25/LTZh4S.png",
      ],
      charts_btn: [
        "新增确诊",
        "新增境外输入",
        "累计境外输入",
        "现存确诊",
        "累计确诊",
      ],
      foreign_btn: ["累计确诊", "累计死亡"],
      foreignCurrentIndex: 0,
      more: 0,
      mockList: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.getData();
    this.getData2();
    this.getData3();
    this.mockData();
  },
  methods: {
    async getData() {
      let res = await this.$API.reqConv();
      if (res.code == 200) {
        this.conv1 = res.newslist[0];
      }
    },
    async getData2() {
      let res = await this.$API.reqConv2();
      if (res.showapi_res_code == 0) {
        this.conv2 = res.showapi_res_body;
      }
    },
    async getData3() {
      let res = await this.$API.reqConvForeign();
      if (res.showapi_res_code == 0) {
        this.conv3 = res.showapi_res_body.foreignList;
        this.conv3.sort((b, a) => a.confirmedNum - b.confirmedNum);
      }
    },
    async mockData() {
      let res = await this.$API.reqArticles();
      if (res.code == 200) {
        this.mockList = res.data;
      }
    },
    dataDescription() {
      this.$dialog
        .alert({
          title: "数据说明",
          message:
            "1. 数据来源：<br>来自国家卫健委、各省市区卫健委、各省市区政府、港澳台官方渠道公开数据；<br><br>2. 实时数据统计原则：<br>a) 每日上午优先将全国数据与国家卫健委公布数据对齐（此时各省市数据尚未及时更新，会出现全国数据大于各省份合计数的情况）。<br>b) 当各省公布数据总和大于国家公布数据时，则全国数据切换为各省合计数。<br>c)「较昨日+」的数据使用当前国家总数减去国家卫健委公布的前一日数据，这个数值会根据实时数据发生变化。<br>d) 疑似数据「较昨日+」因为会有转确诊与排除疑似两种情况，因此只采用国家每日公布的新增疑似数据，而不是两日的差异。<br><br>3. 疫情趋势图：全国数据使用国家卫健委公布的截至前一日 24:00 数据，湖北数据使用湖北卫健委公布的截至前一日 24:00 数据，每日更新一次。<br><br>4. 检查阳性并不等于确诊病例，还有一部分被纳入无症状感染者。<br><br>5. 疑似数据因各省份未发布明细数据，目前仅同步全国总数，暂不呈现分省疑似病例。<br><br>6. 治愈数据来源于各个省市区县政府官方微博和官方媒体，每日会有多次更新，更新速度快于其他数据。<br><br>7.海外数据说明：<br>a) 海外实时数据来源：国内权威媒体（如央视新闻、人民日报等）、海外各地卫生部门官方网站和主流媒体。<br>b) 海外数据较昨日：使用实时数据与北京时间上午 10:00 数据做差值。<br>c) 海外趋势图说明：3 月 19 日之前使用 WHO 每日公布的数据；3 月 19 日由于 WHO 中美国数据、伊朗数据更新停滞，使用平台北京时间 10:00 的数据进行趋势图制作。<br>d) 国外疫情数据中的「昨日+」指的是国外或者该国数据在北京时间前一个 8:00 与在前一个 8:00 之间的差值，也就是北京时间的「昨日」国外或者该国新增数据。<br><br>8. 由于划分标准不同，风险地区面数据统计不含港澳台地区。<br><br>9. 丁香医生团队全力以赴提供权威、准确、及时的疫情数据，如有任何疑问，欢迎通过微信搜索「丁香医生 +」留言反馈。",
          messageAlign: "left",
        })
        .then(() => {
          // on close
        });
    },
    changeForeignTableSort(index) {
      this.foreignCurrentIndex = index;
      if (index == 0) {
        this.conv3.sort((b, a) => a.confirmedNum - b.confirmedNum);
      } else {
        this.conv3.sort((b, a) => a.deadNum - b.deadNum);
      }
    },
    checkMore() {
      this.more = 1;
    },
    checkLess() {
      this.more = 0;
    },
  },
  computed: {
    desc() {
      return this.conv1.desc || {};
    },
    todayDetailList() {
      return this.conv2.todayDetailList || [];
    },
    todayStatictic() {
      return this.conv2.todayStatictic || {};
    },
    modifyTime() {
      let time_point = this.desc.modifyTime;
      return moment(time_point).format("YYYY-MM-DD HH:mm:ss").valueOf();
    },
    highDangerCount() {
      return this.desc.highDangerCount;
    },
    midDangerCount() {
      return this.desc.midDangerCount;
    },
    show_todayDetailList() {
      return this.todayDetailList.filter((item) => {
        return item.currentConfirmedNum > 0;
      });
    },
    externalConfirmedIncr() {
      if (this.todayStatictic.externalConfirmedIncr > 0) {
        return "+" + this.todayStatictic.externalConfirmedIncr;
      } else {
        return "-" + this.todayStatictic.externalConfirmedIncr;
      }
    },
    asymptomaticIncr() {
      if (this.todayStatictic.asymptomaticIncr > 0) {
        return "+" + this.todayStatictic.asymptomaticIncr;
      } else {
        return "-" + this.todayStatictic.asymptomaticIncr;
      }
    },
    confirmedIncr() {
      if (this.todayStatictic.confirmedIncr > 0) {
        return "+" + this.todayStatictic.confirmedIncr;
      } else {
        return "-" + this.todayStatictic.confirmedIncr;
      }
    },
    deadIncr() {
      if (this.todayStatictic.deadIncr > 0) {
        return "+" + this.todayStatictic.deadIncr;
      } else {
        return "-" + this.todayStatictic.deadIncr;
      }
    },
    curedIncr() {
      if (this.todayStatictic.curedIncr > 0) {
        return "+" + this.todayStatictic.curedIncr;
      } else {
        return "-" + this.todayStatictic.curedIncr;
      }
    },
    foreign_list() {
      return this.conv3.slice(0, 10);
    },
    more_foreign_list() {
      return this.conv3.slice(0, 20);
    },
  },
};
</script>

<style>
.van-tab--active {
  background: white;
}
</style>

<style lang="less" scoped>
.tab_container {
  background-color: white;
  border: 1px solid transparent;
  padding: 0 0.2rem;
  .header {
    border-left: 0.1rem solid #007aff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5vh;
    .data_desc_btn {
      background-color: rgb(246, 246, 246);
      border-radius: 10%;
      color: rgb(148, 150, 125);
      padding: 0.1rem 0.2rem;
    }
    span {
      margin-left: 0.2rem;
    }
    a {
      color: rgb(153, 153, 153);
      font-size: 0.01rem;
      margin-right: 3px;
    }
  }
  .middle {
    border: 1px solid rgb(236, 236, 236);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5vh;
    padding: 2%;
    a {
      margin-right: 0.5vw;
    }
  }
  .footer {
    table {
      margin-top: 0.2rem;
      width: 100%;
      text-align: center;
      .tr_header {
        background-color: #e3e7f7;
        td {
          padding: 0.1rem 0;
          font-weight: bolder;
        }
        td:nth-child(2) {
          background-color: #e69a8d;
        }
        td:nth-child(3) {
          background-color: #f3bab0;
        }
        td:nth-child(4) {
          background-color: #b4c0d5;
        }
      }
      .tr_content {
        background: #f7f7f7;
        td:first-child {
          width: 20%;
        }
        td {
          padding: 0.1rem 0;
        }
      }
    }
  }
  .map {
    margin-top: 2.5vh;
  }
  .grid {
    display: grid;
    margin-top: 0.2rem;
    text-align: center;
    grid-template-columns: 33.33% 33.33% 33.33%;
    border: 0.01rem solid #ebebeb;
    border-radius: 0.08rem;
    box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
    div {
      padding: 0.1rem 0;
      width: 100%;
      .color1 {
        color: rgb(247, 76, 49);
      }
      .color2 {
        color: rgb(247, 130, 7);
      }
      .color3 {
        color: rgb(162, 90, 78);
      }
      .color4 {
        color: rgb(174, 33, 44);
      }
      .color5 {
        color: rgb(93, 112, 146);
      }
      .color6 {
        color: rgb(40, 183, 163);
      }
      p {
        font-weight: bolder;
      }
      p:first-child {
        color: #666;
      }
      p:nth-child(2) {
        font-size: 0.3rem;
      }
      p:last-child {
        color: #333;
      }
    }
  }
  .foreign {
    table {
      margin-top: 0.2rem;
      width: 100%;
      text-align: center;
      .tr_header {
        background-color: #e3e7f7;
        td {
          padding: 0.1rem 0;
          font-weight: bolder;
        }
        td:nth-child(2) {
          background-color: #e69a8d;
        }
        td:nth-child(3) {
          background-color: #f3bab0;
        }
        td:nth-child(4) {
          background-color: #b4c0d5;
        }
      }
      .tr_content {
        background: #f7f7f7;
        td:first-child {
          width: 20%;
        }
        td {
          padding: 0.1rem 0;
        }
      }
    }
    .foreign_btn {
      div {
        margin-left: 0.1rem;
        margin-top: 0.1rem;
        display: inline-block;
        padding: 0.1rem;
        background-color: rgb(247, 247, 247);
      }
      .active {
        background-color: #f1f5ff;
        color: #4169e2;
      }
    }
    .more {
      text-align: center;
      color: #4169e2;
      margin-top: 0.2rem;
    }
  }
}
</style>