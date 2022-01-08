<template>
    <div>
        <div class="container-fluid main-footer">
             <div class="container">
                <div class="row">
                    <div class="col-md-3" id="firstcolumn">
                        <a href="">
                            <img src="@/assets/img/FrontPage/TorresLogoWhite.png" alt="FooterLogo" id="FooterLogo">
                        </a>
                        <p id="parag">
                            <!-- {{footerArray[0].footerDescription}} -->
                        </p>
                    </div>
                    <div class="col-md-2">
                            <ul class="list-unstyled">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="list-unstyled social-media-link">
                            <li>
                                <i class="fab fa-facebook-f" id="fbicon" style="margin-right: 14px"></i>
                                <a href="https://www.facebook.com/TorresTechnologyCenterCorporation">Facebook</a>
                            </li>
                            <li>
                                <img src="@/assets/img/FrontPage/youtube.svg" class="img-fluid" id="yticon" alt="Youtube">
                                <a href="#">Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3" id="location">
                        <!-- <span>{{footerArray[0].footerAddress}}</span> <br> -->
                        <span><a href="mailto:cldtorrestechnology@gmail.com">cldtorrestechnology@gmail.com </a></span> <br>
                        <span><a href="tel:09178753242"> 09178753242</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Subfooter />
        </div>     
    </div>
</template>


<style scoped src="@/assets/styles/footer.css"></style>

<script>
import Subfooter from "./subfooter"
import {mapGetters} from "vuex"
export default {
    components: {
        Subfooter
    },
    data() {
        return {
            footerArray: []
        }
    },
    // computed: {
    //     ...mapGetters({
    //         claims_footer_content : 'claims_footer_content'
    //     })
    // },
    created() {
        // this.reloadFooterContent();
    },
    methods : {
        // reloadFooterContent: function() {
        //     this.$store.dispatch(`actions_footer_get`)
        //     .then(() => {
        //         this.footerArray = this.claims_footer_content
                
        //     })
        // }
    }
}
</script>


