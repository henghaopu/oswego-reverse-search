/*
  The reason we import Vue is that we need to use vue-router plugin, and the way we use a plugin
  in vue is by saying Vue.use
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
/* 
  The way we set up all our routes is by setting up a new router instance 
*/
export default new Router({
  routes: [

    /* Redirects to /oswego-reverse-search as the default route. */
    {
      path: '/',
      redirect: '/oswego-reverse-search/'
    },

    {
      /*
        When someone goes to /oswego-reverse-search/, what we are saying is we want to load up the 
        component Home which is from Home.vue into the <router-view/>
          path is what a user goes to in the address bar on the browser
          name is the property we use to reference this route later on.
      */
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
