// 榜单封面组件
<template>
   <div class="container">
	    <div class="cover" @click=" id!==0 && $router.push({path:'/sheet', query:{id:Id}})">
		    <figure>
			    <img :src="imgUrl" alt="cover">
		    </figure>
	    </div>
        <span class="span">{{name}}</span>
    </div>
</template>

<script>
export default {
  props: {
    id: Number,
    imgUrl: String,
    name: String,
    update: String
  },
  data () {
    return {
      Id: this.id
    }
  }
}
</script>

<style lang="less" scoped>
                       .container{
        width: 33.3%;
		padding:6px;
        position: relative;
        .span{
		font-size: 10px;
		display: inline-block;
		width: 100%;
		text-align: left;
		color: rgba(188,190,192,1);
		white-space: normal;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
}
	.cover{
        width: 100%;
        position: relative;
        background-color: royalblue;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 1px 0 4px 0 rgba(100, 100, 100, .4);
	}
	figure{
		position: relative;
		padding-bottom: 100%;
		overflow: hidden;
	}

	figure img{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

</style>
