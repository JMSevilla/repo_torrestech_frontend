<template>
    <div>
          <div class="container py-5" id="content4" style="z-index: -1">
            <div class="row justify-content-center" id="row1">
                <div class="col-md-6 header-column">
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
            <split-carousel :speed="500" :height="400" :item-width="260">
                <split-carousel-item >
                    <el-card shadow="always">
                        <img src="@/assets/img/FrontPage/OSHA.png" alt="OSHA" id="OSHAimg" class="img-fluid">
                        <div>
                            <span class="services-sub-header">OSHA</span>
                            <p class="services-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            @click="navigate_dynamic_page()"
                            class="learnmore-btn"
                            size="medium"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card>
                </split-carousel-item>
                <split-carousel-item>
                    <el-card shadow="always">
                        <img src="@/assets/img/FrontPage/HRServices.png" alt="HRServices" class="img-fluid">
                        <div>
                            <span class="services-sub-header">HR Services</span>
                            <p class="services-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            class="learnmore-btn"
                            size="medium"
                            @click="test()"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                </el-card>
                </split-carousel-item>
                <split-carousel-item>
                    <el-card shadow="always">
                        <img src="@/assets/img/FrontPage/DataAnalysis.png" alt="Data Analysis" class="img-fluid">
                        <div>
                            <span class="services-sub-header">Data Analysis</span>
                            <p class="services-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            class="learnmore-btn"
                            size="medium"
                            @click="test()"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card> 
                </split-carousel-item>
                <split-carousel-item>
                    <el-card shadow="always">
                        <img src="@/assets/img/FrontPage/BusinessManagement.png" alt="Business Management" class="img-fluid">
                        <div>
                            <span class="services-sub-header">Business Management</span>
                            <p class="services-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            class="learnmore-btn"
                            size="medium"
                            @click="test()"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card> 
                </split-carousel-item>
                <split-carousel-item>
                   <el-card shadow="always">
                        <img src="@/assets/img/FrontPage/ComputerProgramming.png" alt="Computer Programming" class="img-fluid">
                        <div>
                            <span class="services-sub-header">Computer Programming</span>
                            <p class="services-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quaerat sapiente sequi fugit rerum, officiis eaque? Optio 
                                cupiditate amet, dolores,
                            </p>
                        </div>
                        <center>
                            <el-button
                            class="learnmore-btn"
                            size="medium"
                            @click="test()"
                            >
                            LEARN MORE
                            </el-button>
                        </center>
                    </el-card> 
                </split-carousel-item>
            </split-carousel>
        </div>
    </div>
</template>

<script>
  import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
  export default {
    components: {
      SplitCarousel,
      SplitCarouselItem
    },

    methods:{
        navigate_dynamic_page(){
            this.$router.push({name: 'CoursePage'}).catch(()=>{});
        },
        test(){
            alert("test lang")
        }
    },
    created() {
        this.windowHeight = window.innerHeight + 'px'
    }
  }
</script>

<style scoped src="@/assets/styles/FrontPage/content4_style.css"></style>