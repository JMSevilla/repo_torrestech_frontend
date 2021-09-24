<template>
    <div style="background: #F5F5F5;">
        <div class="container">
            <div class="row mb-5" style="margin-top:9rem;">
                <Vbar/>
            </div>
            <div class="row" >
                <div class="col-md-3 mb-2">
                </div>
                <div class="col-md-3 mb-2">
                    <ED_Card/>
                </div>
                <div class="col-md-3 mb-2">
                    <UAM_Card/>
                </div>
                <div class="col-md-3 mb-2">
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12"></div>
            </div>
        </div>
    </div>
   
</template>
<script>
import Vbar from "@/components/Validationbar"
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