<template>
	<div class="product" @click="introEvent">
		<div class="pic">
			<img src="http://7xj0kd.com2.z0.glb.qiniucdn.com/{{data.image}}?imageView2/1/w/60/h/60" alt="">
		</div>
		<h3 class="name">{{data.name}}</h3>
		<p class="intro">{{data.description}}</p>
	</div>
	<div class="product-dock">
		<div class="price">
			 
		</div>
		<div class="mount">
			<form-check @check-click="buyEvent" :checked="checked" v-ref:check icon="roundclose"></form-check>
		</div>		
	</div>
	<div class="bo-clear"></div>
</template>

<script>
import {FormCheck} from '../components/form'

export default {
	components:{
		FormCheck
	},
	props:{
		data: {
			default: {}
		},
		max: {
			default: 9999
		},
		checked: {
			default: false
		} 
	},
	created: function(){
		 
	},
	events: {
		'product-unbuy': function(){
			this.checked = false;
			this.$refs.check.setChecked(false);
		}
	},
	methods: {
		buyEvent: function(check){
			var pra = {
				check: check,
				id: this.data.id,
				data: this.data
			}
			 
			this.$dispatch('product-buy', pra);
			 
		},
		introEvent: function(){
			this.$dispatch('product-intro', this);
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
