<template>
  <ul class="list list-box p0002">
    <li class="list-item">
      <menu-vertical>
        <span slot="body">值 {{val}}</span>
        <span slot="dock" style="padding-right: 20px;">
          <bo-number max="5" value="0" @on-change="change"/>
        </span>
      </menu-vertical>
    </li>
    <li class="list-item">
      <menu-vertical>
        <span slot="body">大小上下限 {{val2}}</span>
        <span slot="dock" style="padding-right: 20px;">
          <bo-number max="5" min="2" v-model="val2" @on-max="max" @on-min="min"/>
        </span>
      </menu-vertical>
    </li>
    <li class="list-item">
      <menu-vertical>
        <span slot="body">数据回滚</span>
        <span slot="dock" style="padding-right: 20px;">
          <bo-number ref="number" :value="val3" @on-change="rollback"/>
        </span>
      </menu-vertical>
    </li>
  </ul>
</template>

<script>
import BoNumber from './bo-number'
import menuVertical from '../menu-vertical/menu-vertical'

export default {
  name: '',
  components: {
    BoNumber,
    menuVertical
  },
  methods: {
    change(val) {
      this.val = val
    },
    max() {
      this.$toast.open('已到最大值')
    },
    min() {
      this.$toast.open('到最小值')
    },
    rollback() {
      this.$toast.open('1S后回滚')
      setTimeout(() => {
        this.$refs.number.rollback()
      }, 1000)
    }
  },
  data() {
    return {
      val: 1,
      val2: 2,
      val3: 1
    }
  }
}
</script>
