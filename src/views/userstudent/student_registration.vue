<template>
    <div>
        <div> <Navigation /> </div>
        <div class="wrapper-stepper p-4"> <Stepper /> </div>
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

<style scoped src="@/assets/styles/Student/signup_page.css"></style>