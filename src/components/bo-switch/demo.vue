<template>
  <div class="">
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
            <bo-switch :state="false"/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">带文字</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch :state="false" show-tag=true/>
          </span>
        </menu-vertical>
      </li>
      <li class="list-item">
        <menu-vertical>
          <span slot="body">自定义文字</span>
          <span slot="dock" style="padding-right: 20px;">
            <bo-switch show-tag=true :tag="['ON', 'OFF']"/>
          </span>
        </menu-vertical>
      </li>
    </ul>
  </div>
</template>

<script>
import BoSwitch from './bo-switch.vue'
import Dmenu from '../demohelper/demoswitch.vue'
import menuVertical from '../menu-vertical/menu-vertical.vue'

export default {
  name: 'switchdemo',
  components: {
    BoSwitch,
    menuVertical
  },
  data () {
    return {

    }
  }
}
</script>
