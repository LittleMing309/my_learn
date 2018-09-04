import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import notFound from '@/components/404'
import study from "@/views/study"
import work from '@/views/work'
import hobby from '@/views/hobby'
import slider from "@/views/slider"
import user from '@/components/user'

Vue.use(VueRouter)

let router = new VueRouter({
	mode: 'history',	// hash模式和history模式
	scrollBehavior(to,form,savePosition){	// 点击浏览器的前进后退和切换导航时触发
		// console.log(to)	//要进入的目标路由对象 要去向哪里
		// console.log(form)	// 离开的路由对象	 从哪里来
		// console.log(savePosition)	// 记录滚动条的坐标，点击前进后退时记录值

		// 点击浏览器前进后退时设置滚动距离
		// if(savePosition){
		// 	return savePosition
		// }else{
		// 	return {x:0,y:0}
		// }

		if(to.hash){
			return {
				selector: to.hash
			}
		}
	},
	linkActiveClass: 'is-active', // 设置router-link的class名
	routes: [
		{
			path: '/',
			component: home,
			meta: {
				index: 0,
				title: 'home'
			}
		},
		{
			path: '/user/:tip?/:userId?',		// /user/1  /user/2 /user
			name: 'User',
			meta: {
				index: 3,
				title: 'user'
			},
			component: user
		},
		{
			path: '/home',
			name: 'Home',
			component: home,
			alias: '/index'		// 别名
		},
		{
			path: '/about',
			component: about,
			children:[
				{
					path: '',
					name: 'About',
					component: study,
					meta: {
						index: 2,
						title: 'about'
					}
				},
				{
					// path: 'work',	// 路径显示为 /about/work
					path: '/work',
					name: 'Work',
					component: work
				},
				{
					path: '/hobby',
					name: 'Hobby',
					component: hobby
				}
			]
		},
		{
			path: '/document',
			name: 'Document',
			// 局部钩子函数
			beforeEnter(to,from,next){
				console.log('beforeEnter')
				next()
			},
			meta: {
				index: 1,
				login: true,
				title: 'document'
			},
			components: {
				default: document,
				slider: slider
			}
		},
		{
			path: '*',
			// component: notFound
			// 重定向
			// redirect: '/home'
			// redirect: {path: '/home'}
			// redirect: {name: 'Home'}
			redirect: (to)=>{	//动态设置重定向目标
				// to是目标路由对象，就是访问路径的路由信息
				console.log(to)
				if(to.path === '/345'){
					return '/home'
				}else if(to.path === '/123'){
					return '/about'
				}
			}
		}
	]
})

/*
*	全局路由钩子函数
*
router.beforeEach((to,from,next) => {
	// next()
	console.log('beforeEach')
	if(to.meta.login){
		next('/login')
	}else{
		next()
	}
})

router.afterEach((to,from) => {
	if(to.meta.title){
		window.document.title = to.meta.title
	}else{
		window.document.title = 'helloWorld'
	}
})
*
*/

export default router;