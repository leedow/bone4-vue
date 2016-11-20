<template>
  <div class="">
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
      <list @list-loading="loading" mode="swipeDown">
        <li class="list-item list-item-arrow m1111" v-for="item in datas">
          <div class="card p2222">
            <div class="card-content">
              <p>
                {{item.content}}
              </p>
            </div>
          </div>
        </li>
      </list>
    </section>
  </div>
</template>
<style media="screen">

</style>
<script>
import List from './components/list/list.vue'


export default {
  components: {
    List
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
    loading (obj){

      setTimeout(()=>{
        this.datas.push({
          id: 2,
          content: '标题' + (this.datas.length+1)
        })
        obj.reset();
      },1000)

    }
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
