<template>
  <button class="btn"
          @click="handleClick"
          :class="[
            'btn-' + theme,
            'btn-' + size,
            block?'btn-block':''
          ]"
  ><i v-if="icon!=''" class="icon iconfont" :class="[icon?'icon-'+icon:'']"></i> {{name}}</button>
</template>

<script>
import eventbus from '../helper/eventbus'

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
      default: true
    },
    submit: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (){
      if(this.submit != ''){
        eventbus.$emit('btn-submit', this.submit);
      }
      this.$emit('btn-click', '');
    }
  },
  data () {
    return {

    }
  }
}
</script>
