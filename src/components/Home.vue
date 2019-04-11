<template>
  <div id="home">
    <mytitle></mytitle>
    <welcome></welcome>
    <div class="choose_wrapper" :class="{night:isnighttime,day:isdaytime}">
      <transition name="el-zoom-in-top" enter-active-class="animated pulse">
        <div id="course_condition_container" v-show="show_choose">
          <el-row :gutter="24">
            <el-col :sm="3" :md="5" :xl="7">
              <blank></blank>
            </el-col>
            <el-col :sm="8" :md="6" :xl="4">
              <div class="image_box" :class="{night_over:isnighttime}" @click="dialogVisible_course = true">
                <img src="../assets/book.jpg" class="image_choose">
                <span class="image_text">选课</span>
              </div>
              <el-dialog
                title="课程选择"
                :visible.sync="dialogVisible_course"
                width="95%"
                :before-close="handleClose">
                <el-row :gutter="24">
                  <el-col :md="2">
                    <blank></blank>
                  </el-col>
                  <el-col :md="12">
                    <course></course>
                  </el-col>
                  <el-col :md="1">
                    <blank></blank>
                  </el-col>
                  <el-col :md="7">
                    <chosen-course></chosen-course>
                  </el-col>
                  <el-col :md="4">
                    <blank></blank>
                  </el-col>
                </el-row>
              </el-dialog>
            </el-col>
            <el-col :sm="2" :md="2" :xl="2">
              <blank></blank>
            </el-col>
            <el-col :sm="8" :md="6" :xl="4">
              <div class="image_box" :class="{night_over:isnighttime}" @click="dialogVisible_condition = true" >
                <img src="../assets/clock.jpg" class="image_choose">
                <span class="image_text">条件</span>
              </div>
              <el-dialog
                title="条件选择"
                :visible.sync="dialogVisible_condition"
                width="95%"
                :before-close="handleClose">
                <el-row :gutter="24">
                  <el-col :md="2">
                    <blank></blank>
                  </el-col>
                  <el-col :md="12">
                    <condition></condition>
                  </el-col>
                  <el-col :md="1">
                    <blank></blank>
                  </el-col>
                  <el-col :md="7">
                    <chosen-condition></chosen-condition>
                  </el-col>
                  <el-col :md="4">
                    <blank></blank>
                  </el-col>
                </el-row>
              </el-dialog>
            </el-col>
            <el-col :sm="3" :md="5" :xl="7">
              <blank></blank>
            </el-col>
          </el-row>
        </div>
      </transition>
    </div>
    <div class="start_image_box" :class="{night_start:isnighttime}">
      <img v-bind:src= "img_src" id = "start_image_id" class="start_image">
      <span class="start_image_text" :class="{night_start:isnighttime}">
          <p>点击这里开始排课</p>
        <el-button round class="start_botton" v-on:click="get_answer()"></el-button>
      </span>
    </div>
    <div class="answer_wrapper" :class="{night:isnighttime,day:isdaytime}">
      <transition  enter-active-class="animated pulse">
        <div v-show="show_answer">
          <answer></answer>
        </div>
      </transition>
    </div>
    <div class="placeholder_box" :class="{night:isnighttime,day:isdaytime}">
    </div>
  </div>
</template>

<script>
import mytitle from '@/components/MyTitle'
import chosenCourse from '@/components/ChosenCourse'
import chosenCondition from '@/components/ChosenCondition'
import course from '@/components/Course'
import condition from '@/components/Condition'
import blank from '@/components/Blank'
import welcome from '@/components/Welcome'
import answer from '@/components/Answer'

export default {
  data () {
    return {
      show_choose: false,
      show_start: false,
      show_answer: false,
      dialogVisible_course: false,
      dialogVisible_condition: false
    }
  },
  computed: {
    isdaytime () {
      return this.$store.state.daytime
    },
    isnighttime () {
      return this.$store.state.nighttime
    },
    img_src () {
      return this.$store.state.img_src
    }
  },
  name: 'home',
  components: {
    welcome,
    mytitle,
    chosenCourse,
    chosenCondition,
    course,
    condition,
    blank,
    answer
  },
  created () {
    this.init()
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('click', this.beforeMount)
  },
  methods: {
    init () {
      this.$store.commit('HIDE_LOADING')
      document.body.removeChild(document.getElementById('Loading'))
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 500 && scrollTop <= 1200) {
        this.$store.state.show_function = true
      }
      if (scrollTop > 1200 && scrollTop <= 2000) {
        this.show_choose = true
      }
      if (scrollTop > 2000) {
        this.show_answer = true
      }
    },
    get_answer () {
      this.$store.commit('SHOW_ANSWER')
      this.$store.commit('TO_MOVE', 2400)
    }
  }
}

</script>

<style>
  .night {
    background-color:  #606266;
    color: #a1a1a1;
    z-index: 10;
  }
  .day {
    background-color:  #f6f6f6;
    color: #606266;
  }
  html,body{
    width:100%;
    height:100%;
    background-color: #f6f6f6;
  }
  #home{
    overflow:hidden;
  }
  .choose_wrapper{
    position: relative;
    height:400px;
    padding-top: 200px;
    padding-bottom: 100px;
  }
  .answer_wrapper{
    position: relative;
  }
  .start_image_text {
    display: block;
    font-size: 60px;
    font-family: WenYue;
    margin-top: 240px;
    color: #fff;
    width: 100%;
    height: 260px;
    text-align: center;
    line-height: 50px;
    z-index: 70;
  }
  .start_image{
    position: fixed;
    background-size: cover;
    opacity: 0.7;
    display:block;
    width: 100%;
    height: 100%;
    top: 0px;
    overflow: hidden;
    z-index: -1;
  }
  .start_image_box{
    display:block;
    height: 600px;
    width: 100%;
    overflow: hidden;
  }
  .placeholder_box {
    position: relative;
    height: 400px;
    z-index: 1;
  }
  .image_box{
    position:relative;
    cursor:pointer;
    display:block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .night_over{
    opacity: 0.3;
    z-index: 70;
  }
  .night_start{
   opacity: 0.8;
   z-index: 100;
  }
  .image_choose{
    display: block;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    -moz-transition: 0.3s;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
  }
  .image_text{
    position:absolute;
    font-size: 40px;
    font-family: WenYue;
    color: white;
    width:100%;
    height:50%;
    display:block;
    text-align:center;
    line-height:50%;
    top:45%;
  }
  .image_box:hover .image_text{
    font-size: 60px;
    opacity: 0.9;
  }
  .image_box:hover .image_choose{
    transform:scale(1.5);
    -webkit-transform:scale(1.5);
    -moz-transform:scale(1.5);
    opacity: 0.6;
    display:block
  }
  .start_botton{
    margin-top: 30px;
    height: 50px;
    width: 100px;
  }
  @media screen and (max-width: 500px) {
    #course_condition_container{
      margin-top: 0px;
    }
    .start_image_text {
      color: black;
      font-size: 25px;
      top: 0px;
    }
    .start_botton{
      margin-top: -10px;
      height: 10px;
      width: 20px;
    }
    .start_image{
      position: fixed;
      background-size: cover;
      opacity: 0.7;
      display:block;
      width: 100%;
      height: 50%;
      top: 0px;
      overflow: hidden;
      z-index: -1;
    }
    .start_image_box{
      display:block;
      height: 600px;
      width: 100%;
      overflow: hidden;
      padding-top: 300px;
    }
  }
</style>
