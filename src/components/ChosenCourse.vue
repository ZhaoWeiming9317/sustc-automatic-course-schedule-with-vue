<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <el-table
        :data="chosenCourseData"
         style="width: 100%;">
        <el-table-column
          prop="name"
          label="已选必选课程"
          size="Medium"
          style="width: 100%">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="60">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, scope.row)"
              type="text"
              size="small"
              >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card"  style="margin-top: 20px" shadow="hover">
      <el-table
        :data="chosenOptionCourseData"
        style="width: 100%;">
        <el-table-column
          prop="name"
          label="已选可选课程"
          size="Medium"
          style="width: 100%">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="60">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow2(scope.$index, scope.row)"
              type="text"
              size="small"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  methods: {
    deleteRow (index, rows) {
      this.chosenCourseData.splice(index, 1)
    },
    deleteRow2 (index, rows) {
      this.chosenOptionCourseData.splice(index, 1)
    }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'chosenCourseData',
      'chosenOptionCourseData'
    ])
  }
}
</script>

<style scoped>
  .el-table-column {
    height: 60px;
    color: #606266;
  }
  .el-button {
    color: #909399;
  }
</style>
