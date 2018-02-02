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
import selectorItem from './selector-item'

export default {
  item: selectorItem,
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
      default: 'default' // check | check-right | box
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
    },
    unselected: { // 再次点击是否可以取消选中
      default: false
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
      if (this.unselected && (value.value === this.value)) {
        this.$emit('on-change', {})
        this.$emit('input', null)
      } else {
        this.$emit('on-change', value)
        this.$emit('input', value.value)
      }
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
      console.log('警告：selector:setValue()是一个向前兼容的方法，不推荐使用') // eslint-disable-line
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
