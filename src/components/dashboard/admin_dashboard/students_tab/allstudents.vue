<template>
    <div>
        <div>
            <div class="card">
                <div class="card-header mb-3" style="background: #fff">
                  <h3 style="color: #2d4059; font-weight: bold">All Students</h3>
                </div>
                <div class="card-body">
                    <el-table :cell-style="{padding: '0', height: '40px'}"
                    :data="tableData.filter(data => !search || data.firstname.toLowerCase().includes(search.toLowerCase()) || data.lastname.toLowerCase().includes(search.toLowerCase()) || data.age.toLowerCase().includes(search.toLowerCase()) || data.status.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%; padding: 20px 0"
                    border>
                    <el-table-column
                      label="#"
                      type="index"
                      width="50">
                    </el-table-column>
                    <el-table-column
                      prop="profile"
                      label="PROFILE">
                      <i class="el-icon-user-solid" style="color: #f5f7f8; font-size: 15px; background: #7f7f7f; padding: 6px; border-radius: 50%"></i>
                    </el-table-column>
                    <el-table-column
                      prop="firstname"
                      label="FIRST NAME">
                    </el-table-column>
                    <el-table-column
                        label="LAST NAME"
                        prop="lastname">
                        </el-table-column>
                    <el-table-column
                      prop="age"
                      label="AGE">
                    </el-table-column>
                      <el-table-column
                      prop="status"
                      label="STATUS">
                    </el-table-column>
                    <el-table-column
                      width="280">
                      <template slot="header" slot-scope="scope">
                            <el-input
                            v-model="search"
                            size="medium"
                            placeholder="Type to search"/>
                        </template>
                        <template slot-scope="scope">
                        <div style="display: flex; justify-content: center">
                              <el-button style="width: 50%"
                              size="mini" class="btnactions"
                              @click="viewStudent()"
                              >View</el-button>
                                <el-button style="width: 50%"
                              size="mini" class="btnactions"
                              @click="btnArchive(scope.row.userID)"
                              >Archive</el-button>
                              
                        </div>
                          <!-- </center> -->
                        </template>
                      
                    </el-table-column>
                  </el-table>
                  <el-pagination style="margin-top: 20px; float: right;"
                    background
                    layout="prev, pager, next"
                    :total="100">
                </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      btnArchive: Function,
      tableData: Array,
      viewStudent: Function,
      search: String
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>

<style scoped src="@/assets/styles/Administrator/students/studemployee.css"></style>