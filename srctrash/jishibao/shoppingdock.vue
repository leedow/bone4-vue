<template>
	<div class="shp-dock">
		<div id="total">
			总计 <span>{{total}}</span> 件
		</div>
		<div id="buy">
			<btn type="warm" size="sm" :name="name" icon="cart" @click="goEvent"></btn>
		</div>
	</div>
</template>

<script>
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'

export default {
	components:{
		 Btn,
		 Icon
	},
	props:{
		 total: {
		 	default: 0
		 },
		 name: {
		 	default: '去下单'
		 }
	},
	methods: {
		goEvent: function(){
			this.$dispatch('shoppingdock-go', '');
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
