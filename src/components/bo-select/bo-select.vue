<template>
  <div v-if="label!=''"  class="form-item" :class="[
    'form-item-' + this.theme
  ]">
    <label :for="name" :class="['label-' + this.size]">{{label}}</label>
    <div :class="[
        'be-' + state_,
        icon!=''?'has-icon':''
    ]">
        <select  class="select form-control"
            :name="name"
            :class="[
              'select-' + this.size,
              this.theme=='underline'?'select-' + this.theme:''
            ]"
            v-model="value_"
        >
          <option v-for="item in options" :value="item.value">
            {{item.text}}
          </option>
        </select>
        <i v-if="icon!=''" class="icon iconfont" :class="['icon-'+icon]"></i>
    </div>
  </div>

  <div v-else class="form-item" :class="[
      'be-' + state_,
      icon!=''?'has-icon':''
  ]">
    <select  class="select form-control"
        :name="name"
        :class="[
          'select-' + this.size,
          this.theme=='underline'?'select-' + this.theme:''
        ]"
        v-model="value_"
    >
      <option v-for="item in options" :value="item.value">
        {{item.text}}
      </option>
    </select>
    <i v-if="icon!=''" class="icon iconfont" :class="['icon-'+icon]"></i>
  </div>

</template>

<script>
import format from '../helper/format'
import eventbus from '../helper/eventbus'

export default {
  name: 'boselect',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default (){
        return []
      }
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
      default: 'unfold'
    },
    state: {
      type: String,
      default: 'normal' //normal|warm|pass|loading
    },
    enable: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    for: {
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
     * 触发验证，验证后将切换state状态
     * @return {state: boolean, msg: string}
     */
    verify (){
      let check = format.do(this.required, '', this.value_);
      if(check.state){
        this.setState('');
      } else {
        this.setState('wrong');
      }
      return check;
    },
    formVerify (formid){
      //console.log(this.verify())
      if(this.for == formid){
        eventbus.$emit('input-verify', {
          formid: formid,
          result: this.verify(),
          data: {
            name: this.name,
            value: this.value_
          }
        })
      }
    }
  },
  created (){
    eventbus.$on('form-verify', this.formVerify)
  },
  beforeDestroy () {
    eventbus.$off('form-verify', this.formVerify)
  },
  watch: {
    value (newval , oldval){
      this.value_ = newval
    }
  },
  data () {
    return {
      value_: this.value,
      state_: this.state
    }
  }
}
</script>
