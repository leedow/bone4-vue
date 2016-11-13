<template>
	<ul class="bo-tab-side">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	events: {
		'tab-item-click': function(msg){
			this.$broadcast('tab-item-click', msg);
			return true;
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>