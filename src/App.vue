<template>
  <div id="app">
  <keep-alive exclude="Player,My,sheetlist,header">
    <router-view  v-if="isRouterAlive"/>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="less">
@base:#d43c33;
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body{
  font: 14px/1.5 Helvetica,sans-serif,STHeiTi;
  color: #333;
  background-color: #fcfcfd;
}
.van-dialog__confirm{
  color: @base !important;
}
.van-form{
  margin-top: 15%;
 .van-field
 {
   margin: 20px auto;
 }
 .van-button--info {
    color: #fff;
    background-color: @base;
    border: 1px solid @base;
    margin-top: 60px;
}
}
</style>
