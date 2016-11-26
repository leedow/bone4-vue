## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| name |  按钮文字  | `String` | `''` |
| theme | 主题样式( `blank` `primary` `primary-blank` `warm` `warm-blank` `comfort` `comfort-blank` ) | `String` | `default` |
| size | 按钮尺寸（ `lg` `sm` `tiny` ） |   `String` | `default` |
| icon | 按钮图标  | `String` | `''` |
| block | - | `Boolean` | `false` |
| disable | 按钮是否可用 | `Boolean` | `false` |
| loading | 读取状态 | `Boolean` | `false` |
| submit | 如果指定该属性，按钮点击时将触发对应id的表单自检，检查通过后表单将产生一个 `form-submit` 事件 | `String` | `''` |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|--------|--------|
| on-click | 点击按钮 | `''` |



## 初始化

```
<btn theme="primary" size="lg" icon="scan" name="Primary" @btn-click="handleClick"/>
```
