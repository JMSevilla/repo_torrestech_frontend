<template>
    <div>
       <div class="row justify-content-center">
           <div class="col-md">
               <div class="card" style="border-left: 7px solid #0f5298; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)" >
                   <div class="card-header" style="background: #FFF">
                       <h3 class="classname">Batch 1 Data Analytics</h3>
                       <div class="class-code">
                           <span>Qwery1</span>
                       </div>
                   </div>
                </div>
                <div class="card" style="margin-top: 20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2">
                    <div class="card-body">
                       <el-tabs v-model="activeName" @tab-click="handleClick"> 
                            <el-tab-pane><span slot="label"><i class="fas fa-users"></i> Students</span></el-tab-pane>
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
<style scoped src ="@/assets/styles/Employee_Dashboard/view_class/classview.css"></style>