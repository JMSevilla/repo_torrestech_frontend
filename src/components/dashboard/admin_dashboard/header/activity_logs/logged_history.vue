<template>
    <div>
        <el-card shadow="always">
          <el-table
            :cell-style="{padding: '0', height: '40px'}"
            :data="tableData.filter(data => !search || data.activity.toLowerCase().includes(search.toLowerCase()) || 
            data.location.toLowerCase().includes(search.toLowerCase()) || 
            data.device.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              sortable
              label="Date"
              prop="date">
            </el-table-column>
            <el-table-column
              label="Activity"
              prop="activity">
            </el-table-column>
            <el-table-column
              label="Location"
              prop="location">
            </el-table-column>
            <el-table-column
              label="Device"
              prop="device">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="medium"
                  placeholder="Type to search"/>
              </template>
              <template slot-scope="scope">
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
          activity: 'Logged in',
          location: 'Batangas abcdefghijklmnopqrstuvwxlyz',
          device: 'Samsung'
        }, {
          date: '2016-05-03 12:01pm',
          activity: 'Logged in',
          location: 'Batangas',
          device: 'Oppo'
        }, {
          date: '2016-05-03 12:01pm',
          activity: 'Logged out',
          location: 'Batangas',
          device: 'Vivo'
        }],
        search: '',
      }
    }
  }
</script>