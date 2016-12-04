## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| surface    | 菜单列表数据，格式为 ``[{alias, title, icon, link}]`` ,  `alias` 为 `title` 的别名, `icon` `path` 可以省略 | Array | `[ ]` |

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
    <div style="font-size: 34px;padding-top:150px;color:#999">
      {{content}}
    </div>
    <div class="layout-bottom bor-top" style="background:#fff">
      <menus-horizon
        size="sm"
        current="like"
        @on-click="handleclick"
        :surface="[{
            icon: 'like',
            currentIcon: 'likefill',
            alias: 'like',
            title: '收 藏'
          },{
            icon: 'time',
            currentIcon: 'timefill',
            alias: 'time',
            title: '时光机'
          },{
            icon: 'shop',
            currentIcon: 'shopfill',
            alias: 'shop',
            title: '小 摊'
          }]"
      ></menus-horizon>
    </div>

  </div>
</template>

<script>
import {MenusHorizon, Btn} from 'bone4'

export default {
  name: 'menudemo',
  components: {
    MenusHorizon,
    Btn
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
