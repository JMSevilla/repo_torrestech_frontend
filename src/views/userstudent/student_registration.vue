<template>
    <div>
        <div> <Navigation /> </div>
        <div class="wrapper p-4" style="background: #f5f7f8"> <Stepper /> </div>
        <div> <Footer /> </div>
    </div>
</template>

<script>
import Navigation from "@/components/navbar/nav";
import Footer from "@/components/footer"
import Stepper from "@/components/student/signup/signup_page"
export default {
    components: {
    Navigation, Footer, Stepper
    }
    
}
</script>