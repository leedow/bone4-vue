<template>
  <button class="btn"
          @click="handleClick"
          :class="[
            'btn-' + theme,
            'btn-' + size,
            block?'btn-block':''
          ]"
  ><i v-if="icon!=''&&!loading" class="icon iconfont" :class="[icon?'icon-'+icon:'']"></i>

  <i v-if="loading" class="icon iconfont icon-loading loading"></i>
   <span>{{name}}</span></button>
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
    disable: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
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
      if(this.disable && !this.loading){
        this.$emit('on-click', '');
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
