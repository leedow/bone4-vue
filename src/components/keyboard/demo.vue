<template>
  <div class="">
    <div class="p2222 card card-square">
      {{data}}
    </div>
    <keyboard v-model="data" />
  </div>
</template>

<script>
import Keyboard from './keyboard'


export default {
  name: 'keyboarddemo',
  components: {
    Keyboard
  },
  methods: {
    handle(val) {
      this.data = val
    }
  },
  data() {
    return {
      data: '0'
    }
  }
}
</script>
