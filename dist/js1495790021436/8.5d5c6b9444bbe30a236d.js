webpackJsonp([8,29],{12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"switch",props:{state:{type:Boolean,default:!0},showTag:{type:Boolean,default:!1},tag:{type:Array,default:function(){return["开","关"]}}},methods:{_handleClick:function(){this.stateSelf=!this.stateSelf,this.$emit("on-click",this.stateSelf)},setState:function(t){this.stateSelf=t}},computed:{cssState:function(){var t="";return t=this.showTag&&!this.stateSelf?"switch-tag-off":this.showTag||this.stateSelf?"switch-on":"switch-off"}},data:function(){return{stateSelf:this.state}}}},14:function(t,e,n){var o,s;o=n(12);var a=n(16);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},16:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"switch",class:[t.showTag?"switch-tag":"",t.cssState],on:{click:t._handleClick}},[t.showTag?n("span",{staticClass:"on"},[t._v(t._s(t.tag[0]))]):t._e(),t._v(" "),t.showTag?n("span",{staticClass:"off"},[t._v(t._s(t.tag[1]))]):t._e()])},staticRenderFns:[]}},18:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(17),a=o(s),i=n(14),c=o(i);e.default={name:"test1",components:{menuVertical:a.default,BoSwitch:c.default},props:{name:{type:String,default:""},path:{type:String,default:""},dock:{type:String,default:""},state:{type:Boolean,default:!1},alias:{type:String,default:""}},methods:{onclick:function(){this.$emit("on-click","")},_handleSwitch:function(t){var e=this;this.$emit("on-switch",{obj:this,state:t}),setTimeout(function(){e.$refs.sw.setState(!1)},1e3)},off:function(){this.$refs.sw.setState(!1)}},data:function(){return{}}}},24:function(t,e,n){var o,s;o=n(18);var a=n(30);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},30:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-item"},[n("menu-vertical",{attrs:{path:t.path}},[n("span",{slot:"body"},[t._v(t._s(t.name))]),t._v(" "),n("span",{staticStyle:{"padding-right":"20px"},slot:"dock"},[n("bo-switch",{ref:"sw",attrs:{state:t.state},on:{"on-click":t._handleSwitch}})],1)])],1)},staticRenderFns:[]}},68:function(t,e,n){var o,s;o=n(108);var a=n(170);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},108:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(152),a=o(s),i=n(24),c=o(i);e.default={name:"DialogDemo",components:{Modal:a.default,Dmenu:c.default},methods:{alert:function(){this.type="alert",this.show=!0},confirm:function(){this.type="confirm",this.show=!0},open:function(){var t=this;this.$modal.open("test").$on("on-confirm",function(){t.$modal.close()})}},data:function(){return{show:!1,show2:!1,type:"alert"}}}},110:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Modal",components:{},props:{name:{type:String,default:""},show:{type:Boolean,default:!1},type:{type:String,default:"confirm"},buttons:{type:Array,default:function(){return["确 定","取 消"]}}},methods:{confirm:function(){this.$emit("on-confirm",this)},cancel:function(){this.$emit("on-cancel",this)}},data:function(){return{}}}},152:function(t,e,n){var o,s;o=n(110);var a=n(176);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},170:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{name:"Alert"},on:{"on-switch":t.alert}}),t._v(" "),n("dmenu",{attrs:{name:"Confirm"},on:{"on-switch":t.confirm}}),t._v(" "),n("dmenu",{attrs:{name:"Has child components"},on:{"on-switch":function(e){t.show2=!0}}}),t._v(" "),n("dmenu",{attrs:{name:"全局调用"},on:{"on-switch":t.open}})],1),t._v(" "),n("modal",{attrs:{show:t.show,type:t.type},on:{"on-confirm":function(e){t.show=!1},"on-cancel":function(e){t.show=!1}}},[t._v("Hello world!")]),t._v(" "),n("modal",{attrs:{show:t.show2,type:t.type},on:{"on-confirm":function(e){t.show2=!1},"on-cancel":function(e){t.show2=!1}}},[n("input",{staticClass:"input form-control",attrs:{type:"text",name:"name",placeholder:"请输入"}})])],1)},staticRenderFns:[]}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"layout"}},[t.show?n("div",{staticClass:"layout-opacity",staticStyle:{position:"absolute"}}):t._e()]),t._v(" "),n("transition",{attrs:{name:"modal"}},[t.show?n("div",{staticClass:"dialog-layout",staticStyle:{position:"absolute"}},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"dialog-content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dialog-buttons"},["confirm"==t.type?n("button",{staticClass:"button-no",on:{click:t.cancel}},[t._v(t._s(t.buttons[1]))]):t._e(),t._v(" "),n("button",{staticClass:"button-ok",on:{click:t.confirm}},[t._v(t._s(t.buttons[0]))])])])]):t._e()])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.5d5c6b9444bbe30a236d.js.map