<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<p>{{$route.params.color}}</p>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'apple',
		data () {
			return {
				msg: 'I am apple'
			}
		},
		methods: {
			getParam () {
				console.log(this.$route.params)
			}
		}
	}
</script>

<style scoped>
	h1{
		font-size: 50px;
		color: red;
	}
</style>