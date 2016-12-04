<template>
  <div class="">
    <div class="row p0010">
      <div class="col-md-6 p0100">
        <bo-input
          holder="Large Size"
          size="lg"
          icon="scan"
        />
        <bo-input
          holder="Default Size"
          :style="{marginTop:'10px'}"
          focus
        />
        <bo-input
          holder="Small Size"
          size="sm"
          :style="{marginTop:'10px'}"
        />
        <bo-input
          holder="Tiny Size"
          size="tiny"
          :style="{marginTop:'10px'}"
        />
      </div>
      <div class="col-md-6 p0001">
        <bo-input
          holder="请输入内容"
          size="lg"
          state="wrong"
          value="一段内容"
        />
        <bo-input
          holder="请输入内容"
          :style="{marginTop:'10px'}"
          state="wrong"
        />
        <bo-input
          holder="请输入内容"
          size="sm"
          :style="{marginTop:'10px'}"
          state="pass"
        />
        <bo-input
          holder="请输入内容"
          size="tiny"
          :style="{marginTop:'10px'}"
          state="pass"
        />
      </div>
    </div>

    <!--第二行-->
    <div class="row p1010">
      <div class="col-md-6 p0100">
        <bo-input
          holder="请输入内容"
          size="lg"
          theme="underline"
        />
        <bo-input
          holder="请输入内容"
          :style="{marginTop:'10px'}"
          state="wrong"
          theme="underline"
        />
        <bo-input
          holder="请输入内容"
          size="sm"
          :style="{marginTop:'10px'}"
          state="pass"
          theme="underline"
        />
        <bo-input
          holder="请输入内容"
          size="tiny"
          :style="{marginTop:'10px'}"
          state="pass"
          theme="underline"
        />
      </div>
      <div class="col-md-6 p0001">

      </div>
    </div>


    <div class="divi"></div>
    <div class="row">
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

    <div class="divi"></div>
    <div class="row">
      <bo-input
        holder="请输入内容"
        label="账 号"
        theme="head"
        size=""
      />
      <bo-input
        holder="请输入内容"
        label="密 码"
        theme="head"
        size=""
      />

    </div>


    <div class="divi">
      <bo-input
        ref="test"
        holder="只能输入非空手机号"
        :style="{marginTop:'20px'}"
        :required=true
        format="phone"
      />
      <div class="p1000 tl">
        <button @click="getValue"   class="btn btn-tiny btn-primary-blank">获取输入值</button>
        <button @click="setState('wrong')"  class="btn btn-tiny btn-primary-blank">置为警告</button>
        <button @click="setState('pass')"  class="btn btn-tiny btn-primary-blank">置为通过</button>
        <button @click="verify"  class="btn btn-tiny btn-primary-blank">验证</button>
      </div>
    </div>



  </div>
</template>

<script>
import BoInput from './bo-input.vue'

export default {
  name: '',
  components: {
    BoInput
  },
  methods: {
    getValue (){
      alert(this.$refs.test.getValue())
    },
    setState (state){
      this.$refs.test.setState(state)
    },
    verify (){
      alert(this.$refs.test.verify().msg);
    }
  },
  data () {
    return {

    }
  }
}
</script>
