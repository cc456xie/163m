<template>
<div style="overflow:hidden;">
  <Nav :activeIndex="2"></Nav>
<div class="wrappercontent" ref="scroll">
  <div class="search">
    <form class="form" action="#" method="get">
      <div class="inputcover">
        <i class="searchicon"></i>
        <input ref="input" type="text" v-model="query"  name="search" class="input" placeholder autocomplete="off" value>
        <label class="holder" v-show="!query">搜索歌曲、歌手、专辑</label>
        <i class="close" v-show="query" @click="query = '', inputing = false ,isSearched = false"></i>
      </div>
    </form>
          <!-- 搜索内容区域 -->
      <div class="contentwrapper">
        <!-- 搜索页 -->
        <div class="history" v-if="!query">
          <div class="hotlist">
            <h3 class="title" v-show="searchWords">热门关键词</h3>
            <ul class="list">
                <li v-for="item in searchWords" @click="search(item.searchWord)" :key="item.id" class="list-item">{{item.searchWord}}</li>
            </ul>
          </div>
          <h3 class="title" v-show="searchWords">搜索历史</h3>
          <p class="nothing" v-show="!history">暂无历史</p>
          <ul class="list">
            <li class="history-item" v-for="(item,index) in history" :key="index"><div @click="search(item)"><i class="historyicon svg"></i>{{item}} </div><i @click="remove(index)" class="clear svg"></i> </li>
          </ul>
        </div>
        <!-- 预测页 -->
        <div class="match" v-show="query && !isSearched">
          <h3 class="toS" @click="search(query)">搜索"{{query}}"</h3>
          <ul>
            <li class="list-item2" @click="search(item.keyword)" v-for="item in matchWords" :key="item.id">
              <i class="sicon"></i>
              <span class="msg f-thide">{{item.keyword}}</span>
            </li>
          </ul>
        </div>
        <!-- 结果页 -->
        <div class="request" v-show="isSearched">
          <p class="bm" v-show="bestmatch">最佳匹配</p>
          <div class="b-match">
            <div class="b-item">
              <img class="pic" :src="bestSinger.img1v1Url" alt="singer">
              <h4>
                歌手: <span ref="name"></span>
              </h4>
            </div>
            <div class="b-item" @click=" bestAlbum.id!==0 && $router.push({path:'/sheet', query:{id:bestAlbum.id}})">
              <img class="pic" :src="bestAlbum.picUrl" alt="album">
              <div>
              <h4>
                专辑: <span ref="alname"></span>
              </h4>
              <p ref="art"></p>
              </div>
            </div>
          </div>
          <div class="s-match">
            <Song v-for="(item,index) in songs" :key="index" :name="item.name" :id="item.id" :ftype="item.fee" :album="item.album" :artists="item.artists" :query="query"></Song>
             <img class="loading" v-show="loading" src="../assets/loading.gif" alt="loading">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

// 引入better-scroll
 import BScroll from 'better-scroll'

import BScrollCore from '@better-scroll/core'

import PullUp from '@better-scroll/pull-up'

BScrollCore.use(PullUp)

import song from '../components/s-song'
import nav from '../components/nav'

export default {
  name: 'search',
  components:{
    Song:song,
    Nav:nav
  },
  data () {
    return {
      query: '',
      list: [],
      inputing: false,
      searchWords: [],
      matchWords: [],
      bestmatch:true,
      bestSinger:'',
      bestAlbum:'',
      offset:0,
      songs:[],
      isSearched:false,
      history:[],
      scroll,
      loading:false
    }
  },
  methods: {
    async getMusic () {
      const res = await this.$http.get('/search?keywords=' + this.query)
      this.query = ''
      if (res.status !== 200) return
      // console.log(res)
      this.list = res.data.result.songs
    },
    async getHotList () {
      const res = await this.$http.get('/search/hot/detail')
      // console.log(res)
      this.searchWords = res.data.data.splice(0, 10)
    },
    remove(index){
      this.history.splice(index,1)
      localStorage.setItem("history", JSON.stringify(this.history))
    },
    async search (keywords) {

      if (keywords) this.query = keywords



      this.songs = []
      this.bestAlbum = {}
      this.bestSinger = {}
      let res
        // 检索歌曲
        res = await this.$http.get(`/search?type=1&limit=20&keywords=${keywords}&offset=${this.offset*20}`)
        console.log(res)
        this.songs = res.data.result.songs
        this.isSearched = true
         this.scroll.refresh()
        // 检索歌手
        res = await this.$http.get(`/search?&type=100&keywords=${keywords}`) 
        console.log(res)
        // let arr = res.data.result.artists.sort((a,b) => {
        //     return a.id - b.id
        // })
        this.bestSinger = res.data.result.artists[0]
        let str =  this.bestSinger.alia?this.bestSinger.name + ` (${this.bestSinger.alia[0]})` :this.bestSinger.name
        console.log(this.bestSinger.name,str)
        str = str.replace(this.query,`<span class='highlight' style='color:#507daf;'>${this.query}</span>`)
        this.$refs.name.innerHTML =   str
        // 检索专辑
        res = await this.$http.get(`/search?&type=10&keywords=${keywords}`)
        console.log(res)
        // arr = res.data.result.albums.sort((a,b) => {
        // return a.id - b.id
        // })
        this.bestAlbum = res.data.result.albums[0]
        str = this.bestAlbum.name.replace(this.query,`<span class='highlight' style='color:#507daf;;'>${this.query}</span>`)
        this.$refs.alname.innerHTML = str
        str = this.bestAlbum.artist.name.replace(this.query,`<span class='highlight' style='color:#507daf;;'>${this.query}</span>`)
        this.$refs.art.innerHTML = str
        console.log(this.bestSinger)
        console.log(this.bestAlbum)

      this.history = JSON.parse(localStorage.getItem("history") || '[]') 
      // // 缓存数组最大容量为10
      console.log(this.history)
      if( this.history.length >= 10 )
      this.history.pop()
      // 设置本地缓存数组
      if(this.query)
      this.history.unshift(this.query)
      // 将数组数据转换为字符串存储
      localStorage.setItem("history", JSON.stringify(this.history))
     
    },
    async loadMore(){
        this.offset++
        this.loading = true
        const res = await this.$http.get(`/search?type=1&limit=20&keywords=${this.query}&offset=${this.offset*20}`)
        console.log("加载更多")
        this.songs = this.songs.concat(res.data.result.songs) 
        // this.loading = false
        this.$nextTick(() => {
        setTimeout(()=>{
        this.scroll.finishPullUp()
        this.scroll.refresh()
        this.loading = false
        },500)
        })
        
    }
  },
  mounted () {
    console.log(this.$route.params.index)
    if (this.$route.params.index !== 2) { this.$router.push('/') }
    // 读取历史记录
     this.history = JSON.parse(localStorage.getItem("history") || '[]') 
     console.log(this.history)
    // 监听输入
    this.$refs.input.oninput = async (e) => {
      this.inputing = true
      this.isSearched = false
      // 兼容处理
      if (this.query === '' && e.data) { this.query = e.data }
      if(this.query)
      {
      const res = await this.$http.get(`/search/suggest?keywords=${this.query}&type=mobile`)
      this.matchWords = res.data.result.allMatch
      }
    }
    this.getHotList()
    //获取本地历史缓存，序列化字符串数据
     this.history = JSON.parse(localStorage.getItem("history") || '[]') 
    // console.log('history='+this.history)
    this.$nextTick(() => {
      this.scroll =  new BScroll(this.$refs.scroll, {
			scrollY:true,
      click:true,
      pullUpLoad:true,//上拉加载更多
       })
        // 上拉刷新
      this.scroll.on("pullingUp",this.loadMore)
    })   
   
  },
  watch:{
    query(val){
      if(val.length === 0)
      {
      this.history = JSON.parse(localStorage.getItem("history") || '[]') 
      }
    }
  }
}
</script>

<style lang="less" scoped>
@base:#d43c33;
.loading{
    width: 20px;
    height: 20px;
    display: block;
    margin: 10px auto;
}
.history{
  padding:0 10px
}
.f-thide{
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}
.submit{
  width: 20px;
  height: 20px;
  background: rosybrown;
}
.form{
    position: relative;
    padding: 15px 10px;
    .inputcover{
      position: relative;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    box-sizing: border-box;
    background: #ebecec;
    border-radius: 30px;
    .input{
          width: 100%;
          height: 30px;
          line-height: 18px;
          background: rgba(0,0,0,0);
          font-size: 14px;
          color: #333;
          border-radius: 0;
          border: 0;
    }
    .searchicon{
      position: absolute;
      left: 0;
      top: 9px;
      margin: 0 8px;
      vertical-align: middle;
      display: inline-block;
      vertical-align: middle;
      background-position: 0 0;
      background-size: contain;
      background-repeat: no-repeat;
      width: 13px;
      height: 13px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==);
    }
    .holder{
      position: absolute;
      left: 30px;
      top: 5px;
      font-size: 14px;
      color: #c9c9c9;
      background: rgba(0,0,0,0);
      pointer-events: none;
    }
    .close{
          position: absolute;
          right:8px;
          top: 8px;
          line-height: 28px;
          text-align: center;
          display: inline-block;
          vertical-align: middle;
          width: 14px;
          height: 14px;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==);
    }
    }
}
.form::after{
    position: absolute;
    z-index: 2;
    content: "";
    top: 70%;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    border-bottom: 1px solid rgba(0,0,0,.05);
    transform: scaleY(.3);
}
.wrappercontent{
  width: 100%;
  height: calc(100vh - 124px);
  overflow: hidden;
  margin-top: 40px;
}
.contentwrapper{
width: 100%;
height: auto;
padding-top: 15px;
.title{
  font-size: 12px;
    line-height: 12px;
    color: #666;
}
.list{
  margin: 10px 0 7px;
  .list-item{
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 14px;
    font-size: 14px;
    line-height: 32px;
    color: #333;
    list-style: none;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 60px;
    transform: scale(.8);
  }
  .history-item{
    padding: 4px 5px;
    height: 40px;
    line-height: 32px;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: space-between;
  }
}
.match{
  .toS{
        height: 40px;
      margin-left: 10px;
      padding-right: 10px;
      font-size: 14px;
      line-height: 40px;
      color: #507daf;
      font-weight: 400;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
  }
  ul{
    .list-item2{
      display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 45px;
    padding-left: 10px;
    list-style: none;
    .msg{
      display: inline-block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 1%;
    padding-right: 10px;
    font-size: 15px;
    line-height: 45px;
    color: #333;
    position: relative;
    }
    .msg::after{
      content: " ";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 90%;
      height: 1px;
      background-color: rgba(0,0,0,.1);
      transform: scaleY(.15);

    }
    .sicon{
    width: 15px;
    margin-right: 5px;
    height: 15px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjguMTgxIDI3LjUzNWwtMS40MTQgMS40MTQtNy43NTUtNy43NTRBMTEuNDQ1IDExLjQ0NSAwIDAgMSAxMS41IDI0QzUuMTQ5IDI0IDAgMTguODUyIDAgMTIuNSAwIDYuMTQ5IDUuMTQ5IDEgMTEuNSAxIDE3Ljg1MiAxIDIzIDYuMTQ5IDIzIDEyLjVjMCAyLjc1Ni0uOTczIDUuMjg1LTIuNTg5IDcuMjY2bDcuNzcgNy43Njl6TTExLjUgM2E5LjUgOS41IDAgMSAwIDAgMTkgOS41IDkuNSAwIDAgMCAwLTE5eiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=);
}

.loading{
  color: #d43c33;
  text-align: center;
}

    }

  }
}
.request{
  height: auto;
  width: 100%;
  .bm{
    margin-left: 10px;
    font-size: 12px;
    line-height: 16px;
    color: #666;
  }
  .b-match{
    .b-item{
      position: relative;
      height: 66px;
      display: flex;
      align-items: center;
      height: 66px;
      margin-left: 10px;
      padding: 8px 10px 8px 0;
      box-sizing: border-box;
      h4{
        font-size: 17px;
        line-height: 30px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
        font-weight: 400;
      }
        p{
          font-size: 12px;
          line-height: 15px;
          color: #999;
        }
    }
  }
}
.pic{
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
}
.highlight{
  color: #507daf !important;
}
.historyicon{
    width: 14px;
    height: 14px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJNMTUgMzBDNi43MTYgMzAgMCAyMy4yODQgMCAxNVM2LjcxNiAwIDE1IDBzMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOEM3LjgyIDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzUzIyLjE4IDIgMTUgMm03IDE2aC04YTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAxIDEgMiAwdjloN2ExIDEgMCAxIDEgMCAyIi8+PC9zdmc+);
    margin: 0 10px;

}
.clear{
  width: 12px;
  height: 12px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJNMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdhLjk3NS45NzUgMCAxIDEtMS4zNzggMS4zNzlMMTIuMDAxIDEzLjM3OCAxLjY2MyAyMy43MTZhLjk3NC45NzQgMCAxIDEtMS4zNzgtMS4zNzlMMTAuNjIzIDEyIC4yODUgMS42NjJBLjk3NC45NzQgMCAxIDEgMS42NjMuMjg0bDEwLjMzOCAxMC4zMzhMMjIuMzM5LjI4NGEuOTc0Ljk3NCAwIDEgMSAxLjM3OCAxLjM3OEwxMy4zNzkgMTIiLz48L3N2Zz4=);
  margin-right: 8px;
}
.svg{
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.nothing{
  width: 100%;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
  color: #999;
  text-align: center;
}
</style>
