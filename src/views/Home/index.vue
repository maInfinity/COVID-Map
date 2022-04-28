<template>
  <div>
    <Header></Header>
    <Hot></Hot>
    <Tabs></Tabs>
    <!-- <Map></Map> -->
  </div>
</template>

<script>
import Header from './components/Header'
import Hot from './components/Hot'
import Tabs from './components/Tabs'
export default {
    name: 'Home',
    components:{
      Header,
      Hot,
      Tabs,
    }
}
</script>

<style>

</style>