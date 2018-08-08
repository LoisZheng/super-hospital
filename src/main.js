// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';

import '@/assets/css/reset.css'
import '@/assets/css/common.scss'

import '@/assets/iconfont/iconfont.css'

import services from '@/services/services.js'

import store from '@/store/index.js'

Vue.config.productionTip = false

Vue.prototype.$services = services

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
