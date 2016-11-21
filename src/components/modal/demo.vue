<template>
  <div class="p2222">

        <button class="btn btn-lg btn-primary form-control" @click="alert">Alert</button>
        <div class="m2000">
          <button class="btn btn-lg btn-primary form-control m2000" @click="confirm">Confirm</button>
        </div>

        <div class="m2000">
          <button class="btn btn-lg btn-primary form-control m2000" @click="show2=true">Has child components</button>
        </div>

        <modal :show="show" @on-confirm="show=false" @on-cancel="show=false" :type="type" >Hello world!</modal>
        <modal :show="show2" @on-confirm="show2=false" @on-cancel="show2=false" :type="type" >
          <input type="text" name="name"  class="input form-control" placeholder="请输入">
        </modal>
      </div>


  </div>
</template>

<script>
import Modal from './modaldemo.vue'

export default {
  name: 'DialogDemo',
  components: {
    Modal
  },
  methods: {
    alert (){
      this.type = 'alert';
      this.show= true;
    },
    confirm (){
      this.type = 'confirm';
      this.show = true;
    }
  },
  data () {
    return {
      show: false,
      show2: false,
      type: 'alert'
    }
  }
}
</script>
