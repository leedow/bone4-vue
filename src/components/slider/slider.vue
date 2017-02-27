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
  mounted() {
    this.touchit = new Touchit({
      dom: this.$refs.scroll,
      type: 'swipe',
      done: this.handleTouchEnd,
      doing: this.handleTouch
    })
  },
  methods: {
    reachTop() {
      return this.distance >= 0
    },
    reachBottom() {
      return this.distance <= (this.$refs.scroll.clientHeight - this.$refs.content.clientHeight)
    },
    putRight() {
      /* eslint-disable */
      if (this.reachTop()) {
        this.distanceBackup = 0
        this.moveY(-this.distanceBackup)
        clearInterval(this.timer)
        return true
      }

      if (this.reachBottom()) {
        this.moveY(-this.$refs.content.clientHeight + this.$refs.scroll.clientHeight - this.distanceBackup)
        clearInterval(this.timer)
        return true
      }
      return false
      /* eslint-enable */
    },
    moveY(distance) {
      this.distance = distance + this.distanceBackup
      this.$refs.content.style.transform = `translate3d(0px, ${this.distance}px, 0px)`
    },
    handleTouch(eventType, data) {
      switch (eventType) {
        case 'touchstart': {
          clearInterval(this.timer)
          this.distanceBackup = this.distance
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
    handleTouchEnd(data) {
      if (this.putRight()) return

      /* eslint-disable */
      const jump = parseInt(1000 / 100)

      // data.speed.y += 200
      let step = data.speed.y * jump / 1000
      let length = this.distance - this.distanceBackup
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
          this.distanceBackup = this.distance
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
      distanceBackup: 0,
      distance: 0,
      timer: null
    }
  },
  beforeDestroy() {
    this.touchit.destory()
  }
}
</script>
