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
      <form v-on:submit.prevent="submit">
        <div style="padding-left: 40px">
          <label>用户名</label><input class = "ghost" type="text" name="user" v-model="registerForm.username" AUTOCOMPLETE="off"><br/>
          <label style="color: orangered" v-if = "btn && !registerForm.username">用户名不能为空</label>
          <br/>
          <label>密&nbsp;&nbsp; 码 </label><input class = "ghost" type="password" v-model="registerForm.password" name="password" AUTOCOMPLETE="off"><br/>
          <label style="color: orangered" v-if = "registerForm.password.length >= 1 && registerForm.password.length < 6">密码弱</label>
          <label style="color: yellow" v-if = "registerForm.password.length >= 6 && registerForm.password.length < 12">密码中</label>
          <label style="color: green" v-if = "registerForm.password.length >= 12">密码强</label>
          <br/>
          <label>再密码</label><input class = "ghost" type="password" name="password" AUTOCOMPLETE="off"><br/>
          <br/>
        </div>
        <input class = "ghost_botton" type="submit" style="cursor: pointer" value="注册">
      </form>
      <div style="margin-top: 20px; font_size: 25px">{{have_log}}？点击<scan @click="log_and_regist" style="color: #279fcf; cursor: pointer">登录</scan></div>
    </div>
  </div>
</template>

<script>
// import {mapActions} from 'vuex'
// import {USER_SIGNIN} from '@/store/actions'

export default {
  data () {
    return {
      title: '注 册',
      have_log: '已有账号',
      isRouterAlive: true,
      btn: false, // true 已经提交过， false没有提交过
      registerForm: {
        username: '',
        password: '',
        re_password: ''
      },
      notation: '用户名或密码错误或者不存在'
    }
  },
  computed: {
  },
  name: 'Log',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$store.commit('HIDE_LOADING')
      document.body.removeChild(document.getElementById('Loading'))
    },
    log_and_regist () {
      this.$router.push('/login')
    },
    // 异步登录
    async submit () {
      this.btn = true
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
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
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
    height: 580px;
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
    margin-top: 20px;
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
