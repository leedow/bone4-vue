<template>
  <transition name="layout">
  <div class="layout-none" v-if="show_">
    <div class="toast">
      <i v-if="icon!=''" class="icon iconfont" :class="[
        'icon-' + icon[type_],
        type_=='loading'?'loading':''
      ]"></i>
      {{content_}}
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
      default: 1500
    },
    content: {
      type: String,
      default: ''
    }
  },
  mounted: function(){
    //alert(this.type_)
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
      }, this.delay_)
    }
  },
  data () {
    return {
      type_: this.type,
      delay_: this.delay,
      content_: this.content,
      show_ : false,
      icon : {
        text: '',
        success: 'check',
        failed: 'close',
        warm: 'info',
        loading: 'loading'
      }
    }
  }
}
</script>
