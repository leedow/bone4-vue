<template>
  <div class="slider" ref="scroll">
    <div class="slider-content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import touchit from '../helper/touchit'

export default {
  name: 'slider',
  mounted (){
    this.touchit = new touchit({
      dom: this.$refs.scroll,
      type: 'swipe',
      done: this._handleTouchEnd,
      doing: this._handleTouch
    });
  },
  methods: {
    _reachTop (){
      return this.distance>=0
    },
    _reachBottom (){
      return this.distance<=(this.$refs.scroll.clientHeight-this.$refs.content.clientHeight)
    },
    _putRight (){
      if(this._reachTop()){
        this._moveY(-this.distanceBackup)
        clearInterval(this.timer)
        return true
      }

      if(this._reachBottom()){
        this._moveY(-this.$refs.content.clientHeight+this.$refs.scroll.clientHeight-this.distanceBackup)
        clearInterval(this.timer)
        return true
      }
      return false
    },
    _moveY (distance){
      this.distance = distance + this.distanceBackup
      this.$refs.content.style.transform = 'translate3d(0px, '+ this.distance +'px, 0px)'
    },
    _handleTouch (eventType, data){

      switch (eventType){
        case 'touchstart': {
          clearInterval(this.timer)
          this.distanceBackup = this.distance

          break
        }
        case 'touchmove': {
          this._moveY(data.distance.y)
        }
      }

    },
    _handleTouchEnd (data){


      if(this._putRight()) return

      let jump = parseInt(1000/100)


      data.speed.y += 200
      let step = data.speed.y*jump/1000
      let length = this.distance-this.distanceBackup
      let everystep = step/100


      this.timer = setInterval(()=>{

        if(data.distance.y >= 0){
          length += step
          this._moveY(length)

        } else {
          length -= step
          this._moveY(length)

        }



        step -= everystep

        if(step <= everystep){
          clearInterval(this.timer)
          this.distanceBackup = this.distance
        }

        if(this._putRight()){
          clearInterval(this.timer)
        }


      }, jump)



    }
  },
  data () {
    return {
      touchit: null,
      distanceBackup: 0,
      distance: 0,
      timer: null
    }
  },
  beforeDestroy (){
    this.touchit.destory()
  }
}
</script>
