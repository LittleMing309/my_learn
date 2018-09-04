<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow" @changeTitle="titleHandle" ></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData = [
  {
    title: 'javascript'
  },
  {
    title: 'html'
  },
  {
    title: 'css'
  },
  {
    title: 'jquery'
  },
  {
    title: 'nodejs'
  },
  {
    title: 'vuejs'
  },
  {
    title: 'angularjs'
  },
]

export default {
  data(){
    return {
      listShow: false,
      title: ''
    }
  },
  // watch:{
  //   listShow(){
  //     console.log(this.listShow)
  //   }
  // },
  methods:{
    titleHandle(title){
      console.log(title)
      this.title = title
    }
  },
  components: {
    selectInput,
    list
  }
}
</script>
 