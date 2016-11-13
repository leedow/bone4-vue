<template>
	<section class="bo-layout-sidemenu" v-bind:class="[style]" v-bind:style="css">
		<slot></slot>
	</section>
</template>

<script>
import Scroll from '../../addon/scroll'

export default {
	props:{
		slide: {
			default: false
		},
		top: {
			default: -1
		}
	},
	created: function(){
		var _this = this;

		if(_this.top != -1){
			_this.css ={
				top: _this.top + 'px'
			}
		}

		if(_this.slide != false){
			_this.setAbsolute();
		}

		if(this.slide != false){
			Scroll.add(function(e){
				 
				if(e.scrollHeight >= _this.slide){
					_this.setFixed();
				} else {
					_this.setAbsolute();
				}
			});
			 
		}
	},
	methods: {
		setFixed: function(){

			var _this = this;
			 
			this.css = {
				top: _this.slide + 'px'
			}
		
			this.style = '';
		},
		setAbsolute: function(){
			var _this = this;
			this.style = 'bo-layout-sidemenu-absolute';
			this.css = {
				top: _this.top + 'px'
			}
		}
	},
	data () {
		return {
			style: '',
			css: {

			}
		}
	}
}
</script>
