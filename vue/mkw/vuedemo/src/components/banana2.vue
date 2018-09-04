<template>
	<h1>{{msg}}</h1>
</template>
<script type="text/javascript">
	export default {
		name: 'banana',
		data () {
			return {
				msg: 'I am banana'
			}
		}
	}
</script>

<style scoped>
	h1{
		font-size: 50px;
		color: orange;
	}
</style>