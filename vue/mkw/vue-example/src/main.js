import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import OrderList from './pages/orderList'
import mock from './mock/mock'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
	linkActiveClass: 'active',
	mode: 'history',	// 此选项表示不需要hash值来进行切换
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/orderList',
			component: OrderList
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				}
			]
		}
	]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
