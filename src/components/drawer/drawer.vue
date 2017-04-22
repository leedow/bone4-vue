<template>
<div>
  <transition name="layout">
    <div class="layout-opacity" :class="[position=='top-header'?'layout-header':'']" v-show="show"></div>
  </transition>
  <transition :name="animate[position]">
    <div class="drawer" :class="['drawer-'+position ]" v-show="show">
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
      default: 'center' // center|bottom|left|top|top-header
    }
  },
  data() {
    return {
      animate: {
        center: 'modal',
        bottom: 'bt',
        left: 'lr',
        top: 'tb',
        'top-header': 'tb'
      }
    }
  }
}
</script>
