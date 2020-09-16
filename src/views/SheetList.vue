<template>
  <div class="sheetlist">
    <div class="section"  v-if="info.specialType === 0">
        <div class="bg bg1" :style="'background-image:url('+info.coverImgUrl +');'">
        </div>
         <Sheet type = 3	:imgUrl="info.coverImgUrl" :count="info.playCount" id=0>
         </Sheet>
         <div class="text">
             <p>{{info.name}}</p>
             <div class="creator">
                 <div class="avator-box">
                    <img :src="info.creator.avatarUrl" alt="avator">
                    <span :style="'background-position:'+userType[info.creator.userType]+'px 0'"></span>
                 </div>
                 <span>{{info.creator.nickname}}</span>
             </div>
         </div>
    </div>
    <div class="spec"  v-else>
        <div class="bg" :style="'background-image:url('+info.coverImgUrl +');'"></div>
        <div class="mask"></div>
      <div class="special">
             <p>{{info.name}}</p>
             <div class="tag">{{info.updateFrequency}}</div>
             <div class="s-content">
                 <span v-for="(item,index) in desc" :key="index">{{item}}</span>
             </div>
         </div>
    </div>
    <!-- 描述 -->
    <div class="intro" v-if="info.specialType === 0 && (info.description || info.tags.length > 0)">
        <div class="list-tags" v-if="info.tags.length > 0">
            标签:<span v-for="(tag,index) in info.tags" :key="index">{{tag}}</span>
        </div>
        <div :class="['list-info',{'collapse':isCollapse}]">
           <div class="padding" v-if="info.description">
            简介:<span v-for="(item,index) in desc" :key="index">{{item}}<br></span>
            <div @click="isCollapse = !isCollapse" :class="['arrow',isCollapse?'arrow-down':'arrow-up']"></div>
            </div>
        </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="songsList">
        <div class="tip" style="display: flex;justify-content: space-between;">歌曲列表<span @click="$router.push({path:'/play', query:{sheetid:id,list:idList}})"><i></i> 播放全部</span></div>
        <div class="songs">
        <Song  v-for="item in activeSongs" :key="item.id" :ftype="item.fee" :id="item.id" :name="item.name" :artists="item.ar" :album="item.al"></Song>
        <img class="loading" v-show="isLoading" src="../assets/loading.gif" alt="loading">
    </div>
    <div class="tip load" v-show="!isLoading && unFinish" @click="loadMore">加载更多</div>
    </div>
  </div>
</template>

<script>
import sheet from '../components/sheet'
import song from '../components/song'

export default {
  name: 'sheetlist',
  components: {
    Sheet: sheet,
    Song: song
  },
  data () {
    return {
      id: this.$route.query.id,
      activeSongs: [],
      songs: [],
      offeset: 0,
      str: '',
      info: '',
      userType: { 0: 0, 4: -20, 200: -40 },
      isCollapse: true,
      isLoading: true,
      desc: [],
      unFinish: true
    }
  },
  methods: {
    async getSheet () {
      const res = await this.$http.get('/playlist/detail?id=' + this.id)
      console.log(res.data)
      this.info = res.data.playlist
      if (this.info.description) { this.desc = this.info.description.split('\n') }
      await res.data.playlist.trackIds.forEach(item => {
        this.str += item.id + ','
      })
      console.log(this.str)
      this.str = this.str.substr(0, this.str.length - 1)
      const res1 = await this.$http.get('/song/detail?ids=' + this.str)
      this.songs = res1.data.songs
    },
    async loadMore () {
      this.isLoading = true
      await setTimeout(() => {
        this.activeSongs = this.activeSongs.concat(this.songs.splice(0, 20))
        if (this.songs.length === 0) {
          this.isLoading = false
          this.unFinish = false
          return
        }
        console.log(this.activeSongs.length)
        this.isLoading = false
      }, 800)
    }
  },
  async created () {
    await this.getSheet()
    this.isLoading = false
    this.activeSongs = this.activeSongs.concat(this.songs.splice(0, 20))
    if (this.songs.length === 0) {
      this.isLoading = false
      this.unFinish = false
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
.load{
    text-align: center;
    opacity: .7;

}
.bg{
     position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;

    }
    .bg1{
     -webkit-filter: blur(20px);
    filter: blur(20px);
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    }

.sheetlist{
    .spec{
            position: relative;
            padding: 40px 20px;
            overflow: hidden;
            display: block;
            height: auto;
            .mask{
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            opacity: .25;
            background: #000;
            }
        .special{
        p{
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 18px;
        }
        .tag{
                padding-left: 3px;
                padding-right: 3px;
                margin-top: 10px;
                display: inline-block;
                background-color: hsla(0,0%,100%,.2);
                border-radius: 2px;
                font-size: 10px;
                color: hsla(0,0%,100%,.6);
        }
        .s-content{
                margin-top: 20px;
                font-size: 14px;
                color: hsla(0,0%,100%,.8);
                height: auto;
                span{
                        font-size: 14px;
                        color: hsla(0,0%,100%,.8);
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                        white-space: normal;
                        display: block;
                }
        }
    }
    }
    .section{
    position: relative;
    padding: 30px 10px 30px 15px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .25);
    display: flex;
    .text{
        margin-left: 16px;
        flex: 1;
        p{
            padding-top: 1px;
            font-size: 17px;
            line-height: 1.3;
            color: #fefefe;
            height: 44px;
            display: -webkit-box;
            -webkit-box-pack: center;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .creator{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: normal;
                display: block;
                position: relative;
                margin-top: 20px;
                .avator-box{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    vertical-align: middle;
                    margin-right: 5px;
                    position: relative;
                    img{
                    border-radius: 50%;
                    width: 100%;
                    vertical-align: middle;
                    border: 0;
                }
                span{
                    background-image: url(//s3.music.126.net/mobile-new/img/usericn_3x.png?71c26f814f7ee3c5594694c1b6234ea8=);
                    background-size: 70px auto;
                    position: absolute;
                    right: -5px;
                    bottom: 0;
                    width: 12px;
                    height: 12px;
                    background-repeat: no-repeat;
                }
                }
                span{
                color: hsla(0,0%,100%,.7);
                line-height: 30px;
                }
                }
    }
    }
    .sheet{
        pointer-events: none;
        width: 126px;
        height: 126px;
        padding: 0;
    }
    	.sheet::after{
	content: " ";
    position: absolute;
	right: 0;
    top: 0;
    width: 100%;
    height: 20px;
	z-index: 2;
	border: none;
    background-image: -webkit-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));
    background-image: linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));
	}
    .intro{
    position: relative;
    margin: 0 10px 0 15px;
    padding-top: 10px;
    line-height: 19px;
    color: #666;
    .list-tags{
            margin-bottom: 10px;
            line-height: 20px;
            margin-right: -10px;
            span{
                    display: inline-block;
                    margin-right: 10px;
                    padding: 1px 8px;
                    font-size: 12px;
                    border-radius: 9999px;
                    border: 1px solid rgba(0,0,0,.1);
                    pointer-events: none;
            }

    }
    .list-info{
    position: relative;
    overflow: hidden;
    box-sizing: content-box;
    padding-bottom: 18px;
    line-height: 19px;
    color: #666;
    .padding{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    span{
        display: block;
    }
    span:nth-child(1)
    {
        display: inline-block;
    }
    .arrow{
        position: absolute;
        bottom: 3px;
        right: 0;
        z-index: 3;
        width: 15px;
        height: 15px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 12px auto;
    }
    .arrow-up{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAANCAQAAAAZZWZbAAAAlElEQVR4AY2ShQ1CMRBA33efgSgD4B/3aPdfhwsO1Vdvz1OMZCwYExNIzhYlbUocJr5DybjKPPOrFHfxLRndXWVO7Bbfo9iQIdBykdOCBAslBxRrMgS/yl2cFRnfNHeVnkQXP97FU/6pOcvL8vel4nS/NEdbc/oxdr/Q3eoGV2Qvl3piusrxWRCPuJ4lg+BfU7JneAOq9xL9utncPAAAAABJRU5ErkJggg==);
    }
    .arrow-down{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAANCAQAAAAZZWZbAAAAkElEQVR4AY2RtQEDMQxFX+D4RsgA6cN4XGr/cQJyEzD9yvCeZIAVWxbEJKNhDQ3CiUUE3iE0UNAjnFniS674nVQnqlw8iiHuJN/+hQRbzBluJP8tryQWfLAXy2j/61Aa3H7clOb7pJSMFtyipABUip/9T55yR2hIqZnifihRpVX8aMGtyg1BODAnMglHdnb8CYQbEwGgBxiKAAAAAElFTkSuQmCC);
    }
    }
    .collapse{
            overflow: hidden;
            text-overflow: ellipsis;
            height: 57px;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
    }
    }
}
.songsList{
    .tip{
    height: 23px;
    line-height: 23px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;
    text-align: center;
    span{
      font-size: 10px;
    //   transform: scale(.8);
      border: 0;
      border-radius: 5px;
      display: inline-block;
      padding:2px;
      line-height: 19px;
      position: relative;
      padding-left: 16px;
    }
    span:active{
      color: @base;
    }
     i{
          display: inline-block;
          width: 16px;
          height: 16px;
          position: absolute;
          left: 0;
          top: 2px;
          background-position: center;
          background-image: url(../assets/playall.png);
          background-size: contain;
    }
    }

}
</style>
