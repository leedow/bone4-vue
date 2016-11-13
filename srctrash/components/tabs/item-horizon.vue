<template>
	<a class="bo-tab-item{{current}}{{size}}" @click="clickEvent">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		current: {
			coerce (val){
				return val?' bo-tab-item-current':'';
			}
		},
		size: {
			coerce (val){
				return val?' bo-col-'+val:'';
			}
		},
		href: {
			default: ""
		},
		id: {
			default: ""
		}
	},
	events: {
		'tab-item-click': function(msg){ 
			this.setCurrent(false);
		}
	},
	methods: {
		clickEvent: function(){
			if(this.href != ''){
				window.location.href = this.href;
			} 
			this.$dispatch('tab-item-click', this);
			this.setCurrent(true);
		},
		setCurrent: function(state){
			if(state){
				this.current = ' bo-tab-item-current';
			} else {
				this.current = '';
			}
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
