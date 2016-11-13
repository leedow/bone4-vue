<template>
	<div class="bo-tabmenu" @click="clickEvent">				
		<div class="tabmenu-pic" v-bind:style="css">
			<i class="icon iconfont icon-{{type}}"></i>
		</div>
		<div class="tabmenu-title">
			{{title}}
		</div>
	</div>
</template>

<script>
//弃用
export default {
	props: {
		type: {
			default: ''		
		},
		title: {
			default: ''
		},
		href: {
			default: ''
		},
		color: {
			default: ''
		}
	},
	ready: function(){
		var _this = this;
		 if(this.color != ''){
		 	this.css = {
		 		background: _this.color
		 	}
		 }
	},
	events: {

	},
	methods: {
		clickEvent: function(){
			if(this.href != ''){
				window.location.href = this.href;
			}
			this.$dispatch('menu-square-click', this);
		} 
	},
	data () {
		return {
			 css : {}
		}
	}
}
</script>
