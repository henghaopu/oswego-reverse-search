/* Here we see some ES6 import statements used for things that we would have used CDN script tag for 
   in html pages. The first one defines Vue from the core Vue script, which is going to find 
   in the node_modules directory. And the second one defines app from App.vue in a relative file 
   path with the dot indicating the current directory.  
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* This productionTip just turns off that warning in the console that tells you that you're using 
   the development version in Vue    
*/
Vue.config.productionTip = false
/* 
  Instead of an el property, we have an imperative called to moount with our App selector passed.
  This is more or less equivalent to setting an el property. Although, with this method, you have
  the option of calling mount at a later time if you were to store a reference to the Vue instance.
*/
new Vue({
  router,
  /* 
    This render function is just an alternative to using an in-document template. All this one does
    is replace the div (with id="app") in index.html with the template in App.vue. So instead of writing 
    code directly in index.html, now we are writing our template in separate vue files. 
  */ 
  render: h => h(App)
}).$mount('#app')
