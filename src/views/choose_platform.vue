<template>
    <div id="bg">
        <div class="Vbar">
            <Vbar/>
        </div>
        <div class="row" style="margin-top:9rem; margin-left:5%; margin-right:5%;">
            <div class="col-xl-6">
                <UAM_Card/>
            </div>
            <div class="col-xl-6">
                <ED_Card/>
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

<style scoped>

#bg{
    background: #F5F5F5;
}

</style>