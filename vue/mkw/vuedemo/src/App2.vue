<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <router-link :to="{path: '/apple'}" tag="button">to apple</router-link>
    <router-link :to="{path: '/banana'}" tag="button">to banana</router-link>
    <router-link :to="{path: '/apple/red'}" tag="button">to redApple</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
.active{
  background: red;
}
</style>
