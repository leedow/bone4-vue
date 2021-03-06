## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| name | 商品名称 | `String` | `''` |
| content | 简介 | `String` | `''` |
| limit | 每人限购，为0时不限量 | `Number` | 0 |
| stock | 剩余库存，默认-1不限库存 | `Number` | -1 |
| amount | 当前购买数量 | `Number` | 0 |
| image | 商品图片 | `String` | `''` |
| ratio | 商品图片长宽(高/宽)比例 | `Number` | `''` |
| price | 商品价格 | `Number` | `''` |
| priceUnit | 商品价格单位（显示在价格后面） | `String` | `''` |
| pricePreUnit | 商品价格单位（显示在价格前面） | `String` | `'¥'` |
| oldprice | 商品原格 | `Number` | `''` |
| tip | 商品标题后小标内容 | `String` | `''` |
| flag | 商品图片小标 | `String` | `''` |
| unit | 单位 | `String` | `''` |
| surface | 完整的商品属性对象 | `Object` | `{}` |


## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| - | - |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-buy | 选择商品数量触发 | `this` |
| on-delete | 选择商品数量为0时触发 | `this` |
| on-limit | 达到商品购买上限数量触发 | `this` |
| on-click | 商品点击标题或者图片触发 | `this` |
