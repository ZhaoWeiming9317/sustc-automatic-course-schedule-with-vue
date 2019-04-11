import {
  TO_MOVE,
  CHANGE_MODE,
  SHOW_LOADING,
  HIDE_LOADING,
  LOGIN,
  LOGOUT,
  USERNAME,
  SHOW_ANSWER,
  DEEP_CLONE
} from './mutation-types.js'

import api from '../axios.js'
import {MessageBox} from 'element-ui'

export default {
  [TO_MOVE] (state, finalTarget) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    var timer = null
    var leader = scrollTop // 移动元素当前的位置
    var target = finalTarget// 目标位置
    timer = setInterval(function () {
      // 获取步长
      var newScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var step = (target - leader) / 5
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      // 二次处理步长

      // 要爆了
      if ((Math.abs(newScrollTop - target) <= Math.abs(step))) {
        window.scrollTo(0, finalTarget)
        // 清除定时器
        clearInterval(timer)
        // 防止重复点击按钮
      }
      leader = leader + step
      // 屏幕(页面)滚动
      window.scrollTo(0, leader) // 屏幕(页面)滚动到某个位
    }, 25)
  },
  [CHANGE_MODE] (state) {
    // if now is daytime mode , we should change to night mode
    if (state.daytime === true) {
      state.daytime = false
      state.nighttime = true
      state.img_src = require('../assets/nightimage.jpg')
    } else if (state.daytime === false) {
      state.daytime = true
      state.nighttime = false
      state.img_src = require('../assets/stair.jpg')
    }
  },

  [SHOW_LOADING] (state) {
    state.LOADING = true
  },

  [HIDE_LOADING] (state) {
    state.LOADING = false
  },

  [LOGIN]: (state, data) => {
    // 更改token的值
    state.token = data
    window.sessionStorage.setItem('token', data)
  },

  [LOGOUT]: (state) => {
    // 登出的时候要清除token
    state.token = null
    window.sessionStorage.removeItem('token')
  },

  [USERNAME]: (state, data) => {
    // 把用户名存起来
    state.username = data
    window.sessionStorage.setItem('username', data)
  },

  [SHOW_ANSWER]: (state) => {
    state.answerTableData1 = JSON.parse(JSON.stringify(state.answerTableData))
    state.answerTableData2 = JSON.parse(JSON.stringify(state.answerTableData))
    state.answerTableData3 = JSON.parse(JSON.stringify(state.answerTableData))
    state.answerTableData4 = JSON.parse(JSON.stringify(state.answerTableData))
    const params = new URLSearchParams()
    // 1是必修 0是可选 2是条件
    for (let i = 0; i < state.chosenCourseData.length; i++) {
      params.append(state.chosenCourseData[i].id, 1)
    }
    for (let i = 0; i < state.chosenOptionCourseData.length; i++) {
      params.append(state.chosenOptionCourseData[i].id, 0)
    }
    for (let i = 0; i < state.chosenConditionData.length; i++) {
      params.append(state.chosenConditionData[i].type, 2)
    }
    api.getMyAnswer(params).then(({data}) => {
      if (data.coder === 1) {
        MessageBox({
          title: '很抱歉',
          showClose: true,
          message: data.messager,
          type: 'error'
        })
      } else if (data.coder === 0) {
        MessageBox({
          title: '恭喜',
          showClose: true,
          message: data.messager,
          type: 'success'
        })
      }
      let courses = data.courses
      console.log(data.courses)
      console.log(courses.length)
      state.one = true
      state.two = false
      state.three = false
      state.four = false
      // 先通过这个获得每个课程的信息，依次放入固定的位置
      if (courses.length >= 1) {
        for (let i = 0; i < courses[0].length; i++) {
          let cour = courses[0][i]
          let times = cour.times
          let course = cour.course
          // 在获得某个课程的时间段
          for (let j = 0; j < times.length; j++) {
            let weekday = times[j].weekDay
            let section = times[j].section
            let SingleOrDouble = ''
            if (times[j].week === -1) {
              SingleOrDouble = '(单)'
            } else if (times[j].week === -2) {
              SingleOrDouble = '(双)'
            }
            switch (weekday) {
              case 1:
                state.answerTableData1[section - 1].monday = `${state.answerTableData1[section - 1].monday} ${course} ${SingleOrDouble}`
                break
              case 2:
                state.answerTableData1[section - 1].tuesday = `${state.answerTableData1[section - 1].tuesday} ${course} ${SingleOrDouble}`
                break
              case 3:
                state.answerTableData1[section - 1].wednesday = `${state.answerTableData1[section - 1].wednesday} ${course} ${SingleOrDouble}`
                break
              case 4:
                state.answerTableData1[section - 1].thursday = `${state.answerTableData1[section - 1].thursday} ${course} ${SingleOrDouble}`
                break
              case 5:
                state.answerTableData1[section - 1].friday = `${state.answerTableData1[section - 1].friday} ${course} ${SingleOrDouble}`
                break
              case 6:
                state.answerTableData1[section - 1].saturday = `${state.answerTableData1[section - 1].saturday} ${course} ${SingleOrDouble}`
                break
              case 7:
                state.answerTableData1[section - 1].sunday = `${state.answerTableData1[section - 1].sunday} ${course} ${SingleOrDouble}`
                break
            }
          }
        }
        state.one = true
      }
      if (courses.length >= 2) {
        for (let i = 0; i < courses[1].length; i++) {
          let cour = courses[1][i]
          let times = cour.times
          let course = cour.course
          for (let j = 0; j < times.length; j++) {
            console.log(j)
            let weekday = times[j].weekDay
            let section = times[j].section
            let SingleOrDouble = ''
            if (times[j].week === -1) {
              SingleOrDouble = '(单)'
            } else if (times[j].week === -2) {
              SingleOrDouble = '(双)'
            }
            switch (weekday) {
              case 1:
                state.answerTableData2[section - 1].monday = `${state.answerTableData2[section - 1].monday} ${course} ${SingleOrDouble}`
                break
              case 2:
                state.answerTableData2[section - 1].tuesday = `${state.answerTableData2[section - 1].tuesday} ${course} ${SingleOrDouble}`
                break
              case 3:
                state.answerTableData2[section - 1].wednesday = `${state.answerTableData2[section - 1].wednesday} ${course} ${SingleOrDouble}`
                break
              case 4:
                state.answerTableData2[section - 1].thursday = `${state.answerTableData2[section - 1].thursday} ${course} ${SingleOrDouble}`
                break
              case 5:
                state.answerTableData2[section - 1].friday = `${state.answerTableData2[section - 1].friday} ${course} ${SingleOrDouble}`
                break
              case 6:
                state.answerTableData2[section - 1].saturday = `${state.answerTableData2[section - 1].saturday} ${course} ${SingleOrDouble}`
                break
              case 7:
                state.answerTableData2[section - 1].sunday = `${state.answerTableData2[section - 1].sunday} ${course} ${SingleOrDouble}`
                break
            }
          }
        }
        state.two = true
      }
      if (courses.length >= 3) {
        for (let i = 0; i < courses[2].length; i++) {
          let cour = courses[2][i]
          let times = cour.times
          let course = cour.course
          // 在获得某个课程的时间段
          for (let j = 0; j < times.length; j++) {
            let weekday = times[j].weekDay
            let section = times[j].section
            let SingleOrDouble = ''
            if (times[j].week === -1) {
              SingleOrDouble = '(单)'
            } else if (times[j].week === -2) {
              SingleOrDouble = '(双)'
            }
            switch (weekday) {
              case 1:
                state.answerTableData3[section - 1].monday = `${state.answerTableData3[section - 1].monday} ${course} ${SingleOrDouble}`
                break
              case 2:
                state.answerTableData3[section - 1].tuesday = `${state.answerTableData3[section - 1].tuesday} ${course} ${SingleOrDouble}`
                break
              case 3:
                state.answerTableData3[section - 1].wednesday = `${state.answerTableData3[section - 1].wednesday} ${course} ${SingleOrDouble}`
                break
              case 4:
                state.answerTableData3[section - 1].thursday = `${state.answerTableData3[section - 1].thursday} ${course} ${SingleOrDouble}`
                break
              case 5:
                state.answerTableData3[section - 1].friday = `${state.answerTableData3[section - 1].friday} ${course} ${SingleOrDouble}`
                break
              case 6:
                state.answerTableData3[section - 1].saturday = `${state.answerTableData3[section - 1].saturday} ${course} ${SingleOrDouble}`
                break
              case 7:
                state.answerTableData3[section - 1].sunday = `${state.answerTableData3[section - 1].sunday} ${course} ${SingleOrDouble}`
                break
            }
          }
        }
        state.three = true
      }
      if (courses.length >= 4) {
        for (let i = 0; i < courses[3].length; i++) {
          let cour = courses[3][i]
          let times = cour.times
          let course = cour.course
          // 在获得某个课程的时间段
          for (let j = 0; j < times.length; j++) {
            let weekday = times[j].weekDay
            let section = times[j].section
            let SingleOrDouble = ''
            if (times[j].week === -1) {
              SingleOrDouble = '(单)'
            } else if (times[j].week === -2) {
              SingleOrDouble = '(双)'
            }
            switch (weekday) {
              case 1:
                state.answerTableData4[section - 1].monday = `${state.answerTableData4[section - 1].monday} ${course} ${SingleOrDouble}`
                break
              case 2:
                state.answerTableData4[section - 1].tuesday = `${state.answerTableData4[section - 1].tuesday} ${course} ${SingleOrDouble}`
                break
              case 3:
                state.answerTableData4[section - 1].wednesday = `${state.answerTableData4[section - 1].wednesday} ${course} ${SingleOrDouble}`
                break
              case 4:
                state.answerTableData4[section - 1].thursday = `${state.answerTableData4[section - 1].thursday} ${course} ${SingleOrDouble}`
                break
              case 5:
                state.answerTableData4[section - 1].friday = `${state.answerTableData4[section - 1].friday} ${course} ${SingleOrDouble}`
                break
              case 6:
                state.answerTableData4[section - 1].saturday = `${state.answerTableData4[section - 1].saturday} ${course} ${SingleOrDouble}`
                break
              case 7:
                state.answerTableData4[section - 1].sunday = `${state.answerTableData4[section - 1].sunday} ${course} ${SingleOrDouble}`
                break
            }
          }
        }
        state.four = true
      }
    })
  },

  [DEEP_CLONE]: (state, obj) => {
    let _obj = JSON.stringify(obj)
    return JSON.parse(_obj)
  }
}
