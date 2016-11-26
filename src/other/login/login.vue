<template>
  <div class="page-login">
    <div class="login-box">
      <h1>Fast</h1>
      <form-group :theme="theme" size="lg" name="testform" @on-submit="submit">




      </form-group>
      <div class="p3000">
        <button type="button" class="btn btn-primary btn-lg btn-block">登 录</button>
      </div>
    </div>
  </div>
</template>

<script>
import FormGroup from '../../components/form-group/form-group.vue'
import FormInput from '../../components/form-input/form-input.vue'
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
  data () {
    return {

    }
  }
}
</script>
