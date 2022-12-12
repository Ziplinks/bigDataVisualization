import Vue from 'vue'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
// 引入适配方案
// import './utils/flexible'
import '@/styles/base.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import * as echarts from 'echarts';
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
