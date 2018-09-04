<template>
  <div id="app">
    <ul>
      <li v-for="item in list">
        {{item.name + '-' + item.price}}
      </li>
    </ul>
    <a v-if="isPartA">partA</a>
    <a v-else>no data</a>
    <button @click="addItem">addItem</button>
    <button @click.stop="toggle">toggle</button>
    <input @keydown.enter="onKeydown" >
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'app',
  data: function () {
    return {
      'foo': 42,
      'isPartA': true,
      'list': [
        {
          'name': 'apple',
          'price': 34
        },
        {
          'name': 'orange',
          'price': 48
        }
      ]
    }
  },
  methods: {
    addItem () {
      Vue.set(this.list, 1, {
        'name': 'banana',
        'price': 55
      })
    },
    toggle () {
      this.isPartA = !this.isPartA
    },
    onKeydown () {
      console.log('on key down')
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
