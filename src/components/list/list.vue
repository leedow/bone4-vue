<template>
<ul class="list-hack" ref="list">
 <li class="down-fresh" v-show="pullState>0&&mode==='swipeDown'">
    <p>
      <i class="icon iconfont icon-loading" :class="[
       isloading?'loading':''
      ]"></i>
      <span>{{notice[pullState]}}</span>
    </p>
 </li>
 <li class="up-fresh" v-show="pullState>0&&mode==='swipeUp'">
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
import Touchit from '../helper/touchit'

export default {
  name: 'Modal',
  components: {

  },
  props: {
    mode: {
      type: String,
      default: 'swipeDown' // swipeUp
    }
  },
  created() {
    try {
      this.pullDistance *= window.r || 1 // eslint-disable-line
    } catch (e) {
      this.pullDistance *= 1
    }

    this.touchit = new Touchit({
      dom: document.body, // eslint-disable-line
      type: this.mode,
      done: this.loading,
      doing: this.handleTouch
    })
  },
  methods: {
    // 完成读取后调用重置
    reset() {
      setTimeout(() => {
        this.pullState = 0
      }, 300)
      // this.pullState = 0
      this.move(0)
      this.isloading = false
    },
    move(distance) {
      this.$refs.list.style.transform = `translate(0px, ${distance}px)`
    },
    loading(e) {
      console.log(`loading${e.distance.y}`) // eslint-disable-line

      this.isloading = true
      this.pullState = 4 // loading
      this.distance = 0
      if (this.mode === 'swipeUp') {
        this.move(-this.pullDistance)
      }
      if (this.mode === 'swipeDown') {
        this.move(this.pullDistance)
      }
      this.$emit('on-loading', this)
    },
    handleTouch(eventType, data) {
      switch (eventType) {
        case 'touchstart': {
          break
        }
        case 'touchmove': {
          let isRight = true

          if (Math.abs(this.distance) < this.pullDistance + 50) {
            this.distance = data.distance.y
            this.move(this.distance)
          }

          switch (this.mode) {

            case 'swipeUp': {
              // const isBottom =
              // (document.body.scrollTop + document.body.clientHeight)
              //= == document.body.scrollHeight

              /* eslint-disable */
              console.log('------')
              console.log(document.body.scrollTop)
              console.log(document.body.clientHeight)
              console.log(document.body.scrollHeight)
              /* eslint-enable */

              if (data.distance.y < 0) {
                isRight = true
                this.pullState = 2
              } else {
                isRight = false
                this.pullState = 0
              }
              break
            }
            case 'swipeDown': {
              if (data.distance.y > 0) {
                isRight = true
                this.pullState = 1
              } else {
                isRight = false
                this.pullState = 0
              }
              break
            }
            default: {
              break
            }
          }

          if (Math.abs(data.distance.y) > this.pullDistance && isRight) {
            this.pullState = 3 // 松开刷新
          }

          break
        }
        case 'touchend': {
          this.distance = 0
          // this.pullState = 0;
          setTimeout(() => {
            this.pullState = 0
          }, 300)
          console.log(`pulldown touchend${data.distance.y}`)
          this.move(0)
          break
        }
        default: {
          break
        }
      }
    }
  },
  data() {
    return {
      touchit: null,
      isloading: false,
      notice: ['', '下拉刷新列表', '上拉刷新列表', '松开刷新', '加载中'],
      pullState: 0,
      distance: 0,
      pullDistance: 60
    }
  },
  beforeDestroy() {
    this.touchit.destory()
  }
}
</script>
