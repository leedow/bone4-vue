<template>
	 <div :class="[size.divsize]">
	 	<label class="bo-label" v-if="label.text" for="">{{label.text}}</label>
	 	<div :class="[icon.css, state]">
	 		<select :id="id" :class="[size.inputsize, formControl, label.css]" type="{{type}}" name="{{name}}" v-model="val" placeholder="{{placeHolder}}" @focus="focus" @blur="blur" @change="change" v-el:op>
	 			<option v-if="placeHolder" value="">{{placeHolder}}</option>
				<option v-for="item in data" :value="item.val" :selected="item.selected">{{item.text}}</option>
	 		</select>
	 		<i v-if="icon.text" class="icon iconfont" :class="[icon.text]"></i>
	 		<div v-if="notice.flag" class="bo-tip bo-tip-top">{{notice.text}}</div>
	 	</div>
	 </div>
</template>

<script>
import Format from '../../addon/format'

/*
 * Dispatch events:input-wrong|input-pass
 * On events:input-verify
 */
export default {
	props: {
		id: {
			default: ''
		},
		data: {
			default: []
		},
		size: {
			coerce (val) {//sm|lg
				if(val){
					return {
						divsize: 'bo-form-item-'+val,
						inputsize: 'bo-input-'+val
					}
				} else {
					return {
						divsize: 'bo-form-item',
						inputsize: 'bo-input'
					}
				}				 
			}
		},
		formControl: {
			coerce (val){
				return val?'bo-form-control':'';
			}
		},
		name: {
			default: ''
		},
		icon: {
			coerce (val){
				if(val){
					return {
						text: 'icon-'+val,
						css: 'bo-input-icon'
					}
				} else {
					return {
						text: 'icon-unfold',
						css: 'bo-input-icon'
					}
				}
				
			}
		},
		label: {
			coerce (val) {
				if(val){
					return {
						text: val,
						css: ''
					} 
				} else {
					return {
						text: '',
						css: 'input-no-label'
					}
				}				 
			}
		},
		placeHolder: {
			default: ''
		},
		state: {//状态
			coerce (val) {
				return val?'bo-input-'+val:'';
			},
			default: ''
		},
		required: {//是否强制填写
			default: false
		},
		format: {//数据格式
			default: ''
		},
		val: {
			default: ''
		}
	},
	created: function(){
		alert(this.val)
	},
	methods: {
		verify: function(){
			//console.log('verify input');
			this.notice.text = '';
			var res = Format.do(this.required, this.format, this.val);
			var msg = {
				name: this.name,
				val: this.val,
				type: this.type
			}
			if(!res.state){
				this.changeState('wrong');
				this.notice.text = res.msg;
				this.$dispatch('input-wrong', msg);
			} else {
				this.changeState('');
				this.$dispatch('input-pass', msg);
			}
		},
		changeState: function(state){
			this.state = 'bo-input-'+state;
		},
		focus: function(){
			if(this.state == 'bo-input-wrong'){
				this.changeState('notice');
				this.notice.flag = true;
			}
		},
		blur: function(){
			if(this.state == 'bo-input-notice'){
				this.changeState('wrong');
				this.notice.flag = false;
			}
			this.verify();
		},
		change: function(){
			this.$dispatch('select-change', this);
		},
		setSelected: function(aim){
 	 		 
 	 		var len = this.$els.op.options.length;
 	 		 
			for(var key=0; key<len; key++){		
			 	 
				this.$els.op.options[key].removeAttribute('selected');
			 
				if(this.$els.op.options[key].value == aim){
					this.$els.op.options[key].setAttribute('selected', true);
				}				
			}
			 
		},
		setSelectedById: function(aim){
			var op = document.getElementById(this.id);
 	 		 
			for(var key=0; key<op.options.length; key++){		
			 	 
				op.options[key].removeAttribute('selected');
			 
				if(op.options[key].value == aim){
					op.options[key].setAttribute('selected', true);
				}				
			}
		},
		setVal: function(val){
			this.val = val;
		},
		getText: function(){
			var res;
			for(var i=0; i<this.data.length; i++){
				if(data[i].val == this.val)
					res = data[i].text;
			}
			return res;
		}
	},
	events: {
		'input-verify': function(){//检查格式
			this.verify();
		} 
	},
	data () {
		return {
			notice: {
				flag: false,
				text: ''
			}
		}
	}
}
</script>
