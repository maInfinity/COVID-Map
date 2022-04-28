<template>
  <div>
    <div class="back" @click="$router.push('/')">返回疫情地图</div>
    <div class="logo">
      <img src="./images/bg.png" width="100%" />
    </div>
    <div class="content">
      <div class="nav_tab">
        <div
          v-for="(item, index) in navBtn"
          :key="index"
          class="nav_btn"
          :class="{ active: currentIndex == index }"
          @click="changeGuide(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="guide">
        <img
          :src="imgUrl"
          v-for="(imgUrl, index) in guideImages"
          :key="index"
          width="100%"
          v-show="currentIndex == index"
        />
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-button type="danger" text="抗疫物资购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "Guide",
  data() {
    return {
      navBtn: ["消毒剂", "口罩", "洗手液", "温度计"],
      guideImages: [
        "https://s1.ax1x.com/2022/04/27/Lbo2fU.png",
        "https://s1.ax1x.com/2022/04/27/LbogYT.png",
        "https://s1.ax1x.com/2022/04/27/LbockV.png",
        "https://s1.ax1x.com/2022/04/27/LboyT0.png",
      ],
      currentIndex: 0,
    };
  },
  methods: {
    changeGuide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.back {
  text-align: center;
  padding: 0.1rem 0.2rem;
  font-size: 0.1rem;
  background: rgba(19, 15, 133, 0.5);
  border-radius: 0.24rem;
  color: white;
  position: absolute;
  left: 5%;
  top: 2%;
}
.logo {
  background-color: #3343ff;
}
.bottom_buy {
  background-color: #3343ff;
  padding: 0.2rem 0;
  position: fixed;
  bottom: 0;
  * {
    display: block;
  }
}
.content {
  background-color: #3343ff;
  height: 150vh;
  .guide {
    width: 90%;
    margin: 0.2rem auto;
  }
  .nav_tab {
    display: grid;
    width: 90%;
    margin: auto;
    padding-top: 0.2rem;
    grid-template-columns: 25% 25% 25% 25%;
    .nav_btn {
      margin-left: 0.2rem;
      text-align: center;
      background-color: hsla(0, 0%, 100%, 0.26);
      color: white;
      border-radius: 6%;
      padding: 0.1rem 0;
    }
    .nav_btn:first-child {
      margin: 0;
    }
    .active {
      background-color: #f78207;
    }
  }
}
</style>