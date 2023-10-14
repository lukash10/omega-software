import Vue from 'vue';
import App from './App.vue';

import { SidebarPlugin } from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'

import Login from './views/Login.vue'
import Dashboard from './dashboard/Dashboard.vue'


import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NavbarPlugin)
Vue.use(SidebarPlugin)
Vue.use(VueRouter)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const routes = [

  { path: '/', component: Login, name: 'Login' },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
 
]


let router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
