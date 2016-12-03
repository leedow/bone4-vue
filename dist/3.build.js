webpackJsonp([3],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(2),s=a(i);t.exports=new s.default},1:function(t,e,n){var a,i;a=n(24);var s=n(27);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},11:function(t,e,n){var a,i;a=n(63);var s=n(79);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},24:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=a(i);e.default={name:"btn",props:{name:{type:String,default:""},theme:{type:String,default:"default"},size:{type:String,default:"default"},block:{type:Boolean,default:!1},icon:{type:String,default:""},disable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},submit:{type:String,default:""}},methods:{handleClick:function(){""!=this.submit&&s.default.$emit("btn-submit",this.submit),this.disable&&!this.loading&&this.$emit("on-click","")}},data:function(){return{}}}},27:function(t,e){t.exports={render:function(){var t=this;return t._h("button",{staticClass:"btn",class:["btn-"+t.theme,"btn-"+t.size,t.block?"btn-block":""],on:{click:t.handleClick}},[""==t.icon||t.loading?t._e():t._h("i",{staticClass:"icon iconfont",class:[t.icon?"icon-"+t.icon:""]})," ",t.loading?t._h("i",{staticClass:"icon iconfont icon-loading loading"}):t._e()," ",t._h("span",[t._s(t.name)])])},staticRenderFns:[]}},28:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(29),s=a(i),r=n(0),o=a(r);e.default={name:"formInput",props:{type:{type:String,default:"text"},name:{type:String,default:""},value:{type:String,default:""},theme:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},state:{type:String,default:"normal"},enable:{type:Boolean,default:!0},holder:{type:String,default:""},required:{type:Boolean,default:!1},format:{type:String,default:""},label:{type:String,default:""},for:{type:String,default:""}},methods:{getValue:function(){return this.value_},setState:function(t){this.state_=t},verify:function(){var t=s.default.do(this.required,this.format,this.value_);return t.state?this.setState(""):this.setState("wrong"),t},formVerify:function(t){this.for==t&&o.default.$emit("input-verify",{formid:t,result:this.verify(),data:{name:this.name,value:this.value_}})}},created:function(){o.default.$on("form-verify",this.formVerify)},beforeDestroy:function(){o.default.$off("form-verify",this.formVerify)},data:function(){return{value_:this.value,state_:this.state}}}},29:function(t,e){"use strict";var n={type:{required:{reg:/.{1,}/,msg:"此项不能为空"},email:{reg:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,msg:"邮箱格式错误"},phone:{reg:/^\d{11}$/,msg:"手机格式错误"},float:{reg:/^\d+(.\d+)?$/,msg:"必须为整数或小数"},int:{reg:/^\d+$/,msg:"必须为整数"}},do:function(t,e,n){var a=this,i={state:!0,msg:""};try{var n=n.replace(/\s/,"")}catch(t){return{state:!1,msg:"验证发生错误"}}if(t&&!a.type.required.reg.test(n))return{state:!1,msg:a.type.required.msg};if("string"==typeof e)var s=a.type[e];else var s=e;return void 0==s?i:s.reg.test(n)?i:""==n?i:{state:!1,msg:s.msg}}};t.exports=n},30:function(t,e){t.exports={render:function(){var t=this;return""!=t.label?t._h("div",{staticClass:"form-item",class:["form-item-"+this.theme]},[t._h("label",{class:["label-"+this.size],attrs:{for:t.name}},[t._s(t.label)])," ",t._h("div",{class:["be-"+t.state_,""!=t.icon?"has-icon":""]},[t._h("input",{directives:[{name:"model",rawName:"v-model",value:t.value_,expression:"value_"}],staticClass:"input form-control",class:["input-"+this.size,"input-"+this.theme],attrs:{type:"text",name:t.name,placeholder:t.holder},domProps:{value:t._s(t.value_)},on:{input:function(e){e.target.composing||(t.value_=e.target.value)}}})," ",""!=t.icon?t._h("i",{staticClass:"icon iconfont",class:["icon-"+t.icon]}):t._e()])]):t._h("div",{staticClass:"form-item",class:["be-"+t.state_,""!=t.icon?"has-icon":""]},[t._h("input",{directives:[{name:"model",rawName:"v-model",value:t.value_,expression:"value_"}],staticClass:"input form-control",class:["input-"+this.size,"underline"==this.theme?"input-"+this.theme:""],attrs:{type:"text",name:t.name,placeholder:t.holder},domProps:{value:t._s(t.value_)},on:{input:function(e){e.target.composing||(t.value_=e.target.value)}}})," ",""!=t.icon?t._h("i",{staticClass:"icon iconfont",class:["icon-"+t.icon]}):t._e()])},staticRenderFns:[]}},31:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=a(i);e.default={name:"formGroup",props:{name:{type:String,default:""},theme:{type:String,default:"default"},size:{type:String,default:"default"}},methods:{_btnSubmit:function(t){t==this.name&&(this.pass=!0,s.default.$emit("form-verify",t),this.pass&&this.$emit("on-submit",this.data))},_receiveInputData:function(t){return""==t.data.name||void 0==t.data.name?void(this.pass=!1):void(t.formid==this.name&&(t.result.state?this.data[t.data.name]=t.data.value:(this.pass=!1,delete this.data[t.data.name])))}},created:function(){s.default.$on("btn-submit",this._btnSubmit),s.default.$on("input-verify",this._receiveInputData)},beforeDestroy:function(){s.default.$off("btn-submit",this._btnSubmit),s.default.$off("input-verify",this._receiveInputData)},data:function(){return{data:{},pass:!0}}}},32:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"form",class:["form-"+t.theme,"form-"+t.size]},[t._t("default")])},staticRenderFns:[]}},63:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),s=a(i),r=n(7),o=a(r),u=n(1),l=a(u);e.default={name:"test1",components:{FormGroup:s.default,FormInput:o.default,Btn:l.default},methods:{submit:function(t){console.log(t)},changeTheme:function(){"blank"==this.theme?this.theme="head":this.theme="blank"}},data:function(){return{theme:"blank"}}}},7:function(t,e,n){var a,i;a=n(28);var s=n(30);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},79:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{},[t._h("form-group",{attrs:{theme:t.theme,size:"lg",name:"testform"},on:{"on-submit":t.submit}},[t._h("form-input",{attrs:{label:"手机号",holder:"Phone",format:"phone",required:!0,for:"testform",name:"phone"}})," ",t._h("form-input",{attrs:{label:"邮 箱",holder:"输入邮箱",format:"email",required:!0,for:"testform",name:"email"}})," ",t._h("form-input",{attrs:{label:"小 数",holder:"输入小数",format:"float",required:!0,for:"testform",name:"float"}})," ",t._h("form-input",{attrs:{label:"整 数",holder:"输入整数",format:"int",required:!0,for:"testform",name:"int"}})," ",t._h("div",{staticClass:"p2222"},[t._h("btn",{attrs:{theme:"primary",block:!0,size:"lg",submit:"testform",name:"确 认"}})])," ",t._h("div",{staticClass:"p0222"},[t._h("btn",{attrs:{theme:"",block:!0,size:"lg",name:"切换风格"},on:{"on-click":t.changeTheme}})])])])},staticRenderFns:[]}},8:function(t,e,n){var a,i;a=n(31);var s=n(32);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a}});