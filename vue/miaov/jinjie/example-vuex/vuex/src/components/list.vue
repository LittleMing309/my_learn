<template>
    <ul class="list">
      <li v-for="(item,index) in data" :key="index" @click="getTitleHandle(item.title)" >{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  computed: {
    data(){
      console.log(this.$store.state.list)
      return this.$store.state.list
    }
  },
  methods: {
    getTitleHandle(title){
      // 改变vuex的状态
      this.$store.commit('changeTitle',{
        title
      })
    }
  },
  created() {
    // 获取数据
    this.$store.dispatch('getListAction')
  }
}
</script>
