<template>
    <div>
        <div>
            <div class="card">
                <div class="card-header mb-3" style="background: #fff">
                  <h3 style="color: #2d4059; font-weight: bold">Class Code</h3>
                </div>
                <div class="card-body">
                    <el-table :cell-style="{padding: '0', height: '40px'}"
                    :data="tableData.filter(data => !search || data.code.toLowerCase().includes(search.toLowerCase()) || data.training.toLowerCase().includes(search.toLowerCase()) || data.owner.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%; padding: 20px 0"
                    border>
                    <el-table-column
                        label="#"
                        type="index"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="code"
                        label="CLASS CODE">
                    </el-table-column>
                    <el-table-column
                      prop="training"
                      label="TRAINING">
                    </el-table-column>
                    <el-table-column
                      prop="owner"
                      label="Owner">
                    </el-table-column>
                    <el-table-column
                      width="230">
                        <template slot="header" slot-scope="scope">
                            <el-input
                            v-model="search"
                            size="medium"
                            placeholder="Type to search"/>
                        </template>
                        <template slot-scope="scope">
                        <div>
                            <el-button 
                            style="width: 100%"
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
                    :total="10">
                </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      tableData: Array,
      btnArchive: Function
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