<template>
  <div class="">
    <div style="font-size: 34px;padding-top:150px;color:#999">
      {{content}}
    </div>
    <div class="layout-bottom bor-top" style="background:#fff">
      <menus-horizon
        size="sm"
        current="like"
        @on-click="handleclick"
        :surface="[{
            icon: 'like',
            currentIcon: 'likefill',
            alias: 'like',
            title: '收 藏'
          },{
            icon: 'time',
            currentIcon: 'timefill',
            alias: 'time',
            title: '时光机'
          },{
            icon: 'shop',
            currentIcon: 'shopfill',
            alias: 'shop',
            title: '小 摊'
          }]"
      ></menus-horizon>
    </div>

  </div>
</template>

<script>
import menusHorizon from './menus-horizon'
import btn from '../btn/btn'

export default {
  name: 'menudemo',
  components: {
    menusHorizon,
    btn
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
