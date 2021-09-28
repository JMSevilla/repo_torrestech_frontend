<template>
    <div>
        <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
            <div class="mt-3" style="margin:10px">
                <div class="row" style="margin-bottom:20px">
                    <div class="col-sm-6">
                         <div class="row" style="margin-left:10px">
                            <h3 style="margin-right:10px">Categories</h3> 
                            <!--<span style="margin-right:10px"><el-input placeholder="Search for ..." v-model="input" size="medium"></el-input></span>
                            <el-dropdown>
                                <el-button class="btnall" size="mini">
                                    FILTER<i class="el-icon-caret-bottom el-icon--right"></i>
                                </el-button>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>Filter 1</el-dropdown-item>
                                    <el-dropdown-item>Filter 2</el-dropdown-item>
                                    <el-dropdown-item>Filter 3</el-dropdown-item>
                                    <el-dropdown-item>Filter 4</el-dropdown-item>
                                    <el-dropdown-item>Filter 5</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown> -->
                         </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row" style="float:right;margin-right:90px">
                            <el-button slot="reference" @click="open" class="btnadd" icon="el-icon-plus" size="med" style="width:100%">ADD CATEGORY</el-button>
                        </div>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <el-tabs type="border-card">
                            <el-tab-pane label="Platform">
                                  <el-table
                                    :cell-style="{padding: '0', height: '40px'}"
                                    :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()) || data.abbrev.toLowerCase().includes(search.toLowerCase()) || data.access.toLowerCase().includes(search.toLowerCase()))"
                                    style="width: 100%"
                                    height="250">
                                    <el-table-column
                                        prop="title"
                                        label="TITLE"
                                        width="300">
                                    </el-table-column>
                                    <el-table-column
                                        prop="abbrev"
                                        label="ABBREVIATION"
                                        width="200">
                                    </el-table-column>
                                    <el-table-column
                                        prop="access"
                                        label="ACCESS"
                                        width="100">
                                    </el-table-column>
                                    <!--<el-table-column
                                        prop="actions"
                                        label="Actions"
                                        width="180">
                                            <el-button class="btntable" @click="handleClick" size="mini">Detail</el-button>
                                            <el-button  size="mini">Edit</el-button>
                                    </el-table-column>-->
                                    <el-table-column
                                        width="200">
                                    </el-table-column>
                                    <el-table-column
                                        width="250">
                                     <template slot="header" slot-scope="scope">
                                        <el-input
                                        v-model="search"
                                        size="medium"
                                        placeholder="Search for ..."/>
                                    </template>
                                    <template slot-scope="scope">
                                    <div style=" justify-content: center">
                                        <div class="row">
                                            <div class="col-md-6">
                                            <el-button 
                                                size="small" class="btnactions" style="width:100%"
                                                @click="delConfirm(scope.row.program)"
                                                >Edit</el-button>
                                        </div>
                                        <div class="col-md-6">
                                            <el-button 
                                                size="small" class="btnactions" style="width:100%"
                                                @click="delConfirm(scope.row.program)"
                                                >Archive</el-button>
                                        </div>
                                        </div>
                                    </div>
                                    </template>
                                    </el-table-column>
                                  </el-table>
                            </el-tab-pane>
                            <el-tab-pane label="Tab 2">This tab is empty</el-tab-pane>
                            <el-tab-pane label="Tab 3">This tab is empty</el-tab-pane>
                            <el-tab-pane label="Tab 4">This tab is empty</el-tab-pane>
                        </el-tabs>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Administrator/Training/manage_training.css"></style>

 <script>
    export default {
      data() {
        return {
            tableData: [{
            title: 'User Data Management', 
            abbrev: 'UDM', 
            access: '1'
          }, {
            title: 'Employment Data', 
            abbrev: 'ED', 
            access: '2'
          }, {
            title: 'User Data', 
            abbrev: 'UD', 
            access: '1'
          }, {
            title: 'Data Archiving', 
            abbrev: 'DA', 
            access: '2'
          }],
          search: '',
        }
      }
    }
  </script>