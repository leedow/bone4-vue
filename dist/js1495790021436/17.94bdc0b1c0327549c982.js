webpackJsonp([17,29],{2:function(t,e){"use strict";t.exports=function(t){this.distanceX=0,this.distanceY=0,this.startPos=[0,0],this.currentPos=[0,0],this.startTime=0,this.endTime=0,this.speedX=0,this.speedY=0,this.state="FREE",this.alias=t.alias||"",this.dom=t.dom,this.eventType=t.type||"swipe",this.callback=t.doing||function(){},this.donecallback=t.done||function(){},this.mode=t.mode||"strict";var e=this;this.handleTouchStart=function(t){e.startTime=(new Date).getTime(),e.state="START";var s=t.targetTouches[0];e.startPos=[s.pageX,s.pageY],console.log("startpost"+e.startPos),e.callback("touchstart",{distance:{x:e.distanceX,y:e.distanceY},position:e.startPos,state:e.state,alias:e.alias})},this.handleTouchMove=function(t){e.state="MOVING";var s=t.targetTouches[0];e.currentPos=[s.pageX,s.pageY],e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],e.callback("touchmove",{distance:{x:e.distanceX,y:e.distanceY},position:e.currentPos,state:e.state,alias:e.alias})},this.handleTouchEnd=function(){e.state="END",e.endTime=(new Date).getTime();var t=Math.floor((e.endTime-e.startTime)/1e3);0!==e.currentPos[0]&&0!==e.currentPos[1]||(e.currentPos=e.startPos),e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],0===t&&(t=1),e.speedX=Math.abs(e.distanceX/t),e.speedY=Math.abs(e.distanceY/t),e.actions[e.eventType]()?("unstrict"===e.mode&&e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias}),e.donecallback({distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias})):e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias}),e.state="FREE",e.distanceX=0,e.distanceY=0,e.startTime=0,e.endTime=0,e.speedX=0,e.speedY=0,e.startPos=[0,0],e.currentPos=[0,0]},this.actions={swipe:function(){return!0},swipeDown:function(){return e.distanceY>60},swipeUp:function(){return e.distanceY<-60},swipeLeft:function(){return e.distanceX<-60},swipeRight:function(){return e.distanceX>60},swipeX:function(){return Math.abs(e.distanceX)>60},swipeY:function(){return Math.abs(e.distanceY)>60}},this.init=function(){this.dom.addEventListener("touchstart",this.handleTouchStart),this.dom.addEventListener("touchmove",this.handleTouchMove),this.dom.addEventListener("touchend",this.handleTouchEnd)},this.destory=function(){this.dom.removeEventListener("touchstart",this.handleTouchStart),this.dom.removeEventListener("touchmove",this.handleTouchMove),this.dom.removeEventListener("touchend",this.handleTouchEnd)},this.init()}},41:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=i(n);e.default={name:"slide",props:{surface:{type:Array,default:function(){return[]}},showStatus:{type:Boolean,default:!0},width:{type:String,default:"100%"}},mounted:function(){this.itemWidth=this.$refs.slide.clientWidth,this.itemHeight=this.$refs.slide.clientHeight,this.touchit=new a.default({dom:this.$refs.slide,type:"swipeX",done:this.goTo,doing:this.sliding})},computed:{fullWidth:function(){return this.itemWidth*this.surface.length}},methods:{handleClick:function(t){this.$emit("on-click",t)},sliding:function(t,e){switch(t){case"touchmove":this.move(e.distance.x,!0);break;case"touchend":this.fixPosition()}},goTo:function(t){t.distance.x>0&&this.currentIndex>0&&(this.currentIndex-=1),t.distance.x<0&&this.currentIndex+1<this.surface.length&&(this.currentIndex+=1),this.move(-this.currentIndex*this.itemWidth,!1),console.log(this.currentIndex),this.preDistance=this.distance},move:function(t,e){e?this.distance=this.preDistance+t:this.distance=t,this.$refs.slidecontent.style.transform="translateX("+this.distance+"px)"},fixPosition:function(){this.move(-this.currentIndex*this.itemWidth,!1),this.preDistance=this.distance},imgload:function(){this.height=this.$refs.slidecontent.clientHeight,this.itemHeight=this.height}},data:function(){return{height:0,itemWidth:0,itemHeight:0,currentIndex:0,preDistance:0,distance:0,touchit:null}},beforeDestroy:function(){this.touchit.destory()}}},47:function(t,e,s){var i,n;i=s(41);var a=s(51);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},51:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"slide",staticClass:"slide",style:{height:t.height+"px",width:t.width}},[s("div",{ref:"slidecontent",staticClass:"slide-content animate-hack",style:{width:t.fullWidth+"px"}},t._l(t.surface,function(e){return s("div",{staticClass:"slide-item",style:{width:t.itemWidth+"px"},on:{click:function(s){t.handleClick(e)}}},[s("img",{attrs:{src:e.imgUrl,alt:""},on:{load:t.imgload}})])})),t._v(" "),s("div",{staticClass:"slide-btns"},t._l(t.surface,function(e,i,n){return s("button",{staticClass:"slide-btn",class:[i===t.currentIndex?"slide-btn-current":""]})}))])},staticRenderFns:[]}},73:function(t,e,s){var i,n;i=s(118);var a=s(201);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},118:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(47),a=i(n);e.default={name:"slidedemo",components:{Slide:a.default},data:function(){return{}}}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("slide",{attrs:{surface:[{imgUrl:"http://mlo.jishi88.com/dist/v1.3.7/2.png?870bbc643c89ab370522a8eea9cf4985"},{imgUrl:"http://mlo.jishi88.com/dist/v1.3.7/1.png?99a3d4cc476cce3ed4826cd912b12876"},{imgUrl:"http://mlo.jishi88.com/dist/v1.3.7/3.png?b13d9da72fe03c029ff79e1720a318b7"}]}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=17.94bdc0b1c0327549c982.js.map