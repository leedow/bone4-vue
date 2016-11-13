<template>
	<a @click="clickEvent" href="javascript:void(0)">
		<slot></slot>
	</a>
</template>

<script>
import Linker from '../../addon/linker'

export default {
	props: {
		href: {
			default: ''
		},
		record: {
			default: true
		}
	},
	methods: {
		clickEvent: function(){
			if(this.record){
				Linker.add(window.location.href);		
			}
			if(this.href == 'back'){
				var old = Linker.get();
				window.location.href = old;
			} else {
				window.location.href = this.href;
			}

			return false;
		}
	},
	data () {
		return {
			
		}
	}
}
</script>
