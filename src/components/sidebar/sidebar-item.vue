<template lang="html">
  <li class="menu-item"
    :class="[
      selected?'menu-item-current':'' ,
      icon?'menu-item-icon':'']"
    @click="handleClick"
  >
    <i v-if="icon" class="icon iconfont" :class="[icon?'icon-'+icon:'']"></i>
    <span>{{title}}</span>
    <span class="tip" v-if="tip">{{tip}}</span>
  </li>
</template>

<script>
export default {
  props: {
    // 显示标题
    title: {
      default: ''
    },
    icon: {
      default: null
    },
    tip: {
      default: null
    },
    // 别名
    alias: {
      default: ''
    },
    // 链接地址仅支持 vue router
    link: {
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
        alias: this.alias,
        link: this.link,
        title: this.title
      })
    }
  },
  components: {}
}
</script>
