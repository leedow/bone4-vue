<template>
<div>
  <transition name="layout">
    <div class="layout-opacity" v-if="show"></div>
  </transition>
  <transition name="modal">
    <div class="dialog-layout" v-if="show">
      <div class="dialog">
        <div class="dialog-content">
          <slot></slot>
        </div>
        <div class="dialog-buttons">
          <button class="button-no" v-if="type=='confirm'" @click="cancel">{{buttons[1]}}</button>
          <button class="button-ok" @click="confirm">{{buttons[0]}}</button>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>

export default {
  name: 'Modal',
  components: {

  },
  props: {
    name: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'confirm'
    },
    buttons: {
      type: Array,
      default (){
        return ['确 定' , '取 消']
      }
    }
  },
  methods: {
    confirm (){
      this.$emit('on-confirm', this.name)
    },
    cancel (){
      this.$emit('on-cancel', this.name)
    }
  },
  data () {
    return {

    }
  }
}
</script>
