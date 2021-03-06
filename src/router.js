import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import apaBook from "./views/apaBook.vue"
import apaWebsite from "./views/apaWebsite.vue"
import chicagoBook from "./views/chicagoBook.vue"
import chicagoWebsite from "./views/chicagoWebsite.vue"
import mlaBook from "./views/mlaBook.vue"
import mlaWebsite from "./views/mlaWebsite.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apaBook',
      name: 'APA Book',
      component: apaBook
    },
    {
      path: '/apaWebsite',
      name: 'APA Website',
      component: apaWebsite
    },
    {
      path: '/chicagoBook',
      name: 'Chicago Book',
      component: chicagoBook
    },
    {
      path: '/chicagoWebsite',
      name: 'Chicago Website',
      component: chicagoWebsite
    },
    {
      path: '/mlaBook',
      name: 'MLA Book',
      component: mlaBook
    },
    {
      path: '/mlaWebsite',
      name: 'MLA Website',
      component: mlaWebsite
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
