webpackJsonp([15,35],{3:function(t,e){"use strict";t.exports=function(t){this.distanceX=0,this.distanceY=0,this.startPos=[0,0],this.currentPos=[0,0],this.startTime=0,this.endTime=0,this.speedX=0,this.speedY=0,this.state="FREE",this.alias=t.alias||"",this.dom=t.dom,this.eventType=t.type||"swipe",this.callback=t.doing||function(){},this.donecallback=t.done||function(){},this.mode=t.mode||"strict";var e=this;this.handleTouchStart=function(t){e.startTime=(new Date).getTime(),e.state="START";var i=t.targetTouches[0];e.startPos=[i.pageX,i.pageY],e.callback("touchstart",{distance:{x:e.distanceX,y:e.distanceY},position:e.startPos,state:e.state,alias:e.alias})},this.handleTouchMove=function(t){e.state="MOVING";var i=t.targetTouches[0];e.currentPos=[i.pageX,i.pageY],e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],e.callback("touchmove",{distance:{x:e.distanceX,y:e.distanceY},position:e.currentPos,state:e.state,alias:e.alias})},this.handleTouchEnd=function(){e.state="END",e.endTime=(new Date).getTime();var t=Math.floor((e.endTime-e.startTime)/1e3);0!==e.currentPos[0]&&0!==e.currentPos[1]||(e.currentPos=e.startPos),e.distanceX=e.currentPos[0]-e.startPos[0],e.distanceY=e.currentPos[1]-e.startPos[1],0===t&&(t=1),e.speedX=Math.abs(e.distanceX/t),e.speedY=Math.abs(e.distanceY/t),e.actions[e.eventType]()?("unstrict"===e.mode&&e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias}),e.donecallback({distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias})):e.callback("touchend",{distance:{x:e.distanceX,y:e.distanceY},speed:{x:e.speedX,y:e.speedY},position:e.currentPos,state:e.state,alias:e.alias}),e.state="FREE",e.distanceX=0,e.distanceY=0,e.startTime=0,e.endTime=0,e.speedX=0,e.speedY=0,e.startPos=[0,0],e.currentPos=[0,0]},this.actions={swipe:function(){return!0},swipeDown:function(){return e.distanceY>60},swipeUp:function(){return e.distanceY<-60},swipeLeft:function(){return e.distanceX<-60},swipeRight:function(){return e.distanceX>60},swipeX:function(){return Math.abs(e.distanceX)>60},swipeY:function(){return Math.abs(e.distanceY)>60}},this.init=function(){this.dom.addEventListener("touchstart",this.handleTouchStart),this.dom.addEventListener("touchmove",this.handleTouchMove),this.dom.addEventListener("touchend",this.handleTouchEnd)},this.destory=function(){this.dom.removeEventListener("touchstart",this.handleTouchStart),this.dom.removeEventListener("touchmove",this.handleTouchMove),this.dom.removeEventListener("touchend",this.handleTouchEnd)},this.init()}},67:function(t,e,i){var s=i(1)(i(115),i(285),null,null);t.exports=s.exports},113:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"carousel-item",props:{style:Object,imgUrl:String,width:String},data:function(){return{}},computed:{},ready:function(){},attached:function(){},methods:{handleClick:function(){}},components:{}}},114:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),a=s(n),r=i(197),c=s(r);e.default={name:"carousel",components:{carouselItem:c.default},item:c.default,props:{surface:{type:Array,default:function(){return[]}},ratio:{type:Number,default:9/16},showStatus:{type:Boolean,default:!0},width:{type:String,default:"100%"},auto:{type:Boolean,default:!0},timeStep:{type:Number,default:4e3}},mounted:function(){this.itemWidth=this.$refs.slide.clientWidth,this.initItems(),this.touchit=new a.default({dom:this.$refs.slide,type:"swipeX",done:this.goTo,doing:this.sliding}),this.auto&&this.autorun()},computed:{fullWidth:function(){return this.itemWidth*this.surface.length},itemHeight:function(){return this.itemWidth*this.ratio}},methods:{initItems:function(){this.items=this.$children.filter(function(t){return"carousel-item"===t.name}),console.log(this.$children)},autorun:function(){var t=this;clearInterval(this.interval),this.interval=setInterval(function(){t.currentIndex+1<t.surface.length?t.currentIndex+=1:t.currentIndex=0,t.move(-t.currentIndex*t.itemWidth,!1),t.preDistance=t.distance},this.timeStep)},handleClick:function(t){this.$emit("on-click",t)},sliding:function(t,e){switch(t){case"touchmove":this.move(e.distance.x,!0);break;case"touchend":this.fixPosition()}},goTo:function(t){this.autorun(),t.distance.x>0&&this.currentIndex>0&&(this.currentIndex-=1),t.distance.x<0&&this.currentIndex+1<this.surface.length&&(this.currentIndex+=1),this.move(-this.currentIndex*this.itemWidth,!1),this.preDistance=this.distance},move:function(t,e){e?this.distance=this.preDistance+t:this.distance=t,this.$refs.slidecontent.style.transform="translateX("+this.distance+"px)"},fixPosition:function(){this.move(-this.currentIndex*this.itemWidth,!1),this.preDistance=this.distance},imgload:function(){this.itemHeight=this.height}},watch:{surface:function(t){this.items=t}},data:function(){return{items:this.surface,interval:null,itemWidth:0,currentIndex:0,preDistance:0,distance:0,touchit:null}},updated:function(){},beforeDestroy:function(){this.touchit.destory(),clearInterval(this.interval)}}},115:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(198),a=s(n);e.default={name:"slidedemo",components:{Carousel:a.default,CarouselItem:a.default.item},mounted:function(){var t=this;setTimeout(function(){t.items=[{imgUrl:"http://mlo.jishi88.com/dist/v1.3.7/2.png?870bbc643c89ab370522a8eea9cf4985"},{imgUrl:"http://mlo.jishi88.com/dist/v1.3.7/1.png?99a3d4cc476cce3ed4826cd912b12876"},{imgUrl:"http://mlo.jishi88.com/dist/v1.3.7/3.png?b13d9da72fe03c029ff79e1720a318b7"}]},1e3)},data:function(){return{items:[]}}}},197:function(t,e,i){var s=i(1)(i(113),i(224),null,null);t.exports=s.exports},198:function(t,e,i){var s=i(1)(i(114),i(241),null,null);t.exports=s.exports},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-item",style:t.style,on:{click:t.handleClick}},[i("img",{attrs:{src:t.imgUrl}})])},staticRenderFns:[]}},241:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slide",staticClass:"slide",style:{height:t.itemHeight+"px",width:t.width}},[i("div",{ref:"slidecontent",staticClass:"slide-content animate-hack",style:{width:t.fullWidth+"px"}},[t._l(t.items,function(e){return i("carousel-item",{style:{width:t.itemWidth+"px",height:t.itemHeight+"px"},attrs:{imgUrl:e.imgUrl}})}),t._v(" "),t._t("default")],2),t._v(" "),i("div",{staticClass:"slide-btns"},t._l(t.items,function(e,s,n){return i("button",{staticClass:"slide-btn",class:[s===t.currentIndex?"slide-btn-current":""]})}))])},staticRenderFns:[]}},285:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("carousel",{attrs:{ratio:.375,surface:t.items}}),t._v(" "),i("carousel",{attrs:{ratio:.375}},t._l(t.items,function(t){return i("carousel-item",{attrs:{imgUrl:t.imgUrl}})}))],1)},staticRenderFns:[]}}});
//# sourceMappingURL=15.522e062fbdb37e58f5a2.js.map