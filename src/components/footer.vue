<template>
    <div>
        <div class="container-fluid" id="container1">
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
                        <ul class="list-unstyled">
                        <li>
                            <i class="fab fa-facebook-f" id="fbicon" style="margin-right: 10px"></i>
                            <a href="#">Facebook</a>
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

        <div class="container-fluid" id="container2">
            <span>Copyright &copy; Torres Technology Center Corporation {{new Date().getFullYear()}}.
                 All rights reserved. | <span @click="PrivacyPolicy()" style="margin:0 5px 0 5px; cursor: pointer">  Privacy Policy  </span> | <a class="hover" @click="TermsAndConditions()">Terms and Conditions</a>
            </span>
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
        }
    }
}
</script>

