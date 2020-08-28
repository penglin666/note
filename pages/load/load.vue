<template>
	<view class="load flex">
		<view class="ani flex">
			<view class="flex">
				<image src="../../static/images/wo.png" :animation="aniWho">
				<image src="../../static/images/de.png" :animation="aniDe">
				<image src="../../static/images/bi.png" :animation="aniBi">
				<image src="../../static/images/ji.png" :animation="aniJi">
			</view>
		</view>
		<!-- 版权所有 -->
		<view class="copyright flex">
			<view>Copyright © 2020 - foever</view>
			<view>www.geniuspl.cn所有</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				aniWho: {},
				aniDe: {},
				aniBi: {},
				aniJi: {},
			};
		},
		onShow() {
			let animationTop = animationRight = animationBot = animationLeft = uni.createAnimation({
				timingFunction: 'linear'
			});
			let animationRight = uni.createAnimation({
				timingFunction: 'linear'
			});
			let animationBot = uni.createAnimation({
				timingFunction: 'linear'
			});
			let animationLeft = uni.createAnimation({
				timingFunction: 'linear'
			});
			animationTop.translateY(300).step({
				duration: 500
			});
			this.aniWho = animationTop.export();

			animationRight.translateX(-300).step({
				duration: 500,
				delay: 500
			});
			this.aniDe = animationRight.export();

			animationBot.translateY(-600).step({
				duration: 500,
				delay: 1000
			});
			this.aniJi = animationBot.export();

			animationLeft.translateX(300).step({
				duration: 500,
				delay: 1000
			});
			this.aniBi = animationLeft.export();

			this.timer=setTimeout(()=>{
				uni.redirectTo({
					url:'../index/index'
				})
			},2000)
		},
		onHide() {
			clearTimeout(this.timer)
		}
	}
</script>

<style lang="scss">
	page{
		background-image: url(~@/static/images/load_bg.jpg);
		background-position: 20% 50%;
	}
	.load {
		width: 100vw;
		height: 100vh;
		align-items: center;
		flex-direction: column;

		.ani {
			width: 80%;
			flex:1;
			align-items: center;
			flex-wrap: wrap;
			background-color: transparent;
			>view {
				width: 100%;
				height: 600upx;
				flex-wrap: wrap;
				position: relative;

				image {
					position: absolute;
					width: 50%;
					height: 300upx;
					box-sizing: border-box;
				}

				>image:first-child {
					top: -300px;
					left: 0;
				}

				>image:nth-child(2) {
					right: -300px;
					top: 0;
				}

				>image:nth-last-child(2) {
					left: -300px;
					bottom: 0;
				}

				>image:last-child {
					right: 0;
					bottom: -600px;
				}
			}
		}
		.copyright {
			background-color: rgba(192,192,192,.4);
			height: 120upx;
			width:100vw;
			color:#fff;
			flex-direction: column;
			align-items: center;
			justify-content: center; 
		}
	}
</style>
