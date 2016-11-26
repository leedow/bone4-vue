<template>
  <login  ref="login" @on-login="login">
    <h1 slot="logo">LOGO</h1>
  </login>
</template>

<script>
import login from './login.vue'

export default {
  name: 'test1',
  components: {
    login
  },
  created (){

  },
  methods: {
    login (data){
      console.log(data)
      this.$refs.login.toast(JSON.stringify(data))
      setTimeout(()=>{
        this.$refs.login.reset()
        //this.content = ''
      }, 2000)
    }
  },
  data () {
    return {

    }
  }
}
</script>
