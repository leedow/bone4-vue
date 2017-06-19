<template lang="html">
  <drawer :show="show" :position="position">
    <header class="header header-light">
      <div class="header-dock al">
        <button @click="close">取 消</button>
      </div>
      <div class="header-body">
        {{text}}
      </div>
      <div class="header-dock ar">
         <button @click="submit">确 定</button>
      </div>
    </header>
    <div class="flex-box">
      <div class="flex-item-1">
        <selector
            title="时"
            :value="hourSelf"
            :options="h"
            max-height="200px"
            @on-change="handleHourChange"
        />
      </div>
      <div class="flex-item-1">
        <selector
            title="分"
            :value="minutesSelf"
            :options="m"
            max-height="200px"
            @on-change="handleMinChange"
        />
      </div>
    </div>
  </drawer>
</template>

<script>
import Selector from '../selector/selector'
import Drawer from '../drawer/drawer'

export default {
  props: {
    position: {
      type: String,
      default: 'bottom'
    },
    time: {
      default: '00:00'
    },
    maxTime: {
      default: '23:59'
    },
    minTime: {
      default: '00:00'
    },
    minStep: { // 分钟间隔
      default: 5
    }
  },
  data() {
    return {
      show: false,
      hourSelf: this.time.split(':')[0],
      minutesSelf: this.time.split(':')[1]
    }
  },
  watch: {
    time(newval) {
      this.hourSelf = newval.split(':')[0]
      this.minutesSelf = newval.split(':')[1]
    }
  },
  computed: {
    h() {
      const h = []
      const hourMax = parseInt(this.maxTime.split(':')[0]) // eslint-disable-line
      const hourMin = parseInt(this.minTime.split(':')[0]) // eslint-disable-line
      for (let i = 0; i < 24; i += 1) {
        if (i >= hourMin && i <= hourMax) {
          h.push({
            value: i,
            text: this.trans(i)
          })
        }
      }
      return h
    },
    m() {
      const count = Math.ceil(60 / this.minStep)
      const m = []
      const hourMax = parseInt(this.maxTime.split(':')[0]) // eslint-disable-line
      const hourMin = parseInt(this.minTime.split(':')[0]) // eslint-disable-line
      const minMax = parseInt(this.maxTime.split(':')[1]) // eslint-disable-line
      const minMin = parseInt(this.minTime.split(':')[1]) // eslint-disable-line

      for (let i = 0; i < count; i += 1) {
        if (this.hourSelf === hourMin) {
          const min = i * this.minStep
          if (min >= minMin) {
            m.push({
              value: min,
              text: this.trans(min)
            })
          }
          if (this.minutesSelf < minMin) {
            this.minutesSelf = minMin
          }
        } else if (this.hourSelf === hourMax) {
          const min = i * this.minStep
          if (min <= minMax) {
            m.push({
              value: min,
              text: this.trans(min)
            })
          }
          if (this.minutesSelf > minMax) {
            this.minutesSelf = minMax
          }
        } else {
          m.push({
            value: i * this.minStep,
            text: this.trans(i * this.minStep)
          })
        }
      }
      return m
    },
    text() {
      return `${this.trans(this.hourSelf)}:${this.trans(this.minutesSelf)}`
    }
  },
  mounted() {},
  methods: {
    submit() {
      this.$emit('on-submit', {
        hour: this.hourSelf,
        minutes: this.minutesSelf,
        text: `${this.trans(this.hourSelf)}:${this.trans(this.minutesSelf)}`
      })
      this.close()
    },
    getValue() {
      return {
        hour: this.hourSelf,
        minutes: this.minutesSelf,
        text: this.text
      }
    },
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
    handleHourChange(data) {
      this.hourSelf = data.value
    },
    handleMinChange(data) {
      this.minutesSelf = data.value
    },
    trans(str) {
      str = str + '' //eslint-disable-line
      const s = `0${str}`
      return s.substring(str.length - 1, s.length)
    }
  },
  components: {
    Selector,
    Drawer
  }
}
</script>
