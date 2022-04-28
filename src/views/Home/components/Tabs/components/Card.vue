<template>
  <div>
    <template v-if="imgUrl != ''">
      <div class="card_container" style="grid-template-columns: 33% 66%">
        <div class="image">
          <img :src="imgUrl" alt="" width="100%" />
        </div>
        <div class="content_container">
          <h3 class="title">
            <slot name="title"></slot>
          </h3>
          <p class="content">
            <slot name="content"></slot>
          </p>
          <div class="detail">
            <a>查看详情</a>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="card_container">
        <div class="content_container">
          <h3 class="title">
            <slot name="title"></slot>
          </h3>
          <p class="content">
            <slot name="content"></slot>
          </p>
          <div class="detail">
            <a>查看详情</a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["imgUrl"],
};
</script>

<style lang="less" scoped>
.card_container {
  padding: 0.5rem 0.3rem;
  margin-top: 0.2rem;
  display: grid;
  border: 0.01rem solid #ebebeb;
  border-radius: 0.08rem;
  box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
  .content_container{
    position: relative;
    margin-left: 0.2rem;
    .content{
      margin-top: 0.2rem;
    }
    .detail {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>