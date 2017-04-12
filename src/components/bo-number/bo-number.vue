<template>
  <div class="flex-box number">
     <div class="flex-item">
       <button type="button" :class="['btn-icon', 'number-btn-'+this.leftBtnState]" @click="sub">
         <i class="icon iconfont icon-jian-xianxingyuankuang"></i>

       </button>
     </div>
     <div class="flex-item-1">
       <input type="text" readonly="" class="number-input flex-item-1" v-model="valueSelf">
     </div>
     <div class="flex-item">
       <button type="button" name="button" :class="['btn-icon', 'number-btn-'+this.rightBtnState]" @click="plus">
         <i class="icon iconfont icon-jia-yuankuang"></i>
       </button>
      </div>
   </div>
</template>

<script>

export default {
  name: 'boNumber',
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 9999
    },
    min: {
      type: Number,
      default: 0
    }
  },
  methods: {
    init() {
      if (this.valueSelf < this.min) {
        this.valueSelf = this.min
      }
      if (this.valueSelf > this.max) {
        this.valueSelf = this.max
      }
    },
    /**
     * 获取输入值
     */
    getValue() {
      return this.valueSelf
    },
    /**
     * 增加
     */
    plus() {
      if (this.valueSelf < this.max) {
        this.valueSelf = this.valueSelf - 0 + 1 //eslint-disable-line
      }
    },
    /**
     * 减法
     */
    sub() {
      if (this.valueSelf >= 1 && this.valueSelf > this.min) {
        this.valueSelf -= 1
      }
    },
    /**
     * 设置按钮状态
     * @params {Object} {'right':'active'}
     */
    setBtn(params) {
      if (params.right) {
        this.rightBtnState = params.right
      }
      if (params.left) {
        this.leftBtnState = params.left
      }
    }
  },
  created() {

  },
  beforeDestroy() {

  },
  mounted() {
    this.init()
  },
  watch: {
    valueSelf(newVal) {
      if (newVal >= this.max) {
        this.setBtn({
          right: 'disable'
        })
        this.setBtn({
          left: 'active'
        })
      } else if (newVal <= this.min) {
        this.setBtn({
          right: 'active'
        })
        this.setBtn({
          left: 'hidden'
        })
      } else {
        this.setBtn({
          right: 'active'
        })
        this.setBtn({
          left: 'active'
        })
      }
    }
  },
  data() {
    return {
      valueSelf: this.value,
      leftBtnState: 'active', // 按钮状态 active|hidden|disable
      rightBtnState: 'active'
    }
  }
}
</script>
