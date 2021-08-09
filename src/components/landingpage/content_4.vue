<template>
    <div>
        <div class="container py-5" id="content4">
            <div class="row justify-content-center" id="row1">
                <div class="col-md-6">
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
            <div>
                <content4a />
            </div>
            <div>
                <content4b />
            </div>
            <div> 
                <content4c />
            </div>
        </div>
    </div>
</template>

<script>
import content4a from "./content_4a"
import content4b from "./content_4b"
import content4c from "./content_4c"
export default {
    components:{
        content4a, content4b, content4c
    },
    methods:{
        navigate_dynamic_page(){
         this.$router.push({name: 'CoursePage'}).catch(()=>{});
    }
}
</script>

<style scoped src="@/assets/styles/FrontPage/content4_style.css"></style>
