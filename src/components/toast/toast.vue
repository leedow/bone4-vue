<template>
  <transition name="layout">
  <div class="layout-none" v-if="show_">
    <div class="toast">
      <i v-if="icon!=''" class="icon iconfont" :class="[
        'icon-' + icon[type],
        type=='loading'?'loading':''
      ]"></i>
      {{content}}
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  props: {
    type: {
      type: String,//text|success|failed|warm|loading
      default: 'text'
    },
    delay: {
      type: Number,
      default: 2000
    },
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    open (){
      this.show_ = true
      if(this.type != 'loading'){
        this._clock()
      }
    },
    close (){
      this.show_ = false
    },
    _clock (){
      setTimeout(()=>{
        this.close()
      }, this.delay)
    }
  },
  data () {
    return {
      show_ : false,
      icon : {
        text: '',
        success: 'check',
        failed: 'close',
        warm: 'infofill',
        loading: 'loading'
      }
    }
  }
}
</script>
