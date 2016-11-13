## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| surface    | 菜单列表数据，格式为 ``[{alias, title, icon, link}]`` ,  `alias` 为 `title` 的别名, `icon` `link` 可以省略 | Array | `[ ]` |
| current   | 选中的菜单 `alias` 别名   | String  |   `''` |
| size | 尺寸( `default` , `sm` )     | String  | `'default'` |
| theme | 颜色主题（ `default` , `white` ） | String | `'default'` |
| curl | 开关状态 | Boolean | `false` |
| css | 自定义样式，开合过渡需要自定义 `width` | Object | `{}`  |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| setCurrent(alias) | 在组件外部设置选中菜单，改方法只产生选中效果，如需触发点击请使用 `triggerClick` |
| triggerClick(aim) | 程序触发某菜单点击， `aim` 如果是 `Number` 类型，将触发 `surface[aim]` 菜单点击，如果是 `String` 将触发 `alias` 为 `aim` 的菜单点击。

## 组件事件

| 事件名 | 说 明  |  传入参数 |
|-------|----------| ---|
| sidebar-click | 点击菜单事件 | 所点击菜单对象 `{alias, title...}`，其中包括任意额外自定义菜单属性 |


## 初始化
在展开状态组件的实际宽度由父容器决定，在缩放状态下宽度由自身样式决定。

```
<sidebar size="sm" curl=true theme="white"  current="a" :surface="[{
    alias: 'a',
    title: '选中菜单',
    icon: 'scan'
  }, {
    alias: 'b',
    title: '菜 单',
    icon: 'refresh'
  }, {
    alias: 'c',
    title: '菜 单',
    icon: 'add'
  }]"></sidebar>
```



### 打开和闭合

直接通过设置 `curl` 参数的值可以控制菜单开合，如果需要CSS3过渡效果，则需要为组件初始化一个默认宽度，而不是适应父容器宽度。

```
<sidebar :css="{width: '300px'}" :curl="curl" current="b" :surface="surface"></sidebar>
```

### 外部设置选中项

因为Vue2.0遵循单向数据库流的设计思想，在组件内部修改 `props` 会产生警告，因此 `current` 作为组件内外都可能被修改的属性只能通过父组件索引调用组件内部方法设置选中项，假设索引名为siebar。

```
<script>
this.$refs.sidebar.setCurrent(current) //current=true|false
</script>
```
