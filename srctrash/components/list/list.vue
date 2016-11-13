<template>
	<ul class="bo-list">
		<slot></slot>
		<p class="bo-list-loading" v-if="loadingShow">{{loadingMsg}}</p>
		<p class="bo-list-end" v-if="endShow">{{endMsg}}</p>
	</ul>
</template>

<script>
import Scroll from "../../addon/scroll"

export default {
	props:{
		pageSize: {
			default: 0
		},
		endMsg: {
			default: '没有更多数据了'
		},
		loadingMsg: {
			default: '努力加载中'
		}
	},
	ready: function(){
		var _this = this;

		Scroll.add(function(e){
			if(_this.endShow){
				return;
			}
			if(e.scrollHeight >= e.bodyHeight - e.clientHeight){
			 

				 _this.$dispatch('list-scroll', {
				 	pageSize: _this.pageSize,
				 	page: _this.getPages(),
				 	total: _this.getTotal()
				 });
			}
		});

		 
	},
	methods: {
		clean: function(){
			this.data = [];
		},
		setData: function(data, key){//data=[] , key=String
			this.data = [];
			for(var i =0; i<data.length; i++){
				var item = {
					key: data[i][key],
					obj: data[i]
				}
				this.data.push(item);
			}
		},
		addData: function(data, key){//data=[] , key=String
			//this.data = [];
			if(this.pageSize==0){
				this.pageSize = data.length;
			}
			for(var i =0; i<data.length; i++){
				var item = {
					key: data[i][key],
					obj: data[i]
				}
				this.data.push(item);
			}
		},
		addOneData: function(data, key){//data={} , key=String
			var item = {
				key: data[key],
				obj: data
			}
			this.data.push(item);
		},
		removeData: function(key){
			for(var i=0; i<=this.data.length; i++){
				if(this.data[i].key == key){
					delete this.data[i];
				}	
			}
		},
		getData: function(){
			return this.data;
		},
		getPages: function(){
			return Math.ceil(this.data.length/this.pageSize);
		}, 
		getTotal: function(){
			return this.data.length;
		},
		setLoading: function(msg){
			if(msg){
				this.loadingMsg = msg;
			}
			this.endShow = false;
			this.loadingShow = true;
		},
		setEnd: function(msg){
			if(msg){
				this.endMsg = msg;
			}
			this.loadingShow = false;
			this.endShow = true;
		},
		reSet: function(){
			this.loadingShow = false;
			this.endShow = false;
		}
	},
	data () {
		return {
			 data: [],
			 loadingShow: false,
			 endShow: false
		}
	}
}
</script>
