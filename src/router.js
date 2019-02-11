import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // Redirects to /oswego-reverse-search as the default route.
    {
      path: '/',
      redirect: '/oswego-reverse-search/'
    },
    {
      path: '/oswego-reverse-search/',
      name: 'home',
      component: Home
    },
    {
      path: '/oswego-reverse-search/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
