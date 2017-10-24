<template>
  <div>
    <ul class="list list-box p0002">
      <li class="list-item">
        <menu-vertical>
          <span slot="body">默认(打开)</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">默认(关闭)</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch :value="false"/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">带文字</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch :value="false" :show-tag="true" />
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">自定义文字</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch :show-tag="true" :tag="['ON', 'OFF']"/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">异步修改状态</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch v-model="state"/>
          </span>
        </menu-vertical>
      </li>
    </ul>
  </div>
</template>

<script>
import BoSwitch from './bo-switch'
import menuVertical from '../menu-vertical/menu-vertical'

export default {
  name: 'switchdemo',
  components: {
    BoSwitch,
    menuVertical
  },
  mounted() {
    setTimeout(() => {
      this.state = true
    }, 1000)
  },
  data() {
    return {
      state: false
    }
  }
}
</script>
