<template>
	<div class="bo-header-dock-{{align}}">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['align'],
	data () {
		return {
			test: 'test'
		}
	}
}
</script>
