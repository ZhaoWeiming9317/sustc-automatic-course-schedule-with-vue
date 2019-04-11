<template>
  <div class="condition">
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
            <el-menu-item index="1">条件总览</el-menu-item>
          </el-menu>
        </div>
        <div class="table_condition">
          <el-row :gutter="24">
          </el-row>
          <p>&nbsp;</p>
          <el-table
            :data="conditionData"
            style="width: 100%;">
            <el-table-column
              prop="condition"
              label="条件名称"
              width="250">
            </el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  size="mini"
                  placeholder="输入条件模糊搜索"
                  v-on:input="getCondition()"
                  v-model="searchInput"></el-input>
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="chooseCondition(scope.row)">选择</el-button>
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
      </div>
    </el-card>
  </div>
</template>

<script>
import api from '../axios.js'
export default {
  name: 'Condition',
  data () {
    return {
      activeIndex: '1',
      conditionData: [],
      searchData: [],
      offset: 0,
      limit: 8,
      currentPage: 1,
      totalItem: 0,
      searchInput: ''
    }
  },
  computed: {
    totalConditionData () {
      return this.$store.state.totalConditionData
    }
  },
  mounted () {
    this.currentPage = 1
    this.getInitialCondition()
    this.getCondition()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.getCondition()
    },
    chooseCondition: function (row) {
      const listItem = {
        condition: row.condition,
        type: row.type
      }
      let tempChosenCondition = this.$store.state.chosenConditionData
      let isDuplicate = 0
      if (tempChosenCondition.length === 2) {
        this.$message.error('条件适当就好 可不要贪杯哦')
        isDuplicate = 1
      }
      if (tempChosenCondition.length === 1 && tempChosenCondition[0].type === 6) {
        this.$message.error('要当学霸就不要空时间咯')
        isDuplicate = 1
      }
      if (tempChosenCondition.length === 1 && row.type === 6) {
        this.$message.error('要当学霸就不要空时间咯')
        isDuplicate = 1
      }
      for (let i = 0; i < tempChosenCondition.length; i++) {
        if (tempChosenCondition[i].condition === row.condition) {
          this.$message.error('请不要选重复的条件哦😉')
          isDuplicate = 1
          break
        }
      }
      if (isDuplicate === 0) {
        this.$store.state.chosenConditionData.push(listItem)
      }
    },
    getInitialCondition: function () {
      this.$store.state.totalConditionData = []
      api.getTotalCondition().then((response) => {
        let result = response.data.conditionData
        result.forEach(item => {
          const tableItem = {
            condition: item.condition,
            type: item.type
          }
          this.totalConditionData.push(tableItem)
        })
        this.totalItem = this.totalConditionData.length
        this.getCondition()
      })
    },
    getCondition: function () {
      this.conditionData = []
      this.searchData = []
      if (this.searchInput !== '') {
        for (let i = 0; i < this.totalConditionData.length; i++) {
          let reg = new RegExp(this.searchInput)
          if (reg.test(this.totalConditionData[i].condition) === true) {
            this.searchData.push(this.totalConditionData[i])
          }
        }
      } else {
        this.searchData = JSON.parse(JSON.stringify(this.totalConditionData))
      }
      this.totalItem = this.searchData.length
      let result = this.searchData.slice(this.offset, this.offset + this.limit)
      result.forEach(item => {
        const tableItem = {
          condition: item.condition,
          type: item.type
        }
        this.conditionData.push(tableItem)
      })
    }
  }
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
  }
</style>
