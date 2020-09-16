// 搜索结果歌曲组件
<template>
	<div>
        <router-link class="song" :to="{path:'/play', query:{id:id}}">
            <div class="content" >
                <div class="name" ref="name"></div>
                <div class="art" ref="art"><i v-if="ftype !== 0"></i></div>
             </div>
             <div class="playWrapper">
                 <div class="playBtn"></div>
             </div>
        </router-link>
	</div>
</template>

<script>
export default {
  props: {
    name: String,
    ftype: Number,
    artists: Array,
    album: Object,
    id: Number,
    query:String
  },
  data () {
    return {
    name1: this.name,
    }
  },
  methods: {
  },
  mounted(){
    //   处理高亮字体
    console.log(this.name1)
      this.name1 = this.name1.replace(this.query,`<span style='color:#507daf;'>${this.query}</span>`)
      this.$refs.name.innerHTML = this.name1
      let str = ''
      this.artists.forEach(item => {
          str += item.name + ' '
      })
      str = str + ' - ' + this.album.name
      str = str.replace(this.query,`<span style='color:#507daf;'>${this.query}</span>`)
      this.$refs.art.innerHTML += str
  }

}
</script>

<style lang="less" scoped>
@base:#d43c33;
       .song{
       padding-left: 10px;
       display: flex;
       text-decoration: none;
       color: #333 !important;
        box-shadow: 1px 0px 1px 0 rgba(180, 180, 180, .2);
       .content{
           flex: 1;
           padding: 6px 0;
           font-size: 17px;
           width: 80%;
           .name{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
           }
           .art{
                    font-size: 12px;
                    color: #888;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                   i{
                       display: inline-block;
                       width: 12px;
                       height: 8px;
                       margin-right: 4px;
                       background-size: 166px 97px;
                       background-image: url(../assets/spirite.png);
                   }
           }
       }
       .playWrapper{
           width: 42px;
           height: 55px;
           padding:0 10px;
           display: flex;
           align-items: center;
           .playBtn{
               width: 22px;
               height: 22px;
               background-image: url(../assets/spirite.png);
               background-position: -24px 0;
               background-size: 166px 97px;
           }
       }
   }
</style>
