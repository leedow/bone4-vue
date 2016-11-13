import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

 
import Index from './pages/index.vue'
import Tabs from './pages/tabs.vue'
import Buttons from './pages/buttons.vue'
import form from './pages/form.vue'
import list from './pages/list.vue'
import counter from './pages/counter.vue'
import menu from './pages/menu.vue'
import shopping from './pages/shopping.vue'
import scrollheader from './pages/scrollheader.vue'
import productlist2 from './pages/productlist2.vue'
import swipe from './pages/swipe.vue'
import dialog from './pages/dialog.vue'

Vue.use(VueRouter);
var router = new VueRouter()

router.map({
	'/': {
		component: Index
	},
    '/tabs': {
        component: 　Tabs 
    },
    '/buttons': {
    	component: Buttons
    },
    '/form': {
    	component: form
    },
    '/list': {
        component: list
    },
    '/counter': {
        component: counter
    },
    '/menu': {
        component: menu
    },
    '/shopping': {
        component: shopping
    },
    'productlist2':{
        component: productlist2
    },
    '/scrollheader': {
        component: scrollheader
    },
    '/swipe':{
        component: swipe
    },
    '/dialog':{
        component: dialog
    }
})

router.start(App, '#app');

 