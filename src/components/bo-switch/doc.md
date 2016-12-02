## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| state | 选中初始状态 | Boolean | false |
| showTag | 是否显示文字 | Boolean | false |
| tag | 显示的文字内容 | Array | ['开','关'] |


## 组件方法

| 方法名 | 说 明 | 参数 |
|-------|-------| --|
| setState(state) | 设置组件开关状态 | `true` `false` |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-click(state) | 点击事件 |  `true` or `false` |




## DEMO
```
<template>
  <div class="">
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
            <bo-switch :state="false"/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">带文字</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch :state="false" show-tag=true/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">自定义文字</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch show-tag=true :tag="['ON', 'OFF']"/>
          </span>
        </menu-vertical>
      </li>
    </ul>
  </div>
</template>

<script>
import BoSwitch from './bo-switch.vue'
import Dmenu from '../demohelper/demoswitch.vue'
import menuVertical from '../menu-vertical/menu-vertical.vue'

export default {
  name: 'switchdemo',
  components: {
    BoSwitch,
    menuVertical
  },
  data () {
    return {

    }
  }
}
</script>
```
