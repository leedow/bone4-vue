<template>
<div class="slide" ref="slide" :style="{height:itemHeight + 'px',width:width}">
  <div class="slide-content animate-hack" ref="slidecontent" :style="{width:fullWidth+'px'}">
    <slide-item
      v-for="item in surface"
      :imgUrl="item.imgUrl"
      :width="`${itemWidth}px`"
      :height="`${itemHeight}px`"
    />
    <slot/>
  </div>
  <div class="slide-btns">
    <button class="slide-btn"
      v-for="(item ,key, index ) in surface"
      :class="[key===currentIndex?'slide-btn-current':'']">
    </button>
  </div>
</div>
</template>
<script>
import Touchit from '../helper/touchit'
import slideItem from './slide-item'

export default {
  name: 'slide',
  components: {
    slideItem
  },
  item: slideItem,
  props: {
    /**
     *  [{alias, path, imgUrl}]
     */
    surface: {
      type: Array,
      default() {
        return []
      }
    },
    ratio: {
      type: Number,
      default: 9 / 16
    },
    showStatus: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '100%'
    },
    auto: {
      type: Boolean,
      default: true
    },
    timeStep: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    this.itemWidth = this.$refs.slide.clientWidth

    this.touchit = new Touchit({
      dom: this.$refs.slide,
      type: 'swipeX',
      done: this.goTo,
      doing: this.sliding
    })

    if (this.auto) {
      this.autorun()
    }
  },
  computed: {
    fullWidth() {
      // this.itemWidth = this.$refs.slide.clientWidth
      return this.itemWidth * this.surface.length
    },
    itemHeight() {
      return this.itemWidth * this.ratio
    }
  },
  methods: {
    autorun() {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        if (this.currentIndex + 1 < this.surface.length) {
          this.currentIndex += 1
        } else {
          this.currentIndex = 0
        }
        this.move(-this.currentIndex * this.itemWidth, false)
        this.preDistance = this.distance
      }, this.timeStep)
    },
    handleClick(item) {
      this.$emit('on-click', item)
    },
    sliding(eventType, data) {
      switch (eventType) {
        case 'touchmove': {
          this.move(data.distance.x, true)
          break
        }
        case 'touchend': {
          this.fixPosition()
          break
        }
        default: {
          break
        }
      }
    },
    goTo(data) {
      this.autorun()
      /* eslint-disable */
      if (data.distance.x > 0 && this.currentIndex > 0) {
        this.currentIndex -= 1
      }

      if (data.distance.x < 0 && (this.currentIndex + 1 < this.surface.length)) {
        this.currentIndex += 1
      }

      this.move(-this.currentIndex * this.itemWidth, false)

      this.preDistance = this.distance
      /* eslint-enable */
    },
    /**
     * move slide item
     * @param distance int
     */
    move(distance, relative) {
      // if (relative === undefined) relative = true
      if (relative) {
        this.distance = this.preDistance + distance
      } else {
        this.distance = distance
      }
      this.$refs.slidecontent.style.transform = `translateX(${this.distance}px)`
    },
    fixPosition() {
      this.move(-this.currentIndex * this.itemWidth, false) // eslint-disable-line
      this.preDistance = this.distance
    },
    imgload() {
      this.itemHeight = this.height
    }
  },
  data() {
    return {
      items: [],
      interval: null,
      itemWidth: 0, // width of each img
      currentIndex: 0,
      preDistance: 0,
      distance: 0,
      touchit: null
    }
  },
  beforeDestroy() {
    this.touchit.destory()
    clearInterval(this.interval)
  }
}
</script>
