## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| state | 移除 | Boolean | false |
| value | 选中初始状态 | Boolean | false |
| showTag | 是否显示文字 | Boolean | false |
| tag | 显示的文字内容 | Array | ['开','关'] |


## 组件方法

| 方法名 | 说 明 | 参数 |
|-------|-------| --|
| setState(value) | 设置组件开关状态 | `true` `false` |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-click(value) | 点击事件 |  `true` or `false` |




## DEMO
```
<template>
  <div>
    <ul class="list list-box p0002">
      <li class="list-item">
        <menu-vertical>
          <span slot="body">默认(打开)</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">默认(关闭)</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch :value="false"/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">带文字</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch :value="false" :show-tag="true" />
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">自定义文字</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch :show-tag="true" :tag="['ON', 'OFF']"/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">异步修改状态</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch v-model="state"/>
          </span>
        </menu-vertical>
      </li>
    </ul>
  </div>
</template>

<script>
import BoSwitch from './bo-switch'
import menuVertical from '../menu-vertical/menu-vertical'

export default {
  name: 'switchdemo',
  components: {
    BoSwitch,
    menuVertical
  },
  mounted() {
    setTimeout(() => {
      this.state = true
    }, 1000)
  },
  data() {
    return {
      state: false
    }
  }
}
</script>
```
