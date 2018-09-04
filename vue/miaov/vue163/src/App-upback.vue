<template>
  <div id="app">
    <view-box>
      <x-header
        class="header"
        slot="header"
        :left-options="{showBack:false}"
      >
        <div slot="left">返回</div>
        <div>Header</div>
        <div slot="right">搜索</div>
      </x-header>
      
      <sc :lock-y="true">
        <div class="tab">
          <tab>
            <tab-item selected>推荐</tab-item>
            <tab-item>景点</tab-item>
            <tab-item>住宿</tab-item>
            <tab-item>交通</tab-item>
            <tab-item>银行</tab-item>
            <tab-item>餐饮</tab-item>
            <tab-item>购物</tab-item>
          </tab>
        </div>
      </sc>
      
      <scroller 
        class="my-scroller"
        :on-refresh="refresh"
        refresh-text="loading"
        :on-infinite="infinite"
        ref="myRef"
      >
        <swiper :list="swiperList" v-model="swiperIndex" :loop="true"></swiper>

        <marquee class="my-marquee">
          <marquee-item v-for="list in marqueeList">{{list.title}}</marquee-item>
        </marquee>
        
        <panel
          :list="dataList"
        ></panel>   

        <panel
          :list="moreDataList"
        ></panel>   
      </scroller>

      <tabbar slot="bottom">
        <tabbar-item>
          <img src="./assets/home.png" slot="icon">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <img src="./assets/play.png" slot="icon">
          <span slot="label">功能</span>
        </tabbar-item>
        <tabbar-item>
          <img src="./assets/order.png" slot="icon">
          <span slot="label">购票</span>
        </tabbar-item>
        <tabbar-item>
          <img src="./assets/user.png" slot="icon">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
    <router-view/>
  </div>
</template>

<script>
import {ViewBox, XHeader, Tabbar, TabbarItem, Tab, TabItem, Scroller as sc, Swiper, Marquee, MarqueeItem, Panel } from 'vux'

var refreshKey = ['A','B01','B02','B03','B04','B05','B06','B07','B08','B09','B010'];
var key = 0;
var start = 0;
var end = start+9;

var keyVlaue = 'A';

var initLoaded = false; // 初始化数据是否加载完成

function getRefreshKey(){
  key++;
  if(key==refreshKey.length-1) {
    key=0
  }

  keyVlaue = refreshKey[key];
  
  return keyVlaue
}

export default {
  name: 'App',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    sc,
    Swiper,
    Marquee,
    MarqueeItem,
    Panel
  },
  created () {

    // 轮播图的数据
    this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data=>{
      console.log(data)
      this.swiperList = data.focus.filter(item=>{
        return item.addata === null
      }).map(item=>{
        return {
          url: item.link,
          img: item.picInfo[0].url,
          title: item.title
        }
      })
    })

    // 首屏新闻列表的数据
    this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data=>{
      this.dataList = data.list.filter(item=>{
        return item.addata === null && item.digest != ''
      }).map(item=>{
        return {
          src: item.picInfo[0].url,
          title: item.title,
          desc: item.digest,
          url: item.link
        }
      })
    })

    // 首屏滚动数据
    this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data=>{
      this.marqueeList = data.live.filter(item=>{
        return item.addata === null
      }).map(item=>{
        return {
          title: item.title
        }
      })
    })

    initLoaded = true
  },
  data () {
    return {
      swiperList: [],
      swiperIndex: 0,
      dataList: [],
      marqueeList: [],
      moreDataList: []
    }
  },
  methods:{
    refresh () {
      // 下拉数据加载
      getRefreshKey()
      this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html', {
        miss: '00',
        refresh: keyVlaue
      }).then(data=>{
        // 刷新首屏新闻列表数据
        this.dataList = data.list.filter(item=>{
          return item.addata === null && item.digest != ''
        }).map(item=>{
          return {
            src: item.picInfo[0].url,
            title: item.title,
            desc: item.digest,
            url: item.link
          }
        })

        this.$refs.myRef.finishPullToRefresh()
        this.$vux.toast.text(`当前一共刷新了${this.dataList.length}条`,'top')
      })
    },
    infinite () {
      if(!initLoaded){
        this.$refs.myRef.finishInfinite()
        return;
      }
      this.$jsonp(`http://3g.163.com/touch/jsonp/sy/recommend/${start}-${end}.html`,{
        miss: '00',
        refresh: keyVlaue
      }).then(data=>{

        // 上拉加载更多
        this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data=>{

          setTimeout(()=>{
            var dataList = data.list.filter(item=>{
              return item.addata === null && item.digest != ''
            }).map(item=>{
              return {
                src: item.picInfo[0].url,
                title: item.title,
                desc: item.digest,
                url: item.link
              }
            })

            this.moreDataList = this.moreDataList.concat(dataList)
            start += 10
            end = start + 9
            this.$refs.myRef.finishInfinite()
          }, 500)
        })

      })
    }
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
