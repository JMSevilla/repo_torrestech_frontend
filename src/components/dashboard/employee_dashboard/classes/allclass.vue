<template>
    <div>
        <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
            <div class="card-header" style="background: #FFF">
              <h3 class="classcode-headline">All Classes</h3>
            </div>
            <div class="row justify-content-center m-5">
                <div class="col-md">
                    <el-card shadow="always" :body-style="{ padding: '0px' }">
                        <div class="row">
                            <div class="col-md-6" style="border-right: 1px solid #DFDFDF; text-align: center;">
                                <h6 class="sub-title">Quiz</h6>
                                <div style="margin-bottom: 10px">
                                    <el-link class="submission-link" :underline="false">10 </el-link>
                                    <div class="submission-text">Submissions</div>
                                </div>
                            </div>
                            <div class="col-md-6" style="text-align: center">
                                <h6 class="sub-title">Assignment</h6>
                                <div>
                                    <el-link class="submission-link" :underline="false">10 </el-link>
                                    <div class="submission-text">Submissions</div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center" style="background: #E5F1FB; padding: 0px">
                            <div class="col-md">
                                <h6 class="classname-title">Batch 4 Data Analytics</h6>
                                <div class="class-code">
                                    <span>qWerty123</span>
                                </div>
                                <p style="margin: 20px">
                                    Lorem ipsum, dolor sit amet 
                                    consectetur adipisicing elit. 
                                    Error eaque optio odio excepturi quis, 
                                    veritatis corporis quia voluptates nobis exercitationem, 
                                    rem esse minima in iste cumque, quas quae! Accusamus, doloribus.
                                </p>
                                <div style="margin: 0px 20px  20px 20px">
                                    <el-button class="class-btn">EDIT</el-button>
                                    <el-button class="class-btn" style="float: right">ARCHIVE</el-button>
                                </div>
                            </div>
                            
                        </div>
                        
                       
                        <div>
                            <!-- <h6 class="sub-title">Active Students</h6>   -->
                            <center> <el-link style="color: #2d4059; font-weight: bold; margin: 10px" :underline="false">10 Students</el-link> </center>
                        </div>
                    </el-card>
                </div>
                <div class="col-md">
                    <el-card shadow="always">
                        <h3>
                            fdfkajfjd
                        </h3>
                    </el-card>
                </div>
                <div class="col-md">
                    <el-card shadow="always">
                        <h3>
                            fdfkajfjd
                        </h3>
                    </el-card>
                </div>
                <!-- <div class="col-md">
                    <el-card shadow="always">
                        <h3>
                            fdfkajfjd
                        </h3>
                    </el-card>
                </div> -->
            </div>
            <div class="card-footer p-3"  style="background: #FFF;">
                <!-- <div class="block"> -->
                    <el-pagination
                        style="float: right"
                        layout="prev, pager, next"
                        :total="200">
                    </el-pagination>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Classes/classes.css"></style>