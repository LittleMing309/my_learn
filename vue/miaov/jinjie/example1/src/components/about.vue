<template>
	<div>
		关于我
		<hr>
		<ul class="nav">
			<!-- <router-link to="/about" exact tag="li">
				<a>study</a>
			</router-link>
			<router-link to="/about/work" tag="li">
				<a>work</a>
			</router-link>
			<router-link to="/about/hobby" tag="li">
				<a>hobby</a>
			</router-link> -->
			<router-link :to="{name:'About'}" exact tag="li">
				<a>study</a>
			</router-link>
			<router-link :to="{name:'Work'}" tag="li">
				<a>work</a>
			</router-link>
			<router-link :to="{name:'Hobby'}" tag="li">
				<a>hobby</a>
			</router-link>
		</ul>
		<hr>
		测试数据：{{test}}
		<router-view></router-view>
	</div>	
</template>

<script>
	export default {
		data(){
			return {
				test: '改变前'
			}
		},
		beforeCreate(){
			console.log('beforeCreate')
		},
		beforeRouteEnter(to,from,next){
			console.log('beforeRouteEnter')
			console.log(this)	// undefined  因为路由进入之前vue实例还没有创建
			next( (vm) => {	// vm参数就是vue实例
				vm.test = '改变了'
			})
		},
		beforeRouteUpdate(to,from,next){	// 导航更新的钩子函数
			console.log('beforeRouteEnter')
			next()
		},
		beforeRouteLeave(to,from,next){		// 导航离开的钩子函数
			next()
		}
	}
</script>

<style>
	
</style>