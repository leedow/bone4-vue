webpackJsonp([10,29],{12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"switch",props:{state:{type:Boolean,default:!0},showTag:{type:Boolean,default:!1},tag:{type:Array,default:function(){return["开","关"]}}},methods:{_handleClick:function(){this.stateSelf=!this.stateSelf,this.$emit("on-click",this.stateSelf)},setState:function(t){this.stateSelf=t}},computed:{cssState:function(){var t="";return t=this.showTag&&!this.stateSelf?"switch-tag-off":this.showTag||this.stateSelf?"switch-on":"switch-off"}},data:function(){return{stateSelf:this.state}}}},14:function(t,e,s){var n,a;n=s(12);var o=s(16);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},16:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"switch",class:[t.showTag?"switch-tag":"",t.cssState],on:{click:t._handleClick}},[t.showTag?s("span",{staticClass:"on"},[t._v(t._s(t.tag[0]))]):t._e(),t._v(" "),t.showTag?s("span",{staticClass:"off"},[t._v(t._s(t.tag[1]))]):t._e()])},staticRenderFns:[]}},18:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(17),o=n(a),i=s(14),c=n(i);e.default={name:"test1",components:{menuVertical:o.default,BoSwitch:c.default},props:{name:{type:String,default:""},path:{type:String,default:""},dock:{type:String,default:""},state:{type:Boolean,default:!1},alias:{type:String,default:""}},methods:{onclick:function(){this.$emit("on-click","")},_handleSwitch:function(t){var e=this;this.$emit("on-switch",{obj:this,state:t}),setTimeout(function(){e.$refs.sw.setState(!1)},1e3)},off:function(){this.$refs.sw.setState(!1)}},data:function(){return{}}}},24:function(t,e,s){var n,a;n=s(18);var o=s(30);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},30:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"list-item"},[s("menu-vertical",{attrs:{path:t.path}},[s("span",{slot:"body"},[t._v(t._s(t.name))]),t._v(" "),s("span",{staticStyle:{"padding-right":"20px"},slot:"dock"},[s("bo-switch",{ref:"sw",attrs:{state:t.state},on:{"on-click":t._handleSwitch}})],1)])],1)},staticRenderFns:[]}},77:function(t,e,s){var n,a;s(138),n=s(125);var o=s(187);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=n},125:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(27),o=n(a),i=s(24),c=n(i);e.default={name:"toastdemo",components:{Toast:o.default,Dmenu:c.default},methods:{showtoast:function(t){var e=this;switch(t){case"loading":this.$refs.loading.open(),setTimeout(function(){e.$refs.loading.close()},3e3);break;case"success":this.$refs.success.open();break;case"failed":this.$refs.failed.open();break;case"warm":this.$refs.warm.open();break;case"text":this.$refs.text.open();break;case"reg":this.$toast.open("全局注册调用");break;case"reg2":this.$toast.open("全局注册调用2","success");break;case"reg3":this.$toast.open("全局注册调用控制关闭","loading"),setTimeout(function(){e.$toast.close()},2e3)}}},data:function(){return{}}}},135:function(t,e,s){e=t.exports=s(42)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"demo.vue",sourceRoot:"webpack://"}])},138:function(t,e,s){var n=s(135);"string"==typeof n&&(n=[[t.id,n,""]]);s(55)(n,{});n.locals&&(t.exports=n.locals)},187:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"list list-box p0002"},[s("dmenu",{attrs:{name:"读取中",dock:"Loading"},on:{"on-switch":function(e){t.showtoast("loading")}}}),t._v(" "),s("dmenu",{attrs:{name:"操作失败",dock:"Failed"},on:{"on-switch":function(e){t.showtoast("failed")}}}),t._v(" "),s("dmenu",{attrs:{name:"警告",dock:"Warm"},on:{"on-switch":function(e){t.showtoast("warm")}}}),t._v(" "),s("dmenu",{attrs:{name:"操作成功",dock:"Success"},on:{"on-switch":function(e){t.showtoast("success")}}}),t._v(" "),s("dmenu",{attrs:{name:"纯文本",dock:"Text"},on:{"on-switch":function(e){t.showtoast("text")}}})],1),t._v(" "),s("div",{staticClass:"list-title"},[t._v("注册调用（推荐）")]),t._v(" "),s("ul",{staticClass:"list list-box p0002"},[s("dmenu",{attrs:{name:"注册调用",dock:"Text"},on:{"on-switch":function(e){t.showtoast("reg")}}}),t._v(" "),s("dmenu",{attrs:{name:"注册调用二",dock:"Success"},on:{"on-switch":function(e){t.showtoast("reg2")}}}),t._v(" "),s("dmenu",{attrs:{name:"注册调用控制关闭",dock:"Success"},on:{"on-switch":function(e){t.showtoast("reg3")}}})],1),t._v(" "),s("toast",{ref:"loading",attrs:{type:"loading",content:"读取中"}}),t._v(" "),s("toast",{ref:"success",attrs:{type:"success",content:"发布成功"}}),t._v(" "),s("toast",{ref:"failed",attrs:{type:"failed",content:"操作失败"}}),t._v(" "),s("toast",{ref:"warm",attrs:{type:"warm",content:"信息有误"}}),t._v(" "),s("toast",{ref:"text",attrs:{type:"text",content:"纯文本提示"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.f6f7f07f5772019bb07b.js.map