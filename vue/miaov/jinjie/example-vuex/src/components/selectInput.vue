<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        @click="showListHandle"
        :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  props:["isShow"],
  computed:{
    initShow(){
      return this.isShow
    },
    ...mapState(['title'])
  },
  methods: {
    showListHandle(){
      this.$emit("update:isShow", !this.initShow)
    }
  }
}
</script>
