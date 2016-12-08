<template>
<ul class="list" ref="list">
 <li class="down-fresh" v-show="pullState>0&&mode=='swipeDown'">
    <p>
      <i class="icon iconfont icon-loading" :class="[
       isloading?'loading':''
      ]"></i>
      <span>{{notice[pullState]}}</span>
    </p>
 </li>
 <li class="up-fresh" v-show="pullState>0&&mode=='swipeUp'">
   <p>
     <i class="icon iconfont icon-loading" :class="[
      isloading?'loading':''
     ]"></i>
     <span>{{notice[pullState]}}</span>
   </p>
 </li>
  <slot></slot>
</ul>
</template>

<script>
import touchit from '../helper/touchit'

export default {
  name: 'Modal',
  components: {

  },
  props: {
    mode: {
      type: String,
      default: 'swipeDown' //swipeUp
    }
  },
  created (){
    let list = this.$refs.list;

    try{
      this.pullDistance *= window.r||1
    } catch(e){
      this.pullDistance *= 1
    }

    this.touchit = new touchit({
      dom: document.body,
      type: this.mode,
      done: this._loading,
      doing: this._handleTouch
    });

  },
  methods: {
    //完成读取后调用重置
    reset (){
      this.pullState = 0
      this._move(0)
      this.isloading = false
    },
    _move (distance){
      this.$refs.list.style.transform  = 'translate(0px, '+ distance +'px)'
    },
    _loading (e){
      console.log('loading' + e.distance.y)
      this.$emit('on-loading', this)
      this.isloading = true
      this.pullState = 4 //loading
      this.distance = 0;
      if(this.mode == 'swipeUp')
      this._move(-this.pullDistance)
      if(this.mode == 'swipeDown')
      this._move(this.pullDistance)
    },
    _handleTouch (eventType, data){
      switch (eventType){
        case 'touchstart': {
          break
        }
        case 'touchmove': {
          let isRight = true

          if(Math.abs(this.distance) < this.pullDistance+50){
            this.distance = data.distance.y
            this._move(this.distance)
          }
          console.log(data.position)
          switch (this.mode){

            case 'swipeUp': {
              let isBottom = (document.body.scrollTop + document.body.clientHeight) == document.body.scrollHeight
              console.log('------')
              console.log(document.body.scrollTop)
              console.log(document.body.clientHeight)
              console.log(document.body.scrollHeight)
              if(data.distance.y < 0){
                isRight = true
                this.pullState = 2
              } else {
                isRight = false
                this.pullState = 0
              }
              break
            }
            case 'swipeDown': {
              console.log('moving')
              if(data.distance.y > 0){
                isRight = true
                this.pullState = 1
              } else {
                isRight = false
                this.pullState = 0
              }
            }
          }

          if(Math.abs(data.distance.y) > this.pullDistance && isRight){
            this.pullState = 3 //松开刷新
          }

          break
        }
        case 'touchend': {
          this.distance = 0;
          this.pullState = 0;
          console.log('pulldown touchend' + data.distance.y)
          this._move(0)
        }
      }
    }
  },
  data () {
    return {
      touchit: null,
      isloading: false,
      notice: ['', '下拉刷新列表', '上拉刷新列表', '松开刷新', '加载中'],
      pullState: 0,
      distance:0,
      pullDistance: 60
    }
  },
  beforeDestroy (){
    this.touchit.destory()
  }
}
</script>
