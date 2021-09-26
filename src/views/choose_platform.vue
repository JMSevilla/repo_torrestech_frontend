<template>
    <div style="background: #F5F5F5;">
        <div class="container" style="background: #F5F5F5; margin-top:9rem; ">
            <div class="row mb-5 pt-2 justify-content-md-center">
                <div class="col-md-10">
                    <Vbar/>
                </div>
            </div>
            <div class="row justify-content-md-center" >
                <div class="col-md-3 mb-2">
                    <ED_Card/>
                </div>
                <div class="col-md-3 mb-2">
                    <UAM_Card/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vbar from "@/components/Cards/Validationbar"
import ED_Card from "@/components/Cards/employee_dashboard"
import UAM_Card from "@/components/Cards/user_access_management"
export default {
    components: {
        ED_Card,
        UAM_Card,
        Vbar
    },
    created() {
        document.querySelector("html").classList.add("someClass");
        },
    destroyed() {
        document.querySelector("html").classList.remove("someClass");
        }  
    
}
</script>
<style>
 .someClass {
   background: #F5F5F5;
 }
</style>
