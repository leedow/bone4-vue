<template>
	 <div class="product2" style="background:#fff;">	 	 		
 		<div class="pic"><img v-bind:src="data.image" alt=""></div>
 		<div class="name">{{data.content}}</div>
 		<div class="price">
 			<span class="num">￥{{data.price}}</span>
		<span class="oldprice"></span>
 		</div>
 		<div class="dock">
 		<div class="dock-left">
 			<form-counter size="tiny" v-ref:mycounter :val.sync="count" @counter-change="counterChange"></form-counter>
		</div>
		<div class="dock-right">
			<form-check @check-click="buyEvent" :checked.sync="checked" v-ref:check  flag=true></form-check>
	 	</div>
	 	</div>
 	</div>
</template>

<script>
import {FormCheck, FormCounter} from '../components/form'

export default {
	components:{
		FormCheck,
		FormCounter
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
		},
		count: {
			default: 0
		}
	},
	created: function(){
		if(this.data.amount > 0){
			this.count = this.data.amount;
			this.checked = true;
		}
	},
	events: {
		'product-unbuy': function(){
			//this.checked = false;
			//this.$refs.check.setChecked(false);
		}
	},
	methods: {
		buyEvent: function(){
			this._fresh();
			this.$dispatch('product-buy', this);
		},
		counterChange: function(e){
			if(e.val == 0){
				e.rollback();
			}
			this._fresh();
		},
		update: function(){//添加到购物车成功更新
			this.data.amount = this.count;
			this._fresh();
		},
		rollback: function(){//添加到购物车失败回滚
			this.count = this.data.amount;
			this._fresh();
		},
		_fresh: function(){
			if(this.data.amount == 0){
				this.$refs.check.setChecked(false);	
			} else {
				this.$refs.check.setChecked(true);	
			}
			if(this.count != this.data.amount){
				this.$refs.check.setAddonClass('bo-shp-warm');
			} else {
				this.$refs.check.setAddonClass('');
			}
		},
		introEvent: function(){
			 
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
