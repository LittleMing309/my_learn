<template>
  <div id="app">
    <ul>
      <li v-for="item in list">
        {{item.name + '-' + item.price}}
      </li>
    </ul>
    <input type="text" v-model.trim="myVal1">    
    <p>{{myVal1}}</p>
    <!-- v-model的修饰符包括：lazy修饰符是等输入完之后触发；number是把数据类型改为number类型; trim是去除首尾空格 -->
    <input type="checkbox" name="" value="apple" v-model="myVal2">
    <label>apple</label>
    <input type="checkbox" name="" value="banana" v-model="myVal2">
    <label>banana</label>
    <input type="checkbox" name="" value="orange" v-model="myVal2">
    <label>orange</label>
    <p>{{myVal2}}</p>
    <input type="radio" name="" value="apple" v-model="myVal3">
    <label>apple</label>
    <input type="radio" name="" value="banana" v-model="myVal3">
    <label>banana</label>
    <input type="radio" name="" value="orange" v-model="myVal3">
    <label>orange</label>
    <p>{{myVal3}}</p>
    <select v-model="myVal4">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <p>{{myVal4}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'app',
  data: function () {
    return {
      'myVal1': '',
      'myVal2': [],
      'myVal3': '',
      'myVal4': 'apple',
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
