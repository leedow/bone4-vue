<template>
  <div id="mainapp">
    <div id="left" class="left-scroll">
      <h1 id="logo">Bone4</h1>
      <h2 id="logo-tiny">Vue 2.0 version</h2>
      <sidebar-menu ref="mains" :surface="[
        {
          alias: 'common',
          title: '公 共',
          sub: 'common'
        },{
          alias: 'mobile',
          title: '移动端',
          sub: 'mobile'
        },{
          alias: 'pc',
          title: 'PC端',
          sub: 'pc'
        },{
          alias: 'other',
          title: '其 他',
          sub: 'other'
        },{
          alias: 'about',
          title: '关 于'
        }
      ]" size="sm" current="grid" @sidebar-click="_handleSidebar"></sidebar-menu>

    </div>

    <div class="sub-menu" v-show="showSub">
      <sidebar-menu ref="sub" :surface="subSurface" size="sm" theme="white" current="grid" @sidebar-click="_handleSubbar"></sidebar-menu>
    </div>

    <div id="mid" class="thin-scroll" :class="[showSub?'mid-sub':'']" v-if="!isMobile">
      <router-view></router-view>
    </div>


    <div id="mid" class="thin-scroll" :class="[showSub?'mid-sub':'']" v-if="isMobile">
      <div class="mobile" style="width: 300px;height: 540px;margin:0 auto;">
        <div class="screen" style="background:#f2f2f2;">
            <router-view></router-view>
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
import Btn from './components/btn/demo'

import FormGroup from './components/form-group/demo'
import Modal from './components/modal/demo'
import List from './components/list/demo'
import MenuVertical from './components/menu-vertical/demo'
import MenusHorizon from './components/menus-horizon/demo'
import Tabs from './components/tabs/demo'


/*eslint-disable */
export default {
  components: {
    SidebarMenu,
    Sidebar,
    Btn,
    FormGroup,
    Modal,
    List,
    MenuVertical,
    MenusHorizon,
    Tabs,
  },
  name: 'app',
  data() {
    return {
      isMobile: false,
      doc: '',
      currentComponent: '',
      showSub: false,
      subSurface: [],
      subMenus: {
        common: [
          {
            alias: 'btn',
            title: '按 钮',
            link: '/component/btn',
          }, {
            alias: 'form-input',
            title: '输入框',
            link: '/component/form-input',
          }, {
            alias: 'form-group',
            title: '表 单',
            link: '/component/form-group',
            mobile: true,
          },
        ],
        mobile: [{
          alias: 'modal',
          title: '模态对话框',
          link: '/component/modal',
          mobile: true,
        }, {
          alias: 'list',
          title: '列表刷新',
          link: '/component/list',
          mobile: true,

        }, {
          alias: 'menu-vertical',
          title: '列表菜单',
          link: '/component/menu-vertical',
          mobile: true,
        }, {
          alias: 'menus-horizon',
          title: '水平菜单',
          link: '/component/menus-horizon',
          mobile: true,
        }, {
          alias: 'tabs',
          title: '选项卡',
          link: '/component/tabs',
          mobile: true,
        }, {
          alias: 'toast',
          title: '轻提示',
          link: '/component/toast',
          mobile: true,
        }, {
          alias: 'drawer',
          title: '动效抽屉',
          link: '/component/drawer',
          mobile: true,
        }, {
          alias: 'bo-switch',
          title: '滑动开关',
          link: '/component/bo-switch',
          mobile: true,
        }, {
          alias: 'slide',
          title: '幻灯片',
          link: '/component/slide',
          mobile: true,
        }],
        pc: [
          {
            alias: 'sidebar',
            title: '侧栏菜单',
            link: '/component/sidebar',
          }, {
            alias: 'tabs',
            title: '横向菜单',
            link: '/component/tabs',
          }, {
            alias: 'tabs',
            title: '垂直菜单',
            link: '/component/tabs',
          }],
        other: [{
          alias: 'login',
          title: 'APP登录',
          link: '/component/login',
        }],
      },
    };
  },
  methods: {
    // 切换二级菜单
    _handleSidebar(item) {
      if (item.sub) {
        this.showSub = true;
        this.subSurface.splice(0);
        for (const key in this.subMenus[item.sub]) {
          this.subSurface.push(this.subMenus[item.sub][key]);
        }
        this.$refs.sub.triggerClick(0);
      } else {
        this.showSub = false;
      }
    },
    _handleSubbar(item) {
      if (item.mobile) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    // 读取markdown文档
    loadingMarkdown() {
      const _this = this;
      _this.currentComponent = this.$route.path.split('/').pop();

      $.ajax({
        url: `/src/components/${_this.currentComponent}/doc.md`,
        type: 'get',
        data: {},
        success(md) {
          const render = new marked.Renderer();
          $('#content').html(marked(md));
          Prism.highlightAll();
        },
        error() {
          $('#content').html('Document not found');
        },
      });
    },
  },
  ready() {
    this.$refs.mains.triggerClick(this.$route.params.name);
  },
  created() {
    this.loadingMarkdown();
  },
  watch: {
    $route: 'loadingMarkdown',
  },
};
/*eslint-enable */
</script>
