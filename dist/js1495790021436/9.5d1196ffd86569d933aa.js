webpackJsonp([9,29],{12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"switch",props:{state:{type:Boolean,default:!0},showTag:{type:Boolean,default:!1},tag:{type:Array,default:function(){return["开","关"]}}},methods:{_handleClick:function(){this.stateSelf=!this.stateSelf,this.$emit("on-click",this.stateSelf)},setState:function(t){this.stateSelf=t}},computed:{cssState:function(){var t="";return t=this.showTag&&!this.stateSelf?"switch-tag-off":this.showTag||this.stateSelf?"switch-on":"switch-off"}},data:function(){return{stateSelf:this.state}}}},14:function(t,e,n){var s,a;s=n(12);var o=n(16);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},16:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"switch",class:[t.showTag?"switch-tag":"",t.cssState],on:{click:t._handleClick}},[t.showTag?n("span",{staticClass:"on"},[t._v(t._s(t.tag[0]))]):t._e(),t._v(" "),t.showTag?n("span",{staticClass:"off"},[t._v(t._s(t.tag[1]))]):t._e()])},staticRenderFns:[]}},18:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(17),o=s(a),i=n(14),r=s(i);e.default={name:"test1",components:{menuVertical:o.default,BoSwitch:r.default},props:{name:{type:String,default:""},path:{type:String,default:""},dock:{type:String,default:""},state:{type:Boolean,default:!1},alias:{type:String,default:""}},methods:{onclick:function(){this.$emit("on-click","")},_handleSwitch:function(t){var e=this;this.$emit("on-switch",{obj:this,state:t}),setTimeout(function(){e.$refs.sw.setState(!1)},1e3)},off:function(){this.$refs.sw.setState(!1)}},data:function(){return{}}}},24:function(t,e,n){var s,a;s=n(18);var o=n(30);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},30:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-item"},[n("menu-vertical",{attrs:{path:t.path}},[n("span",{slot:"body"},[t._v(t._s(t.name))]),t._v(" "),n("span",{staticStyle:{"padding-right":"20px"},slot:"dock"},[n("bo-switch",{ref:"sw",attrs:{state:t.state},on:{"on-click":t._handleSwitch}})],1)])],1)},staticRenderFns:[]}},36:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"drawer",props:{show:{type:Boolean,default:!1},position:{type:String,default:"center"}},data:function(){return{animate:{center:"modal",bottom:"bt",left:"lr",top:"tb","top-header":"tb"}}}}},44:function(t,e,n){var s,a;s=n(36);var o=n(48);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"layout"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"layout-opacity",class:["top-header"==t.position?"layout-header":""]})]),t._v(" "),n("transition",{attrs:{name:t.animate[t.position]}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"drawer",class:["drawer-"+t.position]},[n("div",{staticClass:"drawer-box"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},62:function(t,e,n){var s,a;s=n(98);var o=n(197);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},98:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(44),o=s(a),i=n(24),r=s(i);e.default={name:"drawerdemo",components:{Drawer:o.default,Dmenu:r.default},methods:{play:function(t){this.show=!0,this.pos=t.obj.alias},close:function(){this.show=!1}},data:function(){return{show:!1,pos:"center",state:!1}}}},197:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{alias:"center",name:"Center"},on:{"on-switch":t.play}}),t._v(" "),n("dmenu",{attrs:{alias:"bottom",name:"Bootom"},on:{"on-switch":t.play}}),t._v(" "),n("dmenu",{attrs:{alias:"left",name:"Left"},on:{"on-switch":t.play}}),t._v(" "),n("dmenu",{attrs:{alias:"top",name:"Top"},on:{"on-switch":t.play}}),t._v(" "),n("dmenu",{attrs:{alias:"top-header",name:"Top with header"},on:{"on-switch":t.play}})],1),t._v(" "),n("drawer",{attrs:{show:t.show,position:t.pos}},[n("div",{staticStyle:{display:"flex",padding:"40px"}},[n("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:t.close}},[t._v("关 闭")])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.5d1196ffd86569d933aa.js.map