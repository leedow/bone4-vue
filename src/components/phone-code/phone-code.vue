<template>
  <div>
    <bo-input
      v-show="phoneMode!='hide'"
      ref="phone"
      holder="输入手机号"
      size="lg"
      label="手机号"
      theme="blank"
      format="phone"
      v-model="phoneSelf"
      :required=true
      :enable="phoneMode!='disable'"
    />

    <div class="form-item form-item-blank form-code">
      <label class="label-lg" for="">验证码</label>
      <div>
      <input v-model="code" type="text" name="name" class="input input-lg form-control rbb" value="" placeholder="请输入内容">
      </div>
      <div class="form-code-btn">
        <button type="button" class="btn btn-code input-lg" v-show="lock">{{clock}}秒后重发</button>
        <button type="button" class="btn btn-code input-lg" v-show="!lock" @click="sendCode">获取验证码</button>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '../btn/btn'
import BoInput from '../bo-input/bo-input'

export default {
  name: 'codedemo',
  components: {
    Btn,
    BoInput
  },
  props: {
    seconds: {
      type: Number,
      default: 60
    },
    phone: {
      default: ''
    },
    phoneMode: {
      type: String,
      default: 'default' // default | hide | disable
    }
  },
  created() {

  },
  methods: {
    /**
     * 检验并获得手机号
     */
    checkPhone() {
      if (this.$refs.phone.verify().state) {
        return true
      }
      return false
    },
    /**
     * 按钮倒计时
     * 可以发送进入倒计时，否则则什么也不做
     */
    runClock() {
      if (!this.lock) {
        this.lock = true
        this.timer = setInterval(() => {
          if (this.clock > 0) {
            this.clock -= 1
          }
          if (this.clock === 0) {
            this.lock = false
            this.clock = this.seconds
            clearInterval(this.timer)
          }
        }, 1000)
        return true
      }
      return false
    },
    /**
     * 发送验证码
     */
    sendCode() {
      // alert(this.checkPhone())//eslint-disable-line
      if (this.checkPhone()) {
        if (this.runClock()) {
          this.$emit('on-send', this.phoneSelf)
        }
      }
    },
    /**
     * 获取输入值
     * @return {Object} {phone, code}
     */
    getValue() {
      return {
        phone: this.phoneSelf,
        code: this.code
      }
    }
  },
  watch: {
    phone(newval) {
      this.phoneSelf = newval
    }
  },
  data() {
    return {
      phoneSelf: this.phone, // 手机号
      code: '', // 验证码
      lock: false, // 发送锁
      clock: this.seconds,
      timer: null
    }
  }
}
</script>
