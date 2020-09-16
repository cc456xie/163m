<template>

	<div v-show="song" class="player">
		<div class="bg" :style="'background-image:url('+cover+')'"></div>
		<div class="covers"></div>
		<div class="ratingsWrapper" ref="ratingsWrapper">
		<div class="container">
			<div class="edit"></div>
		<!-- <div class="title"><img class="logo" src="http://p3.music.126.net/0ZrFKozxhB6nPQYZl4lsEA==/109951163421145421.png" style="marigin:0;" alt="logo">网易云音乐</div> -->
		<div class="svg-box">
		<svg class="u-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 34"><g fill="#fff"><path d="m78.74 14.27h14.52v-2.27h-14.52v2.27m-1.44 1.89c-.51-.03-.915-.44-.94-.95v-8.21c-.0001-.53.411-.968.94-1h17.37c.529.032.941.47.939 1v8.22c-.023.51-.43.92-.939.95l-17.37-.001m1.44-6h14.52v-2.23h-14.52v2.23"></path><path d="m95.49 18h-18c-.291.002-.563.139-.74.37l-1.86 2.63-1.89 2.55c-.078.108-.053.258.055.335.04.028.087.045.135.045h2.07c.165 0 .32-.078.42-.209l2.72-3.721h3.79l-6.77 9.311c-.077.113-.047.27.067.347.04.026.085.042.133.043h2c.17 0 .33-.082.43-.22l6.95-9.481h3.87l-6.78 9.32c-.077.107-.053.258.055.334.042.031.093.047.145.046h2.08c.155.003.302-.071.39-.2l6.9-9.5h2.41v5.73c0 .889-.721 1.609-1.611 1.609h-1.93c-.153.006-.296.079-.39.2l-1.27 1.76c-.083.11-.061.268.05.351.043.032.096.05.15.05h3.39c2.208 0 4-1.791 4-4v-6.761c0-.519-.42-.939-.939-.939"></path><path d="m126.14 15h-23.852c-.139.005-.25.12-.25.26v.62c-.004.762.609 1.385 1.371 1.39.002 0 .006 0 .001 0h6.209l-5.629 10.73c-.305.539-.113 1.222.426 1.525.174.1.373.148.574.145h19c.264.004.52-.08.73-.24.398-.316.535-.863.33-1.33l-3.102-6c-.051-.119-.168-.198-.299-.199h-1.811c-.188.002-.338.156-.336.344 0 .043.001.086.025.126l2.68 5h-15.439l5.381-10.18h13c.658-.019 1.193-.534 1.24-1.19v-.73c0-.144-.117-.26-.26-.26"></path><path d="m105.42 9.44h17.641c.725-.005 1.309-.595 1.309-1.32v-.66c0-.156-.123-.285-.279-.29h-19.721c-.166 0-.299.134-.299.3 0 .003 0 .007 0 .001v.6c-.006.746.594 1.354 1.34 1.36.0001 0 .005 0 .009 0"></path><path d="m66.69 6.33h-21.34c-.646 0-1.17.524-1.17 1.17 0 .003 0 .007 0 .001v22c0 .149.121.27.27.27h1.81c.149 0 .27-.12.27-.27v-20.82h19v17.12c0 .889-.721 1.609-1.61 1.609h-1.31c-.153-.002-.297.068-.39.189l-1.33 1.841c-.066.089-.048.214.04.28.034.025.077.039.12.039h2.85c2.159.002 3.93-1.711 4-3.869v-18.39c0-.652-.528-1.18-1.18-1.18"></path><path d="m61.43 24.63h2.08c.127-.0001.229-.104.228-.231 0-.038-.001-.075-.028-.108l-3.56-6.24 3.56-6.23c.066-.108.032-.25-.076-.316-.037-.023-.08-.035-.124-.034h-2.08c-.083.002-.159.048-.2.12l-2.38 4.17-2.39-4.17c-.042-.072-.117-.117-.2-.12h-2.08c-.127-.002-.232.099-.234.226-.0001.043.011.086.034.124l3.56 6.23-3.54 6.239c-.061.111-.02.251.092.312.033.019.07.028.108.028h2.08c.082.0001.158-.04.2-.11l2.39-4.18 2.38 4.18c.042.07.119.111.2.11"></path><path d="m54.47 18.15c.045-.074.045-.166 0-.24l-3.61-6.32c-.046-.072-.125-.117-.21-.12h-2.1c-.127-.002-.231.099-.234.226 0 .043.011.086.034.124l3.56 6.18-3.58 6.26c-.061.111-.02.252.092.313.033.018.07.027.108.027h2.1c.084.002.163-.04.21-.109l3.62-6.35"></path><path d="m145.37 13.89h-4.91l-2.539-4.45h10l-2.551 4.45m9.43 0h-6.799l2.539-4.45h1.41c.752 0 1.361-.609 1.361-1.36v-.64c0-.145-.115-.265-.262-.27h-8.729l-1.061-1.84c-.096-.175-.281-.283-.48-.28h-1.859c-.133-.007-.246.095-.252.228-.002.046.008.092.031.133l1 1.76h-8.859c-.152.005-.275.127-.279.28v.63c0 .751.607 1.36 1.359 1.36h1.42l2.539 4.45h-6.878c-.166 0-.301.134-.301.3v.62c0 .746.605 1.35 1.35 1.35h21.701c.729 0 1.32-.591 1.32-1.32v-.65c-.004-.154-.119-.281-.271-.301"></path><path d="m151.12 18c.625 0 1.131.506 1.131 1.13v9.47c0 .625-.506 1.131-1.131 1.131h-16.42c-.621-.006-1.125-.509-1.129-1.131v-9.47c.004-.622.508-1.124 1.129-1.13h16.42m-1.219 4.2v-2.11h-14v2.73h14v-.62m-14 5.441h14v-2.73h-14v2.73"></path><path d="m183.13 16.64v-.64c0-.132-.107-.24-.238-.24h-9.521v-4.91c-.004-.146-.125-.26-.27-.26h-.74c-.746-.005-1.354.595-1.359 1.34 0 .003 0 .006 0 .001v3.8h-7.85l.849-5.93c6.689-.32 13.51-1.13 16.289-1.49.707-.087 1.211-.73 1.123-1.438 0-.007-.002-.015-.002-.022l-.1-.73c-.016-.121-.127-.206-.246-.19-.002 0-.004 0-.004 0-1.48.2-10 1.32-18.12 1.65-.555.025-1.012.448-1.08 1l-1.049 8.15c-.072.62.371 1.181.99 1.253.029.003.059.006.09.007h9.11v7.76c0 .891-.719 1.615-1.609 1.62h-.391c-.166-.003-.322.076-.42.21l-1.23 1.7c-.088.127-.057.302.07.39.043.031.096.049.15.051h1.84c2.209 0 4-1.791 4-4v-7.731h8.41c.744 0 1.35-.604 1.35-1.35 0-.003 0-.006 0-.001"></path><path d="m167.05 20.09h-1.649c-.457 0-.881.229-1.131.61-1.129 1.75-2.73 4.88-4.301 7.38-.094.15-.047.348.102.441.051.031.109.049.17.049h1.5c.453.004.877-.227 1.119-.61 1.781-2.819 3.439-5.91 4.391-7.51.066-.114.027-.262-.088-.328-.035-.02-.072-.03-.113-.032"></path><path d="m183.82 28.08c-1.57-2.5-3.16-5.63-4.301-7.38-.246-.38-.668-.608-1.119-.61h-1.65c-.127-.006-.234.093-.24.219-.002.051.012.1.039.142.951 1.61 2.611 4.69 4.381 7.51.244.387.672.618 1.131.61h1.5c.17.004.313-.131.316-.303.002-.067-.018-.133-.057-.188"></path></g><path fill="#dd001b" d="M26.26,0H7.74C3.47,0.011,0.011,3.47,0,7.74v18.52C0.011,30.53,3.47,33.988,7.74,34h18.52
c4.271-0.012,7.729-3.47,7.74-7.74V7.74C33.989,3.47,30.53,0.011,26.26,0"></path><path fill="#fff" d="m19.13 19.08c-.297.389-.716.667-1.19.79-.684.202-1.422.077-2-.341-.695-.498-1.137-1.277-1.21-2.129-.041-.43 0-.865.12-1.28.398-1.294 1.373-2.332 2.64-2.81.322-.135.657-.236 1-.3.14.49.28 1 .43 1.51.19.68.39 1.36.55 2 .274.877.13 1.832-.39 2.589m1.32-8.659c-.09-.36-.23-.9-.34-1.3-.085-.308-.085-.632 0-.94.021-.084.055-.166.1-.24.187-.34.518-.575.9-.64.356-.048.716.049 1 .27.144.122.281.252.41.39.229.219.534.34.85.34.696.012 1.27-.542 1.282-1.238 0-.031 0-.062-.0001-.092.0001-.199-.047-.395-.14-.57-.15-.234-.336-.443-.55-.62-.414-.364-.898-.639-1.421-.81-.237-.077-.482-.131-.73-.16-.549-.067-1.105-.012-1.63.16-1.962.59-3.075 2.659-2.485 4.621.014.046.029.093.045.139 0 .21.16.6.21.8-.443.091-.877.219-1.3.38-2 .777-3.533 2.428-4.16 4.48-.191.71-.259 1.447-.2 2.18.136 1.604.97 3.066 2.28 4 2.122 1.465 5.02 1.027 6.61-1 1-1.354 1.326-3.096.87-4.72-.17-.65-.37-1.36-.57-2.06l-.21-.75c.847.217 1.626.639 2.27 1.23 2.236 2.188 2.652 5.634 1 8.29-1.592 2.416-4.296 3.864-7.19 3.85-4.926-.001-8.915-4-8.92-8.93-.0001-.438.032-.876.1-1.31.055-.337.128-.671.22-1 .1-.34.21-.67.34-1 .137-.318.291-.628.46-.93.164-.302.348-.592.55-.87.203-.278.419-.545.65-.8.232-.252.479-.489.74-.71.25-.22.53-.43.81-.63.284-.192.578-.369.88-.53.17-.08.34-.17.51-.24l.28-.12c.654-.273.963-1.026.69-1.68s-1.026-.963-1.68-.69l-.36.15-.66.32c-.392.201-.769.429-1.13.68-.347.249-.681.516-1 .8-.33.289-.644.596-.94.92-.3.313-.578.647-.83 1-.276.36-.53.738-.76 1.13-.217.39-.414.791-.59 1.2-.169.414-.313.838-.43 1.27-.126.439-.223.887-.29 1.34-.088.559-.131 1.124-.13 1.69-.028 6.324 5.076 11.473 11.4 11.5.001 0 .02 0 .03 0 3.753.001 7.26-1.869 9.33-5 2.308-3.669 1.714-8.456-1.42-11.45-1.291-1.192-2.947-1.915-4.7-2.05"></path></svg>
		</div>
		<div class="rotate-box" @click="play">
			<img class="Disc" src="https://s3.music.126.net/mobile-new/img/disc-ip6.png" >
			<img  :src="cover" alt="123" :style="isplaying === true?running:pause" class="cover Rotation">
			<img  v-show="!isplaying" class="play" src="../assets/play.png" alt="play">
		</div>
		<!-- 歌曲信息 -->
		<div class="songInfo">
		    <div class="song">{{name}} - <span>{{singer}}</span></div>
			<div class="lrcBox" ref="lrcBox">
			<div class="lrc" ref="lrc" v-show="lyric.text">
				<ul id="lyric">
					<li :class="['list',activeIndex === index?'active':'']"  v-for="(item,index) in lyric.text" :key="index">{{item}}</li>
				</ul>
			</div>
			</div>
			<div class="text-cover"></div>
		</div>
		<!-- 包含歌单 -->
		<div class="tips" v-show="sheetsList.length > 0">包含这首歌的歌单</div>
		<div class="sheets">
			<Sheet :type="0" v-for=" item in sheetsList" :key="item.id" :imgUrl="item.coverImgUrl"
			:id="item.id"
			:name='item.name'
			:art='item.creator.nickname'
			:count="item.playCount"></Sheet>
		</div>
		<!-- 喜欢听的也听 -->
		<div class="tips">喜欢这首歌的人也听</div>
		<div class="like">
			<div class="like-item"  @click="handlePlay(item)" v-for="item in songsList" :key="item.id">
				<img class="cover1" :src="item.album.blurPicUrl" alt="song">
				<div class="song-msg">
					<h1>{{item.name}}</h1>
					<h2><span v-for="(art,index) in item.artists" :key="index">{{art.name}} </span></h2>
				</div>
				<img @click="handlePlay(item)" src="../assets/play2.png" alt="play" class="playBtn">
			</div>
		</div>
		<!-- 精彩评论 -->
		<div class="tips" v-if="hotComments.length > 0">精彩评论</div>
		<div class="comment">
				<ul>
				<li v-for=" (item,index) in hotComments " :key="index">
				<div class="comment-box" >
					<div class="avator-box">
					<div style="display: inline;">
						<img class="avator" :src="item.user.avatarUrl" >
					</div>

						</div>
					<div class="text-box">
						<div>
						<div class="nickname">{{item.user.nickname}} <span><img style="width: 14px;height:14px;vertical-align: text-top;" src="../assets/zan.png" alt="zan">{{item.likedCount}}</span></div>
						 <div style="font-size: 10px;color: white;height: 30px;line-height: 30px;">{{item.time | dateFormat}}</div>
						</div>
						<span class="item-content">{{item.content}}</span>

					</div>
					</div>
					</li>
				</ul>
		</div>
		<!-- 最新评论，没有精彩评论时渲染 -->
		<div class="tips" v-if="hotComments.length < 8">最新评论</div>
		<div class="comment">
				<ul>
				<li v-for=" (item,index) in comments " :key="index">
				<div class="comment-box" >
					<div class="avator-box">
					<div style="display: inline;">
						<img class="avator" :src="item.user.avatarUrl" >
					</div>

						</div>
					<div class="text-box">
						<div>
						<div class="nickname">{{item.user.nickname}} <span><img style="width: 14px;height:14px;vertical-align: text-top;" src="../assets/zan.png" alt="zan">{{item.likedCount}}</span></div>
						 <div style="font-size: 10px;color: white;height: 30px;line-height: 30px;">{{item.time | dateFormat}}</div>
						</div>
						<span class="item-content">{{item.content}}</span>

					</div>
					</div>
					</li>
				</ul>
		</div>
		</div>
		</div>
		<audio   id="audio" ref="audio1" :src="url" @ended="audioEnd()" autoplay>
				当前浏览器不支持audio
		</audio>
	</div>

</template>

<script>
import sheet from '../components/sheet.vue'
// 引入BS，解决背景图片和遮罩抖动的问题
import BScroll from 'better-scroll'

// 引入lodash
import _ from 'lodash'

export default {
  name: 'Player',
  components: {
    Sheet: sheet
  },
  async created () {
    // 判断是否为歌单播放
    if (this.sheetid > 0) {
      this.playAll = true
      await this.getSheet()
      console.log(this.idList)
      this.id = this.idList.shift()
      this.getMusic()
    } else { this.getMusic() }
  },
  mounted () {
	  window.scrollTo(100,500)
    this.$nextTick(() => {
   			new BScroll(this.$refs.ratingsWrapper, {
			 click: true,
			stopPropagation:true
		   })
		   	this.scroll = new BScroll(this.$refs.lrcBox,{
			click: false,
			stopPropagation:true,
			bounce:false,
			disableTouch:true,
			disableMouse:true
		   })	   
	}
	)
	
  },
  data () {
    return {
      song: '',
      url: '',
      isplaying: true,
      lyric: { text: [], time: [] },
      id: this.$route.query.id,
      sheetid: this.$route.query.sheetid,
      cover: '',
      songsList: [],
      sheetsList: [],
      idList: [],
      playAll: false,
      singer: '',
      name: '',
      pause: { 'animation-play-state': 'paused', '-webkit-animation-play-state': 'paused' },
      running: { 'animation-play-state': 'running', '-webkit-animation-play-state': 'running' },
      hotComments: [],
      comments: [],
      time: 0,
      lyricState: false,
      activeIndex: 0,
      ended: false,
	  str: '',
	  scroll:'',
	  s:''
    }
  },
  methods: {
    // 获取歌单列表
		 async getSheet () {
      const res = await this.$http.get('/playlist/detail?id=' + this.sheetid)
      res.data.playlist.trackIds.forEach(item => {
        this.idList.push(item.id)
      })
      	},
    // 控制播放与暂停
    play () {
		 
      if (this.ended) {
        this.activeIndex = 0
		 this.lrcPlay()
	  }
      const audio = this.$refs.audio1
      this.isplaying = !this.isplaying
      console.log(this.isplaying)
      if (this.isplaying === true) {
        return audio.play()
      }
		audio.pause()
    },
    async handlePlay (item) {
      console.log(this.isplaying)
      this.id = item.id
			    this.getMusic()
      console.log(this.url)
      this.isplaying = true
    },
    async getMusic () {
      this.lyric.text = []
      this.lyric.time = []
      this.activeIndex = 0
      // 获取歌曲
      let res = await this.$http.get('/song/url?id=' + this.id)
      console.log(res.data.data[0].url)
      if (!res.data.data[0].url) {
        this.$toast.fail('获取失败')
					 return this.next()
      }
      this.song = res.data.data
      this.url = res.data.data[0].url
	  this.isplaying = true
	  this.ended = false
      // 获取封面
      res = await this.$http.get('/song/detail?ids=' + this.id)
      this.cover = res.data.songs[0].al.picUrl
      this.name = res.data.songs[0].name
      this.singer = res.data.songs[0].ar[0].name
      console.log(res)
      // console.log(this.cover)
      // 获取推荐歌曲
      res = await this.$http.get('/simi/song?id=' + this.id)
      this.songsList = res.data.songs
      // console.log(this.songsList)
      // 推荐歌单
      res = await this.$http.get('/simi/playlist?id=' + this.id)
      this.sheetsList = res.data.playlists
      // console.log(this.sheetsList)
      // 获取评论
      res = await this.$http.get('/comment/hot?type=0&limit=12&id=' + this.id)
      this.hotComments = res.data.hotComments
      // 最新评论
      if (this.hotComments.length < 8) {
        res = await this.$http.get('/comment/music?limit=10&id=' + this.id)
        console.log(res.data)
        this.comments = res.data.comments
      }
      // res = await this.$http.get("/comment/hot?type=0&limit=12&id=" + this.id)
      // this.hotComments = res.data.hotComments.slice(0,8)
      // 获取歌词
				 res = await this.$http.get('/lyric?id=' + this.id)
				 console.log(res)
      if (!res.data.lrc) return
				 const lyricInfo = res.data.lrc.lyric.split('[')
			 // console.log(this.lyricInfo)
			     lyricInfo.forEach(item => {
				 const index = item.indexOf(']')
				 if (item.substring(index) !== ']\n' && item.substring(index) !== ']') {
				 this.lyric.time.push(item.substr(0, 5))
				 this.lyric.text.push(item.substring(index).replace(']', ''))
				 }
			 })
			  // console.log(this.lyric.time,this.lyric.text)
      this.lyricState = true

      this.lrcPlay()

      // 监听播放完成
      audio.onended = () => {
        this.isplaying = false
        this.next()
      }
    },
    next () {
      if (this.playAll && this.idList.length > 0) {
			   this.id = this.idList.shift()
			   this.getMusic()
      } else { this.ended = true }
    },
    lrcPlay () {
			   // 歌词控制
			   this.scroll.scrollTo( 0 , 0 ,400)
			   if (!this.$refs.lrc) return
			 const audio = this.$refs.audio1
		     const lrc = this.$refs.lrc
	    	var i = 0
			 if (this.lyricState) { var temp = 0 }
			 let count = 0
			 lrc.style.top = '0'
	    	this.$refs.audio1.ontimeupdate = async () => {
        const tempTime = audio.currentTime + ''

        i = _.findLastIndex(this.lyric.time, (item) => item === this.hs(tempTime))
        // console.log(this.lyric.time[i],this.hs(tempTime),this.lyric.text[i],i)
        if (this.lyric.time[i] === this.hs(tempTime)) {
          // console.log(i)
          // console.log(parseInt(lrc.style.top))

          if (temp !== i) {
			
			 this.scroll.scrollBy( 0 , -30 * (i - temp) ,400)
			// setTimeout(() => {
			// lrc.style.top = parseInt(lrc.style.top) - 30 * (i - temp) + 'px'
			// },200) 	
								
			temp = i
          }
				 this.activeIndex = i
          i++
        }
      }
    },
    audioEnd () {
      this.isplaying = false
    },
    hs (s) {
		    // 计算分钟
		    // 算法：将秒数除以60，然后下舍入，既得到分钟数
		    var h
		    h = Math.floor(s / 60)
		    // 计算秒
		    // 算法：取得秒%60的余数，既得到秒数
		    s = s % 60
		    // 将变量转换为字符串
		    h += ''
		    s += ''
      if (s.indexOf('.') === 1) { s = '0' + s }
      s = s.substr(0, 2)
		    // 如果只有一位数，前面增加一个0
		    h = (h.length === 1) ? '0' + h : h
		    return h + ':' + s
    }
  }
}
</script>

<style lang="less" scoped>
.ratingsWrapper{
	height: 100vh;
	overflow: hidden;
}
.svg-box{
	width: 116px;
	height: 37px;
	padding: 10px 12px;
	box-sizing: border-box;
	.u-svg{
	 width: 92px;
	height: 17px;
	display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
}

	 @keyframes rotation{
	 				from {-webkit-transform: rotate(0deg);}
	 				to {-webkit-transform: rotate(360deg);}
	 				}
		   	.Rotation{
		   				transform: rotate(360deg);
		   				animation: rotation 15s linear infinite;
		   				-moz-animation: rotation 15s linear infinite;
		   				-webkit-animation: rotation 15s linear infinite;
		   				-o-animation: rotation 15s linear infinite;
						animation-fill-mode: forwards;
		   				}
						.nickname{
							margin: 5px 0;
							margin: 10px;
							color: hsla(0,0%,100%,.7);
							font-size: 13px;
						}
						.nickname span{
							float: right;
							margin-right: 15px;
							    line-height: 22px;
							    font-size: 11px;
							    color: #999;
						}
						li{
							padding: 3px;
							  border-bottom: 1px solid rgba(160,159,161,.1);
							  list-style:none;
							  min-height: 30px;
						}
						.lrc{
							overflow: hidden;
							color: hsla(0,0%,100%,.6);
							padding: 0 20px;
							position: absolute;
							width: 100%;
							padding-bottom: 90px;
						}
						.lrc li{
							border: none;
							font-size: 13px;
							list-style: none;
							text-align: center;
							overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
						}
	.container{
		width: 100%;
		height: auto;

	}
	.item-content{
		margin-bottom: 10px;
	}
	.like{
		width: 100%;
		margin-bottom: 25px;
	}
	.like-item{
		width: 100%;
		height: 60px;
		padding: 6px;
		border-bottom: 1px solid rgba(160,159,161,.1);
		display: flex;
		position: relative;
		overflow: hidden;
	}
	.playBtn{
		width: 30px;
		height: 30px;
		position: absolute;
		right: 15px;
		top: 15px;
		border-radius: 50%;
	}
	.like-item .cover1{
		width: 48px;
		height: 48px;
		margin-right: 8px;
	}
	.song-msg{
		padding: 4px;
		width: 70%;
	}
	.song-msg h1{
		line-height: 18px;
		    font-size: 14px;
		    color: #fff;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
	}
	.song-msg h2{
		overflow: hidden;
		 text-overflow: ellipsis;
		white-space: nowrap;
		word-break: normal;
		 margin-top: 2px;
		 font-size: 13px;
		color: hsla(0,0%,100%,.6);
	}
	.edit{
		z-index: 1100;
		position: absolute;
		 height: 137px;
		 width: 96px;
		 top: 0px;
		 left: 50%;
		transform: translateX(-25%);
		background-image: url(http://s3.music.126.net/mobile-new/img/needle-ip6.png);
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg{
	background-color: #161824;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-transform-origin: center top;
    -ms-transform-origin: center top;
    transform-origin: center top;
	position: fixed;
	filter: blur(12px);
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    -webkit-transition: opacity .3s linear;
	transition: opacity .3s linear;

	}
	.covers{
	position: fixed;
	left: 0;
    right: 0;
    top: 0;
	height: 100%;
	z-index: -1;
	overflow: hidden;
	background-color: rgba(10,10,10,.5);
	}
	.title{
		padding: 10px;
		height: 16px;
		width: 100%;
		line-height: 16px;
		font-size: 14px;
		color: white;
		display: flex;
	}
	.song{
		text-align: center;
		color: white;
		font-size: 16px;
		line-height: 18px;
		padding: 4px 0;
		height: auto;
		padding-bottom: 15px;
		overflow: hidden;
         text-overflow:ellipsis;
        white-space: nowrap;
	}
	.song span{
		font-size: 14px;
		color: hsla(0,0%,100%,.6);
	}
	.title .logo{
		width: 16px;
		height: 16px;
		margin-right: 5px;
	}
	.rotate-box{
		width: 296px;
		height: 296px;
		border-radius: 50%;
		margin: 0 auto;
		margin-top:33px;
		background-color: rgba(188,183,190,.1);
		position: relative;
	}
	.Disc{
		width: 296px;
		height: 296px;
		background-color: transparent;
		border-radius: 50%;
		position: absolute;
		overflow: hidden;
		z-index: 2;
		left: 0;
		top: 0;
	}
	.cover{
        position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		left: 48px;
		z-index: 1;
    background-size: contain;
		top:48px;
	}
	.play{
		z-index: 1000;
		width: 56px;
		height:56px;
		position: absolute;
		left: 120px;
		top: 120px;
		background: rgba(30,30,30,.2);
		border-radius: 50%;
		border: 0;
	}
	.songInfo{
		width: 80%;
		margin: 10px auto;
		height: 155px;
		margin-bottom: 280px;
		position: relative;
		overflow: hidden;
		.lrcBox{
			width: 100%;
			height: 74px;
            overflow: hidden;
			position: absolute;
			line-height: 1.5;
            font-size: 13px;
			height: 114px;
			pointer-events: none;
            -webkit-mask: -webkit-linear-gradient(top,#000,#000 30%,rgba(0,0,0,0));
		.active{
			color: white !important;
			top:20px
		}
		}

	}

	.sheets{
		display: flex;
		width: 100%;
		height: auto;
		margin-bottom: 16px;
	}
	.tips{
		width: 100%;
		height: 18px;
		border-left: 2px solid #d33a31;
		position: relative;
		 padding-left: 10px;
		 line-height: 18px;
		 color: #fff;
		 font-size: 14px;
		 text-align: left;
		 margin-bottom: 5px;
	}
		.comment-box{
						width: 100%;
						min-height: 100px;
						color: #fff;
						display: flex;
						height: auto;

					}
					.avator-box{
						height: 60px;
					}
					.avator{
						width: 30px;
						height: 30px;
						border-radius: 50%;
						margin: 5px;
					}
					.text-box{
						width: 90%;
						margin: 0 auto;
						font-size: 12px;
					}
</style>
