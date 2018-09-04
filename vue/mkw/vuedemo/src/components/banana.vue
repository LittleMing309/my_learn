<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<button @click="addOne">加</button>
		<button @click="minusOne">减</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'apple',
		data () {
			return {
				msg: 'I am banana',
				price: 15
			}
		},
		methods: {
			addOne () {
				this.$store.commit('increment', this.price)
			},
			minusOne () {
				this.$store.commit('decrement', this.price)
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