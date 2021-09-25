<template>
    <div>
        <el-table
          :data="tableData.filter(data => !search || data.firstname.toLowerCase().includes(search.toLowerCase())
          || data.lastname.toLowerCase().includes(search.toLowerCase())
          || data.emailadd.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column
            width="180"
            sortable
            label="Date"
            prop="date">
          </el-table-column>
          <el-table-column
            label="Firstname"
            prop="firstname">
          </el-table-column>
          <el-table-column
            label="Lastname"
            prop="lastname">
          </el-table-column>
          <el-table-column
            label="Email Address"
            prop="emailadd">
          </el-table-column>
          <el-table-column
            align="center"
            width="330">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="medium"
                placeholder="Type to search"/>
            </template>
            <template>
              <el-button
              size="medium"
              class="student-action-btn"
              >Remove from Class</el-button>
              <el-button
                size="medium"
                  class="student-action-btn"
                >Reset Password</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Classes/classes.css"></style>


<script>
  export default {
    data() {
      return {
        tableData: [{
         date: '2016-05-03 12:01pm',
         firstname: 'TestFN',
         lastname: 'TestLN',
         emailadd: 'test@email.com'
        }, {
          date: '2016-05-03 12:02pm',
          firstname: 'Test1FN',
          lastname: 'Test1LN',
          emailadd: 'test1@email.com'
        }, {
          date: '2016-05-03 12:04pm',
          firstname: 'Test2FN',
          lastname: 'Test2LN',
          emailadd: 'test2@email.com'
        }, {
          date: '2016-05-03 12:55pm',
          firstname: 'Test3FN',
          lastname: 'Test3LN',
          emailadd: 'test3@email.com'
        }],
        search: '',
      }
    }
  }
</script>