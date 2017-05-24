<template>
  <div class="">
    <div class="p2222">
        <pay-password ref="p"  :number="number"/>
    </div>
    <div class="p2222">
      <button class="btn btn-primary btn-lg btn-block" @click="clean">重 置</button>
    </div>

  </div>
</template>

<script>
import PayPassword from './pay-password'


export default {
  name: 'PayPassworddemo',
  components: {
    PayPassword
  },
  methods: {
    handle(val) {
      this.data = val
    },
    clean() {
      this.number = ''
    }
  },
  data() {
    return {
      number: '123'
    }
  }
}
</script>
