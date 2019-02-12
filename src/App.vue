<!--
  This component is called the root component. It is always rendered to the browser 
  since what we're doing in the view instance in main.js is rendering that component.

-->

<template>
  <div id="app">
    <NavBar/>
    <!-- When we request a certain page, this is where that component is loaded in. 
         We set up different routes in router.js. -->
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>


<style lang="scss">
@import "@/styles/main.scss";
</style>
