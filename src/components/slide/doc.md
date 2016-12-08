## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| surface | 显示数据数组[{alias, path, imgUrl}] | Array | [] |
| height |  整体高度  | String | '100px' |
| width |  整体宽度 | String | '100%' |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|




## 初始化
```
<template>
  <div class="">
    <slide :surface="[{imgUrl: '1'},{imgUrl: '2'},{imgUrl: '3'}]" height="180px"/>
  </div>
</template>

<script>
import Slide from './slide.vue'

export default {
  name: 'slidedemo',
  components: {
    Slide
  },
  data () {
    return {

    }
  }
}
</script>
```
