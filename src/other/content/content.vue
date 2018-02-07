<template>
  <div class="content" :class="state" @click="switchState">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'content',
  components: {

  },
  props: {

  },
  methods: {
    switchState() {
      this.open = !this.open
    }
  },
  computed: {
    state() {
      return this.open ? 'content-open' : 'content-close'
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
