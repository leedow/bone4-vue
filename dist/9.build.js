webpackJsonp([9],{113:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(5),o=n(i),a=s(58),c=n(a);e.default={name:"listdemo",components:{List:o.default,Page:c.default},data:function(){return{datas:[{id:1,content:"标题1"}]}},methods:{loading:function(t){var e=this;setTimeout(function(){e.datas.push({id:2,content:"标题"+(e.datas.length+1)}),t.reset()},1e3)}}}},128:function(t,e){t.exports={render:function(){var t=this;return t._h("page",[t._h("list",{attrs:{mode:"swipeUp"},on:{"on-loading":t.loading}},[t._l(t.datas,function(e){return t._h("li",{staticClass:"list-item list-item-arrow m1111"},[t._h("div",{staticClass:"card p2222"},[t._h("div",{staticClass:"card-content"},[t._h("p",["\n              "+t._s(e.content)+"\n            "])])])])})])])},staticRenderFns:[]}},23:function(t,e){"use strict";t.exports=function(t){this.distanceX=0,this.distanceY=0,this.startPos=[0,0],this.currentPos=[0,0],this.startTime=0,this.endTime=0,this.speedX=0,this.speedY=0,this.state="FREE",this.dom=t.dom,this.eventType=t.type||"swipeDown",this.callback=t.doing||function(){},this.donecallback=t.done;var e=this;this.handleTouchStart=function(t){e.startTime=(new Date).getTime(),e.state="START";var s=t.targetTouches[0];e.startPos=[s.pageX,s.pageY],e.callback("touchstart",{distance:{x:e.distanceX,y:e.distanceY},position:e.startPos,state:e.state})},this.handleTouchMove=function(t){e.state="MOVING";var s=t.targetTouches[0];e.currentPos=[s.pageX,s.pageY],e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],e.callback("touchmove",{distance:{x:e.distanceX,y:e.distanceY},position:e.currentPos,state:e.state})},this.handleTouchEnd=function(t){e.state="END",e.endTime=(new Date).getTime();var s=Math.floor((e.endTime-e.startTime)/1e3);e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],0==s&&(s=1),e.speedX=Math.abs(e.distanceX/s),e.speedY=Math.abs(e.distanceY/s),e.actions[e.eventType]()?e.donecallback({distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state}):e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state}),e.state="FREE",e.distanceX=0,e.distanceY=0,e.startTime=0,e.endTime=0,e.speedX=0,e.speedY=0,e.startPos=[0,0],e.currentPos=[0,0]},this.actions={swipe:function(){return!0},swipeDown:function(){return e.distanceY>60},swipeUp:function(){return e.distanceY<-60}},this.init=function(){this.dom.addEventListener("touchstart",this.handleTouchStart),this.dom.addEventListener("touchmove",this.handleTouchMove),this.dom.addEventListener("touchend",this.handleTouchEnd)},this.destory=function(){this.dom.removeEventListener("touchstart",this.handleTouchStart),this.dom.removeEventListener("touchmove",this.handleTouchMove),this.dom.removeEventListener("touchend",this.handleTouchEnd)},this.init()}},25:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(23),o=n(i);e.default={name:"Modal",components:{},props:{mode:{type:String,default:"swipeDown"}},created:function(){this.$refs.list;this.touchit=new o.default({dom:document.body,type:this.mode,done:this._loading,doing:this._handleTouch})},methods:{reset:function(){this.pullState=0,this._move(0),this.isloading=!1},_move:function(t){this.$refs.list.style.transform="translate(0px, "+t+"px)"},_loading:function(t){console.log("loading"+t.distance.y),this.$emit("on-loading",this),this.isloading=!0,this.pullState=4,this.distance=0,"swipeUp"==this.mode&&this._move(-60),"swipeDown"==this.mode&&this._move(60)},_handleTouch:function(t,e){switch(t){case"touchstart":break;case"touchmove":var s=!0;switch(Math.abs(this.distance)<100&&(this.distance=e.distance.y,this._move(this.distance)),console.log(e.position),this.mode){case"swipeUp":document.body.scrollTop+document.body.clientHeight==document.body.scrollHeight;console.log("------"),console.log(document.body.scrollTop),console.log(document.body.clientHeight),console.log(document.body.scrollHeight),e.distance.y<0?(s=!0,this.pullState=2):(s=!1,this.pullState=0);break;case"swipeDown":console.log("moving"),e.distance.y>0?(s=!0,this.pullState=1):(s=!1,this.pullState=0)}Math.abs(e.distance.y)>60&&s&&(this.pullState=3);break;case"touchend":this.distance=0,this.pullState=0,console.log("pulldown touchend"+e.distance.y),this._move(0)}}},data:function(){return{touchit:null,isloading:!1,notice:["","下拉刷新列表","上拉刷新列表","松开刷新","加载中"],pullState:0,distance:0}},beforeDestroy:function(){this.touchit.destory()}}},26:function(t,e){t.exports={render:function(){var t=this;return t._h("ul",{ref:"list",staticClass:"list"},[t._h("li",{directives:[{name:"show",rawName:"v-show",value:t.pullState>0&&"swipeDown"==t.mode,expression:"pullState>0&&mode=='swipeDown'"}],staticClass:"down-fresh"},[t._h("p",[t._h("i",{staticClass:"icon iconfont icon-loading",class:[t.isloading?"loading":""]})," ",t._h("span",[t._s(t.notice[t.pullState])])])])," ",t._h("li",{directives:[{name:"show",rawName:"v-show",value:t.pullState>0&&"swipeUp"==t.mode,expression:"pullState>0&&mode=='swipeUp'"}],staticClass:"up-fresh"},[t._h("p",[t._h("i",{staticClass:"icon iconfont icon-loading",class:[t.isloading?"loading":""]})," ",t._h("span",[t._s(t.notice[t.pullState])])])])," ",t._t("default")])},staticRenderFns:[]}},39:function(t,e,s){var n,i;n=s(113);var o=s(128);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=n},5:function(t,e,s){var n,i;n=s(25);var o=s(26);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=n},57:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page",data:function(){return{}}}},58:function(t,e,s){var n,i;n=s(57);var o=s(59);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=n},59:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"page"},[t._t("default")])},staticRenderFns:[]}}});