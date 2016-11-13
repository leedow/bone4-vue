var Toucher = {
	on: function(){
		var arglen = arguments.length;
		if(arglen > 3) return;

		var type, ele, selector, callback;
		type = arguments[0];
		ele = arguments[1].replace('#','');

		if(arglen == 3){
			callback = arguments[2];
			var events = ['touchStart', 'touchMove', 'touchEnd'];
			for(key in events){
				document.getElementById(ele).addEventListener(events[key], this.handle(e));
			}
		} else if(arglen == 4){
			callback = arguments[3];
			selector = arguments[2];
		}

	},
	handle: function(e){
		console.log(e)
	},
	off: function(){

	}
}


export default Toucher;