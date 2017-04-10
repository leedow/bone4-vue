<template>
  <div class="slider" ref="scroll">
    <div class="slider-content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Touchit from '../helper/touchit'

export default {
  name: 'slider',
  props: {
    direction: {
      type: String,
      default: 'y'
    },
    mode: {
      type: String,
      default: 'linear' // linear||drawer
    }
  },
  mounted() {
    this.touchit = new Touchit({
      dom: this.$refs.scroll,
      type: 'swipe',
      done: this.handleTouchEnd,
      doing: this.handleTouch
    })
  },
  methods: {
    /**
     * y轴移动时是否到达顶部
     */
    reachTop() {
      return this.distanceY >= 0
    },
    /**
     * y轴移动时是否到达底部
     */
    reachBottom() {
      return this.distanceY <= (this.$refs.scroll.clientHeight - this.$refs.content.clientHeight)
    },
    /**
     * x轴移动时是否到达左端
     */
    reachLeft() {
      return this.distance >= 0
    },
    /**
     * x轴移动时是否到达右端
     */
    reachRight() {
      return this.distanceY <= (this.$refs.scroll.clientHeight - this.$refs.content.clientHeight)
    },
    putRight() {
      /* eslint-disable */
      if (this.reachTop()) {
        this.distanceYBackup = 0
        this.moveY(-this.distanceYBackup)
        clearInterval(this.timer)
        return true
      }

      if (this.reachBottom()) {
        this.moveY(-this.$refs.content.clientHeight + this.$refs.scroll.clientHeight - this.distanceYBackup)
        clearInterval(this.timer)
        return true
      }

      return false
      /* eslint-enable */
    },
    moveY(distance) {
      this.distanceY = distance + this.distanceYBackup
      this.$refs.content.style.transform = `translate3d(0px, ${this.distanceY}px, 0px)`
    },
    /**
     * 手势移动中
     */
    handleTouch(eventType, data) {
      switch (eventType) {
        case 'touchstart': {
          clearInterval(this.timer)
          this.distanceYBackup = this.distanceY
          break
        }
        case 'touchmove': {
          this.moveY(data.distance.y)
          break
        }
        default: {
          break
        }
      }
    },
    /**
     * 处理滑动事件结束
     */
    handleTouchEnd(data) {
      if (this.putRight()) return

      /* eslint-disable */
      const jump = parseInt(1000 / 100)

      // data.speed.y += 200
      let step = data.speed.y * jump / 1000
      let length = this.distanceY - this.distanceYBackup
      const everystep = step / 100


      this.timer = setInterval(() => {
        if (data.distance.y >= 0) {
          length += step
          this.moveY(length)
        } else {
          length -= step
          this.moveY(length)
        }


        step -= everystep

        if (step <= everystep) {
          clearInterval(this.timer)
          this.distanceYBackup = this.distanceY
        }

        if (this.putRight()) {
          clearInterval(this.timer)
        }
      }, jump)

      /* eslint-enable */
    }
  },
  data() {
    return {
      touchit: null,
      distanceXBackup: 0, // 记录每次滑动前一次的滑动距离
      distanceYBackup: 0, // 记录每次滑动前一次的滑动距离
      distanceX: 0, // x轴上的滑动距离
      distanceY: 0, // y轴上的滑动距离
      timer: null
    }
  },
  beforeDestroy() {
    this.touchit.destory()
  }
}
</script>
