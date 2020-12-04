<template>
	<view class="tools">
		<!-- <list :listIcon="curPageIcon" :note="note"/> -->
		<navigator url="/pages/map/map">
			<view class="list-title flex">
				<view class='icon-tools iconfont' />
				<view class="iconfont">地图</view>
				<view :class="['iconfont', 'icon-list-right',{'iconAni':item.show}] " />
			</view>
		</navigator>
	</view>
</template>

<script>
	import list from "@/components/list.vue";
	export default {
		components: {
			list
		},
		data() {
			return {
				note: [{
					title: "tools"
				}]
			};
		},
		props: {
			curPageIcon: {
				type: [String, Number]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.list-title {
		height: 80upx;
		background-color: #fff;

		>.iconfont {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		>.iconAni {
			transform: rotate(90deg);
		}

		>.iconfont:nth-child(odd) {
			width: 80upx;
		}

		>.iconfont:nth-child(even) {
			justify-content: flex-start;
			flex: 1;
		}

	}
</style>
