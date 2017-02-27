/* eslint-disable */
const Format = {
  type: {
    required: {
      reg: /.{1,}/,
      msg: '此项不能为空',
    },
    email: {
      reg: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      msg: '邮箱格式错误',
    },
    phone: {
      reg: /^\d{11}$/,
      msg: '手机格式错误',
    },
    float: {
      reg: /^\d+(.\d+)?$/,
      msg: '必须为整数或小数',
    },
    int: {
      reg: /^\d+$/,
      msg: '必须为整数',
    },
  },
	/**
	 * format=String|{reg, msg}
	 */
  do(required, format, value) {
    const _this = this;
    const pass = { state: true, msg: '' };
    try {
      if (typeof value === 'string')			{
        var value = value.replace(/\s/, '');
      }
    } catch (e) {
			// console.log('format repalce wrong')
      return {
        state: false,
        msg: '验证发生错误',
      };
    }


    if (required) {
      if (!_this.type.required.reg.test(value)) {
        return {
          state: false,
          msg: _this.type.required.msg,
        };
      }
    }

    if (typeof format === 'string') {
      var tester = _this.type[format];
    } else {
      var tester = format;
    }

    if (tester == undefined) {
      return pass;
    }

    if (tester.reg.test(value)) {
      return pass;
    } else {
      if (value == '') {
        return pass;
      }
      return {
        state: false,
        msg: tester.msg,
      };
    }
  },
};

module.exports = Format;
/* eslint-enable */
