<template>
  <div v-if="label!=''"  class="form-item" :class="[
    'form-item-' + this.theme
  ]">
    <label :for="name" :class="['label-' + this.size]">{{label}}</label>
    <div :class="[
        'be-' + stateSelf,
        icon!=''?'has-icon':''
    ]">
      <input ref="input"  class="input form-control"
              type="text"
              :name="name"
              :class="[
                'input-' + this.size,
                'input-' + this.theme
              ]"
              v-model="valueSelf"
              :placeholder="holder"
            />
        <i v-if="icon!=''" class="icon iconfont" :class="['icon-'+icon]"></i>
    </div>
  </div>

  <div v-else class="form-item" :class="[
      'be-' + stateSelf,
      icon!=''?'has-icon':''
  ]">
    <input ref="input" class="input form-control"
            type="text"
            :name="name"
            :class="[
              'input-' + this.size,
              this.theme=='underline'?'input-' + this.theme:''
            ]"
            v-model="valueSelf"
            :placeholder="holder"
          />
        <i v-if="icon!=''" class="icon iconfont" :class="['icon-'+icon]"></i>
  </div>

</template>

<script>
import format from '../helper/format'
import eventbus from '../helper/eventbus'

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
      default: 'default' // default|underline
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
      default: 'normal' // normal|warm|pass|loading
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
    },
    label: {
      type: String,
      default: ''
    },
    for: {
      type: String,
      default: ''
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * 获取输入值
     */
    getValue() {
      return this.valueSelf
    },
    /**
     * 设置显示状态
     * @param state 'wrong'|'pass'|'loading'
     */
    setState(state) {
      this.stateSelf = state
    },
    /**
     * 出发验证，验证后将切换state状态
     * @return {state: boolean, msg: string}
     */
    verify() {
      const check = format.do(this.required, this.format, this.valueSelf)
      if (check.state) {
        this.setState('')
      } else {
        this.setState('wrong')
      }
      return check
    },
    formVerify(formid) {
      if (this.for === formid) {
        eventbus.$emit('input-verify', {
          formid,
          result: this.verify(),
          data: {
            name: this.name,
            value: this.valueSelf
          }
        })
      }
    }
  },
  created() {
    eventbus.$on('form-verify', this.formVerify)
  },
  beforeDestroy() {
    eventbus.$off('form-verify', this.formVerify)
  },
  mounted() {
    if (this.focus) {
      this.$refs.input.focus()
    }
  },
  watch: {
    value(newval) {
      this.valueSelf = newval
    }
  },
  data() {
    return {
      valueSelf: this.value,
      stateSelf: this.state
    }
  }
}
</script>
