<template>
  <div id="app">
    <com-a :number-to-do='myVal' @my-event="getMyEvent">
      <p slot="header">i am header</p>
      <p slot="footer">i am footer</p>
    </com-a>
    <hr>
    <input type="text" v-model="myVal" />
  </div>
</template>

<script>
import Vue from 'vue'
import ComA from './components/a'
export default {
  name: 'app',
  components: { ComA },
  data () {
    return {
      myVal: ''
    }
  },
  methods: {
    getMyEvent (hello) {
      console.log('i got my event' + hello)
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
</style>
