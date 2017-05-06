<template lang="html">
<button type="button" @click="back">
  <i :class="['icon', 'iconfont',  'icon-'+icon]"></i>
</button>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    to: {
      type: String,
      default: ''
    },
    slide: {
      type: String,
      default: 'right'
    },
    icon: {
      type: String,
      default: 'xiangzuo1'
    }
  },
  methods: {
    back() {
      const back = this.$route.query.back || false

      if (back) {
        this.$router.push({
          path: back,
          query: {
            slide: this.slide
          }
        })
      } else {
        this.$router.push({
          path: this.to,
          query: {
            slide: this.slide
          }
        })
      }
    }
  },
  components: {}
}
</script>
