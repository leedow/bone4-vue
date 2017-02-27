<template>
  <transition name="layout">
     <div class="toast" v-if="showSelf">
      <i v-if="icon!==''" class="icon iconfont" :class="[
        'icon-' + icon[typeSelf],
        typeSelf==='loading'?'loading':''
      ]"></i>
      {{contentSelf}}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  props: {
    type: {
      type: String, // text|success|failed|warm|loading
      default: 'text'
    },
    delay: {
      type: Number,
      default: 1500
    },
    content: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // alert(this.typeSelf)
  },
  methods: {
    open() {
      this.showSelf = true
      if (this.typeSelf !== 'loading') {
        this.clock()
      }
    },
    close() {
      this.showSelf = false
    },
    clock() {
      setTimeout(() => {
        this.close()
      }, this.delaySelf)
    }
  },
  data() {
    return {
      typeSelf: this.type,
      delaySelf: this.delay,
      contentSelf: this.content,
      showSelf: false,
      icon: {
        text: '',
        success: 'check',
        failed: 'close',
        warm: 'info',
        loading: 'loading'
      }
    }
  }
}
</script>
