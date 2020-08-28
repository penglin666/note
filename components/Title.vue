<template>
	<view class="title flex" :style="{paddingTop:statusBarHeight+'px',height:titleHeight+'px'}">
		<text>{{curPageTitle}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleHeight:null,
				statusBarHeight:null
			};
		},
		props:{
			curPageTitle:{
				type:[String,Number],
				default:"未知页面"
			}
		},
		created() {
			//#ifdef APP-PLUS || MP-WEIXIN
			const that = this;
			uni.getSystemInfo({
				success(e) {
					that.statusBarHeight=e.statusBarHeight;
				}
			})
			let capsuleHeight=uni.getMenuButtonBoundingClientRect().height;//获取右上角胶囊按钮的高度
			let capsuleBottom=uni.getMenuButtonBoundingClientRect().bottom;//获取右上角胶囊按钮的底部坐标
			this.titleHeight=(capsuleBottom-this.statusBarHeight)+(capsuleBottom-this.statusBarHeight-capsuleHeight);//注意微信工具显示
			//#endif
		}
	}
</script>

<style lang="scss">
.title{
	/*#ifdef H5*/
	display: none;
	/*#endif*/
	width: 100vw;
	align-items: center;
	justify-content: center;
	color:#fff;
	background-color: #13227a;
}
</style>
