// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false;

import iView from 'iview'; // 导入组件库

import 'iview/dist/styles/iview.css'; // 导入样式

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
