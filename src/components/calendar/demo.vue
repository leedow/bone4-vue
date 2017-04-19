<template>
  <div class="card p2222">
    <div class="">
      {{now}}
    </div>
    <div style="" ref="touchbox">
      <calendar ref="calendar" :activeDays="['2017-4-18', '2017-4-19']" :unactiveDays="['2017-4-20']" @on-click="handle"
        @on-month-change="monthChange"
      />
    </div>

  </div>
</template>

<script>
import calendar from './calendar'
import Touchit from '../../components/helper/touchit'

export default {
  name: '',
  components: {
    calendar
  },
  mounted() {
    this.touch = new Touchit({
      alias: 'swipeX',
      dom: this.$refs.touchbox,
      type: 'swipeX',
      done: this.done
    })
  },
  methods: {
    done(e) {
      console.log('done')
      if (e.distance.x > 0) {
        this.$refs.calendar.pre()
      }
      if (e.distance.x < 0) {
        this.$refs.calendar.next()
      }
    },
    handle(data) {
      this.$toast.open(JSON.stringify(data))
      console.log(JSON.stringify(data))
      // console.log(data.date.date.getDate())
      this.$refs.calendar.setStatusOfDay(data.date, 'active')
    },
    monthChange(data) {
      this.now = `${data.year}-${data.month}`
    }
  },
  data() {
    return {
      now: '',
      touch: null
    }
  },
  beforeDestroy() {
    this.touch.destory()
  }
}
</script>
