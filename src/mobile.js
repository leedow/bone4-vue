import Vue from 'vue'
import App from './mobileApp.vue'
import list from './components/list/demo2.vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

window.log = function(msg){
  console.log(msg)
}


const router = new VueRouter({
  routes: [
    { path: '/home', component: App},
    { path: '/list', component: list}
  ]
})



const app = new Vue({ router,
        methods: {
          go(data){
            this.$router.push(data)
          }
        }}).$mount('#app')
