// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.css'

Vue.config.productionTip = false

import Utile from './lib/utils'
Vue.use(Utile)

// Vue插件写法1
// Vue.prototype.$custom = '这是自定义属性'

/* Vue插件写法2
let obj = {
  install: function(Vue,options){
    console.log(Vue)
    console.log(options)
  }
}

Vue.use(obj,{a:1})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
