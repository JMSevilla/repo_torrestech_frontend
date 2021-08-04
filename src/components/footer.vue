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
                        <span>cldtorrestechnology@gmail.com</span> <br>
                        <span>09178753242</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="container2">
            <span>Copyright &copy; Torres Technology Center Corporation {{new Date().getFullYear()}}.
                 All rights reserved. | Privacy Policy | <a class="hover" @click="TermsAndConditions()">Terms and Conditions</a>
            </span>
        </div>
  
    </div>
</template>

<style scoped>
   
#container1{
    background-color: #2D4059 ;
    padding-top: 20px;
    padding-bottom: 10px

}

#firstcolumn{
    margin-right: 5%; 
}
#FooterLogo{
    height: 60px;
}
#parag{
    margin-top: 10px;
    color:#f0f0f0;
    font-size: 1.171875vw;
}
.list-unstyled a, #fbicon, #location{
    color:#f0f0f0;
    text-decoration: none;
    line-height: 180%;
    font-size: 1.171875vw;
}

.list-unstyled a:hover{
    text-decoration: underline;
    line-height: 180%;
}

#container2{
    background-color: #628395;
    padding: 10px;
    color:#f0f0f0;  
}
#container2 span{
    color:#f0f0f0; 
    display: flex;
    justify-content: center;
    font-size: 1.015625vw;
}


@media screen and (max-width: 800px) { 
#firstcolumn{
    margin-right: 5%; 
}
#FooterLogo{
    height: 40px;
}
}
a:hover {
    color: rgb(129, 83, 235);
}
a {
    cursor: pointer;
    color: #f0f0f0;
    text-decoration: none;
}

</style>

<script>
export default {
    methods: {
        TermsAndConditions(){
            this.$router.push({name: 'TermsAndConditions'}).catch(()=>{});
        }
    }
}
</script>
