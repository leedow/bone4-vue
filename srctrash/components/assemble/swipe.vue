<template>
	<div :id="id"  class='swipe'>
		<div class='swipe-wrap' v-el:s>
			<slot></slot>
		</div>
		<div class="swipe-counter">
			 <span v-for="item in counterHTML" :class="item"></span>
		</div>
	</div>
</template>
<style>
.swipe {
	overflow: hidden;
	visibility: hidden;
	position: relative;
}
.swipe .swipe-counter{
	position: absolute;
	bottom:10px;
	width: 100%;
	text-align: center;

}
.swipe .swipe-counter span{
	margin:0 5px;
	display: inline-block;
	width:8px;
	height: 8px;
	background: rgba(255,255,255,0.8);
	border-radius:4px;
}
.swipe .swipe-counter .current{
	width: 8px;
	height: 8px;
	background: #B61D1D;
	border-radius: 4px;
}
.swipe-wrap {
	overflow: hidden;
	position: relative;
}
.swipe-wrap > div {
	float:left;
	width:100%;
	position: relative;
}
.swipe-wrap > div > img{
	width:100%;
}
</style>
<script>
import Swipe from '../../addon/swipe'

export default {
	props: {
		id: {
			default: new Date().getTime()
		}
	},
	ready: function(){
		var _this = this;
		
		_this.counter = this.$els.s.getElementsByTagName('div').length;
		_this.initCounter()
		var elem = document.getElementById(_this.id);
		window.mySwipe = Swipe(elem, {
		  // startSlide: 4,
		  // auto: 3000,
		  // continuous: true,
		  // disableScroll: true,
		  // stopPropagation: true,
		   callback: function(index, element) {
		   		_this.updateCounter(index);
		   },
		  // transitionEnd: function(index, element) {}
		});

	},
	methods: {
		initCounter: function(){
			var c = [];
			for(var i=0; i<this.counter; i++){
				if(i==0){
					c.push('current');
				} else {
					c.push('');
				}				
			}
			this.counterHTML = c;
		},
		updateCounter: function(index){
			var c = [];
			for(var i=0; i<this.counter; i++){
				if(i==index){
					c.push('current');
				} else {
					c.push('');
				}				
			}
			this.counterHTML = c;
		}
	},
	data () {
		return {
			counter: 0,
			counterHTML: []
		}
	}
}
</script>
