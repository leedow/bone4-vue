<template>
  <div>
        <ul class="list list-box p0002">
          <dmenu @on-switch="alert"  name="Alert"/>
          <dmenu @on-switch="confirm"  name="Confirm" />
          <dmenu @on-switch="show2=true"  name="Has child components" />
          <dmenu @on-switch="open"  name="全局调用" />
        </ul>
        <modal :show="show" @on-confirm="show=false" @on-cancel="show=false" :type="type">Hello world!</modal>
        <modal :show="show2" @on-confirm="show2=false" @on-cancel="show2=false" :type="type" >
          <input type="text" name="name"  class="input form-control" placeholder="请输入">
        </modal>
      </div>
  </div>
</template>

<script>
import Modal from './modal'
import Dmenu from '../demohelper/demoswitch'

export default {
  name: 'DialogDemo',
  components: {
    Modal,
    Dmenu
  },
  methods: {
    alert() {
      this.type = 'alert'
      this.show = true
    },
    confirm() {
      this.type = 'confirm'
      this.show = true
    },
    open() {
      this.$modal.open('test').$on('on-confirm', () => {
        this.$modal.close()
      })
    }
  },
  data() {
    return {
      show: false,
      show2: false,
      type: 'alert'
    }
  }
}
</script>
