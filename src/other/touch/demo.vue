<template>
  <div class="layout-main-absolute">

    <div class="flex-box">
      <div ref="swipe" class="flex-item-1 toucharea ">
        Swipe
      </div>

    </div>

    <div class="flex-box">
      <div ref="swipeUp" class="flex-item-1 toucharea">
        Swipe Up
      </div>
      <div ref="swipeDown" class="flex-item-1 toucharea">
        Swipe Down
      </div>
    </div>

    <div class="flex-box">
      <div ref="swipeLeft" class="flex-item-1 toucharea ">
        Swipe Left
      </div>
      <div ref="swipeRight" class="flex-item-1 toucharea">
        Swipe Right
      </div>
    </div>

    <div class="flex-box">
      <div ref="swipeX" class="flex-item-1 toucharea ">
        Swipe X
      </div>
      <div ref="swipeY" class="flex-item-1 toucharea">
        Swipe Y
      </div>
    </div>




    <toast ref="success" type="success" :content="content"/>
  </div>

</template>
<style media="screen">
  .toucharea{
    margin: 4px;
    background: #fff;
    padding: 40px 0;

  }
  .infobox{
    padding: 20px;
    text-align: left;
    background: #fff;
    margin-bottom: 10px;
  }
</style>
<script>
import Touchit from '../../components/helper/touchit'
import Toast from '../../components/toast/toast'

export default {
  name: 'touchdemo',
  components: {
    Toast
  },
  mounted() {
    this.touchType.forEach((type, key) => {
      this.touchit[key] = new Touchit({
        alias: type,
        dom: this.$refs[type],
        type,
        done: this.done,
        doing: this.doing
      })
    })
  },
  methods: {
    done(e) {
      this.content = `You ${e.alias}`
      this.$refs.success.open()
    },
    doing(et, e) {
      console.log(e)
      this.position = e.position
      this.distance = e.distance
    }
  },
  data() {
    return {
      content: '',
      position: [0, 0],
      speed: { x: 0, y: 0 },
      distance: { x: 0, y: 0 },
      touchit: [null, null, null, null, null, null, null],
      touchType: ['swipe', 'swipeDown', 'swipeUp', 'swipeLeft', 'swipeRight', 'swipeX', 'swipeY']
    }
  },
  beforeDestroy() {
    this.touchit.forEach((item) => {
      item.destory()
    })
  }
}
</script>
