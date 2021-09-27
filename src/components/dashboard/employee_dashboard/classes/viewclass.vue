<template>
    <div>
       <div class="row justify-content-center">
           <div class="col-md">
               <div class="card" style="border-left: 5px solid #0f5298; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)" >
                   <div class="card-body" style="background: #FFF">
                       <div class="row">
                           <div class="col-md-10">
                               <h3>Batch 4 Data Analytics</h3>
                                <div>
                                    <span class="class_code">qWert12</span>
                                </div>
                           </div>
                       
                       <div class="col-md-2">
                            <el-button class="el-icon-back return-btn" @click="onreturnclass()">
                                RETURN TO CLASS
                            </el-button>
                       </div>
                       </div>
                   </div>
                </div>
                <div class="card" style="margin-top: 20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2">
                    <div class="card-body">
                       <el-tabs v-model="activeName" @tab-click="handleClick" style="font-size: 20px" > 
                            <el-tab-pane><span slot="label"><i class="fas fa-users "></i> Students</span>  <StudentTable /></el-tab-pane>
                            <el-tab-pane><span slot="label"><i class="fas fa-file-contract"></i> Quiz</span></el-tab-pane>
                            <el-tab-pane><span slot="label"><i class="fas fa-file"></i> Assignment</span></el-tab-pane>
                            <el-tab-pane><span slot="label"><i class="el-icon-s-data"></i> Progress</span></el-tab-pane>
                            <el-tab-pane><span slot="label"><i class="fas fa-video"></i> Video Library</span></el-tab-pane>
                        </el-tabs>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Classes/classes.css"></style>

<script>
import StudentTable from "@/components/dashboard/employee_dashboard/classes/studentTable"
export default {
    components:{
        StudentTable
    },
    methods:{
        onreturnclass(){
            this.$router.push({name: 'AllClass'}).catch(()=>{})
        }
    }
}
</script>
