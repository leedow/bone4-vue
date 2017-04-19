<template>
  <div class="card p2222">
    <div class="">
      {{now}}
    </div>
    <div style="">
      <calendar ref="calendar" :activeDays="['2017-4-18', '2017-4-19']" :unactiveDays="['2017-4-20']" @on-click="handle"
        @on-month-change="monthChange"
      />
    </div>

  </div>
</template>

<script>
import calendar from './calendar'

export default {
  name: '',
  components: {
    calendar
  },
  methods: {
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
      now: ''
    }
  }
}
</script>
