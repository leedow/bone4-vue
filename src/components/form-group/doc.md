## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| name   |  组件唯一名称，子输入组件将通过该名称注册到表单组件 | String | '' |
| theme | 主题样式，目前支持手机端样式 `head` `blank` ，其作用和输入组件的主题效果相同，但通过统一为子组件设置样式更加方便 |  String | 'defaut'  |
|size  | 控制子输入组件大小，子输入组件size为默认时大小将继承该组件 | String | 'default' |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| -  | -|

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-submit | 当组件数据校验通过时出发表单提交事件 | `data`为表单数据，格式为 `{name:value,...}` |




## 例 子
由于Vue2.0取消了原有的消息传递机制，因此表单组件无法直接通过消息派发触发输入组件的自检，并搜集表单数据。

如需要使用表单自动提交功能需为 `form-group` 定义 `name` ，并通过输入组件的 `for` 属性将其注册到父z'ju'ji
```
<form-group theme="blank" size="lg" name="testform" @form-submit="submit">

  <form-input
    label="手机号"
    holder="输入手机号"
    format="phone"
    :required="true"
    for="testform"
    name="phone"
  />

  <form-input
    label="邮 箱"
    holder="输入邮箱"
    format="email"
    :required="true"
    for="testform"
    name="email"
  />

  <form-input
    label="小 数"
    holder="输入小数"
    format="float"
    :required="true"
    for="testform"
    name="float"
  />

  <form-input
    label="整 数"
    holder="输入整数"
    format="int"
    :required="true"
    for="testform"
    name="int"
  />
  <div class="p2222">
      <btn theme="primary" :block=true size="lg" submit="testform" name="确 认"/>
  </div>

</form-group>
```
