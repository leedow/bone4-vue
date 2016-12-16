## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| surface    | 菜单列表数据，格式为 ``[{alias, title, path}]`` ,  `alias` 为 `title` 的别名,  `path`可省略，若存在则自动跳转到对应路径 | Array | `[ ]` |
| theme | 主题颜色 `default` `dark` | String | default |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| setCurrent(alias) | 设置当前选中项 |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-click | 点击选项卡事件 | alias  |



## 初始化
```
<template>
  <div class="">
    <tabs
      current="like"
      @on-click="handleclick"
     :surface="[{
        alias: 'like',
        title: '收 藏'
      },{
        alias: 'time',
        title: '时光机'
      },{
        alias: 'shop',
        title: '小 摊'
      }]"></tabs>

      <div style="font-size: 34px;padding-top:130px;color:#999">
        {{content}}
      </div>
  </div>
</template>

<script>
import {Tabs} from 'bone4'

export default {
  name: 'tabsdemo',
  components: {
    Tabs
  },
  methods: {
    handleclick (item){
      this.content = item.alias
    }
  },
  data () {
    return {
        content: 'like'
    }
  }
}
</script>
```
