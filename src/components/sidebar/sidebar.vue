<template>
  <div>
    <ul class="sidebar-menu"
        :style="css"
        :class="[size==='sm'?'sidebar-menu-sm':'',
                theme!='default'?'sidebar-menu-' + theme:'',
                curl&&size==='sm'?'sidebar-menu-sm-curl':'',
                curl&&size==='default'?'sidebar-menu-curl':''
                ]">
      <li v-for="(item, index) in surfaceData" class="menu-item"
        :class="[item.alias===currentItem?'menu-item-current':'' ,
        item.icon?'menu-item-icon':'']"
        @click="handleClick(item, index)"
      >
      <i v-if="item.icon" class="icon iconfont" :class="[item.icon?'icon-'+item.icon:'']"></i>
        <span>{{item.title}}</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  props: {
    surface: {
      type: Array,
      default: []
    },
    current: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    curl: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'default'
    },
    css: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    setCurrent(alias) {
      this.currentItem = alias
    },
    // 手工触发点击事件
    triggerClick(alias) {
      if (typeof alias === 'string') {
        this.surfaceData.forEach((item) => {
          if (item.alias === alias) {
            this.handleClick(item)
          }
        })
      } else if (typeof alias === 'number') {
        this.handleClick(this.surfaceData[alias])
      }
    },
    handleClick(item) {
      if (item.link) {
        this.$router.push(item.link)
      }
      this.$emit('sidebar-click', item)
      this.setCurrent(item.alias)
    }
  },
  data() {
    return {
      surfaceData: this.surface,
      currentItem: this.current
    }
  }
}
</script>
