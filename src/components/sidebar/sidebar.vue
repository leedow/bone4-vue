<template>
  <div>
    <ul class="sidebar-menu"
        :style="css"
        :class="[size==='sm'?'sidebar-menu-sm':'',
                theme!='default'?'sidebar-menu-' + theme:'',
                curl&&size==='sm'?'sidebar-menu-sm-curl':'',
                curl&&size==='default'?'sidebar-menu-curl':''
                ]">
      <li v-for="(item, index) in surface" class="menu-item"
        :class="[item.alias==currentItem?'menu-item-current':'' ,
        item.icon?'menu-item-icon':'']"
        @click="handleClick(item, index)"
      >
      <i v-if="item.icon" class="icon iconfont" :class="[item.icon?'icon-'+item.icon:'']"></i>
        <span>{{item.title}}</span>
        <span class="tip" v-if="item.tip">{{item.tip}}</span>
      </li>
      <slot ref="items" />
    </ul>
  </div>
</template>
<script>
import sidebarItem from './sidebar-item'

export default {
  name: 'sidebar',
  item: sidebarItem,
  props: {
    surface: {
      type: Array,
      default() {
        return []
      }
    },
    current: {
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
  mounted() {
    this.updateSlot()
  },
  methods: {
    setCurrent(alias) {
      this.currentItem = alias
    },
    // 手工触发点击事件
    triggerClick(alias) {
      if (typeof alias === 'string') {
        this.surface.forEach((item) => {
          if (item.alias === alias) {
            this.handleClick(item)
          }
        })
      } else if (typeof alias === 'number') {
        this.handleClick(this.surface[alias])
      }
    },
    handleClick(item) {
      if (item.link) {
        this.$router.push(item.link)
      }
      this.$emit('on-click', item)
      this.setCurrent(item.alias)
    },
    /**
     * 更新slot选项选中状态
     */
    updateSlot() {
      if (this.$children && this.$children.length > 0) {
        this.$children.forEach((item) => {
          /* eslint-disable */
          if (item.alias === this.currentItem) {
            item.selected = true
          } else {
            item.selected = false
          }
        })
      }
    }
  },
  watch: {
    current(newVal) {
      this.currentItem = newVal
      this.updateSlot()
    },
    currentItem() {
      this.updateSlot()
    }
  },
  data() {
    return {
      currentItem: this.current
    }
  }
}
</script>
