webpackJsonp([30,29],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var a=n(4),i=o(a),s=n(81),c=o(s),u=n(161),r=o(u),l=n(160),d=o(l),f=n(159),p=o(f),m=n(85),h=o(m),v=n(84),_=o(v),y=n(83),b=o(y);i.default.use(c.default),i.default.prototype.$toast=_.default,i.default.prototype.$modal=b.default;var C=new c.default({routes:[{path:"/",component:r.default,children:[{path:"demos",component:d.default}]},{path:"/demo",component:p.default,children:h.default}]});new i.default({router:C,methods:{},data:function(){return{}}}).$mount("#app")},17:function(t,e,n){var o,a;o=n(105);var i=n(164);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},27:function(t,e,n){var o,a;o=n(126);var i=n(205);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},45:function(t,e,n){var o,a;o=n(107);var i=n(179);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},83:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=o(a),s=i.default.extend(n(151)),c={com:!1,open:function(t,e,n){var o=n||"confirm";return this.com?(this.com.content=t,this.com.show=!0):(this.com=new s({data:{content:t}}).$mount(),this.com.type=o,this.com.show=!0),document.body.appendChild(this.com.$el),this.com},close:function(){this.com.show=!1}};e.default=c},84:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=o(a),s=i.default.extend(n(27)),c={com:!1,open:function(t,e){var n=e||"text";this.com?(this.com.contentSelf=t,this.com.typeSelf=n):this.com=new s({data:{typeSelf:n,contentSelf:t}}).$mount(),this.com.open(),document.body.appendChild(this.com.$el)},close:function(){this.com.close()}};e.default=c},85:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){n.e(19,function(){t(n(60))})},a=function(t){n.e(6,function(){t(n(150))})},i=function(t){n.e(14,function(){t(n(32))})},s=function(t){n.e(13,function(){t(n(65))})},c=function(t){n.e(8,function(){t(n(68))})},u=function(t){n.e(4,function(){t(n(63))})},r=function(t){n.e(20,function(){t(n(76))})},l=function(t){n.e(15,function(){t(n(58))})},d=function(t){n.e(10,function(){t(n(77))})},f=function(t){n.e(12,function(){t(n(66))})},p=function(t){n.e(18,function(){t(n(67))})},m=function(t){n.e(0,function(){t(n(31))})},h=function(t){n.e(9,function(){t(n(62))})},v=function(t){n.e(16,function(){t(n(74))})},_=function(t){n.e(26,function(){t(n(59))})},y=function(t){n.e(21,function(){t(n(75))})},b=function(t){n.e(17,function(){t(n(73))})},C=function(t){n.e(2,function(){t(n(78))})},S=function(t){n.e(1,function(){t(n(79))})},g=function(t){n.e(28,function(){t(n(80))})},k=function(t){n.e(3,function(){t(n(70))})},w=function(t){n.e(27,function(){t(n(57))})},x=function(t){n.e(11,function(){t(n(61))})},$=function(t){n.e(22,function(){t(n(33))})},F=function(t){n.e(23,function(){t(n(72))})},R=function(t){n.e(7,function(){t(n(71))})},j=function(t){n.e(5,function(){t(n(56))})},M=function(t){n.e(25,function(){t(n(64))})},P=function(t){n.e(24,function(){t(n(69))})};e.default=[{path:"form-input",component:m},{path:"bo-select",component:l},{path:"list",component:a},{path:"listdown",component:i},{path:"listup",component:s},{path:"modal",component:c},{path:"btn",component:o},{path:"form-group",component:u},{path:"tabs",component:r},{path:"toast",component:d},{path:"menu-vertical",component:f},{path:"menus-horizon",component:p},{path:"drawer",component:h},{path:"slider",component:v},{path:"bo-switch",component:_},{path:"slide",component:b},{path:"login",component:C},{path:"seller",component:S},{path:"touch",component:g},{path:"stars",component:y},{path:"phone-code",component:k},{path:"number",component:w},{path:"calendar",component:x},{path:"sidebar",component:$},{path:"selector",component:F},{path:"selectorTime",component:R},{path:"map",component:j},{path:"keyboard",component:M},{path:"paypassword",component:P}]},97:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(17),i=o(a);e.default={name:"test1",components:{menuVertical:i.default},props:{name:{type:String,default:""},path:{type:String,default:""},dock:{type:String,default:""}},methods:{onclick:function(){this.$emit("on-click","")}},data:function(){return{}}}},105:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"menuvertical",components:{},props:{icon:{type:String,default:""},iconColor:{type:String,default:""},path:{type:String,default:""},alias:{type:String,default:""}},methods:{handleClick:function(){""!==this.path&&this.$router.push(this.path),this.$emit("on-click",this.alias)}},data:function(){return{}}}},107:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"menuhorizon",components:{},props:{type:{type:String,default:"iconfont"},surface:{type:Array,default:function(){return[]}},size:{type:String,default:"normal"},border:{type:Boolean,default:!1},current:{type:String,default:""}},created:function(){},methods:{setCurrent:function(t){this.currentSelf=t},_handleClick:function(t){t.path&&this.$router.push(t.path),this.$emit("on-click",t),this.setCurrent(t.alias)}},computed:{currentSelf:function(){return this.current}},data:function(){return{pathSelf:this.$route.path}}}},109:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Modal",components:{},props:{name:{type:String,default:""},show:{type:Boolean,default:!1},type:{type:String,default:"confirm"},buttons:{type:Array,default:function(){return["确 定","取 消"]}}},methods:{confirm:function(){this.$emit("on-confirm",this.name)},cancel:function(){this.$emit("on-cancel",this.name)}},data:function(){return{content:""}}}},126:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"toast",props:{type:{type:String,default:"text"},delay:{type:Number,default:1500},content:{type:String,default:""}},mounted:function(){},methods:{open:function(){this.showSelf=!0,"loading"!==this.typeSelf&&this.clock()},close:function(){this.showSelf=!1},clock:function(){var t=this;setTimeout(function(){t.close()},this.delaySelf)}},data:function(){return{typeSelf:this.type,delaySelf:this.delay,contentSelf:this.content,showSelf:!1,icon:{text:"",success:"check",failed:"close",warm:"info",loading:"loading"}}}}},127:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"menudemo",components:{},created:function(){this.init()},methods:{init:function(){this.currentComponent=this.$route.path.replace("/demo/","")}},watch:{$route:"init"},data:function(){return{currentComponent:""}}}},128:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(148),i=o(a);e.default={name:"menudemo",components:{dmenu:i.default},data:function(){return{}}}},129:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(45),i=o(a);e.default={components:{menusHorizon:i.default},name:"app",data:function(){return{datas:[{id:1,content:"标题1"}],tip:1}},methods:{},mounted:function(){var t=this;setTimeout(function(){t.tip=2},1e3)},created:function(){},watch:{}}},148:function(t,e,n){var o,a;o=n(97);var i=n(183);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},151:function(t,e,n){var o,a;o=n(109);var i=n(186);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},159:function(t,e,n){var o,a;o=n(127);var i=n(184);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},160:function(t,e,n){var o,a;o=n(128);var i=n(177);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},161:function(t,e,n){var o,a;o=n(129);var i=n(198);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},164:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-vertical-item",on:{click:t.handleClick}},[""!=t.icon?n("div",{staticClass:"menu-icon"},[n("i",{staticClass:"icon iconfont",class:[""!=t.icon?"icon-"+t.icon:""]})]):t._e(),t._v(" "),n("div",{staticClass:"menu-body"},[t._t("body")],2),t._v(" "),n("div",{staticClass:"menu-dock"},[t._t("dock")],2)])},staticRenderFns:[]}},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"list-title"},[t._v("基 础")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/btn",name:"按 钮"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/form-group",name:"表 单"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/phone-code",name:"验证码"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/drawer",name:"动效抽屉"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/touch",name:"手势操作"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/slider",name:"内容滚动"}})],1),t._v(" "),n("div",{staticClass:"list-title"},[t._v("输 入")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/form-group",name:"表 单"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/bo-switch",name:"滑动开关"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/number",name:"数字选择"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/calendar",name:"日 历"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/bo-select",name:"下拉菜单"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/selector",name:"选择列表"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/selectorTime",name:"时间选择"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/keyboard",name:"数字键盘"}})],1),t._v(" "),n("div",{staticClass:"list-title"},[t._v("列表&菜单")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/listdown",name:"上拉刷新"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/listup",name:"下拉刷新"}}),t._v(" "),n("dmenu",{attrs:{name:"主菜单",dock:"见本页下方"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/tabs",name:"选项卡"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/sidebar",name:"侧栏菜单"}})],1),t._v(" "),n("div",{staticClass:"list-title"},[t._v("信息提示")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/modal",name:"对话框"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/toast",name:"轻提示"}})],1),t._v(" "),n("div",{staticClass:"list-title"},[t._v("其 他")]),t._v(" "),n("ul",{staticClass:"list list-box p0002"},[n("dmenu",{attrs:{path:"/demo/slide",name:"幻灯片"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/stars",name:"评分"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/login",name:"APP登录"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/car",name:"商品列表"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/seller",name:"电商首页"}}),t._v(" "),n("dmenu",{attrs:{path:"/demo/map",name:"地图收货地址"}})],1)])},staticRenderFns:[]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"menu-horizon",class:["menu-horizon-"+t.size,t.border?"menu-horizon-border":""]},t._l(t.surface,function(e,o){return n("button",{staticClass:"menu-horizon-item",class:[e.alias==t.currentSelf?"menu-current":""],on:{click:function(n){t._handleClick(e,o)}}},["iconfont"==t.type?n("span",{staticClass:"menu-pic"},[n("i",{staticClass:"icon iconfont",class:[e.alias==t.currentSelf&&e.currentIcon?"icon-"+e.currentIcon:"icon-"+e.icon]})]):t._e(),t._v(" "),"image"==t.type?n("span",{staticClass:"menu-pic"},[e.alias==t.currentSelf&&e.currentIcon?n("img",{attrs:{src:e.currentIcon,alt:""}}):n("img",{attrs:{src:e.icon,alt:""}})]):t._e(),t._v(" "),e.tip&&e.tip>0?n("span",{staticClass:"tip"},[t._v(t._s(e.tip))]):t._e(),t._v(" "),n("span",{staticClass:"menu-title"},[t._v(t._s(e.title))])])}))},staticRenderFns:[]}},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-item list-item-arrow",on:{click:t.onclick}},[n("menu-vertical",{attrs:{path:t.path}},[n("span",{slot:"body"},[t._v(t._s(t.name))]),t._v(" "),n("span",{staticStyle:{"padding-right":"20px",color:"#aaa"},slot:"dock"},[t._v(t._s(t.dock))])])],1)},staticRenderFns:[]}},184:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("section",{staticClass:"layout-top"},[n("header",{staticClass:"header"},[n("div",{staticClass:"header-dock al"},[n("router-link",{attrs:{to:"/demos"}},[n("i",{staticClass:"icon iconfont icon-back"})])],1),t._v(" "),n("div",{staticClass:"header-body"},[t._v("\n      "+t._s(t.currentComponent)+"\n    ")])])]),t._v(" "),n("section",{staticClass:"layout-has-top"},[n("router-view")],1)])},staticRenderFns:[]}},186:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"layout"}},[t.show?n("div",{staticClass:"layout-opacity"}):t._e()]),t._v(" "),n("transition",{attrs:{name:"modal"}},[t.show?n("div",{staticClass:"dialog-layout"},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"dialog-content"},[t._t("default"),t._v("\n          "+t._s(t.content)+"\n        ")],2),t._v(" "),n("div",{staticClass:"dialog-buttons"},["confirm"==t.type?n("button",{staticClass:"button-no",on:{click:t.cancel}},[t._v(t._s(t.buttons[1]))]):t._e(),t._v(" "),n("button",{staticClass:"button-ok",on:{click:t.confirm}},[t._v(t._s(t.buttons[0]))])])])]):t._e()])],1)},staticRenderFns:[]}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._m(0),t._v(" "),n("section",{staticClass:"layout-has-top layout-main"},[n("router-view")],1),t._v(" "),n("section",{staticClass:"layout-bottom bor-top",staticStyle:{"background-color":"#fff"}},[n("menus-horizon",{attrs:{size:"sm",current:this.$route.path,surface:[{icon:"like",currentIcon:"likefill",alias:"/home",title:"首 页"},{icon:"time",currentIcon:"timefill",alias:"/demos",title:"组 件",tip:t.tip,path:"/demos"},{icon:"shop",currentIcon:"shopfill",alias:"/about",title:"关 于",path:"/about"}]}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"layout-top"},[n("header",{staticClass:"header"},[n("div",{staticClass:"header-body"},[t._v("\n        Bone 4\n      ")])])])}]}},205:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"layout"}},[t.showSelf?n("div",{staticClass:"toast"},[""!==t.icon?n("i",{staticClass:"icon iconfont",class:["icon-"+t.icon[t.typeSelf],"loading"===t.typeSelf?"loading":""]}):t._e(),t._v("\n    "+t._s(t.contentSelf)+"\n  ")]):t._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=mobile.aadc11b60bfebdb51cbf.js.map