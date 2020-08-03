<script>
import MainFooter from './components/MainFooter'
import MainNav from './components/MainNav'

export default {
  components: {
    MainFooter,
    MainNav
  }
}
</script>

<template>
  <div id="app">
    <MainNav />
    <router-view />
    <MainFooter />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
