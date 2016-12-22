## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| name  | 指定对话框名字，在同页面公用组件处理不同情形时区分业务场景可用 | String | ''|
| show | 是否显示  | Boolean | false |
| type | `alert` `confirm` | String | 'confirm' |
| buttons | 默认按钮名称 | Array | ['确 定', '取 消'] |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| -| -|

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-confirm | 点击确认事件 |  this.name |
| on-cancel | 点击取消事件 | this.name |




## 初始化
```
<modal :show="show" @on-confirm="show=false" @on-cancel="show=false" :type="type" >Hello world!</modal>
```
