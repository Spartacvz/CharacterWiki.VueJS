<template>
  <div id="app">

    <Home></Home>
    <Header></Header>
    <RouterView></RouterView>
    <PullCharacter></PullCharacter>
    <sideBarMenu></sideBarMenu>

  </div>
</template>

<script>

  import Home from '@/components/Home'
  import Header from '@/components/Header'
  import PullCharacter from '@/components/PullCharacter'
  import sideBarMenu from '@/components/sideBarMenu'

  export default {
    name: 'app',
    components: {
      Home, Header, PullCharacter, sideBarMenu
    },
    data() {
      return {
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
</style>