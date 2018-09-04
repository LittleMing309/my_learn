<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Conter :num='num' @incre="increate" @decre="decreate"></Conter>
    <p>数量是{{num}}</p>
  </div>
</template>

<script>
import Conter from './conter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 10,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    increate(){
      this.num++
    },
    decreate(){
      this.num--
    }
  },
  components: {
    Conter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
