import axios from 'axios'
import store from './store'
import router from './router'

let base = 'http://192.168.1.100:5001'
// 设置全局axios默认值
axios.defaults.timeout = 5000 // 5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 创建一个axios实例
const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use = instance.interceptors.request.use

// request拦截器
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// response拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => { // 默认除了2XX之外的都是错误的，就会走这里
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.dispatch('UserLogout') // 可能是token过期，清除它
          router.replace({ // 跳转到登录页面
            path: 'login',
            query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
    }
    return Promise.reject(error.response)
  }
)

export default {
  // 测试
  test () {
    return instance.get('./static/mock/login.json')
  },

  getTotalCourse () {
    return instance.get(`${base}/courses`)
  },

  getTotalMandatory () {
    return instance.get(`${base}/courses/mandatory`)
  },

  getTotalOption () {
    return instance.get(`${base}/courses/option`)
  },

  getTotalCommon () {
    return instance.get(`${base}/courses/common`)
  },

  getTotalCommonOption () {
    return instance.get(`${base}/courses/common_option`)
  },

  getTotalCondition () {
    return instance.get('./static/mock/condition.json')
  },

  getMyAnswer (data) {
    return instance.post(`${base}/courses`, data)
  }
}
