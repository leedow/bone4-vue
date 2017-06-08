<template>
<div class="">
  <div class="list-title">基 础</div>
  <ul class="list list-box p0002">
    <dmenu path="/mobile/demo/btn" name="按 钮"  />
    <dmenu path="/mobile/demo/form-group" name="表 单" />
    <dmenu path="/mobile/demo/phone-code" name="验证码" />
    <dmenu path="/mobile/demo/drawer" name="动效抽屉" />
    <dmenu path="/mobile/demo/touch" name="手势操作" />
    <dmenu path="/mobile/demo/slider" name="内容滚动" />
  </ul>
  <div class="list-title">输 入</div>
  <ul class="list list-box p0002">
    <dmenu path="/mobile/demo/form-group" name="表 单" />
   <dmenu path="/mobile/demo/form-group" name="表 单" />
   <dmenu path="/mobile/demo/bo-switch" name="滑动开关" />
   <dmenu path="/mobile/demo/bo-number" name="数字选择" />
   <dmenu path="/mobile/demo/calendar" name="日 历" />
   <dmenu path="/mobile/demo/bo-select" name="下拉菜单" />
   <dmenu path="/mobile/demo/selector" name="选择列表" />
   <dmenu path="/mobile/demo/selectorTime" name="时间选择" />
   <dmenu path="/mobile/demo/keyboard" name="数字键盘" />
  </ul>

  <div class="list-title">列表&菜单</div>
  <ul class="list list-box p0002">
    <dmenu path="/mobile/demo/listdown" name="上拉刷新" />
    <dmenu path="/mobile/demo/listup" name="下拉刷新" />
    <dmenu   name="主菜单"  dock="见本页下方"/>
    <dmenu path="/mobile/demo/tabs" name="选项卡" />
    <dmenu path="/mobile/demo/sidebar" name="侧栏菜单" />
  </ul>

  <div class="list-title">信息提示</div>
  <ul class="list list-box p0002">
    <dmenu path="/mobile/demo/modal" name="对话框" />
    <dmenu path="/mobile/demo/toast" name="轻提示" />
  </ul>

  <div class="list-title">其 他</div>
  <ul class="list list-box p0002">
    <dmenu path="/mobile/demo/slide" name="幻灯片" />
    <dmenu path="/mobile/demo/stars" name="评分" />
    <dmenu path="/mobile/demo/login" name="APP登录" />
    <dmenu path="/mobile/demo/car" name="商品列表" />
    <dmenu path="/mobile/demo/seller" name="电商首页" />
    <dmenu path="/mobile/demo/map" name="地图收货地址" />
  </ul>
</div>
</template>

<script>
import dmenu from './components/demohelper/demomenu'

export default {
  name: 'menudemo',
  components: {
    dmenu
  },
  data() {
    return {

    }
  }
}
</script>
