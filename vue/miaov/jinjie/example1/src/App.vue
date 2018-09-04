<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link :to="index" exact tag="li" event="mouseover">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <li>
          <router-link event="mouseover" :to="{path:'/document#abc'}">document</router-link>
        </li>
        <li>
          <router-link event="mouseover" to="/about" active-class="activeClass">about</router-link>
        </li>
        <li>
          <router-link event="mouseover" to="/user" active-class="activeClass">user</router-link>
        </li>
      </ul>
    </div>
    <input type="button" value="后退" @click="backHandle">
    <input type="button" value="前进" @click="forwardHandle">
    <input type="button" value="控制前进后退的步数" @click="goHandle">
    <input type="button" value="控制指定的导航push" @click="pushHandle">
    <input type="button" value="控制指定的导航replace" @click="replaceHandle">
    <!-- <router-view name="slider"></router-view> -->
    当前的index是：{{$route.meta.index}}
    <transition :name="names"> <!-- mode="out-in" -->
      <router-view class="center"></router-view>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: 'App',
  data(){
    return {
      index: '/',
      names: 'left'
    }
  },
  watch: {
    $route(to,from){
      console.log(to.meta.index)
      console.log(from.meta.index)
      if(to.meta.index < from.meta.index){
        this.names = 'right'
      }else{
        this.names = 'left'
      }
    }
  },
  methods: {
    backHandle(){
      this.$router.back()
    },
    forwardHandle(){
      this.$router.forward()
    },
    goHandle(){
      // this.$router.go(-1)  后退
      // this.$router.go(1)   前进
      // this.$router.go(0)   当前导航，刷新页面
      this.$router.go(300)  // 超过历史记录数会无效
    },
    pushHandle(){
      // this.$router.push('/document')
      this.$router.push({path:'/user/vip/1',query:{info:'follow'}})
    },
    replaceHandle(){
      this.$router.replace({path:'/document'})
    }
  }
}
</script>
 
<style>
  .v-enter{
    opacity: 0;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-enter-active{
    transition: 1s;
  }

  .v-leave{
    opacity: 1;
  }
  .v-leave-to{
    opacity: 0;
  }
  .v-leave-active{
    transition: 2s;
  }

  .left-enter{
    transform: translateX(100%);
  }
  .left-enter-to{
    transform: translateX(0);
  }
  .left-enter-active,.left-leave-active{
    transition: 1s;
  }

  .left-leave{
    transform: translateX(0);
  }
  .left-leave-to{
    transform: translateX(-100%);
  }

  .right-enter{
    transform: translateX(-100%);
  }
  .right-enter-to{
    transform: translateX(0);
  }
  .right-enter-active,.right-leave-active{
    transition: 1s;
  }

  .right-leave{
    transform: translateX(0);
  }
  .right-leave-to{
    transform: translateX(100%);
  }
</style>
