<template lang="html">
  <button
    class="menu-horizon-item"
    :class="[
      current?'menu-current':''
    ]"
    @click="_handleClick()"
  >
    <span class="menu-pic" v-if="type=='iconfont'">
      <i class="icon iconfont" :class="[
        current&&currentIcon?'icon-'+currentIcon:'icon-' + icon
      ]"></i>
    </span>

    <span class="menu-pic" v-if="type=='image'">
      <img v-if="current&&currentIcon" :src="currentIcon" alt="">
      <img v-else :src="icon" alt="">
    </span>

    <span class="tip" v-if="tip && tip>0">{{tip}}</span>
    <span class="menu-title">{{title}}</span>

  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'iconfont' // iconfont | pic
    },
    current: {
      type: Boolean,
      default: false
    },
    tip: [String, Number],
    icon: String,
    currentIcon: String,
    alias: String,
    title: String,
    path: String
  },
  data() {
    return {}
  },
  computed: {

  },
  mounted() {},
  methods: {
    _handleClick() {
      if (this.path) {
        this.$router.push(this.path)
      }
      this.$emit('on-click', {
        alias: this.alias
      })
    }
  },
  components: {}
}
</script>
