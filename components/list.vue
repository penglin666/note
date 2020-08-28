<template>
	<view class="list">
		<view class="list-item" v-for="(item,index) in note" :key="index">
			<view :class="[{'cur-list-title':item.show},'list-title','flex']" @click="status(index)">
				<view :class="[{'icon-vue':listIcon==0},
				{'icon-js':listIcon==1},
				{'icon-css':listIcon==2},
				{'icon-tools':listIcon==3},
				'iconfont']" />
				<view class="iconfont">{{item.title}}</view>
				<view :class="['iconfont', 'icon-list-right',{'iconAni':item.show}] " />
			</view>
			<view class="list-content" v-if="item.show">
				<view v-for="(value,ind) in item.content" :key="ind" class="details">
					<view style="font-weight: bold;">{{value.id}}.{{value.smTitle}}</view>
					<view style="text-indent: 2rem;">{{value.text}}</view>
					<view class="pic-explain" v-if="value.imgs.length">
						<view v-for="(url,i) in value.imgs" :key="i">
							<image :src="url" @click="goPic(i,value.imgs)" />
						</view>
					</view>
					<view v-else class="noPic-explain">
						<text>暂无图片</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			listIcon: {
				type: [String, Number]
			},
			note: {
				type: Array
			}
		},
		methods: {
			status(index) {
				this.$emit('listStatus', index);
			},
			goPic(index, imgs) {
				uni.navigateTo({
					url: `/pages/pic/pic?index=${index}&imgs=${imgs}`
				})
			}
		},
		onPageScroll(res) {
			console.log(res); //距离页面顶部距离
		},

	}
</script>

<style lang="scss">
	.list {
		box-sizing: border-box;

		>.list-item {
			>.list-title {
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

			>.cur-list-title {
				background-color: #DEB887;
				font-weight: bolder;
			}

			>.list-content {
				text-align: auto;
				padding: 20upx 8upx;
				background-color: #a53007;
				color: #fff;

				>.details {
					>.pic-explain {
						margin-top: 8upx;
						height: 200upx;
						display: flex;

						>view:not(:first-child) {
							margin-left: 8upx;
						}

						>view {
							width: 50%;
							flex: 1;

							>image {
								width: 100%;
								height: 100%;
							}
						}
					}

					.noPic-explain {
						margin-top: 8upx;
						height: 200upx;
						text-align: center;
						line-height: 200upx;
						background-color: #1e1e1e;
						color:#eee;
					}
				}

			}
		}

		>.list-item:not(:first-child) {
			margin-top: 4upx;
		}

	}
</style>
