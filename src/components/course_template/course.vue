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


<style scoped src="@/assets/styles/CoursePage/course_template.css"></style>

