webpackJsonp([24,35],{2:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(7),s=a(i);t.exports=new s.default},4:function(t,e,n){var a=n(1)(n(5),n(6),null,null);t.exports=a.exports},5:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=a(i);e.default={name:"btn",props:{name:{type:String,default:""},theme:{type:String,default:"default"},size:{type:String,default:"default"},block:{type:Boolean,default:!1},icon:{type:String,default:""},disable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},submit:{type:String,default:""}},methods:{handleClick:function(){""!==this.submit&&s.default.$emit("btn-submit",this.submit),this.disable&&!this.loading&&this.$emit("on-click","")}},data:function(){return{}}}},6:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn",class:["btn-"+t.theme,"btn-"+t.size,t.block?"btn-block":""],on:{click:t.handleClick}},[""==t.icon||t.loading?t._e():n("i",{staticClass:"icon iconfont",class:[t.icon?"icon-"+t.icon:""]}),t._v(" "),t.loading?n("i",{staticClass:"icon iconfont icon-loading loading"}):t._e(),t._v(" "),n("span",[t._v(t._s(t.name))])])},staticRenderFns:[]}},65:function(t,e,n){var a=n(1)(n(110),n(231),null,null);t.exports=a.exports},110:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),s=a(i),l=n(2),o=a(l);e.default={name:"buttonDemo",components:{Btn:s.default},created:function(){o.default.$on("on-submit",function(t){alert("触发表单"+t)})},data:function(){return{}}}},231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p2222"},[n("div",{staticClass:"p1111"},[n("btn",{attrs:{size:"lg",theme:"primary-blank",block:"true",name:"普通操作"}})],1),t._v(" "),n("div",{staticClass:"p1111"},[n("btn",{attrs:{size:"lg",theme:"primary",block:"true",name:"普通操作2"}})],1),t._v(" "),n("div",{staticClass:"p1111"},[n("btn",{attrs:{size:"lg",theme:"warm",block:"true",name:"警告操作",icon:"safe"}})],1),t._v(" "),n("div",{staticClass:"p1111"},[n("btn",{attrs:{size:"lg",theme:"warm-blank",block:"true",name:"警告操作2",icon:"safe"}})],1),t._v(" "),n("div",{staticClass:"p1111"},[n("btn",{attrs:{theme:"primary",name:"按 钮"}})],1),t._v(" "),n("div",{staticClass:"p1111"},[n("btn",{attrs:{size:"sm",theme:"primary",name:"按 钮"}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=24.ed172a8c4ea0b0e7c153.js.map