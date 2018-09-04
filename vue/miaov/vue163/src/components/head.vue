<template>
	<x-header
	  class="header"
	  slot="header"
	  :left-options="{showBack:false}"
	>
	  <div slot="left">{{lText}}</div>
	  <div>
	  	<router-link :to="{path: '/'}">
	  	  {{mainText}}
	  	</router-link>
	  </div>
	  <div slot="right">{{rText}}</div>
	</x-header>
</template>
<script type="text/javascript">
	import {XHeader} from 'vux'
	export default {
		name: 'ThisHead',
		components:{
			XHeader
		},
		data () {
			return {
				lText: '',
				mainText: 'vue',
				rText: ''
			}
		}
	}
</script>
<style scoped>
	a{
		color: red;
	}
</style>