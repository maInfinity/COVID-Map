<template>
  <div class="container">
    <div class="header">
      <img src="./images/hot.png" />
      <a>查看更多></a>
    </div>
    <div class="content" v-for="n in news" :key="n.id">
      <span class="latest">最新</span>
      <span class="latest_news">{{ n.title }}</span>
      <span>></span>
    </div>
    <div class="btn">
      <div class="btn_img">
        <img src="./images/btn1.png" @click="$router.push('/room')"/>
        <div>问医生</div>
      </div>
      <div class="btn_img">
        <van-badge :content="'hot'">
          <img src="./images/btn2.png" @click="$router.push('/convtesting')" />
        </van-badge>
        <div>核酸检测</div>
      </div>
      <div class="btn_img">
        <img src="./images/btn3.png" @click="$router.push('/guide')" />
        <div>防疫物资</div>
      </div>
      <div class="btn_img">
        <img src="./images/btn4.png" @click="$toast('还在开发中...')"/>
        <div>出行政策</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hot",
  data() {
    return {
      news: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$API.reqConv();
      if (res.code == 200) {
        this.news = res.newslist[0].news;
      }
    },
  },
};
</script>

<style scoped lang="less">
.container {
  background-color: white;
  padding: 0 0.2rem;
  border: 0.0625rem solid transparent;
}
.content {
  display: flex;
  margin: 0px auto;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  .latest {
    background-color: rgb(247, 76, 49);
    color: white;
    padding: 0.025rem;
    border-radius: 10%;
  }
  .latest_news {
    flex: 1;
    margin-left: 10px;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  border-left: 0.1rem solid rgb(65, 105, 226);
  margin: 0px auto;
  margin-top: 1.5vh;
  img {
    width: 1.2rem;
    margin-left: 0.2rem;
  }
}
.btn {
  margin: 0 auto;
  padding: 0.1rem 0;
  border-top: 2px solid rgb(247, 247, 247);
  display: flex;
  justify-content: space-around;
  .btn_img {
    text-align: center;
    img {
      width: 0.5rem;
    }
  }
}
</style>