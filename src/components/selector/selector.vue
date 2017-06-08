<template lang="html">
<div class="selector" :class="['selector-'+size, 'selector-'+theme, underline!=''?'selector-underline':'']">
  <h3 class="selector-title" v-show="title!=''">
    {{title}}
  </h3>
  <ul class="selector-list" :style="listHeight">
    <li v-for="item in options"
        :class="[item.value==value?'selected':'']"
        @click="handleClick(item)"
    >
      {{item.text}}
    </li>
    <slot ref="options" />
  </ul>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      default: ''
    },
    theme: {
      type: String,
      default: 'default' // check |
    },
    underline: { // 选项是否有下划线
      default: false
    },
    size: { // 尺寸
      type: String,
      default: 'normal'
    },
    options: {
      type: Array,
      default() {
        /**
         * [{value,text}]
         */
        return []
      }
    },
    maxHeight: {
      default: ''
    }
  },
  computed: {
    listHeight() {
      if (this.maxHeight !== '') {
        return { height: this.maxHeight }
      }
      return {}
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    // console.log(this.$children.length) // eslint-disable-line
    this.updateSlot()
  },
  watch: {
    value() {
      this.updateSlot()
    }
  },
  methods: {
    /**
     * 选择事件
     */
    handleClick(value) {
      this.$emit('on-change', value)
      this.$emit('input', value.value)
    },
    /**
     * 获取输入值
     */
    getValue() {
      return this.value
    },
    /**
     * 获取输入值
     */
    setValue(val) {
      console.log('警告：selector:setValue()是一个向前兼容的方法，不推荐使用')
      this.$emit('input', val)
      // this.valueSelf = val
    },
    /**
     * 更新slot选项选中状态
     */
    updateSlot() {
      if (this.$children && this.$children.length > 0) {
        this.$children.forEach((item) => {
          /* eslint-disable */
          if (item.value === this.value) {
            item.selected = true
          } else {
            item.selected = false
          }
        })
      }
    }
  },
  components: {}
}
</script>
