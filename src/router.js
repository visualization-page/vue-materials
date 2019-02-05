import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import nav from './views/component-page/nav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    ...nav
  ]
})
