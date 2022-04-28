<template>
  <div>
    <div class="header">
      <span>{{title}}</span>
    </div>
    <div class="map_img_container">
      <div class="map_btn">
        <div
          v-for="(btn, index) in Btn"
          :key="index"
          :class="{ active: index == currentIndex }"
          @click="swipe_change(index)"
        >
          {{ btn }}
        </div>
      </div>
      <van-swipe
        :show-indicators="false"
        ref="swipe_item"
        @change="onSwipeChange"
      >
        <template v-if="legends.length > 0">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" width="100%" />
            <img
              :src="legends[index]"
              width="100%"
              style="background-color: rgb(247, 247, 247)"
            />
          </van-swipe-item>
        </template>
        <template v-else>
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" width="100%" />
          </van-swipe-item>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: ["images", "legends", "Btn", "title"],
  methods: {
    swipe_change(index) {
      this.currentIndex = index;
      this.$refs.swipe_item.swipeTo(index);
    },
    onSwipeChange(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  border-left: 0.1rem solid #007aff;
  span {
    margin-left: 0.2rem;
  }
}
.map_img_container {
  margin-top: 0.2rem;
  .map_btn {
    margin-bottom: 0.2rem;
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
}
</style>