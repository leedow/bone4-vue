webpackJsonp([0,29],{1:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=s(4),n=a(i);t.exports=new n.default},7:function(t,e){"use strict";var s={type:{required:{reg:/.{1,}/,msg:"此项不能为空"},email:{reg:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,msg:"邮箱格式错误"},phone:{reg:/^\d{11}$/,msg:"手机格式错误"},float:{reg:/^\d+(.\d+)?$/,msg:"必须为整数或小数"},int:{reg:/^\d+$/,msg:"必须为整数"}},do:function(t,e,s){var a=this,i={state:!0,msg:""};try{if("string"==typeof s)var s=s.replace(/\s/,"")}catch(t){return{state:!1,msg:"验证发生错误"}}if(t&&!a.type.required.reg.test(s))return{state:!1,msg:a.type.required.msg};if("string"==typeof e)var n=a.type[e];else var n=e;return void 0==n?i:n.reg.test(s)?i:""==s?i:{state:!1,msg:n.msg}}};t.exports=s},8:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(7),n=a(i),r=s(1),l=a(r);e.default={name:"formInput",props:{type:{type:String,default:"text"},name:{type:String,default:""},value:{type:String,default:""},theme:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},state:{type:String,default:"normal"},enable:{type:Boolean,default:!0},holder:{type:String,default:""},required:{type:Boolean,default:!1},format:{type:String,default:""},label:{type:String,default:""},for:{type:String,default:""},focus:{type:Boolean,default:!1}},methods:{getValue:function(){return this.valueSelf},setState:function(t){this.stateSelf=t},verify:function(){var t=n.default.do(this.required,this.format,this.valueSelf);return t.state?this.setState(""):this.setState("wrong"),t},formVerify:function(t){this.for===t&&l.default.$emit("input-verify",{formid:t,result:this.verify(),data:{name:this.name,value:this.valueSelf}})}},created:function(){l.default.$on("form-verify",this.formVerify)},beforeDestroy:function(){l.default.$off("form-verify",this.formVerify)},mounted:function(){this.focus&&this.$refs.input.focus()},watch:{value:function(t){this.valueSelf=t}},data:function(){return{valueSelf:this.value,stateSelf:this.state}}}},9:function(t,e,s){var a,i;a=s(8);var n=s(10);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return""!=t.label?s("div",{staticClass:"form-item",class:["form-item-"+this.theme]},[s("label",{class:["label-"+this.size],attrs:{for:t.name}},[t._v(t._s(t.label))]),t._v(" "),s("div",{class:["be-"+t.stateSelf,""!=t.icon?"has-icon":""]},["text"==t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSelf,expression:"valueSelf"}],ref:"input",staticClass:"input form-control",class:["input-"+this.size,"input-"+this.theme],attrs:{type:"text",name:t.name,placeholder:t.holder},domProps:{value:t._s(t.valueSelf)},on:{input:function(e){e.target.composing||(t.valueSelf=e.target.value)}}}):t._e(),t._v(" "),"password"==t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSelf,expression:"valueSelf"}],ref:"input",staticClass:"input form-control",class:["input-"+this.size,"input-"+this.theme],attrs:{type:"password",name:t.name,placeholder:t.holder},domProps:{value:t._s(t.valueSelf)},on:{input:function(e){e.target.composing||(t.valueSelf=e.target.value)}}}):t._e(),t._v(" "),""!=t.icon?s("i",{staticClass:"icon iconfont",class:["icon-"+t.icon]}):t._e()])]):s("div",{staticClass:"form-item",class:["be-"+t.stateSelf,""!=t.icon?"has-icon":""]},["text"==t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSelf,expression:"valueSelf"}],ref:"input",staticClass:"input form-control",class:["input-"+this.size,"underline"==this.theme?"input-"+this.theme:""],attrs:{type:"text",name:t.name,placeholder:t.holder},domProps:{value:t._s(t.valueSelf)},on:{input:function(e){e.target.composing||(t.valueSelf=e.target.value)}}}):t._e(),t._v(" "),"password"==t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSelf,expression:"valueSelf"}],ref:"input",staticClass:"input form-control",class:["input-"+this.size,"underline"==this.theme?"input-"+this.theme:""],attrs:{type:"password",name:t.name,placeholder:t.holder},domProps:{value:t._s(t.valueSelf)},on:{input:function(e){e.target.composing||(t.valueSelf=e.target.value)}}}):t._e(),t._v(" "),""!=t.icon?s("i",{staticClass:"icon iconfont",class:["icon-"+t.icon]}):t._e()])},staticRenderFns:[]}},31:function(t,e,s){var a,i;a=s(87);var n=s(203);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},87:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(9),n=a(i);e.default={name:"",components:{BoInput:n.default},methods:{getValue:function(){alert(this.$refs.test.getValue())},setState:function(t){this.$refs.test.setState(t)},verify:function(){alert(this.$refs.test.verify().msg)}},data:function(){return{}}}},203:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"row p0010"},[s("div",{staticClass:"col-md-6 p0100"},[s("bo-input",{attrs:{holder:"Large Size",size:"lg",icon:"scan"}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"Default Size",focus:""}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"Small Size",size:"sm"}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"Tiny Size",size:"tiny"}})],1),t._v(" "),s("div",{staticClass:"col-md-6 p0001"},[s("bo-input",{attrs:{holder:"请输入内容",size:"lg",state:"wrong",value:"一段内容"}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",state:"wrong"}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",size:"sm",state:"pass"}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",size:"tiny",state:"pass"}})],1)]),t._v(" "),s("div",{staticClass:"row p1010"},[s("div",{staticClass:"col-md-6 p0100"},[s("bo-input",{attrs:{holder:"请输入内容",size:"lg",theme:"underline"}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",state:"wrong",theme:"underline"}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",size:"sm",state:"pass",theme:"underline"}}),t._v(" "),s("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",size:"tiny",state:"pass",theme:"underline"}})],1),t._v(" "),s("div",{staticClass:"col-md-6 p0001"})]),t._v(" "),s("div",{staticClass:"divi"}),t._v(" "),s("div",{staticClass:"row"},[s("bo-input",{attrs:{holder:"请输入内容",label:"账 号",theme:"blank",size:"lg"}}),t._v(" "),s("bo-input",{attrs:{holder:"请输入内容",label:"密 码",theme:"blank",size:"lg"}})],1),t._v(" "),s("div",{staticClass:"divi"}),t._v(" "),s("div",{staticClass:"row"},[s("bo-input",{attrs:{holder:"请输入内容",label:"账 号",theme:"head",size:""}}),t._v(" "),s("bo-input",{attrs:{holder:"请输入内容",label:"密 码",theme:"head",size:""}})],1),t._v(" "),s("div",{staticClass:"divi"},[s("bo-input",{ref:"test",style:{marginTop:"20px"},attrs:{holder:"只能输入非空手机号",required:!0,format:"phone"}}),t._v(" "),s("div",{staticClass:"p1000 tl"},[s("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:t.getValue}},[t._v("获取输入值")]),t._v(" "),s("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:function(e){t.setState("wrong")}}},[t._v("置为警告")]),t._v(" "),s("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:function(e){t.setState("pass")}}},[t._v("置为通过")]),t._v(" "),s("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:t.verify}},[t._v("验证")])])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=0.6ea8360e8f48a920daad.js.map