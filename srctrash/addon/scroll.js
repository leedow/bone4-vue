var Scroll = {
	callback: [],
	add: function(callback){
		this.callback.push(callback);
	},
	init: function(){
		var _this = this;
		window.onscroll = function(){
			var body = document.body;
			var h = document.body.scrollHeight;
			var s = document.documentElement.scrollTop + document.body.scrollTop;
			var ch = document.body.clientHeight;

			for(var i=0; i<_this.callback.length; i++){
				_this.callback[i]({
					bodyHeight: h,
					scrollHeight: s,
					clientHeight: ch
				});
			}
		}
	}
}

Scroll.init();

export default Scroll