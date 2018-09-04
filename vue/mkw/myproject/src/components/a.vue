<template>
	<div>
		{{hello}}
		{{numberToDo}}
		<button @click="emitMyEvent">emit</button>
		<slot name="header">no header</slot>
		<slot name="footer">no footer</slot>
	</div>
</template>
<script type="text/javascript">
	export default{
		props: {
			'number-to-do': [Number,String]
		},
		data  () {
			return {
				'hello': 'I am component a'
			}
		},
		methods: {
			emitMyEvent () {
				this.$emit('my-event',this.hello)
			}
		}
	}
</script>