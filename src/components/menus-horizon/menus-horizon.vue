<template>
<nav class="menu-horizon" :class="[
  'menu-horizon-' + size,
  border?'menu-horizon-border':''
]">

  <button v-for="(item, index) in surface" class="menu-horizon-item" :class="[
    item.alias==currentSelf?'menu-current':''
  ]"
    @click="_handleClick(item, index)"
  >
    <span class="menu-pic">
      <i class="icon iconfont" :class="[
        item.alias==currentSelf&&item.currentIcon?'icon-'+item.currentIcon:'icon-' + item.icon
      ]"></i>
    </span>
    <span class="menu-title">{{item.title}}</span>
  </button>
</nav>
</template>

<script>
export default {
  name: 'menuhorizon',
  components: {

  },
  props: {
    surface: {
      type: Array,
      default() {
        return []
      }
    },
    size: {
      type: String,
      default: 'normal'
    },
    border: {
      type: Boolean,
      default: false
    },
    current: {
      type: String,
      default: ''
    }
  },
  created() {
    // alert(this.pathSelf)
  },
  methods: {
    setCurrent(alias) {
      this.currentSelf = alias
    },
    _handleClick(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
      this.$emit('on-click', item)
      this.setCurrent(item.alias)
    }
  },
  data() {
    return {
      currentSelf: this.current,
      pathSelf: this.$route.path
    }
  }
}
</script>
