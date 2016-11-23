## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| type | 提示类型，`success` `failed` `warm` `loading` `text` | String | text |
| delay | 自动关闭延迟ms，仅在type为loading时有效 | Integer | 2000 |
| content | 显示内容 | String | '' |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
|  open   | 显示提示 |
| close | 关闭提示 |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| -   | - | - |




## DEMO
```
<template>
  <div >
    <ul class="list list-box p0002">
      <dmenu @on-click="showtoast('loading')"  name="读取中" dock="Loading" />
      <dmenu @on-click="showtoast('failed')"  name="操作失败" dock="Failed" />
      <dmenu @on-click="showtoast('warm')"  name="警告" dock="Warm" />
      <dmenu @on-click="showtoast('success')"  name="操作成功" dock="Success" />
      <dmenu @on-click="showtoast('text')"  name="纯文本" dock="Text" />
    </ul>
    <toast ref="loading"   type="loading" content="读取中"/>
    <toast ref="success"   type="success" content="发布成功"/>
    <toast ref="failed"   type="failed" content="操作失败"/>
    <toast ref="warm"   type="warm" content="信息有误"/>
    <toast ref="text"   type="text" content="纯文本提示"/>
</div>
</template>
<script>
import {Toast} from 'bone4'
import Dmenu from '../demohelper/demomenu.vue'

export default {
  name: 'toastdemo',
  components: {
    Toast,
    Dmenu
  },
  methods: {
    showtoast (aim){
      switch(aim){
        case 'loading': {
          this.$refs.loading.open();
          setTimeout(()=>{
            this.$refs.loading.close();
          }, 3000)
          break;}
        case 'success': this.$refs.success.open();break;
        case 'failed': this.$refs.failed.open();break;
        case 'warm': this.$refs.warm.open();break;
        case 'text': this.$refs.text.open();break;
      }
    }
  },
  data () {
    return {


    }
  }
}
</script>
```
