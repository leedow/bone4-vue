<template>
  <div class="flex-box number">
     <div class="flex-item">
       <button type="button" :class="['btn-icon', 'number-btn-'+this.leftBtnState]" @click="sub">
         <i class="icon iconfont icon-jian-xianxingyuankuang"></i>
       </button>
     </div>
     <div class="flex-item-1">
       <input type="text" readonly="" :class="['number-input', 'flex-item-1', valueSelf==0?'number-input-hidden':'']" v-model="valueSelf">
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
    /**
     * 获取输入值
     */
    getValue() {
      return this.valueSelf
    },
    getOldValue() {
      return this.valueSelf
    },
    /**
     * 增加
     */
    plus() {
      if (this.valueSelf < this.max) {
        this.valueSelf = this.valueSelf - 0 + 1 //eslint-disable-line
        this.$emit('on-change', this.valueSelf)
        this.$emit('input', this.valueSelf)
      } else {
        this.$emit('on-max', this.valueSelf)
      }
    },
    /**
     * 减法
     */
    sub() {
      if (this.valueSelf >= 1 && this.valueSelf > this.min) {
        this.valueSelf -= 1
        this.$emit('on-change', this.valueSelf)
        this.$emit('input', this.valueSelf)
      } else {
        this.$emit('on-min', this.valueSelf)
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
    },
    /**
     * 回滚到上个值
     */
    rollback() {
      this.valueSelf = this.valueOld
    },
    fresh(val) {
      console.log('fresh') // eslint-disable-line

      const newVal = val || this.valueSelf

      if (this.valueSelf < this.min) {
        this.valueSelf = this.min
      }
      if (this.valueSelf > this.max) {
        this.valueSelf = this.max
      }
      if (this.valueSelf === 0) {
        this.setBtn({
          left: 'hidden'
        })
      }

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
  created() {
    this.fresh()
  },
  watch: {
    max() {
      setTimeout(() => {
        this.fresh()
      }, 1)
    },
    min() {
      this.fresh()
    },
    valueSelf(newVal, oldVal) {
      this.valueOld = oldVal
      this.fresh(newVal)
    },
    value(newval) {
      this.valueSelf = newval
    }
  },
  data() {
    return {
      valueSelf: this.value,
      valueOld: this.value,
      leftBtnState: 'active', // 按钮状态 active|hidden|disable
      rightBtnState: 'active'
    }
  }
}
</script>
