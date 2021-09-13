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
                    
                    <div id="outer">
                        <a href="#">
                            <div class="button_slide1 slide_left">ENROLL NOW</div>
                        </a>
                    </div>
                    <div class="header-btn">
                        <div class="dynamic-btn" style="flex-grow: 4.5">
                            <a href="#">
                            <b-button variant="danger" size="lg" block>Contact Us&nbsp;<i class="fas fa-phone-alt"></i></b-button>
                            </a>
                        </div>
                        <div class="dynamic-btn btn-or" style="flex-grow: 1">
                            - OR -
                        </div>
                        <div class="dynamic-btn" style="flex-grow: 4.5">
                            <a href="#">
                                <b-button variant="danger" size="lg" block>Wishlist &nbsp;<i class="far fa-heart"></i></b-button>
                            </a>
                        </div>
                        
                        
                    </div>
                </b-col>
            </b-row>
            <!--END BANNER SECTION-->
            
            <!--START WHAT YOU WILL LEARN-->
            <b-row>
                <div class="what-you-will-learn-main-container">
                    <h2>What you'll learn</h2>
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
            <!--END WHAT YOU WILL LEARN-->

            <!--START RELATED PRODUCTS-->
            <b-row>
                <div class="related-products-main-container">
                    <h2>Other Trainings</h2>
                    
                </div>
            </b-row>
            <!--END RELATED PRODUCTS-->      

        </b-container>
        <RelatedProductTest />
        <Footer />
    </div>
</template>

<script>
import Nav from "@/components/navbar/nav";
import Footer from "@/components/footer";
import RelatedProducts from "@/components/course_template/relatedproducts";
import RelatedProductTest from "@/components/course_template/related_product_test"
export default {
    components: {
        Nav, RelatedProductTest, Footer
    }
}

</script>


<style scoped src="@/assets/styles/CoursePage/course_template.css"></style>

