<template>
	<div class="bo-counter{{type}}">
		<button class="counter-btn plus" :class="[style.btn, style.btn2, style.lbtn]" @click="sub">
			<i class="icon iconfont icon-move"></i>
		</button>
		<input v-ref:myinput type="text" class="bo-input counter-input" :class="[style.input]" v-model="val"  readonly>
		<button class="counter-btn sub" :class="[style.btn, style.btn2, style.rbtn]" @click="plus">
			<i class="icon iconfont icon-add1"></i>
		</button>
		<div class="bo-clear"></div>
	</div>
</template>

<script>
/*
 * On events: form-verify->input-verify|input-pass|input-wrong
 * Broadcast events: input-verify
 */
export default {
	props: {
		val: {
			default: 0
		},
		max: {
			default: 99999
		},
		min: {
			default: 0
		},
		type: {
			default:''
		},
		size: {
			default: 'sm'
		}
	},
	created: function(){
		if(this.val < this.min){
			this.val = this.min;
			 
		} else if(this.val > this.max){
			this.val = this.max;
			 
		}
		this.oldVal = this.val;
	 	this.setbtn();

	 	this.style.btn2 = 'bo-btn-' + this.size;
	 	this.style.input = 'bo-input-' + this.size;

		if(this.type == 2){
			this.style.btn = '';
			this.style.btn2 = '';
		}


	},
	methods: {
		setbtn: function(){
			this.style.lbtn = '';
			this.style.rbtn = '';
			if(this.val == this.min || !this.enable.lbtn){
				this.style.lbtn= 'counter-btn-disable'
			}
			if(this.val == this.max || !this.enable.rbtn){
				this.style.rbtn= 'counter-btn-disable';
			}
		},
		setLbtn: function(state){
			this.enable.lbtn = state;
			this.setbtn();
		},
		setRbtn: function(state){
			this.enable.rbtn = state;
			this.setbtn();
		},
		plus: function(){
			if(!this.enable.rbtn) return;

			if(this.max != '' && this.val < parseInt(this.max)){
				this.oldVal = this.val;
				this.val++;
				this.dispatch('counter-change');
			} else if(this.max == ''){
				this.oldVal = this.val;
				this.val++;
				this.dispatch('counter-change');
			}
			this.setbtn();
			
		},
		sub: function(){
			if(!this.enable.lbtn) return;
			if(this.val > this.min){
				this.oldVal = this.val;
				this.val--;	
				this.dispatch('counter-change');
			}
			this.setbtn();
			 
		},
		dispatch: function(type){
			switch(type){
				case 'counter-change': {
					this.$dispatch('counter-change', this);
				}
			}
		},
		rollback: function(){
			this.val = this.oldVal;
			this.setbtn();
		}
	},
	events: {
		 
	},
	data () {
		return {
			style: {
				btn: 'bo-btn',
				btn2: 'bo-btn-sm',
				lbtn: '',
				rbtn: '',
				input: 'bo-input-sm'
			},
			oldVal: 0,
			enable: {
				lbtn: true,
				rbtn: true
			}
		}
	}
}
</script>
