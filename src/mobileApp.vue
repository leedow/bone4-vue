<template>
<page>

  <section class="layout-top">
    <header class="header">
      <div class="header-dock">
        <button><i class="icon iconfont icon-back"></i></button>
      </div>
      <div class="header-body">
        Card
      </div>
    </header>
  </section>
  <section class="layout-has-top">

  fsdfdsdfs

</section>
</page>
</template>
<style media="screen">

</style>
<script>
import Page from './components/page/page.vue'
export default {
  components: {
    Page
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
