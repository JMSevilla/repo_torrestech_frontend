<template>
    <div>
        <el-card shadow="always">
          <el-table
            :data="tableData.filter(data => !search || data.activity.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              width="180"
              sortable
              label="Date"
              prop="date">
            </el-table-column>
            <el-table-column
              label="Activity"
              prop="activity">
            </el-table-column>
            <el-table-column
              align="center"
              width="250">
              <template slot="header">
                <el-input
                  v-model="search"
                  size="medium"
                  placeholder="Type to search"/>
              </template>
              <template slot-scope="scope">
                <el-button
                size="mini"
                class="activity-btn"
                @click="handleDelete(scope.$index, scope.row)">Restore</el-button>
                <el-button
                  size="mini"
                  class="activity-btn"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
    </div>
</template>

<style scoped src="@/assets/styles/Administrator/Activity_Logs/activity_logs.css"></style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03 12:01pm',
          activity: 'Admin delete a record in Training',
        }, {
          date: '2016-05-03 12:01pm',
          activity: 'Admin delete a record in Training',
        }, {
          date: '2016-05-03 12:01pm',
          activity: 'Admin delete a record in Training',
        }, {
          date: '2016-05-03 12:01pm',
          activity: 'Admin delete a record in Training',
        }],
        search: '',
      }
    }
  }
</script>