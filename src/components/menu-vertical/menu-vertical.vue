<template>
  <div class="menu-vertical-item" @click="handleClick">
    <div class="menu-icon" v-if="icon!=''">
      <i class="icon iconfont" :class="[
        icon!=''?'icon-'+icon:''
      ]"></i>
    </div>
    <div class="menu-body">
        <slot name="body"></slot>
    </div>
    <div class="menu-dock">
        <slot name="dock"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuvertical',
  components: {

  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    alias: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (){
      if(this.path != ''){
        this.$router.push(this.path)
      }
      this.$emit('on-click', this.alias)
    }
  },
  data () {
    return {

    }
  }
}
</script>
