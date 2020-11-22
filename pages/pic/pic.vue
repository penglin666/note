<template>
	<view class="pic-data">
		<Title :curPageTitle="curPageTitle" />
		<view class="pic flex" @tap="back">
			<movable-area scale-area>
				<movable-view :scale-value="scale" scale="true" scale-min="1" scale-max="4" @tap.stop="dblclick" data-lastClick="lastClick">
					<image :src="imgs[current]" @touchstart="touchStart" @touchend="touchEnd" v-if="imgs.length" />
				</movable-view>
			</movable-area>
		</view>
	</view>
</template>

<script>
	import Title from "@/components/Title.vue";
	import {
		getTouchData
	} from '../../utils/util.js';
	export default {
		components: {
			Title
		},
		data() {
			return {
				curPageTitle: '111',
				current: null,
				imgs: null,
				touch: {
					x: null,
					y: null
				},
				scale: 1,
				touchStartTime: 0 //判断双击数据
			};
		},
		onLoad(op) {
			console.log(op);
			this.current = op.index;
			const imgs = op.imgs.split(",");
			this.imgs = imgs;
			this.curPageTitle = op.title;
		},
		methods: {
			touchStart(e) {
				this.touch.x = e.changedTouches[0].clientX;
				this.touch.y = e.changedTouches[0].clientY;
			},
			touchEnd(e) {
				let x = e.changedTouches[0].clientX;
				let y = e.changedTouches[0].clientY;
				this.current = parseInt(this.current);
				const touch = getTouchData(x, y, this.touch.x, this.touch.y);
				if (touch == 'left') {
					this.current += 1;
					if (this.current >= this.imgs.length) {
						this.current = 0;
					}
				} else if (touch == 'right') {
					this.current -= 1;
					if (this.current < 0) {
						this.current = this.imgs.length - 1;
					}
				}
			},
			dblclick(e) {
				if (this.touchStartTime == 0) {
					this.touchStartTime = new Date().getTime()
				} else {
					if (new Date().getTime() - this.touchStartTime <= 300) {
						if (this.scale == 2) {
							this.scale = 1;
						} else {
							this.scale = 2;
						}
					}
					this.touchStartTime = 0
				}
			},
			back(){
				uni.navigateBack()
			}

		},

	}
</script>

<style lang="scss">
	.pic {
		height: calc(100vh - 80px);
		flex-direction: column;
		justify-content: center;
		movable-area {
			height: 36%;
			width: 100vw;
			movable-view {
				width: 100%;
				height: 100%;

				image {
					width: 100%;
				}
			}
		}
	}
</style>
