import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/views/GoodList'
import VueLazyLoad from 'vue-lazyload'

Vue.use(Router)

Vue.use(VueLazyLoad,{
    loading: "/static/loading/loading-bars.svg"
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodList',
      component: GoodList
    }
  ]
})
