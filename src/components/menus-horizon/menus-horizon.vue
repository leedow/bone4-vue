<template>
  <div
    class="menu-horizon"
    :class="[
        'menu-horizon-' + size,
        border?'menu-horizon-border':''
    ]"
  >
  <menus-horizon-item
    v-for="(item, index) in surface"
    :type="item.type||type"
    :alias="item.alias||''"
    :icon="item.icon"
    :current-icon="item.currentIcon"
    :title="item.title"
    :path="item.path"
    :tip="item.tip"
    :current="currentSelf==item.alias"
    @on-click="_handleClick"
  />
  <slot />
</div>
</template>

<script>
import MenusHorizonItem from './menus-horizon-item'

export default {
  name: 'menuhorizon',
  components: {
    MenusHorizonItem
  },
  item: MenusHorizonItem,
  props: {
    type: {
      type: String,
      default: 'iconfont' // iconfont | image
    },
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
  mounted() {
    // alert(this.pathSelf)
    console.log(this.$children) // eslint-disable-line
  },
  methods: {
    setCurrent(alias) {
      this.currentSelf = alias
    },
    _handleClick(item) {
      this.$emit('on-click', item)
      this.setCurrent(item.alias)
    }
  },
  computed: {
    currentSelf() {
      return this.current
    }
  },
  data() {
    return {
    }
  }
}
</script>
