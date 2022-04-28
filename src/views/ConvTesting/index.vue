<template>
  <div>
    <div class="back" @click="$router.push('/')">返回疫情地图</div>

    <van-tabs
      v-model="active"
      animated
      sticky
      color="#846BFF"
      title-active-color="#846BFF"
    >
      <van-tab title="核酸检测">
        <div class="tab">
          <h3>核酸检测</h3>
          <div class="goods_container">
            <Goods
              :image="test.imgUrl"
              :location="test.location"
              :price="test.price"
              :subTitle="test.subTitle"
              :title="test.title"
              v-for="test in testsData"
              :key="test.id"
            ></Goods>
          </div>
        </div>
      </van-tab>
      <van-tab title="接种点">
        <div class="tab">
          <h3>接种点</h3>
          <div class="goods_container">
            <Goods
              :image="test.imgUrl"
              :location="test.location"
              :price="test.price"
              :subTitle="test.subTitle"
              :title="test.title"
              v-for="test in testsData"
              :key="test.id"
            ></Goods>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Goods from "./components/Goods.vue";
export default {
  name: "ConvTesting",
  data() {
    return {
      active: 0,
      testsData: [],
    };
  },
  components: {
    Goods,
  },
  mounted() {
    this.getTests();
  },
  methods: {
    async getTests() {
      let res = await this.$API.reqTests();
      if (res.code == 200) {
        this.testsData = res.data;
      }
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
  background: rgba(247, 247, 247, 0.5);
  border: 1px solid #333;
  border-radius: 0.24rem;
  color: #333;
  position: absolute;
  right: 5%;
  top: 10%;
}
.tab {
  h3 {
    margin: 0.5rem 0 0 0.3rem;
  }
}
</style>