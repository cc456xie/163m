<template>
<div style="overflow: hidden;">
  <Nav :activeIndex="1"></Nav>
  <div class="hot">   
    <p class="tip">- <span>推荐榜单</span> -</p>
    <div class="better">
      <Cover v-for="item in betterlist" :id="item.id" :name="item.name" :imgUrl="item.coverImgUrl" :key="item.id"></Cover>
    </div>
    <p class="tip">- <span>官方榜单</span> -</p>
    <div class="better">
      <Cover v-for="item in officiallist" :id="item.id" :name="item.name" :imgUrl="item.coverImgUrl" :key="item.id"></Cover>
    </div>
     <p class="tip">- <span>其他榜单</span> -</p>
    <div class="better">
      <Cover v-for="item in otherlist" :id="item.id" :name="item.name" :imgUrl="item.coverImgUrl" :key="item.id"></Cover>
    </div>
  </div>
</div>
</template>

<script>
import cover from '../components/rankCover'
import nav from '../components/nav'
export default {
  name: 'hot',
  components: {
    Cover: cover,
    Nav:nav
  },
  data () {
    return {
      betterlist: [],
      officiallist: [],
      otherlist: []
    }
  },
  async created () {
    if (this.$route.params.index !== 1) { this.$router.push('/') }
    console.log('123')
    const res = await this.$http.get('/toplist')
    console.log(res)
    // this.toplist = res.data.list
    // console.log(this.toplist)
    res.data.list.forEach(item => {
      if (item.userId === 1) {
        if (item.ToplistType) {
          this.betterlist.push(item)
        } else {
          this.officiallist.push(item)
        }
      } else {
        this.otherlist.push(item)
      }
    })
  }
}
</script>

<style lang="less" scoped>
@base:#d43c33;
.hot{
    margin-top: 40px;
    overflow: hidden;
  width: 100%;
  padding:5px 4%;
  background-color: #fff;
  .tip{
    text-align: center;
    padding:10px 0;
    color: @base;
    font-size: 14px;
    font-weight: 600;
    span{
      color: #444;
    }
  }
  .better{
      display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
}
.container{
width: 33.3%;
}
</style>
