import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Img from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children: [
        {
          path: 'title',
          name: 'Title',
          component: Title
        },
        {
          path: 'img',
          name: 'Img',
          component: Img
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
