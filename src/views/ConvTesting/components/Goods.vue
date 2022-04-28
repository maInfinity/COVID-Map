<template>
  <div class="goods_container">
    <img :src="image" width="100%" @click="$router.push('/good')" />
    <div class="desc">
      <h4 class="van-ellipsis">{{ title }}</h4>
      <p class="van-ellipsis">{{ subTitle }}</p>
      <p class="van-ellipsis">
        <van-icon color="rgb(174, 163, 251)" name="location" />{{ location }}
      </p>
      <div class="price">￥{{ price }}</div>
      <div class="buyBtn">
        <van-button
          round
          type="info"
          size="small"
          block
          color="#1698E7"
          @click="$router.push('/good')"
          ><span style="font-weight: bolder">立即购买</span></van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  props: ["image", "location", "price", "subTitle", "title"],
};
</script>

<style lang="less" scoped>
.goods_container {
  margin: 0.5rem 0 0 0.3rem;
  width: 44%;
  float: left;
  border-radius: 0 0 5% 5%;
  background-color: white;
  .desc {
    padding: 0.2rem;
    .buyBtn {
      margin-top: 0.2rem;
    }
  }
  img {
    background-color: rgb(247, 247, 247);
  }
  p {
    color: #9a9a9a;
    margin-top: 0.1rem;
  }
  .price {
    margin-top: 0.1rem;
    color: #1698e7;
    font-weight: bolder;
  }
}
</style>