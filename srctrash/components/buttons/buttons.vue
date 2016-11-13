<template>
	<button :class="[type+blank, size, block]" v-bind:style=css @click="clickEvent">
		<i v-if="icon" class="icon iconfont icon-{{icon}}"></i>
		{{name}}
	</button>
</template>

<script>
export default {
	props: {
		size: {
			coerce (val) {//sm|lg
				return val?'bo-btn-'+val:'';
			}
		},
		type: {
			coerce (val) {//primary|warm
				return val?'bo-btn-'+val:'bo-btn';
			}
		},
		blank: {
			coerce (val) {
				return val?'-blank':'';
			}
		},
		icon: {
			coerce (val) {
				return val?val:'';
			}
		},
		block: {
			coerce (val){
				return val?'bo-btn-block':'';
			}
		},
		name: {
			default: ''
		} 
	},
	methods: {
		clickEvent: function(){		 
			this.$dispatch('btn-click', '');
		},
		setName: function(name){
			this.name = name;
		}
	},
	data () {
		return {
			
		}
	}
}
</script>
