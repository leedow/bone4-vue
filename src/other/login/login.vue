<template>
  <div class="page-login">
    <div class="login-box">
      <slot name="logo"></slot>
      <form-group  size="lg" name="loginform" @on-submit="submit">
        <form-input
          holder="请输入账号"
          size="lg"
          icon="people"
          for="loginform"
          theme="underline"
          name="phone"
          :required="true"
        />

        <form-input
          holder="请输入密码"
          size="lg"
          icon="lock"
          for="loginform"
          theme="underline"
          name="password"
          :required="true"
        />
      </form-group>
      <div class="p3000">
        <btn theme="primary" :loading="loading" :block=true size="lg" submit="loginform" name="登 录"/>
      </div>
      <slot name="bottom"></slot>
    </div>
    <toast ref="toast"  :type="type" :content="content"/>
  </div>
</template>

<script>
import FormGroup from '../../components/form-group/form-group.vue'
import FormInput from '../../components/bo-input/bo-input.vue'
import Btn from '../../components/btn/btn.vue'
import Toast from '../../components/toast/toast.vue'

export default {
  name: 'login',
  components: {
    FormGroup,
    FormInput,
    Btn,
    Toast
  },
  props: {


  },
  methods: {
    submit (data){
      this.loading = true
      this.$emit('on-login', data)
    },
    reset (){
      this.content = ''
      this.loading = false
    },
    toast (content){
      this.content = content
      this.$refs.toast.open()
    }
  },
  data () {
    return {
      loading: false,
      content: '',
      type: 'warm'
    }
  }
}
</script>
