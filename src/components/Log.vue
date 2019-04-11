<template>
  <div class="login_box">
    <div class="login_back">
    </div>
    <div class="card log_context">
      <div class="card_header" style="padding-top: 50px;font-size: 20px;">
        自 动 排 课 工 具
      </div>
      <div class="card_header" style="padding-top: 20px;font-size: 45px;">
        {{title}}
      </div>
      <form v-on:submit.prevent="submitForm" ref="loginForm">
        <div style="padding-left: 40px">
          <label>用户名</label><input class = "ghost" type="text" name="username" v-model="loginForm.username" AUTOCOMPLETE="off"><br/>
          <label style="color: orangered" v-if = "btn && !loginForm.username">用户名不能为空</label>
          <br/>
          <label>密&nbsp;&nbsp; 码 </label><input id="loginPassword" class = "ghost" type="password" v-model="loginForm.password" name="password" AUTOCOMPLETE="off"><br/>
          <label style="color: orangered" v-if = "btn && !loginForm.password">密码不能为空</label>
          <label style="color: orangered" v-if = "btn && loginForm.password.length < 6 && loginForm.password">密码太短了</label>
          <br/>
        </div>
          <input class = "ghost_botton" type="submit" style="cursor: pointer" value="登录">
      </form>
      <div style="margin-top: 20px; font_size: 25px">{{have_log}}？点击<scan @click="log_and_regist" style="color: #279fcf; cursor: pointer">注册</scan></div>
    </div>
  </div>
</template>

<script>
// import {mapActions} from 'vuex'
// import {USER_SIGNIN} from '@/store/actions'
import api from '../axios.js'

export default {
  data () {
    return {
      title: '登 录',
      have_log: '没有账号',
      isRouterAlive: true,
      btn: false, // true 已经提交过， false没有提交过
      loginForm: {
        username: '',
        password: ''
      },
      notation: '用户名或密码错误或者不存在'
    }
  },
  computed: {},
  name: 'Log',
  mounted () {
    this.init()
    this.testGet()
  },
  methods: {
    init () {
      this.$store.commit('HIDE_LOADING')
      document.body.removeChild(document.getElementById('Loading'))
    },
    log_and_regist () {
      this.$router.push('/register')
    },
    resetForm () {
      var loginPassword = document.getElementById('loginPassword')
      loginPassword.value = ''
    },
    submitForm () {
      // let opt = this.loginForm
      api.test().then(({data}) => { // 解构赋值拿到data
        // 账号不存在
        if (data.info === false) {
          this.$message({
            type: 'error',
            message: '账号不存在'
          })
          return
        }
        // 账号存在
        if (data.success === true) {
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          let token = data.token
          let username = data.username
          this.$store.dispatch('UserLogin', token)
          this.$store.dispatch('UserName', username)
          // 如果用户手动输入"/"那么会跳转到这里来，即this.$route.query.redirect有参数
          // let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/')
          // 跳转到指定的路由
          this.$router.push({
            path: '/home'
          })
        } else {
          this.$message({
            type: 'error',
            message: '密码错误！'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .login_back{
    position: absolute;
    background-repeat: no-repeat;
    background: url("../assets/welcome_image_4.png");
    background-size: cover;
    width: 100%;
    height: 100vh;
    clear:both;
    padding-right: 15px;
    -webkit-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
 .login_box{
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(255, 255, 255, 0);
   overflow-y: scroll;
 }
 .card{
   z-index: 50;
   width: 400px;
   height: 550px;
   background: rgba(190, 190, 190, 0.3);
   border: 5px solid rgba(255, 255, 255, 0.5);
   border-radius: 15px;
   box-shadow: 0 1px 3px rgba(26,26,26,.1);
   box-sizing: border-box;
   text-align: center;
 }
 .ghost{
   width: 250px;
   height: 35px;
   background: rgba(255, 255, 255, 0.1);
   border: 2px solid rgba(255, 255, 255, 0.9);
   border-radius: 25px;
   margin: 0 auto;
   margin-top: 40px;
   margin-left: -50px;
   outline:none;
 }
 .ghost_botton{
   width: 100px;
   height: 50px;
   background: rgba(255, 255, 255, 0.1);
   border: 2px solid rgba(255, 255, 255, 0.9);
   border-radius: 25px;
   margin: 0 auto;
   margin-top: 40px;
 }
 .ghost_botton :hover{
   cursor: hand;
 }
  .log_context{
    color: #ffffff;
    width: 432px;
  }
  input{
    font-size: 18px;
    color: white;
  }
  label{
    position: relative;
    left: -65px;
  }
</style>
