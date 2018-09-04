<template>
  <div id="app">
    <view-box>

      <this-head></this-head>
      <router-view/>
      <this-foot></this-foot>
    </view-box>
  </div>
</template>

<script>
import {ViewBox} from 'vux'
import ThisHead from './components/head'
import ThisFoot from './components/foot'

export default {
  name: 'App',
  components: {
    ThisHead,
    ViewBox,
    ThisFoot
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,body{
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  color: #2c3e50;
  height: 100%;
  .header{
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    z-index: 9;
  }
  .tab{
    margin-top: 46px;
    width: 1200px;
  }
  .my-scroller{
    top: 90px;
  }
  .loading-layer{
    padding-bottom: 90px;
  }
  .my-marquee{
    margin: 10px;
  }
  .weui-media-box__hd, .weui-media-box__hd img{
    width: 102px;
    height: 78px;
  }
  .weui-media-box__bd{
    height: 78px;
  }
}
</style>
