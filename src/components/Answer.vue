<template>
  <div class="answer_total_wrapper">
      <div v-if="one" class="firstTable son_table">
        <transition name="el-zoom-in-top" enter-active-class="animated fadeInLeft">
          <el-row :gutter="24">
            <el-col :md ="2" :lg="2" :xl="4">
              <div>
                &nbsp;
              </div>
            </el-col>
            <!--
            <el-col :md ="4" :lg="6" :xl="4">
              <el-card class="answer_wrapper hidden-sm-and-down" shadow="never">
                <div class="error_text">
                  <span>先修课未读，因此离散数学不能学</span>
                </div>
              </el-card>
            </el-col>
             -->
            <el-col :md ="20" :lg="20" :xl="12">
              <el-card class="answer_wrapper" shadow="never">
                <el-table class="first_table"
                          :data="answerTableData1"
                          style="width: 100%"
                          height="400">
                  <el-table-column
                    fixed
                    prop="de"
                    label=""
                    width="120">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="monday"
                    label="星期一"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="tuesday"
                    label="星期二"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="wednesday"
                    label="星期三"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="thursday"
                    label="星期四"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="friday"
                    label="星期五"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="saturday"
                    label="星期六"
                    width="160">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="sunday"
                    label="星期天"
                    width="160">
                  </el-table-column>
                </el-table>
              </el-card>
            </el-col>
            <el-col :md ="2" :lg="2" :xl="4">
              <div>
                &nbsp;
              </div>
            </el-col>
          </el-row>
        </transition>
      </div>
      <div v-if="two" class="secondTable son_table">
        <transition name="el-zoom-in-top" enter-active-class="animated fadeInLeft">
          <el-row :gutter="24">
            <el-col :md ="2" :lg="2" :xl="4">
              <div>
                &nbsp;
              </div>
            </el-col>
            <el-col :md ="20" :lg="20" :xl="12">
              <el-card class="answer_wrapper" shadow="never">
                <el-table class="second_table"
                          :data="answerTableData2"
                          style="width: 100%"
                          height="400">
                  <el-table-column
                    fixed
                    prop="de"
                    label=""
                    width="120">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="monday"
                    label="星期一"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="tuesday"
                    label="星期二"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="wednesday"
                    label="星期三"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="thursday"
                    label="星期四"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="friday"
                    label="星期五"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="saturday"
                    label="星期六"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="sunday"
                    label="星期天"
                    width="150">
                  </el-table-column>
                </el-table>
              </el-card>
            </el-col>
              <!--
              <el-col :md ="4" :lg="6" :xl="4">
              <el-card class="answer_wrapper hidden-sm-and-down" shadow="never">
                <div class="error_text">
                  <span>先修课未读，因此离散数学不能学</span>
                </div>
              </el-card>
              </el-col>
              -->
            <el-col :md ="2" :lg="2" :xl="4">
              <div>
                &nbsp;
              </div>
            </el-col>
          </el-row>
        </transition>
      </div>
      <div v-if="three" class="thirdTable son_table">
        <transition name="el-zoom-in-top" enter-active-class="animated fadeInLeft">
          <el-row :gutter="24">
            <el-col :md ="2" :lg="2" :xl="4">
              <div>
                &nbsp;
              </div>
            </el-col>
            <el-col :md ="20" :lg="20" :xl="12">
              <el-card class="answer_wrapper" shadow="never">
                <el-table class="second_table"
                          :data="answerTableData3"
                          style="width: 100%"
                          height="400">
                  <el-table-column
                    fixed
                    prop="de"
                    label=""
                    width="120">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="monday"
                    label="星期一"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="tuesday"
                    label="星期二"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="wednesday"
                    label="星期三"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="thursday"
                    label="星期四"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="friday"
                    label="星期五"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="saturday"
                    label="星期六"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="sunday"
                    label="星期天"
                    width="150">
                  </el-table-column>
                </el-table>
              </el-card>
            </el-col>
            <!--
            <el-col :md ="4" :lg="6" :xl="4">
            <el-card class="answer_wrapper hidden-sm-and-down" shadow="never">
              <div class="error_text">
                <span>先修课未读，因此离散数学不能学</span>
              </div>
            </el-card>
            </el-col>
            -->
            <el-col :md ="2" :lg="2" :xl="4">
              <div>
                &nbsp;
              </div>
            </el-col>
          </el-row>
        </transition>
      </div>
      <div v-if="four" class="fourthTable son_table">
        <transition name="el-zoom-in-top" enter-active-class="animated fadeInLeft">
          <el-row :gutter="24">
            <el-col :md ="2" :lg="2" :xl="4">
              <div>
                &nbsp;
              </div>
            </el-col>
            <el-col :md ="20" :lg="20" :xl="12">
              <el-card class="answer_wrapper" shadow="never">
                <el-table class="second_table"
                          :data="answerTableData4"
                          style="width: 100%"
                          height="400">
                  <el-table-column
                    fixed
                    prop="de"
                    label=""
                    width="120">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="monday"
                    label="星期一"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="tuesday"
                    label="星期二"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="wednesday"
                    label="星期三"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="thursday"
                    label="星期四"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="friday"
                    label="星期五"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="saturday"
                    label="星期六"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    prop="sunday"
                    label="星期天"
                    width="150">
                  </el-table-column>
                </el-table>
              </el-card>
            </el-col>
            <!--
            <el-col :md ="4" :lg="6" :xl="4">
            <el-card class="answer_wrapper hidden-sm-and-down" shadow="never">
              <div class="error_text">
                <span>先修课未读，因此离散数学不能学</span>
              </div>
            </el-card>
            </el-col>
            -->
            <el-col :md ="2" :lg="2" :xl="4">
              <div>
                &nbsp;
              </div>
            </el-col>
          </el-row>
        </transition>
      </div>
  </div>
</template>

<script>
import blank from '@/components/Blank.vue'
import {mapState} from 'vuex'
export default {
  name: 'Answer',
  data () {
    return {
      currentDate: new Date()
    }
  },
  computed: {
    isdaytime () {
      return this.$store.state.daytime
    },
    isnighttime () {
      return this.$store.state.nighttime
    },
    ...mapState([
      'answerTableData1',
      'answerTableData2',
      'answerTableData3',
      'answerTableData4',
      'one',
      'two',
      'three',
      'four'])
  },
  components: {
    blank
  },
  methods: {
  }
}
</script>

<style scoped>
  .el-table .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .answer_wrapper{
    position: relative;
    background-color: #ffffff;
    margin-top: 200px;
    height: 400px;
    color: #909399;
  }
  .answer_total_wrapper{
  }

  .son_table{
    margin-top: 25px;
  }

  .answer_image{
    width: 100%;
    height: 100%;
  }
  .error_text{
    height: 300px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
  }
  .answer_image{
    height: 400px;
  }
</style>
