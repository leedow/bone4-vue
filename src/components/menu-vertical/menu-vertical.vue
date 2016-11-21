<template>
  <div class="menu-vertical-item">
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
    }
  },
  data () {
    return {

    }
  }
}
</script>
