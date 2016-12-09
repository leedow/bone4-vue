<template>
<div class="slide" ref="slide" :style="{height:height_ + 'px',width:width}">
  <div class="slide-content" ref="slidecontent" :style="{width:fullWidth+'px'}">
    <div class="slide-item" v-for="item in surface" :style="{width:itemWidth+'px'}">
      <img :src="item.imgUrl" @load="imgload" alt="" />
    </div>
  </div>
  <div class="slide-btns">
    <button class="slide-btn" v-for="(item ,key, index ) in surface"  :class="[key==currentIndex?'slide-btn-current':'']"></button>
  </div>
</div>
</template>
<script>
import touchit from '../helper/touchit'

export default {
  name: 'slide',
  props: {
    /**
     *  [{alias, path, imgUrl}]
     */
    surface: {
      type: Array,
      default (){
        return []
      }
    },
    height: {
      type: String,
      default: '100px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  mounted (){
    this.itemWidth = this.$refs.slide.clientWidth
    this.itemHeight = this.$refs.slide.clientHeight
    this.fullWidth = this.itemWidth*this.surface.length

    this.touchit = new touchit({
      dom: this.$refs.slide,
      type: 'swipeX',
      done: this._goTo,
      doing: this._sliding
    });
  },
  methods: {
    _sliding (eventType, data){

      switch (eventType){
        case 'touchmove': {
          this.move(data.distance.x)
          break
        }
        case 'touchend': {
          this.fixPosition()

        }
      }
    },
    _goTo(data){

      if(data.distance.x > 0 && this.currentIndex > 0){
        this.currentIndex--
      }

      if(data.distance.x < 0 && (this.currentIndex+1 < this.surface.length)){
        this.currentIndex++
      }

      this.move(-this.currentIndex*this.itemWidth, false)

      this.preDistance = this.distance
    },
    /**
     * move slide item
     * @param distance int
     */
    move (distance, relative){
      if(relative == undefined) relative = true
      let rlt = relative
      if(rlt){
        this.distance = this.preDistance + distance
      } else {
        this.distance = distance
      }
      this.$refs.slidecontent.style.transform = 'translateX('+ this.distance +'px)'
    },
    fixPosition (){
      this.move(-this.currentIndex*this.itemWidth, false)
      this.preDistance = this.distance
    },
    imgload (){
      //alert(this.$refs.slidecontent.clientHeight)
      this.height_ = this.$refs.slidecontent.clientHeight
      this.itemHeight = this.height_
    }
  },
  data () {
    return {
      height_: 0,
      distance: 0,
      itemWidth: 0,
      itemHeight: 0,
      fullWidth: 0,
      currentIndex: 0,
      preDistance: 0,
      distance: 0,
      touchit: null
    }
  },
  beforeDestroy (){
    this.touchit.destory()
  }
}
</script>
