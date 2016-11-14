<template>
  <div id="mainapp">

    <div id="left" class="left-scroll">
      <h1 id="logo">Bone4</h1>
      <h2 id="logo-tiny">Vue 2.0 version</h2>
      <sidebar-menu ref="mains" :surface="[
        {
          alias: 'grid',
          title: '栅格系统',
          link: '/component/grid'
        },{
          alias: 'form',
          title: '表 单',
          sub: 'form'
        },{
          alias: 'menu',
          title: '菜单导航',
          sub: 'menu'
        }
      ]" size="sm" current="grid" @sidebar-click="_handleSidebar"></sidebar-menu>

    </div>

    <div class="sub-menu" v-show="showSub">
      <sidebar-menu ref="sub" :surface="subSurface" size="sm" theme="white" current="grid"></sidebar-menu>
    </div>

    <div id="mid" class="thin-scroll" :class="[showSub?'mid-sub':'']">
      <component v-bind:is="currentComponent"></component>
    </div>

    <div id="right" class="thin-scroll">
      <div id="content" class="markdown">

      </div>
    </div>

  </div>
</template>
<style media="screen">
  #mainapp{
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
  }
</style>
<script>
import SidebarMenu from './components/sidebar/sidebar.vue'
import Sidebar from './components/sidebar/demo.vue'
import Btn from './components/btn/demo.vue'
import FormInput from './components/form-input/demo.vue'
import marked from 'marked'

export default {
  components: {
    SidebarMenu,
    Sidebar,
    Btn,
    FormInput
  },
  name: 'app',
  data () {
    return {
      doc: '',
      currentComponent: '',
      showSub: false,
      subSurface: [],
      subMenus: {
        menu: [
        {
          alias: 'sidebar',
          title: '侧栏菜单',
          link: '/component/sidebar'
        }, {
          alias: 'tabs',
          title: '横向菜单',
          link: '/component/tabs'
        }, {
          alias: 'tabs',
          title: '垂直菜单',
          link: '/component/tabs'
        }],
        form: [
          {
            alias: 'btn',
            title: '按 钮',
            link: '/component/btn'
          },{
            alias: 'form-input',
            title: '输入框',
            link: '/component/form-input'
          }
        ]
      }
    }
  },
  methods: {
    //切换二级菜单
    _handleSidebar(item){
      if(item.sub){
        this.showSub = true;
        this.subSurface.splice(0)
        for(let key in this.subMenus[item.sub]){
          this.subSurface.push(this.subMenus[item.sub][key])
        }
        this.$refs.sub.triggerClick(0)
      } else {
        this.showSub = false;
      }

    },
    //读取markdown文档
    loadingMarkdown (){
      let _this = this;
      _this.currentComponent = this.$route.params.name;

      $.ajax({
        url: '/src/components/' + _this.currentComponent + '/doc.md',
        type: 'get',
        data: {},
        success (md){
          let render = new marked.Renderer();
          $('#content').html(marked(md));
          Prism.highlightAll();
        },
        error (){
          $('#content').html('Document not found');
        }
      })
    }
  },
  ready (){
    alert('fsdf')
    this.$refs.mains.triggerClick(this.$route.params.name)
  },
  created (){
    this.loadingMarkdown();
  },
  watch: {
    '$route': 'loadingMarkdown'
  }
}
</script>
