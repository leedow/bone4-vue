webpackJsonp([18,19],{10:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"switch",props:{state:{type:Boolean,default:!0},showTag:{type:Boolean,default:!1},tag:{type:Array,default:function(){return["开","关"]}}},methods:{_handleClick:function(){this.stateSelf=!this.stateSelf,this.$emit("on-click",this.stateSelf)},setState:function(t){this.stateSelf=t}},computed:{cssState:function(){var t="";return t=this.showTag&&!this.stateSelf?"switch-tag-off":this.showTag||this.stateSelf?"switch-on":"switch-off"}},data:function(){return{stateSelf:this.state}}}},14:function(t,e,s){var a,i;a=s(10);var n=s(20);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},20:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"switch",class:[t.showTag?"switch-tag":"",t.cssState],on:{click:t._handleClick}},[t.showTag?s("span",{staticClass:"on"},[t._v(t._s(t.tag[0]))]):t._e(),t._v(" "),t.showTag?s("span",{staticClass:"off"},[t._v(t._s(t.tag[1]))]):t._e()])},staticRenderFns:[]}},43:function(t,e,s){var a,i;a=s(91);var n=s(148);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},91:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(14),n=a(i),o=s(15),c=a(o);e.default={name:"switchdemo",components:{BoSwitch:n.default,menuVertical:c.default},data:function(){return{}}}},148:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("ul",{staticClass:"list list-box p0002"},[s("li",{staticClass:"list-item"},[s("menu-vertical",[s("span",{slot:"body"},[t._v("默认(打开)")]),t._v(" "),s("span",{staticStyle:{"padding-right":"20px"},slot:"dock"},[s("bo-switch")],1)])],1),t._v(" "),s("li",{staticClass:"list-item"},[s("menu-vertical",[s("span",{slot:"body"},[t._v("默认(关闭)")]),t._v(" "),s("span",{staticStyle:{"padding-right":"20px"},slot:"dock"},[s("bo-switch",{attrs:{state:!1}})],1)])],1),t._v(" "),s("li",{staticClass:"list-item"},[s("menu-vertical",[s("span",{slot:"body"},[t._v("带文字")]),t._v(" "),s("span",{staticStyle:{"padding-right":"20px"},slot:"dock"},[s("bo-switch",{attrs:{state:!1,"show-tag":!0}})],1)])],1),t._v(" "),s("li",{staticClass:"list-item"},[s("menu-vertical",[s("span",{slot:"body"},[t._v("自定义文字")]),t._v(" "),s("span",{staticStyle:{"padding-right":"20px"},slot:"dock"},[s("bo-switch",{attrs:{"show-tag":!0,tag:["ON","OFF"]}})],1)])],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=18.3a2d53905c1d2a4e2d45.js.map