<!--suppress ALL -->
<template>
  <div class = "contain_title_wrapper">
    <div class = "contain_title" id = "contain_title_id"  :class="{night_nav:isnighttime,day_nav:isdaytime}" v-show="mytitle_show">
      <p class = "title">&nbsp;&nbsp;南科大排课</p>
      <p class = "subtitle">SUSTC course scheduling </p>
      <div class = "total_nav">
        <span class = "total_nav_item" @click="flag_click && to_home()">首页</span>
        <span class = "total_nav_item" @click="flag_click && to_function()">功能</span>
        <span class = "total_nav_item" @click="flag_click && to_choose()">选课/条件</span>
        <span class = "total_nav_item" @click="flag_click && to_solution()">排课结果</span>
        <span class = "total_nav_item" @click="flag_click && change_mode()">{{msg}}</span>
        <span class = "total_nav_item" @click="flag_click && quit()">退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTitle',
  data () {
    return {
      mytitle_show: false,
      flag_click: true,
      msg: '夜间模式'
    }
  },
  computed: {
    isdaytime () {
      return this.$store.state.daytime
    },
    isnighttime () {
      return this.$store.state.nighttime
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    canClick () {
      this.flag_click = true
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var anchor = document.getElementById('contain_title_id')
      if (scrollTop > 500) {
        anchor.style.opacity = 1
        this.mytitle_show = true
      }
      if (scrollTop <= 500) {
        anchor.style.opacity = 0
        this.mytitle_show = true
      }
    },
    to_home () {
      if (this.flag_click === true) {
        this.flag_click = false
      }
      this.$store.commit('TO_MOVE', 0)
      setTimeout(this.canClick, 800)
    },
    to_function () {
      if (this.flag_click === true) {
        this.flag_click = false
      }
      this.$store.commit('TO_MOVE', 900)
      setTimeout(this.canClick, 800)
    },
    to_choose () {
      if (this.flag_click === true) {
        this.flag_click = false
      }
      this.$store.commit('TO_MOVE', 1500)
      setTimeout(this.canClick, 800)
    },
    to_solution () {
      if (this.flag_click === true) {
        this.flag_click = false
      }
      this.$store.commit('TO_MOVE', 2600)
      setTimeout(this.canClick, 800)
    },
    change_mode () {
      var that = this
      if (this.$store.state.daytime === true) {
        this.msg = '日间模式'
        this.$store.state.startImage = require('../assets/nightimage.jpg')
        this.$store.state.show_night = true
        setTimeout(function () {
          that.$store.state.show_night = false
          that.$store.commit('CHANGE_MODE')
        }, 1000)
      } else {
        this.msg = '夜间模式'
        this.$store.state.startImage = require('../assets/stair.jpg')
        this.$store.state.show_day = true
        setTimeout(function () {
          that.$store.state.show_day = false
          that.$store.commit('CHANGE_MODE')
        }, 1000)
      }
    },
    quit () {
      this.$store.commit('LOGOUT')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  #contain_title_id{
    opacity: 1;
    top: 0px;
    width: 100%;
    height: 48px;
    position:fixed;
    z-index: 100;
  }
  .night_nav {
    background-color:  #4C4C4C;
    color: gray;
  }
  .day_nav {
    background-color:  #ffffff;
    color: #303133;
  }
  .contain_title {
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .title {
    display: inline;
    font-size: 38px;
    margin-bottom: 12px;
    margin-top: 12px;
    margin-left: 45px;
    font-family: WenYue;
  }
  .subtitle {
    display: inline;
    font-size: 21px;
    margin-bottom: 12px;
    margin-left: 20px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .total_nav{
    margin-top: 12px;
    position: absolute;
    display: inline;
    right: 50px;
  }
  .total_nav_item{
    cursor:pointer;
    margin-left: 30px;
    padding: 15px;
    font-size: 18px;
    display: inline;
  }
  @media screen and (max-width: 500px) {
    .title{
      font-size: 24px;
      margin-left: -8px;
    }
    .subtitle {
      display: none;
    }
  }
  @media screen and (max-width: 1300px) {
    .total_nav{
      right: 10px;
    }
    .total_nav_item{
      margin-left: 20px;
      padding: 10px;
    }
  }
  @media screen and (max-width: 1000px) {
    .total_nav{
      display: none;
    }
  }
</style>
