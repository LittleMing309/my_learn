<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    {{totalPrice}}
    <apple></apple>
    <banana></banana>
  </div>
</template>

<script>
import Apple from './components/apple.vue'
import Banana from './components/banana.vue'

export default {
  name: 'app',
  components: {
    Apple,Banana
  },
  computed: {
    totalPrice () {
      return this.$store.getters.getTotal   // 是指在取状态集里的数据
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
  margin-top: 60px;
}
.active{
  background: red;
}
</style>
