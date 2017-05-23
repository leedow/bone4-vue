<template lang="html">
<div class="selector" :class="['selector-'+size, 'selector-'+theme, underline!=''?'selector-underline':'']">
  <h3 class="selector-title" v-show="title!=''">
    {{title}}
  </h3>
  <ul class="selector-list" :style="listHeight">
    <li v-for="item in options"
        :class="[item.value==valueSelf?'selected':'']"
        @click="handleClick(item)"
    >
      {{item.text}}
    </li>
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
      valueSelf: this.value
    }
  },
  mounted() {},
  methods: {
    /**
     * 选择事件
     */
    handleClick(value) {
      this.valueSelf = value.value
      this.$emit('on-change', value)
    },
    /**
     * 获取输入值
     */
    getValue() {
      return this.valueSelf
    },
    /**
     * 获取输入值
     */
    setValue(val) {
      this.valueSelf = val
    }
  },
  components: {}
}
</script>
