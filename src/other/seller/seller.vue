<template>
  <div  >
    <section class="layout-top">
      <header class="header header-opacity header-search">
        <div class="header-body">
          <bo-input size="sm" icon="search" holder="请输入搜索内容"/>
        </div>
      </header>
    </section>
    <section class="layout-main">
      <slide :surface="[{imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/2.png?870bbc643c89ab370522a8eea9cf4985'},
      {imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/1.png?99a3d4cc476cce3ed4826cd912b12876'},
      {imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/3.png?b13d9da72fe03c029ff79e1720a318b7'}]"/>
      <div class="bor-bottom bor-top p2020" style="background:#fff;">
        <nav class="menu-horizon menu-horizon-circle  ">
          <button class="menu-horizon-item">
            <span class="menu-pic" style="background:#FFB30F" ><i  class="icon iconfont icon-creative"></i></span>
            <span class="menu-title">肉类精选</span>
          </button>
          <button class="menu-horizon-item">
            <span class="menu-pic" style="background:#34ad8f" ><i  class="icon iconfont icon-scan"></i></span>
            <span class="menu-title">粮油米面</span>

          </button>
          <button class="menu-horizon-item">
            <span class="menu-pic" style="background:#3492e6"><i   class="icon iconfont icon-favor"></i></span>
            <span class="menu-title">果蔬副食</span>
          </button>
          <button class="menu-horizon-item">
            <span class="menu-pic" style="background:#FFB30F"><i   class="icon iconfont icon-favor"></i></span>
            <span class="menu-title">名茶名酒</span>
          </button>
        </nav>
      </div>
      <div class="bor-bottom bor-top p0020" style="background:#fff;">
        <nav class="menu-horizon menu-horizon-circle">
          <button class="menu-horizon-item">
            <span class="menu-pic" style="background:#FFB30F" ><i  class="icon iconfont icon-creative"></i></span>
            <span class="menu-title">野生特产</span>
          </button>
          <button class="menu-horizon-item">
            <span class="menu-pic"  style="background:#3492e6" ><i  class="icon iconfont icon-scan"></i></span>
            <span class="menu-title">水产极品</span>

          </button>
          <button class="menu-horizon-item">
            <span class="menu-pic" style="background:#34ad8f"><i   class="icon iconfont icon-favor"></i></span>
            <span class="menu-title">滋补保健</span>
          </button>
          <button class="menu-horizon-item">
            <span class="menu-pic" style="background:#34ad8f"><i   class="icon iconfont icon-favor"></i></span>
            <span class="menu-title">工艺礼品</span>
          </button>
        </nav>
      </div>



    </section>
    <toast ref="toast"  :type="type" :content="content"/>
  </div>
</template>

<script>
import FormGroup from '../../components/form-group/form-group.vue'
import Slide from '../../components/slide/slide.vue'
import BoInput from '../../components/bo-input/bo-input.vue'
import Btn from '../../components/btn/btn.vue'
import Toast from '../../components/toast/toast.vue'
import MenusHorizon from '../../components/menus-horizon/menus-horizon.vue'

export default {
  name: 'login',
  components: {
    FormGroup,
    BoInput,
    Btn,
    Toast,
    Slide,
    MenusHorizon
  },
  props: {


  },
  methods: {

  },
  data () {
    return {

      type: 'warm'
    }
  }
}
</script>
