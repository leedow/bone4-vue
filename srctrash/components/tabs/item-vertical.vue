<template>
	<li class="bo-tab-item{{iconcss}} {{arrow}}">
		<i class="icon iconfont icon-{{icon}}"></i>
		<slot></slot>
	</li>
</template>

<script>
export default {
	props:{
		icon:{
			coerce (val){				
				return val?val:'';
			}
		},
		iconcss:{
			coerce (val){				
				return val?'-icon':'';
			}
		},
		arrow:{
			coerce (val){
				return val?' bo-tab-item-arrow':'';
			}
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
