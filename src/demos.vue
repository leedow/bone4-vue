<template>
<div class="">
  <div class="list-title">基 础</div>
  <ul class="list list-box p0002">
    <dmenu path="/demo/buttons" name="按 钮" />
    <dmenu path="/demo/form" name="表 单" />
  </ul>
  <div class="list-title">列表&菜单</div>
  <ul class="list list-box p0002">
    <dmenu path="/demo/listdown" name="上拉刷新" />
    <dmenu path="/demo/listup" name="下拉刷新" />
    <dmenu path="/demo/tabs" name="选项卡" />
  </ul>

  <div class="list-title">信息提示</div>
  <ul class="list list-box p0002">
    <dmenu path="/demo/modal" name="对话框" />
  </ul>
</div>
</template>

<script>
import dmenu from './components/demohelper/demomenu.vue'

export default {
  name: 'menudemo',
  components: {
    dmenu
  },
  data () {
    return {

    }
  }
}
</script>
