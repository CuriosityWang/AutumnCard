<template>
	<view class="content">
		<image class="logo" src="/static/gong.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="text-area">
			<text>		
			  &emsp;&emsp;丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
			  &emsp;&emsp;明月几时有？把  酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
			  &emsp;&emsp;转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。
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
	.text-area {
		display: flex;
		justify-content: center; 
		line-height: 60rpx;
		padding-left: calc(30rpx);
	}
	.text-area1{
	/* 	display: flex;
		justify-content: center;
		line-height: 60rpx; */
	}
</style>
