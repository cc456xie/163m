// 搜索结果歌曲组件
<template>
    <div class="nav">
            <div @click="changeIndex(0)" class="nav-item">
                <div :class="['text',activeIndex === 0?'active':'']">推荐音乐</div>
            </div>
             <div @click="changeIndex(1)" class="nav-item">
                <div :class="['text',activeIndex === 1?'active':'']">排行榜</div>
            </div>
             <div @click="changeIndex(2)" class="nav-item">
                <div :class="['text',activeIndex === 2?'active':'']">搜索</div>
            </div>
            <div @click="changeIndex(3)" class="nav-item">
                <div :class="['text',activeIndex === 3?'active':'']">我的</div>
            </div>
    </div>
</template>

<script>
export default {
  props: {
     activeIndex:Number || String
  },
  data () {
    return {
    activeIndexs:this.activeIndex
    }
  },
  methods: {
    changeIndex (index) {
      this.activeIndexs = index
      if (this.activeIndexs === 0) { this.$router.push('/') } else if (this.activeIndexs === 1) { this.$router.push({ name: 'Hot', params: { index: 1 } }) } else if (this.activeIndexs === 2) { this.$router.push({ name: 'Search', params: { index: 2 } }) } else { this.$router.push({ name: 'My', params: { index: 3 } }) }
    }
  },
  mounted(){
  }

}
</script>

<style lang="less" scoped>
    .nav{
        position: fixed;
        height: 40px;
        display: flex;
        z-index: 999;
        width: 100%;
        background-color: white;
        .nav-item{
            flex: 1;
            text-align: center;
            .text{
                position: relative;
                display: inline-block;
                max-width: 100%;
                height: 100%;
                padding: 0 5px;
                box-sizing: border-box;
                color: #333;
                font-size: 15px;
                line-height: 40px;
            }
        }
    }
.active{
         border-bottom: 1.5px solid #d43c33;
         color: #d43c33 !important;
        }
</style>
        
        
