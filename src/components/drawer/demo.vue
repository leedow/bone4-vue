<template>
  <div class="">
    <ul class="list list-box p0002">
      <dmenu @on-click="play('center')"  name="Center"/>
      <dmenu @on-click="play('bottom')"  name="Bootom"/>
      <dmenu @on-click="play('left')"  name="Left"/>
    </ul>

   <drawer :show="show" :position="pos">
     <div style="display:flex;padding: 40px">
       <button type="button" class="btn btn-primary btn-block" @click="close">关闭</button>
     </div>
   </drawer>
  </div>
</template>

<script>
import Drawer from './drawer.vue'
import Dmenu from '../demohelper/demomenu.vue'

export default {
  name: 'drawerdemo',
  components: {
    Drawer,
    Dmenu
  },
  methods: {
    play (position){
      this.show = true
      this.pos = position
    },
    close (){
      this.show = false
    }
  },
  data () {
    return {
      show: false,
      pos: 'center'
    }
  }
}
</script>
