<template>
  <div class="switch" :class="[
    showTag?'switch-tag':'',
    cssState
  ]" @click="_handleClick">
    <span v-if="showTag" class="on">{{tag[0]}}</span>
    <span v-if="showTag" class="off">{{tag[1]}}</span>
  </div>
</template>

<script>
export default {
  name: 'switch',
  props: {
    state: {
      type: Boolean,
      default: true
    },
    showTag: {
      type: Boolean,
      default: false
    },
    tag: {
      type: Array,
      default (){
        return ['开', '关']
      }
    }
  },
  methods: {
    _handleClick (){
      this.state_ = !this.state_
      this.$emit('on-click', this.state_)
    },
    setState (state){
      this.state_ = state
    }
  },
  computed: {
    cssState (){
      if(this.showTag && !this.state_){
        return 'switch-tag-off'
      } else if(!this.showTag && !this.state_){
        return 'switch-off'
      } else {
        return 'switch-on'
      }
    }
  },
  data () {
    return {
      state_: this.state
    }
  }
}
</script>
