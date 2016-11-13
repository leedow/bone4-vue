<template>
	 <div :class="[size.divsize, underline]">
	 	<label class="bo-label" v-if="label.text" for="">{{label.text}}</label>
	 	<div :class="[icon.css, state]">
	 		<input :class="[size.inputsize, formControl, label.css]" :readonly="readonly" type="{{type}}" name="{{name}}" v-model="val" placeholder="{{placeHolder}}" @focus="focus" @blur="blur">
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
		type: {
			default: 'text'
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
						text: false,
						css: ''
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
		underline: {
			coerce (val){
				return val?'bo-form-item-noline':'';
			}
		},
		val:{
			default:''
		},
		readonly: {
			default: false
		}
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
				this.pass = false;
			} else {
				this.changeState('');
				this.$dispatch('input-pass', msg);
				this.pass = true;
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
		}
	},
	watch: {
		'val': function(val, oldval){
			this.verify();
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
			},
			pass:true
		}
	}
}
</script>
