webpackJsonp([31,35],{42:function(t,e,i){var n=i(1)(i(44),i(58),null,null);t.exports=n.exports},44:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"boNumber",props:{value:{type:Number,default:0},max:{type:Number,default:9999},min:{type:Number,default:0}},methods:{getValue:function(){return this.valueSelf},getOldValue:function(){return this.valueSelf},plus:function(){this.valueSelf<this.max?(this.valueSelf=this.valueSelf-0+1,this.$emit("on-change",this.valueSelf),this.$emit("input",this.valueSelf)):this.$emit("on-max",this.valueSelf)},sub:function(){this.valueSelf>=1&&this.valueSelf>this.min?(this.valueSelf-=1,this.$emit("on-change",this.valueSelf),this.$emit("input",this.valueSelf)):this.$emit("on-min",this.valueSelf)},setBtn:function(t){t.right&&(this.rightBtnState=t.right),t.left&&(this.leftBtnState=t.left)},rollback:function(){this.valueSelf=this.valueOld},fresh:function(t){console.log("fresh");var e=t||this.valueSelf;this.valueSelf<this.min&&(this.valueSelf=this.min),this.valueSelf>this.max&&(this.valueSelf=this.max),0===this.valueSelf&&this.setBtn({left:"hidden"}),e>=this.max?(this.setBtn({right:"disable"}),this.setBtn({left:"active"})):e<=this.min?(this.setBtn({right:"active"}),this.setBtn({left:"hidden"})):(this.setBtn({right:"active"}),this.setBtn({left:"active"}))}},created:function(){this.fresh()},watch:{max:function(){var t=this;setTimeout(function(){t.fresh()},1)},min:function(){this.fresh()},valueSelf:function(t,e){this.valueOld=e,this.fresh(t)},value:function(t){this.valueSelf=t}},data:function(){return{valueSelf:this.value,valueOld:this.value,leftBtnState:"active",rightBtnState:"active"}}}},58:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-box number"},[i("div",{staticClass:"flex-item"},[i("button",{class:["btn-icon","number-btn-"+this.leftBtnState],attrs:{type:"button"},on:{click:t.sub}},[i("i",{staticClass:"icon iconfont icon-jian-xianxingyuankuang"})])]),t._v(" "),i("div",{staticClass:"flex-item-1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.valueSelf,expression:"valueSelf"}],class:["number-input","flex-item-1",0==t.valueSelf?"number-input-hidden":""],attrs:{type:"text",readonly:""},domProps:{value:t.valueSelf},on:{input:function(e){e.target.composing||(t.valueSelf=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex-item"},[i("button",{class:["btn-icon","number-btn-"+this.rightBtnState],attrs:{type:"button",name:"button"},on:{click:t.plus}},[i("i",{staticClass:"icon iconfont icon-jia-yuankuang"})])])])},staticRenderFns:[]}},62:function(t,e,i){var n=i(1)(i(107),i(264),null,null);t.exports=n.exports},107:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(42),a=n(s),l=i(13),u=n(l);e.default={name:"",components:{BoNumber:a.default,menuVertical:u.default},methods:{change:function(t){this.val=t},max:function(){this.$toast.open("已到最大值")},min:function(){this.$toast.open("到最小值")},rollback:function(){var t=this;this.$toast.open("1S后回滚"),setTimeout(function(){t.$refs.number.rollback()},1e3)}},data:function(){return{val:1,val2:2,val3:1}}}},264:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list list-box p0002"},[i("li",{staticClass:"list-item"},[i("menu-vertical",[i("span",{attrs:{slot:"body"},slot:"body"},[t._v("值 "+t._s(t.val))]),t._v(" "),i("span",{staticStyle:{"padding-right":"20px"},attrs:{slot:"dock"},slot:"dock"},[i("bo-number",{attrs:{max:"5",value:"0"},on:{"on-change":t.change}})],1)])],1),t._v(" "),i("li",{staticClass:"list-item"},[i("menu-vertical",[i("span",{attrs:{slot:"body"},slot:"body"},[t._v("大小上下限 "+t._s(t.val2))]),t._v(" "),i("span",{staticStyle:{"padding-right":"20px"},attrs:{slot:"dock"},slot:"dock"},[i("bo-number",{attrs:{max:"5",min:"2"},on:{"on-max":t.max,"on-min":t.min},model:{value:t.val2,callback:function(e){t.val2=e},expression:"val2"}})],1)])],1),t._v(" "),i("li",{staticClass:"list-item"},[i("menu-vertical",[i("span",{attrs:{slot:"body"},slot:"body"},[t._v("数据回滚")]),t._v(" "),i("span",{staticStyle:{"padding-right":"20px"},attrs:{slot:"dock"},slot:"dock"},[i("bo-number",{ref:"number",attrs:{value:t.val3},on:{"on-change":t.rollback}})],1)])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=31.2868501399d7eef139e2.js.map