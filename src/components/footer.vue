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
        <div>
            <Subfooter />
        </div>
       
  
    </div>
</template>


<style scoped src="@/assets/styles/footer.css"></style>

<script>
import Subfooter from "./subfooter"
export default {
    components: {
        Subfooter
    }
}
</script>


