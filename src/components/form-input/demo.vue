<template>
  <div class="">
    <div class="row p0010">
      <div class="col-md-6 p0100">
        <form-input
          holder="Large Size"
          size="lg"
        />
        <form-input
          holder="Default Size"
          :style="{marginTop:'10px'}"
        />
        <form-input
          holder="Small Size"
          size="sm"
          :style="{marginTop:'10px'}"
        />
        <form-input
          holder="Tiny Size"
          size="tiny"
          :style="{marginTop:'10px'}"
        />
      </div>
      <div class="col-md-6 p0001">
        <form-input
          holder="请输入内容"
          size="lg"
          state="wrong"
          value="一段内容"
        />
        <form-input
          holder="请输入内容"
          :style="{marginTop:'10px'}"
          state="wrong"
        />
        <form-input
          holder="请输入内容"
          size="sm"
          :style="{marginTop:'10px'}"
          state="pass"
        />
        <form-input
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
        <form-input
          holder="请输入内容"
          size="lg"
          theme="underline"
        />
        <form-input
          holder="请输入内容"
          :style="{marginTop:'10px'}"
          state="wrong"
          theme="underline"
        />
        <form-input
          holder="请输入内容"
          size="sm"
          :style="{marginTop:'10px'}"
          state="pass"
          theme="underline"
        />
        <form-input
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
      <form-input
        holder="请输入内容"
        label="账 号"
        theme="blank"
        size="lg"
      />
      <form-input
        holder="请输入内容"
        label="密 码"
        theme="blank"
        size="lg"
      />

    </div>

    <div class="divi"></div>
    <div class="row">
      <form-input
        holder="请输入内容"
        label="账 号"
        theme="head"
        size=""
      />
      <form-input
        holder="请输入内容"
        label="密 码"
        theme="head"
        size=""
      />

    </div>

   
    <div class="divi">
      <form-input
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
import FormInput from './form-input.vue'

export default {
  name: '',
  components: {
    FormInput
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
