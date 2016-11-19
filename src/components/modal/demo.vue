<template>
  <div class="">
    <div class="mobile" style="width: 300px;height: 540px;margin:0 auto;">
      <div class="screen p2222" style="background:#f2f2f2;"  >
        <button class="btn btn-lg btn-primary form-control" @click="alert">Alert</button>
        <div class="m2000">
          <button class="btn btn-lg btn-primary form-control m2000" @click="confirm">Confirm</button>
        </div>

        <div class="m2000">
          <button class="btn btn-lg btn-primary form-control m2000" @click="show2=true">Has child components</button>
        </div>

        <modal :show="show" @modal-confirm="show=false" @modal-cancel="show=false" :type="type" >Hello world!</modal>
        <modal :show="show2" @modal-confirm="show2=false" @modal-cancel="show2=false" :type="type" >
          <input type="text" name="name"  class="input form-control" placeholder="请输入">
        </modal>
      </div>
    </div>
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
