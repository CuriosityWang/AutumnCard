<template>
	<view class="content">
		<image class="logo" src="/static/index4.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			
		</view>
		<view  class="text-area">
			<view class="box-item" v-for="item in TextList">
					{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Greeting Card of Mid-Autumn Festival',
				TextList: ["家与国撞个了满怀"]
			}
		},
		onLoad() {

		},
		methods: {
			onPullDownRefresh () {
				setTimeout(()=>{
					this.TextList= ['祖国，', '我们，', '都将会越来越强']
					uni.stopPullDownRefresh()
				},1000)
			}

		}
	}
</script>

<style>
	.logo {
		height: 500rpx;
		width: 500rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.box-item{
		height: 10px;
		line-height: 100px;
	}
	.text-area {
		font-size: 50rpx;
		display: flex;
		justify-content: center;
		line-height: 70rpx;
	}
</style>
