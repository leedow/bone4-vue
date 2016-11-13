var Format = {
	type: {
		required: {
			reg: /.{1,}/,
			msg: '此项不能为空'
		},
		email: {
			reg: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
			msg: '邮箱格式错误'
		},
		phone: {
			reg: /^\d{11}$/,
			msg: '手机格式错误'
		},
		float: {
			reg: /^\d+(.\d+)?$/,
			msg: '必须为整数或小数'
		},
		int: {
			reg: /^\d+$/,
			msg: '必须为整数'
		}
	},
	do: function(required, format, value){
		var _this = this;
		try{
			var value = value.replace(/\s/, '');
		} catch (e) {
			console.log('format repalce wrong')
		}

		
		if(required){
			if(!_this.type['required'].reg.test(value)){
				return {
					state: false,
					msg: _this.type['required'].msg
				};
			}
		}

		if(_this.type[format] == undefined){
			return {
				state: true
			};
		}	

		if(_this.type[format].reg.test(value)){
			return {
				state: true
			};
		} else {
			if(value == ''){
				return {
					state: true
				}
			}
			return {
				state: false,
				msg: _this.type[format].msg
			};
		}
	}
}

export default Format