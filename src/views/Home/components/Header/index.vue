<template>
  <div class="header_container">
    <span class="alread_seen">4,683,997,110 人次已浏览</span>
  </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
.alread_seen{
  position: absolute;
  color:white;
  font-size: 0.1rem;
  left:6%;
  bottom: 10%;
}
.header_container{
  position:relative;
  height: 2.5rem;
  background-image: url('./images/background.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>