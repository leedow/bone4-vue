import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    { path: '/component/:name', component: App} 
  ]
})



const app = new Vue({ router }).$mount('#app')
