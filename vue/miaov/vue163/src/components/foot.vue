<template>
	<tabbar slot="bottom">
    <tabbar-item v-for="(item,index) in tabBarList" :link="item.href" :key="index">
      <img :src="setTabBarIcon(item)" slot="icon">
      <span slot="label">{{item.title}}</span>
    </tabbar-item>
  </tabbar>
</template>
<script type="text/javascript">
import { Tabbar, TabbarItem } from 'vux'
export default {
	name: 'ThisFoot',
	components: {
		Tabbar,
		TabbarItem
	},
	data () {
		return {
			tabBarList: [
				{
					title: '首页',
					src: require('../assets/home.png'),
					activeSrc: require('../assets/home-f.png'),
					href: '/index'
				},
				{
					title: '功能',
					src: require('../assets/play.png'),
					activeSrc: require('../assets/play-f.png'),
					href: '/more'
				},
				{
					title: '购票',
					src: require('../assets/order.png'),
					activeSrc: require('../assets/order-f.png'),
					href: '/ticket'
				},
				{
					title: '我的',
					src: require('../assets/user.png'),
					activeSrc: require('../assets/user-f.png'),
					href: '/mine'
				}
			]
		}
	},
	methods: {
		setTabBarIcon (item) {
			return this.$route.path == item.href ? item.activeSrc : item.src
		}
	}
}
</script>
<style></style>