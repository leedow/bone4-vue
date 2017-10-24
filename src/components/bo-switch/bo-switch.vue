<template>
  <div class="switch" :class="[
    showTag?'switch-tag':'',
    cssState
  ]" @click="_handleClick">
    <span v-if="showTag" class="on">{{tag[0]}}</span>
    <span v-if="showTag" class="off">{{tag[1]}}</span>
  </div>
</template>

<script>
export default {
  name: 'switch',
  props: {
    /*
    state: {
      type: Boolean,
      default: true
    },*/
    showTag: {
      type: Boolean,
      default: false
    },
    tag: {
      type: Array,
      default() {
        return ['开', '关']
      }
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    _handleClick() {
      this.stateSelf = !this.stateSelf
      this.$emit('on-click', this.stateSelf)
      this.$emit('input', this.stateSelf)
    },
    // 向前兼容保留方法
    setState(state) {
      this.stateSelf = state
    }
  },
  computed: {
    cssState() {
      let state = ''
      if (this.showTag && !this.stateSelf) {
        state = 'switch-tag-off'
      } else if (!this.showTag && !this.stateSelf) {
        state = 'switch-off'
      } else {
        state = 'switch-on'
      }
      return state
    }
  },
  watch: {
    // 向前兼容
    value(newval) {
      this.stateSelf = newval
    }
  },
  data() {
    return {
      stateSelf: this.value
    }
  }
}
</script>
