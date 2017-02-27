<template>
  <div class="">
    <tabs
      current="like"

      @on-click="handleclick"
     :surface="[{
        alias: 'like',
        title: '收 藏'
      },{
        alias: 'time',
        title: '时光机'
      },{
        alias: 'shop',
        title: '小 摊'
      }]"></tabs>

      <div style="font-size: 34px;padding-top:130px;color:#999">
        {{content}}
      </div>
  </div>
</template>

<script>
import Tabs from './tabs'

export default {
  name: 'tabsdemo',
  components: {
    Tabs
  },
  methods: {
    handleclick(item) {
      this.content = item.alias
    }
  },
  data() {
    return {
      content: 'like'
    }
  }
}
</script>
