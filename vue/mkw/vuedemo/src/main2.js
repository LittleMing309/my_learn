// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'
import redApple from './components/redApple'

Vue.use(VRouter)
Vue.use(Vuex)

let router = new VRouter({
	linkActiveClass: 'active',
	mode: 'history',	// 此选项表示不需要hash值来进行切换
	routes: [
		{
			path: '/',
			redirect: '/apple'
		},
		{
			// path: '/apple/:color',	// 如果再次设置了参数，页面的路由也必须与此保持一致，否则无效
			path: '/apple',
			component: Apple,
			name: 'appleTag',	// 命名路由，router-link时直接调用名字即可
			children: [
				{
					path: 'red',
					component: redApple
				}
			]
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
  template: '<App/>',
  components: { App }
})
