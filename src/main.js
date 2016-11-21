import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

window.log = function(msg){
  console.log(msg)
}

const router = new VueRouter({
  routes: [
    { path: '/component/:name', component: App}
  ]
})

const app = new Vue({ router }).$mount('#app')
