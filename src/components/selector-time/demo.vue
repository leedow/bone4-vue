<template lang="html">
  <div class="card card-square p2222">
    <button type="button" class="btn btn-primary" @click="open">时间选择</button>
    <selector-time
      ref="time"
      hour="16"
      minutes="30"
      hourMax="18"
      hourMin="15"
      minStep="10"
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
    handleclick(data) {
      console.log(data)
    },
    submit(data) {
      console.log(data)
    },
    open() {
      this.$refs.time.open()
    }
  },
  data() {
    return {
      content: 'like'
    }
  }
}
</script>
