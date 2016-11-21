<template>
  <div class="">
  <list class="list-box p0002">
    <li class="list-item">
      <menu-vertical icon="scan">
        <span slot="body">带图标</span>
      </menu-vertical>
    </li>
    <li class="list-item list-item-arrow">
      <menu-vertical icon="cascades">
        <p slot="body">带图标箭头</p>
      </menu-vertical>
    </li>
  </list>

  <list class="list-box p0002 m2000">
    <li class="list-item">
      <menu-vertical>
        <p slot="body">右侧停靠</p>
        <btn slot="dock" theme="blank" blank="true" name="Anything">
      </menu-vertical>
    </li>
    <li class="list-item">
      <menu-vertical>
        <p slot="body">右侧停靠</p>
        <i slot="dock" class="icon iconfont icon-roundcheckfill" style="font-size:24px;color:#3492e6"></i>
      </menu-vertical>
    </li>
    <li class="list-item list-item-arrow">
      <menu-vertical>
        <p slot="body">自定义内容 <span style="display:block;font-size:13px;color:#999">随便怎么加</span>  </p>
      </menu-vertical>
    </li>
  </list>
  </div>
</template>

<script>
import menuVertical from './menu-vertical.vue'
import list from '../list/list.vue'
import btn from '../btn/btn.vue'

export default {
  name: 'menudemo',
  components: {
    menuVertical,
    list,
    btn
  },
  data () {
    return {

    }
  }
}
</script>
