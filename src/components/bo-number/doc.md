## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| value | 初始值 | Number | 0 |
| max | 数字选择上限 | Number | 9999 |
| min | 数字选择下限 | Number | 0 |


## 组件方法

| 方法名 | 说 明 | 参数 |
|-------|-------| --|
| rollback() | 回滚到上一个值 | - |
| getOldValue() | 获取上一个值 | - |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-change(number) | 数字变化触发 | Number |
| on-max(number) | 到达上限 | Number |
| on-min(number) | 到达下限 | Number |

## DEMO
```
<template>
  <ul class="list list-box p0002">
    <li class="list-item">
      <menu-vertical>
        <span slot="body">值 {{val}}</span>
        <span slot="dock" style="padding-right: 20px;">
          <bo-number max="5" value="6" @on-change="change"/>
        </span>
      </menu-vertical>
    </li>
    <li class="list-item">
      <menu-vertical>
        <span slot="body">大小上下限 {{val2}}</span>
        <span slot="dock" style="padding-right: 20px;">
          <bo-number max="5" min="2" v-model="val2" @on-max="max" @on-min="min"/>
        </span>
      </menu-vertical>
    </li>
    <li class="list-item">
      <menu-vertical>
        <span slot="body">数据回滚</span>
        <span slot="dock" style="padding-right: 20px;">
          <bo-number ref="number" :value="val3" @on-change="rollback"/>
        </span>
      </menu-vertical>
    </li>
  </ul>

</template>

<script>
import {BoNumber, MenuVertical} from 'bone4'

export default {
  name: '',
  components: {
    BoNumber,
    MenuVertical
  },
  methods: {
    change(val) {
      this.val = val
    },
    max() {
      this.$toast.open('已到最大值')
    },
    min() {
      this.$toast.open('到最小值')
    },
    rollback() {
      this.$toast.open('1S后回滚')
      setTimeout(() => {
        this.$refs.number.rollback()
      }, 1000)
    }
  },
  data() {
    return {
      val: 1,
      val2: 3,
      val3: 1
    }
  }
}
</script>

```
