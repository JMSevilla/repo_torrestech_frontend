<template>
    <div>
        <div class="container py-5">
            <div class="row justify-content-center" id="row1">
                <div class="col-md-6">
                        <h3>Our Services</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Perspiciatis, laudantium, sequi totam nihil cum doloribus 
                        fugit quasi pariatur voluptate ratione quas eaque culpa mollitia 
                        iure dolores officiis aut ab libero,sequi totam nihil cum doloribus 
                        fugit quasi pariatur voluptate ratione quas eaque culpa mollitia 
                        iure dolores officiis aut ab libero.
                    </p>
                </div>      
            </div>
            <div class="row justify-content-center" id="row2">
                <div class="col-md">
                    <el-card shadow="hover" id="OSHA">
                        <img src="@/assets/img/FrontPage/OSHA.png" alt="OSHA" id="OSHAimg" class="img-fluid">
                        <div>
                            <span>OSHA</span>
                            <p >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            id="learnmorebtn"
                            size="medium"
                            @click="navigate_dynamic_page()"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card>
                </div>
                <div class="col-md">
                    <el-card shadow="hover" id="HRServices">
                        <img src="@/assets/img/FrontPage/HRServices.png" alt="HRServices" class="img-fluid">
                        <div>
                            <span>HR Services</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            id="learnmorebtn"
                            size="medium"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card>
                </div>
                <div class="col-md">
                    <el-card shadow="hover" id="DataAnalysis">
                        <img src="@/assets/img/FrontPage/DataAnalysis.png" alt="Data Analysis" class="img-fluid">
                        <div>
                            <span>Data Analysis</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            id="learnmorebtn"
                            size="medium"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card>
                </div>
                <div class="col-md">
                    <el-card shadow="hover" id="BusinessManagement">
                        <img src="@/assets/img/FrontPage/BusinessManagement.png" alt="Business Management" class="img-fluid">
                        <div>
                            <span>Business Management</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            id="learnmorebtn"
                            size="medium"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card>
                </div>
                <div class="col-md">
                    <el-card shadow="hover" id="ComputerProgramming">
                       <center><img src="@/assets/img/FrontPage/ComputerProgramming.png" alt="Computer Programming" class="img-fluid"></center>
                        <div>
                            <center> <span>Computer Programming</span> </center>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            id="learnmorebtn"
                            size="medium"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/FrontPage/content4_style.css"></style>

<script>
export default {
    methods:{
        navigate_dynamic_page(){
         this.$router.push({name: 'CoursePage'}).catch(()=>{});
    }
    }
    
}
</script>