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
      ]" size="sm" current="base" @on-click="_handleSidebar"></sidebar-menu>

    </div>

    <div class="sub-menu" v-show="showSub">
      <sidebar-menu ref="sub" :surface="subSurface" size="sm" theme="white" current="grid" @on-click="_handleSubbar"></sidebar-menu>
    </div>

    <div id="mid" class="thin-scroll" :class="[showSub?'mid-sub':'']" >
      <div class="mobile" style="width: 330px;height: 560px;margin:0 auto;">
        <div class="screen" style="background:#f2f2f2;">
            <iframe :src="'/mobile.html#/demo/' +currentComponent" width="320" height="470" style="border:0;" class="thin-scroll"></iframe>
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
        base: [
          {
            alias: 'btn',
            title: '按 钮'
          }, {
            alias: 'form-group',
            title: '表 单'
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
            alias: 'btn',
            title: '按 钮'
          }, {
            alias: 'form-group',
            title: '表 单'
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
        ]
      },
    };
  },
  methods: {
    // 切换二级菜单
    _handleSidebar(item) {
      this.showSub = true;
      if (item.sub) {
        this.showSub = true;
        this.subSurface.splice(0);
        for (const key in this.subMenus[item.sub]) {
          this.subSurface.push(this.subMenus[item.sub][key]);
        }
        //this.$refs.sub.triggerClick(0);
      } else {
        this.showSub = false;
      }
    },
    _handleSubbar(item) {
      this.currentComponent =  item.alias
      this.loadingMarkdown()
    },
    // 读取markdown文档
    loadingMarkdown() {

      $.ajax({
        url: `/src/components/${this.currentComponent}/doc.md`,
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
  }
};
/*eslint-enable */
</script>
