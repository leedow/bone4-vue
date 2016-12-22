import Vue from 'vue'
import App from './mobileApp.vue'
import Demos from './demos.vue'
import Demo from './demo.vue'
import VueRouter from 'vue-router'
import RouterConfig from './router'
import dmenu from './components/demohelper/demomenu.vue'
import Device from './components/helper/device'

import Toast from './components/toast/toast'
//demos
//const Listdown = resolve => require(['./components/list/demo2.vue'], resolve)

//Device.initScale()

Vue.use(VueRouter)


Vue.prototype.$toast = Toast

//Vue.use(dmenu)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: 'demos',
        component: Demos
      }]
    },
    {
      path: '/demo',
      component: Demo,
      children: RouterConfig
    }
  ]
})

const app = new Vue({ router,
  methods: {

  },
  data (){
    return{

    }
  }

}).$mount('#app')
