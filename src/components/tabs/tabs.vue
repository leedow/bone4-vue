<template>
  <nav class="tabs-horizon tabs-horizon-flex" :class="['tabs-horizon-' + theme]">
    <button v-for="(item, index) in surface" class="tabs-item" :class="[
      item.alias==current?'tabs-item-current':''
    ]"
      @click="handleClick(item, index)"
    >
       {{item.title}}
    </button>
  </nav>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    surface: {
      type: Array,
      default() {
        return []
      }
    },
    theme: {
      type: String,
      default: 'default' // or dark
    },
    current: {
      type: String,
      default: ''
    }
  },
  methods: {
    setCurrent(alias) {
      this.current = alias
    },
    handleClick(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
      this.$emit('on-click', item)
      this.setCurrent(item.alias)
    }
  },
  data() {
    return {
      //current: this.current
    }
  }
}
</script>
