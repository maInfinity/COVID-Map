<template>
  <div>
    <div class="back" @click="$router.push('/')">返回疫情地图</div>

    <h2>常见科室</h2>
    <div class="grid">
      <van-grid :column-num="3" :gutter="10">
        <van-grid-item v-for="item in list" :key="item.id">
          <div>
            <img :src="item.imgUrl" width="50%" />
            <div>{{ item.room }}</div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rooms",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$API.reqRooms();
      this.list = res.data;
    },
  },
};
</script> 

<style scoped>
.back {
  text-align: center;
  padding: 0.1rem 0.2rem;
  font-size: 0.1rem;
  background: rgba(247,247,247, 0.5);
  border-radius: 0.24rem;
  border: 1px solid #333;
  color: #333;
  position: absolute;
  right: 5%;
  top: 60%;
}
.grid {
  text-align: center;
}
</style>