## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| position  | 抽屉显示位置，`bottom` `top`  `center`  | String | 'bottom'|
| time | 初始化时间  | String | '00:00' |
| maxTime | 最大可选时间 | String | '23:59' |
| minTime | 最小可选时间 | String | '00:00' |
| minStep | 选择分钟时间间隔 | Number | 5 |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| getValue() | 获取当前所选时间 |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-submit | 时间选择完成事件 |    `{hour, minutes, text}` |



## DEMO
```
<template lang="html">
  <div class="card card-square p2222">
    <button type="button" class="btn btn-primary" @click="open">时间选择</button>
    <selector-time
      ref="time"
      time="15:00"
      minTime="14:25"
      maxTime="18:30"
      minStep="5"
      @on-submit="submit"
    />
  </div>

</template>

<script>
import SelectorTime from 'bone4'

export default {
  name: 'SelectorTimeDemo',
  components: {
    SelectorTime
  },
  methods: {
    handleclick(data) {
      console.log(data)
    },
    submit(data) {
      console.log(data)
    },
    open() {
      this.$refs.time.open()
    }
  },
  data() {
    return {
      content: 'like'
    }
  }
}
</script>

```
