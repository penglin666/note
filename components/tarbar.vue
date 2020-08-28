<template>
	<view class="tarbar" :style="{
			 backgroundColor:tarBar.backgroundColor,
			 color:tarBar.color,
			 boxShadow:tarBar.boxShadow
			 }">
		<view v-for="(item,index) in tarBar.options" :key="index" class="options" @click="curSelected(index,item.title)"
		 :class="{active:curPage==item.title||curPage===index}">
			<!-- #ifdef MP-WEIXIN || APP-PLUS -->
			<image :src="curPage==item.title||curPage==index?item.iconPathSelected:item.iconPath" mode="" class="icon" />
			<!-- #endif -->
			<view>{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			curPage: { //当前选中的y页面的tab
				type: [String, Number]
			},
			tarBar: {
				type: Object
			}
		},
		created() {

		},
		methods: {
			curSelected(index, title) {
				if (this.curPage == title || this.curPage == index) return;
				let curPage = {
					page: index,
					title: title
				}
				this.$emit('tabChange', curPage);
			}

		},
		watch: {
			curPage: {
				handler(value) {
					this.tarBar.options.some((item, index) => {
						if (item.title == value || index == value) {
							const curPage = {
								page: index,
								title: item.title
							}
							this.$emit('tabChange', curPage);
							return true;
						}
					})
				},
				immediate: true
			}
		}
	}
</script>

<style lang="scss">
	.tarbar {
		width: 100vw;
		/* #ifdef H5 */
		height: 40upx;
		/*#endif*/
		height: 120upx;
		display: flex;
		.icon {
			width: 60upx;
			height: 60upx;
		}

		.options {
			font-size: 28upx;
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border: 1upx solid #13227a;
			box-sizing: border-box;
		}

		.options.active {
			color: #13227a;
			border-style: inset;
			background-color: #fff;
		}
	}
</style>
