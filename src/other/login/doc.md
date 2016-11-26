## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| - | - | - | - |

## 组件方法

| 方法名 | 说 明 | 参数 |
|-------|-------| ---|
| reset() | 重置表单 | - |
| toast(content) | 登录错误提示 |  String |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-login | 提交表单信息 | {name:value,...} |




## DEMO
```
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

```
