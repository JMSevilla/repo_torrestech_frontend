<template>
    <div>
        <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
            <div class="card-header" style="background: #FFF">
              <h3 class="classcode-headline">All Classes</h3>
            </div>
            <div class="row justify-content-center m-5">
                <div class="col-md">
                    <el-card shadow="always" :body-style="{ padding: '0px' }">
                        <div class="row justify-content-center" style="background: #E5F1FB">
                            <div class="col-md">
                                <h6 class="classname-title">Batch 4 Data Analytics</h6>
                                <div class="class-code">
                                    <span>qWerty123</span>
                                </div>
                                <p style="margin: 15px">
                                    Lorem ipsum, dolor sit amet 
                                    consectetur adipisicing elit. 
                                    Error eaque optio odio excepturi quis, 
                                    veritatis corporis quia voluptates nobis exercitationem, 
                                    rem esse minima in iste cumque, quas quae! Accusamus, doloribus.
                                </p>
                            </div>
                        </div>
                        <div class="row"  style="border: 1px solid #DFDFDF">
                            <div class="col-md" style="border-right: 1px solid #DFDFDF">
                                <h6 class="sub-title">Quiz Submitted</h6>
                                <el-link class="submission-link" :underline="false">10 </el-link>
                            </div>
                            <div class="col-md" style="padding: 0px; margin: 0px; border-right: 1px solid #DFDFDF">
                                <h6 class="sub-title">Assignment Submitted</h6>
                                <el-link class="submission-link" :underline="false">10</el-link>
                            </div>
                            <div class="col-md" style="padding: 0px; margin: 0px">
                                <h6 class="sub-title">Active Students</h6>  
                                <el-link class="submission-link" :underline="false">10</el-link>
                            </div>
                        </div>
                        <div>
                            <el-button class="class-btn">EDIT</el-button>
                            <el-button class="class-btn">ARCHIVE</el-button>
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
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Classes/classes.css"></style>