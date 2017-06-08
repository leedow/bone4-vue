## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| name | 输入框name属性 | `String` | `''` |
| value | 输入框默认值，可以通过`v-model`进行双向绑定 | - | `''` |
| theme | 主题样式 `default` `underline` `head` `blank` , 其中 `head` `blank` 定义了Label的样式，仅在显示Label时发挥作用 | `String` | `'default'` |
| size | 尺寸 `lg` `default` `sm` `tiny` | `String` | `'default'` |
| state | 默认显示状态 `normal` `wrong` `pass` | `String` | `'normal'` |
| holder | placeholder文字      | `String`  | `''`  |
| required | 是否为必填项  | `Boolean`  | `false` |
| format | 格式要求 `email` `phone` `float` `int`  | `String` | `''` |
| label | 如果需要显示label | `String` | `''` |
| for | 所属表单id，用于自动触发验证机制，详情见表单的例子 | `String`  | `''`  |
| icon | 右侧图标 | `String` | `''` |
| focus | 是否默认显示为聚焦状态 | `Boolean` | `false` |

## 组件方法

| 方法名 | 说 明 |
|-------|-------|
| getValue() | 获取输入值 |
| setState(state) | 设置输入框状态, `state` 可以为 `wrong` `pass`|
| verify() | 触发输入框验证，并改变输入框状态,返回`Object`  |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| - | - | - |




## 初始化

```
<template>
  <div class="">
    <div class="p2222">
      <div class="tl">
        {{val}}
      </div>
      <bo-input
        ref="test"
        holder="请输入内容"
        :required=true
        size="lg"
        v-model="val"
        focus
      />
      <div class="p1000 tl">
        <button @click="getValue"   class="btn btn-tiny btn-primary-blank">获取输入值</button>
        <button @click="setState('wrong')"  class="btn btn-tiny btn-primary-blank">置为警告</button>
        <button @click="setState('pass')"  class="btn btn-tiny btn-primary-blank">置为通过</button>
        <button @click="verify"  class="btn btn-tiny btn-primary-blank">验证</button>
      </div>
    </div>

    <div class="row p2222">
        <bo-input
          holder="Large Size"
          size="lg"
          icon="scan"
        />
        <bo-input
          holder="请输入内容"
          size="lg"
          state="wrong"
          value="一段内容"
          :style="{marginTop:'10px'}"
        />
    </div>

    <!--第二行-->
    <div class="row p1010">
        <bo-input
          holder="请输入内容"
          size="lg"
          theme="underline"
        />
        <bo-input
          holder="请输入内容"
          :style="{marginTop:'10px'}"
          state="pass"
          size="lg"
          theme="underline"
        />
    </div>
    <div class="row p2000">
      <bo-input
        holder="请输入内容"
        label="账 号"
        theme="blank"
        size="lg"

      />
      <bo-input
        holder="请输入内容"
        label="密 码"
        theme="blank"
        size="lg"
      />
    </div>
    <div class="row p2000">
      <bo-input
        holder="请输入内容"
        label="账 号"
        theme="head"
        size="lg"
      />
      <bo-input
        holder="请输入内容"
        label="密 码"
        theme="head"
        size="lg"
      />
    </div>
  </div>
</template>
<script>
import {BoInput} from 'bone4'

export default {
  name: '',
  components: {
    BoInput
  },
  methods: {
    getValue() {
      alert(this.$refs.test.getValue());// eslint-disable-line
    },
    setState(state) {
      this.$refs.test.setState(state);// eslint-disable-line
    },
    verify() {
      alert(this.$refs.test.verify().msg);// eslint-disable-line
    }
  },
  data() {
    return {
      val: 'hello world'
    }
  }
}
</script>

```
