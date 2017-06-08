## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| seconds | 倒计时秒数 | Number  | 60 |
| phone | 默认填入的手机号 | - | '' |
| phoneMode | 控制手机输入框状态为正常，隐藏，或者不可编辑，后两者可用于重置密码等固定手机号等操作, `default`  `hide`  `disable` | String | 'default'  |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| checkPhone() | 手工校验手机格式，返回boolean |
| getValue() | 获取组件输入属性，返回 `{phone, code}` |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-send | 手机格式校验通过后发送手机验证码事件 | - |




## DEMO
```
<template>
  <div class="form-blank">
    <phone-code ref="code"   @on-send="sendCode"/>
    <div class="p2222">
      <btn @on-click="submit" name="获取输入" theme="primary" :block=true size="lg"/>
    </div>
  </div>
</template>

<script>
import {phoneCode} from 'bone4'

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

```
