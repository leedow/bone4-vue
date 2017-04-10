## 组件属性

| 属性名      | 说 明      | 类 型 |默认值  |
| ---------- |-----------|------| -----|
| direaction | 滑动方向，x或y | `String` | `y` |
| mode | 滑动模式，linear（连续滑动）或drawer（抽屉滑动） | `String` | `linear` |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| getValue() | 获取输入值 |
| setState(state) | 设置输入框状态, `state` 可以为 `wrong` `pass`|
| verify() | 触发输入框验证，并改变输入框状态,返回`Object`  |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|------|




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
