<template>
    <div>
        <div class="carouselDisplay">
            <el-carousel :interval="3000"  type="card" height="410px">
                <div class="row justify-content-center" id="row2">
                    <div class="col-md">
                        <el-carousel-item  class="carouselCenter">
                            <img src="@/assets/img/FrontPage/OSHA.png" alt="OSHA" id="OSHAimg" class="img-fluid">
                            <div style="padding: 0px 30px">
                                <span>OSHA</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                    cupiditate amet, dolores,
                                </p>
                            </div>
                            <center>
                                <el-button
                                @click="navigate_dynamic_page()"
                                id="learnmorebtn"
                                size="medium"
                                >
                                LEARN MORE
                                </el-button>
                            </center>
                        </el-carousel-item>
                    </div>
                    <div class="col-md">
                        <el-carousel-item class="carouselCenter">
                            <img src="@/assets/img/FrontPage/HRServices.png" alt="HRServices" class="img-fluid">
                            <div style="padding: 0px 30px">
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
                        </el-carousel-item>
                    </div>
                    <div class="col-md">
                        <el-carousel-item class="carouselCenter">
                            <img src="@/assets/img/FrontPage/DataAnalysis.png" alt="Data Analysis" class="img-fluid">
                            <div style="padding: 0px 30px">
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
                        </el-carousel-item>
                    </div>
                    <div class="col-md">
                        <el-carousel-item class="carouselCenter">
                            <img src="@/assets/img/FrontPage/BusinessManagement.png" alt="Business Management" class="img-fluid">
                            <div style="padding: 0px 30px">
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
                        </el-carousel-item>
                    </div>
                    <div class="col-md">
                        <el-carousel-item style="padding: 15px 0px" class="carouselCenter">
                            <center><img src="@/assets/img/FrontPage/ComputerProgramming.png" alt="Computer Programming" class="img-fluid"></center>
                            <div style="padding: 0px 30px">
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
                        </el-carousel-item>
                    </div>
                </div>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navigate_dynamic_page: Function
    }
}
</script>

<style scoped src="@/assets/styles/FrontPage/content4_style.css"></style>