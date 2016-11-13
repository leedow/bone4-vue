var Linker = {
	history: [],
	add: function(href){
		var old = this.history.pop();

		if(old == href){
			this.history.push(href);
		} else {
			this.history.push(old);
			this.history.push(href);
		}

		this.save();
	},
	get: function(keep){
		var history =  this.history.pop();
		if(keep){
			this.history.push(history);
		}
		this.save();
		return history?history:''
	},
	init: function(){
		console.log(window.sessionStorage.linkHistory)
		if(window.sessionStorage.linkHistory){
			var storage;
			try{
				storage = JSON.parse(window.sessionStorage.linkHistory);
			} catch(e){
				storage = [];
			} finally {
				storage = []
			}
			this.history = storage;
		} else {
			this.history = [];
		}
		console.log(this.history);
	},
	save: function(){
		if(window.sessionStorage){
			window.sessionStorage.linkHistory = JSON.stringify(this.history);
		} else {
			console.log('sessionStorage unsupported');
		}
	}
}

Linker.init();

export default Linker