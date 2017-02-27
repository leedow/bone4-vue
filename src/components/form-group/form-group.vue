<template>
  <div class="form" :class="[
    'form-' + theme,
    'form-' + size
  ]">
    <slot></slot>
  </div>
</template>

<script>
import eventbus from '../helper/eventbus'

export default {
  name: 'formGroup',
  props: {
    name: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    /**
     * 处理来自submit btn的事件
     */
    btnSubmit(formid) {
      if (formid === this.name) {
        this.pass = true
        eventbus.$emit('form-verify', formid)

        if (this.pass) {
          this.$emit('on-submit', this.data)
        }
      }
    },
    /**
     * 处理来自输入组件的验证数据
     */
    receiveInputData(data) {
      if (data.data.name === '' || data.data.name === undefined) {
        this.pass = false
        return
      }

      if (data.formid === this.name) {
        // 如果验证通过
        if (data.result.state) {
          this.data[data.data.name] = data.data.value
        } else {
          this.pass = false
          delete this.data[data.data.name]
        }
      }
    }
  },
  created() {
    eventbus.$on('btn-submit', this.btnSubmit)
    eventbus.$on('input-verify', this.receiveInputData)
  },
  beforeDestroy() {
    eventbus.$off('btn-submit', this.btnSubmit)
    eventbus.$off('input-verify', this.receiveInputData)
  },
  data() {
    return {
      data: {},
      pass: true
    }
  }
}
</script>
