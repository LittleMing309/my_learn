// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'

Vue.use(VRouter)
Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		totalPrice: 0
	},
	getters: {	// 用来获取状态集里的数据
		getTotal (state) {		// state就是状态集
			return state.totalPrice
		}
	},
	mutations: {		// 同步操作
		increment (state,price) {
			state.totalPrice += price
		},
		decrement (state,price) {
			state.totalPrice -= price
		}
	},
	actions: {		// 异步操作，适用于与后端请求
		increase (context, price) {
			context.commit('increment', price)
		}
	}
});

let router = new VRouter({
	linkActiveClass: 'active',
	mode: 'history',	// 此选项表示不需要hash值来进行切换
	routes: [
		{
			path: '/',
			redirect: '/apple'
		},
		{
			path: '/apple',
			component: Apple,
			name: 'appleTag'	// 命名路由，router-link时直接调用名字即可
		},
		{
			path: '/banana',
			component: Banana
		}
	]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
