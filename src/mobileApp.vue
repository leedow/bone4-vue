<template>
<div class="">
  <section class="layout-top">
    <header class="header">
      <div class="header-body">
        Bone 4
      </div>
    </header>
  </section>
  <section class="layout-has-top">
    <router-view></router-view>
  </section>
  <section class="layout-bottom bor-top" style="background:#fff">
    <menus-horizon
      size="sm"
      current="like"
      :surface="[{
          icon: 'like',
          currentIcon: 'likefill',
          alias: 'like',
          title: '首 页'
        },{
          icon: 'time',
          currentIcon: 'timefill',
          alias: 'time',
          title: '组 件'
        },{
          icon: 'shop',
          currentIcon: 'shopfill',
          alias: 'shop',
          title: '关 于'
        }]"
    ></menus-horizon>
  </section>
</div>

</template>
<script>
import Page from './components/page/page.vue'
import menusHorizon from './components/menus-horizon/menus-horizon.vue'

export default {
  components: {
    menusHorizon
  },
  name: 'app',
  data () {
    return {
      datas: [
        {
          id: 1,
          content: '标题1'
        }
      ]
    }
  },
  methods: {

  },
  ready (){

  },
  created (){

  },
  watch: {
    //'$route': 'loadingMarkdown'
  }
}
</script>
