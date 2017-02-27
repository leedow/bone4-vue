<template>
  <li class="list-item list-item-arrow" @click="onclick">
    <menu-vertical :path="path">
      <span slot="body">{{name}}</span>
      <span slot="dock" style="padding-right: 20px;color:#aaa">{{dock}}</span>
    </menu-vertical>
  </li>
</template>

<script>
import menuVertical from '../menu-vertical/menu-vertical'

export default {
  name: 'test1',
  components: {
    menuVertical
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
    }
  },
  methods: {
    onclick() {
      this.$emit('on-click', '')
    }
  },
  data() {
    return {

    }
  }
}
</script>
