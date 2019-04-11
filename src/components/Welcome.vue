<template>
  <div class="wel_fun_wrapper">
    <div class="image_cover">
    </div>
    <!--to_day-->
    <transition name="el-zoom-in-top" enter-active-class="animated fadeIn">
      <div class="to_day" v-show=day>
        <img src="../assets/Sun_Horizon.jpg" class="to_image">
        <img src="../assets/bird.png" class="to_image_bird">
        <img src="../assets/city.png" class="to_image_city">
      </div>
    </transition>
    <!--to_night-->
    <transition name="el-zoom-in-top" enter-active-class="animated fadeIn">
      <div class="to_night" v-show=night>
        <img src="../assets/DarkOcean.jpg" class="to_image">
        <img src="../assets/star.png" class="to_image_star">
        <img src="../assets/city.png" class="to_image_city">
      </div>
    </transition>
    <div class="wel_wrapper" :class="{night:isnighttime,night_wel:isnighttime,day_wel:isdaytime}">
      <p class = 'wel_text' style = 'font-weight: normal; padding-top: 290px'></p>
      <p class = 'wel_text' style = 'font-weight: bold; padding-top: 30px;'>自动排课系统</p>
      <el-button round style="color:#818181;opacity:0.8;font-size: 20px; width:200px ; margin: 0 auto;margin-top: 40px;display: block" v-on:click="to_function()">explore now</el-button>
    </div>
    <div class="function_wrapper" :class="{night:isnighttime,day:isdaytime}">
      <el-row :gutter="24">
        <transition name="el-zoom-in-top" enter-active-class="animated pulse">
          <div v-show="this.$store.state.show_function" class="total_introduction">
            <h2 class = "introduction_title">功&nbsp;能&nbsp;介&nbsp;绍</h2>
            <el-col :md ="4" :lg="6" :xl="8">
              <blank></blank>
            </el-col>
            <el-col :md ="4" :lg="3" :xl="2">
              <div class="intro">
                <img src="../assets/brush_fill.png" class="image_intro">
                <p class = "intro_subtitle">选课</p>
                &nbsp;
                &nbsp;
                <p>根据培养方案在下方选课，你选的课会出现在右边的列表，当然您可以删掉不想选的课程
                </p>
              </div>
            </el-col>
            <el-col :md ="0" :lg="0" :xl="0">
              <blank></blank>
            </el-col>
            <el-col :md ="4" :lg="3" :xl="2">
              <div class="intro">
                <img src="../assets/integral_fill.png" class="image_intro">
                <p class = "intro_subtitle">条件</p>
                &nbsp;
                <p>
                  根据您的实际需求，选出选课的条件，我们将尽可能地帮助您排课。我们会尽量给最优解
                </p>
              </div>
            </el-col>
            <el-col :md ="0" :lg="0" :xl="0">
              <blank></blank>
            </el-col>
            <el-col :md ="4" :lg="3" :xl="2">
              <div class="intro">
                <img src="../assets/flashlight_fill.png" class="image_intro">
                <p class = "intro_subtitle">排课</p>
                &nbsp;
                <p>当您选择好了所有您想学的课程以及您的所有需求条件，那么你就可以点击开始排课按钮
                </p>
              </div>
            </el-col>
            <el-col :md ="0" :lg="0" :xl="0">
              <blank></blank>
            </el-col>
            <el-col :md ="4" :lg="3" :xl="2">
              <div class="intro">
                <img src="../assets/praise_fill.png" class="image_intro">
                <p class = "intro_subtitle">结果</p>
                &nbsp;
                <p>在排完课后，我们将给您提供几个方案，每种方案的结果会以表格的形式为您展现出来哦
                </p>
              </div>
            </el-col>
            <el-col :md ="4" :lg="6" :xl="8">
              <blank></blank>
            </el-col>
          </div>
        </transition>
      </el-row>
    </div>
  </div>
</template>

<script>
import blank from '@/components/Blank'
export default {
  data () {
    return {
    }
  },
  computed: {
    day () {
      return this.$store.state.show_day
    },
    night () {
      return this.$store.state.show_night
    },
    isdaytime () {
      return this.$store.state.daytime
    },
    isnighttime () {
      return this.$store.state.nighttime
    }
  },
  name: 'Welcome',
  components: {
    blank
  },
  methods: {
    to_function () {
      if (this.flag_click === true) {
        this.flag_click = false
      }
      this.$store.commit('TO_MOVE', 900)
      setTimeout(this.canClick, 800)
    }
  }
}

</script>

<style scoped>
  .wel_fun_wrapper{
    position: relative;
    height: 1500px;
    background-color: #f6f6f6;
  }
  .to_image{
    position: fixed;
    height: 100%;
    width: 100%;
  }
  .to_image_city{
    position: absolute;
    width: 100%;
    height: 100%;
    animation: upCity 1s linear infinite;
  }
  .to_image_star{
    position: absolute;
    height: 60%;
    width: 60%;
    display: block;
    animation: meteor 1s ease-in infinite;
  }
  .to_image_bird{
    position: absolute;
    height: 60%;
    width: 60%;
    display: block;
    animation: birdFly 1s ease-in infinite;
  }
  @keyframes birdFly
  {
    0%  {
      right: 50%;
      bottom: 20%;
    }
    50% {
      right: 45%;
      bottom: 25%;
    }
    100% {
      right: 40%;
      bottom: 30%;
    }
  }
  @keyframes upCity
  {
    0%  {
      bottom: -40%;
    }
    60% {
      bottom: 0%;
    }
    100% {
      bottom: 0%;
    }
  }
  @keyframes meteor
  {
    from {
      top: 0%;
      right: 0%;
    }
    to {
      top: 100%;
      right: 70%;
    }
  }

  .to_day{
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,1);
    z-index: 150;
    position: fixed;
  }
  .to_night{
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,1);
    z-index: 150;
    position: fixed;
  }
  .home_image{
    z-index: 0;
  }
  .function_wrapper{
    position: relative;
    padding-top: 100px;
    height: 500px;
    padding-bottom: 100px;
  }

  .wel_wrapper {
    position: relative;
    height: 900px;
    display:block;
    width: 100%;
    background-size: cover;
  }
  .night_wel{
    background: url("../assets/welcome_image_1.png");
    background-size: cover;
  }
  .day_wel{
    background: url("../assets/welcome_image_4.png");
    background-size: cover;
  }
  .wel_text {
    display:block;
    width: 1000px;
    margin: 0 auto;
    text-align:center;
    font-size: 80px;
    color: #F2F6FC;
    top: 200px;
    font-family: "WenYue";
  }
  i {
    display: block;
  }
  .total_introduction{
    margin-top: 100px;
    text-align:center;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif ;
  }
  .introduction_title{
    text-align:center;
    padding-bottom: 35px;
  }
  .intro_subtitle{
    line-height: 30px;
    font-size: 21px;
  }
  .intro{
    margin-top: 40px;
    line-height:26px;
    font-size: 17px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .image_intro{
    width: 40px;
    height: 40px;
    padding-bottom: 20px;
    margin:auto;
    transition:0.35s ease-in;/*变化的时间  必须将其写在这里，不可以写在hover里面  只有这样才可以滑出鼠标的时候 动画会以动画的方式自动返回 */
    -moz-transition:0.35s ease-in;
    -webkit-transition:0.35s ease-in;
  }
  .intro:hover .image_intro{
    transform:rotate(360deg)scale(1.5);/* 第一个参数旋转的角度 可以超过360  第二个参数为放大倍数大于1为放大 小于1为缩小*/
    -moz-transform:rotate(360deg)scale(1.5);
    -webkit-transform:rotate(360deg)scale(1.5);
    transform-origin:center center;
  }
  @media screen and (max-width: 500px) {
    .wel_text {
      font-size: 50px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .image_intro{
      width: 55px;
      height: 55px;
    }
    .wel_fun_wrapper{
      position: relative;
      height: 2400px;
      background-color: #f6f6f6;
    }
  }
</style>
