<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deHandle({de:10})" />
      <span>{{count}}</span>
      <input type="button" value="+" @click="addHandle" />
      <p>{{num}}</p>
    </div>
  </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'Vuex'

    export default {
      // 普通写法
      // computed: {
      //   num(){
      //     return this.$store.state.count
      //   },
      //   num2(){
      //     return this.$store.getters.filterCount
      //   }
      // },

      // mapState
      // computed: mapState({
        // count: state => state.count
        // count: 'count'
        // count(state){
        //   return state.count+100
        // }
      // }),
      // computed: mapState(['count']),
      computed: {
        abc(){
          return 123
        },
        ...mapGetters({
          num: 'filterCount'
        }),
        ...mapState(["count"])
      },
      methods: {
        // addHandle(){
          // 改变状态，提交mutation
          // this.$store.commit("addIncrement",{
          //   n: 10
          // })    
          
          // 异步操作，触发一个action
        //   this.$store.dispatch("addAction")
        // },
        ...mapActions({
          addHandle: 'addAction'
        }),
        // deHandle(){
        //   this.$store.commit({
        //     type: "deIncrement",
        //     de: 10
        //   })
        // }
        ...mapMutations({
          deHandle: 'deIncrement'
        })
      }
    }
</script>
<style>

</style>
