<template lang="html">
  <li @click="handleClick"
    :class="[selected?'selected':'']"
  >
    {{text}}
  </li>
</template>

<script>
export default {
  props: {
    value: {
      default: 0
    },
    text: {
      default: ''
    }
  },
  data() {
    return {
      selected: false
    }
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleClick() {
      this.$parent.handleClick({
        value: this.value,
        text: this.text
      })
      // console.log(this.$parent)
    }
  },
  components: {}
}
</script>
