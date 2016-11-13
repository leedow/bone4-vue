<template>
 	<div class="bo-stars{{size}}">					
		<button v-for="item in stars" class="star" :class="[item.style]" :data-val="item.val" @click="score(item.val)">
			<i class="icon iconfont icon-favorfill"></i>
		</button>
	 
	</div>
</template>

<script>
/*
 
 */
export default {
	props: {
		val: {
			default: 0
		},
		max: {
			default: 5
		},
		size: {
			coerce (val){
				return val?'-'+val:'';
			}
		},
		disable: {
			default: false
		}
	},
	created: function(){
		 
	},
	methods: {
	 	score: function(val){ 
	 		if(this.disable) return;
	 		this.val = val;
	 		this.update();
	 		this.$dispatch('stars-change', this);
	 	},
	 	update: function(){
	 		var ss = [];
	 		for(var i=0 ; i<this.max; i++){
	 			var s = {};
				if(i<this.val){
					s = {
						style: 'star-check',
						val: i+1,
						checked: true
					}
				} else {
					s = {
						style: '',
						val: i+1,
						checked: false
					}
				}
				ss.push(s);
			}
			this.stars = ss;
			 
	 	}
	},
	events: {
		 
	},
	created: function(){
		var s = {}
		for(var i=0 ; i<this.max; i++){
			if(i<this.val){
				s = {
					style: 'star-check',
					val: i+1,
					checked: true
				}
			} else {
				s = {
					style: '',
					val: i+1,
					checked: false
				}
			}

			this.stars.push(s);
		}
	},
	data () {
		return {
		 	stars: []
		}
	}
}
</script>
