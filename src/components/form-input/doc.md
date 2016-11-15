## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| name | 输入框name属性 | `String` | `''` |
| value | 输入框默认值 | `String` | `''` |
| theme | 主题样式 `default` `underline` `head` `blank` , 其中 `head` `blank` 定义了Label的样式，仅在显示Label时发挥作用 | `String` | `'default'` |
| size | 尺寸 `lg` `default` `sm` `tiny` | `String` | `'default'` |
| state | 默认显示状态 `normal` `wrong` `pass` | `String` | `'normal'` |
| holder | placeholder文字      | `String`  | `''`  |
| required | 是否为必填项  | `Boolean`  | `false` |
| format | 格式要求 `email` `phone` `float` `int`  | `String` | `''` |
| label | 如果需要显示label | `String` | `''` |
| for | 所属表单id，用于自动触发验证机制 | `String`  | `''`  |
## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| getValue() | 获取输入值 |
| setState(state) | 设置输入框状态, `state` 可以为 `wrong` `pass`|
| verify() | 触发输入框验证，并改变输入框状态  |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|




## 初始化

```
<form-input
      size="lg"
      theme="underline"
      holder="只能输入非空手机号"
      :required=true
      format="phone"
/>
```
