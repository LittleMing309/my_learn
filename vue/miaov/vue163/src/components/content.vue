<template>
	<div>
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
	      <marquee-item v-for="(list,index) in marqueeList" :key="index">{{list.title}}</marquee-item>
	    </marquee>
	    
	    <panel
	      :list="dataList"
	    ></panel>   

	    <panel
	      :list="moreDataList"
	    ></panel>   
	  </scroller>
	</div>
</template>
<script type="text/javascript">
import {ViewBox, Tabbar, TabbarItem, Tab, TabItem, Scroller as sc, Swiper, Marquee, MarqueeItem, Panel } from 'vux'
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