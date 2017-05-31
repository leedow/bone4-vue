import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import MobileApp from './mobileApp'
import Demos from './demos'
import Demo from './demo'
import RouterConfig from './router'
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
    {
      path: '/category/:category/component/:com',
      component: App
    },
    {
      path: '/mobile',
      component: MobileApp,
      children: [{
        path: 'demos',
        component: Demos
      }]
    },
    {
      path: '/mobile/demo',
      component: Demo,
      children: RouterConfig
    }
  ]
})

/* eslint-disable */
const app = new Vue({
  router,
  template: '<router-view/>'
}).$mount('#app')
