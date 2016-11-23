<template>
  <nav class="tabs-horizon tabs-horizon-flex">
    <button v-for="(item, index) in surface" class="tabs-item" :class="[
      item.alias==current_?'tabs-item-current':''
    ]"
      @click="_handleClick(item, index)"
    >
       {{item.title}}
    </button>
  </nav>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    surface: {
      type: Array,
      default (){
        return []
      }
    },
    current: {
      type: String,
      default: ''
    }
  },
  methods: {
    setCurrent (alias){
      this.current_ = alias;
    },
    _handleClick (item, index){
      if(item.path){
        this.$router.push(item.path);
      }
      this.$emit('on-click', item);
      this.setCurrent(item.alias);
    }
  },
  data () {
    return {
      current_: this.current
    }
  }
}
</script>
