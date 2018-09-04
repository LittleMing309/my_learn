<template>
	<div class="more">
		{{msg}}
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'ThisMore',
		data () {
			return {
				msg: 'I am more',
				title: 'more'
			}
		}
	}
</script>
<style scoped>
	.more{
		font-size: 25px;
		text-align: center;
		margin-top: 46px;
	}
</style>