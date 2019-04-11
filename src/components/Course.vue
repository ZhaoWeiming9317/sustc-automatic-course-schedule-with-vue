<!--suppress ALL -->
<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <div class = "search text item">
        <div class="navi">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#606266"
            active-text-color="#ffd04b">
            <el-menu-item index="1">课程总览</el-menu-item>
            <el-menu-item index="2">专业必修</el-menu-item>
            <el-menu-item index="3">专业选修</el-menu-item>
            <el-menu-item index="4">通识必修</el-menu-item>
            <el-menu-item index="5">通识选修</el-menu-item>
          </el-menu>
        </div>
        &nbsp;
        <el-row :gutter="24">

          <el-col :span="16">
          </el-col>
          <!--
          <el-col :span="4">
            <el-checkbox v-model="checkedfull" label="过滤已满"></el-checkbox>
          </el-col>
          <el-col :span="4">
            <el-checkbox v-model="checkedprerequisites" label="过滤先修"></el-checkbox>
          </el-col>
          -->
        </el-row>
        <p>&nbsp;</p>
        <el-table
          :data="courseData"
          style="width: 100%">
          <el-table-column
            prop="course_num"
            label="课程编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="课程名称">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                size="mini"
                placeholder="输入课程模糊搜索"
                v-on:input="getCourse()"
                v-model="searchInput"
              />
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="chooseMustCourse(scope.row)">必选</el-button>
              <el-button
                size="mini"
                @click="chooseOptionCourse(scope.row)">可选</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination style="padding-top: 30px"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="8"
            layout="prev, pager, next, jumper"
            :total="totalItem">
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>

</template>

<script>
import api from '../axios.js'

export default {
  name: 'Course',
  data () {
    return {
      checkedfull: true,
      checkedprerequisites: false,
      offset: 0,
      limit: 8,
      currentPage: 1,
      activeIndex: '1',
      courseData: [],
      searchData: [],
      totalItem: 0,
      searchInput: '',
      currentGroup: 1
    }
  },
  computed: {
    totalCourseData () {
      return this.$store.state.totalCourseData
    },
    totalMandatoryCourseData () {
      return this.$store.state.totalMandatoryData
    },
    totalOptionCourseData () {
      return this.$store.state.totalOptionData
    },
    totalCommonData () {
      return this.$store.state.totalCommonData
    },
    totalCommonOptionData () {
      return this.$store.state.totalCommonOptionData
    }
  },
  mounted () {
    this.currentPage = 1
    this.currentGroup = 1
    this.getInitialCourse()
    this.getInitialMandatoryCourse()
    this.getInitialOptionCourse()
    this.getInitialCommonCourse()
    this.getInitialCommonOptionCourse()
    this.getCourse()
  },
  methods: {
    handleSelect (key, keyPath) {
      this.currentGroup = key
      if (key === '1') {
        this.currentGroup = 1
        this.totalItem = this.totalCourseData.length
      } else if (key === '2') {
        this.currentGroup = 2
        this.totalItem = this.totalMandatoryCourseData.length
      } else if (key === '3') {
        this.currentGroup = 3
        this.totalItem = this.totalOptionCourseData.length
      } else if (key === '4') {
        this.currentGroup = 4
        this.totalItem = this.totalCommonData.length
      } else if (key === '5') {
        this.currentGroup = 5
        this.totalItem = this.totalCommonOptionData.length
      }
      this.getCourse()
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.getCourse()
    },
    getInitialCourse: function () {
      this.$store.state.totalCourseData = []
      api.getTotalCourse().then((response) => {
        let result = response.data.courseData
        result.forEach(item => {
          let IdExp = /^2017/
          let NameExp = /^体育/
          let NameExp2 = /^SUSTech/
          let NameExp3 = /^EAP/
          if (!NameExp.test(item.name) && !NameExp2.test(item.name) && !NameExp3.test(item.name)) {
            if (!IdExp.test(item.id)) {
              const tableItem = {
                course_num: item.course_num,
                name: item.name,
                id: item.id
              }
              this.totalCourseData.push(tableItem)
            }
          }
        })
        this.totalItem = this.totalCourseData.length
        this.getCourse()
      })
    },
    getInitialMandatoryCourse () {
      this.$store.state.totalMandatoryData = []
      api.getTotalMandatory().then((response) => {
        let result = response.data.courseData
        result.forEach(item => {
          let IdExp = /^2017/
          let NameExp = /^体育/
          let NameExp2 = /^SUSTech/
          let NameExp3 = /^EAP/
          if (!NameExp.test(item.name) && !NameExp2.test(item.name) && !NameExp3.test(item.name)) {
            if (!IdExp.test(item.id)) {
              const tableItem = {
                course_num: item.course_num,
                name: item.name,
                id: item.id
              }
              this.totalMandatoryCourseData.push(tableItem)
            }
          }
        })
      })
    },
    getInitialOptionCourse () {
      this.$store.state.totalOptionData = []
      api.getTotalOption().then((response) => {
        let result = response.data.courseData
        result.forEach(item => {
          let IdExp = /^2017/
          let NameExp = /^体育/
          let NameExp2 = /^SUSTech/
          let NameExp3 = /^EAP/
          if (!NameExp.test(item.name) && !NameExp2.test(item.name) && !NameExp3.test(item.name)) {
            if (!IdExp.test(item.id)) {
              const tableItem = {
                course_num: item.course_num,
                name: item.name,
                id: item.id
              }
              this.totalOptionCourseData.push(tableItem)
            }
          }
        })
      })
    },
    getInitialCommonCourse () {
      this.$store.state.totalCommonData = []
      api.getTotalCommon().then((response) => {
        let result = response.data.courseData
        result.forEach(item => {
          let IdExp = /^2017/
          let NameExp = /^体育/
          let NameExp2 = /^SUSTech/
          let NameExp3 = /^EAP/
          if (!NameExp.test(item.name) && !NameExp2.test(item.name) && !NameExp3.test(item.name)) {
            if (!IdExp.test(item.id)) {
              const tableItem = {
                course_num: item.course_num,
                name: item.name,
                id: item.id
              }
              this.totalCommonData.push(tableItem)
            }
          }
        })
      })
    },
    getInitialCommonOptionCourse () {
      this.$store.state.totalCommonOptionData = []
      api.getTotalCommonOption().then((response) => {
        let result = response.data.courseData
        result.forEach(item => {
          let IdExp = /^2017/
          let NameExp = /^体育/
          let NameExp2 = /^SUSTech/
          let NameExp3 = /^EAP/
          if (!NameExp.test(item.name) && !NameExp2.test(item.name) && !NameExp3.test(item.name)) {
            if (!IdExp.test(item.id)) {
              const tableItem = {
                course_num: item.course_num,
                name: item.name,
                id: item.id
              }
              this.totalCommonOptionData.push(tableItem)
            }
          }
        })
      })
    },
    getCourse: function () {
      this.courseData = []
      this.searchData = []
      let tempCourseData = []
      if (this.currentGroup === 1) {
        tempCourseData = JSON.parse(JSON.stringify(this.totalCourseData))
      } else if (this.currentGroup === 2) {
        tempCourseData = JSON.parse(JSON.stringify(this.totalMandatoryCourseData))
      } else if (this.currentGroup === 3) {
        tempCourseData = JSON.parse(JSON.stringify(this.totalOptionCourseData))
      } else if (this.currentGroup === 4) {
        tempCourseData = JSON.parse(JSON.stringify(this.totalCommonData))
      } else if (this.currentGroup === 5) {
        tempCourseData = JSON.parse(JSON.stringify(this.totalCommonOptionData))
      }
      if (this.searchInput !== '') {
        for (let i = 0; i < tempCourseData.length; i++) {
          let reg = new RegExp(this.searchInput)
          if (reg.test(tempCourseData[i].name) === true) {
            this.searchData.push(tempCourseData[i])
          }
        }
      } else {
        this.searchData = JSON.parse(JSON.stringify(tempCourseData))
      }
      this.totalItem = this.searchData.length
      let result = this.searchData.slice(this.offset, this.offset + this.limit)
      result.forEach(item => {
        console.log(item.name)
        const tableItem = {
          course_num: item.course_num,
          name: item.name,
          id: item.id
        }
        this.courseData.push(tableItem)
      })
    },
    chooseMustCourse: function (row) {
      const listItem = {
        name: row.name,
        id: row.id
      }
      let tempMustChosenCourse = this.$store.state.chosenCourseData
      let tempOptionChosenCourse = this.$store.state.chosenOptionCourseData
      let isDuplicate = 0
      for (let i = 0; i < tempMustChosenCourse.length; i++) {
        if (tempMustChosenCourse[i].name === row.name) {
          this.$message.error('请不要选重复的课哦😉')
          isDuplicate = 1
          break
        }
      }
      if (isDuplicate === 0) {
        for (let i = 0; i < tempOptionChosenCourse.length; i++) {
          if (tempOptionChosenCourse[i].name === row.name) {
            this.$message.error('请不要选重复的课哦😉')
            isDuplicate = 1
            break
          }
        }
      }
      if (isDuplicate === 0) {
        this.$store.state.chosenCourseData.push(listItem)
      }
    },
    chooseOptionCourse: function (row) {
      const listItem = {
        name: row.name,
        id: row.id
      }
      let tempMustChosenCourse = this.$store.state.chosenCourseData
      let tempOptionChosenCourse = this.$store.state.chosenOptionCourseData
      let isDuplicate = 0
      for (let i = 0; i < tempMustChosenCourse.length; i++) {
        if (tempMustChosenCourse[i].name === row.name) {
          this.$message.error('请不要选重复的课哦😉')
          isDuplicate = 1
          break
        }
      }
      if (isDuplicate === 0) {
        for (let i = 0; i < tempOptionChosenCourse.length; i++) {
          if (tempOptionChosenCourse[i].name === row.name) {
            this.$message.error('请不要选重复的课哦😉')
            isDuplicate = 1
            break
          }
        }
      }
      if (isDuplicate === 0) {
        this.$store.state.chosenOptionCourseData.push(listItem)
      }
    }
  } // method stop
}
</script>

<style scoped>
  .search {
    margin-top: 15px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-checkbox {
    display: inline;
  }
  @media screen and (max-width: 500px) {
    .navi{
      font-size: 10px;
    }
    .box-card {
      height: 4000px;
    }
  }
  .box-card {
    height: 750px;
  }
</style>
