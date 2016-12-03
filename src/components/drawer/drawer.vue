<template>
<div>
  <transition name="layout">
    <div class="layout-opacity" v-if="show"></div>
  </transition>
  <transition :name="animate[position]">
    <div class="drawer" :class="['drawer-'+position ]" v-if="show">
      <div class="drawer-box">
        <slot></slot>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'drawer',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'center' //center|bottom|left|top
    }
  },
  data () {
    return {
      animate: {
        center: 'modal',
        bottom: 'bt',
        left: 'lr',
        top: 'tb'
      }
    }
  }
}
</script>
