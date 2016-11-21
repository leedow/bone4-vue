## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| icon | 图标名 | String | '' |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| - | - |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| - | -|-|



## 初始化
因为该组件需要较强的定制灵活性以满足各种使用场景需求，因此需要人工对每个菜单(menu-item)元素进行单独初始化的工作，同时使用 `List` 组件进行垂直布局。
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
