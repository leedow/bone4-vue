<template>
  <div class="">
    <div class="m2000" style="background:#fff">
      <menus-horizon
        size="sm"
        :current="content"
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

    <div class="m2000" style="background:#fff">
      <menus-horizon
        size="sm"
      >
        <menus-horizon-item
          alias="like"
          icon="like"
          current-icon="likefill"
          title="收 藏"
          :tip="0"
          @on-click="handleclick"
          :current="content=='like'"
        />
        <menus-horizon-item
          alias="time"
          icon="time"
          current-icon="timefill"
          title="时光机"
          :tip="0"
          @on-click="handleclick"
          :current="content=='time'"
        />
      </menus-horizon>
    </div>

    <div style="font-size: 34px;padding-top:30px;color:#999">
      {{content}}
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
    menusHorizonItem: menusHorizon.item,
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
