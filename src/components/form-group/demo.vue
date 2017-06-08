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
            focus
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


          <bo-select
            label="选 择"
            for="testform"
            name="select"
            :required=true
            :options="[{
              text: 'One',
              value: 1
            },{
              text: 'Two',
              value: 2
            }]"
          />

          <div class="p2222">
              <btn theme="primary" :block=true size="lg" submit="testform" name="确 认"/>
          </div>
          <div class="p0222">
              <btn theme="" :block=true size="lg" @on-click="changeTheme" name="切换风格"/>
          </div>
        </form-group>

  </div>
</template>

<script>
import FormGroup from './form-group'
import FormInput from '../bo-input/bo-input'
import BoSelect from '../bo-select/bo-select'
import Btn from '../btn/btn'

export default {
  name: 'test1',
  components: {
    FormGroup,
    FormInput,
    BoSelect,
    Btn
  },
  methods: {
    submit(data) {
      console.log(data) // eslint-disable-line
    },
    changeTheme() {
      if (this.theme === 'blank') {
        this.theme = 'head'
      } else {
        this.theme = 'blank'
      }
    }
  },
  data() {
    return {
      theme: 'blank'
    }
  }
}
</script>
