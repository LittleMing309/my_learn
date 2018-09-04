<template>
    <ul class="list">
      <li v-for="(item,index) in data" :key="index" @click="getTitleHandle(item.title)" >{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  props:["data"],
  methods: {
    getTitleHandle(title){
      this.$emit('changeTitle', title)
    }
  }
}
</script>
