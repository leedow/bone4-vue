<template>
	<li class="bo-tab-item" :class="[current, size, style.disable, style.type]" data-id="{{id}}" @click="clickEvent">
		<slot></slot>
		<p v-if="tag">{{tag}}</p>
	</li>
</template>

<script>
export default {
	props: {
		current: {
			coerce (val){
				return val?'bo-tab-item-current':'';
			}
		},
		size: {
			coerce (val){
				return val?'bo-col-'+val:'';
			}
		},
		disable: {
			default: false
		},
		id: {
			default: ''
		},
		tag: {
			default: false
		}
	},
	ready: function(){
		if(this.disable){
			this.style.disable = 'tab-item-disable';
		}
		if(this.tag != false){
			this.style.type = 'tab-item-tag';
		}
		
	},
	events: {
		'tab-item-click': function(msg){ 
			this.setCurrent(false);
		}
	},
	methods: {
		clickEvent: function(){
			if(!this.disable){
				this.$dispatch('tab-item-click', this.id);
				this.setCurrent(true);
			}
		},
		setCurrent: function(state){
			if(state){
				this.current = 'bo-tab-item-current';
			} else {
				this.current = '';
			}
		}
	},
	data () {
		return {
			style: {
				disable: '',
				type: ''
			}
		}
	}
}
</script>
