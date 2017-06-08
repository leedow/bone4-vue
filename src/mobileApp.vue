<template>
<div class="" >
  <section class="layout-top">
    <header class="header">
      <div class="header-body">
        Bone 4
      </div>
    </header>
  </section>
  <section class="layout-has-top layout-main">
      <router-view></router-view>
  </section>
  <section class="layout-bottom bor-top" style="background-color:#fff">
    <menus-horizon
      size="sm"
      :current="this.$route.path"
      :surface="[{
          icon: 'like',
          currentIcon: 'likefill',
          alias: '/home',
          title: '首 页'
        },{
          icon: 'time',
          currentIcon: 'timefill',
          alias: '/mobile/demos',
          title: '组 件',
          tip: tip,
          path: '/mobile/demos'
        },{
          icon: 'shop',
          currentIcon: 'shopfill',
          alias: '/about',
          title: '关 于'
        }]"
    ></menus-horizon>
  </section>
</div>

</template>
<script>
import menusHorizon from './components/menus-horizon/menus-horizon'

export default {
  components: {
    menusHorizon
  },
  name: 'app',
  data() {
    return {
      datas: [
        {
          id: 1,
          content: '标题1'
        }
      ],
      tip: 1
    }
  },
  methods: {

  },
  mounted() {
    setTimeout(() => {
      this.tip = 2
    }, 1000)
  },
  created() {

  },
  watch: {
    // '$route': 'loadingMarkdown'
  }
}
</script>
