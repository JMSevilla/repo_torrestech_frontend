<template>
    <div>
       <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
          <div class="card-header" style="background: #FFF">
              <h3 class="classcode-headline">All Classes</h3>
          </div>
          <div style="margin: 10px">
             <el-button style="float: right; margin: 20px 0px" class="add-classcode-btn el-icon-plus"> Add New Class</el-button> 
              <el-table
                border
                :cell-style="{padding: '0', height: '40px'}"
                :data="tableData.filter(data => !search || data.batchname.toLowerCase().includes(search.toLowerCase())
                || data.classcode.toLowerCase().includes(search.toLowerCase())
                || data.classname.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%; padding: 20px 0">
                <el-table-column
                sortable
                label="Date"
                prop="date">
                </el-table-column>
                <el-table-column
                label="Batch Name"
                prop="batchname">
                </el-table-column>
                <el-table-column
                label="Class Name"
                prop="classname">
                </el-table-column>
                 <el-table-column
                label="Category"
                prop="classname">
                </el-table-column>
                <el-table-column
                label="Class Code"
                prop="classcode">
                </el-table-column>
                <el-table-column
                width="230"
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="medium"
                    placeholder="Type to search"/>
                </template>
                <template slot-scope="scope" >
                    <el-button
                    size="mini"
                    class="classcode-btn"
                    @click="handleDelete(scope.$index, scope.row)">Edit</el-button>
                    <el-button
                    size="mini"
                    class="classcode-btn"
                    @click="handleDelete(scope.$index, scope.row)">Archive</el-button>
                </template>
                </el-table-column>
              </el-table>
          </div>
       </div>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Classes/classes.css"></style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03 12:01pm',
          batchname: 'Batch 1',
          classname: 'Web Designing',
          classcode: '123qwe',
        }, {
          date: '2016-05-03 12:02pm',
          batchname: 'Batch 2',
          classname: 'Web Development',
          classcode: '456qwe',
        }, {
          date: '2016-05-03 12:03pm',
          batchname: 'Batch 3',
          classname: 'Data Analytics',
          classcode: '789qwe',
        }],
        search: '',
      }
    }
  }
</script>