<template>
  <div :class="[
      'be-' + state_
  ]">
    <input  class="input form-control"
            type="text"
            :name="name"
            :class="[
              'input-' + this.size,
              'input-' + this.theme
            ]"
            v-model="value_"
            :placeholder="holder"
          />
  </div>
</template>

<script>
import format from '../helper/format'

export default {
  name: 'formInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'default' //default|underline
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: 'normal' //normal|warm|pass|loading
    },
    enable: {
      type: Boolean,
      default: true
    },
    holder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: ''
    }
  },
  methods: {
    /**
     * 获取输入值
     */
    getValue (){
      return this.value_;
    },
    /**
     * 设置显示状态
     * @param state 'wrong'|'pass'|'loading'
     */
    setState (state){
      this.state_ = state;
    },
    /**
     * 出发验证，验证后将切换state状态
     * @return {state: boolean, msg: string}
     */
    verify (){
      let check = format.do(this.required, this.format, this.value_);
      if(check.state){
        this.setState('');
      } else {
        this.setState('wrong');
      }
      return check;
    }
  },
  data () {
    return {
      value_: this.value,
      state_: this.state,
    }
  }
}
</script>
