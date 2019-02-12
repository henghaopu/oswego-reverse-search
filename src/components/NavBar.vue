<template>
    <!--

        Using <a> is fine but it is not the Vue way.
        <router-link> is gonna render an <a> to us, but this way is much more flexible
        by using :to. 

        <nav class="main-nav">
          <ul>
            <li><a href="/oswego-reverse-search/">Home</a></li>
            <li><router-link to="/oswego-reverse-search/about">About</router-link></li>
          </ul>
        </nav>

    -->
    <nav>
        <ul>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>

@import "@/styles/main.scss";

nav > ul {
    margin: 0;
    padding-inline-start: 0;
    list-style: none;
}
nav > ul > li {
    text-align: center;
    display: inline;
}
nav > ul > li > a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
    //   color: #42b983;
        text-decoration: underline;
    }
}
nav > ul > li > a:hover {
    color: $light-green;
}

</style>

