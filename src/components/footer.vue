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
                            Creating Positive Work Environment with the guide of our enthusiastic professionals.
                        </p>
                    </div>
                    <div class="col-md-2">
                            <ul class="list-unstyled">
                            <li>
                                <a href="#" >Learn More</a>
                            </li>
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
                        <span>National Highway, Calamba, 4027</span> <br>
                        <span><a href="mailto:cldtorrestechnology@gmail.com">cldtorrestechnology@gmail.com </a></span> <br>
                        <span><a href="tel:09178753242"> 09178753242</a></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid sub-footer">
            <div class="container">
                <div class="row flex-direc">
                    <div class="col-md-9 sub-footer-link-column1">
                        <span class="text-align">Copyright &copy; Torres Technology Center Corporation {{new Date().getFullYear()}}. </span>
                        <span class="text-align"> All rights reserved.</span> 
                        <small class="textdivider"> | </small> 
                        <span @click="PrivacyPolicy()" class="sub-footer-link">  Privacy Policy  </span> 
                        <small> | </small> 
                        <span @click="TermsAndConditions()" class="sub-footer-link">Terms and Conditions</span> 
                    </div>
                    <div class="col-md-3 sub-footer-link-column2">
                        <span class="sub-footer-link" @click="ReportABug()">Having issue with the site? Report a bug now.</span>
                    </div>
                </div>
            </div>
        </div>
  
    </div>
</template>


<style scoped src="@/assets/styles/footer.css"></style>

<script>
export default {
    methods: {
        TermsAndConditions(){
            this.$router.push({name: 'TermsAndConditions'}).catch(()=>{});
        },
        PrivacyPolicy(){
            this.$router.push({name: 'PrivacyPolicy'}).catch(()=>{});
        },
        ReportABug(){
            this.$router.push({name: 'ReportABug'}).catch(()=>{});
        }
    }
}
</script>

