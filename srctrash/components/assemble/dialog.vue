<template>
	<div id="bo-dialog-layout" v-show="show" transition="fade" transition-mode="out-in">
		<div class="container bo-dialog" v-show="show" :transition="animate" transition-mode="out-in">
			<h3 class="dialog-title">{{config.title}}</h3>
			<div class="dialog-content">{{content}}</div>
			<div class="dialog-buttons" v-if="type=='confirm'">
				<button class="button-no" @click="no">{{config.buttonsName[1]}}</button>
				<button class="button-ok" @click="ok">{{config.buttonsName[0]}}</button>
			</div>

			<div class="dialog-buttons" v-if="type=='alert'">
				<button class="button" @click="no">{{config.buttonsName[0]}}</button>				 
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		id: {
			default: new Date().getTime()
		},
		type: {
			default: 'alert' //alert || confirm
		},
		config: {
			default () {
				return{
					title: '提 醒',
					buttonsName: ['确 定', '取 消']
				}
			}
		},
		content: {
			default: ''
		},
		show: {
			default: false
		},
		animate: {
			default: 'slideDown'
		}
	},
	created: function(){

	},
	ready: function(){
		 
	},
	methods: {
		 ok: function(){
		 	this.$dispatch('dialog-ok', this);
		 },
		 no: function(){
		 	this.$dispatch('dialog-no', this);
		 },
		 open: function(){
		 	this.show = true;
		 },
		 close: function(){
		 	this.show = false;
		 }
	},
	data () {
		return {
		 
		}
	}
}
</script>
