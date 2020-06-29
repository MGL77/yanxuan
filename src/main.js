// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// rem开始
import "./assets/rem.js"
// rem结束

Vue.config.productionTip = false

// 全局状态管理工具开始
import VueAxios from "vue-axios"
import axios from "axios"
Vue.use(VueAxios, axios)
// 全局状态管理工具结束

// vant开始
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// vant结束

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
