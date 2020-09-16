<template>
<div style="overflow:hidden;">
  <Nav :activeIndex="3"></Nav>
  <div class="my">
    <ul v-if="myList">
        <li v-for="item in myList" @click=" $router.push({path:'/sheet', query:{id:item.id}})" :key="item.id">
        <img :src="item.coverImgUrl" alt="cover">
        <div class="content">
        <p>{{item.name}}</p>
        <span>{{item.creator.nickname}}</span>
        </div>
        </li>
    </ul>
  </div>
</div>
</template>

<script>
import nav from '../components/nav'

export default {
  name: 'My',
  components:{
    Nav:nav
  },
  async created () {
    if (this.$route.params.index !== 3) { this.$router.push('/') }
    console.log(this.$store.getters.userId)
    this.getUserList()
  },
  methods: {
    async getUserList () {
      this.myList = []
      const res = await this.$http.get('/user/playlist?uid=' + this.$store.getters.userId + '&&timestamp=' + new Date().getTime())
      console.log(res)
      if (res.status !== 200) return
      this.myList = res.data.playlist
    }
  },
  data () {
    return {
      myList: [],
      id: 0
    }
  },
  computed: {
    idData () {
      return this.$store.state.id
    }
  },
  // 监听执行
  watch: {
    idData (val, old) {
      if (val !== old) {
        this.getUserList()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my{
margin-top: 40px;
}
ul{
  li{
    display: flex;
    padding: 6px 10px;
    border-bottom: 1px solid rgba(180,180,180,.1);
  }
  img{
    width: 60px;
    height: 60px;
    margin-right: 5px;
  }
  .content{
    flex: 1;
    padding: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
      p{
    font-size: 16px;
    color: #333;
    font-weight: 400;
  }
  span{
    font-size: 10px;
    color: #888;
    display: block;
    font-weight: 200;
  }
  }
}
</style>