<template>
    <div>
        <div style="background: #fff">
            <!-- <Header /> -->
        </div>
        <div class="p-4">
          <div class="card">
                <div class="card-header mb-3" style="background: #fff">
                  <h3 style="color: #2d4059; font-weight: bold">{{CardName}}</h3>
                </div>
                <div class="card-body">
                    <el-table :cell-style="{padding: '0', height: '40px'}"
                    :data="trainingPagedData"
                    :key="0"
                     v-loading="listLoading"
                    style="width: 100%; padding: 20px 0"
                    border>
                    <el-table-column
                      label="#"
                      type="index"
                      width="50">
                    </el-table-column>
                    <el-table-column
                      prop="trainingName"
                      label="TRAINING">
                    </el-table-column>
                    <el-table-column
                        label="CATEGORY"
                        prop="categories">
                        </el-table-column>
                      <!-- <el-table-column
                      prop="status"
                      label="STATUS">
                    </el-table-column> -->
                    <el-table-column
                      width="280">
                     <template slot="header" slot-scope="scope">
                            <el-input
                            v-model="searchable"
                            size="medium"
                            placeholder="Type to search"/>
                        </template>
                        <template slot-scope="scope">
                        <div style="display: flex; justify-content: center">
                              <el-button style="width: 50%"
                              size="mini" class="btnactions"
                              
                              >View</el-button>
                                <el-button style="width: 50%"
                              size="mini" class="btnactions"
                              
                              >Archive</el-button>
                              
                        </div>
                          <!-- </center> -->
                        </template>
                      
                    </el-table-column>
                  </el-table>
                  <el-pagination style="margin-top: 20px; float: right;"
                    background
                    layout="prev, pager, next"
                    :page-size="pageSize" :total="trainingData.length" @current-change="setPage">
                </el-pagination>
                </div>
            </div>
        </div>  
        
    </div>
</template>

<script>
import Table from "@/components/Table/Table"
import {mapGetters} from 'vuex'
export default {
    components: {
        Table
    },
    data(){ 
        return{
           
        searchable : '',
        trainingData: [],
        pageSize: 5, page: 1, listLoading: true
        }
    },
    created(){
        this.getTrainingTest()``
    },
    computed: {
        ...mapGetters({
            getalltraining : 'claims_response_all_trainings'
        }),
        trainingPagedData(){
            if(this.searchable){
                return this.trainingData.filter((i) => {
                    return this.searchable.toLowerCase().split(' ').every(v => i.trainingName.toString().toLowerCase().includes(v))
                })
            }else{
                return this.trainingData.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
            }
        }
    },
    methods : {
        getTrainingTest(){
            this.$store.dispatch(`getTraining`).then(res => {
                this.$store.commit(`List_Of_Trainings`, {
                    response : res.data
                })
                this.trainingData = this.getalltraining.response
                this.listLoading = false
            })
        },
        setPage(val){
        this.page = val
      },
    }
}
</script>