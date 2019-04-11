<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <el-table
        :data="chosenConditionData"
        style="width: 100%">
        <el-table-column
          prop="condition"
          size="Medium"
          label="已选条件"
          style="width: 100%">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="60">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
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
  name: 'ChosenCondition',
  methods: {
    deleteRow (index, rows) {
      this.chosenConditionData.splice(index, 1)
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'chosenConditionData'
    ])
  }
}
</script>

<style scoped>
  .chosen_course_div {
    padding-top: 10px;
  }
  .el-table-column {
    height: 60px;
    color: #606266;
  }
  .el-button {
    color: #909399;
  }
</style>
