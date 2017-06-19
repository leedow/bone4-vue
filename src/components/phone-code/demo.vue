<template>
  <div class="">
    <div class="form-blank m2000">
      <phone-code ref="code"  @on-send="sendCode"/>
    </div>
    <div class="p2222">
      <btn @on-click="submit" name="获取输入" theme="primary" :block=true size="lg"/>
    </div>
  </div>

</template>

<script>
import phoneCode from './phone-code'
import Btn from '../btn/btn'

export default {
  name: 'codedemo',
  components: {
    phoneCode,
    Btn
  },
  created() {

  },
  methods: {
    sendCode(phone) {
      alert('发送验证码到'+phone) //eslint-disable-line
    },
    submit() {
      alert(JSON.stringify(this.$refs.code.getValue())) //eslint-disable-line
    }
  },
  data() {
    return {

    }
  }
}
</script>
