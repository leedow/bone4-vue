<template lang="html">
<div class="selector">
  <h3 class="selector-title" v-show="title!=''">
    {{title}}
  </h3>
  <ul class="selector-list">
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
    options: {
      type: Array,
      default() {
        /**
         * [{value,text}]
         */
        return []
      }
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
    }
  },
  components: {}
}
</script>
