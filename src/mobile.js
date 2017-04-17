import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './mobileApp'
import Demos from './demos'
import Demo from './demo'
import RouterConfig from './router'
import Toast from './components/toast'
import Modal from './components/modal'
// demos
// const Listdown = resolve => require(['./components/list/demo2'], resolve)

// Device.initScale()

Vue.use(VueRouter)

Vue.prototype.$toast = Toast
Vue.prototype.$modal = Modal

// Vue.use(dmenu)
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

/* eslint-disable */
const app = new Vue({ router,
  methods: {

  },
  data() {
    return {

    }
  }

}).$mount('#app')
