<template>
  <div class="p2222">
    <div class="p1111">
      <btn size="lg" theme="primary-blank" block=true  name="普通操作" />
    </div>
    <div class="p1111">
      <btn size="lg" theme="primary" block=true  name="普通操作2"/>
    </div>
    <div class="p1111">
      <btn size="lg" theme="warm" block=true  name="警告操作" icon="safe"/>
    </div>
    <div class="p1111">
      <btn size="lg" theme="warm-blank" block=true  name="警告操作2" icon="safe"/>
    </div>
    <div class="p1111">
      <btn  theme="primary"   name="按 钮"/>
    </div>
    <div class="p1111">
      <btn size="sm"  theme="primary"   name="按 钮"/>
    </div>

  </div>
</template>

<script>
import Btn from './btn'
import eventbus from '../helper/eventbus'

export default {
  name: 'buttonDemo',
  components: {
    Btn
  },
  created() {
    eventbus.$on('on-submit', (msg) => {
        alert('触发表单' + msg); // eslint-disable-line
    })
  },
  data() {
    return {

    }
  }
}
</script>
