<template>
  <li class="list-item">
    <menu-vertical :path="path">
      <span slot="body">{{name}}</span>
      <span slot="dock" style="padding-right: 20px;">
        <bo-switch ref="sw" :state="state" @on-click="_handleSwitch"/>
      </span>
    </menu-vertical>
  </li>
</template>

<script>
import menuVertical from '../menu-vertical/menu-vertical'
import BoSwitch from '../bo-switch/bo-switch'

export default {
  name: 'test1',
  components: {
    menuVertical,
    BoSwitch
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    dock: {
      type: String,
      default: ''
    },
    state: {
      type: Boolean,
      default: false
    },
    alias: {
      type: String,
      default: ''
    }
  },
  methods: {
    onclick() {
      this.$emit('on-click', '')
    },
    _handleSwitch(data) {
      this.$emit('on-switch', {
        obj: this,
        state: data
      })

      setTimeout(() => {
        this.$refs.sw.setState(false)
      }, 1000)
    },
    off() {
      this.$refs.sw.setState(false)
    }
  },
  data() {
    return {

    }
  }
}
</script>
