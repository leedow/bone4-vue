<template lang="html">
<div class="layout-bottom">
  <shopping-bar
    icon="present"
    price=123.4
    total=10
    @on-click="onclick"
  />
</div>
</template>

<script>
import shoppingBar from './shopping-bar'

export default {
  data() {
    return {}
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    onclick() {
      this.$toast.open('去结算')
    }
  },
  components: {
    shoppingBar
  }
}
</script>
