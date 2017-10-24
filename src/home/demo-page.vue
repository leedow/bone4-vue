<template>
  <div class="">
    <section class="layout-top">
      <header class="header">
        <div class="header-dock al">
          <router-link to="/mobile/demos"><i class="icon iconfont icon-back"></i></router-link>
        </div>
        <div class="header-body">
          {{currentComponent}}
        </div>
      </header>
    </section>
    <section class="layout-has-top">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// Mobile Demo演示页框架
export default {
  name: 'menudemo',
  components: {

  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.currentComponent = this.$route.path.replace('/mobile/demo/', '')
    }
  },
  watch: {
    $route: 'init'
  },
  data() {
    return {
      currentComponent: ''
    }
  }
}
</script>
