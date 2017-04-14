<template>
  <div class="card p2222">
    <div style="width:90px;">
      <bo-number max="5" />
    </div>

    <div style="width:90px;">
      <bo-number max="5" min="2" value="3" @on-max="max" @on-min="min"/>
    </div>

  </div>
</template>

<script>
import BoNumber from './bo-number'

export default {
  name: '',
  components: {
    BoNumber
  },
  methods: {
    max() {
      this.$toast.open('已到最大值')
    },
    min() {
      this.$toast.open('到最小值')
    }
  },
  data() {
    return {

    }
  }
}
</script>
