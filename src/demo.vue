<template>

      <div class="">


    <section class="layout-top">
      <header class="header">
        <div class="header-dock al">
          <router-link to="/demos"><i class="icon iconfont icon-back"></i></router-link>

        </div>
        <div class="header-body">
          name
        </div>
      </header>
    </section>
    <section class="layout-has-top">

      <router-view></router-view>


    </section>
    </div>

</template>

<script>

export default {
  name: 'menudemo',
  components: {

  },
  created (){
    this.currentComponent = this.$route.params.name;
  },
  data () {
    return {
      currentComponent: ''
    }
  }
}
</script>
