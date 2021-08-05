<template>
    <div>
        <Nav />
        <b-container fluid="md" class="main_container">
            <!--START BANNER SECTION-->
            <b-row class="banner-container">
                <b-col align-self="center" lg="6" md="12">
                    <center>
                        <img src="@/assets/img/CoursePage/services-computer-programming-v1.png" alt="man sitting with computer" width="100%" height="100%">
                    </center>
                </b-col>
                <b-col align-self="center" lg="6" md="12">
                    <h1>Product Title Here</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                    <div class="enroll-btn">
                        <b-button block variant="primary" size="lg">Enroll now</b-button>
                    </div>
                    <div class="header-btn">
                        <div class="dynamic-btn">
                            <b-button variant="danger" size="lg">Contact Us&nbsp;<i class="fas fa-phone-alt"></i></b-button>
                        </div>
                        <div class="dynamic-btn">
                            <b-button variant="danger" size="lg">Wishlist &nbsp;<i class="far fa-heart"></i></b-button>
                        </div>
                        <!-- <div class="dynamic-btn">
                            <b-button variant="danger" size="lg">Share</b-button>
                        </div> -->
                        
                    </div>
                </b-col>
            </b-row>
            <!--END BANNER SECTION-->
            
            <!--START WHAT YOU WILL LEARN-->
            <b-row>
                <div class="what-you-will-learn-main-container">
                    <h3>What you'll learn</h3>
                    <div class="what-you-will-learn-content">
                        <div>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Curabitur cursus risus ante, nec tempor purus posuere non.</li>
                                <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</li>
                                <li>Sed a tellus mattis, vulputate enim id, finibus nisi.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>In tellus sem, iaculis id ipsum ut, iaculis interdum risus.</li>
                                <li>Mauris molestie, purus et molestie posuere, ex ex ultrices libero, nec pellentesque ex elit vitae dolor.</li>
                                <li>Donec placerat fringilla arcu ut tincidunt.</li>
                                <li>Proin laoreet purus et volutpat finibus. Ut non sodales lectus, at sagittis justo.</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    
            </b-row>
            <!--START WHAT YOU WILL LEARN-->
            

            <!--START THREE SECTION-->
            <b-row>
                <div class="three-section-main-container">
                    <div class="three-section-container">
                        <h3>OUR PARTNERS:</h3>
                        <div class="three-section-content">
                            <i class="far fa-building fa-2x"></i>
                            <a href="#" class="three-section-cta">
                                Dummy Company I
                            </a>
                        </div>
                        <div  class="three-section-content">
                            <i class="far fa-building fa-2x"></i>
                            <a href="#"  class="three-section-cta">
                                Dummy Company II
                            </a>
                        </div>
                    </div>
                    <div class="three-section-container">
                        <h3>FOLLOW US:</h3>
                        <div  class="three-section-content">
                            <i class="fab fa-facebook-square fa-2x"></i>
                            <a href="#"  class="three-section-cta">
                                Facebook
                            </a>
                        </div>
                        <div  class="three-section-content">
                            <i class="fab fa-linkedin-in fa-2x"></i>
                            <a href="#"  class="three-section-cta">
                                LinkedIn
                            </a>
                        </div>
                        <div  class="three-section-content">
                            <i class="fab fa-youtube fa-2x"></i>
                            <a href="#"  class="three-section-cta">
                                Youtube
                            </a>
                        </div>
                    </div>
                    <div class="three-section-container">
                        <h3>GENERAL INFORMATION:</h3>
                        <div  class="three-section-content">
                            <i class="far fa-envelope fa-2x"></i>
                            <a href="mailto:info@testingmail.com"  class="three-section-cta">
                                info@testingmail.com
                            </a>
                        </div>
                        <div  class="three-section-content">
                            <i class="fas fa-sms fa-2x"></i>
                            <a href="tel:+63 912 345 6789"  class="three-section-cta">
                                +63 912 345 6789
                            </a>
                        </div>
                        <div  class="three-section-content">
                            <i class="fas fa-map-marked fa-2x"></i>
                            <a href="#"  class="three-section-cta">
                                Brgy, Molino - Paliparan Rd,<br> Molino IV, Bacoor, 641001 Cavite
                            </a>
                        </div>
                    </div>
                </div>
            </b-row>
            <!--END THREE SECTION-->
                
        </b-container>
        <Footer />
    </div>
</template>

<script>
import Nav from "../navbar/nav";
import Footer from "../footer";
export default {
    components: {
        Nav, Footer
    }
}
</script>


<style scoped>
    .banner-container{
        /* background-color: #BFC9CA; */
        margin: 2% 0;
        width: 100%;
        /* height: 350px; */
        
    }
    /*ENROLL BUTTON*/
    .banner-container .enroll-btn{
        margin: 2% 0;
    }
    .banner-container .enroll-btn .btn-block{
        width: 100%;
    }
    
    /*HEADER BUTTON*/
    .banner-container .header-btn{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .banner-container .header-btn .dynamic-btn{
       margin: 0 1%;
    }


    /*WHAT YOU WILL LEARN*/
    .what-you-will-learn-main-container{
        margin: 2% 0;
    }
    .what-you-will-learn-main-container .what-you-will-learn-content{
        display: flex;
    }

    .what-you-will-learn-main-container .what-you-will-learn-content ul {
        list-style: none;
    }

    .what-you-will-learn-main-container .what-you-will-learn-content ul li:before{
        content: "✓";
        font-size: 22px;
    }




    /*THREE SECTION*/
    .three-section-main-container{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin: 2% 0;
        
    }

    .three-section-main-container .three-section-content{
        display: flex;
        flex: row;
        align-items: center;
        margin: 5% 0;
    }
    .three-section-main-container .three-section-content:hover{
        transition: all 0.2s ease-in-out;
        margin-left: 3%;
    }
    

    

    .three-section-main-container .three-section-content .three-section-cta{
        margin: 0 5%;
    }

    .three-section-main-container .three-section-container a{
        text-decoration: none;
        color: black;
    }



</style>

