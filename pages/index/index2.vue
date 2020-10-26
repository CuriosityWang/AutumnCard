<template>
	<view class="content">
		<image class="logo" src="/static/home.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			
		</view>
		<view  class="text">
			<text>
				无论身在何方
				都祝你能感受到家的温暖
			</text>
		</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Greeting Card of Mid-Autumn Festival '
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.text {
		display: flex;
		font-size: 40rpx;
		color: #e69966;
		justify-content: center;
	}
	.logo {
		height: 500rpx;
		width: 600rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	
</style>
