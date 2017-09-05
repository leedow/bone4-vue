<template>
  <ul class="list list-box p0002">
    <li class="list-item">
      <menu-vertical>
        <span slot="body">
          <animate-number :number="val"/>
        </span>
      </menu-vertical>
    </li>
  </ul>
</template>

<script>
import AnimateNumber from './animate-number'
import menuVertical from '../menu-vertical/menu-vertical'

export default {
  name: '',
  components: {
    AnimateNumber,
    menuVertical
  },
  mounted() {
    setInterval(() => {
      this.val += 10
    }, 2000)
  },
  methods: {
    change(val) {
      this.val = val
    }
  },
  data() {
    return {
      val: 1
    }
  }
}
</script>
