// import 'bone4-ui/build/bone-mobile-red.css'
// import 'bone4-ui/build/bone-page-mobile.css'
// import 'bone4-ui/build/r.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bone4-ui/build/bone-all.css'
import 'bone4-ui/build/bone-page-mobile.css'
import 'bone4-ui/build/r.css'
import './assets/doc.css'
import './assets/prism.css'
import App from './home/app'
import MobileApp from './home/app-mobile'
import Demos from './home/demos-list'
import DemoPage from './home/demo-page'
import RouterConfig from './home/router'
import OtherRouterConfig from './home/router-other'
import Toast from './components/toast'
import Modal from './components/modal'

Vue.use(VueRouter)

Vue.prototype.$toast = Toast
Vue.prototype.$modal = Modal

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: App
    },
    { // PC pages
      path: '/category/:category/component/:com',
      component: App
    },
    { // mobile pages
      path: '/mobile',
      component: MobileApp,
      children: [{
        path: 'demos',
        component: Demos
      }]
    },
    {
      path: '/mobile/demo',
      component: DemoPage,
      children: RouterConfig
    },
    {
      path: '/mobile/other',
      component: DemoPage,
      children: OtherRouterConfig
    }
  ]
})

/* eslint-disable */
const app = new Vue({
  router,
  template: '<router-view/>'
}).$mount('#app')
