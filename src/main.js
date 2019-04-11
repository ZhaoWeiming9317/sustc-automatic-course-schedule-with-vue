// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用字体
import './style/index.less'
// 引用ElementUI,一种类似bootstrap的框架
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import animate from 'animate.css'
import store from './store/index'

Vue.use(animate)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: {App},
  template: '<App/>'
})
