webpackJsonp([20,35],{2:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=s(7),i=n(a);t.exports=new i.default},8:function(t,e){"use strict";var s={type:{required:{reg:/.{1,}/,msg:"此项不能为空"},email:{reg:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,msg:"邮箱格式错误"},phone:{reg:/^\d{11}$/,msg:"手机格式错误"},float:{reg:/^\d+(.\d+)?$/,msg:"必须为整数或小数"},int:{reg:/^\d+$/,msg:"必须为整数"}},do:function(t,e,s){var n=this,a={state:!0,msg:""};try{if("string"==typeof s)var s=s.replace(/\s/,"")}catch(t){return{state:!1,msg:"验证发生错误"}}if(t&&!n.type.required.reg.test(s))return{state:!1,msg:n.type.required.msg};if("string"==typeof e)var i=n.type[e];else var i=e;return void 0==i?a:i.reg.test(s)?a:""==s?a:{state:!1,msg:i.msg}}};t.exports=s},45:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(8),i=n(a),r=s(2),l=n(r);e.default={name:"boselect",props:{name:{type:String,default:""},value:{default:""},options:{type:Array,default:function(){return[]}},theme:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:"unfold"},state:{type:String,default:"normal"},enable:{type:Boolean,default:!0},required:{type:Boolean,default:!1},label:{type:String,default:""},for:{type:String,default:""}},methods:{getValue:function(){return this.valueSelf},setState:function(t){this.stateSelf=t},verify:function(){var t=i.default.do(this.required,"",this.valueSelf);return t.state?this.setState(""):this.setState("wrong"),t},formVerify:function(t){this.for===t&&l.default.$emit("input-verify",{formid:t,result:this.verify(),data:{name:this.name,value:this.valueSelf}})}},created:function(){l.default.$on("form-verify",this.formVerify)},beforeDestroy:function(){l.default.$off("form-verify",this.formVerify)},watch:{value:function(t){this.valueSelf=t}},data:function(){return{valueSelf:this.value,stateSelf:this.state}}}},49:function(t,e,s){var n=s(1)(s(45),s(55),null,null);t.exports=n.exports},55:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return""!=t.label?s("div",{staticClass:"form-item",class:["form-item-"+this.theme]},[s("label",{class:["label-"+this.size],attrs:{for:t.name}},[t._v(t._s(t.label))]),t._v(" "),s("div",{class:["be-"+t.stateSelf,""!=t.icon?"has-icon":""]},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.valueSelf,expression:"valueSelf"}],staticClass:"select form-control",class:["select-"+this.size,"underline"==this.theme?"select-"+this.theme:""],attrs:{name:t.name},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.valueSelf=e.target.multiple?s:s[0]}}},t._l(t.options,function(e){return s("option",{domProps:{value:e.value}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),t._v(" "),""!=t.icon?s("i",{staticClass:"icon iconfont",class:["icon-"+t.icon]}):t._e()])]):s("div",{staticClass:"form-item",class:["be-"+t.stateSelf,""!=t.icon?"has-icon":""]},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.valueSelf,expression:"valueSelf"}],staticClass:"select form-control",class:["select-"+this.size,"underline"==this.theme?"select-"+this.theme:""],attrs:{name:t.name},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.valueSelf=e.target.multiple?s:s[0]}}},t._l(t.options,function(e){return s("option",{domProps:{value:e.value}},[t._v("\n      "+t._s(e.text)+"\n    ")])})),t._v(" "),""!=t.icon?s("i",{staticClass:"icon iconfont",class:["icon-"+t.icon]}):t._e()])},staticRenderFns:[]}},63:function(t,e,s){var n=s(1)(s(108),s(221),null,null);t.exports=n.exports},108:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(49),i=n(a);e.default={name:"",components:{BoSelect:i.default},methods:{getValue:function(){alert(this.$refs.test.getValue())},setState:function(t){this.$refs.test.setState(t)},verify:function(){alert(this.$refs.test.verify().msg)}},data:function(){return{options:[{value:1,text:"One"},{value:2,text:"Two"}]}}}},221:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"row p0010"},[s("div",{staticClass:"p1111"},[s("bo-select",{attrs:{size:"lg",value:2,options:t.options}})],1),t._v(" "),s("div",{staticClass:"p0111"},[s("bo-select",{attrs:{size:"sm",value:1,options:t.options}})],1),t._v(" "),s("div",{staticClass:"p0111"},[s("bo-select",{attrs:{size:"lg",theme:"underline",value:2,options:t.options}})],1)]),t._v(" "),s("div",{staticClass:"p0111"},[s("bo-select",{ref:"test",style:{marginTop:"20px"},attrs:{required:!0,value:2,options:t.options}}),t._v(" "),s("div",{staticClass:"p1000 tl"},[s("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:t.getValue}},[t._v("获取输入值")]),t._v(" "),s("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:function(e){t.setState("wrong")}}},[t._v("置为警告")]),t._v(" "),s("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:function(e){t.setState("pass")}}},[t._v("置为通过")])])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=20.6c1bc0d9553c43280fb3.js.map