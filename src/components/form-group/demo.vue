<template>
  <div class="">
    <form-group id="testform" @form-submit="submit">

      <form-input
        holder="输入手机号"
        format="phone"
        :required="true"
        for="testform"
        name="phone"
      />

      <form-input
        holder="输入邮箱"
        format="email"
        :required="true"
        for="testform"
        name="email"
      />

      <form-input
        holder="输入小数"
        format="float"
        :required="true"
        for="testform"
        name="float"
      />

      <form-input
        holder="输入整数"
        format="int"
        :required="true"
        for="testform"
        name="int"
      />

      <btn theme="primary" submit="testform" name="确 认" :style="{marginTop: '10px', float: 'left'}"/>
    </form-group>

    <div class="divi">

    </div>




  </div>
</template>

<script>
import FormGroup from './form-group.vue'
import FormInput from '../form-input/form-input.vue'
import Btn from '../btn/btn.vue'

export default {
  name: 'test1',
  components: {
    FormGroup,
    FormInput,
    Btn
  },
  methods: {
    submit (data){
      console.log(data)
    }
  },
  data () {
    return {

    }
  }
}
</script>
