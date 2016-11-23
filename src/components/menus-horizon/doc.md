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
<list class="list-box p0002">
  <li class="list-item">
    <menu-vertical icon="scan">
      <span slot="body">带图标</span>
    </menu-vertical>
  </li>
  <li class="list-item list-item-arrow">
    <menu-vertical icon="cascades">
      <p slot="body">带图标箭头</p>
    </menu-vertical>
  </li>
</list>

<list class="list-box p0002 m2000">
  <li class="list-item">
    <menu-vertical>
      <p slot="body">右侧停靠</p>
      <btn slot="dock" theme="blank" blank="true" name="Anything">
    </menu-vertical>
  </li>
  <li class="list-item">
    <menu-vertical>
      <p slot="body">右侧停靠</p>
      <i slot="dock" class="icon iconfont icon-roundcheckfill" style="font-size:24px;color:#3492e6"></i>
    </menu-vertical>
  </li>
  <li class="list-item list-item-arrow">
    <menu-vertical>
      <p slot="body">自定义内容 <span style="display:block;font-size:13px;color:#999">随便怎么加</span>  </p>
    </menu-vertical>
  </li>
</list>
```
