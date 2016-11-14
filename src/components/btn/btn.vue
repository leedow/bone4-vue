<template>
  <button class="btn"
          @click="handleClick"
          :class="[
            'btn-' + theme,
            'btn-' + size
          ]"
  ><i v-if="icon!=''" class="icon iconfont" :class="[icon?'icon-'+icon:'']"></i> {{name}}</button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    name: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    enable: {
      type: Boolean,
      type: true
    }
  },
  methods: {
    handleClick (){
      this.$emit('btn-click', '');
    }
  },
  data () {
    return {

    }
  }
}
</script>
