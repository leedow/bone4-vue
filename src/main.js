import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConfig from './router'


Vue.use(VueRouter)

window.log = function(msg){
  console.log(msg)
}

const router = new VueRouter({
  routes: [
    {
      path: '/component',
      component: App,
      children: RouterConfig
    }
  ]
})

const app = new Vue({ router }).$mount('#app')
