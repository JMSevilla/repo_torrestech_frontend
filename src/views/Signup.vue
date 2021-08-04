<template>
    <div>
        <div>
            <Navbar />
        </div>
        <div class="wrapper py-5" style="background: #f5f7f8">
            <SignupPage />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/navbar/nav"
import SignupPage from "@/components/Signup/signup_page"
import Footer from "@/components/footer"
export default {
    components:{
        Navbar, SignupPage, Footer
    }
}
</script>