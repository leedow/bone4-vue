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
import BoInput from './bo-input'

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
