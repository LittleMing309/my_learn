<template>
  <div id="app">
    <button @click="show = !show">toggle</button>
    <div class="ab">
      <transition name="fade">
        <p v-show="show">i am show</p>
      </transition>

      <transition name="my-trans">
        <p v-show="show">i am show</p>
      </transition>
    </div>
    <div class="ab">
      <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
        <p class="animate-p" v-show="show">I am Show</p>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {

  data () {
    return {
      show: true
    }
  },
  methods: {
    beforeEnter: function(el){
      $(el).css({
        left: '-500px',
        opacity: 0
      })
    },
    enter: function(el,done){
      $(el).animate({
        left: 0,
        opacity: 1
      },{
        duration: 1500,
        complete: done
      })
    },
    leave: function(el,done){
      $(el).animate({
        left: '500px',
        opacity: 0
      },{
        duration: 1500,
        complete: done
      })
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

.fade-enter-active, .fade-leave-active{
  transition: all .5s;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}

.my-trans-enter-acitve, .my-trans-leave-active{
  transition: all .5s ease-out;
}
.my-trans-enter{
  transform: translateY(-500px);
  opacity: 0;
}
.my-trans-leave-active{
  transform: translateY(500px);
  opacity: 0;
}
.animate-p{
  position: absolute;
  left: 0;
  top: 0;
}
</style>
