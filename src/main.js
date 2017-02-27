import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import RouterConfig from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/component',
      component: App,
      children: RouterConfig
    }
  ]
})

/* eslint-disable */
const app = new Vue({
  router,
  template: '<router-view/>'
}).$mount('#app')
