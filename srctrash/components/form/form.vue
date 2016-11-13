<template>
	 <div :class="[type]">
	 	<slot></slot>
	 	<p class="form-notice bo-notice-warm" v-if="notice.show">
		<i class="icon iconfont icon-roundclosefill"></i>
	 	{{notice.text}}</p>
	 </div>
	 <notice :show.sync="showNotice" :content="noticeContent"></notice>
</template>

<script>
import Notice from '../assemble/notice.vue'
/*
 * On events: form-verify->input-verify|input-pass|input-wrong
 * Broadcast events: input-verify
 */
export default {
	components: {
		Notice
	},
	props: {
		type: {
			coerce (val) {//sm|lg
				return val?'bo-form-'+val:'bo-form';
			}
		},
		lock: {//是否在提交中标识，true表示表单正在处理，防止重复提交
			default: false
		} 
	},
	methods: {
		verify: function(){
			this.pass = true;
			this.$broadcast('input-verify', '');
			if(!this.pass){
				this.showNotice = true;
				this.noticeContent = "您输入的内容有误";
			}
		},
		addData: function(key, val){
			this.data[key] = val;
		},
		removeData: function(key){
			this.pass = false;
			delete this.data[key];
		},
		setNotice: function(msg){
			this.notice = {
				show: true,
				text: msg
			}
			var _this = this;
			var timer = setTimeout(function(){
				_this.notice = {
					show: false,
					text: ''
				}
			}, 5000);
		}
	},
	events: {
		'submit-click': function(){
			this.verify();
			if(this.pass && !this.lock){
				this.$dispatch('form-submit', this.data);
			}
		},
		'form-verify': function(){
			this.verify();
		},
		'form-lock': function(){
			this.lock = true;
			return true;
		},
		'form-free': function(){
			this.lock = false;
			return true;
		},
		'input-pass': function(msg){
			this.addData(msg.name, msg.val);
		},
		'input-wrong': function(msg){
			this.removeData(msg.name);
		}
	},
	data () {
		return {
			data: {},
			pass: true,
			notice: {
				show: false,
				text: ''
			},
			showNotice: false,
			noticeContent: ''
		}
	}
}
</script>
