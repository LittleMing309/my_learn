// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueJsonp from 'vue-jsonp'
import VueScroll from 'vue-scroller'
import {ToastPlugin} from 'vux'
import IndexPage from './components/content'
import morePage from './components/more'

Vue.config.productionTip = false
Vue.use(VueJsonp)
Vue.use(VueScroll)
Vue.use(ToastPlugin)
Vue.use(VueRouter)

let router = new VueRouter({
	linkActiveClass: 'active',
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/index',
			component: IndexPage
		},
		{
			path: '/more',
			component: morePage
		}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
