webpackJsonp([14,29],{2:function(t,e){"use strict";t.exports=function(t){this.distanceX=0,this.distanceY=0,this.startPos=[0,0],this.currentPos=[0,0],this.startTime=0,this.endTime=0,this.speedX=0,this.speedY=0,this.state="FREE",this.alias=t.alias||"",this.dom=t.dom,this.eventType=t.type||"swipe",this.callback=t.doing||function(){},this.donecallback=t.done||function(){},this.mode=t.mode||"strict";var e=this;this.handleTouchStart=function(t){e.startTime=(new Date).getTime(),e.state="START";var s=t.targetTouches[0];e.startPos=[s.pageX,s.pageY],console.log("startpost"+e.startPos),e.callback("touchstart",{distance:{x:e.distanceX,y:e.distanceY},position:e.startPos,state:e.state,alias:e.alias})},this.handleTouchMove=function(t){e.state="MOVING";var s=t.targetTouches[0];e.currentPos=[s.pageX,s.pageY],e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],e.callback("touchmove",{distance:{x:e.distanceX,y:e.distanceY},position:e.currentPos,state:e.state,alias:e.alias})},this.handleTouchEnd=function(){e.state="END",e.endTime=(new Date).getTime();var t=Math.floor((e.endTime-e.startTime)/1e3);0!==e.currentPos[0]&&0!==e.currentPos[1]||(e.currentPos=e.startPos),e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],0===t&&(t=1),e.speedX=Math.abs(e.distanceX/t),e.speedY=Math.abs(e.distanceY/t),e.actions[e.eventType]()?("unstrict"===e.mode&&e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias}),e.donecallback({distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias})):e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias}),e.state="FREE",e.distanceX=0,e.distanceY=0,e.startTime=0,e.endTime=0,e.speedX=0,e.speedY=0,e.startPos=[0,0],e.currentPos=[0,0]},this.actions={swipe:function(){return!0},swipeDown:function(){return e.distanceY>60},swipeUp:function(){return e.distanceY<-60},swipeLeft:function(){return e.distanceX<-60},swipeRight:function(){return e.distanceX>60},swipeX:function(){return Math.abs(e.distanceX)>60},swipeY:function(){return Math.abs(e.distanceY)>60}},this.init=function(){this.dom.addEventListener("touchstart",this.handleTouchStart),this.dom.addEventListener("touchmove",this.handleTouchMove),this.dom.addEventListener("touchend",this.handleTouchEnd)},this.destory=function(){this.dom.removeEventListener("touchstart",this.handleTouchStart),this.dom.removeEventListener("touchmove",this.handleTouchMove),this.dom.removeEventListener("touchend",this.handleTouchEnd)},this.init()}},11:function(t,e,s){var n,i;n=s(13);var a=s(15);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=n},13:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),a=n(i);e.default={name:"Modal",components:{},props:{mode:{type:String,default:"swipeDown"}},created:function(){try{this.pullDistance*=window.r||1}catch(t){this.pullDistance*=1}this.touchit=new a.default({dom:document.body,type:this.mode,done:this.loading,doing:this.handleTouch})},methods:{reset:function(){var t=this;setTimeout(function(){t.pullState=0},300),this.move(0),this.isloading=!1},move:function(t){this.$refs.list.style.transform="translate(0px, "+t+"px)"},loading:function(t){console.log("loading"+t.distance.y),this.isloading=!0,this.pullState=4,this.distance=0,"swipeUp"===this.mode&&this.move(-this.pullDistance),"swipeDown"===this.mode&&this.move(this.pullDistance),this.$emit("on-loading",this)},handleTouch:function(t,e){var s=this;switch(t){case"touchstart":break;case"touchmove":var n=!0;switch(Math.abs(this.distance)<this.pullDistance+50&&(this.distance=e.distance.y,this.move(this.distance)),this.mode){case"swipeUp":console.log("------"),console.log(document.body.scrollTop),console.log(document.body.clientHeight),console.log(document.body.scrollHeight),e.distance.y<0?(n=!0,this.pullState=2):(n=!1,this.pullState=0);break;case"swipeDown":e.distance.y>0?(n=!0,this.pullState=1):(n=!1,this.pullState=0)}Math.abs(e.distance.y)>this.pullDistance&&n&&(this.pullState=3);break;case"touchend":this.distance=0,setTimeout(function(){s.pullState=0},300),console.log("pulldown touchend"+e.distance.y),this.move(0)}}},data:function(){return{touchit:null,isloading:!1,notice:["","下拉刷新列表","上拉刷新列表","松开刷新","加载中"],pullState:0,distance:0,pullDistance:60}},beforeDestroy:function(){this.touchit.destory()}}},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{ref:"list",staticClass:"list-hack"},[s("li",{directives:[{name:"show",rawName:"v-show",value:t.pullState>0&&"swipeDown"===t.mode,expression:"pullState>0&&mode==='swipeDown'"}],staticClass:"down-fresh"},[s("p",[s("i",{staticClass:"icon iconfont icon-loading",class:[t.isloading?"loading":""]}),t._v(" "),s("span",[t._v(t._s(t.notice[t.pullState]))])])]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.pullState>0&&"swipeUp"===t.mode,expression:"pullState>0&&mode==='swipeUp'"}],staticClass:"up-fresh"},[s("p",[s("i",{staticClass:"icon iconfont icon-loading",class:[t.isloading?"loading":""]}),t._v(" "),s("span",[t._v(t._s(t.notice[t.pullState]))])])]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},20:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page",data:function(){return{}}}},26:function(t,e,s){var n,i;n=s(20);var a=s(28);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=n},28:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[t._t("default")],2)},staticRenderFns:[]}},32:function(t,e,s){var n,i;n=s(37);var a=s(52);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=n},37:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(11),a=n(i),o=s(26),c=n(o);e.default={name:"listdemo",components:{List:a.default,Page:c.default},data:function(){return{datas:[{id:1,content:"标题1"}]}},methods:{loading:function(t){var e=this;setTimeout(function(){e.datas.push({id:2,content:"标题"+(e.datas.length+1)}),t.reset()},1e3)}}}},52:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("list",{attrs:{mode:"swipeDown"},on:{"on-loading":t.loading}},t._l(t.datas,function(e){return s("li",{staticClass:"list-item list-item-arrow m1111"},[s("div",{staticClass:"card p2222"},[s("div",{staticClass:"card-content"},[s("p",[t._v("\n          "+t._s(e.content)+"\n        ")])])])])}))},staticRenderFns:[]}}});
//# sourceMappingURL=14.d78acae31b8c124f1232.js.map