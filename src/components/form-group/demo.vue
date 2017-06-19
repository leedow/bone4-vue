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


          <form-input
            @on-click="openDrawer"
            label="模拟下拉"
            holder=""
            format="int"
            :required="true"
            name="boselect"
            icon="people"
            :enable="false"
          />


          <bo-select
            label="原生下拉"
            for="testform"
            name="select"
            value="1"
            :required=true
            :options="[{
              text: 'Item 1',
              value: 1
            },{
              text: 'Item 2',
              value: 2
            }]"
          />

        </form-group>

        <div class="p2222">
            <btn theme="primary" :block=true size="lg" submit="testform" name="确 认"/>
        </div>
        <div class="p2222">
            <btn theme="" :block=true size="lg" @on-click="changeTheme" name="切换风格"/>
        </div>

        <drawer :show="showDrawer" position="center">
          <selector
            v-model="sval"
            size="lg"
            underline=true
          >
             <selector-item text="Item 1" value="1" />
             <selector-item text="Item 2" value="2" />
          </selector>
        </drawer>

  </div>
</template>

<script>
import FormGroup from './form-group'
import FormInput from '../bo-input/bo-input'
import BoSelect from '../bo-select/bo-select'
import Btn from '../btn/btn'
import Drawer from '../drawer/drawer'
import Selector from '../selector/selector'
import SelectorItem from '../selector/selector-item'

export default {
  name: 'test1',
  components: {
    FormGroup,
    FormInput,
    BoSelect,
    Btn,
    Drawer,
    Selector,
    SelectorItem
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
    },
    openDrawer() {
      this.showDrawer = true
    }
  },
  data() {
    return {
      theme: 'blank',
      showDrawer: false,
      sval: ''
    }
  }
}
</script>
