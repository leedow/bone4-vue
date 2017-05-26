import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/:com',
      component: App
    }
  ]
})

/* eslint-disable */
const app = new Vue({
  router,
  template: '<router-view/>'
}).$mount('#app')
