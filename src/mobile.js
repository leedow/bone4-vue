import Vue from 'vue'
import App from './mobileApp.vue'
import Demos from './demos.vue'
import Demo from './demo.vue'
import VueRouter from 'vue-router'


//demos
//const Listdown = resolve => require(['./components/list/demo2.vue'], resolve)
const Buttons = resolve => { require.ensure(['./components/btn/demo.vue'], () => {
    resolve(require('./components/btn/demo.vue'))})}
const Listdown = resolve => { require.ensure(['./components/list/demo2.vue'], () => {
    resolve(require('./components/list/demo2.vue'))})}
const Listup = resolve => { require.ensure(['./components/list/demo3.vue'], () => {
    resolve(require('./components/list/demo3.vue'))})}
const modal = resolve => { require.ensure(['./components/modal/demo.vue'], () => {
    resolve(require('./components/modal/demo.vue'))})}
const form = resolve => { require.ensure(['./components/form-group/demo.vue'], () => {
    resolve(require('./components/form-group/demo.vue'))})}
const tabs = resolve => { require.ensure(['./components/tabs/demo.vue'], () => {
    resolve(require('./components/tabs/demo.vue'))})}

Vue.use(VueRouter)

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
      children: [{
        path: 'listdown',
        component: Listdown
      },{
        path: 'listup',
        component: Listup
      },{
        path: 'modal',
        component: modal
      },{
        path: 'buttons',
        component: Buttons
      },{
        path: 'form',
        component: form
      },{
        path: 'tabs',
        component: tabs
      }]
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
