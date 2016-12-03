<template>
  <div class="">
    <ul class="list list-box p0002">
      <dmenu @on-switch="play"   alias="center"  name="Center"/>
      <dmenu @on-switch="play"  alias="bottom" name="Bootom"/>
      <dmenu @on-switch="play" alias="left"  name="Left"/>
      <dmenu @on-switch="play" alias="top"  name="Top"/>
    </ul>

   <drawer :show="show" :position="pos">
     <div style="display:flex;padding: 40px">
       <button type="button" class="btn btn-primary btn-block" @click="close">关 闭</button>
     </div>
   </drawer>
  </div>
</template>

<script>
import Drawer from './drawer.vue'
import Dmenu from '../demohelper/demoswitch.vue'

export default {
  name: 'drawerdemo',
  components: {
    Drawer,
    Dmenu
  },
  methods: {
    play (data){

      this.show = true
      this.pos = data.obj.alias

    },
    close (){
      this.show = false

    }
  },
  data () {
    return {
      show: false,
      pos: 'center',
      state: false
    }
  }
}
</script>
