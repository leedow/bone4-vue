webpackJsonp([8,19],{1:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=s(7),a=i(n);t.exports=new a.default},2:function(t,e){"use strict";t.exports=function(t){this.distanceX=0,this.distanceY=0,this.startPos=[0,0],this.currentPos=[0,0],this.startTime=0,this.endTime=0,this.speedX=0,this.speedY=0,this.state="FREE",this.alias=t.alias||"",this.dom=t.dom,this.eventType=t.type||"swipe",this.callback=t.doing||function(){},this.donecallback=t.done||function(){},this.mode=t.mode||"strict";var e=this;this.handleTouchStart=function(t){e.startTime=(new Date).getTime(),e.state="START";var s=t.targetTouches[0];e.startPos=[s.pageX,s.pageY],console.log("startpost"+e.startPos),e.callback("touchstart",{distance:{x:e.distanceX,y:e.distanceY},position:e.startPos,state:e.state,alias:e.alias})},this.handleTouchMove=function(t){e.state="MOVING";var s=t.targetTouches[0];e.currentPos=[s.pageX,s.pageY],e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],e.callback("touchmove",{distance:{x:e.distanceX,y:e.distanceY},position:e.currentPos,state:e.state,alias:e.alias})},this.handleTouchEnd=function(){e.state="END",e.endTime=(new Date).getTime();var t=Math.floor((e.endTime-e.startTime)/1e3);0!==e.currentPos[0]&&0!==e.currentPos[1]||(e.currentPos=e.startPos),e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],0===t&&(t=1),e.speedX=Math.abs(e.distanceX/t),e.speedY=Math.abs(e.distanceY/t),e.actions[e.eventType]()?("unstrict"===e.mode&&e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias}),e.donecallback({distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias})):e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias}),e.state="FREE",e.distanceX=0,e.distanceY=0,e.startTime=0,e.endTime=0,e.speedX=0,e.speedY=0,e.startPos=[0,0],e.currentPos=[0,0]},this.actions={swipe:function(){return!0},swipeDown:function(){return e.distanceY>60},swipeUp:function(){return e.distanceY<-60},swipeLeft:function(){return e.distanceX<-60},swipeRight:function(){return e.distanceX>60},swipeX:function(){return Math.abs(e.distanceX)>60},swipeY:function(){return Math.abs(e.distanceY)>60}},this.init=function(){this.dom.addEventListener("touchstart",this.handleTouchStart),this.dom.addEventListener("touchmove",this.handleTouchMove),this.dom.addEventListener("touchend",this.handleTouchEnd)},this.destory=function(){this.dom.removeEventListener("touchstart",this.handleTouchStart),this.dom.removeEventListener("touchmove",this.handleTouchMove),this.dom.removeEventListener("touchend",this.handleTouchEnd)},this.init()}},3:function(t,e,s){var i,n;i=s(5);var a=s(6);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},5:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=i(n);e.default={name:"btn",props:{name:{type:String,default:""},theme:{type:String,default:"default"},size:{type:String,default:"default"},block:{type:Boolean,default:!1},icon:{type:String,default:""},disable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},submit:{type:String,default:""}},methods:{handleClick:function(){""!==this.submit&&a.default.$emit("btn-submit",this.submit),this.disable&&!this.loading&&this.$emit("on-click","")}},data:function(){return{}}}},6:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn",class:["btn-"+t.theme,"btn-"+t.size,t.block?"btn-block":""],on:{click:t.handleClick}},[""==t.icon||t.loading?t._e():s("i",{staticClass:"icon iconfont",class:[t.icon?"icon-"+t.icon:""]}),t._v(" "),t.loading?s("i",{staticClass:"icon iconfont icon-loading loading"}):t._e(),t._v(" "),s("span",[t._v(t._s(t.name))])])},staticRenderFns:[]}},8:function(t,e,s){var i,n;i=s(11);var a=s(17);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},11:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=i(n);e.default={name:"Modal",components:{},props:{mode:{type:String,default:"swipeDown"}},created:function(){try{this.pullDistance*=window.r||1}catch(t){this.pullDistance*=1}this.touchit=new a.default({dom:document.body,type:this.mode,done:this.loading,doing:this.handleTouch})},methods:{reset:function(){var t=this;setTimeout(function(){t.pullState=0},300),this.move(0),this.isloading=!1},move:function(t){this.$refs.list.style.transform="translate(0px, "+t+"px)"},loading:function(t){console.log("loading"+t.distance.y),this.isloading=!0,this.pullState=4,this.distance=0,"swipeUp"===this.mode&&this.move(-this.pullDistance),"swipeDown"===this.mode&&this.move(this.pullDistance),this.$emit("on-loading",this)},handleTouch:function(t,e){var s=this;switch(t){case"touchstart":break;case"touchmove":var i=!0;switch(Math.abs(this.distance)<this.pullDistance+50&&(this.distance=e.distance.y,this.move(this.distance)),this.mode){case"swipeUp":console.log("------"),console.log(document.body.scrollTop),console.log(document.body.clientHeight),console.log(document.body.scrollHeight),e.distance.y<0?(i=!0,this.pullState=2):(i=!1,this.pullState=0);break;case"swipeDown":e.distance.y>0?(i=!0,this.pullState=1):(i=!1,this.pullState=0)}Math.abs(e.distance.y)>this.pullDistance&&i&&(this.pullState=3);break;case"touchend":this.distance=0,setTimeout(function(){s.pullState=0},300),console.log("pulldown touchend"+e.distance.y),this.move(0)}}},data:function(){return{touchit:null,isloading:!1,notice:["","下拉刷新列表","上拉刷新列表","松开刷新","加载中"],pullState:0,distance:0,pullDistance:60}},beforeDestroy:function(){this.touchit.destory()}}},17:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{ref:"list",staticClass:"list"},[s("li",{directives:[{name:"show",rawName:"v-show",value:t.pullState>0&&"swipeDown"===t.mode,expression:"pullState>0&&mode==='swipeDown'"}],staticClass:"down-fresh"},[s("p",[s("i",{staticClass:"icon iconfont icon-loading",class:[t.isloading?"loading":""]}),t._v(" "),s("span",[t._v(t._s(t.notice[t.pullState]))])])]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.pullState>0&&"swipeUp"===t.mode,expression:"pullState>0&&mode==='swipeUp'"}],staticClass:"up-fresh"},[s("p",[s("i",{staticClass:"icon iconfont icon-loading",class:[t.isloading?"loading":""]}),t._v(" "),s("span",[t._v(t._s(t.notice[t.pullState]))])])]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},31:function(t,e,s){var i,n;i=s(58);var a=s(72);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},58:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(15),a=i(n),o=s(8),c=i(o),l=s(3),d=i(l);e.default={name:"menudemo",components:{menuVertical:a.default,list:c.default,btn:d.default},data:function(){return{}}}},72:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("list",{staticClass:"list-box p0002"},[s("li",{staticClass:"list-item"},[s("menu-vertical",{attrs:{icon:"scan"}},[s("span",{slot:"body"},[t._v("带图标")])])],1),t._v(" "),s("li",{staticClass:"list-item list-item-arrow"},[s("menu-vertical",{attrs:{icon:"cascades"}},[s("p",{slot:"body"},[t._v("带图标箭头")])])],1)]),t._v(" "),s("list",{staticClass:"list-box p0002 m2000"},[s("li",{staticClass:"list-item"},[s("menu-vertical",[s("p",{slot:"body"},[t._v("右侧停靠")]),t._v(" "),s("btn",{attrs:{theme:"blank",blank:"true",name:"Anything"},slot:"dock"})],1)],1),t._v(" "),s("li",{staticClass:"list-item"},[s("menu-vertical",[s("p",{slot:"body"},[t._v("右侧停靠")]),t._v(" "),s("i",{staticClass:"icon iconfont icon-roundcheckfill",staticStyle:{"font-size":"24px",color:"#3492e6"},slot:"dock"})])],1),t._v(" "),s("li",{staticClass:"list-item list-item-arrow"},[s("menu-vertical",[s("p",{slot:"body"},[t._v("自定义内容 "),s("span",{staticStyle:{display:"block","font-size":"13px",color:"#999"}},[t._v("随便怎么加")])])])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.f1352ed01dc96a7bb31c.js.map