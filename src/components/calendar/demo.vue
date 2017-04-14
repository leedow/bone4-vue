<template>
  <div class="card p2222">
    <div style="">
      <calendar ref="calendar" :activeDays="['4-4', '4-6']" @on-click="handle"/>
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
      this.$refs.calendar.setStatusOfDay(data.date, 'active')
    }
  },
  data() {
    return {

    }
  }
}
</script>
