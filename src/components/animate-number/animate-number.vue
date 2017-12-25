<template lang="html">
<span>
  {{valueStr}}
</span>
</template>

<script>
export default {
  props: {
    number: {
      default: 0
    },
    // animate time (ms)
    animateTime: {
      default: 4000
    },
    //
    length: {
      default: 0
    }
  },
  data() {
    return {
      valueSelf: this.number,
      timer: null
    }
  },
  watch: {
    number(newval, oldval) {
      clearInterval(this.timer)
      /* eslint-disable */
      const distance = newval - oldval
      const steps = parseInt(24 * this.animateTime / 1000)

      this.timer = setInterval(() => {
        let speed = 0
        if (Math.abs(distance) >= steps) {
          speed = parseInt(distance / steps)
        } else {
          speed = Math.abs(distance) / distance
        }
        //alert(Math.abs(this.valueSelf - newval))
        if (Math.abs(this.valueSelf - newval) <= Math.abs(speed)) {

          this.valueSelf = newval
          clearInterval(this.timer)
        } else {
          this.valueSelf += speed
        }
      }, 1000 / 24)
    }
  },
  computed: {
    valueStr() {
      if(this.length > 0){
        return (Array(this.length).join(0) + this.valueSelf).slice(-this.length)
      } else {
        return this.valueSelf
      }
    }
  },
  ready() {},
  attached() {},
  methods: {

  },
  components: {}
}
</script>
