<template>
  <div class="">


        <form-group :theme="theme" size="lg" name="testform" @on-submit="submit">

          <form-input
            label="手机号"
            holder="Phone"
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
          <div class="p0222">
              <btn theme="" :block=true size="lg" @on-click="changeTheme" name="切换风格"/>
          </div>

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
    },
    changeTheme (){
      if(this.theme == 'blank'){
        this.theme = 'head'
      } else {
        this.theme = 'blank'
      }
    }
  },
  data () {
    return {
      theme: 'blank'
    }
  }
}
</script>
