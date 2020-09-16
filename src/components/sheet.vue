<template>
	<div class="sheet" @click=" id!==0 && $router.push({path:'/sheet', query:{id:Id}})">
		<div class="count"><img src="../assets/erji.png" alt="erji">{{ count | playCount }}</div>
		<span v-if="type == 3" class="sheet-icon">歌单</span>
		<figure>
			<img :src="imgUrl" alt="cover">
		</figure>
		<div :class="['name-box',types === 1?'max':'']"> <p :class="types === 0?'p1':'p2'">{{name}}</p></div>

		<span class="span" v-if="types === 0">by {{art}}</span>
	</div>
</template>

<script>
export default {
  props: {
    type: String | Number,
    imgUrl: String,
    name: String,
    art: String,
    count: Number,
    id: String | Number
  },
  data () {
    return {
      types: this.type,
      Id: this.id,
      count1: this.count
    }
  },
  filters: {
    playCount (number) {
			 if (!number) return
			 number = number.toString()
      if (number.length < 5) { return number }
      if (number.length < 9) {
			 number = (number / 10000).toString()
			 if (number[number.toString().indexOf('.') + 1] === 0) { return `${parseInt(number)} 万` }
        return `${parseInt(number)}.${number[number.toString().indexOf('.') + 1]} 万`
      }
      number = (number / 100000000).toString()
      if (number[number.toString().indexOf('.') + 1] === 0) { return `${parseInt(number)} 亿` }
      return `${parseInt(number)}.${number[number.toString().indexOf('.') + 1]} 亿`
		 }
  }
}
</script>

<style scoped>
	.sheet{
		width: 33.3%;
		padding:1px;
		position: relative;
	}
	.name-box{
		width: 100%;
		height: auto;
		line-height: 24px;
		color: #333;
		white-space: normal;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		padding: 6px 2px 0 6px;
		overflow: hidden;
	}
	.max{
		-webkit-line-clamp: 2;
		padding: 6px 2px 0 6px;
		line-height: 1.2;
		text-align: left;
		font-size: 13px;
	}
	figure{
		position: relative;
		padding-bottom: 100%;
		overflow: hidden;
	}
	.sheet::after{
	content: " ";
    position: absolute;
	left:1px;
	right: 1px;
    top: 1px;
    width: calc(100% - 2px);
    height: 20px;
	z-index: 2;
	border: none;
    background-image: -webkit-linear-gradient(top,rgba(0,0,0,.2),rgba(0,0,0,0));
    background-image: linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));
	}
	.count{
		position: absolute;
		top: 4px;
		right: 4px;
		color: white;
		font-size: 10px;
		z-index: 999;
		height: 14px;
		line-height: 14px;
		width: 100%;
		text-align: right;
	}
	figure img{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.p1{
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.p2{
		font-size: 13px;
		text-align: left;
	}
	.span{
		font-size: 12px;
		display: inline-block;
		width: 100%;
		text-align: center;
		color: gray;
		white-space: normal;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.count img{
		line-height: 14px;
		display: inline;
		width: 14px;
		height: 14px;
		vertical-align: bottom;
	}
	.sheet-icon{
    position: absolute;
    z-index: 3;
    top: 10px;
    left: 0;
    padding: 0 8px;
    height: 17px;
    color: #fff;
    font-size: 9px;
    text-align: center;
    line-height: 17px;
    background-color: rgba(217,48,48,.8);
    border-top-right-radius: 17px;
    border-bottom-right-radius: 17px;

	}
</style>
