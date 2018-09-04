<template>
  <div id="app">
    <p v-css="{color:'red','font-size':'24px'}">hello world</p>
    <input type="text" v-focus>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  directives: {
    css: {
      inserted (el,bind) {
        let styleObj = bind.value
        let arr = []
        for(let key in styleObj){
          arr.push(key + ':' + styleObj[key])
        }
        arr = arr.join(';')
        console.log(arr)
        el.style.cssText = arr
      }
    },
    focus: {
      inserted (el, bind) {
        el.focus();
      }
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
