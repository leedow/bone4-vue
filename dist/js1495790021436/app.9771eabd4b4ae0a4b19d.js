webpackJsonp([31,22,29],{0:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=s(4),r=a(i),n=s(81),c=a(n),u=s(144),l=a(u);r.default.use(c.default);var o=new c.default({routes:[{path:"/",component:l.default},{path:"/:category/:com",component:l.default}]});new r.default({router:o,template:"<router-view/>"}).$mount("#app")},33:function(t,e,s){var a,i;a=s(39);var r=s(50);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},34:function(t,e,s){var a,i;a=s(40);var r=s(53);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},39:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(34),r=a(i);e.default={name:"sidebarDemo",components:{Sidebar:r.default},created:function(){setTimeout(function(){},1e3)},methods:{setCurl:function(t){this.curl=t},setCurrent:function(t){this.$refs.sidebar.setCurrent(t)}},data:function(){return{current:"a",curl:!1,surface:[{alias:"a",title:"选 中",icon:"scan"},{alias:"b",title:"菜 单",icon:"refresh"},{alias:"c",title:"菜 单",icon:"add"}]}}}},40:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sidebar",props:{surface:{type:Array,default:[]},current:{default:""},size:{type:String,default:"default"},curl:{type:Boolean,default:!1},theme:{type:String,default:"default"},css:{type:Object,default:function(){return{}}}},methods:{setCurrent:function(t){this.currentItem=t},triggerClick:function(t){var e=this;"string"==typeof t?this.surface.forEach(function(s){s.alias===t&&e.handleClick(s)}):"number"==typeof t&&this.handleClick(this.surface[t])},handleClick:function(t){t.link&&this.$router.push(t.link),this.$emit("on-click",t),this.setCurrent(t.alias)}},watch:{current:function(t){this.currentItem=t}},data:function(){return{currentItem:this.current}}}},50:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row "},[s("div",{staticStyle:{width:"30%",float:"left"}},[s("sidebar",{ref:"side",attrs:{current:"a",surface:[{alias:"a",title:"选 中"},{alias:"b",title:"菜 单"},{alias:"c",title:"菜 单"}]}})],1),t._v(" "),s("div",{staticClass:"p0002",staticStyle:{width:"48%",float:"left"}},[s("sidebar",{attrs:{current:"b",surface:[{alias:"a",title:"选中菜单",icon:"scan"},{alias:"b",title:"菜 单",icon:"refresh"},{alias:"c",title:"菜 单",icon:"add"}]}})],1),t._v(" "),s("div",{staticClass:"p0002",staticStyle:{width:"20%",float:"left"}},[s("sidebar",{attrs:{curl:!0,current:"b",surface:[{alias:"a",title:"选中菜单",icon:"scan"},{alias:"b",title:"菜 单",icon:"refresh"},{alias:"c",title:"菜 单",icon:"add"}]}})],1)]),t._v(" "),s("div",{staticClass:"row m2000"},[s("div",{staticStyle:{width:"30%",float:"left"}},[s("sidebar",{attrs:{size:"sm",current:"a",surface:[{alias:"a",title:"选 中"},{alias:"b",title:"菜 单"},{alias:"c",title:"菜 单"}]}})],1),t._v(" "),s("div",{staticClass:"p0002",staticStyle:{width:"48%",float:"left"}},[s("sidebar",{attrs:{size:"sm",current:"b",surface:[{alias:"a",title:"选中菜单",icon:"scan"},{alias:"b",title:"菜 单",icon:"refresh"},{alias:"c",title:"菜 单",icon:"add"}]}})],1),t._v(" "),s("div",{staticClass:"p0002",staticStyle:{width:"20%",float:"left"}},[s("sidebar",{attrs:{curl:!0,size:"sm",current:"b",surface:[{alias:"a",title:"选中菜单",icon:"scan"},{alias:"b",title:"菜 单",icon:"refresh"},{alias:"c",title:"菜 单",icon:"add"}]}})],1)]),t._v(" "),s("div",{staticClass:"row m2000"},[s("div",{staticStyle:{width:"30%",float:"left"}},[s("sidebar",{attrs:{theme:"white",size:"sm",current:"a",surface:t.surface}})],1),t._v(" "),s("div",{staticClass:"p0002",staticStyle:{width:"48%",float:"left"}},[s("sidebar",{attrs:{theme:"white",size:"sm",current:"a",surface:t.surface}})],1),t._v(" "),s("div",{staticClass:"p0002",staticStyle:{width:"20%",float:"left"}},[s("sidebar",{attrs:{curl:!0,theme:"white",size:"sm",current:"b",surface:t.surface}})],1)]),t._v(" "),s("div",{staticClass:"divi"}),t._v(" "),s("sidebar",{attrs:{css:{width:"300px"},curl:t.curl,current:"b",surface:t.surface}}),t._v(" "),s("div",{staticClass:"p2000",staticStyle:{"text-align":"left"}},[s("button",{staticClass:"btn btn-primary-blank",attrs:{type:"button",name:"button"},on:{click:function(e){t.setCurl(!0)}}},[t._v("缩起菜单")]),t._v(" "),s("button",{staticClass:"btn btn-primary-blank",attrs:{type:"button",name:"button"},on:{click:function(e){t.setCurl(!1)}}},[t._v("打开菜单")])]),t._v(" "),s("div",{staticClass:"divi"}),t._v(" "),s("sidebar",{ref:"sidebar",attrs:{css:{width:"300px"},theme:"light",current:t.current,surface:t.surface}}),t._v(" "),s("div",{staticClass:"p2000",staticStyle:{"text-align":"left"}},[s("button",{staticClass:"btn btn-primary-blank",attrs:{type:"button",name:"button"},on:{click:function(e){t.setCurrent("a")}}},[t._v("选中一")]),t._v(" "),s("button",{staticClass:"btn btn-primary-blank",attrs:{type:"button",name:"button"},on:{click:function(e){t.setCurrent("b")}}},[t._v("选中二")]),t._v(" "),s("button",{staticClass:"btn btn-primary-blank",attrs:{type:"button",name:"button"},on:{click:function(e){t.setCurrent("c")}}},[t._v("选中三")])])],1)},staticRenderFns:[]}},53:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"sidebar-menu",class:["sm"===t.size?"sidebar-menu-sm":"","default"!=t.theme?"sidebar-menu-"+t.theme:"",t.curl&&"sm"===t.size?"sidebar-menu-sm-curl":"",t.curl&&"default"===t.size?"sidebar-menu-curl":""],style:t.css},t._l(t.surface,function(e,a){return s("li",{staticClass:"menu-item",class:[e.alias===t.currentItem?"menu-item-current":"",e.icon?"menu-item-icon":""],on:{click:function(s){t.handleClick(e,a)}}},[e.icon?s("i",{staticClass:"icon iconfont",class:[e.icon?"icon-"+e.icon:""]}):t._e(),t._v(" "),s("span",[t._v(t._s(e.title))])])}))])},staticRenderFns:[]}},86:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(142),r=a(i),n=s(34),c=a(n),u=s(33),l=a(u);e.default={components:{SidebarMenu:c.default,Sidebar:l.default},name:"app",data:function(){return{isMobile:!1,doc:"",currentCategory:"",currentComponent:"",showSub:!1,subSurface:[],subMenus:{base:[{alias:"btn",title:"按 钮"},{alias:"phone-code",title:"验证码"},{alias:"drawer",title:"抽 屉"},{alias:"touch",title:"手 势"}],form:[{alias:"form-group",title:"表 单"},{alias:"bo-switch",title:"滑动开关"},{alias:"number",title:"数字选择"},{alias:"calendar",title:"日 历"}]}}},methods:{handleSidebar:function(t){this.showSub=!0,this.currentCategory=t.alias,this.currentComponent=this.subMenus[t.alias][0].alias,this.jump()},handleSubbar:function(t){this.currentComponent=t.alias,this.jump()},jump:function(){this.$router.push("/"+this.currentCategory+"/"+this.currentComponent)},loadingMarkdown:function(){$.ajax({url:"/src/components/"+this.currentComponent+"/doc.md",type:"get",data:{},success:function(t){new r.default.Renderer;$("#content").html((0,r.default)(t).replace("<pre>",'<pre class="language-markup">')),Prism.highlightAll()},error:function(){$("#content").html("Document not found")}})},display:function(){this.showSub=!0,this.subSurface.splice(0),this.currentCategory=this.$route.params.category,this.currentComponent=this.$route.params.com;for(var t in this.subMenus[this.currentCategory])this.subSurface.push(this.subMenus[this.currentCategory][t]);this.loadingMarkdown()}},ready:function(){this.$refs.mains.triggerClick(this.$route.params.name)},created:function(){this.display()},watch:{$route:"display"}}},139:function(t,e){},144:function(t,e,s){var a,i;s(139),a=s(86);var r=s(190);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"mainapp"}},[s("div",{staticClass:"left-scroll",attrs:{id:"left"}},[s("h1",{attrs:{id:"logo"}},[t._v("Bone4")]),t._v(" "),s("h2",{attrs:{id:"logo-tiny"}},[t._v("Vue 2.0 version")]),t._v(" "),s("sidebar-menu",{ref:"mains",attrs:{surface:[{alias:"base",title:"基 础",sub:"base"},{alias:"form",title:"输 入",sub:"form"},{alias:"list",title:"列表&菜单",sub:"list"},{alias:"message",title:"信息提示",sub:"message"},{alias:"other",title:"其 他",sub:"other"}],size:"sm",current:t.currentCategory},on:{"on-click":t.handleSidebar}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSub,expression:"showSub"}],staticClass:"sub-menu"},[s("sidebar-menu",{ref:"sub",attrs:{surface:t.subSurface,size:"sm",theme:"white",current:t.currentComponent},on:{"on-click":t.handleSubbar}})],1),t._v(" "),s("div",{staticClass:"thin-scroll",class:[t.showSub?"mid-sub":""],attrs:{id:"mid"}},[s("div",{staticClass:"mobile",staticStyle:{width:"330px",height:"560px",margin:"0 auto"}},[s("div",{staticClass:"screen",staticStyle:{background:"#f2f2f2",overflow:"hidden",height:"470px"}},[s("iframe",{staticClass:"thin-scroll",staticStyle:{border:"0"},attrs:{src:"/mobile.html#/demo/"+t.currentComponent,width:"320",height:"470"}})],1)])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"thin-scroll",attrs:{id:"right"}},[s("div",{staticClass:"markdown",attrs:{id:"content"}})])}]}}});
//# sourceMappingURL=app.9771eabd4b4ae0a4b19d.js.map