<template>
	<view class="pic flex">
		<movable-area scale-area>
			<movable-view :scale-value="scale" scale="true" scale-min="1" scale-max="4" @click="dblclick" data-lastClick="lastClick">
				<image :src="imgs[current]" @touchstart="touchStart" @touchend="touchEnd" v-if="imgs.length" />
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	import {
		getTouchData
	} from '../../utils/util.js';
	export default {
		data() {
			return {
				current: null,
				imgs: null,
				touch: {
					x: null,
					y: null
				},
				scale: 1,
				touchStartTime: 0//判断双击数据
			};
		},
		onLoad(op) {
			this.current = op.index;
			const imgs = op.imgs.split(",");
			this.imgs = imgs;
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
						if (this.scale == 3) {
							this.scale = 1;
						} else {
							this.scale = 3;
						}
					}
					this.touchStartTime = 0
				}
			}

		},

	}
</script>

<style lang="scss">
	.pic {
		height: 100vh;
		background-color: black;
		align-items: center;

		movable-area {
			height: 50vh;
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
