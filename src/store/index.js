// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 需要注册vuex到vue中
Vue.use(Vuex)

const state = {
  show: false,
  show_function: false, // 展现功能模块
  show_day: false, // 展现日间过场动画
  show_night: false, // 展现夜晚过场动画
  log_module: true, // 现在是登录模式
  daytime: true, // 现在是日间模式
  nighttime: false, // 现在是夜间模式
  img_src: require('../assets/stair.jpg'),
  LOADING: true, // 现在的状态是load吗
  chosenCourseData: [], // 全部已经选择了的课程
  chosenOptionCourseData: [],
  chosenConditionData: [], // 全部已经选择了的条件
  token: window.sessionStorage.getItem('token'), // 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
  username: '',
  totalConditionData: [],
  totalMandatoryData: [],
  totalOptionData: [],
  totalCommonData: [],
  totalCommonOptionData: [],
  totalCourseData: [],
  answerTableData: [{
    de: '第一节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第二节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第三节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第四节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第五节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第六节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }
  ], // 空课表
  answerTableData1: [{
    de: '第一节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第二节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第三节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第四节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第五节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第六节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }
  ], // 第一个课表
  answerTableData2: [{
    de: '第一节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第二节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第三节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第四节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第五节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第六节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }
  ], // 第二个课表
  answerTableData3: [{
    de: '第一节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第二节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第三节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第四节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第五节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第六节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }
  ], // 第三个课表
  answerTableData4: [{
    de: '第一节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第二节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第三节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第四节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第五节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }, {
    de: '第六节课',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  }
  ], // 第四个课表
  one: false,
  two: false,
  three: false,
  four: false
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
