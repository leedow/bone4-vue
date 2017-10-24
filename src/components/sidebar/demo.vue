<template>
  <div>
    <div class="row ">
      <div  style="width: 30%;float:left">
        <sidebar ref="side" current="a" :surface="surface1"></sidebar>
      </div>
      <div  style="width: 48%;float:left" class="p0002">
        <sidebar current="b" :surface="surface"></sidebar>
      </div>
      <div  style="width: 20%;float:left" class="p0002">
        <sidebar :curl=true current="b" :surface="surface"></sidebar>
      </div>
    </div>


    <!--white theme-->
    <div class="row m2000">
      <div  style="width: 30%;float:left">
        <sidebar theme="white" size="sm" current="a" >
          <sidebar-item
            v-for="item in surface"
            :alias="item.alias"
            :title="item.title"
            :icon="item.icon"
          />
        </sidebar>
      </div>
      <div  style="width: 48%;float:left" class="p0002">
        <sidebar  theme="white" size="sm"  current="a" :surface="surface"></sidebar>
      </div>
      <div  style="width: 20%;float:left" class="p0002">
        <sidebar :curl=true  theme="white" size="sm"  current="b" :surface="surface"></sidebar>
      </div>
    </div>

    <div class="divi">

    </div>


    <sidebar :css="{width: '300px'}" :curl="curl" current="b" :surface="surface"></sidebar>
    <div class="p2000" style="text-align:left">
      <button @click="setCurl(true)" type="button" name="button" class="btn btn-primary-blank">缩起菜单</button>
      <button @click="setCurl(false)" type="button" name="button" class="btn btn-primary-blank">打开菜单</button>
    </div>


    <div class="divi">

    </div>


    <sidebar ref="sidebar" :css="{width: '300px'}"  theme="light" :current="current" :surface="surface"></sidebar>
    <div class="p2000" style="text-align:left">
      <button @click="setCurrent('a')" type="button" name="button" class="btn btn-primary-blank">选中一</button>
      <button @click="setCurrent('b')" type="button" name="button" class="btn btn-primary-blank">选中二</button>
      <button @click="setCurrent('c')" type="button" name="button" class="btn btn-primary-blank">选中三</button>
    </div>

  </div>
</template>

<script>
import Sidebar from './sidebar'
import sidebarItem from './sidebar-item'


export default {
  name: 'sidebarDemo',
  components: {
    Sidebar,
    sidebarItem
  },
  created() {
    setTimeout(() => {
      // this.curl = true;
    }, 1000)
  },
  methods: {
    setCurl(state) {
      this.curl = state
    },
    setCurrent(current) {
      this.$refs.sidebar.setCurrent(current)
      // this.current = current;
    }
  },
  data() {
    return {
      current: 'a',
      curl: false,
      surface1: [{
        alias: 'a',
        title: '选 中'
      }, {
        alias: 'b',
        title: '菜 单'
      }, {
        alias: 'c',
        title: '菜 单'
      }],
      surface: [{
        alias: 'a',
        title: '选 中',
        icon: 'scan'
      }, {
        alias: 'b',
        title: '菜 单',
        icon: 'refresh'
      }, {
        alias: 'c',
        title: '菜 单',
        icon: 'add'
      }]
    }
  }
}
</script>
