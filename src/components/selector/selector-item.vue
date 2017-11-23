<template lang="html">
  <li @click="handleClick"
    :class="[selected?'selected':'']"
  >
    {{text}}
    <slot />
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
    },
    // 额外数据
    addon: {
      default: null
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
        text: this.text,
        addon: this.addon
      })
    }
  },
  components: {}
}
</script>
