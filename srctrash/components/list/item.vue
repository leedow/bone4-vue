<template>
	<li class="list-item-{{type}}">
		<slot :data="data"></slot>
	</li>
</template>

<script>
export default {
	props:{
		data: {
			default: 3
		},
		type: {
			default: ''
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
