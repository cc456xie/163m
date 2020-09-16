<template>

  <div class="home">
    <Header></Header>
    <div class="wrapper">
    <keep-alive exclude="Player,My,sheetlist">
         <router-view/>
    </keep-alive>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import header from '../components/header'

export default {
  name: 'Home',
  components: {
    Header: header
  },
  data () {
    return {
      phone: 17341403579,
      password: 'cc456xie',
      show: true
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  overflow: hidden;
}
  .wrapper{
    margin-top: 84px;
    width: 100%;
    height: auto;
  }
</style>
