<template>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index" @click="getTitleHandle({title:item.title})" >{{item.title}}</li>
    </ul>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';
export default {
  computed: {
    // data(){
    //   console.log(this.$store.state.list)
    //   return this.$store.state.list
    // }
    ...mapState(['list'])
  },
  created() {
    // 获取数据
    // this.$store.dispatch('getListAction')
    this.getListAction()
    
  },
  methods: {
    // getTitleHandle(title){
    //   // 改变vuex的状态
    //   this.$store.commit('changeTitle',{title})
    // },
    ...mapMutations({
      getTitleHandle: "changeTitle"
    }),
    ...mapActions(
      ['getListAction']
    )
  }
}
</script>
