<template>
  <div id="mainapp">
    <div id="left" class="left-scroll">
      <h1 id="logo">Bone4</h1>
      <h2 id="logo-tiny">Vue 2.0 version</h2>
      <sidebar-menu ref="mains" :surface="[
        {
          alias: 'base',
          title: '基 础',
          sub: 'base'
        },{
          alias: 'form',
          title: '输 入',
          sub: 'form'
        },{
          alias: 'list',
          title: '列表&菜单',
          sub: 'list'
        },{
          alias: 'message',
          title: '信息提示',
          sub: 'message'
        },{
          alias: 'other',
          title: '其 他',
          sub: 'other'
        }
      ]" size="sm" :current="currentCategory" @on-click="handleSidebar"></sidebar-menu>

    </div>

    <div class="sub-menu" v-show="showSub">
      <sidebar-menu ref="sub" :surface="subSurface" size="sm" theme="white" :current="currentComponent" @on-click="handleSubbar"></sidebar-menu>
    </div>

    <div id="mid" class="thin-scroll" :class="[showSub?'mid-sub':'']" >
      <div class="mobile" style="width: 330px;height: 560px;margin:0 auto;">
        <div class="screen" style="background:#f2f2f2;overflow:hidden;height:470px;">
            <iframe :src="'#/mobile/demo/' +currentComponent" width="320" height="470" style="border:0;" class="thin-scroll"></iframe>
        </div>
      </div>
    </div>

    <div id="right" class="thin-scroll">
      <div id="content" class="markdown">

      </div>
    </div>

  </div>
</template>
<style lang="less">
  #mainapp{
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
  }
  .test{
    border:1px solid;
  }
</style>
<script>
import marked from 'marked'
import SidebarMenu from './components/sidebar/sidebar'
import Sidebar from './components/sidebar/demo'

/*eslint-disable */
export default {
  components: {
    SidebarMenu,
    Sidebar
  },
  name: 'app',
  data() {
    return {
      isMobile: false,
      doc: '',
      currentCategory: '',
      currentComponent: '',
      showSub: false,
      subSurface: [],
      subMenus: {
        base: [
          {
            alias: 'btn',
            title: '按 钮'
          }, {
            alias: 'phone-code',
            title: '验证码'
          }, {
            alias: 'drawer',
            title: '抽 屉'
          }, {
            alias: 'touch',
            title: '手 势'
          }
        ],
        form: [
          {
            alias: 'form-group',
            title: '表 单'
          }, {
            alias: 'bo-switch',
            title: '滑动开关'
          }, {
            alias: 'bo-number',
            title: '数字选择'
          }, {
            alias: 'calendar',
            title: '日 历'
          }, {
            alias: 'bo-select',
            title: '下拉菜单'
          }, {
            alias: 'selector',
            title: '选择列表'
          }, {
            alias: 'selectorTime',
            title: '时间选择'
          }, {
            alias: 'keyboard',
            title: '数字键盘'
          }
        ],
        list: [
          {
            alias: 'listdown',
            title: '上拉刷新'
          },
          {
            alias: 'listup',
            title: '下拉刷新'
          },
          {
            alias: 'tabs',
            title: '选项卡'
          },
          {
            alias: 'sidebar',
            title: '侧栏菜单'
          }
        ],
        message: [
          {
            alias: 'modal',
            title: '对话框'
          },
          {
            alias: 'toast',
            title: '轻提示'
          }
        ],
        other: [
          {
            alias: 'slide',
            title: '幻灯片'
          },
          {
            alias: 'stars',
            title: '评 分'
          }
        ]
      },
    };
  },
  methods: {
    // 切换二级菜单
    handleSidebar(item) {
      this.showSub = true;
      this.currentCategory = item.alias
      this.currentComponent = this.subMenus[item.alias][0].alias
      this.jump()
    },
    handleSubbar(item) {
      this.currentComponent =  item.alias
      this.jump()
    },
    jump(){
      this.$router.push(`/category/${this.currentCategory}/component/${this.currentComponent}`)
    },
    // 读取markdown文档
    loadingMarkdown() {
      $.ajax({
        url: `/src/components/${this.currentComponent}/doc.md`,
        type: 'get',
        data: {},
        success(md) {
          const render = new marked.Renderer();
          $('#content').html(marked(md).replace('<pre>', '<pre class="language-markup">'));
          Prism.highlightAll();
        },
        error() {
          $('#content').html('Document not found');
        },
      });
    },
    display() {
      //alert('fds')
      this.showSub = true;
      this.subSurface.splice(0);
      this.currentCategory = this.$route.params.category
      this.currentComponent = this.$route.params.com
      for (const key in this.subMenus[this.currentCategory]) {
        this.subSurface.push(this.subMenus[this.currentCategory][key]);
      }
      this.loadingMarkdown()
    }
  },
  ready() {
    this.$refs.mains.triggerClick(this.$route.params.name);
  },
  created() {
    this.display()
  },
  watch: {
    '$route' : 'display'
  }
};
/*eslint-enable */
</script>
