<template>
	<div class="hello">
		<h4>
			{{msg}}
		</h4>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'redApple',
		data () {
			return {
				msg: 'I am red Apple'
			}
		}
	}
</script>
<style scoped>
	h4{
		font-size: 20px;
	}
</style>