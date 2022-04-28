<template>
  <div class="container">
    <div class="back" @click="$router.push('/convtesting')">返回商品界面</div>

    <div class="good_info_container">
      <div class="swiper_container">
        <van-swipe @change="onChange">
          <van-swipe-item
            v-for="(image, index) in goodInfo.imgUrl"
            :key="index"
          >
            <img v-lazy="image" width="100%" />
          </van-swipe-item>
          <template slot="indicator">
            <div class="custom-indicator">
              {{ current + 1 }}/{{ totalSwiperLength }}
            </div>
          </template>
        </van-swipe>
      </div>
      <div class="good_info">
        <h2 class="price">￥{{ goodInfo.price }}</h2>
        <h2 class="title">
          {{ goodInfo.title }}
        </h2>
        <div class="subtitle">
          {{ goodInfo.subTitle }}
        </div>
        <div class="tag">
          <van-icon name="passed" color="#846BFF" /> 到店服务
          <van-icon name="passed" color="#846BFF" /> 无忧售后
          <van-icon name="passed" color="#846BFF" /> 精选机构
        </div>
      </div>
    </div>
    <div class="company_container">
      <h4>机构信息</h4>
      <van-divider :style="{ borderColor: '#DCDCDC' }"> </van-divider>
      <div class="company">
        <div class="left">
          <img :src="company.imgUrl" />
          <div class="name">
            <h3>{{ company.name }}</h3>
            <div><van-icon name="location-o" />{{ company.location }}</div>
          </div>
        </div>
        <div class="right">南昌市</div>
      </div>
      <van-divider :style="{ borderColor: '#DCDCDC' }"> </van-divider>
      <h5 style="color: #9a9a9a">查看预约时间</h5>
      <div class="appoint_time">
        <h4>-机构暂未开放排班</h4>
        <p>下单后请等待机构开放排班后，预约接种时间，</p>
        <p>若超出订单提交预约有效期系统会自动退款，敬请谅解。</p>
      </div>
    </div>
    <div class="detail_and_problems_tab_container">
      <van-tabs
        v-model="active"
        animated
        sticky
        title-active-color="#333"
        color="#846BFF"
      >
        <van-tab title="服务详情">
          <div class="service_detail_container" style="margin-bottom: 3rem">
            <div class="title">
              <van-icon name="orders-o" /><span>服务信息</span>
            </div>
            <div class="content">
              <div class="line">
                <div class="left">预约须知</div>
                <div class="right">
                  <span
                    v-for="(item, index) in serviceInfo.notice"
                    :key="index"
                  >
                    {{ item }}
                    <br />
                  </span>
                </div>
              </div>
              <div class="line">
                <div class="left">服务人群</div>
                <div class="right">
                  <span
                    v-for="(item, index) in serviceInfo.customer"
                    :key="index"
                  >
                    {{ item }}
                    <br />
                  </span>
                </div>
              </div>
              <div class="line">
                <div class="left">注意事项及禁忌</div>
                <div class="right">
                  {{ serviceInfo.stop }}
                </div>
              </div>
              <div class="line">
                <div class="left">服务程序</div>
                <div class="right">
                  {{ serviceInfo.way }}
                </div>
              </div>
              <div class="line">
                <div class="left">服务简介</div>
                <div class="right">
                  {{ serviceInfo.introduction }}
                </div>
              </div>
              <div class="line">
                <div class="left">相关品牌</div>
                <div class="right">
                  {{ serviceInfo.brand }}
                </div>
              </div>
            </div>
            <div class="service_images">
              <img
                width="100%"
                :src="imgUrl"
                v-for="(imgUrl, index) in serviceImages"
                :key="index"
              />
            </div>
          </div>
        </van-tab>
        <van-tab title="常见问题">
          <div class="problems_detail_container">
            <div class="content">
              <h2>【{{ appointProblems.title }}】</h2>
              <div>
                <span
                  v-for="(item, index) in appointProblems.problem"
                  :key="index"
                >
                  {{ item }}
                  <br />
                </span>
              </div>
            </div>
          </div>
          <div class="problems_detail_container">
            <div class="content">
              <h2>【{{ serviceProblems.title }}】</h2>
              <div>
                <span
                  v-for="(item, index) in serviceProblems.problem"
                  :key="index"
                >
                  {{ item }}
                  <br />
                </span>
              </div>
            </div>
          </div>
          <div class="problems_detail_container" style="margin-bottom: 3rem">
            <div class="content">
              <h2>【{{ paybackProblems.title }}】</h2>
              <div>
                <span
                  v-for="(item, index) in paybackProblems.problem"
                  :key="index"
                >
                  {{ item }}
                  <br />
                </span>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "GoodDetail",
  data() {
    return {
      active: 0,
      info: {},
      current: 0,
    };
  },
  computed: {
    company() {
      return this.info.company || {};
    },
    goodInfo() {
      return this.info.goodInfo || {};
    },
    problems() {
      return this.info.problems || {};
    },
    serviceDetails() {
      return this.info.serviceDetails || {};
    },
    serviceInfo() {
      return this.serviceDetails.serviceInfo || {};
    },
    serviceImages() {
      return this.serviceDetails.imgUrl || [];
    },
    appointProblems() {
      return this.problems.appointment || {};
    },
    paybackProblems() {
      return this.problems.payback || {};
    },
    serviceProblems() {
      return this.problems.service || {};
    },
    totalSwiperLength() {
      let arr = this.goodInfo.imgUrl || [];
      return arr.length;
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$API.reqGoodDetail();
      if (res.code == 200) {
        this.info = res.data;
      }
    },
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.back {
  text-align: center;
  z-index: 99;
  padding: 0.1rem 0.2rem;
  font-size: 0.1rem;
  background: rgb(255, 255, 255);
  border: 1px solid #333;
  border-radius: 0.24rem;
  color: #333;
  position: absolute;
  right: 5%;
  top: 5%;
}
.good_info_container {
  background-color: white;
  .good_info {
    padding: 0.2rem 0.5rem 0.5rem 0.5rem;
    .price {
      color: #fd5155;
    }
    .title,
    .subtitle,
    .tag {
      margin-top: 0.2rem;
    }
    .subtitle {
      color: #9a9a9a;
    }
  }
}
.company_container {
  margin-top: 0.2rem;
  padding: 0.2rem 0.5rem 0.5rem 0.5rem;
  background-color: white;
  .company {
    display: grid;
    grid-template-columns: 85% 15%;
    .left {
      img {
        width: 18%;
        border-radius: 39%;
      }
      .name {
        margin-left: 0.2rem;
        div {
          margin-top: 0.2rem;
          color: #9a9a9a;
        }
      }
      align-items: center;
      display: flex;
    }
  }
  .appoint_time {
    padding: 0.5rem;
    margin-top: 0.2rem;
    text-align: center;
    background-color: #f8f8f8;
    p {
      color: #9a9a9a;
      font-size: 0.1rem;
      margin-top: 0.2rem;
    }
  }
}
.detail_and_problems_tab_container {
  background-color: white;
  margin-top: 0.2rem;
  .service_detail_container {
    padding: 0.5rem;
    .title {
      background-color: #dcdcdc;
      color: #9a9a9a;
      font-weight: bolder;
      padding: 0.2rem;
      border-radius: 0.2rem 0.2rem 0 0;
      span {
        margin-left: 0.1rem;
      }
    }
    .content {
      .line {
        display: grid;
        grid-template-columns: 40% 60%;
        border-radius: 5%;
        .left {
          text-align: center;
          padding: 0.2rem;
          color: #9a9a9a;
          border-right: 0.05rem solid rgb(235, 235, 235);
          border-bottom: 0.05rem solid rgb(251, 251, 251);
          border-left: 0.05rem solid rgb(251, 251, 251);
        }
        .right {
          padding: 0.2rem;
          color: #333;
        }
      }
    }
    .service_images {
      margin-top: 0.5rem;
    }
  }
  .problems_detail_container {
    padding: 0.2rem;
    div {
      span {
        font-weight: bold;
        display: inline-block;
        padding: 0.1rem 0;
      }
    }
    h2 {
      color: #ff9900;
    }
  }
}
.custom-indicator {
  color: white;
  border-radius: 35%;
  position: absolute;
  right: 5%;
  bottom: 5%;
  padding: 0.1rem 0.2rem;
  background: rgba(0, 0, 0, 0.3);
}
</style>