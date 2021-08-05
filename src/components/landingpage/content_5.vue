<template>
    <div>
        <div class="container-fluid"> 
           <div class="row">
                <div class="col-md-8" id="mapouter"> 
                    <div class="gmap_canvas">
                        <iframe 
                            class="gmap_iframe" 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0" 
                            src="https://maps.google.com/maps?width=1000&amp;height=1000&amp;hl=en&amp;q=torres technology center corporation&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </div>
               <div class="col-md-4" id="column2">
                   <div class="headcontainer">
                        <h3 id="texthead">How To Reach Us</h3>
                        <div style="" id="textsub">
                            <i id="icons" class="el-icon-location-outline"></i> 
                            <span >National Highway, Calamba, 4027</span>
                        </div>  
                        <div id="textsub">
                            <i id="icons" class="el-icon-message"></i>
                            <span><a href="mailto:cldtorrestechnology@gmail.com">cldtorrestechnology@gmail.com </a></span>
                        </div>
                        <div id="textsub">
                          <b-icon icon="telephone" id="telephone"></b-icon>
                          <span><a href="tel:09178753242"> 09178753242</a></span>
                        </div>
                        
                    </div>

                    <hr>

                    <div class="headcontainer">
                        <h3 id="texthead">Office Hours</h3>
                        <p id="textsub">Monday - Sunday : 8AM - 5PM</p>
                    </div>
               </div>
           </div>
        </div>
    </div>
</template>


<style scoped src="@/assets/styles/FrontPage/content5_style.css"></style>

