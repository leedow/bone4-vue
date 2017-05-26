<template>
<div class="">
  <div class="list-title">基 础</div>
  <ul class="list list-box p0002">
    <dmenu path="/demo/btn" name="按 钮"  />
    <dmenu path="/demo/form-group" name="表 单" />
    <dmenu path="/demo/phone-code" name="验证码" />
    <dmenu path="/demo/drawer" name="动效抽屉" />
    <dmenu path="/demo/touch" name="手势操作" />
    <dmenu path="/demo/slider" name="内容滚动" />
  </ul>
  <div class="list-title">输 入</div>
  <ul class="list list-box p0002">

    <dmenu path="/demo/form-group" name="表 单" />
   <dmenu path="/demo/bo-switch" name="滑动开关" />
   <dmenu path="/demo/number" name="数字选择" />
   <dmenu path="/demo/calendar" name="日 历" />
   <dmenu path="/demo/bo-select" name="下拉菜单" />
   <dmenu path="/demo/selector" name="选择列表" />
   <dmenu path="/demo/selectorTime" name="时间选择" />
   <dmenu path="/demo/keyboard" name="数字键盘" />
  </ul>

  <div class="list-title">列表&菜单</div>
  <ul class="list list-box p0002">
    <dmenu path="/demo/listdown" name="上拉刷新" />
    <dmenu path="/demo/listup" name="下拉刷新" />
    <dmenu   name="主菜单"  dock="见本页下方"/>
    <dmenu path="/demo/tabs" name="选项卡" />
    <dmenu path="/demo/sidebar" name="侧栏菜单" />
  </ul>

  <div class="list-title">信息提示</div>
  <ul class="list list-box p0002">
    <dmenu path="/demo/modal" name="对话框" />
    <dmenu path="/demo/toast" name="轻提示" />
  </ul>

  <div class="list-title">其 他</div>
  <ul class="list list-box p0002">
    <dmenu path="/demo/slide" name="幻灯片" />
    <dmenu path="/demo/stars" name="评分" />
    <dmenu path="/demo/login" name="APP登录" />
    <dmenu path="/demo/car" name="商品列表" />
    <dmenu path="/demo/seller" name="电商首页" />
    <dmenu path="/demo/map" name="地图收货地址" />
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
