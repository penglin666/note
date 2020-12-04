<template>
	<view class="main flex">
		<Title :curPageTitle="curPageTitle" />
		<view class="page" @touchstart="touchStart" @touchend="touchEnd">
			<vue v-if="curPage==0" :curPageIcon="curPage" />
			<javascript v-if="curPage==1" :curPageIcon="curPage" />
			<css v-if="curPage==2" :curPageIcon="curPage" />
			<tools v-if="curPage==3" :curPageIcon="curPage" />
		</view>
		<tar-bar @tabChange="tabChange" :curPage="curPage" :tarBar="tarBar" />
	</view>
</template>

<script>
	import Title from "@/components/Title.vue";
	import vue from "./vue/vue.vue";
	import javascript from "./javascript/javascript.vue";
	import css from "./css/css.vue";
	import tools from "./tools/tools.vue";
	import tarBar from "@/components/tarbar.vue";
	import {
		getTouchData
	} from '../../utils/util.js';
	export default {
		components: {
			Title,
			vue,
			javascript,
			css,
			tools,
			tarBar
		},
		data() {
			return {
				curPage: 0, //默认显示 number string
				curPageTitle: "默认对应tarbar的标题,设置无效前往tabbar组件设置", //不可设置默认标题
				touch: {
					x: null,
					y: null
				},
				tarBar: {
					color: '#999999', //tarbar字体颜色
					backgroundColor: '#13227a',
					options: [{
							iconPath: '/static/images/vue.png',
							iconPathSelected: '/static/images/vue_selected.png',
							title: 'VUE'
						},
						{
							iconPath: '/static/images/js.png',
							iconPathSelected: '/static/images/js_selected.png',
							title: 'JS'
						},
						{
							iconPath: '/static/images/css.png',
							iconPathSelected: '/static/images/css_selected.png',
							title: 'CSS'
						},
						{
							iconPath: '/static/images/tools.png',
							iconPathSelected: '/static/images/tools_selected.png',
							title: 'TOOLS'
						},
					],
				}
			}
		},
		onLoad() {
			uni.$on('titleBoxHeight', data => console.log(data))
		},
		methods: {
			tabChange(curPage) {
				this.$set(this, 'curPage', curPage.page); // 当前加载的页面
				this.curPageTitle = curPage.title;
			},
			touchStart(e) {
				this.touch.x = e.changedTouches[0].clientX;
				this.touch.y = e.changedTouches[0].clientY;
			},
			touchEnd(e) {
				let x = e.changedTouches[0].clientX;
				let y = e.changedTouches[0].clientY;
				const touch = getTouchData(x, y, this.touch.x, this.touch.y);
				if (touch == 'left') {
					this.curPage += 1;
					if (this.curPage > this.tarBar.options.length - 1) this.curPage = this.tarBar.options.length - 1;
				} else if (touch == 'right') {
					this.curPage -= 1;
					if (this.curPage < 0) this.curPage = 0;
				}
			}
		}
	}
</script>

<style lang="scss">
	/* #ifdef MP-WEIXIN || APP-PLUS*/
	page {
		margin: 0;
		padding: 0;
		width: 100vw;
		height: 100vh;
		// overflow: hidden;
	}
	/*#endif*/
	.main {
		/* #ifdef H5 */
		flex-direction: column-reverse;
		/*#endif*/
		/* #ifdef MP-WEIXIN || APP-PLUS*/
		height: 100vh;
		flex-direction: column;
		/*#endif*/
		.page {
			flex: 1;
			height: 100%;
			background-color: #f0f0f0;
			/* #ifdef MP-WEIXIN || APP-PLUS*/
			overflow-y: scroll;
			/*#endif*/
		}
	}
</style>
