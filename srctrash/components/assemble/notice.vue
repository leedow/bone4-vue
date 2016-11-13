<template>
	<div class="bo-notice" v-show="show" :transition="animate" transition-mode="out-in">
	 	{{content}}
	</div>
</template>
<script>
export default {
	props: {
		id: {
			default: new Date().getTime()
		},
		content: {
			default: ''
		},
		show: {
			default: false
		},
		time: {
			default: 2000
		},
		animate: {
			default: 'slideUp'
		}
	},
	created: function(){

	},
	ready: function(){
		 
	},
	methods: {
		 in: function(){
		 	this.show =  true;
		 },
		 out: function(){
		 	this.show = false;
		 }
	},
	watch: {
		'show': function(val , oldval){
			var _this = this;
		 
			if(val){
				var timer = setTimeout(function(){
					_this.show = false;
				}, this.time)
			}
		}
	},
	data () {
		return {
		 
		}
	}
}
</script>
