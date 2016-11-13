<template>
	<section class="bo-layout-main bo-layout-full{{addon}}{{class}}{{top}}" :style="css">
		<slot></slot>
	</section>
</template>

<script>
export default {
	props:{
		class: {
			coerce (val){
				return val?' '+val:'';
			}
		},
		addon: {
			coerce (val){
				return val?' bo-layout-main-addon':'';
			}
		},
		top: {
			coerce (val){
				if(val == 'none'){
					return ' bo-layout-main-top0';
				}else {
					return '';
				}
			}
		},
		css: {
			default: {}
		}		
	},
	data () {
		return {
			 
		}
	}
}
</script>
