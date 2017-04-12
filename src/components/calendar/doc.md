## 组件属性

日历组件每个日期拥有三种状态
- 不可选择：disable
- 选中：active
- 反选中：unactive

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| currentMonth | 默认显示的月份 | Number | 本月 |
| currentDay | 默认选中的日 | Number | 当天 |
| mode | 选择模式，全部可选(all)，只可选今后包括今天(todayafter)，只可选择今后不包括今天(after) | String | all |
| disableDays | 不可选日期， ['2011-11-11', '2011-11-11'] | Array | [] |
| activeDays | 不可选日期， ['2011-11-11', '2011-11-11'] | Array | [] |

## 组件方法

| 方法名 | 说 明 | 参数 |
|-------|-------| --|
| setState(state) | 设置组件开关状态 | `true` `false` |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-click(state) | 点击事件 |  `true` or `false` |
