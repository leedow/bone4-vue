<template>
  <li class="list-item list-item-arrow">
    <menu-vertical :path="path">
      <span slot="body">{{name}}</span>
    </menu-vertical>
  </li>
</template>

<script>
import menuVertical from '../menu-vertical/menu-vertical.vue'
export default {
  name: 'test1',
  components:{
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
    }
  },
  data () {
    return {

    }
  }
}
</script>
