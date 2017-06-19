<template lang="html">
  <div class="card card-square p0202">
    <div class="menu-vertical-item" @click="open">
      <div class="menu-body">
        {{time}}
      </div>
      <div class="menu-dock">
        <i class="icon iconfont icon-unfold"></i>
      </div>
    </div>

    <selector-time
      position="bottom"
      ref="time"
      :time="time"
      minTime="14:25"
      maxTime="18:30"
      minStep="5"
      @on-submit="submit"
    />
  </div>

</template>

<script>
import SelectorTime from './selector-time'

export default {
  name: 'SelectorTimeDemo',
  components: {
    SelectorTime
  },
  methods: {
    submit(data) {
      this.time = data.text
    },
    open() {
      this.$refs.time.open()
    }
  },
  data() {
    return {
      time: '00:00'
    }
  }
}
</script>
