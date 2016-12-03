webpackJsonp([0],{0:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=s(2),n=a(i);t.exports=new n.default},109:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(7),n=a(i);e.default={name:"",components:{BoInput:n.default},methods:{getValue:function(){alert(this.$refs.test.getValue())},setState:function(t){this.$refs.test.setState(t)},verify:function(){alert(this.$refs.test.verify().msg)}},data:function(){return{}}}},127:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{},[t._h("div",{staticClass:"row p0010"},[t._h("div",{staticClass:"col-md-6 p0100"},[t._h("bo-input",{attrs:{holder:"Large Size",size:"lg",icon:"scan"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"Default Size"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"Small Size",size:"sm"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"Tiny Size",size:"tiny"}})])," ",t._h("div",{staticClass:"col-md-6 p0001"},[t._h("bo-input",{attrs:{holder:"请输入内容",size:"lg",state:"wrong",value:"一段内容"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",state:"wrong"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",size:"sm",state:"pass"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",size:"tiny",state:"pass"}})])])," "," ",t._h("div",{staticClass:"row p1010"},[t._h("div",{staticClass:"col-md-6 p0100"},[t._h("bo-input",{attrs:{holder:"请输入内容",size:"lg",theme:"underline"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",state:"wrong",theme:"underline"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",size:"sm",state:"pass",theme:"underline"}})," ",t._h("bo-input",{style:{marginTop:"10px"},attrs:{holder:"请输入内容",size:"tiny",state:"pass",theme:"underline"}})])," ",t._h("div",{staticClass:"col-md-6 p0001"})])," ",t._h("div",{staticClass:"divi"})," ",t._h("div",{staticClass:"row"},[t._h("bo-input",{attrs:{holder:"请输入内容",label:"账 号",theme:"blank",size:"lg"}})," ",t._h("bo-input",{attrs:{holder:"请输入内容",label:"密 码",theme:"blank",size:"lg"}})])," ",t._h("div",{staticClass:"divi"})," ",t._h("div",{staticClass:"row"},[t._h("bo-input",{attrs:{holder:"请输入内容",label:"账 号",theme:"head",size:""}})," ",t._h("bo-input",{attrs:{holder:"请输入内容",label:"密 码",theme:"head",size:""}})])," ",t._h("div",{staticClass:"divi"},[t._h("bo-input",{ref:"test",style:{marginTop:"20px"},attrs:{holder:"只能输入非空手机号",required:!0,format:"phone"}})," ",t._h("div",{staticClass:"p1000 tl"},[t._h("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:t.getValue}},["获取输入值"])," ",t._h("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:function(e){t.setState("wrong")}}},["置为警告"])," ",t._h("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:function(e){t.setState("pass")}}},["置为通过"])," ",t._h("button",{staticClass:"btn btn-tiny btn-primary-blank",on:{click:t.verify}},["验证"])])])])},staticRenderFns:[]}},28:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(29),n=a(i),r=s(0),o=a(r);e.default={name:"formInput",props:{type:{type:String,default:"text"},name:{type:String,default:""},value:{type:String,default:""},theme:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},state:{type:String,default:"normal"},enable:{type:Boolean,default:!0},holder:{type:String,default:""},required:{type:Boolean,default:!1},format:{type:String,default:""},label:{type:String,default:""},for:{type:String,default:""}},methods:{getValue:function(){return this.value_},setState:function(t){this.state_=t},verify:function(){var t=n.default.do(this.required,this.format,this.value_);return t.state?this.setState(""):this.setState("wrong"),t},formVerify:function(t){this.for==t&&o.default.$emit("input-verify",{formid:t,result:this.verify(),data:{name:this.name,value:this.value_}})}},created:function(){o.default.$on("form-verify",this.formVerify)},beforeDestroy:function(){o.default.$off("form-verify",this.formVerify)},data:function(){return{value_:this.value,state_:this.state}}}},29:function(t,e){"use strict";var s={type:{required:{reg:/.{1,}/,msg:"此项不能为空"},email:{reg:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,msg:"邮箱格式错误"},phone:{reg:/^\d{11}$/,msg:"手机格式错误"},float:{reg:/^\d+(.\d+)?$/,msg:"必须为整数或小数"},int:{reg:/^\d+$/,msg:"必须为整数"}},do:function(t,e,s){var a=this,i={state:!0,msg:""};try{var s=s.replace(/\s/,"")}catch(t){return{state:!1,msg:"验证发生错误"}}if(t&&!a.type.required.reg.test(s))return{state:!1,msg:a.type.required.msg};if("string"==typeof e)var n=a.type[e];else var n=e;return void 0==n?i:n.reg.test(s)?i:""==s?i:{state:!1,msg:n.msg}}};t.exports=s},30:function(t,e){t.exports={render:function(){var t=this;return""!=t.label?t._h("div",{staticClass:"form-item",class:["form-item-"+this.theme]},[t._h("label",{class:["label-"+this.size],attrs:{for:t.name}},[t._s(t.label)])," ",t._h("div",{class:["be-"+t.state_,""!=t.icon?"has-icon":""]},[t._h("input",{directives:[{name:"model",rawName:"v-model",value:t.value_,expression:"value_"}],staticClass:"input form-control",class:["input-"+this.size,"input-"+this.theme],attrs:{type:"text",name:t.name,placeholder:t.holder},domProps:{value:t._s(t.value_)},on:{input:function(e){e.target.composing||(t.value_=e.target.value)}}})," ",""!=t.icon?t._h("i",{staticClass:"icon iconfont",class:["icon-"+t.icon]}):t._e()])]):t._h("div",{staticClass:"form-item",class:["be-"+t.state_,""!=t.icon?"has-icon":""]},[t._h("input",{directives:[{name:"model",rawName:"v-model",value:t.value_,expression:"value_"}],staticClass:"input form-control",class:["input-"+this.size,"underline"==this.theme?"input-"+this.theme:""],attrs:{type:"text",name:t.name,placeholder:t.holder},domProps:{value:t._s(t.value_)},on:{input:function(e){e.target.composing||(t.value_=e.target.value)}}})," ",""!=t.icon?t._h("i",{staticClass:"icon iconfont",class:["icon-"+t.icon]}):t._e()])},staticRenderFns:[]}},4:function(t,e,s){var a,i;a=s(109);var n=s(127);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},7:function(t,e,s){var a,i;a=s(28);var n=s(30);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a}});