webpackJsonp([21,19],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var a=n(7),i=o(a),s=n(85),c=o(s),r=n(126),u=o(r),l=n(125),d=o(l),f=n(124),p=o(f),m=n(53),h=o(m),v=n(87),_=o(v);i.default.use(c.default),i.default.prototype.$toast=_.default;var y=new c.default({routes:[{path:"/",component:u.default,children:[{path:"demos",component:d.default}]},{path:"/demo",component:p.default,children:h.default}]});new i.default({router:y,methods:{},data:function(){return{}}}).$mount("#app")},12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"toast",props:{type:{type:String,default:"text"},delay:{type:Number,default:1500},content:{type:String,default:""}},mounted:function(){},methods:{open:function(){this.showSelf=!0,"loading"!==this.typeSelf&&this.clock()},close:function(){this.showSelf=!1},clock:function(){var t=this;setTimeout(function(){t.close()},this.delaySelf)}},data:function(){return{typeSelf:this.type,delaySelf:this.delay,contentSelf:this.content,showSelf:!1,icon:{text:"",success:"check",failed:"close",warm:"info",loading:"loading"}}}}},15:function(t,e,n){var o,a;o=n(59);var i=n(70);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},16:function(t,e,n){var o,a;o=n(12);var i=n(19);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},19:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"layout"}},[t.showSelf?n("div",{staticClass:"toast"},[""!==t.icon?n("i",{staticClass:"icon iconfont",class:["icon-"+t.icon[t.typeSelf],"loading"===t.typeSelf?"loading":""]}):t._e(),t._v("\n    "+t._s(t.contentSelf)+"\n  ")]):t._e()])},staticRenderFns:[]}},38:function(t,e,n){var o,a;o=n(61);var i=n(74);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){n.e(16,function(){t(n(29))})},a=function(t){n.e(5,function(){t(n(45))})},i=function(t){n.e(10,function(){t(n(26))})},s=function(t){n.e(9,function(){t(n(46))})},c=function(t){n.e(6,function(){t(n(33))})},r=function(t){n.e(3,function(){t(n(30))})},u=function(t){n.e(17,function(){t(n(34))})},l=function(t){n.e(12,function(){t(n(42))})},d=function(t){n.e(4,function(){t(n(49))})},f=function(t){n.e(8,function(){t(n(31))})},p=function(t){n.e(15,function(){t(n(32))})},m=function(t){n.e(0,function(){t(n(21))})},h=function(t){n.e(7,function(){t(n(44))})},v=function(t){n.e(13,function(){t(n(48))})},_=function(t){n.e(18,function(){t(n(43))})},y=function(t){n.e(14,function(){t(n(47))})},b=function(t){n.e(2,function(){t(n(50))})},C=function(t){n.e(1,function(){t(n(51))})},S=function(t){n.e(11,function(){t(n(52))})};e.default=[{path:"form-input",component:m},{path:"bo-select",component:l},{path:"list",component:a},{path:"listdown",component:i},{path:"listup",component:s},{path:"modal",component:c},{path:"btn",component:o},{path:"form-group",component:r},{path:"tabs",component:u},{path:"toast",component:d},{path:"menu-vertical",component:f},{path:"menus-horizon",component:p},{path:"drawer",component:h},{path:"slider",component:v},{path:"bo-switch",component:_},{path:"slide",component:y},{path:"login",component:b},{path:"seller",component:C},{path:"touch",component:S}]},59:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"menuvertical",components:{},props:{icon:{type:String,default:""},iconColor:{type:String,default:""},path:{type:String,default:""},alias:{type:String,default:""}},methods:{handleClick:function(){""!==this.path&&this.$router.push(this.path),this.$emit("on-click",this.alias)}},data:function(){return{}}}},61:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"menuhorizon",components:{},props:{surface:{type:Array,default:function(){return[]}},size:{type:String,default:"normal"},border:{type:Boolean,default:!1},current:{type:String,default:""}},created:function(){},methods:{setCurrent:function(t){this.currentSelf=t},_handleClick:function(t){t.path&&this.$router.push(t.path),this.$emit("on-click",t),this.setCurrent(t.alias)}},data:function(){return{currentSelf:this.current,pathSelf:this.$route.path}}}},70:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-vertical-item",on:{click:t.handleClick}},[""!=t.icon?n("div",{staticClass:"menu-icon"},[n("i",{staticClass:"icon iconfont",class:[""!=t.icon?"icon-"+t.icon:""]})]):t._e(),t._v(" "),n("div",{staticClass:"menu-body"},[t._t("body")],2),t._v(" "),n("div",{staticClass:"menu-dock"},[t._t("dock")],2)])},staticRenderFns:[]}},74:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"menu-horizon",class:["menu-horizon-"+t.size,t.border?"menu-horizon-border":""]},t._l(t.surface,function(e,o){return n("button",{staticClass:"menu-horizon-item",class:[e.alias==t.currentSelf?"menu-current":""],on:{click:function(n){t._handleClick(e,o)}}},[n("span",{staticClass:"menu-pic"},[n("i",{staticClass:"icon iconfont",class:[e.alias==t.currentSelf&&e.currentIcon?"icon-"+e.currentIcon:"icon-"+e.icon]})]),t._v(" "),n("span",{staticClass:"menu-title"},[t._v(t._s(e.title))])])}))},staticRenderFns:[]}},87:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),i=o(a),s=i.default.extend(n(16)),c={com:!1,open:function(t,e){var n=e||"text";this.com?(this.com.contentSelf=t,this.com.typeSelf=n):this.com=new s({data:{typeSelf:n,conentSelf:t}}).$mount(),this.com.open(),document.body.appendChild(this.com.$el)},close:function(){this.com.close()}};e.default=c},92:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),i=o(a);e.default={name:"test1",components:{menuVertical:i.default},props:{name:{type:String,default:""},path:{type:String,default:""},dock:{type:String,default:""}},methods:{onclick:function(){this.$emit("on-click","")}},data:function(){return{}}}},102:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"menudemo",components:{},created:function(){this.currentComponent=this.$route.params.name},data:function(){return{currentComponent:""}}}},103:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(120),i=o(a);e.default={name:"menudemo",components:{dmenu:i.default},data:function(){return{}}}},104:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),i=o(a);e.default={components:{menusHorizon:i.default},name:"app",data:function(){return{datas:[{id:1,content:"标题1"}]}},methods:{},ready:function(){},created:function(){},watch:{}}},120:function(t,e,n){var o,a;o=n(92);var i=n(133);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},124:function(t,e,n){var o,a;o=n(102);var i=n(134);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},125:function(t,e,n){var o,a;o=n(103);var i=n(131);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},126:function(t,e,n){var o,a;o=n(104);var i=n(142);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"list-title"},[t._v("基 础")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/btn",name:"按 钮"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/form-group",name:"表 单"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/drawer",name:"动效抽屉"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/touch",name:"手势操作"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/slider",name:"内容滚动"}})],1),t._v(" "),n("div",{staticClass:"list-title"},[t._v("输 入")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/bo-select",name:"下拉菜单"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/form-group",name:"表 单"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/bo-switch",name:"滑动开关"}})],1),t._v(" "),n("div",{staticClass:"list-title"},[t._v("列表&菜单")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/listdown",name:"上拉刷新"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/listup",name:"下拉刷新"}}),t._v(" "),n("dmenu",{attrs:{name:"主菜单",dock:"见本页下方"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/tabs",name:"选项卡"}})],1),t._v(" "),n("div",{staticClass:"list-title"},[t._v("信息提示")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/modal",name:"对话框"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/toast",name:"轻提示"}})],1),t._v(" "),n("div",{staticClass:"list-title"},[t._v("其 他")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/slide",name:"幻灯片"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/login",name:"APP登录"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/car",name:"商品列表"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/seller",name:"电商首页"}})],1)])},staticRenderFns:[]}},133:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-item list-item-arrow",on:{click:t.onclick}},[n("menu-vertical",{attrs:{path:t.path}},[n("span",{slot:"body"},[t._v(t._s(t.name))]),t._v(" "),n("span",{staticStyle:{"padding-right":"20px",color:"#aaa"},slot:"dock"},[t._v(t._s(t.dock))])])],1)},staticRenderFns:[]}},134:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("section",{staticClass:"layout-top"},[n("header",{staticClass:"header"},[n("div",{staticClass:"header-dock al"},[n("router-link",{attrs:{to:"/demos"}},[n("i",{staticClass:"icon iconfont icon-back"})])],1),t._v(" "),n("div",{staticClass:"header-body"},[t._v("\n      name\n    ")])])]),t._v(" "),n("section",{staticClass:"layout-has-top"},[n("router-view")],1)])},staticRenderFns:[]}},142:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._m(0),t._v(" "),n("section",{staticClass:"layout-has-top layout-main"},[n("router-view")],1),t._v(" "),n("section",{staticClass:"layout-bottom bor-top",staticStyle:{"background-color":"#fff"}},[n("menus-horizon",{attrs:{size:"sm",current:this.$route.path,surface:[{icon:"like",currentIcon:"likefill",alias:"/home",title:"首 页"},{icon:"time",currentIcon:"timefill",alias:"/demos",title:"组 件",path:"/demos"},{icon:"shop",currentIcon:"shopfill",alias:"/about",title:"关 于",path:"/about"}]}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"layout-top"},[n("header",{staticClass:"header"},[n("div",{staticClass:"header-body"},[t._v("\n        Bone 4\n      ")])])])}]}}});
//# sourceMappingURL=mobile.da523e294248dd187527.js.map